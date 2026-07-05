const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-5A-YoKwp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as z,F as _i,i as Ht,k as Zi,l as nt,m as ji,f as Pt,n as Lo,T as ci,j as Io,o as Mo,b as jo}from"./formation-links-5A-YoKwp.js";const Co="/";function Ci(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,c,f,a,o,l;const s=n==="login";e.innerHTML=`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{n="register",d()}),s?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var h;b.key==="Enter"&&((h=document.getElementById("login-btn"))==null||h.click())}),(a=document.getElementById("login-btn"))==null||a.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),h=document.getElementById("login-password").value,$=document.getElementById("login-error");if($.textContent="",!b||!h){$.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await z.auth.signInWithPassword({email:b,password:h});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){$.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",b=>{var h;b.key==="Enter"&&((h=document.getElementById("reg-btn"))==null||h.click())}),(l=document.getElementById("reg-btn"))==null||l.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),h=document.getElementById("reg-password").value,$=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!b||!h||!$){p.textContent="Remplissez tous les champs.";return}if(h.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(h!==$){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:m}=await z.auth.signUp({email:b,password:h});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,m){p.textContent=m.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const A=document.getElementById("login-email");A&&(A.value=b)},50)}))};d()}function qo(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let s="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function c(){var $;const a=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),l=(($=document.getElementById("setup-club"))==null?void 0:$.value)||"MW",b=l.trim().split(" ").filter(Boolean),h=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():l.slice(0,2).toUpperCase();a&&(a.style.background=r,a.style.borderColor=s),o&&(o.textContent=h,o.style.color=s)}document.getElementById("color1").addEventListener("input",a=>{s=a.target.value,document.getElementById("swatch1").style.background=s,c()}),document.getElementById("color2").addEventListener("input",a=>{r=a.target.value,document.getElementById("swatch2").style.background=r,c()});function f(a){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${a}`).classList.add("active"),document.getElementById("step-num").textContent=a,document.getElementById("progress-fill").style.width=`${Math.round(a/3*100)}%`,a===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",a.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:l}=await z.from("users").select("id").eq("pseudo",a).maybeSingle();if(l){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const a=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",a.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:l}=await z.from("users").select("id").eq("club_name",a).maybeSingle();if(l){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const a=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),l=document.getElementById("step3-error"),b=document.getElementById("step3-finish");l.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:h}=await z.from("users").insert({id:t.user.id,pseudo:a,club_name:o,club_color1:s,club_color2:r,credits:1e4});if(h)throw h;await Bo(t.user.id),await d(),n(`Bienvenue ${a} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(h){l.textContent=h.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Bo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await z.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Fo="modulepreload",Do=function(e){return"/"+e},qi={},ni=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(f=>{if(f=Do(f),f in qi)return;qi[f]=!0;const a=f.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Fo,a||(l.as="script"),l.crossOrigin="",l.href=f,c&&l.setAttribute("nonce",c),document.head.appendChild(l),a)return new Promise((b,h)=>{l.addEventListener("load",b),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return d.then(r=>{for(const c of r||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},Nt="#1A6B3C",Rt="#cc2222",Go="#D4A017",Bi="#888";async function Po(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Qi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ro(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>eo(i,n,null,t))}async function Qi(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:s,error:r}=await z.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:c}=await z.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),f=document.getElementById("pending-badge");f&&(c>0?(f.style.display="flex",f.textContent=c):f.style.display="none");const a=document.getElementById("friends-list");if(!a)return;if(r){console.error("[Friends] Erreur:",r),a.innerHTML=`<div style="color:${Rt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(s||[]).map(h=>h.requester_id===d?h.addressee_id:h.requester_id);let l={};if(o.length){const{data:h}=await z.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(h||[]).forEach($=>{l[$.id]=$})}const b=(s||[]).map(h=>({friendshipId:h.id,friend:l[h.requester_id===d?h.addressee_id:h.requester_id]||{pseudo:"?"}}));if(!b.length){a.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}a.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:h,friend:$})=>No($,h)).join("")}
    </div>`,a.querySelectorAll("[data-stats]").forEach(h=>{h.addEventListener("click",()=>Oo(e,h.dataset.stats,h.dataset.friendName))}),a.querySelectorAll("[data-match]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.friendId,p=h.dataset.friendName;console.log("[Friends] clic match",{fid:$,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:$,friendName:p}):t("Erreur navigation","error")})})}function No(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),s=e.club_color2||Nt,r=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,f=c&&Date.now()-c.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Go};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ro(e,t){const i=$i();i.innerHTML=`
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
    ${ki()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),s=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",s),i.addEventListener("click",r=>{r.target===i&&s()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:c}=await z.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!c){d.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await z.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:a}=await z.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(a){d.textContent="Erreur : "+a.message;return}s(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function eo(e,t,i=null,n={}){const d=e.user.id,{data:s}=await z.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(s||[]).map(b=>b.requester_id);let c={};if(r.length){const{data:b}=await z.from("users").select("id, pseudo, club_name").in("id",r);(b||[]).forEach(h=>{c[h.id]=h})}const f=(s||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),a=$i(),o=f||[];a.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(b=>{var h,$,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((h=b.requester)==null?void 0:h.club_name)||(($=b.requester)==null?void 0:$.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=b.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Nt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Rt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ki()}`,document.body.appendChild(a);const l=()=>a.remove();a.querySelector("#pending-close").addEventListener("click",l),a.addEventListener("click",b=>{b.target===a&&l()}),a.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:h}=await z.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(h){t("Erreur : "+h.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Qi(e,t,n),i&&i()})}),a.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await z.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Oo(e,t,i){const n=e.user.id,[d,s]=[n,t].sort(),r=n===d,{data:c}=await z.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",s).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",a=c||{},o=r?a.wins_p1||0:a.wins_p2||0,l=r?a.wins_p2||0:a.wins_p1||0,b=a.draws||0,h=r?a.goals_p1||0:a.goals_p2||0,$=r?a.goals_p2||0:a.goals_p1||0,p=r?a.gc_used_p1||0:a.gc_used_p2||0,u=r?a.gc_used_p2||0:a.gc_used_p1||0,m=a.matches_total||0,A=(D,q,B,C=Nt,P=Rt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${C}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${D}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${P}">${B}</div>
    </div>`,j=$i();j.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${m===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${A("Victoires",o,l)}
        ${A("Nuls",b,b,Bi,Bi)}
        ${A("Défaites",l,o)}
        ${A("Buts marqués",h,$)}
        ${A("Buts encaissés",$,h,Rt,Nt)}
        ${A("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${m} match${m>1?"s":""} joué${m>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ki()}`,document.body.appendChild(j),j.querySelector("#stats-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",D=>{D.target===j&&j.remove()})}function $i(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ki(){return`
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
    </style>`}async function to({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:s}){const[r,c]=[e,t].sort(),f=e!==r,a=f?n:i,o=f?i:n,l=f?s:d,b=f?d:s,h=a>o?1:0,$=o>a?1:0,p=a===o?1:0,{data:u}=await z.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",c).single();u?await z.from("friend_match_stats").update({wins_p1:u.wins_p1+h,wins_p2:u.wins_p2+$,draws:u.draws+p,goals_p1:u.goals_p1+a,goals_p2:u.goals_p2+o,gc_used_p1:u.gc_used_p1+l,gc_used_p2:u.gc_used_p2+b,matches_total:u.matches_total+1}).eq("player1_id",r).eq("player2_id",c):await z.from("friend_match_stats").insert({player1_id:r,player2_id:c,wins_p1:h,wins_p2:$,draws:p,goals_p1:a,goals_p2:o,gc_used_p1:l,gc_used_p2:b,matches_total:1})}const Ho="2026.07.05-1208";async function Fi(e,{state:t,navigate:i,toast:n}){var s,r;const d=t.profile;d&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",f=>{f.preventDefault(),i(c.dataset.nav)})}),(s=document.getElementById("nav-rankings"))==null||s.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const f=c.dataset.action;if(f==="match-ai"){Yo(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var D,q,B,C,P,J;const c=((D=window.visualViewport)==null?void 0:D.height)||window.innerHeight,f=((q=document.querySelector(".top-nav"))==null?void 0:q.offsetHeight)||56,a=((B=document.querySelector(".bottom-nav"))==null?void 0:B.offsetHeight)||60,o=((C=e.querySelector(".hero-compact"))==null?void 0:C.offsetHeight)||52,l=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((J=(P=e.querySelector("#logout-btn"))==null?void 0:P.closest("div"))==null?void 0:J.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((Z,se)=>{var re;return Z+(((re=document.getElementById(se))==null?void 0:re.offsetHeight)||0)},0),$=14*5,p=c-f-a-o-b-h-$,u=Math.max(80,Math.round(p*.28)),m=Math.max(160,Math.round(p*.72)),A=Math.floor((m-10)/2);l&&(l.style.minHeight=l.style.maxHeight=u+"px"),e.querySelectorAll(".play-grid .play-card").forEach(Z=>{Z.style.minHeight=Z.style.height=A+"px"});const j=Math.round(A*.55);e.querySelectorAll(".play-card .play-icon").forEach(Z=>{Z.style.height=j+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await z.auth.signOut(),window.location.reload()}),oo(t,n),Vo(t,n,i),io(t,n,i))}async function io(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:s}=await z.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(s!=null&&s.length)){n.innerHTML="";return}const r=s.map(f=>f.home_id===d?f.away_id:f.home_id).filter(Boolean);let c={};if(r.length){const{data:f}=await z.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(a=>{c[a.id]=a.club_name||a.pseudo})}n.innerHTML=s.map(f=>{const a=f.home_id===d?f.away_id:f.home_id,o=c[a]||"Adversaire",l=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${l?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${l?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${a}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const a=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await z.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ni(async()=>{const{resumePvpMatch:l}=await Promise.resolve().then(()=>Yn);return{resumePvpMatch:l}},void 0);o(a,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Ko(async()=>{await Uo(f.dataset.abandon,f.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),io(e,t,i)})})})}async function Uo(e,t,i){const{data:n}=await z.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,s=d?0:3,r=d?3:0,c=n.game_state||{};c.p1Score=s,c.p2Score=r,c.phase="finished",c.forfeit=!0,await z.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:s,away_score:r,game_state:c}).eq("id",e)}function Ko(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Vo(e,t,i){var c,f,a,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await z.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const s=((c=d.inviter)==null?void 0:c.club_name)||((f=d.inviter)==null?void 0:f.pseudo)||"?",r=d.inviter_id;n.innerHTML=`
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
    </div>`,(a=document.getElementById("match-inv-accept"))==null||a.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:s})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await z.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function oo(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await z.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const s=n.length,r=n.slice(0,2).map(f=>{var a;return((a=f.requester)==null?void 0:a.pseudo)||"?"}).join(", "),c=s>2?` +${s-2}`:"";i.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{eo(e,t,()=>oo(e,t))})}function Yo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ze(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Di=["ATT","MIL","DEF","GK"];function no(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const s=e[n],r=e[d];if(!s||!r)continue;const c=s._col!=null&&r._col!=null&&s._col===r._col,f=s._col!=null&&r._col!=null&&Math.abs(s._col-r._col)===1,a=Di.indexOf(s._line||s.job),o=Di.indexOf(r._line||r.job),l=Math.abs(a-o)===1;if(!((s._line||s.job)===(r._line||r.job)&&f||c&&l))continue;const $=s.country_code&&r.country_code&&s.country_code===r.country_code,p=s.club_id&&r.club_id&&s.club_id===r.club_id;$&&p?t+=2:($||p)&&(t+=1)}return t}function Ut(e,t={}){const i=e.reduce((s,r)=>{const c=r._line||r.job,f=r.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return s+(Number(c==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+f},0),n=no(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Kt(e,t={}){const i=e.reduce((s,r)=>{const c=r._line||r.job;let f=0;c==="GK"?f=Number(r.note_g)||0:c==="MIL"?f=Number(r.note_m)||0:f=Number(r.note_d)||0;const a=r.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return s+f+(r.boost||0)+a},0),n=no(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Vt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function ro(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,c)=>{const f=t==="attack"?ze(r,"ATT"):r._line==="GK"?ze(r,"GK"):ze(r,"DEF");return(t==="attack"?ze(c,"ATT"):c._line==="GK"?ze(c,"GK"):ze(c,"DEF"))-f});let s=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(s,d.length,3))}function Wo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ao={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Ei(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=Ti(i),s=Number(i[t])||0;if(s<=0)return 0;const r=i.note_min??1,c=i.note_max??10,a=(e.current_note??d)-d;return Math.min(c,Math.max(r,s+a))}function Ti(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ai(e,t){!e||!t||await Promise.all([gi(e,"win"),gi(t,"loss")])}async function gi(e,t){const{data:i}=await z.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var s,r;return((s=d.player)==null?void 0:s.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const s=ao[d.player.rarity],r=t==="win"?s.win:s.loss,c=d.player.note_min??1,f=d.player.note_max??10,a=Ti(d.player),o=d.current_note??a,l=Math.min(f,Math.max(c,o+r));return z.from("cards").update({current_note:l}).eq("id",d.id)}))}async function Jo(e,t){return gi(e,t)}const so=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:ao,applyOwnEvolution:Jo,currentSecondaryNote:Ei,getBaseMainNote:Ti,updateEvolutiveCards:Ai},Symbol.toStringTag,{value:"Module"})),lo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ft={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Yt=["GK","DEF","MIL","ATT"],Xo=["Tous","GK","DEF","MIL","ATT"],Zo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Gi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Qo(e){return e.length?e.reduce((t,i)=>Gi(i)>Gi(t)?i:t,e[0]):e[0]}function co(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const zi={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function po(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function St(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function pi(e,t=""){var $,p;const i=e.player;if(!i)return"";const n=i.job||"ATT",d=Ft[n],s=lo[i.rarity]||"#ccc",r=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,f=(r&&e.current_note!=null?e.current_note:St(i,n))+c,a=i.job2?r?Ei(e,co(i.job2)):St(i,i.job2):null,o=a!=null?a>0?a+c:a:null,l=i.job2?Ft[i.job2]:null,b=po(i),h=zi[i.country_code]||i.country_code||"";return`
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
        ${($=i.clubs)!=null&&$.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((p=i.clubs)==null?void 0:p.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Pi(e){const t=e.job||"ATT",i=St(e,t),n=zi[e.country_code]||e.country_code||"";return`
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
  </div>`}async function en(e,t){const{state:i,navigate:n,toast:d,openModal:s,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await z.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await z.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),a=(c||[]).filter(V=>V.card_type==="player"&&V.player),o=(c||[]).filter(V=>V.card_type==="game_changer"),l=(c||[]).filter(V=>V.card_type==="formation"),b=(c||[]).filter(V=>V.card_type==="stadium"),{data:h}=await z.from("gc_definitions").select("name,gc_type,color,effect,image_url"),$={};(h||[]).forEach(V=>{$[V.name]=V});const{data:p}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(V=>{u[V.id]=V}),b.forEach(V=>{V.stadium_def&&(u[V.stadium_id]=V.stadium_def)});const m=Object.keys(_i),A=Object.keys(Re),j={};a.forEach(V=>{const oe=V.player.id;j[oe]=(j[oe]||0)+1}),new Set(Object.keys(j).map(V=>String(V)));const D=new Set(l.map(V=>V.formation)),q=new Set(o.map(V=>V.gc_type));let B="player",C="Tous",P="",J=!1;function Z(){return[...a].sort((V,oe)=>{const fe=Yt.indexOf(V.player.job),U=Yt.indexOf(oe.player.job);return fe!==U?fe-U:(V.player.surname_encoded||"").localeCompare(oe.player.surname_encoded||"")})}function se(){return[...f||[]].sort((V,oe)=>{const fe=Yt.indexOf(V.job),U=Yt.indexOf(oe.job);return fe!==U?fe-U:(V.surname_encoded||"").localeCompare(oe.surname_encoded||"")})}function re(){return Z().filter(V=>{const oe=V.player,fe=C==="Tous"||oe.job===C,U=!P||`${oe.firstname} ${oe.surname_encoded}`.toLowerCase().includes(P);return fe&&U})}function Q(){return se().filter(V=>{const oe=C==="Tous"||V.job===C,fe=!P||`${V.firstname} ${V.surname_encoded}`.toLowerCase().includes(P);return oe&&fe})}e.innerHTML=`
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
  </div>`;function O(){const V=document.getElementById("col-filters");V&&(B==="player"?(V.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${P}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Xo.map(oe=>`
            <button class="filter-btn" data-job="${oe}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${oe===C?"var(--green)":"var(--gray-200)"};
                background:${oe===C?"var(--green)":"#fff"};
                color:${oe===C?"#fff":"var(--gray-600)"}">
              ${oe}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${J?"var(--yellow)":"var(--gray-200)"};
              background:${J?"var(--yellow)":"#fff"};
              color:${J?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${J?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",oe=>{P=oe.target.value.toLowerCase(),F()}),e.querySelectorAll(".filter-btn").forEach(oe=>{oe.addEventListener("click",()=>{C=oe.dataset.job,O(),F()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{J=!J,O(),F()})):(V.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${J?"var(--yellow)":"var(--gray-200)"};
              background:${J?"var(--yellow)":"#fff"};
              color:${J?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${J?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{J=!J,O(),F()})))}function F(){const V=document.getElementById("col-grid");V&&(B==="player"?Le(V):B==="formation"?Fe(V):B==="stadium"?we(V):Ce(V))}function ne(V,oe,fe,U,te){const Y=document.getElementById("col-grid"),de=document.getElementById("col-big");if(!Y||!de)return;var ve=0;function Te(){const $e=window.innerWidth>=768,be=document.getElementById("col-big"),ke=document.getElementById("col-grid");$e&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),$e&&ke&&(ke.style.height=Math.round(310*.76+16)+"px",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.padding="8px 16px"),de.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+oe(V[ve])+"</div>";var qe=de.querySelector("[data-card-id],[data-form-id],[data-gc-id]");qe&&qe.addEventListener("click",function(){U(V[ve])}),requestAnimationFrame(function(){var je=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!je||!de)){var w=de.clientHeight-8,T=de.clientWidth-24,g=je.offsetHeight,y=je.offsetWidth;if(g>0&&y>0&&w>40){var x=$e?2.2:1,_=Math.min(w/g,T/y,x);je.style.transform="scale("+_.toFixed(3)+")",je.style.transformOrigin="top center"}}}),Y.innerHTML=V.map(function(je,w){var T=w===ve,g="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(T?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+g+'">'+fe(je,T)+"</div>"}).join(""),Y.querySelectorAll(".col-mini-item").forEach(function(je){je.addEventListener("click",function(){ve=Number(je.dataset.idx),Te(),je.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Te()}function ue(V){var oe=window.innerWidth>=768?.76:.54,fe;if(!V||V._fake){var U=V?V.player:null;if(!U)return"";fe=Pi(U)}else fe=pi(V,"");return'<div style="display:inline-block;zoom:'+oe+';pointer-events:none;line-height:0">'+fe+"</div>"}function ye(V,oe,fe){oe=oe||100,fe=fe||140;var U=Ht[V]||{},te={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},Y=Math.max(3,Math.round(oe*.06)),de=Object.entries(U).map(function(Te){var $e=Te[0],be=Te[1],ke=$e.replace(/\d+$/,""),qe=te[ke]||"#888",je=Math.round(be.x*oe),w=Math.round(be.y*fe);return'<circle cx="'+je+'" cy="'+w+'" r="'+Y+'" fill="'+qe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(oe/50));return'<svg viewBox="0 0 '+oe+" "+fe+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+oe+'" height="'+fe+'" fill="#1A6B3C"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(fe*.02)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(fe*.5)+'" x2="'+oe+'" y2="'+Math.round(fe*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(oe*.5)+'" cy="'+Math.round(fe*.5)+'" rx="'+Math.round(oe*.18)+'" ry="'+Math.round(fe*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(fe*.82)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(fe*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+de+"</svg>"}function me(V,oe,fe){var U=fe>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+fe+"</div>":"",te=oe?'data-form-id="'+oe.id+'"':"",Y=V.length>7?14:V.length>5?16:19,de=!!oe;return"<div "+te+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(de?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(de?"":"filter:grayscale(1);opacity:0.5")+'">'+U+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(de?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+Y+"px;font-weight:900;color:"+(de?"#1A6B3C":"#aaa")+';line-height:1">'+V+'</div></div><div style="flex:1;overflow:hidden;background:'+(de?"#1A6B3C":"#ccc")+'">'+ye(V,140,220)+"</div></div>"}function xe(V,oe){var fe=window.innerWidth>=768?.76:.54,U=140,te=305,Y=Math.round(te*.22),de=te-Y,ve=V.length>7?10:13,Te=ye(V,U,de),$e=oe?"1.5px solid #2a7a40":"1px solid #ddd",be=oe?"":"filter:grayscale(1);opacity:0.45;",ke=oe?"#1A6B3C":"#bbb",qe="#fff";return'<div style="display:inline-block;zoom:'+fe+';line-height:0;pointer-events:none"><div style="width:'+U+"px;height:"+te+"px;border-radius:6px;border:"+$e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+Y+"px;background:"+ke+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+qe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(U-4)+'px">'+V+'</span></div><div style="height:'+de+'px;overflow:hidden;flex-shrink:0">'+Te+"</div></div></div>"}function Le(V){if(J){const oe=Q();if(!oe.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const fe=oe.map(U=>a.find(te=>te.player.id===U.id)||{_fake:!0,player:U,id:"fake-"+U.id});ne(fe,U=>U._fake?Pi(U.player):pi(U,""),U=>U._fake?ue({player:U.player,id:"x",_fake:!0}):ue(U),U=>{U._fake||Ni(U,a,j,t)})}else{const oe=re();if(!oe.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const fe={};oe.forEach(te=>{const Y=te.player.id;fe[Y]||(fe[Y]=[]),fe[Y].push(te)});const U=Object.values(fe).map(te=>Qo(te));ne(U,te=>{const Y=j[te.player.id]||1,de=Y>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${Y}</div>`:"",Te=a.filter($e=>$e.player.id===te.player.id&&$e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return pi(te,de+Te)},te=>ue(te),te=>Ni(te,a,j,t))}}function Fe(V){const oe=J?m:[...D];if(!oe.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const fe=oe.map(U=>({formation:U,card:l.find(te=>te.formation===U)||null,owned:D.has(U)}));ne(fe,({formation:U,card:te,owned:Y})=>me(U,Y?te:null,Y?l.filter(de=>de.formation===U).length:0),({formation:U,owned:te})=>xe(U,te),({card:U,owned:te})=>{te&&U&&on(U,l,t,s)})}function Ce(V){const oe=Object.keys($),fe=J?oe.length?oe:A:[...q];if(!fe.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const U=fe.map(te=>({type:te,gc:Re[te]||{icon:"⚡",desc:""},def:$[te]||null,owned:q.has(te),card:o.find(Y=>Y.gc_type===te)||null}));ne(U,({type:te,gc:Y,def:de,owned:ve,card:Te})=>{var x;const $e=ve?o.filter(_=>_.gc_type===te).length:0,be=$e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${$e}</div>`:"",ke=(de==null?void 0:de.gc_type)==="ultra_game_changer",qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},je={purple:"#b06ce0",light_blue:"#00d4ef"},w=qe[de==null?void 0:de.color]||qe.purple,T=je[de==null?void 0:de.color]||je.purple,g=(de==null?void 0:de.effect)||Y.desc||"",y=de!=null&&de.image_url?`/icons/${de.image_url}`:((x=de==null?void 0:de.club)==null?void 0:x.logo_url)||(de!=null&&de.country_code?`https://flagcdn.com/w80/${de.country_code.toLowerCase()}.png`:null);return ve&&Te?`<div data-gc-id="${Te.id}" data-gc-type="${te}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${T};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${T}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${te.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${te}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ke?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${y?`<img src="${y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${Y.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${g.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${te}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${Y.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:te,gc:Y,def:de,owned:ve})=>{const Te=window.innerWidth>=768?.76:.54,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},ke=$e[de==null?void 0:de.color]||$e.purple,qe=be[de==null?void 0:de.color]||be.purple,je=de!=null&&de.image_url?`/icons/${de.image_url}`:null;return ve?`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ke};border:1px solid ${qe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${te}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${je?`<img src="${je}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${Y.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((de==null?void 0:de.effect)||Y.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${Y.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${te}</span></div></div>`},({type:te,owned:Y,def:de})=>{Y&&tn(te,de,s)})}function we(V){const oe="#E87722",fe="/";if(!b.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const U={};b.forEach(Y=>{const de=Y.stadium_id||"?";(U[de]=U[de]||[]).push(Y)});const te=Object.entries(U).map(([Y,de])=>({sid:Y,def:u[Y]||null,count:de.length,card:de[0]}));ne(te,({def:Y,count:de})=>{var qe,je;const ve=(Y==null?void 0:Y.name)||"?",Te=((qe=Y==null?void 0:Y.club)==null?void 0:qe.encoded_name)||(Y==null?void 0:Y.country_code)||"—",$e=Y!=null&&Y.image_url?`${fe}icons/${Y.image_url}`:((je=Y==null?void 0:Y.club)==null?void 0:je.logo_url)||(Y!=null&&Y.country_code?`https://flagcdn.com/w80/${Y.country_code.toLowerCase()}.png`:null),be=$e?`<img src="${$e}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ke=de>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${de}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${oe},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${oe}66">
          ${ke}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ve}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:Y,count:de})=>{var qe,je;const ve=window.innerWidth>=768?.76:.54,Te=(Y==null?void 0:Y.name)||"?",$e=((qe=Y==null?void 0:Y.club)==null?void 0:qe.encoded_name)||(Y==null?void 0:Y.country_code)||"—",be=Y!=null&&Y.image_url?`${fe}icons/${Y.image_url}`:((je=Y==null?void 0:Y.club)==null?void 0:je.logo_url)||(Y!=null&&Y.country_code?`https://flagcdn.com/w80/${Y.country_code.toLowerCase()}.png`:null),ke=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ve};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${oe},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(V=>{V.addEventListener("click",()=>{B=V.dataset.tab,C="Tous",P="",J=!1,e.querySelectorAll(".col-tab-btn").forEach(oe=>{const fe=oe.dataset.tab===B;oe.style.borderBottomColor=fe?"var(--green)":"transparent",oe.style.color=fe?"var(--green)":"var(--gray-600)"}),O(),F()})}),O(),F()}function tn(e,t,i){const n=Re[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[t==null?void 0:t.color]||s.purple,f=r[t==null?void 0:t.color]||r.purple,a=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,l=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Wt=1e3;function on(e,t,i,n){var $,p,u;const{state:d,toast:s,closeModal:r,navigate:c,refreshProfile:f}=i,a=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function l(){const m=Ht[a]||{},A=_i[a]||[],j=290,D=360,q=20;function B(P){const J=m[P];return J?{x:J.x*j,y:J.y*D}:null}let C=`<svg width="${j}" height="${D}" viewBox="0 0 ${j} ${D}" xmlns="http://www.w3.org/2000/svg">`;for(const[P,J]of A){const Z=B(P),se=B(J);!Z||!se||(C+=`<line x1="${Z.x}" y1="${Z.y}" x2="${se.x}" y2="${se.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const P of Object.keys(m)){const J=B(P);if(!J)continue;const Z=P.replace(/\d+/,""),se=o[Z]||"#555";C+=`<circle cx="${J.x}" cy="${J.y}" r="${q}" fill="${se}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,C+=`<text x="${J.x}" y="${J.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>`}return C+="</svg>",C}const b=t.filter(m=>m.formation===a);b.length;const h=!e.is_for_sale;n(`Formation ${a}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Wt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),($=document.getElementById("direct-sell-form-btn"))==null||$.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${a} pour ${Wt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const m=b.find(j=>!j.is_for_sale)||b[0];if(!m){s("Aucune carte à vendre","error");return}await z.from("market_listings").delete().eq("card_id",m.id),await z.from("transfer_history").delete().eq("card_id",m.id);const{error:A}=await z.from("cards").delete().eq("id",m.id);if(A){s(A.message,"error");return}await z.from("users").update({credits:(d.profile.credits||0)+Wt}).eq("id",d.profile.id),await f(),s(`+${Wt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),c("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const m=parseInt(document.getElementById("sell-price-form").value);if(!m||m<1){s("Prix invalide","error");return}await z.from("cards").update({is_for_sale:!0,sale_price:m}).eq("id",e.id),await z.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:m}),s("Carte mise en vente sur le marché !","success"),r(),c("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),r(),c("collection")})}async function Ni(e,t,i,n){var Le,Fe,Ce,we,V,oe,fe;const{state:d,toast:s,openModal:r,closeModal:c,navigate:f,refreshProfile:a}=n,o=e.player,l=t.filter(U=>U.player.id===o.id),b=l.length,h=e.evolution_bonus||0,$=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?h:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?h:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?h:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?h:0)),p=o.rarity||"normal",{data:u}=await z.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",$).gte("note_max",$).order("note_min",{ascending:!1}).limit(1);((Le=u==null?void 0:u[0])==null?void 0:Le.price)??Zo[p];const m=o.rarity!=="legende",A=po(o),j=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:St(o,o.job))+h,D=o.rarity==="pepite"||o.rarity==="papyte",q=o.job2?(D?Ei(e,co(o.job2)):St(o,o.job2))+(St(o,o.job2)>0?h:0):null,B=Ft[o.job]||"#1A6B3C",C=o.job2?Ft[o.job2]:null,P=lo[o.rarity]||"#ccc",J=zi[o.country_code]||o.country_code||"",Z=e.evolution_bonus||0,re=j+Z,Q=q||0,O=Q>0?Q+Z:0,F=l.map(U=>U.id);let ne={};if(F.length){const{data:U}=await z.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",F).order("transferred_at",{ascending:!0});(U||[]).forEach(te=>{ne[te.card_id]||(ne[te.card_id]=[]),ne[te.card_id].push(te)})}const ue=U=>{const te=U.transferred_at?new Date(U.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Y=U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${U.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${U.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Y}</div>
        <div style="font-size:11px;color:var(--gray-600)">${te}</div>
      </div>
    </div>`},ye=F.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${l.map((U,te)=>{const Y=ne[U.id]||[],de=U.is_for_sale,ve=Y.length?Y[Y.length-1]:null,$e=(o.rarity==="pepite"||o.rarity==="papyte")&&U.current_note!=null?` (☆${U.current_note})`:"";return`
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
                  ${Y.length?`${Y.length} club${Y.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${te}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Y.map(ue).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${re}${o.job2&&Q>0?` / ${O}`:""}`:`Note actuelle : ${re}${o.job2&&Q>0?` / ${O}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${m?`
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
            ${A?`<img src="${A}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${J}</div>
            ${(Fe=o.clubs)!=null&&Fe.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ce=o.clubs)==null?void 0:Ce.encoded_name)||"").slice(0,6)}</div>`}
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([U,te])=>{const Y=Ft[U],de=U===o.job||U===o.job2,ve=(Number(te)||0)+(de&&Z>0?Z:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Y}" stroke="white" stroke-width="1.5"/>
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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(we=document.getElementById("close-detail"))==null||we.addEventListener("click",c);let me=new Set;const xe=()=>{const U=me.size,te=document.getElementById("sell-action-panel");if(!te)return;te.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const Y=document.getElementById("evolve-btn");Y&&(Y.textContent=`⬆️ Évoluer ${U>1?"(+"+U+")":""}`)};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const te=U.dataset.id;U.checked?me.add(te):me.delete(te);const Y=U.closest(".exemplaire-row");Y&&(Y.style.borderColor=U.checked?"#1A6B3C":"#eee"),xe()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",te=>{if(te.target.closest("button")||te.target.tagName==="INPUT")return;const Y=U.querySelector(".expl-check");Y&&!Y.disabled&&(Y.checked=!Y.checked,Y.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(U=>{U.addEventListener("click",te=>{te.stopPropagation();const Y=document.querySelector(`.expl-hist[data-hist="${U.dataset.idx}"]`);Y&&(Y.style.display=Y.style.display==="none"?"flex":"none")})}),(V=document.getElementById("evolve-btn"))==null||V.addEventListener("click",async()=>{if(b<=1)return;const U=[...me];if(!U.length)return;if(me.has(e.id)){const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(be),be.querySelector("#err-close").addEventListener("click",()=>be.remove()),be.addEventListener("click",ke=>{ke.target===be&&be.remove()});return}const te=U.filter(be=>be!==e.id),Y=o.rarity==="legende"?2:1;if((te.length||1)*Y,!(!te.length&&U.length===1&&U[0]===e.id)){if(!te.length){s("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(be=>{const ke=document.createElement("div");ke.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ke.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${te.length}</strong> copie${te.length>1?"s":""} sacrifiée${te.length>1?"s":""}<br>
            📈 Note : <strong>${j+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${j+(e.evolution_bonus||0)+te.length*Y}</strong>
            ${q&&q>0?`<br>📈 Note 2 : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+te.length*Y}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${Y} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ke),ke.querySelector("#sac-cancel").addEventListener("click",()=>{ke.remove(),be(!1)}),ke.querySelector("#sac-ok").addEventListener("click",()=>{ke.remove(),be(!0)}),ke.addEventListener("click",qe=>{qe.target===ke&&(ke.remove(),be(!1))})}))return;if(te.length){await z.from("market_listings").delete().in("card_id",te),await z.from("deck_cards").delete().in("card_id",te),await z.from("transfer_history").delete().in("card_id",te),await z.from("decks").update({stadium_card_id:null}).in("stadium_card_id",te);const{error:be}=await z.from("cards").delete().in("id",te);if(be){s("Erreur suppression : "+be.message,"error");return}}const ve=(e.evolution_bonus||0)+te.length*Y,{error:Te}=await z.from("cards").update({evolution_bonus:ve}).eq("id",e.id);if(Te){s("Erreur évolution : "+Te.message,"error");return}const $e=j+ve;s(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${j+e.evolution_bonus||j} → ${$e}${te.length?` · ${te.length} copie${te.length>1?"s":""} sacrifiée${te.length>1?"s":""}`:""} !`,"success",4e3),c(),f("collection")}),(oe=document.getElementById("market-sell-btn"))==null||oe.addEventListener("click",async()=>{var Te;const U=[...me];if(!U.length){s("Sélectionne au moins un exemplaire","warning");return}const te=parseInt((Te=document.getElementById("sell-market-price"))==null?void 0:Te.value);if(!te||te<1){s("Prix invalide","error");return}const{error:Y}=await z.from("cards").update({is_for_sale:!0,sale_price:te}).in("id",U);if(Y){s(Y.message,"error");return}const de=U.map($e=>({seller_id:d.profile.id,card_id:$e,price:te,status:"active"})),{error:ve}=await z.from("market_listings").insert(de);ve&&console.warn("[Market] insert listings:",ve.message),s(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${te.toLocaleString("fr")} cr. chacune !`,"success"),c(),f("collection")}),(fe=document.getElementById("cancel-sell-btn"))==null||fe.addEventListener("click",async()=>{await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await z.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),s("Annonce retirée","success"),c(),f("collection")})}const Qt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},_t={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ri(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function uo(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function fo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function nn(e,t=44,i=58){var p;const n=e?ri(e):null,d=e?fo(e):null,s=uo(e==null?void 0:e.country_code),r=(e==null?void 0:e.job)||"MIL",c=_t[r]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=(e==null?void 0:e._evolution_bonus)??(e==null?void 0:e.evolution_bonus)??0,l=(Number(r==="GK"?e==null?void 0:e.note_g:r==="DEF"?e==null?void 0:e.note_d:r==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(r===(e==null?void 0:e.job)||r===(e==null?void 0:e.job2)?a:0),b=Math.round(i*.19),h=Math.round(i*.25),$=i-b-h;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${n?`<img src="${n}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${$}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${h}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${s?`<img src="${s}" style="width:${h+2}px;height:${h-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${h-4}px">🌍</span>`}
      <span style="font-size:${h-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${l}</span>
      ${d?`<img src="${d}" style="width:${h-4}px;height:${h-4}px;object-fit:contain">`:(p=e==null?void 0:e.clubs)!=null&&p.encoded_name?`<span style="font-size:${Math.max(4,h-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function mi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((s==null?void 0:s.length)||0)+1}`);if(!r)return;const{data:c,error:f}=await z.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(f){d(f.message,"error");return}d("Deck créé !","success"),Ri(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Ri(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",r.dataset.name);if(!c||c===r.dataset.name)return;const{error:f}=await z.from("decks").update({name:c}).eq("id",r.dataset.rename);if(f){d(f.message,"error");return}d("Deck renommé !","success"),mi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await z.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:c}=await z.from("decks").delete().eq("id",r.dataset.delete);if(c){d(c.message,"error");return}d("Deck supprimé.","success"),mi(e,t)})})}async function Ri(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select("*").eq("id",e).single(),{data:r}=await z.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await z.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),f=(r||[]).filter(m=>m.card_type==="player"&&m.player),a=(r||[]).filter(m=>m.card_type==="formation"),o=(c||[]).filter(m=>m.card_type==="stadium"),l=[...new Set(o.map(m=>m.stadium_id).filter(Boolean))];let b={};if(o.forEach(m=>{m.stadium_def&&m.stadium_id&&(b[m.stadium_id]=m.stadium_def)}),l.length&&Object.keys(b).length<l.length){const{data:m}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(m||[]).forEach(A=>{b[A.id]=A})}const h=a.map(m=>m.formation).filter(Boolean),{data:$}=await z.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=s.formation||"4-4-2";h.length>0&&!h.includes(p)&&(p=h[0]);const u={deckId:e,name:s.name,formation:p,formationCardId:s.formation_card_id,stadiumCardId:s.stadium_card_id||null,slots:{},subs:[],playerCards:f,formationCards:a,stadiumCards:o,stadDefMap:b,availableFormations:h};($||[]).forEach(m=>{m.is_starter?u.slots[m.position]=m.card_id:u.subs.includes(m.card_id)||u.subs.push(m.card_id)}),$t(t,u,i)}function $t(e,t,i){var a,o,l,b;const{navigate:n}=i;Qt[t.formation];const d=Oi(t.formation),s=d.filter(h=>t.slots[h]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Qt),c=(a=t.stadiumCards)==null?void 0:a.find(h=>h.id===t.stadiumCardId);c&&((o=t.stadDefMap)!=null&&o[c.stadium_id]);const f=t.subs.map(h=>t.playerCards.find($=>$.id===h)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
          ${t.stadiumCards.map(h=>{var u;const $=t.stadDefMap[h.stadium_id],p=$?$.name+((u=$.club)!=null&&u.encoded_name?` (${$.club.encoded_name})`:$.country_code?` (${$.country_code})`:""):h.id.slice(0,8);return`<option value="${h.id}" ${t.stadiumCardId===h.id?"selected":""}>${p}</option>`}).join("")}
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
        ${f.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
            ${nn($,44,58)}
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
  </div>`,rn(e,t,d,i),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("formation-select").addEventListener("change",h=>{t.formation=h.target.value;const $=Oi(t.formation),p={};$.forEach(u=>{t.slots[u]&&(p[u]=t.slots[u])}),t.slots=p,$t(e,t,i)}),(l=document.getElementById("stadium-select"))==null||l.addEventListener("change",h=>{t.stadiumCardId=h.target.value||null,$t(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>dn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(h=>{h.addEventListener("click",()=>{t.subs=t.subs.filter($=>$!==h.dataset.removeSub),$t(e,t,i)})}),(b=document.getElementById("add-sub-btn"))==null||b.addEventListener("click",()=>{sn(t,e,i)})}function rn(e,t,i,n){var j,D;const d=e.querySelector("#deck-field");if(!d)return;const s=(j=t.stadiumCards)==null?void 0:j.find(q=>q.id===t.stadiumCardId),r=s&&((D=t.stadDefMap)==null?void 0:D[s.stadium_id])||null,c=Ht[t.formation]||{},f=Zi(t.formation)||[],a={};for(const q of i){const B=t.slots[q],C=B?t.playerCards.find(P=>P.id===B):null;C!=null&&C.player?a[q]={...C.player,_evolution_bonus:C.evolution_bonus||0}:a[q]=null}const o=300,l=300,b=48,h=64,$=13,p=16,u=38;function m(q){const B=c[q];return B?{x:B.x*o,y:B.y*l}:null}let A="";for(const[q,B]of f){const C=m(q),P=m(B);if(!C||!P)continue;const J=a[q]?{...a[q],club_id:a[q].club_id,country_code:a[q].country_code,rarity:a[q].rarity}:null,Z=a[B]?{...a[B],club_id:a[B].club_id,country_code:a[B].country_code,rarity:a[B].rarity}:null,se=nt(J,Z);se==="#ff3333"||se==="#cc2222"?A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${se}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${se}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,A+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${P.x.toFixed(1)}" y2="${P.y.toFixed(1)}" stroke="${se}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const q of i){const B=m(q);if(!B)continue;const C=a[q],P=q.replace(/\d+/,""),J=_t[P]||"#555",Z=(B.x-b/2).toFixed(1),se=(B.y-h/2).toFixed(1),re={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const Q=ri(C),O=fo(C),F=uo(C.country_code),ne=C._evolution_bonus||0,ue=(Number(P==="GK"?C.note_g:P==="DEF"?C.note_d:P==="MIL"?C.note_m:C.note_a)||0)+(P===C.job||P===C.job2?ne:0),ye=r&&(r.club_id&&String(C.club_id)===String(r.club_id)||r.country_code&&C.country_code===r.country_code),me=ye?ue+10:ue,xe=h-$-p;A+=`<defs><clipPath id="dcp-${q}"><rect x="${Z}" y="${(B.y-h/2+$).toFixed(1)}" width="${b}" height="${xe}"/></clipPath></defs>`,A+=`<rect x="${Z}" y="${se}" width="${b}" height="${h}" rx="5" fill="${J}"/>`,Q&&(A+=`<image href="${Q}" x="${Z}" y="${(B.y-h/2+$).toFixed(1)}" width="${b}" height="${xe}" clip-path="url(#dcp-${q})" preserveAspectRatio="xMidYMin slice"/>`),A+=`<rect x="${Z}" y="${se}" width="${b}" height="${$}" fill="rgba(255,255,255,0.93)"/>`,A+=`<text x="${B.x.toFixed(1)}" y="${(B.y-h/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const Le=(B.y+h/2-p).toFixed(1);A+=`<rect x="${Z}" y="${Le}" width="${b}" height="${p}" fill="rgba(255,255,255,0.93)"/>`,F&&(A+=`<image href="${F}" x="${(B.x-21).toFixed(1)}" y="${(B.y+h/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),A+=`<text x="${B.x.toFixed(1)}" y="${(B.y+h/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${ye?"#E87722":"#111"}" font-family="Arial Black">${me}</text>`,O&&(A+=`<image href="${O}" x="${(B.x+b/2-14).toFixed(1)}" y="${(B.y+h/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),A+=`<rect x="${Z}" y="${se}" width="${b}" height="${h}" rx="5" fill="none" stroke="${re}" stroke-width="2"/>`}else A+=`<rect x="${Z}" y="${se}" width="${b}" height="${h}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,A+=`<text x="${B.x.toFixed(1)}" y="${B.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,A+=`<text x="${B.x.toFixed(1)}" y="${(B.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${P}</text>`;A+=`<rect x="${Z}" y="${se}" width="${b}" height="${h}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${q}" style="cursor:pointer"/>`}d.innerHTML=`<svg viewBox="${-u} ${-u} ${o+u*2} ${l+u*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${A}</svg>`,d.querySelectorAll(".deck-slot-hit").forEach(q=>{q.addEventListener("click",()=>an(q.dataset.pos,t,e,n))})}function an(e,t,i,n){var b,h,$;const{openModal:d,closeModal:s}=n,r=e.replace(/\d+/,""),c=t.slots[e],f=c?t.playerCards.find(p=>p.id===c):null;(b=f==null?void 0:f.player)==null||b.id;const a=new Set;Object.entries(t.slots).forEach(([p,u])=>{var A;if(p===e||!u)return;const m=t.playerCards.find(j=>j.id===u);(A=m==null?void 0:m.player)!=null&&A.id&&a.add(m.player.id)}),t.subs.forEach(p=>{var m;const u=t.playerCards.find(A=>A.id===p);(m=u==null?void 0:u.player)!=null&&m.id&&a.add(u.player.id)});const o=new Set,l=t.playerCards.filter(p=>{const u=p.player;return!(u.job===r||u.job2===r)||a.has(u.id)||o.has(u.id)?!1:(o.add(u.id),!0)});l.sort((p,u)=>{const m=p.evolution_bonus||0,A=u.evolution_bonus||0,j=(r==="GK"?p.player.note_g:r==="DEF"?p.player.note_d:r==="MIL"?p.player.note_m:p.player.note_a)+(r===p.player.job||r===p.player.job2?m:0);return(r==="GK"?u.player.note_g:r==="DEF"?u.player.note_d:r==="MIL"?u.player.note_m:u.player.note_a)+(r===u.player.job||r===u.player.job2?A:0)-j}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${l.length>0?l.map(p=>{var q,B;const u=p.player,m=p.evolution_bonus||0,A=(r==="GK"?u.note_g:r==="DEF"?u.note_d:r==="MIL"?u.note_m:u.note_a)+(r===u.job||r===u.job2?m:0),j=ri(u),D={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[u.rarity];return`<div class="player-option" data-card-id="${p.id}"
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
            ${A}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(h=document.getElementById("close-selector"))==null||h.addEventListener("click",s),($=document.getElementById("remove-player"))==null||$.addEventListener("click",()=>{delete t.slots[e],s(),$t(i,t,n)}),document.querySelectorAll(".player-option").forEach(p=>{p.addEventListener("click",()=>{t.slots[e]=p.dataset.cardId,s(),$t(i,t,n)})})}function sn(e,t,i){var f;const{openModal:n,closeModal:d}=i,s=new Set;Object.keys(e.slots).forEach(a=>{var b;const o=e.slots[a];if(!o)return;const l=e.playerCards.find(h=>h.id===o);(b=l==null?void 0:l.player)!=null&&b.id&&s.add(l.player.id)}),e.subs.forEach(a=>{var l;const o=e.playerCards.find(b=>b.id===a);(l=o==null?void 0:o.player)!=null&&l.id&&s.add(o.player.id)});const r=new Set,c=e.playerCards.filter(a=>{var o,l,b;return s.has((o=a.player)==null?void 0:o.id)||r.has((l=a.player)==null?void 0:l.id)?!1:(r.add((b=a.player)==null?void 0:b.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(a=>{var h;const o=a.player,l=ri(o),b=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(a.evolution_bonus||0);return`<div class="player-option" data-card-id="${a.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(a=>{a.addEventListener("click",()=>{e.subs.push(a.dataset.cardId),d(),$t(t,e,i)})})}async function dn(e,t){const{state:i,toast:n,navigate:d}=t,s=e.formationCards.find(f=>f.formation===e.formation),r=(s==null?void 0:s.id)||e.formationCardId;await z.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await z.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([f,a],o)=>{c.push({deck_id:e.deckId,card_id:a,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,a)=>{c.push({deck_id:e.deckId,card_id:f,position:`SUB${a+1}`,is_starter:!1,slot_order:100+a})}),c.length>0){const{error:f}=await z.from("deck_cards").insert(c);if(f){n(f.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Oi(e){const t=Qt[e]||Qt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function go(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await z.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(c=>c.max_per_user!=null);if(r.length){const{data:c}=await z.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(a=>a.id)),f={};(c||[]).forEach(a=>{f[a.booster_id]=(f[a.booster_id]||0)+1}),d=n.filter(a=>a.max_per_user==null?!0:(f[a.id]||0)<a.max_per_user)}}if(!d.length)return[];const{data:s}=await z.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(s||[]).filter(c=>c.booster_id===r.id)}))}async function ln(e,t){const{data:i}=await z.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await z.from("booster_claims").insert({user_id:e,booster_id:t})}function cn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const mo=()=>Object.keys(Ht),pn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],xi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function un(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Hi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},fn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},gn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ui(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function mn(e){var o,l;const t=e.player;if(!t)return"";const i=t.job||"ATT",n=Hi[i],d=fn[t.rarity]||"#ccc",s=Ui(t,i),r=t.job2?Ui(t,t.job2):null,c=t.job2?Hi[t.job2]:null,f=un(t),a=gn[t.country_code]||t.country_code||"";return`
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
  </div>`}function xo(e){var d;const t={};(e.rates||[]).forEach(s=>{t[s.card_type]=(t[s.card_type]||0)+Number(s.percentage||0)});const i=((d=Object.entries(t).sort((s,r)=>r[1]-s[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function xn(e,{state:t,navigate:i,toast:n}){var l,b,h;const d=((l=t.profile)==null?void 0:l.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let s=[];try{s=(await go((b=t.user)==null?void 0:b.id)).map(xo)}catch($){console.warn("Erreur chargement boosters DB, fallback hardcodé",$)}s.length||(s=pn.map($=>({...$,rates:[],isPub:$.id==="players_pub"})));const r=await z.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then($=>$.data||[]),c=new Set(r.filter($=>$.card_type==="stadium").map($=>$.stadium_id)),f=new Set(r.filter($=>$.card_type==="formation").map($=>$.formation)),a=new Set(r.filter($=>$.card_type==="game_changer").map($=>$.gc_type)),o={};for(const $ of s){if($.allow_duplicates!==!1||!((h=$.rates)!=null&&h.length))continue;const p=[...new Set(($.rates||[]).map(m=>m.card_type))];let u=!1;for(const m of p)if(m==="stadium"){const{data:A}=await z.from("stadium_definitions").select("id");if((A||[]).some(j=>!c.has(j.id))){u=!0;break}}else if(m==="game_changer"){const{data:A}=await z.from("gc_definitions").select("name").eq("is_active",!0);if((A||[]).some(j=>!a.has(j.name))){u=!0;break}}else if(m==="formation"){const{FORMATION_LINKS:A}=await ni(async()=>{const{FORMATION_LINKS:j}=await import("./formation-links-5A-YoKwp.js").then(D=>D.p);return{FORMATION_LINKS:j}},__vite__mapDeps([0,1]));if(Object.keys(A).some(j=>!f.has(j))){u=!0;break}}else{u=!0;break}u||(o[$.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${s.map($=>{const p=$.cost===0||d>=$.cost,u=o[$.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${$.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${$.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${$.img}" alt="${$.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${$.name}</div>
            <div class="desc">${$.sub}</div>
            <div class="cost">${$.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach($=>{$.addEventListener("click",async()=>{const p=s.find(u=>u.id===$.dataset.booster);if(p){$.style.opacity="0.5",$.style.pointerEvents="none";try{await yn(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),$.style.opacity="",$.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach($=>{$.addEventListener("click",p=>{p.stopPropagation();const u=s.find(m=>m.id===$.dataset.boosterId);wn(u)})})}async function yn(e,{state:t,toast:i,navigate:n,container:d}){var l,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await $n();const{data:s}=await z.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((s||[]).filter(h=>h.card_type==="player").map(h=>h.player_id)),c=new Set((s||[]).filter(h=>h.card_type==="formation").map(h=>h.formation));let f=[],a=null;try{if((l=e.rates)!=null&&l.length)f=await yi(t.profile,e);else{const h=e.type||"player";h==="player"?f=await yo(t.profile,e.cardCount,e.cost):h==="game_changer"?f=await bo(t.profile,e.cardCount,e.cost):h==="formation"?f=await ho(t.profile,e.cost):f=await yi(t.profile,e)}}catch(h){a=h.message||String(h),console.error("[Booster] Erreur:",h)}if(f!=null&&f.length&&e._boosterId&&await ln(t.user.id,e._boosterId),!(f!=null&&f.length)){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${a||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(h),(b=h.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>h.remove());return}f.forEach(h=>{h.card_type==="player"&&h.player?h.isDuplicate=r.has(h.player.id):h.card_type==="formation"&&(h.isDuplicate=c.has(h.formation))});const{data:o}=await z.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),vo(f,e,n)}function bn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function xt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function hn(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>xt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>xt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&xt(n)>=6),i.length||(i=e.filter(n=>xt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&xt(n)>=1&&xt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function yi(e,t){if(t.cost>0){const{error:b}=await z.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:s}=await z.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(s){const{data:b}=await z.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=b||[]}else n=d||[];const r=new Set(n.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(n.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(n.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),a=new Set(n.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),o=new Set,l=[];for(let b=0;b<(t.cardCount||5);b++){const h=cn(t.rates);if(h){if(h.card_type==="player"){const $=C=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[C]||C,p=h.rarity?$(h.rarity):null;let u=z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:m}=await u;let A=m||[];if((h.note_min||h.note_max)&&(A=A.filter(C=>{const P=Math.max(Number(C.note_g)||0,Number(C.note_d)||0,Number(C.note_m)||0,Number(C.note_a)||0);return(!h.note_min||P>=h.note_min)&&(!h.note_max||P<=h.note_max)})),A.length||(h.note_min||h.note_max?(A=m||[],console.warn("[Booster] Aucun joueur avec note",h.note_min,"-",h.note_max,"— fallback rareté uniquement")):A=m||[]),!A.length)continue;let j=A.filter(C=>!o.has(C.id));if(i)j.length||(j=A);else if(j=j.filter(C=>!r.has(C.id)),!j.length)continue;const D=j[Math.floor(Math.random()*j.length)];o.add(D.id);const q=r.has(D.id),{data:B}=await z.from("cards").insert({owner_id:e.id,player_id:D.id,card_type:"player"}).select().single();B&&(l.push({...B,player:D,isDuplicate:q}),z.rpc("record_transfer",{p_card_id:B.id,p_player_id:D.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(h.card_type==="game_changer"){const{data:$}=await z.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=$!=null&&$.length?$:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(D=>!f.has(D.name));if(!i&&!u.length)continue;const A=u[Math.floor(Math.random()*u.length)].name,{data:j}=await z.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:A}).select().single();j&&l.push(j)}else if(h.card_type==="formation"){const $=mo(),p=i?$:$.filter(j=>!c.has(j));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],m=c.has(u),{data:A}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();A!=null&&A[0]&&l.push({...A[0],isDuplicate:m})}else if(h.card_type==="stadium"){const{data:$,error:p}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!($!=null&&$.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?$:$.filter(D=>!a.has(D.id));if(!i&&!u.length)continue;const m=u[Math.floor(Math.random()*u.length)],{data:A,error:j}=await z.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:m.id}).select("id,card_type,stadium_id").single();if(j){console.error("[Booster] insert stadium card:",j.message);continue}A&&l.push({...A,rarity:"normal",_stadiumDef:m})}}}return l}async function yo(e,t,i){if(i>0){const{error:a}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a}const{data:n}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(a=>a.job==="GK"),s=n.filter(a=>a.job!=="GK"),r=!e.first_booster_opened&&d.length>0,c=[];for(let a=0;a<t;a++){const o=a===0&&r?d:a===0?s:n,l=bn(),b=hn(o,l);b&&c.push(b)}r&&await z.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await z.from("cards").insert(c.map(a=>({owner_id:e.id,player_id:a.id,card_type:"player"}))).select();return(f||[]).forEach((a,o)=>{z.rpc("record_transfer",{p_card_id:a.id,p_player_id:c[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((a,o)=>({...f[o],player:a}))}async function bo(e,t,i){const{error:n}=await z.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await z.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),s=d!=null&&d.length?d:Object.keys(xi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=s[Math.floor(Math.random()*s.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:c,error:f}=await z.from("cards").insert(r).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(c||[]).map(o=>{const l=d==null?void 0:d.find(b=>b.name===o.gc_type||b.id===o.gc_definition_id);return{...o,_gcDef:l||null}})}async function ho(e,t){const{error:i}=await z.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await z.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),s=mo(),r=s[Math.floor(Math.random()*s.length)],c=d.has(r),{data:f,error:a}=await z.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return a&&console.error("[Booster Formation] Erreur insert:",a.message,a),(f||[]).map(o=>({...o,isDuplicate:c}))}function vo(e,t,i,n=null){var re,Q;if(!e||e.length===0){const O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",O.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(O),(re=O.querySelector("#anim-close-err"))==null||re.addEventListener("click",()=>O.remove());return}e=[...e].sort((O,F)=>{const ne=O.player?xt(O.player):-1;return(F.player?xt(F.player):-1)-ne});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let s=!1;const r=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let f=!1;const a=O=>O.touches&&O.touches[0]?O.touches[0].clientX:O.clientX;function o(O){s||(f=!0,c.style.opacity="1",l(O))}function l(O){if(!f||s)return;const F=r.getBoundingClientRect(),ne=a(O)-F.left,ue=Math.max(0,Math.min(1,ne/F.width));c.style.width=ue*F.width+"px",ue>=.82&&h()}function b(){s||(f=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{s||(c.style.transition="")},220))}function h(){var F;if(s)return;s=!0,f=!1,c.style.width="100%",c.style.opacity="1",(F=document.getElementById("cut-flash"))==null||F.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const O=document.getElementById("cut-hint");O&&(O.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",m(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",l),window.addEventListener("pointerup",b),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",l,{passive:!0}),window.addEventListener("touchend",b);let $=0,p=!1;const u=new Set;function m(O){$=O,document.getElementById("reveal-phase").style.display="flex",A(),j(O,0),P()}function A(){const O=document.getElementById("card-dots");O&&(O.innerHTML=e.map((F,ne)=>`<div class="card-dot" data-i="${ne}" style="width:8px;height:8px;border-radius:50%;background:${ne===$?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),O.querySelectorAll(".card-dot").forEach(F=>F.addEventListener("click",()=>q(parseInt(F.dataset.i)))))}function j(O,F){var we;const ne=e[O],ue=document.getElementById("card-counter"),ye=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${O+1} / ${e.length}`);const me=document.getElementById("reveal-btns");me&&(me.style.display=O===e.length-1?"flex":"none");const xe=ne.card_type==="player"&&((we=ne.player)==null?void 0:we.rarity)==="legende",Le=!u.has(O);u.add(O);let Fe=0;if(ne.card_type==="player"&&ne.player){const V=ne.player,oe=V.job||"ATT";Fe=Number(oe==="GK"?V.note_g:oe==="DEF"?V.note_d:oe==="MIL"?V.note_m:V.note_a)||0}const Ce=V=>{ye.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${xe?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${vn(ne)}</div>
          ${ne.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");F!==0?(oe.style.transition="none",oe.style.transform=`translateX(${F>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),V||xe?Z():se(),A()};Le&&Fe>6&&ne.card_type==="player"&&ne.player?D(ne,()=>Ce(!0)):Ce(!1)}function D(O,F){var Fe;p=!0;const ne=O.player,ue=`https://flagsapi.com/${ne.country_code}/flat/64.png`,ye=(Fe=ne.clubs)==null?void 0:Fe.logo_url,me=document.getElementById("walkout-overlay"),xe=document.getElementById("walkout-stage");if(!me||!xe){p=!1,F();return}me.style.display="flex";const Le=()=>{const Ce=xe.firstElementChild;Ce&&(Ce.classList.remove("wo-in"),Ce.classList.add("wo-out"))};xe.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Le,2e3),setTimeout(()=>{var Ce;xe.innerHTML=ye?`<img class="wo-in" src="${ye}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ce=ne.clubs)==null?void 0:Ce.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Le,4450),setTimeout(()=>{me.style.display="none",xe.innerHTML="",p=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),F()},4900)}function q(O){if(p||O<0||O>=e.length||O===$)return;const F=O>$?1:-1;$=O,j(O,F)}function B(){q($+1)}function C(){q($-1)}function P(){const O=document.getElementById("card-viewport");if(!O||O._swipeBound)return;O._swipeBound=!0;let F=0,ne=0,ue=0,ye=!1;const me=we=>we.touches?we.touches[0].clientX:we.clientX,xe=we=>we.touches?we.touches[0].clientY:we.clientY,Le=we=>{ye=!0,F=me(we),ne=xe(we),ue=0},Fe=we=>{if(!ye)return;ue=me(we)-F;const V=xe(we)-ne;if(Math.abs(ue)<Math.abs(V))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},Ce=()=>{if(!ye)return;ye=!1;const we=document.getElementById("current-card-wrap"),V=55;ue<=-V&&$<e.length-1?B():ue>=V&&$>0?C():we&&(we.style.transition="transform .2s ease",we.style.transform="translateX(0)")};O.addEventListener("pointerdown",Le),O.addEventListener("pointermove",Fe),O.addEventListener("pointerup",Ce),O.addEventListener("pointercancel",Ce),O.addEventListener("touchstart",Le,{passive:!0}),O.addEventListener("touchmove",Fe,{passive:!0}),O.addEventListener("touchend",Ce),O.addEventListener("click",we=>{if(Math.abs(ue)>8)return;const V=O.getBoundingClientRect();we.clientX-V.left>V.width/2?B():C()})}let J=null;function Z(){const O=document.getElementById("fireworks-canvas");if(!O)return;O.width=window.innerWidth,O.height=window.innerHeight;const F=O.getContext("2d"),ne=[];function ue(){const me=Math.random()*O.width,xe=Math.random()*O.height*.6,Le=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Fe=Le[Math.floor(Math.random()*Le.length)];for(let Ce=0;Ce<60;Ce++){const we=Math.PI*2/60*Ce,V=2+Math.random()*5;ne.push({x:me,y:xe,vx:Math.cos(we)*V,vy:Math.sin(we)*V,alpha:1,color:Fe,size:2+Math.random()*3})}}ue(),J=setInterval(ue,600);function ye(){if(document.getElementById("fireworks-canvas")){F.clearRect(0,0,O.width,O.height);for(let me=ne.length-1;me>=0;me--){const xe=ne[me];if(xe.x+=xe.vx,xe.y+=xe.vy+.08,xe.vy*=.98,xe.alpha-=.018,xe.alpha<=0){ne.splice(me,1);continue}F.globalAlpha=xe.alpha,F.fillStyle=xe.color,F.beginPath(),F.arc(xe.x,xe.y,xe.size,0,Math.PI*2),F.fill()}F.globalAlpha=1,(J!==null||ne.length>0)&&requestAnimationFrame(ye)}}ye()}function se(){J!==null&&(clearInterval(J),J=null);const O=document.getElementById("fireworks-canvas");O&&O.getContext("2d").clearRect(0,0,O.width,O.height)}if(n){const O=document.getElementById("reveal-btns");O&&(O.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Q=document.getElementById("reveal-next"))==null||Q.addEventListener("click",()=>{se(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{se(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{se(),d.remove(),i("boosters")})}function vn(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return mn(e);if(e.card_type==="game_changer"){const s=e._gcDef,r=(s==null?void 0:s.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},a=c[s==null?void 0:s.color]||c.purple,o=f[s==null?void 0:s.color]||f.purple,l=(s==null?void 0:s.name)||e.gc_type||"Game Changer",b=(s==null?void 0:s.effect)||((t=xi[e.gc_type])==null?void 0:t.desc)||"",h=s!=null&&s.image_url?`/icons/${s.image_url}`:null,$=((i=xi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${a};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${l.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${h?`<img src="${h}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${$}</span>`}
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function wn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},s={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}_n()}function _n(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function $n(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function kn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var b,h;const{data:s}=await z.from("users").select("*").eq("id",t.user.id).single();s&&(t.profile=s);let r=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await z.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const p=(await go()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(c=xo(p))}catch($){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',$)}const f=r.length;let a=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await z.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function l(){var A;if(a>=f||!r.length){await z.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const $=r[0],{data:p}=await z.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if($.type==="formation")u=await ho(t.profile,0);else if($.type==="game_changer")u=await bo(t.profile,$.count||3,0);else if(c&&((A=c.rates)!=null&&A.length)){const j={...c,cost:0,cardCount:$.count||c.cardCount||5};u=await yi(t.profile,j),$.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(q=>q.player&&q.player.job==="GK")||await En(t.profile,u),await z.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await yo(t.profile,$.count||5,0)}catch(j){n(j.message||"Erreur ouverture booster","error");return}r.shift(),a++,await o();const m=$.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:$.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${a}/${f})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};vo(u,m,i,()=>{l()})}(h=document.getElementById("onboard-start"))==null||h.addEventListener("click",()=>l())}async function En(e,t){try{const{data:i}=await z.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const s=t[d];await z.from("cards").update({player_id:n.id}).eq("id",s.id),t[d]={...s,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function kt(e,t,i,n,d){var s;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(s=document.getElementById("msg-btn"))==null||s.addEventListener("click",d)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bi(e,t){var s,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ct(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(s=>{const r=i&&String(s.club_id)===String(i),c=n&&String(s.country_code)===String(n);(r||c)&&(s.stadiumBonus=!0)})}),e}function Ot(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const s=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(s||r)&&(d.stadiumBonus=!0)}),e}function st(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ai(){const e=Math.random()*100;return e<10?3:e<30?2:1}function bt(e,t){const i=Mt[t]||Mt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const c=e.filter(a=>a.position&&a.position.replace(/\d+$/,"")===r).sort((a,o)=>parseInt(a.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(a=>({...a,_line:r})),f=st(c.length);c.forEach((a,o)=>{a._col=f[o]}),n[r]=c}return n}const s=[...e];for(const r of["GK","DEF","MIL","ATT"]){const c=[];for(let a=0;a<i[r];a++){let o=s.findIndex(l=>l.job===r);if(o===-1&&(o=s.findIndex(l=>l.job2===r)),o===-1&&(o=0),s[o]){const l={...s[o],_line:r};c.push(l),s.splice(o,1)}}const f=st(c.length);c.forEach((a,o)=>{a._col=f[o]}),n[r]=c}return n}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function si(e,t,i){const d=new Set,s=t.filter(o=>{const l=o.gc_type||o.id;return d.has(l)?!1:(d.add(l),!0)});let r=[];function c(o,l){const b=o._gcDef,h={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},$={purple:"#9b59b6",light_blue:"#00bcd4"},p=h[b==null?void 0:b.color]||h.purple,u=$[b==null?void 0:b.color]||$.purple;return`<div class="gc-select-card" data-id="${o.id}"
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
        ${s.map($=>{const p=r.find(u=>u.gc_type===$.gc_type);return c($,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach($=>{$.addEventListener("click",()=>{const p=$.dataset.id,u=s.find(A=>A.id===p);if(!u)return;const m=r.findIndex(A=>A.gc_type===u.gc_type);m>-1?r.splice(m,1):r.length<3&&r.push(u),a()})}),(l=e.querySelector("#gc-launch"))==null||l.addEventListener("click",()=>{o&&f(r)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(h=e.querySelector("#gc-reset"))==null||h.addEventListener("click",()=>{r.length&&(r=[],a())})}a()}function Tn(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function An(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!s||s.length===0){kt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=s.map(b=>b.id),{data:c}=await z.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),f=[...new Set((c||[]).filter(b=>{var h,$;return((h=b.card)==null?void 0:h.card_type)==="stadium"&&(($=b.card)==null?void 0:$.stadium_id)}).map(b=>b.card.stadium_id))],a={};if(f.length){const{data:b}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(h=>{a[h.id]=h}),(c||[]).forEach(h=>{var $,p;(($=h.card)==null?void 0:$.card_type)==="stadium"&&((p=h.card)!=null&&p.stadium_id)&&(h.card._stadiumDef=a[h.card.stadium_id]||null)})}let o=0;function l(){var q,B,C,P,J,Z,se;const b=s[o],h=(c||[]).filter(re=>re.deck_id===b.id),$=h.filter(re=>{var Q;return re.is_starter&&((Q=re.card)==null?void 0:Q.player)}).map(re=>bi(re.card,re.position)),p=h.find(re=>{var Q;return((Q=re.card)==null?void 0:Q.card_type)==="formation"}),u=b.formation||((q=p==null?void 0:p.card)==null?void 0:q.formation)||"4-4-2";let m=$.length>=11?bt($,u):null,A=((B=b.stadium_card)==null?void 0:B.stadium_def)||null;A&&m&&(m=Ct(m,A));const j=$.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Tn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${u} · ${$.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===s.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===s.length-1?"0.1":"0.3"});color:${o===s.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===s.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${A?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${A.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((C=A.club)==null?void 0:C.encoded_name)||A.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${pt(m,u,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${$.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${s.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${s.map((re,Q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Q===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const Q=e.querySelector(".deck-preview-wrap svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(P=document.getElementById("prev-deck"))==null||P.addEventListener("click",()=>{o>0&&(o--,l())}),(J=document.getElementById("next-deck"))==null||J.addEventListener("click",()=>{o<s.length-1&&(o++,l())}),(Z=document.getElementById("validate-deck"))==null||Z.addEventListener("click",()=>{if(!j)return;const re=t.state.params||{};t.navigate("match",{...re,matchMode:re.matchMode||i,deckId:b.id})}),(se=document.getElementById("cancel-deck-select"))==null||se.addEventListener("click",()=>{Ve(e),d("home")});const D=document.getElementById("deck-swipe-zone");if(D){let re=0,Q=0;D.addEventListener("touchstart",O=>{re=O.touches[0].clientX,Q=O.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",O=>{const F=O.changedTouches[0].clientX-re,ne=O.changedTouches[0].clientY-Q;Math.abs(F)<40||Math.abs(F)<Math.abs(ne)||(F<0&&o<s.length-1?(o++,l()):F>0&&o>0&&(o--,l()))},{passive:!0})}}l()}function wo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58,n=null){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const d=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),s=wo(e),r=e._line||e.job||"MIL",c=jt[r]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",a=_o(e==null?void 0:e.country_code),o=Math.round(i*.19),l=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),h=e!=null&&e.used?.28:1,$=e._evolution_bonus??e.evolution_bonus??0,p=e.note!==void 0?Number(e.note)||0:(Number(ze(e,r))||0)+(e.boost||0)+(e.job===r||e.job2===r?$:0),u=!e.used&&(e.stadiumBonus||n&&(n.club_id&&String(e.club_id)===String(n.club_id)||n.country_code&&e.country_code===n.country_code)),m=p+(u?10:0),A=u?"#E87722":"#111";return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0;opacity:${h}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${d&&!(e!=null&&e.used)?`<img src="${d}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${l}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${ei(e==null?void 0:e.country_code)?`<img src="${ei(e.country_code)}" style="width:${l+2}px;height:${l-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${l-4}px">${a}</span>`}
      <span style="font-size:${l-2}px;font-weight:900;color:${e!=null&&e.used?"#111":A};font-family:Arial Black,Arial">${e!=null&&e.used?"–":m}</span>
      ${s?`<img src="${s}" style="width:${l-4}px;height:${l-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,l-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function tt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((s,r)=>{if(d+=We(s,40,52),r<n.length-1){const c=nt(s,n[r+1]);d+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ei(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _o(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ct(e,t,i,n,d=310,s=310,r=[]){var j;const c=Ht[t]||{},f=Zi(t)||_i[t]||[],a={},o=["ATT","MIL","DEF","GK"];for(const D of o)(e[D]||[]).forEach((B,C)=>{a[`${D}${C+1}`]=B});function l(D){const q=c[D];return q?{x:q.x*d,y:q.y*s}:null}let b="";for(const[D,q]of f){const B=l(D),C=l(q);if(!B||!C)continue;const P=a[D],J=a[q],Z=nt(P,J);Z==="#00ff88"||Z==="#FFD700"?(b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Z}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Z}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${C.x.toFixed(1)}" y2="${C.y.toFixed(1)}"
        stroke="${Z}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const h=48,$=64,p=13,u=16,m={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[D,q]of Object.entries(a)){const B=l(D);if(!B||!q)continue;const C=D.replace(/[0-9]/g,""),P=jt[C]||"#555",J=r.includes(q.cardId),Z=i==="attack"&&(["MIL","ATT"].includes(C)||J)&&!q.used||i==="defense"&&["GK","DEF","MIL"].includes(C)&&!q.used,se=n.includes(q.cardId);let re;i==="attack"?re=J?Math.max(1,Number(q.note_a)||0):C==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:i==="defense"?re=C==="GK"?Number(q.note_g)||0:C==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:re=Number(C==="GK"?q.note_g:C==="DEF"?q.note_d:C==="MIL"?q.note_m:q.note_a)||0,re=re+(q.boost||0),q.stadiumBonus&&(i==="attack"&&(C==="ATT"||C==="MIL")||i==="defense"&&(C==="GK"||C==="DEF"||C==="MIL")?re+=10:i||(re+=10));const Q=(B.x-h/2).toFixed(1),O=(B.y-$/2).toFixed(1),F=m[q==null?void 0:q.rarity]||m.normal;if(q.used){const Fe=typeof import.meta<"u"&&"/"||"/",we=`${typeof window<"u"&&((j=window.location)==null?void 0:j.origin)||""}${Fe}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="#161616"/>`,b+=`<image href="${we}" xlink:href="${we}" x="${Q}" y="${O}" width="${h}" height="${$}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="none" stroke="${F}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${C}" style="cursor:pointer"/>`;continue}const ne=se?.45:1,ue=se?"#FFD700":F,ye=se?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,me=$-p-u;b+=`<defs><clipPath id="cp-${D}"><rect x="${Q}" y="${(B.y-$/2+p).toFixed(1)}" width="${h}" height="${me}"/></clipPath></defs>`,b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="${P}" opacity="${ne}"/>`;const xe=Pe(q);xe&&(b+=`<image href="${xe}" xlink:href="${xe}" x="${Q}" y="${(B.y-$/2+p).toFixed(1)}" width="${h}" height="${me}" clip-path="url(#cp-${D})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${Q}" y="${O}" width="${h}" height="${p}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${B.x.toFixed(1)}" y="${(B.y-$/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const Le=(B.y+$/2-u).toFixed(1);b+=`<rect x="${Q}" y="${Le}" width="${h}" height="${u}" fill="rgba(255,255,255,0.92)"/>`;{const Fe=ei(q.country_code);Fe?b+=`<image href="${Fe}" xlink:href="${Fe}" x="${(B.x-20).toFixed(1)}" y="${(B.y+$/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(B.x-13).toFixed(1)}" y="${(B.y+$/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${_o(q.country_code)}</text>`;const Ce=q.stadiumBonus?"#E87722":"#111";b+=`<text x="${B.x.toFixed(1)}" y="${(B.y+$/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ce}" font-family="Arial Black">${re}</text>`;const we=wo(q);we?b+=`<image href="${we}" xlink:href="${we}" x="${(B.x+h/2-14).toFixed(1)}" y="${(B.y+$/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(b+=`<text x="${(B.x+14).toFixed(1)}" y="${(B.y+$/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.stadiumBonus&&(b+=`<rect x="${(B.x-h/2).toFixed(1)}" y="${(B.y-$/2).toFixed(1)}" width="${h}" height="${$}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="${se?"rgba(255,255,255,0.12)":"none"}" stroke="${ue}" stroke-width="${ye}" opacity="${ne}"/>`,Z&&(b+=`<rect x="${Q}" y="${O}" width="${h}" height="${$}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${se?"selected":""}" data-card-id="${q.cardId}" data-role="${C}" style="cursor:pointer"/>`)}const A=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-A} ${-A} ${d+A*2} ${s+A*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function di(e,t,i,n){var B;const{state:d,navigate:s,toast:r}=t;et(e);const c=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return An(e,t,i);const f=c.deckId;let a,o,l,b;try{const C=await Promise.all([z.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),z.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);a=C[0].data,l=C[0].error,o=C[1].data,b=C[1].error}catch(C){console.error("[Match] Exception chargement deck:",C),kt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>s("home"));return}if(l||b){console.error("[Match] Erreur Supabase:",l||b),kt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>s("home"));return}const h=(o||[]).filter(C=>{var P;return C.is_starter&&((P=C.card)==null?void 0:P.player)}).map(C=>bi(C.card,C.position)),$=(o||[]).filter(C=>{var P;return!C.is_starter&&((P=C.card)==null?void 0:P.player)}).map(C=>bi(C.card,C.position));if(h.length<11){kt(e,"⚠️",`Deck incomplet (${h.length}/11).`,"Compléter",()=>s("decks"));return}const p=(o||[]).find(C=>{var P;return((P=C.card)==null?void 0:P.card_type)==="formation"}),u=(a==null?void 0:a.formation)||((B=p==null?void 0:p.card)==null?void 0:B.formation)||"4-4-2",{data:m,error:A}=await z.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:j}=await z.from("gc_definitions").select("*").eq("is_active",!0),D=(m||[]).map(C=>({...C,_gcDef:(j==null?void 0:j.find(P=>P.name===C.gc_type||P.id===C.gc_definition_id))||null}));let q=null;if(a!=null&&a.stadium_card_id){const{data:C}=await z.from("cards").select("stadium_id").eq("id",a.stadium_card_id).single();if(C!=null&&C.stadium_id){const{data:P}=await z.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",C.stadium_id).single();q=P||null}}n({deckId:f,formation:u,starters:h,subsRaw:$,gcCardsEnriched:D,gcDefs:j||[],stadiumDef:q})}async function zn(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",s=d.replace("vs_ai_",""),r=d;await di(e,t,d,async({deckId:c,formation:f,starters:a,subsRaw:o,gcCardsEnriched:l,gcDefs:b,stadiumDef:h})=>{try{let $=bt(a,f);h&&($=Ct($,h),Ot(o,h));const p=await Sn(f,s),u=p.lines||p,m=async A=>{try{const{data:j,error:D}=await z.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:c,status:"in_progress"}).select().single();if(D){console.error("[MatchIA] Erreur création match:",D),kt(e,"⚠️","Impossible de créer le match ("+D.message+").","Retour",()=>t.navigate("home"));return}const q=p.stadiumDef||null;q&&u&&(Ct(u,q),Ot(p.subs||[],q));const B={gcDefs:b||[],matchId:j==null?void 0:j.id,mode:r,difficulty:s,formation:f,homeTeam:$,aiTeam:u,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:q,homeScore:0,aiScore:0,gcCards:A,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};In(e,B,t)}catch(j){console.error("[MatchIA] Exception launchMatch:",j),kt(e,"⚠️","Erreur au lancement du match : "+j.message,"Retour",()=>t.navigate("home"))}};if(!l.length){m([]);return}si(e,l,m)}catch($){console.error("[MatchIA] Exception setup:",$),kt(e,"⚠️","Erreur de préparation du match : "+$.message,"Retour",()=>t.navigate("home"))}})}async function Sn(e,t){var u;const{data:i}=await z.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Ln(e),subs:[],gcCards:[],stadiumDef:null};const n=Mt[e]||Mt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},s=new Set;function r(m,A,j){var D,q;return s.add(m.id),{cardId:"ai-"+m.id+"-"+j,id:m.id,firstname:m.firstname,name:m.surname_encoded,country_code:m.country_code,club_id:m.club_id,job:m.job,job2:m.job2,note_g:Number(m.note_g)||0,note_d:Number(m.note_d)||0,note_m:Number(m.note_m)||0,note_a:Number(m.note_a)||0,rarity:m.rarity,skin:m.skin,hair:m.hair,hair_length:m.hair_length,clubName:((D=m.clubs)==null?void 0:D.encoded_name)||null,clubLogo:((q=m.clubs)==null?void 0:q.logo_url)||null,boost:0,used:!1,_line:A}}for(const m of["GK","DEF","MIL","ATT"]){const A=i.filter(C=>C.job===m&&!s.has(C.id)),j=i.filter(C=>C.job!==m&&!s.has(C.id)),D=[...A,...j],q=[];for(let C=0;C<n[m];C++){const P=D[C];P&&q.push(r(P,m,C))}const B=st(q.length);q.forEach((C,P)=>{C._col=B[P]}),d[m]=q}const f=i.filter(m=>!s.has(m.id)).slice(0,5).map((m,A)=>r(m,m.job,100+A)),l=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((m,A)=>{var j,D;return{id:"ai-gc-"+A,gc_type:m,name:((j=Re[m])==null?void 0:j.name)||m,icon:((D=Re[m])==null?void 0:D.icon)||"⚡"}}),b=Object.values(d).flat(),h={};b.forEach(m=>{m.club_id&&(h[m.club_id]=(h[m.club_id]||0)+1)});const $=(u=Object.entries(h).sort((m,A)=>A[1]-m[1])[0])==null?void 0:u[0];let p=null;if($){const{data:m}=await z.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",$).single();m&&(p={club_id:m.id,country_code:null,name:m.encoded_name+" Stadium",club:{encoded_name:m.encoded_name,logo_url:m.logo_url}})}return{lines:d,subs:f,gcCards:l,stadiumDef:p}}function Ln(e){const t=Mt[e]||Mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const s of["GK","DEF","MIL","ATT"]){const r=[];for(let f=0;f<t[s];f++){const a=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:s,job2:null,note_g:s==="GK"?a:2,note_d:s==="DEF"?a:2,note_m:s==="MIL"?a:2,note_a:s==="ATT"?a:2,rarity:"normal",boost:0,used:!1,_line:s}),d++}const c=st(r.length);r.forEach((f,a)=>{f._col=c[a]}),i[s]=r}return i}function In(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ct(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Mn(e,t,i),5e3)}function Mn(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],s=t.stadiumDef||null,r=t.aiStadiumDef||null;function c(A,j){const D=ze(A,"MIL"),q=A.evolution_bonus||A._evolution_bonus||0,B=A.job==="MIL"||A.job2==="MIL"?q:0,C=A.stadiumBonus||j&&(j.club_id&&String(A.club_id)===String(j.club_id)||j.country_code&&A.country_code===j.country_code)?10:0;return D+B+C}function f(A,j){return A.reduce((D,q)=>D+c(q,j),0)}function a(A){let j=0;for(let D=0;D<A.length-1;D++){const q=nt(A[D],A[D+1]);q==="#00ff88"?j+=2:q==="#FFD700"&&(j+=1)}return j}const o=f(n,s)+a(n),l=f(d,r)+a(d),b=o>=l;function h(A,j,D,q,B){return`<div id="duel-row-${q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${j}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${A.map((C,P)=>{const J=P<A.length-1?nt(C,A[P+1]):null,Z=!J||J==="#ff3333"||J==="#cc2222",se=J==="#00ff88"?"+2":J==="#FFD700"?"+1":"";c(C,B),C.stadiumBonus||B&&(B.club_id&&String(C.club_id)===String(B.club_id)||B.country_code&&(C.country_code,B.country_code));const re=C.evolution_bonus||C._evolution_bonus||0;return`
          <div class="duel-card duel-card-${q}" data-idx="${P}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...C,_evolution_bonus:re},58,78,B)}
          </div>
          ${P<A.length-1?`<div class="duel-link duel-link-${q}" data-idx="${P}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Z?"rgba(255,255,255,0.12)":J};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Z?"none":`0 0 8px ${J}`}">
            ${se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${J}">${se}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${f(A,B)} + ${a(A)} liens = <b style="color:#fff">${f(A,B)+a(A)}</b>
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
  </div>`;const $=()=>{const A=(j,D)=>e.querySelectorAll(j).forEach((q,B)=>{setTimeout(()=>{q.style.opacity="1",q.style.transform="translateY(0) scale(1)"},D+B*90)});A(".duel-card-home",150),A(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((j,D)=>{setTimeout(()=>{j.style.opacity="1"},D*70)}),900),setTimeout(()=>{const j=e.querySelector("#vs-label");j&&(j.style.opacity="1",j.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(D=>D.style.opacity="1")},1250),setTimeout(()=>{p("score-home",o,800),p("score-ai",l,800)},1500)};function p(A,j,D){const q=document.getElementById(A);if(!q)return;const B=performance.now(),C=P=>{const J=Math.min(1,(P-B)/D);q.textContent=Math.round(j*(1-Math.pow(1-J,3))),J<1?requestAnimationFrame(C):q.textContent=j};requestAnimationFrame(C)}requestAnimationFrame($),t.attacker=b?"home":"ai";const u=b?ai():null;b&&(t.boostCard={value:u}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(A=>({name:A.name,note:ze(A,"MIL"),portrait:Pe(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo})),aiPlayers:d.map(A=>({name:A.name,note:ze(A,"MIL"),portrait:Pe(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo})),homeTotal:o,aiTotal:l,text:`Duel milieu : ${t.clubName} ${o} – ${l} IA → ${b?t.clubName+" attaque":"IA attaque"}`});const m=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ti(e,t,i),800)};setTimeout(()=>{const A=document.getElementById("score-home"),j=document.getElementById("score-ai"),D=document.getElementById(b?"duel-row-home":"duel-row-ai"),q=document.getElementById(b?"duel-row-ai":"duel-row-home"),B=b?A:j,C=b?j:A;B&&(B.style.fontSize="80px",B.style.color=b?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(b?", duelGlow 1.5s ease infinite .5s":"")),C&&(C.style.opacity="0.25"),setTimeout(()=>{D&&(D.style.transformOrigin="center",D.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",D.style.zIndex="5"),setTimeout(()=>{var J;const P=document.getElementById("duel-shock");if(P){const Z=(J=q||D)==null?void 0:J.getBoundingClientRect(),se=e.querySelector(".match-screen").getBoundingClientRect();Z&&(P.style.top=Z.top-se.top+Z.height/2+"px"),P.style.animation="shockwave .5s ease-out forwards"}q&&(q.style.transformOrigin="center",q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var J;const P=document.getElementById("duel-finale");P&&(P.innerHTML=`
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
          </button>`,P.style.transition="opacity .45s ease",P.style.opacity="1",P.style.pointerEvents="auto",(J=document.getElementById("start-match-btn"))==null||J.addEventListener("click",m))},600)},700)},2800)}function jn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var B,C,P,J,Z,se,re,Q,O;const n=t.selected.map(F=>F.cardId),d=t.usedSubIds||[],s=t.homeSubs.filter(F=>!d.includes(F.cardId)),c=Object.values(t.homeTeam).flat().filter(F=>F.used).length>0&&s.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(F=>(t.aiTeam[F]||[]).some(ne=>!ne.used)),a=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(F=>!F.used),o=t.phase==="attack"&&f&&a.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(F=>!F.used).map(F=>F.cardId):[];t.log[t.log.length-1];const l=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",h=t.phase==="defense",$=t.phase==="finished",u=(t.homeSubs||[]).filter(F=>!(t.usedSubIds||[]).includes(F.cardId)).length>0&&t.subsUsed<t.maxSubs,m=b&&a.length===0&&!u,A=t.gcCards.filter(F=>!t.usedGc.includes(F.id)),j=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${tt((ne.players||[]).map(ue=>({...ue,used:!1})),"#ff6b6b",ne.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ne=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${tt((ne.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",ne.total)}
          </div>`}const F=t.log[t.log.length-1];return F?'<div style="padding:2px 4px">'+jn(F)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const F=window.innerWidth>=700,ne=(V,oe,fe)=>{var w,T;const U=(t.gcDefs||[]).find(g=>g.name===V.gc_type),te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[U==null?void 0:U.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Y={purple:"#b06ce0",light_blue:"#00d4ef"}[U==null?void 0:U.color]||"#b06ce0",de=(U==null?void 0:U.name)||V.gc_type,ve=(U==null?void 0:U.effect)||((w=Re[V.gc_type])==null?void 0:w.desc)||"",Te=U!=null&&U.image_url?`/icons/${U.image_url}`:null,$e=((T=Re[V.gc_type])==null?void 0:T.icon)||"⚡",be=Math.round(fe*.22),ke=Math.round(fe*.22),qe=fe-be-ke,je=de.length>12?7:9;return`<div class="gc-mini" data-gc-id="${V.id}" data-gc-type="${V.gc_type}"
          style="box-sizing:border-box;width:${oe}px;height:${fe}px;border-radius:10px;border:2px solid ${Y};background:${te};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${be}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${je}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${de}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${qe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${oe-10}px;max-height:${qe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(qe*.55)}px">${$e}</span>`}
          </div>
          <div style="height:${ke}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},ue=(V,oe)=>{var fe;return`<div id="boost-card"
          style="box-sizing:border-box;width:${V}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
            <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${(fe=t.boostCard)==null?void 0:fe.value}</div>
          </div>`},ye=(V,oe)=>oe?ue(130,175):ne(V,130,175),me=(V,oe)=>oe?ue(68,95):ne(V,68,95),xe=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Le=$?`<button id="btn-results" style="${xe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:l?`<div style="${xe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${xe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${xe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:h?`<button id="btn-action" style="${xe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${xe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Fe=b||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Ce=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${s.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':s.map(V=>`<div class="sub-btn-col" data-sub-id="${V.cardId}" style="cursor:pointer;flex-shrink:0">${We(V,76,100)}</div>`).join("")}
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
            ${A.map(V=>ye(V,!1)).join("")}
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
            ${A.map(V=>me(V,!1)).join("")}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(F=>{var ne,ue,ye;if(F.type==="duel"){const me=F.isGoal,xe=F.homeScored?"#FFD700":me?"#ff6b6b":"rgba(255,255,255,0.3)",Le=F.homeScored?"⚽ BUT !":me?"⚽ BUT IA !":(ne=F.homePlayers)!=null&&ne.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${me?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${xe};margin-bottom:4px">
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
  </div>`;function D(){const F=e.querySelector(".match-screen");if(!F)return;const ne=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);F.style.bottom="auto",F.style.height=ne+"px",F.style.minHeight=ne+"px",F.style.maxHeight=ne+"px",F.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");ue&&ye&&(ye.style.paddingBottom=ue.offsetHeight+"px")}if(D(),setTimeout(D,120),setTimeout(D,400),setTimeout(D,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",D),window.visualViewport.addEventListener("scroll",D)),window.addEventListener("resize",D)),function(){const ne=e.querySelector(".terrain-wrapper svg");ne&&(ne.removeAttribute("width"),ne.removeAttribute("height"),ne.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ne.setAttribute("viewBox","-26 -26 352 352"),ne.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const F=e.querySelector(".terrain-wrapper svg");F&&(F.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let F=!1,ne=30;const ue=()=>document.getElementById("match-timer"),ye=()=>{const me=ue();if(!me)return;const xe=String(Math.floor(ne/60)).padStart(2,"0"),Le=String(ne%60).padStart(2,"0");me.textContent=` ${xe}:${Le}`,me.style.color=F?"#ff2222":"#ff9500",me.style.fontWeight="900"};ye(),t._timerInt=setInterval(()=>{if(ne--,ne<0)if(!F)F=!0,ne=15,ye();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const me=document.createElement("div");me.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",me.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(me),setTimeout(()=>{me.remove(),Dt(e,t,i)},2500)}else ye()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Dt(e,t,i))}),(C=document.getElementById("view-ai"))==null||C.addEventListener("click",()=>Un(t,i)),(P=document.getElementById("toggle-history"))==null||P.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.add("open")}),(J=document.getElementById("close-history"))==null||J.addEventListener("click",()=>{var F;(F=document.getElementById("match-history-panel"))==null||F.classList.remove("open")}),(Z=document.getElementById("btn-action"))==null||Z.addEventListener("click",()=>{t.selected.length!==0&&(b?qn(e,t,i):h&&Bn(e,t,i))}),(se=document.getElementById("btn-results"))==null||se.addEventListener("click",()=>Dt(e,t,i)),(re=document.getElementById("btn-pass"))==null||re.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ti(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(F=>{F.addEventListener("click",()=>Cn(F,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(F=>{F.addEventListener("click",()=>ui(e,t,i,null,F.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(F=>{F.addEventListener("click",()=>Nn(F.dataset.gcId,F.dataset.gcType,e,t,i))}),(Q=document.getElementById("boost-card"))==null||Q.addEventListener("click",()=>Hn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(F=>{F.addEventListener("click",()=>ui(e,t,i,F.dataset.subId))}),(O=document.getElementById("sub-btn-main"))==null||O.addEventListener("click",()=>ui(e,t,i))}function Cn(e,t,i,n){const d=e.dataset.cardId,s=e.dataset.role,r=t.selected.findIndex(c=>c.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[s]||[]).find(f=>f.cardId===d);c&&t.selected.push({...c,_role:s,_line:s})}Ye(i,t,n)}function Si(e,t,i){e.matchId&&z.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function qn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(c=>!c.used)),d=t.selected.map(r=>{const c=(t.homeTeam[r._role]||[]).find(a=>a.cardId===r.cardId)||r,f=n&&["GK","DEF"].includes(r._role);return{...c,_line:r._role,...f?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),s=Ut(d,t.modifiers.home);t.pendingAttack={...s,players:[...d],side:"home"},t.selected.forEach(r=>{const c=(t.homeTeam[r._role]||[]).find(f=>f.cardId===r.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${s.total} (base ${s.base}${s.links?` +${s.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>Gn(e,t,i),1200)}function Bn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const n=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId)||c,_line:c._role})),d=Kt(n,t.modifiers.home);t.selected.forEach(c=>{const f=(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId);f&&(f.used=!0)});const s=Vt(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const f=(t.homeTeam[c._role]||[]).find(a=>a.cardId===c.cardId)||c;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(s.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(s.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),ii(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Lt(e,t,i,"home-attack")}function Fn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(f=>f.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(f=>!e.aiUsedSubIds.includes(f.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(f=>f.job===n.job)||i[0],s={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],c=r.findIndex(f=>f.cardId===n.cardId);c!==-1&&(r[c]=s),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Dn(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(s=>!s.used);if(d.length){const s=d[Math.floor(Math.random()*d.length)];s.boost=(s.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ti(e,t,i){Si(t,i,null),Fn(t),Dn(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=ro(n,"attack",t.difficulty);if(!d.length){Zt(e,t,i);return}const s=Ut(d,t.modifiers.ai);t.pendingAttack={...s,players:d,side:"ai"},d.forEach(a=>{a.used=!0}),t.log.push({text:`🤖 IA attaque : ${s.total} (${d.map(a=>a.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(a=>!a.used),f=(t.homeSubs||[]).filter(a=>!(t.usedSubIds||[]).includes(a.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!f){t.aiScore++;const a={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:s.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(a),t.pendingAttack=null,Ye(e,t,i),ii(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function Gn(e,t,i){var a,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=ro(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(l=>(t.aiTeam[l]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((a=t.pendingAttack)==null?void 0:a.players)||[]).map(h=>({name:h.name,note:ze(h,h._line||h.job),portrait:Pe(h),job:h.job,country_code:h.country_code,rarity:h.rarity,clubName:h.clubName,clubLogo:h.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ii(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}const r=d.length>0?Kt(d,t.modifiers.ai).total:0;d.forEach(l=>{l.used=!0});const c=Vt(t.pendingAttack.total,r,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),aiPlayers:d.map(l=>({name:l.name,note:l._line==="GK"?l.note_g:l._line==="MIL"?l.note_m:l.note_d,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(c.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(c.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ii(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,Lt(e,t,i,"ai-attack")}function Lt(e,t,i,n){if(t.round++,$o(t)){Dt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(s=>!s.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Zt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Zt(e,t,i);return}setTimeout(()=>ti(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Zt(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ti(e,t,i),800)}}function $o(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Zt(e,t,i){$o(t)?Dt(e,t,i):(t.phase="attack",Ye(e,t,i))}function Pn(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=Pe(e),s=Pe(t),r=jt[e.job]||"#555",c=jt[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,a=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
  `,document.body.appendChild(n);let o=!1;const l=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",l),setTimeout(l,2e3)}function qt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ui(e,t,i,n=null,d=null){var h,$;if(t.phase!=="attack"){qt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){qt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const s=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(m=>m.used).map(m=>({...m,_line:m._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!s.length){qt("Aucun joueur utilisé à remplacer");return}if(!r.length){qt("Aucun remplaçant disponible");return}let c=Math.max(0,s.findIndex(p=>p.cardId===d));const f=((h=s[c])==null?void 0:h._line)||(($=s[c])==null?void 0:$.job);let a=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===f)),o=!1;const l=document.createElement("div");l.id="sub-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var q,B,C,P,J,Z;const p=s[c],u=r[a],m=Math.min(130,Math.round((window.innerWidth-90)/2)),A=Math.round(m*1.35),j=se=>`background:rgba(255,255,255,0.12);border:none;color:${se?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${se?"default":"pointer"};flex-shrink:0`;l.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${j(a===0)}" ${a===0?"disabled":""}>▲</button>
        <div>${u?We({...u,used:!1,boost:0},m,A):"<div>—</div>"}</div>
        <button id="in-down" style="${j(a>=r.length-1)}" ${a>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${a+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${j(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},m,A):"<div>—</div>"}</div>
        <button id="out-down" style="${j(c>=s.length-1)}" ${c>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${s.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=l.querySelector("#sub-close"))==null||q.addEventListener("click",()=>l.remove()),(B=l.querySelector("#out-up"))==null||B.addEventListener("click",()=>{c>0&&(c--,b())}),(C=l.querySelector("#out-down"))==null||C.addEventListener("click",()=>{c<s.length-1&&(c++,b())}),(P=l.querySelector("#in-up"))==null||P.addEventListener("click",()=>{a>0&&(a--,b())}),(J=l.querySelector("#in-down"))==null||J.addEventListener("click",()=>{a<r.length-1&&(a++,b())});const D=(se,re,Q,O)=>{const F=l.querySelector("#"+se);if(!F)return;let ne=0;F.addEventListener("touchstart",ue=>{ne=ue.touches[0].clientY},{passive:!0}),F.addEventListener("touchend",ue=>{const ye=ue.changedTouches[0].clientY-ne;if(Math.abs(ye)<30)return;const me=re();ye<0&&me<O-1?(Q(me+1),b()):ye>0&&me>0&&(Q(me-1),b())},{passive:!0})};D("in-panel",()=>a,se=>a=se,r.length),D("out-panel",()=>c,se=>c=se,s.length),(Z=l.querySelector("#sub-confirm"))==null||Z.addEventListener("click",se=>{if(se.preventDefault(),se.stopPropagation(),o)return;o=!0;const re=s[c],Q=r[a];if(!re||!Q)return;let O=null,F=-1;for(const[ue,ye]of Object.entries(t.homeTeam)){const me=(ye||[]).findIndex(xe=>xe.cardId===re.cardId);if(me!==-1){O=ue,F=me;break}}if(F===-1||!O){qt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),l.remove();return}const ne={...Q,_line:O,_col:re._col||0,used:!1,boost:0};t.homeTeam[O].splice(F,1,ne),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:re.name,firstname:re.firstname,note:ze(re,O),portrait:Pe(re),job:re.job,country_code:re.country_code,rarity:re.rarity,clubName:re.clubName,clubLogo:re.clubLogo},inPlayer:{name:Q.name,firstname:Q.firstname,note:ze(Q,O),portrait:Pe(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},text:`🔄 ${Q.firstname} ${Q.name} remplace ${re.firstname} ${re.name}`}),l.remove(),Pn(re,Q,()=>Ye(e,t,i))})}document.body.appendChild(l),b()}function Nn(e,t,i,n,d){var $,p;const s=(n.gcDefs||[]).find(u=>u.name===t),r=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[s==null?void 0:s.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[s==null?void 0:s.color]||"#b06ce0",a=(s==null?void 0:s.name)||t,o=(s==null?void 0:s.effect)||r.desc,l=s!=null&&s.image_url?`/icons/${s.image_url}`:null,b=r.icon||"⚡",h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",h.innerHTML=`
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
    </div>`,document.body.appendChild(h),($=h.querySelector("#gc-back"))==null||$.addEventListener("click",()=>h.remove()),(p=h.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{h.remove(),On(e,t,i,n,d)})}function Jt(e,t,i,n,d,s){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function f(){var a,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(l=>{const b=l._line||l.job||"MIL",h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",$=ze(l,b)+(l.boost||0),p=c.find(u=>u.cardId===l.cardId);return`<div class="gc-pick-item" data-cid="${l.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${h};overflow:hidden;cursor:pointer;flex-shrink:0;${l.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${l.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${$}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(a=r.querySelector("#gc-picker-close"))==null||a.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.cid,h=e.find(p=>p.cardId===b);if(!h)return;const $=c.findIndex(p=>p.cardId===b);$>-1?c.splice($,1):c.length<t&&c.push(h),f()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),s(c)})}f(),document.body.appendChild(r)}const Rn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,s)=>{const r=Object.entries(n.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(a=>!a.used).map(a=>({...a,_line:c})));return r.length?(Jt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,c=>{c.forEach(f=>{const a=(n.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);a&&(a.boost=(a.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${a.name}`,type:"info"}))}),Ye(d,n,s)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(d,n,s),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,s,r)=>{const c=n==="home"?d.homeTeam:d.aiTeam,f=n==="ai"?"adverse":"allié",a=Object.entries(c).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,l])=>l.filter(b=>!b.used).map(b=>({...b,_line:o})));return a.length?(Jt(a,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,s,d,o=>{o.forEach(l=>{const h=((n==="home"?d.homeTeam:d.aiTeam)[l._line]||[]).find($=>$.cardId===l.cardId);h&&(h.boost=(h.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${h.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ye(s,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Ye(s,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,s)=>{const r=i==="home"?n.homeTeam:n.aiTeam,c=i==="ai"?"adverse":"allié",f=Object.entries(r).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,o])=>o.filter(l=>!l.used).map(l=>({...l,_line:a})));return f.length?(Jt(f,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,d,n,a=>{a.forEach(o=>{const b=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(h=>h.cardId===o.cardId);b&&(b.used=!0,n.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(d,n,s)}),!0):(n.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Ye(d,n,s),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const s=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,c])=>c.filter(f=>f.used).map(f=>({...f,_line:r})));return s.length?(Jt(s,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(c=>{const f=(i.homeTeam[c._line]||[]).find(a=>a.cardId===c.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Ye(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function On(e,t,i,n,d){n.usedGc.push(e);const s=n.gcDefs||[],r=s.find(f=>f.name===t)||s.find(f=>{var a;return((a=f.name)==null?void 0:a.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const f=Rn[r.effect_type];f?f(r.effect_params||{},n,i,d)||(c=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(n.homeTeam).flatMap(([a,o])=>(o||[]).filter(l=>l.used).map(l=>({...l,_line:a})));f.length?(f[0].used=!1,n.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(a=>!a.used);if(f.length){const a=f.sort((o,l)=>ze(l,"ATT")-ze(o,"ATT"))[0];a.used=!0,n.log.push({text:`❄️ ${a.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}z.from("cards").delete().eq("id",e).then(()=>{}),c&&Ye(i,n,d)}function Hn(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${jt[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ze(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const s=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[r]||[]).find(f=>f.cardId===s);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function ii(e,t,i,n,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(a,o)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(s);let c=!1;const f=()=>{c||(c=!0,s.remove(),setTimeout(()=>d(),50))};s.addEventListener("click",f),setTimeout(f,3500)}async function Dt(e,t,i){var o,l;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,s=t.homeScore===t.aiScore,r=d?"victoire":s?"nul":"defaite",c=Wo(t.mode,r);t.matchId&&await z.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(n.profile.credits||0)+c,matches_played:(n.profile.matches_played||0)+1};d?f.wins=(n.profile.wins||0)+1:s?f.draws=(n.profile.draws||0)+1:f.losses=(n.profile.losses||0)+1,await z.from("users").update(f).eq("id",n.profile.id),await i.refreshProfile();const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("home")}),(l=document.getElementById("res-replay"))==null||l.addEventListener("click",()=>{a.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function Un(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ct(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function hi(e,t,i=!1){var d,s,r,c;try{const f=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(o=>{const l=o.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&z.removeChannel(o)})}catch(a){console.warn("[Random] cleanup canaux:",a)}f&&await z.rpc("cancel_matchmaking",{p_user_id:f}).catch(()=>{})}catch{}const n=i&&((c=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:c.rankedData)||null;await di(e,t,"random",({deckId:f,formation:a,starters:o,subsRaw:l,gcCardsEnriched:b,gcDefs:h,stadiumDef:$})=>{const p=u=>Kn(e,t,f,a,o,l,u,h||[],$,i,n);if(!b.length){p([]);return}si(e,b,p)})}async function Kn(e,t,i,n,d,s,r=[],c=[],f=null,a=!1,o=null){var B,C;const{state:l,navigate:b,toast:h}=t;let $=!1,p=null;et(e);const u=(o==null?void 0:o.mmr)??((B=l.profile)==null?void 0:B.mmr)??1e3,m=a?Pt(u):null,A=a?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",j=a?(m==null?void 0:m.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${A};padding:24px;text-align:center">
      ${a?`<div style="font-size:36px">${(m==null?void 0:m.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${j};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${a?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${a?`<div style="font-size:13px;color:${(m==null?void 0:m.color)||"#D4A017"}">MMR : ${u} · ${(m==null?void 0:m.label)||""}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="font-size:11px;color:rgba(255,255,255,0.3)"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const D=async(P=!0)=>{$=!0,p&&(z.removeChannel(p),p=null),P&&await z.rpc("cancel_matchmaking",{p_user_id:l.profile.id}).catch(()=>{})};(C=document.getElementById("mm-cancel"))==null||C.addEventListener("click",async()=>{try{await D(!0)}catch{}Ve(e),b("home")});const q=async(P,J,Z)=>{if($)return;$=!0,p&&(z.removeChannel(p),p=null);const se=document.getElementById("mm-status");se&&(se.textContent="Adversaire trouvé !"),await new Promise(re=>setTimeout(re,600)),e.isConnected&&ko(e,t,P,Z,r,c,a,o)};if(a){const P=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let J=0,Z=!1;const se=async()=>{if($||Z)return;const{range:re}=P[J],Q=document.getElementById("mm-range");Q&&(Q.textContent=`Plage MMR : ±${re}`);const{data:O,error:F}=await z.rpc("try_matchmake_ranked",{p_user_id:l.profile.id,p_deck_id:i,p_mmr:u,p_range:re});if(console.log("[Ranked] try_matchmake_ranked result:",O,"error:",JSON.stringify(F)),$)return;if(F||!(O!=null&&O.success)){h("Erreur matchmaking ranked","error"),Ve(e),b("home");return}if(O.matched){Z=!0,q(O.match_id,O.opponent_id,!1);return}const ne=document.getElementById("mm-status");if(ne&&(ne.textContent="En attente d'un adversaire..."),p||(p=z.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},ue=>{const ye=ue.new;ye.status==="matched"&&ye.match_id&&!Z&&(Z=!0,q(ye.match_id,ye.matched_with,!0))}).subscribe()),J<P.length-1){const ue=P[J+1].delay-P[J].delay;J++,setTimeout(()=>{!$&&!Z&&se()},ue)}};await se()}else{const{data:P,error:J}=await z.rpc("try_matchmake",{p_user_id:l.profile.id,p_deck_id:i});if(J||!(P!=null&&P.success)){h("Erreur de matchmaking","error"),Ve(e),b("home");return}if(P.matched){q(P.match_id,P.opponent_id,!1);return}const Z=document.getElementById("mm-status");Z&&(Z.textContent="En attente d'un autre joueur..."),p=z.channel("matchmaking-"+l.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${l.profile.id}`},se=>{const re=se.new;re.status==="matched"&&re.match_id&&q(re.match_id,re.matched_with,!0)}).subscribe()}}async function Vn(e,t,i){const{state:n,navigate:d,toast:s}=t;try{(z.getChannels?z.getChannels():[]).forEach(a=>{const o=a.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&z.removeChannel(a)})}catch{}const{data:r}=await z.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){s("Match introuvable","error"),d("home");return}if(r.status==="finished"){s("Ce match est terminé","info"),d("home");return}const c=r.home_id===n.profile.id;ko(e,t,i,c,[],[])}async function ko(e,t,i,n,d=[],s=[],r=!1,c=null){const{state:f,navigate:a,toast:o}=t,l=n?"p1":"p2",b=n?"p2":"p1",h=(d||[]).map(w=>w.id),$=(d||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:p}=await z.from("matches").select("*").eq("id",i).single();if(!p){o("Match introuvable","error"),a("home");return}async function u(){const[{data:w},{data:T},{data:g},{data:y}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:p.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:p.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",p.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",p.away_id).single()]),x=I=>{const N=Number(I.evolution_bonus)||0;return{cardId:I.card_id,position:I.position,id:I.id,firstname:I.firstname,name:I.surname_encoded,country_code:I.country_code,club_id:I.club_id,job:I.job,job2:I.job2,note_g:(Number(I.note_g)||0)+(I.job==="GK"||I.job2==="GK"&&Number(I.note_g)>0?N:0),note_d:(Number(I.note_d)||0)+(I.job==="DEF"||I.job2==="DEF"&&Number(I.note_d)>0?N:0),note_m:(Number(I.note_m)||0)+(I.job==="MIL"||I.job2==="MIL"&&Number(I.note_m)>0?N:0),note_a:(Number(I.note_a)||0)+(I.job==="ATT"||I.job2==="ATT"&&Number(I.note_a)>0?N:0),evolution_bonus:N,rarity:I.rarity,skin:I.skin,hair:I.hair,hair_length:I.hair_length,clubName:I.club_encoded_name||null,clubLogo:I.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((w==null?void 0:w.starters)||[]).map(I=>x(I)),v=((T==null?void 0:T.starters)||[]).map(I=>x(I)),k=(w==null?void 0:w.formation)||"4-4-2",L=(T==null?void 0:T.formation)||"4-4-2";let E=bt(_,k),M=bt(v,L);const S=((w==null?void 0:w.subs)||[]).map(I=>x(I));return stadiumDef&&n&&(E=Ct(E,stadiumDef),Ot(S,stadiumDef)),{p1Team:E,p2Team:M,p1Subs:S,p2Subs:((T==null?void 0:T.subs)||[]).map(I=>x(I)),p1Formation:k,p2Formation:L,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?h:[],gc_p2:n?[]:h,gcCardsFull_p1:n?$:[],gcCardsFull_p2:n?[]:$,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let m=p.game_state&&Object.keys(p.game_state).length?p.game_state:null;if(!m)if(n){m=await u();const{data:w}=await z.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await z.from("matches").update({game_state:m,turn_user_id:p.home_id}).eq("id",i):m=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<30&&!m;w++){await new Promise(g=>setTimeout(g,400));const{data:T}=await z.from("matches").select("game_state").eq("id",i).single();T!=null&&T.game_state&&Object.keys(T.game_state).length&&(m=T.game_state)}if(!m){o("Erreur de synchronisation","error"),a("home");return}m.gc_p2=h,m.gcCardsFull_p2=$,await z.from("matches").update({game_state:m}).eq("id",i)}let A=!1,j=null,D=!1;const q=new Set,B=new Set;async function C(w){var M,S;try{z.removeChannel(P)}catch{}const T=m[l+"Score"]||0,g=m[b+"Score"]||0;let y,x;w.winner_id?(y=w.winner_id===f.profile.id,x=!1):w.forfeit?(y=T>g,x=!1):(x=T===g,y=T>g);let _="";if(r&&n)try{const{data:I}=await z.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",p.home_id).single(),{data:N}=await z.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",p.away_id).single();if(I&&N){const ee=y?1:x?.5:0,R=1-ee,K=I.placement_matches<10,H=N.placement_matches<10,X=ji(I.mmr,I.mmr_deviation,I.mmr_volatility,N.mmr,N.mmr_deviation,ee===1?1:ee===0?0:.5,K),ae=ji(N.mmr,N.mmr_deviation,N.mmr_volatility,I.mmr,I.mmr_deviation,R===1?1:R===0?0:.5,H);await z.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:x?null:y?p.home_id:p.away_id,p_home_id:p.home_id,p_away_id:p.away_id,p_home_delta:X.delta,p_away_delta:ae.delta,p_home_new_rd:X.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:X.newSigma,p_away_new_vol:ae.newSigma});const pe=X.delta,ce=X.newMmr,ge=Pt(ce),he=pe>=0?"+":"",Ie=pe>=0?"#4caf50":"#ff6b6b",Se=Pt(I.mmr);_=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${ge.id!==Se.id?`<div style="font-size:20px;font-weight:900;color:${ge.color}">
                    ${ce>I.mmr?"📈":"📉"} ${Se.emoji} ${Se.label} → ${ge.emoji} ${ge.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ce>I.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${pe>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${tier.color}">${tier.emoji} ${tier.label}</div>`}
              ${K?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${I.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(I){console.error("[Ranked] MMR update error:",I)}(M=document.getElementById("pvp-end-overlay"))==null||M.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const k=x?"🤝":y?"🏆":"😞",L=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",E=x?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${k}</div>
      <div style="font-size:26px;font-weight:900;color:${E}">${L}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[l+"Name"]} ${T} – ${g} ${m[b+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${_}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(S=v.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{v.remove(),Ve(e),a("home")})}const P=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const T=w.new;try{if(T.status==="finished"||T.forfeit){if(A)return;A=!0,j&&(clearInterval(j),j=null),T.game_state&&(m=T.game_state),C(T);return}if(T.game_state){const g=m;m=T.game_state;const y=m._lastGC;if(y&&y.seq&&!B.has(y.seq)&&(B.add(y.seq),y.by!==l)){Le(y.type,y.by,()=>ne());return}const x=g[l+"Score"]||0,_=g[b+"Score"]||0,v=m[l+"Score"]||0,k=m[b+"Score"]||0,L=v>x,E=k>_;if((L||E)&&!q.has(m.round)){q.add(m.round);const M=[...m.log||[]].reverse().find(I=>I.isGoal),S=((M==null?void 0:M.homePlayers)||[]).map(I=>({name:I.name,note:I.note,portrait:I.portrait,job:I.job}));xe(S,v,k,L,()=>ne());return}ne()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function J(w){Object.assign(m,w),m.lastActionAt=new Date().toISOString();const{error:T}=await z.from("matches").update({game_state:m}).eq("id",i);T&&o("Erreur de synchronisation","error");try{ne()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function Z(){if(A)return;A=!0,j&&(clearInterval(j),j=null);const w=n?p.away_id:p.home_id,T=n?"p2":"p1",g=n?"p1":"p2",y={...m,[T+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{z.removeChannel(P)}catch{}setTimeout(()=>{Ve(e),a("home")},800)}const se={BOOST_STAT:({value:w=1,count:T=1,roles:g=[]},y,x)=>{const _=y[l+"Team"],v=Object.entries(_).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,L])=>L.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!v.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}re(v,T,`Choisir ${T} joueur(s) à booster (+${w})`,k=>{k.forEach(L=>{const E=(_[L._line]||[]).find(M=>M.cardId===L.cardId);E&&(E.boost=(E.boost||0)+w,y.log.push({text:`⚡ +${w} sur ${E.name}`,type:"info"}))}),y[l+"Team"]=_,x(y)})},DEBUFF_STAT:({value:w=1,count:T=1,roles:g=[],target:y="ai"},x,_)=>{const v=y==="home"?l:b,k=x[v+"Team"],L=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([M])=>!g.length||g.includes(M)).flatMap(([M,S])=>S.map(I=>({...I,_line:M})));if(!E.length){x.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),_(x);return}re(E,T,`Choisir ${T} joueur(s) ${L}(s) (-${w})`,M=>{M.forEach(S=>{const I=(k[S._line]||[]).find(N=>N.cardId===S.cardId);I&&(I.boost=(I.boost||0)-w,x.log.push({text:`🎯 -${w} sur ${I.name}`,type:"info"}))}),x[v+"Team"]=k,_(x)})},GRAY_PLAYER:({count:w=1,roles:T=[],target:g="ai"},y,x)=>{const _=g==="home"?l:b,v=y[_+"Team"],k=g==="home"?"allié":"adverse",L=Object.entries(v).filter(([E])=>!T.length||T.includes(E)).flatMap(([E,M])=>M.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),x(y);return}re(L,w,`Choisir ${w} joueur(s) ${k}(s) à exclure`,E=>{const M="usedCardIds_"+_,S=new Set(y[M]||[]);E.forEach(I=>{const N=(v[I._line]||[]).find(ee=>ee.cardId===I.cardId);N&&(N.used=!0,S.add(I.cardId),y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[M]=[...S],y[_+"Team"]=v,x(y)})},REVIVE_PLAYER:({count:w=1,roles:T=[]},g,y)=>{const x=g[l+"Team"],_=Object.entries(x).filter(([v])=>!T.length||T.includes(v)).flatMap(([v,k])=>k.filter(L=>L.used).map(L=>({...L,_line:v})));if(!_.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(g);return}re(_,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(k=>{const L=(x[k._line]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!1,g.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),g[l+"Team"]=x,y(g)})},REMOVE_GOAL:({},w,T)=>{const g=b+"Score";w[g]>0?(w[g]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),T(w)},ADD_GOAL_DRAW:({},w,T)=>{w[l+"Score"]===w[b+"Score"]?(w[l+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),T(w)},ADD_SUB:({value:w=1},T,g)=>{T.maxSubs=(T.maxSubs||3)+w,T.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),g(T)},CUSTOM:({},w,T)=>T(w)};function re(w,T,g,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function v(){var L,E;const k=w.map(M=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",I=ze(M,M._line)+(M.boost||0),ee=_.find(K=>K.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",R=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ee};background:${S};overflow:hidden;cursor:pointer;${R}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${I}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_.length}/${T}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${_.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${_.length}/${T})
          </button>
        </div>`,(L=x.querySelector("#pp-close"))==null||L.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const S=M.dataset.cid,I=w.find(ee=>ee.cardId===S),N=_.findIndex(ee=>ee.cardId===S);I&&(N>-1?_.splice(N,1):_.length<T&&_.push(I),v())})}),(E=x.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{x.remove(),y(_)})}v(),document.body.appendChild(x)}async function Q(w,T){const y=(m["gcCardsFull_"+l]||[]).find(k=>k.id===w),x=(y==null?void 0:y._gcDef)||(m.gcDefs||[]).find(k=>{var L;return k.name===T||((L=k.name)==null?void 0:L.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),_=[...m["usedGc_"+l]||[],w],v={type:T,by:l,seq:(m._gcAnimSeq||0)+1};B.add(v.seq),Le(T,l,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const L=se[x.effect_type];if(L){const E={...m};L(x.effect_params||{},E,async M=>{M["usedGc_"+l]=_,M._lastGC=v,M._gcAnimSeq=v.seq,await J(M)});return}}const k={...m};switch(T){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=b+"Score";k[L]>0&&(k[L]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+l]=_,k._lastGC=v,k._gcAnimSeq=v.seq,await J(k)})}function O(w,T){const g="usedCardIds_"+w,y=new Set(m[g]||[]);T.forEach(x=>y.add(x)),m[g]=[...y]}function F(){for(const w of["p1","p2"]){const T=new Set(m["usedCardIds_"+w]||[]),g=m[w+"Team"];if(g)for(const y of["GK","DEF","MIL","ATT"])(g[y]||[]).forEach(x=>{x.used=T.has(x.cardId)})}}function ne(){var Ke,Ze,it,ut,ft,gt;if(m.phase==="reveal")return ue();if(m.phase==="midfield")return me();if(m.phase==="finished")return je();const w=m[l+"Team"],T=m[b+"Team"];F();const g=m[l+"Score"],y=m[b+"Score"],x=m[l+"Name"],_=m[b+"Name"],v=m.phase===l+"-attack",k=m.phase===l+"-defense",L=Array.isArray(m["selected_"+l])?m["selected_"+l]:[],E=L.map(G=>G.cardId),M=window.innerWidth>=700,S=m[l+"Subs"]||[],I=m["usedSubIds_"+l]||[],N=S.filter(G=>!I.includes(G.cardId)),ee=m["gcCardsFull_"+l]||[],R=m["usedGc_"+l]||[],K=ee.filter(G=>!R.includes(G.id)),H=m.boostOwner===l&&!m.boostUsed,X=!["GK","DEF","MIL","ATT"].some(G=>(T[G]||[]).some(le=>!le.used)),ae=[...w.MIL||[],...w.ATT||[]].filter(G=>!G.used),pe=v&&X&&ae.length===0?[...w.GK||[],...w.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function ce(G,le,W){var lt,wt;const ie=G._gcDef,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ie==null?void 0:ie.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[ie==null?void 0:ie.color]||"#b06ce0",Xe=(ie==null?void 0:ie.name)||G.gc_type,Qe=(ie==null?void 0:ie.effect)||((lt=Re[G.gc_type])==null?void 0:lt.desc)||"",ot=ie!=null&&ie.image_url?`/icons/${ie.image_url}`:null,dt=((wt=Re[G.gc_type])==null?void 0:wt.icon)||"⚡",mt=Math.round(W*.22),vt=Math.round(W*.22),rt=W-mt-vt,Tt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${W}px;border-radius:10px;border:2px solid ${_e};background:${Ae};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function ge(G,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const he=(G,le)=>le?ge(130,175):ce(G,130,175),Ie=(G,le)=>le?ge(68,95):ce(G,68,95),Se=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?$e(l)?`<button id="pvp-action" style="${Se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,Ee=v&&!$e(l)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${N.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':N.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${We(G,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Me=v?"attack":k?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(w,m[l+"Formation"],Me,E,300,300,pe)}
      </div>
    </div>`;function Ne(G){if(G.type==="duel"&&(G.homeTotal!=null||G.aiTotal!=null)){const le=(G.homeTotal||0)>=(G.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(G.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.homePlayers||[]).map(W=>at(W)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${G.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${G.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.aiPlayers||[]).map(W=>at(W)).join("")}
            </div>
          </div>
          ${G.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${G.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${G.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${G.type==="goal"?700:400};padding:3px 2px">${G.text||""}</div>`}const Je=(()=>{var le,W;if(k&&((le=m.pendingAttack)!=null&&le.players)){const ie=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${tt((ie.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",ie.total)}
        </div>`}if(v&&((W=m.pendingAttack)!=null&&W.players)){const ie=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((ie.players||[]).map(Ae=>({...Ae,used:!1})),"#00ff88",ie.total)}
        </div>`}const G=(m.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ne(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),He=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
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
            ${K.map(G=>he(G,!1)).join("")}
            ${H?he(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(w,m[l+"Formation"],Me,E,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(G=>Ie(G,!1)).join("")}
            ${H?Ie(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&N.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&N.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&N.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&N.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${N.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+l]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+l]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Ee}</div>
        </div>
      </div>`;function Be(){const G=e.querySelector(".match-screen");if(!G)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=le+"px",G.style.minHeight=le+"px",G.style.maxHeight=le+"px",G.style.overflow="hidden";const W=e.querySelector("#mobile-action-bar"),ie=e.querySelector("#mobile-play-area");W&&ie&&(ie.style.paddingBottom=W.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!v&&!k)return;const le=G.dataset.cardId,W=G.dataset.role,ie=(w[W]||[]).find(Qe=>Qe.cardId===le);if(!ie||ie.used)return;const Ae=pe.includes(le);if(v&&!["MIL","ATT"].includes(W)&&!Ae)return;Array.isArray(m["selected_"+l])||(m["selected_"+l]=[]);const _e=m["selected_"+l],Xe=_e.findIndex(Qe=>Qe.cardId===le);Xe>-1?_e.splice(Xe,1):_e.length<3&&_e.push({...ie,_role:W}),ne()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>we(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>we())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>we()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>Fe(G.dataset.gcId,G.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>Ce()),(it=e.querySelector("#pvp-action"))==null||it.addEventListener("click",G=>{v?G.currentTarget.dataset.pass==="1"||!$e(l)?U():te():k&&Y()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>oe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>fe()),j&&(clearInterval(j),j=null),(v||k)&&!A){let G=30,le=!1;const W=()=>document.getElementById("pvp-timer"),ie=()=>{W()&&(W().textContent=G+"s",W().style.color=le?"#ff4444":"#fff")};ie(),j=setInterval(()=>{G--,G<0?le?(clearInterval(j),j=null,v&&!$e(l)?U():Z()):(le=!0,G=15,ie()):ie()},1e3)}}function ue(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${m[b+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(m[b+"Team"],m[b+"Formation"],null,[],300,300)}</div>
    </div>`,l==="p1"&&setTimeout(async()=>{await J({phase:"midfield"})},5e3)}let ye=!1;function me(){if(ye)return;const w=m[l+"Team"].MIL||[],T=m[b+"Team"].MIL||[];function g(K){return K.reduce((H,X)=>H+ze(X,"MIL"),0)}function y(K){let H=0;for(let X=0;X<K.length-1;X++){const ae=nt(K[X],K[X+1]);ae==="#00ff88"?H+=2:ae==="#FFD700"&&(H+=1)}return H}const x=g(w)+y(w),_=g(T)+y(T),v=x>=_;function k(K,H,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((ae,pe)=>{const ce=pe<K.length-1?nt(ae,K[pe+1]):null,ge=!ce||ce==="#ff3333"||ce==="#cc2222",he=ce==="#00ff88"?"+2":ce==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ae,note:ze(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<K.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":ce};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${ce}`}">
              ${he?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ce}">${he}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(K)} + ${y(K)} liens = <b style="color:#fff">${g(K)+y(K)}</b>
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
      ${k(w,m[l+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(T,m[b+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(K,H)=>e.querySelectorAll(K).forEach((X,ae)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},H+ae*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,H)=>setTimeout(()=>{K.style.opacity="1"},H*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function E(K,H,X){const ae=document.getElementById(K);if(!ae)return;const pe=performance.now(),ce=ge=>{const he=Math.min(1,(ge-pe)/X);ae.textContent=Math.round(H*(1-Math.pow(1-he,3))),he<1?requestAnimationFrame(ce):ae.textContent=H};requestAnimationFrame(ce)}setTimeout(()=>{E("pvp-score-me",x,800),E("pvp-score-opp",_,800)},1500);const M=m.p1Team.MIL||[],S=m.p2Team.MIL||[],I=g(M)+y(M),N=g(S)+y(S),ee=I>=N?"p1":"p2";let R=m.boostValue;R==null&&(R=ai(),m.boostValue=R,m.boostOwner=ee,m.boostUsed=!1),ye=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(v?"me":"opp")),H=e.querySelector("#duel-row-"+(v?"opp":"me")),X=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),pe=v?X:ae,ce=v?ae:X;pe&&(pe.style.fontSize="80px",pe.style.color=v?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ce&&(ce.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Se;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const he=m.boostOwner===l?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+R+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ie=l==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+m[l+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+he+Ie,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(Se=document.getElementById("pvp-start-match"))==null||Se.addEventListener("click",async()=>{const Oe=ee;await J({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:R,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function xe(w,T,g,y,x){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(M,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
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
        ${T} – ${g}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let L=!1;const E=()=>{L||(L=!0,_.remove(),setTimeout(()=>x(),50))};_.addEventListener("click",E),setTimeout(E,3500)}function Le(w,T,g){var R,K;const y=(m.gcDefs||[]).find(H=>{var X;return H.name===w||((X=H.name)==null?void 0:X.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",v=(y==null?void 0:y.name)||w,k=(y==null?void 0:y.effect)||((R=Re[w])==null?void 0:R.desc)||"",L=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((K=Re[w])==null?void 0:K.icon)||"⚡",S=T===l?"Vous":m[T+"Name"]||"Adversaire",I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",I.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(I);let N=!1;const ee=()=>{N||(N=!0,I.remove(),setTimeout(()=>g&&g(),50))};I.addEventListener("click",ee),setTimeout(ee,3e3)}function Fe(w,T){var I,N,ee,R;const y=(m["gcCardsFull_"+l]||[]).find(K=>K.id===w),x=y==null?void 0:y._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",k=(x==null?void 0:x.name)||T,L=(x==null?void 0:x.effect)||((I=Re[T])==null?void 0:I.desc)||"Carte spéciale.",E=x!=null&&x.image_url?`/icons/${x.image_url}`:null,M=((N=Re[T])==null?void 0:N.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(ee=S.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>S.remove()),(R=S.querySelector("#pvp-gc-use"))==null||R.addEventListener("click",()=>{S.remove(),Q(w,T)})}function Ce(){var y;const w=m[l+"Team"],T=Object.entries(w).flatMap(([x,_])=>(_||[]).filter(v=>!v.used).map(v=>({...v,_line:x})));if(!T.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${T.map(x=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",v=ze(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(y=g.querySelector("#bp-close"))==null||y.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const _=x.dataset.cid,v=T.find(L=>L.cardId===_);if(!v)return;const k=(w[v._line]||[]).find(L=>L.cardId===_);k&&(k.boost=(k.boost||0)+m.boostValue),g.remove(),await J({[l+"Team"]:w,boostUsed:!0})})})}function we(w=null){var N,ee;if(!(m.phase===l+"-attack")){o("Remplacement uniquement avant votre attaque","warning");return}const g=m[l+"Team"],y=m["usedSubIds_"+l]||[],x=m.maxSubs||3;if(y.length>=x){o(`Maximum ${x} remplacements atteint`,"warning");return}const _=Object.entries(g).flatMap(([R,K])=>(K||[]).filter(H=>H.used).map(H=>({...H,_line:R}))),v=(m[l+"Subs"]||[]).filter(R=>!y.includes(R.cardId));if(!_.length){o("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){o("Aucun remplaçant disponible","warning");return}let k=Math.max(0,_.findIndex(R=>R.cardId===w));const L=((N=_[k])==null?void 0:N._line)||((ee=_[k])==null?void 0:ee.job);let E=Math.max(0,v.findIndex(R=>R.job===L)),M=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function I(){var ce,ge,he,Ie,Se,Oe;const R=_[k],K=v[E],H=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(H*1.35),ae=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},H,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(E>=v.length-1)}" ${E>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${R?We({...R,used:!1,boost:0},H,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(k>=_.length-1)}" ${k>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ce=S.querySelector("#psub-close"))==null||ce.addEventListener("click",()=>S.remove()),(ge=S.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{k>0&&(k--,I())}),(he=S.querySelector("#pout-down"))==null||he.addEventListener("click",()=>{k<_.length-1&&(k++,I())}),(Ie=S.querySelector("#pin-up"))==null||Ie.addEventListener("click",()=>{E>0&&(E--,I())}),(Se=S.querySelector("#pin-down"))==null||Se.addEventListener("click",()=>{E<v.length-1&&(E++,I())});const pe=(Ee,Ge,Me,Ue)=>{const Ne=S.querySelector("#"+Ee);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",He=>{Je=He.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",He=>{const Be=He.changedTouches[0].clientY-Je;if(Math.abs(Be)<30)return;const Ke=Ge();Be<0&&Ke<Ue-1?(Me(Ke+1),I()):Be>0&&Ke>0&&(Me(Ke-1),I())},{passive:!0})};pe("pin-panel",()=>E,Ee=>E=Ee,v.length),pe("pout-panel",()=>k,Ee=>k=Ee,_.length),(Oe=S.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),M)return;M=!0;const Ge=_[k],Me=v[E];if(!Ge||!Me)return;const Ue=Ge._line,Ne=(g[Ue]||[]).findIndex(Be=>Be.cardId===Ge.cardId);if(Ne===-1){o("Erreur : joueur introuvable","error"),S.remove();return}const Je={...Me,_line:Ue,position:Ge.position,used:!1,boost:0};g[Ue].splice(Ne,1,Je);const He=[...y,Me.cardId];S.remove(),V(Ge,Me,async()=>{await J({[l+"Team"]:g,[b+"Team"]:m[b+"Team"],["usedSubIds_"+l]:He})})})}document.body.appendChild(S),I()}function V(w,T,g){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(L,E,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(L)?`<img src="${Pe(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(T,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const k=()=>{v||(v=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",k),setTimeout(k,2200)}function oe(){var T;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(m[b+"Team"],m[b+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(T=w.querySelector("#pvp-opp-close"))==null||T.addEventListener("click",()=>w.remove())}function fe(){var g;const w=m.log||[],T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",T.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(T),(g=T.querySelector("#pvp-hist-close"))==null||g.addEventListener("click",()=>T.remove())}async function U(){if(m.phase!==l+"-attack")return;const w=l==="p1"?"p2":"p1",T=(m.round||0)+1,g=[...m.log||[]];g.push({type:"info",text:`⏭️ ${m[l+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=be(m),x=$e(w),_=y||!x?"finished":w+"-attack";await J({["selected_"+l]:[],modifiers:{...m.modifiers,[l]:{}},pendingAttack:null,phase:_,attacker:w,round:T,log:g}),_==="finished"&&await qe(m)}async function te(){const w=m[l+"Team"],T=!["GK","DEF","MIL","ATT"].some(_=>(m[b+"Team"][_]||[]).some(v=>!v.used)),g=(m["selected_"+l]||[]).map(_=>{const v=(w[_._role]||[]).find(I=>I.cardId===_.cardId)||_,k=T&&["GK","DEF"].includes(_._role),L=w[_._role]||[],E=L.findIndex(I=>I.cardId===_.cardId),M=st(L.length),S=E>=0?M[E]:v._col??1;return{...v,_line:_._role,_col:S,...k?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!g.length)return;const y=Ut(g,m.modifiers[l]||{});O(l,g.map(_=>_.cardId)),g.forEach(_=>{const v=(w[_._role]||[]).find(k=>k.cardId===_.cardId);v&&(v.used=!0)}),m["selected_"+l]=[],ne();const x=[...m.log||[]];if(T){const _=(m[l+"Score"]||0)+1,v=g.map(S=>({name:S.name,note:ze(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:y.total,aiTotal:0});const k=(m.round||0)+1,L=l==="p1"?"p2":"p1",E={...m,[l+"Team"]:w,[l+"Score"]:_},M=be(E);q.add(k),xe(v,_,m[b+"Score"]||0,!0,async()=>{await J({[l+"Team"]:w,[l+"Score"]:_,["selected_"+l]:[],modifiers:{...m.modifiers,[l]:{}},pendingAttack:null,phase:M?"finished":L+"-attack",attacker:L,round:k,log:x}),M&&await qe({...m,[l+"Score"]:_})});return}x.push({type:"pending",text:`⚔️ ${m[l+"Name"]} attaque (${y.total})`}),await J({[l+"Team"]:w,[b+"Team"]:m[b+"Team"],pendingAttack:{...y,players:g,side:l},["selected_"+l]:[],modifiers:{...m.modifiers,[l]:{}},phase:b+"-defense",log:x})}async function Y(){const w=m[l+"Team"],T=(m["selected_"+l]||[]).map(R=>{const K=(w[R._role]||[]).find(ce=>ce.cardId===R.cardId)||R,H=w[R._role]||[],X=H.findIndex(ce=>ce.cardId===R.cardId),ae=st(H.length),pe=X>=0?ae[X]:K._col??1;return{...K,_line:R._role,_col:pe}}),g=Kt(T,m.modifiers[l]||{});O(l,T.map(R=>R.cardId)),T.forEach(R=>{const K=(w[R._role]||[]).find(H=>H.cardId===R.cardId);K&&(K.used=!0)}),m["selected_"+l]=[],ne();const y=Vt(m.pendingAttack.total,g.total,m.modifiers[l]||{}),x=m.pendingAttack.side,_=y==="attack"||(y==null?void 0:y.goal),v=x==="p1"?"p2":"p1",k=(m.round||0)+1,L=(m.pendingAttack.players||[]).map(R=>({name:R.name,note:ze(R,R._line||"ATT"),portrait:Pe(R),job:R.job})),E=[...m.log||[]];E.push({type:"duel",isGoal:_,homeScored:_&&x===l,text:_?`⚽ BUT de ${m[x+"Name"]} ! (${m.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${g.total})`,homePlayers:L,aiPlayers:T.map(R=>({name:R.name,note:ze(R,R._line||"DEF"),portrait:Pe(R),job:R.job})),homeTotal:m.pendingAttack.total,aiTotal:g.total});const M=_?(m[x+"Score"]||0)+1:m[x+"Score"]||0,S={...m,[l+"Team"]:w,[x+"Score"]:M},I=be(S),N=I?"finished":v+"-attack",ee=async()=>{await J({[l+"Team"]:w,[b+"Team"]:m[b+"Team"],[x+"Score"]:M,["selected_"+l]:[],modifiers:{...m.modifiers,[l]:{}},pendingAttack:null,phase:N,attacker:v,round:k,log:E}),(N==="finished"||I)&&await qe({...m,[x+"Score"]:M})};if(_){const R=x===l,K=R?M:m[l+"Score"]||0,H=R?m[b+"Score"]||0:M;q.add(k),xe(L,K,H,R,ee)}else await ee()}function de(w){return["MIL","ATT"].some(T=>(w[T]||[]).some(g=>!g.used))}function ve(w){return["GK","DEF","MIL","ATT"].some(T=>(w[T]||[]).some(g=>!g.used))}function Te(w){return ve(w)&&!de(w)}function $e(w){const T=m[w+"Team"],g=m[(w==="p1"?"p2":"p1")+"Team"];return!!(de(T)||!ve(g)&&Te(T))}function be(w){const T=["MIL","ATT"].some(E=>(w.p1Team[E]||[]).some(M=>!M.used)),g=["MIL","ATT"].some(E=>(w.p2Team[E]||[]).some(M=>!M.used)),y=ve(w.p1Team),x=ve(w.p2Team);return!T&&!(!x&&y)&&(!g&&!(!y&&x))}function ke(w){const T=w.p1Score||0,g=w.p2Score||0;return T===g?null:T>g?p.home_id:p.away_id}async function qe(w){try{const T=ke(w),g=T?p.home_id===T?p.away_id:p.home_id:null;await z.from("matches").update({status:"finished",winner_id:T,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),T&&g&&updateEvolutiveCards(T,g).catch(()=>{})}catch(T){console.error("[PvP] finishMatch:",T)}}function je(){var x;const w=m[l+"Score"],T=m[b+"Score"],g=w>T,y=w===T;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${T}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{z.removeChannel(P)}catch{}Ve(e),a("home")})}ne()}const Yn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:hi,resumePvpMatch:Vn},Symbol.toStringTag,{value:"Module"}));async function Wn(e,t,i,n){var d,s;try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&z.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await z.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await z.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await di(e,t,"random",({deckId:r,formation:c,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:l,stadiumDef:b})=>{const h=$=>Jn(e,t,r,c,f,a,$,l||[],i,n);if(!o.length){h([]);return}si(e,o,h)})}async function Jn(e,t,i,n,d,s,r=[],c=[],f,a){var J;const{state:o,navigate:l,toast:b}=t,h=o.profile.id;let $=!1,p=null;et(e);try{await z.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await z.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const u=(Z,se,re,Q)=>{var O;e.innerHTML=`
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
        
        ${!se&&Z?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(O=document.getElementById("lobby-cancel"))==null||O.addEventListener("click",async()=>{$=!0,p&&(z.removeChannel(p),p=null),re&&await z.from("friend_match_invites").update({status:"declined"}).eq("id",re),Ve(e),l("home")})},m=async(Z,se)=>{$=!0,p&&(z.removeChannel(p),p=null),await new Promise(re=>setTimeout(re,600)),e.isConnected&&Xn(e,t,Z,se,r,c)},{data:A}=await z.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${h},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${h})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let j,D;if(A&&A.inviter_id===f)D=!1,j=A.id,await z.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",j);else{D=!0;const{data:Z,error:se}=await z.from("friend_match_invites").insert({inviter_id:h,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(se||!Z){b("Erreur création invitation","error"),Ve(e),l("home");return}j=Z.id}if(u(!0,!D,j),!D){const Z={home_id:f,away_id:h,home_deck_id:A.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},se=await z.from("matches").insert(Z).select().single(),re=se.data;if(!re){b("Erreur création match: "+(((J=se.error)==null?void 0:J.message)||""),"error"),Ve(e),l("home");return}await z.from("friend_match_invites").update({match_id:re.id,status:"matched"}).eq("id",j),m(re.id,!1);return}let q=!1;const B=Z=>{$||q||(Z.status==="matched"&&Z.match_id?(q=!0,clearInterval(C),clearInterval(P),m(Z.match_id,!0)):Z.status==="declined"?(clearInterval(C),clearInterval(P),b(`${a} a décliné l'invitation`,"warning"),Ve(e),l("home")):Z.invitee_ready&&u(!0,!0,j))},C=setInterval(()=>{if($){clearInterval(C);return}z.from("matchmaking_queue").delete().eq("user_id",h).then(()=>{},()=>{})},3e3),P=setInterval(async()=>{if($||q){clearInterval(P);return}const{data:Z}=await z.from("friend_match_invites").select("*").eq("id",j).maybeSingle();Z&&B(Z)},1200);p=z.channel("friend-invite-"+j).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${j}`},Z=>B(Z.new)).subscribe()}async function Xn(e,t,i,n,d=[],s=[]){const{state:r,navigate:c,toast:f}=t,a=n?"p1":"p2",o=n?"p2":"p1",l=(d||[]).map(w=>w.id),b=(d||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await z.from("matches").select("*").eq("id",i).single();if(!h){f("Match introuvable","error"),c("home");return}async function $(){const[{data:w},{data:T},{data:g},{data:y}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]),x=E=>{const M=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?M:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?M:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?M:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?M:0),evolution_bonus:M,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((w==null?void 0:w.starters)||[]).map(E=>x(E)),v=((T==null?void 0:T.starters)||[]).map(E=>x(E)),k=(w==null?void 0:w.formation)||"4-4-2",L=(T==null?void 0:T.formation)||"4-4-2";return{p1Team:(()=>{const E=bt(_,k);return stadiumDef?Ct(E,stadiumDef):E})(),p2Team:bt(v,L),p1Subs:(()=>{const E=((w==null?void 0:w.subs)||[]).map(M=>x(M));return stadiumDef&&Ot(E,stadiumDef),E})(),p2Subs:((T==null?void 0:T.subs)||[]).map(E=>x(E)),p1Formation:k,p2Formation:L,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?l:[],gc_p2:n?[]:l,gcCardsFull_p1:n?b:[],gcCardsFull_p2:n?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let p=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(!p)if(n){p=await $();const{data:w}=await z.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await z.from("matches").update({game_state:p,turn_user_id:h.home_id}).eq("id",i):p=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!p;w++){await new Promise(g=>setTimeout(g,400));const{data:T}=await z.from("matches").select("game_state").eq("id",i).single();T!=null&&T.game_state&&Object.keys(T.game_state).length&&(p=T.game_state)}if(!p){f("Erreur de synchronisation","error"),c("home");return}p.gc_p2=l,p.gcCardsFull_p2=b,await z.from("matches").update({game_state:p}).eq("id",i)}let u=!1,m=!1,A=!1,j=null,D=!1;const q=new Set,B=new Set;function C(w){var E,M;try{z.removeChannel(P)}catch{}const T=p[a+"Score"]||0,g=p[o+"Score"]||0;if(!A){A=!0;const S=w.winner_id||(T>g?r.profile.id:g>T?"opp":null),I=S===r.profile.id?"win":S?"loss":null;I&&ni(()=>Promise.resolve().then(()=>so),void 0).then(N=>N.applyOwnEvolution(r.profile.id,I)).catch(()=>{})}if(!m){const S=p.p1Score||0,I=p.p2Score||0,N=(p.usedGc_p1||[]).length,ee=(p.usedGc_p2||[]).length,R=w.winner_id||(S>I?h.home_id:I>S?h.away_id:null);(R?r.profile.id===R:r.profile.id<(n?h.away_id:h.home_id))&&(m=!0,to({player1Id:h.home_id,player2Id:h.away_id,score1:S,score2:I,gc1:N,gc2:ee}).catch(H=>console.warn("[FriendMatch] updateStats:",H)))}let y,x;w.winner_id?(y=w.winner_id===r.profile.id,x=!1):w.forfeit?(y=T>g,x=!1):(x=T===g,y=T>g),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=x?"🤝":y?"🏆":"😞",k=x?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",L=x?"#fff":y?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${k}</div>
      <div style="font-size:18px">${p[a+"Name"]} ${T} – ${g} ${p[o+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(_),(M=_.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{_.remove(),Ve(e),c("home")})}const P=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const T=w.new;try{if(T.status==="finished"||T.forfeit){if(u)return;u=!0,j&&(clearInterval(j),j=null),T.game_state&&(p=T.game_state),C(T);return}if(T.game_state){const g=p;p=T.game_state;const y=p._lastGC;if(y&&y.seq&&!B.has(y.seq)&&(B.add(y.seq),y.by!==a)){Le(y.type,y.by,()=>ne());return}const x=g[a+"Score"]||0,_=g[o+"Score"]||0,v=p[a+"Score"]||0,k=p[o+"Score"]||0,L=v>x,E=k>_;if((L||E)&&!q.has(p.round)){q.add(p.round);const M=[...p.log||[]].reverse().find(I=>I.isGoal),S=((M==null?void 0:M.homePlayers)||[]).map(I=>({name:I.name,note:I.note,portrait:I.portrait,job:I.job}));xe(S,v,k,L,()=>ne());return}ne()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function J(w){Object.assign(p,w),p.lastActionAt=new Date().toISOString();const{error:T}=await z.from("matches").update({game_state:p}).eq("id",i);T&&f("Erreur de synchronisation","error");try{ne()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function Z(){if(u)return;u=!0,j&&(clearInterval(j),j=null);const w=n?h.away_id:h.home_id,T=n?"p2":"p1",g=n?"p1":"p2",y={...p,[T+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{z.removeChannel(P)}catch{}setTimeout(()=>{Ve(e),c("home")},800)}const se={BOOST_STAT:({value:w=1,count:T=1,roles:g=[]},y,x)=>{const _=y[a+"Team"],v=Object.entries(_).filter(([k])=>!g.length||g.includes(k)).flatMap(([k,L])=>L.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!v.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(y);return}re(v,T,`Choisir ${T} joueur(s) à booster (+${w})`,k=>{k.forEach(L=>{const E=(_[L._line]||[]).find(M=>M.cardId===L.cardId);E&&(E.boost=(E.boost||0)+w,y.log.push({text:`⚡ +${w} sur ${E.name}`,type:"info"}))}),y[a+"Team"]=_,x(y)})},DEBUFF_STAT:({value:w=1,count:T=1,roles:g=[],target:y="ai"},x,_)=>{const v=y==="home"?a:o,k=x[v+"Team"],L=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([M])=>!g.length||g.includes(M)).flatMap(([M,S])=>S.map(I=>({...I,_line:M})));if(!E.length){x.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),_(x);return}re(E,T,`Choisir ${T} joueur(s) ${L}(s) (-${w})`,M=>{M.forEach(S=>{const I=(k[S._line]||[]).find(N=>N.cardId===S.cardId);I&&(I.boost=(I.boost||0)-w,x.log.push({text:`🎯 -${w} sur ${I.name}`,type:"info"}))}),x[v+"Team"]=k,_(x)})},GRAY_PLAYER:({count:w=1,roles:T=[],target:g="ai"},y,x)=>{const _=g==="home"?a:o,v=y[_+"Team"],k=g==="home"?"allié":"adverse",L=Object.entries(v).filter(([E])=>!T.length||T.includes(E)).flatMap(([E,M])=>M.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),x(y);return}re(L,w,`Choisir ${w} joueur(s) ${k}(s) à exclure`,E=>{const M="usedCardIds_"+_,S=new Set(y[M]||[]);E.forEach(I=>{const N=(v[I._line]||[]).find(ee=>ee.cardId===I.cardId);N&&(N.used=!0,S.add(I.cardId),y.log.push({text:`❌ ${N.name} exclu !`,type:"info"}))}),y[M]=[...S],y[_+"Team"]=v,x(y)})},REVIVE_PLAYER:({count:w=1,roles:T=[]},g,y)=>{const x=g[a+"Team"],_=Object.entries(x).filter(([v])=>!T.length||T.includes(v)).flatMap(([v,k])=>k.filter(L=>L.used).map(L=>({...L,_line:v})));if(!_.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(g);return}re(_,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(k=>{const L=(x[k._line]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!1,g.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),g[a+"Team"]=x,y(g)})},REMOVE_GOAL:({},w,T)=>{const g=o+"Score";w[g]>0?(w[g]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),T(w)},ADD_GOAL_DRAW:({},w,T)=>{w[a+"Score"]===w[o+"Score"]?(w[a+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),T(w)},ADD_SUB:({value:w=1},T,g)=>{T.maxSubs=(T.maxSubs||3)+w,T.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),g(T)},CUSTOM:({},w,T)=>T(w)};function re(w,T,g,y){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function v(){var L,E;const k=w.map(M=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",I=ze(M,M._line)+(M.boost||0),ee=_.find(K=>K.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",R=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${ee};background:${S};overflow:hidden;cursor:pointer;${R}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${I}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_.length}/${T}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${_.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${_.length}/${T})
          </button>
        </div>`,(L=x.querySelector("#pp-close"))==null||L.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const S=M.dataset.cid,I=w.find(ee=>ee.cardId===S),N=_.findIndex(ee=>ee.cardId===S);I&&(N>-1?_.splice(N,1):_.length<T&&_.push(I),v())})}),(E=x.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{x.remove(),y(_)})}v(),document.body.appendChild(x)}async function Q(w,T){const y=(p["gcCardsFull_"+a]||[]).find(k=>k.id===w),x=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(k=>{var L;return k.name===T||((L=k.name)==null?void 0:L.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),_=[...p["usedGc_"+a]||[],w],v={type:T,by:a,seq:(p._gcAnimSeq||0)+1};B.add(v.seq),Le(T,a,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const L=se[x.effect_type];if(L){const E={...p};L(x.effect_params||{},E,async M=>{M["usedGc_"+a]=_,M._lastGC=v,M._gcAnimSeq=v.seq,await J(M)});return}}const k={...p};switch(T){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=o+"Score";k[L]>0&&(k[L]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+a]=_,k._lastGC=v,k._gcAnimSeq=v.seq,await J(k)})}function O(w,T){const g="usedCardIds_"+w,y=new Set(p[g]||[]);T.forEach(x=>y.add(x)),p[g]=[...y]}function F(){for(const w of["p1","p2"]){const T=new Set(p["usedCardIds_"+w]||[]),g=p[w+"Team"];if(g)for(const y of["GK","DEF","MIL","ATT"])(g[y]||[]).forEach(x=>{x.used=T.has(x.cardId)})}}function ne(){var Ke,Ze,it,ut,ft,gt;if(p.phase==="reveal")return ue();if(p.phase==="midfield")return me();if(p.phase==="finished")return je();const w=p[a+"Team"],T=p[o+"Team"];F();const g=p[a+"Score"],y=p[o+"Score"],x=p[a+"Name"],_=p[o+"Name"],v=p.phase===a+"-attack",k=p.phase===a+"-defense",L=Array.isArray(p["selected_"+a])?p["selected_"+a]:[],E=L.map(G=>G.cardId),M=window.innerWidth>=700,S=p[a+"Subs"]||[],I=p["usedSubIds_"+a]||[],N=S.filter(G=>!I.includes(G.cardId)),ee=p["gcCardsFull_"+a]||[],R=p["usedGc_"+a]||[],K=ee.filter(G=>!R.includes(G.id)),H=p.boostOwner===a&&!p.boostUsed,X=!["GK","DEF","MIL","ATT"].some(G=>(T[G]||[]).some(le=>!le.used)),ae=[...w.MIL||[],...w.ATT||[]].filter(G=>!G.used),pe=v&&X&&ae.length===0?[...w.GK||[],...w.DEF||[]].filter(G=>!G.used).map(G=>G.cardId):[];function ce(G,le,W){var lt,wt;const ie=G._gcDef,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ie==null?void 0:ie.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[ie==null?void 0:ie.color]||"#b06ce0",Xe=(ie==null?void 0:ie.name)||G.gc_type,Qe=(ie==null?void 0:ie.effect)||((lt=Re[G.gc_type])==null?void 0:lt.desc)||"",ot=ie!=null&&ie.image_url?`/icons/${ie.image_url}`:null,dt=((wt=Re[G.gc_type])==null?void 0:wt.icon)||"⚡",mt=Math.round(W*.22),vt=Math.round(W*.22),rt=W-mt-vt,Tt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${G.id}" data-gc-type="${G.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${W}px;border-radius:10px;border:2px solid ${_e};background:${Ae};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function ge(G,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${G}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const he=(G,le)=>le?ge(130,175):ce(G,130,175),Ie=(G,le)=>le?ge(68,95):ce(G,68,95),Se=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?$e(a)?`<button id="pvp-action" style="${Se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,Ee=v&&!$e(a)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${N.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':N.map(G=>`<div class="pvp-sub-btn" data-sub-id="${G.cardId}" style="cursor:pointer;flex-shrink:0">${We(G,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Me=v?"attack":k?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(w,p[a+"Formation"],Me,E,300,300,pe)}
      </div>
    </div>`;function Ne(G){if(G.type==="duel"&&(G.homeTotal!=null||G.aiTotal!=null)){const le=(G.homeTotal||0)>=(G.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(G.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.homePlayers||[]).map(W=>at(W)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${G.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${G.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(G.aiPlayers||[]).map(W=>at(W)).join("")}
            </div>
          </div>
          ${G.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${G.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${G.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${G.type==="goal"?700:400};padding:3px 2px">${G.text||""}</div>`}const Je=(()=>{var le,W;if(k&&((le=p.pendingAttack)!=null&&le.players)){const ie=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${tt((ie.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",ie.total)}
        </div>`}if(v&&((W=p.pendingAttack)!=null&&W.players)){const ie=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((ie.players||[]).map(Ae=>({...Ae,used:!1})),"#00ff88",ie.total)}
        </div>`}const G=(p.log||[]).slice(-1)[0];return G?'<div style="padding:2px 4px">'+Ne(G)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),He=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
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
            ${K.map(G=>he(G,!1)).join("")}
            ${H?he(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(w,p[a+"Formation"],Me,E,300,300,pe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${K.map(G=>Ie(G,!1)).join("")}
            ${H?Ie(null,!0):""}
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
      </div>`;function Be(){const G=e.querySelector(".match-screen");if(!G)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);G.style.height=le+"px",G.style.minHeight=le+"px",G.style.maxHeight=le+"px",G.style.overflow="hidden";const W=e.querySelector("#mobile-action-bar"),ie=e.querySelector("#mobile-play-area");W&&ie&&(ie.style.paddingBottom=W.offsetHeight+"px")}if(Be(),setTimeout(Be,120),setTimeout(Be,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Be),window.visualViewport.addEventListener("scroll",Be)),window.addEventListener("resize",Be)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(G=>{G.addEventListener("click",()=>{if(!v&&!k)return;const le=G.dataset.cardId,W=G.dataset.role,ie=(w[W]||[]).find(Qe=>Qe.cardId===le);if(!ie||ie.used)return;const Ae=pe.includes(le);if(v&&!["MIL","ATT"].includes(W)&&!Ae)return;Array.isArray(p["selected_"+a])||(p["selected_"+a]=[]);const _e=p["selected_"+a],Xe=_e.findIndex(Qe=>Qe.cardId===le);Xe>-1?_e.splice(Xe,1):_e.length<3&&_e.push({...ie,_role:W}),ne()})}),e.querySelectorAll(".match-used-hit").forEach(G=>{G.addEventListener("click",()=>we(G.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(G=>{G.addEventListener("click",()=>we())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>we()),e.querySelectorAll(".pvp-gc-mini").forEach(G=>{G.addEventListener("click",()=>Fe(G.dataset.gcId,G.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>Ce()),(it=e.querySelector("#pvp-action"))==null||it.addEventListener("click",G=>{v?G.currentTarget.dataset.pass==="1"||!$e(a)?U():te():k&&Y()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>oe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>fe()),j&&(clearInterval(j),j=null),(v||k)&&!u){let G=30,le=!1;const W=()=>document.getElementById("pvp-timer"),ie=()=>{W()&&(W().textContent=G+"s",W().style.color=le?"#ff4444":"#fff")};ie(),j=setInterval(()=>{G--,G<0?le?(clearInterval(j),j=null,v&&!$e(a)?U():Z()):(le=!0,G=15,ie()):ie()},1e3)}}function ue(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(p[o+"Team"],p[o+"Formation"],null,[],300,300)}</div>
    </div>`,a==="p1"&&setTimeout(async()=>{await J({phase:"midfield"})},5e3)}let ye=!1;function me(){if(ye)return;const w=p[a+"Team"].MIL||[],T=p[o+"Team"].MIL||[];function g(K){return K.reduce((H,X)=>H+ze(X,"MIL"),0)}function y(K){let H=0;for(let X=0;X<K.length-1;X++){const ae=nt(K[X],K[X+1]);ae==="#00ff88"?H+=2:ae==="#FFD700"&&(H+=1)}return H}const x=g(w)+y(w),_=g(T)+y(T),v=x>=_;function k(K,H,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${K.map((ae,pe)=>{const ce=pe<K.length-1?nt(ae,K[pe+1]):null,ge=!ce||ce==="#ff3333"||ce==="#cc2222",he=ce==="#00ff88"?"+2":ce==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${pe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ae,note:ze(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${pe<K.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":ce};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${ce}`}">
              ${he?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ce}">${he}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(K)} + ${y(K)} liens = <b style="color:#fff">${g(K)+y(K)}</b>
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
      ${k(w,p[a+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(T,p[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(K,H)=>e.querySelectorAll(K).forEach((X,ae)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},H+ae*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((K,H)=>setTimeout(()=>{K.style.opacity="1"},H*70)),900),setTimeout(()=>{const K=e.querySelector("#pvp-vs");K&&(K.style.opacity="1",K.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function E(K,H,X){const ae=document.getElementById(K);if(!ae)return;const pe=performance.now(),ce=ge=>{const he=Math.min(1,(ge-pe)/X);ae.textContent=Math.round(H*(1-Math.pow(1-he,3))),he<1?requestAnimationFrame(ce):ae.textContent=H};requestAnimationFrame(ce)}setTimeout(()=>{E("pvp-score-me",x,800),E("pvp-score-opp",_,800)},1500);const M=p.p1Team.MIL||[],S=p.p2Team.MIL||[],I=g(M)+y(M),N=g(S)+y(S),ee=I>=N?"p1":"p2";let R=p.boostValue;R==null&&(R=ai(),p.boostValue=R,p.boostOwner=ee,p.boostUsed=!1),ye=!0,setTimeout(()=>{const K=e.querySelector("#duel-row-"+(v?"me":"opp")),H=e.querySelector("#duel-row-"+(v?"opp":"me")),X=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),pe=v?X:ae,ce=v?ae:X;pe&&(pe.style.fontSize="80px",pe.style.color=v?"#FFD700":"#ff6b6b",pe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ce&&(ce.style.opacity="0.25"),setTimeout(()=>{K&&(K.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",K.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Se;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const he=p.boostOwner===a?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+R+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ie=a==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+p[a+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+he+Ie,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(Se=document.getElementById("pvp-start-match"))==null||Se.addEventListener("click",async()=>{const Oe=ee;await J({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:R,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function xe(w,T,g,y,x){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(M,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
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
        ${T} – ${g}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let L=!1;const E=()=>{L||(L=!0,_.remove(),setTimeout(()=>x(),50))};_.addEventListener("click",E),setTimeout(E,3500)}function Le(w,T,g){var R,K;const y=(p.gcDefs||[]).find(H=>{var X;return H.name===w||((X=H.name)==null?void 0:X.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",v=(y==null?void 0:y.name)||w,k=(y==null?void 0:y.effect)||((R=Re[w])==null?void 0:R.desc)||"",L=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((K=Re[w])==null?void 0:K.icon)||"⚡",S=T===a?"Vous":p[T+"Name"]||"Adversaire",I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",I.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(I);let N=!1;const ee=()=>{N||(N=!0,I.remove(),setTimeout(()=>g&&g(),50))};I.addEventListener("click",ee),setTimeout(ee,3e3)}function Fe(w,T){var I,N,ee,R;const y=(p["gcCardsFull_"+a]||[]).find(K=>K.id===w),x=y==null?void 0:y._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",k=(x==null?void 0:x.name)||T,L=(x==null?void 0:x.effect)||((I=Re[T])==null?void 0:I.desc)||"Carte spéciale.",E=x!=null&&x.image_url?`/icons/${x.image_url}`:null,M=((N=Re[T])==null?void 0:N.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(ee=S.querySelector("#pvp-gc-back"))==null||ee.addEventListener("click",()=>S.remove()),(R=S.querySelector("#pvp-gc-use"))==null||R.addEventListener("click",()=>{S.remove(),Q(w,T)})}function Ce(){var y;const w=p[a+"Team"],T=Object.entries(w).flatMap(([x,_])=>(_||[]).filter(v=>!v.used).map(v=>({...v,_line:x})));if(!T.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${T.map(x=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",v=ze(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(y=g.querySelector("#bp-close"))==null||y.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const _=x.dataset.cid,v=T.find(L=>L.cardId===_);if(!v)return;const k=(w[v._line]||[]).find(L=>L.cardId===_);k&&(k.boost=(k.boost||0)+p.boostValue),g.remove(),await J({[a+"Team"]:w,boostUsed:!0})})})}function we(w=null){var N,ee;if(!(p.phase===a+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const g=p[a+"Team"],y=p["usedSubIds_"+a]||[],x=p.maxSubs||3;if(y.length>=x){f(`Maximum ${x} remplacements atteint`,"warning");return}const _=Object.entries(g).flatMap(([R,K])=>(K||[]).filter(H=>H.used).map(H=>({...H,_line:R}))),v=(p[a+"Subs"]||[]).filter(R=>!y.includes(R.cardId));if(!_.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let k=Math.max(0,_.findIndex(R=>R.cardId===w));const L=((N=_[k])==null?void 0:N._line)||((ee=_[k])==null?void 0:ee.job);let E=Math.max(0,v.findIndex(R=>R.job===L)),M=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function I(){var ce,ge,he,Ie,Se,Oe;const R=_[k],K=v[E],H=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(H*1.35),ae=Ee=>`background:rgba(255,255,255,0.12);border:none;color:${Ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ee?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},H,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(E>=v.length-1)}" ${E>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${R?We({...R,used:!1,boost:0},H,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(k>=_.length-1)}" ${k>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ce=S.querySelector("#psub-close"))==null||ce.addEventListener("click",()=>S.remove()),(ge=S.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{k>0&&(k--,I())}),(he=S.querySelector("#pout-down"))==null||he.addEventListener("click",()=>{k<_.length-1&&(k++,I())}),(Ie=S.querySelector("#pin-up"))==null||Ie.addEventListener("click",()=>{E>0&&(E--,I())}),(Se=S.querySelector("#pin-down"))==null||Se.addEventListener("click",()=>{E<v.length-1&&(E++,I())});const pe=(Ee,Ge,Me,Ue)=>{const Ne=S.querySelector("#"+Ee);if(!Ne)return;let Je=0;Ne.addEventListener("touchstart",He=>{Je=He.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",He=>{const Be=He.changedTouches[0].clientY-Je;if(Math.abs(Be)<30)return;const Ke=Ge();Be<0&&Ke<Ue-1?(Me(Ke+1),I()):Be>0&&Ke>0&&(Me(Ke-1),I())},{passive:!0})};pe("pin-panel",()=>E,Ee=>E=Ee,v.length),pe("pout-panel",()=>k,Ee=>k=Ee,_.length),(Oe=S.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Ee=>{if(Ee.preventDefault(),Ee.stopPropagation(),M)return;M=!0;const Ge=_[k],Me=v[E];if(!Ge||!Me)return;const Ue=Ge._line,Ne=(g[Ue]||[]).findIndex(Be=>Be.cardId===Ge.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const Je={...Me,_line:Ue,position:Ge.position,used:!1,boost:0};g[Ue].splice(Ne,1,Je);const He=[...y,Me.cardId];S.remove(),V(Ge,Me,async()=>{await J({[a+"Team"]:g,[o+"Team"]:p[o+"Team"],["usedSubIds_"+a]:He})})})}document.body.appendChild(S),I()}function V(w,T,g){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(L,E,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(L)?`<img src="${Pe(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(T,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const k=()=>{v||(v=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",k),setTimeout(k,2200)}function oe(){var T;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(p[o+"Team"],p[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(T=w.querySelector("#pvp-opp-close"))==null||T.addEventListener("click",()=>w.remove())}function fe(){var y;const w=p.log||[],T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=x=>{var v,k,L;if(x.type==="duel"){const E=x.isGoal,M=x.homeScored&&a==="p1"||!x.homeScored&&E&&a==="p2",S=x.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",I=E?M?"⚽ BUT !":"⚽ BUT adversaire !":(v=x.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${I}</div>
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
      </div>`};T.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(g).join("")}
      </div>`,document.body.appendChild(T),(y=T.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>T.remove())}async function U(){if(p.phase!==a+"-attack")return;const w=a==="p1"?"p2":"p1",T=(p.round||0)+1,g=[...p.log||[]];g.push({type:"info",text:`⏭️ ${p[a+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=be(p),x=$e(w),_=y||!x?"finished":w+"-attack";await J({["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:_,attacker:w,round:T,log:g}),_==="finished"&&await qe(p)}async function te(){const w=p[a+"Team"],T=!["GK","DEF","MIL","ATT"].some(_=>(p[o+"Team"][_]||[]).some(v=>!v.used)),g=(p["selected_"+a]||[]).map(_=>{const v=(w[_._role]||[]).find(I=>I.cardId===_.cardId)||_,k=T&&["GK","DEF"].includes(_._role),L=w[_._role]||[],E=L.findIndex(I=>I.cardId===_.cardId),M=st(L.length),S=E>=0?M[E]:v._col??1;return{...v,_line:_._role,_col:S,...k?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!g.length)return;const y=Ut(g,p.modifiers[a]||{});O(a,g.map(_=>_.cardId)),g.forEach(_=>{const v=(w[_._role]||[]).find(k=>k.cardId===_.cardId);v&&(v.used=!0)}),p["selected_"+a]=[],ne();const x=[...p.log||[]];if(T){const _=(p[a+"Score"]||0)+1,v=g.map(S=>({name:S.name,note:ze(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:y.total,aiTotal:0});const k=(p.round||0)+1,L=a==="p1"?"p2":"p1",E={...p,[a+"Team"]:w,[a+"Score"]:_},M=be(E);q.add(k),xe(v,_,p[o+"Score"]||0,!0,async()=>{await J({[a+"Team"]:w,[a+"Score"]:_,["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:M?"finished":L+"-attack",attacker:L,round:k,log:x}),M&&await qe({...p,[a+"Score"]:_})});return}x.push({type:"pending",text:`⚔️ ${p[a+"Name"]} attaque (${y.total})`}),await J({[a+"Team"]:w,[o+"Team"]:p[o+"Team"],pendingAttack:{...y,players:g,side:a},["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},phase:o+"-defense",log:x})}async function Y(){const w=p[a+"Team"],T=(p["selected_"+a]||[]).map(R=>{const K=(w[R._role]||[]).find(ce=>ce.cardId===R.cardId)||R,H=w[R._role]||[],X=H.findIndex(ce=>ce.cardId===R.cardId),ae=st(H.length),pe=X>=0?ae[X]:K._col??1;return{...K,_line:R._role,_col:pe}}),g=Kt(T,p.modifiers[a]||{});O(a,T.map(R=>R.cardId)),T.forEach(R=>{const K=(w[R._role]||[]).find(H=>H.cardId===R.cardId);K&&(K.used=!0)}),p["selected_"+a]=[],ne();const y=Vt(p.pendingAttack.total,g.total,p.modifiers[a]||{}),x=p.pendingAttack.side,_=y==="attack"||(y==null?void 0:y.goal),v=x==="p1"?"p2":"p1",k=(p.round||0)+1,L=(p.pendingAttack.players||[]).map(R=>({name:R.name,note:ze(R,R._line||"ATT"),portrait:Pe(R),job:R.job})),E=[...p.log||[]];E.push({type:"duel",isGoal:_,homeScored:_&&x===a,text:_?`⚽ BUT de ${p[x+"Name"]} ! (${p.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${g.total})`,homePlayers:L,aiPlayers:T.map(R=>({name:R.name,note:ze(R,R._line||"DEF"),portrait:Pe(R),job:R.job})),homeTotal:p.pendingAttack.total,aiTotal:g.total});const M=_?(p[x+"Score"]||0)+1:p[x+"Score"]||0,S={...p,[a+"Team"]:w,[x+"Score"]:M},I=be(S),N=I?"finished":v+"-attack",ee=async()=>{await J({[a+"Team"]:w,[o+"Team"]:p[o+"Team"],[x+"Score"]:M,["selected_"+a]:[],modifiers:{...p.modifiers,[a]:{}},pendingAttack:null,phase:N,attacker:v,round:k,log:E}),(N==="finished"||I)&&await qe({...p,[x+"Score"]:M})};if(_){const R=x===a,K=R?M:p[a+"Score"]||0,H=R?p[o+"Score"]||0:M;q.add(k),xe(L,K,H,R,ee)}else await ee()}function de(w){return["MIL","ATT"].some(T=>(w[T]||[]).some(g=>!g.used))}function ve(w){return["GK","DEF","MIL","ATT"].some(T=>(w[T]||[]).some(g=>!g.used))}function Te(w){return ve(w)&&!de(w)}function $e(w){const T=p[w+"Team"],g=p[(w==="p1"?"p2":"p1")+"Team"];return!!(de(T)||!ve(g)&&Te(T))}function be(w){const T=["MIL","ATT"].some(E=>(w.p1Team[E]||[]).some(M=>!M.used)),g=["MIL","ATT"].some(E=>(w.p2Team[E]||[]).some(M=>!M.used)),y=ve(w.p1Team),x=ve(w.p2Team);return!T&&!(!x&&y)&&(!g&&!(!y&&x))}function ke(w){const T=w.p1Score||0,g=w.p2Score||0;return T===g?null:T>g?h.home_id:h.away_id}async function qe(w){try{const T=ke(w),g=T?h.home_id===T?h.away_id:h.home_id:null;await z.from("matches").update({status:"finished",winner_id:T,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),T&&g&&Ai(T,g).catch(()=>{})}catch(T){console.error("[PvP] finishMatch:",T)}}function je(){var x;const w=p[a+"Score"],T=p[o+"Score"],g=w>T,y=w===T;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${T}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{z.removeChannel(P)}catch{}Ve(e),c("home")})}ne()}const It="#1A6B3C",yt="#D4A017";async function Zn(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await ht(e,t,i);return}await Et(e,t)}async function Et(e,t,i="waiting"){var m;const{state:n}=t,d=n.profile.id,{data:s}=await z.from("mini_league_members").select("league_id").eq("user_id",d),r=(s||[]).map(A=>A.league_id),{data:c,error:f}=await z.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),a=f?(await z.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],l=(r.length?await z.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],b=l.filter(A=>A.status==="waiting"&&!A.is_archived),h=l.filter(A=>A.status==="active"&&!A.is_archived),$=l.filter(A=>A.is_archived||A.status==="finished"),p=a.filter(A=>!r.includes(A.id)),u=[{key:"waiting",label:"🟡 En attente",count:b.length+p.length},{key:"active",label:"🟢 En cours",count:h.length},{key:"archived",label:"📁 Archivées",count:$.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${u.map(A=>`<button class="ml-tab" data-tab="${A.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===A.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===A.key?"900":"600"};color:${i===A.key?It:"#888"};cursor:pointer">${A.label}${A.count?` (${A.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Qn(b,p,d):i==="active"?er(h,d):tr($,d)}
    </div>
  </div>`,(m=document.getElementById("ml-create-btn"))==null||m.addEventListener("click",()=>ir(e,t)),e.querySelectorAll(".ml-tab").forEach(A=>A.addEventListener("click",()=>Et(e,t,A.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(A=>A.addEventListener("click",()=>ht(e,t,A.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(A=>A.addEventListener("click",j=>{j.stopPropagation(),Eo(e,t,A.dataset.join,A.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(A=>A.addEventListener("click",j=>{j.stopPropagation(),vi(e,t,A.dataset.delete,A.dataset.name,i)}))}function oi(e,t,i=!1){var r,c;const n=e.creator_id===t,d=e.pot||0,s=((c=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Qn(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>oi(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>oi(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function er(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function tr(e,t){return e.length?e.map(i=>oi(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function ir(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var $,p,u,m;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),s=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,c=(($=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:$.value)||"public",f=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",a=((m=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:m.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(c==="private"&&!a){n("Mot de passe requis","error");return}const{data:o,error:l}=await z.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:c,password:a,mode:f,max_players:s,entry_fee:r}).select().single();if(l){n("Erreur : "+l.message,"error");return}const{data:b}=await z.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<r){await z.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await z.from("users").update({credits:b.credits-r}).eq("id",t.state.profile.id),await z.from("mini_leagues").update({pot:r}).eq("id",o.id),await z.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-r);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),ht(e,t,o.id)})}function or(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function Eo(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id,{data:c}=await z.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){d("Mini League introuvable","error");return}if(c.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:f}=await z.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=c.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const p=await or();if(p===null)return;if(c.password!==p){d("Mot de passe incorrect","error");return}}const a=c.entry_fee||100,{data:o}=await z.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<a){d(`Crédits insuffisants — il te faut ${a.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:l}=await z.from("mini_league_members").insert({league_id:i,user_id:r});if(l){d("Erreur inscription : "+l.message,"error");return}const{error:b}=await z.from("users").update({credits:o.credits-a}).eq("id",r),{error:h}=await z.from("mini_leagues").update({pot:(c.pot||0)+a}).eq("id",i);(b||h)&&console.error("Erreur post-inscription:",b,h),s.profile&&(s.profile.credits=o.credits-a);const $=document.getElementById("nav-credits");$&&($.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${a.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+a).toLocaleString("fr")} cr.`,"success"),ht(e,t,i)}async function nr(e,t,i,n){const{toast:d,state:s}=t,r=s.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:c}=await z.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:f}=await z.from("users").select("credits").eq("id",r).single();await z.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-n)}).eq("id",i),await z.from("users").update({credits:((f==null?void 0:f.credits)||0)+n}).eq("id",r),await z.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),s.profile&&(s.profile.credits=((f==null?void 0:f.credits)||0)+n);const a=document.getElementById("nav-credits");a&&(a.textContent=`💰 ${(s.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),Et(e,t,"waiting")}async function vi(e,t,i,n,d){const{toast:s}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await z.from("mini_league_matches").delete().eq("league_id",i),await z.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await z.from("mini_leagues").delete().eq("id",i);if(r){s("Erreur suppression ("+r.message+")","error");return}s("Mini League supprimée avec succès","success"),Et(e,t,d)}async function rr(e,t,i){await z.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),Et(e,t,"archived")}async function ht(e,t,i){var D,q,B,C,P,J,Z,se,re;const{state:n,toast:d}=t,s=n.profile.id,[{data:r},{data:c},{data:f}]=await Promise.all([z.from("mini_leagues").select("*").eq("id",i).single(),z.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),z.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await Et(e,t);return}const a=(c||[]).some(Q=>Q.user_id===s),o=r.creator_id===s,l=(c||[]).map(Q=>Q.user).filter(Boolean),b=Ao(l,f||[]),h=(f||[]).filter(Q=>Q.matchday===r.current_day),$=r.pot||0,p=r.entry_fee||100,u=h.length>0&&h.every(Q=>Q.status==="finished"||Q.status==="bye"),m=r.current_day>=r.total_days,A=(c||[]).find(Q=>Q.user_id===s);e.innerHTML=`
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
        ${$>0?`<div style="font-size:12px;font-weight:900;color:${yt};margin-top:4px">🏆 ${$.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${l.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*l.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*l.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*l.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*l.length*.1).toLocaleString("fr")})</div>
        ${l.map(Q=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${Q.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${Q.club_color1||"#fff"}">${(Q.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${Q.club_name||Q.pseudo}</div><div style="font-size:11px;color:#999">@${Q.pseudo}</div></div>
            ${Q.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${h.map(Q=>Ki(Q,l,s,a)).join("")}
        ${o&&u&&!m?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&u&&m?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${$>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((Q,O)=>{const F=$>0&&r.status==="finished"?O===0?Math.floor($*.7):O===1?Math.floor($*.2):O===2?Math.floor($*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${Q.userId===s?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${O===0?yt:O<3?It:"#555"}">${["🥇","🥈","🥉"][O]||O+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${Q.clubName}</div><div style="font-size:10px;color:#999">@${Q.pseudo}</div></td>
              <td style="text-align:center">${Q.played}</td><td style="text-align:center">${Q.won}-${Q.drawn}-${Q.lost}</td>
              <td style="text-align:center;color:${Q.goalDiff>=0?It:"#cc2222"}">${Q.goalDiff>=0?"+":""}${Q.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${Q.points}</td>
              ${$>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${F?F.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(Q,O)=>O+1).reverse().map(Q=>{const O=(f||[]).filter(F=>F.matchday===Q);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${Q}</div>${O.map(F=>Ki(F,l,s,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const j=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((D=document.getElementById("ml-back"))==null||D.addEventListener("click",()=>Et(e,t,j)),(q=document.getElementById("ml-start-btn"))==null||q.addEventListener("click",()=>ar(e,t,r,l)),(B=document.getElementById("ml-next-day"))==null||B.addEventListener("click",()=>sr(e,t,i)),(C=document.getElementById("ml-finish-btn"))==null||C.addEventListener("click",()=>To(e,t,i,$,b,l)),(P=document.getElementById("ml-join-now"))==null||P.addEventListener("click",()=>Eo(e,t,i,r.type)),(J=document.getElementById("ml-leave-btn"))==null||J.addEventListener("click",()=>nr(e,t,i,p)),(Z=document.getElementById("ml-delete-btn"))==null||Z.addEventListener("click",()=>vi(e,t,i,r.name,"waiting")),(se=document.getElementById("ml-delete-now"))==null||se.addEventListener("click",()=>vi(e,t,i,r.name,j)),(re=document.getElementById("ml-archive-btn"))==null||re.addEventListener("click",()=>rr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(Q=>{Q.addEventListener("click",()=>{const O=h.find(F=>F.id===Q.dataset.playMatch);O&&t.navigate("match-mini-league",{mlMatchId:O.id,leagueId:i})})}),r.status==="finished"&&A){const Q=b.findIndex(O=>O.userId===s);Q>=0&&Q<3&&A.prize_amount>0&&setTimeout(()=>dr(e,t,r,A,Q),400)}}function Ki(e,t,i,n,d=!1){const s=l=>t.find(b=>b.id===l);if(e.is_bye){const l=s(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"} exempté(e)</div>`}const r=s(e.home_id),c=s(e.away_id),f=e.home_id===i||e.away_id===i,a=f&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${a?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function ar(e,t,i,n){const{toast:d,state:s}=t,r=lr(n.map(a=>a.id),i.mode),c=[];r.forEach((a,o)=>a.forEach(l=>c.push({league_id:i.id,matchday:o+1,home_id:l.home||l.bye,away_id:l.away||null,is_bye:!!l.bye,status:l.bye?"bye":"pending"})));const{error:f}=await z.from("mini_league_matches").insert(c);if(f){d("Erreur calendrier : "+f.message,"error");return}await z.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ht(e,t,i.id)}async function sr(e,t,i){const{data:n}=await z.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await To(e,t,i,n.pot||0,null,null);return}await z.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),ht(e,t,i)}async function To(e,t,i,n,d,s){const{toast:r,state:c}=t;let f=d,a=s;if(!f){const{data:l}=await z.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await z.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);a=(b||[]).map(h=>h.user).filter(Boolean),f=Ao(a,l||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(f.slice(0,3).map((l,b)=>o[b]?z.from("mini_league_members").update({prize_amount:o[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",l.userId):Promise.resolve())),await z.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),ht(e,t,i)}async function dr(e,t,i,n,d){var b,h;const{state:s,toast:r}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][d],a=n.prize_amount||c[d]||0,o=n.prize_claimed,l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),(b=l.querySelector("#prize-close"))==null||b.addEventListener("click",()=>l.remove()),l.addEventListener("click",$=>{$.target===l&&l.remove()}),(h=l.querySelector("#claim-prize-btn"))==null||h.addEventListener("click",async()=>{const{data:$}=await z.from("users").select("credits").eq("id",s.profile.id).single();await z.from("users").update({credits:(($==null?void 0:$.credits)||0)+a}).eq("id",s.profile.id),await z.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",s.profile.id),s.profile&&(s.profile.credits=(($==null?void 0:$.credits)||0)+a);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${s.profile.credits.toLocaleString("fr")}`),r(`💰 +${a.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),l.remove(),ht(e,t,i.id)})}function lr(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let s=n.slice(1);const r=[];for(let c=0;c<d-1;c++){const f=[],a=[n[0],...s];for(let o=0;o<d/2;o++){const l=a[o],b=a[d-1-o];l===null?f.push({bye:b}):b===null?f.push({bye:l}):f.push({home:l,away:b})}r.push(f),s=[s[s.length-1],...s.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(c=>c.map(f=>f.bye?f:{home:f.away,away:f.home}))]:r}function Ao(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],s=i[n.away_id];!d||!s||(d.played++,s.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,s.goalsFor+=n.away_score,s.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,s.lost++):n.home_score<n.away_score?(s.won++,s.points+=3,d.lost++):(d.drawn++,d.points++,s.drawn++,s.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,s.goalDiff=s.goalsFor-s.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}async function Vi(e,t,i,n){var d,s;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(s=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:s.id;try{(z.getChannels?z.getChannels():[]).forEach(f=>{const a=f.topic||"";(a.includes("matchmaking")||a.includes("pvp-match"))&&z.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await z.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await z.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await di(e,t,"random",({deckId:r,formation:c,starters:f,subsRaw:a,gcCardsEnriched:o,gcDefs:l,stadiumDef:b})=>{const h=$=>cr(e,t,r,c,f,a,$,l||[],i);if(!o.length){h([]);return}si(e,o,h)})}async function cr(e,t,i,n,d,s,r=[],c=[],f,a){const{state:o,navigate:l,toast:b}=t,h=o.profile.id;let $=!1,p=null;et(e);try{await z.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await z.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const{data:u}=await z.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!u){b("Match introuvable","error"),Ve(e),l("mini-league");return}if(u.home_id!==h&&u.away_id!==h){b("Tu ne fais pas partie de ce match","error"),Ve(e),l("mini-league");return}const m=u.home_id===h,A=m?u.away:u.home,j=m?u.away_id:u.home_id,D=(B,C)=>{var P;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(P=document.getElementById("lobby-cancel"))==null||P.addEventListener("click",()=>{$=!0,clearInterval(p),Ve(e),l("mini-league")})},q=async(B,C)=>{$=!0,clearInterval(p),await new Promise(P=>setTimeout(P,600)),e.isConnected&&pr(e,t,B,C,r,c)};if(D(),m){let B=u.match_id;if(!B){const{data:P,error:J}=await z.from("matches").insert({home_id:h,away_id:j,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(J||!P){b("Erreur création match","error"),Ve(e),l("mini-league");return}B=P.id,await z.from("mini_league_matches").update({match_id:B,status:"playing"}).eq("id",f)}const C=B;p=setInterval(async()=>{if($){clearInterval(p);return}const{data:P}=await z.from("matches").select("away_deck_id").eq("id",C).single();P!=null&&P.away_deck_id&&(clearInterval(p),q(C,!0))},1500)}else{let B=u.match_id;p=setInterval(async()=>{if($){clearInterval(p);return}const{data:C}=await z.from("mini_league_matches").select("match_id").eq("id",f).single();C!=null&&C.match_id&&(clearInterval(p),B=C.match_id,await z.from("matches").update({away_deck_id:i}).eq("id",B),q(B,!1))},1500)}}async function pr(e,t,i,n,d=[],s=[]){var T;const{state:r,navigate:c,toast:f}=t,a=((T=r.params)==null?void 0:T.leagueId)||null,o=n?"p1":"p2",l=n?"p2":"p1",b=(d||[]).map(g=>g.id),h=(d||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:$}=await z.from("matches").select("*").eq("id",i).single();if(!$){f("Match introuvable","error"),c("mini-league");return}async function p(){const[{data:g},{data:y},{data:x},{data:_}]=await Promise.all([z.rpc("get_deck_for_match",{p_deck_id:$.home_deck_id}),z.rpc("get_deck_for_match",{p_deck_id:$.away_deck_id}),z.from("users").select("id,pseudo,club_name").eq("id",$.home_id).single(),z.from("users").select("id,pseudo,club_name").eq("id",$.away_id).single()]),v=S=>{const I=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?I:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?I:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?I:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?I:0),evolution_bonus:I,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((g==null?void 0:g.starters)||[]).map(S=>v(S)),L=((y==null?void 0:y.starters)||[]).map(S=>v(S)),E=(g==null?void 0:g.formation)||"4-4-2",M=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:(()=>{const S=bt(k,E);return stadiumDef?Ct(S,stadiumDef):S})(),p2Team:bt(L,M),p1Subs:(()=>{const S=((g==null?void 0:g.subs)||[]).map(I=>v(I));return stadiumDef&&Ot(S,stadiumDef),S})(),p2Subs:((y==null?void 0:y.subs)||[]).map(S=>v(S)),p1Formation:E,p2Formation:M,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:s||[],lastActionAt:new Date().toISOString()}}let u=$.game_state&&Object.keys($.game_state).length?$.game_state:null;if(!u)if(n){u=await p();const{data:g}=await z.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await z.from("matches").update({game_state:u,turn_user_id:$.home_id}).eq("id",i):u=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!u;g++){await new Promise(x=>setTimeout(x,400));const{data:y}=await z.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(u=y.game_state)}if(!u){f("Erreur de synchronisation","error"),c("mini-league");return}u.gc_p2=b,u.gcCardsFull_p2=h,await z.from("matches").update({game_state:u}).eq("id",i)}let m=!1,A=!1,j=!1,D=null,q=!1;const B=new Set,C=new Set;function P(g){var S,I;try{z.removeChannel(J)}catch{}const y=u[o+"Score"]||0,x=u[l+"Score"]||0;if(!j){j=!0;const N=g.winner_id||(y>x?r.profile.id:x>y?"opp":null),ee=N===r.profile.id?"win":N?"loss":null;ee&&ni(()=>Promise.resolve().then(()=>so),void 0).then(R=>R.applyOwnEvolution(r.profile.id,ee)).catch(()=>{})}if(!A){const N=u.p1Score||0,ee=u.p2Score||0,R=(u.usedGc_p1||[]).length,K=(u.usedGc_p2||[]).length,H=g.winner_id||(N>ee?$.home_id:ee>N?$.away_id:null);(H?r.profile.id===H:r.profile.id<(n?$.away_id:$.home_id))&&(A=!0,to({player1Id:$.home_id,player2Id:$.away_id,score1:N,score2:ee,gc1:R,gc2:K}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let _,v;g.winner_id?(_=g.winner_id===r.profile.id,v=!1):g.forfeit?(_=y>x,v=!1):(v=y===x,_=y>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const L=v?"🤝":_?"🏆":"😞",E=v?"MATCH NUL":_?"VICTOIRE !":"DÉFAITE",M=v?"#fff":_?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${L}</div>
      <div style="font-size:26px;font-weight:900;color:${M}">${E}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${y} – ${x} ${u[l+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${_?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(I=k.querySelector("#pvp-end-home"))==null||I.addEventListener("click",()=>{k.remove(),Ve(e),a?c("mini-league",{openLeagueId:a}):c("mini-league")})}const J=z.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const y=g.new;try{if(y.status==="finished"||y.forfeit){if(m||(m=!0,D&&(clearInterval(D),D=null),y.game_state&&(u=y.game_state),u.phase==="finished"&&!y.forfeit&&document.getElementById("pvp-home")))return;P(y);return}if(y.game_state){const x=u;u=y.game_state;const _=u._lastGC;if(_&&_.seq&&!C.has(_.seq)&&(C.add(_.seq),_.by!==o)){Fe(_.type,_.by,()=>ue());return}const v=x[o+"Score"]||0,k=x[l+"Score"]||0,L=u[o+"Score"]||0,E=u[l+"Score"]||0,M=L>v,S=E>k;if((M||S)&&!B.has(u.round)){B.add(u.round);const I=[...u.log||[]].reverse().find(ee=>ee.isGoal),N=((I==null?void 0:I.homePlayers)||[]).map(ee=>({name:ee.name,note:ee.note,portrait:ee.portrait,job:ee.job}));Le(N,L,E,M,()=>ue());return}ue()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function Z(g){Object.assign(u,g),u.lastActionAt=new Date().toISOString();const{error:y}=await z.from("matches").update({game_state:u}).eq("id",i);y&&f("Erreur de synchronisation","error");try{ue()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function se(){if(m)return;m=!0,D&&(clearInterval(D),D=null);const g=n?$.away_id:$.home_id,y=n?"p2":"p1",x=n?"p1":"p2",_={...u,[y+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await z.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:_.p1Score||0,away_score:_.p2Score||0,game_state:_}).eq("id",i)}catch{}try{z.removeChannel(J)}catch{}setTimeout(()=>{Ve(e),c("mini-league")},800)}const re={BOOST_STAT:({value:g=1,count:y=1,roles:x=[]},_,v)=>{const k=_[o+"Team"],L=Object.entries(k).filter(([E])=>!x.length||x.includes(E)).flatMap(([E,M])=>M.filter(S=>!S.used).map(S=>({...S,_line:E})));if(!L.length){_.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(_);return}Q(L,y,`Choisir ${y} joueur(s) à booster (+${g})`,E=>{E.forEach(M=>{const S=(k[M._line]||[]).find(I=>I.cardId===M.cardId);S&&(S.boost=(S.boost||0)+g,_.log.push({text:`⚡ +${g} sur ${S.name}`,type:"info"}))}),_[o+"Team"]=k,v(_)})},DEBUFF_STAT:({value:g=1,count:y=1,roles:x=[],target:_="ai"},v,k)=>{const L=_==="home"?o:l,E=v[L+"Team"],M=_==="home"?"allié":"adverse",S=Object.entries(E).filter(([I])=>!x.length||x.includes(I)).flatMap(([I,N])=>N.map(ee=>({...ee,_line:I})));if(!S.length){v.log.push({text:`🎯 Aucun joueur ${M}`,type:"info"}),k(v);return}Q(S,y,`Choisir ${y} joueur(s) ${M}(s) (-${g})`,I=>{I.forEach(N=>{const ee=(E[N._line]||[]).find(R=>R.cardId===N.cardId);ee&&(ee.boost=(ee.boost||0)-g,v.log.push({text:`🎯 -${g} sur ${ee.name}`,type:"info"}))}),v[L+"Team"]=E,k(v)})},GRAY_PLAYER:({count:g=1,roles:y=[],target:x="ai"},_,v)=>{const k=x==="home"?o:l,L=_[k+"Team"],E=x==="home"?"allié":"adverse",M=Object.entries(L).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,I])=>I.filter(N=>!N.used).map(N=>({...N,_line:S})));if(!M.length){_.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),v(_);return}Q(M,g,`Choisir ${g} joueur(s) ${E}(s) à exclure`,S=>{const I="usedCardIds_"+k,N=new Set(_[I]||[]);S.forEach(ee=>{const R=(L[ee._line]||[]).find(K=>K.cardId===ee.cardId);R&&(R.used=!0,N.add(ee.cardId),_.log.push({text:`❌ ${R.name} exclu !`,type:"info"}))}),_[I]=[...N],_[k+"Team"]=L,v(_)})},REVIVE_PLAYER:({count:g=1,roles:y=[]},x,_)=>{const v=x[o+"Team"],k=Object.entries(v).filter(([L])=>!y.length||y.includes(L)).flatMap(([L,E])=>E.filter(M=>M.used).map(M=>({...M,_line:L})));if(!k.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),_(x);return}Q(k,g,`Choisir ${g} joueur(s) à ressusciter`,L=>{L.forEach(E=>{const M=(v[E._line]||[]).find(S=>S.cardId===E.cardId);M&&(M.used=!1,x.log.push({text:`💫 ${M.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=v,_(x)})},REMOVE_GOAL:({},g,y)=>{const x=l+"Score";g[x]>0?(g[x]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(g)},ADD_GOAL_DRAW:({},g,y)=>{g[o+"Score"]===g[l+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(g)},ADD_SUB:({value:g=1},y,x)=>{y.maxSubs=(y.maxSubs||3)+g,y.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),x(y)},CUSTOM:({},g,y)=>y(g)};function Q(g,y,x,_){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function L(){var M,S;const E=g.map(I=>{const N={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",ee=ze(I,I._line)+(I.boost||0),K=k.find(X=>X.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${K};background:${N};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${ee}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
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
        </div>`,(M=v.querySelector("#pp-close"))==null||M.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const N=I.dataset.cid,ee=g.find(K=>K.cardId===N),R=k.findIndex(K=>K.cardId===N);ee&&(R>-1?k.splice(R,1):k.length<y&&k.push(ee),L())})}),(S=v.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{v.remove(),_(k)})}L(),document.body.appendChild(v)}async function O(g,y){const _=(u["gcCardsFull_"+o]||[]).find(E=>E.id===g),v=(_==null?void 0:_._gcDef)||(u.gcDefs||[]).find(E=>{var M;return E.name===y||((M=E.name)==null?void 0:M.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),k=[...u["usedGc_"+o]||[],g],L={type:y,by:o,seq:(u._gcAnimSeq||0)+1};C.add(L.seq),Fe(y,o,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const M=re[v.effect_type];if(M){const S={...u};M(v.effect_params||{},S,async I=>{I["usedGc_"+o]=k,I._lastGC=L,I._gcAnimSeq=L.seq,await Z(I)});return}}const E={...u};switch(y){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const M=l+"Score";E[M]>0&&(E[M]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=k,E._lastGC=L,E._gcAnimSeq=L.seq,await Z(E)})}function F(g,y){const x="usedCardIds_"+g,_=new Set(u[x]||[]);y.forEach(v=>_.add(v)),u[x]=[..._]}function ne(){for(const g of["p1","p2"]){const y=new Set(u["usedCardIds_"+g]||[]),x=u[g+"Team"];if(x)for(const _ of["GK","DEF","MIL","ATT"])(x[_]||[]).forEach(v=>{v.used=y.has(v.cardId)})}}function ue(){var it,ut,ft,gt,G,le;if(u.phase==="reveal")return ye();if(u.phase==="midfield")return xe();if(u.phase==="finished")return w();const g=u[o+"Team"],y=u[l+"Team"];ne();const x=u[o+"Score"],_=u[l+"Score"],v=u[o+"Name"],k=u[l+"Name"],L=u.phase===o+"-attack",E=u.phase===o+"-defense",M=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],S=M.map(W=>W.cardId),I=window.innerWidth>=700,N=u[o+"Subs"]||[],ee=u["usedSubIds_"+o]||[],R=N.filter(W=>!ee.includes(W.cardId)),K=u["gcCardsFull_"+o]||[],H=u["usedGc_"+o]||[],X=K.filter(W=>!H.includes(W.id)),ae=u.boostOwner===o&&!u.boostUsed,pe=!["GK","DEF","MIL","ATT"].some(W=>(y[W]||[]).some(ie=>!ie.used)),ce=[...g.MIL||[],...g.ATT||[]].filter(W=>!W.used),ge=L&&pe&&ce.length===0?[...g.GK||[],...g.DEF||[]].filter(W=>!W.used).map(W=>W.cardId):[];function he(W,ie,Ae){var Ii,Mi;const _e=W._gcDef,Xe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_e==null?void 0:_e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[_e==null?void 0:_e.color]||"#b06ce0",ot=(_e==null?void 0:_e.name)||W.gc_type,dt=(_e==null?void 0:_e.effect)||((Ii=Re[W.gc_type])==null?void 0:Ii.desc)||"",mt=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,vt=((Mi=Re[W.gc_type])==null?void 0:Mi.icon)||"⚡",rt=Math.round(Ae*.22),Tt=Math.round(Ae*.22),lt=Ae-rt-Tt,wt=ot.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
        style="box-sizing:border-box;width:${ie}px;height:${Ae}px;border-radius:10px;border:2px solid ${Qe};background:${Xe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${wt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ie-6}px">${ot}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${mt?`<img src="${mt}" style="max-width:${ie-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${vt}</span>`}
        </div>
        <div style="height:${Tt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${dt.slice(0,38)}</span>
        </div>
      </div>`}function Ie(W,ie){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${W}px;height:${ie}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ie*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ie*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ie*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Se=(W,ie)=>ie?Ie(130,175):he(W,130,175),Oe=(W,ie)=>ie?Ie(68,95):he(W,68,95),Ee=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=L?be(o)?`<button id="pvp-action" style="${Ee};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${M.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ee};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Ee};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${M.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Me=L&&!be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':L||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${M.length}/3 sélectionné(s)</div>`:"",Ue=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${R.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':R.map(W=>`<div class="pvp-sub-btn" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${We(W,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Ne=L?"attack":E?"defense":"idle",Je=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(g,u[o+"Formation"],Ne,S,300,300,ge)}
      </div>
    </div>`;function He(W){if(W.type==="duel"&&(W.homeTotal!=null||W.aiTotal!=null)){const ie=(W.homeTotal||0)>=(W.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(W.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.homePlayers||[]).map(Ae=>at(Ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ie?20:14}px;font-weight:900;color:${ie?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${W.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ie?14:20}px;font-weight:900;color:${ie?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${W.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.aiPlayers||[]).map(Ae=>at(Ae)).join("")}
            </div>
          </div>
          ${W.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${W.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${W.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${W.type==="goal"?700:400};padding:3px 2px">${W.text||""}</div>`}const Be=(()=>{var ie,Ae;if(E&&((ie=u.pendingAttack)!=null&&ie.players)){const _e=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${tt((_e.players||[]).map(Xe=>({...Xe,used:!1})),"#ff6b6b",_e.total)}
        </div>`}if(L&&((Ae=u.pendingAttack)!=null&&Ae.players)){const _e=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((_e.players||[]).map(Xe=>({...Xe,used:!1})),"#00ff88",_e.total)}
        </div>`}const W=(u.log||[]).slice(-1)[0];return W?'<div style="padding:2px 4px">'+He(W)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${_}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Be}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ue}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Je}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ge}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${X.map(W=>Se(W,!1)).join("")}
            ${ae?Se(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(g,u[o+"Formation"],Ne,S,300,300,ge)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${X.map(W=>Oe(W,!1)).join("")}
            ${ae?Oe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${L&&R.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${L&&R.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${L&&R.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${L&&R.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${R.length}</div>
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
          <div>${Ge}${Me}</div>
        </div>
      </div>`;function Ze(){const W=e.querySelector(".match-screen");if(!W)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);W.style.height=ie+"px",W.style.minHeight=ie+"px",W.style.maxHeight=ie+"px",W.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");Ae&&_e&&(_e.style.paddingBottom=Ae.offsetHeight+"px")}if(Ze(),setTimeout(Ze,120),setTimeout(Ze,400),q||(q=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ze),window.visualViewport.addEventListener("scroll",Ze)),window.addEventListener("resize",Ze)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(W=>{W.addEventListener("click",()=>{if(!L&&!E)return;const ie=W.dataset.cardId,Ae=W.dataset.role,_e=(g[Ae]||[]).find(dt=>dt.cardId===ie);if(!_e||_e.used)return;const Xe=ge.includes(ie);if(L&&!["MIL","ATT"].includes(Ae)&&!Xe)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const Qe=u["selected_"+o],ot=Qe.findIndex(dt=>dt.cardId===ie);ot>-1?Qe.splice(ot,1):Qe.length<3&&Qe.push({..._e,_role:Ae}),ue()})}),e.querySelectorAll(".match-used-hit").forEach(W=>{W.addEventListener("click",()=>V(W.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(W=>{W.addEventListener("click",()=>V())}),(it=e.querySelector("#pvp-sub-open"))==null||it.addEventListener("click",()=>V()),e.querySelectorAll(".pvp-gc-mini").forEach(W=>{W.addEventListener("click",()=>Ce(W.dataset.gcId,W.dataset.gcType))}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>we()),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",W=>{L?W.currentTarget.dataset.pass==="1"||!be(o)?te():Y():E&&de()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&se()}),(G=e.querySelector("#pvp-view-opp"))==null||G.addEventListener("click",()=>fe()),(le=e.querySelector("#pvp-toggle-history"))==null||le.addEventListener("click",()=>U()),D&&(clearInterval(D),D=null),(L||E)&&!m){let W=30,ie=!1;const Ae=()=>document.getElementById("pvp-timer"),_e=()=>{Ae()&&(Ae().textContent=W+"s",Ae().style.color=ie?"#ff4444":"#fff")};_e(),D=setInterval(()=>{W--,W<0?ie?(clearInterval(D),D=null,L&&!be(o)?te():se()):(ie=!0,W=15,_e()):_e()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[l+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(u[l+"Team"],u[l+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await Z({phase:"midfield"})},5e3)}let me=!1;function xe(){if(me)return;const g=u[o+"Team"].MIL||[],y=u[l+"Team"].MIL||[];function x(X){return X.reduce((ae,pe)=>ae+ze(pe,"MIL"),0)}function _(X){let ae=0;for(let pe=0;pe<X.length-1;pe++){const ce=nt(X[pe],X[pe+1]);ce==="#00ff88"?ae+=2:ce==="#FFD700"&&(ae+=1)}return ae}const v=x(g)+_(g),k=x(y)+_(y),L=v>=k;function E(X,ae,pe){return`<div id="duel-row-${pe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ae}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${X.map((ce,ge)=>{const he=ge<X.length-1?nt(ce,X[ge+1]):null,Ie=!he||he==="#ff3333"||he==="#cc2222",Se=he==="#00ff88"?"+2":he==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${pe}" data-idx="${ge}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ce,note:ze(ce,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ge<X.length-1?`<div class="duel-link duel-link-${pe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ie?"rgba(255,255,255,0.12)":he};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ie?"none":`0 0 8px ${he}`}">
              ${Se?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${he}">${Se}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${pe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(X)} + ${_(X)} liens = <b style="color:#fff">${x(X)+_(X)}</b>
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
      ${E(g,u[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(y,u[l+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const M=(X,ae)=>e.querySelectorAll(X).forEach((pe,ce)=>{setTimeout(()=>{pe.style.opacity="1",pe.style.transform="translateY(0) scale(1)"},ae+ce*90)});M(".duel-card-me",150),M(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((X,ae)=>setTimeout(()=>{X.style.opacity="1"},ae*70)),900),setTimeout(()=>{const X=e.querySelector("#pvp-vs");X&&(X.style.opacity="1",X.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function S(X,ae,pe){const ce=document.getElementById(X);if(!ce)return;const ge=performance.now(),he=Ie=>{const Se=Math.min(1,(Ie-ge)/pe);ce.textContent=Math.round(ae*(1-Math.pow(1-Se,3))),Se<1?requestAnimationFrame(he):ce.textContent=ae};requestAnimationFrame(he)}setTimeout(()=>{S("pvp-score-me",v,800),S("pvp-score-opp",k,800)},1500);const I=u.p1Team.MIL||[],N=u.p2Team.MIL||[],ee=x(I)+_(I),R=x(N)+_(N),K=ee>=R?"p1":"p2";let H=u.boostValue;H==null&&(H=ai(),u.boostValue=H,u.boostOwner=K,u.boostUsed=!1),me=!0,setTimeout(()=>{const X=e.querySelector("#duel-row-"+(L?"me":"opp")),ae=e.querySelector("#duel-row-"+(L?"opp":"me")),pe=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),ge=L?pe:ce,he=L?ce:pe;ge&&(ge.style.fontSize="80px",ge.style.color=L?"#FFD700":"#ff6b6b",ge.style.animation="duelPulse .5s ease"+(L?",duelGlow 1.5s ease infinite .5s":"")),he&&(he.style.opacity="0.25"),setTimeout(()=>{X&&(X.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",X.style.zIndex="5"),setTimeout(()=>{const Ie=document.getElementById("duel-shock");Ie&&(Ie.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ee;const Ie=document.getElementById("pvp-duel-finale");if(!Ie)return;const Se=u.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ie.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(L?"⚽ "+u[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[l+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Se+Oe,Ie.style.transition="opacity .45s ease",Ie.style.opacity="1",Ie.style.pointerEvents="auto",(Ee=document.getElementById("pvp-start-match"))==null||Ee.addEventListener("click",async()=>{const Ge=K;await Z({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:H,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function Le(g,y,x,_,v){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const L=Array.from({length:10},(I,N)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${N%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][N%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${L}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${_?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${x}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let M=!1;const S=()=>{M||(M=!0,k.remove(),setTimeout(()=>v(),50))};k.addEventListener("click",S),setTimeout(S,3500)}function Fe(g,y,x){var H,X;const _=(u.gcDefs||[]).find(ae=>{var pe;return ae.name===g||((pe=ae.name)==null?void 0:pe.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_==null?void 0:_.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[_==null?void 0:_.color]||"#b06ce0",L=(_==null?void 0:_.name)||g,E=(_==null?void 0:_.effect)||((H=Re[g])==null?void 0:H.desc)||"",M=_!=null&&_.image_url?`/icons/${_.image_url}`:null,S=((X=Re[g])==null?void 0:X.icon)||"⚡",N=y===o?"Vous":u[y+"Name"]||"Adversaire",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ee.innerHTML=`
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
          ${M?`<img src="${M}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ee);let R=!1;const K=()=>{R||(R=!0,ee.remove(),setTimeout(()=>x&&x(),50))};ee.addEventListener("click",K),setTimeout(K,3e3)}function Ce(g,y){var ee,R,K,H;const _=(u["gcCardsFull_"+o]||[]).find(X=>X.id===g),v=_==null?void 0:_._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",L={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",E=(v==null?void 0:v.name)||y,M=(v==null?void 0:v.effect)||((ee=Re[y])==null?void 0:ee.desc)||"Carte spéciale.",S=v!=null&&v.image_url?`/icons/${v.image_url}`:null,I=((R=Re[y])==null?void 0:R.icon)||"⚡",N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",N.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${L};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${L}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${M}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(N),(K=N.querySelector("#pvp-gc-back"))==null||K.addEventListener("click",()=>N.remove()),(H=N.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{N.remove(),O(g,y)})}function we(){var _;const g=u[o+"Team"],y=Object.entries(g).flatMap(([v,k])=>(k||[]).filter(L=>!L.used).map(L=>({...L,_line:v})));if(!y.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(v=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",L=ze(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${L}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(_=x.querySelector("#bp-close"))==null||_.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const k=v.dataset.cid,L=y.find(M=>M.cardId===k);if(!L)return;const E=(g[L._line]||[]).find(M=>M.cardId===k);E&&(E.boost=(E.boost||0)+u.boostValue),x.remove(),await Z({[o+"Team"]:g,boostUsed:!0})})})}function V(g=null){var R,K;if(!(u.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const x=u[o+"Team"],_=u["usedSubIds_"+o]||[],v=u.maxSubs||3;if(_.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const k=Object.entries(x).flatMap(([H,X])=>(X||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:H}))),L=(u[o+"Subs"]||[]).filter(H=>!_.includes(H.cardId));if(!k.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!L.length){f("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(H=>H.cardId===g));const M=((R=k[E])==null?void 0:R._line)||((K=k[E])==null?void 0:K.job);let S=Math.max(0,L.findIndex(H=>H.job===M)),I=!1;const N=document.createElement("div");N.id="pvp-sub-overlay",N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var he,Ie,Se,Oe,Ee,Ge;const H=k[E],X=L[S],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),pe=Math.round(ae*1.35),ce=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;N.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${_.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ce(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${X?We({...X,used:!1,boost:0},ae,pe):"<div>—</div>"}</div>
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
      </div>`,(he=N.querySelector("#psub-close"))==null||he.addEventListener("click",()=>N.remove()),(Ie=N.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{E>0&&(E--,ee())}),(Se=N.querySelector("#pout-down"))==null||Se.addEventListener("click",()=>{E<k.length-1&&(E++,ee())}),(Oe=N.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{S>0&&(S--,ee())}),(Ee=N.querySelector("#pin-down"))==null||Ee.addEventListener("click",()=>{S<L.length-1&&(S++,ee())});const ge=(Me,Ue,Ne,Je)=>{const He=N.querySelector("#"+Me);if(!He)return;let Be=0;He.addEventListener("touchstart",Ke=>{Be=Ke.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",Ke=>{const Ze=Ke.changedTouches[0].clientY-Be;if(Math.abs(Ze)<30)return;const it=Ue();Ze<0&&it<Je-1?(Ne(it+1),ee()):Ze>0&&it>0&&(Ne(it-1),ee())},{passive:!0})};ge("pin-panel",()=>S,Me=>S=Me,L.length),ge("pout-panel",()=>E,Me=>E=Me,k.length),(Ge=N.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),I)return;I=!0;const Ue=k[E],Ne=L[S];if(!Ue||!Ne)return;const Je=Ue._line,He=(x[Je]||[]).findIndex(Ze=>Ze.cardId===Ue.cardId);if(He===-1){f("Erreur : joueur introuvable","error"),N.remove();return}const Be={...Ne,_line:Je,position:Ue.position,used:!1,boost:0};x[Je].splice(He,1,Be);const Ke=[..._,Ne.cardId];N.remove(),oe(Ue,Ne,async()=>{await Z({[o+"Team"]:x,[l+"Team"]:u[l+"Team"],["usedSubIds_"+o]:Ke})})})}document.body.appendChild(N),ee()}function oe(g,y,x){const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(M,S,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${_[M.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(M)?`<img src="${Pe(M)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(M.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(y,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let L=!1;const E=()=>{L||(L=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",E),setTimeout(E,2200)}function fe(){var y;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[l+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(u[l+"Team"],u[l+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>g.remove())}function U(){var _;const g=u.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=v=>{var L,E,M;if(v.type==="duel"){const S=v.isGoal,I=v.homeScored&&o==="p1"||!v.homeScored&&S&&o==="p2",N=v.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",ee=S?I?"⚽ BUT !":"⚽ BUT adversaire !":(L=v.homePlayers)!=null&&L.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${N};margin-bottom:4px">
          <div style="font-size:9px;color:${N};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ee}</div>
          ${(E=v.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${tt(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(M=v.aiPlayers)!=null&&M.length?`<div style="opacity:0.7">${tt(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
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
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(x).join("")}
      </div>`,document.body.appendChild(y),(_=y.querySelector("#pvp-hist-close"))==null||_.addEventListener("click",()=>y.remove())}async function te(){if(u.phase!==o+"-attack")return;const g=o==="p1"?"p2":"p1",y=(u.round||0)+1,x=[...u.log||[]];x.push({type:"info",text:`⏭️ ${u[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const _=ke(u),v=be(g),k=_||!v?"finished":g+"-attack";await Z({["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:k,attacker:g,round:y,log:x}),k==="finished"&&await je(u)}async function Y(){const g=u[o+"Team"],y=!["GK","DEF","MIL","ATT"].some(k=>(u[l+"Team"][k]||[]).some(L=>!L.used)),x=(u["selected_"+o]||[]).map(k=>{const L=(g[k._role]||[]).find(ee=>ee.cardId===k.cardId)||k,E=y&&["GK","DEF"].includes(k._role),M=g[k._role]||[],S=M.findIndex(ee=>ee.cardId===k.cardId),I=st(M.length),N=S>=0?I[S]:L._col??1;return{...L,_line:k._role,_col:N,...E?{note_a:Math.max(1,Number(L.note_a)||0)}:{}}});if(!x.length)return;const _=Ut(x,u.modifiers[o]||{});F(o,x.map(k=>k.cardId)),x.forEach(k=>{const L=(g[k._role]||[]).find(E=>E.cardId===k.cardId);L&&(L.used=!0)}),u["selected_"+o]=[],ue();const v=[...u.log||[]];if(y){const k=(u[o+"Score"]||0)+1,L=x.map(N=>({name:N.name,note:ze(N,N._line||"ATT"),portrait:Pe(N),job:N.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:L,homeTotal:_.total,aiTotal:0});const E=(u.round||0)+1,M=o==="p1"?"p2":"p1",S={...u,[o+"Team"]:g,[o+"Score"]:k},I=ke(S);B.add(E),Le(L,k,u[l+"Score"]||0,!0,async()=>{await Z({[o+"Team"]:g,[o+"Score"]:k,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:I?"finished":M+"-attack",attacker:M,round:E,log:v}),I&&await je({...u,[o+"Score"]:k})});return}v.push({type:"pending",text:`⚔️ ${u[o+"Name"]} attaque (${_.total})`}),await Z({[o+"Team"]:g,[l+"Team"]:u[l+"Team"],pendingAttack:{..._,players:x,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:l+"-defense",log:v})}async function de(){const g=u[o+"Team"],y=(u["selected_"+o]||[]).map(H=>{const X=(g[H._role]||[]).find(he=>he.cardId===H.cardId)||H,ae=g[H._role]||[],pe=ae.findIndex(he=>he.cardId===H.cardId),ce=st(ae.length),ge=pe>=0?ce[pe]:X._col??1;return{...X,_line:H._role,_col:ge}}),x=Kt(y,u.modifiers[o]||{});F(o,y.map(H=>H.cardId)),y.forEach(H=>{const X=(g[H._role]||[]).find(ae=>ae.cardId===H.cardId);X&&(X.used=!0)}),u["selected_"+o]=[],ue();const _=Vt(u.pendingAttack.total,x.total,u.modifiers[o]||{}),v=u.pendingAttack.side,k=_==="attack"||(_==null?void 0:_.goal),L=v==="p1"?"p2":"p1",E=(u.round||0)+1,M=(u.pendingAttack.players||[]).map(H=>({name:H.name,note:ze(H,H._line||"ATT"),portrait:Pe(H),job:H.job})),S=[...u.log||[]];S.push({type:"duel",isGoal:k,homeScored:k&&v===o,text:k?`⚽ BUT de ${u[v+"Name"]} ! (${u.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${x.total})`,homePlayers:M,aiPlayers:y.map(H=>({name:H.name,note:ze(H,H._line||"DEF"),portrait:Pe(H),job:H.job})),homeTotal:u.pendingAttack.total,aiTotal:x.total});const I=k?(u[v+"Score"]||0)+1:u[v+"Score"]||0,N={...u,[o+"Team"]:g,[v+"Score"]:I},ee=ke(N),R=ee?"finished":L+"-attack",K=async()=>{await Z({[o+"Team"]:g,[l+"Team"]:u[l+"Team"],[v+"Score"]:I,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:R,attacker:L,round:E,log:S}),(R==="finished"||ee)&&await je({...u,[v+"Score"]:I})};if(k){const H=v===o,X=H?I:u[o+"Score"]||0,ae=H?u[l+"Score"]||0:I;B.add(E),Le(M,X,ae,H,K)}else await K()}function ve(g){return["MIL","ATT"].some(y=>(g[y]||[]).some(x=>!x.used))}function Te(g){return["GK","DEF","MIL","ATT"].some(y=>(g[y]||[]).some(x=>!x.used))}function $e(g){return Te(g)&&!ve(g)}function be(g){const y=u[g+"Team"],x=u[(g==="p1"?"p2":"p1")+"Team"];return!!(ve(y)||!Te(x)&&$e(y))}function ke(g){const y=["MIL","ATT"].some(S=>(g.p1Team[S]||[]).some(I=>!I.used)),x=["MIL","ATT"].some(S=>(g.p2Team[S]||[]).some(I=>!I.used)),_=Te(g.p1Team),v=Te(g.p2Team);return!y&&!(!v&&_)&&(!x&&!(!_&&v))}function qe(g){const y=g.p1Score||0,x=g.p2Score||0;return y===x?null:y>x?$.home_id:$.away_id}async function je(g){try{const y=qe(g),x=y?$.home_id===y?$.away_id:$.home_id:null,_=g.p1Score||0,v=g.p2Score||0;await z.from("matches").update({status:"finished",winner_id:y,home_score:_,away_score:v}).eq("id",i);const{data:k}=await z.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await z.from("mini_league_matches").update({home_score:_,away_score:v,status:"finished"}).eq("id",k.id);const{data:L}=await z.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((L||[]).every(M=>M.status==="finished"||M.status==="bye")){const{data:M}=await z.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(M){const S=(M.current_day||0)+1,I=S>(M.total_days||0);await z.from("mini_leagues").update({current_day:I?M.total_days:S,status:I?"finished":"active"}).eq("id",k.league_id)}}}y&&x&&Ai(y,x).catch(()=>{})}catch(y){console.error("[ML] finishMatch:",y)}}function w(){var v;if(m&&document.getElementById("pvp-end-overlay"))return;m=!0;const g=u[o+"Score"],y=u[l+"Score"],x=g>y,_=g===y;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":_?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":_?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{z.removeChannel(J)}catch{}Ve(e),c("mini-league",a?{openLeagueId:a}:{})})}ue()}const ur="/",fr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function gr(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const s=()=>{var o,l,b;const c=t[n],f=n===t.length-1,a=Math.round((n+1)/t.length*100);d.innerHTML=`
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
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${ur}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,d.querySelectorAll("ul,ol").forEach(h=>{h.style.paddingLeft="20px",h.style.marginTop="6px",h.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(h=>{h.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(h=>{h.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,s()}),(l=d.querySelector("#tuto-next"))==null||l.addEventListener("click",()=>{f?r():(n++,s())}),(b=d.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await z.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),s()}async function mr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:s}=await z.rpc("get_tutorial_steps");if(!s&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:c,error:f}=await z.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(c==null?void 0:c.length)>0?(n=c,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${s==null?void 0:s.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):fr;gr(e,r,()=>t("boosters"))}const xr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function At(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Yi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Xt(e,t){const n=t?xr[t]||"#bbb":"#d0d0d0",d=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${n};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${d}</div>`}function Wi(e){const i=ei(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ji(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function yr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Li(e,t)}async function Li(e,t){const{state:i,toast:n}=t,{data:d}=await z.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let f="buy";const a=()=>{var p,u,m,A,j,D,q;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((m=document.getElementById("flt-country"))==null?void 0:m.value)||"").toLowerCase().trim(),job:((A=document.getElementById("flt-job"))==null?void 0:A.value)||"",rarity:((j=document.getElementById("flt-rarity"))==null?void 0:j.value)||"",note1:parseInt((D=document.getElementById("flt-note1"))==null?void 0:D.value)||0,note2:parseInt((q=document.getElementById("flt-note2"))==null?void 0:q.value)||0}};function o(p){const u=a();return p.filter(m=>{var J,Z,se;const A=(J=m.card)==null?void 0:J.player;if(!A)return!1;const j=`${A.firstname} ${A.surname_encoded}`.toLowerCase(),D=(((Z=A.clubs)==null?void 0:Z.encoded_name)||"").toLowerCase(),q=(A.country_code||"").toLowerCase(),B=((se=m.card)==null?void 0:se.evolution_bonus)||0,C=At(A,A.job,B),P=A.job2?At(A,A.job2,B):0;return!(u.name&&!j.includes(u.name)||u.club&&!D.includes(u.club)||u.country&&!q.includes(u.country)||u.job&&A.job!==u.job||u.rarity&&A.rarity!==u.rarity||u.note1&&C<u.note1||u.note2&&P<u.note2)})}function l(p){var q,B,C,P;const u=(q=p.card)==null?void 0:q.player;if(!u)return"";const m=((B=p.card)==null?void 0:B.evolution_bonus)||0,A=At(u,u.job,m),j=u.job2?At(u,u.job2,m):0,D=(i.profile.credits||0)>=p.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Yi(u.rarity)}
      ${Xt(A,u.job)}
      ${Xt(j,u.job2||null)}
      ${Wi(u.country_code)}
      ${Ji((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((P=p.seller)==null?void 0:P.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${D?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${D?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(p){var q,B,C,P;const u=(q=p.card)==null?void 0:q.player;if(!u)return"";const m=((B=p.card)==null?void 0:B.evolution_bonus)||0,A=At(u,u.job,m),j=u.job2?At(u,u.job2,m):0,D=p.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${D?"opacity:0.7":""}">
      ${Yi(u.rarity)}
      ${Xt(A,u.job)}
      ${Xt(j,u.job2||null)}
      ${Wi(u.country_code)}
      ${Ji((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:${D?"#22c55e":"#999"};margin-top:1px">
          ${D?`✅ Vendu à ${((P=p.buyer)==null?void 0:P.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${D?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function h(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=f==="buy"?"flex":"none",f==="buy"){const m=o(r);p.innerHTML=m.length?m.map(l).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const m=c.filter(j=>j.status==="active").sort((j,D)=>new Date(D.listed_at)-new Date(j.listed_at)),A=c.filter(j=>j.status==="sold").sort((j,D)=>new Date(D.sold_at||D.listed_at)-new Date(j.sold_at||j.listed_at));p.innerHTML=(m.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${m.length})</div>`+m.map(b).join(""):"")+(A.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${A.length})</div>`+A.map(b).join(""):"")+(!m.length&&!A.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(m=>m.addEventListener("click",()=>br(m.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(m=>m.addEventListener("click",()=>vr(m.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{f=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const m=u===p;u.style.background=m?"var(--green)":"#fff",u.style.color=m?"#fff":"var(--gray-600)",u.style.borderColor=m?"var(--green)":"var(--gray-200)"}),h()})});let $;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout($),$=setTimeout(h,250)})}),h()}async function br(e,t,i,n){const{state:d,toast:s,refreshProfile:r}=n,c=t.find(o=>o.id===e);if(!c)return;const f=c.price;if((d.profile.credits||0)<f){s("Crédits insuffisants","error");return}hr(c,async()=>{const{error:o}=await z.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){s("Erreur achat : "+o.message,"error");return}await r();const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),s("✅ Carte achetée !","success"),await Li(i,n)})}function hr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const s=c=>{d.remove(),c&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>s(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>s(!0)),d.addEventListener("click",c=>{c.target===d&&s(!1)})}async function vr(e,t,i){const{toast:n}=i,{data:d}=await z.from("market_listings").select("card_id").eq("id",e).single();if(await z.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:s}=await z.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");s||await z.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Li(t,i)}async function wr(e,t){var o,l,b,h;const{state:i,navigate:n}=t,d=((l=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:l.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:s},{data:r}]=await Promise.all([z.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),z.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let c=d;function f(){var p,u;const $=document.getElementById("rankings-list");if($){if(c==="global"){const m=s||[];$.innerHTML=m.length>0?m.map((A,j)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${j<3?["#D4A017","#a0a0a0","#cd7f32"][j]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${j<3?"16":"13"}px">${j<3?["🥇","🥈","🥉"][j]:j+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${A.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${A.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${A.trophies_top1} 🥈${A.trophies_top2} 🥉${A.trophies_top3}</div>
            <div style="color:var(--gray-600)">${A.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const m=r||[];$.innerHTML=m.length>0?m.map((A,j)=>{const D=Pt(A.mmr??1e3),q=(A.ranked_wins||0)+(A.ranked_losses||0)+(A.ranked_draws||0),B=q>0?Math.round((A.ranked_wins||0)/q*100):0,C=A.id===i.profile.id,P=(A.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${C?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${j<3?["#D4A017","#a0a0a0","#cd7f32"][j]:"rgba(255,255,255,0.08)"};color:${j<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${j<3?"16":"13"}px">${j<3?["🥇","🥈","🥉"][j]:j+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${D.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${A.club_name} · ${D.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${P?"❓":D.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${D.color}">${P?"Placement":D.label}</div>
              ${P?"":`<div style="font-size:10px;color:var(--gray-600)">${B}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=a(c==="global")),(u=document.getElementById("tab-ranked"))!=null&&u.style&&(document.getElementById("tab-ranked").style.cssText=a(c==="ranked"))}}const a=$=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${$?"900":"400"};background:${$?"var(--green)":"rgba(255,255,255,0.06)"};color:${$?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,f(),(b=document.getElementById("tab-global"))==null||b.addEventListener("click",()=>{c="global",f()}),(h=document.getElementById("tab-ranked"))==null||h.addEventListener("click",()=>{c="ranked",f()})}async function _r(e,t){var B,C,P,J;const{state:i,navigate:n,toast:d}=t,s=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:c}]=await Promise.all([z.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),z.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",s.id).single()]);if(!c){d("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(B=document.getElementById("ranked-back"))==null||B.addEventListener("click",()=>n("home"));return}const f=c.mmr??1e3,a=c.mmr_deviation??350,o=c.mmr_volatility??.06,l=c.placement_matches??0,b=l<10,h=Math.max(0,10-l),$=Pt(f),p=Lo(f),u=ci.findIndex(Z=>Z.id===$.id),m=ci[u+1]||null,A={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},j=(c.ranked_wins||0)+(c.ranked_losses||0)+(c.ranked_draws||0),D=j>0?Math.round((c.ranked_wins||0)/j*100):0,q=ci.map(Z=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${$.id===Z.id?1:.35};
      transform:${$.id===Z.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${$.id===Z.id?"28px":"20px"}">${Z.emoji}</div>
      <div style="font-size:9px;color:${Z.color};font-weight:${$.id===Z.id?"900":"400"};letter-spacing:0.5px">${Z.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${A[$.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${$.color}40">
      <div style="font-size:52px;margin-bottom:4px">${$.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${$.color};letter-spacing:3px;text-transform:uppercase">${$.label}</div>
    </div>

    <!-- Progression bar -->
    ${$.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${$.emoji} ${$.label}</span>
        ${m?`<span>${m.emoji} ${m.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${$.color},${$.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${m?m.label:"Maître"}</div>
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
        background:linear-gradient(135deg,${$.color},${$.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${$.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(C=document.getElementById("ranked-back"))==null||C.addEventListener("click",()=>n("home")),(P=document.getElementById("ranked-leaderboard-btn"))==null||P.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(J=document.getElementById("ranked-play-btn"))==null||J.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:f,rd:a,sigma:o,isPlacement:b}})})}async function $r(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await z.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(s||[]).filter(o=>o.status==="finished"),f=(s||[]).filter(o=>o.status==="in_progress");function a(o){const l=o.home_id===d.id;l?o.home_score:o.away_score,l?o.away_score:o.home_score;const b=o.winner_id===d.id,h=o.home_score===o.away_score&&o.status==="finished",$=o.status!=="finished"?"…":h?"N":b?"V":"D",p=o.status!=="finished"||h?"#888":b?"#1A6B3C":"#c0392b";let u=r[o.mode]||o.mode;o.away_id===null&&!u.startsWith("IA")&&(u="IA");const A=o.home_id===d.id?o.away:o.home;let j;o.away_id===null?j=u:A?j=`${A.club_name||A.pseudo} (${A.pseudo})`:j="Adversaire";let D="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(D=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(o.created_at),B=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),C=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${j}${D}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${B}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${C}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${$}</span>
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
  </div>`}Io(jo);const De={user:null,profile:null,page:"home",params:{}};function zt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function kr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function wi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Bt(){if(!De.user)return;const{data:e}=await z.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Gt(e,t={}){De.page=e,De.params=t,zo()}async function zo(){var n,d,s,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Gt,toast:zt,openModal:kr,closeModal:wi,refreshProfile:Bt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Fi(e,i);break;case"collection":await en(e,i);break;case"decks":await mi(e,i);break;case"boosters":await xn(e,i);break;case"ranked":await _r(e,i);break;case"match":{const c=De.params&&De.params.matchMode||"vs_ai_easy";c==="random"?await hi(e,i,!1):c==="ranked"?await hi(e,i,!0):c==="friend"?await Wn(e,i,(n=De.params)==null?void 0:n.friendId,(d=De.params)==null?void 0:d.friendName):c==="mini-league"?await Vi(e,i,(s=De.params)==null?void 0:s.mlMatchId,(r=De.params)==null?void 0:r.leagueId):await zn(e,i);break}case"market":await yr(e,i);break;case"rankings":await wr(e,i);break;case"matches":await $r(e,i);break;case"friends":await Po(e,i);break;case"mini-league":await Zn(e,i);break;case"match-mini-league":{const c=De.params||{};await Vi(e,i,c.mlMatchId,c.leagueId);break}default:await Fi(e,i)}}function Er(){var n;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",s=>{s.preventDefault(),Gt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Gt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Gt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Tr())}async function Tr(){const{data:e}=await z.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function Ar(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&wi()}),document.getElementById("modal-close").addEventListener("click",wi);const{data:{session:e}}=await z.auth.getSession();if(!e){Xi(),Ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt});return}De.user=e.user,await Bt(),Xi();try{const{data:i}=await z.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),Mo(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){qo(document.getElementById("app"),{state:De,navigate:async()=>{await Bt(),fi()},toast:zt,refreshProfile:Bt});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){kn(document.getElementById("app"),{state:De,navigate:()=>fi(),toast:zt,refreshProfile:Bt});return}fi(),setTimeout(()=>mr(De.profile,Gt,zt),800),z.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",Ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:zt}))})}function zr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function li(){const e=document.getElementById("app");e&&(e.style.height=zr()+"px")}window.addEventListener("resize",li);window.addEventListener("orientationchange",()=>setTimeout(li,150));window.visualViewport&&window.visualViewport.addEventListener("resize",li);function fi(){const e=()=>{var i;(i=De.user)!=null&&i.id&&z.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",li(),Er(),zo()}function Xi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function So(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Ar().catch(e=>{console.error("Échec du démarrage:",e),So()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&So("Le serveur met trop de temps à répondre.")},12e3);
