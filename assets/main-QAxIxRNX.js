const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-BZii7Dlg.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as w,F as si,r as Ae,j as Mt,l as Pi,m as yt,h as di,n as gn,o as mn,T as Yt,k as xn,p as yn,b as bn}from"./formation-links-BZii7Dlg.js";const hn="/";function Li(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,d,l,c,u;const o=n==="login";e.innerHTML=`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((d=document.getElementById("login-password"))==null||d.addEventListener("keydown",g=>{var m;g.key==="Enter"&&((m=document.getElementById("login-btn"))==null||m.click())}),(l=document.getElementById("login-btn"))==null||l.addEventListener("click",async()=>{const g=document.getElementById("login-email").value.trim(),m=document.getElementById("login-password").value,f=document.getElementById("login-error");if(f.textContent="",!g||!m){f.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:x}=await w.auth.signInWithPassword({email:g,password:m});if(p.textContent="⚽ Se connecter",p.disabled=!1,x){f.textContent=x.message.includes("Invalid")?"Email ou mot de passe incorrect.":x.message;return}window.location.reload()})):((c=document.getElementById("reg-confirm"))==null||c.addEventListener("keydown",g=>{var m;g.key==="Enter"&&((m=document.getElementById("reg-btn"))==null||m.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const g=document.getElementById("reg-email").value.trim(),m=document.getElementById("reg-password").value,f=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!g||!m||!f){p.textContent="Remplissez tous les champs.";return}if(m.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(m!==f){p.textContent="Les mots de passe ne correspondent pas.";return}const x=document.getElementById("reg-btn");x.textContent="⏳ Création…",x.disabled=!0;const{error:b}=await w.auth.signUp({email:g,password:m});if(x.textContent="🚀 Créer mon compte",x.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const h=document.getElementById("login-email");h&&(h.value=g)},50)}))};a()}function vn(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function s(){var f;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),u=((f=document.getElementById("setup-club"))==null?void 0:f.value)||"MW",g=u.trim().split(" ").filter(Boolean),m=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():u.slice(0,2).toUpperCase();l&&(l.style.background=r,l.style.borderColor=o),c&&(c.textContent=m,c.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",l=>{r=l.target.value,document.getElementById("swatch2").style.background=r,s()});function d(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await w.from("users").select("id").eq("pseudo",l).maybeSingle();if(u){c.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await w.from("users").select("id").eq("club_name",l).maybeSingle();if(u){c.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),g=document.getElementById("step3-finish");u.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:m}=await w.from("users").insert({id:t.user.id,pseudo:l,club_name:c,club_color1:o,club_color2:r,credits:1e4});if(m)throw m;await wn(t.user.id),await a(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function wn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await w.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const _n="modulepreload",kn=function(e){return"/"+e},Ti={},Ri=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(d=>{if(d=kn(d),d in Ti)return;Ti[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":_n,l||(u.as="script"),u.crossOrigin="",u.href=d,s&&u.setAttribute("nonce",s),document.head.appendChild(u),l)return new Promise((g,m)=>{u.addEventListener("load",g),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Et="#1A6B3C",Lt="#cc2222",$n="#D4A017",zi="#888";async function En(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Ni(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Tn(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Oi(i,n,null,t))}async function Ni(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await w.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await w.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const l=document.getElementById("friends-list");if(!l)return;if(r){console.error("[Friends] Erreur:",r),l.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const c=(o||[]).map(m=>m.requester_id===a?m.addressee_id:m.requester_id);let u={};if(c.length){const{data:m}=await w.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(m||[]).forEach(f=>{u[f.id]=f})}const g=(o||[]).map(m=>({friendshipId:m.id,friend:u[m.requester_id===a?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!g.length){l.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}l.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${g.length} ami${g.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${g.map(({friendshipId:m,friend:f})=>Ln(f,m)).join("")}
    </div>`,l.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>zn(e,m.dataset.stats,m.dataset.friendName))}),l.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.friendId,p=m.dataset.friendName;console.log("[Friends] clic match",{fid:f,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:f,friendName:p}):t("Erreur navigation","error")})})}function Ln(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Et,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${$n};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Tn(e,t){const i=li();i.innerHTML=`
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
    ${ci()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await w.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await w.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const c=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=c;return}const{error:l}=await w.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(l){a.textContent="Erreur : "+l.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Oi(e,t,i=null,n={}){const a=e.user.id,{data:o}=await w.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(g=>g.requester_id);let s={};if(r.length){const{data:g}=await w.from("users").select("id, pseudo, club_name").in("id",r);(g||[]).forEach(m=>{s[m.id]=m})}const d=(o||[]).map(g=>({...g,requester:s[g.requester_id]||{pseudo:"?"}})),l=li(),c=d||[];l.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(g=>{var m,f,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=g.requester)==null?void 0:m.club_name)||((f=g.requester)==null?void 0:f.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=g.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${g.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Et};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${g.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ci()}`,document.body.appendChild(l);const u=()=>l.remove();l.querySelector("#pending-close").addEventListener("click",u),l.addEventListener("click",g=>{g.target===l&&u()}),l.querySelectorAll("[data-accept]").forEach(g=>{g.addEventListener("click",async()=>{const{error:m}=await w.from("friendships").update({status:"accepted"}).eq("id",g.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}g.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ni(e,t,n),i&&i()})}),l.querySelectorAll("[data-decline]").forEach(g=>{g.addEventListener("click",async()=>{await w.from("friendships").delete().eq("id",g.dataset.decline),g.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function zn(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await w.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",l=s||{},c=r?l.wins_p1||0:l.wins_p2||0,u=r?l.wins_p2||0:l.wins_p1||0,g=l.draws||0,m=r?l.goals_p1||0:l.goals_p2||0,f=r?l.goals_p2||0:l.goals_p1||0,p=r?l.gc_used_p1||0:l.gc_used_p2||0,x=r?l.gc_used_p2||0:l.gc_used_p1||0,b=l.matches_total||0,h=(k,y,C,E=Et,F=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${y}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${k}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${F}">${C}</div>
    </div>`,v=li();v.innerHTML=`
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
        ${h("Victoires",c,u)}
        ${h("Nuls",g,g,zi,zi)}
        ${h("Défaites",u,c)}
        ${h("Buts marqués",m,f)}
        ${h("Buts encaissés",f,m,Lt,Et)}
        ${h("GC utilisés ⚡",p,x,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ci()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",k=>{k.target===v&&v.remove()})}function li(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ci(){return`
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
    </style>`}const In="2026.07.14-1951";async function Ii(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
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
  </div>`,requestAnimationFrame(()=>{var u,g,m,f,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,d=((g=document.querySelector(".top-nav"))==null?void 0:g.offsetHeight)||56,l=((m=document.querySelector(".bottom-nav"))==null?void 0:m.offsetHeight)||60;if(e.querySelector(".home-inner")){const x=s-d-l;e.querySelector(".home-dark").style.minHeight=x+"px"}if(window.innerWidth<768){const x=((f=e.querySelector(".home-hero"))==null?void 0:f.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const h=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,v=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((N,te)=>{var ne;return N+(((ne=document.getElementById(te))==null?void 0:ne.offsetHeight)||0)},0),k=12*5,y=s-d-l-x-h-v-k-32,C=Math.max(80,Math.round(y*.28)),E=Math.max(160,Math.round(y*.72)),F=Math.floor((E-10)/2);b&&(b.style.minHeight=b.style.maxHeight=C+"px"),e.querySelectorAll(".play-tile").forEach(N=>{N.style.minHeight=N.style.height=F+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(N=>{N.style.height=Math.round(F*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){Cn(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()}),Ui(t,n),Sn(t,n,i),Hi(t,n,i))}async function Hi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await w.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(d=>d.home_id===a?d.away_id:d.home_id).filter(Boolean);let s={};if(r.length){const{data:d}=await w.from("users").select("id, pseudo, club_name").in("id",r);(d||[]).forEach(l=>{s[l.id]=l.club_name||l.pseudo})}n.innerHTML=o.map(d=>{const l=d.home_id===a?d.away_id:d.home_id,c=s[l]||"Adversaire",u=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${l}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const l=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:c}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Ri(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Go);return{resumePvpMatch:u}},void 0);c(l,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Mn(async()=>{await An(d.dataset.abandon,d.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Hi(e,t,i)})})})}async function An(e,t,i){const{data:n}=await w.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await w.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function Mn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Sn(e,t,i){var s,d,l,c;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await w.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((d=a.inviter)==null?void 0:d.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(l=document.getElementById("match-inv-accept"))==null||l.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await w.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Ui(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await w.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(d=>{var l;return((l=d.requester)==null?void 0:l.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Oi(e,t,()=>Ui(e,t)))}function Cn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(a=>`<div class="action-card" data-mode="${a.mode}" style="cursor:pointer"><div class="icon">${a.icon}</div><div class="label">${a.label}</div><div class="sub">${a.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}const Me={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function qe(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ai=["ATT","MIL","DEF","GK"];function Ki(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,d=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,l=Ai.indexOf(o._line||o.job),c=Ai.indexOf(r._line||r.job),u=Math.abs(l-c)===1;if(!((o._line||o.job)===(r._line||r.job)&&d||s&&u))continue;const f=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;f&&p?t+=2:(f||p)&&(t+=1)}return t}function pi(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job,d=r.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;return o+(Number(s==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+d},0),n=Ki(e);let a=i+n;return t.doubleAttack&&(a*=2),t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function ui(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let d=0;s==="GK"?d=Number(r.note_g)||0:s==="MIL"?d=Number(r.note_m)||0:d=Number(r.note_d)||0;const l=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+d+(r.boost||0)+l},0),n=Ki(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function fi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Vi(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const d=t==="attack"?qe(r,"ATT"):r._line==="GK"?qe(r,"GK"):qe(r,"DEF");return(t==="attack"?qe(s,"ATT"):s._line==="GK"?qe(s,"GK"):qe(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function jn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}function Bn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=qn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,l=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+l))}function qn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const Dn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},jt=["GK","DEF","MIL","ATT"],Fn=["Tous","GK","DEF","MIL","ATT"],Gn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Mi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Pn(e){return e.length?e.reduce((t,i)=>Mi(i)>Mi(t)?i:t,e[0]):e[0]}function Rn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Nn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function On(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Jt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ae(a,{width:140})}
  </div>`}function Si(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ae(e,{width:140})}
  </div>`}async function Hn(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await w.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(s||[]).filter(T=>T.card_type==="player"&&T.player),c=(s||[]).filter(T=>T.card_type==="game_changer"),u=(s||[]).filter(T=>T.card_type==="formation"),g=(s||[]).filter(T=>T.card_type==="stadium"),{data:m}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(m||[]).forEach(T=>{f[T.name]=T});const{data:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),x={};(p||[]).forEach(T=>{x[T.id]=T}),g.forEach(T=>{T.stadium_def&&(x[T.stadium_id]=T.stadium_def)});const b=Object.keys(si),h=Object.keys(Me),v={};l.forEach(T=>{const M=T.player.id;v[M]=(v[M]||0)+1}),new Set(Object.keys(v).map(T=>String(T)));const k=new Set(u.map(T=>T.formation)),y=new Set(c.map(T=>T.gc_type));let C="player",E="Tous",F="",N=!1;function te(){return[...l].sort((T,M)=>{const R=jt.indexOf(T.player.job),H=jt.indexOf(M.player.job);return R!==H?R-H:(T.player.surname_real||"").localeCompare(M.player.surname_real||"")})}function ne(){return[...d||[]].sort((T,M)=>{const R=jt.indexOf(T.job),H=jt.indexOf(M.job);return R!==H?R-H:(T.surname_real||"").localeCompare(M.surname_real||"")})}function ee(){return te().filter(T=>{const M=T.player,R=E==="Tous"||M.job===E,H=!F||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(F);return R&&H})}function q(){return ne().filter(T=>{const M=E==="Tous"||T.job===E,R=!F||`${T.firstname} ${T.surname_real}`.toLowerCase().includes(F);return M&&R})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="player"?"var(--green)":"transparent"};
        color:${C==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="formation"?"var(--green)":"transparent"};
        color:${C==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="stadium"?"#E87722":"transparent"};
        color:${C==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function I(){const T=document.getElementById("col-filters");T&&(C==="player"?(T.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${F}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Fn.map(M=>`
            <button class="filter-btn" data-job="${M}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${M===E?"var(--green)":"var(--gray-200)"};
                background:${M===E?"var(--green)":"#fff"};
                color:${M===E?"#fff":"var(--gray-600)"}">
              ${M}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",M=>{F=M.target.value.toLowerCase(),$()}),e.querySelectorAll(".filter-btn").forEach(M=>{M.addEventListener("click",()=>{E=M.dataset.job,I(),$()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,I(),$()})):(T.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,I(),$()})))}function $(){const T=document.getElementById("col-grid");T&&(C==="player"?ke(T):C==="formation"?K(T):C==="stadium"?V(T):Q(T))}function G(T,M,R,H,U){const j=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!j||!O)return;var Ee=0;function _e(){const we=window.innerWidth>=768,me=document.getElementById("col-big"),Le=document.getElementById("col-grid");we&&me&&(me.style.minHeight="420px",me.style.flex="1 1 auto"),we&&Le&&(Le.style.height=Math.round(310*.76+16)+"px",Le.style.flexShrink="0",Le.style.overflowX="auto",Le.style.overflowY="hidden",Le.style.alignItems="center",Le.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+M(T[Ee])+"</div>";var $e=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");$e&&$e.addEventListener("click",function(){H(T[Ee])}),requestAnimationFrame(function(){var he=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!he||!O)){var Ce=O.clientHeight-8,je=O.clientWidth-24,Fe=he.offsetHeight,_=he.offsetWidth;if(Fe>0&&_>0&&Ce>40){var L=we?2.2:1.6,A=Math.min(Ce/Fe,je/_,L);he.style.transform="scale("+A.toFixed(3)+")",he.style.transformOrigin="top center"}}}),j.innerHTML=T.map(function(he,Ce){var je=Ce===Ee,Fe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(je?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+Fe+'">'+R(he,je)+"</div>"}).join(""),j.querySelectorAll(".col-mini-item").forEach(function(he){he.addEventListener("click",function(){Ee=Number(he.dataset.idx),_e(),he.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function ae(T){var M=window.innerWidth>=768?.76:.54,R;if(!T||T._fake){var H=T?T.player:null;if(!H)return"";R=Si(H)}else R=Jt(T,"");return'<div style="display:inline-block;zoom:'+M+';pointer-events:none;line-height:0">'+R+"</div>"}function pe(T,M,R){M=M||100,R=R||140;var H=Mt[T]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},j=Math.max(3,Math.round(M*.06)),O=Object.entries(H).map(function(_e){var we=_e[0],me=_e[1],Le=we.replace(/\d+$/,""),$e=U[Le]||"#888",he=Math.round(me.x*M),Ce=Math.round(me.y*R);return'<circle cx="'+he+'" cy="'+Ce+'" r="'+j+'" fill="'+$e+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ee=Math.max(1,Math.round(M/50));return'<svg viewBox="0 0 '+M+" "+R+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+M+'" height="'+R+'" fill="#1A6B3C"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(R*.02)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ee+'"/><line x1="0" y1="'+Math.round(R*.5)+'" x2="'+M+'" y2="'+Math.round(R*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ee+'"/><ellipse cx="'+Math.round(M*.5)+'" cy="'+Math.round(R*.5)+'" rx="'+Math.round(M*.18)+'" ry="'+Math.round(R*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ee+'"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(R*.82)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(R*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ee+'"/>'+O+"</svg>"}function le(T,M,R){var H=R>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+R+"</div>":"",U=M?'data-form-id="'+M.id+'"':"",j=T.length>7?14:T.length>5?16:19,O=!!M;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+H+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+j+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+T+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+pe(T,140,220)+"</div></div>"}function se(T,M){var R=window.innerWidth>=768?.76:.54,H=140,U=305,j=Math.round(U*.22),O=U-j,Ee=T.length>7?10:13,_e=pe(T,H,O),we=M?"1.5px solid #2a7a40":"1px solid #ddd",me=M?"":"filter:grayscale(1);opacity:0.45;",Le=M?"#1A6B3C":"#bbb",$e="#fff";return'<div style="display:inline-block;zoom:'+R+';line-height:0;pointer-events:none"><div style="width:'+H+"px;height:"+U+"px;border-radius:6px;border:"+we+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+me+'"><div style="height:'+j+"px;background:"+Le+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ee+"px;font-weight:900;color:"+$e+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(H-4)+'px">'+T+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function ke(T){if(N){const M=q();if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const R=M.map(H=>l.find(U=>U.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});G(R,H=>H._fake?Si(H.player):Jt(H,""),H=>H._fake?ae({player:H.player,id:"x",_fake:!0}):ae(H),H=>{H._fake||Ci(H,l,v,t)})}else{const M=ee();if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const R={};M.forEach(U=>{const j=U.player.id;R[j]||(R[j]=[]),R[j].push(U)});const H=Object.values(R).map(U=>Pn(U));G(H,U=>{const j=v[U.player.id]||1,O=j>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${j}</div>`:"",_e=l.filter(we=>we.player.id===U.player.id&&we.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Jt(U,O+_e)},U=>ae(U),U=>Ci(U,l,v,t))}}function K(T){const M=N?b:[...k];if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const R=M.map(H=>({formation:H,card:u.find(U=>U.formation===H)||null,owned:k.has(H)}));G(R,({formation:H,card:U,owned:j})=>le(H,j?U:null,j?u.filter(O=>O.formation===H).length:0),({formation:H,owned:U})=>se(H,U),({card:H,owned:U})=>{U&&H&&Kn(H,u,t,o)})}function Q(T){const M=Object.keys(f),R=N?M.length?M:h:[...y];if(!R.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=R.map(U=>({type:U,gc:Me[U]||{icon:"⚡",desc:""},def:f[U]||null,owned:y.has(U),card:c.find(j=>j.gc_type===U)||null}));G(H,({type:U,gc:j,def:O,owned:Ee,card:_e})=>{var L;const we=Ee?c.filter(A=>A.gc_type===U).length:0,me=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Le=(O==null?void 0:O.gc_type)==="ultra_game_changer",$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#b06ce0",light_blue:"#00d4ef"},Ce=$e[O==null?void 0:O.color]||$e.purple,je=he[O==null?void 0:O.color]||he.purple,Fe=(O==null?void 0:O.effect)||j.desc||"",_=O!=null&&O.image_url?`/icons/${O.image_url}`:((L=O==null?void 0:O.club)==null?void 0:L.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ee&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${je};background:${Ce};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${je}66;cursor:pointer">
          ${me}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${U.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${U}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Le?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_?`<img src="${_}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${j.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Fe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${U}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${j.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:U,gc:j,def:O,owned:Ee})=>{const _e=window.innerWidth>=768?.76:.54,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},me={purple:"#9b59b6",light_blue:"#00bcd4"},Le=we[O==null?void 0:O.color]||we.purple,$e=me[O==null?void 0:O.color]||me.purple,he=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return Ee?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Le};border:1px solid ${$e};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${U}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${he?`<img src="${he}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${j.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||j.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${j.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${U}</span></div></div>`},({type:U,owned:j,def:O})=>{j&&Un(U,O,o)})}function V(T){const M="#E87722",R="/";if(!g.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const H={};g.forEach(j=>{const O=j.stadium_id||"?";(H[O]=H[O]||[]).push(j)});const U=Object.entries(H).map(([j,O])=>({sid:j,def:x[j]||null,count:O.length,card:O[0]}));G(U,({def:j,count:O})=>{var $e,he;const Ee=(j==null?void 0:j.name)||"?",_e=(($e=j==null?void 0:j.club)==null?void 0:$e.encoded_name)||(j==null?void 0:j.country_code)||"—",we=j!=null&&j.image_url?`${R}icons/${j.image_url}`:((he=j==null?void 0:j.club)==null?void 0:he.logo_url)||(j!=null&&j.country_code?`https://flagsapi.com/${j.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),me=we?`<img src="${we}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Le=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${M},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${M}66">
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
        </div>`},({def:j,count:O})=>{var $e,he;const Ee=window.innerWidth>=768?.76:.54,_e=(j==null?void 0:j.name)||"?",we=(($e=j==null?void 0:j.club)==null?void 0:$e.encoded_name)||(j==null?void 0:j.country_code)||"—",me=j!=null&&j.image_url?`${R}icons/${j.image_url}`:((he=j==null?void 0:j.club)==null?void 0:he.logo_url)||(j!=null&&j.country_code?`https://flagsapi.com/${j.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Le=me?`<img src="${me}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Ee};line-height:0;pointer-events:none">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(T=>{T.addEventListener("click",()=>{C=T.dataset.tab,E="Tous",F="",N=!1,e.querySelectorAll(".col-tab-btn").forEach(M=>{const R=M.dataset.tab===C;M.style.borderBottomColor=R?"var(--green)":"transparent",M.style.color=R?"var(--green)":"var(--gray-600)"}),I(),$()})}),I(),$()}function Un(e,t,i){const n=Me[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,d=r[t==null?void 0:t.color]||r.purple,l=(t==null?void 0:t.name)||e,c=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=1e3;function Kn(e,t,i,n){var f,p,x;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:d}=i,l=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const b=Mt[l]||{},h=si[l]||[],v=290,k=360,y=20;function C(F){const N=b[F];return N?{x:N.x*v,y:N.y*k}:null}let E=`<svg width="${v}" height="${k}" viewBox="0 0 ${v} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[F,N]of h){const te=C(F),ne=C(N);!te||!ne||(E+=`<line x1="${te.x}" y1="${te.y}" x2="${ne.x}" y2="${ne.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const F of Object.keys(b)){const N=C(F);if(!N)continue;const te=F.replace(/\d+/,""),ne=c[te]||"#555";E+=`<circle cx="${N.x}" cy="${N.y}" r="${y}" fill="${ne}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${te}</text>`}return E+="</svg>",E}const g=t.filter(b=>b.formation===l);g.length;const m=!e.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(f=document.getElementById("direct-sell-form-btn"))==null||f.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${Bt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=g.find(v=>!v.is_for_sale)||g[0];if(!b){o("Aucune carte à vendre","error");return}await w.from("market_listings").delete().eq("card_id",b.id),await w.from("transfer_history").delete().eq("card_id",b.id);const{error:h}=await w.from("cards").delete().eq("id",b.id);if(h){o(h.message,"error");return}await w.from("users").update({credits:(a.profile.credits||0)+Bt}).eq("id",a.profile.id),await d(),o(`+${Bt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await w.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(x=document.getElementById("cancel-sell-form-btn"))==null||x.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Ci(e,t,i,n){var ae,pe,le,se,ke;const{state:a,toast:o,openModal:r,closeModal:s,navigate:d,refreshProfile:l}=n,c=e.player,u=t.filter(K=>K.player.id===c.id),g=u.length,m=e.evolution_bonus||0,f=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?m:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?m:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?m:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?m:0)),p=c.rarity||"normal",{data:x}=await w.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",f).gte("note_max",f).order("note_min",{ascending:!1}).limit(1);((ae=x==null?void 0:x[0])==null?void 0:ae.price)??Gn[p];const b=c.rarity!=="legende";On(c);const h=((c.rarity==="pepite"||c.rarity==="papyte")&&e.current_note!=null?e.current_note:Xt(c,c.job))+m,v=c.rarity==="pepite"||c.rarity==="papyte",k=c.job2?(v?Bn(e,Rn(c.job2)):Xt(c,c.job2))+(Xt(c,c.job2)>0?m:0):null;Wt[c.job],c.job2&&Wt[c.job2];const y=Dn[c.rarity]||"#ccc";Nn[c.country_code]||c.country_code;const C=e.evolution_bonus||0,F=h+C,N=k||0,te=N>0?N+C:0,ne=u.map(K=>K.id);let ee={};if(ne.length){const{data:K}=await w.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(K||[]).forEach(Q=>{ee[Q.card_id]||(ee[Q.card_id]=[]),ee[Q.card_id].push(Q)})}const q=K=>{const Q=K.transferred_at?new Date(K.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",V=K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${K.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${K.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Q}</div>
      </div>
    </div>`},I=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${g>1?`(${g})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((K,Q)=>{const V=ee[K.id]||[],T=K.is_for_sale,M=V.length?V[V.length-1]:null,H=(c.rarity==="pepite"||c.rarity==="papyte")&&K.current_note!=null?` (☆${K.current_note})`:"";return`
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
                ${V.map(q).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${F}${c.job2&&N>0?` / ${te}`:""}`:`Note actuelle : ${F}${c.job2&&N>0?` / ${te}`:""}`}
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
      ${Ae({...c,_evolution_bonus:m},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:6px;background:${y}18;border-left:3px solid ${y};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${y};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([K,Q])=>{const V=Wt[K],T=K==="GK"?"#fff":V,M=K===c.job||K===c.job2,R=(Number(Q)||0)+(M&&C>0?C:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${V};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${T};font-family:Arial Black,Arial;line-height:1">${R}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${T}">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${g}</div>
        </div>
      </div>
    </div>
    ${I}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(pe=document.getElementById("close-detail"))==null||pe.addEventListener("click",s);let $=new Set;const G=()=>{const K=$.size,Q=document.getElementById("sell-action-panel");if(!Q)return;Q.style.display=K>0?"block":"none",document.getElementById("sell-selected-count").textContent=K;const V=document.getElementById("evolve-btn");V&&(V.textContent=`⬆️ Évoluer ${K>1?"(+"+K+")":""}`)};document.querySelectorAll(".expl-check").forEach(K=>{K.addEventListener("change",()=>{const Q=K.dataset.id;K.checked?$.add(Q):$.delete(Q);const V=K.closest(".exemplaire-row");V&&(V.style.borderColor=K.checked?"#1A6B3C":"#eee"),G()})}),document.querySelectorAll(".exemplaire-row").forEach(K=>{K.addEventListener("click",Q=>{if(Q.target.closest("button")||Q.target.tagName==="INPUT")return;const V=K.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(K=>{K.addEventListener("click",Q=>{Q.stopPropagation();const V=document.querySelector(`.expl-hist[data-hist="${K.dataset.idx}"]`);V&&(V.style.display=V.style.display==="none"?"flex":"none")})}),(le=document.getElementById("evolve-btn"))==null||le.addEventListener("click",async()=>{if(g<=1)return;const K=[...$];if(!K.length)return;if($.has(e.id)){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",U.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(U),U.querySelector("#err-close").addEventListener("click",()=>U.remove()),U.addEventListener("click",j=>{j.target===U&&U.remove()});return}const Q=K.filter(U=>U!==e.id),V=c.rarity==="legende"?2:1;if((Q.length||1)*V,!(!Q.length&&K.length===1&&K[0]===e.id)){if(!Q.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(U=>{const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",j.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Q.length}</strong> copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}<br>
            📈 Note : <strong>${h+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${h+(e.evolution_bonus||0)+Q.length*V}</strong>
            ${k&&k>0?`<br>📈 Note 2 : <strong>${k+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${k+(e.evolution_bonus||0)+Q.length*V}</strong>`:""}
            ${c.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${V} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(j),j.querySelector("#sac-cancel").addEventListener("click",()=>{j.remove(),U(!1)}),j.querySelector("#sac-ok").addEventListener("click",()=>{j.remove(),U(!0)}),j.addEventListener("click",O=>{O.target===j&&(j.remove(),U(!1))})}))return;if(Q.length){await w.from("market_listings").delete().in("card_id",Q),await w.from("deck_cards").delete().in("card_id",Q),await w.from("transfer_history").delete().in("card_id",Q),await w.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Q);const{error:U}=await w.from("cards").delete().in("id",Q);if(U){o("Erreur suppression : "+U.message,"error");return}}const M=(e.evolution_bonus||0)+Q.length*V,{error:R}=await w.from("cards").update({evolution_bonus:M}).eq("id",e.id);if(R){o("Erreur évolution : "+R.message,"error");return}const H=h+M;o(`⬆️ ${c.firstname} ${c.surname_real} : note ${h+e.evolution_bonus||h} → ${H}${Q.length?` · ${Q.length} copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(se=document.getElementById("market-sell-btn"))==null||se.addEventListener("click",async()=>{var R;const K=[...$];if(!K.length){o("Sélectionne au moins un exemplaire","warning");return}const Q=parseInt((R=document.getElementById("sell-market-price"))==null?void 0:R.value);if(!Q||Q<1){o("Prix invalide","error");return}const{error:V}=await w.from("cards").update({is_for_sale:!0,sale_price:Q}).in("id",K);if(V){o(V.message,"error");return}const T=K.map(H=>({seller_id:a.profile.id,card_id:H,price:Q,status:"active"})),{error:M}=await w.from("market_listings").insert(T);M&&console.warn("[Market] insert listings:",M.message),o(`${K.length} carte${K.length>1?"s":""} mise${K.length>1?"s":""} en vente à ${Q.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(ke=document.getElementById("cancel-sell-btn"))==null||ke.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function ei(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:d}=await w.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(d){a(d.message,"error");return}a("Deck créé !","success"),ji(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>ji(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:d}=await w.from("decks").update({name:s}).eq("id",r.dataset.rename);if(d){a(d.message,"error");return}a("Deck renommé !","success"),ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await w.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),ei(e,t)})})}async function ji(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("*").eq("id",e).single(),{data:r}=await w.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await w.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(r||[]).filter(b=>b.card_type==="player"&&b.player),l=(r||[]).filter(b=>b.card_type==="formation"),c=(s||[]).filter(b=>b.card_type==="stadium"),u=[...new Set(c.map(b=>b.stadium_id).filter(Boolean))];let g={};if(c.forEach(b=>{b.stadium_def&&b.stadium_id&&(g[b.stadium_id]=b.stadium_def)}),u.length&&Object.keys(g).length<u.length){const{data:b}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(b||[]).forEach(h=>{g[h.id]=h})}const m=l.map(b=>b.formation).filter(Boolean),{data:f}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";m.length>0&&!m.includes(p)&&(p=m[0]);const x={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:l,stadiumCards:c,stadDefMap:g,availableFormations:m};(f||[]).forEach(b=>{b.is_starter?x.slots[b.position]=b.card_id:x.subs.includes(b.card_id)||x.subs.push(b.card_id)}),Ze(t,x,i)}function Ze(e,t,i){var f,p;const{navigate:n}=i;Gt[t.formation];const a=Bi(t.formation),o=a.filter(x=>t.slots[x]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),s=(f=t.stadiumCards)==null?void 0:f.find(x=>x.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,l=t.subs.map(x=>t.playerCards.find(b=>b.id===x)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${l.map(x=>{const b={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${Ae({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var h;const x=t.stadDefMap[s.stadium_id],b=((h=x==null?void 0:x.club)==null?void 0:h.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
              ${l.map(x=>{const b={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${Ae({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var h;const x=t.stadDefMap[s.stadium_id],b=((h=x==null?void 0:x.club)==null?void 0:h.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
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
  </div>`;const c=window.innerWidth>=900,u=e.querySelector(".deck-pc-layout"),g=e.querySelector(".deck-mobile-layout");u&&(u.style.display=c?"block":"none"),g&&(g.style.display=c?"none":"block"),Vn(e,t,a,i),e.querySelectorAll("#builder-back").forEach(x=>x.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:x,closeModal:b}=i,h=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(v=>`<div data-forma="${v}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${v===t.formation?"#1A6B3C":"#f0f0f0"};color:${v===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${v===t.formation?"#1A6B3C":"#ddd"}">${v}</div>`).join("")}
    </div>`;x("⚽ Choisir une formation",h),document.querySelectorAll("#modal-body [data-forma]").forEach(v=>{v.addEventListener("click",()=>{t.formation=v.dataset.forma;const k=Bi(t.formation),y={};k.forEach(C=>{t.slots[C]&&(y[C]=t.slots[C])}),t.slots=y,b(),Ze(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(x=>x.addEventListener("click",m)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(x=>x.addEventListener("click",()=>Yn(t,e,i))),e.querySelectorAll("#save-deck").forEach(x=>x.addEventListener("click",()=>Jn(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(x=>{x.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==x.dataset.removeSub),Ze(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(x=>x.addEventListener("click",()=>Xn(t,e,i)))}function Vn(e,t,i,n){var v,k;const a=window.innerWidth>=900,o=e.querySelector(a?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const r=(v=t.stadiumCards)==null?void 0:v.find(y=>y.id===t.stadiumCardId),s=r&&((k=t.stadDefMap)==null?void 0:k[r.stadium_id])||null,d=Mt[t.formation]||{},l=Pi(t.formation)||[],c={};for(const y of i){const C=t.slots[y],E=C?t.playerCards.find(F=>F.id===C):null;E!=null&&E.player?c[y]={...E.player,_evolution_bonus:E.evolution_bonus||0,face:E.player.face||null}:c[y]=null}const u=window.innerWidth>=900,g=u?window.innerWidth-280:window.innerWidth-20,m=u?Math.min(g,860):g,f=Math.round(u?m*.82:m*.85),p=u?84:44;let x="";for(const[y,C]of l){const E=d[y],F=d[C];if(!E||!F)continue;const N=E.x*m,te=Math.round(.03*f+E.y*.85*f),ne=F.x*m,ee=Math.round(.03*f+F.y*.85*f),q=c[y],I=c[C],$=yt(q,I);$==="#ff3333"||$==="#cc2222"?x+=`<line x1="${N.toFixed(1)}" y1="${te.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${$}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(x+=`<line x1="${N.toFixed(1)}" y1="${te.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${$}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,x+=`<line x1="${N.toFixed(1)}" y1="${te.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${$}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const h=Math.round(p*657/507);for(const y of i){const C=d[y];if(!C)continue;const E=c[y],F=C.x*m;C.y*f;const N=Math.round(.03*f+C.y*(.85*f)),te=Math.round(F-p/2),ne=Math.round(N-h/2);if(E){const ee=y.replace(/\d+/,""),q=s&&(s.club_id&&String(E.club_id)===String(s.club_id)||s.country_code&&E.country_code===s.country_code),I=Ae({...E,_evolution_bonus:E._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:ee});b+=`<div style="position:absolute;left:${te}px;top:${ne}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${y}">
        <div style="position:relative">${q?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${I}</div>
      </div>`}else{const ee=y.replace(/\d+/,"");b+=`<div style="position:absolute;left:${te}px;top:${ne}px;width:${p}px;height:${h}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${y}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${ee}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${m}px;height:${f}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${f}">${x}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>Wn(y.dataset.pos,t,e,n))})}function Yn(e,t,i){var r;const{openModal:n,closeModal:a}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,h;const d=e.stadDefMap[s.stadium_id],l=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||null,c=d!=null&&d.image_url?"/icons/"+d.image_url:null,u=e.stadiumCardId===s.id,g=d!=null&&d.country_code&&!l?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,m=(d==null?void 0:d.name)||"Stade",f=m.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=f?f[1].trim():m.slice(0,8),x=((h=f==null?void 0:f[2])==null?void 0:h.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${u?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${c?`<img src="${c}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${l?`<img src="${l}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:g?`<img src="${g}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#ccc"}">${p}</div>
              ${x?`<div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#aaa"}">${x}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,a(),Ze(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,a(),Ze(t,e,i)})})}function Wn(e,t,i,n){var f,p,x,b,h;const{openModal:a,closeModal:o}=n,r=e.replace(/\d+/,""),s=(f=t.stadiumCards)==null?void 0:f.find(v=>v.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,l=t.slots[e],c=l?t.playerCards.find(v=>v.id===l):null;(x=c==null?void 0:c.player)==null||x.id;const u=new Set;Object.entries(t.slots).forEach(([v,k])=>{var C;if(v===e||!k)return;const y=t.playerCards.find(E=>E.id===k);(C=y==null?void 0:y.player)!=null&&C.id&&u.add(y.player.id)}),t.subs.forEach(v=>{var y;const k=t.playerCards.find(C=>C.id===v);(y=k==null?void 0:k.player)!=null&&y.id&&u.add(k.player.id)});const g=new Set,m=t.playerCards.filter(v=>{const k=v.player;return!(k.job===r||k.job2===r)||u.has(k.id)||g.has(k.id)?!1:(g.add(k.id),!0)});m.sort((v,k)=>{const y=v.evolution_bonus||0,C=k.evolution_bonus||0,E=(r==="GK"?v.player.note_g:r==="DEF"?v.player.note_d:r==="MIL"?v.player.note_m:v.player.note_a)+(r===v.player.job||r===v.player.job2?y:0);return(r==="GK"?k.player.note_g:r==="DEF"?k.player.note_d:r==="MIL"?k.player.note_m:k.player.note_a)+(r===k.player.job||r===k.player.job2?C:0)-E}),a(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(v=>{const k={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${Ae(k,{width:100,showStad:!0,stadDef:d,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(h=document.getElementById("remove-player"))==null||h.addEventListener("click",()=>{delete t.slots[e],o(),Ze(i,t,n)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{t.slots[e]=v.dataset.cardId,o(),Ze(i,t,n)})})}function Xn(e,t,i){var c,u,g;const{openModal:n,closeModal:a}=i,o=(c=e.stadiumCards)==null?void 0:c.find(m=>m.id===e.stadiumCardId),r=o&&((u=e.stadDefMap)==null?void 0:u[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(m=>{var x;const f=e.slots[m];if(!f)return;const p=e.playerCards.find(b=>b.id===f);(x=p==null?void 0:p.player)!=null&&x.id&&s.add(p.player.id)}),e.subs.forEach(m=>{var p;const f=e.playerCards.find(x=>x.id===m);(p=f==null?void 0:f.player)!=null&&p.id&&s.add(f.player.id)});const d=new Set,l=e.playerCards.filter(m=>{var f,p,x;return s.has((f=m.player)==null?void 0:f.id)||d.has((p=m.player)==null?void 0:p.id)?!1:(d.add((x=m.player)==null?void 0:x.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+l.map(m=>{const f={...m.player,_evolution_bonus:m.evolution_bonus||0};return`<div class="player-option" data-card-id="${m.id}" style="cursor:pointer">
          ${Ae(f,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(g=document.getElementById("close-sub-selector"))==null||g.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{e.subs.push(m.dataset.cardId),a(),Ze(t,e,i)})})}async function Jn(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(d=>d.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,l],c)=>{s.push({deck_id:e.deckId,card_id:l,position:d,is_starter:!0,slot_order:c})}),e.subs.forEach((d,l)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),s.length>0){const{error:d}=await w.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function Bi(e){const t=Gt[e]||Gt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Yi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await w.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(l=>l.id)),d={};(s||[]).forEach(l=>{d[l.booster_id]=(d[l.booster_id]||0)+1}),a=n.filter(l=>l.max_per_user==null?!0:(d[l.id]||0)<l.max_per_user)}}if(!a.length)return[];const{data:o}=await w.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function Qn(e,t){const{data:i}=await w.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await w.from("booster_claims").insert({user_id:e,booster_id:t})}function Zn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Wi=()=>Object.keys(Mt),eo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function to(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ae({...t,_evolution_bonus:i},{width:140})}function Xi(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function io(e,{state:t,navigate:i,toast:n}){var u,g,m;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Yi((g=t.user)==null?void 0:g.id)).map(Xi)}catch(f){console.warn("Erreur chargement boosters DB, fallback hardcodé",f)}o.length||(o=eo.map(f=>({...f,rates:[],isPub:f.id==="players_pub"})));const r=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(f=>f.data||[]),s=new Set(r.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id)),d=new Set(r.filter(f=>f.card_type==="formation").map(f=>f.formation)),l=new Set(r.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),c={};for(const f of o){if(f.allow_duplicates!==!1||!((m=f.rates)!=null&&m.length))continue;const p=[...new Set((f.rates||[]).map(b=>b.card_type))];let x=!1;for(const b of p)if(b==="stadium"){const{data:h}=await w.from("stadium_definitions").select("id");if((h||[]).some(v=>!s.has(v.id))){x=!0;break}}else if(b==="game_changer"){const{data:h}=await w.from("gc_definitions").select("name").eq("is_active",!0);if((h||[]).some(v=>!l.has(v.name))){x=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:h}=await Ri(async()=>{const{FORMATION_LINKS:v}=await import("./formation-links-BZii7Dlg.js").then(k=>k.q);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(h).some(v=>!d.has(v))){x=!0;break}}else{x=!0;break}x||(c[f.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(f=>{const p=f.cost===0||a>=f.cost,x=c[f.id]===!0;return`<div class="booster-card ${!p||x?"disabled":""}" data-booster="${f.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(f=>{f.addEventListener("click",async()=>{const p=o.find(x=>x.id===f.dataset.booster);if(p){f.style.opacity="0.5",f.style.pointerEvents="none";try{await no(p,{state:t,toast:n,navigate:i,container:e})}catch(x){n(x.message,"error"),f.style.opacity="",f.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(f=>{f.addEventListener("click",p=>{p.stopPropagation();const x=o.find(b=>b.id===f.dataset.boosterId);so(x)})})}async function no(e,{state:t,toast:i,navigate:n,container:a}){var u,g;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await co();const{data:o}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),s=new Set((o||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let d=[],l=null;try{if((u=e.rates)!=null&&u.length)d=await ii(t.profile,e);else{const m=e.type||"player";m==="player"?d=await Ji(t.profile,e.cardCount,e.cost):m==="game_changer"?d=await Qi(t.profile,e.cardCount,e.cost):m==="formation"?d=await Zi(t.profile,e.cost):d=await ii(t.profile,e)}}catch(m){l=m.message||String(m),console.error("[Booster] Erreur:",m)}if(d!=null&&d.length&&e._boosterId&&await Qn(t.user.id,e._boosterId),!(d!=null&&d.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${l||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(g=m.querySelector("#anim-close-err"))==null||g.addEventListener("click",()=>m.remove());return}d.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=r.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=s.has(m.formation))});const{data:c}=await w.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),en(d,e,n)}function oo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ye(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ro(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=6),i.length||(i=e.filter(n=>Ye(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=1&&Ye(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ii(e,t){if(t.cost>0){const{error:g}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(g)throw g}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:g}=await w.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=g||[]}else n=a||[];const r=new Set(n.filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set(n.filter(g=>g.card_type==="formation").map(g=>g.formation)),d=new Set(n.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l=new Set(n.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id).filter(Boolean)),c=new Set,u=[];for(let g=0;g<(t.cardCount||5);g++){const m=Zn(t.rates);if(m){if(m.card_type==="player"){const f=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=m.rarity?f(m.rarity):null;let x=w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(x=x.eq("rarity",p));const{data:b}=await x;let h=b||[];if((m.note_min||m.note_max)&&(h=h.filter(E=>{const F=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!m.note_min||F>=m.note_min)&&(!m.note_max||F<=m.note_max)})),h.length||(m.note_min||m.note_max?(h=b||[],console.warn("[Booster] Aucun joueur avec note",m.note_min,"-",m.note_max,"— fallback rareté uniquement")):h=b||[]),!h.length)continue;let v=h.filter(E=>!c.has(E.id));if(i)v.length||(v=h);else if(v=v.filter(E=>!r.has(E.id)),!v.length)continue;const k=v[Math.floor(Math.random()*v.length)];c.add(k.id);const y=r.has(k.id),{data:C}=await w.from("cards").insert({owner_id:e.id,player_id:k.id,card_type:"player"}).select().single();C&&(u.push({...C,player:k,isDuplicate:y}),w.rpc("record_transfer",{p_card_id:C.id,p_player_id:k.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(m.card_type==="game_changer"){const{data:f}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=f!=null&&f.length?f:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],x=i?p:p.filter(k=>!d.has(k.name));if(!i&&!x.length)continue;const h=x[Math.floor(Math.random()*x.length)].name,{data:v}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:h}).select().single();v&&u.push(v)}else if(m.card_type==="formation"){const f=Wi(),p=i?f:f.filter(v=>!s.has(v));if(!i&&!p.length)continue;const x=p[Math.floor(Math.random()*p.length)],b=s.has(x),{data:h}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:x}).select();h!=null&&h[0]&&u.push({...h[0],isDuplicate:b})}else if(m.card_type==="stadium"){const{data:f,error:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(f!=null&&f.length)){console.warn("[Booster] Aucun stade en DB");continue}const x=i?f:f.filter(k=>!l.has(k.id));if(!i&&!x.length)continue;const b=x[Math.floor(Math.random()*x.length)],{data:h,error:v}=await w.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}h&&u.push({...h,rarity:"normal",_stadiumDef:b})}}}return u}async function Ji(e,t,i){if(i>0){const{error:l}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:n}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let l=0;l<t;l++){const c=l===0&&r?a:l===0?o:n,u=oo(),g=ro(c,u);g&&s.push(g)}r&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await w.from("cards").insert(s.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return(d||[]).forEach((l,c)=>{w.rpc("record_transfer",{p_card_id:l.id,p_player_id:s[c].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((l,c)=>({...d[c],player:l}))}async function Qi(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(ti).map(c=>({name:c,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const c=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null}}),{data:s,error:d}=await w.from("cards").insert(r).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(s||[]).map(c=>{const u=a==null?void 0:a.find(g=>g.name===c.gc_type||g.id===c.gc_definition_id);return{...c,_gcDef:u||null}})}async function Zi(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await w.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(c=>c.formation)),o=Wi(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:d,error:l}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return l&&console.error("[Booster Formation] Erreur insert:",l.message,l),(d||[]).map(c=>({...c,isDuplicate:s}))}function en(e,t,i,n=null){var ee,q;if(!e||e.length===0){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(I),(ee=I.querySelector("#anim-close-err"))==null||ee.addEventListener("click",()=>I.remove());return}e=[...e].sort((I,$)=>{const G=I.player?Ye(I.player):-1;return($.player?Ye($.player):-1)-G});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const l=I=>I.touches&&I.touches[0]?I.touches[0].clientX:I.clientX;function c(I){o||(d=!0,s.style.opacity="1",u(I))}function u(I){if(!d||o)return;const $=r.getBoundingClientRect(),G=l(I)-$.left,ae=Math.max(0,Math.min(1,G/$.width));s.style.width=ae*$.width+"px",ae>=.82&&m()}function g(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function m(){var $;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",($=document.getElementById("cut-flash"))==null||$.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const I=document.getElementById("cut-hint");I&&(I.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}r.addEventListener("pointerdown",c),window.addEventListener("pointermove",u),window.addEventListener("pointerup",g),r.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",g);let f=0,p=!1;const x=new Set;function b(I){f=I,document.getElementById("reveal-phase").style.display="flex",h(),v(I,0),F()}function h(){const I=document.getElementById("card-dots");I&&(I.innerHTML=e.map(($,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),I.querySelectorAll(".card-dot").forEach($=>$.addEventListener("click",()=>y(parseInt($.dataset.i)))))}function v(I,$){var V,T;const G=e[I],ae=document.getElementById("card-counter"),pe=document.getElementById("card-track");ae&&(ae.textContent=`Carte ${I+1} / ${e.length}`);const le=document.getElementById("reveal-btns");le&&(le.style.display=I===e.length-1?"flex":"none");const se=G.card_type==="player"&&((V=G.player)==null?void 0:V.rarity)==="legende",ke=!x.has(I);x.add(I);let K=0;if(G.card_type==="player"&&G.player){const M=G.player,R=M.job||"ATT";K=Number(R==="GK"?M.note_g:R==="DEF"?M.note_d:R==="MIL"?M.note_m:M.note_a)||0}const Q=M=>{pe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${se?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${ao(G)}</div>
          ${G.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const R=document.getElementById("current-card-wrap");$!==0?(R.style.transition="none",R.style.transform=`translateX(${$>0?100:-100}%)`,requestAnimationFrame(()=>{R.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",R.style.transform="translateX(0)"})):R.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),M||se?te():ne(),h()};ke&&(((T=G.player)==null?void 0:T.rarity)==="legende"||K>=8)&&G.card_type==="player"&&G.player?k(G,()=>Q(!0)):Q(!1)}function k(I,$){var we;p=!0;const G=I.player,ae=`https://flagsapi.com/${G.country_code}/flat/64.png`,pe=(we=G.clubs)==null?void 0:we.logo_url,le=G.face?"/"+G.face.replace(/^public\//,"").replace(/^\//,""):null,se=G.job||"ATT",ke=Number(se==="GK"?G.note_g:se==="DEF"?G.note_d:se==="MIL"?G.note_m:G.note_a)||0,K=I.evolution_bonus||0,Q=ke+K,V=G.rarity==="legende",T=Q>=18,M=document.getElementById("walkout-overlay"),R=document.getElementById("walkout-stage");if(!M||!R){p=!1,$();return}let H=null;V&&(H=new Audio("/sounds/Legendary.mp3"),H.volume=.8,H.play().catch(()=>{})),M.style.display="flex";const U=()=>{const me=R.firstElementChild;me&&(me.classList.remove("wo-in"),me.classList.add("wo-out"))},j=1800,O=400;R.innerHTML=`<img class="wo-in" src="${ae}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(U,j),setTimeout(()=>{var me;R.innerHTML=pe?`<img class="wo-in" src="${pe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((me=G.clubs)==null?void 0:me.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},j+O),setTimeout(U,j*2+O),setTimeout(()=>{R.innerHTML=le?`<img class="wo-in" src="${le}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(j+O)*2),setTimeout(U,(j+O)*2+j);const _e=T?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[se]||"#fff";setTimeout(()=>{R.innerHTML=`<div class="wo-in" style="
        font-size:${T?"120px":"90px"};font-weight:900;color:${_e};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${_e}, 0 0 60px ${_e};
        ${T?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${Q}
      </div>`,T&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(j+O)*3),setTimeout(U,(j+O)*3+j),setTimeout(()=>{M.style.display="none",R.innerHTML="",p=!1,H&&!V&&H.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),$()},(j+O)*4)}function y(I){if(p||I<0||I>=e.length||I===f)return;const $=I>f?1:-1;f=I,v(I,$)}function C(){y(f+1)}function E(){y(f-1)}function F(){const I=document.getElementById("card-viewport");if(!I||I._swipeBound)return;I._swipeBound=!0;let $=0,G=0,ae=0,pe=!1;const le=V=>V.touches?V.touches[0].clientX:V.clientX,se=V=>V.touches?V.touches[0].clientY:V.clientY,ke=V=>{pe=!0,$=le(V),G=se(V),ae=0},K=V=>{if(!pe)return;ae=le(V)-$;const T=se(V)-G;if(Math.abs(ae)<Math.abs(T))return;const M=document.getElementById("current-card-wrap");M&&(M.style.transition="none",M.style.transform=`translateX(${ae*.6}px) rotate(${ae*.02}deg)`)},Q=()=>{if(!pe)return;pe=!1;const V=document.getElementById("current-card-wrap"),T=55;ae<=-T&&f<e.length-1?C():ae>=T&&f>0?E():V&&(V.style.transition="transform .2s ease",V.style.transform="translateX(0)")};I.addEventListener("pointerdown",ke),I.addEventListener("pointermove",K),I.addEventListener("pointerup",Q),I.addEventListener("pointercancel",Q),I.addEventListener("touchstart",ke,{passive:!0}),I.addEventListener("touchmove",K,{passive:!0}),I.addEventListener("touchend",Q),I.addEventListener("click",V=>{if(Math.abs(ae)>8)return;const T=I.getBoundingClientRect();V.clientX-T.left>T.width/2?C():E()})}let N=null;function te(){const I=document.getElementById("fireworks-canvas");if(!I)return;I.width=window.innerWidth,I.height=window.innerHeight;const $=I.getContext("2d"),G=[];function ae(){const le=Math.random()*I.width,se=Math.random()*I.height*.6,ke=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],K=ke[Math.floor(Math.random()*ke.length)];for(let Q=0;Q<60;Q++){const V=Math.PI*2/60*Q,T=2+Math.random()*5;G.push({x:le,y:se,vx:Math.cos(V)*T,vy:Math.sin(V)*T,alpha:1,color:K,size:2+Math.random()*3})}}ae(),N=setInterval(ae,600);function pe(){if(document.getElementById("fireworks-canvas")){$.clearRect(0,0,I.width,I.height);for(let le=G.length-1;le>=0;le--){const se=G[le];if(se.x+=se.vx,se.y+=se.vy+.08,se.vy*=.98,se.alpha-=.018,se.alpha<=0){G.splice(le,1);continue}$.globalAlpha=se.alpha,$.fillStyle=se.color,$.beginPath(),$.arc(se.x,se.y,se.size,0,Math.PI*2),$.fill()}$.globalAlpha=1,(N!==null||G.length>0)&&requestAnimationFrame(pe)}}pe()}function ne(){N!==null&&(clearInterval(N),N=null);const I=document.getElementById("fireworks-canvas");I&&I.getContext("2d").clearRect(0,0,I.width,I.height)}if(n){const I=document.getElementById("reveal-btns");I&&(I.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(q=document.getElementById("reveal-next"))==null||q.addEventListener("click",()=>{ne(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ne(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ne(),a.remove(),i("boosters")})}function ao(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return to(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[o==null?void 0:o.color]||s.purple,c=d[o==null?void 0:o.color]||d.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",g=(o==null?void 0:o.effect)||((t=ti[e.gc_type])==null?void 0:t.desc)||"",m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=((i=ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
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
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function po(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var g,m;const{data:o}=await w.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((g=t.profile)==null?void 0:g.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await w.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Yi()).find(x=>(x.name||"").toLowerCase().includes("new player"));p&&(s=Xi(p))}catch(f){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',f)}const d=r.length;let l=0;e.innerHTML=`
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
  </div>`;const c=async()=>{await w.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var h;if(l>=d||!r.length){await w.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const f=r[0],{data:p}=await w.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let x=[];try{if(f.type==="formation")x=await Zi(t.profile,0);else if(f.type==="game_changer")x=await Qi(t.profile,f.count||3,0);else if(s&&((h=s.rates)!=null&&h.length)){const v={...s,cost:0,cardCount:f.count||s.cardCount||5};x=await ii(t.profile,v),f.guaranteeGK&&!t.profile.first_booster_opened&&(x.some(y=>y.player&&y.player.job==="GK")||await uo(t.profile,x),await w.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else x=await Ji(t.profile,f.count||5,0)}catch(v){n(v.message||"Erreur ouverture booster","error");return}r.shift(),l++,await c();const b=f.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:f.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${l}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};en(x,b,i,()=>{u()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>u())}async function uo(e,t){try{const{data:i}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await w.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},fo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,i,n,a){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",a)}function Tt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",a=e.face.replace(/^public\//,"").replace(/^\//,"");return n+a}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ni(e,t){var o,r;const i=e.player,n=e.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&a>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&a>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&a>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&a>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function zt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(a=>{Array.isArray(a)&&a.forEach(o=>{const r=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(r||s)&&(o.stadiumBonus=!0)})}),e}function Pt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(a=>{if(!a)return;const o=i&&String(a.club_id)===String(i),r=n&&String(a.country_code)===String(n);(o||r)&&(a.stadiumBonus=!0)}),e}function xt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function tn(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Rt(e,t){const i=mt[t]||mt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=e.filter(l=>l.position&&l.position.replace(/\d+$/,"")===r).sort((l,c)=>parseInt(l.position.replace(/\D+/g,""),10)-parseInt(c.position.replace(/\D+/g,""),10)).map(l=>({...l,_line:r})),d=xt(s.length);s.forEach((l,c)=>{l._col=d[c]}),n[r]=s}return n}const o=[...e];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let l=0;l<i[r];l++){let c=o.findIndex(u=>u.job===r);if(c===-1&&(c=o.findIndex(u=>u.job2===r)),c===-1&&(c=0),o[c]){const u={...o[c],_line:r};s.push(u),o.splice(c,1)}}const d=xt(s.length);s.forEach((l,c)=>{l._col=d[c]}),n[r]=s}return n}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function go(e,t,i){const a=new Set,o=t.filter(c=>{const u=c.gc_type||c.id;return a.has(u)?!1:(a.add(u),!0)});let r=[];function s(c,u){const g=c._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},f={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[g==null?void 0:g.color]||m.purple,x=f[g==null?void 0:g.color]||f.purple;return`<div class="gc-select-card" data-id="${c.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||c.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||c.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=c=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(c)};function l(){var u,g,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const c=r.length>0;e.innerHTML=`
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
        <button id="gc-launch" ${c?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${c?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${c?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${c?"pointer":"default"};box-shadow:${c?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(f=>{f.addEventListener("click",()=>{const p=f.dataset.id,x=o.find(h=>h.id===p);if(!x)return;const b=r.findIndex(h=>h.gc_type===x.gc_type);b>-1?r.splice(b,1):r.length<3&&r.push(x),l()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{c&&d(r)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>d([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{r.length&&(r=[],l())})}l()}function mo(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function xo(e,t,i){const{state:n,navigate:a}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=o.map(g=>g.id),{data:s}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),d=[...new Set((s||[]).filter(g=>{var m,f;return((m=g.card)==null?void 0:m.card_type)==="stadium"&&((f=g.card)==null?void 0:f.stadium_id)}).map(g=>g.card.stadium_id))],l={};if(d.length){const{data:g}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(g||[]).forEach(m=>{l[m.id]=m}),(s||[]).forEach(m=>{var f,p;((f=m.card)==null?void 0:f.card_type)==="stadium"&&((p=m.card)!=null&&p.stadium_id)&&(m.card._stadiumDef=l[m.card.stadium_id]||null)})}let c=0;function u(){var y,C,E,F,N,te,ne;const g=o[c],m=(s||[]).filter(ee=>ee.deck_id===g.id),f=m.filter(ee=>{var q;return ee.is_starter&&((q=ee.card)==null?void 0:q.player)}).map(ee=>ni(ee.card,ee.position)),p=m.find(ee=>{var q;return((q=ee.card)==null?void 0:q.card_type)==="formation"}),x=g.formation||((y=p==null?void 0:p.card)==null?void 0:y.formation)||"4-4-2";let b=f.length>=11?Rt(f,x):null,h=((C=g.stadium_card)==null?void 0:C.stadium_def)||null;h&&b&&(b=zt(b,h));const v=f.length>=11;He(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${mo(t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${c===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===0?"0.1":"0.3"});color:${c===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${c===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${g.name}</div>
            <div style="font-size:11px;opacity:.6">${x} · ${f.length}/11${g.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${c===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${c===o.length-1?"0.1":"0.3"});color:${c===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${c===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${h?`
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
          <span style="font-size:12px;font-weight:700">${h.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((E=h.club)==null?void 0:E.encoded_name)||h.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:visible;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${f.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((ee,q)=>`<div style="width:6px;height:6px;border-radius:50%;background:${q===c?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function ee(){const q=e.querySelector(".deck-preview-wrap"),I=e.querySelector("#deck-swipe-zone");if(!q||!I||!b)return;const $=Math.max(200,I.clientHeight-40),G=Math.max(200,I.clientWidth-16),ae=I.clientWidth>=900,pe=G,le=ae?Math.min(50,Math.max(24,Math.round(pe*.076))):Math.max(44,Math.round(pe*.168));if($<220||pe<220){requestAnimationFrame(ee);return}const se=ae?null:Math.round(le*.55);q.innerHTML=At(b,x,null,[],pe,$,[],se),q.style.cssText=`width:${pe}px;height:${$}px;overflow:visible;margin:${ae?0:60}px auto 0`;const ke=q.querySelector("svg");ke&&(ke.style.cssText="display:block;width:100%;height:100%",ke.setAttribute("preserveAspectRatio",ae?"xMidYMid meet":"none"))})),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{c>0&&(c--,u())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{c<o.length-1&&(c++,u())}),(te=document.getElementById("validate-deck"))==null||te.addEventListener("click",()=>{if(!v)return;const ee=t.state.params||{};t.navigate("match",{...ee,matchMode:ee.matchMode||i,deckId:g.id})}),(ne=document.getElementById("cancel-deck-select"))==null||ne.addEventListener("click",()=>{Ue(e),a("home")});const k=document.getElementById("deck-swipe-zone");if(k){let ee=0,q=0;k.addEventListener("touchstart",I=>{ee=I.touches[0].clientX,q=I.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",I=>{const $=I.changedTouches[0].clientX-ee,G=I.changedTouches[0].clientY-q;Math.abs($)<40||Math.abs($)<Math.abs(G)||($<0&&c<o.length-1?(c++,u()):$>0&&c>0&&(c--,u()))},{passive:!0})}}u()}function Je(e,t=44,i=58,n=null){return Ae(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function ut(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,r)=>{const s=o._line||o.job||"MIL";if(a+=Ae(o,{width:40,role:s,extraNote:o.boost||0}),r<n.length-1){const d=yt(o,n[r+1]);a+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function It(e,t,i,n,a=310,o=310,r=[],s=null){const d=Mt[t]||{},l=Pi(t)||si[t]||[],c={},u=["ATT","MIL","DEF","GK"];for(const b of u)(e[b]||[]).forEach((v,k)=>{c[`${b}${k+1}`]=v});function g(b){const h=d[b];return h?{x:h.x*a,y:h.y*o}:null}let m="";for(const[b,h]of l){const v=g(b),k=g(h);if(!v||!k)continue;const y=c[b],C=c[h],E=yt(y,C);E==="#00ff88"||E==="#FFD700"?(m+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(54,Math.round(a*.15)),78):Math.max(44,Math.round(a*.168)),p=Math.round(f*657/507);for(const[b,h]of Object.entries(c)){const v=g(b);if(!v||!h)continue;const k=b.replace(/[0-9]/g,""),y=r.includes(h.cardId),C=i==="attack"&&(["MIL","ATT"].includes(k)||y)&&!h.used||i==="defense"&&["GK","DEF","MIL"].includes(k)&&!h.used,E=n.includes(h.cardId);let F=h.boost||0;h.stadiumBonus&&(i==="attack"&&(k==="ATT"||k==="MIL")||i==="defense"&&(k==="GK"||k==="DEF"||k==="MIL")?F+=10:i||(F+=10));const N=Math.round(v.x-f/2),te=Math.round(v.y-p/2);if(h.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${N}" y="${te}" width="${f}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${h.cardId}" data-role="${k}" style="cursor:pointer"/>`;continue}const ne=Ae({...h,_evolution_bonus:0},{width:f,showStad:!0,stadDef:null,role:k,extraNote:F,_cardOffset:30}),ee=E?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";m+=`<foreignObject x="${N-2}" y="${te-30}" width="${f+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${ee}position:relative">
        ${ne}
      </div>
    </foreignObject>`,C&&(m+=`<rect x="${N}" y="${te}" width="${f}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${h.cardId}" data-role="${k}" style="cursor:pointer"/>`)}const x=s!==null?s:Math.round(Math.max(f*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-x} ${-x} ${a+x*2} ${o+x*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${m}
  </svg>`}function At(e,t,i,n,a=300,o=300,r=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${It(e,t,i,n,a,o,r,s)}
  </div>`}async function St(e,t,i,n){var C;const{state:a,navigate:o,toast:r}=t;He(e);const s=a.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return xo(e,t,i);const d=s.deckId;let l,c,u,g;try{const E=await Promise.all([w.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);l=E[0].data,u=E[0].error,c=E[1].data,g=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||g){console.error("[Match] Erreur Supabase:",u||g),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const m=(c||[]).filter(E=>{var F;return E.is_starter&&((F=E.card)==null?void 0:F.player)}).map(E=>ni(E.card,E.position)),f=(c||[]).filter(E=>{var F;return!E.is_starter&&((F=E.card)==null?void 0:F.player)}).map(E=>ni(E.card,E.position));if(m.length<11){at(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>o("decks"));return}const p=(c||[]).find(E=>{var F;return((F=E.card)==null?void 0:F.card_type)==="formation"}),x=(l==null?void 0:l.formation)||((C=p==null?void 0:p.card)==null?void 0:C.formation)||"4-4-2",{data:b,error:h}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:v}=await w.from("gc_definitions").select("*").eq("is_active",!0),k=(b||[]).map(E=>({...E,_gcDef:(v==null?void 0:v.find(F=>F.name===E.gc_type||F.id===E.gc_definition_id))||null}));let y=null;if(l!=null&&l.stadium_card_id){const{data:E}=await w.from("cards").select("stadium_id").eq("id",l.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:F}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();y=F||null}}n({deckId:d,formation:x,starters:m,subsRaw:f,gcCardsEnriched:k,gcDefs:v||[],stadiumDef:y})}function We(){return Math.min(window.innerWidth-40,860)}function rt(){return Math.round(We()*1.1)}function yo(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Tt(e)}}function nn(e){var o,r,s;if(!e)return"";const t=d=>d?Ae({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function st(e,t,i,n,a){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Ae({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(r.innerHTML=`
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
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),r=e?Ae({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Ae({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";a.innerHTML=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function Nt(e,t){return e.reduce((i,n)=>i+milNoteWithBonus(n,t),0)}function Ot(e){let t=0;for(let i=0;i<e.length-1;i++){const n=yt(e[i],e[i+1]);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function qi(e,t,i,n,a){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,r)=>{const s=r<e.length-1?yt(o,e[r+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",l=s==="#00ff88"?"+2":s==="#FFD700"?"+1":"";return milNoteWithBonus(o,a),o.stadiumBonus||a&&(a.club_id&&String(o.club_id)===String(a.club_id)||a.country_code&&(o.country_code,a.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ae({...o,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:a,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${r<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${l?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${l}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${Nt(e,a)} + ${Ot(e)} liens = <b style="color:#fff">${Nt(e,a)+Ot(e)}</b>
      </div>
    </div>`}async function ho(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await St(e,t,a,async({deckId:s,formation:d,starters:l,subsRaw:c,gcCardsEnriched:u,gcDefs:g,stadiumDef:m})=>{try{let f=Rt(l,d);m&&(f=zt(f,m),Pt(c,m));const p=await vo(d,o),x=p.lines||p,b=async h=>{try{const{data:v,error:k}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if(k){console.error("[MatchIA] Erreur création match:",k),at(e,"⚠️","Impossible de créer le match ("+k.message+").","Retour",()=>t.navigate("home"));return}const y=p.stadiumDef||null;y&&x&&(zt(x,y),Pt(p.subs||[],y));const C={gcDefs:g||[],matchId:v==null?void 0:v.id,mode:r,difficulty:o,formation:d,homeTeam:f,aiTeam:x,homeSubs:c,subsUsed:0,maxSubs:Math.min(c.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:y,homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};_o(e,C,t)}catch(v){console.error("[MatchIA] Exception launchMatch:",v),at(e,"⚠️","Erreur au lancement du match : "+v.message,"Retour",()=>t.navigate("home"))}};if(!u.length){b([]);return}go(e,u,b)}catch(f){console.error("[MatchIA] Exception setup:",f),at(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function vo(e,t){var x;const{data:i}=await w.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:wo(e),subs:[],gcCards:[],stadiumDef:null};const n=mt[e]||mt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(b,h,v){var k,y;return o.add(b.id),{cardId:"ai-"+b.id+"-"+v,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:((k=b.clubs)==null?void 0:k.encoded_name)||null,clubLogo:((y=b.clubs)==null?void 0:y.logo_url)||null,boost:0,used:!1,_line:h}}for(const b of["GK","DEF","MIL","ATT"]){const h=i.filter(E=>E.job===b&&!o.has(E.id)),v=i.filter(E=>E.job!==b&&!o.has(E.id)),k=[...h,...v],y=[];for(let E=0;E<n[b];E++){const F=k[E];F&&y.push(r(F,b,E))}const C=xt(y.length);y.forEach((E,F)=>{E._col=C[F]}),a[b]=y}const d=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,h)=>r(b,b.job,100+h)),u=Object.keys(Me).sort(()=>Math.random()-.5).slice(0,3).map((b,h)=>{var v,k;return{id:"ai-gc-"+h,gc_type:b,name:((v=Me[b])==null?void 0:v.name)||b,icon:((k=Me[b])==null?void 0:k.icon)||"⚡"}}),g=Object.values(a).flat(),m={};g.forEach(b=>{b.club_id&&(m[b.club_id]=(m[b.club_id]||0)+1)});const f=(x=Object.entries(m).sort((b,h)=>h[1]-b[1])[0])==null?void 0:x[0];let p=null;if(f){const{data:b}=await w.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",f).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:a,subs:d,gcCards:u,stadiumDef:p}}function wo(e){const t=mt[e]||mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let d=0;d<t[o];d++){const l=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=xt(r.length);r.forEach((d,l)=>{d._col=s[l]}),i[o]=r}return i}function _o(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:100%;max-width:900px;margin:0 auto">${It(t.aiTeam,t.formation,null,[],We(),rt())}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>ko(e,t,i),5e3)}const Qe=e=>yo(e);function ko(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null,s=Nt(n,o)+Ot(n),d=Nt(a,r)+Ot(a),l=s>=d;e.innerHTML=`
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
  </div>`;const c=()=>{const f=(p,x)=>e.querySelectorAll(p).forEach((b,h)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},x+h*90)});f(".duel-card-home",150),f(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,x)=>{setTimeout(()=>{p.style.opacity="1"},x*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(x=>x.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",d,800)},1500)};function u(f,p,x){const b=document.getElementById(f);if(!b)return;const h=performance.now(),v=k=>{const y=Math.min(1,(k-h)/x);b.textContent=Math.round(p*(1-Math.pow(1-y,3))),y<1?requestAnimationFrame(v):b.textContent=p};requestAnimationFrame(v)}requestAnimationFrame(c),t.attacker=l?"home":"ai";const g=l?tn():null;l&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(f=>Qe(f)),aiPlayers:a.map(f=>Qe(f)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${l?t.clubName+" attaque":"IA attaque"}`});const m=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Te(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ht(e,t,i),800)};setTimeout(()=>{const f=document.getElementById("score-home"),p=document.getElementById("score-ai"),x=document.getElementById(l?"duel-row-home":"duel-row-ai"),b=document.getElementById(l?"duel-row-ai":"duel-row-home"),h=l?f:p,v=l?p:f;h&&(h.style.fontSize="80px",h.style.color=l?"#FFD700":"#ff6b6b",h.style.animation="duelPulse .5s ease"+(l?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{x&&(x.style.transformOrigin="center",x.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",x.style.zIndex="5"),setTimeout(()=>{var y;const k=document.getElementById("duel-shock");if(k){const C=(y=b||x)==null?void 0:y.getBoundingClientRect(),E=e.querySelector(".match-screen").getBoundingClientRect();C&&(k.style.top=C.top-E.top+C.height/2+"px"),k.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var y;const k=document.getElementById("duel-finale");k&&(k.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${l?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${l?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,k.style.transition="opacity .45s ease",k.style.opacity="1",k.style.pointerEvents="auto",(y=document.getElementById("start-match-btn"))==null||y.addEventListener("click",m))},600)},700)},2800)}function Te(e,t,i){var C,E,F,N,te,ne,ee,q,I;const n=t.selected.map($=>$.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter($=>!a.includes($.cardId)),s=Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(G=>!G.used)),l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),c=t.phase==="attack"&&d&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",g=t.phase==="attack",m=t.phase==="defense",f=t.phase==="finished",x=(t.homeSubs||[]).filter($=>!(t.usedSubIds||[]).includes($.cardId)).length>0&&t.subsUsed<t.maxSubs,b=g&&l.length===0&&!x,h=t.gcCards.filter($=>!t.usedGc.includes($.id)),v=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${ut((G.players||[]).map(ae=>({...ae,used:!1})),"#ff6b6b",G.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const G=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ut((G.players||[]).map(ae=>({...ae,used:!1})),"#00ff88",G.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+nn($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,G=(T,M,R)=>{var Ce,je;const H=(t.gcDefs||[]).find(Fe=>Fe.name===T.gc_type),U={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[H==null?void 0:H.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[H==null?void 0:H.color]||"#b06ce0",O=(H==null?void 0:H.name)||T.gc_type,Ee=(H==null?void 0:H.effect)||((Ce=Me[T.gc_type])==null?void 0:Ce.desc)||"",_e=H!=null&&H.image_url?`/icons/${H.image_url}`:null,we=((je=Me[T.gc_type])==null?void 0:je.icon)||"⚡",me=Math.round(R*.22),Le=Math.round(R*.22),$e=R-me-Le,he=O.length>12?7:9;return`<div class="gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
          style="box-sizing:border-box;width:${M}px;height:${R}px;border-radius:10px;border:2px solid ${j};background:${U};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${he}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${M-6}px">${O}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${$e}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${M-10}px;max-height:${$e-6}px;object-fit:contain">`:`<span style="font-size:${Math.round($e*.55)}px">${we}</span>`}
          </div>
          <div style="height:${Le}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ee.slice(0,38)}</span>
          </div>
        </div>`},ae=(T,M)=>{var R;return`<div id="boost-card"
          style="box-sizing:border-box;width:${T}px;height:${M}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(M*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(M*.2)}px">⚡</div>
            <div style="font-size:${Math.round(M*.09)}px;color:#000;font-weight:900">+${(R=t.boostCard)==null?void 0:R.value}</div>
          </div>`},pe=(T,M)=>M?ae(130,175):G(T,130,175),le=(T,M)=>M?ae(68,95):G(T,68,95),se=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ke=f?`<button id="btn-results" style="${se};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${se};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-pass" style="${se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:g?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${se};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,K=g||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Q=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(T=>`<div class="sub-btn-col" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Je(T,76,100)}</div>`).join("")}
      </div>`,V=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${At(t.homeTeam,t.formation,t.phase,n,We(),rt(),c)}
        </div>
      </div>`;return $?`
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
            ${v?pe(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${At(t.homeTeam,t.formation,t.phase,n,We(),rt(),c)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${h.map(T=>le(T,!1)).join("")}
            ${v?le(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var G,ae,pe;if($.type==="duel"){const le=$.isGoal,se=$.homeScored?"#FFD700":le?"#ff6b6b":"rgba(255,255,255,0.3)",ke=$.homeScored?"⚽ BUT !":le?"⚽ BUT IA !":(G=$.homePlayers)!=null&&G.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${le?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${se};margin-bottom:4px">
                <div style="font-size:9px;color:${se};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ke}</div>
                ${(ae=$.homePlayers)!=null&&ae.length?`<div style="margin-bottom:3px">${ut($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(pe=$.aiPlayers)!=null&&pe.length?`<div style="opacity:0.7">${ut($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
              </div>`}return $.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${$.outPlayer?Je({...$.outPlayer,used:!0,_line:$.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${$.inPlayer?Je({...$.inPlayer,_line:$.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:$.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${$.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${$.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function k(){const $=e.querySelector(".match-screen");if(!$)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=G+"px",$.style.minHeight=G+"px",$.style.maxHeight=G+"px",$.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),pe=e.querySelector("#mobile-play-area");ae&&pe&&(pe.style.paddingBottom=ae.offsetHeight+"px")}if(k(),setTimeout(k,120),setTimeout(k,400),setTimeout(k,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",k),window.visualViewport.addEventListener("scroll",k)),window.addEventListener("resize",k)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,G=30;const ae=()=>document.getElementById("match-timer"),pe=()=>{const le=ae();if(!le)return;const se=String(Math.floor(G/60)).padStart(2,"0"),ke=String(G%60).padStart(2,"0");le.textContent=` ${se}:${ke}`,le.style.color=$?"#ff2222":"#ff9500",le.style.fontWeight="900"};pe(),t._timerInt=setInterval(()=>{if(G--,G<0)if(!$)$=!0,G=15,pe();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const le=document.createElement("div");le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",le.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(le),setTimeout(()=>{le.remove(),kt(e,t,i)},2500)}else pe()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,kt(e,t,i))}),(E=document.getElementById("view-ai"))==null||E.addEventListener("click",()=>jo(t,i)),(F=document.getElementById("toggle-history"))==null||F.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(N=document.getElementById("close-history"))==null||N.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(te=document.getElementById("btn-action"))==null||te.addEventListener("click",()=>{t.selected.length!==0&&(g?Eo(e,t,i):m&&Lo(e,t,i))}),(ne=document.getElementById("btn-results"))==null||ne.addEventListener("click",()=>kt(e,t,i)),(ee=document.getElementById("btn-pass"))==null||ee.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ht(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>$o($,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach($=>{$.addEventListener("click",()=>Qt(e,t,i,null,$.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>Ao($.dataset.gcId,$.dataset.gcType,e,t,i))}),(q=document.getElementById("boost-card"))==null||q.addEventListener("click",()=>Co(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>Qt(e,t,i,$.dataset.subId))}),(I=document.getElementById("sub-btn-main"))==null||I.addEventListener("click",()=>Qt(e,t,i))}function $o(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}Te(i,t,n)}function gi(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(s=>!s.used)),a=t.selected.map(r=>{const s=(t.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=n&&["GK","DEF"].includes(r._role);return{...s,_line:r._role,...d?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),o=pi(a,t.modifiers.home);t.pendingAttack={...o,players:[...a],side:"home"},t.selected.forEach(r=>{const s=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Te(e,t,i),setTimeout(()=>Io(e,t,i),1200)}function Lo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(u=>u.cardId===d.cardId)||d,c=l.stadiumBonus||n&&(n.club_id&&String(l.club_id)===String(n.club_id)||n.country_code&&l.country_code===n.country_code)||!1;return{...l,_line:d._role,stadiumBonus:c}}),o=ui(a,t.modifiers.home);t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)});const r=fi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Qe(d)),homePlayers:t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId)||d;return Qe(l)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Te(e,t,i),st(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ft(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ft(e,t,i,"home-attack")}function To(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(d=>d.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(d=>d.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function zo(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Me[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ht(e,t,i){gi(t,i,null),To(t),zo(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],a=Vi(n,"attack",t.difficulty);if(!a.length){Ft(e,t,i);return}const o=pi(a,t.modifiers.ai);t.pendingAttack={...o,players:a,side:"ai"},a.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${a.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),d=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!d){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(c=>Qe(c)),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,Te(e,t,i),st(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ft(e,t,i,"home-attack")});return}t.phase="defense",Te(e,t,i)}function Io(e,t,i){var l,c;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Vi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(g=>!g.used)).length){t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((l=t.pendingAttack)==null?void 0:l.players)||[]).map(m=>Qe(m)),homeTotal:((c=t.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),st(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{ft(e,t,i,"ai-attack")});return}const r=a.length>0?ui(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=fi(t.pendingAttack.total,r,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Qe(u)),aiPlayers:a.map(u=>Qe(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),st(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{ft(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,ft(e,t,i,"ai-attack")}function ft(e,t,i,n){if(t.round++,on(t)){kt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Ft(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,i);return}setTimeout(()=>Ht(e,t,i),100);return}t.phase="attack",Te(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){Ft(e,t,i);return}t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ht(e,t,i),800)}}function on(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function Ft(e,t,i){on(t)?kt(e,t,i):(t.phase="attack",Te(e,t,i))}function Qt(e,t,i,n=null,a=null){var m,f;if(t.phase!=="attack"){wt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){wt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,x])=>(x||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){wt("Aucun joueur utilisé à remplacer");return}if(!r.length){wt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const d=((m=o[s])==null?void 0:m._line)||((f=o[s])==null?void 0:f.job);let l=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===d)),c=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function g(){var y,C,E,F,N,te;const p=o[s],x=r[l],b=Math.min(130,Math.round((window.innerWidth-90)/2)),h=Math.round(b*1.35),v=ne=>`background:rgba(255,255,255,0.12);border:none;color:${ne?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ne?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${x?Je({...x,used:!1,boost:0},b,h):"<div>—</div>"}</div>
        <button id="in-down" style="${v(l>=r.length-1)}" ${l>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?Je({...p,used:!1,boost:0},b,h):"<div>—</div>"}</div>
        <button id="out-down" style="${v(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(y=u.querySelector("#sub-close"))==null||y.addEventListener("click",()=>u.remove()),(C=u.querySelector("#out-up"))==null||C.addEventListener("click",()=>{s>0&&(s--,g())}),(E=u.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<o.length-1&&(s++,g())}),(F=u.querySelector("#in-up"))==null||F.addEventListener("click",()=>{l>0&&(l--,g())}),(N=u.querySelector("#in-down"))==null||N.addEventListener("click",()=>{l<r.length-1&&(l++,g())});const k=(ne,ee,q,I)=>{const $=u.querySelector("#"+ne);if(!$)return;let G=0;$.addEventListener("touchstart",ae=>{G=ae.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",ae=>{const pe=ae.changedTouches[0].clientY-G;if(Math.abs(pe)<30)return;const le=ee();pe<0&&le<I-1?(q(le+1),g()):pe>0&&le>0&&(q(le-1),g())},{passive:!0})};k("in-panel",()=>l,ne=>l=ne,r.length),k("out-panel",()=>s,ne=>s=ne,o.length),(te=u.querySelector("#sub-confirm"))==null||te.addEventListener("click",ne=>{if(ne.preventDefault(),ne.stopPropagation(),c)return;c=!0;const ee=o[s],q=r[l];if(!ee||!q)return;let I=null,$=-1;for(const[ae,pe]of Object.entries(t.homeTeam)){const le=(pe||[]).findIndex(se=>se.cardId===ee.cardId);if(le!==-1){I=ae,$=le;break}}if($===-1||!I){wt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const G={...q,_line:I,_col:ee._col||0,used:!1,boost:0};t.homeTeam[I].splice($,1,G),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ee.name,firstname:ee.firstname,note:qe(ee,I),portrait:Tt(ee),job:ee.job,country_code:ee.country_code,rarity:ee.rarity,clubName:ee.clubName,clubLogo:ee.clubLogo},inPlayer:{name:q.name,firstname:q.firstname,note:qe(q,I),portrait:Tt(q),job:q.job,country_code:q.country_code,rarity:q.rarity,clubName:q.clubName,clubLogo:q.clubLogo},text:`🔄 ${q.firstname} ${q.name} remplace ${ee.firstname} ${ee.name}`}),u.remove(),bo(ee,q,()=>Te(e,t,i))})}document.body.appendChild(u),g()}function Ao(e,t,i,n,a){var f,p;const o=(n.gcDefs||[]).find(x=>x.name===t),r=Me[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",d={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",l=(o==null?void 0:o.name)||t,c=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,g=r.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${d};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${d}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${l.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${l}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${c}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(f=m.querySelector("#gc-back"))==null||f.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),So(e,t,i,n,a)})}function qt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var l,c;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const g=u._line||u.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g]||"#555",f=qe(u,g)+(u.boost||0),p=s.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${f}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${g}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(l=r.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.cid,m=e.find(p=>p.cardId===g);if(!m)return;const f=s.findIndex(p=>p.cardId===g);f>-1?s.splice(f,1):s.length<t&&s.push(m),d()})}),(c=r.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{r.remove(),o(s)})}d(),document.body.appendChild(r)}const Mo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(l=>!l.used).map(l=>({...l,_line:s})));return r.length?(qt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(d=>{const l=(n.homeTeam[d._line]||[]).find(c=>c.cardId===d.cardId);l&&(l.boost=(l.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${l.name}`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Te(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,d=n==="ai"?"adverse":"allié",l=Object.entries(s).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,u])=>u.filter(g=>!g.used).map(g=>({...g,_line:c})));return l.length?(qt(l,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,a,c=>{c.forEach(u=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(f=>f.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Te(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),Te(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(r).filter(([l])=>!t.length||t.includes(l)).flatMap(([l,c])=>c.filter(u=>!u.used).map(u=>({...u,_line:l})));return d.length?(qt(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,l=>{l.forEach(c=>{const g=((i==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(m=>m.cardId===c.cardId);g&&(g.used=!0,n.log.push({text:`❌ ${g.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Te(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(d=>d.used).map(d=>({...d,_line:r})));return o.length?(qt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(l=>l.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),Te(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Te(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function So(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(d=>d.name===t)||o.find(d=>{var l;return((l=d.name)==null?void 0:l.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const d=Mo[r.effect_type];d?d(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([l,c])=>(c||[]).filter(u=>u.used).map(u=>({...u,_line:l})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((c,u)=>qe(u,"ATT")-qe(c,"ATT"))[0];l.used=!0,n.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}w.from("cards").delete().eq("id",e).then(()=>{}),s&&Te(i,n,a)}function Co(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${fo[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${qe(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Te(e,t,i)})})}async function kt(e,t,i){var c,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=jn(t.mode,r);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await w.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),Ue(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{l.remove(),Ue(e),i.navigate("match",{matchMode:t.mode})})}function jo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${It(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Ct(e,t,i,n,a={}){return rn(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function Bo(e,t,i){const{data:n}=await w.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return rn(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function rn(e,t,i,n,a=[],o=[],r=!1,s=null,d=null,l=null,c=null,u=null){const{state:g,navigate:m,toast:f}=t,p=n?"p1":"p2",x=n?"p2":"p1",b=(a||[]).map(_=>_.id),h=(a||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await w.from("matches").select("*").eq("id",i).single();if(!v){f("Match introuvable","error"),m("home");return}async function k(){var fe,xe;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:_,error:L},{data:A,error:S},{data:z},{data:D}]=await Promise.all([w.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),w.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),w.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",S==null?void 0:S.message,"p1D:",(fe=_==null?void 0:_.starters)==null?void 0:fe.length,"p2D:",(xe=A==null?void 0:A.starters)==null?void 0:xe.length);const B=Z=>{const be=Number(Z.evolution_bonus)||0;return{cardId:Z.card_id,position:Z.position,id:Z.id,firstname:Z.firstname,name:Z.surname_real,country_code:Z.country_code,club_id:Z.club_id,job:Z.job,job2:Z.job2,note_g:(Number(Z.note_g)||0)+(Z.job==="GK"||Z.job2==="GK"&&Number(Z.note_g)>0?be:0),note_d:(Number(Z.note_d)||0)+(Z.job==="DEF"||Z.job2==="DEF"&&Number(Z.note_d)>0?be:0),note_m:(Number(Z.note_m)||0)+(Z.job==="MIL"||Z.job2==="MIL"&&Number(Z.note_m)>0?be:0),note_a:(Number(Z.note_a)||0)+(Z.job==="ATT"||Z.job2==="ATT"&&Number(Z.note_a)>0?be:0),evolution_bonus:be,rarity:Z.rarity,skin:Z.skin,hair:Z.hair,hair_length:Z.hair_length,face:Z.face||null,clubName:Z.club_encoded_name||null,clubLogo:Z.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},P=((_==null?void 0:_.starters)||[]).map(Z=>B(Z)),Y=((A==null?void 0:A.starters)||[]).map(Z=>B(Z)),W=(_==null?void 0:_.formation)||"4-4-2",X=(A==null?void 0:A.formation)||"4-4-2";let re=Rt(P,W),J=Rt(Y,X);const ce=((_==null?void 0:_.subs)||[]).map(Z=>B(Z)),de=((A==null?void 0:A.subs)||[]).map(Z=>B(Z)),oe=(_==null?void 0:_.stadium_def)||(n?d:null),ue=(A==null?void 0:A.stadium_def)||(n?null:d);return oe&&(re=zt(re,oe),Pt(ce,oe)),ue&&(J=zt(J,ue),Pt(de,ue)),{p1Team:re,p2Team:J,p1Subs:ce,p2Subs:de,p1Formation:W,p2Formation:X,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(D==null?void 0:D.club_name)||(D==null?void 0:D.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let y=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!y,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",g.profile.id),!y)if(n){y=await k(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((y==null?void 0:y.p1Team)||{}));const{data:_}=await w.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await w.from("matches").update({game_state:y,turn_user_id:v.home_id}).eq("id",i):y=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!y;_++){await new Promise(A=>setTimeout(A,400));const{data:L}=await w.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(y=L.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(L!=null&&L.game_state))}if(!y){f("Erreur de synchronisation","error"),m("home");return}y.gc_p2=b,y.gcCardsFull_p2=h,await w.from("matches").update({game_state:y}).eq("id",i)}let C=!1,E=null,F=!1;const N=new Set,te=new Set;async function ne(_){var X,re;try{w.removeChannel(ee)}catch{}const L=y[p+"Score"]||0,A=y[x+"Score"]||0;let S,z;_.winner_id?(S=_.winner_id===g.profile.id,z=!1):_.forfeit?(S=L>A,z=!1):(z=L===A,S=L>A);let D="";if(r&&n)try{const{data:J}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:ce}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(J&&ce){const de=S?1:z?.5:0,oe=1-de,ue=J.placement_matches<10,fe=ce.placement_matches<10,xe=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,ce.mmr,ce.mmr_deviation,de===1?1:de===0?0:.5,ue),Z=computeGlicko2(ce.mmr,ce.mmr_deviation,ce.mmr_volatility,J.mmr,J.mmr_deviation,oe===1?1:oe===0?0:.5,fe);await w.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:S?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:xe.delta,p_away_delta:Z.delta,p_home_new_rd:xe.newRd,p_away_new_rd:Z.newRd,p_home_new_vol:xe.newSigma,p_away_new_vol:Z.newSigma});const be=xe.delta,ze=xe.newMmr,Se=getTier(ze),Ne=be>=0?"+":"",Ge=be>=0?"#4caf50":"#ff6b6b",Pe=getTier(J.mmr);D=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Se.id!==Pe.id?`<div style="font-size:20px;font-weight:900;color:${Se.color}">
                    ${ze>J.mmr?"📈":"📉"} ${Pe.emoji} ${Pe.label} → ${Se.emoji} ${Se.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ze>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${be>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Se.color}">${Se.emoji} ${Se.label}</div>`}
              ${ue?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(X=document.getElementById("pvp-end-overlay"))==null||X.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const P=z?"🤝":S?"🏆":"😞",Y=z?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",W=z?"#fff":S?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${P}</div>
      <div style="font-size:26px;font-weight:900;color:${W}">${Y}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${y[p+"Name"]} ${L} – ${A} ${y[x+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${D}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(re=B.querySelector("#pvp-end-home"))==null||re.addEventListener("click",()=>{B.remove(),Ue(e),m(r?"ranked":"home")})}const ee=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const L=_.new;try{if(L.status==="finished"||L.forfeit){if(C)return;C=!0,E&&(clearInterval(E),E=null),L.game_state&&(y=L.game_state),ne(L);return}if(L.game_state){const A=y;y=L.game_state;const S=y._lastGC;if(S&&S.seq&&!te.has(S.seq)&&(te.add(S.seq),S.by!==p)){V(S.type,S.by,()=>se());return}const z=A[p+"Score"]||0,D=A[x+"Score"]||0,B=y[p+"Score"]||0,P=y[x+"Score"]||0,Y=B>z,W=P>D;if((Y||W)&&!N.has(y.round)){N.add(y.round);const X=[...y.log||[]].reverse().find(J=>J.isGoal),re=((X==null?void 0:X.homePlayers)||[]).map(J=>({name:J.name,note:J.note,portrait:J.portrait,job:J.job}));st(re,B,P,Y,()=>se());return}se()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function q(_){Object.assign(y,_),y.lastActionAt=new Date().toISOString();const{error:L}=await w.from("matches").update({game_state:y}).eq("id",i);L&&f("Erreur de synchronisation","error");try{se()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function I(){if(C)return;C=!0,E&&(clearInterval(E),E=null);const _=n?v.away_id:v.home_id,L=n?"p2":"p1",A=n?"p1":"p2",S={...y,[L+"Score"]:3,[A+"Score"]:0,phase:"finished"};try{await w.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:S.p1Score||0,away_score:S.p2Score||0,game_state:S}).eq("id",i)}catch{}try{w.removeChannel(ee)}catch{}setTimeout(()=>{Ue(e),m("home")},800)}const $={BOOST_STAT:({value:_=1,count:L=1,roles:A=[]},S,z)=>{const D=S[p+"Team"],B=Object.entries(D).filter(([P])=>!A.length||A.includes(P)).flatMap(([P,Y])=>Y.filter(W=>!W.used).map(W=>({...W,_line:P})));if(!B.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(S);return}G(B,L,`Choisir ${L} joueur(s) à booster (+${_})`,P=>{P.forEach(Y=>{const W=(D[Y._line]||[]).find(X=>X.cardId===Y.cardId);W&&(W.boost=(W.boost||0)+_,S.log.push({text:`⚡ +${_} sur ${W.name}`,type:"info"}))}),S[p+"Team"]=D,z(S)})},DEBUFF_STAT:({value:_=1,count:L=1,roles:A=[],target:S="ai"},z,D)=>{const B=S==="home"?p:x,P=z[B+"Team"],Y=S==="home"?"allié":"adverse",W=Object.entries(P).filter(([X])=>!A.length||A.includes(X)).flatMap(([X,re])=>re.map(J=>({...J,_line:X})));if(!W.length){z.log.push({text:`🎯 Aucun joueur ${Y}`,type:"info"}),D(z);return}G(W,L,`Choisir ${L} joueur(s) ${Y}(s) (-${_})`,X=>{X.forEach(re=>{const J=(P[re._line]||[]).find(ce=>ce.cardId===re.cardId);J&&(J.boost=(J.boost||0)-_,z.log.push({text:`🎯 -${_} sur ${J.name}`,type:"info"}))}),z[B+"Team"]=P,D(z)})},GRAY_PLAYER:({count:_=1,roles:L=[],target:A="ai"},S,z)=>{const D=A==="home"?p:x,B=S[D+"Team"],P=A==="home"?"allié":"adverse",Y=Object.entries(B).filter(([W])=>!L.length||L.includes(W)).flatMap(([W,X])=>X.filter(re=>!re.used).map(re=>({...re,_line:W})));if(!Y.length){S.log.push({text:`❌ Aucun joueur ${P}`,type:"info"}),z(S);return}G(Y,_,`Choisir ${_} joueur(s) ${P}(s) à exclure`,W=>{const X="usedCardIds_"+D,re=new Set(S[X]||[]);W.forEach(J=>{const ce=(B[J._line]||[]).find(de=>de.cardId===J.cardId);ce&&(ce.used=!0,re.add(J.cardId),S.log.push({text:`❌ ${ce.name} exclu !`,type:"info"}))}),S[X]=[...re],S[D+"Team"]=B,z(S)})},REVIVE_PLAYER:({count:_=1,roles:L=[]},A,S)=>{const z=A[p+"Team"],D=Object.entries(z).filter(([B])=>!L.length||L.includes(B)).flatMap(([B,P])=>P.filter(Y=>Y.used).map(Y=>({...Y,_line:B})));if(!D.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(A);return}G(D,_,`Choisir ${_} joueur(s) à ressusciter`,B=>{B.forEach(P=>{const Y=(z[P._line]||[]).find(W=>W.cardId===P.cardId);Y&&(Y.used=!1,A.log.push({text:`💫 ${Y.name} ressuscité !`,type:"info"}))}),A[p+"Team"]=z,S(A)})},REMOVE_GOAL:({},_,L)=>{const A=x+"Score";_[A]>0?(_[A]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(_)},ADD_GOAL_DRAW:({},_,L)=>{_[p+"Score"]===_[x+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(_)},ADD_SUB:({value:_=1},L,A)=>{L.maxSubs=(L.maxSubs||3)+_,L.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),A(L)},CUSTOM:({},_,L)=>L(_)};function G(_,L,A,S){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let D=[];function B(){var Y,W;const P=_.map(X=>{const re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[X._line]||"#555",J=qe(X,X._line)+(X.boost||0),de=D.find(ue=>ue.cardId===X.cardId)?"#FFD700":"rgba(255,255,255,0.25)",oe=X.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${X.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${de};background:${re};overflow:hidden;cursor:pointer;${oe}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${X.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${J}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${X._line}</div>
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
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
        </div>`,(Y=z.querySelector("#pp-close"))==null||Y.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(X=>{X.addEventListener("click",()=>{const re=X.dataset.cid,J=_.find(de=>de.cardId===re),ce=D.findIndex(de=>de.cardId===re);J&&(ce>-1?D.splice(ce,1):D.length<L&&D.push(J),B())})}),(W=z.querySelector("#pp-confirm"))==null||W.addEventListener("click",()=>{z.remove(),S(D)})}B(),document.body.appendChild(z)}async function ae(_,L){const S=(y["gcCardsFull_"+p]||[]).find(P=>P.id===_),z=(S==null?void 0:S._gcDef)||(y.gcDefs||[]).find(P=>{var Y;return P.name===L||((Y=P.name)==null?void 0:Y.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),D=[...y["usedGc_"+p]||[],_],B={type:L,by:p,seq:(y._gcAnimSeq||0)+1};te.add(B.seq),V(L,p,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const Y=$[z.effect_type];if(Y){const W={...y};Y(z.effect_params||{},W,async X=>{X["usedGc_"+p]=D,X._lastGC=B,X._gcAnimSeq=B.seq,await q(X)});return}}const P={...y};switch(L){case"Remplacement+":P.maxSubs=(P.maxSubs||3)+1,P.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const Y=x+"Score";P[Y]>0&&(P[Y]--,P.log.push({text:"🚫 But annulé",type:"info"}));break}}P["usedGc_"+p]=D,P._lastGC=B,P._gcAnimSeq=B.seq,await q(P)})}function pe(_,L){const A="usedCardIds_"+_,S=new Set(y[A]||[]);L.forEach(z=>S.add(z)),y[A]=[...S]}function le(){for(const _ of["p1","p2"]){const L=new Set(y["usedCardIds_"+_]||[]),A=y[_+"Team"];if(A)for(const S of["GK","DEF","MIL","ATT"])(A[S]||[]).forEach(z=>{z.used=L.has(z.cardId)})}}function se(){var Ve,nt,yi,bi,hi,vi;if(y.phase==="reveal")return ke();if(y.phase==="midfield")return Q();if(y.phase==="finished")return Fe();const _=y[p+"Team"],L=y[x+"Team"];le();const A=y[p+"Score"],S=y[x+"Score"],z=y[p+"Name"],D=y[x+"Name"],B=y.phase===p+"-attack",P=y.phase===p+"-defense",Y=Array.isArray(y["selected_"+p])?y["selected_"+p]:[],W=Y.map(ie=>ie.cardId),X=window.innerWidth>=700,re=y[p+"Subs"]||[],J=y["usedSubIds_"+p]||[],ce=re.filter(ie=>!J.includes(ie.cardId)),de=y["gcCardsFull_"+p]||[],oe=y["usedGc_"+p]||[],ue=de.filter(ie=>!oe.includes(ie.id)),fe=y.boostOwner===p&&!y.boostUsed,xe=!["GK","DEF","MIL","ATT"].some(ie=>(L[ie]||[]).some(ge=>!ge.used)),Z=[..._.MIL||[],..._.ATT||[]].filter(ie=>!ie.used),be=B&&xe&&Z.length===0?[..._.GK||[],..._.DEF||[]].filter(ie=>!ie.used).map(ie=>ie.cardId):[];function ze(ie,ge,Ie){var $i,Ei;const ye=ie._gcDef,ot={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",lt={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",ht=(ye==null?void 0:ye.name)||ie.gc_type,vt=(ye==null?void 0:ye.effect)||(($i=Me[ie.gc_type])==null?void 0:$i.desc)||"",wi=ye!=null&&ye.image_url?`/icons/${ye.image_url}`:null,un=((Ei=Me[ie.gc_type])==null?void 0:Ei.icon)||"⚡",_i=Math.round(Ie*.22),ki=Math.round(Ie*.22),Vt=Ie-_i-ki,fn=ht.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ie.id}" data-gc-type="${ie.gc_type}"
        style="box-sizing:border-box;width:${ge}px;height:${Ie}px;border-radius:10px;border:2px solid ${lt};background:${ot};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_i}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${fn}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${ht}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${wi?`<img src="${wi}" style="max-width:${ge-10}px;max-height:${Vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Vt*.55)}px">${un}</span>`}
        </div>
        <div style="height:${ki}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${vt.slice(0,38)}</span>
        </div>
      </div>`}function Se(ie,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ie}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${y.boostValue}</div>
      </div>`}const Ne=(ie,ge)=>ge?Se(130,175):ze(ie,130,175),Ge=(ie,ge)=>ge?Se(68,95):ze(ie,68,95),Pe=X?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",bt=B?$e(p)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${Y.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:P?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${Y.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${D}</div>`,Be=B&&!$e(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||P?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${Y.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${X?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(ie=>`<div class="pvp-sub-btn" data-sub-id="${ie.cardId}" style="cursor:pointer;flex-shrink:0">${Je(ie,X?76:44,X?100:58)}</div>`).join("")}
    </div>`,Re=B?"attack":P?"defense":"idle",tt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${At(_,y[p+"Formation"],Re,W,We(),rt(),be)}
      </div>
    </div>`,Ke=(()=>{var ge,Ie;if(P&&((ge=y.pendingAttack)!=null&&ge.players)){const ye=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${D} ATTAQUE — Défendez !</div>
          ${ut((ye.players||[]).map(ot=>({...ot,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(B&&((Ie=y.pendingAttack)!=null&&Ie.players)){const ye=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ut((ye.players||[]).map(ot=>({...ot,used:!1})),"#00ff88",ye.total)}
        </div>`}const ie=(y.log||[]).slice(-1)[0];return ie?'<div style="padding:2px 4px">'+nn(ie)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),it=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${D}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(y.log||[]).length})
      </button>`;He(e),e.style.overflow="hidden",X?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${it}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${tt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${bt}${Be}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(ie=>Ne(ie,!1)).join("")}
            ${fe?Ne(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${it}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${At(_,y[p+"Formation"],Re,W,We(),rt(),be)}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(y["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(y["usedSubIds_"+p]||[]).length}/${y.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${bt}${Be}</div>
        </div>
      </div>`;function De(){const ie=e.querySelector(".match-screen");if(!ie)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ie.style.height=ge+"px",ie.style.minHeight=ge+"px",ie.style.maxHeight=ge+"px",ie.style.overflow="hidden";const Ie=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");Ie&&ye&&(ye.style.paddingBottom=Ie.offsetHeight+"px")}if(De(),setTimeout(De,120),setTimeout(De,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",De),window.visualViewport.addEventListener("scroll",De)),window.addEventListener("resize",De)),function(){const ge=e.querySelector(".terrain-wrapper svg");ge&&(ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("viewBox","-26 -26 352 352"),ge.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ie=>{ie.addEventListener("click",()=>{if(!B&&!P)return;const ge=ie.dataset.cardId,Ie=ie.dataset.role,ye=(_[Ie]||[]).find(vt=>vt.cardId===ge);if(!ye||ye.used)return;const ot=be.includes(ge);if(B&&!["MIL","ATT"].includes(Ie)&&!ot)return;Array.isArray(y["selected_"+p])||(y["selected_"+p]=[]);const lt=y["selected_"+p],ht=lt.findIndex(vt=>vt.cardId===ge);ht>-1?lt.splice(ht,1):lt.length<3&&lt.push({...ye,_role:Ie}),se()})}),e.querySelectorAll(".match-used-hit").forEach(ie=>{ie.addEventListener("click",()=>R(ie.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ie=>{ie.addEventListener("click",()=>R())}),(Ve=e.querySelector("#pvp-sub-open"))==null||Ve.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(ie=>{ie.addEventListener("click",()=>T(ie.dataset.gcId,ie.dataset.gcType))}),(nt=e.querySelector("#pvp-boost-card"))==null||nt.addEventListener("click",()=>M()),(yi=e.querySelector("#pvp-action"))==null||yi.addEventListener("click",ie=>{B?ie.currentTarget.dataset.pass==="1"||!$e(p)?O():Ee():P&&_e()}),(bi=e.querySelector("#pvp-quit"))==null||bi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&I()}),(hi=e.querySelector("#pvp-view-opp"))==null||hi.addEventListener("click",()=>U()),(vi=e.querySelector("#pvp-toggle-history"))==null||vi.addEventListener("click",()=>j()),E&&(clearInterval(E),E=null),(B||P)&&!C){let ie=30,ge=!1;const Ie=()=>document.getElementById("pvp-timer"),ye=()=>{Ie()&&(Ie().textContent=ie+"s",Ie().style.color=ge?"#ff4444":"#fff")};ye(),E=setInterval(()=>{ie--,ie<0?ge?(clearInterval(E),E=null,B&&!$e(p)?O():I()):(ge=!0,ie=15,ye()):ye()},1e3)}}function ke(){He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${y[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${It(y[x+"Team"],y[x+"Formation"],null,[],We(),rt())}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await q({phase:"midfield"})},5e3)}let K=!1;function Q(){if(K)return;const _=y[p+"Team"].MIL||[],L=y[x+"Team"].MIL||[],A=milScore(_)+milLinks(_),S=milScore(L)+milLinks(L),z=A>=S;function D(de,oe,ue){return`<div id="duel-row-${ue}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${oe}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${de.map((fe,xe)=>{const Z=xe<de.length-1?yt(fe,de[xe+1]):null,be=!Z||Z==="#ff3333"||Z==="#cc2222",ze=Z==="#00ff88"?"+2":Z==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ue}" data-idx="${xe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ae({...fe,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:y.homeStadiumDef||y.stadiumDef||null,role:"MIL",extraNote:fe.boost||0})}
            </div>
            ${xe<de.length-1?`<div class="duel-link duel-link-${ue}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":Z};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${Z}`}">
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
      ${D(_,y[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${D(L,y[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(de,oe)=>e.querySelectorAll(de).forEach((ue,fe)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},oe+fe*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((de,oe)=>setTimeout(()=>{de.style.opacity="1"},oe*70)),900),setTimeout(()=>{const de=e.querySelector("#pvp-vs");de&&(de.style.opacity="1",de.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(oe=>oe.style.opacity="1")},1250);function P(de,oe,ue){const fe=document.getElementById(de);if(!fe)return;const xe=performance.now(),Z=be=>{const ze=Math.min(1,(be-xe)/ue);fe.textContent=Math.round(oe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(Z):fe.textContent=oe};requestAnimationFrame(Z)}setTimeout(()=>{P("pvp-score-me",A,800),P("pvp-score-opp",S,800)},1500);const Y=y.p1Team.MIL||[],W=y.p2Team.MIL||[],X=milScore(Y)+milLinks(Y),re=milScore(W)+milLinks(W),J=X>=re?"p1":"p2";let ce=y.boostValue;ce==null&&(ce=tn(),y.boostValue=ce,y.boostOwner=J,y.boostUsed=!1),K=!0,setTimeout(()=>{const de=e.querySelector("#duel-row-"+(z?"me":"opp")),oe=e.querySelector("#duel-row-"+(z?"opp":"me")),ue=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),xe=z?ue:fe,Z=z?fe:ue;xe&&(xe.style.fontSize="80px",xe.style.color=z?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),Z&&(Z.style.opacity="0.25"),setTimeout(()=>{de&&(de.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",de.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),oe&&(oe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ne;const be=document.getElementById("pvp-duel-finale");if(!be)return;const ze=y.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ce+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+y[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+y[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Se,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Ne=document.getElementById("pvp-start-match"))==null||Ne.addEventListener("click",async()=>{const Ge=J;await q({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:ce,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function V(_,L,A){var oe,ue;const S=(y.gcDefs||[]).find(fe=>{var xe;return fe.name===_||((xe=fe.name)==null?void 0:xe.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",D={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",B=(S==null?void 0:S.name)||_,P=(S==null?void 0:S.effect)||((oe=Me[_])==null?void 0:oe.desc)||"",Y=S!=null&&S.image_url?`/icons/${S.image_url}`:null,W=((ue=Me[_])==null?void 0:ue.icon)||"⚡",re=L===p?"Vous":y[L+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${D}66}50%{box-shadow:0 0 60px ${D}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${D};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${re} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${D};background:${z};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Y?`<img src="${Y}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${W}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let ce=!1;const de=()=>{ce||(ce=!0,J.remove(),setTimeout(()=>A&&A(),50))};J.addEventListener("click",de),setTimeout(de,3e3)}function T(_,L){var J,ce,de,oe;const S=(y["gcCardsFull_"+p]||[]).find(ue=>ue.id===_),z=S==null?void 0:S._gcDef,D={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[z==null?void 0:z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[z==null?void 0:z.color]||"#b06ce0",P=(z==null?void 0:z.name)||L,Y=(z==null?void 0:z.effect)||((J=Me[L])==null?void 0:J.desc)||"Carte spéciale.",W=z!=null&&z.image_url?`/icons/${z.image_url}`:null,X=((ce=Me[L])==null?void 0:ce.icon)||"⚡",re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",re.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${D};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${P.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${P}</div>
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
      </div>`,document.body.appendChild(re),(de=re.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>re.remove()),(oe=re.querySelector("#pvp-gc-use"))==null||oe.addEventListener("click",()=>{re.remove(),ae(_,L)})}function M(){var S;const _=y[p+"Team"],L=Object.entries(_).flatMap(([z,D])=>(D||[]).filter(B=>!B.used).map(B=>({...B,_line:z})));if(!L.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${y.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(z=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",B=qe(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${D};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(S=A.querySelector("#bp-close"))==null||S.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const D=z.dataset.cid,B=L.find(Y=>Y.cardId===D);if(!B)return;const P=(_[B._line]||[]).find(Y=>Y.cardId===D);P&&(P.boost=(P.boost||0)+y.boostValue),A.remove(),await q({[p+"Team"]:_,boostUsed:!0})})})}function R(_=null){var ce,de;if(!(y.phase===p+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const A=y[p+"Team"],S=y["usedSubIds_"+p]||[],z=y.maxSubs||3;if(S.length>=z){f(`Maximum ${z} remplacements atteint`,"warning");return}const D=Object.entries(A).flatMap(([oe,ue])=>(ue||[]).filter(fe=>fe.used).map(fe=>({...fe,_line:oe}))),B=(y[p+"Subs"]||[]).filter(oe=>!S.includes(oe.cardId));if(!D.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){f("Aucun remplaçant disponible","warning");return}let P=Math.max(0,D.findIndex(oe=>oe.cardId===_));const Y=((ce=D[P])==null?void 0:ce._line)||((de=D[P])==null?void 0:de.job);let W=Math.max(0,B.findIndex(oe=>oe.job===Y)),X=!1;const re=document.createElement("div");re.id="pvp-sub-overlay",re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var ze,Se,Ne,Ge,Pe,bt;const oe=D[P],ue=B[W],fe=Math.min(130,Math.round((window.innerWidth-90)/2)),xe=Math.round(fe*1.35),Z=Be=>`background:rgba(255,255,255,0.12);border:none;color:${Be?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Be?"default":"pointer"};flex-shrink:0`;re.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${z})</div>
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
          <button id="pout-up" style="${Z(P===0)}" ${P===0?"disabled":""}>▲</button>
          <div>${oe?Je({...oe,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pout-down" style="${Z(P>=D.length-1)}" ${P>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${P+1}/${D.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ze=re.querySelector("#psub-close"))==null||ze.addEventListener("click",()=>re.remove()),(Se=re.querySelector("#pout-up"))==null||Se.addEventListener("click",()=>{P>0&&(P--,J())}),(Ne=re.querySelector("#pout-down"))==null||Ne.addEventListener("click",()=>{P<D.length-1&&(P++,J())}),(Ge=re.querySelector("#pin-up"))==null||Ge.addEventListener("click",()=>{W>0&&(W--,J())}),(Pe=re.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{W<B.length-1&&(W++,J())});const be=(Be,Oe,Re,tt)=>{const Ke=re.querySelector("#"+Be);if(!Ke)return;let it=0;Ke.addEventListener("touchstart",De=>{it=De.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",De=>{const Ve=De.changedTouches[0].clientY-it;if(Math.abs(Ve)<30)return;const nt=Oe();Ve<0&&nt<tt-1?(Re(nt+1),J()):Ve>0&&nt>0&&(Re(nt-1),J())},{passive:!0})};be("pin-panel",()=>W,Be=>W=Be,B.length),be("pout-panel",()=>P,Be=>P=Be,D.length),(bt=re.querySelector("#psub-confirm"))==null||bt.addEventListener("click",async Be=>{if(Be.preventDefault(),Be.stopPropagation(),X)return;X=!0;const Oe=D[P],Re=B[W];if(!Oe||!Re)return;const tt=Oe._line,Ke=(A[tt]||[]).findIndex(Ve=>Ve.cardId===Oe.cardId);if(Ke===-1){f("Erreur : joueur introuvable","error"),re.remove();return}const it={...Re,_line:tt,position:Oe.position,used:!1,boost:0};A[tt].splice(Ke,1,it);const De=[...S,Re.cardId];re.remove(),H(Oe,Re,async()=>{await q({[p+"Team"]:A,[x+"Team"]:y[x+"Team"],["usedSubIds_"+p]:De})})})}document.body.appendChild(re),J()}function H(_,L,A){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const D=(Y,W,X)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${W};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${X}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[Y.job]||"#555"};border:3px solid ${W};position:relative;overflow:hidden;margin:0 auto">
        ${Tt(Y)?`<img src="${Tt(Y)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(Y.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${D(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${D(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let B=!1;const P=()=>{B||(B=!0,z.remove(),setTimeout(()=>A(),50))};z.addEventListener("click",P),setTimeout(P,2200)}function U(){var L;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${y[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${It(y[x+"Team"],y[x+"Formation"],null,[],We(),rt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(L=_.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>_.remove())}function j(){var A;const _=y.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(A=L.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>L.remove())}async function O(){if(y.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",L=(y.round||0)+1,A=[...y.log||[]];A.push({type:"info",text:`⏭️ ${y[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=he(y),z=$e(_),D=S||!z?"finished":_+"-attack";await q({["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:D,attacker:_,round:L,log:A}),D==="finished"&&await je(y)}async function Ee(){const _=y[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(D=>(y[x+"Team"][D]||[]).some(B=>!B.used)),A=(y["selected_"+p]||[]).map(D=>{const B=(_[D._role]||[]).find(de=>de.cardId===D.cardId)||D,P=L&&["GK","DEF"].includes(D._role),Y=_[D._role]||[],W=Y.findIndex(de=>de.cardId===D.cardId),X=xt(Y.length),re=W>=0?X[W]:B._col??1,J=y.stadiumDef||y.homeStadiumDef||null,ce=B.stadiumBonus||J&&(J.club_id&&String(B.club_id)===String(J.club_id)||J.country_code&&B.country_code===J.country_code)||!1;return{...B,_line:D._role,_col:re,stadiumBonus:ce,...P?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!A.length)return;const S=pi(A,y.modifiers[p]||{});pe(p,A.map(D=>D.cardId)),A.forEach(D=>{const B=(_[D._role]||[]).find(P=>P.cardId===D.cardId);B&&(B.used=!0)}),y["selected_"+p]=[],se();const z=[...y.log||[]];if(L){const D=(y[p+"Score"]||0)+1,B=A.map(re=>histPlayer(re));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:S.total,aiTotal:0});const P=(y.round||0)+1,Y=p==="p1"?"p2":"p1",W={...y,[p+"Team"]:_,[p+"Score"]:D},X=he(W);N.add(P),st(B,D,y[x+"Score"]||0,!0,async()=>{await q({[p+"Team"]:_,[p+"Score"]:D,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:X?"finished":Y+"-attack",attacker:Y,round:P,log:z}),X&&await je({...y,[p+"Score"]:D})});return}z.push({type:"pending",text:`⚔️ ${y[p+"Name"]} attaque (${S.total})`}),await q({[p+"Team"]:_,[x+"Team"]:y[x+"Team"],pendingAttack:{...S,players:A,side:p},["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},phase:x+"-defense",log:z})}async function _e(){const _=y[p+"Team"],L=(y["selected_"+p]||[]).map(oe=>{const ue=(_[oe._role]||[]).find(ze=>ze.cardId===oe.cardId)||oe,fe=_[oe._role]||[],xe=fe.findIndex(ze=>ze.cardId===oe.cardId),Z=xt(fe.length),be=xe>=0?Z[xe]:ue._col??1;return{...ue,_line:oe._role,_col:be}}),A=ui(L,y.modifiers[p]||{});pe(p,L.map(oe=>oe.cardId)),L.forEach(oe=>{const ue=(_[oe._role]||[]).find(fe=>fe.cardId===oe.cardId);ue&&(ue.used=!0)}),y["selected_"+p]=[],se();const S=fi(y.pendingAttack.total,A.total,y.modifiers[p]||{}),z=y.pendingAttack.side,D=S==="attack"||(S==null?void 0:S.goal),B=z==="p1"?"p2":"p1",P=(y.round||0)+1,Y=(y.pendingAttack.players||[]).map(oe=>histPlayer(oe)),W=[...y.log||[]];W.push({type:"duel",isGoal:D,homeScored:D&&z===p,text:D?`⚽ BUT de ${y[z+"Name"]} ! (${y.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${y.pendingAttack.total} vs ${A.total})`,homePlayers:Y,aiPlayers:L.map(oe=>histPlayer(oe)),homeTotal:y.pendingAttack.total,aiTotal:A.total});const X=D?(y[z+"Score"]||0)+1:y[z+"Score"]||0,re={...y,[p+"Team"]:_,[z+"Score"]:X},J=he(re),ce=J?"finished":B+"-attack",de=async()=>{await q({[p+"Team"]:_,[x+"Team"]:y[x+"Team"],[z+"Score"]:X,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:ce,attacker:B,round:P,log:W}),(ce==="finished"||J)&&await je({...y,[z+"Score"]:X})};if(D){const oe=z===p,ue=oe?X:y[p+"Score"]||0,fe=oe?y[x+"Score"]||0:X;N.add(P),st(Y,ue,fe,oe,de)}else await de()}function we(_){return["MIL","ATT"].some(L=>(_[L]||[]).some(A=>!A.used))}function me(_){return["GK","DEF","MIL","ATT"].some(L=>(_[L]||[]).some(A=>!A.used))}function Le(_){return me(_)&&!we(_)}function $e(_){const L=y[_+"Team"],A=y[(_==="p1"?"p2":"p1")+"Team"];return!!(we(L)||!me(A)&&Le(L))}function he(_){const L=["MIL","ATT"].some(W=>(_.p1Team[W]||[]).some(X=>!X.used)),A=["MIL","ATT"].some(W=>(_.p2Team[W]||[]).some(X=>!X.used)),S=me(_.p1Team),z=me(_.p2Team);return!L&&!(!z&&S)&&(!A&&!(!S&&z))}function Ce(_){const L=_.p1Score||0,A=_.p2Score||0;return L===A?null:L>A?v.home_id:v.away_id}async function je(_){try{const L=Ce(_),A=L?v.home_id===L?v.away_id:v.home_id:null;await w.from("matches").update({status:"finished",winner_id:L,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),L&&A&&updateEvolutiveCards(L,A).catch(()=>{})}catch(L){console.error("[PvP] finishMatch:",L)}}function Fe(){var z;const _=y[p+"Score"],L=y[x+"Score"],A=_>L,S=_===L;He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{w.removeChannel(ee)}catch{}Ue(e),m("home")})}se()}async function oi(e,t,i=!1){var s,d;const{state:n,navigate:a,toast:o}=t,r=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await St(e,t,i?"ranked":"random",async({deckId:l,formation:c,starters:u,subsRaw:g,gcCardsEnriched:m,gcDefs:f,stadiumDef:p})=>{const x=m||[];He(e),await Do(e,t,l,c,u,g,x,f,p,i,r)})}async function qo(e,t,i){return Bo(e,t,i)}async function Do(e,t,i,n,a,o,r=[],s=[],d=null,l=!1,c=null){var F,N;const{state:u,navigate:g,toast:m}=t,f=(c==null?void 0:c.mmr)??((F=u.profile)==null?void 0:F.mmr)??1e3,p=l?di(f):null,x=l?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=l?(p==null?void 0:p.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${x};color:#fff;padding:32px;text-align:center;gap:20px">
      ${l?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${l?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${l?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(f)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`,(N=document.getElementById("cancel-mm"))==null||N.addEventListener("click",()=>{k==null||k.unsubscribe(),Ue(e),g("home")});const h=u.user.id,{data:v}=await w.from("matchmaking_queue").select("id").eq("user_id",h).single();v||await w.from("matchmaking_queue").insert({user_id:h,deck_id:i,formation:n,mmr:f,is_ranked:l});let k,y=!1;const C=async()=>{if(y)return;const{data:te}=await w.from("matches").select("id, home_id, away_id").or(`home_id.eq.${h},away_id.eq.${h}`).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(te){y=!0,k==null||k.unsubscribe(),await w.from("matchmaking_queue").delete().eq("user_id",h);const ne=te.home_id===h;await Ct(e,t,te.id,ne,{myGC:r,gcDefs:s,stadiumDef:d,isRanked:l,rankedData:c,onMatchEnd:l?Fo:null})}};if(await C(),y)return;k=w.channel(`mm_${h}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${h}`},C).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`away_id=eq.${h}`},C).subscribe();const E=setInterval(C,3e3);setTimeout(()=>{clearInterval(E),k==null||k.unsubscribe()},12e4)}async function Fo(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:d,matchId:l}=e,c=i.user.id,u=o===c,g=a===c,{data:m}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:f}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(m&&f){const p=gn(m.mmr,m.mmr_rd,m.mmr_v,f.mmr,f.mmr_rd,g?1:0);await w.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:g?w.sql`mmr_wins + 1`:void 0,mmr_losses:g?void 0:w.sql`mmr_losses + 1`}).eq("id",c),n(g?`+MMR ↑ ${Math.round(p.mmr-m.mmr)}`:`-MMR ↓ ${Math.round(m.mmr-p.mmr)}`,g?"success":"error",4e3)}}const Go=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:oi,resumePvpMatch:qo},Symbol.toStringTag,{value:"Module"}));async function Po(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await St(e,t,"friend",async({deckId:d,formation:l,starters:c,subsRaw:u,gcCardsEnriched:g,gcDefs:m,stadiumDef:f})=>{const p=g||[];He(e),r?await Ro(e,t,d,p,m,f,r,s):await No(e,t,d,p,m,f)})}async function Ro(e,t,i,n,a,o,r,s){var p;const{state:d,navigate:l,toast:c}=t,u=d.user.id,{data:g}=await w.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending"}).select("id").single();e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`,(p=document.getElementById("cancel-friend"))==null||p.addEventListener("click",async()=>{g&&await w.from("friend_match_invites").update({status:"declined"}).eq("id",g.id),Ue(e),l("home")});let m=!1;const f=w.channel(`friend_${u}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${u}`},async({new:x})=>{m||(m=!0,f.unsubscribe(),g&&await w.from("friend_match_invites").update({status:"accepted"}).eq("id",g.id),await Ct(e,t,x.id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();setTimeout(()=>{m||(f.unsubscribe(),c("Invitation expirée","info"),l("home"))},12e4)}async function No(e,t,i,n,a,o){const{state:r,navigate:s,toast:d}=t,l=r.user.id,{data:c}=await w.from("matches").select("id, home_id, away_id, status").eq("away_id",l).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){d("Aucun match en attente","error"),s("home");return}await Ct(e,t,c.id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const gt="#1A6B3C",Xe="#D4A017";async function Oo(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await et(e,t,i);return}await dt(e,t)}async function dt(e,t,i="waiting"){var b;const{state:n}=t,a=n.profile.id,{data:o}=await w.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(h=>h.league_id),{data:s,error:d}=await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=d?(await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await w.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],g=u.filter(h=>h.status==="waiting"&&!h.is_archived),m=u.filter(h=>h.status==="active"&&!h.is_archived),f=u.filter(h=>h.is_archived||h.status==="finished"),p=l.filter(h=>!r.includes(h.id)),x=[{key:"waiting",label:"🟡 En attente",count:g.length+p.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:f.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${x.map(h=>`<button class="ml-tab" data-tab="${h.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===h.key?gt:"transparent"};background:none;font-size:12px;font-weight:${i===h.key?"900":"600"};color:${i===h.key?gt:"#888"};cursor:pointer">${h.label}${h.count?` (${h.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Ho(g,p,a):i==="active"?Uo(m,a):Ko(f,a)}
    </div>
  </div>`,(b=document.getElementById("ml-create-btn"))==null||b.addEventListener("click",()=>Vo(e,t)),e.querySelectorAll(".ml-tab").forEach(h=>h.addEventListener("click",()=>dt(e,t,h.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(h=>h.addEventListener("click",()=>et(e,t,h.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(h=>h.addEventListener("click",v=>{v.stopPropagation(),an(e,t,h.dataset.join,h.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(h=>h.addEventListener("click",v=>{v.stopPropagation(),ri(e,t,h.dataset.delete,h.dataset.name,i)}))}function Ut(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Ho(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Ut(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Ut(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Uo(e,t){return e.length?e.map(i=>Ut(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Ko(e,t){return e.length?e.map(i=>Ut(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Vo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var f,p,x,b;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((f=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:f.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",l=((b=(x=document.getElementById("ml-pwd"))==null?void 0:x.value)==null?void 0:b.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!l){n("Mot de passe requis","error");return}const{data:c,error:u}=await w.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:l,mode:d,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:g}=await w.from("users").select("credits").eq("id",t.state.profile.id).single();if(((g==null?void 0:g.credits)||0)<r){await w.from("mini_leagues").delete().eq("id",c.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await w.from("users").update({credits:g.credits-r}).eq("id",t.state.profile.id),await w.from("mini_leagues").update({pot:r}).eq("id",c.id),await w.from("mini_league_members").insert({league_id:c.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=g.credits-r);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),et(e,t,c.id)})}function Yo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function an(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await w.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:d}=await w.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(d>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await Yo();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const l=s.entry_fee||100,{data:c}=await w.from("users").select("credits").eq("id",r).single();if(((c==null?void 0:c.credits)||0)<l){a(`Crédits insuffisants — il te faut ${l.toLocaleString("fr")} cr. (solde : ${((c==null?void 0:c.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await w.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:g}=await w.from("users").update({credits:c.credits-l}).eq("id",r),{error:m}=await w.from("mini_leagues").update({pot:(s.pot||0)+l}).eq("id",i);(g||m)&&console.error("Erreur post-inscription:",g,m),o.profile&&(o.profile.credits=c.credits-l);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${l.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+l).toLocaleString("fr")} cr.`,"success"),et(e,t,i)}async function Wo(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await w.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:d}=await w.from("users").select("credits").eq("id",r).single();await w.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await w.from("users").update({credits:((d==null?void 0:d.credits)||0)+n}).eq("id",r),await w.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((d==null?void 0:d.credits)||0)+n);const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),dt(e,t,"waiting")}async function ri(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await w.from("mini_league_matches").delete().eq("league_id",i),await w.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await w.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),dt(e,t,a)}async function Xo(e,t,i){await w.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),dt(e,t,"archived")}async function et(e,t,i){var k,y,C,E,F,N,te,ne,ee;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:d}]=await Promise.all([w.from("mini_leagues").select("*").eq("id",i).single(),w.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),w.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await dt(e,t);return}const l=(s||[]).some(q=>q.user_id===o),c=r.creator_id===o,u=(s||[]).map(q=>q.user).filter(Boolean),g=dn(u,d||[]),m=(d||[]).filter(q=>q.matchday===r.current_day),f=r.pot||0,p=r.entry_fee||100,x=m.length>0&&m.every(q=>q.status==="finished"||q.status==="bye"),b=r.current_day>=r.total_days,h=(s||[]).find(q=>q.user_id===o);e.innerHTML=`
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
        ${f>0?`<div style="font-size:12px;font-weight:900;color:${Xe};margin-top:4px">🏆 ${f.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${u.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(q=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${q.club_color2||gt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${q.club_color1||"#fff"}">${(q.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${q.club_name||q.pseudo}</div><div style="font-size:11px;color:#999">@${q.pseudo}</div></div>
            ${q.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${m.map(q=>Di(q,u,o,l)).join("")}
        ${c&&x&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${c&&x&&b?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&g.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${f>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${Xe}">💰</th>`:""}
          </tr></thead>
          <tbody>${g.map((q,I)=>{const $=f>0&&r.status==="finished"?I===0?Math.floor(f*.7):I===1?Math.floor(f*.2):I===2?Math.floor(f*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${q.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${I===0?Xe:I<3?gt:"#555"}">${["🥇","🥈","🥉"][I]||I+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${q.clubName}</div><div style="font-size:10px;color:#999">@${q.pseudo}</div></td>
              <td style="text-align:center">${q.played}</td><td style="text-align:center">${q.won}-${q.drawn}-${q.lost}</td>
              <td style="text-align:center;color:${q.goalDiff>=0?gt:"#cc2222"}">${q.goalDiff>=0?"+":""}${q.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${q.points}</td>
              ${f>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${Xe}">${$?$.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(q,I)=>I+1).reverse().map(q=>{const I=(d||[]).filter($=>$.matchday===q);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${q}</div>${I.map($=>Di($,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((k=document.getElementById("ml-back"))==null||k.addEventListener("click",()=>dt(e,t,v)),(y=document.getElementById("ml-start-btn"))==null||y.addEventListener("click",()=>Jo(e,t,r,u)),(C=document.getElementById("ml-next-day"))==null||C.addEventListener("click",()=>Qo(e,t,i)),(E=document.getElementById("ml-finish-btn"))==null||E.addEventListener("click",()=>sn(e,t,i,f,g,u)),(F=document.getElementById("ml-join-now"))==null||F.addEventListener("click",()=>an(e,t,i,r.type)),(N=document.getElementById("ml-leave-btn"))==null||N.addEventListener("click",()=>Wo(e,t,i,p)),(te=document.getElementById("ml-delete-btn"))==null||te.addEventListener("click",()=>ri(e,t,i,r.name,"waiting")),(ne=document.getElementById("ml-delete-now"))==null||ne.addEventListener("click",()=>ri(e,t,i,r.name,v)),(ee=document.getElementById("ml-archive-btn"))==null||ee.addEventListener("click",()=>Xo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(q=>{q.addEventListener("click",()=>{const I=m.find($=>$.id===q.dataset.playMatch);I&&t.navigate("match-mini-league",{mlMatchId:I.id,leagueId:i})})}),r.status==="finished"&&h){const q=g.findIndex(I=>I.userId===o);q>=0&&q<3&&h.prize_amount>0&&setTimeout(()=>Zo(e,t,r,h,q),400)}}function Di(e,t,i,n,a=!1){const o=u=>t.find(g=>g.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,l=d&&e.status==="pending"&&n&&!a,c=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${d?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?gt:"#999"}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${l?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Jo(e,t,i,n){const{toast:a,state:o}=t,r=er(n.map(l=>l.id),i.mode),s=[];r.forEach((l,c)=>l.forEach(u=>s.push({league_id:i.id,matchday:c+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:d}=await w.from("mini_league_matches").insert(s);if(d){a("Erreur calendrier : "+d.message,"error");return}await w.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),et(e,t,i.id)}async function Qo(e,t,i){const{data:n}=await w.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await sn(e,t,i,n.pot||0,null,null);return}await w.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),et(e,t,i)}async function sn(e,t,i,n,a,o){const{toast:r,state:s}=t;let d=a,l=o;if(!d){const{data:u}=await w.from("mini_league_matches").select("*").eq("league_id",i),{data:g}=await w.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);l=(g||[]).map(m=>m.user).filter(Boolean),d=dn(l,u||[])}const c=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(d.slice(0,3).map((u,g)=>c[g]?w.from("mini_league_members").update({prize_amount:c[g],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await w.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),et(e,t,i)}async function Zo(e,t,i,n,a){var g,m;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][a],l=n.prize_amount||s[a]||0,c=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Xe};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${c?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Xe}">${l.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${c?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Xe};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${l.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#prize-close"))==null||g.addEventListener("click",()=>u.remove()),u.addEventListener("click",f=>{f.target===u&&u.remove()}),(m=u.querySelector("#claim-prize-btn"))==null||m.addEventListener("click",async()=>{const{data:f}=await w.from("users").select("credits").eq("id",o.profile.id).single();await w.from("users").update({credits:((f==null?void 0:f.credits)||0)+l}).eq("id",o.profile.id),await w.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((f==null?void 0:f.credits)||0)+l);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${l.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),et(e,t,i.id)})}function er(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const d=[],l=[n[0],...o];for(let c=0;c<a/2;c++){const u=l[c],g=l[a-1-c];u===null?d.push({bye:g}):g===null?d.push({bye:u}):d.push({home:u,away:g})}r.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:r}function dn(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function Fi(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await ir(e,t,s,r);return}if(r){await mi(e,t,r);return}await tr(e,t)}async function tr(e,t){const{state:i,navigate:n,toast:a}=t;await St(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:d})=>{He(e);const l=r||[],c=i.user.id,{data:u}=await w.from("mini_leagues").insert({creator_id:c,deck_id:o,status:"waiting",gc_cards:l.map(g=>g.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await mi(e,t,u.id)})}async function mi(e,t,i){var u,g,m;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await w.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const d=s.creator_id===r,l=s.participants||[],c=l.length>=4;e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${i.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${l.length}/4)</div>
        ${l.map(f=>{var p;return`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${((p=f.users)==null?void 0:p.pseudo)||"?"}</span>
            ${f.user_id===s.creator_id?'<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>':""}
          </div>`}).join("")}
        ${Array(4-l.length).fill(0).map(()=>`
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join("")}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${d&&c?`
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>`:""}
        ${l.find(f=>f.user_id===r)?"":`
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>`}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await w.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await ln(e,t,i)}),(g=document.getElementById("join-league"))==null||g.addEventListener("click",async()=>{await St(e,t,"mini_league",async({deckId:f,gcCardsEnriched:p})=>{const x=p||[];await w.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:f,gc_cards:x.map(b=>b.id)}),o("Rejoint !","success"),await mi(e,t,i)})}),(m=document.getElementById("back-home"))==null||m.addEventListener("click",()=>a("home"))}async function ln(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await w.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await nr(e,t,i);return}const s=t.state.user.id,d=r.home_id===s;await Ct(e,t,r.match_id,d,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async l=>{await w.from("mini_league_matches").update({status:"finished",home_score:l.homeScore,away_score:l.awayScore,winner_id:l.winnerId}).eq("id",r.id),await ln(e,t,i)}})}async function ir(e,t,i,n){const{data:a}=await w.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await Ct(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await w.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function nr(e,t,i){var c;const{navigate:n}=t,{data:a}=await w.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(g=>{o[g]||(o[g]=0),r[g]||(r[g]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var g,m;s[u.home_id]=(g=u.home)==null?void 0:g.pseudo,s[u.away_id]=(m=u.away)==null?void 0:m.pseudo});const d=Object.keys(o).sort((u,g)=>o[g]-o[u]||r[g]-r[u]),l=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${d.map((u,g)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:24px">${l[g]||"•"}</div>
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
    </div>`,(c=document.getElementById("back-home"))==null||c.addEventListener("click",()=>n("home"))}const or="/",rr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ar(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var c,u,g;const s=t[n],d=n===t.length-1,l=Math.round((n+1)/t.length*100);a.innerHTML=`
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
    `,a.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.marginTop="6px",m.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"}),(c=a.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{d?r():(n++,o())}),(g=a.querySelector("#tuto-skip"))==null||g.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await w.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function sr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await w.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await w.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):rr;ar(e,r,()=>t("boosters"))}const Dt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ct(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function dr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await xi(e,t)}async function xi(e,t){const{state:i,toast:n}=t,{data:a}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let d="buy";const l=()=>{var p,x,b,h,v,k,y;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((x=document.getElementById("flt-club"))==null?void 0:x.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:((v=document.getElementById("flt-rarity"))==null?void 0:v.value)||"",note1:parseInt((k=document.getElementById("flt-note1"))==null?void 0:k.value)||0,note2:parseInt((y=document.getElementById("flt-note2"))==null?void 0:y.value)||0}};function c(p){const x=l();return p.filter(b=>{var N,te,ne;const h=(N=b.card)==null?void 0:N.player;if(!h)return!1;const v=`${h.firstname} ${h.surname_real}`.toLowerCase(),k=(((te=h.clubs)==null?void 0:te.encoded_name)||"").toLowerCase(),y=(h.country_code||"").toLowerCase(),C=((ne=b.card)==null?void 0:ne.evolution_bonus)||0,E=ct(h,h.job,C),F=h.job2?ct(h,h.job2,C):0;return!(x.name&&!v.includes(x.name)||x.club&&!k.includes(x.club)||x.country&&!y.includes(x.country)||x.job&&h.job!==x.job||x.rarity&&h.rarity!==x.rarity||x.note1&&E<x.note1||x.note2&&F<x.note2)})}function u(p){var F,N,te,ne;const x=(F=p.card)==null?void 0:F.player;if(!x)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,h=ct(x,x.job,b),v=x.job2?ct(x,x.job2,b):0,k=(i.profile.credits||0)>=p.price,y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=Dt[x.job]||"#bbb",E=x.job2?Dt[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(te=x.clubs)!=null&&te.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${v}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ne=p.seller)==null?void 0:ne.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${k?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${k?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function g(p){var F,N,te,ne;const x=(F=p.card)==null?void 0:F.player;if(!x)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,h=ct(x,x.job,b),v=x.job2?ct(x,x.job2,b):0,k=p.status==="sold",y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=Dt[x.job]||"#bbb",E=x.job2?Dt[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${k?"opacity:0.7":""}">
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(te=x.clubs)!=null&&te.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${v}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:${k?"#22c55e":"#999"};margin-top:1px">
          ${k?`✅ Vendu à ${((ne=p.buyer)==null?void 0:ne.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${k?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function m(){const p=document.getElementById("mkt-content"),x=document.getElementById("mkt-filters");if(p){if(x.style.display=d==="buy"?"flex":"none",d==="buy"){const b=c(r);p.innerHTML=b.length?b.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(v=>v.status==="active").sort((v,k)=>new Date(k.listed_at)-new Date(v.listed_at)),h=s.filter(v=>v.status==="sold").sort((v,k)=>new Date(k.sold_at||k.listed_at)-new Date(v.sold_at||v.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(g).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(g).join(""):"")+(!b.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>lr(b.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>pr(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(x=>{const b=x===p;x.style.background=b?"var(--green)":"#fff",x.style.color=b?"#fff":"var(--gray-600)",x.style.borderColor=b?"var(--green)":"var(--gray-200)"}),m()})});let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var x;(x=document.getElementById(p))==null||x.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(m,250)})}),m()}async function lr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(c=>c.id===e);if(!s)return;const d=s.price;if((a.profile.credits||0)<d){o("Crédits insuffisants","error");return}cr(s,async()=>{const{error:c}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(c){o("Erreur achat : "+c.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await xi(i,n)})}function cr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function pr(e,t,i){const{toast:n}=i,{data:a}=await w.from("market_listings").select("card_id").eq("id",e).single();if(await w.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await w.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),xi(t,i)}async function ur(e,t){var c,u,g,m;const{state:i,navigate:n}=t,a=((u=(c=t==null?void 0:t.state)==null?void 0:c.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),w.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function d(){var p,x;const f=document.getElementById("rankings-list");if(f){if(s==="global"){const b=o||[];f.innerHTML=b.length>0?b.map((h,v)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${v<3?["#D4A017","#a0a0a0","#cd7f32"][v]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${v<3?"16":"13"}px">${v<3?["🥇","🥈","🥉"][v]:v+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${h.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${h.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${h.trophies_top1} 🥈${h.trophies_top2} 🥉${h.trophies_top3}</div>
            <div style="color:var(--gray-600)">${h.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const b=r||[];f.innerHTML=b.length>0?b.map((h,v)=>{const k=di(h.mmr??1e3),y=(h.ranked_wins||0)+(h.ranked_losses||0)+(h.ranked_draws||0),C=y>0?Math.round((h.ranked_wins||0)/y*100):0,E=h.id===i.profile.id,F=(h.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${E?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${v<3?["#D4A017","#a0a0a0","#cd7f32"][v]:"rgba(255,255,255,0.08)"};color:${v<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${v<3?"16":"13"}px">${v<3?["🥇","🥈","🥉"][v]:v+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${k.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${h.club_name} · ${k.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${F?"❓":k.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${k.color}">${F?"Placement":k.label}</div>
              ${F?"":`<div style="font-size:10px;color:var(--gray-600)">${C}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=l(s==="global")),(x=document.getElementById("tab-ranked"))!=null&&x.style&&(document.getElementById("tab-ranked").style.cssText=l(s==="ranked"))}}const l=f=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${f?"900":"400"};background:${f?"var(--green)":"rgba(255,255,255,0.06)"};color:${f?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,d(),(g=document.getElementById("tab-global"))==null||g.addEventListener("click",()=>{s="global",d()}),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{s="ranked",d()})}async function fr(e,t){var C,E,F,N;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),w.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(C=document.getElementById("ranked-back"))==null||C.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,l=s.mmr_deviation??350,c=s.mmr_volatility??.06,u=s.placement_matches??0,g=u<10,m=Math.max(0,10-u),f=di(d),p=mn(d),x=Yt.findIndex(te=>te.id===f.id),b=Yt[x+1]||null,h={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},v=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),k=v>0?Math.round((s.ranked_wins||0)/v*100):0,y=Yt.map(te=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${f.id===te.id?1:.35};
      transform:${f.id===te.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${f.id===te.id?"28px":"20px"}">${te.emoji}</div>
      <div style="font-size:9px;color:${te.color};font-weight:${f.id===te.id?"900":"400"};letter-spacing:0.5px">${te.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${h[f.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(F=document.getElementById("ranked-leaderboard-btn"))==null||F.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:l,sigma:c,isPlacement:g}})})}async function gr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(c=>c.status==="finished"),d=(o||[]).filter(c=>c.status==="in_progress");function l(c){const u=c.home_id===a.id;u?c.home_score:c.away_score,u?c.away_score:c.home_score;const g=c.winner_id===a.id,m=c.home_score===c.away_score&&c.status==="finished",f=c.status!=="finished"?"…":m?"N":g?"V":"D",p=c.status!=="finished"||m?"#888":g?"#1A6B3C":"#c0392b";let x=r[c.mode]||c.mode;c.away_id===null&&!x.startsWith("IA")&&(x="IA");const h=c.home_id===a.id?c.away:c.home;let v;c.away_id===null?v=x:h?v=`${h.club_name||h.pseudo} (${h.pseudo})`:v="Adversaire";let k="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(c.created_at),C=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${C}${c.status==="in_progress"?" · en cours":""}</div>
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
  </div>`}xn(bn);const ve={user:null,profile:null,page:"home",params:{}};function pt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function mr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ai(){document.getElementById("modal-overlay").classList.add("hidden")}async function _t(){if(!ve.user)return;const{data:e}=await w.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}function $t(e,t={}){ve.page=e,ve.params=t,cn()}async function cn(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:$t,toast:pt,openModal:mr,closeModal:ai,refreshProfile:_t};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Ii(e,i);break;case"collection":await Hn(e,i);break;case"decks":await ei(e,i);break;case"boosters":await io(e,i);break;case"ranked":await fr(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await oi(e,i,!1):s==="ranked"?await oi(e,i,!0):s==="friend"?await Po(e,i,(n=ve.params)==null?void 0:n.friendId,(a=ve.params)==null?void 0:a.friendName):s==="mini-league"?await Fi(e,i,(o=ve.params)==null?void 0:o.mlMatchId,(r=ve.params)==null?void 0:r.leagueId):await ho(e,i);break}case"market":await dr(e,i);break;case"rankings":await ur(e,i);break;case"matches":await gr(e,i);break;case"friends":await En(e,i);break;case"mini-league":await Oo(e,i);break;case"match-mini-league":{const s=ve.params||{};await Fi(e,i,s.mlMatchId,s.leagueId);break}default:await Ii(e,i)}}function xr(){var n;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function br(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ai()}),document.getElementById("modal-close").addEventListener("click",ai);const{data:{session:e}}=await w.auth.getSession();if(!e){Gi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt});return}ve.user=e.user,await _t(),Gi();try{const{data:i}=await w.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),yn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){vn(document.getElementById("app"),{state:ve,navigate:async()=>{await _t(),Zt()},toast:pt,refreshProfile:_t});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){po(document.getElementById("app"),{state:ve,navigate:()=>Zt(),toast:pt,refreshProfile:_t});return}Zt(),setTimeout(()=>sr(ve.profile,$t,pt),800),w.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:pt}))})}function hr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=hr()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Zt(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&w.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),xr(),cn()}function Gi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function pn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}br().catch(e=>{console.error("Échec du démarrage:",e),pn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&pn("Le serveur met trop de temps à répondre.")},12e3);
