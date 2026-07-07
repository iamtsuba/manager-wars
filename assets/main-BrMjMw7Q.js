const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-BZe0pGr4.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as T,F as ki,i as Ht,k as Qi,l as nt,m as Mi,f as Nt,n as Lo,T as ci,j as Io,o as Mo,b as jo}from"./formation-links-BZe0pGr4.js";const Co="/";function ji(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,l,m,a,o,y;const s=n==="login";e.innerHTML=`
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
        <img src="${Co}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${s?"rgba(26,107,60,0.3)":"transparent"};
            color:${s?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${s?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${s?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${s?"transparent":"rgba(26,107,60,0.3)"};
            color:${s?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${s?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${s?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${s?`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{n="register",d()}),s?((m=document.getElementById("login-password"))==null||m.addEventListener("keydown",p=>{var x;p.key==="Enter"&&((x=document.getElementById("login-btn"))==null||x.click())}),(a=document.getElementById("login-btn"))==null||a.addEventListener("click",async()=>{const p=document.getElementById("login-email").value.trim(),x=document.getElementById("login-password").value,_=document.getElementById("login-error");if(_.textContent="",!p||!x){_.textContent="Remplissez tous les champs.";return}const f=document.getElementById("login-btn");f.textContent="⏳ Connexion…",f.disabled=!0;const{error:c}=await T.auth.signInWithPassword({email:p,password:x});if(f.textContent="⚽ Se connecter",f.disabled=!1,c){_.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",p=>{var x;p.key==="Enter"&&((x=document.getElementById("reg-btn"))==null||x.click())}),(y=document.getElementById("reg-btn"))==null||y.addEventListener("click",async()=>{const p=document.getElementById("reg-email").value.trim(),x=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,f=document.getElementById("reg-error");if(f.textContent="",!p||!x||!_){f.textContent="Remplissez tous les champs.";return}if(x.length<6){f.textContent="Mot de passe trop court (min. 6 caractères).";return}if(x!==_){f.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:z}=await T.auth.signUp({email:p,password:x});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,z){f.textContent=z.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const u=document.getElementById("login-email");u&&(u.value=p)},50)}))};d()}function qo(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",r="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${r};border-color:${s}">
          <span id="logo-initials" style="color:${s}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${s};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${s}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var _;const a=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),y=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",p=y.trim().split(" ").filter(Boolean),x=p.length>=2?(p[0][0]+p[1][0]).toUpperCase():y.slice(0,2).toUpperCase();a&&(a.style.background=r,a.style.borderColor=s),o&&(o.textContent=x,o.style.color=s)}document.getElementById("color1").addEventListener("input",a=>{s=a.target.value,document.getElementById("swatch1").style.background=s,l()}),document.getElementById("color2").addEventListener("input",a=>{r=a.target.value,document.getElementById("swatch2").style.background=r,l()});function m(a){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${a}`).classList.add("active"),document.getElementById("step-num").textContent=a,document.getElementById("progress-fill").style.width=`${Math.round(a/3*100)}%`,a===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",a.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:y}=await T.from("users").select("id").eq("pseudo",a).maybeSingle();if(y){o.textContent="Ce pseudo est déjà pris.";return}m(2)}),document.getElementById("step2-back").addEventListener("click",()=>m(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const a=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",a.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:y}=await T.from("users").select("id").eq("club_name",a).maybeSingle();if(y){o.textContent="Ce nom de club est déjà pris.";return}m(3)}),document.getElementById("step3-back").addEventListener("click",()=>m(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),y=document.getElementById("step3-error"),p=document.getElementById("step3-finish");y.textContent="",p.disabled=!0,p.textContent="Création en cours…";try{const{error:x}=await T.from("users").insert({id:t.user.id,pseudo:a,club_name:o,club_color1:s,club_color2:r,credits:1e4});if(x)throw x;await Bo(t.user.id),await d(),n(`Bienvenue ${a} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){y.textContent=x.message,p.disabled=!1,p.textContent="🚀 Créer mon profil !"}})}async function Bo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Fo="modulepreload",Do=function(e){return"/"+e},Ci={},ni=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(m=>{if(m=Do(m),m in Ci)return;Ci[m]=!0;const a=m.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${o}`))return;const y=document.createElement("link");if(y.rel=a?"stylesheet":Fo,a||(y.as="script"),y.crossOrigin="",y.href=m,l&&y.setAttribute("nonce",l),document.head.appendChild(y),a)return new Promise((p,x)=>{y.addEventListener("load",p),y.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return d.then(r=>{for(const l of r||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},Rt="#1A6B3C",Ot="#cc2222",Go="#D4A017",qi="#888";async function Po(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await eo(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ro(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>to(i,n,null,t))}async function eo(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:s,error:r}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:l}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),m=document.getElementById("pending-badge");m&&(l>0?(m.style.display="flex",m.textContent=l):m.style.display="none");const a=document.getElementById("friends-list");if(!a)return;if(r){console.error("[Friends] Erreur:",r),a.innerHTML=`<div style="color:${Ot};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(s||[]).map(x=>x.requester_id===d?x.addressee_id:x.requester_id);let y={};if(o.length){const{data:x}=await T.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(x||[]).forEach(_=>{y[_.id]=_})}const p=(s||[]).map(x=>({friendshipId:x.id,friend:y[x.requester_id===d?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!p.length){a.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}a.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${p.length} ami${p.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${p.map(({friendshipId:x,friend:_})=>No(_,x)).join("")}
    </div>`,a.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>Oo(e,x.dataset.stats,x.dataset.friendName))}),a.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const _=x.dataset.friendId,f=x.dataset.friendName;console.log("[Friends] clic match",{fid:_,fname:f,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:_,friendName:f}):t("Erreur navigation","error")})})}function No(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),s=e.club_color2||Rt,r=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,m=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${s};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${m?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${m?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${m?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Go};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ro(e,t){const i=Ei();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Ot};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ti()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),s=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",s),i.addEventListener("click",r=>{r.target===i&&s()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:l}=await T.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!l){d.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:m}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(m){const o=m.status==="accepted"?"Vous êtes déjà amis !":m.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:a}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(a){d.textContent="Erreur : "+a.message;return}s(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function to(e,t,i=null,n={}){const d=e.user.id,{data:s}=await T.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(s||[]).map(p=>p.requester_id);let l={};if(r.length){const{data:p}=await T.from("users").select("id, pseudo, club_name").in("id",r);(p||[]).forEach(x=>{l[x.id]=x})}const m=(s||[]).map(p=>({...p,requester:l[p.requester_id]||{pseudo:"?"}})),a=Ei(),o=m||[];a.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(p=>{var x,_,f;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=p.requester)==null?void 0:x.club_name)||((_=p.requester)==null?void 0:_.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((f=p.requester)==null?void 0:f.pseudo)||""})</span>
                </div>
                <button data-accept="${p.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Rt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${p.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ot};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ti()}`,document.body.appendChild(a);const y=()=>a.remove();a.querySelector("#pending-close").addEventListener("click",y),a.addEventListener("click",p=>{p.target===a&&y()}),a.querySelectorAll("[data-accept]").forEach(p=>{p.addEventListener("click",async()=>{const{error:x}=await T.from("friendships").update({status:"accepted"}).eq("id",p.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}p.closest("div[style]").remove(),t("✅ Ami accepté !","success"),eo(e,t,n),i&&i()})}),a.querySelectorAll("[data-decline]").forEach(p=>{p.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",p.dataset.decline),p.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Oo(e,t,i){const n=e.user.id,[d,s]=[n,t].sort(),r=n===d,{data:l}=await T.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single(),m=e.profile.club_name||e.profile.pseudo||"Moi",a=l||{},o=r?a.wins_p1||0:a.wins_p2||0,y=r?a.wins_p2||0:a.wins_p1||0,p=a.draws||0,x=r?a.goals_p1||0:a.goals_p2||0,_=r?a.goals_p2||0:a.goals_p1||0,f=r?a.gc_used_p1||0:a.gc_used_p2||0,c=r?a.gc_used_p2||0:a.gc_used_p1||0,z=a.matches_total||0,u=(D,C,q,I=Rt,P=Ot)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${I}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${D}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${P}">${q}</div>
    </div>`,M=Ei();M.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${z===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${u("Victoires",o,y)}
        ${u("Nuls",p,p,qi,qi)}
        ${u("Défaites",y,o)}
        ${u("Buts marqués",x,_)}
        ${u("Buts encaissés",_,x,Ot,Rt)}
        ${u("GC utilisés ⚡",f,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ti()}`,document.body.appendChild(M),M.querySelector("#stats-close").addEventListener("click",()=>M.remove()),M.addEventListener("click",D=>{D.target===M&&M.remove()})}function Ei(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ti(){return`
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
        background:${Rt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function io({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:s}){const[r,l]=[e,t].sort(),m=e!==r,a=m?n:i,o=m?i:n,y=m?s:d,p=m?d:s,x=a>o?1:0,_=o>a?1:0,f=a===o?1:0,{data:c}=await T.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",l).single();c?await T.from("friend_match_stats").update({wins_p1:c.wins_p1+x,wins_p2:c.wins_p2+_,draws:c.draws+f,goals_p1:c.goals_p1+a,goals_p2:c.goals_p2+o,gc_used_p1:c.gc_used_p1+y,gc_used_p2:c.gc_used_p2+p,matches_total:c.matches_total+1}).eq("player1_id",r).eq("player2_id",l):await T.from("friend_match_stats").insert({player1_id:r,player2_id:l,wins_p1:x,wins_p2:_,draws:f,goals_p1:a,goals_p2:o,gc_used_p1:y,gc_used_p2:p,matches_total:1})}const Ho="2026.07.07-1724";async function Bi(e,{state:t,navigate:i,toast:n}){var s,r;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ho}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",m=>{m.preventDefault(),i(l.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const m=l.dataset.action;if(m==="match-ai"){Yo(i);return}if(m==="match-random"){i("match",{matchMode:"random"});return}if(m==="match-friend"){i("friends");return}if(m==="mini-league"){i("mini-league");return}if(m==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var D,C,q,I,P,te;const l=((D=window.visualViewport)==null?void 0:D.height)||window.innerHeight,m=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,a=((q=document.querySelector(".bottom-nav"))==null?void 0:q.offsetHeight)||60,o=((I=e.querySelector(".hero-compact"))==null?void 0:I.offsetHeight)||52,y=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const p=((te=(P=e.querySelector("#logout-btn"))==null?void 0:P.closest("div"))==null?void 0:te.offsetHeight)||44,x=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((V,de)=>{var ae;return V+(((ae=document.getElementById(de))==null?void 0:ae.offsetHeight)||0)},0),_=14*5,f=l-m-a-o-p-x-_,c=Math.max(80,Math.round(f*.28)),z=Math.max(160,Math.round(f*.72)),u=Math.floor((z-10)/2);y&&(y.style.minHeight=y.style.maxHeight=c+"px"),e.querySelectorAll(".play-grid .play-card").forEach(V=>{V.style.minHeight=V.style.height=u+"px"});const M=Math.round(u*.55);e.querySelectorAll(".play-card .play-icon").forEach(V=>{V.style.height=M+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),no(t,n),Vo(t,n,i),oo(t,n,i))}async function oo(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:s}=await T.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){n.innerHTML="";return}const r=s.map(m=>m.home_id===d?m.away_id:m.home_id).filter(Boolean);let l={};if(r.length){const{data:m}=await T.from("users").select("id, pseudo, club_name").in("id",r);(m||[]).forEach(a=>{l[a.id]=a.club_name||a.pseudo})}n.innerHTML=s.map(m=>{const a=m.home_id===d?m.away_id:m.home_id,o=l[a]||"Adversaire",y=m.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${y?"🏆 Mini League":m.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${m.id}" data-mini="${y?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${m.id}" data-opp="${a}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(m=>{m.addEventListener("click",async()=>{const a=document.getElementById("page-content")||document.getElementById("app");if(m.dataset.mini==="1"){const{data:o}=await T.from("mini_league_matches").select("id, league_id").eq("match_id",m.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ni(async()=>{const{resumePvpMatch:y}=await Promise.resolve().then(()=>or);return{resumePvpMatch:y}},void 0);o(a,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},m.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(m=>{m.addEventListener("click",()=>{Ko(async()=>{await Uo(m.dataset.abandon,m.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),oo(e,t,i)})})})}async function Uo(e,t,i){const{data:n}=await T.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,s=d?0:3,r=d?3:0,l=n.game_state||{};l.p1Score=s,l.p2Score=r,l.phase="finished",l.forfeit=!0,await T.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:r,game_state:l}).eq("id",e)}function Ko(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Vo(e,t,i){var l,m,a,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const s=((l=d.inviter)==null?void 0:l.club_name)||((m=d.inviter)==null?void 0:m.pseudo)||"?",r=d.inviter_id;n.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${s} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(a=document.getElementById("match-inv-accept"))==null||a.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:s})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function no(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const s=n.length,r=n.slice(0,2).map(m=>{var a;return((a=m.requester)==null?void 0:a.pseudo)||"?"}).join(", "),l=s>2?` +${s-2}`:"";i.innerHTML=`
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
          ${s} demande${s>1?"s":""} d'ami${s>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${r}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{to(e,t,()=>no(e,t))})}function Yo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Ft="/",Fi={GK:Ft+"cards/card-GK.png",DEF:Ft+"cards/card-DEF.png",MIL:Ft+"cards/card-MIL.png",ATT:Ft+"cards/card-ATT.png"},Wo={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Jo(e){return e!=null&&e.face?Ft+"faces/"+e.face:null}function Xo(e){return!e||e.length<2?null:`https://flagcdn.com/48x36/${e.slice(0,2).toLowerCase()}.png`}function Zo(e){var n;const t="https://fcnwclxlkytdfjotqkta.supabase.co",i=((n=e==null?void 0:e.clubs)==null?void 0:n.logo_url)||(e==null?void 0:e.clubLogo);return i?i.startsWith("http")?i:`${t}/storage/v1/object/public/assets/clubs/${i}`:null}function Di(e,t,i=0){return t?(Number(e[`note_${t.toLowerCase()}`])||0)+(t===e.job||t===e.job2?i:0):0}function Qo(e,t){return t?t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code:!1}function ro(e,t={}){var he;const{width:i=160,showStad:n=!1,stadDef:d=null,used:s=!1,extraNote:r=0}=t;if(!e)return`<div style="width:${i}px;height:${Math.round(i*1.38)}px;border-radius:8px;background:#111;opacity:0.3"></div>`;const l=i/506,m=Math.round(i*1.38),a=e._line||e.job||"MIL",o=Wo[a]||"#D4A017",y=Fi[a]||Fi.MIL,p=e._evolution_bonus??e.evolution_bonus??0,x=n&&(e.stadiumBonus||Qo(e,d))?10:0,_=Di(e,a,p)+r+x,f=x>0?"#E87722":"#fff",c=e.job2,z=c?Di(e,c,p)+r+x:null,u=Jo(e),M=Xo(e.country_code),D=Zo(e),C=(e.firstname||"").toUpperCase(),q=(e.surname_encoded||e.name||"").toUpperCase(),I=xe=>Math.round(xe*l),P=I(22),te=I(52),V=I(148),de=I(320),ae=I(100),J=I(130),R=I(64),G=I(28),re=I(60);return`
<div style="position:relative;width:${i}px;height:${m}px;flex-shrink:0;${s?"opacity:0.35;":""}user-select:none">
  <!-- Template de fond -->
  <img src="${y}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill;border-radius:${I(12)}px" draggable="false">

  <!-- Zone noms -->
  <div style="position:absolute;top:${I(18)}px;left:0;right:0;text-align:center;z-index:2;padding:0 ${I(40)}px">
    <div style="font-size:${P}px;font-weight:700;color:${o};letter-spacing:${I(2)}px;line-height:1.1;text-shadow:0 1px 4px rgba(0,0,0,0.8)">${C}</div>
    <div style="font-size:${te}px;font-weight:900;color:#fff;letter-spacing:${I(1)}px;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.9);font-family:Arial Black,Arial">${q}</div>
  </div>

  <!-- Portrait joueur -->
  ${u?`
  <img src="${u}"
    style="position:absolute;top:${V}px;left:50%;transform:translateX(-50%);
    width:${I(300)}px;height:${de}px;object-fit:cover;object-position:top center;
    z-index:2"
    onerror="this.style.display='none'">
  `:""}

  <!-- Drapeau (octogone gauche) -->
  <div style="position:absolute;bottom:${I(38)}px;left:${I(38)}px;z-index:3;
    width:${ae}px;height:${ae}px;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${o};
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${M?`<img src="${M}" style="width:${I(80)}px;height:${I(60)}px;object-fit:cover">`:`<span style="font-size:${I(32)}px">🌍</span>`}
  </div>

  <!-- Note principale (octogone centre) -->
  <div style="position:absolute;bottom:${I(28)}px;left:50%;transform:translateX(-50%);z-index:3;
    width:${J}px;height:${J}px;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:#0a0a0a;border:${I(3)}px solid ${o};
    display:flex;align-items:center;justify-content:center;flex-direction:column">
    <span style="font-size:${R}px;font-weight:900;color:${f};font-family:Arial Black,Arial;line-height:1">${_}</span>
    ${z!==null?`
    <div style="position:absolute;bottom:-${I(20)}px;left:50%;transform:translateX(-50%);
      width:${re}px;height:${re}px;
      clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
      background:#1a0000;border:${I(2)}px solid #bb2020;
      display:flex;align-items:center;justify-content:center">
      <span style="font-size:${G}px;font-weight:900;color:#bb2020;font-family:Arial Black,Arial">${z}</span>
    </div>`:""}
  </div>

  <!-- Logo club (octogone droit) -->
  <div style="position:absolute;bottom:${I(38)}px;right:${I(38)}px;z-index:3;
    width:${ae}px;height:${ae}px;
    clip-path:polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);
    background:${o};
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${D?`<img src="${D}" style="width:${I(72)}px;height:${I(72)}px;object-fit:contain">`:`<span style="font-size:${I(20)}px;font-weight:900;color:#fff">${(((he=e.clubs)==null?void 0:he.encoded_name)||e.clubName||"").slice(0,3).toUpperCase()}</span>`}
  </div>
</div>`}const He={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Se(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Gi=["ATT","MIL","DEF","GK"];function ao(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],r=e[d];if(!s||!r)continue;const l=s._col!=null&&r._col!=null&&s._col===r._col,m=s._col!=null&&r._col!=null&&Math.abs(s._col-r._col)===1,a=Gi.indexOf(s._line||s.job),o=Gi.indexOf(r._line||r.job),y=Math.abs(a-o)===1;if(!((s._line||s.job)===(r._line||r.job)&&m||l&&y))continue;const _=s.country_code&&r.country_code&&s.country_code===r.country_code,f=s.club_id&&r.club_id&&s.club_id===r.club_id;_&&f?t+=2:(_||f)&&(t+=1)}return t}function Ut(e,t={}){const i=e.reduce((s,r)=>{const l=r._line||r.job,m=r.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;return s+(Number(l==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+m},0),n=ao(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Kt(e,t={}){const i=e.reduce((s,r)=>{const l=r._line||r.job;let m=0;l==="GK"?m=Number(r.note_g)||0:l==="MIL"?m=Number(r.note_m)||0:m=Number(r.note_d)||0;const a=r.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return s+m+(r.boost||0)+a},0),n=ao(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Vt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function so(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,l)=>{const m=t==="attack"?Se(r,"ATT"):r._line==="GK"?Se(r,"GK"):Se(r,"DEF");return(t==="attack"?Se(l,"ATT"):l._line==="GK"?Se(l,"GK"):Se(l,"DEF"))-m});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function en(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const lo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function co(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=Ai(i),s=Number(i[t])||0;if(s<=0)return 0;const r=i.note_min??1,l=i.note_max??10,a=(e.current_note??d)-d;return Math.min(l,Math.max(r,s+a))}function Ai(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Si(e,t){!e||!t||await Promise.all([xi(e,"win"),xi(t,"loss")])}async function xi(e,t){const{data:i}=await T.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var s,r;return((s=d.player)==null?void 0:s.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const s=lo[d.player.rarity],r=t==="win"?s.win:s.loss,l=d.player.note_min??1,m=d.player.note_max??10,a=Ai(d.player),o=d.current_note??a,y=Math.min(m,Math.max(l,o+r));return T.from("cards").update({current_note:y}).eq("id",d.id)}))}async function tn(e,t){return xi(e,t)}const po=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:lo,applyOwnEvolution:tn,currentSecondaryNote:co,getBaseMainNote:Ai,updateEvolutiveCards:Si},Symbol.toStringTag,{value:"Module"})),on={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Yt=["GK","DEF","MIL","ATT"],nn=["Tous","GK","DEF","MIL","ATT"],rn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Pi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function an(e){return e.length?e.reduce((t,i)=>Pi(i)>Pi(t)?i:t,e[0]):e[0]}function sn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const dn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ln(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ui(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function fi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,d={...i,_evolution_bonus:n},s=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${s}
    ${ro(d,{width:140})}
  </div>`}function Ni(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${ro(e,{width:140})}
  </div>`}async function cn(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:m}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),a=(l||[]).filter(K=>K.card_type==="player"&&K.player),o=(l||[]).filter(K=>K.card_type==="game_changer"),y=(l||[]).filter(K=>K.card_type==="formation"),p=(l||[]).filter(K=>K.card_type==="stadium"),{data:x}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),_={};(x||[]).forEach(K=>{_[K.name]=K});const{data:f}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(f||[]).forEach(K=>{c[K.id]=K}),p.forEach(K=>{K.stadium_def&&(c[K.stadium_id]=K.stadium_def)});const z=Object.keys(ki),u=Object.keys(He),M={};a.forEach(K=>{const ne=K.player.id;M[ne]=(M[ne]||0)+1}),new Set(Object.keys(M).map(K=>String(K)));const D=new Set(y.map(K=>K.formation)),C=new Set(o.map(K=>K.gc_type));let q="player",I="Tous",P="",te=!1;function V(){return[...a].sort((K,ne)=>{const fe=Yt.indexOf(K.player.job),U=Yt.indexOf(ne.player.job);return fe!==U?fe-U:(K.player.surname_encoded||"").localeCompare(ne.player.surname_encoded||"")})}function de(){return[...m||[]].sort((K,ne)=>{const fe=Yt.indexOf(K.job),U=Yt.indexOf(ne.job);return fe!==U?fe-U:(K.surname_encoded||"").localeCompare(ne.surname_encoded||"")})}function ae(){return V().filter(K=>{const ne=K.player,fe=I==="Tous"||ne.job===I,U=!P||`${ne.firstname} ${ne.surname_encoded}`.toLowerCase().includes(P);return fe&&U})}function J(){return de().filter(K=>{const ne=I==="Tous"||K.job===I,fe=!P||`${K.firstname} ${K.surname_encoded}`.toLowerCase().includes(P);return ne&&fe})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="player"?"var(--green)":"transparent"};
        color:${q==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${a.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="formation"?"var(--green)":"transparent"};
        color:${q==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="gc"?"var(--green)":"transparent"};
        color:${q==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="stadium"?"#E87722":"transparent"};
        color:${q==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${p.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function R(){const K=document.getElementById("col-filters");K&&(q==="player"?(K.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${P}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${nn.map(ne=>`
            <button class="filter-btn" data-job="${ne}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${ne===I?"var(--green)":"var(--gray-200)"};
                background:${ne===I?"var(--green)":"#fff"};
                color:${ne===I?"#fff":"var(--gray-600)"}">
              ${ne}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${te?"var(--yellow)":"var(--gray-200)"};
              background:${te?"var(--yellow)":"#fff"};
              color:${te?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${te?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",ne=>{P=ne.target.value.toLowerCase(),G()}),e.querySelectorAll(".filter-btn").forEach(ne=>{ne.addEventListener("click",()=>{I=ne.dataset.job,R(),G()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{te=!te,R(),G()})):(K.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${te?"var(--yellow)":"var(--gray-200)"};
              background:${te?"var(--yellow)":"#fff"};
              color:${te?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${te?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{te=!te,R(),G()})))}function G(){const K=document.getElementById("col-grid");K&&(q==="player"?ze(K):q==="formation"?qe(K):q==="stadium"?$e(K):Ce(K))}function re(K,ne,fe,U,ie){const X=document.getElementById("col-grid"),le=document.getElementById("col-big");if(!X||!le)return;var we=0;function Te(){const Ae=window.innerWidth>=768,ve=document.getElementById("col-big"),ke=document.getElementById("col-grid");Ae&&ve&&(ve.style.minHeight="420px",ve.style.flex="1 1 auto"),Ae&&ke&&(ke.style.height=Math.round(310*.76+16)+"px",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.padding="8px 16px"),le.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ne(K[we])+"</div>";var Fe=le.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Fe&&Fe.addEventListener("click",function(){U(K[we])}),requestAnimationFrame(function(){var Le=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Le||!le)){var B=le.clientHeight-8,$=le.clientWidth-24,g=Le.offsetHeight,b=Le.offsetWidth;if(g>0&&b>0&&B>40){var h=Ae?2.2:1,v=Math.min(B/g,$/b,h);Le.style.transform="scale("+v.toFixed(3)+")",Le.style.transformOrigin="top center"}}}),X.innerHTML=K.map(function(Le,B){var $=B===we,g="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+($?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+B+'" style="'+g+'">'+fe(Le,$)+"</div>"}).join(""),X.querySelectorAll(".col-mini-item").forEach(function(Le){Le.addEventListener("click",function(){we=Number(Le.dataset.idx),Te(),Le.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Te()}function ue(K){var ne=window.innerWidth>=768?.76:.54,fe;if(!K||K._fake){var U=K?K.player:null;if(!U)return"";fe=Ni(U)}else fe=fi(K,"");return'<div style="display:inline-block;zoom:'+ne+';pointer-events:none;line-height:0">'+fe+"</div>"}function he(K,ne,fe){ne=ne||100,fe=fe||140;var U=Ht[K]||{},ie={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},X=Math.max(3,Math.round(ne*.06)),le=Object.entries(U).map(function(Te){var Ae=Te[0],ve=Te[1],ke=Ae.replace(/\d+$/,""),Fe=ie[ke]||"#888",Le=Math.round(ve.x*ne),B=Math.round(ve.y*fe);return'<circle cx="'+Le+'" cy="'+B+'" r="'+X+'" fill="'+Fe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),we=Math.max(1,Math.round(ne/50));return'<svg viewBox="0 0 '+ne+" "+fe+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ne+'" height="'+fe+'" fill="#1A6B3C"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(fe*.02)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/><line x1="0" y1="'+Math.round(fe*.5)+'" x2="'+ne+'" y2="'+Math.round(fe*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><ellipse cx="'+Math.round(ne*.5)+'" cy="'+Math.round(fe*.5)+'" rx="'+Math.round(ne*.18)+'" ry="'+Math.round(fe*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(fe*.82)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/>'+le+"</svg>"}function xe(K,ne,fe){var U=fe>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+fe+"</div>":"",ie=ne?'data-form-id="'+ne.id+'"':"",X=K.length>7?14:K.length>5?16:19,le=!!ne;return"<div "+ie+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(le?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(le?"":"filter:grayscale(1);opacity:0.5")+'">'+U+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(le?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+X+"px;font-weight:900;color:"+(le?"#1A6B3C":"#aaa")+';line-height:1">'+K+'</div></div><div style="flex:1;overflow:hidden;background:'+(le?"#1A6B3C":"#ccc")+'">'+he(K,140,220)+"</div></div>"}function be(K,ne){var fe=window.innerWidth>=768?.76:.54,U=140,ie=305,X=Math.round(ie*.22),le=ie-X,we=K.length>7?10:13,Te=he(K,U,le),Ae=ne?"1.5px solid #2a7a40":"1px solid #ddd",ve=ne?"":"filter:grayscale(1);opacity:0.45;",ke=ne?"#1A6B3C":"#bbb",Fe="#fff";return'<div style="display:inline-block;zoom:'+fe+';line-height:0;pointer-events:none"><div style="width:'+U+"px;height:"+ie+"px;border-radius:6px;border:"+Ae+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+ve+'"><div style="height:'+X+"px;background:"+ke+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+we+"px;font-weight:900;color:"+Fe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(U-4)+'px">'+K+'</span></div><div style="height:'+le+'px;overflow:hidden;flex-shrink:0">'+Te+"</div></div></div>"}function ze(K){if(te){const ne=J();if(!ne.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const fe=ne.map(U=>a.find(ie=>ie.player.id===U.id)||{_fake:!0,player:U,id:"fake-"+U.id});re(fe,U=>U._fake?Ni(U.player):fi(U,""),U=>U._fake?ue({player:U.player,id:"x",_fake:!0}):ue(U),U=>{U._fake||Ri(U,a,M,t)})}else{const ne=ae();if(!ne.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const fe={};ne.forEach(ie=>{const X=ie.player.id;fe[X]||(fe[X]=[]),fe[X].push(ie)});const U=Object.values(fe).map(ie=>an(ie));re(U,ie=>{const X=M[ie.player.id]||1,le=X>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${X}</div>`:"",Te=a.filter(Ae=>Ae.player.id===ie.player.id&&Ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return fi(ie,le+Te)},ie=>ue(ie),ie=>Ri(ie,a,M,t))}}function qe(K){const ne=te?z:[...D];if(!ne.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const fe=ne.map(U=>({formation:U,card:y.find(ie=>ie.formation===U)||null,owned:D.has(U)}));re(fe,({formation:U,card:ie,owned:X})=>xe(U,X?ie:null,X?y.filter(le=>le.formation===U).length:0),({formation:U,owned:ie})=>be(U,ie),({card:U,owned:ie})=>{ie&&U&&un(U,y,t,s)})}function Ce(K){const ne=Object.keys(_),fe=te?ne.length?ne:u:[...C];if(!fe.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const U=fe.map(ie=>({type:ie,gc:He[ie]||{icon:"⚡",desc:""},def:_[ie]||null,owned:C.has(ie),card:o.find(X=>X.gc_type===ie)||null}));re(U,({type:ie,gc:X,def:le,owned:we,card:Te})=>{var h;const Ae=we?o.filter(v=>v.gc_type===ie).length:0,ve=Ae>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ae}</div>`:"",ke=(le==null?void 0:le.gc_type)==="ultra_game_changer",Fe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Le={purple:"#b06ce0",light_blue:"#00d4ef"},B=Fe[le==null?void 0:le.color]||Fe.purple,$=Le[le==null?void 0:le.color]||Le.purple,g=(le==null?void 0:le.effect)||X.desc||"",b=le!=null&&le.image_url?`/icons/${le.image_url}`:((h=le==null?void 0:le.club)==null?void 0:h.logo_url)||(le!=null&&le.country_code?`https://flagcdn.com/w80/${le.country_code.toLowerCase()}.png`:null);return we&&Te?`<div data-gc-id="${Te.id}" data-gc-type="${ie}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${$};background:${B};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${$}66;cursor:pointer">
          ${ve}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${ie.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${ie}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ke?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${X.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${g.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${ie}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${X.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:ie,gc:X,def:le,owned:we})=>{const Te=window.innerWidth>=768?.76:.54,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ve={purple:"#9b59b6",light_blue:"#00bcd4"},ke=Ae[le==null?void 0:le.color]||Ae.purple,Fe=ve[le==null?void 0:le.color]||ve.purple,Le=le!=null&&le.image_url?`/icons/${le.image_url}`:null;return we?`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ke};border:1px solid ${Fe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${ie}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Le?`<img src="${Le}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${X.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((le==null?void 0:le.effect)||X.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${X.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${ie}</span></div></div>`},({type:ie,owned:X,def:le})=>{X&&pn(ie,le,s)})}function $e(K){const ne="#E87722",fe="/";if(!p.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const U={};p.forEach(X=>{const le=X.stadium_id||"?";(U[le]=U[le]||[]).push(X)});const ie=Object.entries(U).map(([X,le])=>({sid:X,def:c[X]||null,count:le.length,card:le[0]}));re(ie,({def:X,count:le})=>{var Fe,Le;const we=(X==null?void 0:X.name)||"?",Te=((Fe=X==null?void 0:X.club)==null?void 0:Fe.encoded_name)||(X==null?void 0:X.country_code)||"—",Ae=X!=null&&X.image_url?`${fe}icons/${X.image_url}`:((Le=X==null?void 0:X.club)==null?void 0:Le.logo_url)||(X!=null&&X.country_code?`https://flagcdn.com/w80/${X.country_code.toLowerCase()}.png`:null),ve=Ae?`<img src="${Ae}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ke=le>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${le}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ne},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ne}66">
          ${ke}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${we}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${ve}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:X,count:le})=>{var Fe,Le;const we=window.innerWidth>=768?.76:.54,Te=(X==null?void 0:X.name)||"?",Ae=((Fe=X==null?void 0:X.club)==null?void 0:Fe.encoded_name)||(X==null?void 0:X.country_code)||"—",ve=X!=null&&X.image_url?`${fe}icons/${X.image_url}`:((Le=X==null?void 0:X.club)==null?void 0:Le.logo_url)||(X!=null&&X.country_code?`https://flagcdn.com/w80/${X.country_code.toLowerCase()}.png`:null),ke=ve?`<img src="${ve}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${ne},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Te}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${ke}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Ae}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(K=>{K.addEventListener("click",()=>{q=K.dataset.tab,I="Tous",P="",te=!1,e.querySelectorAll(".col-tab-btn").forEach(ne=>{const fe=ne.dataset.tab===q;ne.style.borderBottomColor=fe?"var(--green)":"transparent",ne.style.color=fe?"var(--green)":"var(--gray-600)"}),R(),G()})}),R(),G()}function pn(e,t,i){const n=He[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[t==null?void 0:t.color]||s.purple,m=r[t==null?void 0:t.color]||r.purple,a=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,y=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${m};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${a}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${y?`<img src="${y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Wt=1e3;function un(e,t,i,n){var _,f,c;const{state:d,toast:s,closeModal:r,navigate:l,refreshProfile:m}=i,a=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function y(){const z=Ht[a]||{},u=ki[a]||[],M=290,D=360,C=20;function q(P){const te=z[P];return te?{x:te.x*M,y:te.y*D}:null}let I=`<svg width="${M}" height="${D}" viewBox="0 0 ${M} ${D}" xmlns="http://www.w3.org/2000/svg">`;for(const[P,te]of u){const V=q(P),de=q(te);!V||!de||(I+=`<line x1="${V.x}" y1="${V.y}" x2="${de.x}" y2="${de.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const P of Object.keys(z)){const te=q(P);if(!te)continue;const V=P.replace(/\d+/,""),de=o[V]||"#555";I+=`<circle cx="${te.x}" cy="${te.y}" r="${C}" fill="${de}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${te.x}" y="${te.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${V}</text>`}return I+="</svg>",I}const p=t.filter(z=>z.formation===a);p.length;const x=!e.is_for_sale;n(`Formation ${a}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${y()}
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Wt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(_=document.getElementById("direct-sell-form-btn"))==null||_.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${a} pour ${Wt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const z=p.find(M=>!M.is_for_sale)||p[0];if(!z){s("Aucune carte à vendre","error");return}await T.from("market_listings").delete().eq("card_id",z.id),await T.from("transfer_history").delete().eq("card_id",z.id);const{error:u}=await T.from("cards").delete().eq("id",z.id);if(u){s(u.message,"error");return}await T.from("users").update({credits:(d.profile.credits||0)+Wt}).eq("id",d.profile.id),await m(),s(`+${Wt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),l("collection")}),(f=document.getElementById("market-sell-form-btn"))==null||f.addEventListener("click",async()=>{const z=parseInt(document.getElementById("sell-price-form").value);if(!z||z<1){s("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:z}).eq("id",e.id),await T.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:z}),s("Carte mise en vente sur le marché !","success"),r(),l("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),r(),l("collection")})}async function Ri(e,t,i,n){var ze,qe,Ce,$e,K,ne,fe;const{state:d,toast:s,openModal:r,closeModal:l,navigate:m,refreshProfile:a}=n,o=e.player,y=t.filter(U=>U.player.id===o.id),p=y.length,x=e.evolution_bonus||0,_=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?x:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?x:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?x:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?x:0)),f=o.rarity||"normal",{data:c}=await T.from("sell_price_configs").select("*").eq("rarity",f).lte("note_min",_).gte("note_max",_).order("note_min",{ascending:!1}).limit(1);((ze=c==null?void 0:c[0])==null?void 0:ze.price)??rn[f];const z=o.rarity!=="legende",u=ln(o),M=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:ui(o,o.job))+x,D=o.rarity==="pepite"||o.rarity==="papyte",C=o.job2?(D?co(e,sn(o.job2)):ui(o,o.job2))+(ui(o,o.job2)>0?x:0):null,q=pi[o.job]||"#1A6B3C",I=o.job2?pi[o.job2]:null,P=on[o.rarity]||"#ccc",te=dn[o.country_code]||o.country_code||"",V=e.evolution_bonus||0,ae=M+V,J=C||0,R=J>0?J+V:0,G=y.map(U=>U.id);let re={};if(G.length){const{data:U}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",G).order("transferred_at",{ascending:!0});(U||[]).forEach(ie=>{re[ie.card_id]||(re[ie.card_id]=[]),re[ie.card_id].push(ie)})}const ue=U=>{const ie=U.transferred_at?new Date(U.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",X=U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${U.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${U.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${X}</div>
        <div style="font-size:11px;color:var(--gray-600)">${ie}</div>
      </div>
    </div>`},he=G.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${p>1?`(${p})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${y.map((U,ie)=>{const X=re[U.id]||[],le=U.is_for_sale,we=X.length?X[X.length-1]:null,Ae=(o.rarity==="pepite"||o.rarity==="papyte")&&U.current_note!=null?` (☆${U.current_note})`:"";return`
            <div data-card-id="${U.id}" data-card-idx="${ie}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${le?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${U.id}" ${le?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${ie+1}${Ae}${le?" 🏷️ En vente":""}</div>
                  ${we?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${we.club_name} · ${we.source==="booster"?"Booster":we.price?we.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${ie}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${X.length?`${X.length} club${X.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${ie}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${X.map(ue).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${ae}${o.job2&&J>0?` / ${R}`:""}`:`Note actuelle : ${ae}${o.job2&&J>0?` / ${R}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${p<=1?"#ccc":"#1A6B3C"};border-color:${p<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${p<=1?"not-allowed":"pointer"}"
            ${p<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${z?`
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
    </div>`:"";r(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${P};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${q}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${q}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${M}</text>
            </svg>
            ${C!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${I}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${te}</div>
            ${(qe=o.clubs)!=null&&qe.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ce=o.clubs)==null?void 0:Ce.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([U,ie])=>{const X=pi[U],le=U===o.job||U===o.job2,we=(Number(ie)||0)+(le&&V>0?V:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${X}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${we}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${U}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${p}</div>
        </div>
      </div>
    </div>
    ${he}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),($e=document.getElementById("close-detail"))==null||$e.addEventListener("click",l);let xe=new Set;const be=()=>{const U=xe.size,ie=document.getElementById("sell-action-panel");if(!ie)return;ie.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const X=document.getElementById("evolve-btn");X&&(X.textContent=`⬆️ Évoluer ${U>1?"(+"+U+")":""}`)};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const ie=U.dataset.id;U.checked?xe.add(ie):xe.delete(ie);const X=U.closest(".exemplaire-row");X&&(X.style.borderColor=U.checked?"#1A6B3C":"#eee"),be()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",ie=>{if(ie.target.closest("button")||ie.target.tagName==="INPUT")return;const X=U.querySelector(".expl-check");X&&!X.disabled&&(X.checked=!X.checked,X.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(U=>{U.addEventListener("click",ie=>{ie.stopPropagation();const X=document.querySelector(`.expl-hist[data-hist="${U.dataset.idx}"]`);X&&(X.style.display=X.style.display==="none"?"flex":"none")})}),(K=document.getElementById("evolve-btn"))==null||K.addEventListener("click",async()=>{if(p<=1)return;const U=[...xe];if(!U.length)return;if(xe.has(e.id)){const ve=document.createElement("div");ve.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ve.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(ve),ve.querySelector("#err-close").addEventListener("click",()=>ve.remove()),ve.addEventListener("click",ke=>{ke.target===ve&&ve.remove()});return}const ie=U.filter(ve=>ve!==e.id),X=o.rarity==="legende"?2:1;if((ie.length||1)*X,!(!ie.length&&U.length===1&&U[0]===e.id)){if(!ie.length){s("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(ve=>{const ke=document.createElement("div");ke.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ke.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${ie.length}</strong> copie${ie.length>1?"s":""} sacrifiée${ie.length>1?"s":""}<br>
            📈 Note : <strong>${M+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${M+(e.evolution_bonus||0)+ie.length*X}</strong>
            ${C&&C>0?`<br>📈 Note 2 : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+ie.length*X}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${X} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ke),ke.querySelector("#sac-cancel").addEventListener("click",()=>{ke.remove(),ve(!1)}),ke.querySelector("#sac-ok").addEventListener("click",()=>{ke.remove(),ve(!0)}),ke.addEventListener("click",Fe=>{Fe.target===ke&&(ke.remove(),ve(!1))})}))return;if(ie.length){await T.from("market_listings").delete().in("card_id",ie),await T.from("deck_cards").delete().in("card_id",ie),await T.from("transfer_history").delete().in("card_id",ie),await T.from("decks").update({stadium_card_id:null}).in("stadium_card_id",ie);const{error:ve}=await T.from("cards").delete().in("id",ie);if(ve){s("Erreur suppression : "+ve.message,"error");return}}const we=(e.evolution_bonus||0)+ie.length*X,{error:Te}=await T.from("cards").update({evolution_bonus:we}).eq("id",e.id);if(Te){s("Erreur évolution : "+Te.message,"error");return}const Ae=M+we;s(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${M+e.evolution_bonus||M} → ${Ae}${ie.length?` · ${ie.length} copie${ie.length>1?"s":""} sacrifiée${ie.length>1?"s":""}`:""} !`,"success",4e3),l(),m("collection")}),(ne=document.getElementById("market-sell-btn"))==null||ne.addEventListener("click",async()=>{var Te;const U=[...xe];if(!U.length){s("Sélectionne au moins un exemplaire","warning");return}const ie=parseInt((Te=document.getElementById("sell-market-price"))==null?void 0:Te.value);if(!ie||ie<1){s("Prix invalide","error");return}const{error:X}=await T.from("cards").update({is_for_sale:!0,sale_price:ie}).in("id",U);if(X){s(X.message,"error");return}const le=U.map(Ae=>({seller_id:d.profile.id,card_id:Ae,price:ie,status:"active"})),{error:we}=await T.from("market_listings").insert(le);we&&console.warn("[Market] insert listings:",we.message),s(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${ie.toLocaleString("fr")} cr. chacune !`,"success"),l(),m("collection")}),(fe=document.getElementById("cancel-sell-btn"))==null||fe.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),l(),m("collection")})}const Qt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},$t={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ri(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function uo(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function fo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function fn(e,t=44,i=58){var f;const n=e?ri(e):null,d=e?fo(e):null,s=uo(e==null?void 0:e.country_code),r=(e==null?void 0:e.job)||"MIL",l=$t[r]||"#555",m={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=(e==null?void 0:e._evolution_bonus)??(e==null?void 0:e.evolution_bonus)??0,y=(Number(r==="GK"?e==null?void 0:e.note_g:r==="DEF"?e==null?void 0:e.note_d:r==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(r===(e==null?void 0:e.job)||r===(e==null?void 0:e.job2)?a:0),p=Math.round(i*.19),x=Math.round(i*.25),_=i-p-x;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${m};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${p}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${p}px;left:0;width:${t}px;height:${_}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${x}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${x+2}px;height:${x-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${x-4}px">🌍</span>`}
      <span style="font-size:${x-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${y}</span>
      ${d?`<img src="${d}" style="width:${x-4}px;height:${x-4}px;object-fit:contain">`:(f=e==null?void 0:e.clubs)!=null&&f.encoded_name?`<span style="font-size:${Math.max(4,x-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function yi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(s==null?void 0:s.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(s==null?void 0:s.length)>0?s.map(r=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!r)return;const{data:l,error:m}=await T.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(m){d(m.message,"error");return}d("Deck créé !","success"),Oi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Oi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",r.dataset.name);if(!l||l===r.dataset.name)return;const{error:m}=await T.from("decks").update({name:l}).eq("id",r.dataset.rename);if(m){d(m.message,"error");return}d("Deck renommé !","success"),yi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:l}=await T.from("decks").delete().eq("id",r.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),yi(e,t)})})}async function Oi(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select("*").eq("id",e).single(),{data:r}=await T.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:l}=await T.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),m=(r||[]).filter(z=>z.card_type==="player"&&z.player),a=(r||[]).filter(z=>z.card_type==="formation"),o=(l||[]).filter(z=>z.card_type==="stadium"),y=[...new Set(o.map(z=>z.stadium_id).filter(Boolean))];let p={};if(o.forEach(z=>{z.stadium_def&&z.stadium_id&&(p[z.stadium_id]=z.stadium_def)}),y.length&&Object.keys(p).length<y.length){const{data:z}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",y);(z||[]).forEach(u=>{p[u.id]=u})}const x=a.map(z=>z.formation).filter(Boolean),{data:_}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=s.formation||"4-4-2";x.length>0&&!x.includes(f)&&(f=x[0]);const c={deckId:e,name:s.name,formation:f,formationCardId:s.formation_card_id,stadiumCardId:s.stadium_card_id||null,slots:{},subs:[],playerCards:m,formationCards:a,stadiumCards:o,stadDefMap:p,availableFormations:x};(_||[]).forEach(z=>{z.is_starter?c.slots[z.position]=z.card_id:c.subs.includes(z.card_id)||c.subs.push(z.card_id)}),kt(t,c,i)}function kt(e,t,i){var a,o,y,p;const{navigate:n}=i;Qt[t.formation];const d=Hi(t.formation),s=d.filter(x=>t.slots[x]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Qt),l=(a=t.stadiumCards)==null?void 0:a.find(x=>x.id===t.stadiumCardId);l&&((o=t.stadDefMap)!=null&&o[l.stadium_id]);const m=t.subs.map(x=>t.playerCards.find(_=>_.id===x)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${s}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${r.map(x=>`<option value="${x}" ${x===t.formation?"selected":""}>${x}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(x=>{var c;const _=t.stadDefMap[x.stadium_id],f=_?_.name+((c=_.club)!=null&&c.encoded_name?` (${_.club.encoded_name})`:_.country_code?` (${_.country_code})`:""):x.id.slice(0,8);return`<option value="${x.id}" ${t.stadiumCardId===x.id?"selected":""}>${f}</option>`}).join("")}
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
        ${m.map(x=>{const _={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
            ${fn(_,44,58)}
            <button data-remove-sub="${x.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${s<11?"disabled":""}>
        ${s<11?`Placez encore ${11-s} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,gn(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",x=>{t.formation=x.target.value;const _=Hi(t.formation),f={};_.forEach(c=>{t.slots[c]&&(f[c]=t.slots[c])}),t.slots=f,kt(e,t,i)}),(y=document.getElementById("stadium-select"))==null||y.addEventListener("change",x=>{t.stadiumCardId=x.target.value||null,kt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>yn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(x=>{x.addEventListener("click",()=>{t.subs=t.subs.filter(_=>_!==x.dataset.removeSub),kt(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{xn(t,e,i)})}function gn(e,t,i,n){var M,D;const d=e.querySelector("#deck-field");if(!d)return;const s=(M=t.stadiumCards)==null?void 0:M.find(C=>C.id===t.stadiumCardId),r=s&&((D=t.stadDefMap)==null?void 0:D[s.stadium_id])||null,l=Ht[t.formation]||{},m=Qi(t.formation)||[],a={};for(const C of i){const q=t.slots[C],I=q?t.playerCards.find(P=>P.id===q):null;I!=null&&I.player?a[C]={...I.player,_evolution_bonus:I.evolution_bonus||0}:a[C]=null}const o=300,y=300,p=48,x=64,_=13,f=16,c=38;function z(C){const q=l[C];return q?{x:q.x*o,y:q.y*y}:null}let u="";for(const[C,q]of m){const I=z(C),P=z(q);if(!I||!P)continue;const te=a[C]?{...a[C],club_id:a[C].club_id,country_code:a[C].country_code,rarity:a[C].rarity}:null,V=a[q]?{...a[q],club_id:a[q].club_id,country_code:a[q].country_code,rarity:a[q].rarity}:null,de=nt(te,V);de==="#ff3333"||de==="#cc2222"?u+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${de}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(u+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${de}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,u+=`<line x1="${I.x.toFixed(1)}" y1="${I.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${de}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const q=z(C);if(!q)continue;const I=a[C],P=C.replace(/\d+/,""),te=$t[P]||"#555",V=(q.x-p/2).toFixed(1),de=(q.y-x/2).toFixed(1),ae={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[I==null?void 0:I.rarity]||"#aaa";if(I){const J=ri(I),R=fo(I),G=uo(I.country_code),re=I._evolution_bonus||0,ue=(Number(P==="GK"?I.note_g:P==="DEF"?I.note_d:P==="MIL"?I.note_m:I.note_a)||0)+(P===I.job||P===I.job2?re:0),he=r&&(r.club_id&&String(I.club_id)===String(r.club_id)||r.country_code&&I.country_code===r.country_code),xe=he?ue+10:ue,be=x-_-f;u+=`<defs><clipPath id="dcp-${C}"><rect x="${V}" y="${(q.y-x/2+_).toFixed(1)}" width="${p}" height="${be}"/></clipPath></defs>`,u+=`<rect x="${V}" y="${de}" width="${p}" height="${x}" rx="5" fill="${te}"/>`,J&&(u+=`<image href="${J}" x="${V}" y="${(q.y-x/2+_).toFixed(1)}" width="${p}" height="${be}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${V}" y="${de}" width="${p}" height="${_}" fill="rgba(255,255,255,0.93)"/>`,u+=`<text x="${q.x.toFixed(1)}" y="${(q.y-x/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(I.surname_encoded||"").slice(0,9)}</text>`;const ze=(q.y+x/2-f).toFixed(1);u+=`<rect x="${V}" y="${ze}" width="${p}" height="${f}" fill="rgba(255,255,255,0.93)"/>`,G&&(u+=`<image href="${G}" x="${(q.x-21).toFixed(1)}" y="${(q.y+x/2-f+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),u+=`<text x="${q.x.toFixed(1)}" y="${(q.y+x/2-f/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${he?"#E87722":"#111"}" font-family="Arial Black">${xe}</text>`,R&&(u+=`<image href="${R}" x="${(q.x+p/2-14).toFixed(1)}" y="${(q.y+x/2-f+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),u+=`<rect x="${V}" y="${de}" width="${p}" height="${x}" rx="5" fill="none" stroke="${ae}" stroke-width="2"/>`}else u+=`<rect x="${V}" y="${de}" width="${p}" height="${x}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,u+=`<text x="${q.x.toFixed(1)}" y="${q.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,u+=`<text x="${q.x.toFixed(1)}" y="${(q.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${P}</text>`;u+=`<rect x="${V}" y="${de}" width="${p}" height="${x}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-c} ${-c} ${o+c*2} ${y+c*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${u}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>mn(C.dataset.pos,t,e,n))})}function mn(e,t,i,n){var p,x,_;const{openModal:d,closeModal:s}=n,r=e.replace(/\d+/,""),l=t.slots[e],m=l?t.playerCards.find(f=>f.id===l):null;(p=m==null?void 0:m.player)==null||p.id;const a=new Set;Object.entries(t.slots).forEach(([f,c])=>{var u;if(f===e||!c)return;const z=t.playerCards.find(M=>M.id===c);(u=z==null?void 0:z.player)!=null&&u.id&&a.add(z.player.id)}),t.subs.forEach(f=>{var z;const c=t.playerCards.find(u=>u.id===f);(z=c==null?void 0:c.player)!=null&&z.id&&a.add(c.player.id)});const o=new Set,y=t.playerCards.filter(f=>{const c=f.player;return!(c.job===r||c.job2===r)||a.has(c.id)||o.has(c.id)?!1:(o.add(c.id),!0)});y.sort((f,c)=>{const z=f.evolution_bonus||0,u=c.evolution_bonus||0,M=(r==="GK"?f.player.note_g:r==="DEF"?f.player.note_d:r==="MIL"?f.player.note_m:f.player.note_a)+(r===f.player.job||r===f.player.job2?z:0);return(r==="GK"?c.player.note_g:r==="DEF"?c.player.note_d:r==="MIL"?c.player.note_m:c.player.note_a)+(r===c.player.job||r===c.player.job2?u:0)-M}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${y.length>0?y.map(f=>{var C,q;const c=f.player,z=f.evolution_bonus||0,u=(r==="GK"?c.note_g:r==="DEF"?c.note_d:r==="MIL"?c.note_m:c.note_a)+(r===c.job||r===c.job2?z:0),M=ri(c),D={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[c.rarity];return`<div class="player-option" data-card-id="${f.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${$t[r]}">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${$t[r]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${r}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${c.country_code}">
              ${(C=c.clubs)!=null&&C.logo_url?`<img src="${c.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((q=c.clubs)==null?void 0:q.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${c.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${$t[r]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${D};flex-shrink:0">
            ${u}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",s),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete t.slots[e],s(),kt(i,t,n)}),document.querySelectorAll(".player-option").forEach(f=>{f.addEventListener("click",()=>{t.slots[e]=f.dataset.cardId,s(),kt(i,t,n)})})}function xn(e,t,i){var m;const{openModal:n,closeModal:d}=i,s=new Set;Object.keys(e.slots).forEach(a=>{var p;const o=e.slots[a];if(!o)return;const y=e.playerCards.find(x=>x.id===o);(p=y==null?void 0:y.player)!=null&&p.id&&s.add(y.player.id)}),e.subs.forEach(a=>{var y;const o=e.playerCards.find(p=>p.id===a);(y=o==null?void 0:o.player)!=null&&y.id&&s.add(o.player.id)});const r=new Set,l=e.playerCards.filter(a=>{var o,y,p;return s.has((o=a.player)==null?void 0:o.id)||r.has((y=a.player)==null?void 0:y.id)?!1:(r.add((p=a.player)==null?void 0:p.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(a=>{var x;const o=a.player,y=ri(o),p=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(a.evolution_bonus||0);return`<div class="player-option" data-card-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${$t[o.job]}">
            ${y?`<img src="${y}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((x=o.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${$t[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${p}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(m=document.getElementById("close-sub-selector"))==null||m.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(a=>{a.addEventListener("click",()=>{e.subs.push(a.dataset.cardId),d(),kt(t,e,i)})})}async function yn(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(m=>m.formation===e.formation),r=(s==null?void 0:s.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([m,a],o)=>{l.push({deck_id:e.deckId,card_id:a,position:m,is_starter:!0,slot_order:o})}),e.subs.forEach((m,a)=>{l.push({deck_id:e.deckId,card_id:m,position:`SUB${a+1}`,is_starter:!1,slot_order:100+a})}),l.length>0){const{error:m}=await T.from("deck_cards").insert(l);if(m){n(m.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Hi(e){const t=Qt[e]||Qt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function go(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(l=>l.max_per_user!=null);if(r.length){const{data:l}=await T.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(a=>a.id)),m={};(l||[]).forEach(a=>{m[a.booster_id]=(m[a.booster_id]||0)+1}),d=n.filter(a=>a.max_per_user==null?!0:(m[a.id]||0)<a.max_per_user)}}if(!d.length)return[];const{data:s}=await T.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(s||[]).filter(l=>l.booster_id===r.id)}))}async function bn(e,t){const{data:i}=await T.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await T.from("booster_claims").insert({user_id:e,booster_id:t})}function hn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const mo=()=>Object.keys(Ht),vn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],bi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function wn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Ui={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},_n={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},$n={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function kn(e){var o,y;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Ui[i],d=_n[t.rarity]||"#ccc",s=Ki(t,i),r=t.job2?Ki(t,t.job2):null,l=t.job2?Ui[t.job2]:null,m=wn(t),a=$n[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${d};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${n}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${n}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>
        ${r!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${r}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${a}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((y=t.clubs)==null?void 0:y.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function xo(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,r)=>r[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function En(e,{state:t,navigate:i,toast:n}){var y,p,x;const d=((y=t.profile)==null?void 0:y.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await go((p=t.user)==null?void 0:p.id)).map(xo)}catch(_){console.warn("Erreur chargement boosters DB, fallback hardcodé",_)}s.length||(s=vn.map(_=>({..._,rates:[],isPub:_.id==="players_pub"})));const r=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(_=>_.data||[]),l=new Set(r.filter(_=>_.card_type==="stadium").map(_=>_.stadium_id)),m=new Set(r.filter(_=>_.card_type==="formation").map(_=>_.formation)),a=new Set(r.filter(_=>_.card_type==="game_changer").map(_=>_.gc_type)),o={};for(const _ of s){if(_.allow_duplicates!==!1||!((x=_.rates)!=null&&x.length))continue;const f=[...new Set((_.rates||[]).map(z=>z.card_type))];let c=!1;for(const z of f)if(z==="stadium"){const{data:u}=await T.from("stadium_definitions").select("id");if((u||[]).some(M=>!l.has(M.id))){c=!0;break}}else if(z==="game_changer"){const{data:u}=await T.from("gc_definitions").select("name").eq("is_active",!0);if((u||[]).some(M=>!a.has(M.name))){c=!0;break}}else if(z==="formation"){const{FORMATION_LINKS:u}=await ni(async()=>{const{FORMATION_LINKS:M}=await import("./formation-links-BZe0pGr4.js").then(D=>D.p);return{FORMATION_LINKS:M}},__vite__mapDeps([0,1]));if(Object.keys(u).some(M=>!m.has(M))){c=!0;break}}else{c=!0;break}c||(o[_.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(_=>{const f=_.cost===0||d>=_.cost,c=o[_.id]===!0;return`<div class="booster-card ${!f||c?"disabled":""}" data-booster="${_.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${_.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${_.img}" alt="${_.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${_.name}</div>
            <div class="desc">${_.sub}</div>
            <div class="cost">${_.costLabel}</div>
            ${f?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(_=>{_.addEventListener("click",async()=>{const f=s.find(c=>c.id===_.dataset.booster);if(f){_.style.opacity="0.5",_.style.pointerEvents="none";try{await Tn(f,{state:t,toast:n,navigate:i,container:e})}catch(c){n(c.message,"error"),_.style.opacity="",_.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(_=>{_.addEventListener("click",f=>{f.stopPropagation();const c=s.find(z=>z.id===_.dataset.boosterId);Ln(c)})})}async function Tn(e,{state:t,toast:i,navigate:n,container:d}){var y,p;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await Mn();const{data:s}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((s||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),l=new Set((s||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let m=[],a=null;try{if((y=e.rates)!=null&&y.length)m=await hi(t.profile,e);else{const x=e.type||"player";x==="player"?m=await yo(t.profile,e.cardCount,e.cost):x==="game_changer"?m=await bo(t.profile,e.cardCount,e.cost):x==="formation"?m=await ho(t.profile,e.cost):m=await hi(t.profile,e)}}catch(x){a=x.message||String(x),console.error("[Booster] Erreur:",x)}if(m!=null&&m.length&&e._boosterId&&await bn(t.user.id,e._boosterId),!(m!=null&&m.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${a||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(p=x.querySelector("#anim-close-err"))==null||p.addEventListener("click",()=>x.remove());return}m.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=r.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=l.has(x.formation))});const{data:o}=await T.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),vo(m,e,n)}function An(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function xt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Sn(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>xt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>xt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&xt(n)>=6),i.length||(i=e.filter(n=>xt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&xt(n)>=1&&xt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function hi(e,t){if(t.cost>0){const{error:p}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(p)throw p}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:s}=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(s){const{data:p}=await T.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=p||[]}else n=d||[];const r=new Set(n.filter(p=>p.card_type==="player").map(p=>p.player_id)),l=new Set(n.filter(p=>p.card_type==="formation").map(p=>p.formation)),m=new Set(n.filter(p=>p.card_type==="game_changer").map(p=>p.gc_type)),a=new Set(n.filter(p=>p.card_type==="stadium").map(p=>p.stadium_id).filter(Boolean)),o=new Set,y=[];for(let p=0;p<(t.cardCount||5);p++){const x=hn(t.rates);if(x){if(x.card_type==="player"){const _=I=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[I]||I,f=x.rarity?_(x.rarity):null;let c=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);f&&(c=c.eq("rarity",f));const{data:z}=await c;let u=z||[];if((x.note_min||x.note_max)&&(u=u.filter(I=>{const P=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!x.note_min||P>=x.note_min)&&(!x.note_max||P<=x.note_max)})),u.length||(x.note_min||x.note_max?(u=z||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):u=z||[]),!u.length)continue;let M=u.filter(I=>!o.has(I.id));if(i)M.length||(M=u);else if(M=M.filter(I=>!r.has(I.id)),!M.length)continue;const D=M[Math.floor(Math.random()*M.length)];o.add(D.id);const C=r.has(D.id),{data:q}=await T.from("cards").insert({owner_id:e.id,player_id:D.id,card_type:"player"}).select().single();q&&(y.push({...q,player:D,isDuplicate:C}),T.rpc("record_transfer",{p_card_id:q.id,p_player_id:D.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:_}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),f=_!=null&&_.length?_:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?f:f.filter(D=>!m.has(D.name));if(!i&&!c.length)continue;const u=c[Math.floor(Math.random()*c.length)].name,{data:M}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:u}).select().single();M&&y.push(M)}else if(x.card_type==="formation"){const _=mo(),f=i?_:_.filter(M=>!l.has(M));if(!i&&!f.length)continue;const c=f[Math.floor(Math.random()*f.length)],z=l.has(c),{data:u}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();u!=null&&u[0]&&y.push({...u[0],isDuplicate:z})}else if(x.card_type==="stadium"){const{data:_,error:f}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(f){console.error("[Booster] stadium_definitions:",f.message);continue}if(!(_!=null&&_.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?_:_.filter(D=>!a.has(D.id));if(!i&&!c.length)continue;const z=c[Math.floor(Math.random()*c.length)],{data:u,error:M}=await T.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:z.id}).select("id,card_type,stadium_id").single();if(M){console.error("[Booster] insert stadium card:",M.message);continue}u&&y.push({...u,rarity:"normal",_stadiumDef:z})}}}return y}async function yo(e,t,i){if(i>0){const{error:a}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a}const{data:n}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(a=>a.job==="GK"),s=n.filter(a=>a.job!=="GK"),r=!e.first_booster_opened&&d.length>0,l=[];for(let a=0;a<t;a++){const o=a===0&&r?d:a===0?s:n,y=An(),p=Sn(o,y);p&&l.push(p)}r&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:m}=await T.from("cards").insert(l.map(a=>({owner_id:e.id,player_id:a.id,card_type:"player"}))).select();return(m||[]).forEach((a,o)=>{T.rpc("record_transfer",{p_card_id:a.id,p_player_id:l[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((a,o)=>({...m[o],player:a}))}async function bo(e,t,i){const{error:n}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(bi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:l,error:m}=await T.from("cards").insert(r).select();return m&&console.error("[Booster GC] Erreur insert:",m.message,m),(l||[]).map(o=>{const y=d==null?void 0:d.find(p=>p.name===o.gc_type||p.id===o.gc_definition_id);return{...o,_gcDef:y||null}})}async function ho(e,t){const{error:i}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),s=mo(),r=s[Math.floor(Math.random()*s.length)],l=d.has(r),{data:m,error:a}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),(m||[]).map(o=>({...o,isDuplicate:l}))}function vo(e,t,i,n=null){var ae,J;if(!e||e.length===0){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(R),(ae=R.querySelector("#anim-close-err"))==null||ae.addEventListener("click",()=>R.remove());return}e=[...e].sort((R,G)=>{const re=R.player?xt(R.player):-1;return(G.player?xt(G.player):-1)-re});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let s=!1;const r=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let m=!1;const a=R=>R.touches&&R.touches[0]?R.touches[0].clientX:R.clientX;function o(R){s||(m=!0,l.style.opacity="1",y(R))}function y(R){if(!m||s)return;const G=r.getBoundingClientRect(),re=a(R)-G.left,ue=Math.max(0,Math.min(1,re/G.width));l.style.width=ue*G.width+"px",ue>=.82&&x()}function p(){s||(m=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{s||(l.style.transition="")},220))}function x(){var G;if(s)return;s=!0,m=!1,l.style.width="100%",l.style.opacity="1",(G=document.getElementById("cut-flash"))==null||G.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const R=document.getElementById("cut-hint");R&&(R.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",y),window.addEventListener("pointerup",p),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("touchend",p);let _=0,f=!1;const c=new Set;function z(R){_=R,document.getElementById("reveal-phase").style.display="flex",u(),M(R,0),P()}function u(){const R=document.getElementById("card-dots");R&&(R.innerHTML=e.map((G,re)=>`<div class="card-dot" data-i="${re}" style="width:8px;height:8px;border-radius:50%;background:${re===_?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),R.querySelectorAll(".card-dot").forEach(G=>G.addEventListener("click",()=>C(parseInt(G.dataset.i)))))}function M(R,G){var $e;const re=e[R],ue=document.getElementById("card-counter"),he=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${R+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=R===e.length-1?"flex":"none");const be=re.card_type==="player"&&(($e=re.player)==null?void 0:$e.rarity)==="legende",ze=!c.has(R);c.add(R);let qe=0;if(re.card_type==="player"&&re.player){const K=re.player,ne=K.job||"ATT";qe=Number(ne==="GK"?K.note_g:ne==="DEF"?K.note_d:ne==="MIL"?K.note_m:K.note_a)||0}const Ce=K=>{he.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${zn(re)}</div>
          ${re.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");G!==0?(ne.style.transition="none",ne.style.transform=`translateX(${G>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),K||be?V():de(),u()};ze&&qe>6&&re.card_type==="player"&&re.player?D(re,()=>Ce(!0)):Ce(!1)}function D(R,G){var qe;f=!0;const re=R.player,ue=`https://flagsapi.com/${re.country_code}/flat/64.png`,he=(qe=re.clubs)==null?void 0:qe.logo_url,xe=document.getElementById("walkout-overlay"),be=document.getElementById("walkout-stage");if(!xe||!be){f=!1,G();return}xe.style.display="flex";const ze=()=>{const Ce=be.firstElementChild;Ce&&(Ce.classList.remove("wo-in"),Ce.classList.add("wo-out"))};be.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(ze,2e3),setTimeout(()=>{var Ce;be.innerHTML=he?`<img class="wo-in" src="${he}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ce=re.clubs)==null?void 0:Ce.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(ze,4450),setTimeout(()=>{xe.style.display="none",be.innerHTML="",f=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),G()},4900)}function C(R){if(f||R<0||R>=e.length||R===_)return;const G=R>_?1:-1;_=R,M(R,G)}function q(){C(_+1)}function I(){C(_-1)}function P(){const R=document.getElementById("card-viewport");if(!R||R._swipeBound)return;R._swipeBound=!0;let G=0,re=0,ue=0,he=!1;const xe=$e=>$e.touches?$e.touches[0].clientX:$e.clientX,be=$e=>$e.touches?$e.touches[0].clientY:$e.clientY,ze=$e=>{he=!0,G=xe($e),re=be($e),ue=0},qe=$e=>{if(!he)return;ue=xe($e)-G;const K=be($e)-re;if(Math.abs(ue)<Math.abs(K))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},Ce=()=>{if(!he)return;he=!1;const $e=document.getElementById("current-card-wrap"),K=55;ue<=-K&&_<e.length-1?q():ue>=K&&_>0?I():$e&&($e.style.transition="transform .2s ease",$e.style.transform="translateX(0)")};R.addEventListener("pointerdown",ze),R.addEventListener("pointermove",qe),R.addEventListener("pointerup",Ce),R.addEventListener("pointercancel",Ce),R.addEventListener("touchstart",ze,{passive:!0}),R.addEventListener("touchmove",qe,{passive:!0}),R.addEventListener("touchend",Ce),R.addEventListener("click",$e=>{if(Math.abs(ue)>8)return;const K=R.getBoundingClientRect();$e.clientX-K.left>K.width/2?q():I()})}let te=null;function V(){const R=document.getElementById("fireworks-canvas");if(!R)return;R.width=window.innerWidth,R.height=window.innerHeight;const G=R.getContext("2d"),re=[];function ue(){const xe=Math.random()*R.width,be=Math.random()*R.height*.6,ze=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],qe=ze[Math.floor(Math.random()*ze.length)];for(let Ce=0;Ce<60;Ce++){const $e=Math.PI*2/60*Ce,K=2+Math.random()*5;re.push({x:xe,y:be,vx:Math.cos($e)*K,vy:Math.sin($e)*K,alpha:1,color:qe,size:2+Math.random()*3})}}ue(),te=setInterval(ue,600);function he(){if(document.getElementById("fireworks-canvas")){G.clearRect(0,0,R.width,R.height);for(let xe=re.length-1;xe>=0;xe--){const be=re[xe];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){re.splice(xe,1);continue}G.globalAlpha=be.alpha,G.fillStyle=be.color,G.beginPath(),G.arc(be.x,be.y,be.size,0,Math.PI*2),G.fill()}G.globalAlpha=1,(te!==null||re.length>0)&&requestAnimationFrame(he)}}he()}function de(){te!==null&&(clearInterval(te),te=null);const R=document.getElementById("fireworks-canvas");R&&R.getContext("2d").clearRect(0,0,R.width,R.height)}if(n){const R=document.getElementById("reveal-btns");R&&(R.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(J=document.getElementById("reveal-next"))==null||J.addEventListener("click",()=>{de(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{de(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{de(),d.remove(),i("boosters")})}function zn(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return kn(e);if(e.card_type==="game_changer"){const s=e._gcDef,r=(s==null?void 0:s.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},m={purple:"#b06ce0",light_blue:"#00d4ef"},a=l[s==null?void 0:s.color]||l.purple,o=m[s==null?void 0:s.color]||m.purple,y=(s==null?void 0:s.name)||e.gc_type||"Game Changer",p=(s==null?void 0:s.effect)||((t=bi[e.gc_type])==null?void 0:t.desc)||"",x=s!=null&&s.image_url?`/icons/${s.image_url}`:null,_=((i=bi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${a};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${y.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${y}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${x?`<img src="${x}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${p.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const s=e._stadiumDef,r=(s==null?void 0:s.name)||"Stade",l=((n=s==null?void 0:s.club)==null?void 0:n.encoded_name)||(s==null?void 0:s.country_code)||"—",m=s!=null&&s.image_url?`/icons/${s.image_url}`:((d=s==null?void 0:s.club)==null?void 0:d.logo_url)||(s!=null&&s.country_code?`https://flagcdn.com/64x48/${s.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${m?`<img src="${m}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Ln(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${s[r.card_type]||r.card_type}</span>
            ${r.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[r.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:""}
            ${r.note_min||r.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||""}–${r.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}In()}function In(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function Mn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function jn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var p,x;const{data:s}=await T.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let r=Array.isArray((p=t.profile)==null?void 0:p.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const f=(await go()).find(c=>(c.name||"").toLowerCase().includes("new player"));f&&(l=xo(f))}catch(_){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',_)}const m=r.length;let a=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await T.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function y(){var u;if(a>=m||!r.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const _=r[0],{data:f}=await T.from("users").select("*").eq("id",t.user.id).single();f&&(t.profile=f);let c=[];try{if(_.type==="formation")c=await ho(t.profile,0);else if(_.type==="game_changer")c=await bo(t.profile,_.count||3,0);else if(l&&((u=l.rates)!=null&&u.length)){const M={...l,cost:0,cardCount:_.count||l.cardCount||5};c=await hi(t.profile,M),_.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(C=>C.player&&C.player.job==="GK")||await Cn(t.profile,c),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await yo(t.profile,_.count||5,0)}catch(M){n(M.message||"Erreur ouverture booster","error");return}r.shift(),a++,await o();const z=_.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:_.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${a}/${m})`,img:(l==null?void 0:l.img)||"/icons/booster-players.png"};vo(c,z,i,()=>{y()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>y())}async function Cn(e,t){try{const{data:i}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const s=t[d];await T.from("cards").update({player_id:n.id}).eq("id",s.id),t[d]={...s,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function Ne(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function vi(e,t){var s,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(s=>{const r=i&&String(s.club_id)===String(i),l=n&&String(s.country_code)===String(n);(r||l)&&(s.stadiumBonus=!0)})}),e}function Ct(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const s=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(s||r)&&(d.stadiumBonus=!0)}),e}function st(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ai(){const e=Math.random()*100;return e<10?3:e<30?2:1}function bt(e,t){const i=Mt[t]||Mt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const l=e.filter(a=>a.position&&a.position.replace(/\d+$/,"")===r).sort((a,o)=>parseInt(a.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(a=>({...a,_line:r})),m=st(l.length);l.forEach((a,o)=>{a._col=m[o]}),n[r]=l}return n}const s=[...e];for(const r of["GK","DEF","MIL","ATT"]){const l=[];for(let a=0;a<i[r];a++){let o=s.findIndex(y=>y.job===r);if(o===-1&&(o=s.findIndex(y=>y.job2===r)),o===-1&&(o=0),s[o]){const y={...s[o],_line:r};l.push(y),s.splice(o,1)}}const m=st(l.length);l.forEach((a,o)=>{a._col=m[o]}),n[r]=l}return n}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function si(e,t,i){const d=new Set,s=t.filter(o=>{const y=o.gc_type||o.id;return d.has(y)?!1:(d.add(y),!0)});let r=[];function l(o,y){const p=o._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},f=x[p==null?void 0:p.color]||x.purple,c=_[p==null?void 0:p.color]||_.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${y?"#FFD700":c};background:${f};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${y?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${y?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((p==null?void 0:p.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(p==null?void 0:p.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${p!=null&&p.image_url?`<img src="/icons/${p.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((p==null?void 0:p.effect)||"").slice(0,50)}</span>
      </div>
      ${y?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const m=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function a(){var y,p,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=r.length>0;e.innerHTML=`
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
        ${s.map(_=>{const f=r.find(c=>c.gc_type===_.gc_type);return l(_,!!f)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const f=_.dataset.id,c=s.find(u=>u.id===f);if(!c)return;const z=r.findIndex(u=>u.gc_type===c.gc_type);z>-1?r.splice(z,1):r.length<3&&r.push(c),a()})}),(y=e.querySelector("#gc-launch"))==null||y.addEventListener("click",()=>{o&&m(r)}),(p=e.querySelector("#gc-no-gc"))==null||p.addEventListener("click",()=>m([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{r.length&&(r=[],a())})}a()}function qn(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Bn(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=s.map(p=>p.id),{data:l}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),m=[...new Set((l||[]).filter(p=>{var x,_;return((x=p.card)==null?void 0:x.card_type)==="stadium"&&((_=p.card)==null?void 0:_.stadium_id)}).map(p=>p.card.stadium_id))],a={};if(m.length){const{data:p}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(p||[]).forEach(x=>{a[x.id]=x}),(l||[]).forEach(x=>{var _,f;((_=x.card)==null?void 0:_.card_type)==="stadium"&&((f=x.card)!=null&&f.stadium_id)&&(x.card._stadiumDef=a[x.card.stadium_id]||null)})}let o=0;function y(){var C,q,I,P,te,V,de;const p=s[o],x=(l||[]).filter(ae=>ae.deck_id===p.id),_=x.filter(ae=>{var J;return ae.is_starter&&((J=ae.card)==null?void 0:J.player)}).map(ae=>vi(ae.card,ae.position)),f=x.find(ae=>{var J;return((J=ae.card)==null?void 0:J.card_type)==="formation"}),c=p.formation||((C=f==null?void 0:f.card)==null?void 0:C.formation)||"4-4-2";let z=_.length>=11?bt(_,c):null,u=((q=p.stadium_card)==null?void 0:q.stadium_def)||null;u&&z&&(z=Tt(z,u));const M=_.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${qn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${p.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${_.length}/11 ${p.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===s.length-1?"0.1":"0.3"});color:${o===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${u?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${u.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((I=u.club)==null?void 0:I.encoded_name)||u.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${z?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ct(z,c,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((ae,J)=>`<div style="width:7px;height:7px;border-radius:50%;background:${J===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${M?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${M?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${M?"pointer":"default"}">
          ${M?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const J=e.querySelector(".deck-preview-wrap svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(P=document.getElementById("prev-deck"))==null||P.addEventListener("click",()=>{o>0&&(o--,y())}),(te=document.getElementById("next-deck"))==null||te.addEventListener("click",()=>{o<s.length-1&&(o++,y())}),(V=document.getElementById("validate-deck"))==null||V.addEventListener("click",()=>{if(!M)return;const ae=t.state.params||{};t.navigate("match",{...ae,matchMode:ae.matchMode||i,deckId:p.id})}),(de=document.getElementById("cancel-deck-select"))==null||de.addEventListener("click",()=>{Ve(e),d("home")});const D=document.getElementById("deck-swipe-zone");if(D){let ae=0,J=0;D.addEventListener("touchstart",R=>{ae=R.touches[0].clientX,J=R.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",R=>{const G=R.changedTouches[0].clientX-ae,re=R.changedTouches[0].clientY-J;Math.abs(G)<40||Math.abs(G)<Math.abs(re)||(G<0&&o<s.length-1?(o++,y()):G>0&&o>0&&(o--,y()))},{passive:!0})}}y()}function wo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Xe(e,t=44,i=58,n=null){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const d=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Ne(e),s=wo(e),r=e._line||e.job||"MIL",l=jt[r]||"#555",m={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=_o(e==null?void 0:e.country_code),o=Math.round(i*.19),y=Math.round(i*.25),p=i-Math.round(i*.19)-Math.round(i*.25),x=e!=null&&e.used?.28:1,_=e._evolution_bonus??e.evolution_bonus??0,f=e.note!==void 0?Number(e.note)||0:(Number(Se(e,r))||0)+(e.boost||0)+(e.job===r||e.job2===r?_:0),c=!e.used&&(e.stadiumBonus||n&&(n.club_id&&String(e.club_id)===String(n.club_id)||n.country_code&&e.country_code===n.country_code)),z=f+(c?10:0),u=c?"#E87722":"#111";return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${m};background:${l};position:relative;overflow:hidden;flex-shrink:0;opacity:${x}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${d&&!(e!=null&&e.used)?`<img src="${d}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${p}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${y}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ei(e==null?void 0:e.country_code)?`<img src="${ei(e.country_code)}" style="width:${y+2}px;height:${y-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${y-4}px">${a}</span>`}
      <span style="font-size:${y-2}px;font-weight:900;color:${e!=null&&e.used?"#111":u};font-family:Arial Black,Arial">${e!=null&&e.used?"–":z}</span>
      ${s?`<img src="${s}" style="width:${y-4}px;height:${y-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,y-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function it(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,r)=>{if(d+=Xe(s,40,52),r<n.length-1){const l=nt(s,n[r+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ei(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _o(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function lt(e,t,i,n,d=310,s=310,r=[]){var M;const l=Ht[t]||{},m=Qi(t)||ki[t]||[],a={},o=["ATT","MIL","DEF","GK"];for(const D of o)(e[D]||[]).forEach((q,I)=>{a[`${D}${I+1}`]=q});function y(D){const C=l[D];return C?{x:C.x*d,y:C.y*s}:null}let p="";for(const[D,C]of m){const q=y(D),I=y(C);if(!q||!I)continue;const P=a[D],te=a[C],V=nt(P,te);V==="#00ff88"||V==="#FFD700"?(p+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,p+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):p+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${I.x.toFixed(1)}" y2="${I.y.toFixed(1)}"
        stroke="${V}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=48,_=64,f=13,c=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[D,C]of Object.entries(a)){const q=y(D);if(!q||!C)continue;const I=D.replace(/[0-9]/g,""),P=jt[I]||"#555",te=r.includes(C.cardId),V=i==="attack"&&(["MIL","ATT"].includes(I)||te)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(I)&&!C.used,de=n.includes(C.cardId);let ae;i==="attack"?ae=te?Math.max(1,Number(C.note_a)||0):I==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?ae=I==="GK"?Number(C.note_g)||0:I==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:ae=Number(I==="GK"?C.note_g:I==="DEF"?C.note_d:I==="MIL"?C.note_m:C.note_a)||0,ae=ae+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(I==="ATT"||I==="MIL")||i==="defense"&&(I==="GK"||I==="DEF"||I==="MIL")?ae+=10:i||(ae+=10));const J=(q.x-x/2).toFixed(1),R=(q.y-_/2).toFixed(1),G=z[C==null?void 0:C.rarity]||z.normal;if(C.used){const qe=typeof import.meta<"u"&&"/"||"/",$e=`${typeof window<"u"&&((M=window.location)==null?void 0:M.origin)||""}${qe}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="#161616"/>`,p+=`<image href="${$e}" xlink:href="${$e}" x="${J}" y="${R}" width="${x}" height="${_}" preserveAspectRatio="xMidYMid slice"/>`,p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="none" stroke="${G}" stroke-width="2" opacity="0.7"/>`,p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${I}" style="cursor:pointer"/>`;continue}const re=de?.45:1,ue=de?"#FFD700":G,he=de?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,xe=_-f-c;p+=`<defs><clipPath id="cp-${D}"><rect x="${J}" y="${(q.y-_/2+f).toFixed(1)}" width="${x}" height="${xe}"/></clipPath></defs>`,p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="${P}" opacity="${re}"/>`;const be=Ne(C);be&&(p+=`<image href="${be}" xlink:href="${be}" x="${J}" y="${(q.y-_/2+f).toFixed(1)}" width="${x}" height="${xe}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),p+=`<rect x="${J}" y="${R}" width="${x}" height="${f}" rx="4" fill="rgba(255,255,255,0.92)"/>`,p+=`<text x="${q.x.toFixed(1)}" y="${(q.y-_/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const ze=(q.y+_/2-c).toFixed(1);p+=`<rect x="${J}" y="${ze}" width="${x}" height="${c}" fill="rgba(255,255,255,0.92)"/>`;{const qe=ei(C.country_code);qe?p+=`<image href="${qe}" xlink:href="${qe}" x="${(q.x-20).toFixed(1)}" y="${(q.y+_/2-c+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:p+=`<text x="${(q.x-13).toFixed(1)}" y="${(q.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${_o(C.country_code)}</text>`;const Ce=C.stadiumBonus?"#E87722":"#111";p+=`<text x="${q.x.toFixed(1)}" y="${(q.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ce}" font-family="Arial Black">${ae}</text>`;const $e=wo(C);$e?p+=`<image href="${$e}" xlink:href="${$e}" x="${(q.x+x/2-14).toFixed(1)}" y="${(q.y+_/2-c+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(p+=`<text x="${(q.x+14).toFixed(1)}" y="${(q.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(p+=`<rect x="${(q.x-x/2).toFixed(1)}" y="${(q.y-_/2).toFixed(1)}" width="${x}" height="${_}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="${de?"rgba(255,255,255,0.12)":"none"}" stroke="${ue}" stroke-width="${he}" opacity="${re}"/>`,V&&(p+=`<rect x="${J}" y="${R}" width="${x}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${de?"selected":""}" data-card-id="${C.cardId}" data-role="${I}" style="cursor:pointer"/>`)}const u=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${d+u*2} ${s+u*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${p}
  </svg>`}function ct(e,t,i,n,d=300,s=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${lt(e,t,i,n,d,s,r)}
  </div>`}function at(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function di(e,t,i,n){var q;const{state:d,navigate:s,toast:r}=t;et(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Bn(e,t,i);const m=l.deckId;let a,o,y,p;try{const I=await Promise.all([T.from("decks").select("formation,name,stadium_card_id").eq("id",m).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",m).order("slot_order")]);a=I[0].data,y=I[0].error,o=I[1].data,p=I[1].error}catch(I){console.error("[Match] Exception chargement deck:",I),Et(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(y||p){console.error("[Match] Erreur Supabase:",y||p),Et(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const x=(o||[]).filter(I=>{var P;return I.is_starter&&((P=I.card)==null?void 0:P.player)}).map(I=>vi(I.card,I.position)),_=(o||[]).filter(I=>{var P;return!I.is_starter&&((P=I.card)==null?void 0:P.player)}).map(I=>vi(I.card,I.position));if(x.length<11){Et(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>s("decks"));return}const f=(o||[]).find(I=>{var P;return((P=I.card)==null?void 0:P.card_type)==="formation"}),c=(a==null?void 0:a.formation)||((q=f==null?void 0:f.card)==null?void 0:q.formation)||"4-4-2",{data:z,error:u}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:M}=await T.from("gc_definitions").select("*").eq("is_active",!0),D=(z||[]).map(I=>({...I,_gcDef:(M==null?void 0:M.find(P=>P.name===I.gc_type||P.id===I.gc_definition_id))||null}));let C=null;if(a!=null&&a.stadium_card_id){const{data:I}=await T.from("cards").select("stadium_id").eq("id",a.stadium_card_id).single();if(I!=null&&I.stadium_id){const{data:P}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",I.stadium_id).single();C=P||null}}n({deckId:m,formation:c,starters:x,subsRaw:_,gcCardsEnriched:D,gcDefs:M||[],stadiumDef:C})}async function Fn(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),r=d;await di(e,t,d,async({deckId:l,formation:m,starters:a,subsRaw:o,gcCardsEnriched:y,gcDefs:p,stadiumDef:x})=>{try{let _=bt(a,m);x&&(_=Tt(_,x),Ct(o,x));const f=await Dn(m,s),c=f.lines||f,z=async u=>{try{const{data:M,error:D}=await T.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single();if(D){console.error("[MatchIA] Erreur création match:",D),Et(e,"⚠️","Impossible de créer le match ("+D.message+").","Retour",()=>t.navigate("home"));return}const C=f.stadiumDef||null;C&&c&&(Tt(c,C),Ct(f.subs||[],C));const q={gcDefs:p||[],matchId:M==null?void 0:M.id,mode:r,difficulty:s,formation:m,homeTeam:_,aiTeam:c,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:f.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((f.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:f.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:u,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Pn(e,q,t)}catch(M){console.error("[MatchIA] Exception launchMatch:",M),Et(e,"⚠️","Erreur au lancement du match : "+M.message,"Retour",()=>t.navigate("home"))}};if(!y.length){z([]);return}si(e,y,z)}catch(_){console.error("[MatchIA] Exception setup:",_),Et(e,"⚠️","Erreur de préparation du match : "+_.message,"Retour",()=>t.navigate("home"))}})}async function Dn(e,t){var c;const{data:i}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Gn(e),subs:[],gcCards:[],stadiumDef:null};const n=Mt[e]||Mt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=new Set;function r(z,u,M){var D,C;return s.add(z.id),{cardId:"ai-"+z.id+"-"+M,id:z.id,firstname:z.firstname,name:z.surname_encoded,country_code:z.country_code,club_id:z.club_id,job:z.job,job2:z.job2,note_g:Number(z.note_g)||0,note_d:Number(z.note_d)||0,note_m:Number(z.note_m)||0,note_a:Number(z.note_a)||0,rarity:z.rarity,skin:z.skin,hair:z.hair,hair_length:z.hair_length,clubName:((D=z.clubs)==null?void 0:D.encoded_name)||null,clubLogo:((C=z.clubs)==null?void 0:C.logo_url)||null,boost:0,used:!1,_line:u}}for(const z of["GK","DEF","MIL","ATT"]){const u=i.filter(I=>I.job===z&&!s.has(I.id)),M=i.filter(I=>I.job!==z&&!s.has(I.id)),D=[...u,...M],C=[];for(let I=0;I<n[z];I++){const P=D[I];P&&C.push(r(P,z,I))}const q=st(C.length);C.forEach((I,P)=>{I._col=q[P]}),d[z]=C}const m=i.filter(z=>!s.has(z.id)).slice(0,5).map((z,u)=>r(z,z.job,100+u)),y=Object.keys(He).sort(()=>Math.random()-.5).slice(0,3).map((z,u)=>{var M,D;return{id:"ai-gc-"+u,gc_type:z,name:((M=He[z])==null?void 0:M.name)||z,icon:((D=He[z])==null?void 0:D.icon)||"⚡"}}),p=Object.values(d).flat(),x={};p.forEach(z=>{z.club_id&&(x[z.club_id]=(x[z.club_id]||0)+1)});const _=(c=Object.entries(x).sort((z,u)=>u[1]-z[1])[0])==null?void 0:c[0];let f=null;if(_){const{data:z}=await T.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",_).single();z&&(f={club_id:z.id,country_code:null,name:z.encoded_name+" Stadium",club:{encoded_name:z.encoded_name,logo_url:z.logo_url}})}return{lines:d,subs:m,gcCards:y,stadiumDef:f}}function Gn(e){const t=Mt[e]||Mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const r=[];for(let m=0;m<t[s];m++){const a=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?a:2,note_d:s==="DEF"?a:2,note_m:s==="MIL"?a:2,note_a:s==="ATT"?a:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const l=st(r.length);r.forEach((m,a)=>{m._col=l[a]}),i[s]=r}return i}function Pn(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${lt(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Nn(e,t,i),5e3)}function Nn(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],s=t.stadiumDef||null,r=t.aiStadiumDef||null;function l(u,M){const D=Se(u,"MIL"),C=u.evolution_bonus||u._evolution_bonus||0,q=u.job==="MIL"||u.job2==="MIL"?C:0,I=u.stadiumBonus||M&&(M.club_id&&String(u.club_id)===String(M.club_id)||M.country_code&&u.country_code===M.country_code)?10:0;return D+q+I}function m(u,M){return u.reduce((D,C)=>D+l(C,M),0)}function a(u){let M=0;for(let D=0;D<u.length-1;D++){const C=nt(u[D],u[D+1]);C==="#00ff88"?M+=2:C==="#FFD700"&&(M+=1)}return M}const o=m(n,s)+a(n),y=m(d,r)+a(d),p=o>=y;function x(u,M,D,C,q){return`<div id="duel-row-${C}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${M}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${u.map((I,P)=>{const te=P<u.length-1?nt(I,u[P+1]):null,V=!te||te==="#ff3333"||te==="#cc2222",de=te==="#00ff88"?"+2":te==="#FFD700"?"+1":"";l(I,q),I.stadiumBonus||q&&(q.club_id&&String(I.club_id)===String(q.club_id)||q.country_code&&(I.country_code,q.country_code));const ae=I.evolution_bonus||I._evolution_bonus||0;return`
          <div class="duel-card duel-card-${C}" data-idx="${P}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Xe({...I,_evolution_bonus:ae},58,78,q)}
          </div>
          ${P<u.length-1?`<div class="duel-link duel-link-${C}" data-idx="${P}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${V?"rgba(255,255,255,0.12)":te};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${V?"none":`0 0 8px ${te}`}">
            ${de?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${te}">${de}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${C}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${m(u,q)} + ${a(u)} liens = <b style="color:#fff">${m(u,q)+a(u)}</b>
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

    ${x(n,t.clubName,"#D4A017","home",s)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${x(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const _=()=>{const u=(M,D)=>e.querySelectorAll(M).forEach((C,q)=>{setTimeout(()=>{C.style.opacity="1",C.style.transform="translateY(0) scale(1)"},D+q*90)});u(".duel-card-home",150),u(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((M,D)=>{setTimeout(()=>{M.style.opacity="1"},D*70)}),900),setTimeout(()=>{const M=e.querySelector("#vs-label");M&&(M.style.opacity="1",M.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(D=>D.style.opacity="1")},1250),setTimeout(()=>{f("score-home",o,800),f("score-ai",y,800)},1500)};function f(u,M,D){const C=document.getElementById(u);if(!C)return;const q=performance.now(),I=P=>{const te=Math.min(1,(P-q)/D);C.textContent=Math.round(M*(1-Math.pow(1-te,3))),te<1?requestAnimationFrame(I):C.textContent=M};requestAnimationFrame(I)}requestAnimationFrame(_),t.attacker=p?"home":"ai";const c=p?ai():null;p&&(t.boostCard={value:c}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(u=>({name:u.name,note:Se(u,"MIL"),portrait:Ne(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),aiPlayers:d.map(u=>({name:u.name,note:Se(u,"MIL"),portrait:Ne(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:o,aiTotal:y,text:`Duel milieu : ${t.clubName} ${o} – ${y} IA → ${p?t.clubName+" attaque":"IA attaque"}`});const z=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Je(e,t,i),t.attacker==="ai"&&setTimeout(()=>ti(e,t,i),800)};setTimeout(()=>{const u=document.getElementById("score-home"),M=document.getElementById("score-ai"),D=document.getElementById(p?"duel-row-home":"duel-row-ai"),C=document.getElementById(p?"duel-row-ai":"duel-row-home"),q=p?u:M,I=p?M:u;q&&(q.style.fontSize="80px",q.style.color=p?"#FFD700":"#ff6b6b",q.style.animation="duelPulse .5s ease"+(p?", duelGlow 1.5s ease infinite .5s":"")),I&&(I.style.opacity="0.25"),setTimeout(()=>{D&&(D.style.transformOrigin="center",D.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",D.style.zIndex="5"),setTimeout(()=>{var te;const P=document.getElementById("duel-shock");if(P){const V=(te=C||D)==null?void 0:te.getBoundingClientRect(),de=e.querySelector(".match-screen").getBoundingClientRect();V&&(P.style.top=V.top-de.top+V.height/2+"px"),P.style.animation="shockwave .5s ease-out forwards"}C&&(C.style.transformOrigin="center",C.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var te;const P=document.getElementById("duel-finale");P&&(P.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${p?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${p?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${c}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,P.style.transition="opacity .45s ease",P.style.opacity="1",P.style.pointerEvents="auto",(te=document.getElementById("start-match-btn"))==null||te.addEventListener("click",z))},600)},700)},2800)}function Rn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Je(e,t,i){var q,I,P,te,V,de,ae,J,R;const n=t.selected.map(G=>G.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(G=>!d.includes(G.cardId)),l=Object.values(t.homeTeam).flat().filter(G=>G.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,m=!["GK","DEF","MIL","ATT"].some(G=>(t.aiTeam[G]||[]).some(re=>!re.used)),a=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(G=>!G.used),o=t.phase==="attack"&&m&&a.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];t.log[t.log.length-1];const y=t.phase==="ai-attack"||t.phase==="ai-defense",p=t.phase==="attack",x=t.phase==="defense",_=t.phase==="finished",c=(t.homeSubs||[]).filter(G=>!(t.usedSubIds||[]).includes(G.cardId)).length>0&&t.subsUsed<t.maxSubs,z=p&&a.length===0&&!c,u=t.gcCards.filter(G=>!t.usedGc.includes(G.id)),M=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((re.players||[]).map(ue=>({...ue,used:!1})),"#ff6b6b",re.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const re=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((re.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",re.total)}
          </div>`}const G=t.log[t.log.length-1];return G?'<div style="padding:2px 4px">'+Rn(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const G=window.innerWidth>=700,re=(K,ne,fe)=>{var B,$;const U=(t.gcDefs||[]).find(g=>g.name===K.gc_type),ie={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[U==null?void 0:U.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",X={purple:"#b06ce0",light_blue:"#00d4ef"}[U==null?void 0:U.color]||"#b06ce0",le=(U==null?void 0:U.name)||K.gc_type,we=(U==null?void 0:U.effect)||((B=He[K.gc_type])==null?void 0:B.desc)||"",Te=U!=null&&U.image_url?`/icons/${U.image_url}`:null,Ae=(($=He[K.gc_type])==null?void 0:$.icon)||"⚡",ve=Math.round(fe*.22),ke=Math.round(fe*.22),Fe=fe-ve-ke,Le=le.length>12?7:9;return`<div class="gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
          style="box-sizing:border-box;width:${ne}px;height:${fe}px;border-radius:10px;border:2px solid ${X};background:${ie};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ve}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ne-6}px">${le}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Fe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${ne-10}px;max-height:${Fe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Fe*.55)}px">${Ae}</span>`}
          </div>
          <div style="height:${ke}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${we.slice(0,38)}</span>
          </div>
        </div>`},ue=(K,ne)=>{var fe;return`<div id="boost-card"
          style="box-sizing:border-box;width:${K}px;height:${ne}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ne*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(ne*.2)}px">⚡</div>
            <div style="font-size:${Math.round(ne*.09)}px;color:#000;font-weight:900">+${(fe=t.boostCard)==null?void 0:fe.value}</div>
          </div>`},he=(K,ne)=>ne?ue(130,175):re(K,130,175),xe=(K,ne)=>ne?ue(68,95):re(K,68,95),be=G?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ze=_?`<button id="btn-results" style="${be};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:y?`<div style="${be};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:z?`<button id="btn-pass" style="${be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:p?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${be};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,qe=p||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Ce=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${G?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(K=>`<div class="sub-btn-col" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(K,76,100)}</div>`).join("")}
      </div>`,$e=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ct(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return G?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ce}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${$e}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ze}${qe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${u.map(K=>he(K,!1)).join("")}
            ${M?he(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${u.map(K=>xe(K,!1)).join("")}
            ${M?xe(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${s.length}</div>
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
          <div>${ze}${qe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(G=>{var re,ue,he;if(G.type==="duel"){const xe=G.isGoal,be=G.homeScored?"#FFD700":xe?"#ff6b6b":"rgba(255,255,255,0.3)",ze=G.homeScored?"⚽ BUT !":xe?"⚽ BUT IA !":(re=G.homePlayers)!=null&&re.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${xe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${be};margin-bottom:4px">
                <div style="font-size:9px;color:${be};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ze}</div>
                ${(ue=G.homePlayers)!=null&&ue.length?`<div style="margin-bottom:3px">${it(G.homePlayers,"rgba(255,255,255,0.7)",G.homeTotal)}</div>`:""}
                ${(he=G.aiPlayers)!=null&&he.length?`<div style="opacity:0.7">${it(G.aiPlayers,"#ff6b6b",G.aiTotal)}</div>`:""}
              </div>`}return G.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${G.outPlayer?Xe({...G.outPlayer,used:!0,_line:G.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${G.inPlayer?Xe({...G.inPlayer,_line:G.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:G.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${G.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${G.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function D(){const G=e.querySelector(".match-screen");if(!G)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.bottom="auto",G.style.height=re+"px",G.style.minHeight=re+"px",G.style.maxHeight=re+"px",G.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),he=e.querySelector("#mobile-play-area");ue&&he&&(he.style.paddingBottom=ue.offsetHeight+"px")}if(D(),setTimeout(D,120),setTimeout(D,400),setTimeout(D,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",D),window.visualViewport.addEventListener("scroll",D)),window.addEventListener("resize",D)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const G=e.querySelector(".terrain-wrapper svg");G&&(G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let G=!1,re=30;const ue=()=>document.getElementById("match-timer"),he=()=>{const xe=ue();if(!xe)return;const be=String(Math.floor(re/60)).padStart(2,"0"),ze=String(re%60).padStart(2,"0");xe.textContent=` ${be}:${ze}`,xe.style.color=G?"#ff2222":"#ff9500",xe.style.fontWeight="900"};he(),t._timerInt=setInterval(()=>{if(re--,re<0)if(!G)G=!0,re=15,he();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const xe=document.createElement("div");xe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",xe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(xe),setTimeout(()=>{xe.remove(),Gt(e,t,i)},2500)}else he()},1e3)}(q=document.getElementById("match-quit"))==null||q.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Gt(e,t,i))}),(I=document.getElementById("view-ai"))==null||I.addEventListener("click",()=>er(t,i)),(P=document.getElementById("toggle-history"))==null||P.addEventListener("click",()=>{var G;(G=document.getElementById("match-history-panel"))==null||G.classList.add("open")}),(te=document.getElementById("close-history"))==null||te.addEventListener("click",()=>{var G;(G=document.getElementById("match-history-panel"))==null||G.classList.remove("open")}),(V=document.getElementById("btn-action"))==null||V.addEventListener("click",()=>{t.selected.length!==0&&(p?Hn(e,t,i):x&&Un(e,t,i))}),(de=document.getElementById("btn-results"))==null||de.addEventListener("click",()=>Gt(e,t,i)),(ae=document.getElementById("btn-pass"))==null||ae.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ti(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>On(G,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>gi(e,t,i,null,G.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(G=>{G.addEventListener("click",()=>Jn(G.dataset.gcId,G.dataset.gcType,e,t,i))}),(J=document.getElementById("boost-card"))==null||J.addEventListener("click",()=>Qn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(G=>{G.addEventListener("click",()=>gi(e,t,i,G.dataset.subId))}),(R=document.getElementById("sub-btn-main"))==null||R.addEventListener("click",()=>gi(e,t,i))}function On(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,r=t.selected.findIndex(l=>l.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[s]||[]).find(m=>m.cardId===d);l&&t.selected.push({...l,_role:s,_line:s})}Je(i,t,n)}function zi(e,t,i){e.matchId&&T.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Hn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),zi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(l=>!l.used)),d=t.selected.map(r=>{const l=(t.homeTeam[r._role]||[]).find(a=>a.cardId===r.cardId)||r,m=n&&["GK","DEF"].includes(r._role);return{...l,_line:r._role,...m?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),s=Ut(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(r=>{const l=(t.homeTeam[r._role]||[]).find(m=>m.cardId===r.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Je(e,t,i),setTimeout(()=>Yn(e,t,i),1200)}function Un(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),zi(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId)||l,_line:l._role})),d=Kt(n,t.modifiers.home);t.selected.forEach(l=>{const m=(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId);m&&(m.used=!0)});const s=Vt(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ne(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const m=(t.homeTeam[l._role]||[]).find(a=>a.cardId===l.cardId)||l;return{name:m.name,note:(m._line==="GK"?Number(m.note_g)||0:m._line==="MIL"?Number(m.note_m)||0:Number(m.note_d)||0)+(m.boost||0),portrait:Ne(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(s.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Je(e,t,i),ii(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Lt(e,t,i,"home-attack")}function Kn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(m=>m.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(m=>!e.aiUsedSubIds.includes(m.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(m=>m.job===n.job)||i[0],s={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],l=r.findIndex(m=>m.cardId===n.cardId);l!==-1&&(r[l]=s),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Vn(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),He[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ti(e,t,i){zi(t,i,null),Kn(t),Vn(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=so(n,"attack",t.difficulty);if(!d.length){Zt(e,t,i);return}const s=Ut(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(a=>{a.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(a=>a.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used),m=(t.homeSubs||[]).filter(a=>!(t.usedSubIds||[]).includes(a.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!m){t.aiScore++;const a={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Ne(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(a),t.pendingAttack=null,Je(e,t,i),ii(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}t.phase="defense",Je(e,t,i)}function Yn(e,t,i){var a,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=so(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(y=>(t.aiTeam[y]||[]).filter(p=>!p.used)).length){t.homeScore++;const p={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((a=t.pendingAttack)==null?void 0:a.players)||[]).map(x=>({name:x.name,note:Se(x,x._line||x.job),portrait:Ne(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ii(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}const r=d.length>0?Kt(d,t.modifiers.ai).total:0;d.forEach(y=>{y.used=!0});const l=Vt(t.pendingAttack.total,r,t.modifiers.ai),m={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(y=>({name:y.name,note:y._line==="MIL"?y.note_m:y.note_a,portrait:Ne(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),aiPlayers:d.map(y=>({name:y.name,note:y._line==="GK"?y.note_g:y._line==="MIL"?y.note_m:y.note_d,portrait:Ne(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(l.shielded)m.text="🛡️ Bouclier IA !",t.log.push(m);else if(l.goal){t.homeScore++,m.isGoal=!0,m.homeScored=!0,m.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ii(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}else m.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(m);t.modifiers.ai={},t.pendingAttack=null,Lt(e,t,i,"ai-attack")}function Lt(e,t,i,n){if(t.round++,$o(t)){Gt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Zt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Zt(e,t,i);return}setTimeout(()=>ti(e,t,i),100);return}t.phase="attack",Je(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Zt(e,t,i);return}t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ti(e,t,i),800)}}function $o(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Zt(e,t,i){$o(t)?Gt(e,t,i):(t.phase="attack",Je(e,t,i))}function Wn(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=Ne(e),s=Ne(t),r=jt[e.job]||"#555",l=jt[t.job]||"#555",m=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,a=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${m}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${a}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let o=!1;const y=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",y),setTimeout(y,2e3)}function Bt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function gi(e,t,i,n=null,d=null){var x,_;if(t.phase!=="attack"){Bt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Bt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([f,c])=>(c||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||f}))),r=t.homeSubs.filter(f=>!t.usedSubIds.includes(f.cardId));if(!s.length){Bt("Aucun joueur utilisé à remplacer");return}if(!r.length){Bt("Aucun remplaçant disponible");return}let l=Math.max(0,s.findIndex(f=>f.cardId===d));const m=((x=s[l])==null?void 0:x._line)||((_=s[l])==null?void 0:_.job);let a=n?Math.max(0,r.findIndex(f=>f.cardId===n)):Math.max(0,r.findIndex(f=>f.job===m)),o=!1;const y=document.createElement("div");y.id="sub-overlay",y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function p(){var C,q,I,P,te,V;const f=s[l],c=r[a],z=Math.min(130,Math.round((window.innerWidth-90)/2)),u=Math.round(z*1.35),M=de=>`background:rgba(255,255,255,0.12);border:none;color:${de?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${de?"default":"pointer"};flex-shrink:0`;y.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${M(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${c?Xe({...c,used:!1,boost:0},z,u):"<div>—</div>"}</div>
        <button id="in-down" style="${M(a>=r.length-1)}" ${a>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${M(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${f?Xe({...f,used:!1,boost:0},z,u):"<div>—</div>"}</div>
        <button id="out-down" style="${M(l>=s.length-1)}" ${l>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=y.querySelector("#sub-close"))==null||C.addEventListener("click",()=>y.remove()),(q=y.querySelector("#out-up"))==null||q.addEventListener("click",()=>{l>0&&(l--,p())}),(I=y.querySelector("#out-down"))==null||I.addEventListener("click",()=>{l<s.length-1&&(l++,p())}),(P=y.querySelector("#in-up"))==null||P.addEventListener("click",()=>{a>0&&(a--,p())}),(te=y.querySelector("#in-down"))==null||te.addEventListener("click",()=>{a<r.length-1&&(a++,p())});const D=(de,ae,J,R)=>{const G=y.querySelector("#"+de);if(!G)return;let re=0;G.addEventListener("touchstart",ue=>{re=ue.touches[0].clientY},{passive:!0}),G.addEventListener("touchend",ue=>{const he=ue.changedTouches[0].clientY-re;if(Math.abs(he)<30)return;const xe=ae();he<0&&xe<R-1?(J(xe+1),p()):he>0&&xe>0&&(J(xe-1),p())},{passive:!0})};D("in-panel",()=>a,de=>a=de,r.length),D("out-panel",()=>l,de=>l=de,s.length),(V=y.querySelector("#sub-confirm"))==null||V.addEventListener("click",de=>{if(de.preventDefault(),de.stopPropagation(),o)return;o=!0;const ae=s[l],J=r[a];if(!ae||!J)return;let R=null,G=-1;for(const[ue,he]of Object.entries(t.homeTeam)){const xe=(he||[]).findIndex(be=>be.cardId===ae.cardId);if(xe!==-1){R=ue,G=xe;break}}if(G===-1||!R){Bt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),y.remove();return}const re={...J,_line:R,_col:ae._col||0,used:!1,boost:0};t.homeTeam[R].splice(G,1,re),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(J.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ae.name,firstname:ae.firstname,note:Se(ae,R),portrait:Ne(ae),job:ae.job,country_code:ae.country_code,rarity:ae.rarity,clubName:ae.clubName,clubLogo:ae.clubLogo},inPlayer:{name:J.name,firstname:J.firstname,note:Se(J,R),portrait:Ne(J),job:J.job,country_code:J.country_code,rarity:J.rarity,clubName:J.clubName,clubLogo:J.clubLogo},text:`🔄 ${J.firstname} ${J.name} remplace ${ae.firstname} ${ae.name}`}),y.remove(),Wn(ae,J,()=>Je(e,t,i))})}document.body.appendChild(y),p()}function Jn(e,t,i,n,d){var _,f;const s=(n.gcDefs||[]).find(c=>c.name===t),r=He[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",a=(s==null?void 0:s.name)||t,o=(s==null?void 0:s.effect)||r.desc,y=s!=null&&s.image_url?`/icons/${s.image_url}`:null,p=r.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${m};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${m}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${a.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${a}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${y?`<img src="${y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${p}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(_=x.querySelector("#gc-back"))==null||_.addEventListener("click",()=>x.remove()),(f=x.querySelector("#gc-use"))==null||f.addEventListener("click",()=>{x.remove(),Zn(e,t,i,n,d)})}function Jt(e,t,i,n,d,s){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function m(){var a,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(y=>{const p=y._line||y.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[p]||"#555",_=Se(y,p)+(y.boost||0),f=l.find(c=>c.cardId===y.cardId);return`<div class="gc-pick-item" data-cid="${y.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${f?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${y.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${p}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(a=r.querySelector("#gc-picker-close"))==null||a.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(y=>{y.addEventListener("click",()=>{const p=y.dataset.cid,x=e.find(f=>f.cardId===p);if(!x)return;const _=l.findIndex(f=>f.cardId===p);_>-1?l.splice(_,1):l.length<t&&l.push(x),m()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),s(l)})}m(),document.body.appendChild(r)}const Xn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const r=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,m])=>m.filter(a=>!a.used).map(a=>({...a,_line:l})));return r.length?(Jt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(m=>{const a=(n.homeTeam[m._line]||[]).find(o=>o.cardId===m.cardId);a&&(a.boost=(a.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${a.name}`,type:"info"}))}),Je(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Je(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,r)=>{const l=n==="home"?d.homeTeam:d.aiTeam,m=n==="ai"?"adverse":"allié",a=Object.entries(l).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,y])=>y.filter(p=>!p.used).map(p=>({...p,_line:o})));return a.length?(Jt(a,t,`Choisir ${t} joueur(s) ${m}(s) à débuffer (-${e})`,s,d,o=>{o.forEach(y=>{const x=((n==="home"?d.homeTeam:d.aiTeam)[y._line]||[]).find(_=>_.cardId===y.cardId);x&&(x.boost=(x.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Je(s,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${m} disponible`,type:"info"}),Je(s,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const r=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",m=Object.entries(r).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,o])=>o.filter(y=>!y.used).map(y=>({...y,_line:a})));return m.length?(Jt(m,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,a=>{a.forEach(o=>{const p=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(x=>x.cardId===o.cardId);p&&(p.used=!0,n.log.push({text:`❌ ${p.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Je(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Je(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,l])=>l.filter(m=>m.used).map(m=>({...m,_line:r})));return s.length?(Jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(l=>{const m=(i.homeTeam[l._line]||[]).find(a=>a.cardId===l.cardId);m&&(m.used=!1,i.log.push({text:`💫 ${m.name} ressuscité !`,type:"info"}))}),Je(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Je(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Zn(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],r=s.find(m=>m.name===t)||s.find(m=>{var a;return((a=m.name)==null?void 0:a.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const m=Xn[r.effect_type];m?m(r.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const m=Object.entries(n.homeTeam).flatMap(([a,o])=>(o||[]).filter(y=>y.used).map(y=>({...y,_line:a})));m.length?(m[0].used=!1,n.log.push({text:`💫 ${m[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const m=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(a=>!a.used);if(m.length){const a=m.sort((o,y)=>Se(y,"ATT")-Se(o,"ATT"))[0];a.used=!0,n.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}T.from("cards").delete().eq("id",e).then(()=>{}),l&&Je(i,n,d)}function Qn(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${jt[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Se(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[r]||[]).find(m=>m.cardId===s);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Je(e,t,i)})})}function ii(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(a,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
    </div>`).join("");s.innerHTML=`
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
    ${e.map(a=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${jt[a.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${a.portrait?`<img src="${a.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(a.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let l=!1;const m=()=>{l||(l=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",m),setTimeout(m,3500)}async function Gt(e,t,i){var o,y;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,r=d?"victoire":s?"nul":"defaite",l=en(t.mode,r);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const m={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?m.wins=(n.profile.wins||0)+1:s?m.draws=(n.profile.draws||0)+1:m.losses=(n.profile.losses||0)+1,await T.from("users").update(m).eq("id",n.profile.id),await i.refreshProfile();const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",a.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(a),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("home")}),(y=document.getElementById("res-replay"))==null||y.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function er(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${lt(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function wi(e,t,i=!1){var d,s,r,l;try{const m=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(o=>{const y=o.topic||"";(y.includes("matchmaking")||y.includes("pvp-match")||y.includes("friend-invite"))&&T.removeChannel(o)})}catch(a){console.warn("[Random] cleanup canaux:",a)}m&&await T.rpc("cancel_matchmaking",{p_user_id:m}).catch(()=>{})}catch{}const n=i&&((l=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:l.rankedData)||null;await di(e,t,"random",({deckId:m,formation:a,starters:o,subsRaw:y,gcCardsEnriched:p,gcDefs:x,stadiumDef:_})=>{const f=c=>tr(e,t,m,a,o,y,c,x||[],_,i,n);if(!p.length){f([]);return}si(e,p,f)})}async function tr(e,t,i,n,d,s,r=[],l=[],m=null,a=!1,o=null){var q,I;const{state:y,navigate:p,toast:x}=t;let _=!1,f=null;et(e);const c=(o==null?void 0:o.mmr)??((q=y.profile)==null?void 0:q.mmr)??1e3,z=a?Nt(c):null,u=a?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",M=a?(z==null?void 0:z.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${u};padding:24px;text-align:center">
      ${a?`<div style="font-size:36px">${(z==null?void 0:z.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${M};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${a?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${a?`<div style="font-size:13px;color:${(z==null?void 0:z.color)||"#D4A017"}">${(z==null?void 0:z.emoji)||"⚔️"} ${(z==null?void 0:z.label)||"Ranked"}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="display:none"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const D=async(P=!0)=>{_=!0,f&&(T.removeChannel(f),f=null),P&&await T.rpc("cancel_matchmaking",{p_user_id:y.profile.id}).catch(()=>{})};(I=document.getElementById("mm-cancel"))==null||I.addEventListener("click",async()=>{try{await D(!0)}catch{}Ve(e),p("home")});const C=async(P,te,V)=>{if(_)return;_=!0,f&&(T.removeChannel(f),f=null);const de=document.getElementById("mm-status");de&&(de.textContent="Adversaire trouvé !"),await new Promise(ae=>setTimeout(ae,600)),e.isConnected&&ko(e,t,P,V,r,l,a,o,m)};if(a){const P=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let te=0,V=!1;const de=async()=>{if(_||V)return;const{range:ae}=P[te],J=document.getElementById("mm-range");J&&(J.textContent=`Plage MMR : ±${ae}`);const{data:R,error:G}=await T.rpc("try_matchmake_ranked",{p_user_id:y.profile.id,p_deck_id:i,p_mmr:c,p_range:ae});if(console.log("[Ranked] try_matchmake_ranked result:",R,"error:",JSON.stringify(G)),_)return;if(G||!(R!=null&&R.success)){x("Erreur matchmaking ranked","error"),Ve(e),p("home");return}if(R.matched){V=!0,C(R.match_id,R.opponent_id,!1);return}const re=document.getElementById("mm-status");if(re&&(re.textContent="En attente d'un adversaire..."),f||(f=T.channel("matchmaking-"+y.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${y.profile.id}`},ue=>{const he=ue.new;he.status==="matched"&&he.match_id&&!V&&(V=!0,C(he.match_id,he.matched_with,!0))}).subscribe()),te<P.length-1){const ue=P[te+1].delay-P[te].delay;te++,setTimeout(()=>{!_&&!V&&de()},ue)}};await de()}else{const{data:P,error:te}=await T.rpc("try_matchmake",{p_user_id:y.profile.id,p_deck_id:i});if(te||!(P!=null&&P.success)){x("Erreur de matchmaking","error"),Ve(e),p("home");return}if(P.matched){C(P.match_id,P.opponent_id,!1);return}const V=document.getElementById("mm-status");V&&(V.textContent="En attente d'un autre joueur..."),f=T.channel("matchmaking-"+y.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${y.profile.id}`},de=>{const ae=de.new;ae.status==="matched"&&ae.match_id&&C(ae.match_id,ae.matched_with,!0)}).subscribe()}}async function ir(e,t,i){const{state:n,navigate:d,toast:s}=t;try{(T.getChannels?T.getChannels():[]).forEach(a=>{const o=a.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&T.removeChannel(a)})}catch{}const{data:r}=await T.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){s("Match introuvable","error"),d("home");return}if(r.status==="finished"){s("Ce match est terminé","info"),d("home");return}const l=r.home_id===n.profile.id;ko(e,t,i,l,[],[])}async function ko(e,t,i,n,d=[],s=[],r=!1,l=null,m=null){const{state:a,navigate:o,toast:y}=t,p=n?"p1":"p2",x=n?"p2":"p1",_=(d||[]).map($=>$.id),f=(d||[]).map($=>({id:$.id,gc_type:$.gc_type,_gcDef:$._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:c}=await T.from("matches").select("*").eq("id",i).single();if(!c){y("Match introuvable","error"),o("home");return}async function z(){var W,oe;console.log("[PvP] buildGameState match:",{id:c.id,home_deck_id:c.home_deck_id,away_deck_id:c.away_deck_id,mode:c.mode,is_ranked:c.is_ranked});const[{data:$,error:g},{data:b,error:h},{data:v},{data:w}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:c.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:c.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",c.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",c.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",g==null?void 0:g.message,"p2:",h==null?void 0:h.message,"p1D:",(W=$==null?void 0:$.starters)==null?void 0:W.length,"p2D:",(oe=b==null?void 0:b.starters)==null?void 0:oe.length);const k=ee=>{const pe=Number(ee.evolution_bonus)||0;return{cardId:ee.card_id,position:ee.position,id:ee.id,firstname:ee.firstname,name:ee.surname_encoded,country_code:ee.country_code,club_id:ee.club_id,job:ee.job,job2:ee.job2,note_g:(Number(ee.note_g)||0)+(ee.job==="GK"||ee.job2==="GK"&&Number(ee.note_g)>0?pe:0),note_d:(Number(ee.note_d)||0)+(ee.job==="DEF"||ee.job2==="DEF"&&Number(ee.note_d)>0?pe:0),note_m:(Number(ee.note_m)||0)+(ee.job==="MIL"||ee.job2==="MIL"&&Number(ee.note_m)>0?pe:0),note_a:(Number(ee.note_a)||0)+(ee.job==="ATT"||ee.job2==="ATT"&&Number(ee.note_a)>0?pe:0),evolution_bonus:pe,rarity:ee.rarity,skin:ee.skin,hair:ee.hair,hair_length:ee.hair_length,clubName:ee.club_encoded_name||null,clubLogo:ee.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},A=(($==null?void 0:$.starters)||[]).map(ee=>k(ee)),E=((b==null?void 0:b.starters)||[]).map(ee=>k(ee)),L=($==null?void 0:$.formation)||"4-4-2",S=(b==null?void 0:b.formation)||"4-4-2";let j=bt(A,L),F=bt(E,S);const Y=(($==null?void 0:$.subs)||[]).map(ee=>k(ee)),Z=((b==null?void 0:b.subs)||[]).map(ee=>k(ee)),H=($==null?void 0:$.stadium_def)||(n?m:null),N=(b==null?void 0:b.stadium_def)||(n?null:m);return H&&(j=Tt(j,H),Ct(Y,H)),N&&(F=Tt(F,N),Ct(Z,N)),{p1Team:j,p2Team:F,p1Subs:Y,p2Subs:Z,p1Formation:L,p2Formation:S,p1Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?_:[],gc_p2:n?[]:_,gcCardsFull_p1:n?f:[],gcCardsFull_p2:n?[]:f,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let u=c.game_state&&Object.keys(c.game_state).length?c.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!u,"match.status:",c.status,"home_id:",c.home_id,"away_id:",c.away_id,"myId:",a.profile.id),!u)if(n){u=await z(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((u==null?void 0:u.p1Team)||{}));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await T.from("matches").update({game_state:u,turn_user_id:c.home_id}).eq("id",i):u=$.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let $=0;$<30&&!u;$++){await new Promise(b=>setTimeout(b,400));const{data:g}=await T.from("matches").select("game_state").eq("id",i).single();g!=null&&g.game_state&&Object.keys(g.game_state).length&&(u=g.game_state),$%5===0&&console.log("[PvP] away - poll",$,"game_state:",!!(g!=null&&g.game_state))}if(!u){y("Erreur de synchronisation","error"),o("home");return}u.gc_p2=_,u.gcCardsFull_p2=f,await T.from("matches").update({game_state:u}).eq("id",i)}let M=!1,D=null,C=!1;const q=new Set,I=new Set;async function P($){var S,j;try{T.removeChannel(te)}catch{}const g=u[p+"Score"]||0,b=u[x+"Score"]||0;let h,v;$.winner_id?(h=$.winner_id===a.profile.id,v=!1):$.forfeit?(h=g>b,v=!1):(v=g===b,h=g>b);let w="";if(r&&n)try{const{data:F}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.home_id).single(),{data:Y}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.away_id).single();if(F&&Y){const Z=h?1:v?.5:0,H=1-Z,N=F.placement_matches<10,W=Y.placement_matches<10,oe=Mi(F.mmr,F.mmr_deviation,F.mmr_volatility,Y.mmr,Y.mmr_deviation,Z===1?1:Z===0?0:.5,N),ee=Mi(Y.mmr,Y.mmr_deviation,Y.mmr_volatility,F.mmr,F.mmr_deviation,H===1?1:H===0?0:.5,W);await T.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:v?null:h?c.home_id:c.away_id,p_home_id:c.home_id,p_away_id:c.away_id,p_home_delta:oe.delta,p_away_delta:ee.delta,p_home_new_rd:oe.newRd,p_away_new_rd:ee.newRd,p_home_new_vol:oe.newSigma,p_away_new_vol:ee.newSigma});const pe=oe.delta,ge=oe.newMmr,me=Nt(ge),Ee=pe>=0?"+":"",Be=pe>=0?"#4caf50":"#ff6b6b",De=Nt(F.mmr);w=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${me.id!==De.id?`<div style="font-size:20px;font-weight:900;color:${me.color}">
                    ${ge>F.mmr?"📈":"📉"} ${De.emoji} ${De.label} → ${me.emoji} ${me.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ge>F.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${pe>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${me.color}">${me.emoji} ${me.label}</div>`}
              ${N?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${F.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(F){console.error("[Ranked] MMR update error:",F)}(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const A=v?"🤝":h?"🏆":"😞",E=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",L=v?"#fff":h?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${A}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${u[p+"Name"]} ${g} – ${b} ${u[x+"Name"]}</div>
      ${$.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${w}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(k),(j=k.querySelector("#pvp-end-home"))==null||j.addEventListener("click",()=>{k.remove(),Ve(e),o(r?"ranked":"home")})}const te=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const g=$.new;try{if(g.status==="finished"||g.forfeit){if(M)return;M=!0,D&&(clearInterval(D),D=null),g.game_state&&(u=g.game_state),P(g);return}if(g.game_state){const b=u;u=g.game_state;const h=u._lastGC;if(h&&h.seq&&!I.has(h.seq)&&(I.add(h.seq),h.by!==p)){qe(h.type,h.by,()=>ue());return}const v=b[p+"Score"]||0,w=b[x+"Score"]||0,k=u[p+"Score"]||0,A=u[x+"Score"]||0,E=k>v,L=A>w;if((E||L)&&!q.has(u.round)){q.add(u.round);const S=[...u.log||[]].reverse().find(F=>F.isGoal),j=((S==null?void 0:S.homePlayers)||[]).map(F=>({name:F.name,note:F.note,portrait:F.portrait,job:F.job}));ze(j,k,A,E,()=>ue());return}ue()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function V($){Object.assign(u,$),u.lastActionAt=new Date().toISOString();const{error:g}=await T.from("matches").update({game_state:u}).eq("id",i);g&&y("Erreur de synchronisation","error");try{ue()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function de(){if(M)return;M=!0,D&&(clearInterval(D),D=null);const $=n?c.away_id:c.home_id,g=n?"p2":"p1",b=n?"p1":"p2",h={...u,[g+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:$,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{T.removeChannel(te)}catch{}setTimeout(()=>{Ve(e),o("home")},800)}const ae={BOOST_STAT:({value:$=1,count:g=1,roles:b=[]},h,v)=>{const w=h[p+"Team"],k=Object.entries(w).filter(([A])=>!b.length||b.includes(A)).flatMap(([A,E])=>E.filter(L=>!L.used).map(L=>({...L,_line:A})));if(!k.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}J(k,g,`Choisir ${g} joueur(s) à booster (+${$})`,A=>{A.forEach(E=>{const L=(w[E._line]||[]).find(S=>S.cardId===E.cardId);L&&(L.boost=(L.boost||0)+$,h.log.push({text:`⚡ +${$} sur ${L.name}`,type:"info"}))}),h[p+"Team"]=w,v(h)})},DEBUFF_STAT:({value:$=1,count:g=1,roles:b=[],target:h="ai"},v,w)=>{const k=h==="home"?p:x,A=v[k+"Team"],E=h==="home"?"allié":"adverse",L=Object.entries(A).filter(([S])=>!b.length||b.includes(S)).flatMap(([S,j])=>j.map(F=>({...F,_line:S})));if(!L.length){v.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(v);return}J(L,g,`Choisir ${g} joueur(s) ${E}(s) (-${$})`,S=>{S.forEach(j=>{const F=(A[j._line]||[]).find(Y=>Y.cardId===j.cardId);F&&(F.boost=(F.boost||0)-$,v.log.push({text:`🎯 -${$} sur ${F.name}`,type:"info"}))}),v[k+"Team"]=A,w(v)})},GRAY_PLAYER:({count:$=1,roles:g=[],target:b="ai"},h,v)=>{const w=b==="home"?p:x,k=h[w+"Team"],A=b==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!g.length||g.includes(L)).flatMap(([L,S])=>S.filter(j=>!j.used).map(j=>({...j,_line:L})));if(!E.length){h.log.push({text:`❌ Aucun joueur ${A}`,type:"info"}),v(h);return}J(E,$,`Choisir ${$} joueur(s) ${A}(s) à exclure`,L=>{const S="usedCardIds_"+w,j=new Set(h[S]||[]);L.forEach(F=>{const Y=(k[F._line]||[]).find(Z=>Z.cardId===F.cardId);Y&&(Y.used=!0,j.add(F.cardId),h.log.push({text:`❌ ${Y.name} exclu !`,type:"info"}))}),h[S]=[...j],h[w+"Team"]=k,v(h)})},REVIVE_PLAYER:({count:$=1,roles:g=[]},b,h)=>{const v=b[p+"Team"],w=Object.entries(v).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,A])=>A.filter(E=>E.used).map(E=>({...E,_line:k})));if(!w.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}J(w,$,`Choisir ${$} joueur(s) à ressusciter`,k=>{k.forEach(A=>{const E=(v[A._line]||[]).find(L=>L.cardId===A.cardId);E&&(E.used=!1,b.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),b[p+"Team"]=v,h(b)})},REMOVE_GOAL:({},$,g)=>{const b=x+"Score";$[b]>0?($[b]--,$.log.push({text:"🚫 Dernier but annulé !",type:"info"})):$.log.push({text:"🚫 Aucun but à annuler",type:"info"}),g($)},ADD_GOAL_DRAW:({},$,g)=>{$[p+"Score"]===$[x+"Score"]?($[p+"Score"]++,$.log.push({text:"🎯 But bonus !",type:"info"})):$.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),g($)},ADD_SUB:({value:$=1},g,b)=>{g.maxSubs=(g.maxSubs||3)+$,g.log.push({text:`🔄 +${$} remplacement(s)`,type:"info"}),b(g)},CUSTOM:({},$,g)=>g($)};function J($,g,b,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function k(){var E,L;const A=$.map(S=>{const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",F=Se(S,S._line)+(S.boost||0),Z=w.find(N=>N.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Z};background:${j};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${g}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${A}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${g})
          </button>
        </div>`,(E=v.querySelector("#pp-close"))==null||E.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const j=S.dataset.cid,F=$.find(Z=>Z.cardId===j),Y=w.findIndex(Z=>Z.cardId===j);F&&(Y>-1?w.splice(Y,1):w.length<g&&w.push(F),k())})}),(L=v.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{v.remove(),h(w)})}k(),document.body.appendChild(v)}async function R($,g){const h=(u["gcCardsFull_"+p]||[]).find(A=>A.id===$),v=(h==null?void 0:h._gcDef)||(u.gcDefs||[]).find(A=>{var E;return A.name===g||((E=A.name)==null?void 0:E.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w=[...u["usedGc_"+p]||[],$],k={type:g,by:p,seq:(u._gcAnimSeq||0)+1};I.add(k.seq),qe(g,p,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const E=ae[v.effect_type];if(E){const L={...u};E(v.effect_params||{},L,async S=>{S["usedGc_"+p]=w,S._lastGC=k,S._gcAnimSeq=k.seq,await V(S)});return}}const A={...u};switch(g){case"Remplacement+":A.maxSubs=(A.maxSubs||3)+1,A.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=x+"Score";A[E]>0&&(A[E]--,A.log.push({text:"🚫 But annulé",type:"info"}));break}}A["usedGc_"+p]=w,A._lastGC=k,A._gcAnimSeq=k.seq,await V(A)})}function G($,g){const b="usedCardIds_"+$,h=new Set(u[b]||[]);g.forEach(v=>h.add(v)),u[b]=[...h]}function re(){for(const $ of["p1","p2"]){const g=new Set(u["usedCardIds_"+$]||[]),b=u[$+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(v=>{v.used=g.has(v.cardId)})}}function ue(){var We,ot,pt,ut,ft,ce;if(u.phase==="reveal")return he();if(u.phase==="midfield")return be();if(u.phase==="finished")return B();const $=u[p+"Team"],g=u[x+"Team"];re();const b=u[p+"Score"],h=u[x+"Score"],v=u[p+"Name"],w=u[x+"Name"],k=u.phase===p+"-attack",A=u.phase===p+"-defense",E=Array.isArray(u["selected_"+p])?u["selected_"+p]:[],L=E.map(Q=>Q.cardId),S=window.innerWidth>=700,j=u[p+"Subs"]||[],F=u["usedSubIds_"+p]||[],Y=j.filter(Q=>!F.includes(Q.cardId)),Z=u["gcCardsFull_"+p]||[],H=u["usedGc_"+p]||[],N=Z.filter(Q=>!H.includes(Q.id)),W=u.boostOwner===p&&!u.boostUsed,oe=!["GK","DEF","MIL","ATT"].some(Q=>(g[Q]||[]).some(O=>!O.used)),ee=[...$.MIL||[],...$.ATT||[]].filter(Q=>!Q.used),pe=k&&oe&&ee.length===0?[...$.GK||[],...$.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function ge(Q,O,se){var _t,qt;const ye=Q._gcDef,_e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",Qe=(ye==null?void 0:ye.name)||Q.gc_type,tt=(ye==null?void 0:ye.effect)||((_t=He[Q.gc_type])==null?void 0:_t.desc)||"",rt=ye!=null&&ye.image_url?`/icons/${ye.image_url}`:null,vt=((qt=He[Q.gc_type])==null?void 0:qt.icon)||"⚡",wt=Math.round(se*.22),dt=Math.round(se*.22),gt=se-wt-dt,mt=Qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
        style="box-sizing:border-box;width:${O}px;height:${se}px;border-radius:10px;border:2px solid ${Ze};background:${_e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${wt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${Qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${gt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${O-10}px;max-height:${gt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(gt*.55)}px">${vt}</span>`}
        </div>
        <div style="height:${dt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${tt.slice(0,38)}</span>
        </div>
      </div>`}function me(Q,O){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(O*.2)}px">⚡</div>
        <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Ee=(Q,O)=>O?me(130,175):ge(Q,130,175),Be=(Q,O)=>O?me(68,95):ge(Q,68,95),De=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=k?ve(p)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:A?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,je=k&&!ve(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':k||A?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Ie=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Y.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Y.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(Q,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,Re=k?"attack":A?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct($,u[p+"Formation"],Re,L,300,300,pe)}
      </div>
    </div>`;function Ye(Q){if(Q.type==="duel"&&(Q.homeTotal!=null||Q.aiTotal!=null)){const O=(Q.homeTotal||0)>=(Q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.homePlayers||[]).map(se=>at(se)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${O?20:14}px;font-weight:900;color:${O?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${O?14:20}px;font-weight:900;color:${O?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.aiPlayers||[]).map(se=>at(se)).join("")}
            </div>
          </div>
          ${Q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Q.type==="goal"?700:400};padding:3px 2px">${Q.text||""}</div>`}const Ke=(()=>{var O,se;if(A&&((O=u.pendingAttack)!=null&&O.players)){const ye=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((ye.players||[]).map(_e=>({..._e,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(k&&((se=u.pendingAttack)!=null&&se.players)){const ye=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ye.players||[]).map(_e=>({..._e,used:!1})),"#00ff88",ye.total)}
        </div>`}const Q=(u.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+Ye(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Oe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ie}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${N.map(Q=>Ee(Q,!1)).join("")}
            ${W?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct($,u[p+"Formation"],Re,L,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${N.map(Q=>Be(Q,!1)).join("")}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+p]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Me}${je}</div>
        </div>
      </div>`;function Pe(){const Q=e.querySelector(".match-screen");if(!Q)return;const O=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=O+"px",Q.style.minHeight=O+"px",Q.style.maxHeight=O+"px",Q.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");se&&ye&&(ye.style.paddingBottom=se.offsetHeight+"px")}if(Pe(),setTimeout(Pe,120),setTimeout(Pe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Pe),window.visualViewport.addEventListener("scroll",Pe)),window.addEventListener("resize",Pe)),function(){const O=e.querySelector(".terrain-wrapper svg");O&&(O.removeAttribute("width"),O.removeAttribute("height"),O.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",O.setAttribute("viewBox","-26 -26 352 352"),O.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!k&&!A)return;const O=Q.dataset.cardId,se=Q.dataset.role,ye=($[se]||[]).find(tt=>tt.cardId===O);if(!ye||ye.used)return;const _e=pe.includes(O);if(k&&!["MIL","ATT"].includes(se)&&!_e)return;Array.isArray(u["selected_"+p])||(u["selected_"+p]=[]);const Ze=u["selected_"+p],Qe=Ze.findIndex(tt=>tt.cardId===O);Qe>-1?Ze.splice(Qe,1):Ze.length<3&&Ze.push({...ye,_role:se}),ue()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>K(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>K())}),(We=e.querySelector("#pvp-sub-open"))==null||We.addEventListener("click",()=>K()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>Ce(Q.dataset.gcId,Q.dataset.gcType))}),(ot=e.querySelector("#pvp-boost-card"))==null||ot.addEventListener("click",()=>$e()),(pt=e.querySelector("#pvp-action"))==null||pt.addEventListener("click",Q=>{k?Q.currentTarget.dataset.pass==="1"||!ve(p)?ie():X():A&&le()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>fe()),(ce=e.querySelector("#pvp-toggle-history"))==null||ce.addEventListener("click",()=>U()),D&&(clearInterval(D),D=null),(k||A)&&!M){let Q=30,O=!1;const se=()=>document.getElementById("pvp-timer"),ye=()=>{se()&&(se().textContent=Q+"s",se().style.color=O?"#ff4444":"#fff")};ye(),D=setInterval(()=>{Q--,Q<0?O?(clearInterval(D),D=null,k&&!ve(p)?ie():de()):(O=!0,Q=15,ye()):ye()},1e3)}}function he(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(u[x+"Team"],u[x+"Formation"],null,[],300,300)}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let xe=!1;function be(){if(xe)return;const $=u[p+"Team"].MIL||[],g=u[x+"Team"].MIL||[];function b(N){return N.reduce((W,oe)=>W+Se(oe,"MIL"),0)}function h(N){let W=0;for(let oe=0;oe<N.length-1;oe++){const ee=nt(N[oe],N[oe+1]);ee==="#00ff88"?W+=2:ee==="#FFD700"&&(W+=1)}return W}const v=b($)+h($),w=b(g)+h(g),k=v>=w;function A(N,W,oe){return`<div id="duel-row-${oe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${W}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${N.map((ee,pe)=>{const ge=pe<N.length-1?nt(ee,N[pe+1]):null,me=!ge||ge==="#ff3333"||ge==="#cc2222",Ee=ge==="#00ff88"?"+2":ge==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${oe}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...ee,note:Se(ee,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<N.length-1?`<div class="duel-link duel-link-${oe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${me?"rgba(255,255,255,0.12)":ge};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${me?"none":`0 0 8px ${ge}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ge}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${oe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(N)} + ${h(N)} liens = <b style="color:#fff">${b(N)+h(N)}</b>
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
      ${A($,u[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${A(g,u[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(N,W)=>e.querySelectorAll(N).forEach((oe,ee)=>{setTimeout(()=>{oe.style.opacity="1",oe.style.transform="translateY(0) scale(1)"},W+ee*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((N,W)=>setTimeout(()=>{N.style.opacity="1"},W*70)),900),setTimeout(()=>{const N=e.querySelector("#pvp-vs");N&&(N.style.opacity="1",N.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(W=>W.style.opacity="1")},1250);function L(N,W,oe){const ee=document.getElementById(N);if(!ee)return;const pe=performance.now(),ge=me=>{const Ee=Math.min(1,(me-pe)/oe);ee.textContent=Math.round(W*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(ge):ee.textContent=W};requestAnimationFrame(ge)}setTimeout(()=>{L("pvp-score-me",v,800),L("pvp-score-opp",w,800)},1500);const S=u.p1Team.MIL||[],j=u.p2Team.MIL||[],F=b(S)+h(S),Y=b(j)+h(j),Z=F>=Y?"p1":"p2";let H=u.boostValue;H==null&&(H=ai(),u.boostValue=H,u.boostOwner=Z,u.boostUsed=!1),xe=!0,setTimeout(()=>{const N=e.querySelector("#duel-row-"+(k?"me":"opp")),W=e.querySelector("#duel-row-"+(k?"opp":"me")),oe=document.getElementById("pvp-score-me"),ee=document.getElementById("pvp-score-opp"),pe=k?oe:ee,ge=k?ee:oe;pe&&(pe.style.fontSize="80px",pe.style.color=k?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(k?",duelGlow 1.5s ease infinite .5s":"")),ge&&(ge.style.opacity="0.25"),setTimeout(()=>{N&&(N.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",N.style.zIndex="5"),setTimeout(()=>{const me=document.getElementById("duel-shock");me&&(me.style.animation="shockwave .5s ease-out forwards"),W&&(W.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const me=document.getElementById("pvp-duel-finale");if(!me)return;const Ee=u.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Be=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(k?"⚽ "+u[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Be,me.style.transition="opacity .45s ease",me.style.opacity="1",me.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Me=Z;await V({phase:Me+"-attack",attacker:Me,round:1,boostValue:H,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function ze($,g,b,h,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const k=Array.from({length:10},(S,j)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${j%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][j%8]}</div>`).join(""),A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${k}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${g} – ${b}
      </div>
      ${$!=null&&$.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${$.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${A[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const L=()=>{E||(E=!0,w.remove(),setTimeout(()=>v(),50))};w.addEventListener("click",L),setTimeout(L,3500)}function qe($,g,b){var H,N;const h=(u.gcDefs||[]).find(W=>{var oe;return W.name===$||((oe=W.name)==null?void 0:oe.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",k=(h==null?void 0:h.name)||$,A=(h==null?void 0:h.effect)||((H=He[$])==null?void 0:H.desc)||"",E=h!=null&&h.image_url?`/icons/${h.image_url}`:null,L=((N=He[$])==null?void 0:N.icon)||"⚡",j=g===p?"Vous":u[g+"Name"]||"Adversaire",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",F.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${j} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(F);let Y=!1;const Z=()=>{Y||(Y=!0,F.remove(),setTimeout(()=>b&&b(),50))};F.addEventListener("click",Z),setTimeout(Z,3e3)}function Ce($,g){var F,Y,Z,H;const h=(u["gcCardsFull_"+p]||[]).find(N=>N.id===$),v=h==null?void 0:h._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",A=(v==null?void 0:v.name)||g,E=(v==null?void 0:v.effect)||((F=He[g])==null?void 0:F.desc)||"Carte spéciale.",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,S=((Y=He[g])==null?void 0:Y.icon)||"⚡",j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",j.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${k}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${A.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(j),(Z=j.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>j.remove()),(H=j.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{j.remove(),R($,g)})}function $e(){var h;const $=u[p+"Team"],g=Object.entries($).flatMap(([v,w])=>(w||[]).filter(k=>!k.used).map(k=>({...k,_line:v})));if(!g.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${g.map(v=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",k=Se(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const w=v.dataset.cid,k=g.find(E=>E.cardId===w);if(!k)return;const A=($[k._line]||[]).find(E=>E.cardId===w);A&&(A.boost=(A.boost||0)+u.boostValue),b.remove(),await V({[p+"Team"]:$,boostUsed:!0})})})}function K($=null){var Y,Z;if(!(u.phase===p+"-attack")){y("Remplacement uniquement avant votre attaque","warning");return}const b=u[p+"Team"],h=u["usedSubIds_"+p]||[],v=u.maxSubs||3;if(h.length>=v){y(`Maximum ${v} remplacements atteint`,"warning");return}const w=Object.entries(b).flatMap(([H,N])=>(N||[]).filter(W=>W.used).map(W=>({...W,_line:H}))),k=(u[p+"Subs"]||[]).filter(H=>!h.includes(H.cardId));if(!w.length){y("Aucun joueur utilisé à remplacer","warning");return}if(!k.length){y("Aucun remplaçant disponible","warning");return}let A=Math.max(0,w.findIndex(H=>H.cardId===$));const E=((Y=w[A])==null?void 0:Y._line)||((Z=w[A])==null?void 0:Z.job);let L=Math.max(0,k.findIndex(H=>H.job===E)),S=!1;const j=document.createElement("div");j.id="pvp-sub-overlay",j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function F(){var ge,me,Ee,Be,De,Me;const H=w[A],N=k[L],W=Math.min(130,Math.round((window.innerWidth-90)/2)),oe=Math.round(W*1.35),ee=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;j.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ee(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${N?Xe({...N,used:!1,boost:0},W,oe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ee(L>=k.length-1)}" ${L>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${k.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ee(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${H?Xe({...H,used:!1,boost:0},W,oe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ee(A>=w.length-1)}" ${A>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ge=j.querySelector("#psub-close"))==null||ge.addEventListener("click",()=>j.remove()),(me=j.querySelector("#pout-up"))==null||me.addEventListener("click",()=>{A>0&&(A--,F())}),(Ee=j.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{A<w.length-1&&(A++,F())}),(Be=j.querySelector("#pin-up"))==null||Be.addEventListener("click",()=>{L>0&&(L--,F())}),(De=j.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{L<k.length-1&&(L++,F())});const pe=(je,Ie,Re,Ue)=>{const Ye=j.querySelector("#"+je);if(!Ye)return;let Ke=0;Ye.addEventListener("touchstart",Oe=>{Ke=Oe.touches[0].clientY},{passive:!0}),Ye.addEventListener("touchend",Oe=>{const Pe=Oe.changedTouches[0].clientY-Ke;if(Math.abs(Pe)<30)return;const We=Ie();Pe<0&&We<Ue-1?(Re(We+1),F()):Pe>0&&We>0&&(Re(We-1),F())},{passive:!0})};pe("pin-panel",()=>L,je=>L=je,k.length),pe("pout-panel",()=>A,je=>A=je,w.length),(Me=j.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),S)return;S=!0;const Ie=w[A],Re=k[L];if(!Ie||!Re)return;const Ue=Ie._line,Ye=(b[Ue]||[]).findIndex(Pe=>Pe.cardId===Ie.cardId);if(Ye===-1){y("Erreur : joueur introuvable","error"),j.remove();return}const Ke={...Re,_line:Ue,position:Ie.position,used:!1,boost:0};b[Ue].splice(Ye,1,Ke);const Oe=[...h,Re.cardId];j.remove(),ne(Ie,Re,async()=>{await V({[p+"Team"]:b,[x+"Team"]:u[x+"Team"],["usedSubIds_"+p]:Oe})})})}document.body.appendChild(j),F()}function ne($,g,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,L,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[E.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${Ne(E)?`<img src="${Ne(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(g,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w($,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let k=!1;const A=()=>{k||(k=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",A),setTimeout(A,2200)}function fe(){var g;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",$.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(u[x+"Team"],u[x+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild($),(g=$.querySelector("#pvp-opp-close"))==null||g.addEventListener("click",()=>$.remove())}function U(){var b;const $=u.log||[],g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",g.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${$.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...$].reverse().map(h=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${h.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>g.remove())}async function ie(){if(u.phase!==p+"-attack")return;const $=p==="p1"?"p2":"p1",g=(u.round||0)+1,b=[...u.log||[]];b.push({type:"info",text:`⏭️ ${u[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=ke(u),v=ve($),w=h||!v?"finished":$+"-attack";await V({["selected_"+p]:[],modifiers:{...u.modifiers,[p]:{}},pendingAttack:null,phase:w,attacker:$,round:g,log:b}),w==="finished"&&await Le(u)}async function X(){const $=u[p+"Team"],g=!["GK","DEF","MIL","ATT"].some(w=>(u[x+"Team"][w]||[]).some(k=>!k.used)),b=(u["selected_"+p]||[]).map(w=>{const k=($[w._role]||[]).find(F=>F.cardId===w.cardId)||w,A=g&&["GK","DEF"].includes(w._role),E=$[w._role]||[],L=E.findIndex(F=>F.cardId===w.cardId),S=st(E.length),j=L>=0?S[L]:k._col??1;return{...k,_line:w._role,_col:j,...A?{note_a:Math.max(1,Number(k.note_a)||0)}:{}}});if(!b.length)return;const h=Ut(b,u.modifiers[p]||{});G(p,b.map(w=>w.cardId)),b.forEach(w=>{const k=($[w._role]||[]).find(A=>A.cardId===w.cardId);k&&(k.used=!0)}),u["selected_"+p]=[],ue();const v=[...u.log||[]];if(g){const w=(u[p+"Score"]||0)+1,k=b.map(j=>({name:j.name,note:Se(j,j._line||"ATT"),portrait:Ne(j),job:j.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:k,homeTotal:h.total,aiTotal:0});const A=(u.round||0)+1,E=p==="p1"?"p2":"p1",L={...u,[p+"Team"]:$,[p+"Score"]:w},S=ke(L);q.add(A),ze(k,w,u[x+"Score"]||0,!0,async()=>{await V({[p+"Team"]:$,[p+"Score"]:w,["selected_"+p]:[],modifiers:{...u.modifiers,[p]:{}},pendingAttack:null,phase:S?"finished":E+"-attack",attacker:E,round:A,log:v}),S&&await Le({...u,[p+"Score"]:w})});return}v.push({type:"pending",text:`⚔️ ${u[p+"Name"]} attaque (${h.total})`}),await V({[p+"Team"]:$,[x+"Team"]:u[x+"Team"],pendingAttack:{...h,players:b,side:p},["selected_"+p]:[],modifiers:{...u.modifiers,[p]:{}},phase:x+"-defense",log:v})}async function le(){const $=u[p+"Team"],g=(u["selected_"+p]||[]).map(H=>{const N=($[H._role]||[]).find(ge=>ge.cardId===H.cardId)||H,W=$[H._role]||[],oe=W.findIndex(ge=>ge.cardId===H.cardId),ee=st(W.length),pe=oe>=0?ee[oe]:N._col??1;return{...N,_line:H._role,_col:pe}}),b=Kt(g,u.modifiers[p]||{});G(p,g.map(H=>H.cardId)),g.forEach(H=>{const N=($[H._role]||[]).find(W=>W.cardId===H.cardId);N&&(N.used=!0)}),u["selected_"+p]=[],ue();const h=Vt(u.pendingAttack.total,b.total,u.modifiers[p]||{}),v=u.pendingAttack.side,w=h==="attack"||(h==null?void 0:h.goal),k=v==="p1"?"p2":"p1",A=(u.round||0)+1,E=(u.pendingAttack.players||[]).map(H=>({name:H.name,note:Se(H,H._line||"ATT"),portrait:Ne(H),job:H.job})),L=[...u.log||[]];L.push({type:"duel",isGoal:w,homeScored:w&&v===p,text:w?`⚽ BUT de ${u[v+"Name"]} ! (${u.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${b.total})`,homePlayers:E,aiPlayers:g.map(H=>({name:H.name,note:Se(H,H._line||"DEF"),portrait:Ne(H),job:H.job})),homeTotal:u.pendingAttack.total,aiTotal:b.total});const S=w?(u[v+"Score"]||0)+1:u[v+"Score"]||0,j={...u,[p+"Team"]:$,[v+"Score"]:S},F=ke(j),Y=F?"finished":k+"-attack",Z=async()=>{await V({[p+"Team"]:$,[x+"Team"]:u[x+"Team"],[v+"Score"]:S,["selected_"+p]:[],modifiers:{...u.modifiers,[p]:{}},pendingAttack:null,phase:Y,attacker:k,round:A,log:L}),(Y==="finished"||F)&&await Le({...u,[v+"Score"]:S})};if(w){const H=v===p,N=H?S:u[p+"Score"]||0,W=H?u[x+"Score"]||0:S;q.add(A),ze(E,N,W,H,Z)}else await Z()}function we($){return["MIL","ATT"].some(g=>($[g]||[]).some(b=>!b.used))}function Te($){return["GK","DEF","MIL","ATT"].some(g=>($[g]||[]).some(b=>!b.used))}function Ae($){return Te($)&&!we($)}function ve($){const g=u[$+"Team"],b=u[($==="p1"?"p2":"p1")+"Team"];return!!(we(g)||!Te(b)&&Ae(g))}function ke($){const g=["MIL","ATT"].some(L=>($.p1Team[L]||[]).some(S=>!S.used)),b=["MIL","ATT"].some(L=>($.p2Team[L]||[]).some(S=>!S.used)),h=Te($.p1Team),v=Te($.p2Team);return!g&&!(!v&&h)&&(!b&&!(!h&&v))}function Fe($){const g=$.p1Score||0,b=$.p2Score||0;return g===b?null:g>b?c.home_id:c.away_id}async function Le($){try{const g=Fe($),b=g?c.home_id===g?c.away_id:c.home_id:null;await T.from("matches").update({status:"finished",winner_id:g,home_score:$.p1Score||0,away_score:$.p2Score||0}).eq("id",i),g&&b&&updateEvolutiveCards(g,b).catch(()=>{})}catch(g){console.error("[PvP] finishMatch:",g)}}function B(){var v;const $=u[p+"Score"],g=u[x+"Score"],b=$>g,h=$===g;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${g}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{T.removeChannel(te)}catch{}Ve(e),o("home")})}ue()}const or=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:wi,resumePvpMatch:ir},Symbol.toStringTag,{value:"Module"}));async function nr(e,t,i,n){var d,s;try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(m=>{const a=m.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&T.removeChannel(m)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await di(e,t,"random",({deckId:r,formation:l,starters:m,subsRaw:a,gcCardsEnriched:o,gcDefs:y,stadiumDef:p})=>{const x=_=>rr(e,t,r,l,m,a,_,y||[],i,n);if(!o.length){x([]);return}si(e,o,x)})}async function rr(e,t,i,n,d,s,r=[],l=[],m,a){var te;const{state:o,navigate:y,toast:p}=t,x=o.profile.id;let _=!1,f=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const c=(V,de,ae,J)=>{var R;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${a}</div>
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
            <div style="width:52px;height:52px;border-radius:50%;background:${de?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${de?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${de?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${a}</div>
            <div style="font-size:11px;color:${de?"#22c55e":"#aaa"}">${de?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!de&&V?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",async()=>{_=!0,f&&(T.removeChannel(f),f=null),ae&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",ae),Ve(e),y("home")})},z=async(V,de)=>{_=!0,f&&(T.removeChannel(f),f=null),await new Promise(ae=>setTimeout(ae,600)),e.isConnected&&ar(e,t,V,de,r,l)},{data:u}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${x},invitee_id.eq.${m}),and(inviter_id.eq.${m},invitee_id.eq.${x})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let M,D;if(u&&u.inviter_id===m)D=!1,M=u.id,await T.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",M);else{D=!0;const{data:V,error:de}=await T.from("friend_match_invites").insert({inviter_id:x,invitee_id:m,friend_id:m,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(de||!V){p("Erreur création invitation","error"),Ve(e),y("home");return}M=V.id}if(c(!0,!D,M),!D){const V={home_id:m,away_id:x,home_deck_id:u.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},de=await T.from("matches").insert(V).select().single(),ae=de.data;if(!ae){p("Erreur création match: "+(((te=de.error)==null?void 0:te.message)||""),"error"),Ve(e),y("home");return}await T.from("friend_match_invites").update({match_id:ae.id,status:"matched"}).eq("id",M),z(ae.id,!1);return}let C=!1;const q=V=>{_||C||(V.status==="matched"&&V.match_id?(C=!0,clearInterval(I),clearInterval(P),z(V.match_id,!0)):V.status==="declined"?(clearInterval(I),clearInterval(P),p(`${a} a décliné l'invitation`,"warning"),Ve(e),y("home")):V.invitee_ready&&c(!0,!0,M))},I=setInterval(()=>{if(_){clearInterval(I);return}T.from("matchmaking_queue").delete().eq("user_id",x).then(()=>{},()=>{})},3e3),P=setInterval(async()=>{if(_||C){clearInterval(P);return}const{data:V}=await T.from("friend_match_invites").select("*").eq("id",M).maybeSingle();V&&q(V)},1200);f=T.channel("friend-invite-"+M).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${M}`},V=>q(V.new)).subscribe()}async function ar(e,t,i,n,d=[],s=[]){const{state:r,navigate:l,toast:m}=t,a=n?"p1":"p2",o=n?"p2":"p1",y=(d||[]).map(B=>B.id),p=(d||[]).map(B=>({id:B.id,gc_type:B.gc_type,_gcDef:B._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:x}=await T.from("matches").select("*").eq("id",i).single();if(!x){m("Match introuvable","error"),l("home");return}async function _(){const[{data:B},{data:$},{data:g},{data:b}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:x.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:x.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",x.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",x.away_id).single()]),h=E=>{const L=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?L:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?L:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?L:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?L:0),evolution_bonus:L,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},v=((B==null?void 0:B.starters)||[]).map(E=>h(E)),w=(($==null?void 0:$.starters)||[]).map(E=>h(E)),k=(B==null?void 0:B.formation)||"4-4-2",A=($==null?void 0:$.formation)||"4-4-2";return{p1Team:(()=>{const E=bt(v,k);return stadiumDef?Tt(E,stadiumDef):E})(),p2Team:bt(w,A),p1Subs:(()=>{const E=((B==null?void 0:B.subs)||[]).map(L=>h(L));return stadiumDef&&Ct(E,stadiumDef),E})(),p2Subs:(($==null?void 0:$.subs)||[]).map(E=>h(E)),p1Formation:k,p2Formation:A,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?y:[],gc_p2:n?[]:y,gcCardsFull_p1:n?p:[],gcCardsFull_p2:n?[]:p,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let f=x.game_state&&Object.keys(x.game_state).length?x.game_state:null;if(!f)if(n){f=await _();const{data:B}=await T.from("matches").select("game_state").eq("id",i).single();!(B!=null&&B.game_state)||!Object.keys(B.game_state).length?await T.from("matches").update({game_state:f,turn_user_id:x.home_id}).eq("id",i):f=B.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let B=0;B<60&&!f;B++){await new Promise(g=>setTimeout(g,400));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(f=$.game_state)}if(!f){m("Erreur de synchronisation","error"),l("home");return}f.gc_p2=y,f.gcCardsFull_p2=p,await T.from("matches").update({game_state:f}).eq("id",i)}let c=!1,z=!1,u=!1,M=null,D=!1;const C=new Set,q=new Set;function I(B){var E,L;try{T.removeChannel(P)}catch{}const $=f[a+"Score"]||0,g=f[o+"Score"]||0;if(!u){u=!0;const S=B.winner_id||($>g?r.profile.id:g>$?"opp":null),j=S===r.profile.id?"win":S?"loss":null;j&&ni(()=>Promise.resolve().then(()=>po),void 0).then(F=>F.applyOwnEvolution(r.profile.id,j)).catch(()=>{})}if(!z){const S=f.p1Score||0,j=f.p2Score||0,F=(f.usedGc_p1||[]).length,Y=(f.usedGc_p2||[]).length,Z=B.winner_id||(S>j?x.home_id:j>S?x.away_id:null);(Z?r.profile.id===Z:r.profile.id<(n?x.away_id:x.home_id))&&(z=!0,io({player1Id:x.home_id,player2Id:x.away_id,score1:S,score2:j,gc1:F,gc2:Y}).catch(N=>console.warn("[FriendMatch] updateStats:",N)))}let b,h;B.winner_id?(b=B.winner_id===r.profile.id,h=!1):B.forfeit?(b=$>g,h=!1):(h=$===g,b=$>g),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=h?"🤝":b?"🏆":"😞",k=h?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",A=h?"#fff":b?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${k}</div>
      <div style="font-size:18px">${f[a+"Name"]} ${$} – ${g} ${f[o+"Name"]}</div>
      ${B.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ve(e),l("home")})}const P=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},B=>{const $=B.new;try{if($.status==="finished"||$.forfeit){if(c)return;c=!0,M&&(clearInterval(M),M=null),$.game_state&&(f=$.game_state),I($);return}if($.game_state){const g=f;f=$.game_state;const b=f._lastGC;if(b&&b.seq&&!q.has(b.seq)&&(q.add(b.seq),b.by!==a)){ze(b.type,b.by,()=>re());return}const h=g[a+"Score"]||0,v=g[o+"Score"]||0,w=f[a+"Score"]||0,k=f[o+"Score"]||0,A=w>h,E=k>v;if((A||E)&&!C.has(f.round)){C.add(f.round);const L=[...f.log||[]].reverse().find(j=>j.isGoal),S=((L==null?void 0:L.homePlayers)||[]).map(j=>({name:j.name,note:j.note,portrait:j.portrait,job:j.job}));be(S,w,k,A,()=>re());return}re()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function te(B){Object.assign(f,B),f.lastActionAt=new Date().toISOString();const{error:$}=await T.from("matches").update({game_state:f}).eq("id",i);$&&m("Erreur de synchronisation","error");try{re()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function V(){if(c)return;c=!0,M&&(clearInterval(M),M=null);const B=n?x.away_id:x.home_id,$=n?"p2":"p1",g=n?"p1":"p2",b={...f,[$+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:B,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{T.removeChannel(P)}catch{}setTimeout(()=>{Ve(e),l("home")},800)}const de={BOOST_STAT:({value:B=1,count:$=1,roles:g=[]},b,h)=>{const v=b[a+"Team"],w=Object.entries(v).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,A])=>A.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!w.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(b);return}ae(w,$,`Choisir ${$} joueur(s) à booster (+${B})`,k=>{k.forEach(A=>{const E=(v[A._line]||[]).find(L=>L.cardId===A.cardId);E&&(E.boost=(E.boost||0)+B,b.log.push({text:`⚡ +${B} sur ${E.name}`,type:"info"}))}),b[a+"Team"]=v,h(b)})},DEBUFF_STAT:({value:B=1,count:$=1,roles:g=[],target:b="ai"},h,v)=>{const w=b==="home"?a:o,k=h[w+"Team"],A=b==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!g.length||g.includes(L)).flatMap(([L,S])=>S.map(j=>({...j,_line:L})));if(!E.length){h.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),v(h);return}ae(E,$,`Choisir ${$} joueur(s) ${A}(s) (-${B})`,L=>{L.forEach(S=>{const j=(k[S._line]||[]).find(F=>F.cardId===S.cardId);j&&(j.boost=(j.boost||0)-B,h.log.push({text:`🎯 -${B} sur ${j.name}`,type:"info"}))}),h[w+"Team"]=k,v(h)})},GRAY_PLAYER:({count:B=1,roles:$=[],target:g="ai"},b,h)=>{const v=g==="home"?a:o,w=b[v+"Team"],k=g==="home"?"allié":"adverse",A=Object.entries(w).filter(([E])=>!$.length||$.includes(E)).flatMap(([E,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!A.length){b.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),h(b);return}ae(A,B,`Choisir ${B} joueur(s) ${k}(s) à exclure`,E=>{const L="usedCardIds_"+v,S=new Set(b[L]||[]);E.forEach(j=>{const F=(w[j._line]||[]).find(Y=>Y.cardId===j.cardId);F&&(F.used=!0,S.add(j.cardId),b.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),b[L]=[...S],b[v+"Team"]=w,h(b)})},REVIVE_PLAYER:({count:B=1,roles:$=[]},g,b)=>{const h=g[a+"Team"],v=Object.entries(h).filter(([w])=>!$.length||$.includes(w)).flatMap(([w,k])=>k.filter(A=>A.used).map(A=>({...A,_line:w})));if(!v.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(g);return}ae(v,B,`Choisir ${B} joueur(s) à ressusciter`,w=>{w.forEach(k=>{const A=(h[k._line]||[]).find(E=>E.cardId===k.cardId);A&&(A.used=!1,g.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),g[a+"Team"]=h,b(g)})},REMOVE_GOAL:({},B,$)=>{const g=o+"Score";B[g]>0?(B[g]--,B.log.push({text:"🚫 Dernier but annulé !",type:"info"})):B.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(B)},ADD_GOAL_DRAW:({},B,$)=>{B[a+"Score"]===B[o+"Score"]?(B[a+"Score"]++,B.log.push({text:"🎯 But bonus !",type:"info"})):B.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(B)},ADD_SUB:({value:B=1},$,g)=>{$.maxSubs=($.maxSubs||3)+B,$.log.push({text:`🔄 +${B} remplacement(s)`,type:"info"}),g($)},CUSTOM:({},B,$)=>$(B)};function ae(B,$,g,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var A,E;const k=B.map(L=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",j=Se(L,L._line)+(L.boost||0),Y=v.find(H=>H.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Z=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Y};background:${S};overflow:hidden;cursor:pointer;${Z}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
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
        </div>`,(A=h.querySelector("#pp-close"))==null||A.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const S=L.dataset.cid,j=B.find(Y=>Y.cardId===S),F=v.findIndex(Y=>Y.cardId===S);j&&(F>-1?v.splice(F,1):v.length<$&&v.push(j),w())})}),(E=h.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{h.remove(),b(v)})}w(),document.body.appendChild(h)}async function J(B,$){const b=(f["gcCardsFull_"+a]||[]).find(k=>k.id===B),h=(b==null?void 0:b._gcDef)||(f.gcDefs||[]).find(k=>{var A;return k.name===$||((A=k.name)==null?void 0:A.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v=[...f["usedGc_"+a]||[],B],w={type:$,by:a,seq:(f._gcAnimSeq||0)+1};q.add(w.seq),ze($,a,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const A=de[h.effect_type];if(A){const E={...f};A(h.effect_params||{},E,async L=>{L["usedGc_"+a]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await te(L)});return}}const k={...f};switch($){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=o+"Score";k[A]>0&&(k[A]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+a]=v,k._lastGC=w,k._gcAnimSeq=w.seq,await te(k)})}function R(B,$){const g="usedCardIds_"+B,b=new Set(f[g]||[]);$.forEach(h=>b.add(h)),f[g]=[...b]}function G(){for(const B of["p1","p2"]){const $=new Set(f["usedCardIds_"+B]||[]),g=f[B+"Team"];if(g)for(const b of["GK","DEF","MIL","ATT"])(g[b]||[]).forEach(h=>{h.used=$.has(h.cardId)})}}function re(){var Pe,We,ot,pt,ut,ft;if(f.phase==="reveal")return ue();if(f.phase==="midfield")return xe();if(f.phase==="finished")return Le();const B=f[a+"Team"],$=f[o+"Team"];G();const g=f[a+"Score"],b=f[o+"Score"],h=f[a+"Name"],v=f[o+"Name"],w=f.phase===a+"-attack",k=f.phase===a+"-defense",A=Array.isArray(f["selected_"+a])?f["selected_"+a]:[],E=A.map(ce=>ce.cardId),L=window.innerWidth>=700,S=f[a+"Subs"]||[],j=f["usedSubIds_"+a]||[],F=S.filter(ce=>!j.includes(ce.cardId)),Y=f["gcCardsFull_"+a]||[],Z=f["usedGc_"+a]||[],H=Y.filter(ce=>!Z.includes(ce.id)),N=f.boostOwner===a&&!f.boostUsed,W=!["GK","DEF","MIL","ATT"].some(ce=>($[ce]||[]).some(Q=>!Q.used)),oe=[...B.MIL||[],...B.ATT||[]].filter(ce=>!ce.used),ee=w&&W&&oe.length===0?[...B.GK||[],...B.DEF||[]].filter(ce=>!ce.used).map(ce=>ce.cardId):[];function pe(ce,Q,O){var mt,_t;const se=ce._gcDef,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",Ze=(se==null?void 0:se.name)||ce.gc_type,Qe=(se==null?void 0:se.effect)||((mt=He[ce.gc_type])==null?void 0:mt.desc)||"",tt=se!=null&&se.image_url?`/icons/${se.image_url}`:null,rt=((_t=He[ce.gc_type])==null?void 0:_t.icon)||"⚡",vt=Math.round(O*.22),wt=Math.round(O*.22),dt=O-vt-wt,gt=Ze.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ce.id}" data-gc-type="${ce.gc_type}"
        style="box-sizing:border-box;width:${Q}px;height:${O}px;border-radius:10px;border:2px solid ${_e};background:${ye};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${vt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${gt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Q-6}px">${Ze}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${dt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${Q-10}px;max-height:${dt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(dt*.55)}px">${rt}</span>`}
        </div>
        <div style="height:${wt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Qe.slice(0,38)}</span>
        </div>
      </div>`}function ge(ce,Q){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ce}px;height:${Q}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Q*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Q*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Q*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const me=(ce,Q)=>Q?ge(130,175):pe(ce,130,175),Ee=(ce,Q)=>Q?ge(68,95):pe(ce,68,95),Be=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=w?Ae(a)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Me=w&&!Ae(a)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(ce=>`<div class="pvp-sub-btn" data-sub-id="${ce.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(ce,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Ie=w?"attack":k?"defense":"idle",Re=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct(B,f[a+"Formation"],Ie,E,300,300,ee)}
      </div>
    </div>`;function Ue(ce){if(ce.type==="duel"&&(ce.homeTotal!=null||ce.aiTotal!=null)){const Q=(ce.homeTotal||0)>=(ce.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ce.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.homePlayers||[]).map(O=>at(O)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Q?20:14}px;font-weight:900;color:${Q?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ce.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Q?14:20}px;font-weight:900;color:${Q?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ce.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.aiPlayers||[]).map(O=>at(O)).join("")}
            </div>
          </div>
          ${ce.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ce.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ce.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ce.type==="goal"?700:400};padding:3px 2px">${ce.text||""}</div>`}const Ye=(()=>{var Q,O;if(k&&((Q=f.pendingAttack)!=null&&Q.players)){const se=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#ff6b6b",se.total)}
        </div>`}if(w&&((O=f.pendingAttack)!=null&&O.players)){const se=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((se.players||[]).map(ye=>({...ye,used:!1})),"#00ff88",se.total)}
        </div>`}const ce=(f.log||[]).slice(-1)[0];return ce?'<div style="padding:2px 4px">'+Ue(ce)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ye}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Re}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${De}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${H.map(ce=>me(ce,!1)).join("")}
            ${N?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(B,f[a+"Formation"],Ie,E,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${H.map(ce=>Ee(ce,!1)).join("")}
            ${N?Ee(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&F.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&F.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&F.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&F.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${F.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+a]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+a]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${De}${Me}</div>
        </div>
      </div>`;function Oe(){const ce=e.querySelector(".match-screen");if(!ce)return;const Q=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ce.style.height=Q+"px",ce.style.minHeight=Q+"px",ce.style.maxHeight=Q+"px",ce.style.overflow="hidden";const O=e.querySelector("#mobile-action-bar"),se=e.querySelector("#mobile-play-area");O&&se&&(se.style.paddingBottom=O.offsetHeight+"px")}if(Oe(),setTimeout(Oe,120),setTimeout(Oe,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Oe),window.visualViewport.addEventListener("scroll",Oe)),window.addEventListener("resize",Oe)),function(){const Q=e.querySelector(".terrain-wrapper svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("viewBox","-26 -26 352 352"),Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ce=>{ce.addEventListener("click",()=>{if(!w&&!k)return;const Q=ce.dataset.cardId,O=ce.dataset.role,se=(B[O]||[]).find(Qe=>Qe.cardId===Q);if(!se||se.used)return;const ye=ee.includes(Q);if(w&&!["MIL","ATT"].includes(O)&&!ye)return;Array.isArray(f["selected_"+a])||(f["selected_"+a]=[]);const _e=f["selected_"+a],Ze=_e.findIndex(Qe=>Qe.cardId===Q);Ze>-1?_e.splice(Ze,1):_e.length<3&&_e.push({...se,_role:O}),re()})}),e.querySelectorAll(".match-used-hit").forEach(ce=>{ce.addEventListener("click",()=>$e(ce.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ce=>{ce.addEventListener("click",()=>$e())}),(Pe=e.querySelector("#pvp-sub-open"))==null||Pe.addEventListener("click",()=>$e()),e.querySelectorAll(".pvp-gc-mini").forEach(ce=>{ce.addEventListener("click",()=>qe(ce.dataset.gcId,ce.dataset.gcType))}),(We=e.querySelector("#pvp-boost-card"))==null||We.addEventListener("click",()=>Ce()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",ce=>{w?ce.currentTarget.dataset.pass==="1"||!Ae(a)?U():ie():k&&X()}),(pt=e.querySelector("#pvp-quit"))==null||pt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&V()}),(ut=e.querySelector("#pvp-view-opp"))==null||ut.addEventListener("click",()=>ne()),(ft=e.querySelector("#pvp-toggle-history"))==null||ft.addEventListener("click",()=>fe()),M&&(clearInterval(M),M=null),(w||k)&&!c){let ce=30,Q=!1;const O=()=>document.getElementById("pvp-timer"),se=()=>{O()&&(O().textContent=ce+"s",O().style.color=Q?"#ff4444":"#fff")};se(),M=setInterval(()=>{ce--,ce<0?Q?(clearInterval(M),M=null,w&&!Ae(a)?U():V()):(Q=!0,ce=15,se()):se()},1e3)}}function ue(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${f[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(f[o+"Team"],f[o+"Formation"],null,[],300,300)}</div>
    </div>`,a==="p1"&&setTimeout(async()=>{await te({phase:"midfield"})},5e3)}let he=!1;function xe(){if(he)return;const B=f[a+"Team"].MIL||[],$=f[o+"Team"].MIL||[];function g(H){return H.reduce((N,W)=>N+Se(W,"MIL"),0)}function b(H){let N=0;for(let W=0;W<H.length-1;W++){const oe=nt(H[W],H[W+1]);oe==="#00ff88"?N+=2:oe==="#FFD700"&&(N+=1)}return N}const h=g(B)+b(B),v=g($)+b($),w=h>=v;function k(H,N,W){return`<div id="duel-row-${W}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${N}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${H.map((oe,ee)=>{const pe=ee<H.length-1?nt(oe,H[ee+1]):null,ge=!pe||pe==="#ff3333"||pe==="#cc2222",me=pe==="#00ff88"?"+2":pe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${W}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...oe,note:Se(oe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<H.length-1?`<div class="duel-link duel-link-${W}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":pe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${pe}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${pe}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${W}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(H)} + ${b(H)} liens = <b style="color:#fff">${g(H)+b(H)}</b>
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
      ${k(B,f[a+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k($,f[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(H,N)=>e.querySelectorAll(H).forEach((W,oe)=>{setTimeout(()=>{W.style.opacity="1",W.style.transform="translateY(0) scale(1)"},N+oe*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((H,N)=>setTimeout(()=>{H.style.opacity="1"},N*70)),900),setTimeout(()=>{const H=e.querySelector("#pvp-vs");H&&(H.style.opacity="1",H.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(N=>N.style.opacity="1")},1250);function E(H,N,W){const oe=document.getElementById(H);if(!oe)return;const ee=performance.now(),pe=ge=>{const me=Math.min(1,(ge-ee)/W);oe.textContent=Math.round(N*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(pe):oe.textContent=N};requestAnimationFrame(pe)}setTimeout(()=>{E("pvp-score-me",h,800),E("pvp-score-opp",v,800)},1500);const L=f.p1Team.MIL||[],S=f.p2Team.MIL||[],j=g(L)+b(L),F=g(S)+b(S),Y=j>=F?"p1":"p2";let Z=f.boostValue;Z==null&&(Z=ai(),f.boostValue=Z,f.boostOwner=Y,f.boostUsed=!1),he=!0,setTimeout(()=>{const H=e.querySelector("#duel-row-"+(w?"me":"opp")),N=e.querySelector("#duel-row-"+(w?"opp":"me")),W=document.getElementById("pvp-score-me"),oe=document.getElementById("pvp-score-opp"),ee=w?W:oe,pe=w?oe:W;ee&&(ee.style.fontSize="80px",ee.style.color=w?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),pe&&(pe.style.opacity="0.25"),setTimeout(()=>{H&&(H.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",H.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),N&&(N.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const me=f.boostOwner===a?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Z+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ee=a==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+f[a+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+Ee,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const De=Y;await te({phase:De+"-attack",attacker:De,round:1,boostValue:Z,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function be(B,$,g,b,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
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
        ${$} – ${g}
      </div>
      ${B!=null&&B.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${B.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let A=!1;const E=()=>{A||(A=!0,v.remove(),setTimeout(()=>h(),50))};v.addEventListener("click",E),setTimeout(E,3500)}function ze(B,$,g){var Z,H;const b=(f.gcDefs||[]).find(N=>{var W;return N.name===B||((W=N.name)==null?void 0:W.toLowerCase().trim())===(B==null?void 0:B.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",w=(b==null?void 0:b.name)||B,k=(b==null?void 0:b.effect)||((Z=He[B])==null?void 0:Z.desc)||"",A=b!=null&&b.image_url?`/icons/${b.image_url}`:null,E=((H=He[B])==null?void 0:H.icon)||"⚡",S=$===a?"Vous":f[$+"Name"]||"Adversaire",j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",j.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(j);let F=!1;const Y=()=>{F||(F=!0,j.remove(),setTimeout(()=>g&&g(),50))};j.addEventListener("click",Y),setTimeout(Y,3e3)}function qe(B,$){var j,F,Y,Z;const b=(f["gcCardsFull_"+a]||[]).find(H=>H.id===B),h=b==null?void 0:b._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",k=(h==null?void 0:h.name)||$,A=(h==null?void 0:h.effect)||((j=He[$])==null?void 0:j.desc)||"Carte spéciale.",E=h!=null&&h.image_url?`/icons/${h.image_url}`:null,L=((F=He[$])==null?void 0:F.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(Y=S.querySelector("#pvp-gc-back"))==null||Y.addEventListener("click",()=>S.remove()),(Z=S.querySelector("#pvp-gc-use"))==null||Z.addEventListener("click",()=>{S.remove(),J(B,$)})}function Ce(){var b;const B=f[a+"Team"],$=Object.entries(B).flatMap(([h,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:h})));if(!$.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(h=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",w=Se(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(b=g.querySelector("#bp-close"))==null||b.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const v=h.dataset.cid,w=$.find(A=>A.cardId===v);if(!w)return;const k=(B[w._line]||[]).find(A=>A.cardId===v);k&&(k.boost=(k.boost||0)+f.boostValue),g.remove(),await te({[a+"Team"]:B,boostUsed:!0})})})}function $e(B=null){var F,Y;if(!(f.phase===a+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const g=f[a+"Team"],b=f["usedSubIds_"+a]||[],h=f.maxSubs||3;if(b.length>=h){m(`Maximum ${h} remplacements atteint`,"warning");return}const v=Object.entries(g).flatMap(([Z,H])=>(H||[]).filter(N=>N.used).map(N=>({...N,_line:Z}))),w=(f[a+"Subs"]||[]).filter(Z=>!b.includes(Z.cardId));if(!v.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){m("Aucun remplaçant disponible","warning");return}let k=Math.max(0,v.findIndex(Z=>Z.cardId===B));const A=((F=v[k])==null?void 0:F._line)||((Y=v[k])==null?void 0:Y.job);let E=Math.max(0,w.findIndex(Z=>Z.job===A)),L=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function j(){var pe,ge,me,Ee,Be,De;const Z=v[k],H=w[E],N=Math.min(130,Math.round((window.innerWidth-90)/2)),W=Math.round(N*1.35),oe=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${H?Xe({...H,used:!1,boost:0},N,W):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${Z?Xe({...Z,used:!1,boost:0},N,W):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(pe=S.querySelector("#psub-close"))==null||pe.addEventListener("click",()=>S.remove()),(ge=S.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{k>0&&(k--,j())}),(me=S.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{k<v.length-1&&(k++,j())}),(Ee=S.querySelector("#pin-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,j())}),(Be=S.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{E<w.length-1&&(E++,j())});const ee=(Me,je,Ie,Re)=>{const Ue=S.querySelector("#"+Me);if(!Ue)return;let Ye=0;Ue.addEventListener("touchstart",Ke=>{Ye=Ke.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ke=>{const Oe=Ke.changedTouches[0].clientY-Ye;if(Math.abs(Oe)<30)return;const Pe=je();Oe<0&&Pe<Re-1?(Ie(Pe+1),j()):Oe>0&&Pe>0&&(Ie(Pe-1),j())},{passive:!0})};ee("pin-panel",()=>E,Me=>E=Me,w.length),ee("pout-panel",()=>k,Me=>k=Me,v.length),(De=S.querySelector("#psub-confirm"))==null||De.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),L)return;L=!0;const je=v[k],Ie=w[E];if(!je||!Ie)return;const Re=je._line,Ue=(g[Re]||[]).findIndex(Oe=>Oe.cardId===je.cardId);if(Ue===-1){m("Erreur : joueur introuvable","error"),S.remove();return}const Ye={...Ie,_line:Re,position:je.position,used:!1,boost:0};g[Re].splice(Ue,1,Ye);const Ke=[...b,Ie.cardId];S.remove(),K(je,Ie,async()=>{await te({[a+"Team"]:g,[o+"Team"]:f[o+"Team"],["usedSubIds_"+a]:Ke})})})}document.body.appendChild(S),j()}function K(B,$,g){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(A,E,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[A.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Ne(A)?`<img src="${Ne(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(B,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let w=!1;const k=()=>{w||(w=!0,h.remove(),setTimeout(()=>g(),50))};h.addEventListener("click",k),setTimeout(k,2200)}function ne(){var $;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",B.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(f[o+"Team"],f[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(B),($=B.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>B.remove())}function fe(){var b;const B=f.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=h=>{var w,k,A;if(h.type==="duel"){const E=h.isGoal,L=h.homeScored&&a==="p1"||!h.homeScored&&E&&a==="p2",S=h.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",j=E?L?"⚽ BUT !":"⚽ BUT adversaire !":(w=h.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${j}</div>
          ${(k=h.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${it(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
          ${(A=h.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${it(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
        </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${h.outPlayer?Xe({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${h.inPlayer?Xe({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${h.text||""}</div>
      </div>`};$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${B.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...B].reverse().map(g).join("")}
      </div>`,document.body.appendChild($),(b=$.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>$.remove())}async function U(){if(f.phase!==a+"-attack")return;const B=a==="p1"?"p2":"p1",$=(f.round||0)+1,g=[...f.log||[]];g.push({type:"info",text:`⏭️ ${f[a+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=ve(f),h=Ae(B),v=b||!h?"finished":B+"-attack";await te({["selected_"+a]:[],modifiers:{...f.modifiers,[a]:{}},pendingAttack:null,phase:v,attacker:B,round:$,log:g}),v==="finished"&&await Fe(f)}async function ie(){const B=f[a+"Team"],$=!["GK","DEF","MIL","ATT"].some(v=>(f[o+"Team"][v]||[]).some(w=>!w.used)),g=(f["selected_"+a]||[]).map(v=>{const w=(B[v._role]||[]).find(j=>j.cardId===v.cardId)||v,k=$&&["GK","DEF"].includes(v._role),A=B[v._role]||[],E=A.findIndex(j=>j.cardId===v.cardId),L=st(A.length),S=E>=0?L[E]:w._col??1;return{...w,_line:v._role,_col:S,...k?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!g.length)return;const b=Ut(g,f.modifiers[a]||{});R(a,g.map(v=>v.cardId)),g.forEach(v=>{const w=(B[v._role]||[]).find(k=>k.cardId===v.cardId);w&&(w.used=!0)}),f["selected_"+a]=[],re();const h=[...f.log||[]];if($){const v=(f[a+"Score"]||0)+1,w=g.map(S=>({name:S.name,note:Se(S,S._line||"ATT"),portrait:Ne(S),job:S.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:b.total,aiTotal:0});const k=(f.round||0)+1,A=a==="p1"?"p2":"p1",E={...f,[a+"Team"]:B,[a+"Score"]:v},L=ve(E);C.add(k),be(w,v,f[o+"Score"]||0,!0,async()=>{await te({[a+"Team"]:B,[a+"Score"]:v,["selected_"+a]:[],modifiers:{...f.modifiers,[a]:{}},pendingAttack:null,phase:L?"finished":A+"-attack",attacker:A,round:k,log:h}),L&&await Fe({...f,[a+"Score"]:v})});return}h.push({type:"pending",text:`⚔️ ${f[a+"Name"]} attaque (${b.total})`}),await te({[a+"Team"]:B,[o+"Team"]:f[o+"Team"],pendingAttack:{...b,players:g,side:a},["selected_"+a]:[],modifiers:{...f.modifiers,[a]:{}},phase:o+"-defense",log:h})}async function X(){const B=f[a+"Team"],$=(f["selected_"+a]||[]).map(Z=>{const H=(B[Z._role]||[]).find(pe=>pe.cardId===Z.cardId)||Z,N=B[Z._role]||[],W=N.findIndex(pe=>pe.cardId===Z.cardId),oe=st(N.length),ee=W>=0?oe[W]:H._col??1;return{...H,_line:Z._role,_col:ee}}),g=Kt($,f.modifiers[a]||{});R(a,$.map(Z=>Z.cardId)),$.forEach(Z=>{const H=(B[Z._role]||[]).find(N=>N.cardId===Z.cardId);H&&(H.used=!0)}),f["selected_"+a]=[],re();const b=Vt(f.pendingAttack.total,g.total,f.modifiers[a]||{}),h=f.pendingAttack.side,v=b==="attack"||(b==null?void 0:b.goal),w=h==="p1"?"p2":"p1",k=(f.round||0)+1,A=(f.pendingAttack.players||[]).map(Z=>({name:Z.name,note:Se(Z,Z._line||"ATT"),portrait:Ne(Z),job:Z.job})),E=[...f.log||[]];E.push({type:"duel",isGoal:v,homeScored:v&&h===a,text:v?`⚽ BUT de ${f[h+"Name"]} ! (${f.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${g.total})`,homePlayers:A,aiPlayers:$.map(Z=>({name:Z.name,note:Se(Z,Z._line||"DEF"),portrait:Ne(Z),job:Z.job})),homeTotal:f.pendingAttack.total,aiTotal:g.total});const L=v?(f[h+"Score"]||0)+1:f[h+"Score"]||0,S={...f,[a+"Team"]:B,[h+"Score"]:L},j=ve(S),F=j?"finished":w+"-attack",Y=async()=>{await te({[a+"Team"]:B,[o+"Team"]:f[o+"Team"],[h+"Score"]:L,["selected_"+a]:[],modifiers:{...f.modifiers,[a]:{}},pendingAttack:null,phase:F,attacker:w,round:k,log:E}),(F==="finished"||j)&&await Fe({...f,[h+"Score"]:L})};if(v){const Z=h===a,H=Z?L:f[a+"Score"]||0,N=Z?f[o+"Score"]||0:L;C.add(k),be(A,H,N,Z,Y)}else await Y()}function le(B){return["MIL","ATT"].some($=>(B[$]||[]).some(g=>!g.used))}function we(B){return["GK","DEF","MIL","ATT"].some($=>(B[$]||[]).some(g=>!g.used))}function Te(B){return we(B)&&!le(B)}function Ae(B){const $=f[B+"Team"],g=f[(B==="p1"?"p2":"p1")+"Team"];return!!(le($)||!we(g)&&Te($))}function ve(B){const $=["MIL","ATT"].some(E=>(B.p1Team[E]||[]).some(L=>!L.used)),g=["MIL","ATT"].some(E=>(B.p2Team[E]||[]).some(L=>!L.used)),b=we(B.p1Team),h=we(B.p2Team);return!$&&!(!h&&b)&&(!g&&!(!b&&h))}function ke(B){const $=B.p1Score||0,g=B.p2Score||0;return $===g?null:$>g?x.home_id:x.away_id}async function Fe(B){try{const $=ke(B),g=$?x.home_id===$?x.away_id:x.home_id:null;await T.from("matches").update({status:"finished",winner_id:$,home_score:B.p1Score||0,away_score:B.p2Score||0}).eq("id",i),$&&g&&Si($,g).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function Le(){var h;const B=f[a+"Score"],$=f[o+"Score"],g=B>$,b=B===$;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${B} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{T.removeChannel(P)}catch{}Ve(e),l("home")})}re()}const It="#1A6B3C",yt="#D4A017";async function sr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await ht(e,t,i);return}await At(e,t)}async function At(e,t,i="waiting"){var z;const{state:n}=t,d=n.profile.id,{data:s}=await T.from("mini_league_members").select("league_id").eq("user_id",d),r=(s||[]).map(u=>u.league_id),{data:l,error:m}=await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),a=m?(await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],y=(r.length?await T.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],p=y.filter(u=>u.status==="waiting"&&!u.is_archived),x=y.filter(u=>u.status==="active"&&!u.is_archived),_=y.filter(u=>u.is_archived||u.status==="finished"),f=a.filter(u=>!r.includes(u.id)),c=[{key:"waiting",label:"🟡 En attente",count:p.length+f.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:_.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${c.map(u=>`<button class="ml-tab" data-tab="${u.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===u.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===u.key?"900":"600"};color:${i===u.key?It:"#888"};cursor:pointer">${u.label}${u.count?` (${u.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?dr(p,f,d):i==="active"?lr(x,d):cr(_,d)}
    </div>
  </div>`,(z=document.getElementById("ml-create-btn"))==null||z.addEventListener("click",()=>pr(e,t)),e.querySelectorAll(".ml-tab").forEach(u=>u.addEventListener("click",()=>At(e,t,u.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(u=>u.addEventListener("click",()=>ht(e,t,u.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(u=>u.addEventListener("click",M=>{M.stopPropagation(),Eo(e,t,u.dataset.join,u.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(u=>u.addEventListener("click",M=>{M.stopPropagation(),_i(e,t,u.dataset.delete,u.dataset.name,i)}))}function oi(e,t,i=!1){var r,l;const n=e.creator_id===t,d=e.pot||0,s=((l=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${s}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${d>0?`<span style="color:${yt};font-weight:700">🏆 ${d.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function dr(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>oi(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>oi(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function lr(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function cr(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function pr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var _,f,c,z;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),s=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,l=((_=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:_.value)||"public",m=((f=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:f.value)||"aller",a=((z=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:z.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(l==="private"&&!a){n("Mot de passe requis","error");return}const{data:o,error:y}=await T.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:l,password:a,mode:m,max_players:s,entry_fee:r}).select().single();if(y){n("Erreur : "+y.message,"error");return}const{data:p}=await T.from("users").select("credits").eq("id",t.state.profile.id).single();if(((p==null?void 0:p.credits)||0)<r){await T.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await T.from("users").update({credits:p.credits-r}).eq("id",t.state.profile.id),await T.from("mini_leagues").update({pot:r}).eq("id",o.id),await T.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=p.credits-r);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),ht(e,t,o.id)})}function ur(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function Eo(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id,{data:l}=await T.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){d("Mini League introuvable","error");return}if(l.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:m}=await T.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(m>=l.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const f=await ur();if(f===null)return;if(l.password!==f){d("Mot de passe incorrect","error");return}}const a=l.entry_fee||100,{data:o}=await T.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<a){d(`Crédits insuffisants — il te faut ${a.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:y}=await T.from("mini_league_members").insert({league_id:i,user_id:r});if(y){d("Erreur inscription : "+y.message,"error");return}const{error:p}=await T.from("users").update({credits:o.credits-a}).eq("id",r),{error:x}=await T.from("mini_leagues").update({pot:(l.pot||0)+a}).eq("id",i);(p||x)&&console.error("Erreur post-inscription:",p,x),s.profile&&(s.profile.credits=o.credits-a);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${a.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+a).toLocaleString("fr")} cr.`,"success"),ht(e,t,i)}async function fr(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:l}=await T.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:m}=await T.from("users").select("credits").eq("id",r).single();await T.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-n)}).eq("id",i),await T.from("users").update({credits:((m==null?void 0:m.credits)||0)+n}).eq("id",r),await T.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),s.profile&&(s.profile.credits=((m==null?void 0:m.credits)||0)+n);const a=document.getElementById("nav-credits");a&&(a.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),At(e,t,"waiting")}async function _i(e,t,i,n,d){const{toast:s}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await T.from("mini_league_matches").delete().eq("league_id",i),await T.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await T.from("mini_leagues").delete().eq("id",i);if(r){s("Erreur suppression ("+r.message+")","error");return}s("Mini League supprimée avec succès","success"),At(e,t,d)}async function gr(e,t,i){await T.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),At(e,t,"archived")}async function ht(e,t,i){var D,C,q,I,P,te,V,de,ae;const{state:n,toast:d}=t,s=n.profile.id,[{data:r},{data:l},{data:m}]=await Promise.all([T.from("mini_leagues").select("*").eq("id",i).single(),T.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),T.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await At(e,t);return}const a=(l||[]).some(J=>J.user_id===s),o=r.creator_id===s,y=(l||[]).map(J=>J.user).filter(Boolean),p=Ao(y,m||[]),x=(m||[]).filter(J=>J.matchday===r.current_day),_=r.pot||0,f=r.entry_fee||100,c=x.length>0&&x.every(J=>J.status==="finished"||J.status==="bye"),z=r.current_day>=r.total_days,u=(l||[]).find(J=>J.user_id===s);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${r.name}</div>
        <div style="font-size:11px;color:#888">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${f} cr./joueur</div>
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
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${y.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${f} cr./joueur → Pot estimé : ${(f*y.length).toLocaleString("fr")} cr. (🥇${Math.floor(f*y.length*.7).toLocaleString("fr")} · 🥈${Math.floor(f*y.length*.2).toLocaleString("fr")} · 🥉${Math.floor(f*y.length*.1).toLocaleString("fr")})</div>
        ${y.map(J=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${J.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${J.club_color1||"#fff"}">${(J.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${J.club_name||J.pseudo}</div><div style="font-size:11px;color:#999">@${J.pseudo}</div></div>
            ${J.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&y.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${f} cr. × ${y.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${a?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${f} cr.)</button>`}
        ${a&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${f.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${x.map(J=>Vi(J,y,s,a)).join("")}
        ${o&&c&&!z?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&c&&z?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&p.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${_>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${p.map((J,R)=>{const G=_>0&&r.status==="finished"?R===0?Math.floor(_*.7):R===1?Math.floor(_*.2):R===2?Math.floor(_*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${J.userId===s?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${R===0?yt:R<3?It:"#555"}">${["🥇","🥈","🥉"][R]||R+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${J.clubName}</div><div style="font-size:10px;color:#999">@${J.pseudo}</div></td>
              <td style="text-align:center">${J.played}</td><td style="text-align:center">${J.won}-${J.drawn}-${J.lost}</td>
              <td style="text-align:center;color:${J.goalDiff>=0?It:"#cc2222"}">${J.goalDiff>=0?"+":""}${J.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${J.points}</td>
              ${_>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${G?G.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(J,R)=>R+1).reverse().map(J=>{const R=(m||[]).filter(G=>G.matchday===J);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${J}</div>${R.map(G=>Vi(G,y,s,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const M=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((D=document.getElementById("ml-back"))==null||D.addEventListener("click",()=>At(e,t,M)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>mr(e,t,r,y)),(q=document.getElementById("ml-next-day"))==null||q.addEventListener("click",()=>xr(e,t,i)),(I=document.getElementById("ml-finish-btn"))==null||I.addEventListener("click",()=>To(e,t,i,_,p,y)),(P=document.getElementById("ml-join-now"))==null||P.addEventListener("click",()=>Eo(e,t,i,r.type)),(te=document.getElementById("ml-leave-btn"))==null||te.addEventListener("click",()=>fr(e,t,i,f)),(V=document.getElementById("ml-delete-btn"))==null||V.addEventListener("click",()=>_i(e,t,i,r.name,"waiting")),(de=document.getElementById("ml-delete-now"))==null||de.addEventListener("click",()=>_i(e,t,i,r.name,M)),(ae=document.getElementById("ml-archive-btn"))==null||ae.addEventListener("click",()=>gr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(J=>{J.addEventListener("click",()=>{const R=x.find(G=>G.id===J.dataset.playMatch);R&&t.navigate("match-mini-league",{mlMatchId:R.id,leagueId:i})})}),r.status==="finished"&&u){const J=p.findIndex(R=>R.userId===s);J>=0&&J<3&&u.prize_amount>0&&setTimeout(()=>yr(e,t,r,u,J),400)}}function Vi(e,t,i,n,d=!1){const s=y=>t.find(p=>p.id===y);if(e.is_bye){const y=s(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"?"} exempté(e)</div>`}const r=s(e.home_id),l=s(e.away_id),m=e.home_id===i||e.away_id===i,a=m&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${m?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${m?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${a?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function mr(e,t,i,n){const{toast:d,state:s}=t,r=br(n.map(a=>a.id),i.mode),l=[];r.forEach((a,o)=>a.forEach(y=>l.push({league_id:i.id,matchday:o+1,home_id:y.home||y.bye,away_id:y.away||null,is_bye:!!y.bye,status:y.bye?"bye":"pending"})));const{error:m}=await T.from("mini_league_matches").insert(l);if(m){d("Erreur calendrier : "+m.message,"error");return}await T.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ht(e,t,i.id)}async function xr(e,t,i){const{data:n}=await T.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await To(e,t,i,n.pot||0,null,null);return}await T.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),ht(e,t,i)}async function To(e,t,i,n,d,s){const{toast:r,state:l}=t;let m=d,a=s;if(!m){const{data:y}=await T.from("mini_league_matches").select("*").eq("league_id",i),{data:p}=await T.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);a=(p||[]).map(x=>x.user).filter(Boolean),m=Ao(a,y||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(m.slice(0,3).map((y,p)=>o[p]?T.from("mini_league_members").update({prize_amount:o[p],prize_claimed:!1}).eq("league_id",i).eq("user_id",y.userId):Promise.resolve())),await T.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),ht(e,t,i)}async function yr(e,t,i,n,d){var p,x;const{state:s,toast:r}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],m=["🥇","🥈","🥉"][d],a=n.prize_amount||l[d]||0,o=n.prize_claimed,y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",y.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${m}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${a.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${a.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(y),(p=y.querySelector("#prize-close"))==null||p.addEventListener("click",()=>y.remove()),y.addEventListener("click",_=>{_.target===y&&y.remove()}),(x=y.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async()=>{const{data:_}=await T.from("users").select("credits").eq("id",s.profile.id).single();await T.from("users").update({credits:((_==null?void 0:_.credits)||0)+a}).eq("id",s.profile.id),await T.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",s.profile.id),s.profile&&(s.profile.credits=((_==null?void 0:_.credits)||0)+a);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${s.profile.credits.toLocaleString("fr")}`),r(`💰 +${a.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),y.remove(),ht(e,t,i.id)})}function br(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let s=n.slice(1);const r=[];for(let l=0;l<d-1;l++){const m=[],a=[n[0],...s];for(let o=0;o<d/2;o++){const y=a[o],p=a[d-1-o];y===null?m.push({bye:p}):p===null?m.push({bye:y}):m.push({home:y,away:p})}r.push(m),s=[s[s.length-1],...s.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(l=>l.map(m=>m.bye?m:{home:m.away,away:m.home}))]:r}function Ao(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],s=i[n.away_id];!d||!s||(d.played++,s.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,s.goalsFor+=n.away_score,s.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,s.lost++):n.home_score<n.away_score?(s.won++,s.points+=3,d.lost++):(d.drawn++,d.points++,s.drawn++,s.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,s.goalDiff=s.goalsFor-s.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}async function Yi(e,t,i,n){var d,s;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(m=>{const a=m.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&T.removeChannel(m)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await di(e,t,"random",({deckId:r,formation:l,starters:m,subsRaw:a,gcCardsEnriched:o,gcDefs:y,stadiumDef:p})=>{const x=_=>hr(e,t,r,l,m,a,_,y||[],i);if(!o.length){x([]);return}si(e,o,x)})}async function hr(e,t,i,n,d,s,r=[],l=[],m,a){const{state:o,navigate:y,toast:p}=t,x=o.profile.id;let _=!1,f=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:x})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",x)}catch{}const{data:c}=await T.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",m).single();if(!c){p("Match introuvable","error"),Ve(e),y("mini-league");return}if(c.home_id!==x&&c.away_id!==x){p("Tu ne fais pas partie de ce match","error"),Ve(e),y("mini-league");return}const z=c.home_id===x,u=z?c.away:c.home,M=z?c.away_id:c.home_id,D=(q,I)=>{var P;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(P=document.getElementById("lobby-cancel"))==null||P.addEventListener("click",()=>{_=!0,clearInterval(f),Ve(e),y("mini-league")})},C=async(q,I)=>{_=!0,clearInterval(f),await new Promise(P=>setTimeout(P,600)),e.isConnected&&vr(e,t,q,I,r,l)};if(D(),z){let q=c.match_id;if(!q){const{data:P,error:te}=await T.from("matches").insert({home_id:x,away_id:M,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(te||!P){p("Erreur création match","error"),Ve(e),y("mini-league");return}q=P.id,await T.from("mini_league_matches").update({match_id:q,status:"playing"}).eq("id",m)}const I=q;f=setInterval(async()=>{if(_){clearInterval(f);return}const{data:P}=await T.from("matches").select("away_deck_id").eq("id",I).single();P!=null&&P.away_deck_id&&(clearInterval(f),C(I,!0))},1500)}else{let q=c.match_id;f=setInterval(async()=>{if(_){clearInterval(f);return}const{data:I}=await T.from("mini_league_matches").select("match_id").eq("id",m).single();I!=null&&I.match_id&&(clearInterval(f),q=I.match_id,await T.from("matches").update({away_deck_id:i}).eq("id",q),C(q,!1))},1500)}}async function vr(e,t,i,n,d=[],s=[]){var $;const{state:r,navigate:l,toast:m}=t,a=(($=r.params)==null?void 0:$.leagueId)||null,o=n?"p1":"p2",y=n?"p2":"p1",p=(d||[]).map(g=>g.id),x=(d||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await T.from("matches").select("*").eq("id",i).single();if(!_){m("Match introuvable","error"),l("mini-league");return}async function f(){const[{data:g},{data:b},{data:h},{data:v}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]),w=S=>{const j=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?j:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?j:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?j:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?j:0),evolution_bonus:j,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((g==null?void 0:g.starters)||[]).map(S=>w(S)),A=((b==null?void 0:b.starters)||[]).map(S=>w(S)),E=(g==null?void 0:g.formation)||"4-4-2",L=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:(()=>{const S=bt(k,E);return stadiumDef?Tt(S,stadiumDef):S})(),p2Team:bt(A,L),p1Subs:(()=>{const S=((g==null?void 0:g.subs)||[]).map(j=>w(j));return stadiumDef&&Ct(S,stadiumDef),S})(),p2Subs:((b==null?void 0:b.subs)||[]).map(S=>w(S)),p1Formation:E,p2Formation:L,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?p:[],gc_p2:n?[]:p,gcCardsFull_p1:n?x:[],gcCardsFull_p2:n?[]:x,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let c=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(!c)if(n){c=await f();const{data:g}=await T.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await T.from("matches").update({game_state:c,turn_user_id:_.home_id}).eq("id",i):c=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!c;g++){await new Promise(h=>setTimeout(h,400));const{data:b}=await T.from("matches").select("game_state").eq("id",i).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(c=b.game_state)}if(!c){m("Erreur de synchronisation","error"),l("mini-league");return}c.gc_p2=p,c.gcCardsFull_p2=x,await T.from("matches").update({game_state:c}).eq("id",i)}let z=!1,u=!1,M=!1,D=null,C=!1;const q=new Set,I=new Set;function P(g){var S,j;try{T.removeChannel(te)}catch{}const b=c[o+"Score"]||0,h=c[y+"Score"]||0;if(!M){M=!0;const F=g.winner_id||(b>h?r.profile.id:h>b?"opp":null),Y=F===r.profile.id?"win":F?"loss":null;Y&&ni(()=>Promise.resolve().then(()=>po),void 0).then(Z=>Z.applyOwnEvolution(r.profile.id,Y)).catch(()=>{})}if(!u){const F=c.p1Score||0,Y=c.p2Score||0,Z=(c.usedGc_p1||[]).length,H=(c.usedGc_p2||[]).length,N=g.winner_id||(F>Y?_.home_id:Y>F?_.away_id:null);(N?r.profile.id===N:r.profile.id<(n?_.away_id:_.home_id))&&(u=!0,io({player1Id:_.home_id,player2Id:_.away_id,score1:F,score2:Y,gc1:Z,gc2:H}).catch(oe=>console.warn("[FriendMatch] updateStats:",oe)))}let v,w;g.winner_id?(v=g.winner_id===r.profile.id,w=!1):g.forfeit?(v=b>h,w=!1):(w=b===h,v=b>h),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const A=w?"🤝":v?"🏆":"😞",E=w?"MATCH NUL":v?"VICTOIRE !":"DÉFAITE",L=w?"#fff":v?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${A}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      <div style="font-size:18px">${c[o+"Name"]} ${b} – ${h} ${c[y+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${v?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(j=k.querySelector("#pvp-end-home"))==null||j.addEventListener("click",()=>{k.remove(),Ve(e),a?l("mini-league",{openLeagueId:a}):l("mini-league")})}const te=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const b=g.new;try{if(b.status==="finished"||b.forfeit){if(z||(z=!0,D&&(clearInterval(D),D=null),b.game_state&&(c=b.game_state),c.phase==="finished"&&!b.forfeit&&document.getElementById("pvp-home")))return;P(b);return}if(b.game_state){const h=c;c=b.game_state;const v=c._lastGC;if(v&&v.seq&&!I.has(v.seq)&&(I.add(v.seq),v.by!==o)){qe(v.type,v.by,()=>ue());return}const w=h[o+"Score"]||0,k=h[y+"Score"]||0,A=c[o+"Score"]||0,E=c[y+"Score"]||0,L=A>w,S=E>k;if((L||S)&&!q.has(c.round)){q.add(c.round);const j=[...c.log||[]].reverse().find(Y=>Y.isGoal),F=((j==null?void 0:j.homePlayers)||[]).map(Y=>({name:Y.name,note:Y.note,portrait:Y.portrait,job:Y.job}));ze(F,A,E,L,()=>ue());return}ue()}}catch(h){console.error("[PvP] crash:",h)}}).subscribe();async function V(g){Object.assign(c,g),c.lastActionAt=new Date().toISOString();const{error:b}=await T.from("matches").update({game_state:c}).eq("id",i);b&&m("Erreur de synchronisation","error");try{ue()}catch(h){console.error("[PvP] renderPvpScreen crash:",h)}}async function de(){if(z)return;z=!0,D&&(clearInterval(D),D=null);const g=n?_.away_id:_.home_id,b=n?"p2":"p1",h=n?"p1":"p2",v={...c,[b+"Score"]:3,[h+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:v.p1Score||0,away_score:v.p2Score||0,game_state:v}).eq("id",i)}catch{}try{T.removeChannel(te)}catch{}setTimeout(()=>{Ve(e),l("mini-league")},800)}const ae={BOOST_STAT:({value:g=1,count:b=1,roles:h=[]},v,w)=>{const k=v[o+"Team"],A=Object.entries(k).filter(([E])=>!h.length||h.includes(E)).flatMap(([E,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!A.length){v.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(v);return}J(A,b,`Choisir ${b} joueur(s) à booster (+${g})`,E=>{E.forEach(L=>{const S=(k[L._line]||[]).find(j=>j.cardId===L.cardId);S&&(S.boost=(S.boost||0)+g,v.log.push({text:`⚡ +${g} sur ${S.name}`,type:"info"}))}),v[o+"Team"]=k,w(v)})},DEBUFF_STAT:({value:g=1,count:b=1,roles:h=[],target:v="ai"},w,k)=>{const A=v==="home"?o:y,E=w[A+"Team"],L=v==="home"?"allié":"adverse",S=Object.entries(E).filter(([j])=>!h.length||h.includes(j)).flatMap(([j,F])=>F.map(Y=>({...Y,_line:j})));if(!S.length){w.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),k(w);return}J(S,b,`Choisir ${b} joueur(s) ${L}(s) (-${g})`,j=>{j.forEach(F=>{const Y=(E[F._line]||[]).find(Z=>Z.cardId===F.cardId);Y&&(Y.boost=(Y.boost||0)-g,w.log.push({text:`🎯 -${g} sur ${Y.name}`,type:"info"}))}),w[A+"Team"]=E,k(w)})},GRAY_PLAYER:({count:g=1,roles:b=[],target:h="ai"},v,w)=>{const k=h==="home"?o:y,A=v[k+"Team"],E=h==="home"?"allié":"adverse",L=Object.entries(A).filter(([S])=>!b.length||b.includes(S)).flatMap(([S,j])=>j.filter(F=>!F.used).map(F=>({...F,_line:S})));if(!L.length){v.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),w(v);return}J(L,g,`Choisir ${g} joueur(s) ${E}(s) à exclure`,S=>{const j="usedCardIds_"+k,F=new Set(v[j]||[]);S.forEach(Y=>{const Z=(A[Y._line]||[]).find(H=>H.cardId===Y.cardId);Z&&(Z.used=!0,F.add(Y.cardId),v.log.push({text:`❌ ${Z.name} exclu !`,type:"info"}))}),v[j]=[...F],v[k+"Team"]=A,w(v)})},REVIVE_PLAYER:({count:g=1,roles:b=[]},h,v)=>{const w=h[o+"Team"],k=Object.entries(w).filter(([A])=>!b.length||b.includes(A)).flatMap(([A,E])=>E.filter(L=>L.used).map(L=>({...L,_line:A})));if(!k.length){h.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),v(h);return}J(k,g,`Choisir ${g} joueur(s) à ressusciter`,A=>{A.forEach(E=>{const L=(w[E._line]||[]).find(S=>S.cardId===E.cardId);L&&(L.used=!1,h.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),h[o+"Team"]=w,v(h)})},REMOVE_GOAL:({},g,b)=>{const h=y+"Score";g[h]>0?(g[h]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(g)},ADD_GOAL_DRAW:({},g,b)=>{g[o+"Score"]===g[y+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(g)},ADD_SUB:({value:g=1},b,h)=>{b.maxSubs=(b.maxSubs||3)+g,b.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),h(b)},CUSTOM:({},g,b)=>b(g)};function J(g,b,h,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function A(){var L,S;const E=g.map(j=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[j._line]||"#555",Y=Se(j,j._line)+(j.boost||0),H=k.find(W=>W.cardId===j.cardId)?"#FFD700":"rgba(255,255,255,0.25)",N=j.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${j.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${H};background:${F};overflow:hidden;cursor:pointer;${N}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${j.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Y}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${j._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${h}</div>
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
        </div>`,(L=w.querySelector("#pp-close"))==null||L.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(j=>{j.addEventListener("click",()=>{const F=j.dataset.cid,Y=g.find(H=>H.cardId===F),Z=k.findIndex(H=>H.cardId===F);Y&&(Z>-1?k.splice(Z,1):k.length<b&&k.push(Y),A())})}),(S=w.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{w.remove(),v(k)})}A(),document.body.appendChild(w)}async function R(g,b){const v=(c["gcCardsFull_"+o]||[]).find(E=>E.id===g),w=(v==null?void 0:v._gcDef)||(c.gcDefs||[]).find(E=>{var L;return E.name===b||((L=E.name)==null?void 0:L.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),k=[...c["usedGc_"+o]||[],g],A={type:b,by:o,seq:(c._gcAnimSeq||0)+1};I.add(A.seq),qe(b,o,async()=>{if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const L=ae[w.effect_type];if(L){const S={...c};L(w.effect_params||{},S,async j=>{j["usedGc_"+o]=k,j._lastGC=A,j._gcAnimSeq=A.seq,await V(j)});return}}const E={...c};switch(b){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=y+"Score";E[L]>0&&(E[L]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=k,E._lastGC=A,E._gcAnimSeq=A.seq,await V(E)})}function G(g,b){const h="usedCardIds_"+g,v=new Set(c[h]||[]);b.forEach(w=>v.add(w)),c[h]=[...v]}function re(){for(const g of["p1","p2"]){const b=new Set(c["usedCardIds_"+g]||[]),h=c[g+"Team"];if(h)for(const v of["GK","DEF","MIL","ATT"])(h[v]||[]).forEach(w=>{w.used=b.has(w.cardId)})}}function ue(){var ot,pt,ut,ft,ce,Q;if(c.phase==="reveal")return he();if(c.phase==="midfield")return be();if(c.phase==="finished")return B();const g=c[o+"Team"],b=c[y+"Team"];re();const h=c[o+"Score"],v=c[y+"Score"],w=c[o+"Name"],k=c[y+"Name"],A=c.phase===o+"-attack",E=c.phase===o+"-defense",L=Array.isArray(c["selected_"+o])?c["selected_"+o]:[],S=L.map(O=>O.cardId),j=window.innerWidth>=700,F=c[o+"Subs"]||[],Y=c["usedSubIds_"+o]||[],Z=F.filter(O=>!Y.includes(O.cardId)),H=c["gcCardsFull_"+o]||[],N=c["usedGc_"+o]||[],W=H.filter(O=>!N.includes(O.id)),oe=c.boostOwner===o&&!c.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(O=>(b[O]||[]).some(se=>!se.used)),pe=[...g.MIL||[],...g.ATT||[]].filter(O=>!O.used),ge=A&&ee&&pe.length===0?[...g.GK||[],...g.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function me(O,se,ye){var qt,Ii;const _e=O._gcDef,Ze={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_e==null?void 0:_e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[_e==null?void 0:_e.color]||"#b06ce0",tt=(_e==null?void 0:_e.name)||O.gc_type,rt=(_e==null?void 0:_e.effect)||((qt=He[O.gc_type])==null?void 0:qt.desc)||"",vt=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,wt=((Ii=He[O.gc_type])==null?void 0:Ii.icon)||"⚡",dt=Math.round(ye*.22),gt=Math.round(ye*.22),mt=ye-dt-gt,_t=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${se}px;height:${ye}px;border-radius:10px;border:2px solid ${Qe};background:${Ze};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${dt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${_t}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${se-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${vt?`<img src="${vt}" style="max-width:${se-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${wt}</span>`}
        </div>
        <div style="height:${gt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${rt.slice(0,38)}</span>
        </div>
      </div>`}function Ee(O,se){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${se}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(se*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(se*.2)}px">⚡</div>
        <div style="font-size:${Math.round(se*.09)}px;color:#000;font-weight:900">+${c.boostValue}</div>
      </div>`}const Be=(O,se)=>se?Ee(130,175):me(O,130,175),De=(O,se)=>se?Ee(68,95):me(O,68,95),Me=j?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=A?ve(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Ie=A&&!ve(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':A||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${j?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Z.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Z.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(O,j?76:44,j?100:58)}</div>`).join("")}
    </div>`,Ue=A?"attack":E?"defense":"idle",Ye=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ct(g,c[o+"Formation"],Ue,S,300,300,ge)}
      </div>
    </div>`;function Ke(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const se=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map(ye=>at(ye)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${se?20:14}px;font-weight:900;color:${se?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${se?14:20}px;font-weight:900;color:${se?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map(ye=>at(ye)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Oe=(()=>{var se,ye;if(E&&((se=c.pendingAttack)!=null&&se.players)){const _e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${it((_e.players||[]).map(Ze=>({...Ze,used:!1})),"#ff6b6b",_e.total)}
        </div>`}if(A&&((ye=c.pendingAttack)!=null&&ye.players)){const _e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((_e.players||[]).map(Ze=>({...Ze,used:!1})),"#00ff88",_e.total)}
        </div>`}const O=(c.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Ke(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Pe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${h} – ${v}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Oe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",j?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ye}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${W.map(O=>Be(O,!1)).join("")}
            ${oe?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ct(g,c[o+"Formation"],Ue,S,300,300,ge)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(O=>De(O,!1)).join("")}
            ${oe?De(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${A&&Z.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${A&&Z.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${A&&Z.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${A&&Z.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${Z.length}</div>
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
      </div>`;function We(){const O=e.querySelector(".match-screen");if(!O)return;const se=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=se+"px",O.style.minHeight=se+"px",O.style.maxHeight=se+"px",O.style.overflow="hidden";const ye=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");ye&&_e&&(_e.style.paddingBottom=ye.offsetHeight+"px")}if(We(),setTimeout(We,120),setTimeout(We,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",We),window.visualViewport.addEventListener("scroll",We)),window.addEventListener("resize",We)),function(){const se=e.querySelector(".terrain-wrapper svg");se&&(se.removeAttribute("width"),se.removeAttribute("height"),se.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",se.setAttribute("viewBox","-26 -26 352 352"),se.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!A&&!E)return;const se=O.dataset.cardId,ye=O.dataset.role,_e=(g[ye]||[]).find(rt=>rt.cardId===se);if(!_e||_e.used)return;const Ze=ge.includes(se);if(A&&!["MIL","ATT"].includes(ye)&&!Ze)return;Array.isArray(c["selected_"+o])||(c["selected_"+o]=[]);const Qe=c["selected_"+o],tt=Qe.findIndex(rt=>rt.cardId===se);tt>-1?Qe.splice(tt,1):Qe.length<3&&Qe.push({..._e,_role:ye}),ue()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>K(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>K())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>K()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>Ce(O.dataset.gcId,O.dataset.gcType))}),(pt=e.querySelector("#pvp-boost-card"))==null||pt.addEventListener("click",()=>$e()),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",O=>{A?O.currentTarget.dataset.pass==="1"||!ve(o)?ie():X():E&&le()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>fe()),(Q=e.querySelector("#pvp-toggle-history"))==null||Q.addEventListener("click",()=>U()),D&&(clearInterval(D),D=null),(A||E)&&!z){let O=30,se=!1;const ye=()=>document.getElementById("pvp-timer"),_e=()=>{ye()&&(ye().textContent=O+"s",ye().style.color=se?"#ff4444":"#fff")};_e(),D=setInterval(()=>{O--,O<0?se?(clearInterval(D),D=null,A&&!ve(o)?ie():de()):(se=!0,O=15,_e()):_e()},1e3)}}function he(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[y+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${lt(c[y+"Team"],c[y+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let xe=!1;function be(){if(xe)return;const g=c[o+"Team"].MIL||[],b=c[y+"Team"].MIL||[];function h(W){return W.reduce((oe,ee)=>oe+Se(ee,"MIL"),0)}function v(W){let oe=0;for(let ee=0;ee<W.length-1;ee++){const pe=nt(W[ee],W[ee+1]);pe==="#00ff88"?oe+=2:pe==="#FFD700"&&(oe+=1)}return oe}const w=h(g)+v(g),k=h(b)+v(b),A=w>=k;function E(W,oe,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${oe}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${W.map((pe,ge)=>{const me=ge<W.length-1?nt(pe,W[ge+1]):null,Ee=!me||me==="#ff3333"||me==="#cc2222",Be=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ge}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...pe,note:Se(pe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ge<W.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ee?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ee?"none":`0 0 8px ${me}`}">
              ${Be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${Be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${h(W)} + ${v(W)} liens = <b style="color:#fff">${h(W)+v(W)}</b>
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
      ${E(g,c[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(b,c[y+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(W,oe)=>e.querySelectorAll(W).forEach((ee,pe)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},oe+pe*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((W,oe)=>setTimeout(()=>{W.style.opacity="1"},oe*70)),900),setTimeout(()=>{const W=e.querySelector("#pvp-vs");W&&(W.style.opacity="1",W.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(oe=>oe.style.opacity="1")},1250);function S(W,oe,ee){const pe=document.getElementById(W);if(!pe)return;const ge=performance.now(),me=Ee=>{const Be=Math.min(1,(Ee-ge)/ee);pe.textContent=Math.round(oe*(1-Math.pow(1-Be,3))),Be<1?requestAnimationFrame(me):pe.textContent=oe};requestAnimationFrame(me)}setTimeout(()=>{S("pvp-score-me",w,800),S("pvp-score-opp",k,800)},1500);const j=c.p1Team.MIL||[],F=c.p2Team.MIL||[],Y=h(j)+v(j),Z=h(F)+v(F),H=Y>=Z?"p1":"p2";let N=c.boostValue;N==null&&(N=ai(),c.boostValue=N,c.boostOwner=H,c.boostUsed=!1),xe=!0,setTimeout(()=>{const W=e.querySelector("#duel-row-"+(A?"me":"opp")),oe=e.querySelector("#duel-row-"+(A?"opp":"me")),ee=document.getElementById("pvp-score-me"),pe=document.getElementById("pvp-score-opp"),ge=A?ee:pe,me=A?pe:ee;ge&&(ge.style.fontSize="80px",ge.style.color=A?"#FFD700":"#ff6b6b",ge.style.animation="duelPulse .5s ease"+(A?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{W&&(W.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",W.style.zIndex="5"),setTimeout(()=>{const Ee=document.getElementById("duel-shock");Ee&&(Ee.style.animation="shockwave .5s ease-out forwards"),oe&&(oe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const Ee=document.getElementById("pvp-duel-finale");if(!Ee)return;const Be=c.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+N+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",De=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ee.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(A?"⚽ "+c[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[y+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Be+De,Ee.style.transition="opacity .45s ease",Ee.style.opacity="1",Ee.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const je=H;await V({phase:je+"-attack",attacker:je,round:1,boostValue:N,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ze(g,b,h,v,w){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const A=Array.from({length:10},(j,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${A}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${v?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${b} – ${h}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(j=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[j.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${j.portrait?`<img src="${j.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(j.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let L=!1;const S=()=>{L||(L=!0,k.remove(),setTimeout(()=>w(),50))};k.addEventListener("click",S),setTimeout(S,3500)}function qe(g,b,h){var N,W;const v=(c.gcDefs||[]).find(oe=>{var ee;return oe.name===g||((ee=oe.name)==null?void 0:ee.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",A=(v==null?void 0:v.name)||g,E=(v==null?void 0:v.effect)||((N=He[g])==null?void 0:N.desc)||"",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,S=((W=He[g])==null?void 0:W.icon)||"⚡",F=b===o?"Vous":c[b+"Name"]||"Adversaire",Y=document.createElement("div");Y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Y.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${k}66}50%{box-shadow:0 0 60px ${k}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${k};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${A.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Y);let Z=!1;const H=()=>{Z||(Z=!0,Y.remove(),setTimeout(()=>h&&h(),50))};Y.addEventListener("click",H),setTimeout(H,3e3)}function Ce(g,b){var Y,Z,H,N;const v=(c["gcCardsFull_"+o]||[]).find(W=>W.id===g),w=v==null?void 0:v._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",A={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",E=(w==null?void 0:w.name)||b,L=(w==null?void 0:w.effect)||((Y=He[b])==null?void 0:Y.desc)||"Carte spéciale.",S=w!=null&&w.image_url?`/icons/${w.image_url}`:null,j=((Z=He[b])==null?void 0:Z.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${A};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${A}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${j}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(H=F.querySelector("#pvp-gc-back"))==null||H.addEventListener("click",()=>F.remove()),(N=F.querySelector("#pvp-gc-use"))==null||N.addEventListener("click",()=>{F.remove(),R(g,b)})}function $e(){var v;const g=c[o+"Team"],b=Object.entries(g).flatMap(([w,k])=>(k||[]).filter(A=>!A.used).map(A=>({...A,_line:w})));if(!b.length)return;const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",h.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(w=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",A=Se(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(h),(v=h.querySelector("#bp-close"))==null||v.addEventListener("click",()=>h.remove()),h.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const k=w.dataset.cid,A=b.find(L=>L.cardId===k);if(!A)return;const E=(g[A._line]||[]).find(L=>L.cardId===k);E&&(E.boost=(E.boost||0)+c.boostValue),h.remove(),await V({[o+"Team"]:g,boostUsed:!0})})})}function K(g=null){var Z,H;if(!(c.phase===o+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const h=c[o+"Team"],v=c["usedSubIds_"+o]||[],w=c.maxSubs||3;if(v.length>=w){m(`Maximum ${w} remplacements atteint`,"warning");return}const k=Object.entries(h).flatMap(([N,W])=>(W||[]).filter(oe=>oe.used).map(oe=>({...oe,_line:N}))),A=(c[o+"Subs"]||[]).filter(N=>!v.includes(N.cardId));if(!k.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!A.length){m("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(N=>N.cardId===g));const L=((Z=k[E])==null?void 0:Z._line)||((H=k[E])==null?void 0:H.job);let S=Math.max(0,A.findIndex(N=>N.job===L)),j=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Y(){var me,Ee,Be,De,Me,je;const N=k[E],W=A[S],oe=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(oe*1.35),pe=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${v.length}/${w})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${pe(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${W?Xe({...W,used:!1,boost:0},oe,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${pe(S>=A.length-1)}" ${S>=A.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${A.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${pe(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${N?Xe({...N,used:!1,boost:0},oe,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${pe(E>=k.length-1)}" ${E>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${k.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=F.querySelector("#psub-close"))==null||me.addEventListener("click",()=>F.remove()),(Ee=F.querySelector("#pout-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,Y())}),(Be=F.querySelector("#pout-down"))==null||Be.addEventListener("click",()=>{E<k.length-1&&(E++,Y())}),(De=F.querySelector("#pin-up"))==null||De.addEventListener("click",()=>{S>0&&(S--,Y())}),(Me=F.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{S<A.length-1&&(S++,Y())});const ge=(Ie,Re,Ue,Ye)=>{const Ke=F.querySelector("#"+Ie);if(!Ke)return;let Oe=0;Ke.addEventListener("touchstart",Pe=>{Oe=Pe.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Pe=>{const We=Pe.changedTouches[0].clientY-Oe;if(Math.abs(We)<30)return;const ot=Re();We<0&&ot<Ye-1?(Ue(ot+1),Y()):We>0&&ot>0&&(Ue(ot-1),Y())},{passive:!0})};ge("pin-panel",()=>S,Ie=>S=Ie,A.length),ge("pout-panel",()=>E,Ie=>E=Ie,k.length),(je=F.querySelector("#psub-confirm"))==null||je.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),j)return;j=!0;const Re=k[E],Ue=A[S];if(!Re||!Ue)return;const Ye=Re._line,Ke=(h[Ye]||[]).findIndex(We=>We.cardId===Re.cardId);if(Ke===-1){m("Erreur : joueur introuvable","error"),F.remove();return}const Oe={...Ue,_line:Ye,position:Re.position,used:!1,boost:0};h[Ye].splice(Ke,1,Oe);const Pe=[...v,Ue.cardId];F.remove(),ne(Re,Ue,async()=>{await V({[o+"Team"]:h,[y+"Team"]:c[y+"Team"],["usedSubIds_"+o]:Pe})})})}document.body.appendChild(F),Y()}function ne(g,b,h){const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(L,S,j)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${j}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${v[L.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Ne(L)?`<img src="${Ne(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;w.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(w);let A=!1;const E=()=>{A||(A=!0,w.remove(),setTimeout(()=>h(),50))};w.addEventListener("click",E),setTimeout(E,2200)}function fe(){var b;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[y+"Name"]}</div>
      <div style="width:min(90vw,420px)">${lt(c[y+"Team"],c[y+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>g.remove())}function U(){var v;const g=c.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const h=w=>{var A,E,L;if(w.type==="duel"){const S=w.isGoal,j=w.homeScored&&o==="p1"||!w.homeScored&&S&&o==="p2",F=w.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",Y=S?j?"⚽ BUT !":"⚽ BUT adversaire !":(A=w.homePlayers)!=null&&A.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Y}</div>
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
      </div>`};b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(h).join("")}
      </div>`,document.body.appendChild(b),(v=b.querySelector("#pvp-hist-close"))==null||v.addEventListener("click",()=>b.remove())}async function ie(){if(c.phase!==o+"-attack")return;const g=o==="p1"?"p2":"p1",b=(c.round||0)+1,h=[...c.log||[]];h.push({type:"info",text:`⏭️ ${c[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const v=ke(c),w=ve(g),k=v||!w?"finished":g+"-attack";await V({["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:k,attacker:g,round:b,log:h}),k==="finished"&&await Le(c)}async function X(){const g=c[o+"Team"],b=!["GK","DEF","MIL","ATT"].some(k=>(c[y+"Team"][k]||[]).some(A=>!A.used)),h=(c["selected_"+o]||[]).map(k=>{const A=(g[k._role]||[]).find(Y=>Y.cardId===k.cardId)||k,E=b&&["GK","DEF"].includes(k._role),L=g[k._role]||[],S=L.findIndex(Y=>Y.cardId===k.cardId),j=st(L.length),F=S>=0?j[S]:A._col??1;return{...A,_line:k._role,_col:F,...E?{note_a:Math.max(1,Number(A.note_a)||0)}:{}}});if(!h.length)return;const v=Ut(h,c.modifiers[o]||{});G(o,h.map(k=>k.cardId)),h.forEach(k=>{const A=(g[k._role]||[]).find(E=>E.cardId===k.cardId);A&&(A.used=!0)}),c["selected_"+o]=[],ue();const w=[...c.log||[]];if(b){const k=(c[o+"Score"]||0)+1,A=h.map(F=>({name:F.name,note:Se(F,F._line||"ATT"),portrait:Ne(F),job:F.job}));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:A,homeTotal:v.total,aiTotal:0});const E=(c.round||0)+1,L=o==="p1"?"p2":"p1",S={...c,[o+"Team"]:g,[o+"Score"]:k},j=ke(S);q.add(E),ze(A,k,c[y+"Score"]||0,!0,async()=>{await V({[o+"Team"]:g,[o+"Score"]:k,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:j?"finished":L+"-attack",attacker:L,round:E,log:w}),j&&await Le({...c,[o+"Score"]:k})});return}w.push({type:"pending",text:`⚔️ ${c[o+"Name"]} attaque (${v.total})`}),await V({[o+"Team"]:g,[y+"Team"]:c[y+"Team"],pendingAttack:{...v,players:h,side:o},["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},phase:y+"-defense",log:w})}async function le(){const g=c[o+"Team"],b=(c["selected_"+o]||[]).map(N=>{const W=(g[N._role]||[]).find(me=>me.cardId===N.cardId)||N,oe=g[N._role]||[],ee=oe.findIndex(me=>me.cardId===N.cardId),pe=st(oe.length),ge=ee>=0?pe[ee]:W._col??1;return{...W,_line:N._role,_col:ge}}),h=Kt(b,c.modifiers[o]||{});G(o,b.map(N=>N.cardId)),b.forEach(N=>{const W=(g[N._role]||[]).find(oe=>oe.cardId===N.cardId);W&&(W.used=!0)}),c["selected_"+o]=[],ue();const v=Vt(c.pendingAttack.total,h.total,c.modifiers[o]||{}),w=c.pendingAttack.side,k=v==="attack"||(v==null?void 0:v.goal),A=w==="p1"?"p2":"p1",E=(c.round||0)+1,L=(c.pendingAttack.players||[]).map(N=>({name:N.name,note:Se(N,N._line||"ATT"),portrait:Ne(N),job:N.job})),S=[...c.log||[]];S.push({type:"duel",isGoal:k,homeScored:k&&w===o,text:k?`⚽ BUT de ${c[w+"Name"]} ! (${c.pendingAttack.total} vs ${h.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${h.total})`,homePlayers:L,aiPlayers:b.map(N=>({name:N.name,note:Se(N,N._line||"DEF"),portrait:Ne(N),job:N.job})),homeTotal:c.pendingAttack.total,aiTotal:h.total});const j=k?(c[w+"Score"]||0)+1:c[w+"Score"]||0,F={...c,[o+"Team"]:g,[w+"Score"]:j},Y=ke(F),Z=Y?"finished":A+"-attack",H=async()=>{await V({[o+"Team"]:g,[y+"Team"]:c[y+"Team"],[w+"Score"]:j,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:Z,attacker:A,round:E,log:S}),(Z==="finished"||Y)&&await Le({...c,[w+"Score"]:j})};if(k){const N=w===o,W=N?j:c[o+"Score"]||0,oe=N?c[y+"Score"]||0:j;q.add(E),ze(L,W,oe,N,H)}else await H()}function we(g){return["MIL","ATT"].some(b=>(g[b]||[]).some(h=>!h.used))}function Te(g){return["GK","DEF","MIL","ATT"].some(b=>(g[b]||[]).some(h=>!h.used))}function Ae(g){return Te(g)&&!we(g)}function ve(g){const b=c[g+"Team"],h=c[(g==="p1"?"p2":"p1")+"Team"];return!!(we(b)||!Te(h)&&Ae(b))}function ke(g){const b=["MIL","ATT"].some(S=>(g.p1Team[S]||[]).some(j=>!j.used)),h=["MIL","ATT"].some(S=>(g.p2Team[S]||[]).some(j=>!j.used)),v=Te(g.p1Team),w=Te(g.p2Team);return!b&&!(!w&&v)&&(!h&&!(!v&&w))}function Fe(g){const b=g.p1Score||0,h=g.p2Score||0;return b===h?null:b>h?_.home_id:_.away_id}async function Le(g){try{const b=Fe(g),h=b?_.home_id===b?_.away_id:_.home_id:null,v=g.p1Score||0,w=g.p2Score||0;await T.from("matches").update({status:"finished",winner_id:b,home_score:v,away_score:w}).eq("id",i);const{data:k}=await T.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await T.from("mini_league_matches").update({home_score:v,away_score:w,status:"finished"}).eq("id",k.id);const{data:A}=await T.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((A||[]).every(L=>L.status==="finished"||L.status==="bye")){const{data:L}=await T.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(L){const S=(L.current_day||0)+1,j=S>(L.total_days||0);await T.from("mini_leagues").update({current_day:j?L.total_days:S,status:j?"finished":"active"}).eq("id",k.league_id)}}}b&&h&&Si(b,h).catch(()=>{})}catch(b){console.error("[ML] finishMatch:",b)}}function B(){var w;if(z&&document.getElementById("pvp-end-overlay"))return;z=!0;const g=c[o+"Score"],b=c[y+"Score"],h=g>b,v=g===b;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${h?"🏆":v?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${h?"Victoire !":v?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{T.removeChannel(te)}catch{}Ve(e),l("mini-league",a?{openLeagueId:a}:{})})}ue()}const wr="/",_r=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function $r(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const s=()=>{var o,y,p;const l=t[n],m=n===t.length-1,a=Math.round((n+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${a}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${wr}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${l.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${l.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${m?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${l.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${m?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,s()}),(y=d.querySelector("#tuto-next"))==null||y.addEventListener("click",()=>{m?r():(n++,s())}),(p=d.querySelector("#tuto-skip"))==null||p.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await T.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),s()}async function kr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:s}=await T.rpc("get_tutorial_steps");if(!s&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:l,error:m}=await T.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!m&&(l==null?void 0:l.length)>0?(n=l,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${s==null?void 0:s.message}, Direct: ${m==null?void 0:m.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):_r;$r(e,r,()=>t("boosters"))}const Er={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function St(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Wi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Xt(e,t){const n=t?Er[t]||"#bbb":"#d0d0d0",d=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${n};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${d}</div>`}function Ji(e){const i=ei(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Xi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function Tr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Li(e,t)}async function Li(e,t){const{state:i,toast:n}=t,{data:d}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:s}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(f=>f.seller_id!==i.profile.id),l=s||[];e.innerHTML=`
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
  </div>`;let m="buy";const a=()=>{var f,c,z,u,M,D,C;return{name:(((f=document.getElementById("flt-name"))==null?void 0:f.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((z=document.getElementById("flt-country"))==null?void 0:z.value)||"").toLowerCase().trim(),job:((u=document.getElementById("flt-job"))==null?void 0:u.value)||"",rarity:((M=document.getElementById("flt-rarity"))==null?void 0:M.value)||"",note1:parseInt((D=document.getElementById("flt-note1"))==null?void 0:D.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function o(f){const c=a();return f.filter(z=>{var te,V,de;const u=(te=z.card)==null?void 0:te.player;if(!u)return!1;const M=`${u.firstname} ${u.surname_encoded}`.toLowerCase(),D=(((V=u.clubs)==null?void 0:V.encoded_name)||"").toLowerCase(),C=(u.country_code||"").toLowerCase(),q=((de=z.card)==null?void 0:de.evolution_bonus)||0,I=St(u,u.job,q),P=u.job2?St(u,u.job2,q):0;return!(c.name&&!M.includes(c.name)||c.club&&!D.includes(c.club)||c.country&&!C.includes(c.country)||c.job&&u.job!==c.job||c.rarity&&u.rarity!==c.rarity||c.note1&&I<c.note1||c.note2&&P<c.note2)})}function y(f){var C,q,I,P;const c=(C=f.card)==null?void 0:C.player;if(!c)return"";const z=((q=f.card)==null?void 0:q.evolution_bonus)||0,u=St(c,c.job,z),M=c.job2?St(c,c.job2,z):0,D=(i.profile.credits||0)>=f.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Wi(c.rarity)}
      ${Xt(u,c.job)}
      ${Xt(M,c.job2||null)}
      ${Ji(c.country_code)}
      ${Xi((I=c.clubs)==null?void 0:I.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.firstname} ${c.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((P=f.seller)==null?void 0:P.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${f.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${f.id}" ${D?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${D?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function p(f){var C,q,I,P;const c=(C=f.card)==null?void 0:C.player;if(!c)return"";const z=((q=f.card)==null?void 0:q.evolution_bonus)||0,u=St(c,c.job,z),M=c.job2?St(c,c.job2,z):0,D=f.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${D?"opacity:0.7":""}">
      ${Wi(c.rarity)}
      ${Xt(u,c.job)}
      ${Xt(M,c.job2||null)}
      ${Ji(c.country_code)}
      ${Xi((I=c.clubs)==null?void 0:I.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.firstname} ${c.surname_encoded}</div>
        <div style="font-size:10px;color:${D?"#22c55e":"#999"};margin-top:1px">
          ${D?`✅ Vendu à ${((P=f.buyer)==null?void 0:P.pseudo)||"—"} · ${f.sold_at?new Date(f.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(f.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${f.price.toLocaleString("fr")}</div>
        ${D?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${f.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const f=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(f){if(c.style.display=m==="buy"?"flex":"none",m==="buy"){const z=o(r);f.innerHTML=z.length?z.map(y).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const z=l.filter(M=>M.status==="active").sort((M,D)=>new Date(D.listed_at)-new Date(M.listed_at)),u=l.filter(M=>M.status==="sold").sort((M,D)=>new Date(D.sold_at||D.listed_at)-new Date(M.sold_at||M.listed_at));f.innerHTML=(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${z.length})</div>`+z.map(p).join(""):"")+(u.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${u.length})</div>`+u.map(p).join(""):"")+(!z.length&&!u.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}f.querySelectorAll("[data-buy]").forEach(z=>z.addEventListener("click",()=>Ar(z.dataset.buy,r,e,t))),f.querySelectorAll("[data-cancel]").forEach(z=>z.addEventListener("click",()=>zr(z.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(f=>{f.addEventListener("click",()=>{m=f.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const z=c===f;c.style.background=z?"var(--green)":"#fff",c.style.color=z?"#fff":"var(--gray-600)",c.style.borderColor=z?"var(--green)":"var(--gray-200)"}),x()})});let _;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(f=>{var c;(c=document.getElementById(f))==null||c.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(x,250)})}),x()}async function Ar(e,t,i,n){const{state:d,toast:s,refreshProfile:r}=n,l=t.find(o=>o.id===e);if(!l)return;const m=l.price;if((d.profile.credits||0)<m){s("Crédits insuffisants","error");return}Sr(l,async()=>{const{error:o}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){s("Erreur achat : "+o.message,"error");return}await r();const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),s("✅ Carte achetée !","success"),await Li(i,n)})}function Sr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const s=l=>{d.remove(),l&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>s(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>s(!0)),d.addEventListener("click",l=>{l.target===d&&s(!1)})}async function zr(e,t,i){const{toast:n}=i,{data:d}=await T.from("market_listings").select("card_id").eq("id",e).single();if(await T.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:s}=await T.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");s||await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Li(t,i)}async function Lr(e,t){var o,y,p,x;const{state:i,navigate:n}=t,d=((y=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:y.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:s},{data:r}]=await Promise.all([T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),T.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let l=d;function m(){var f,c;const _=document.getElementById("rankings-list");if(_){if(l==="global"){const z=s||[];_.innerHTML=z.length>0?z.map((u,M)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${u.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${M<3?["#D4A017","#a0a0a0","#cd7f32"][M]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${M<3?"16":"13"}px">${M<3?["🥇","🥈","🥉"][M]:M+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${u.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${u.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${u.trophies_top1} 🥈${u.trophies_top2} 🥉${u.trophies_top3}</div>
            <div style="color:var(--gray-600)">${u.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const z=r||[];_.innerHTML=z.length>0?z.map((u,M)=>{const D=Nt(u.mmr??1e3),C=(u.ranked_wins||0)+(u.ranked_losses||0)+(u.ranked_draws||0),q=C>0?Math.round((u.ranked_wins||0)/C*100):0,I=u.id===i.profile.id,P=(u.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${M<3?["#D4A017","#a0a0a0","#cd7f32"][M]:"rgba(255,255,255,0.08)"};color:${M<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${M<3?"16":"13"}px">${M<3?["🥇","🥈","🥉"][M]:M+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${D.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${u.club_name} · ${D.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${P?"❓":D.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${D.color}">${P?"Placement":D.label}</div>
              ${P?"":`<div style="font-size:10px;color:var(--gray-600)">${q}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(f=document.getElementById("tab-global"))!=null&&f.style&&(document.getElementById("tab-global").style.cssText=a(l==="global")),(c=document.getElementById("tab-ranked"))!=null&&c.style&&(document.getElementById("tab-ranked").style.cssText=a(l==="ranked"))}}const a=_=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${a(l==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${a(l==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,m(),(p=document.getElementById("tab-global"))==null||p.addEventListener("click",()=>{l="global",m()}),(x=document.getElementById("tab-ranked"))==null||x.addEventListener("click",()=>{l="ranked",m()})}async function Ir(e,t){var q,I,P,te;const{state:i,navigate:n,toast:d}=t,s=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:l}]=await Promise.all([T.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),T.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",s.id).single()]);if(!l){d("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(q=document.getElementById("ranked-back"))==null||q.addEventListener("click",()=>n("home"));return}const m=l.mmr??1e3,a=l.mmr_deviation??350,o=l.mmr_volatility??.06,y=l.placement_matches??0,p=y<10,x=Math.max(0,10-y),_=Nt(m),f=Lo(m),c=ci.findIndex(V=>V.id===_.id),z=ci[c+1]||null,u={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},M=(l.ranked_wins||0)+(l.ranked_losses||0)+(l.ranked_draws||0),D=M>0?Math.round((l.ranked_wins||0)/M*100):0,C=ci.map(V=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${_.id===V.id?1:.35};
      transform:${_.id===V.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${_.id===V.id?"28px":"20px"}">${V.emoji}</div>
      <div style="font-size:9px;color:${V.color};font-weight:${_.id===V.id?"900":"400"};letter-spacing:0.5px">${V.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${u[_.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${z?`<span>${z.emoji} ${z.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${f}%;background:linear-gradient(90deg,${_.color},${_.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${f}% vers ${z?z.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${C}
    </div>

    <!-- Placement / Stats -->
    ${p?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${y}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${x} match${x>1?"s":""} — gains et pertes ×2</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${D}%</div>
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
  </div>`,(I=document.getElementById("ranked-back"))==null||I.addEventListener("click",()=>n("home")),(P=document.getElementById("ranked-leaderboard-btn"))==null||P.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(te=document.getElementById("ranked-play-btn"))==null||te.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:m,rd:a,sigma:o,isPlacement:p}})})}async function Mr(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(s||[]).filter(o=>o.status==="finished"),m=(s||[]).filter(o=>o.status==="in_progress");function a(o){const y=o.home_id===d.id;y?o.home_score:o.away_score,y?o.away_score:o.home_score;const p=o.winner_id===d.id,x=o.home_score===o.away_score&&o.status==="finished",_=o.status!=="finished"?"…":x?"N":p?"V":"D",f=o.status!=="finished"||x?"#888":p?"#1A6B3C":"#c0392b";let c=r[o.mode]||o.mode;o.away_id===null&&!c.startsWith("IA")&&(c="IA");const u=o.home_id===d.id?o.away:o.home;let M;o.away_id===null?M=c:u?M=`${u.club_name||u.pseudo} (${u.pseudo})`:M="Adversaire";let D="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(o.created_at),q=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),I=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${M}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${q}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${I}</span>
        <span style="background:${f};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${_}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${m.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${m.map(a).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(a).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Io(jo);const Ge={user:null,profile:null,page:"home",params:{}};function zt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function jr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function $i(){document.getElementById("modal-overlay").classList.add("hidden")}async function Dt(){if(!Ge.user)return;const{data:e}=await T.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Pt(e,t={}){Ge.page=e,Ge.params=t,So()}async function So(){var n,d,s,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Pt,toast:zt,openModal:jr,closeModal:$i,refreshProfile:Dt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await Bi(e,i);break;case"collection":await cn(e,i);break;case"decks":await yi(e,i);break;case"boosters":await En(e,i);break;case"ranked":await Ir(e,i);break;case"match":{const l=Ge.params&&Ge.params.matchMode||"vs_ai_easy";l==="random"?await wi(e,i,!1):l==="ranked"?await wi(e,i,!0):l==="friend"?await nr(e,i,(n=Ge.params)==null?void 0:n.friendId,(d=Ge.params)==null?void 0:d.friendName):l==="mini-league"?await Yi(e,i,(s=Ge.params)==null?void 0:s.mlMatchId,(r=Ge.params)==null?void 0:r.leagueId):await Fn(e,i);break}case"market":await Tr(e,i);break;case"rankings":await Lr(e,i);break;case"matches":await Mr(e,i);break;case"friends":await Po(e,i);break;case"mini-league":await sr(e,i);break;case"match-mini-league":{const l=Ge.params||{};await Yi(e,i,l.mlMatchId,l.leagueId);break}default:await Bi(e,i)}}function Cr(){var n;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),Pt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Pt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Pt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>qr())}async function qr(){const{data:e}=await T.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Br(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&$i()}),document.getElementById("modal-close").addEventListener("click",$i);const{data:{session:e}}=await T.auth.getSession();if(!e){Zi(),ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt});return}Ge.user=e.user,await Dt(),Zi();try{const{data:i}=await T.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),Mo(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){qo(document.getElementById("app"),{state:Ge,navigate:async()=>{await Dt(),mi()},toast:zt,refreshProfile:Dt});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){jn(document.getElementById("app"),{state:Ge,navigate:()=>mi(),toast:zt,refreshProfile:Dt});return}mi(),setTimeout(()=>kr(Ge.profile,Pt,zt),800),T.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt}))})}function Fr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function li(){const e=document.getElementById("app");e&&(e.style.height=Fr()+"px")}window.addEventListener("resize",li);window.addEventListener("orientationchange",()=>setTimeout(li,150));window.visualViewport&&window.visualViewport.addEventListener("resize",li);function mi(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",li(),Cr(),So()}function Zi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function zo(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Br().catch(e=>{console.error("Échec du démarrage:",e),zo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&zo("Le serveur met trop de temps à répondre.")},12e3);
