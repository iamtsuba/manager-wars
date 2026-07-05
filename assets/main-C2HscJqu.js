const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as z,F as ki,h as Kt,j as eo,l as nt,i as jo,k as Co,b as qo}from"./formation-links-Dnttc-Cp.js";const Bo="/";function qi(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,c,f,a,o,l;const s=n==="login";e.innerHTML=`
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
        <img src="${Bo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{n="register",d()}),s?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var h;b.key==="Enter"&&((h=document.getElementById("login-btn"))==null||h.click())}),(a=document.getElementById("login-btn"))==null||a.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),h=document.getElementById("login-password").value,w=document.getElementById("login-error");if(w.textContent="",!b||!h){w.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await z.auth.signInWithPassword({email:b,password:h});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){w.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",b=>{var h;b.key==="Enter"&&((h=document.getElementById("reg-btn"))==null||h.click())}),(l=document.getElementById("reg-btn"))==null||l.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),h=document.getElementById("reg-password").value,w=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!b||!h||!w){p.textContent="Remplissez tous les champs.";return}if(h.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(h!==w){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:g}=await z.auth.signUp({email:b,password:h});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,g){p.textContent=g.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const T=document.getElementById("login-email");T&&(T.value=b)},50)}))};d()}function Fo(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function c(){var w;const a=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),l=((w=document.getElementById("setup-club"))==null?void 0:w.value)||"MW",b=l.trim().split(" ").filter(Boolean),h=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():l.slice(0,2).toUpperCase();a&&(a.style.background=r,a.style.borderColor=s),o&&(o.textContent=h,o.style.color=s)}document.getElementById("color1").addEventListener("input",a=>{s=a.target.value,document.getElementById("swatch1").style.background=s,c()}),document.getElementById("color2").addEventListener("input",a=>{r=a.target.value,document.getElementById("swatch2").style.background=r,c()});function f(a){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${a}`).classList.add("active"),document.getElementById("step-num").textContent=a,document.getElementById("progress-fill").style.width=`${Math.round(a/3*100)}%`,a===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",a.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:l}=await z.from("users").select("id").eq("pseudo",a).maybeSingle();if(l){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const a=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",a.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:l}=await z.from("users").select("id").eq("club_name",a).maybeSingle();if(l){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),l=document.getElementById("step3-error"),b=document.getElementById("step3-finish");l.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:h}=await z.from("users").insert({id:t.user.id,pseudo:a,club_name:o,club_color1:s,club_color2:r,credits:1e4});if(h)throw h;await Do(t.user.id),await d(),n(`Bienvenue ${a} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(h){l.textContent=h.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Do(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await z.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Go="modulepreload",Po=function(e){return"/"+e},Bi={},si=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(f=>{if(f=Po(f),f in Bi)return;Bi[f]=!0;const a=f.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Go,a||(l.as="script"),l.crossOrigin="",l.href=f,c&&l.setAttribute("nonce",c),document.head.appendChild(l),a)return new Promise((b,h)=>{l.addEventListener("load",b),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return d.then(r=>{for(const c of r||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},Ot="#1A6B3C",Ht="#cc2222",No="#D4A017",Fi="#888";async function Ro(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await to(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ho(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>io(i,n,null,t))}async function to(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:s,error:r}=await z.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:c}=await z.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),f=document.getElementById("pending-badge");f&&(c>0?(f.style.display="flex",f.textContent=c):f.style.display="none");const a=document.getElementById("friends-list");if(!a)return;if(r){console.error("[Friends] Erreur:",r),a.innerHTML=`<div style="color:${Ht};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(s||[]).map(h=>h.requester_id===d?h.addressee_id:h.requester_id);let l={};if(o.length){const{data:h}=await z.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(h||[]).forEach(w=>{l[w.id]=w})}const b=(s||[]).map(h=>({friendshipId:h.id,friend:l[h.requester_id===d?h.addressee_id:h.requester_id]||{pseudo:"?"}}));if(!b.length){a.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}a.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:h,friend:w})=>Oo(w,h)).join("")}
    </div>`,a.querySelectorAll("[data-stats]").forEach(h=>{h.addEventListener("click",()=>Uo(e,h.dataset.stats,h.dataset.friendName))}),a.querySelectorAll("[data-match]").forEach(h=>{h.addEventListener("click",()=>{const w=h.dataset.friendId,p=h.dataset.friendName;console.log("[Friends] clic match",{fid:w,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:w,friendName:p}):t("Erreur navigation","error")})})}function Oo(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),s=e.club_color2||Ot,r=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,f=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${s};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${f?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${f?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${f?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${No};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ho(e,t){const i=Ei();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Ht};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ti()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),s=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",s),i.addEventListener("click",r=>{r.target===i&&s()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:c}=await z.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!c){d.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await z.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:a}=await z.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(a){d.textContent="Erreur : "+a.message;return}s(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function io(e,t,i=null,n={}){const d=e.user.id,{data:s}=await z.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(s||[]).map(b=>b.requester_id);let c={};if(r.length){const{data:b}=await z.from("users").select("id, pseudo, club_name").in("id",r);(b||[]).forEach(h=>{c[h.id]=h})}const f=(s||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),a=Ei(),o=f||[];a.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(b=>{var h,w,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((h=b.requester)==null?void 0:h.club_name)||((w=b.requester)==null?void 0:w.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=b.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ot};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ht};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ti()}`,document.body.appendChild(a);const l=()=>a.remove();a.querySelector("#pending-close").addEventListener("click",l),a.addEventListener("click",b=>{b.target===a&&l()}),a.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:h}=await z.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(h){t("Erreur : "+h.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),to(e,t,n),i&&i()})}),a.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await z.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Uo(e,t,i){const n=e.user.id,[d,s]=[n,t].sort(),r=n===d,{data:c}=await z.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",a=c||{},o=r?a.wins_p1||0:a.wins_p2||0,l=r?a.wins_p2||0:a.wins_p1||0,b=a.draws||0,h=r?a.goals_p1||0:a.goals_p2||0,w=r?a.goals_p2||0:a.goals_p1||0,p=r?a.gc_used_p1||0:a.gc_used_p2||0,u=r?a.gc_used_p2||0:a.gc_used_p1||0,g=a.matches_total||0,T=(D,q,B,C=Ot,G=Ht)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${C}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${D}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${G}">${B}</div>
    </div>`,j=Ei();j.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${g===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${T("Victoires",o,l)}
        ${T("Nuls",b,b,Fi,Fi)}
        ${T("Défaites",l,o)}
        ${T("Buts marqués",h,w)}
        ${T("Buts encaissés",w,h,Ht,Ot)}
        ${T("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${g} match${g>1?"s":""} joué${g>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ti()}`,document.body.appendChild(j),j.querySelector("#stats-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",D=>{D.target===j&&j.remove()})}function Ei(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ti(){return`
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
        background:${Ot};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function oo({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:s}){const[r,c]=[e,t].sort(),f=e!==r,a=f?n:i,o=f?i:n,l=f?s:d,b=f?d:s,h=a>o?1:0,w=o>a?1:0,p=a===o?1:0,{data:u}=await z.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",c).single();u?await z.from("friend_match_stats").update({wins_p1:u.wins_p1+h,wins_p2:u.wins_p2+w,draws:u.draws+p,goals_p1:u.goals_p1+a,goals_p2:u.goals_p2+o,gc_used_p1:u.gc_used_p1+l,gc_used_p2:u.gc_used_p2+b,matches_total:u.matches_total+1}).eq("player1_id",r).eq("player2_id",c):await z.from("friend_match_stats").insert({player1_id:r,player2_id:c,wins_p1:h,wins_p2:w,draws:p,goals_p1:a,goals_p2:o,gc_used_p1:l,gc_used_p2:b,matches_total:1})}const Ko="2026.07.05-1142";async function Di(e,{state:t,navigate:i,toast:n}){var s,r;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ko}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",f=>{f.preventDefault(),i(c.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const f=c.dataset.action;if(f==="match-ai"){Jo(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var D,q,B,C,G,V;const c=((D=window.visualViewport)==null?void 0:D.height)||window.innerHeight,f=((q=document.querySelector(".top-nav"))==null?void 0:q.offsetHeight)||56,a=((B=document.querySelector(".bottom-nav"))==null?void 0:B.offsetHeight)||60,o=((C=e.querySelector(".hero-compact"))==null?void 0:C.offsetHeight)||52,l=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((V=(G=e.querySelector("#logout-btn"))==null?void 0:G.closest("div"))==null?void 0:V.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((Q,se)=>{var re;return Q+(((re=document.getElementById(se))==null?void 0:re.offsetHeight)||0)},0),w=14*5,p=c-f-a-o-b-h-w,u=Math.max(80,Math.round(p*.28)),g=Math.max(160,Math.round(p*.72)),T=Math.floor((g-10)/2);l&&(l.style.minHeight=l.style.maxHeight=u+"px"),e.querySelectorAll(".play-grid .play-card").forEach(Q=>{Q.style.minHeight=Q.style.height=T+"px"});const j=Math.round(T*.55);e.querySelectorAll(".play-card .play-icon").forEach(Q=>{Q.style.height=j+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await z.auth.signOut(),window.location.reload()}),ro(t,n),Wo(t,n,i),no(t,n,i))}async function no(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:s}=await z.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){n.innerHTML="";return}const r=s.map(f=>f.home_id===d?f.away_id:f.home_id).filter(Boolean);let c={};if(r.length){const{data:f}=await z.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(a=>{c[a.id]=a.club_name||a.pseudo})}n.innerHTML=s.map(f=>{const a=f.home_id===d?f.away_id:f.home_id,o=c[a]||"Adversaire",l=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${l?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${l?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${a}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const a=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await z.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await si(async()=>{const{resumePvpMatch:l}=await Promise.resolve().then(()=>Qn);return{resumePvpMatch:l}},void 0);o(a,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Yo(async()=>{await Vo(f.dataset.abandon,f.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),no(e,t,i)})})})}async function Vo(e,t,i){const{data:n}=await z.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,s=d?0:3,r=d?3:0,c=n.game_state||{};c.p1Score=s,c.p2Score=r,c.phase="finished",c.forfeit=!0,await z.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:r,game_state:c}).eq("id",e)}function Yo(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Wo(e,t,i){var c,f,a,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await z.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const s=((c=d.inviter)==null?void 0:c.club_name)||((f=d.inviter)==null?void 0:f.pseudo)||"?",r=d.inviter_id;n.innerHTML=`
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
    </div>`,(a=document.getElementById("match-inv-accept"))==null||a.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:s})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await z.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function ro(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await z.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const s=n.length,r=n.slice(0,2).map(f=>{var a;return((a=f.requester)==null?void 0:a.pseudo)||"?"}).join(", "),c=s>2?` +${s-2}`:"";i.innerHTML=`
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
          ${r}${c}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{io(e,t,()=>ro(e,t))})}function Jo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ze(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Gi=["ATT","MIL","DEF","GK"];function ao(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],r=e[d];if(!s||!r)continue;const c=s._col!=null&&r._col!=null&&s._col===r._col,f=s._col!=null&&r._col!=null&&Math.abs(s._col-r._col)===1,a=Gi.indexOf(s._line||s.job),o=Gi.indexOf(r._line||r.job),l=Math.abs(a-o)===1;if(!((s._line||s.job)===(r._line||r.job)&&f||c&&l))continue;const w=s.country_code&&r.country_code&&s.country_code===r.country_code,p=s.club_id&&r.club_id&&s.club_id===r.club_id;w&&p?t+=2:(w||p)&&(t+=1)}return t}function Vt(e,t={}){const i=e.reduce((s,r)=>{const c=r._line||r.job,f=r.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return s+(Number(c==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+f},0),n=ao(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Yt(e,t={}){const i=e.reduce((s,r)=>{const c=r._line||r.job;let f=0;c==="GK"?f=Number(r.note_g)||0:c==="MIL"?f=Number(r.note_m)||0:f=Number(r.note_d)||0;const a=r.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return s+f+(r.boost||0)+a},0),n=ao(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Wt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function so(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,c)=>{const f=t==="attack"?ze(r,"ATT"):r._line==="GK"?ze(r,"GK"):ze(r,"DEF");return(t==="attack"?ze(c,"ATT"):c._line==="GK"?ze(c,"GK"):ze(c,"DEF"))-f});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Xo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const lo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Ai(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=zi(i),s=Number(i[t])||0;if(s<=0)return 0;const r=i.note_min??1,c=i.note_max??10,a=(e.current_note??d)-d;return Math.min(c,Math.max(r,s+a))}function zi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Si(e,t){!e||!t||await Promise.all([xi(e,"win"),xi(t,"loss")])}async function xi(e,t){const{data:i}=await z.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var s,r;return((s=d.player)==null?void 0:s.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const s=lo[d.player.rarity],r=t==="win"?s.win:s.loss,c=d.player.note_min??1,f=d.player.note_max??10,a=zi(d.player),o=d.current_note??a,l=Math.min(f,Math.max(c,o+r));return z.from("cards").update({current_note:l}).eq("id",d.id)}))}async function Zo(e,t){return xi(e,t)}const co=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:lo,applyOwnEvolution:Zo,currentSecondaryNote:Ai,getBaseMainNote:zi,updateEvolutiveCards:Si},Symbol.toStringTag,{value:"Module"})),po={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Gt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Jt=["GK","DEF","MIL","ATT"],Qo=["Tous","GK","DEF","MIL","ATT"],en={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Pi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function tn(e){return e.length?e.reduce((t,i)=>Pi(i)>Pi(t)?i:t,e[0]):e[0]}function uo(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Li={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function fo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Lt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function fi(e,t=""){var w,p;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Gt[n],s=po[i.rarity]||"#ccc",r=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,f=(r&&e.current_note!=null?e.current_note:Lt(i,n))+c,a=i.job2?r?Ai(e,uo(i.job2)):Lt(i,i.job2):null,o=a!=null?a>0?a+c:a:null,l=i.job2?Gt[i.job2]:null,b=fo(i),h=Li[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${s};cursor:pointer;flex-shrink:0;position:relative
  " data-card-id="${e.id}">
    ${t}
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <!-- Nom -->
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${i.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(i.surname_encoded||"").toUpperCase()}</div>
      </div>
      <!-- Zone étoiles : bandeau fixe + étoile principale dedans + petite étoile dessous -->
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <!-- Bandeau de couleur fixe (toujours au même endroit) -->
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${d}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${d}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${f}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${o!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${o}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${h}</div>
        ${(w=i.clubs)!=null&&w.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((p=i.clubs)==null?void 0:p.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Ni(e){const t=e.job||"ATT",i=Lt(e,t),n=Li[e.country_code]||e.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:#ccc;flex-shrink:0;position:relative;filter:grayscale(1);opacity:0.45
  ">
    <div style="background:#e8e8e8;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#888">${e.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#444;font-family:Arial Black,Arial;line-height:1.1">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#e8e8e8;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:#999"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="#999" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${i}</text>
        </svg>
      </div>
      <div style="height:106px;overflow:hidden;background:#ddd;display:flex;align-items:center;justify-content:center;font-size:36px;color:#aaa">👤</div>
      <div style="background:#e8e8e8;padding:3px 6px;display:flex;align-items:center;justify-content:center;min-height:26px">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${n}</div>
      </div>
    </div>
  </div>`}async function on(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await z.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await z.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),a=(c||[]).filter(W=>W.card_type==="player"&&W.player),o=(c||[]).filter(W=>W.card_type==="game_changer"),l=(c||[]).filter(W=>W.card_type==="formation"),b=(c||[]).filter(W=>W.card_type==="stadium"),{data:h}=await z.from("gc_definitions").select("name,gc_type,color,effect,image_url"),w={};(h||[]).forEach(W=>{w[W.name]=W});const{data:p}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(W=>{u[W.id]=W}),b.forEach(W=>{W.stadium_def&&(u[W.stadium_id]=W.stadium_def)});const g=Object.keys(ki),T=Object.keys(Re),j={};a.forEach(W=>{const ne=W.player.id;j[ne]=(j[ne]||0)+1}),new Set(Object.keys(j).map(W=>String(W)));const D=new Set(l.map(W=>W.formation)),q=new Set(o.map(W=>W.gc_type));let B="player",C="Tous",G="",V=!1;function Q(){return[...a].sort((W,ne)=>{const fe=Jt.indexOf(W.player.job),U=Jt.indexOf(ne.player.job);return fe!==U?fe-U:(W.player.surname_encoded||"").localeCompare(ne.player.surname_encoded||"")})}function se(){return[...f||[]].sort((W,ne)=>{const fe=Jt.indexOf(W.job),U=Jt.indexOf(ne.job);return fe!==U?fe-U:(W.surname_encoded||"").localeCompare(ne.surname_encoded||"")})}function re(){return Q().filter(W=>{const ne=W.player,fe=C==="Tous"||ne.job===C,U=!G||`${ne.firstname} ${ne.surname_encoded}`.toLowerCase().includes(G);return fe&&U})}function Y(){return se().filter(W=>{const ne=C==="Tous"||W.job===C,fe=!G||`${W.firstname} ${W.surname_encoded}`.toLowerCase().includes(G);return ne&&fe})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${a.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="stadium"?"#E87722":"transparent"};
        color:${B==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${b.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function R(){const W=document.getElementById("col-filters");W&&(B==="player"?(W.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Qo.map(ne=>`
            <button class="filter-btn" data-job="${ne}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${ne===C?"var(--green)":"var(--gray-200)"};
                background:${ne===C?"var(--green)":"#fff"};
                color:${ne===C?"#fff":"var(--gray-600)"}">
              ${ne}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",ne=>{G=ne.target.value.toLowerCase(),F()}),e.querySelectorAll(".filter-btn").forEach(ne=>{ne.addEventListener("click",()=>{C=ne.dataset.job,R(),F()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,R(),F()})):(W.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,R(),F()})))}function F(){const W=document.getElementById("col-grid");W&&(B==="player"?Le(W):B==="formation"?Fe(W):B==="stadium"?we(W):Ce(W))}function ie(W,ne,fe,U,te){const J=document.getElementById("col-grid"),de=document.getElementById("col-big");if(!J||!de)return;var ve=0;function Te(){const $e=window.innerWidth>=768,he=document.getElementById("col-big"),ke=document.getElementById("col-grid");$e&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),$e&&ke&&(ke.style.height=Math.round(310*.76+16)+"px",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.padding="8px 16px"),de.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ne(W[ve])+"</div>";var qe=de.querySelector("[data-card-id],[data-form-id],[data-gc-id]");qe&&qe.addEventListener("click",function(){U(W[ve])}),requestAnimationFrame(function(){var je=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!je||!de)){var _=de.clientHeight-8,A=de.clientWidth-24,m=je.offsetHeight,y=je.offsetWidth;if(m>0&&y>0&&_>40){var x=$e?2.2:1,$=Math.min(_/m,A/y,x);je.style.transform="scale("+$.toFixed(3)+")",je.style.transformOrigin="top center"}}}),J.innerHTML=W.map(function(je,_){var A=_===ve,m="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(A?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+_+'" style="'+m+'">'+fe(je,A)+"</div>"}).join(""),J.querySelectorAll(".col-mini-item").forEach(function(je){je.addEventListener("click",function(){ve=Number(je.dataset.idx),Te(),je.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Te()}function ue(W){var ne=window.innerWidth>=768?.76:.54,fe;if(!W||W._fake){var U=W?W.player:null;if(!U)return"";fe=Ni(U)}else fe=fi(W,"");return'<div style="display:inline-block;zoom:'+ne+';pointer-events:none;line-height:0">'+fe+"</div>"}function ye(W,ne,fe){ne=ne||100,fe=fe||140;var U=Kt[W]||{},te={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},J=Math.max(3,Math.round(ne*.06)),de=Object.entries(U).map(function(Te){var $e=Te[0],he=Te[1],ke=$e.replace(/\d+$/,""),qe=te[ke]||"#888",je=Math.round(he.x*ne),_=Math.round(he.y*fe);return'<circle cx="'+je+'" cy="'+_+'" r="'+J+'" fill="'+qe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(ne/50));return'<svg viewBox="0 0 '+ne+" "+fe+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ne+'" height="'+fe+'" fill="#1A6B3C"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(fe*.02)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(fe*.5)+'" x2="'+ne+'" y2="'+Math.round(fe*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(ne*.5)+'" cy="'+Math.round(fe*.5)+'" rx="'+Math.round(ne*.18)+'" ry="'+Math.round(fe*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(fe*.82)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+de+"</svg>"}function me(W,ne,fe){var U=fe>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+fe+"</div>":"",te=ne?'data-form-id="'+ne.id+'"':"",J=W.length>7?14:W.length>5?16:19,de=!!ne;return"<div "+te+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(de?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(de?"":"filter:grayscale(1);opacity:0.5")+'">'+U+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(de?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+J+"px;font-weight:900;color:"+(de?"#1A6B3C":"#aaa")+';line-height:1">'+W+'</div></div><div style="flex:1;overflow:hidden;background:'+(de?"#1A6B3C":"#ccc")+'">'+ye(W,140,220)+"</div></div>"}function xe(W,ne){var fe=window.innerWidth>=768?.76:.54,U=140,te=305,J=Math.round(te*.22),de=te-J,ve=W.length>7?10:13,Te=ye(W,U,de),$e=ne?"1.5px solid #2a7a40":"1px solid #ddd",he=ne?"":"filter:grayscale(1);opacity:0.45;",ke=ne?"#1A6B3C":"#bbb",qe="#fff";return'<div style="display:inline-block;zoom:'+fe+';line-height:0;pointer-events:none"><div style="width:'+U+"px;height:"+te+"px;border-radius:6px;border:"+$e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+J+"px;background:"+ke+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+qe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(U-4)+'px">'+W+'</span></div><div style="height:'+de+'px;overflow:hidden;flex-shrink:0">'+Te+"</div></div></div>"}function Le(W){if(V){const ne=Y();if(!ne.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const fe=ne.map(U=>a.find(te=>te.player.id===U.id)||{_fake:!0,player:U,id:"fake-"+U.id});ie(fe,U=>U._fake?Ni(U.player):fi(U,""),U=>U._fake?ue({player:U.player,id:"x",_fake:!0}):ue(U),U=>{U._fake||Ri(U,a,j,t)})}else{const ne=re();if(!ne.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const fe={};ne.forEach(te=>{const J=te.player.id;fe[J]||(fe[J]=[]),fe[J].push(te)});const U=Object.values(fe).map(te=>tn(te));ie(U,te=>{const J=j[te.player.id]||1,de=J>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${J}</div>`:"",Te=a.filter($e=>$e.player.id===te.player.id&&$e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return fi(te,de+Te)},te=>ue(te),te=>Ri(te,a,j,t))}}function Fe(W){const ne=V?g:[...D];if(!ne.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const fe=ne.map(U=>({formation:U,card:l.find(te=>te.formation===U)||null,owned:D.has(U)}));ie(fe,({formation:U,card:te,owned:J})=>me(U,J?te:null,J?l.filter(de=>de.formation===U).length:0),({formation:U,owned:te})=>xe(U,te),({card:U,owned:te})=>{te&&U&&rn(U,l,t,s)})}function Ce(W){const ne=Object.keys(w),fe=V?ne.length?ne:T:[...q];if(!fe.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const U=fe.map(te=>({type:te,gc:Re[te]||{icon:"⚡",desc:""},def:w[te]||null,owned:q.has(te),card:o.find(J=>J.gc_type===te)||null}));ie(U,({type:te,gc:J,def:de,owned:ve,card:Te})=>{var x;const $e=ve?o.filter($=>$.gc_type===te).length:0,he=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",ke=(de==null?void 0:de.gc_type)==="ultra_game_changer",qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},je={purple:"#b06ce0",light_blue:"#00d4ef"},_=qe[de==null?void 0:de.color]||qe.purple,A=je[de==null?void 0:de.color]||je.purple,m=(de==null?void 0:de.effect)||J.desc||"",y=de!=null&&de.image_url?`/icons/${de.image_url}`:((x=de==null?void 0:de.club)==null?void 0:x.logo_url)||(de!=null&&de.country_code?`https://flagcdn.com/w80/${de.country_code.toLowerCase()}.png`:null);return ve&&Te?`<div data-gc-id="${Te.id}" data-gc-type="${te}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${A};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${A}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${te.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${te}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ke?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${y?`<img src="${y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${J.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${m.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${te}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${J.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:te,gc:J,def:de,owned:ve})=>{const Te=window.innerWidth>=768?.76:.54,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},ke=$e[de==null?void 0:de.color]||$e.purple,qe=he[de==null?void 0:de.color]||he.purple,je=de!=null&&de.image_url?`/icons/${de.image_url}`:null;return ve?`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ke};border:1px solid ${qe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${te}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${je?`<img src="${je}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${J.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((de==null?void 0:de.effect)||J.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${J.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${te}</span></div></div>`},({type:te,owned:J,def:de})=>{J&&nn(te,de,s)})}function we(W){const ne="#E87722",fe="/";if(!b.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const U={};b.forEach(J=>{const de=J.stadium_id||"?";(U[de]=U[de]||[]).push(J)});const te=Object.entries(U).map(([J,de])=>({sid:J,def:u[J]||null,count:de.length,card:de[0]}));ie(te,({def:J,count:de})=>{var qe,je;const ve=(J==null?void 0:J.name)||"?",Te=((qe=J==null?void 0:J.club)==null?void 0:qe.encoded_name)||(J==null?void 0:J.country_code)||"—",$e=J!=null&&J.image_url?`${fe}icons/${J.image_url}`:((je=J==null?void 0:J.club)==null?void 0:je.logo_url)||(J!=null&&J.country_code?`https://flagcdn.com/w80/${J.country_code.toLowerCase()}.png`:null),he=$e?`<img src="${$e}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ke=de>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${de}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ne},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ne}66">
          ${ke}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ve}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${he}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:J,count:de})=>{var qe,je;const ve=window.innerWidth>=768?.76:.54,Te=(J==null?void 0:J.name)||"?",$e=((qe=J==null?void 0:J.club)==null?void 0:qe.encoded_name)||(J==null?void 0:J.country_code)||"—",he=J!=null&&J.image_url?`${fe}icons/${J.image_url}`:((je=J==null?void 0:J.club)==null?void 0:je.logo_url)||(J!=null&&J.country_code?`https://flagcdn.com/w80/${J.country_code.toLowerCase()}.png`:null),ke=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ve};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${ne},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Te}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${ke}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${$e}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(W=>{W.addEventListener("click",()=>{B=W.dataset.tab,C="Tous",G="",V=!1,e.querySelectorAll(".col-tab-btn").forEach(ne=>{const fe=ne.dataset.tab===B;ne.style.borderBottomColor=fe?"var(--green)":"transparent",ne.style.color=fe?"var(--green)":"var(--gray-600)"}),R(),F()})}),R(),F()}function nn(e,t,i){const n=Re[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[t==null?void 0:t.color]||s.purple,f=r[t==null?void 0:t.color]||r.purple,a=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,l=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${f};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${a}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${l?`<img src="${l}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Xt=1e3;function rn(e,t,i,n){var w,p,u;const{state:d,toast:s,closeModal:r,navigate:c,refreshProfile:f}=i,a=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function l(){const g=Kt[a]||{},T=ki[a]||[],j=290,D=360,q=20;function B(G){const V=g[G];return V?{x:V.x*j,y:V.y*D}:null}let C=`<svg width="${j}" height="${D}" viewBox="0 0 ${j} ${D}" xmlns="http://www.w3.org/2000/svg">`;for(const[G,V]of T){const Q=B(G),se=B(V);!Q||!se||(C+=`<line x1="${Q.x}" y1="${Q.y}" x2="${se.x}" y2="${se.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const G of Object.keys(g)){const V=B(G);if(!V)continue;const Q=G.replace(/\d+/,""),se=o[Q]||"#555";C+=`<circle cx="${V.x}" cy="${V.y}" r="${q}" fill="${se}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,C+=`<text x="${V.x}" y="${V.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Q}</text>`}return C+="</svg>",C}const b=t.filter(g=>g.formation===a);b.length;const h=!e.is_for_sale;n(`Formation ${a}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${l()}
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Xt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(w=document.getElementById("direct-sell-form-btn"))==null||w.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${a} pour ${Xt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const g=b.find(j=>!j.is_for_sale)||b[0];if(!g){s("Aucune carte à vendre","error");return}await z.from("market_listings").delete().eq("card_id",g.id),await z.from("transfer_history").delete().eq("card_id",g.id);const{error:T}=await z.from("cards").delete().eq("id",g.id);if(T){s(T.message,"error");return}await z.from("users").update({credits:(d.profile.credits||0)+Xt}).eq("id",d.profile.id),await f(),s(`+${Xt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),c("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const g=parseInt(document.getElementById("sell-price-form").value);if(!g||g<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:g}).eq("id",e.id),await z.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:g}),s("Carte mise en vente sur le marché !","success"),r(),c("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),r(),c("collection")})}async function Ri(e,t,i,n){var Le,Fe,Ce,we,W,ne,fe;const{state:d,toast:s,openModal:r,closeModal:c,navigate:f,refreshProfile:a}=n,o=e.player,l=t.filter(U=>U.player.id===o.id),b=l.length,h=e.evolution_bonus||0,w=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?h:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?h:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?h:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?h:0)),p=o.rarity||"normal",{data:u}=await z.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",w).gte("note_max",w).order("note_min",{ascending:!1}).limit(1);((Le=u==null?void 0:u[0])==null?void 0:Le.price)??en[p];const g=o.rarity!=="legende",T=fo(o),j=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:Lt(o,o.job))+h,D=o.rarity==="pepite"||o.rarity==="papyte",q=o.job2?(D?Ai(e,uo(o.job2)):Lt(o,o.job2))+(Lt(o,o.job2)>0?h:0):null,B=Gt[o.job]||"#1A6B3C",C=o.job2?Gt[o.job2]:null,G=po[o.rarity]||"#ccc",V=Li[o.country_code]||o.country_code||"",Q=e.evolution_bonus||0,re=j+Q,Y=q||0,R=Y>0?Y+Q:0,F=l.map(U=>U.id);let ie={};if(F.length){const{data:U}=await z.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",F).order("transferred_at",{ascending:!0});(U||[]).forEach(te=>{ie[te.card_id]||(ie[te.card_id]=[]),ie[te.card_id].push(te)})}const ue=U=>{const te=U.transferred_at?new Date(U.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",J=U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${U.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${U.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${J}</div>
        <div style="font-size:11px;color:var(--gray-600)">${te}</div>
      </div>
    </div>`},ye=F.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${l.map((U,te)=>{const J=ie[U.id]||[],de=U.is_for_sale,ve=J.length?J[J.length-1]:null,$e=(o.rarity==="pepite"||o.rarity==="papyte")&&U.current_note!=null?` (☆${U.current_note})`:"";return`
            <div data-card-id="${U.id}" data-card-idx="${te}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${de?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${U.id}" ${de?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${te+1}${$e}${de?" 🏷️ En vente":""}</div>
                  ${ve?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ve.club_name} · ${ve.source==="booster"?"Booster":ve.price?ve.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${te}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${J.length?`${J.length} club${J.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${te}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${J.map(ue).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${re}${o.job2&&Y>0?` / ${R}`:""}`:`Note actuelle : ${re}${o.job2&&Y>0?` / ${R}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${g?`
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${G};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${B}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${B}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${j}</text>
            </svg>
            ${q!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${C}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${T?`<img src="${T}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${V}</div>
            ${(Fe=o.clubs)!=null&&Fe.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ce=o.clubs)==null?void 0:Ce.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${G}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${G}18;border-left:3px solid ${G};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${G};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([U,te])=>{const J=Gt[U],de=U===o.job||U===o.job2,ve=(Number(te)||0)+(de&&Q>0?Q:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${J}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ve}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${U}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${ye}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(we=document.getElementById("close-detail"))==null||we.addEventListener("click",c);let me=new Set;const xe=()=>{const U=me.size,te=document.getElementById("sell-action-panel");if(!te)return;te.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const J=document.getElementById("evolve-btn");J&&(J.textContent=`⬆️ Évoluer ${U>1?"(+"+U+")":""}`)};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const te=U.dataset.id;U.checked?me.add(te):me.delete(te);const J=U.closest(".exemplaire-row");J&&(J.style.borderColor=U.checked?"#1A6B3C":"#eee"),xe()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",te=>{if(te.target.closest("button")||te.target.tagName==="INPUT")return;const J=U.querySelector(".expl-check");J&&!J.disabled&&(J.checked=!J.checked,J.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(U=>{U.addEventListener("click",te=>{te.stopPropagation();const J=document.querySelector(`.expl-hist[data-hist="${U.dataset.idx}"]`);J&&(J.style.display=J.style.display==="none"?"flex":"none")})}),(W=document.getElementById("evolve-btn"))==null||W.addEventListener("click",async()=>{if(b<=1)return;const U=[...me];if(!U.length)return;if(me.has(e.id)){const he=document.createElement("div");he.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",he.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(he),he.querySelector("#err-close").addEventListener("click",()=>he.remove()),he.addEventListener("click",ke=>{ke.target===he&&he.remove()});return}const te=U.filter(he=>he!==e.id),J=o.rarity==="legende"?2:1;if((te.length||1)*J,!(!te.length&&U.length===1&&U[0]===e.id)){if(!te.length){s("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(he=>{const ke=document.createElement("div");ke.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ke.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${te.length}</strong> copie${te.length>1?"s":""} sacrifiée${te.length>1?"s":""}<br>
            📈 Note : <strong>${j+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${j+(e.evolution_bonus||0)+te.length*J}</strong>
            ${q&&q>0?`<br>📈 Note 2 : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+te.length*J}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${J} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ke),ke.querySelector("#sac-cancel").addEventListener("click",()=>{ke.remove(),he(!1)}),ke.querySelector("#sac-ok").addEventListener("click",()=>{ke.remove(),he(!0)}),ke.addEventListener("click",qe=>{qe.target===ke&&(ke.remove(),he(!1))})}))return;if(te.length){await z.from("market_listings").delete().in("card_id",te),await z.from("deck_cards").delete().in("card_id",te),await z.from("transfer_history").delete().in("card_id",te),await z.from("decks").update({stadium_card_id:null}).in("stadium_card_id",te);const{error:he}=await z.from("cards").delete().in("id",te);if(he){s("Erreur suppression : "+he.message,"error");return}}const ve=(e.evolution_bonus||0)+te.length*J,{error:Te}=await z.from("cards").update({evolution_bonus:ve}).eq("id",e.id);if(Te){s("Erreur évolution : "+Te.message,"error");return}const $e=j+ve;s(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${j+e.evolution_bonus||j} → ${$e}${te.length?` · ${te.length} copie${te.length>1?"s":""} sacrifiée${te.length>1?"s":""}`:""} !`,"success",4e3),c(),f("collection")}),(ne=document.getElementById("market-sell-btn"))==null||ne.addEventListener("click",async()=>{var Te;const U=[...me];if(!U.length){s("Sélectionne au moins un exemplaire","warning");return}const te=parseInt((Te=document.getElementById("sell-market-price"))==null?void 0:Te.value);if(!te||te<1){s("Prix invalide","error");return}const{error:J}=await z.from("cards").update({is_for_sale:!0,sale_price:te}).in("id",U);if(J){s(J.message,"error");return}const de=U.map($e=>({seller_id:d.profile.id,card_id:$e,price:te,status:"active"})),{error:ve}=await z.from("market_listings").insert(de);ve&&console.warn("[Market] insert listings:",ve.message),s(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${te.toLocaleString("fr")} cr. chacune !`,"success"),c(),f("collection")}),(fe=document.getElementById("cancel-sell-btn"))==null||fe.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),c(),f("collection")})}const ii={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},_t={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function di(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function go(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function mo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function an(e,t=44,i=58){var p;const n=e?di(e):null,d=e?mo(e):null,s=go(e==null?void 0:e.country_code),r=(e==null?void 0:e.job)||"MIL",c=_t[r]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=(e==null?void 0:e._evolution_bonus)??(e==null?void 0:e.evolution_bonus)??0,l=(Number(r==="GK"?e==null?void 0:e.note_g:r==="DEF"?e==null?void 0:e.note_d:r==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(r===(e==null?void 0:e.job)||r===(e==null?void 0:e.job2)?a:0),b=Math.round(i*.19),h=Math.round(i*.25),w=i-b-h;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${w}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${h}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${h+2}px;height:${h-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${h-4}px">🌍</span>`}
      <span style="font-size:${h-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${l}</span>
      ${d?`<img src="${d}" style="width:${h-4}px;height:${h-4}px;object-fit:contain">`:(p=e==null?void 0:e.clubs)!=null&&p.encoded_name?`<span style="font-size:${Math.max(4,h-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function yi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!r)return;const{data:c,error:f}=await z.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(f){d(f.message,"error");return}d("Deck créé !","success"),Oi(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Oi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",r.dataset.name);if(!c||c===r.dataset.name)return;const{error:f}=await z.from("decks").update({name:c}).eq("id",r.dataset.rename);if(f){d(f.message,"error");return}d("Deck renommé !","success"),yi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await z.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:c}=await z.from("decks").delete().eq("id",r.dataset.delete);if(c){d(c.message,"error");return}d("Deck supprimé.","success"),yi(e,t)})})}async function Oi(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("*").eq("id",e).single(),{data:r}=await z.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await z.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),f=(r||[]).filter(g=>g.card_type==="player"&&g.player),a=(r||[]).filter(g=>g.card_type==="formation"),o=(c||[]).filter(g=>g.card_type==="stadium"),l=[...new Set(o.map(g=>g.stadium_id).filter(Boolean))];let b={};if(o.forEach(g=>{g.stadium_def&&g.stadium_id&&(b[g.stadium_id]=g.stadium_def)}),l.length&&Object.keys(b).length<l.length){const{data:g}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(g||[]).forEach(T=>{b[T.id]=T})}const h=a.map(g=>g.formation).filter(Boolean),{data:w}=await z.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=s.formation||"4-4-2";h.length>0&&!h.includes(p)&&(p=h[0]);const u={deckId:e,name:s.name,formation:p,formationCardId:s.formation_card_id,stadiumCardId:s.stadium_card_id||null,slots:{},subs:[],playerCards:f,formationCards:a,stadiumCards:o,stadDefMap:b,availableFormations:h};(w||[]).forEach(g=>{g.is_starter?u.slots[g.position]=g.card_id:u.subs.includes(g.card_id)||u.subs.push(g.card_id)}),$t(t,u,i)}function $t(e,t,i){var a,o,l,b;const{navigate:n}=i;ii[t.formation];const d=Hi(t.formation),s=d.filter(h=>t.slots[h]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(ii),c=(a=t.stadiumCards)==null?void 0:a.find(h=>h.id===t.stadiumCardId);c&&((o=t.stadDefMap)!=null&&o[c.stadium_id]);const f=t.subs.map(h=>t.playerCards.find(w=>w.id===h)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${r.map(h=>`<option value="${h}" ${h===t.formation?"selected":""}>${h}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(h=>{var u;const w=t.stadDefMap[h.stadium_id],p=w?w.name+((u=w.club)!=null&&u.encoded_name?` (${w.club.encoded_name})`:w.country_code?` (${w.country_code})`:""):h.id.slice(0,8);return`<option value="${h.id}" ${t.stadiumCardId===h.id?"selected":""}>${p}</option>`}).join("")}
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
        ${f.map(h=>{const w={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
            ${an(w,44,58)}
            <button data-remove-sub="${h.id}"
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
  </div>`,sn(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",h=>{t.formation=h.target.value;const w=Hi(t.formation),p={};w.forEach(u=>{t.slots[u]&&(p[u]=t.slots[u])}),t.slots=p,$t(e,t,i)}),(l=document.getElementById("stadium-select"))==null||l.addEventListener("change",h=>{t.stadiumCardId=h.target.value||null,$t(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>cn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(h=>{h.addEventListener("click",()=>{t.subs=t.subs.filter(w=>w!==h.dataset.removeSub),$t(e,t,i)})}),(b=document.getElementById("add-sub-btn"))==null||b.addEventListener("click",()=>{ln(t,e,i)})}function sn(e,t,i,n){var j,D;const d=e.querySelector("#deck-field");if(!d)return;const s=(j=t.stadiumCards)==null?void 0:j.find(q=>q.id===t.stadiumCardId),r=s&&((D=t.stadDefMap)==null?void 0:D[s.stadium_id])||null,c=Kt[t.formation]||{},f=eo(t.formation)||[],a={};for(const q of i){const B=t.slots[q],C=B?t.playerCards.find(G=>G.id===B):null;C!=null&&C.player?a[q]={...C.player,_evolution_bonus:C.evolution_bonus||0}:a[q]=null}const o=300,l=300,b=48,h=64,w=13,p=16,u=38;function g(q){const B=c[q];return B?{x:B.x*o,y:B.y*l}:null}let T="";for(const[q,B]of f){const C=g(q),G=g(B);if(!C||!G)continue;const V=a[q]?{...a[q],club_id:a[q].club_id,country_code:a[q].country_code,rarity:a[q].rarity}:null,Q=a[B]?{...a[B],club_id:a[B].club_id,country_code:a[B].country_code,rarity:a[B].rarity}:null,se=nt(V,Q);se==="#ff3333"||se==="#cc2222"?T+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${se}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(T+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${se}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,T+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${G.x.toFixed(1)}" y2="${G.y.toFixed(1)}" stroke="${se}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const q of i){const B=g(q);if(!B)continue;const C=a[q],G=q.replace(/\d+/,""),V=_t[G]||"#555",Q=(B.x-b/2).toFixed(1),se=(B.y-h/2).toFixed(1),re={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const Y=di(C),R=mo(C),F=go(C.country_code),ie=C._evolution_bonus||0,ue=(Number(G==="GK"?C.note_g:G==="DEF"?C.note_d:G==="MIL"?C.note_m:C.note_a)||0)+(G===C.job||G===C.job2?ie:0),ye=r&&(r.club_id&&String(C.club_id)===String(r.club_id)||r.country_code&&C.country_code===r.country_code),me=ye?ue+10:ue,xe=h-w-p;T+=`<defs><clipPath id="dcp-${q}"><rect x="${Q}" y="${(B.y-h/2+w).toFixed(1)}" width="${b}" height="${xe}"/></clipPath></defs>`,T+=`<rect x="${Q}" y="${se}" width="${b}" height="${h}" rx="5" fill="${V}"/>`,Y&&(T+=`<image href="${Y}" x="${Q}" y="${(B.y-h/2+w).toFixed(1)}" width="${b}" height="${xe}" clip-path="url(#dcp-${q})" preserveAspectRatio="xMidYMin slice"/>`),T+=`<rect x="${Q}" y="${se}" width="${b}" height="${w}" fill="rgba(255,255,255,0.93)"/>`,T+=`<text x="${B.x.toFixed(1)}" y="${(B.y-h/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const Le=(B.y+h/2-p).toFixed(1);T+=`<rect x="${Q}" y="${Le}" width="${b}" height="${p}" fill="rgba(255,255,255,0.93)"/>`,F&&(T+=`<image href="${F}" x="${(B.x-21).toFixed(1)}" y="${(B.y+h/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),T+=`<text x="${B.x.toFixed(1)}" y="${(B.y+h/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${ye?"#E87722":"#111"}" font-family="Arial Black">${me}</text>`,R&&(T+=`<image href="${R}" x="${(B.x+b/2-14).toFixed(1)}" y="${(B.y+h/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),T+=`<rect x="${Q}" y="${se}" width="${b}" height="${h}" rx="5" fill="none" stroke="${re}" stroke-width="2"/>`}else T+=`<rect x="${Q}" y="${se}" width="${b}" height="${h}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,T+=`<text x="${B.x.toFixed(1)}" y="${B.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,T+=`<text x="${B.x.toFixed(1)}" y="${(B.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${G}</text>`;T+=`<rect x="${Q}" y="${se}" width="${b}" height="${h}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${q}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-u} ${-u} ${o+u*2} ${l+u*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${T}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(q=>{q.addEventListener("click",()=>dn(q.dataset.pos,t,e,n))})}function dn(e,t,i,n){var b,h,w;const{openModal:d,closeModal:s}=n,r=e.replace(/\d+/,""),c=t.slots[e],f=c?t.playerCards.find(p=>p.id===c):null;(b=f==null?void 0:f.player)==null||b.id;const a=new Set;Object.entries(t.slots).forEach(([p,u])=>{var T;if(p===e||!u)return;const g=t.playerCards.find(j=>j.id===u);(T=g==null?void 0:g.player)!=null&&T.id&&a.add(g.player.id)}),t.subs.forEach(p=>{var g;const u=t.playerCards.find(T=>T.id===p);(g=u==null?void 0:u.player)!=null&&g.id&&a.add(u.player.id)});const o=new Set,l=t.playerCards.filter(p=>{const u=p.player;return!(u.job===r||u.job2===r)||a.has(u.id)||o.has(u.id)?!1:(o.add(u.id),!0)});l.sort((p,u)=>{const g=p.evolution_bonus||0,T=u.evolution_bonus||0,j=(r==="GK"?p.player.note_g:r==="DEF"?p.player.note_d:r==="MIL"?p.player.note_m:p.player.note_a)+(r===p.player.job||r===p.player.job2?g:0);return(r==="GK"?u.player.note_g:r==="DEF"?u.player.note_d:r==="MIL"?u.player.note_m:u.player.note_a)+(r===u.player.job||r===u.player.job2?T:0)-j}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${l.length>0?l.map(p=>{var q,B;const u=p.player,g=p.evolution_bonus||0,T=(r==="GK"?u.note_g:r==="DEF"?u.note_d:r==="MIL"?u.note_m:u.note_a)+(r===u.job||r===u.job2?g:0),j=di(u),D={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[u.rarity];return`<div class="player-option" data-card-id="${p.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${_t[r]}">
            ${j?`<img src="${j}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${_t[r]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${r}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${u.firstname} ${u.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${u.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${u.country_code}">
              ${(q=u.clubs)!=null&&q.logo_url?`<img src="${u.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=u.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${u.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${_t[r]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${D};flex-shrink:0">
            ${T}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(h=document.getElementById("close-selector"))==null||h.addEventListener("click",s),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],s(),$t(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),$t(i,t,n)})})}function ln(e,t,i){var f;const{openModal:n,closeModal:d}=i,s=new Set;Object.keys(e.slots).forEach(a=>{var b;const o=e.slots[a];if(!o)return;const l=e.playerCards.find(h=>h.id===o);(b=l==null?void 0:l.player)!=null&&b.id&&s.add(l.player.id)}),e.subs.forEach(a=>{var l;const o=e.playerCards.find(b=>b.id===a);(l=o==null?void 0:o.player)!=null&&l.id&&s.add(o.player.id)});const r=new Set,c=e.playerCards.filter(a=>{var o,l,b;return s.has((o=a.player)==null?void 0:o.id)||r.has((l=a.player)==null?void 0:l.id)?!1:(r.add((b=a.player)==null?void 0:b.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(a=>{var h;const o=a.player,l=di(o),b=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(a.evolution_bonus||0);return`<div class="player-option" data-card-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${_t[o.job]}">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((h=o.clubs)==null?void 0:h.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${_t[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(a=>{a.addEventListener("click",()=>{e.subs.push(a.dataset.cardId),d(),$t(t,e,i)})})}async function cn(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(f=>f.formation===e.formation),r=(s==null?void 0:s.id)||e.formationCardId;await z.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await z.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([f,a],o)=>{c.push({deck_id:e.deckId,card_id:a,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,a)=>{c.push({deck_id:e.deckId,card_id:f,position:`SUB${a+1}`,is_starter:!1,slot_order:100+a})}),c.length>0){const{error:f}=await z.from("deck_cards").insert(c);if(f){n(f.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Hi(e){const t=ii[e]||ii["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function xo(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await z.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(c=>c.max_per_user!=null);if(r.length){const{data:c}=await z.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(a=>a.id)),f={};(c||[]).forEach(a=>{f[a.booster_id]=(f[a.booster_id]||0)+1}),d=n.filter(a=>a.max_per_user==null?!0:(f[a.id]||0)<a.max_per_user)}}if(!d.length)return[];const{data:s}=await z.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(s||[]).filter(c=>c.booster_id===r.id)}))}async function pn(e,t){const{data:i}=await z.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await z.from("booster_claims").insert({user_id:e,booster_id:t})}function un(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const yo=()=>Object.keys(Kt),fn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],bi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function gn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Ui={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},mn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},xn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ki(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function yn(e){var o,l;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Ui[i],d=mn[t.rarity]||"#ccc",s=Ki(t,i),r=t.job2?Ki(t,t.job2):null,c=t.job2?Ui[t.job2]:null,f=gn(t),a=xn[t.country_code]||t.country_code||"";return`
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
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${c}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${r}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${a}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((l=t.clubs)==null?void 0:l.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function bo(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,r)=>r[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function bn(e,{state:t,navigate:i,toast:n}){var l,b,h;const d=((l=t.profile)==null?void 0:l.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await xo((b=t.user)==null?void 0:b.id)).map(bo)}catch(w){console.warn("Erreur chargement boosters DB, fallback hardcodé",w)}s.length||(s=fn.map(w=>({...w,rates:[],isPub:w.id==="players_pub"})));const r=await z.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(w=>w.data||[]),c=new Set(r.filter(w=>w.card_type==="stadium").map(w=>w.stadium_id)),f=new Set(r.filter(w=>w.card_type==="formation").map(w=>w.formation)),a=new Set(r.filter(w=>w.card_type==="game_changer").map(w=>w.gc_type)),o={};for(const w of s){if(w.allow_duplicates!==!1||!((h=w.rates)!=null&&h.length))continue;const p=[...new Set((w.rates||[]).map(g=>g.card_type))];let u=!1;for(const g of p)if(g==="stadium"){const{data:T}=await z.from("stadium_definitions").select("id");if((T||[]).some(j=>!c.has(j.id))){u=!0;break}}else if(g==="game_changer"){const{data:T}=await z.from("gc_definitions").select("name").eq("is_active",!0);if((T||[]).some(j=>!a.has(j.name))){u=!0;break}}else if(g==="formation"){const{FORMATION_LINKS:T}=await si(async()=>{const{FORMATION_LINKS:j}=await import("./formation-links-Dnttc-Cp.js").then(D=>D.m);return{FORMATION_LINKS:j}},__vite__mapDeps([0,1]));if(Object.keys(T).some(j=>!f.has(j))){u=!0;break}}else{u=!0;break}u||(o[w.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map(w=>{const p=w.cost===0||d>=w.cost,u=o[w.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${w.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${w.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${w.img}" alt="${w.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${w.name}</div>
            <div class="desc">${w.sub}</div>
            <div class="cost">${w.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${u?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(w=>{w.addEventListener("click",async()=>{const p=s.find(u=>u.id===w.dataset.booster);if(p){w.style.opacity="0.5",w.style.pointerEvents="none";try{await hn(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),w.style.opacity="",w.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(w=>{w.addEventListener("click",p=>{p.stopPropagation();const u=s.find(g=>g.id===w.dataset.boosterId);$n(u)})})}async function hn(e,{state:t,toast:i,navigate:n,container:d}){var l,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await En();const{data:s}=await z.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((s||[]).filter(h=>h.card_type==="player").map(h=>h.player_id)),c=new Set((s||[]).filter(h=>h.card_type==="formation").map(h=>h.formation));let f=[],a=null;try{if((l=e.rates)!=null&&l.length)f=await hi(t.profile,e);else{const h=e.type||"player";h==="player"?f=await ho(t.profile,e.cardCount,e.cost):h==="game_changer"?f=await vo(t.profile,e.cardCount,e.cost):h==="formation"?f=await wo(t.profile,e.cost):f=await hi(t.profile,e)}}catch(h){a=h.message||String(h),console.error("[Booster] Erreur:",h)}if(f!=null&&f.length&&e._boosterId&&await pn(t.user.id,e._boosterId),!(f!=null&&f.length)){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${a||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(h),(b=h.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>h.remove());return}f.forEach(h=>{h.card_type==="player"&&h.player?h.isDuplicate=r.has(h.player.id):h.card_type==="formation"&&(h.isDuplicate=c.has(h.formation))});const{data:o}=await z.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),_o(f,e,n)}function vn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function xt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function wn(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>xt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>xt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&xt(n)>=6),i.length||(i=e.filter(n=>xt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&xt(n)>=1&&xt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function hi(e,t){if(t.cost>0){const{error:b}=await z.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:s}=await z.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(s){const{data:b}=await z.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=b||[]}else n=d||[];const r=new Set(n.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(n.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(n.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),a=new Set(n.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),o=new Set,l=[];for(let b=0;b<(t.cardCount||5);b++){const h=un(t.rates);if(h){if(h.card_type==="player"){const w=C=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[C]||C,p=h.rarity?w(h.rarity):null;let u=z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:g}=await u;let T=g||[];if((h.note_min||h.note_max)&&(T=T.filter(C=>{const G=Math.max(Number(C.note_g)||0,Number(C.note_d)||0,Number(C.note_m)||0,Number(C.note_a)||0);return(!h.note_min||G>=h.note_min)&&(!h.note_max||G<=h.note_max)})),T.length||(h.note_min||h.note_max?(T=g||[],console.warn("[Booster] Aucun joueur avec note",h.note_min,"-",h.note_max,"— fallback rareté uniquement")):T=g||[]),!T.length)continue;let j=T.filter(C=>!o.has(C.id));if(i)j.length||(j=T);else if(j=j.filter(C=>!r.has(C.id)),!j.length)continue;const D=j[Math.floor(Math.random()*j.length)];o.add(D.id);const q=r.has(D.id),{data:B}=await z.from("cards").insert({owner_id:e.id,player_id:D.id,card_type:"player"}).select().single();B&&(l.push({...B,player:D,isDuplicate:q}),z.rpc("record_transfer",{p_card_id:B.id,p_player_id:D.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(h.card_type==="game_changer"){const{data:w}=await z.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=w!=null&&w.length?w:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(D=>!f.has(D.name));if(!i&&!u.length)continue;const T=u[Math.floor(Math.random()*u.length)].name,{data:j}=await z.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:T}).select().single();j&&l.push(j)}else if(h.card_type==="formation"){const w=yo(),p=i?w:w.filter(j=>!c.has(j));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],g=c.has(u),{data:T}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();T!=null&&T[0]&&l.push({...T[0],isDuplicate:g})}else if(h.card_type==="stadium"){const{data:w,error:p}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(w!=null&&w.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?w:w.filter(D=>!a.has(D.id));if(!i&&!u.length)continue;const g=u[Math.floor(Math.random()*u.length)],{data:T,error:j}=await z.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:g.id}).select("id,card_type,stadium_id").single();if(j){console.error("[Booster] insert stadium card:",j.message);continue}T&&l.push({...T,rarity:"normal",_stadiumDef:g})}}}return l}async function ho(e,t,i){if(i>0){const{error:a}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a}const{data:n}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(a=>a.job==="GK"),s=n.filter(a=>a.job!=="GK"),r=!e.first_booster_opened&&d.length>0,c=[];for(let a=0;a<t;a++){const o=a===0&&r?d:a===0?s:n,l=vn(),b=wn(o,l);b&&c.push(b)}r&&await z.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await z.from("cards").insert(c.map(a=>({owner_id:e.id,player_id:a.id,card_type:"player"}))).select();return(f||[]).forEach((a,o)=>{z.rpc("record_transfer",{p_card_id:a.id,p_player_id:c[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((a,o)=>({...f[o],player:a}))}async function vo(e,t,i){const{error:n}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await z.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(bi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:c,error:f}=await z.from("cards").insert(r).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(c||[]).map(o=>{const l=d==null?void 0:d.find(b=>b.name===o.gc_type||b.id===o.gc_definition_id);return{...o,_gcDef:l||null}})}async function wo(e,t){const{error:i}=await z.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await z.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),s=yo(),r=s[Math.floor(Math.random()*s.length)],c=d.has(r),{data:f,error:a}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),(f||[]).map(o=>({...o,isDuplicate:c}))}function _o(e,t,i,n=null){var re,Y;if(!e||e.length===0){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(R),(re=R.querySelector("#anim-close-err"))==null||re.addEventListener("click",()=>R.remove());return}e=[...e].sort((R,F)=>{const ie=R.player?xt(R.player):-1;return(F.player?xt(F.player):-1)-ie});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let s=!1;const r=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let f=!1;const a=R=>R.touches&&R.touches[0]?R.touches[0].clientX:R.clientX;function o(R){s||(f=!0,c.style.opacity="1",l(R))}function l(R){if(!f||s)return;const F=r.getBoundingClientRect(),ie=a(R)-F.left,ue=Math.max(0,Math.min(1,ie/F.width));c.style.width=ue*F.width+"px",ue>=.82&&h()}function b(){s||(f=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{s||(c.style.transition="")},220))}function h(){var F;if(s)return;s=!0,f=!1,c.style.width="100%",c.style.opacity="1",(F=document.getElementById("cut-flash"))==null||F.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const R=document.getElementById("cut-hint");R&&(R.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",g(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",l),window.addEventListener("pointerup",b),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",b);let w=0,p=!1;const u=new Set;function g(R){w=R,document.getElementById("reveal-phase").style.display="flex",T(),j(R,0),G()}function T(){const R=document.getElementById("card-dots");R&&(R.innerHTML=e.map((F,ie)=>`<div class="card-dot" data-i="${ie}" style="width:8px;height:8px;border-radius:50%;background:${ie===w?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),R.querySelectorAll(".card-dot").forEach(F=>F.addEventListener("click",()=>q(parseInt(F.dataset.i)))))}function j(R,F){var we;const ie=e[R],ue=document.getElementById("card-counter"),ye=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${R+1} / ${e.length}`);const me=document.getElementById("reveal-btns");me&&(me.style.display=R===e.length-1?"flex":"none");const xe=ie.card_type==="player"&&((we=ie.player)==null?void 0:we.rarity)==="legende",Le=!u.has(R);u.add(R);let Fe=0;if(ie.card_type==="player"&&ie.player){const W=ie.player,ne=W.job||"ATT";Fe=Number(ne==="GK"?W.note_g:ne==="DEF"?W.note_d:ne==="MIL"?W.note_m:W.note_a)||0}const Ce=W=>{ye.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${xe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${_n(ie)}</div>
          ${ie.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");F!==0?(ne.style.transition="none",ne.style.transform=`translateX(${F>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),W||xe?Q():se(),T()};Le&&Fe>6&&ie.card_type==="player"&&ie.player?D(ie,()=>Ce(!0)):Ce(!1)}function D(R,F){var Fe;p=!0;const ie=R.player,ue=`https://flagsapi.com/${ie.country_code}/flat/64.png`,ye=(Fe=ie.clubs)==null?void 0:Fe.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){p=!1,F();return}me.style.display="flex";const Le=()=>{const Ce=xe.firstElementChild;Ce&&(Ce.classList.remove("wo-in"),Ce.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Le,2e3),setTimeout(()=>{var Ce;xe.innerHTML=ye?`<img class="wo-in" src="${ye}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ce=ie.clubs)==null?void 0:Ce.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Le,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",p=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),F()},4900)}function q(R){if(p||R<0||R>=e.length||R===w)return;const F=R>w?1:-1;w=R,j(R,F)}function B(){q(w+1)}function C(){q(w-1)}function G(){const R=document.getElementById("card-viewport");if(!R||R._swipeBound)return;R._swipeBound=!0;let F=0,ie=0,ue=0,ye=!1;const me=we=>we.touches?we.touches[0].clientX:we.clientX,xe=we=>we.touches?we.touches[0].clientY:we.clientY,Le=we=>{ye=!0,F=me(we),ie=xe(we),ue=0},Fe=we=>{if(!ye)return;ue=me(we)-F;const W=xe(we)-ie;if(Math.abs(ue)<Math.abs(W))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},Ce=()=>{if(!ye)return;ye=!1;const we=document.getElementById("current-card-wrap"),W=55;ue<=-W&&w<e.length-1?B():ue>=W&&w>0?C():we&&(we.style.transition="transform .2s ease",we.style.transform="translateX(0)")};R.addEventListener("pointerdown",Le),R.addEventListener("pointermove",Fe),R.addEventListener("pointerup",Ce),R.addEventListener("pointercancel",Ce),R.addEventListener("touchstart",Le,{passive:!0}),R.addEventListener("touchmove",Fe,{passive:!0}),R.addEventListener("touchend",Ce),R.addEventListener("click",we=>{if(Math.abs(ue)>8)return;const W=R.getBoundingClientRect();we.clientX-W.left>W.width/2?B():C()})}let V=null;function Q(){const R=document.getElementById("fireworks-canvas");if(!R)return;R.width=window.innerWidth,R.height=window.innerHeight;const F=R.getContext("2d"),ie=[];function ue(){const me=Math.random()*R.width,xe=Math.random()*R.height*.6,Le=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Fe=Le[Math.floor(Math.random()*Le.length)];for(let Ce=0;Ce<60;Ce++){const we=Math.PI*2/60*Ce,W=2+Math.random()*5;ie.push({x:me,y:xe,vx:Math.cos(we)*W,vy:Math.sin(we)*W,alpha:1,color:Fe,size:2+Math.random()*3})}}ue(),V=setInterval(ue,600);function ye(){if(document.getElementById("fireworks-canvas")){F.clearRect(0,0,R.width,R.height);for(let me=ie.length-1;me>=0;me--){const xe=ie[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){ie.splice(me,1);continue}F.globalAlpha=xe.alpha,F.fillStyle=xe.color,F.beginPath(),F.arc(xe.x,xe.y,xe.size,0,Math.PI*2),F.fill()}F.globalAlpha=1,(V!==null||ie.length>0)&&requestAnimationFrame(ye)}}ye()}function se(){V!==null&&(clearInterval(V),V=null);const R=document.getElementById("fireworks-canvas");R&&R.getContext("2d").clearRect(0,0,R.width,R.height)}if(n){const R=document.getElementById("reveal-btns");R&&(R.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Y=document.getElementById("reveal-next"))==null||Y.addEventListener("click",()=>{se(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{se(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{se(),d.remove(),i("boosters")})}function _n(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return yn(e);if(e.card_type==="game_changer"){const s=e._gcDef,r=(s==null?void 0:s.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},a=c[s==null?void 0:s.color]||c.purple,o=f[s==null?void 0:s.color]||f.purple,l=(s==null?void 0:s.name)||e.gc_type||"Game Changer",b=(s==null?void 0:s.effect)||((t=bi[e.gc_type])==null?void 0:t.desc)||"",h=s!=null&&s.image_url?`/icons/${s.image_url}`:null,w=((i=bi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${a};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${l.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${h?`<img src="${h}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${w}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${b.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const s=e._stadiumDef,r=(s==null?void 0:s.name)||"Stade",c=((n=s==null?void 0:s.club)==null?void 0:n.encoded_name)||(s==null?void 0:s.country_code)||"—",f=s!=null&&s.image_url?`/icons/${s.image_url}`:((d=s==null?void 0:s.club)==null?void 0:d.logo_url)||(s!=null&&s.country_code?`https://flagcdn.com/64x48/${s.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${f?`<img src="${f}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function $n(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}kn()}function kn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function En(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Tn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var b,h;const{data:s}=await z.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let r=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await z.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const p=(await xo()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(c=bo(p))}catch(w){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',w)}const f=r.length;let a=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await z.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function l(){var T;if(a>=f||!r.length){await z.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const w=r[0],{data:p}=await z.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(w.type==="formation")u=await wo(t.profile,0);else if(w.type==="game_changer")u=await vo(t.profile,w.count||3,0);else if(c&&((T=c.rates)!=null&&T.length)){const j={...c,cost:0,cardCount:w.count||c.cardCount||5};u=await hi(t.profile,j),w.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(q=>q.player&&q.player.job==="GK")||await An(t.profile,u),await z.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await ho(t.profile,w.count||5,0)}catch(j){n(j.message||"Erreur ouverture booster","error");return}r.shift(),a++,await o();const g=w.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:w.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${a}/${f})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};_o(u,g,i,()=>{l()})}(h=document.getElementById("onboard-start"))==null||h.addEventListener("click",()=>l())}async function An(e,t){try{const{data:i}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const s=t[d];await z.from("cards").update({player_id:n.id}).eq("id",s.id),t[d]={...s,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const jt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ct={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function kt(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function vi(e,t){var s,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function qt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(s=>{const r=i&&String(s.club_id)===String(i),c=n&&String(s.country_code)===String(n);(r||c)&&(s.stadiumBonus=!0)})}),e}function Ut(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const s=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(s||r)&&(d.stadiumBonus=!0)}),e}function st(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function li(){const e=Math.random()*100;return e<10?3:e<30?2:1}function bt(e,t){const i=jt[t]||jt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const c=e.filter(a=>a.position&&a.position.replace(/\d+$/,"")===r).sort((a,o)=>parseInt(a.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(a=>({...a,_line:r})),f=st(c.length);c.forEach((a,o)=>{a._col=f[o]}),n[r]=c}return n}const s=[...e];for(const r of["GK","DEF","MIL","ATT"]){const c=[];for(let a=0;a<i[r];a++){let o=s.findIndex(l=>l.job===r);if(o===-1&&(o=s.findIndex(l=>l.job2===r)),o===-1&&(o=0),s[o]){const l={...s[o],_line:r};c.push(l),s.splice(o,1)}}const f=st(c.length);c.forEach((a,o)=>{a._col=f[o]}),n[r]=c}return n}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,i){const d=new Set,s=t.filter(o=>{const l=o.gc_type||o.id;return d.has(l)?!1:(d.add(l),!0)});let r=[];function c(o,l){const b=o._gcDef,h={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},w={purple:"#9b59b6",light_blue:"#00bcd4"},p=h[b==null?void 0:b.color]||h.purple,u=w[b==null?void 0:b.color]||w.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${l?"#FFD700":u};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${l?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${l?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((b==null?void 0:b.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b!=null&&b.image_url?`<img src="/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
      </div>
      ${l?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const f=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function a(){var l,b,h;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=r.length>0;e.innerHTML=`
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
        ${s.map(w=>{const p=r.find(u=>u.gc_type===w.gc_type);return c(w,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(w=>{w.addEventListener("click",()=>{const p=w.dataset.id,u=s.find(T=>T.id===p);if(!u)return;const g=r.findIndex(T=>T.gc_type===u.gc_type);g>-1?r.splice(g,1):r.length<3&&r.push(u),a()})}),(l=e.querySelector("#gc-launch"))==null||l.addEventListener("click",()=>{o&&f(r)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(h=e.querySelector("#gc-reset"))==null||h.addEventListener("click",()=>{r.length&&(r=[],a())})}a()}function zn(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Sn(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){kt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=s.map(b=>b.id),{data:c}=await z.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),f=[...new Set((c||[]).filter(b=>{var h,w;return((h=b.card)==null?void 0:h.card_type)==="stadium"&&((w=b.card)==null?void 0:w.stadium_id)}).map(b=>b.card.stadium_id))],a={};if(f.length){const{data:b}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(h=>{a[h.id]=h}),(c||[]).forEach(h=>{var w,p;((w=h.card)==null?void 0:w.card_type)==="stadium"&&((p=h.card)!=null&&p.stadium_id)&&(h.card._stadiumDef=a[h.card.stadium_id]||null)})}let o=0;function l(){var q,B,C,G,V,Q,se;const b=s[o],h=(c||[]).filter(re=>re.deck_id===b.id),w=h.filter(re=>{var Y;return re.is_starter&&((Y=re.card)==null?void 0:Y.player)}).map(re=>vi(re.card,re.position)),p=h.find(re=>{var Y;return((Y=re.card)==null?void 0:Y.card_type)==="formation"}),u=b.formation||((q=p==null?void 0:p.card)==null?void 0:q.formation)||"4-4-2";let g=w.length>=11?bt(w,u):null,T=((B=b.stadium_card)==null?void 0:B.stadium_def)||null;T&&g&&(g=qt(g,T));const j=w.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${zn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${u} · ${w.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===s.length-1?"0.1":"0.3"});color:${o===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${T?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${T.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((C=T.club)==null?void 0:C.encoded_name)||T.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${pt(g,u,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${w.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((re,Y)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Y===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${j?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${j?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${j?"pointer":"default"}">
          ${j?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Y=e.querySelector(".deck-preview-wrap svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(G=document.getElementById("prev-deck"))==null||G.addEventListener("click",()=>{o>0&&(o--,l())}),(V=document.getElementById("next-deck"))==null||V.addEventListener("click",()=>{o<s.length-1&&(o++,l())}),(Q=document.getElementById("validate-deck"))==null||Q.addEventListener("click",()=>{if(!j)return;const re=t.state.params||{};t.navigate("match",{...re,matchMode:re.matchMode||i,deckId:b.id})}),(se=document.getElementById("cancel-deck-select"))==null||se.addEventListener("click",()=>{Ve(e),d("home")});const D=document.getElementById("deck-swipe-zone");if(D){let re=0,Y=0;D.addEventListener("touchstart",R=>{re=R.touches[0].clientX,Y=R.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",R=>{const F=R.changedTouches[0].clientX-re,ie=R.changedTouches[0].clientY-Y;Math.abs(F)<40||Math.abs(F)<Math.abs(ie)||(F<0&&o<s.length-1?(o++,l()):F>0&&o>0&&(o--,l()))},{passive:!0})}}l()}function $o(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58,n=null){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const d=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),s=$o(e),r=e._line||e.job||"MIL",c=Ct[r]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=ko(e==null?void 0:e.country_code),o=Math.round(i*.19),l=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),h=e!=null&&e.used?.28:1,w=e._evolution_bonus??e.evolution_bonus??0,p=e.note!==void 0?Number(e.note)||0:(Number(ze(e,r))||0)+(e.boost||0)+(e.job===r||e.job2===r?w:0),u=!e.used&&(e.stadiumBonus||n&&(n.club_id&&String(e.club_id)===String(n.club_id)||n.country_code&&e.country_code===n.country_code)),g=p+(u?10:0),T=u?"#E87722":"#111";return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0;opacity:${h}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${d&&!(e!=null&&e.used)?`<img src="${d}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${l}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${oi(e==null?void 0:e.country_code)?`<img src="${oi(e.country_code)}" style="width:${l+2}px;height:${l-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${l-4}px">${a}</span>`}
      <span style="font-size:${l-2}px;font-weight:900;color:${e!=null&&e.used?"#111":T};font-family:Arial Black,Arial">${e!=null&&e.used?"–":g}</span>
      ${s?`<img src="${s}" style="width:${l-4}px;height:${l-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,l-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function tt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,r)=>{if(d+=We(s,40,52),r<n.length-1){const c=nt(s,n[r+1]);d+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function oi(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ko(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ct(e,t,i,n,d=310,s=310,r=[]){var j;const c=Kt[t]||{},f=eo(t)||ki[t]||[],a={},o=["ATT","MIL","DEF","GK"];for(const D of o)(e[D]||[]).forEach((B,C)=>{a[`${D}${C+1}`]=B});function l(D){const q=c[D];return q?{x:q.x*d,y:q.y*s}:null}let b="";for(const[D,q]of f){const B=l(D),C=l(q);if(!B||!C)continue;const G=a[D],V=a[q],Q=nt(G,V);Q==="#00ff88"||Q==="#FFD700"?(b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Q}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Q}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Q}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const h=48,w=64,p=13,u=16,g={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[D,q]of Object.entries(a)){const B=l(D);if(!B||!q)continue;const C=D.replace(/[0-9]/g,""),G=Ct[C]||"#555",V=r.includes(q.cardId),Q=i==="attack"&&(["MIL","ATT"].includes(C)||V)&&!q.used||i==="defense"&&["GK","DEF","MIL"].includes(C)&&!q.used,se=n.includes(q.cardId);let re;i==="attack"?re=V?Math.max(1,Number(q.note_a)||0):C==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:i==="defense"?re=C==="GK"?Number(q.note_g)||0:C==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:re=Number(C==="GK"?q.note_g:C==="DEF"?q.note_d:C==="MIL"?q.note_m:q.note_a)||0,re=re+(q.boost||0),q.stadiumBonus&&(i==="attack"&&(C==="ATT"||C==="MIL")||i==="defense"&&(C==="GK"||C==="DEF"||C==="MIL")?re+=10:i||(re+=10));const Y=(B.x-h/2).toFixed(1),R=(B.y-w/2).toFixed(1),F=g[q==null?void 0:q.rarity]||g.normal;if(q.used){const Fe=typeof import.meta<"u"&&"/"||"/",we=`${typeof window<"u"&&((j=window.location)==null?void 0:j.origin)||""}${Fe}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="#161616"/>`,b+=`<image href="${we}" xlink:href="${we}" x="${Y}" y="${R}" width="${h}" height="${w}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="none" stroke="${F}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${C}" style="cursor:pointer"/>`;continue}const ie=se?.45:1,ue=se?"#FFD700":F,ye=se?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,me=w-p-u;b+=`<defs><clipPath id="cp-${D}"><rect x="${Y}" y="${(B.y-w/2+p).toFixed(1)}" width="${h}" height="${me}"/></clipPath></defs>`,b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="${G}" opacity="${ie}"/>`;const xe=Pe(q);xe&&(b+=`<image href="${xe}" xlink:href="${xe}" x="${Y}" y="${(B.y-w/2+p).toFixed(1)}" width="${h}" height="${me}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${Y}" y="${R}" width="${h}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${B.x.toFixed(1)}" y="${(B.y-w/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const Le=(B.y+w/2-u).toFixed(1);b+=`<rect x="${Y}" y="${Le}" width="${h}" height="${u}" fill="rgba(255,255,255,0.92)"/>`;{const Fe=oi(q.country_code);Fe?b+=`<image href="${Fe}" xlink:href="${Fe}" x="${(B.x-20).toFixed(1)}" y="${(B.y+w/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(B.x-13).toFixed(1)}" y="${(B.y+w/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ko(q.country_code)}</text>`;const Ce=q.stadiumBonus?"#E87722":"#111";b+=`<text x="${B.x.toFixed(1)}" y="${(B.y+w/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ce}" font-family="Arial Black">${re}</text>`;const we=$o(q);we?b+=`<image href="${we}" xlink:href="${we}" x="${(B.x+h/2-14).toFixed(1)}" y="${(B.y+w/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(b+=`<text x="${(B.x+14).toFixed(1)}" y="${(B.y+w/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.stadiumBonus&&(b+=`<rect x="${(B.x-h/2).toFixed(1)}" y="${(B.y-w/2).toFixed(1)}" width="${h}" height="${w}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="${se?"rgba(255,255,255,0.12)":"none"}" stroke="${ue}" stroke-width="${ye}" opacity="${ie}"/>`,Q&&(b+=`<rect x="${Y}" y="${R}" width="${h}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${se?"selected":""}" data-card-id="${q.cardId}" data-role="${C}" style="cursor:pointer"/>`)}const T=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-T} ${-T} ${d+T*2} ${s+T*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${b}
  </svg>`}function pt(e,t,i,n,d=300,s=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ct(e,t,i,n,d,s,r)}
  </div>`}function at(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function pi(e,t,i,n){var B;const{state:d,navigate:s,toast:r}=t;et(e);const c=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return Sn(e,t,i);const f=c.deckId;let a,o,l,b;try{const C=await Promise.all([z.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),z.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);a=C[0].data,l=C[0].error,o=C[1].data,b=C[1].error}catch(C){console.error("[Match] Exception chargement deck:",C),kt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(l||b){console.error("[Match] Erreur Supabase:",l||b),kt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const h=(o||[]).filter(C=>{var G;return C.is_starter&&((G=C.card)==null?void 0:G.player)}).map(C=>vi(C.card,C.position)),w=(o||[]).filter(C=>{var G;return!C.is_starter&&((G=C.card)==null?void 0:G.player)}).map(C=>vi(C.card,C.position));if(h.length<11){kt(e,"⚠️",`Deck incomplet (${h.length}/11).`,"Compléter",()=>s("decks"));return}const p=(o||[]).find(C=>{var G;return((G=C.card)==null?void 0:G.card_type)==="formation"}),u=(a==null?void 0:a.formation)||((B=p==null?void 0:p.card)==null?void 0:B.formation)||"4-4-2",{data:g,error:T}=await z.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:j}=await z.from("gc_definitions").select("*").eq("is_active",!0),D=(g||[]).map(C=>({...C,_gcDef:(j==null?void 0:j.find(G=>G.name===C.gc_type||G.id===C.gc_definition_id))||null}));let q=null;if(a!=null&&a.stadium_card_id){const{data:C}=await z.from("cards").select("stadium_id").eq("id",a.stadium_card_id).single();if(C!=null&&C.stadium_id){const{data:G}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",C.stadium_id).single();q=G||null}}n({deckId:f,formation:u,starters:h,subsRaw:w,gcCardsEnriched:D,gcDefs:j||[],stadiumDef:q})}async function Ln(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),r=d;await pi(e,t,d,async({deckId:c,formation:f,starters:a,subsRaw:o,gcCardsEnriched:l,gcDefs:b,stadiumDef:h})=>{try{let w=bt(a,f);h&&(w=qt(w,h),Ut(o,h));const p=await Mn(f,s),u=p.lines||p,g=async T=>{try{const{data:j,error:D}=await z.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:c,status:"in_progress"}).select().single();if(D){console.error("[MatchIA] Erreur création match:",D),kt(e,"⚠️","Impossible de créer le match ("+D.message+").","Retour",()=>t.navigate("home"));return}const q=p.stadiumDef||null;q&&u&&(qt(u,q),Ut(p.subs||[],q));const B={gcDefs:b||[],matchId:j==null?void 0:j.id,mode:r,difficulty:s,formation:f,homeTeam:w,aiTeam:u,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:q,homeScore:0,aiScore:0,gcCards:T,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};jn(e,B,t)}catch(j){console.error("[MatchIA] Exception launchMatch:",j),kt(e,"⚠️","Erreur au lancement du match : "+j.message,"Retour",()=>t.navigate("home"))}};if(!l.length){g([]);return}ci(e,l,g)}catch(w){console.error("[MatchIA] Exception setup:",w),kt(e,"⚠️","Erreur de préparation du match : "+w.message,"Retour",()=>t.navigate("home"))}})}async function Mn(e,t){var u;const{data:i}=await z.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:In(e),subs:[],gcCards:[],stadiumDef:null};const n=jt[e]||jt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=new Set;function r(g,T,j){var D,q;return s.add(g.id),{cardId:"ai-"+g.id+"-"+j,id:g.id,firstname:g.firstname,name:g.surname_encoded,country_code:g.country_code,club_id:g.club_id,job:g.job,job2:g.job2,note_g:Number(g.note_g)||0,note_d:Number(g.note_d)||0,note_m:Number(g.note_m)||0,note_a:Number(g.note_a)||0,rarity:g.rarity,skin:g.skin,hair:g.hair,hair_length:g.hair_length,clubName:((D=g.clubs)==null?void 0:D.encoded_name)||null,clubLogo:((q=g.clubs)==null?void 0:q.logo_url)||null,boost:0,used:!1,_line:T}}for(const g of["GK","DEF","MIL","ATT"]){const T=i.filter(C=>C.job===g&&!s.has(C.id)),j=i.filter(C=>C.job!==g&&!s.has(C.id)),D=[...T,...j],q=[];for(let C=0;C<n[g];C++){const G=D[C];G&&q.push(r(G,g,C))}const B=st(q.length);q.forEach((C,G)=>{C._col=B[G]}),d[g]=q}const f=i.filter(g=>!s.has(g.id)).slice(0,5).map((g,T)=>r(g,g.job,100+T)),l=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((g,T)=>{var j,D;return{id:"ai-gc-"+T,gc_type:g,name:((j=Re[g])==null?void 0:j.name)||g,icon:((D=Re[g])==null?void 0:D.icon)||"⚡"}}),b=Object.values(d).flat(),h={};b.forEach(g=>{g.club_id&&(h[g.club_id]=(h[g.club_id]||0)+1)});const w=(u=Object.entries(h).sort((g,T)=>T[1]-g[1])[0])==null?void 0:u[0];let p=null;if(w){const{data:g}=await z.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",w).single();g&&(p={club_id:g.id,country_code:null,name:g.encoded_name+" Stadium",club:{encoded_name:g.encoded_name,logo_url:g.logo_url}})}return{lines:d,subs:f,gcCards:l,stadiumDef:p}}function In(e){const t=jt[e]||jt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const r=[];for(let f=0;f<t[s];f++){const a=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?a:2,note_d:s==="DEF"?a:2,note_m:s==="MIL"?a:2,note_a:s==="ATT"?a:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const c=st(r.length);r.forEach((f,a)=>{f._col=c[a]}),i[s]=r}return i}function jn(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ct(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Cn(e,t,i),5e3)}function Cn(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],s=t.stadiumDef||null,r=t.aiStadiumDef||null;function c(T,j){const D=ze(T,"MIL"),q=T.evolution_bonus||T._evolution_bonus||0,B=T.job==="MIL"||T.job2==="MIL"?q:0,C=T.stadiumBonus||j&&(j.club_id&&String(T.club_id)===String(j.club_id)||j.country_code&&T.country_code===j.country_code)?10:0;return D+B+C}function f(T,j){return T.reduce((D,q)=>D+c(q,j),0)}function a(T){let j=0;for(let D=0;D<T.length-1;D++){const q=nt(T[D],T[D+1]);q==="#00ff88"?j+=2:q==="#FFD700"&&(j+=1)}return j}const o=f(n,s)+a(n),l=f(d,r)+a(d),b=o>=l;function h(T,j,D,q,B){return`<div id="duel-row-${q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${j}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${T.map((C,G)=>{const V=G<T.length-1?nt(C,T[G+1]):null,Q=!V||V==="#ff3333"||V==="#cc2222",se=V==="#00ff88"?"+2":V==="#FFD700"?"+1":"";c(C,B),C.stadiumBonus||B&&(B.club_id&&String(C.club_id)===String(B.club_id)||B.country_code&&(C.country_code,B.country_code));const re=C.evolution_bonus||C._evolution_bonus||0;return`
          <div class="duel-card duel-card-${q}" data-idx="${G}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...C,_evolution_bonus:re},58,78,B)}
          </div>
          ${G<T.length-1?`<div class="duel-link duel-link-${q}" data-idx="${G}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Q?"rgba(255,255,255,0.12)":V};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Q?"none":`0 0 8px ${V}`}">
            ${se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${V}">${se}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${f(T,B)} + ${a(T)} liens = <b style="color:#fff">${f(T,B)+a(T)}</b>
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

    ${h(n,t.clubName,"#D4A017","home",s)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${h(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const w=()=>{const T=(j,D)=>e.querySelectorAll(j).forEach((q,B)=>{setTimeout(()=>{q.style.opacity="1",q.style.transform="translateY(0) scale(1)"},D+B*90)});T(".duel-card-home",150),T(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((j,D)=>{setTimeout(()=>{j.style.opacity="1"},D*70)}),900),setTimeout(()=>{const j=e.querySelector("#vs-label");j&&(j.style.opacity="1",j.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(D=>D.style.opacity="1")},1250),setTimeout(()=>{p("score-home",o,800),p("score-ai",l,800)},1500)};function p(T,j,D){const q=document.getElementById(T);if(!q)return;const B=performance.now(),C=G=>{const V=Math.min(1,(G-B)/D);q.textContent=Math.round(j*(1-Math.pow(1-V,3))),V<1?requestAnimationFrame(C):q.textContent=j};requestAnimationFrame(C)}requestAnimationFrame(w),t.attacker=b?"home":"ai";const u=b?li():null;b&&(t.boostCard={value:u}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(T=>({name:T.name,note:ze(T,"MIL"),portrait:Pe(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo})),aiPlayers:d.map(T=>({name:T.name,note:ze(T,"MIL"),portrait:Pe(T),job:T.job,country_code:T.country_code,rarity:T.rarity,clubName:T.clubName,clubLogo:T.clubLogo})),homeTotal:o,aiTotal:l,text:`Duel milieu : ${t.clubName} ${o} – ${l} IA → ${b?t.clubName+" attaque":"IA attaque"}`});const g=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ni(e,t,i),800)};setTimeout(()=>{const T=document.getElementById("score-home"),j=document.getElementById("score-ai"),D=document.getElementById(b?"duel-row-home":"duel-row-ai"),q=document.getElementById(b?"duel-row-ai":"duel-row-home"),B=b?T:j,C=b?j:T;B&&(B.style.fontSize="80px",B.style.color=b?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(b?", duelGlow 1.5s ease infinite .5s":"")),C&&(C.style.opacity="0.25"),setTimeout(()=>{D&&(D.style.transformOrigin="center",D.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",D.style.zIndex="5"),setTimeout(()=>{var V;const G=document.getElementById("duel-shock");if(G){const Q=(V=q||D)==null?void 0:V.getBoundingClientRect(),se=e.querySelector(".match-screen").getBoundingClientRect();Q&&(G.style.top=Q.top-se.top+Q.height/2+"px"),G.style.animation="shockwave .5s ease-out forwards"}q&&(q.style.transformOrigin="center",q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var V;const G=document.getElementById("duel-finale");G&&(G.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${b?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${b?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${u}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,G.style.transition="opacity .45s ease",G.style.opacity="1",G.style.pointerEvents="auto",(V=document.getElementById("start-match-btn"))==null||V.addEventListener("click",g))},600)},700)},2800)}function qn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var B,C,G,V,Q,se,re,Y,R;const n=t.selected.map(F=>F.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(F=>!d.includes(F.cardId)),c=Object.values(t.homeTeam).flat().filter(F=>F.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(F=>(t.aiTeam[F]||[]).some(ie=>!ie.used)),a=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(F=>!F.used),o=t.phase==="attack"&&f&&a.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(F=>!F.used).map(F=>F.cardId):[];t.log[t.log.length-1];const l=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",h=t.phase==="defense",w=t.phase==="finished",u=(t.homeSubs||[]).filter(F=>!(t.usedSubIds||[]).includes(F.cardId)).length>0&&t.subsUsed<t.maxSubs,g=b&&a.length===0&&!u,T=t.gcCards.filter(F=>!t.usedGc.includes(F.id)),j=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${tt((ie.players||[]).map(ue=>({...ue,used:!1})),"#ff6b6b",ie.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${tt((ie.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",ie.total)}
          </div>`}const F=t.log[t.log.length-1];return F?'<div style="padding:2px 4px">'+qn(F)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const F=window.innerWidth>=700,ie=(W,ne,fe)=>{var _,A;const U=(t.gcDefs||[]).find(m=>m.name===W.gc_type),te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[U==null?void 0:U.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",J={purple:"#b06ce0",light_blue:"#00d4ef"}[U==null?void 0:U.color]||"#b06ce0",de=(U==null?void 0:U.name)||W.gc_type,ve=(U==null?void 0:U.effect)||((_=Re[W.gc_type])==null?void 0:_.desc)||"",Te=U!=null&&U.image_url?`/icons/${U.image_url}`:null,$e=((A=Re[W.gc_type])==null?void 0:A.icon)||"⚡",he=Math.round(fe*.22),ke=Math.round(fe*.22),qe=fe-he-ke,je=de.length>12?7:9;return`<div class="gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
          style="box-sizing:border-box;width:${ne}px;height:${fe}px;border-radius:10px;border:2px solid ${J};background:${te};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${he}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${je}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ne-6}px">${de}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${qe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${ne-10}px;max-height:${qe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(qe*.55)}px">${$e}</span>`}
          </div>
          <div style="height:${ke}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},ue=(W,ne)=>{var fe;return`<div id="boost-card"
          style="box-sizing:border-box;width:${W}px;height:${ne}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ne*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(ne*.2)}px">⚡</div>
            <div style="font-size:${Math.round(ne*.09)}px;color:#000;font-weight:900">+${(fe=t.boostCard)==null?void 0:fe.value}</div>
          </div>`},ye=(W,ne)=>ne?ue(130,175):ie(W,130,175),me=(W,ne)=>ne?ue(68,95):ie(W,68,95),xe=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Le=w?`<button id="btn-results" style="${xe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:l?`<div style="${xe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:g?`<button id="btn-pass" style="${xe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${xe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:h?`<button id="btn-action" style="${xe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${xe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Fe=b||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Ce=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(W=>`<div class="sub-btn-col" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${We(W,76,100)}</div>`).join("")}
      </div>`,we=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${pt(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return F?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ce}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${we}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Le}${Fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${T.map(W=>ye(W,!1)).join("")}
            ${j?ye(null,!0):""}
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
            ${T.map(W=>me(W,!1)).join("")}
            ${j?me(null,!0):""}
            <div id="sub-btn-main" style="cursor:${c?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${c?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${c?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${c?1:.4}">
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
          <div>${Le}${Fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(F=>{var ie,ue,ye;if(F.type==="duel"){const me=F.isGoal,xe=F.homeScored?"#FFD700":me?"#ff6b6b":"rgba(255,255,255,0.3)",Le=F.homeScored?"⚽ BUT !":me?"⚽ BUT IA !":(ie=F.homePlayers)!=null&&ie.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${me?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${xe};margin-bottom:4px">
                <div style="font-size:9px;color:${xe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Le}</div>
                ${(ue=F.homePlayers)!=null&&ue.length?`<div style="margin-bottom:3px">${tt(F.homePlayers,"rgba(255,255,255,0.7)",F.homeTotal)}</div>`:""}
                ${(ye=F.aiPlayers)!=null&&ye.length?`<div style="opacity:0.7">${tt(F.aiPlayers,"#ff6b6b",F.aiTotal)}</div>`:""}
              </div>`}return F.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${F.outPlayer?We({...F.outPlayer,used:!0,_line:F.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${F.inPlayer?We({...F.inPlayer,_line:F.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:F.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${F.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${F.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function D(){const F=e.querySelector(".match-screen");if(!F)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);F.style.bottom="auto",F.style.height=ie+"px",F.style.minHeight=ie+"px",F.style.maxHeight=ie+"px",F.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");ue&&ye&&(ye.style.paddingBottom=ue.offsetHeight+"px")}if(D(),setTimeout(D,120),setTimeout(D,400),setTimeout(D,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",D),window.visualViewport.addEventListener("scroll",D)),window.addEventListener("resize",D)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const F=e.querySelector(".terrain-wrapper svg");F&&(F.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let F=!1,ie=30;const ue=()=>document.getElementById("match-timer"),ye=()=>{const me=ue();if(!me)return;const xe=String(Math.floor(ie/60)).padStart(2,"0"),Le=String(ie%60).padStart(2,"0");me.textContent=` ${xe}:${Le}`,me.style.color=F?"#ff2222":"#ff9500",me.style.fontWeight="900"};ye(),t._timerInt=setInterval(()=>{if(ie--,ie<0)if(!F)F=!0,ie=15,ye();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const me=document.createElement("div");me.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",me.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(me),setTimeout(()=>{me.remove(),Pt(e,t,i)},2500)}else ye()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Pt(e,t,i))}),(C=document.getElementById("view-ai"))==null||C.addEventListener("click",()=>Vn(t,i)),(G=document.getElementById("toggle-history"))==null||G.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.add("open")}),(V=document.getElementById("close-history"))==null||V.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.remove("open")}),(Q=document.getElementById("btn-action"))==null||Q.addEventListener("click",()=>{t.selected.length!==0&&(b?Fn(e,t,i):h&&Dn(e,t,i))}),(se=document.getElementById("btn-results"))==null||se.addEventListener("click",()=>Pt(e,t,i)),(re=document.getElementById("btn-pass"))==null||re.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ni(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(F=>{F.addEventListener("click",()=>Bn(F,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(F=>{F.addEventListener("click",()=>gi(e,t,i,null,F.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(F=>{F.addEventListener("click",()=>On(F.dataset.gcId,F.dataset.gcType,e,t,i))}),(Y=document.getElementById("boost-card"))==null||Y.addEventListener("click",()=>Kn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(F=>{F.addEventListener("click",()=>gi(e,t,i,F.dataset.subId))}),(R=document.getElementById("sub-btn-main"))==null||R.addEventListener("click",()=>gi(e,t,i))}function Bn(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,r=t.selected.findIndex(c=>c.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[s]||[]).find(f=>f.cardId===d);c&&t.selected.push({...c,_role:s,_line:s})}Ye(i,t,n)}function Mi(e,t,i){e.matchId&&z.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Fn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Mi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(c=>!c.used)),d=t.selected.map(r=>{const c=(t.homeTeam[r._role]||[]).find(a=>a.cardId===r.cardId)||r,f=n&&["GK","DEF"].includes(r._role);return{...c,_line:r._role,...f?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),s=Vt(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(r=>{const c=(t.homeTeam[r._role]||[]).find(f=>f.cardId===r.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>Nn(e,t,i),1200)}function Dn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Mi(t,i,i.state.profile.id);const n=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId)||c,_line:c._role})),d=Yt(n,t.modifiers.home);t.selected.forEach(c=>{const f=(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId);f&&(f.used=!0)});const s=Wt(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const f=(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId)||c;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(s.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),ri(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Mt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Mt(e,t,i,"home-attack")}function Gn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(f=>f.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(f=>!e.aiUsedSubIds.includes(f.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(f=>f.job===n.job)||i[0],s={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],c=r.findIndex(f=>f.cardId===n.cardId);c!==-1&&(r[c]=s),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Pn(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ni(e,t,i){Mi(t,i,null),Gn(t),Pn(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=so(n,"attack",t.difficulty);if(!d.length){ti(e,t,i);return}const s=Vt(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(a=>{a.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(a=>a.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used),f=(t.homeSubs||[]).filter(a=>!(t.usedSubIds||[]).includes(a.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!f){t.aiScore++;const a={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(a),t.pendingAttack=null,Ye(e,t,i),ri(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Mt(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function Nn(e,t,i){var a,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=so(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(l=>(t.aiTeam[l]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((a=t.pendingAttack)==null?void 0:a.players)||[]).map(h=>({name:h.name,note:ze(h,h._line||h.job),portrait:Pe(h),job:h.job,country_code:h.country_code,rarity:h.rarity,clubName:h.clubName,clubLogo:h.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ri(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{Mt(e,t,i,"ai-attack")});return}const r=d.length>0?Yt(d,t.modifiers.ai).total:0;d.forEach(l=>{l.used=!0});const c=Wt(t.pendingAttack.total,r,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:d.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(c.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(c.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ri(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{Mt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,Mt(e,t,i,"ai-attack")}function Mt(e,t,i,n){if(t.round++,Eo(t)){Pt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){ti(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){ti(e,t,i);return}setTimeout(()=>ni(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){ti(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ni(e,t,i),800)}}function Eo(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function ti(e,t,i){Eo(t)?Pt(e,t,i):(t.phase="attack",Ye(e,t,i))}function Rn(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=Pe(e),s=Pe(t),r=Ct[e.job]||"#555",c=Ct[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,a=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${f}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${c};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${s?`<img src="${s}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${a}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let o=!1;const l=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",l),setTimeout(l,2e3)}function Ft(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function gi(e,t,i,n=null,d=null){var h,w;if(t.phase!=="attack"){Ft("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ft(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(g=>g.used).map(g=>({...g,_line:g._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!s.length){Ft("Aucun joueur utilisé à remplacer");return}if(!r.length){Ft("Aucun remplaçant disponible");return}let c=Math.max(0,s.findIndex(p=>p.cardId===d));const f=((h=s[c])==null?void 0:h._line)||((w=s[c])==null?void 0:w.job);let a=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===f)),o=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var q,B,C,G,V,Q;const p=s[c],u=r[a],g=Math.min(130,Math.round((window.innerWidth-90)/2)),T=Math.round(g*1.35),j=se=>`background:rgba(255,255,255,0.12);border:none;color:${se?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${se?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${j(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?We({...u,used:!1,boost:0},g,T):"<div>—</div>"}</div>
        <button id="in-down" style="${j(a>=r.length-1)}" ${a>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${j(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},g,T):"<div>—</div>"}</div>
        <button id="out-down" style="${j(c>=s.length-1)}" ${c>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=l.querySelector("#sub-close"))==null||q.addEventListener("click",()=>l.remove()),(B=l.querySelector("#out-up"))==null||B.addEventListener("click",()=>{c>0&&(c--,b())}),(C=l.querySelector("#out-down"))==null||C.addEventListener("click",()=>{c<s.length-1&&(c++,b())}),(G=l.querySelector("#in-up"))==null||G.addEventListener("click",()=>{a>0&&(a--,b())}),(V=l.querySelector("#in-down"))==null||V.addEventListener("click",()=>{a<r.length-1&&(a++,b())});const D=(se,re,Y,R)=>{const F=l.querySelector("#"+se);if(!F)return;let ie=0;F.addEventListener("touchstart",ue=>{ie=ue.touches[0].clientY},{passive:!0}),F.addEventListener("touchend",ue=>{const ye=ue.changedTouches[0].clientY-ie;if(Math.abs(ye)<30)return;const me=re();ye<0&&me<R-1?(Y(me+1),b()):ye>0&&me>0&&(Y(me-1),b())},{passive:!0})};D("in-panel",()=>a,se=>a=se,r.length),D("out-panel",()=>c,se=>c=se,s.length),(Q=l.querySelector("#sub-confirm"))==null||Q.addEventListener("click",se=>{if(se.preventDefault(),se.stopPropagation(),o)return;o=!0;const re=s[c],Y=r[a];if(!re||!Y)return;let R=null,F=-1;for(const[ue,ye]of Object.entries(t.homeTeam)){const me=(ye||[]).findIndex(xe=>xe.cardId===re.cardId);if(me!==-1){R=ue,F=me;break}}if(F===-1||!R){Ft("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const ie={...Y,_line:R,_col:re._col||0,used:!1,boost:0};t.homeTeam[R].splice(F,1,ie),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Y.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:re.name,firstname:re.firstname,note:ze(re,R),portrait:Pe(re),job:re.job,country_code:re.country_code,rarity:re.rarity,clubName:re.clubName,clubLogo:re.clubLogo},inPlayer:{name:Y.name,firstname:Y.firstname,note:ze(Y,R),portrait:Pe(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},text:`🔄 ${Y.firstname} ${Y.name} remplace ${re.firstname} ${re.name}`}),l.remove(),Rn(re,Y,()=>Ye(e,t,i))})}document.body.appendChild(l),b()}function On(e,t,i,n,d){var w,p;const s=(n.gcDefs||[]).find(u=>u.name===t),r=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",a=(s==null?void 0:s.name)||t,o=(s==null?void 0:s.effect)||r.desc,l=s!=null&&s.image_url?`/icons/${s.image_url}`:null,b=r.icon||"⚡",h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",h.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${a.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${a}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${l?`<img src="${l}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${b}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(h),(w=h.querySelector("#gc-back"))==null||w.addEventListener("click",()=>h.remove()),(p=h.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{h.remove(),Un(e,t,i,n,d)})}function Zt(e,t,i,n,d,s){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function f(){var a,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(l=>{const b=l._line||l.job||"MIL",h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",w=ze(l,b)+(l.boost||0),p=c.find(u=>u.cardId===l.cardId);return`<div class="gc-pick-item" data-cid="${l.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${h};overflow:hidden;cursor:pointer;flex-shrink:0;${l.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${l.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(a=r.querySelector("#gc-picker-close"))==null||a.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.cid,h=e.find(p=>p.cardId===b);if(!h)return;const w=c.findIndex(p=>p.cardId===b);w>-1?c.splice(w,1):c.length<t&&c.push(h),f()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),s(c)})}f(),document.body.appendChild(r)}const Hn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const r=Object.entries(n.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(a=>!a.used).map(a=>({...a,_line:c})));return r.length?(Zt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,c=>{c.forEach(f=>{const a=(n.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);a&&(a.boost=(a.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${a.name}`,type:"info"}))}),Ye(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,r)=>{const c=n==="home"?d.homeTeam:d.aiTeam,f=n==="ai"?"adverse":"allié",a=Object.entries(c).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,l])=>l.filter(b=>!b.used).map(b=>({...b,_line:o})));return a.length?(Zt(a,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,s,d,o=>{o.forEach(l=>{const h=((n==="home"?d.homeTeam:d.aiTeam)[l._line]||[]).find(w=>w.cardId===l.cardId);h&&(h.boost=(h.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${h.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ye(s,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Ye(s,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const r=i==="home"?n.homeTeam:n.aiTeam,c=i==="ai"?"adverse":"allié",f=Object.entries(r).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,o])=>o.filter(l=>!l.used).map(l=>({...l,_line:a})));return f.length?(Zt(f,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,d,n,a=>{a.forEach(o=>{const b=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(h=>h.cardId===o.cardId);b&&(b.used=!0,n.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Ye(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,c])=>c.filter(f=>f.used).map(f=>({...f,_line:r})));return s.length?(Zt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(c=>{const f=(i.homeTeam[c._line]||[]).find(a=>a.cardId===c.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Ye(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Un(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],r=s.find(f=>f.name===t)||s.find(f=>{var a;return((a=f.name)==null?void 0:a.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const f=Hn[r.effect_type];f?f(r.effect_params||{},n,i,d)||(c=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(n.homeTeam).flatMap(([a,o])=>(o||[]).filter(l=>l.used).map(l=>({...l,_line:a})));f.length?(f[0].used=!1,n.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(a=>!a.used);if(f.length){const a=f.sort((o,l)=>ze(l,"ATT")-ze(o,"ATT"))[0];a.used=!0,n.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}z.from("cards").delete().eq("id",e).then(()=>{}),c&&Ye(i,n,d)}function Kn(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Ct[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ze(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[r]||[]).find(f=>f.cardId===s);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function ri(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(a,o)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Ct[a.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${a.portrait?`<img src="${a.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(a.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let c=!1;const f=()=>{c||(c=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",f),setTimeout(f,3500)}async function Pt(e,t,i){var o,l;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,r=d?"victoire":s?"nul":"defaite",c=Xo(t.mode,r);t.matchId&&await z.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(n.profile.credits||0)+c,matches_played:(n.profile.matches_played||0)+1};d?f.wins=(n.profile.wins||0)+1:s?f.draws=(n.profile.draws||0)+1:f.losses=(n.profile.losses||0)+1,await z.from("users").update(f).eq("id",n.profile.id),await i.refreshProfile();const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",a.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":s?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":s?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${c.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(a),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("home")}),(l=document.getElementById("res-replay"))==null||l.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function Vn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ct(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const At=173.7178,Qt=.5,Yn=1e-6,Nt=[{id:"bronze",label:"Bronze",emoji:"🥉",min:0,max:1199,color:"#cd7f32"},{id:"silver",label:"Argent",emoji:"🥈",min:1200,max:1499,color:"#a0a0a0"},{id:"gold",label:"Or",emoji:"🥇",min:1500,max:1799,color:"#D4A017"},{id:"platinum",label:"Platine",emoji:"💎",min:1800,max:2099,color:"#00e5ff"},{id:"diamond",label:"Diamant",emoji:"🔷",min:2100,max:2399,color:"#5b9bd5"},{id:"master",label:"Maître",emoji:"👑",min:2400,max:1/0,color:"#9b59b6"}];function Bt(e){return Nt.find(t=>e>=t.min&&e<=t.max)||Nt[0]}function Wn(e){const t=Bt(e);if(t.id==="master")return 100;const i=t.max-t.min+1;return Math.round((e-t.min)/i*100)}function To(e){return 1/Math.sqrt(1+3*e*e/(Math.PI*Math.PI))}function Jn(e,t,i){return 1/(1+Math.exp(-To(i)*(e-t)))}function Vi(e,t,i,n,d,s,r=!1){const c=(e-1e3)/At,f=t/At,a=(n-1e3)/At,o=d/At,l=To(o),b=Jn(c,a,o),h=1/(l*l*b*(1-b)),w=h*l*(s-b),p=Math.log(i*i),u=Y=>{const R=Math.exp(Y),F=f*f+h+R,ie=R*(w*w-F)/(2*F*F),ue=(Y-p)/(Qt*Qt);return ie-ue};let g=p,T=w*w>f*f+h?Math.log(w*w-f*f-h):function(){let Y=1;for(;u(p-Y*Qt)<0;)Y++;return p-Y*Qt}(),j=u(g),D=u(T),q=0;for(;Math.abs(T-g)>Yn&&q<100;){const Y=g+(g-T)*j/(D-j),R=u(Y);R*D<0?(g=T,j=D):j=j/2,T=Y,D=R,q++}const B=Math.exp(g/2),C=Math.sqrt(f*f+B*B),G=1/Math.sqrt(1/(C*C)+1/h),V=c+G*G*l*(s-b);let Q=Math.round(V*At+1e3);const se=Math.round(G*At*10)/10;if(r){const Y=Q-e;Q=e+Y*2}const re=Q-e;return{newMmr:Math.max(0,Q),newRd:Math.min(350,Math.max(30,se)),newSigma:B,delta:r?re:Math.round(re)}}async function wi(e,t,i=!1){var d,s,r,c;try{const f=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(o=>{const l=o.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&z.removeChannel(o)})}catch(a){console.warn("[Random] cleanup canaux:",a)}f&&await z.rpc("cancel_matchmaking",{p_user_id:f}).catch(()=>{})}catch{}const n=i&&((c=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:c.rankedData)||null;await pi(e,t,"random",({deckId:f,formation:a,starters:o,subsRaw:l,gcCardsEnriched:b,gcDefs:h,stadiumDef:w})=>{const p=u=>Xn(e,t,f,a,o,l,u,h||[],w,i,n);if(!b.length){p([]);return}ci(e,b,p)})}async function Xn(e,t,i,n,d,s,r=[],c=[],f=null,a=!1,o=null){var B,C;const{state:l,navigate:b,toast:h}=t;let w=!1,p=null;et(e);const u=(o==null?void 0:o.mmr)??((B=l.profile)==null?void 0:B.mmr)??1e3,g=a?Bt(u):null,T=a?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",j=a?(g==null?void 0:g.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${T};padding:24px;text-align:center">
      ${a?`<div style="font-size:36px">${(g==null?void 0:g.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${j};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${a?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${a?`<div style="font-size:13px;color:${(g==null?void 0:g.color)||"#D4A017"}">MMR : ${u} · ${(g==null?void 0:g.label)||""}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="font-size:11px;color:rgba(255,255,255,0.3)"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const D=async(G=!0)=>{w=!0,p&&(z.removeChannel(p),p=null),G&&await z.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(C=document.getElementById("mm-cancel"))==null||C.addEventListener("click",async()=>{try{await D(!0)}catch{}Ve(e),b("home")});const q=async(G,V,Q)=>{if(w)return;w=!0,p&&(z.removeChannel(p),p=null);const se=document.getElementById("mm-status");se&&(se.textContent="Adversaire trouvé !"),await new Promise(re=>setTimeout(re,600)),e.isConnected&&Ao(e,t,G,Q,r,c,a,o)};if(a){const G=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let V=0,Q=!1;const se=async()=>{if(w||Q)return;const{range:re}=G[V],Y=document.getElementById("mm-range");Y&&(Y.textContent=`Plage MMR : ±${re}`);const{data:R,error:F}=await z.rpc("try_matchmake_ranked",{p_user_id:l.profile.id,p_deck_id:i,p_mmr:u,p_range:re});if(w)return;if(F||!(R!=null&&R.success)){h("Erreur matchmaking ranked","error"),Ve(e),b("home");return}if(R.matched){Q=!0,q(R.match_id,R.opponent_id,!1);return}const ie=document.getElementById("mm-status");if(ie&&(ie.textContent="En attente d'un adversaire..."),p||(p=z.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},ue=>{const ye=ue.new;ye.status==="matched"&&ye.match_id&&!Q&&(Q=!0,q(ye.match_id,ye.matched_with,!0))}).subscribe()),V<G.length-1){const ue=G[V+1].delay-G[V].delay;V++,setTimeout(()=>{!w&&!Q&&se()},ue)}};await se()}else{const{data:G,error:V}=await z.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(V||!(G!=null&&G.success)){h("Erreur de matchmaking","error"),Ve(e),b("home");return}if(G.matched){q(G.match_id,G.opponent_id,!1);return}const Q=document.getElementById("mm-status");Q&&(Q.textContent="En attente d'un autre joueur..."),p=z.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},se=>{const re=se.new;re.status==="matched"&&re.match_id&&q(re.match_id,re.matched_with,!0)}).subscribe()}}async function Zn(e,t,i){const{state:n,navigate:d,toast:s}=t;try{(z.getChannels?z.getChannels():[]).forEach(a=>{const o=a.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&z.removeChannel(a)})}catch{}const{data:r}=await z.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){s("Match introuvable","error"),d("home");return}if(r.status==="finished"){s("Ce match est terminé","info"),d("home");return}const c=r.home_id===n.profile.id;Ao(e,t,i,c,[],[])}async function Ao(e,t,i,n,d=[],s=[],r=!1,c=null){const{state:f,navigate:a,toast:o}=t,l=n?"p1":"p2",b=n?"p2":"p1",h=(d||[]).map(_=>_.id),w=(d||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:p}=await z.from("matches").select("*").eq("id",i).single();if(!p){o("Match introuvable","error"),a("home");return}async function u(){const[{data:_},{data:A},{data:m},{data:y}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:p.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:p.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",p.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",p.away_id).single()]),x=M=>{const N=Number(M.evolution_bonus)||0;return{cardId:M.card_id,position:M.position,id:M.id,firstname:M.firstname,name:M.surname_encoded,country_code:M.country_code,club_id:M.club_id,job:M.job,job2:M.job2,note_g:(Number(M.note_g)||0)+(M.job==="GK"||M.job2==="GK"&&Number(M.note_g)>0?N:0),note_d:(Number(M.note_d)||0)+(M.job==="DEF"||M.job2==="DEF"&&Number(M.note_d)>0?N:0),note_m:(Number(M.note_m)||0)+(M.job==="MIL"||M.job2==="MIL"&&Number(M.note_m)>0?N:0),note_a:(Number(M.note_a)||0)+(M.job==="ATT"||M.job2==="ATT"&&Number(M.note_a)>0?N:0),evolution_bonus:N,rarity:M.rarity,skin:M.skin,hair:M.hair,hair_length:M.hair_length,clubName:M.club_encoded_name||null,clubLogo:M.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},$=((_==null?void 0:_.starters)||[]).map(M=>x(M)),v=((A==null?void 0:A.starters)||[]).map(M=>x(M)),k=(_==null?void 0:_.formation)||"4-4-2",L=(A==null?void 0:A.formation)||"4-4-2";let E=bt($,k),I=bt(v,L);const S=((_==null?void 0:_.subs)||[]).map(M=>x(M));return stadiumDef&&n&&(E=qt(E,stadiumDef),Ut(S,stadiumDef)),{p1Team:E,p2Team:I,p1Subs:S,p2Subs:((A==null?void 0:A.subs)||[]).map(M=>x(M)),p1Formation:k,p2Formation:L,p1Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?h:[],gc_p2:n?[]:h,gcCardsFull_p1:n?w:[],gcCardsFull_p2:n?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let g=p.game_state&&Object.keys(p.game_state).length?p.game_state:null;if(!g)if(n){g=await u();const{data:_}=await z.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await z.from("matches").update({game_state:g,turn_user_id:p.home_id}).eq("id",i):g=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let _=0;_<30&&!g;_++){await new Promise(m=>setTimeout(m,400));const{data:A}=await z.from("matches").select("game_state").eq("id",i).single();A!=null&&A.game_state&&Object.keys(A.game_state).length&&(g=A.game_state)}if(!g){o("Erreur de synchronisation","error"),a("home");return}g.gc_p2=h,g.gcCardsFull_p2=w,await z.from("matches").update({game_state:g}).eq("id",i)}let T=!1,j=null,D=!1;const q=new Set,B=new Set;async function C(_){var I,S;try{z.removeChannel(G)}catch{}const A=g[l+"Score"]||0,m=g[b+"Score"]||0;let y,x;_.winner_id?(y=_.winner_id===f.profile.id,x=!1):_.forfeit?(y=A>m,x=!1):(x=A===m,y=A>m);let $="";if(r&&n)try{const{data:M}=await z.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",p.home_id).single(),{data:N}=await z.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",p.away_id).single();if(M&&N){const ee=y?1:x?.5:0,O=1-ee,K=M.placement_matches<10,H=N.placement_matches<10,Z=Vi(M.mmr,M.mmr_deviation,M.mmr_volatility,N.mmr,N.mmr_deviation,ee===1?1:ee===0?0:.5,K),ae=Vi(N.mmr,N.mmr_deviation,N.mmr_volatility,M.mmr,M.mmr_deviation,O===1?1:O===0?0:.5,H);await z.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:x?null:y?p.home_id:p.away_id,p_home_id:p.home_id,p_away_id:p.away_id,p_home_delta:Z.delta,p_away_delta:ae.delta,p_home_new_rd:Z.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:Z.newSigma,p_away_new_vol:ae.newSigma});const pe=Z.delta,ce=Z.newMmr,ge=Bt(ce),be=pe>=0?"+":"",Se=pe>=0?"#4caf50":"#ff6b6b",Me=Bt(M.mmr);$=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">MMR Ranked</div>
              <div style="display:flex;align-items:center;justify-content:center;gap:10px">
                <div style="font-size:20px;color:rgba(255,255,255,0.5)">${M.mmr}</div>
                <div style="font-size:20px;font-weight:900;color:${Se}">${be}${pe}</div>
                <div style="font-size:20px;font-weight:900;color:#fff">= ${ce}</div>
              </div>
              ${ge.id!==Me.id?`
              <div style="margin-top:8px;font-size:14px;font-weight:700;color:${ge.color}">
                ${ce>M.mmr?"📈":"📉"} ${Me.emoji} → ${ge.emoji} ${ge.label}
              </div>`:`<div style="font-size:12px;color:${ge.color};margin-top:4px">${ge.emoji} ${ge.label}</div>`}
              ${K?'<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">Match de placement ×2</div>':""}
            </div>`}}catch(M){console.error("[Ranked] MMR update error:",M)}(I=document.getElementById("pvp-end-overlay"))==null||I.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const k=x?"🤝":y?"🏆":"😞",L=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",E=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${k}</div>
      <div style="font-size:26px;font-weight:900;color:${E}">${L}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${g[l+"Name"]} ${A} – ${m} ${g[b+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${$}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(S=v.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{v.remove(),Ve(e),a("home")})}const G=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const A=_.new;try{if(A.status==="finished"||A.forfeit){if(T)return;T=!0,j&&(clearInterval(j),j=null),A.game_state&&(g=A.game_state),C(A);return}if(A.game_state){const m=g;g=A.game_state;const y=g._lastGC;if(y&&y.seq&&!B.has(y.seq)&&(B.add(y.seq),y.by!==l)){Le(y.type,y.by,()=>ie());return}const x=m[l+"Score"]||0,$=m[b+"Score"]||0,v=g[l+"Score"]||0,k=g[b+"Score"]||0,L=v>x,E=k>$;if((L||E)&&!q.has(g.round)){q.add(g.round);const I=[...g.log||[]].reverse().find(M=>M.isGoal),S=((I==null?void 0:I.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));xe(S,v,k,L,()=>ie());return}ie()}}catch(m){console.error("[PvP] crash:",m)}}).subscribe();async function V(_){Object.assign(g,_),g.lastActionAt=new Date().toISOString();const{error:A}=await z.from("matches").update({game_state:g}).eq("id",i);A&&o("Erreur de synchronisation","error");try{ie()}catch(m){console.error("[PvP] renderPvpScreen crash:",m)}}async function Q(){if(T)return;T=!0,j&&(clearInterval(j),j=null);const _=n?p.away_id:p.home_id,A=n?"p2":"p1",m=n?"p1":"p2",y={...g,[A+"Score"]:3,[m+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{z.removeChannel(G)}catch{}setTimeout(()=>{Ve(e),a("home")},800)}const se={BOOST_STAT:({value:_=1,count:A=1,roles:m=[]},y,x)=>{const $=y[l+"Team"],v=Object.entries($).filter(([k])=>!m.length||m.includes(k)).flatMap(([k,L])=>L.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!v.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}re(v,A,`Choisir ${A} joueur(s) à booster (+${_})`,k=>{k.forEach(L=>{const E=($[L._line]||[]).find(I=>I.cardId===L.cardId);E&&(E.boost=(E.boost||0)+_,y.log.push({text:`⚡ +${_} sur ${E.name}`,type:"info"}))}),y[l+"Team"]=$,x(y)})},DEBUFF_STAT:({value:_=1,count:A=1,roles:m=[],target:y="ai"},x,$)=>{const v=y==="home"?l:b,k=x[v+"Team"],L=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,S])=>S.map(M=>({...M,_line:I})));if(!E.length){x.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),$(x);return}re(E,A,`Choisir ${A} joueur(s) ${L}(s) (-${_})`,I=>{I.forEach(S=>{const M=(k[S._line]||[]).find(N=>N.cardId===S.cardId);M&&(M.boost=(M.boost||0)-_,x.log.push({text:`🎯 -${_} sur ${M.name}`,type:"info"}))}),x[v+"Team"]=k,$(x)})},GRAY_PLAYER:({count:_=1,roles:A=[],target:m="ai"},y,x)=>{const $=m==="home"?l:b,v=y[$+"Team"],k=m==="home"?"allié":"adverse",L=Object.entries(v).filter(([E])=>!A.length||A.includes(E)).flatMap(([E,I])=>I.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),x(y);return}re(L,_,`Choisir ${_} joueur(s) ${k}(s) à exclure`,E=>{const I="usedCardIds_"+$,S=new Set(y[I]||[]);E.forEach(M=>{const N=(v[M._line]||[]).find(ee=>ee.cardId===M.cardId);N&&(N.used=!0,S.add(M.cardId),y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[I]=[...S],y[$+"Team"]=v,x(y)})},REVIVE_PLAYER:({count:_=1,roles:A=[]},m,y)=>{const x=m[l+"Team"],$=Object.entries(x).filter(([v])=>!A.length||A.includes(v)).flatMap(([v,k])=>k.filter(L=>L.used).map(L=>({...L,_line:v})));if(!$.length){m.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(m);return}re($,_,`Choisir ${_} joueur(s) à ressusciter`,v=>{v.forEach(k=>{const L=(x[k._line]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!1,m.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),m[l+"Team"]=x,y(m)})},REMOVE_GOAL:({},_,A)=>{const m=b+"Score";_[m]>0?(_[m]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),A(_)},ADD_GOAL_DRAW:({},_,A)=>{_[l+"Score"]===_[b+"Score"]?(_[l+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),A(_)},ADD_SUB:({value:_=1},A,m)=>{A.maxSubs=(A.maxSubs||3)+_,A.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),m(A)},CUSTOM:({},_,A)=>A(_)};function re(_,A,m,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function v(){var L,E;const k=_.map(I=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",M=ze(I,I._line)+(I.boost||0),ee=$.find(K=>K.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ee};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${m}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${A}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${A})
          </button>
        </div>`,(L=x.querySelector("#pp-close"))==null||L.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const S=I.dataset.cid,M=_.find(ee=>ee.cardId===S),N=$.findIndex(ee=>ee.cardId===S);M&&(N>-1?$.splice(N,1):$.length<A&&$.push(M),v())})}),(E=x.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{x.remove(),y($)})}v(),document.body.appendChild(x)}async function Y(_,A){const y=(g["gcCardsFull_"+l]||[]).find(k=>k.id===_),x=(y==null?void 0:y._gcDef)||(g.gcDefs||[]).find(k=>{var L;return k.name===A||((L=k.name)==null?void 0:L.toLowerCase().trim())===(A==null?void 0:A.toLowerCase().trim())}),$=[...g["usedGc_"+l]||[],_],v={type:A,by:l,seq:(g._gcAnimSeq||0)+1};B.add(v.seq),Le(A,l,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const L=se[x.effect_type];if(L){const E={...g};L(x.effect_params||{},E,async I=>{I["usedGc_"+l]=$,I._lastGC=v,I._gcAnimSeq=v.seq,await V(I)});return}}const k={...g};switch(A){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=b+"Score";k[L]>0&&(k[L]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+l]=$,k._lastGC=v,k._gcAnimSeq=v.seq,await V(k)})}function R(_,A){const m="usedCardIds_"+_,y=new Set(g[m]||[]);A.forEach(x=>y.add(x)),g[m]=[...y]}function F(){for(const _ of["p1","p2"]){const A=new Set(g["usedCardIds_"+_]||[]),m=g[_+"Team"];if(m)for(const y of["GK","DEF","MIL","ATT"])(m[y]||[]).forEach(x=>{x.used=A.has(x.cardId)})}}function ie(){var Ke,Ze,it,ut,ft,gt;if(g.phase==="reveal")return ue();if(g.phase==="midfield")return me();if(g.phase==="finished")return je();const _=g[l+"Team"],A=g[b+"Team"];F();const m=g[l+"Score"],y=g[b+"Score"],x=g[l+"Name"],$=g[b+"Name"],v=g.phase===l+"-attack",k=g.phase===l+"-defense",L=Array.isArray(g["selected_"+l])?g["selected_"+l]:[],E=L.map(P=>P.cardId),I=window.innerWidth>=700,S=g[l+"Subs"]||[],M=g["usedSubIds_"+l]||[],N=S.filter(P=>!M.includes(P.cardId)),ee=g["gcCardsFull_"+l]||[],O=g["usedGc_"+l]||[],K=ee.filter(P=>!O.includes(P.id)),H=g.boostOwner===l&&!g.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(P=>(A[P]||[]).some(le=>!le.used)),ae=[..._.MIL||[],..._.ATT||[]].filter(P=>!P.used),pe=v&&Z&&ae.length===0?[..._.GK||[],..._.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];function ce(P,le,X){var lt,wt;const oe=P._gcDef,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[oe==null?void 0:oe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[oe==null?void 0:oe.color]||"#b06ce0",Xe=(oe==null?void 0:oe.name)||P.gc_type,Qe=(oe==null?void 0:oe.effect)||((lt=Re[P.gc_type])==null?void 0:lt.desc)||"",ot=oe!=null&&oe.image_url?`/icons/${oe.image_url}`:null,dt=((wt=Re[P.gc_type])==null?void 0:wt.icon)||"⚡",mt=Math.round(X*.22),vt=Math.round(X*.22),rt=X-mt-vt,Tt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${P.id}" data-gc-type="${P.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${X}px;border-radius:10px;border:2px solid ${_e};background:${Ae};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${mt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Tt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${le-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${rt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ot?`<img src="${ot}" style="max-width:${le-10}px;max-height:${rt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(rt*.55)}px">${dt}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Qe.slice(0,38)}</span>
        </div>
      </div>`}function ge(P,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${P}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${g.boostValue}</div>
      </div>`}const be=(P,le)=>le?ge(130,175):ce(P,130,175),Se=(P,le)=>le?ge(68,95):ce(P,68,95),Me=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?$e(l)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Ee=v&&!$e(l)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${N.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':N.map(P=>`<div class="pvp-sub-btn" data-sub-id="${P.cardId}" style="cursor:pointer;flex-shrink:0">${We(P,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Ie=v?"attack":k?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(_,g[l+"Formation"],Ie,E,300,300,pe)}
      </div>
    </div>`;function Ne(P){if(P.type==="duel"&&(P.homeTotal!=null||P.aiTotal!=null)){const le=(P.homeTotal||0)>=(P.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(P.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.homePlayers||[]).map(X=>at(X)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${P.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${P.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.aiPlayers||[]).map(X=>at(X)).join("")}
            </div>
          </div>
          ${P.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${P.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${P.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${P.type==="goal"?700:400};padding:3px 2px">${P.text||""}</div>`}const Je=(()=>{var le,X;if(k&&((le=g.pendingAttack)!=null&&le.players)){const oe=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${tt((oe.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",oe.total)}
        </div>`}if(v&&((X=g.pendingAttack)!=null&&X.players)){const oe=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((oe.players||[]).map(Ae=>({...Ae,used:!1})),"#00ff88",oe.total)}
        </div>`}const P=(g.log||[]).slice(-1)[0];return P?'<div style="padding:2px 4px">'+Ne(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),He=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${m} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(g.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ge}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${Ee}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${K.map(P=>be(P,!1)).join("")}
            ${H?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(_,g[l+"Formation"],Ie,E,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(P=>Se(P,!1)).join("")}
            ${H?Se(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&N.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&N.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&N.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&N.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${N.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(g["usedSubIds_"+l]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(g["usedSubIds_"+l]||[]).length}/${g.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Ee}</div>
        </div>
      </div>`;function Be(){const P=e.querySelector(".match-screen");if(!P)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.height=le+"px",P.style.minHeight=le+"px",P.style.maxHeight=le+"px",P.style.overflow="hidden";const X=e.querySelector("#mobile-action-bar"),oe=e.querySelector("#mobile-play-area");X&&oe&&(oe.style.paddingBottom=X.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>{if(!v&&!k)return;const le=P.dataset.cardId,X=P.dataset.role,oe=(_[X]||[]).find(Qe=>Qe.cardId===le);if(!oe||oe.used)return;const Ae=pe.includes(le);if(v&&!["MIL","ATT"].includes(X)&&!Ae)return;Array.isArray(g["selected_"+l])||(g["selected_"+l]=[]);const _e=g["selected_"+l],Xe=_e.findIndex(Qe=>Qe.cardId===le);Xe>-1?_e.splice(Xe,1):_e.length<3&&_e.push({...oe,_role:X}),ie()})}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>we(P.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(P=>{P.addEventListener("click",()=>we())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>we()),e.querySelectorAll(".pvp-gc-mini").forEach(P=>{P.addEventListener("click",()=>Fe(P.dataset.gcId,P.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>Ce()),(it=e.querySelector("#pvp-action"))==null||it.addEventListener("click",P=>{v?P.currentTarget.dataset.pass==="1"||!$e(l)?U():te():k&&J()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Q()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>ne()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>fe()),j&&(clearInterval(j),j=null),(v||k)&&!T){let P=30,le=!1;const X=()=>document.getElementById("pvp-timer"),oe=()=>{X()&&(X().textContent=P+"s",X().style.color=le?"#ff4444":"#fff")};oe(),j=setInterval(()=>{P--,P<0?le?(clearInterval(j),j=null,v&&!$e(l)?U():Q()):(le=!0,P=15,oe()):oe()},1e3)}}function ue(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${g[b+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(g[b+"Team"],g[b+"Formation"],null,[],300,300)}</div>
    </div>`,l==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let ye=!1;function me(){if(ye)return;const _=g[l+"Team"].MIL||[],A=g[b+"Team"].MIL||[];function m(K){return K.reduce((H,Z)=>H+ze(Z,"MIL"),0)}function y(K){let H=0;for(let Z=0;Z<K.length-1;Z++){const ae=nt(K[Z],K[Z+1]);ae==="#00ff88"?H+=2:ae==="#FFD700"&&(H+=1)}return H}const x=m(_)+y(_),$=m(A)+y(A),v=x>=$;function k(K,H,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((ae,pe)=>{const ce=pe<K.length-1?nt(ae,K[pe+1]):null,ge=!ce||ce==="#ff3333"||ce==="#cc2222",be=ce==="#00ff88"?"+2":ce==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ae,note:ze(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<K.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":ce};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${ce}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ce}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${m(K)} + ${y(K)} liens = <b style="color:#fff">${m(K)+y(K)}</b>
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
      ${k(_,g[l+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(A,g[b+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(K,H)=>e.querySelectorAll(K).forEach((Z,ae)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},H+ae*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,H)=>setTimeout(()=>{K.style.opacity="1"},H*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function E(K,H,Z){const ae=document.getElementById(K);if(!ae)return;const pe=performance.now(),ce=ge=>{const be=Math.min(1,(ge-pe)/Z);ae.textContent=Math.round(H*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(ce):ae.textContent=H};requestAnimationFrame(ce)}setTimeout(()=>{E("pvp-score-me",x,800),E("pvp-score-opp",$,800)},1500);const I=g.p1Team.MIL||[],S=g.p2Team.MIL||[],M=m(I)+y(I),N=m(S)+y(S),ee=M>=N?"p1":"p2";let O=g.boostValue;O==null&&(O=li(),g.boostValue=O,g.boostOwner=ee,g.boostUsed=!1),ye=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(v?"me":"opp")),H=e.querySelector("#duel-row-"+(v?"opp":"me")),Z=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),pe=v?Z:ae,ce=v?ae:Z;pe&&(pe.style.fontSize="80px",pe.style.color=v?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ce&&(ce.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const be=g.boostOwner===l?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=l==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+g[l+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+g[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Se,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Oe=ee;await V({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:O,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function xe(_,A,m,y,x){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(I,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${v}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${A} – ${m}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let L=!1;const E=()=>{L||(L=!0,$.remove(),setTimeout(()=>x(),50))};$.addEventListener("click",E),setTimeout(E,3500)}function Le(_,A,m){var O,K;const y=(g.gcDefs||[]).find(H=>{var Z;return H.name===_||((Z=H.name)==null?void 0:Z.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",v=(y==null?void 0:y.name)||_,k=(y==null?void 0:y.effect)||((O=Re[_])==null?void 0:O.desc)||"",L=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((K=Re[_])==null?void 0:K.icon)||"⚡",S=A===l?"Vous":g[A+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let N=!1;const ee=()=>{N||(N=!0,M.remove(),setTimeout(()=>m&&m(),50))};M.addEventListener("click",ee),setTimeout(ee,3e3)}function Fe(_,A){var M,N,ee,O;const y=(g["gcCardsFull_"+l]||[]).find(K=>K.id===_),x=y==null?void 0:y._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",k=(x==null?void 0:x.name)||A,L=(x==null?void 0:x.effect)||((M=Re[A])==null?void 0:M.desc)||"Carte spéciale.",E=x!=null&&x.image_url?`/icons/${x.image_url}`:null,I=((N=Re[A])==null?void 0:N.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(ee=S.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),Y(_,A)})}function Ce(){var y;const _=g[l+"Team"],A=Object.entries(_).flatMap(([x,$])=>($||[]).filter(v=>!v.used).map(v=>({...v,_line:x})));if(!A.length)return;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",m.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${g.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${A.map(x=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",v=ze(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(m),(y=m.querySelector("#bp-close"))==null||y.addEventListener("click",()=>m.remove()),m.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const $=x.dataset.cid,v=A.find(L=>L.cardId===$);if(!v)return;const k=(_[v._line]||[]).find(L=>L.cardId===$);k&&(k.boost=(k.boost||0)+g.boostValue),m.remove(),await V({[l+"Team"]:_,boostUsed:!0})})})}function we(_=null){var N,ee;if(!(g.phase===l+"-attack")){o("Remplacement uniquement avant votre attaque","warning");return}const m=g[l+"Team"],y=g["usedSubIds_"+l]||[],x=g.maxSubs||3;if(y.length>=x){o(`Maximum ${x} remplacements atteint`,"warning");return}const $=Object.entries(m).flatMap(([O,K])=>(K||[]).filter(H=>H.used).map(H=>({...H,_line:O}))),v=(g[l+"Subs"]||[]).filter(O=>!y.includes(O.cardId));if(!$.length){o("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){o("Aucun remplaçant disponible","warning");return}let k=Math.max(0,$.findIndex(O=>O.cardId===_));const L=((N=$[k])==null?void 0:N._line)||((ee=$[k])==null?void 0:ee.job);let E=Math.max(0,v.findIndex(O=>O.job===L)),I=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var ce,ge,be,Se,Me,Oe;const O=$[k],K=v[E],H=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(H*1.35),ae=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},H,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(E>=v.length-1)}" ${E>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${O?We({...O,used:!1,boost:0},H,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(k>=$.length-1)}" ${k>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ce=S.querySelector("#psub-close"))==null||ce.addEventListener("click",()=>S.remove()),(ge=S.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{k>0&&(k--,M())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{k<$.length-1&&(k++,M())}),(Se=S.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{E>0&&(E--,M())}),(Me=S.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{E<v.length-1&&(E++,M())});const pe=(Ee,Ge,Ie,Ue)=>{const Ne=S.querySelector("#"+Ee);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",He=>{Je=He.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",He=>{const Be=He.changedTouches[0].clientY-Je;if(Math.abs(Be)<30)return;const Ke=Ge();Be<0&&Ke<Ue-1?(Ie(Ke+1),M()):Be>0&&Ke>0&&(Ie(Ke-1),M())},{passive:!0})};pe("pin-panel",()=>E,Ee=>E=Ee,v.length),pe("pout-panel",()=>k,Ee=>k=Ee,$.length),(Oe=S.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),I)return;I=!0;const Ge=$[k],Ie=v[E];if(!Ge||!Ie)return;const Ue=Ge._line,Ne=(m[Ue]||[]).findIndex(Be=>Be.cardId===Ge.cardId);if(Ne===-1){o("Erreur : joueur introuvable","error"),S.remove();return}const Je={...Ie,_line:Ue,position:Ge.position,used:!1,boost:0};m[Ue].splice(Ne,1,Je);const He=[...y,Ie.cardId];S.remove(),W(Ge,Ie,async()=>{await V({[l+"Team"]:m,[b+"Team"]:g[b+"Team"],["usedSubIds_"+l]:He})})})}document.body.appendChild(S),M()}function W(_,A,m){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(L,E,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(L)?`<img src="${Pe(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(A,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const k=()=>{v||(v=!0,x.remove(),setTimeout(()=>m(),50))};x.addEventListener("click",k),setTimeout(k,2200)}function ne(){var A;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${g[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(g[b+"Team"],g[b+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(A=_.querySelector("#pvp-opp-close"))==null||A.addEventListener("click",()=>_.remove())}function fe(){var m;const _=g.log||[],A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",A.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(A),(m=A.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>A.remove())}async function U(){if(g.phase!==l+"-attack")return;const _=l==="p1"?"p2":"p1",A=(g.round||0)+1,m=[...g.log||[]];m.push({type:"info",text:`⏭️ ${g[l+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=he(g),x=$e(_),$=y||!x?"finished":_+"-attack";await V({["selected_"+l]:[],modifiers:{...g.modifiers,[l]:{}},pendingAttack:null,phase:$,attacker:_,round:A,log:m}),$==="finished"&&await qe(g)}async function te(){const _=g[l+"Team"],A=!["GK","DEF","MIL","ATT"].some($=>(g[b+"Team"][$]||[]).some(v=>!v.used)),m=(g["selected_"+l]||[]).map($=>{const v=(_[$._role]||[]).find(M=>M.cardId===$.cardId)||$,k=A&&["GK","DEF"].includes($._role),L=_[$._role]||[],E=L.findIndex(M=>M.cardId===$.cardId),I=st(L.length),S=E>=0?I[E]:v._col??1;return{...v,_line:$._role,_col:S,...k?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!m.length)return;const y=Vt(m,g.modifiers[l]||{});R(l,m.map($=>$.cardId)),m.forEach($=>{const v=(_[$._role]||[]).find(k=>k.cardId===$.cardId);v&&(v.used=!0)}),g["selected_"+l]=[],ie();const x=[...g.log||[]];if(A){const $=(g[l+"Score"]||0)+1,v=m.map(S=>({name:S.name,note:ze(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:y.total,aiTotal:0});const k=(g.round||0)+1,L=l==="p1"?"p2":"p1",E={...g,[l+"Team"]:_,[l+"Score"]:$},I=he(E);q.add(k),xe(v,$,g[b+"Score"]||0,!0,async()=>{await V({[l+"Team"]:_,[l+"Score"]:$,["selected_"+l]:[],modifiers:{...g.modifiers,[l]:{}},pendingAttack:null,phase:I?"finished":L+"-attack",attacker:L,round:k,log:x}),I&&await qe({...g,[l+"Score"]:$})});return}x.push({type:"pending",text:`⚔️ ${g[l+"Name"]} attaque (${y.total})`}),await V({[l+"Team"]:_,[b+"Team"]:g[b+"Team"],pendingAttack:{...y,players:m,side:l},["selected_"+l]:[],modifiers:{...g.modifiers,[l]:{}},phase:b+"-defense",log:x})}async function J(){const _=g[l+"Team"],A=(g["selected_"+l]||[]).map(O=>{const K=(_[O._role]||[]).find(ce=>ce.cardId===O.cardId)||O,H=_[O._role]||[],Z=H.findIndex(ce=>ce.cardId===O.cardId),ae=st(H.length),pe=Z>=0?ae[Z]:K._col??1;return{...K,_line:O._role,_col:pe}}),m=Yt(A,g.modifiers[l]||{});R(l,A.map(O=>O.cardId)),A.forEach(O=>{const K=(_[O._role]||[]).find(H=>H.cardId===O.cardId);K&&(K.used=!0)}),g["selected_"+l]=[],ie();const y=Wt(g.pendingAttack.total,m.total,g.modifiers[l]||{}),x=g.pendingAttack.side,$=y==="attack"||(y==null?void 0:y.goal),v=x==="p1"?"p2":"p1",k=(g.round||0)+1,L=(g.pendingAttack.players||[]).map(O=>({name:O.name,note:ze(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),E=[...g.log||[]];E.push({type:"duel",isGoal:$,homeScored:$&&x===l,text:$?`⚽ BUT de ${g[x+"Name"]} ! (${g.pendingAttack.total} vs ${m.total})`:`✋ Attaque stoppée (${g.pendingAttack.total} vs ${m.total})`,homePlayers:L,aiPlayers:A.map(O=>({name:O.name,note:ze(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:g.pendingAttack.total,aiTotal:m.total});const I=$?(g[x+"Score"]||0)+1:g[x+"Score"]||0,S={...g,[l+"Team"]:_,[x+"Score"]:I},M=he(S),N=M?"finished":v+"-attack",ee=async()=>{await V({[l+"Team"]:_,[b+"Team"]:g[b+"Team"],[x+"Score"]:I,["selected_"+l]:[],modifiers:{...g.modifiers,[l]:{}},pendingAttack:null,phase:N,attacker:v,round:k,log:E}),(N==="finished"||M)&&await qe({...g,[x+"Score"]:I})};if($){const O=x===l,K=O?I:g[l+"Score"]||0,H=O?g[b+"Score"]||0:I;q.add(k),xe(L,K,H,O,ee)}else await ee()}function de(_){return["MIL","ATT"].some(A=>(_[A]||[]).some(m=>!m.used))}function ve(_){return["GK","DEF","MIL","ATT"].some(A=>(_[A]||[]).some(m=>!m.used))}function Te(_){return ve(_)&&!de(_)}function $e(_){const A=g[_+"Team"],m=g[(_==="p1"?"p2":"p1")+"Team"];return!!(de(A)||!ve(m)&&Te(A))}function he(_){const A=["MIL","ATT"].some(E=>(_.p1Team[E]||[]).some(I=>!I.used)),m=["MIL","ATT"].some(E=>(_.p2Team[E]||[]).some(I=>!I.used)),y=ve(_.p1Team),x=ve(_.p2Team);return!A&&!(!x&&y)&&(!m&&!(!y&&x))}function ke(_){const A=_.p1Score||0,m=_.p2Score||0;return A===m?null:A>m?p.home_id:p.away_id}async function qe(_){try{const A=ke(_),m=A?p.home_id===A?p.away_id:p.home_id:null;await z.from("matches").update({status:"finished",winner_id:A,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),A&&m&&updateEvolutiveCards(A,m).catch(()=>{})}catch(A){console.error("[PvP] finishMatch:",A)}}function je(){var x;const _=g[l+"Score"],A=g[b+"Score"],m=_>A,y=_===A;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${m?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${m?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${A}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{z.removeChannel(G)}catch{}Ve(e),a("home")})}ie()}const Qn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:wi,resumePvpMatch:Zn},Symbol.toStringTag,{value:"Module"}));async function er(e,t,i,n){var d,s;try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&z.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await z.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await z.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await pi(e,t,"random",({deckId:r,formation:c,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:l,stadiumDef:b})=>{const h=w=>tr(e,t,r,c,f,a,w,l||[],i,n);if(!o.length){h([]);return}ci(e,o,h)})}async function tr(e,t,i,n,d,s,r=[],c=[],f,a){var V;const{state:o,navigate:l,toast:b}=t,h=o.profile.id;let w=!1,p=null;et(e);try{await z.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await z.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const u=(Q,se,re,Y)=>{var R;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${se?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${se?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${se?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${a}</div>
            <div style="font-size:11px;color:${se?"#22c55e":"#aaa"}">${se?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!se&&Q?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",async()=>{w=!0,p&&(z.removeChannel(p),p=null),re&&await z.from("friend_match_invites").update({status:"declined"}).eq("id",re),Ve(e),l("home")})},g=async(Q,se)=>{w=!0,p&&(z.removeChannel(p),p=null),await new Promise(re=>setTimeout(re,600)),e.isConnected&&ir(e,t,Q,se,r,c)},{data:T}=await z.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${h},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${h})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let j,D;if(T&&T.inviter_id===f)D=!1,j=T.id,await z.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",j);else{D=!0;const{data:Q,error:se}=await z.from("friend_match_invites").insert({inviter_id:h,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(se||!Q){b("Erreur création invitation","error"),Ve(e),l("home");return}j=Q.id}if(u(!0,!D,j),!D){const Q={home_id:f,away_id:h,home_deck_id:T.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},se=await z.from("matches").insert(Q).select().single(),re=se.data;if(!re){b("Erreur création match: "+(((V=se.error)==null?void 0:V.message)||""),"error"),Ve(e),l("home");return}await z.from("friend_match_invites").update({match_id:re.id,status:"matched"}).eq("id",j),g(re.id,!1);return}let q=!1;const B=Q=>{w||q||(Q.status==="matched"&&Q.match_id?(q=!0,clearInterval(C),clearInterval(G),g(Q.match_id,!0)):Q.status==="declined"?(clearInterval(C),clearInterval(G),b(`${a} a décliné l'invitation`,"warning"),Ve(e),l("home")):Q.invitee_ready&&u(!0,!0,j))},C=setInterval(()=>{if(w){clearInterval(C);return}z.from("matchmaking_queue").delete().eq("user_id",h).then(()=>{},()=>{})},3e3),G=setInterval(async()=>{if(w||q){clearInterval(G);return}const{data:Q}=await z.from("friend_match_invites").select("*").eq("id",j).maybeSingle();Q&&B(Q)},1200);p=z.channel("friend-invite-"+j).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${j}`},Q=>B(Q.new)).subscribe()}async function ir(e,t,i,n,d=[],s=[]){const{state:r,navigate:c,toast:f}=t,a=n?"p1":"p2",o=n?"p2":"p1",l=(d||[]).map(_=>_.id),b=(d||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await z.from("matches").select("*").eq("id",i).single();if(!h){f("Match introuvable","error"),c("home");return}async function w(){const[{data:_},{data:A},{data:m},{data:y}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]),x=E=>{const I=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?I:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?I:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?I:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?I:0),evolution_bonus:I,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},$=((_==null?void 0:_.starters)||[]).map(E=>x(E)),v=((A==null?void 0:A.starters)||[]).map(E=>x(E)),k=(_==null?void 0:_.formation)||"4-4-2",L=(A==null?void 0:A.formation)||"4-4-2";return{p1Team:(()=>{const E=bt($,k);return stadiumDef?qt(E,stadiumDef):E})(),p2Team:bt(v,L),p1Subs:(()=>{const E=((_==null?void 0:_.subs)||[]).map(I=>x(I));return stadiumDef&&Ut(E,stadiumDef),E})(),p2Subs:((A==null?void 0:A.subs)||[]).map(E=>x(E)),p1Formation:k,p2Formation:L,p1Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?l:[],gc_p2:n?[]:l,gcCardsFull_p1:n?b:[],gcCardsFull_p2:n?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let p=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(!p)if(n){p=await w();const{data:_}=await z.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await z.from("matches").update({game_state:p,turn_user_id:h.home_id}).eq("id",i):p=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let _=0;_<60&&!p;_++){await new Promise(m=>setTimeout(m,400));const{data:A}=await z.from("matches").select("game_state").eq("id",i).single();A!=null&&A.game_state&&Object.keys(A.game_state).length&&(p=A.game_state)}if(!p){f("Erreur de synchronisation","error"),c("home");return}p.gc_p2=l,p.gcCardsFull_p2=b,await z.from("matches").update({game_state:p}).eq("id",i)}let u=!1,g=!1,T=!1,j=null,D=!1;const q=new Set,B=new Set;function C(_){var E,I;try{z.removeChannel(G)}catch{}const A=p[a+"Score"]||0,m=p[o+"Score"]||0;if(!T){T=!0;const S=_.winner_id||(A>m?r.profile.id:m>A?"opp":null),M=S===r.profile.id?"win":S?"loss":null;M&&si(()=>Promise.resolve().then(()=>co),void 0).then(N=>N.applyOwnEvolution(r.profile.id,M)).catch(()=>{})}if(!g){const S=p.p1Score||0,M=p.p2Score||0,N=(p.usedGc_p1||[]).length,ee=(p.usedGc_p2||[]).length,O=_.winner_id||(S>M?h.home_id:M>S?h.away_id:null);(O?r.profile.id===O:r.profile.id<(n?h.away_id:h.home_id))&&(g=!0,oo({player1Id:h.home_id,player2Id:h.away_id,score1:S,score2:M,gc1:N,gc2:ee}).catch(H=>console.warn("[FriendMatch] updateStats:",H)))}let y,x;_.winner_id?(y=_.winner_id===r.profile.id,x=!1):_.forfeit?(y=A>m,x=!1):(x=A===m,y=A>m),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=x?"🤝":y?"🏆":"😞",k=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",L=x?"#fff":y?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${k}</div>
      <div style="font-size:18px">${p[a+"Name"]} ${A} – ${m} ${p[o+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild($),(I=$.querySelector("#pvp-end-home"))==null||I.addEventListener("click",()=>{$.remove(),Ve(e),c("home")})}const G=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const A=_.new;try{if(A.status==="finished"||A.forfeit){if(u)return;u=!0,j&&(clearInterval(j),j=null),A.game_state&&(p=A.game_state),C(A);return}if(A.game_state){const m=p;p=A.game_state;const y=p._lastGC;if(y&&y.seq&&!B.has(y.seq)&&(B.add(y.seq),y.by!==a)){Le(y.type,y.by,()=>ie());return}const x=m[a+"Score"]||0,$=m[o+"Score"]||0,v=p[a+"Score"]||0,k=p[o+"Score"]||0,L=v>x,E=k>$;if((L||E)&&!q.has(p.round)){q.add(p.round);const I=[...p.log||[]].reverse().find(M=>M.isGoal),S=((I==null?void 0:I.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));xe(S,v,k,L,()=>ie());return}ie()}}catch(m){console.error("[PvP] crash:",m)}}).subscribe();async function V(_){Object.assign(p,_),p.lastActionAt=new Date().toISOString();const{error:A}=await z.from("matches").update({game_state:p}).eq("id",i);A&&f("Erreur de synchronisation","error");try{ie()}catch(m){console.error("[PvP] renderPvpScreen crash:",m)}}async function Q(){if(u)return;u=!0,j&&(clearInterval(j),j=null);const _=n?h.away_id:h.home_id,A=n?"p2":"p1",m=n?"p1":"p2",y={...p,[A+"Score"]:3,[m+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{z.removeChannel(G)}catch{}setTimeout(()=>{Ve(e),c("home")},800)}const se={BOOST_STAT:({value:_=1,count:A=1,roles:m=[]},y,x)=>{const $=y[a+"Team"],v=Object.entries($).filter(([k])=>!m.length||m.includes(k)).flatMap(([k,L])=>L.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!v.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}re(v,A,`Choisir ${A} joueur(s) à booster (+${_})`,k=>{k.forEach(L=>{const E=($[L._line]||[]).find(I=>I.cardId===L.cardId);E&&(E.boost=(E.boost||0)+_,y.log.push({text:`⚡ +${_} sur ${E.name}`,type:"info"}))}),y[a+"Team"]=$,x(y)})},DEBUFF_STAT:({value:_=1,count:A=1,roles:m=[],target:y="ai"},x,$)=>{const v=y==="home"?a:o,k=x[v+"Team"],L=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([I])=>!m.length||m.includes(I)).flatMap(([I,S])=>S.map(M=>({...M,_line:I})));if(!E.length){x.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),$(x);return}re(E,A,`Choisir ${A} joueur(s) ${L}(s) (-${_})`,I=>{I.forEach(S=>{const M=(k[S._line]||[]).find(N=>N.cardId===S.cardId);M&&(M.boost=(M.boost||0)-_,x.log.push({text:`🎯 -${_} sur ${M.name}`,type:"info"}))}),x[v+"Team"]=k,$(x)})},GRAY_PLAYER:({count:_=1,roles:A=[],target:m="ai"},y,x)=>{const $=m==="home"?a:o,v=y[$+"Team"],k=m==="home"?"allié":"adverse",L=Object.entries(v).filter(([E])=>!A.length||A.includes(E)).flatMap(([E,I])=>I.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),x(y);return}re(L,_,`Choisir ${_} joueur(s) ${k}(s) à exclure`,E=>{const I="usedCardIds_"+$,S=new Set(y[I]||[]);E.forEach(M=>{const N=(v[M._line]||[]).find(ee=>ee.cardId===M.cardId);N&&(N.used=!0,S.add(M.cardId),y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[I]=[...S],y[$+"Team"]=v,x(y)})},REVIVE_PLAYER:({count:_=1,roles:A=[]},m,y)=>{const x=m[a+"Team"],$=Object.entries(x).filter(([v])=>!A.length||A.includes(v)).flatMap(([v,k])=>k.filter(L=>L.used).map(L=>({...L,_line:v})));if(!$.length){m.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(m);return}re($,_,`Choisir ${_} joueur(s) à ressusciter`,v=>{v.forEach(k=>{const L=(x[k._line]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!1,m.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),m[a+"Team"]=x,y(m)})},REMOVE_GOAL:({},_,A)=>{const m=o+"Score";_[m]>0?(_[m]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),A(_)},ADD_GOAL_DRAW:({},_,A)=>{_[a+"Score"]===_[o+"Score"]?(_[a+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),A(_)},ADD_SUB:({value:_=1},A,m)=>{A.maxSubs=(A.maxSubs||3)+_,A.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),m(A)},CUSTOM:({},_,A)=>A(_)};function re(_,A,m,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function v(){var L,E;const k=_.map(I=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",M=ze(I,I._line)+(I.boost||0),ee=$.find(K=>K.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ee};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${m}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${A}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${A})
          </button>
        </div>`,(L=x.querySelector("#pp-close"))==null||L.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const S=I.dataset.cid,M=_.find(ee=>ee.cardId===S),N=$.findIndex(ee=>ee.cardId===S);M&&(N>-1?$.splice(N,1):$.length<A&&$.push(M),v())})}),(E=x.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{x.remove(),y($)})}v(),document.body.appendChild(x)}async function Y(_,A){const y=(p["gcCardsFull_"+a]||[]).find(k=>k.id===_),x=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(k=>{var L;return k.name===A||((L=k.name)==null?void 0:L.toLowerCase().trim())===(A==null?void 0:A.toLowerCase().trim())}),$=[...p["usedGc_"+a]||[],_],v={type:A,by:a,seq:(p._gcAnimSeq||0)+1};B.add(v.seq),Le(A,a,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const L=se[x.effect_type];if(L){const E={...p};L(x.effect_params||{},E,async I=>{I["usedGc_"+a]=$,I._lastGC=v,I._gcAnimSeq=v.seq,await V(I)});return}}const k={...p};switch(A){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=o+"Score";k[L]>0&&(k[L]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+a]=$,k._lastGC=v,k._gcAnimSeq=v.seq,await V(k)})}function R(_,A){const m="usedCardIds_"+_,y=new Set(p[m]||[]);A.forEach(x=>y.add(x)),p[m]=[...y]}function F(){for(const _ of["p1","p2"]){const A=new Set(p["usedCardIds_"+_]||[]),m=p[_+"Team"];if(m)for(const y of["GK","DEF","MIL","ATT"])(m[y]||[]).forEach(x=>{x.used=A.has(x.cardId)})}}function ie(){var Ke,Ze,it,ut,ft,gt;if(p.phase==="reveal")return ue();if(p.phase==="midfield")return me();if(p.phase==="finished")return je();const _=p[a+"Team"],A=p[o+"Team"];F();const m=p[a+"Score"],y=p[o+"Score"],x=p[a+"Name"],$=p[o+"Name"],v=p.phase===a+"-attack",k=p.phase===a+"-defense",L=Array.isArray(p["selected_"+a])?p["selected_"+a]:[],E=L.map(P=>P.cardId),I=window.innerWidth>=700,S=p[a+"Subs"]||[],M=p["usedSubIds_"+a]||[],N=S.filter(P=>!M.includes(P.cardId)),ee=p["gcCardsFull_"+a]||[],O=p["usedGc_"+a]||[],K=ee.filter(P=>!O.includes(P.id)),H=p.boostOwner===a&&!p.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(P=>(A[P]||[]).some(le=>!le.used)),ae=[..._.MIL||[],..._.ATT||[]].filter(P=>!P.used),pe=v&&Z&&ae.length===0?[..._.GK||[],..._.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];function ce(P,le,X){var lt,wt;const oe=P._gcDef,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[oe==null?void 0:oe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[oe==null?void 0:oe.color]||"#b06ce0",Xe=(oe==null?void 0:oe.name)||P.gc_type,Qe=(oe==null?void 0:oe.effect)||((lt=Re[P.gc_type])==null?void 0:lt.desc)||"",ot=oe!=null&&oe.image_url?`/icons/${oe.image_url}`:null,dt=((wt=Re[P.gc_type])==null?void 0:wt.icon)||"⚡",mt=Math.round(X*.22),vt=Math.round(X*.22),rt=X-mt-vt,Tt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${P.id}" data-gc-type="${P.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${X}px;border-radius:10px;border:2px solid ${_e};background:${Ae};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${mt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Tt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${le-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${rt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ot?`<img src="${ot}" style="max-width:${le-10}px;max-height:${rt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(rt*.55)}px">${dt}</span>`}
        </div>
        <div style="height:${vt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Qe.slice(0,38)}</span>
        </div>
      </div>`}function ge(P,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${P}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const be=(P,le)=>le?ge(130,175):ce(P,130,175),Se=(P,le)=>le?ge(68,95):ce(P,68,95),Me=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?$e(a)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Ee=v&&!$e(a)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${N.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':N.map(P=>`<div class="pvp-sub-btn" data-sub-id="${P.cardId}" style="cursor:pointer;flex-shrink:0">${We(P,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Ie=v?"attack":k?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(_,p[a+"Formation"],Ie,E,300,300,pe)}
      </div>
    </div>`;function Ne(P){if(P.type==="duel"&&(P.homeTotal!=null||P.aiTotal!=null)){const le=(P.homeTotal||0)>=(P.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(P.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.homePlayers||[]).map(X=>at(X)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${P.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${P.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(P.aiPlayers||[]).map(X=>at(X)).join("")}
            </div>
          </div>
          ${P.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${P.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${P.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${P.type==="goal"?700:400};padding:3px 2px">${P.text||""}</div>`}const Je=(()=>{var le,X;if(k&&((le=p.pendingAttack)!=null&&le.players)){const oe=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${tt((oe.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",oe.total)}
        </div>`}if(v&&((X=p.pendingAttack)!=null&&X.players)){const oe=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((oe.players||[]).map(Ae=>({...Ae,used:!1})),"#00ff88",oe.total)}
        </div>`}const P=(p.log||[]).slice(-1)[0];return P?'<div style="padding:2px 4px">'+Ne(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),He=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${m} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ge}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${Ee}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${K.map(P=>be(P,!1)).join("")}
            ${H?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(_,p[a+"Formation"],Ie,E,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(P=>Se(P,!1)).join("")}
            ${H?Se(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&N.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&N.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&N.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&N.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${N.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+a]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+a]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Ee}</div>
        </div>
      </div>`;function Be(){const P=e.querySelector(".match-screen");if(!P)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.height=le+"px",P.style.minHeight=le+"px",P.style.maxHeight=le+"px",P.style.overflow="hidden";const X=e.querySelector("#mobile-action-bar"),oe=e.querySelector("#mobile-play-area");X&&oe&&(oe.style.paddingBottom=X.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>{if(!v&&!k)return;const le=P.dataset.cardId,X=P.dataset.role,oe=(_[X]||[]).find(Qe=>Qe.cardId===le);if(!oe||oe.used)return;const Ae=pe.includes(le);if(v&&!["MIL","ATT"].includes(X)&&!Ae)return;Array.isArray(p["selected_"+a])||(p["selected_"+a]=[]);const _e=p["selected_"+a],Xe=_e.findIndex(Qe=>Qe.cardId===le);Xe>-1?_e.splice(Xe,1):_e.length<3&&_e.push({...oe,_role:X}),ie()})}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>we(P.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(P=>{P.addEventListener("click",()=>we())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>we()),e.querySelectorAll(".pvp-gc-mini").forEach(P=>{P.addEventListener("click",()=>Fe(P.dataset.gcId,P.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>Ce()),(it=e.querySelector("#pvp-action"))==null||it.addEventListener("click",P=>{v?P.currentTarget.dataset.pass==="1"||!$e(a)?U():te():k&&J()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Q()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>ne()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>fe()),j&&(clearInterval(j),j=null),(v||k)&&!u){let P=30,le=!1;const X=()=>document.getElementById("pvp-timer"),oe=()=>{X()&&(X().textContent=P+"s",X().style.color=le?"#ff4444":"#fff")};oe(),j=setInterval(()=>{P--,P<0?le?(clearInterval(j),j=null,v&&!$e(a)?U():Q()):(le=!0,P=15,oe()):oe()},1e3)}}function ue(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(p[o+"Team"],p[o+"Formation"],null,[],300,300)}</div>
    </div>`,a==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let ye=!1;function me(){if(ye)return;const _=p[a+"Team"].MIL||[],A=p[o+"Team"].MIL||[];function m(K){return K.reduce((H,Z)=>H+ze(Z,"MIL"),0)}function y(K){let H=0;for(let Z=0;Z<K.length-1;Z++){const ae=nt(K[Z],K[Z+1]);ae==="#00ff88"?H+=2:ae==="#FFD700"&&(H+=1)}return H}const x=m(_)+y(_),$=m(A)+y(A),v=x>=$;function k(K,H,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((ae,pe)=>{const ce=pe<K.length-1?nt(ae,K[pe+1]):null,ge=!ce||ce==="#ff3333"||ce==="#cc2222",be=ce==="#00ff88"?"+2":ce==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ae,note:ze(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<K.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":ce};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${ce}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ce}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${m(K)} + ${y(K)} liens = <b style="color:#fff">${m(K)+y(K)}</b>
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
      ${k(_,p[a+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(A,p[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(K,H)=>e.querySelectorAll(K).forEach((Z,ae)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},H+ae*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,H)=>setTimeout(()=>{K.style.opacity="1"},H*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function E(K,H,Z){const ae=document.getElementById(K);if(!ae)return;const pe=performance.now(),ce=ge=>{const be=Math.min(1,(ge-pe)/Z);ae.textContent=Math.round(H*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(ce):ae.textContent=H};requestAnimationFrame(ce)}setTimeout(()=>{E("pvp-score-me",x,800),E("pvp-score-opp",$,800)},1500);const I=p.p1Team.MIL||[],S=p.p2Team.MIL||[],M=m(I)+y(I),N=m(S)+y(S),ee=M>=N?"p1":"p2";let O=p.boostValue;O==null&&(O=li(),p.boostValue=O,p.boostOwner=ee,p.boostUsed=!1),ye=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(v?"me":"opp")),H=e.querySelector("#duel-row-"+(v?"opp":"me")),Z=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),pe=v?Z:ae,ce=v?ae:Z;pe&&(pe.style.fontSize="80px",pe.style.color=v?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ce&&(ce.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const be=p.boostOwner===a?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Se=a==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+p[a+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Se,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Oe=ee;await V({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:O,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function xe(_,A,m,y,x){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(I,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${v}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${A} – ${m}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let L=!1;const E=()=>{L||(L=!0,$.remove(),setTimeout(()=>x(),50))};$.addEventListener("click",E),setTimeout(E,3500)}function Le(_,A,m){var O,K;const y=(p.gcDefs||[]).find(H=>{var Z;return H.name===_||((Z=H.name)==null?void 0:Z.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",v=(y==null?void 0:y.name)||_,k=(y==null?void 0:y.effect)||((O=Re[_])==null?void 0:O.desc)||"",L=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((K=Re[_])==null?void 0:K.icon)||"⚡",S=A===a?"Vous":p[A+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let N=!1;const ee=()=>{N||(N=!0,M.remove(),setTimeout(()=>m&&m(),50))};M.addEventListener("click",ee),setTimeout(ee,3e3)}function Fe(_,A){var M,N,ee,O;const y=(p["gcCardsFull_"+a]||[]).find(K=>K.id===_),x=y==null?void 0:y._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",k=(x==null?void 0:x.name)||A,L=(x==null?void 0:x.effect)||((M=Re[A])==null?void 0:M.desc)||"Carte spéciale.",E=x!=null&&x.image_url?`/icons/${x.image_url}`:null,I=((N=Re[A])==null?void 0:N.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(ee=S.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),Y(_,A)})}function Ce(){var y;const _=p[a+"Team"],A=Object.entries(_).flatMap(([x,$])=>($||[]).filter(v=>!v.used).map(v=>({...v,_line:x})));if(!A.length)return;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",m.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${A.map(x=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",v=ze(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(m),(y=m.querySelector("#bp-close"))==null||y.addEventListener("click",()=>m.remove()),m.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const $=x.dataset.cid,v=A.find(L=>L.cardId===$);if(!v)return;const k=(_[v._line]||[]).find(L=>L.cardId===$);k&&(k.boost=(k.boost||0)+p.boostValue),m.remove(),await V({[a+"Team"]:_,boostUsed:!0})})})}function we(_=null){var N,ee;if(!(p.phase===a+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const m=p[a+"Team"],y=p["usedSubIds_"+a]||[],x=p.maxSubs||3;if(y.length>=x){f(`Maximum ${x} remplacements atteint`,"warning");return}const $=Object.entries(m).flatMap(([O,K])=>(K||[]).filter(H=>H.used).map(H=>({...H,_line:O}))),v=(p[a+"Subs"]||[]).filter(O=>!y.includes(O.cardId));if(!$.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let k=Math.max(0,$.findIndex(O=>O.cardId===_));const L=((N=$[k])==null?void 0:N._line)||((ee=$[k])==null?void 0:ee.job);let E=Math.max(0,v.findIndex(O=>O.job===L)),I=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var ce,ge,be,Se,Me,Oe;const O=$[k],K=v[E],H=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(H*1.35),ae=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},H,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(E>=v.length-1)}" ${E>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${O?We({...O,used:!1,boost:0},H,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(k>=$.length-1)}" ${k>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ce=S.querySelector("#psub-close"))==null||ce.addEventListener("click",()=>S.remove()),(ge=S.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{k>0&&(k--,M())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{k<$.length-1&&(k++,M())}),(Se=S.querySelector("#pin-up"))==null||Se.addEventListener("click",()=>{E>0&&(E--,M())}),(Me=S.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{E<v.length-1&&(E++,M())});const pe=(Ee,Ge,Ie,Ue)=>{const Ne=S.querySelector("#"+Ee);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",He=>{Je=He.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",He=>{const Be=He.changedTouches[0].clientY-Je;if(Math.abs(Be)<30)return;const Ke=Ge();Be<0&&Ke<Ue-1?(Ie(Ke+1),M()):Be>0&&Ke>0&&(Ie(Ke-1),M())},{passive:!0})};pe("pin-panel",()=>E,Ee=>E=Ee,v.length),pe("pout-panel",()=>k,Ee=>k=Ee,$.length),(Oe=S.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),I)return;I=!0;const Ge=$[k],Ie=v[E];if(!Ge||!Ie)return;const Ue=Ge._line,Ne=(m[Ue]||[]).findIndex(Be=>Be.cardId===Ge.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const Je={...Ie,_line:Ue,position:Ge.position,used:!1,boost:0};m[Ue].splice(Ne,1,Je);const He=[...y,Ie.cardId];S.remove(),W(Ge,Ie,async()=>{await V({[a+"Team"]:m,[o+"Team"]:p[o+"Team"],["usedSubIds_"+a]:He})})})}document.body.appendChild(S),M()}function W(_,A,m){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(L,E,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(L)?`<img src="${Pe(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(A,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const k=()=>{v||(v=!0,x.remove(),setTimeout(()=>m(),50))};x.addEventListener("click",k),setTimeout(k,2200)}function ne(){var A;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(p[o+"Team"],p[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(A=_.querySelector("#pvp-opp-close"))==null||A.addEventListener("click",()=>_.remove())}function fe(){var y;const _=p.log||[],A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const m=x=>{var v,k,L;if(x.type==="duel"){const E=x.isGoal,I=x.homeScored&&a==="p1"||!x.homeScored&&E&&a==="p2",S=x.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",M=E?I?"⚽ BUT !":"⚽ BUT adversaire !":(v=x.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
          ${(k=x.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${tt(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(L=x.aiPlayers)!=null&&L.length?`<div style="opacity:0.7">${tt(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
        </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${x.outPlayer?We({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${x.inPlayer?We({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${x.type==="goal"?"#FFD700":x.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${x.text||""}</div>
      </div>`};A.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(m).join("")}
      </div>`,document.body.appendChild(A),(y=A.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>A.remove())}async function U(){if(p.phase!==a+"-attack")return;const _=a==="p1"?"p2":"p1",A=(p.round||0)+1,m=[...p.log||[]];m.push({type:"info",text:`⏭️ ${p[a+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=he(p),x=$e(_),$=y||!x?"finished":_+"-attack";await V({["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:$,attacker:_,round:A,log:m}),$==="finished"&&await qe(p)}async function te(){const _=p[a+"Team"],A=!["GK","DEF","MIL","ATT"].some($=>(p[o+"Team"][$]||[]).some(v=>!v.used)),m=(p["selected_"+a]||[]).map($=>{const v=(_[$._role]||[]).find(M=>M.cardId===$.cardId)||$,k=A&&["GK","DEF"].includes($._role),L=_[$._role]||[],E=L.findIndex(M=>M.cardId===$.cardId),I=st(L.length),S=E>=0?I[E]:v._col??1;return{...v,_line:$._role,_col:S,...k?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!m.length)return;const y=Vt(m,p.modifiers[a]||{});R(a,m.map($=>$.cardId)),m.forEach($=>{const v=(_[$._role]||[]).find(k=>k.cardId===$.cardId);v&&(v.used=!0)}),p["selected_"+a]=[],ie();const x=[...p.log||[]];if(A){const $=(p[a+"Score"]||0)+1,v=m.map(S=>({name:S.name,note:ze(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:y.total,aiTotal:0});const k=(p.round||0)+1,L=a==="p1"?"p2":"p1",E={...p,[a+"Team"]:_,[a+"Score"]:$},I=he(E);q.add(k),xe(v,$,p[o+"Score"]||0,!0,async()=>{await V({[a+"Team"]:_,[a+"Score"]:$,["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:I?"finished":L+"-attack",attacker:L,round:k,log:x}),I&&await qe({...p,[a+"Score"]:$})});return}x.push({type:"pending",text:`⚔️ ${p[a+"Name"]} attaque (${y.total})`}),await V({[a+"Team"]:_,[o+"Team"]:p[o+"Team"],pendingAttack:{...y,players:m,side:a},["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},phase:o+"-defense",log:x})}async function J(){const _=p[a+"Team"],A=(p["selected_"+a]||[]).map(O=>{const K=(_[O._role]||[]).find(ce=>ce.cardId===O.cardId)||O,H=_[O._role]||[],Z=H.findIndex(ce=>ce.cardId===O.cardId),ae=st(H.length),pe=Z>=0?ae[Z]:K._col??1;return{...K,_line:O._role,_col:pe}}),m=Yt(A,p.modifiers[a]||{});R(a,A.map(O=>O.cardId)),A.forEach(O=>{const K=(_[O._role]||[]).find(H=>H.cardId===O.cardId);K&&(K.used=!0)}),p["selected_"+a]=[],ie();const y=Wt(p.pendingAttack.total,m.total,p.modifiers[a]||{}),x=p.pendingAttack.side,$=y==="attack"||(y==null?void 0:y.goal),v=x==="p1"?"p2":"p1",k=(p.round||0)+1,L=(p.pendingAttack.players||[]).map(O=>({name:O.name,note:ze(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),E=[...p.log||[]];E.push({type:"duel",isGoal:$,homeScored:$&&x===a,text:$?`⚽ BUT de ${p[x+"Name"]} ! (${p.pendingAttack.total} vs ${m.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${m.total})`,homePlayers:L,aiPlayers:A.map(O=>({name:O.name,note:ze(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:p.pendingAttack.total,aiTotal:m.total});const I=$?(p[x+"Score"]||0)+1:p[x+"Score"]||0,S={...p,[a+"Team"]:_,[x+"Score"]:I},M=he(S),N=M?"finished":v+"-attack",ee=async()=>{await V({[a+"Team"]:_,[o+"Team"]:p[o+"Team"],[x+"Score"]:I,["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:N,attacker:v,round:k,log:E}),(N==="finished"||M)&&await qe({...p,[x+"Score"]:I})};if($){const O=x===a,K=O?I:p[a+"Score"]||0,H=O?p[o+"Score"]||0:I;q.add(k),xe(L,K,H,O,ee)}else await ee()}function de(_){return["MIL","ATT"].some(A=>(_[A]||[]).some(m=>!m.used))}function ve(_){return["GK","DEF","MIL","ATT"].some(A=>(_[A]||[]).some(m=>!m.used))}function Te(_){return ve(_)&&!de(_)}function $e(_){const A=p[_+"Team"],m=p[(_==="p1"?"p2":"p1")+"Team"];return!!(de(A)||!ve(m)&&Te(A))}function he(_){const A=["MIL","ATT"].some(E=>(_.p1Team[E]||[]).some(I=>!I.used)),m=["MIL","ATT"].some(E=>(_.p2Team[E]||[]).some(I=>!I.used)),y=ve(_.p1Team),x=ve(_.p2Team);return!A&&!(!x&&y)&&(!m&&!(!y&&x))}function ke(_){const A=_.p1Score||0,m=_.p2Score||0;return A===m?null:A>m?h.home_id:h.away_id}async function qe(_){try{const A=ke(_),m=A?h.home_id===A?h.away_id:h.home_id:null;await z.from("matches").update({status:"finished",winner_id:A,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),A&&m&&Si(A,m).catch(()=>{})}catch(A){console.error("[PvP] finishMatch:",A)}}function je(){var x;const _=p[a+"Score"],A=p[o+"Score"],m=_>A,y=_===A;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${m?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${m?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${A}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{z.removeChannel(G)}catch{}Ve(e),c("home")})}ie()}const It="#1A6B3C",yt="#D4A017";async function or(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await ht(e,t,i);return}await Et(e,t)}async function Et(e,t,i="waiting"){var g;const{state:n}=t,d=n.profile.id,{data:s}=await z.from("mini_league_members").select("league_id").eq("user_id",d),r=(s||[]).map(T=>T.league_id),{data:c,error:f}=await z.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),a=f?(await z.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],l=(r.length?await z.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],b=l.filter(T=>T.status==="waiting"&&!T.is_archived),h=l.filter(T=>T.status==="active"&&!T.is_archived),w=l.filter(T=>T.is_archived||T.status==="finished"),p=a.filter(T=>!r.includes(T.id)),u=[{key:"waiting",label:"🟡 En attente",count:b.length+p.length},{key:"active",label:"🟢 En cours",count:h.length},{key:"archived",label:"📁 Archivées",count:w.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${u.map(T=>`<button class="ml-tab" data-tab="${T.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===T.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===T.key?"900":"600"};color:${i===T.key?It:"#888"};cursor:pointer">${T.label}${T.count?` (${T.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?nr(b,p,d):i==="active"?rr(h,d):ar(w,d)}
    </div>
  </div>`,(g=document.getElementById("ml-create-btn"))==null||g.addEventListener("click",()=>sr(e,t)),e.querySelectorAll(".ml-tab").forEach(T=>T.addEventListener("click",()=>Et(e,t,T.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(T=>T.addEventListener("click",()=>ht(e,t,T.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(T=>T.addEventListener("click",j=>{j.stopPropagation(),zo(e,t,T.dataset.join,T.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(T=>T.addEventListener("click",j=>{j.stopPropagation(),_i(e,t,T.dataset.delete,T.dataset.name,i)}))}function ai(e,t,i=!1){var r,c;const n=e.creator_id===t,d=e.pot||0,s=((c=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function nr(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>ai(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>ai(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function rr(e,t){return e.length?e.map(i=>ai(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function ar(e,t){return e.length?e.map(i=>ai(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function sr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var w,p,u,g;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),s=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,c=((w=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:w.value)||"public",f=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",a=((g=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:g.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(c==="private"&&!a){n("Mot de passe requis","error");return}const{data:o,error:l}=await z.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:c,password:a,mode:f,max_players:s,entry_fee:r}).select().single();if(l){n("Erreur : "+l.message,"error");return}const{data:b}=await z.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<r){await z.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await z.from("users").update({credits:b.credits-r}).eq("id",t.state.profile.id),await z.from("mini_leagues").update({pot:r}).eq("id",o.id),await z.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-r);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),ht(e,t,o.id)})}function dr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function zo(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id,{data:c}=await z.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){d("Mini League introuvable","error");return}if(c.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:f}=await z.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=c.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const p=await dr();if(p===null)return;if(c.password!==p){d("Mot de passe incorrect","error");return}}const a=c.entry_fee||100,{data:o}=await z.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<a){d(`Crédits insuffisants — il te faut ${a.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:l}=await z.from("mini_league_members").insert({league_id:i,user_id:r});if(l){d("Erreur inscription : "+l.message,"error");return}const{error:b}=await z.from("users").update({credits:o.credits-a}).eq("id",r),{error:h}=await z.from("mini_leagues").update({pot:(c.pot||0)+a}).eq("id",i);(b||h)&&console.error("Erreur post-inscription:",b,h),s.profile&&(s.profile.credits=o.credits-a);const w=document.getElementById("nav-credits");w&&(w.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${a.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+a).toLocaleString("fr")} cr.`,"success"),ht(e,t,i)}async function lr(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:c}=await z.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:f}=await z.from("users").select("credits").eq("id",r).single();await z.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-n)}).eq("id",i),await z.from("users").update({credits:((f==null?void 0:f.credits)||0)+n}).eq("id",r),await z.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),s.profile&&(s.profile.credits=((f==null?void 0:f.credits)||0)+n);const a=document.getElementById("nav-credits");a&&(a.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),Et(e,t,"waiting")}async function _i(e,t,i,n,d){const{toast:s}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await z.from("mini_league_matches").delete().eq("league_id",i),await z.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await z.from("mini_leagues").delete().eq("id",i);if(r){s("Erreur suppression ("+r.message+")","error");return}s("Mini League supprimée avec succès","success"),Et(e,t,d)}async function cr(e,t,i){await z.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),Et(e,t,"archived")}async function ht(e,t,i){var D,q,B,C,G,V,Q,se,re;const{state:n,toast:d}=t,s=n.profile.id,[{data:r},{data:c},{data:f}]=await Promise.all([z.from("mini_leagues").select("*").eq("id",i).single(),z.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),z.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await Et(e,t);return}const a=(c||[]).some(Y=>Y.user_id===s),o=r.creator_id===s,l=(c||[]).map(Y=>Y.user).filter(Boolean),b=Lo(l,f||[]),h=(f||[]).filter(Y=>Y.matchday===r.current_day),w=r.pot||0,p=r.entry_fee||100,u=h.length>0&&h.every(Y=>Y.status==="finished"||Y.status==="bye"),g=r.current_day>=r.total_days,T=(c||[]).find(Y=>Y.user_id===s);e.innerHTML=`
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
        ${w>0?`<div style="font-size:12px;font-weight:900;color:${yt};margin-top:4px">🏆 ${w.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${l.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*l.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*l.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*l.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*l.length*.1).toLocaleString("fr")})</div>
        ${l.map(Y=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${Y.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${Y.club_color1||"#fff"}">${(Y.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${Y.club_name||Y.pseudo}</div><div style="font-size:11px;color:#999">@${Y.pseudo}</div></div>
            ${Y.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&l.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${l.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${a?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${a&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${h.map(Y=>Yi(Y,l,s,a)).join("")}
        ${o&&u&&!g?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&u&&g?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${w>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((Y,R)=>{const F=w>0&&r.status==="finished"?R===0?Math.floor(w*.7):R===1?Math.floor(w*.2):R===2?Math.floor(w*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${Y.userId===s?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${R===0?yt:R<3?It:"#555"}">${["🥇","🥈","🥉"][R]||R+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${Y.clubName}</div><div style="font-size:10px;color:#999">@${Y.pseudo}</div></td>
              <td style="text-align:center">${Y.played}</td><td style="text-align:center">${Y.won}-${Y.drawn}-${Y.lost}</td>
              <td style="text-align:center;color:${Y.goalDiff>=0?It:"#cc2222"}">${Y.goalDiff>=0?"+":""}${Y.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${Y.points}</td>
              ${w>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${F?F.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(Y,R)=>R+1).reverse().map(Y=>{const R=(f||[]).filter(F=>F.matchday===Y);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${Y}</div>${R.map(F=>Yi(F,l,s,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const j=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((D=document.getElementById("ml-back"))==null||D.addEventListener("click",()=>Et(e,t,j)),(q=document.getElementById("ml-start-btn"))==null||q.addEventListener("click",()=>pr(e,t,r,l)),(B=document.getElementById("ml-next-day"))==null||B.addEventListener("click",()=>ur(e,t,i)),(C=document.getElementById("ml-finish-btn"))==null||C.addEventListener("click",()=>So(e,t,i,w,b,l)),(G=document.getElementById("ml-join-now"))==null||G.addEventListener("click",()=>zo(e,t,i,r.type)),(V=document.getElementById("ml-leave-btn"))==null||V.addEventListener("click",()=>lr(e,t,i,p)),(Q=document.getElementById("ml-delete-btn"))==null||Q.addEventListener("click",()=>_i(e,t,i,r.name,"waiting")),(se=document.getElementById("ml-delete-now"))==null||se.addEventListener("click",()=>_i(e,t,i,r.name,j)),(re=document.getElementById("ml-archive-btn"))==null||re.addEventListener("click",()=>cr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(Y=>{Y.addEventListener("click",()=>{const R=h.find(F=>F.id===Y.dataset.playMatch);R&&t.navigate("match-mini-league",{mlMatchId:R.id,leagueId:i})})}),r.status==="finished"&&T){const Y=b.findIndex(R=>R.userId===s);Y>=0&&Y<3&&T.prize_amount>0&&setTimeout(()=>fr(e,t,r,T,Y),400)}}function Yi(e,t,i,n,d=!1){const s=l=>t.find(b=>b.id===l);if(e.is_bye){const l=s(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"} exempté(e)</div>`}const r=s(e.home_id),c=s(e.away_id),f=e.home_id===i||e.away_id===i,a=f&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${a?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function pr(e,t,i,n){const{toast:d,state:s}=t,r=gr(n.map(a=>a.id),i.mode),c=[];r.forEach((a,o)=>a.forEach(l=>c.push({league_id:i.id,matchday:o+1,home_id:l.home||l.bye,away_id:l.away||null,is_bye:!!l.bye,status:l.bye?"bye":"pending"})));const{error:f}=await z.from("mini_league_matches").insert(c);if(f){d("Erreur calendrier : "+f.message,"error");return}await z.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ht(e,t,i.id)}async function ur(e,t,i){const{data:n}=await z.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await So(e,t,i,n.pot||0,null,null);return}await z.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),ht(e,t,i)}async function So(e,t,i,n,d,s){const{toast:r,state:c}=t;let f=d,a=s;if(!f){const{data:l}=await z.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await z.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);a=(b||[]).map(h=>h.user).filter(Boolean),f=Lo(a,l||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(f.slice(0,3).map((l,b)=>o[b]?z.from("mini_league_members").update({prize_amount:o[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",l.userId):Promise.resolve())),await z.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),ht(e,t,i)}async function fr(e,t,i,n,d){var b,h;const{state:s,toast:r}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][d],a=n.prize_amount||c[d]||0,o=n.prize_claimed,l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${f}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${a.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${a.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(l),(b=l.querySelector("#prize-close"))==null||b.addEventListener("click",()=>l.remove()),l.addEventListener("click",w=>{w.target===l&&l.remove()}),(h=l.querySelector("#claim-prize-btn"))==null||h.addEventListener("click",async()=>{const{data:w}=await z.from("users").select("credits").eq("id",s.profile.id).single();await z.from("users").update({credits:((w==null?void 0:w.credits)||0)+a}).eq("id",s.profile.id),await z.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",s.profile.id),s.profile&&(s.profile.credits=((w==null?void 0:w.credits)||0)+a);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${s.profile.credits.toLocaleString("fr")}`),r(`💰 +${a.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),l.remove(),ht(e,t,i.id)})}function gr(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let s=n.slice(1);const r=[];for(let c=0;c<d-1;c++){const f=[],a=[n[0],...s];for(let o=0;o<d/2;o++){const l=a[o],b=a[d-1-o];l===null?f.push({bye:b}):b===null?f.push({bye:l}):f.push({home:l,away:b})}r.push(f),s=[s[s.length-1],...s.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(c=>c.map(f=>f.bye?f:{home:f.away,away:f.home}))]:r}function Lo(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],s=i[n.away_id];!d||!s||(d.played++,s.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,s.goalsFor+=n.away_score,s.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,s.lost++):n.home_score<n.away_score?(s.won++,s.points+=3,d.lost++):(d.drawn++,d.points++,s.drawn++,s.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,s.goalDiff=s.goalsFor-s.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}async function Wi(e,t,i,n){var d,s;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&z.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await z.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await z.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await pi(e,t,"random",({deckId:r,formation:c,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:l,stadiumDef:b})=>{const h=w=>mr(e,t,r,c,f,a,w,l||[],i);if(!o.length){h([]);return}ci(e,o,h)})}async function mr(e,t,i,n,d,s,r=[],c=[],f,a){const{state:o,navigate:l,toast:b}=t,h=o.profile.id;let w=!1,p=null;et(e);try{await z.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await z.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const{data:u}=await z.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!u){b("Match introuvable","error"),Ve(e),l("mini-league");return}if(u.home_id!==h&&u.away_id!==h){b("Tu ne fais pas partie de ce match","error"),Ve(e),l("mini-league");return}const g=u.home_id===h,T=g?u.away:u.home,j=g?u.away_id:u.home_id,D=(B,C)=>{var G;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${u.matchday}</div>
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
            <div style="font-size:12px;font-weight:700">${(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(G=document.getElementById("lobby-cancel"))==null||G.addEventListener("click",()=>{w=!0,clearInterval(p),Ve(e),l("mini-league")})},q=async(B,C)=>{w=!0,clearInterval(p),await new Promise(G=>setTimeout(G,600)),e.isConnected&&xr(e,t,B,C,r,c)};if(D(),g){let B=u.match_id;if(!B){const{data:G,error:V}=await z.from("matches").insert({home_id:h,away_id:j,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(V||!G){b("Erreur création match","error"),Ve(e),l("mini-league");return}B=G.id,await z.from("mini_league_matches").update({match_id:B,status:"playing"}).eq("id",f)}const C=B;p=setInterval(async()=>{if(w){clearInterval(p);return}const{data:G}=await z.from("matches").select("away_deck_id").eq("id",C).single();G!=null&&G.away_deck_id&&(clearInterval(p),q(C,!0))},1500)}else{let B=u.match_id;p=setInterval(async()=>{if(w){clearInterval(p);return}const{data:C}=await z.from("mini_league_matches").select("match_id").eq("id",f).single();C!=null&&C.match_id&&(clearInterval(p),B=C.match_id,await z.from("matches").update({away_deck_id:i}).eq("id",B),q(B,!1))},1500)}}async function xr(e,t,i,n,d=[],s=[]){var A;const{state:r,navigate:c,toast:f}=t,a=((A=r.params)==null?void 0:A.leagueId)||null,o=n?"p1":"p2",l=n?"p2":"p1",b=(d||[]).map(m=>m.id),h=(d||[]).map(m=>({id:m.id,gc_type:m.gc_type,_gcDef:m._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await z.from("matches").select("*").eq("id",i).single();if(!w){f("Match introuvable","error"),c("mini-league");return}async function p(){const[{data:m},{data:y},{data:x},{data:$}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]),v=S=>{const M=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?M:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?M:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?M:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?M:0),evolution_bonus:M,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((m==null?void 0:m.starters)||[]).map(S=>v(S)),L=((y==null?void 0:y.starters)||[]).map(S=>v(S)),E=(m==null?void 0:m.formation)||"4-4-2",I=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:(()=>{const S=bt(k,E);return stadiumDef?qt(S,stadiumDef):S})(),p2Team:bt(L,I),p1Subs:(()=>{const S=((m==null?void 0:m.subs)||[]).map(M=>v(M));return stadiumDef&&Ut(S,stadiumDef),S})(),p2Subs:((y==null?void 0:y.subs)||[]).map(S=>v(S)),p1Formation:E,p2Formation:I,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:($==null?void 0:$.club_name)||($==null?void 0:$.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let u=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(!u)if(n){u=await p();const{data:m}=await z.from("matches").select("game_state").eq("id",i).single();!(m!=null&&m.game_state)||!Object.keys(m.game_state).length?await z.from("matches").update({game_state:u,turn_user_id:w.home_id}).eq("id",i):u=m.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let m=0;m<60&&!u;m++){await new Promise(x=>setTimeout(x,400));const{data:y}=await z.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(u=y.game_state)}if(!u){f("Erreur de synchronisation","error"),c("mini-league");return}u.gc_p2=b,u.gcCardsFull_p2=h,await z.from("matches").update({game_state:u}).eq("id",i)}let g=!1,T=!1,j=!1,D=null,q=!1;const B=new Set,C=new Set;function G(m){var S,M;try{z.removeChannel(V)}catch{}const y=u[o+"Score"]||0,x=u[l+"Score"]||0;if(!j){j=!0;const N=m.winner_id||(y>x?r.profile.id:x>y?"opp":null),ee=N===r.profile.id?"win":N?"loss":null;ee&&si(()=>Promise.resolve().then(()=>co),void 0).then(O=>O.applyOwnEvolution(r.profile.id,ee)).catch(()=>{})}if(!T){const N=u.p1Score||0,ee=u.p2Score||0,O=(u.usedGc_p1||[]).length,K=(u.usedGc_p2||[]).length,H=m.winner_id||(N>ee?w.home_id:ee>N?w.away_id:null);(H?r.profile.id===H:r.profile.id<(n?w.away_id:w.home_id))&&(T=!0,oo({player1Id:w.home_id,player2Id:w.away_id,score1:N,score2:ee,gc1:O,gc2:K}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let $,v;m.winner_id?($=m.winner_id===r.profile.id,v=!1):m.forfeit?($=y>x,v=!1):(v=y===x,$=y>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const L=v?"🤝":$?"🏆":"😞",E=v?"MATCH NUL":$?"VICTOIRE !":"DÉFAITE",I=v?"#fff":$?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${L}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${E}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${y} – ${x} ${u[l+"Name"]}</div>
      ${m.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${$?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),a?c("mini-league",{openLeagueId:a}):c("mini-league")})}const V=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},m=>{const y=m.new;try{if(y.status==="finished"||y.forfeit){if(g||(g=!0,D&&(clearInterval(D),D=null),y.game_state&&(u=y.game_state),u.phase==="finished"&&!y.forfeit&&document.getElementById("pvp-home")))return;G(y);return}if(y.game_state){const x=u;u=y.game_state;const $=u._lastGC;if($&&$.seq&&!C.has($.seq)&&(C.add($.seq),$.by!==o)){Fe($.type,$.by,()=>ue());return}const v=x[o+"Score"]||0,k=x[l+"Score"]||0,L=u[o+"Score"]||0,E=u[l+"Score"]||0,I=L>v,S=E>k;if((I||S)&&!B.has(u.round)){B.add(u.round);const M=[...u.log||[]].reverse().find(ee=>ee.isGoal),N=((M==null?void 0:M.homePlayers)||[]).map(ee=>({name:ee.name,note:ee.note,portrait:ee.portrait,job:ee.job}));Le(N,L,E,I,()=>ue());return}ue()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function Q(m){Object.assign(u,m),u.lastActionAt=new Date().toISOString();const{error:y}=await z.from("matches").update({game_state:u}).eq("id",i);y&&f("Erreur de synchronisation","error");try{ue()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function se(){if(g)return;g=!0,D&&(clearInterval(D),D=null);const m=n?w.away_id:w.home_id,y=n?"p2":"p1",x=n?"p1":"p2",$={...u,[y+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:m,home_score:$.p1Score||0,away_score:$.p2Score||0,game_state:$}).eq("id",i)}catch{}try{z.removeChannel(V)}catch{}setTimeout(()=>{Ve(e),c("mini-league")},800)}const re={BOOST_STAT:({value:m=1,count:y=1,roles:x=[]},$,v)=>{const k=$[o+"Team"],L=Object.entries(k).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,I])=>I.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){$.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v($);return}Y(L,y,`Choisir ${y} joueur(s) à booster (+${m})`,E=>{E.forEach(I=>{const S=(k[I._line]||[]).find(M=>M.cardId===I.cardId);S&&(S.boost=(S.boost||0)+m,$.log.push({text:`⚡ +${m} sur ${S.name}`,type:"info"}))}),$[o+"Team"]=k,v($)})},DEBUFF_STAT:({value:m=1,count:y=1,roles:x=[],target:$="ai"},v,k)=>{const L=$==="home"?o:l,E=v[L+"Team"],I=$==="home"?"allié":"adverse",S=Object.entries(E).filter(([M])=>!x.length||x.includes(M)).flatMap(([M,N])=>N.map(ee=>({...ee,_line:M})));if(!S.length){v.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),k(v);return}Y(S,y,`Choisir ${y} joueur(s) ${I}(s) (-${m})`,M=>{M.forEach(N=>{const ee=(E[N._line]||[]).find(O=>O.cardId===N.cardId);ee&&(ee.boost=(ee.boost||0)-m,v.log.push({text:`🎯 -${m} sur ${ee.name}`,type:"info"}))}),v[L+"Team"]=E,k(v)})},GRAY_PLAYER:({count:m=1,roles:y=[],target:x="ai"},$,v)=>{const k=x==="home"?o:l,L=$[k+"Team"],E=x==="home"?"allié":"adverse",I=Object.entries(L).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,M])=>M.filter(N=>!N.used).map(N=>({...N,_line:S})));if(!I.length){$.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),v($);return}Y(I,m,`Choisir ${m} joueur(s) ${E}(s) à exclure`,S=>{const M="usedCardIds_"+k,N=new Set($[M]||[]);S.forEach(ee=>{const O=(L[ee._line]||[]).find(K=>K.cardId===ee.cardId);O&&(O.used=!0,N.add(ee.cardId),$.log.push({text:`❌ ${O.name} exclu !`,type:"info"}))}),$[M]=[...N],$[k+"Team"]=L,v($)})},REVIVE_PLAYER:({count:m=1,roles:y=[]},x,$)=>{const v=x[o+"Team"],k=Object.entries(v).filter(([L])=>!y.length||y.includes(L)).flatMap(([L,E])=>E.filter(I=>I.used).map(I=>({...I,_line:L})));if(!k.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),$(x);return}Y(k,m,`Choisir ${m} joueur(s) à ressusciter`,L=>{L.forEach(E=>{const I=(v[E._line]||[]).find(S=>S.cardId===E.cardId);I&&(I.used=!1,x.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=v,$(x)})},REMOVE_GOAL:({},m,y)=>{const x=l+"Score";m[x]>0?(m[x]--,m.log.push({text:"🚫 Dernier but annulé !",type:"info"})):m.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(m)},ADD_GOAL_DRAW:({},m,y)=>{m[o+"Score"]===m[l+"Score"]?(m[o+"Score"]++,m.log.push({text:"🎯 But bonus !",type:"info"})):m.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(m)},ADD_SUB:({value:m=1},y,x)=>{y.maxSubs=(y.maxSubs||3)+m,y.log.push({text:`🔄 +${m} remplacement(s)`,type:"info"}),x(y)},CUSTOM:({},m,y)=>y(m)};function Y(m,y,x,$){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function L(){var I,S;const E=m.map(M=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",ee=ze(M,M._line)+(M.boost||0),K=k.find(Z=>Z.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${K};background:${N};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${ee}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
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
        </div>`,(I=v.querySelector("#pp-close"))==null||I.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const N=M.dataset.cid,ee=m.find(K=>K.cardId===N),O=k.findIndex(K=>K.cardId===N);ee&&(O>-1?k.splice(O,1):k.length<y&&k.push(ee),L())})}),(S=v.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{v.remove(),$(k)})}L(),document.body.appendChild(v)}async function R(m,y){const $=(u["gcCardsFull_"+o]||[]).find(E=>E.id===m),v=($==null?void 0:$._gcDef)||(u.gcDefs||[]).find(E=>{var I;return E.name===y||((I=E.name)==null?void 0:I.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),k=[...u["usedGc_"+o]||[],m],L={type:y,by:o,seq:(u._gcAnimSeq||0)+1};C.add(L.seq),Fe(y,o,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const I=re[v.effect_type];if(I){const S={...u};I(v.effect_params||{},S,async M=>{M["usedGc_"+o]=k,M._lastGC=L,M._gcAnimSeq=L.seq,await Q(M)});return}}const E={...u};switch(y){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=l+"Score";E[I]>0&&(E[I]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=k,E._lastGC=L,E._gcAnimSeq=L.seq,await Q(E)})}function F(m,y){const x="usedCardIds_"+m,$=new Set(u[x]||[]);y.forEach(v=>$.add(v)),u[x]=[...$]}function ie(){for(const m of["p1","p2"]){const y=new Set(u["usedCardIds_"+m]||[]),x=u[m+"Team"];if(x)for(const $ of["GK","DEF","MIL","ATT"])(x[$]||[]).forEach(v=>{v.used=y.has(v.cardId)})}}function ue(){var it,ut,ft,gt,P,le;if(u.phase==="reveal")return ye();if(u.phase==="midfield")return xe();if(u.phase==="finished")return _();const m=u[o+"Team"],y=u[l+"Team"];ie();const x=u[o+"Score"],$=u[l+"Score"],v=u[o+"Name"],k=u[l+"Name"],L=u.phase===o+"-attack",E=u.phase===o+"-defense",I=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],S=I.map(X=>X.cardId),M=window.innerWidth>=700,N=u[o+"Subs"]||[],ee=u["usedSubIds_"+o]||[],O=N.filter(X=>!ee.includes(X.cardId)),K=u["gcCardsFull_"+o]||[],H=u["usedGc_"+o]||[],Z=K.filter(X=>!H.includes(X.id)),ae=u.boostOwner===o&&!u.boostUsed,pe=!["GK","DEF","MIL","ATT"].some(X=>(y[X]||[]).some(oe=>!oe.used)),ce=[...m.MIL||[],...m.ATT||[]].filter(X=>!X.used),ge=L&&pe&&ce.length===0?[...m.GK||[],...m.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function be(X,oe,Ae){var ji,Ci;const _e=X._gcDef,Xe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_e==null?void 0:_e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[_e==null?void 0:_e.color]||"#b06ce0",ot=(_e==null?void 0:_e.name)||X.gc_type,dt=(_e==null?void 0:_e.effect)||((ji=Re[X.gc_type])==null?void 0:ji.desc)||"",mt=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,vt=((Ci=Re[X.gc_type])==null?void 0:Ci.icon)||"⚡",rt=Math.round(Ae*.22),Tt=Math.round(Ae*.22),lt=Ae-rt-Tt,wt=ot.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${oe}px;height:${Ae}px;border-radius:10px;border:2px solid ${Qe};background:${Xe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${ot}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${mt?`<img src="${mt}" style="max-width:${oe-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${vt}</span>`}
        </div>
        <div style="height:${Tt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${dt.slice(0,38)}</span>
        </div>
      </div>`}function Se(X,oe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Me=(X,oe)=>oe?Se(130,175):be(X,130,175),Oe=(X,oe)=>oe?Se(68,95):be(X,68,95),Ee=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=L?he(o)?`<button id="pvp-action" style="${Ee};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ee};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Ee};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Ie=L&&!he(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':L||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Ue=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${O.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':O.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${We(X,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Ne=L?"attack":E?"defense":"idle",Je=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(m,u[o+"Formation"],Ne,S,300,300,ge)}
      </div>
    </div>`;function He(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const oe=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(Ae=>at(Ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${oe?20:14}px;font-weight:900;color:${oe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${oe?14:20}px;font-weight:900;color:${oe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(Ae=>at(Ae)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Be=(()=>{var oe,Ae;if(E&&((oe=u.pendingAttack)!=null&&oe.players)){const _e=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${tt((_e.players||[]).map(Xe=>({...Xe,used:!1})),"#ff6b6b",_e.total)}
        </div>`}if(L&&((Ae=u.pendingAttack)!=null&&Ae.players)){const _e=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((_e.players||[]).map(Xe=>({...Xe,used:!1})),"#00ff88",_e.total)}
        </div>`}const X=(u.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+He(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${$}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Be}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ue}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Je}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ge}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Z.map(X=>Me(X,!1)).join("")}
            ${ae?Me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(m,u[o+"Formation"],Ne,S,300,300,ge)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Z.map(X=>Oe(X,!1)).join("")}
            ${ae?Oe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${L&&O.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${L&&O.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${L&&O.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${L&&O.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${O.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+o]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ge}${Ie}</div>
        </div>
      </div>`;function Ze(){const X=e.querySelector(".match-screen");if(!X)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=oe+"px",X.style.minHeight=oe+"px",X.style.maxHeight=oe+"px",X.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");Ae&&_e&&(_e.style.paddingBottom=Ae.offsetHeight+"px")}if(Ze(),setTimeout(Ze,120),setTimeout(Ze,400),q||(q=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ze),window.visualViewport.addEventListener("scroll",Ze)),window.addEventListener("resize",Ze)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!L&&!E)return;const oe=X.dataset.cardId,Ae=X.dataset.role,_e=(m[Ae]||[]).find(dt=>dt.cardId===oe);if(!_e||_e.used)return;const Xe=ge.includes(oe);if(L&&!["MIL","ATT"].includes(Ae)&&!Xe)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const Qe=u["selected_"+o],ot=Qe.findIndex(dt=>dt.cardId===oe);ot>-1?Qe.splice(ot,1):Qe.length<3&&Qe.push({..._e,_role:Ae}),ue()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>W(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>W())}),(it=e.querySelector("#pvp-sub-open"))==null||it.addEventListener("click",()=>W()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>Ce(X.dataset.gcId,X.dataset.gcType))}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>we()),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",X=>{L?X.currentTarget.dataset.pass==="1"||!he(o)?te():J():E&&de()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&se()}),(P=e.querySelector("#pvp-view-opp"))==null||P.addEventListener("click",()=>fe()),(le=e.querySelector("#pvp-toggle-history"))==null||le.addEventListener("click",()=>U()),D&&(clearInterval(D),D=null),(L||E)&&!g){let X=30,oe=!1;const Ae=()=>document.getElementById("pvp-timer"),_e=()=>{Ae()&&(Ae().textContent=X+"s",Ae().style.color=oe?"#ff4444":"#fff")};_e(),D=setInterval(()=>{X--,X<0?oe?(clearInterval(D),D=null,L&&!he(o)?te():se()):(oe=!0,X=15,_e()):_e()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[l+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(u[l+"Team"],u[l+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await Q({phase:"midfield"})},5e3)}let me=!1;function xe(){if(me)return;const m=u[o+"Team"].MIL||[],y=u[l+"Team"].MIL||[];function x(Z){return Z.reduce((ae,pe)=>ae+ze(pe,"MIL"),0)}function $(Z){let ae=0;for(let pe=0;pe<Z.length-1;pe++){const ce=nt(Z[pe],Z[pe+1]);ce==="#00ff88"?ae+=2:ce==="#FFD700"&&(ae+=1)}return ae}const v=x(m)+$(m),k=x(y)+$(y),L=v>=k;function E(Z,ae,pe){return`<div id="duel-row-${pe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ae}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Z.map((ce,ge)=>{const be=ge<Z.length-1?nt(ce,Z[ge+1]):null,Se=!be||be==="#ff3333"||be==="#cc2222",Me=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${pe}" data-idx="${ge}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ce,note:ze(ce,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ge<Z.length-1?`<div class="duel-link duel-link-${pe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Se?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Se?"none":`0 0 8px ${be}`}">
              ${Me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${Me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${pe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(Z)} + ${$(Z)} liens = <b style="color:#fff">${x(Z)+$(Z)}</b>
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
      ${E(m,u[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(y,u[l+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(Z,ae)=>e.querySelectorAll(Z).forEach((pe,ce)=>{setTimeout(()=>{pe.style.opacity="1",pe.style.transform="translateY(0) scale(1)"},ae+ce*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Z,ae)=>setTimeout(()=>{Z.style.opacity="1"},ae*70)),900),setTimeout(()=>{const Z=e.querySelector("#pvp-vs");Z&&(Z.style.opacity="1",Z.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function S(Z,ae,pe){const ce=document.getElementById(Z);if(!ce)return;const ge=performance.now(),be=Se=>{const Me=Math.min(1,(Se-ge)/pe);ce.textContent=Math.round(ae*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(be):ce.textContent=ae};requestAnimationFrame(be)}setTimeout(()=>{S("pvp-score-me",v,800),S("pvp-score-opp",k,800)},1500);const M=u.p1Team.MIL||[],N=u.p2Team.MIL||[],ee=x(M)+$(M),O=x(N)+$(N),K=ee>=O?"p1":"p2";let H=u.boostValue;H==null&&(H=li(),u.boostValue=H,u.boostOwner=K,u.boostUsed=!1),me=!0,setTimeout(()=>{const Z=e.querySelector("#duel-row-"+(L?"me":"opp")),ae=e.querySelector("#duel-row-"+(L?"opp":"me")),pe=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),ge=L?pe:ce,be=L?ce:pe;ge&&(ge.style.fontSize="80px",ge.style.color=L?"#FFD700":"#ff6b6b",ge.style.animation="duelPulse .5s ease"+(L?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{Z&&(Z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Z.style.zIndex="5"),setTimeout(()=>{const Se=document.getElementById("duel-shock");Se&&(Se.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ee;const Se=document.getElementById("pvp-duel-finale");if(!Se)return;const Me=u.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Se.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(L?"⚽ "+u[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[l+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+Oe,Se.style.transition="opacity .45s ease",Se.style.opacity="1",Se.style.pointerEvents="auto",(Ee=document.getElementById("pvp-start-match"))==null||Ee.addEventListener("click",async()=>{const Ge=K;await Q({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:H,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function Le(m,y,x,$,v){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const L=Array.from({length:10},(M,N)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${N%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][N%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${L}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${$?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${x}
      </div>
      ${m!=null&&m.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${m.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let I=!1;const S=()=>{I||(I=!0,k.remove(),setTimeout(()=>v(),50))};k.addEventListener("click",S),setTimeout(S,3500)}function Fe(m,y,x){var H,Z;const $=(u.gcDefs||[]).find(ae=>{var pe;return ae.name===m||((pe=ae.name)==null?void 0:pe.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$==null?void 0:$.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[$==null?void 0:$.color]||"#b06ce0",L=($==null?void 0:$.name)||m,E=($==null?void 0:$.effect)||((H=Re[m])==null?void 0:H.desc)||"",I=$!=null&&$.image_url?`/icons/${$.image_url}`:null,S=((Z=Re[m])==null?void 0:Z.icon)||"⚡",N=y===o?"Vous":u[y+"Name"]||"Adversaire",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ee.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${k}66}50%{box-shadow:0 0 60px ${k}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${k};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${N} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${k};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${L.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${L}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ee);let O=!1;const K=()=>{O||(O=!0,ee.remove(),setTimeout(()=>x&&x(),50))};ee.addEventListener("click",K),setTimeout(K,3e3)}function Ce(m,y){var ee,O,K,H;const $=(u["gcCardsFull_"+o]||[]).find(Z=>Z.id===m),v=$==null?void 0:$._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",L={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",E=(v==null?void 0:v.name)||y,I=(v==null?void 0:v.effect)||((ee=Re[y])==null?void 0:ee.desc)||"Carte spéciale.",S=v!=null&&v.image_url?`/icons/${v.image_url}`:null,M=((O=Re[y])==null?void 0:O.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${L};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${L}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(K=N.querySelector("#pvp-gc-back"))==null||K.addEventListener("click",()=>N.remove()),(H=N.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{N.remove(),R(m,y)})}function we(){var $;const m=u[o+"Team"],y=Object.entries(m).flatMap(([v,k])=>(k||[]).filter(L=>!L.used).map(L=>({...L,_line:v})));if(!y.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(v=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",L=ze(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${L}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),($=x.querySelector("#bp-close"))==null||$.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const k=v.dataset.cid,L=y.find(I=>I.cardId===k);if(!L)return;const E=(m[L._line]||[]).find(I=>I.cardId===k);E&&(E.boost=(E.boost||0)+u.boostValue),x.remove(),await Q({[o+"Team"]:m,boostUsed:!0})})})}function W(m=null){var O,K;if(!(u.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const x=u[o+"Team"],$=u["usedSubIds_"+o]||[],v=u.maxSubs||3;if($.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const k=Object.entries(x).flatMap(([H,Z])=>(Z||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:H}))),L=(u[o+"Subs"]||[]).filter(H=>!$.includes(H.cardId));if(!k.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!L.length){f("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(H=>H.cardId===m));const I=((O=k[E])==null?void 0:O._line)||((K=k[E])==null?void 0:K.job);let S=Math.max(0,L.findIndex(H=>H.job===I)),M=!1;const N=document.createElement("div");N.id="pvp-sub-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var be,Se,Me,Oe,Ee,Ge;const H=k[E],Z=L[S],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),pe=Math.round(ae*1.35),ce=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;N.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${$.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ce(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${Z?We({...Z,used:!1,boost:0},ae,pe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ce(S>=L.length-1)}" ${S>=L.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${L.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ce(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${H?We({...H,used:!1,boost:0},ae,pe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ce(E>=k.length-1)}" ${E>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${k.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=N.querySelector("#psub-close"))==null||be.addEventListener("click",()=>N.remove()),(Se=N.querySelector("#pout-up"))==null||Se.addEventListener("click",()=>{E>0&&(E--,ee())}),(Me=N.querySelector("#pout-down"))==null||Me.addEventListener("click",()=>{E<k.length-1&&(E++,ee())}),(Oe=N.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{S>0&&(S--,ee())}),(Ee=N.querySelector("#pin-down"))==null||Ee.addEventListener("click",()=>{S<L.length-1&&(S++,ee())});const ge=(Ie,Ue,Ne,Je)=>{const He=N.querySelector("#"+Ie);if(!He)return;let Be=0;He.addEventListener("touchstart",Ke=>{Be=Ke.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",Ke=>{const Ze=Ke.changedTouches[0].clientY-Be;if(Math.abs(Ze)<30)return;const it=Ue();Ze<0&&it<Je-1?(Ne(it+1),ee()):Ze>0&&it>0&&(Ne(it-1),ee())},{passive:!0})};ge("pin-panel",()=>S,Ie=>S=Ie,L.length),ge("pout-panel",()=>E,Ie=>E=Ie,k.length),(Ge=N.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),M)return;M=!0;const Ue=k[E],Ne=L[S];if(!Ue||!Ne)return;const Je=Ue._line,He=(x[Je]||[]).findIndex(Ze=>Ze.cardId===Ue.cardId);if(He===-1){f("Erreur : joueur introuvable","error"),N.remove();return}const Be={...Ne,_line:Je,position:Ue.position,used:!1,boost:0};x[Je].splice(He,1,Be);const Ke=[...$,Ne.cardId];N.remove(),ne(Ue,Ne,async()=>{await Q({[o+"Team"]:x,[l+"Team"]:u[l+"Team"],["usedSubIds_"+o]:Ke})})})}document.body.appendChild(N),ee()}function ne(m,y,x){const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(I,S,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${$[I.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(I)?`<img src="${Pe(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(y,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(m,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let L=!1;const E=()=>{L||(L=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",E),setTimeout(E,2200)}function fe(){var y;const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",m.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[l+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(u[l+"Team"],u[l+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(m),(y=m.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>m.remove())}function U(){var $;const m=u.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=v=>{var L,E,I;if(v.type==="duel"){const S=v.isGoal,M=v.homeScored&&o==="p1"||!v.homeScored&&S&&o==="p2",N=v.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",ee=S?M?"⚽ BUT !":"⚽ BUT adversaire !":(L=v.homePlayers)!=null&&L.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${N};margin-bottom:4px">
          <div style="font-size:9px;color:${N};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ee}</div>
          ${(E=v.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${tt(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(I=v.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${tt(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
        </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${v.outPlayer?We({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${v.inPlayer?We({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${v.type==="goal"?"#FFD700":v.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${v.text||""}</div>
      </div>`};y.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${m.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...m].reverse().map(x).join("")}
      </div>`,document.body.appendChild(y),($=y.querySelector("#pvp-hist-close"))==null||$.addEventListener("click",()=>y.remove())}async function te(){if(u.phase!==o+"-attack")return;const m=o==="p1"?"p2":"p1",y=(u.round||0)+1,x=[...u.log||[]];x.push({type:"info",text:`⏭️ ${u[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const $=ke(u),v=he(m),k=$||!v?"finished":m+"-attack";await Q({["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:k,attacker:m,round:y,log:x}),k==="finished"&&await je(u)}async function J(){const m=u[o+"Team"],y=!["GK","DEF","MIL","ATT"].some(k=>(u[l+"Team"][k]||[]).some(L=>!L.used)),x=(u["selected_"+o]||[]).map(k=>{const L=(m[k._role]||[]).find(ee=>ee.cardId===k.cardId)||k,E=y&&["GK","DEF"].includes(k._role),I=m[k._role]||[],S=I.findIndex(ee=>ee.cardId===k.cardId),M=st(I.length),N=S>=0?M[S]:L._col??1;return{...L,_line:k._role,_col:N,...E?{note_a:Math.max(1,Number(L.note_a)||0)}:{}}});if(!x.length)return;const $=Vt(x,u.modifiers[o]||{});F(o,x.map(k=>k.cardId)),x.forEach(k=>{const L=(m[k._role]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!0)}),u["selected_"+o]=[],ue();const v=[...u.log||[]];if(y){const k=(u[o+"Score"]||0)+1,L=x.map(N=>({name:N.name,note:ze(N,N._line||"ATT"),portrait:Pe(N),job:N.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:L,homeTotal:$.total,aiTotal:0});const E=(u.round||0)+1,I=o==="p1"?"p2":"p1",S={...u,[o+"Team"]:m,[o+"Score"]:k},M=ke(S);B.add(E),Le(L,k,u[l+"Score"]||0,!0,async()=>{await Q({[o+"Team"]:m,[o+"Score"]:k,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:M?"finished":I+"-attack",attacker:I,round:E,log:v}),M&&await je({...u,[o+"Score"]:k})});return}v.push({type:"pending",text:`⚔️ ${u[o+"Name"]} attaque (${$.total})`}),await Q({[o+"Team"]:m,[l+"Team"]:u[l+"Team"],pendingAttack:{...$,players:x,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:l+"-defense",log:v})}async function de(){const m=u[o+"Team"],y=(u["selected_"+o]||[]).map(H=>{const Z=(m[H._role]||[]).find(be=>be.cardId===H.cardId)||H,ae=m[H._role]||[],pe=ae.findIndex(be=>be.cardId===H.cardId),ce=st(ae.length),ge=pe>=0?ce[pe]:Z._col??1;return{...Z,_line:H._role,_col:ge}}),x=Yt(y,u.modifiers[o]||{});F(o,y.map(H=>H.cardId)),y.forEach(H=>{const Z=(m[H._role]||[]).find(ae=>ae.cardId===H.cardId);Z&&(Z.used=!0)}),u["selected_"+o]=[],ue();const $=Wt(u.pendingAttack.total,x.total,u.modifiers[o]||{}),v=u.pendingAttack.side,k=$==="attack"||($==null?void 0:$.goal),L=v==="p1"?"p2":"p1",E=(u.round||0)+1,I=(u.pendingAttack.players||[]).map(H=>({name:H.name,note:ze(H,H._line||"ATT"),portrait:Pe(H),job:H.job})),S=[...u.log||[]];S.push({type:"duel",isGoal:k,homeScored:k&&v===o,text:k?`⚽ BUT de ${u[v+"Name"]} ! (${u.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${x.total})`,homePlayers:I,aiPlayers:y.map(H=>({name:H.name,note:ze(H,H._line||"DEF"),portrait:Pe(H),job:H.job})),homeTotal:u.pendingAttack.total,aiTotal:x.total});const M=k?(u[v+"Score"]||0)+1:u[v+"Score"]||0,N={...u,[o+"Team"]:m,[v+"Score"]:M},ee=ke(N),O=ee?"finished":L+"-attack",K=async()=>{await Q({[o+"Team"]:m,[l+"Team"]:u[l+"Team"],[v+"Score"]:M,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:O,attacker:L,round:E,log:S}),(O==="finished"||ee)&&await je({...u,[v+"Score"]:M})};if(k){const H=v===o,Z=H?M:u[o+"Score"]||0,ae=H?u[l+"Score"]||0:M;B.add(E),Le(I,Z,ae,H,K)}else await K()}function ve(m){return["MIL","ATT"].some(y=>(m[y]||[]).some(x=>!x.used))}function Te(m){return["GK","DEF","MIL","ATT"].some(y=>(m[y]||[]).some(x=>!x.used))}function $e(m){return Te(m)&&!ve(m)}function he(m){const y=u[m+"Team"],x=u[(m==="p1"?"p2":"p1")+"Team"];return!!(ve(y)||!Te(x)&&$e(y))}function ke(m){const y=["MIL","ATT"].some(S=>(m.p1Team[S]||[]).some(M=>!M.used)),x=["MIL","ATT"].some(S=>(m.p2Team[S]||[]).some(M=>!M.used)),$=Te(m.p1Team),v=Te(m.p2Team);return!y&&!(!v&&$)&&(!x&&!(!$&&v))}function qe(m){const y=m.p1Score||0,x=m.p2Score||0;return y===x?null:y>x?w.home_id:w.away_id}async function je(m){try{const y=qe(m),x=y?w.home_id===y?w.away_id:w.home_id:null,$=m.p1Score||0,v=m.p2Score||0;await z.from("matches").update({status:"finished",winner_id:y,home_score:$,away_score:v}).eq("id",i);const{data:k}=await z.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await z.from("mini_league_matches").update({home_score:$,away_score:v,status:"finished"}).eq("id",k.id);const{data:L}=await z.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((L||[]).every(I=>I.status==="finished"||I.status==="bye")){const{data:I}=await z.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(I){const S=(I.current_day||0)+1,M=S>(I.total_days||0);await z.from("mini_leagues").update({current_day:M?I.total_days:S,status:M?"finished":"active"}).eq("id",k.league_id)}}}y&&x&&Si(y,x).catch(()=>{})}catch(y){console.error("[ML] finishMatch:",y)}}function _(){var v;if(g&&document.getElementById("pvp-end-overlay"))return;g=!0;const m=u[o+"Score"],y=u[l+"Score"],x=m>y,$=m===y;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":$?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":$?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${m} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{z.removeChannel(V)}catch{}Ve(e),c("mini-league",a?{openLeagueId:a}:{})})}ue()}const yr="/",br=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function hr(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const s=()=>{var o,l,b;const c=t[n],f=n===t.length-1,a=Math.round((n+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${a}%;background:${c.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${c.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${c.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${yr}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${c.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${c.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${f?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${f?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(h=>{h.style.paddingLeft="20px",h.style.marginTop="6px",h.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(h=>{h.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(h=>{h.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,s()}),(l=d.querySelector("#tuto-next"))==null||l.addEventListener("click",()=>{f?r():(n++,s())}),(b=d.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await z.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),s()}async function vr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:s}=await z.rpc("get_tutorial_steps");if(!s&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:c,error:f}=await z.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(c==null?void 0:c.length)>0?(n=c,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${s==null?void 0:s.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):br;hr(e,r,()=>t("boosters"))}const wr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function zt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Ji(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function ei(e,t){const n=t?wr[t]||"#bbb":"#d0d0d0",d=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${n};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${d}</div>`}function Xi(e){const i=oi(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Zi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function _r(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ii(e,t)}async function Ii(e,t){const{state:i,toast:n}=t,{data:d}=await z.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:s}=await z.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(p=>p.seller_id!==i.profile.id),c=s||[];e.innerHTML=`
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
  </div>`;let f="buy";const a=()=>{var p,u,g,T,j,D,q;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((g=document.getElementById("flt-country"))==null?void 0:g.value)||"").toLowerCase().trim(),job:((T=document.getElementById("flt-job"))==null?void 0:T.value)||"",rarity:((j=document.getElementById("flt-rarity"))==null?void 0:j.value)||"",note1:parseInt((D=document.getElementById("flt-note1"))==null?void 0:D.value)||0,note2:parseInt((q=document.getElementById("flt-note2"))==null?void 0:q.value)||0}};function o(p){const u=a();return p.filter(g=>{var V,Q,se;const T=(V=g.card)==null?void 0:V.player;if(!T)return!1;const j=`${T.firstname} ${T.surname_encoded}`.toLowerCase(),D=(((Q=T.clubs)==null?void 0:Q.encoded_name)||"").toLowerCase(),q=(T.country_code||"").toLowerCase(),B=((se=g.card)==null?void 0:se.evolution_bonus)||0,C=zt(T,T.job,B),G=T.job2?zt(T,T.job2,B):0;return!(u.name&&!j.includes(u.name)||u.club&&!D.includes(u.club)||u.country&&!q.includes(u.country)||u.job&&T.job!==u.job||u.rarity&&T.rarity!==u.rarity||u.note1&&C<u.note1||u.note2&&G<u.note2)})}function l(p){var q,B,C,G;const u=(q=p.card)==null?void 0:q.player;if(!u)return"";const g=((B=p.card)==null?void 0:B.evolution_bonus)||0,T=zt(u,u.job,g),j=u.job2?zt(u,u.job2,g):0,D=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Ji(u.rarity)}
      ${ei(T,u.job)}
      ${ei(j,u.job2||null)}
      ${Xi(u.country_code)}
      ${Zi((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((G=p.seller)==null?void 0:G.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${D?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${D?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(p){var q,B,C,G;const u=(q=p.card)==null?void 0:q.player;if(!u)return"";const g=((B=p.card)==null?void 0:B.evolution_bonus)||0,T=zt(u,u.job,g),j=u.job2?zt(u,u.job2,g):0,D=p.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${D?"opacity:0.7":""}">
      ${Ji(u.rarity)}
      ${ei(T,u.job)}
      ${ei(j,u.job2||null)}
      ${Xi(u.country_code)}
      ${Zi((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:${D?"#22c55e":"#999"};margin-top:1px">
          ${D?`✅ Vendu à ${((G=p.buyer)==null?void 0:G.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${D?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function h(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=f==="buy"?"flex":"none",f==="buy"){const g=o(r);p.innerHTML=g.length?g.map(l).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const g=c.filter(j=>j.status==="active").sort((j,D)=>new Date(D.listed_at)-new Date(j.listed_at)),T=c.filter(j=>j.status==="sold").sort((j,D)=>new Date(D.sold_at||D.listed_at)-new Date(j.sold_at||j.listed_at));p.innerHTML=(g.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${g.length})</div>`+g.map(b).join(""):"")+(T.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${T.length})</div>`+T.map(b).join(""):"")+(!g.length&&!T.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(g=>g.addEventListener("click",()=>$r(g.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(g=>g.addEventListener("click",()=>Er(g.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{f=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const g=u===p;u.style.background=g?"var(--green)":"#fff",u.style.color=g?"#fff":"var(--gray-600)",u.style.borderColor=g?"var(--green)":"var(--gray-200)"}),h()})});let w;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(w),w=setTimeout(h,250)})}),h()}async function $r(e,t,i,n){const{state:d,toast:s,refreshProfile:r}=n,c=t.find(o=>o.id===e);if(!c)return;const f=c.price;if((d.profile.credits||0)<f){s("Crédits insuffisants","error");return}kr(c,async()=>{const{error:o}=await z.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){s("Erreur achat : "+o.message,"error");return}await r();const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),s("✅ Carte achetée !","success"),await Ii(i,n)})}function kr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const s=c=>{d.remove(),c&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>s(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>s(!0)),d.addEventListener("click",c=>{c.target===d&&s(!1)})}async function Er(e,t,i){const{toast:n}=i,{data:d}=await z.from("market_listings").select("card_id").eq("id",e).single();if(await z.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:s}=await z.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");s||await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Ii(t,i)}async function Tr(e,t){var o,l,b,h;const{state:i,navigate:n}=t,d=((l=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:l.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:s},{data:r}]=await Promise.all([z.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),z.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let c=d;function f(){var p,u;const w=document.getElementById("rankings-list");if(w){if(c==="global"){const g=s||[];w.innerHTML=g.length>0?g.map((T,j)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${T.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${j<3?["#D4A017","#a0a0a0","#cd7f32"][j]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${j<3?"16":"13"}px">${j<3?["🥇","🥈","🥉"][j]:j+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${T.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${T.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${T.trophies_top1} 🥈${T.trophies_top2} 🥉${T.trophies_top3}</div>
            <div style="color:var(--gray-600)">${T.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const g=r||[];w.innerHTML=g.length>0?g.map((T,j)=>{const D=Bt(T.mmr??1e3),q=(T.ranked_wins||0)+(T.ranked_losses||0)+(T.ranked_draws||0),B=q>0?Math.round((T.ranked_wins||0)/q*100):0,C=T.id===i.profile.id,G=(T.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${C?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${j<3?["#D4A017","#a0a0a0","#cd7f32"][j]:"rgba(255,255,255,0.08)"};color:${j<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${j<3?"16":"13"}px">${j<3?["🥇","🥈","🥉"][j]:j+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${D.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${T.club_name} · ${D.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:16px;font-weight:900;color:${D.color}">${G?"?":T.mmr}</div>
              <div style="font-size:10px;color:var(--gray-600)">${G?"Placement":`${B}% WR`}</div>
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=a(c==="global")),(u=document.getElementById("tab-ranked"))!=null&&u.style&&(document.getElementById("tab-ranked").style.cssText=a(c==="ranked"))}}const a=w=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${a(c==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${a(c==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(b=document.getElementById("tab-global"))==null||b.addEventListener("click",()=>{c="global",f()}),(h=document.getElementById("tab-ranked"))==null||h.addEventListener("click",()=>{c="ranked",f()})}async function Ar(e,t){var B,C,G;const{state:i,navigate:n,toast:d}=t,s=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:c}]=await Promise.all([z.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),z.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",s.id).single()]);if(!c){d("Erreur chargement profil","error"),n("home");return}const f=c.mmr??1e3,a=c.mmr_deviation??350,o=c.mmr_volatility??.06,l=c.placement_matches??0,b=l<10,h=Math.max(0,10-l),w=Bt(f),p=Wn(f),u=Nt.findIndex(V=>V.id===w.id),g=Nt[u+1]||null,T={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},j=(c.ranked_wins||0)+(c.ranked_losses||0)+(c.ranked_draws||0),D=j>0?Math.round((c.ranked_wins||0)/j*100):0,q=Nt.map(V=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${w.id===V.id?1:.35};
      transform:${w.id===V.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${w.id===V.id?"28px":"20px"}">${V.emoji}</div>
      <div style="font-size:9px;color:${V.color};font-weight:${w.id===V.id?"900":"400"};letter-spacing:0.5px">${V.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${T[w.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${w.color}40">
      <div style="font-size:52px;margin-bottom:4px">${w.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${w.color};letter-spacing:3px;text-transform:uppercase">${w.label}</div>
      <div style="font-size:32px;font-weight:900;color:#fff;margin-top:4px">${f} <span style="font-size:14px;color:rgba(255,255,255,0.5);font-weight:400">MMR</span></div>
      ${a>100?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">Incertitude ±${Math.round(a)} — Jouez plus pour stabiliser votre rang</div>`:""}
    </div>

    <!-- Progression bar -->
    ${w.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${w.emoji} ${w.label}</span>
        ${g?`<span>${g.emoji} ${g.label} (${g.min} MMR)</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${w.color},${w.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${g?g.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${q}
    </div>

    <!-- Placement / Stats -->
    ${b?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${l}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${h} match${h>1?"s":""} — gains et pertes ×2</div>
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
        background:linear-gradient(135deg,${w.color},${w.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${w.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(B=document.getElementById("ranked-back"))==null||B.addEventListener("click",()=>n("home")),(C=document.getElementById("ranked-leaderboard-btn"))==null||C.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(G=document.getElementById("ranked-play-btn"))==null||G.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:f,rd:a,sigma:o,isPlacement:b}})})}async function zr(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(s||[]).filter(o=>o.status==="finished"),f=(s||[]).filter(o=>o.status==="in_progress");function a(o){const l=o.home_id===d.id;l?o.home_score:o.away_score,l?o.away_score:o.home_score;const b=o.winner_id===d.id,h=o.home_score===o.away_score&&o.status==="finished",w=o.status!=="finished"?"…":h?"N":b?"V":"D",p=o.status!=="finished"||h?"#888":b?"#1A6B3C":"#c0392b";let u=r[o.mode]||o.mode;o.away_id===null&&!u.startsWith("IA")&&(u="IA");const T=o.home_id===d.id?o.away:o.home;let j;o.away_id===null?j=u:T?j=`${T.club_name||T.pseudo} (${T.pseudo})`:j="Adversaire";let D="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(o.created_at),B=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),C=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${j}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${B}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${C}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${w}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(s||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${f.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${f.map(a).join("")}
        </div>`:""}

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(a).join("")}
        </div>`:""}

      ${(s||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}jo(qo);const De={user:null,profile:null,page:"home",params:{}};function St(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Sr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function $i(){document.getElementById("modal-overlay").classList.add("hidden")}async function Dt(){if(!De.user)return;const{data:e}=await z.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Rt(e,t={}){De.page=e,De.params=t,Mo()}async function Mo(){var n,d,s,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Rt,toast:St,openModal:Sr,closeModal:$i,refreshProfile:Dt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Di(e,i);break;case"collection":await on(e,i);break;case"decks":await yi(e,i);break;case"boosters":await bn(e,i);break;case"ranked":await Ar(e,i);break;case"match":{const c=De.params&&De.params.matchMode||"vs_ai_easy";c==="random"?await wi(e,i,!1):c==="ranked"?await wi(e,i,!0):c==="friend"?await er(e,i,(n=De.params)==null?void 0:n.friendId,(d=De.params)==null?void 0:d.friendName):c==="mini-league"?await Wi(e,i,(s=De.params)==null?void 0:s.mlMatchId,(r=De.params)==null?void 0:r.leagueId):await Ln(e,i);break}case"market":await _r(e,i);break;case"rankings":await Tr(e,i);break;case"matches":await zr(e,i);break;case"friends":await Ro(e,i);break;case"mini-league":await or(e,i);break;case"match-mini-league":{const c=De.params||{};await Wi(e,i,c.mlMatchId,c.leagueId);break}default:await Di(e,i)}}function Lr(){var n;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),Rt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Rt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Rt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Mr())}async function Mr(){const{data:e}=await z.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Ir(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&$i()}),document.getElementById("modal-close").addEventListener("click",$i);const{data:{session:e}}=await z.auth.getSession();if(!e){Qi(),qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:St});return}De.user=e.user,await Dt(),Qi();try{const{data:i}=await z.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),Co(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){Fo(document.getElementById("app"),{state:De,navigate:async()=>{await Dt(),mi()},toast:St,refreshProfile:Dt});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){Tn(document.getElementById("app"),{state:De,navigate:()=>mi(),toast:St,refreshProfile:Dt});return}mi(),setTimeout(()=>vr(De.profile,Rt,St),800),z.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:St}))})}function jr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ui(){const e=document.getElementById("app");e&&(e.style.height=jr()+"px")}window.addEventListener("resize",ui);window.addEventListener("orientationchange",()=>setTimeout(ui,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ui);function mi(){const e=()=>{var i;(i=De.user)!=null&&i.id&&z.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ui(),Lr(),Mo()}function Qi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Io(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Ir().catch(e=>{console.error("Échec du démarrage:",e),Io()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Io("Le serveur met trop de temps à répondre.")},12e3);
