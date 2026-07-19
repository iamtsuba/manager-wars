const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-yJiMLlPw.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as _,l as Rt,m as Si,F as Ai,r as Ae,j as Qt,h as Mi,n as Mn,o as jn,T as mi,k as Cn,p as Bn,b as qn}from"./formation-links-yJiMLlPw.js";const Dn="/";function Oi(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,l,c,d,g;const o=n==="login";e.innerHTML=`
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
        <img src="${Dn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o?((l=document.getElementById("login-password"))==null||l.addEventListener("keydown",x=>{var f;x.key==="Enter"&&((f=document.getElementById("login-btn"))==null||f.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),f=document.getElementById("login-password").value,m=document.getElementById("login-error");if(m.textContent="",!x||!f){m.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await _.auth.signInWithPassword({email:x,password:f});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){m.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",x=>{var f;x.key==="Enter"&&((f=document.getElementById("reg-btn"))==null||f.click())}),(g=document.getElementById("reg-btn"))==null||g.addEventListener("click",async()=>{const x=document.getElementById("reg-email").value.trim(),f=document.getElementById("reg-password").value,m=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!x||!f||!m){p.textContent="Remplissez tous les champs.";return}if(f.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(f!==m){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:b}=await _.auth.signUp({email:x,password:f});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const v=document.getElementById("login-email");v&&(v.value=x)},50)}))};r()}function Fn(e,{state:t,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${o}">
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
            <div class="color-swatch" id="swatch2" style="background:${a};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${a}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var m;const c=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),g=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",x=g.trim().split(" ").filter(Boolean),f=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():g.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),d&&(d.textContent=f,d.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function l(c){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",c.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await _.from("users").select("id").eq("pseudo",c).maybeSingle();if(g){d.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",c.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await _.from("users").select("id").eq("club_name",c).maybeSingle();if(g){d.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),x=document.getElementById("step3-finish");g.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:f}=await _.from("users").insert({id:t.user.id,pseudo:c,club_name:d,club_color1:o,club_color2:a,credits:1e4});if(f)throw f;await Pn(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(f){g.textContent=f.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function Pn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await _.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Gn="modulepreload",Rn=function(e){return"/"+e},Hi={},an=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=Rn(l),l in Hi)return;Hi[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":Gn,c||(g.as="script"),g.crossOrigin="",g.href=l,s&&g.setAttribute("nonce",s),document.head.appendChild(g),c)return new Promise((x,f)=>{g.addEventListener("load",x),g.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Kt="#1A6B3C",Vt="#cc2222",Nn="#D4A017",Ui="#888";async function On(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await sn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Un(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>dn(i,n,null,t))}async function sn(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await _.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await _.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(s>0?(l.style.display="flex",l.textContent=s):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${Vt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const d=(o||[]).map(f=>f.requester_id===r?f.addressee_id:f.requester_id);let g={};if(d.length){const{data:f}=await _.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(f||[]).forEach(m=>{g[m.id]=m})}const x=(o||[]).map(f=>({friendshipId:f.id,friend:g[f.requester_id===r?f.addressee_id:f.requester_id]||{pseudo:"?"}}));if(!x.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:f,friend:m})=>Hn(m,f)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(f=>{f.addEventListener("click",()=>Kn(e,f.dataset.stats,f.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(f=>{f.addEventListener("click",async()=>{const m=f.dataset.friendId,p=f.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await _.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),v=!!b;console.log("[Friends] clic match",{fid:m,fname:p,isAccepting:v}),n("match",{matchMode:"friend",friendId:m,friendName:p,isAccepting:v})})})}function Hn(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Kt,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,l=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${r}
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Nn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Un(e,t){const i=ji();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Vt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ci()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await _.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await _.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(l){const d=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=d;return}const{error:c}=await _.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){r.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function dn(e,t,i=null,n={}){const r=e.user.id,{data:o}=await _.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(x=>x.requester_id);let s={};if(a.length){const{data:x}=await _.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(f=>{s[f.id]=f})}const l=(o||[]).map(x=>({...x,requester:s[x.requester_id]||{pseudo:"?"}})),c=ji(),d=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(x=>{var f,m,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((f=x.requester)==null?void 0:f.club_name)||((m=x.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=x.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Kt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Vt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ci()}`,document.body.appendChild(c);const g=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",g),c.addEventListener("click",x=>{x.target===c&&g()}),c.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:f}=await _.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(f){t("Erreur : "+f.message,"error");return}x.closest("div[style]").remove(),t("✅ Ami accepté !","success"),sn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await _.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Kn(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await _.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),l=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},d=a?c.wins_p1||0:c.wins_p2||0,g=a?c.wins_p2||0:c.wins_p1||0,x=c.draws||0,f=a?c.goals_p1||0:c.goals_p2||0,m=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,v=(k,y,C,E=Kt,G=Vt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${y}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${k}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${G}">${C}</div>
    </div>`,h=ji();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${b===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${v("Victoires",d,g)}
        ${v("Nuls",x,x,Ui,Ui)}
        ${v("Défaites",g,d)}
        ${v("Buts marqués",f,m)}
        ${v("Buts encaissés",m,f,Vt,Kt)}
        ${v("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ci()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",k=>{k.target===h&&h.remove()})}function ji(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ci(){return`
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
        background:${Kt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Vn="2026.07.19-1155";async function Ki(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
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
      background: linear-gradient(135deg, ${r.club_color1}cc, ${r.club_color2}88);
      border: 1.5px solid ${r.club_color2};
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
          <h3>${r.pseudo}</h3>
          <div class="level">Niveau ${r.level} · ${r.club_name}</div>
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
        ${r.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Vn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var g,x,f,m,p;const s=((g=window.visualViewport)==null?void 0:g.height)||window.innerHeight,l=((x=document.querySelector(".top-nav"))==null?void 0:x.offsetHeight)||56,c=((f=document.querySelector(".bottom-nav"))==null?void 0:f.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-l-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((m=e.querySelector(".home-hero"))==null?void 0:m.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const v=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((N,ne)=>{var ie;return N+(((ie=document.getElementById(ne))==null?void 0:ie.offsetHeight)||0)},0),k=12*5,y=s-l-c-u-v-h-k-32,C=Math.max(80,Math.round(y*.28)),E=Math.max(160,Math.round(y*.72)),G=Math.floor((E-10)/2);b&&(b.style.minHeight=b.style.maxHeight=C+"px"),e.querySelectorAll(".play-tile").forEach(N=>{N.style.minHeight=N.style.height=G+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(N=>{N.style.height=Math.round(G*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const l=s.dataset.action;if(l==="match-ai"){Jn(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()}),cn(t,n),Xn(t,n,i),ln(t,n,i))}async function ln(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=e.profile.id,{data:o}=await _.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(l=>l.home_id===r?l.away_id:l.home_id).filter(Boolean);let s={};if(a.length){const{data:l}=await _.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(l=>{const c=l.home_id===r?l.away_id:l.home_id,d=s[c]||"Adversaire",g=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${g?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:d}=await _.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await an(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>or);return{resumePvpMatch:g}},void 0);d(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{Wn(async()=>{await Yn(l.dataset.abandon,l.dataset.opp,r),t("Match abandonné (défaite 3-0)","info"),ln(e,t,i)})})})}async function Yn(e,t,i){const{data:n}=await _.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await _.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await _.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",e)}function Wn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Xn(e,t,i){var s,l,c,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await _.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((l=r.inviter)==null?void 0:l.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await _.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",t("Invitation refusée","info")})}async function cn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await _.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(l=>{var c;return((c=l.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>dn(e,t,()=>cn(e,t)))}function Jn(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${t.map(r=>`
          <div class="diff-card" data-mode="${r.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${r.bg};border:1px solid ${r.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${r.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${r.iconBg}">${r.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${r.text}">${r.label}</div>
              <div style="font-size:12px;color:${r.text};opacity:0.65;margin-top:1px">${r.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${r.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${r.credits} cr.</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-1px)",r.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),r.addEventListener("mouseleave",()=>{r.style.transform="",r.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{n(),e("match",{matchMode:r.dataset.mode})})})}const je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Re(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Vi=["ATT","MIL","DEF","GK"];function pn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Si(i).some(([d,g])=>d===e.position&&g===t.position||d===t.position&&g===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=Vi.indexOf(e._line||e.job),a=Vi.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function un(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!pn(a,s,t))continue;const l=Rt(a,s);l==="#00ff88"?i+=10:l==="#FFD700"&&(i+=5)}return i}function Yt(e,t={},i){let n=0,r=0;e.forEach(l=>{const c=l._line||l.job,d=Number(c==="MIL"?l.note_m:l.note_a)||0,g=l.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?d*2:d,r+=(l.boost||0)+g});const o=n+r,a=un(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function Wt(e,t={},i){const n=e.reduce((a,s)=>{const l=s._line||s.job;let c=0;l==="GK"?c=Number(s.note_g)||0:l==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const d=s.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return a+c+(s.boost||0)+d},0),r=un(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Bi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function fn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const l=t==="attack"?Re(a,"ATT"):a._line==="GK"?Re(a,"GK"):Re(a,"DEF");return(t==="attack"?Re(s,"ATT"):s._line==="GK"?Re(s,"GK"):Re(s,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function Qn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Zn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function eo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=gn(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function gn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function to(e,t){!e||!t||await Promise.all([Yi(e,"win"),Yi(t,"loss")])}async function Yi(e,t){const{data:i}=await _.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=Zn[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,l=r.player.note_max??10,c=gn(r.player),d=r.current_note??c,g=Math.min(l,Math.max(s,d+a));return _.from("cards").update({current_note:g}).eq("id",r.id)}))}const io={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},xi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ei=["GK","DEF","MIL","ATT"],no=["Tous","GK","DEF","MIL","ATT"],oo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Wi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function ro(e){return e.length?e.reduce((t,i)=>Wi(i)>Wi(t)?i:t,e[0]):e[0]}function ao(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const so={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function lo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function yi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function bi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ae(r,{width:140})}
  </div>`}function Xi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ae(e,{width:140})}
  </div>`}async function co(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await _.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(S=>S.card_type==="player"&&S.player),d=(s||[]).filter(S=>S.card_type==="game_changer"),g=(s||[]).filter(S=>S.card_type==="formation"),x=(s||[]).filter(S=>S.card_type==="stadium"),{data:f}=await _.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(f||[]).forEach(S=>{m[S.name]=S});const{data:p}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(S=>{u[S.id]=S}),x.forEach(S=>{S.stadium_def&&(u[S.stadium_id]=S.stadium_def)});const b=Object.keys(Ai),v=Object.keys(je),h={};c.forEach(S=>{const q=S.player.id;h[q]=(h[q]||0)+1}),new Set(Object.keys(h).map(S=>String(S)));const k=new Set(g.map(S=>S.formation)),y=new Set(d.map(S=>S.gc_type));let C="player",E="Tous",G="",N=!1;function ne(){return[...c].sort((S,q)=>{const P=ei.indexOf(S.player.job),X=ei.indexOf(q.player.job);return P!==X?P-X:(S.player.surname_real||"").localeCompare(q.player.surname_real||"")})}function ie(){return[...l||[]].sort((S,q)=>{const P=ei.indexOf(S.job),X=ei.indexOf(q.job);return P!==X?P-X:(S.surname_real||"").localeCompare(q.surname_real||"")})}function Q(){return ne().filter(S=>{const q=S.player,P=E==="Tous"||q.job===E,X=!G||`${q.firstname} ${q.surname_real}`.toLowerCase().includes(G);return P&&X})}function M(){return ie().filter(S=>{const q=E==="Tous"||S.job===E,P=!G||`${S.firstname} ${S.surname_real}`.toLowerCase().includes(G);return q&&P})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="player"?"var(--green)":"transparent"};
        color:${C==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="formation"?"var(--green)":"transparent"};
        color:${C==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="stadium"?"#E87722":"transparent"};
        color:${C==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function w(){const S=document.getElementById("col-filters");S&&(C==="player"?(S.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${no.map(q=>`
            <button class="filter-btn" data-job="${q}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${q===E?"var(--green)":"var(--gray-200)"};
                background:${q===E?"var(--green)":"#fff"};
                color:${q===E?"#fff":"var(--gray-600)"}">
              ${q}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",q=>{G=q.target.value.toLowerCase(),j()}),e.querySelectorAll(".filter-btn").forEach(q=>{q.addEventListener("click",()=>{E=q.dataset.job,w(),j()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,w(),j()})):(S.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,w(),j()})))}function j(){const S=document.getElementById("col-grid");S&&(C==="player"?$e(S):C==="formation"?W(S):C==="stadium"?R(S):J(S))}function U(S,q,P,X,V){const D=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!D||!O)return;var _e=0;function ke(){const be=window.innerWidth>=768,he=document.getElementById("col-big"),Ee=document.getElementById("col-grid");be&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),be&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+q(S[_e])+"</div>";var Te=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){X(S[_e])}),requestAnimationFrame(function(){var ge=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ge||!O)){var qe=O.clientHeight-8,Ce=O.clientWidth-24,He=ge.offsetHeight,ht=ge.offsetWidth;if(He>0&&ht>0&&qe>40){var Je=be?2.2:1.6,Nt=Math.min(qe/He,Ce/ht,Je);ge.style.transform="scale("+Nt.toFixed(3)+")",ge.style.transformOrigin="top center"}}}),D.innerHTML=S.map(function(ge,qe){var Ce=qe===_e,He="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ce?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+qe+'" style="'+He+'">'+P(ge,Ce)+"</div>"}).join(""),D.querySelectorAll(".col-mini-item").forEach(function(ge){ge.addEventListener("click",function(){_e=Number(ge.dataset.idx),ke(),ge.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function re(S){var q=window.innerWidth>=768?.76:.54,P;if(!S||S._fake){var X=S?S.player:null;if(!X)return"";P=Xi(X)}else P=bi(S,"");return'<div style="display:inline-block;zoom:'+q+';pointer-events:none;line-height:0">'+P+"</div>"}function ae(S,q,P){q=q||100,P=P||140;var X=Qt[S]||{},V={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},D=Math.max(3,Math.round(q*.06)),O=Object.entries(X).map(function(ke){var be=ke[0],he=ke[1],Ee=be.replace(/\d+$/,""),Te=V[Ee]||"#888",ge=Math.round(he.x*q),qe=Math.round(he.y*P);return'<circle cx="'+ge+'" cy="'+qe+'" r="'+D+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),_e=Math.max(1,Math.round(q/50));return'<svg viewBox="0 0 '+q+" "+P+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+q+'" height="'+P+'" fill="#1A6B3C"/><rect x="'+Math.round(q*.2)+'" y="'+Math.round(P*.02)+'" width="'+Math.round(q*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+_e+'"/><line x1="0" y1="'+Math.round(P*.5)+'" x2="'+q+'" y2="'+Math.round(P*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+_e+'"/><ellipse cx="'+Math.round(q*.5)+'" cy="'+Math.round(P*.5)+'" rx="'+Math.round(q*.18)+'" ry="'+Math.round(P*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+_e+'"/><rect x="'+Math.round(q*.2)+'" y="'+Math.round(P*.82)+'" width="'+Math.round(q*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+_e+'"/>'+O+"</svg>"}function se(S,q,P){var X=P>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+P+"</div>":"",V=q?'data-form-id="'+q.id+'"':"",D=S.length>7?14:S.length>5?16:19,O=!!q;return"<div "+V+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+X+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+D+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+S+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+ae(S,140,220)+"</div></div>"}function de(S,q){var P=window.innerWidth>=768?.76:.54,X=140,V=305,D=Math.round(V*.22),O=V-D,_e=S.length>7?10:13,ke=ae(S,X,O),be=q?"1.5px solid #2a7a40":"1px solid #ddd",he=q?"":"filter:grayscale(1);opacity:0.45;",Ee=q?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+P+';line-height:0;pointer-events:none"><div style="width:'+X+"px;height:"+V+"px;border-radius:6px;border:"+be+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+D+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+_e+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(X-4)+'px">'+S+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div></div>"}function $e(S){if(N){const q=M();if(!q.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const P=q.map(X=>c.find(V=>V.player.id===X.id)||{_fake:!0,player:X,id:"fake-"+X.id});U(P,X=>X._fake?Xi(X.player):bi(X,""),X=>X._fake?re({player:X.player,id:"x",_fake:!0}):re(X),X=>{X._fake||Ji(X,c,h,t)})}else{const q=Q();if(!q.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const P={};q.forEach(V=>{const D=V.player.id;P[D]||(P[D]=[]),P[D].push(V)});const X=Object.values(P).map(V=>ro(V));U(X,V=>{const D=h[V.player.id]||1,O=D>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${D}</div>`:"",ke=c.filter(be=>be.player.id===V.player.id&&be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return bi(V,O+ke)},V=>re(V),V=>Ji(V,c,h,t))}}function W(S){const q=N?b:[...k];if(!q.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const P=q.map(X=>({formation:X,card:g.find(V=>V.formation===X)||null,owned:k.has(X)}));U(P,({formation:X,card:V,owned:D})=>se(X,D?V:null,D?g.filter(O=>O.formation===X).length:0),({formation:X,owned:V})=>de(X,V),({card:X,owned:V})=>{V&&X&&uo(X,g,t,o)})}function J(S){const q=Object.keys(m),P=N?q.length?q:v:[...y];if(!P.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const X=P.map(V=>({type:V,gc:je[V]||{icon:"⚡",desc:""},def:m[V]||null,owned:y.has(V),card:d.find(D=>D.gc_type===V)||null}));U(X,({type:V,gc:D,def:O,owned:_e,card:ke})=>{var Je;const be=_e?d.filter(Nt=>Nt.gc_type===V).length:0,he=be>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${be}</div>`:"",Ee=(O==null?void 0:O.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ge={purple:"#b06ce0",light_blue:"#00d4ef"},qe=Te[O==null?void 0:O.color]||Te.purple,Ce=ge[O==null?void 0:O.color]||ge.purple,He=(O==null?void 0:O.effect)||D.desc||"",ht=O!=null&&O.image_url?`/icons/${O.image_url}`:((Je=O==null?void 0:O.club)==null?void 0:Je.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return _e&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${V}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ce};background:${qe};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ce}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${V.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${V}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ht?`<img src="${ht}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${D.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${He.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${V}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${D.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:V,gc:D,def:O,owned:_e})=>{const ke=window.innerWidth>=768?.76:.54,be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=be[O==null?void 0:O.color]||be.purple,Te=he[O==null?void 0:O.color]||he.purple,ge=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return _e?`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${V}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ge?`<img src="${ge}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${D.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||D.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${D.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${V}</span></div></div>`},({type:V,owned:D,def:O})=>{D&&po(V,O,o)})}function R(S){const q="#E87722",P="/";if(!x.length){S.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const X={};x.forEach(D=>{const O=D.stadium_id||"?";(X[O]=X[O]||[]).push(D)});const V=Object.entries(X).map(([D,O])=>({sid:D,def:u[D]||null,count:O.length,card:O[0]}));U(V,({def:D,count:O})=>{var Te,ge;const _e=(D==null?void 0:D.name)||"?",ke=((Te=D==null?void 0:D.club)==null?void 0:Te.encoded_name)||(D==null?void 0:D.country_code)||"—",be=D!=null&&D.image_url?`${P}icons/${D.image_url}`:((ge=D==null?void 0:D.club)==null?void 0:ge.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),he=be?`<img src="${be}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ee=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${q},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${q}66">
          ${Ee}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${he}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ke}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:D,count:O})=>{var Te,ge;const _e=window.innerWidth>=768?.76:.54,ke=(D==null?void 0:D.name)||"?",be=((Te=D==null?void 0:D.club)==null?void 0:Te.encoded_name)||(D==null?void 0:D.country_code)||"—",he=D!=null&&D.image_url?`${P}icons/${D.image_url}`:((ge=D==null?void 0:D.club)==null?void 0:ge.logo_url)||(D!=null&&D.country_code?`https://flagsapi.com/${D.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ee=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${q},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${ke}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ee}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${be}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(S=>{S.addEventListener("click",()=>{C=S.dataset.tab,E="Tous",G="",N=!1,e.querySelectorAll(".col-tab-btn").forEach(q=>{const P=q.dataset.tab===C;q.style.borderBottomColor=P?"var(--green)":"transparent",q.style.color=P?"var(--green)":"var(--gray-600)"}),w(),j()})}),w(),j()}function po(e,t,i){const n=je[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,l=a[t==null?void 0:t.color]||a.purple,c=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,g=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${r?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${c}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${d}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ti=1e3;function uo(e,t,i,n){var m,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:l}=i,c=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const b=Qt[c]||{},v=Ai[c]||[],h=290,k=360,y=20;function C(G){const N=b[G];return N?{x:N.x*h,y:N.y*k}:null}let E=`<svg width="${h}" height="${k}" viewBox="0 0 ${h} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[G,N]of v){const ne=C(G),ie=C(N);!ne||!ie||(E+=`<line x1="${ne.x}" y1="${ne.y}" x2="${ie.x}" y2="${ie.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const G of Object.keys(b)){const N=C(G);if(!N)continue;const ne=G.replace(/\d+/,""),ie=d[ne]||"#555";E+=`<circle cx="${N.x}" cy="${N.y}" r="${y}" fill="${ie}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return E+="</svg>",E}const x=t.filter(b=>b.formation===c);x.length;const f=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${g()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${f?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ti}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ti.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=x.find(h=>!h.is_for_sale)||x[0];if(!b){o("Aucune carte à vendre","error");return}await _.from("market_listings").delete().eq("card_id",b.id),await _.from("transfer_history").delete().eq("card_id",b.id);const{error:v}=await _.from("cards").delete().eq("id",b.id);if(v){o(v.message,"error");return}await _.from("users").update({credits:(r.profile.credits||0)+ti}).eq("id",r.profile.id),await l(),o(`+${ti.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await _.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function Ji(e,t,i,n){var re,ae,se,de,$e;const{state:r,toast:o,openModal:a,closeModal:s,navigate:l,refreshProfile:c}=n,d=e.player,g=t.filter(W=>W.player.id===d.id),x=g.length,f=e.evolution_bonus||0,m=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?f:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?f:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?f:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?f:0)),p=d.rarity||"normal",{data:u}=await _.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",m).gte("note_max",m).order("note_min",{ascending:!1}).limit(1);((re=u==null?void 0:u[0])==null?void 0:re.price)??oo[p];const b=d.rarity!=="legende";lo(d);const v=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:yi(d,d.job))+f,h=d.rarity==="pepite"||d.rarity==="papyte",k=d.job2?(h?eo(e,ao(d.job2)):yi(d,d.job2))+(yi(d,d.job2)>0?f:0):null;xi[d.job],d.job2&&xi[d.job2];const y=io[d.rarity]||"#ccc";so[d.country_code]||d.country_code;const C=e.evolution_bonus||0,G=v+C,N=k||0,ne=N>0?N+C:0,ie=g.map(W=>W.id);let Q={};if(ie.length){const{data:W}=await _.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(W||[]).forEach(J=>{Q[J.card_id]||(Q[J.card_id]=[]),Q[J.card_id].push(J)})}const M=W=>{const J=W.transferred_at?new Date(W.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",R=W.source==="booster"?"Booster":W.price?W.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${W.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${W.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${W.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R}</div>
        <div style="font-size:11px;color:var(--gray-600)">${J}</div>
      </div>
    </div>`},w=ie.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${x>1?`(${x})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((W,J)=>{const R=Q[W.id]||[],S=W.is_for_sale,q=R.length?R[R.length-1]:null,X=(d.rarity==="pepite"||d.rarity==="papyte")&&W.current_note!=null?` (☆${W.current_note})`:"";return`
            <div data-card-id="${W.id}" data-card-idx="${J}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${S?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${W.id}" ${S?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${J+1}${X}${S?" 🏷️ En vente":""}</div>
                  ${q?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${q.club_name} · ${q.source==="booster"?"Booster":q.price?q.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${J}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${R.length?`${R.length} club${R.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${J}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${R.map(M).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${G}${d.job2&&N>0?` / ${ne}`:""}`:`Note actuelle : ${G}${d.job2&&N>0?` / ${ne}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${x<=1?"#ccc":"#1A6B3C"};border-color:${x<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${x<=1?"not-allowed":"pointer"}"
            ${x<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${b?`
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
    </div>`:"";a(`${d.firstname} ${d.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Ae({...d,_evolution_bonus:f},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${d.rarity.toUpperCase()}</div>
          ${d.rarity==="pepite"||d.rarity==="papyte"?`
          <div style="margin-top:6px;background:${y}18;border-left:3px solid ${y};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${y};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([W,J])=>{const R=xi[W],S=W==="GK"?"#fff":R,q=W===d.job||W===d.job2,P=(Number(J)||0)+(q&&C>0?C:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${R};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${S};font-family:Arial Black,Arial;line-height:1">${P}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${S}">${W}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${x}</div>
        </div>
      </div>
    </div>
    ${w}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ae=document.getElementById("close-detail"))==null||ae.addEventListener("click",s);let j=new Set;const U=()=>{const W=j.size,J=document.getElementById("sell-action-panel");if(!J)return;J.style.display=W>0?"block":"none",document.getElementById("sell-selected-count").textContent=W;const R=document.getElementById("evolve-btn");R&&(R.textContent=`⬆️ Évoluer ${W>1?"(+"+W+")":""}`)};document.querySelectorAll(".expl-check").forEach(W=>{W.addEventListener("change",()=>{const J=W.dataset.id;W.checked?j.add(J):j.delete(J);const R=W.closest(".exemplaire-row");R&&(R.style.borderColor=W.checked?"#1A6B3C":"#eee"),U()})}),document.querySelectorAll(".exemplaire-row").forEach(W=>{W.addEventListener("click",J=>{if(J.target.closest("button")||J.target.tagName==="INPUT")return;const R=W.querySelector(".expl-check");R&&!R.disabled&&(R.checked=!R.checked,R.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(W=>{W.addEventListener("click",J=>{J.stopPropagation();const R=document.querySelector(`.expl-hist[data-hist="${W.dataset.idx}"]`);R&&(R.style.display=R.style.display==="none"?"flex":"none")})}),(se=document.getElementById("evolve-btn"))==null||se.addEventListener("click",async()=>{if(x<=1)return;const W=[...j];if(!W.length)return;if(j.has(e.id)){const V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",V.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(V),V.querySelector("#err-close").addEventListener("click",()=>V.remove()),V.addEventListener("click",D=>{D.target===V&&V.remove()});return}const J=W.filter(V=>V!==e.id),R=d.rarity==="legende"?2:1;if((J.length||1)*R,!(!J.length&&W.length===1&&W[0]===e.id)){if(!J.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(V=>{const D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",D.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${J.length}</strong> copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}<br>
            📈 Note : <strong>${v+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${v+(e.evolution_bonus||0)+J.length*R}</strong>
            ${k&&k>0?`<br>📈 Note 2 : <strong>${k+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${k+(e.evolution_bonus||0)+J.length*R}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${R} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(D),D.querySelector("#sac-cancel").addEventListener("click",()=>{D.remove(),V(!1)}),D.querySelector("#sac-ok").addEventListener("click",()=>{D.remove(),V(!0)}),D.addEventListener("click",O=>{O.target===D&&(D.remove(),V(!1))})}))return;if(J.length){await _.from("market_listings").delete().in("card_id",J),await _.from("deck_cards").delete().in("card_id",J),await _.from("transfer_history").delete().in("card_id",J),await _.from("decks").update({stadium_card_id:null}).in("stadium_card_id",J);const{error:V}=await _.from("cards").delete().in("id",J);if(V){o("Erreur suppression : "+V.message,"error");return}}const q=(e.evolution_bonus||0)+J.length*R,{error:P}=await _.from("cards").update({evolution_bonus:q}).eq("id",e.id);if(P){o("Erreur évolution : "+P.message,"error");return}const X=v+q;o(`⬆️ ${d.firstname} ${d.surname_real} : note ${v+e.evolution_bonus||v} → ${X}${J.length?` · ${J.length} copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}`:""} !`,"success",4e3),s(),l("collection")}),(de=document.getElementById("market-sell-btn"))==null||de.addEventListener("click",async()=>{var P;const W=[...j];if(!W.length){o("Sélectionne au moins un exemplaire","warning");return}const J=parseInt((P=document.getElementById("sell-market-price"))==null?void 0:P.value);if(!J||J<1){o("Prix invalide","error");return}const{error:R}=await _.from("cards").update({is_for_sale:!0,sale_price:J}).in("id",W);if(R){o(R.message,"error");return}const S=W.map(X=>({seller_id:r.profile.id,card_id:X,price:J,status:"active"})),{error:q}=await _.from("market_listings").insert(S);q&&console.warn("[Market] insert listings:",q.message),o(`${W.length} carte${W.length>1?"s":""} mise${W.length>1?"s":""} en vente à ${J.toLocaleString("fr")} cr. chacune !`,"success"),s(),l("collection")}),($e=document.getElementById("cancel-sell-btn"))==null||$e.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),l("collection")})}function Qi(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function fo(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const oi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function wi(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(a=>`
          <div class="card-panel" data-open-deck="${a.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${a.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${a.id}" data-name="${a.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${a.id}" data-name="${a.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await Qi("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:l}=await _.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){r(l.message,"error");return}r("Deck créé !","success"),Zi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Zi(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await Qi("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:l}=await _.from("decks").update({name:s}).eq("id",a.dataset.rename);if(l){r(l.message,"error");return}r("Deck renommé !","success"),wi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await fo(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await _.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await _.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),wi(e,t)})})}async function Zi(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("*").eq("id",e).single(),{data:a}=await _.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await _.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),l=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),d=(s||[]).filter(b=>b.card_type==="stadium"),g=[...new Set(d.map(b=>b.stadium_id).filter(Boolean))];let x={};if(d.forEach(b=>{b.stadium_def&&b.stadium_id&&(x[b.stadium_id]=b.stadium_def)}),g.length&&Object.keys(x).length<g.length){const{data:b}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",g);(b||[]).forEach(v=>{x[v.id]=v})}const f=c.map(b=>b.formation).filter(Boolean),{data:m}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";f.length>0&&!f.includes(p)&&(p=f[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:c,stadiumCards:d,stadDefMap:x,availableFormations:f};(m||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),yt(t,u,i)}function yt(e,t,i){var m,p;const{navigate:n}=i;oi[t.formation];const r=en(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(oi),s=(m=t.stadiumCards)==null?void 0:m.find(u=>u.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${Ae({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:l})}
                <button data-remove-sub="${u.id}"
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
              ${s?(()=>{var v;const u=t.stadDefMap[s.stadium_id],b=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${b?`<img src="${b}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((u==null?void 0:u.name)||"Stade").slice(0,14)}</span>
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
              ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${Ae({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:l})}
                  <button data-remove-sub="${u.id}"
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
              ${s?(()=>{var v;const u=t.stadDefMap[s.stadium_id],b=((v=u==null?void 0:u.club)==null?void 0:v.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${b?`<img src="${b}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((u==null?void 0:u.name)||"Stade").slice(0,10)}</span>
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
  </div>`;const d=window.innerWidth>=900,g=e.querySelector(".deck-pc-layout"),x=e.querySelector(".deck-mobile-layout");g&&(g.style.display=d?"block":"none"),x&&(x.style.display=d?"none":"block"),go(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const f=()=>{const{openModal:u,closeModal:b}=i,v=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",v),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const k=en(t.formation),y={};k.forEach(C=>{t.slots[C]&&(y[C]=t.slots[C])}),t.slots=y,b(),yt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",f)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>mo(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>bo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),yt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>yo(t,e,i)))}function go(e,t,i,n){var h,k;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(h=t.stadiumCards)==null?void 0:h.find(y=>y.id===t.stadiumCardId),s=a&&((k=t.stadDefMap)==null?void 0:k[a.stadium_id])||null,l=Qt[t.formation]||{},c=Si(t.formation)||[],d={};for(const y of i){const C=t.slots[y],E=C?t.playerCards.find(G=>G.id===C):null;E!=null&&E.player?d[y]={...E.player,_evolution_bonus:E.evolution_bonus||0,face:E.player.face||null}:d[y]=null}const g=window.innerWidth>=900,x=g?window.innerWidth-280:window.innerWidth-20,f=g?Math.min(x,860):x,m=Math.round(g?f*.82:f*.85),p=g?84:44;let u="";for(const[y,C]of c){const E=l[y],G=l[C];if(!E||!G)continue;const N=E.x*f,ne=Math.round(.03*m+E.y*.85*m),ie=G.x*f,Q=Math.round(.03*m+G.y*.85*m),M=d[y],w=d[C],j=Rt(M,w);j==="#ff3333"||j==="#cc2222"?u+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${j}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${j}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${j}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const v=Math.round(p*657/507);for(const y of i){const C=l[y];if(!C)continue;const E=d[y],G=C.x*f;C.y*m;const N=Math.round(.03*m+C.y*(.85*m)),ne=Math.round(G-p/2),ie=Math.round(N-v/2);if(E){const Q=y.replace(/\d+/,""),M=s&&(s.club_id&&String(E.club_id)===String(s.club_id)||s.country_code&&E.country_code===s.country_code),w=Ae({...E,_evolution_bonus:E._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:Q});b+=`<div style="position:absolute;left:${ne}px;top:${ie}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${y}">
        <div style="position:relative">${M?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${w}</div>
      </div>`}else{const Q=y.replace(/\d+/,"");b+=`<div style="position:absolute;left:${ne}px;top:${ie}px;width:${p}px;height:${v}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${y}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${Q}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${f}px;height:${m}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${f} ${m}">${u}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>xo(y.dataset.pos,t,e,n))})}function mo(e,t,i){var a;const{openModal:n,closeModal:r}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,v;const l=e.stadDefMap[s.stadium_id],c=((b=l==null?void 0:l.club)==null?void 0:b.logo_url)||null,d=l!=null&&l.image_url?"/icons/"+l.image_url:null,g=e.stadiumCardId===s.id,x=l!=null&&l.country_code&&!c?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,f=(l==null?void 0:l.name)||"Stade",m=f.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=m?m[1].trim():f.slice(0,8),u=((v=m==null?void 0:m[2])==null?void 0:v.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${g?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:x?`<img src="${x}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${g?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${g?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),yt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),yt(t,e,i)})})}function xo(e,t,i,n){var m,p,u,b,v;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(m=t.stadiumCards)==null?void 0:m.find(h=>h.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],d=c?t.playerCards.find(h=>h.id===c):null;(u=d==null?void 0:d.player)==null||u.id;const g=new Set;Object.entries(t.slots).forEach(([h,k])=>{var C;if(h===e||!k)return;const y=t.playerCards.find(E=>E.id===k);(C=y==null?void 0:y.player)!=null&&C.id&&g.add(y.player.id)}),t.subs.forEach(h=>{var y;const k=t.playerCards.find(C=>C.id===h);(y=k==null?void 0:k.player)!=null&&y.id&&g.add(k.player.id)});const x=new Set,f=t.playerCards.filter(h=>{const k=h.player;return!(k.job===a||k.job2===a)||g.has(k.id)||x.has(k.id)?!1:(x.add(k.id),!0)});f.sort((h,k)=>{const y=h.evolution_bonus||0,C=k.evolution_bonus||0,E=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?y:0);return(a==="GK"?k.player.note_g:a==="DEF"?k.player.note_d:a==="MIL"?k.player.note_m:k.player.note_a)+(a===k.player.job||a===k.player.job2?C:0)-E}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+f.map(h=>{const k={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ae(k,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(v=document.getElementById("remove-player"))==null||v.addEventListener("click",()=>{delete t.slots[e],o(),yt(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),yt(i,t,n)})})}function yo(e,t,i){var d,g,x;const{openModal:n,closeModal:r}=i,o=(d=e.stadiumCards)==null?void 0:d.find(f=>f.id===e.stadiumCardId),a=o&&((g=e.stadDefMap)==null?void 0:g[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(f=>{var u;const m=e.slots[f];if(!m)return;const p=e.playerCards.find(b=>b.id===m);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(f=>{var p;const m=e.playerCards.find(u=>u.id===f);(p=m==null?void 0:m.player)!=null&&p.id&&s.add(m.player.id)});const l=new Set,c=e.playerCards.filter(f=>{var m,p,u;return s.has((m=f.player)==null?void 0:m.id)||l.has((p=f.player)==null?void 0:p.id)?!1:(l.add((u=f.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(f=>{const m={...f.player,_evolution_bonus:f.evolution_bonus||0};return`<div class="player-option" data-card-id="${f.id}" style="cursor:pointer">
          ${Ae(m,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(f=>{f.addEventListener("click",()=>{e.subs.push(f.dataset.cardId),r(),yt(t,e,i)})})}async function bo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(l=>l.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,c],d)=>{s.push({deck_id:e.deckId,card_id:c,position:l,is_starter:!0,slot_order:d})}),e.subs.forEach((l,c)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:l}=await _.from("deck_cards").insert(s);if(l){n(l.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function en(e){const t=oi[e]||oi["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function mn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await _.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),l={};(s||[]).forEach(c=>{l[c.booster_id]=(l[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(l[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await _.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function ho(e,t){const{data:i}=await _.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await _.from("booster_claims").insert({user_id:e,booster_id:t})}function vo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const xn=()=>Object.keys(Qt),wo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],_i={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function _o(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ae({...t,_evolution_bonus:i},{width:140})}function yn(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function ko(e,{state:t,navigate:i,toast:n}){var g,x,f;const r=((g=t.profile)==null?void 0:g.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await mn((x=t.user)==null?void 0:x.id)).map(yn)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}o.length||(o=wo.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await _.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(m=>m.data||[]),s=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),c=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),d={};for(const m of o){if(m.allow_duplicates!==!1||!((f=m.rates)!=null&&f.length))continue;const p=[...new Set((m.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:v}=await _.from("stadium_definitions").select("id");if((v||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(b==="game_changer"){const{data:v}=await _.from("gc_definitions").select("name").eq("is_active",!0);if((v||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:v}=await an(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-yJiMLlPw.js").then(k=>k.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(v).some(h=>!l.has(h))){u=!0;break}}else{u=!0;break}u||(d[m.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(m=>{const p=m.cost===0||r>=m.cost,u=d[m.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${m.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const p=o.find(u=>u.id===m.dataset.booster);if(p){m.style.opacity="0.5",m.style.pointerEvents="none";try{await $o(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",p=>{p.stopPropagation();const u=o.find(b=>b.id===m.dataset.boosterId);zo(u)})})}async function $o(e,{state:t,toast:i,navigate:n,container:r}){var g,x;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await So();const{data:o}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),s=new Set((o||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let l=[],c=null;try{if((g=e.rates)!=null&&g.length)l=await ki(t.profile,e);else{const f=e.type||"player";f==="player"?l=await bn(t.profile,e.cardCount,e.cost):f==="game_changer"?l=await hn(t.profile,e.cardCount,e.cost):f==="formation"?l=await vn(t.profile,e.cost):l=await ki(t.profile,e)}}catch(f){c=f.message||String(f),console.error("[Booster] Erreur:",f)}if(l!=null&&l.length&&e._boosterId&&await ho(t.user.id,e._boosterId),!(l!=null&&l.length)){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",f.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(f),(x=f.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>f.remove());return}l.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=a.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=s.has(f.formation))});const{data:d}=await _.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),wn(l,e,n)}function Eo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function pt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Lo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>pt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>pt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&pt(n)>=6),i.length||(i=e.filter(n=>pt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&pt(n)>=1&&pt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ki(e,t){if(t.cost>0){const{error:x}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(x)throw x}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await _.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:x}=await _.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=x||[]}else n=r||[];const a=new Set(n.filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set(n.filter(x=>x.card_type==="formation").map(x=>x.formation)),l=new Set(n.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),c=new Set(n.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id).filter(Boolean)),d=new Set,g=[];for(let x=0;x<(t.cardCount||5);x++){const f=vo(t.rates);if(f){if(f.card_type==="player"){const m=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=f.rarity?m(f.rarity):null;let u=_.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let v=b||[];if((f.note_min||f.note_max)&&(v=v.filter(E=>{const G=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!f.note_min||G>=f.note_min)&&(!f.note_max||G<=f.note_max)})),v.length||(f.note_min||f.note_max?(v=b||[],console.warn("[Booster] Aucun joueur avec note",f.note_min,"-",f.note_max,"— fallback rareté uniquement")):v=b||[]),!v.length)continue;let h=v.filter(E=>!d.has(E.id));if(i)h.length||(h=v);else if(h=h.filter(E=>!a.has(E.id)),!h.length)continue;const k=h[Math.floor(Math.random()*h.length)];d.add(k.id);const y=a.has(k.id),{data:C}=await _.from("cards").insert({owner_id:e.id,player_id:k.id,card_type:"player"}).select().single();C&&(g.push({...C,player:k,isDuplicate:y}),_.rpc("record_transfer",{p_card_id:C.id,p_player_id:k.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(f.card_type==="game_changer"){const{data:m}=await _.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(k=>!l.has(k.name));if(!i&&!u.length)continue;const v=u[Math.floor(Math.random()*u.length)].name,{data:h}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();h&&g.push(h)}else if(f.card_type==="formation"){const m=xn(),p=i?m:m.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:v}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();v!=null&&v[0]&&g.push({...v[0],isDuplicate:b})}else if(f.card_type==="stadium"){const{data:m,error:p}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?m:m.filter(k=>!c.has(k.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:v,error:h}=await _.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}v&&g.push({...v,rarity:"normal",_stadiumDef:b})}}}return g}async function bn(e,t,i){if(i>0){const{error:c}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await _.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const d=c===0&&a?r:c===0?o:n,g=Eo(),x=Lo(d,g);x&&s.push(x)}a&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await _.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(l||[]).forEach((c,d)=>{_.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,d)=>({...l[d],player:c}))}async function hn(e,t,i){const{error:n}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await _.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(_i).map(d=>({name:d,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const d=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:l}=await _.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(d=>{const g=r==null?void 0:r.find(x=>x.name===d.gc_type||x.id===d.gc_definition_id);return{...d,_gcDef:g||null}})}async function vn(e,t){const{error:i}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await _.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(d=>d.formation)),o=xn(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:l,error:c}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(l||[]).map(d=>({...d,isDuplicate:s}))}function wn(e,t,i,n=null){var Q,M;if(!e||e.length===0){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",w.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(w),(Q=w.querySelector("#anim-close-err"))==null||Q.addEventListener("click",()=>w.remove());return}e=[...e].sort((w,j)=>{const U=w.player?pt(w.player):-1;return(j.player?pt(j.player):-1)-U});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let l=!1;const c=w=>w.touches&&w.touches[0]?w.touches[0].clientX:w.clientX;function d(w){o||(l=!0,s.style.opacity="1",g(w))}function g(w){if(!l||o)return;const j=a.getBoundingClientRect(),U=c(w)-j.left,re=Math.max(0,Math.min(1,U/j.width));s.style.width=re*j.width+"px",re>=.82&&f()}function x(){o||(l=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function f(){var j;if(o)return;o=!0,l=!1,s.style.width="100%",s.style.opacity="1",(j=document.getElementById("cut-flash"))==null||j.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const w=document.getElementById("cut-hint");w&&(w.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",d),window.addEventListener("pointermove",g),window.addEventListener("pointerup",x),a.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",x);let m=0,p=!1;const u=new Set;function b(w){m=w,document.getElementById("reveal-phase").style.display="flex",v(),h(w,0),G()}function v(){const w=document.getElementById("card-dots");w&&(w.innerHTML=e.map((j,U)=>`<div class="card-dot" data-i="${U}" style="width:8px;height:8px;border-radius:50%;background:${U===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),w.querySelectorAll(".card-dot").forEach(j=>j.addEventListener("click",()=>y(parseInt(j.dataset.i)))))}function h(w,j){var R,S;const U=e[w],re=document.getElementById("card-counter"),ae=document.getElementById("card-track");re&&(re.textContent=`Carte ${w+1} / ${e.length}`);const se=document.getElementById("reveal-btns");se&&(se.style.display=w===e.length-1?"flex":"none");const de=U.card_type==="player"&&((R=U.player)==null?void 0:R.rarity)==="legende",$e=!u.has(w);u.add(w);let W=0;if(U.card_type==="player"&&U.player){const q=U.player,P=q.job||"ATT";W=Number(P==="GK"?q.note_g:P==="DEF"?q.note_d:P==="MIL"?q.note_m:q.note_a)||0}const J=q=>{ae.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${de?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${To(U)}</div>
          ${U.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");j!==0?(P.style.transition="none",P.style.transform=`translateX(${j>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),q||de?ne():ie(),v()};$e&&(((S=U.player)==null?void 0:S.rarity)==="legende"||W>=8)&&U.card_type==="player"&&U.player?k(U,()=>J(!0)):J(!1)}function k(w,j){var be;p=!0;const U=w.player,re=`https://flagsapi.com/${U.country_code}/flat/64.png`,ae=(be=U.clubs)==null?void 0:be.logo_url,se=U.face?"/"+U.face.replace(/^public\//,"").replace(/^\//,""):null,de=U.job||"ATT",$e=Number(de==="GK"?U.note_g:de==="DEF"?U.note_d:de==="MIL"?U.note_m:U.note_a)||0,W=w.evolution_bonus||0,J=$e+W,R=U.rarity==="legende",S=J>=18,q=document.getElementById("walkout-overlay"),P=document.getElementById("walkout-stage");if(!q||!P){p=!1,j();return}let X=null;R&&(X=new Audio("/sounds/Legendary.mp3"),X.volume=.8,X.play().catch(()=>{})),q.style.display="flex";const V=()=>{const he=P.firstElementChild;he&&(he.classList.remove("wo-in"),he.classList.add("wo-out"))},D=1800,O=400;P.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(V,D),setTimeout(()=>{var he;P.innerHTML=ae?`<img class="wo-in" src="${ae}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((he=U.clubs)==null?void 0:he.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},D+O),setTimeout(V,D*2+O),setTimeout(()=>{P.innerHTML=se?`<img class="wo-in" src="${se}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(D+O)*2),setTimeout(V,(D+O)*2+D);const ke=S?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[de]||"#fff";setTimeout(()=>{P.innerHTML=`<div class="wo-in" style="
        font-size:${S?"120px":"90px"};font-weight:900;color:${ke};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ke}, 0 0 60px ${ke};
        ${S?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${J}
      </div>`,S&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(D+O)*3),setTimeout(V,(D+O)*3+D),setTimeout(()=>{q.style.display="none",P.innerHTML="",p=!1,X&&!R&&X.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),j()},(D+O)*4)}function y(w){if(p||w<0||w>=e.length||w===m)return;const j=w>m?1:-1;m=w,h(w,j)}function C(){y(m+1)}function E(){y(m-1)}function G(){const w=document.getElementById("card-viewport");if(!w||w._swipeBound)return;w._swipeBound=!0;let j=0,U=0,re=0,ae=!1;const se=R=>R.touches?R.touches[0].clientX:R.clientX,de=R=>R.touches?R.touches[0].clientY:R.clientY,$e=R=>{ae=!0,j=se(R),U=de(R),re=0},W=R=>{if(!ae)return;re=se(R)-j;const S=de(R)-U;if(Math.abs(re)<Math.abs(S))return;const q=document.getElementById("current-card-wrap");q&&(q.style.transition="none",q.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},J=()=>{if(!ae)return;ae=!1;const R=document.getElementById("current-card-wrap"),S=55;re<=-S&&m<e.length-1?C():re>=S&&m>0?E():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};w.addEventListener("pointerdown",$e),w.addEventListener("pointermove",W),w.addEventListener("pointerup",J),w.addEventListener("pointercancel",J),w.addEventListener("touchstart",$e,{passive:!0}),w.addEventListener("touchmove",W,{passive:!0}),w.addEventListener("touchend",J),w.addEventListener("click",R=>{if(Math.abs(re)>8)return;const S=w.getBoundingClientRect();R.clientX-S.left>S.width/2?C():E()})}let N=null;function ne(){const w=document.getElementById("fireworks-canvas");if(!w)return;w.width=window.innerWidth,w.height=window.innerHeight;const j=w.getContext("2d"),U=[];function re(){const se=Math.random()*w.width,de=Math.random()*w.height*.6,$e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],W=$e[Math.floor(Math.random()*$e.length)];for(let J=0;J<60;J++){const R=Math.PI*2/60*J,S=2+Math.random()*5;U.push({x:se,y:de,vx:Math.cos(R)*S,vy:Math.sin(R)*S,alpha:1,color:W,size:2+Math.random()*3})}}re(),N=setInterval(re,600);function ae(){if(document.getElementById("fireworks-canvas")){j.clearRect(0,0,w.width,w.height);for(let se=U.length-1;se>=0;se--){const de=U[se];if(de.x+=de.vx,de.y+=de.vy+.08,de.vy*=.98,de.alpha-=.018,de.alpha<=0){U.splice(se,1);continue}j.globalAlpha=de.alpha,j.fillStyle=de.color,j.beginPath(),j.arc(de.x,de.y,de.size,0,Math.PI*2),j.fill()}j.globalAlpha=1,(N!==null||U.length>0)&&requestAnimationFrame(ae)}}ae()}function ie(){N!==null&&(clearInterval(N),N=null);const w=document.getElementById("fireworks-canvas");w&&w.getContext("2d").clearRect(0,0,w.width,w.height)}if(n){const w=document.getElementById("reveal-btns");w&&(w.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(M=document.getElementById("reveal-next"))==null||M.addEventListener("click",()=>{ie(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ie(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ie(),r.remove(),i("boosters")})}function To(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return _o(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,d=l[o==null?void 0:o.color]||l.purple,g=(o==null?void 0:o.name)||e.gc_type||"Game Changer",x=(o==null?void 0:o.effect)||((t=_i[e.gc_type])==null?void 0:t.desc)||"",f=o!=null&&o.image_url?`/icons/${o.image_url}`:null,m=((i=_i[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${g.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${x.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const o=e._stadiumDef,a=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",l=o!=null&&o.image_url?`/icons/${o.image_url}`:((r=o==null?void 0:o.club)==null?void 0:r.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${a.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${a}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${l?`<img src="${l}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function zo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${r[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Io()}function Io(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function So(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Ao(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var x,f;const{data:o}=await _.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((x=t.profile)==null?void 0:x.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await _.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await mn()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=yn(p))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const l=a.length;let c=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await _.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function g(){var v;if(c>=l||!a.length){await _.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=a[0],{data:p}=await _.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(m.type==="formation")u=await vn(t.profile,0);else if(m.type==="game_changer")u=await hn(t.profile,m.count||3,0);else if(s&&((v=s.rates)!=null&&v.length)){const h={...s,cost:0,cardCount:m.count||s.cardCount||5};u=await ki(t.profile,h),m.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(y=>y.player&&y.player.job==="GK")||await Mo(t.profile,u),await _.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await bn(t.profile,m.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),c++,await d();const b=m.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${l})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};wn(u,b,i,()=>{g()})}(f=document.getElementById("onboard-start"))==null||f.addEventListener("click",()=>g())}async function Mo(e,t){try{const{data:i}=await _.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await _.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},jo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Lt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function Xt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",r=e.face.replace(/^public\//,"").replace(/^\//,"");return n+r}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function $i(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Jt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function ri(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function ut(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function _n(){const e=Math.random()*100;return e<10?10:e<30?5:3}function ai(e,t){const i=Pt[t]||Pt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,d)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),l=ut(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let d=o.findIndex(g=>g.job===a);if(d===-1&&(d=o.findIndex(g=>g.job2===a)),d===-1&&(d=0),o[d]){const g={...o[d],_line:a};s.push(g),o.splice(d,1)}}const l=ut(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}function ot(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Xe(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ci(e,t,i){const r=new Set,o=t.filter(d=>{const g=d.gc_type||d.id;return r.has(g)?!1:(r.add(g),!0)});let a=[];function s(d,g){const x=d._gcDef,f={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},m={purple:"#9b59b6",light_blue:"#00bcd4"},p=f[x==null?void 0:x.color]||f.purple,u=m[x==null?void 0:x.color]||m.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":u};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((x==null?void 0:x.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(x==null?void 0:x.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${x!=null&&x.image_url?`<img src="/icons/${x.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((x==null?void 0:x.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function c(){var g,x,f;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=a.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${a.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${o.map(m=>{const p=a.find(u=>u.gc_type===m.gc_type);return s(m,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${d?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${d?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${d?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${d?"pointer":"default"};box-shadow:${d?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${a.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${a.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${a.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${a.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(m=>{m.addEventListener("click",()=>{const p=m.dataset.id,u=o.find(v=>v.id===p);if(!u)return;const b=a.findIndex(v=>v.gc_type===u.gc_type);b>-1?a.splice(b,1):a.length<3&&a.push(u),c()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{d&&l(a)}),(x=e.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>l([])),(f=e.querySelector("#gc-reset"))==null||f.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function Co(e,t){var r;const i=((r=t==null?void 0:t.state)==null?void 0:r.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function Bo(e,t,i){const{state:n,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){Lt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(x=>x.id),{data:s}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),l=[...new Set((s||[]).filter(x=>{var f,m;return((f=x.card)==null?void 0:f.card_type)==="stadium"&&((m=x.card)==null?void 0:m.stadium_id)}).map(x=>x.card.stadium_id))],c={};if(l.length){const{data:x}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(x||[]).forEach(f=>{c[f.id]=f}),(s||[]).forEach(f=>{var m,p;((m=f.card)==null?void 0:m.card_type)==="stadium"&&((p=f.card)!=null&&p.stadium_id)&&(f.card._stadiumDef=c[f.card.stadium_id]||null)})}let d=0;function g(){var y,C,E,G,N,ne,ie;const x=o[d],f=(s||[]).filter(Q=>Q.deck_id===x.id),m=f.filter(Q=>{var M;return Q.is_starter&&((M=Q.card)==null?void 0:M.player)}).map(Q=>$i(Q.card,Q.position)),p=f.find(Q=>{var M;return((M=Q.card)==null?void 0:M.card_type)==="formation"}),u=x.formation||((y=p==null?void 0:p.card)==null?void 0:y.formation)||"4-4-2";let b=m.length>=11?ai(m,u):null,v=((C=x.stadium_card)==null?void 0:C.stadium_def)||null;v&&b&&(b=Jt(b,v));const h=m.length>=11;ot(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Co(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${x.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${m.length}/11${x.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===o.length-1?"0.1":"0.3"});color:${d===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${v?`
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
          <span style="font-size:12px;font-weight:700">${v.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((E=v.club)==null?void 0:E.encoded_name)||v.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${m.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((Q,M)=>`<div style="width:6px;height:6px;border-radius:50%;background:${M===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Q(){const M=e.querySelector(".deck-preview-wrap"),w=e.querySelector("#deck-swipe-zone");if(!M||!w||!b)return;const j=w.clientWidth>=900,U=Math.max(200,w.clientHeight-(j?60:40)),ae=Math.max(200,w.clientWidth-16),se=j?Math.min(117,Math.max(52,Math.round(ae*.22))):Math.max(44,Math.round(ae*.168));if(U<220||ae<220){requestAnimationFrame(Q);return}const de=j?null:Math.round(se*.55);M.innerHTML=Gt(b,u,null,[],ae,U,[],de),M.style.cssText=`width:${ae}px;height:${U}px;overflow:hidden;margin:${j?0:60}px auto 0`;const $e=M.querySelector("svg");$e&&($e.style.cssText="display:block;width:100%;height:100%",$e.setAttribute("preserveAspectRatio",j?"xMidYMid meet":"none"))})),(G=document.getElementById("prev-deck"))==null||G.addEventListener("click",()=>{d>0&&(d--,g())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{d<o.length-1&&(d++,g())}),(ne=document.getElementById("validate-deck"))==null||ne.addEventListener("click",()=>{if(!h)return;const Q=t.state.params||{};t.navigate("match",{...Q,matchMode:Q.matchMode||i,deckId:x.id})}),(ie=document.getElementById("cancel-deck-select"))==null||ie.addEventListener("click",()=>{Xe(e),r("home")});const k=document.getElementById("deck-swipe-zone");if(k){let Q=0,M=0;k.addEventListener("touchstart",w=>{Q=w.touches[0].clientX,M=w.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",w=>{const j=w.changedTouches[0].clientX-Q,U=w.changedTouches[0].clientY-M;Math.abs(j)<40||Math.abs(j)<Math.abs(U)||(j<0&&d<o.length-1?(d++,g()):j>0&&d>0&&(d--,g()))},{passive:!0})}}g()}function xt(e,t=44,i=58,n=null){return Ae(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function We(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,l)=>{const c=s._line||s.job||"MIL";let d=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?d+=10:n||(d+=10)),a+=Ae(s,{width:40,role:c,extraNote:d}),l<o.length-1){const g=o[l+1],x=pn(s,g,r)?Rt(s,g):null;a+=`<div style="width:7px;height:3px;background:${!x||x==="#ff3333"||x==="#cc2222"?"rgba(255,255,255,0.12)":x};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function pi(e,t,i,n,r=310,o=310,a=[],s=null){const l=Qt[t]||{},c=Si(t)||Ai[t]||[],d={},g=["ATT","MIL","DEF","GK"];for(const b of g)(e[b]||[]).forEach((h,k)=>{d[`${b}${k+1}`]=h});function x(b){const v=l[b];return v?{x:v.x*r,y:v.y*o}:null}let f="";for(const[b,v]of c){const h=x(b),k=x(v);if(!h||!k)continue;const y=d[b],C=d[v],E=Rt(y,C);E==="#00ff88"||E==="#FFD700"?(f+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${k.x.toFixed(1)}" y2="${k.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(m*657/507);for(const[b,v]of Object.entries(d)){const h=x(b);if(!h||!v)continue;const k=b.replace(/[0-9]/g,""),y=a.includes(v.cardId),C=i==="attack"&&(["MIL","ATT"].includes(k)||y)&&!v.used||i==="defense"&&["GK","DEF","MIL"].includes(k)&&!v.used,E=n.includes(v.cardId);let G=v.boost||0,N=!1;v.stadiumBonus&&(i==="attack"&&(k==="ATT"||k==="MIL")||i==="defense"&&(k==="GK"||k==="DEF"||k==="MIL")?(G+=10,N=!0):i||(G+=10,N=!0));const ne=Math.round(h.x-m/2),ie=Math.round(h.y-p/2);if(v.used){f+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ne}" y="${ie}" width="${m}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${v.cardId}" data-role="${k}" style="cursor:pointer"/>`;continue}const Q=Ae({...v,_evolution_bonus:0,stadiumBonus:!1},{width:m,showStad:!1,stadDef:null,role:k,extraNote:G,_cardOffset:30,_forceStadColor:N}),M=E?`position:absolute;top:30px;left:0;width:${m}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";f+=`<foreignObject x="${ne-2}" y="${ie-30}" width="${m+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Q}
        ${E?`<div style="${M}"></div>`:""}
      </div>
    </foreignObject>`,C&&(f+=`<rect x="${ne}" y="${ie}" width="${m}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${v.cardId}" data-role="${k}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(m*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${f}
  </svg>`}function Gt(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${pi(e,t,i,n,r,o,a,s)}
  </div>`}async function ui(e,t,i,n){var C;const{state:r,navigate:o,toast:a}=t;ot(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Bo(e,t,i);const l=s.deckId;let c,d,g,x;try{const E=await Promise.all([_.from("decks").select("formation,name,stadium_card_id").eq("id",l).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);c=E[0].data,g=E[0].error,d=E[1].data,x=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),Lt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(g||x){console.error("[Match] Erreur Supabase:",g||x),Lt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const f=(d||[]).filter(E=>{var G;return E.is_starter&&((G=E.card)==null?void 0:G.player)}).map(E=>$i(E.card,E.position)),m=(d||[]).filter(E=>{var G;return!E.is_starter&&((G=E.card)==null?void 0:G.player)}).map(E=>$i(E.card,E.position));if(f.length<11){Lt(e,"⚠️",`Deck incomplet (${f.length}/11).`,"Compléter",()=>o("decks"));return}const p=(d||[]).find(E=>{var G;return((G=E.card)==null?void 0:G.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((C=p==null?void 0:p.card)==null?void 0:C.formation)||"4-4-2",{data:b,error:v}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await _.from("gc_definitions").select("*").eq("is_active",!0),k=(b||[]).map(E=>({...E,_gcDef:(h==null?void 0:h.find(G=>G.name===E.gc_type||G.id===E.gc_definition_id))||null}));let y=null;if(c!=null&&c.stadium_card_id){const{data:E}=await _.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:G}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();y=G||null}}n({deckId:l,formation:u,starters:f,subsRaw:m,gcCardsEnriched:k,gcDefs:h||[],stadiumDef:y})}function Tt(){return Math.min(window.innerWidth-40,860)}function Dt(){return Math.round(Tt()*1.1)}function kn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Xt(e)}}function qo(e,t,i,n="Adversaire"){const r=Tt(),o=Dt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${pi(e,t,null,[],r,o)}
      </div>
    </div>`}function $n(e){var o,a,s;if(!e)return"";const t=l=>l?Ae({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((o=e.type)==null?void 0:o.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${n} ${e.title||e.text||""}</div>
      ${(a=e.homePlayers)!=null&&a.length||(s=e.aiPlayers)!=null&&s.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(e.homePlayers||[]).map(t).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(e.aiPlayers||[]).map(t).join("")}
          </div>
        </div>`:""}
      ${e.text&&e.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${e.text}</div>`:""}
    </div>`}function rt(e,t,i,n,r){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(l=>Ae({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const l=document.createElement("style");l.id="goal-anim-style",l.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function Do(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=e?Ae({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Ae({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";r.innerHTML=`
    <div style="text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🔄</div>
      <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:16px">Remplacement</div>
      <div style="display:flex;align-items:center;gap:16px;justify-content:center">
        <div style="text-align:center">
          ${a}
          <div style="font-size:10px;color:#e03030;margin-top:4px">SORT ▼</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.4)">→</div>
        <div style="text-align:center">
          ${s}
          <div style="font-size:10px;color:#22c55e;margin-top:4px">ENTRE ▲</div>
        </div>
      </div>
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function kt(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function En(e,t){const i=Re(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function ft(e,t){return e.reduce((i,n)=>i+En(n,t),0)}function gt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Rt(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function si(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Rt(o,e[a+1]):null,l=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return En(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ae({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${ft(e,r)} + ${gt(e)} liens = <b style="color:#fff">${ft(e,r)+gt(e)}</b>
      </div>
    </div>`}async function Fo(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await ui(e,t,r,async({deckId:s,formation:l,starters:c,subsRaw:d,gcCardsEnriched:g,gcDefs:x,stadiumDef:f})=>{try{let m=ai(c,l);f&&(m=Jt(m,f),ri(d,f));const p=await Po(l,o),u=p.lines||p,b=async v=>{try{const h=a==="vs_ai_club"?"club":a,{data:k,error:y}=await _.from("matches").insert({home_id:i.profile.id,away_id:null,mode:h,home_deck_id:s,status:"in_progress"}).select().single();if(y){console.error("[MatchIA] Erreur création match:",y),Lt(e,"⚠️","Impossible de créer le match ("+y.message+").","Retour",()=>t.navigate("home"));return}const C=p.stadiumDef||null;C&&u&&(Jt(u,C),ri(p.subs||[],C));const E={gcDefs:x||[],matchId:k==null?void 0:k.id,mode:a,difficulty:o,formation:l,homeTeam:m,aiTeam:u,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Ro(e,E,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),Lt(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!g.length){b([]);return}ci(e,g,b)}catch(m){console.error("[MatchIA] Exception setup:",m),Lt(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function Po(e,t){var u;const{data:i}=await _.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Go(e),subs:[],gcCards:[],stadiumDef:null};const n=Pt[e]||Pt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(b,v,h){var k,y;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:((k=b.clubs)==null?void 0:k.encoded_name)||null,clubLogo:((y=b.clubs)==null?void 0:y.logo_url)||null,boost:0,used:!1,_line:v}}for(const b of["GK","DEF","MIL","ATT"]){const v=i.filter(E=>E.job===b&&!o.has(E.id)),h=i.filter(E=>E.job!==b&&!o.has(E.id)),k=[...v,...h],y=[];for(let E=0;E<n[b];E++){const G=k[E];G&&y.push(a(G,b,E))}const C=ut(y.length);y.forEach((E,G)=>{E._col=C[G]}),r[b]=y}const l=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,v)=>a(b,b.job,100+v)),g=Object.keys(je).sort(()=>Math.random()-.5).slice(0,3).map((b,v)=>{var h,k;return{id:"ai-gc-"+v,gc_type:b,name:((h=je[b])==null?void 0:h.name)||b,icon:((k=je[b])==null?void 0:k.icon)||"⚡"}}),x=Object.values(r).flat(),f={};x.forEach(b=>{b.club_id&&(f[b.club_id]=(f[b.club_id]||0)+1)});const m=(u=Object.entries(f).sort((b,v)=>v[1]-b[1])[0])==null?void 0:u[0];let p=null;if(m){const{data:b}=await _.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:r,subs:l,gcCards:g,stadiumDef:p}}function Go(e){const t=Pt[e]||Pt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[o];l++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=ut(a.length);a.forEach((l,c)=>{l._col=s[c]}),i[o]=a}return i}function Ro(e,t,i){var r;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;width:22px;height:22px;display:block">
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
  </div>`;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">
    <div style="flex-shrink:0;padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center">
      <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    </div>
    ${t.aiStadiumDef?`
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${n}
      <span style="font-size:12px;font-weight:700">${t.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((r=t.aiStadiumDef.club)==null?void 0:r.encoded_name)||t.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),d=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Gt(t.aiTeam,t.formation,null,[],c,l,[],d),o.style.cssText=`width:${c}px;height:${l}px;overflow:hidden;flex-shrink:0`;const g=o.querySelector("svg");g&&(g.style.cssText="display:block;width:100%;height:100%",g.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>No(e,t,i),5e3)}const Ye=e=>kn(e);function No(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=ft(n,o)+gt(n),l=ft(r,a)+gt(r),c=s>=l;e.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:clamp(6px,1.5vh,20px);padding:clamp(8px,1.5vw,24px);background:#0a3d1e">
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

    ${si(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${si(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const m=(p,u)=>e.querySelectorAll(p).forEach((b,v)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+v*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{g("score-home",s,800),g("score-ai",l,800)},1500)};function g(m,p,u){const b=document.getElementById(m);if(!b)return;const v=performance.now(),h=k=>{const y=Math.min(1,(k-v)/u);b.textContent=Math.round(p*(1-Math.pow(1-y,3))),y<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(d),t.attacker=c?"home":"ai";const x=c?_n():null;c&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(m=>Ye(m)),aiPlayers:r.map(m=>Ye(m)),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const f=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Le(e,t,i),t.attacker==="ai"&&setTimeout(()=>Di(e,t,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),v=c?m:p,h=c?p:m;v&&(v.style.fontSize="80px",v.style.color=c?"#FFD700":"#ff6b6b",v.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var y;const k=document.getElementById("duel-shock");if(k){const C=(y=b||u)==null?void 0:y.getBoundingClientRect(),E=e.querySelector(".match-screen").getBoundingClientRect();C&&(k.style.top=C.top-E.top+C.height/2+"px"),k.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var y;const k=document.getElementById("duel-finale");k&&(k.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,k.style.transition="opacity .45s ease",k.style.opacity="1",k.style.pointerEvents="auto",(y=document.getElementById("start-match-btn"))==null||y.addEventListener("click",f))},600)},700)},2800)}function Le(e,t,i){var y,C,E,G,N,ne,ie,Q,M;const n=t.selected.map(w=>w.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(w=>!r.includes(w.cardId)),s=Object.values(t.homeTeam).flat().filter(w=>w.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(w=>!w.used),c=t.phase==="attack"&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(w=>!w.used).map(w=>w.cardId):[];t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",g=t.phase==="attack",x=t.phase==="defense",f=t.phase==="finished",p=(t.homeSubs||[]).filter(w=>!(t.usedSubIds||[]).includes(w.cardId)).length>0&&t.subsUsed<t.maxSubs,u=g&&l.length===0&&c.length===0&&!p,b=t.gcCards.filter(w=>!t.usedGc.includes(w.id)),v=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const j=t.pendingAttack;let U="";if(t.selected.length>0){const re=t.selected.map(se=>({...(t.homeTeam[se._role]||[]).find($e=>$e.cardId===se.cardId)||se,_line:se._role})),ae=Wt(re,t.modifiers.home,t.formation);U=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${We(re.map(se=>({...se,used:!1})),"#3a7bd5",ae.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${We((j.players||[]).map(re=>({...re,used:!1})),"#ff6b6b",j.total,"attack",t.formation)}</div>
            ${U}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const j=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${We((j.players||[]).map(U=>({...U,used:!1})),"#00ff88",j.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const j=t.selected.map(re=>{const ae=(t.homeTeam[re._role]||[]).find(de=>de.cardId===re.cardId)||re,se=["GK","DEF"].includes(re._role);return{...ae,_line:re._role,...se?{note_a:Math.max(1,Number(ae.note_a)||0)}:{}}}),U=Yt(j,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${We(j.map(re=>({...re,used:!1})),"#FFD700",U.total,"attack",t.formation)}</div>
          </div>`}const w=t.log[t.log.length-1];return w?'<div style="padding:2px 4px">'+$n(w)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const w=window.innerWidth>=700,j=(R,S,q)=>{var ge,qe;const P=(t.gcDefs||[]).find(Ce=>Ce.name===R.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[P==null?void 0:P.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",V={purple:"#b06ce0",light_blue:"#00d4ef"}[P==null?void 0:P.color]||"#b06ce0",D=(P==null?void 0:P.name)||R.gc_type,O=(P==null?void 0:P.effect)||((ge=je[R.gc_type])==null?void 0:ge.desc)||"",_e=P!=null&&P.image_url?`/icons/${P.image_url}`:null,ke=((qe=je[R.gc_type])==null?void 0:qe.icon)||"⚡",be=Math.round(q*.22),he=Math.round(q*.22),Ee=q-be-he,Te=D.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${S}px;height:${q}px;border-radius:10px;border:2px solid ${V};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${be}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Te}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${S-6}px">${D}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ee}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${S-10}px;max-height:${Ee-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ee*.55)}px">${ke}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${O.slice(0,38)}</span>
          </div>
        </div>`},U=(R,S)=>{var q;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${S}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(S*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(S*.2)}px">⚡</div>
            <div style="font-size:${Math.round(S*.09)}px;color:#000;font-weight:900">+${(q=t.boostCard)==null?void 0:q.value}</div>
          </div>`},re=(R,S)=>S?U(130,175):j(R,130,175),ae=(R,S)=>S?U(68,95):j(R,68,95),se=w?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",de=f?`<button id="btn-results" style="${se};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${se};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:u?`<button id="btn-pass" style="${se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:g?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${se};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,$e=g||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",W=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${w?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${xt(R,76,100)}</div>`).join("")}
      </div>`,J=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Gt(t.homeTeam,t.formation,t.phase,n,w?1300:Tt(),w?600:Dt(),c)}
        </div>
      </div>`;return w?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${W}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${J}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${de}${$e}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${b.map(R=>re(R,!1)).join("")}
            ${v?re(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Gt(t.homeTeam,t.formation,t.phase,n,w?1300:Tt(),w?600:Dt(),c)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${b.map(R=>ae(R,!1)).join("")}
            ${v?ae(null,!0):""}
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
          <div>${de}${$e}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(w=>{var j,U,re;if(w.type==="duel"){const ae=w.isGoal,se=w.homeScored?"#FFD700":ae?"#ff6b6b":"rgba(255,255,255,0.3)",de=w.homeScored?"⚽ BUT !":ae?"⚽ BUT IA !":(j=w.homePlayers)!=null&&j.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ae?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${se};margin-bottom:4px">
                <div style="font-size:9px;color:${se};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${de}</div>
                ${(U=w.homePlayers)!=null&&U.length?`<div style="margin-bottom:3px">${We(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal,void 0,t.formation)}</div>`:""}
                ${(re=w.aiPlayers)!=null&&re.length?`<div style="opacity:0.7">${We(w.aiPlayers,"#ff6b6b",w.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${w.outPlayer?xt({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${w.inPlayer?xt({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:w.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${w.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${w.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function h(){const w=e.querySelector(".match-screen");if(!w)return;const j=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);w.style.bottom="auto",w.style.height=j+"px",w.style.minHeight=j+"px",w.style.maxHeight=j+"px",w.style.overflow="hidden";const U=e.querySelector("#mobile-action-bar"),re=e.querySelector("#mobile-play-area");U&&re&&(re.style.paddingBottom=U.offsetHeight+"px")}if(h(),setTimeout(h,120),setTimeout(h,400),setTimeout(h,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",h),window.visualViewport.addEventListener("scroll",h)),window.addEventListener("resize",h)),function(){const j=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!j)return;const U=j.closest("#match-terrain-wrap");U&&(U.style.cssText="position:relative;width:100%;height:100%;padding:0"),j.removeAttribute("width"),j.removeAttribute("height"),j.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",j.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const w=e.querySelector(".terrain-wrapper svg");if(w){const j=w.closest("#match-terrain-wrap");j&&(j.style.cssText="position:relative;width:100%;height:100%;padding:0"),w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let w=!1,j=30;const U=()=>document.getElementById("match-timer"),re=()=>{const ae=U();if(!ae)return;const se=String(Math.floor(j/60)).padStart(2,"0"),de=String(j%60).padStart(2,"0");ae.textContent=` ${se}:${de}`,ae.style.color=w?"#ff2222":"#ff9500",ae.style.fontWeight="900"};re(),t._timerInt=setInterval(()=>{if(j--,j<0)if(!w)w=!0,j=15,re();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ae=document.createElement("div");ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ae.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ae),setTimeout(()=>{ae.remove(),Ft(e,t,i)},2500)}else re()},1e3)}(y=document.getElementById("match-quit"))==null||y.addEventListener("click",()=>{Xe(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ft(e,t,i))}),(C=document.getElementById("view-ai"))==null||C.addEventListener("click",()=>Zo(t,i)),(E=document.getElementById("toggle-history"))==null||E.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.add("open")}),(G=document.getElementById("close-history"))==null||G.addEventListener("click",()=>{var w;(w=document.getElementById("match-history-panel"))==null||w.classList.remove("open")}),(N=document.getElementById("btn-action"))==null||N.addEventListener("click",()=>{t.selected.length!==0&&(g?Ho(e,t,i):x&&Uo(e,t,i))}),(ne=document.getElementById("btn-results"))==null||ne.addEventListener("click",()=>Ft(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Le(e,t,i),setTimeout(()=>Di(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(w=>{w.addEventListener("click",()=>Oo(w,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(w=>{w.addEventListener("click",()=>hi(e,t,i,null,w.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(w=>{g?w.addEventListener("click",()=>Wo(w.dataset.gcId,w.dataset.gcType,e,t,i)):(w.style.opacity="0.35",w.style.cursor="default",w.addEventListener("click",()=>kt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Q=document.getElementById("boost-card"))==null||Q.addEventListener("click",()=>Qo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(w=>{w.addEventListener("click",()=>hi(e,t,i,w.dataset.subId))}),(M=document.getElementById("sub-btn-main"))==null||M.addEventListener("click",()=>hi(e,t,i))}function Oo(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(l=>l.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}Le(i,t,n)}function qi(e,t,i){e.matchId&&_.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ho(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),qi(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(l=>l.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=Yt(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Le(e,t,i),setTimeout(()=>Yo(e,t,i),1200)}function Uo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),qi(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(g=>g.cardId===l.cardId)||l,d=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:l._role,stadiumBonus:d}}),o=Wt(r,t.modifiers.home,t.formation);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);c&&(c.used=!0)});const a=Bi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>Ye(l)),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return Ye(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Le(e,t,i),rt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function Ko(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(l=>l.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(l=>!e.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(l=>l.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(l=>l.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Vo(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),je[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Di(e,t,i){qi(t,i,null),Ko(t),Vo(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used),r=!1;n.length||(n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[]].filter(d=>!d.used),r=!0);const o=fn(n,"attack",t.difficulty);if(!o.length){Li(e,t,i);return}r&&o.forEach(d=>{d._line=d._line||d.job,d.note_a=Math.max(1,Number(d.note_a)||0)});const a=Yt(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ei(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,di(e,t,i,"ai",o[0]);return}t.aiScore++;const g={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(x=>Ye(x)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(g),t.pendingAttack=null,Le(e,t,i),rt(g.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Le(e,t,i)}function Yo(e,t,i){var c,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=fn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(x=>!x.used)).length){const g=((c=t.pendingAttack)==null?void 0:c.players)||[];if(g.length===1&&(g[0]._line==="GK"||g[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,di(e,t,i,"home",g[0]);return}t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:g.map(m=>Ye(m)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Le(e,t,i),rt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const a=r.length>0?Wt(r,t.modifiers.ai,t.formation).total:0;r.forEach(g=>{g.used=!0});const s=Bi(t.pendingAttack.total,a,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>Ye(g)),aiPlayers:r.map(g=>Ye(g)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,Le(e,t,i),rt(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,n){if(t.round++,!Ln(e,t,i)){if(Fi(t)){Ft(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Li(e,t,i);return}t.phase="attack",Le(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Li(e,t,i);return}t.phase="ai-attack",Le(e,t,i),setTimeout(()=>Di(e,t,i),800)}}}function Ei(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function tn(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function Ln(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(tn(t.homeTeam)&&Ei(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,di(e,t,i,"home",n),!0):!1}if(tn(t.aiTeam)&&Ei(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,di(e,t,i,"ai",n),!0):!1}return!1}function di(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ye(r)]:[],aiPlayers:n==="ai"?[Ye(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,l)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,Le(e,t,i),rt([Ye(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Fi(t)){Ft(e,t,i);return}zt(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Fi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Li(e,t,i){Ln(e,t,i)||(Fi(t)?Ft(e,t,i):(t.phase="attack",Le(e,t,i)))}function hi(e,t,i,n=null,r=null){var f,m;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){kt("Aucun joueur utilisé à remplacer");return}if(!a.length){kt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const l=((f=o[s])==null?void 0:f._line)||((m=o[s])==null?void 0:m.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===l)),d=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var y,C,E,G,N,ne;const p=o[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),v=Math.round(b*1.35),h=ie=>`background:rgba(255,255,255,0.12);border:none;color:${ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ie?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?xt({...u,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?xt({...p,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(y=g.querySelector("#sub-close"))==null||y.addEventListener("click",()=>g.remove()),(C=g.querySelector("#out-up"))==null||C.addEventListener("click",()=>{s>0&&(s--,x())}),(E=g.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<o.length-1&&(s++,x())}),(G=g.querySelector("#in-up"))==null||G.addEventListener("click",()=>{c>0&&(c--,x())}),(N=g.querySelector("#in-down"))==null||N.addEventListener("click",()=>{c<a.length-1&&(c++,x())});const k=(ie,Q,M,w)=>{const j=g.querySelector("#"+ie);if(!j)return;let U=0;j.addEventListener("touchstart",re=>{U=re.touches[0].clientY},{passive:!0}),j.addEventListener("touchend",re=>{const ae=re.changedTouches[0].clientY-U;if(Math.abs(ae)<30)return;const se=Q();ae<0&&se<w-1?(M(se+1),x()):ae>0&&se>0&&(M(se-1),x())},{passive:!0})};k("in-panel",()=>c,ie=>c=ie,a.length),k("out-panel",()=>s,ie=>s=ie,o.length),(ne=g.querySelector("#sub-confirm"))==null||ne.addEventListener("click",ie=>{if(ie.preventDefault(),ie.stopPropagation(),d)return;d=!0;const Q=o[s],M=a[c];if(!Q||!M)return;let w=null,j=-1;for(const[re,ae]of Object.entries(t.homeTeam)){const se=(ae||[]).findIndex(de=>de.cardId===Q.cardId);if(se!==-1){w=re,j=se;break}}if(j===-1||!w){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const U={...M,_line:w,_col:Q._col||0,used:!1,boost:0};t.homeTeam[w].splice(j,1,U),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(M.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Q.name,firstname:Q.firstname,note:Re(Q,w),portrait:Xt(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},inPlayer:{name:M.name,firstname:M.firstname,note:Re(M,w),portrait:Xt(M),job:M.job,country_code:M.country_code,rarity:M.rarity,clubName:M.clubName,clubLogo:M.clubLogo},text:`🔄 ${M.firstname} ${M.name} remplace ${Q.firstname} ${Q.name}`}),g.remove(),Do(Q,M,()=>Le(e,t,i))})}document.body.appendChild(g),x()}function Wo(e,t,i,n,r){var m,p;const o=(n.gcDefs||[]).find(u=>u.name===t),a=je[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||a.desc,g=o!=null&&o.image_url?`/icons/${o.image_url}`:null,x=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${x}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(m=f.querySelector("#gc-back"))==null||m.addEventListener("click",()=>f.remove()),(p=f.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{f.remove(),Jo(e,t,i,n,r)})}function ii(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var c,d;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(g=>{const x=g._line||g.job||"MIL",f=s.find(p=>p.cardId===g.cardId),m=Ae({...g,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:g.boost||0});return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="position:relative;border-radius:8px;${f?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const x=g.dataset.cid,f=e.find(p=>p.cardId===x);if(!f)return;const m=s.findIndex(p=>p.cardId===x);m>-1?s.splice(m,1):s.length<t&&s.push(f),l()})}),(d=a.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{a.remove(),o(s)})}l(),document.body.appendChild(a)}const Xo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,l])=>l.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(ii(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(d=>d.cardId===l.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),Le(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Le(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,g])=>g.filter(x=>!x.used).map(x=>({...x,_line:d})));return c.length?(ii(c,t,`Choisir ${t} joueur(s) ${l}(s) à débuffer (-${e})`,o,r,d=>{d.forEach(g=>{const f=((n==="home"?r.homeTeam:r.aiTeam)[g._line]||[]).find(m=>m.cardId===g.cardId);f&&(f.boost=(f.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${f.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Le(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Le(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,d])=>d.filter(g=>!g.used).map(g=>({...g,_line:c})));return l.length?(ii(l,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(d=>{const x=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(f=>f.cardId===d.cardId);x&&(x.used=!0,n.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Le(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Le(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(l=>l.used).map(l=>({...l,_line:a})));return o.length?(ii(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const l=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Le(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Le(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Jo(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(l=>l.name===t)||o.find(l=>{var c;return((c=l.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=Xo[a.effect_type];l?l(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(n.homeTeam).flatMap(([c,d])=>(d||[]).filter(g=>g.used).map(g=>({...g,_line:c})));l.length?(l[0].used=!1,n.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(l.length){const c=l.sort((d,g)=>Re(g,"ATT")-Re(d,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}_.from("cards").delete().eq("id",e).then(()=>{}),s&&Le(i,n,r)}function Qo(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${jo[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Re(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(l=>l.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Le(e,t,i)})})}async function Ft(e,t,i){var d,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=Qn(t.mode,a);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?l.wins=(n.profile.wins||0)+1:o?l.draws=(n.profile.draws||0)+1:l.losses=(n.profile.losses||0)+1,await _.from("users").update(l).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${r?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${r?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(c),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{c.remove(),Xe(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{c.remove(),Xe(e),i.navigate("match",{matchMode:t.mode})})}function Zo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${pi(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ct=e=>kn(e);async function It(e,t,i,n,r={}){return Tn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function er(e,t,i){const{data:n}=await _.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await _.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return Tn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function Tn(e,t,i,n,r=[],o=[],a=!1,s=null,l=null,c=null,d=null,g=null){const{state:x,navigate:f,toast:m}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(r||[]).map($=>$.id),v=(r||[]).map($=>({id:$.id,gc_type:$.gc_type,_gcDef:$._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await _.from("matches").select("*").eq("id",i).single();if(!h){m("Match introuvable","error"),f("home");return}async function k(){var xe,ye;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:$,error:L},{data:z,error:I},{data:T},{data:A}]=await Promise.all([_.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),_.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),_.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),_.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",I==null?void 0:I.message,"p1D:",(xe=$==null?void 0:$.starters)==null?void 0:xe.length,"p2D:",(ye=z==null?void 0:z.starters)==null?void 0:ye.length);const F=te=>{const ze=Number(te.evolution_bonus)||0;return{cardId:te.card_id,position:te.position,id:te.id,firstname:te.firstname,name:te.surname_real,country_code:te.country_code,club_id:te.club_id,job:te.job,job2:te.job2,note_g:(Number(te.note_g)||0)+(te.job==="GK"||te.job2==="GK"&&Number(te.note_g)>0?ze:0),note_d:(Number(te.note_d)||0)+(te.job==="DEF"||te.job2==="DEF"&&Number(te.note_d)>0?ze:0),note_m:(Number(te.note_m)||0)+(te.job==="MIL"||te.job2==="MIL"&&Number(te.note_m)>0?ze:0),note_a:(Number(te.note_a)||0)+(te.job==="ATT"||te.job2==="ATT"&&Number(te.note_a)>0?ze:0),evolution_bonus:ze,rarity:te.rarity,skin:te.skin,hair:te.hair,hair_length:te.hair_length,face:te.face||null,clubName:te.club_encoded_name||null,clubLogo:te.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},B=(($==null?void 0:$.starters)||[]).map(te=>F(te)),K=((z==null?void 0:z.starters)||[]).map(te=>F(te)),Y=($==null?void 0:$.formation)||"4-4-2",oe=(z==null?void 0:z.formation)||"4-4-2";let Z=ai(B,Y),H=ai(K,oe);const le=(($==null?void 0:$.subs)||[]).map(te=>F(te)),pe=((z==null?void 0:z.subs)||[]).map(te=>F(te)),ue=($==null?void 0:$.stadium_def)||(n?l:null),ce=(z==null?void 0:z.stadium_def)||(n?null:l);return ue&&(Z=Jt(Z,ue),ri(le,ue)),ce&&(H=Jt(H,ce),ri(pe,ce)),{p1Team:Z,p2Team:H,p1Subs:le,p2Subs:pe,p1Formation:Y,p2Formation:oe,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?v:[],gcCardsFull_p2:n?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let y=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!y,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",x.profile.id),!y)if(n){y=await k(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((y==null?void 0:y.p1Team)||{}));const{data:$}=await _.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await _.from("matches").update({game_state:y,turn_user_id:h.home_id}).eq("id",i):y=$.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let $=0;$<30&&!y;$++){await new Promise(z=>setTimeout(z,400));const{data:L}=await _.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(y=L.game_state),$%5===0&&console.log("[PvP] away - poll",$,"game_state:",!!(L!=null&&L.game_state))}if(!y){m("Erreur de synchronisation","error"),f("home");return}y.gc_p2=b,y.gcCardsFull_p2=v,await _.from("matches").update({game_state:y}).eq("id",i)}let C=!1,E=null,G=!1;const N=new Set,ne=new Set;async function ie($){var oe,Z;try{_.removeChannel(Q)}catch{}const L=y[p+"Score"]||0,z=y[u+"Score"]||0;let I,T;$.winner_id?(I=$.winner_id===x.profile.id,T=!1):$.forfeit?(I=L>z,T=!1):(T=L===z,I=L>z);let A="";if(a&&n)try{const{data:H}=await _.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:le}=await _.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(H&&le){const pe=I?1:T?.5:0,ue=1-pe,ce=H.placement_matches<10,xe=le.placement_matches<10,ye=computeGlicko2(H.mmr,H.mmr_deviation,H.mmr_volatility,le.mmr,le.mmr_deviation,pe===1?1:pe===0?0:.5,ce),te=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,H.mmr,H.mmr_deviation,ue===1?1:ue===0?0:.5,xe);await _.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:I?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ye.delta,p_away_delta:te.delta,p_home_new_rd:ye.newRd,p_away_new_rd:te.newRd,p_home_new_vol:ye.newSigma,p_away_new_vol:te.newSigma});const ze=ye.delta,Pe=ye.newMmr,Se=getTier(Pe),Ue=ze>=0?"+":"",St=ze>=0?"#4caf50":"#ff6b6b",Qe=getTier(H.mmr);A=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Se.id!==Qe.id?`<div style="font-size:20px;font-weight:900;color:${Se.color}">
                    ${Pe>H.mmr?"📈":"📉"} ${Qe.emoji} ${Qe.label} → ${Se.emoji} ${Se.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Pe>H.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ze>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Se.color}">${Se.emoji} ${Se.label}</div>`}
              ${ce?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${H.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(H){console.error("[Ranked] MMR update error:",H)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const F=document.createElement("div");F.id="pvp-end-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const B=T?"🤝":I?"🏆":"😞",K=T?"MATCH NUL":I?"VICTOIRE !":"DÉFAITE",Y=T?"#fff":I?"#FFD700":"#ff6b6b";F.innerHTML=`
      <div style="font-size:64px">${B}</div>
      <div style="font-size:26px;font-weight:900;color:${Y}">${K}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${y[p+"Name"]} ${L} – ${z} ${y[u+"Name"]}</div>
      ${$.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${I?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${A}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(F),(Z=F.querySelector("#pvp-end-home"))==null||Z.addEventListener("click",()=>{F.remove(),Xe(e),f(a?"ranked":"home")})}const Q=_.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const L=$.new;try{if(L.status==="finished"||L.forfeit){if(C)return;C=!0,E&&(clearInterval(E),E=null),L.game_state&&(y=L.game_state),ie(L);return}if(L.game_state){const z=y;y=L.game_state;const I=y._lastGC;if(I&&I.seq&&!ne.has(I.seq)&&(ne.add(I.seq),I.by!==p)){R(I.type,I.by,()=>de());return}const T=z[p+"Score"]||0,A=z[u+"Score"]||0,F=y[p+"Score"]||0,B=y[u+"Score"]||0,K=F>T,Y=B>A;if((K||Y)&&!N.has(y.round)){N.add(y.round);const oe=[...y.log||[]].reverse().find(H=>H.isGoal),Z=((oe==null?void 0:oe.homePlayers)||[]).map(H=>({name:H.name,note:H.note,portrait:H.portrait,job:H.job}));rt(Z,F,B,K,()=>de());return}de()}}catch(z){console.error("[PvP] crash:",z)}}).subscribe();async function M($){Object.assign(y,$),y.lastActionAt=new Date().toISOString();const{error:L}=await _.from("matches").update({game_state:y}).eq("id",i);L&&m("Erreur de synchronisation","error");try{de()}catch(z){console.error("[PvP] renderPvpScreen crash:",z)}}async function w(){if(C)return;C=!0,E&&(clearInterval(E),E=null);const $=n?h.away_id:h.home_id,L=n?"p2":"p1",z=n?"p1":"p2",I={...y,[L+"Score"]:3,[z+"Score"]:0,phase:"finished"},T=I.p1Score||0,A=I.p2Score||0;try{await _.from("matches").update({game_state:I}).eq("id",i);const{data:F,error:B}=await _.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:$,p_home_score:T,p_away_score:A,p_forfeit:!0});if(B&&console.error("[PvP] finish_pvp_match (forfeit):",B),d)try{await _.rpc("check_and_finish_mini_league",{p_league_id:d})}catch(K){console.error("[PvP] check_and_finish_mini_league (forfeit):",K)}try{const{data:K}=await _.rpc("apply_match_rewards",{p_match_id:i});K!=null&&K.success&&!(K!=null&&K.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(K){console.error("[PvP] apply_match_rewards (forfeit):",K)}}catch{}try{_.removeChannel(Q)}catch{}setTimeout(()=>{Xe(e),d?f("mini-league",{openLeagueId:d}):f("home")},800)}const j={BOOST_STAT:({value:$=1,count:L=1,roles:z=[]},I,T)=>{const A=I[p+"Team"],F=Object.entries(A).filter(([B])=>!z.length||z.includes(B)).flatMap(([B,K])=>K.filter(Y=>!Y.used).map(Y=>({...Y,_line:B})));if(!F.length){I.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(I);return}U(F,L,`Choisir ${L} joueur(s) à booster (+${$})`,B=>{B.forEach(K=>{const Y=(A[K._line]||[]).find(oe=>oe.cardId===K.cardId);Y&&(Y.boost=(Y.boost||0)+$,I.log.push({text:`⚡ +${$} sur ${Y.name}`,type:"info"}))}),I[p+"Team"]=A,T(I)})},DEBUFF_STAT:({value:$=1,count:L=1,roles:z=[],target:I="ai"},T,A)=>{const F=I==="home"?p:u,B=T[F+"Team"],K=I==="home"?"allié":"adverse",Y=Object.entries(B).filter(([oe])=>!z.length||z.includes(oe)).flatMap(([oe,Z])=>Z.map(H=>({...H,_line:oe})));if(!Y.length){T.log.push({text:`🎯 Aucun joueur ${K}`,type:"info"}),A(T);return}U(Y,L,`Choisir ${L} joueur(s) ${K}(s) (-${$})`,oe=>{oe.forEach(Z=>{const H=(B[Z._line]||[]).find(le=>le.cardId===Z.cardId);H&&(H.boost=(H.boost||0)-$,T.log.push({text:`🎯 -${$} sur ${H.name}`,type:"info"}))}),T[F+"Team"]=B,A(T)})},GRAY_PLAYER:({count:$=1,roles:L=[],target:z="ai"},I,T)=>{const A=z==="home"?p:u,F=I[A+"Team"],B=z==="home"?"allié":"adverse",K=Object.entries(F).filter(([Y])=>!L.length||L.includes(Y)).flatMap(([Y,oe])=>oe.filter(Z=>!Z.used).map(Z=>({...Z,_line:Y})));if(!K.length){I.log.push({text:`❌ Aucun joueur ${B}`,type:"info"}),T(I);return}U(K,$,`Choisir ${$} joueur(s) ${B}(s) à exclure`,Y=>{const oe="usedCardIds_"+A,Z=new Set(I[oe]||[]);Y.forEach(H=>{const le=(F[H._line]||[]).find(pe=>pe.cardId===H.cardId);le&&(le.used=!0,Z.add(H.cardId),I.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),I[oe]=[...Z],I[A+"Team"]=F,T(I)})},REVIVE_PLAYER:({count:$=1,roles:L=[]},z,I)=>{const T=z[p+"Team"],A=Object.entries(T).filter(([F])=>!L.length||L.includes(F)).flatMap(([F,B])=>B.filter(K=>K.used).map(K=>({...K,_line:F})));if(!A.length){z.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),I(z);return}U(A,$,`Choisir ${$} joueur(s) à ressusciter`,F=>{F.forEach(B=>{const K=(T[B._line]||[]).find(Y=>Y.cardId===B.cardId);K&&(K.used=!1,z.log.push({text:`💫 ${K.name} ressuscité !`,type:"info"}))}),z[p+"Team"]=T,I(z)})},REMOVE_GOAL:({},$,L)=>{const z=u+"Score";$[z]>0?($[z]--,$.log.push({text:"🚫 Dernier but annulé !",type:"info"})):$.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L($)},ADD_GOAL_DRAW:({},$,L)=>{$[p+"Score"]===$[u+"Score"]?($[p+"Score"]++,$.log.push({text:"🎯 But bonus !",type:"info"})):$.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L($)},ADD_SUB:({value:$=1},L,z)=>{L.maxSubs=(L.maxSubs||3)+$,L.log.push({text:`🔄 +${$} remplacement(s)`,type:"info"}),z(L)},CUSTOM:({},$,L)=>L($)};function U($,L,z,I){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let A=[];function F(){var K,Y;const B=$.map(oe=>{const Z=oe._line||oe.job||"MIL",H=A.find(pe=>pe.cardId===oe.cardId),le=Ae({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:Z,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${H?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${z}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${A.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${B}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${A.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${A.length}/${L})
          </button>
        </div>`,(K=T.querySelector("#pp-close"))==null||K.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const Z=oe.dataset.cid,H=$.find(pe=>pe.cardId===Z),le=A.findIndex(pe=>pe.cardId===Z);H&&(le>-1?A.splice(le,1):A.length<L&&A.push(H),F())})}),(Y=T.querySelector("#pp-confirm"))==null||Y.addEventListener("click",()=>{T.remove(),I(A)})}F(),document.body.appendChild(T)}async function re($,L){const I=(y["gcCardsFull_"+p]||[]).find(B=>B.id===$),T=(I==null?void 0:I._gcDef)||(y.gcDefs||[]).find(B=>{var K;return B.name===L||((K=B.name)==null?void 0:K.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),A=[...y["usedGc_"+p]||[],$],F={type:L,by:p,seq:(y._gcAnimSeq||0)+1};ne.add(F.seq),R(L,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const K=j[T.effect_type];if(K){const Y={...y};K(T.effect_params||{},Y,async oe=>{oe["usedGc_"+p]=A,oe._lastGC=F,oe._gcAnimSeq=F.seq,await M(oe)});return}}const B={...y};switch(L){case"Remplacement+":B.maxSubs=(B.maxSubs||3)+1,B.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const K=u+"Score";B[K]>0&&(B[K]--,B.log.push({text:"🚫 But annulé",type:"info"}));break}}B["usedGc_"+p]=A,B._lastGC=F,B._gcAnimSeq=F.seq,await M(B)})}function ae($,L){const z="usedCardIds_"+$,I=new Set(y[z]||[]);L.forEach(T=>I.add(T)),y[z]=[...I]}function se(){for(const $ of["p1","p2"]){const L=new Set(y["usedCardIds_"+$]||[]),z=y[$+"Team"];if(z)for(const I of["GK","DEF","MIL","ATT"])(z[I]||[]).forEach(T=>{T.used=L.has(T.cardId)})}}function de(){var st,dt,wt,Gi,Ri,Ni;if(y.phase==="reveal")return $e();if(y.phase==="midfield")return J();if(y.phase==="finished")return Nt();const $=y[p+"Team"];y[u+"Team"],se();const L=y[p+"Score"],z=y[u+"Score"],I=y[p+"Name"],T=y[u+"Name"],A=y.phase===p+"-attack",F=y.phase===p+"-defense",B=Array.isArray(y["selected_"+p])?y["selected_"+p]:[],K=B.map(ee=>ee.cardId),Y=window.innerWidth>=700,oe=y[p+"Subs"]||[],Z=y["usedSubIds_"+p]||[],H=oe.filter(ee=>!Z.includes(ee.cardId)),le=y["gcCardsFull_"+p]||[],pe=y["usedGc_"+p]||[],ue=le.filter(ee=>!pe.includes(ee.id)),ce=y.boostOwner===p&&!y.boostUsed,xe=[...$.MIL||[],...$.ATT||[]].filter(ee=>!ee.used),ye=A&&xe.length===0?[...$.GK||[],...$.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function te(ee,fe,Ie){var jt,ct;const ve=ee._gcDef,At={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ve==null?void 0:ve.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",tt={purple:"#b06ce0",light_blue:"#00d4ef"}[ve==null?void 0:ve.color]||"#b06ce0",Fe=(ve==null?void 0:ve.name)||ee.gc_type,Oe=(ve==null?void 0:ve.effect)||((jt=je[ee.gc_type])==null?void 0:jt.desc)||"",Me=ve!=null&&ve.image_url?`/icons/${ve.image_url}`:null,_t=((ct=je[ee.gc_type])==null?void 0:ct.icon)||"⚡",Ge=Math.round(Ie*.22),lt=Math.round(Ie*.22),it=Ie-Ge-lt,Mt=Fe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${Ie}px;border-radius:10px;border:2px solid ${tt};background:${At};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Ge}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${Fe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${it}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Me?`<img src="${Me}" style="max-width:${fe-10}px;max-height:${it-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(it*.55)}px">${_t}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Oe.slice(0,38)}</span>
        </div>
      </div>`}function ze(ee,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${y.boostValue}</div>
      </div>`}const Pe=(ee,fe)=>fe?ze(130,175):te(ee,130,175),Se=(ee,fe)=>fe?ze(68,95):te(ee,68,95),Ue=Y?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",St=A?Ce(p)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${B.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${B.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${T}</div>`,Qe=A&&!Ce(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':A||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${B.length}/3 sélectionné(s)</div>`:"",Zt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${Y?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${xt(ee,Y?76:44,Y?100:58)}</div>`).join("")}
    </div>`,De=A?"attack":F?"defense":"idle",Ze=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Gt($,y[p+"Formation"],De,K,Y?1300:Tt(),Y?600:Dt(),ye)}
      </div>
    </div>`,Ne=y[p+"Team"],vt=(()=>{var fe,Ie,ve,At,tt;if(F&&((fe=y.pendingAttack)!=null&&fe.players)){const Fe=y.pendingAttack;let Oe="";if(B.length>0){const Me=B.map(Ge=>{const lt=(Ne[Ge._role]||[]).find(gi=>gi.cardId===Ge.cardId)||Ge,it=Ne[Ge._role]||[],Mt=it.findIndex(gi=>gi.cardId===Ge.cardId),jt=ut(it.length),ct=Mt>=0?jt[Mt]:lt._col??1;return{...lt,_line:Ge._role,_col:ct}}),_t=Wt(Me,((Ie=y.modifiers)==null?void 0:Ie[p])||{},y[p+"Formation"]);Oe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${B.length}/3)</div>
            <div style="display:flex;justify-content:center">${We(Me.map(Ge=>({...Ge,used:!1})),"#3a7bd5",_t.total,"defense",y[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${T} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${We((Fe.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",Fe.total,"attack",y[u+"Formation"])}</div>
          ${Oe}
        </div>`}if(A&&((ve=y.pendingAttack)!=null&&ve.players)){const Fe=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${We((Fe.players||[]).map(Oe=>({...Oe,used:!1})),"#00ff88",Fe.total,"attack",y[p+"Formation"])}</div>
        </div>`}if(A&&!((At=y.pendingAttack)!=null&&At.players)&&B.length>0){const Fe=B.map(Me=>{const _t=(Ne[Me._role]||[]).find(ct=>ct.cardId===Me.cardId)||Me,Ge=["GK","DEF"].includes(Me._role),lt=Ne[Me._role]||[],it=lt.findIndex(ct=>ct.cardId===Me.cardId),Mt=ut(lt.length),jt=it>=0?Mt[it]:_t._col??1;return{..._t,_line:Me._role,_col:jt,...Ge?{note_a:Math.max(1,Number(_t.note_a)||0)}:{}}}),Oe=Yt(Fe,((tt=y.modifiers)==null?void 0:tt[p])||{},y[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${B.length}/3)</div>
          <div style="display:flex;justify-content:center">${We(Fe.map(Me=>({...Me,used:!1})),"#FFD700",Oe.total,"attack",y[p+"Formation"])}</div>
        </div>`}const ee=(y.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+$n(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),et=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${L} – ${z}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${T}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${vt}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(y.log||[]).length})
      </button>`;ot(e),e.style.overflow="hidden",Y?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${et}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Zt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ze}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${St}${Qe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(ee=>Pe(ee,!1)).join("")}
            ${ce?Pe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${et}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Gt($,y[p+"Formation"],De,K,Tt(),Dt(),ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(ee=>Se(ee,!1)).join("")}
            ${ce?Se(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${A&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${A&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${A&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${A&&H.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${H.length}</div>
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
          <div>${St}${Qe}</div>
        </div>
      </div>`;function Ke(){const ee=e.querySelector(".match-screen");if(!ee)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=fe+"px",ee.style.minHeight=fe+"px",ee.style.maxHeight=fe+"px",ee.style.overflow="hidden";const Ie=e.querySelector("#mobile-action-bar"),ve=e.querySelector("#mobile-play-area");Ie&&ve&&(ve.style.paddingBottom=Ie.offsetHeight+"px")}if(Ke(),setTimeout(Ke,120),setTimeout(Ke,400),G||(G=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ke),window.visualViewport.addEventListener("scroll",Ke)),window.addEventListener("resize",Ke)),function(){const fe=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!fe)return;const Ie=fe.closest("#match-terrain-wrap");Ie&&(Ie.style.cssText="position:relative;width:100%;height:100%;padding:0"),fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("preserveAspectRatio","xMidYMid meet")}(),y._pvpResizeBound||(y._pvpResizeBound=!0,window.addEventListener("resize",()=>{const ee=e.querySelector(".terrain-wrapper svg");if(ee){const fe=ee.closest("#match-terrain-wrap");fe&&(fe.style.cssText="position:relative;width:100%;height:100%;padding:0"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!A&&!F)return;const fe=ee.dataset.cardId,Ie=ee.dataset.role,ve=($[Ie]||[]).find(Oe=>Oe.cardId===fe);if(!ve||ve.used)return;const At=ye.includes(fe);if(A&&!["MIL","ATT"].includes(Ie)&&!At)return;Array.isArray(y["selected_"+p])||(y["selected_"+p]=[]);const tt=y["selected_"+p],Fe=tt.findIndex(Oe=>Oe.cardId===fe);Fe>-1?tt.splice(Fe,1):tt.length<3&&tt.push({...ve,_role:Ie}),de()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>P(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>P())}),(st=e.querySelector("#pvp-sub-open"))==null||st.addEventListener("click",()=>P()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{A?ee.addEventListener("click",()=>S(ee.dataset.gcId,ee.dataset.gcType)):(ee.style.opacity="0.35",ee.style.cursor="default",ee.addEventListener("click",()=>kt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(dt=e.querySelector("#pvp-boost-card"))==null||dt.addEventListener("click",()=>q()),(wt=e.querySelector("#pvp-action"))==null||wt.addEventListener("click",ee=>{A?ee.currentTarget.dataset.pass==="1"||!Ce(p)?O():he():F&&Ee()}),(Gi=e.querySelector("#pvp-quit"))==null||Gi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&w()}),(Ri=e.querySelector("#pvp-view-opp"))==null||Ri.addEventListener("click",()=>V()),(Ni=e.querySelector("#pvp-toggle-history"))==null||Ni.addEventListener("click",()=>D()),E&&(clearInterval(E),E=null),(A||F)&&!C){let ee=30,fe=!1;const Ie=()=>document.getElementById("pvp-timer"),ve=()=>{Ie()&&(Ie().textContent=ee+"s",Ie().style.color=fe?"#ff4444":"#fff")};ve(),E=setInterval(()=>{ee--,ee<0?fe?(clearInterval(E),E=null,A&&!Ce(p)?O():w()):(fe=!0,ee=15,ve()):ve()},1e3)}}function $e(){ot(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${qo(y[u+"Team"],y[u+"Formation"],null,y[u+"Name"]||"Adversaire")}
    </div>`;const $=e.querySelector("svg"),L=$==null?void 0:$.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),$&&($.removeAttribute("width"),$.removeAttribute("height"),$.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",$.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let W=!1;function J(){if(W)return;const $=y[p+"Team"].MIL||[],L=y[u+"Team"].MIL||[],z=ft($)+gt($),I=ft(L)+gt(L),T=z>=I;ot(e),e.innerHTML=`
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
      ${si($,y[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${si(L,y[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(le,pe)=>e.querySelectorAll(le).forEach((ue,ce)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},pe+ce*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((le,pe)=>setTimeout(()=>{le.style.opacity="1"},pe*70)),900),setTimeout(()=>{const le=e.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function F(le,pe,ue){const ce=document.getElementById(le);if(!ce)return;const xe=performance.now(),ye=te=>{const ze=Math.min(1,(te-xe)/ue);ce.textContent=Math.round(pe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(ye):ce.textContent=pe};requestAnimationFrame(ye)}setTimeout(()=>{F("pvp-score-me",z,800),F("pvp-score-opp",I,800)},1500);const B=y.p1Team.MIL||[],K=y.p2Team.MIL||[],Y=ft(B)+gt(B),oe=ft(K)+gt(K),Z=Y>=oe?"p1":"p2";let H=y.boostValue;H==null&&(H=_n(),y.boostValue=H,y.boostOwner=Z,y.boostUsed=!1),W=!0,setTimeout(()=>{const le=e.querySelector("#duel-row-"+(T?"me":"opp")),pe=e.querySelector("#duel-row-"+(T?"opp":"me")),ue=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),xe=T?ue:ce,ye=T?ce:ue;xe&&(xe.style.fontSize="80px",xe.style.color=T?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const te=document.getElementById("duel-shock");te&&(te.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Se;const te=document.getElementById("pvp-duel-finale");if(!te)return;const ze=y.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Pe=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;te.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+y[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+y[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Pe,te.style.transition="opacity .45s ease",te.style.opacity="1",te.style.pointerEvents="auto",(Se=document.getElementById("pvp-start-match"))==null||Se.addEventListener("click",async()=>{const Ue=Z;await M({phase:Ue+"-attack",attacker:Ue,round:1,boostValue:H,boostUsed:!1,boostOwner:Ue})})},600)},700)},2800)}function R($,L,z){var ue,ce;const I=(y.gcDefs||[]).find(xe=>{var ye;return xe.name===$||((ye=xe.name)==null?void 0:ye.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[I==null?void 0:I.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",A={purple:"#b06ce0",light_blue:"#00d4ef"}[I==null?void 0:I.color]||"#b06ce0",F=(I==null?void 0:I.name)||$,B=(I==null?void 0:I.effect)||((ue=je[$])==null?void 0:ue.desc)||"",K=I!=null&&I.image_url?`/icons/${I.image_url}`:null,Y=((ce=je[$])==null?void 0:ce.icon)||"⚡",Z=L===p?"Vous":y[L+"Name"]||"Adversaire",H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",H.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${A}66}50%{box-shadow:0 0 60px ${A}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${A};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${Z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${A};background:${T};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${K?`<img src="${K}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${Y}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${B}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(H);let le=!1;const pe=()=>{le||(le=!0,H.remove(),setTimeout(()=>z&&z(),50))};H.addEventListener("click",pe),setTimeout(pe,3e3)}function S($,L){var H,le,pe,ue;const I=(y["gcCardsFull_"+p]||[]).find(ce=>ce.id===$),T=I==null?void 0:I._gcDef,A={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",F={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",B=(T==null?void 0:T.name)||L,K=(T==null?void 0:T.effect)||((H=je[L])==null?void 0:H.desc)||"Carte spéciale.",Y=T!=null&&T.image_url?`/icons/${T.image_url}`:null,oe=((le=je[L])==null?void 0:le.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${F};background:${A};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${F}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Y?`<img src="${Y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${oe}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${K}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(pe=Z.querySelector("#pvp-gc-back"))==null||pe.addEventListener("click",()=>Z.remove()),(ue=Z.querySelector("#pvp-gc-use"))==null||ue.addEventListener("click",()=>{Z.remove(),re($,L)})}function q(){var I;const $=y[p+"Team"],L=Object.entries($).flatMap(([T,A])=>(A||[]).filter(F=>!F.used).map(F=>({...F,_line:T})));if(!L.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${y.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(T=>{const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",F=Re(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${A};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(I=z.querySelector("#bp-close"))==null||I.addEventListener("click",()=>z.remove()),z.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const A=T.dataset.cid,F=L.find(K=>K.cardId===A);if(!F)return;const B=($[F._line]||[]).find(K=>K.cardId===A);B&&(B.boost=(B.boost||0)+y.boostValue),z.remove(),await M({[p+"Team"]:$,boostUsed:!0})})})}function P($=null){var le,pe;if(!(y.phase===p+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const z=y[p+"Team"],I=y["usedSubIds_"+p]||[],T=y.maxSubs||3;if(I.length>=T){m(`Maximum ${T} remplacements atteint`,"warning");return}const A=Object.entries(z).flatMap(([ue,ce])=>(ce||[]).filter(xe=>xe.used).map(xe=>({...xe,_line:ue}))),F=(y[p+"Subs"]||[]).filter(ue=>!I.includes(ue.cardId));if(!A.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!F.length){m("Aucun remplaçant disponible","warning");return}let B=Math.max(0,A.findIndex(ue=>ue.cardId===$));const K=((le=A[B])==null?void 0:le._line)||((pe=A[B])==null?void 0:pe.job);let Y=Math.max(0,F.findIndex(ue=>ue.job===K)),oe=!1;const Z=document.createElement("div");Z.id="pvp-sub-overlay",Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function H(){var Pe,Se,Ue,St,Qe,Zt;const ue=A[B],ce=F[Y],xe=Math.min(130,Math.round((window.innerWidth-90)/2)),ye=Math.round(xe*1.35),te=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;Z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${I.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(Y===0)}" ${Y===0?"disabled":""}>▲</button>
          <div>${ce?xt({...ce,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(Y>=F.length-1)}" ${Y>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Y+1}/${F.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(B===0)}" ${B===0?"disabled":""}>▲</button>
          <div>${ue?xt({...ue,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(B>=A.length-1)}" ${B>=A.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${B+1}/${A.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Pe=Z.querySelector("#psub-close"))==null||Pe.addEventListener("click",()=>Z.remove()),(Se=Z.querySelector("#pout-up"))==null||Se.addEventListener("click",()=>{B>0&&(B--,H())}),(Ue=Z.querySelector("#pout-down"))==null||Ue.addEventListener("click",()=>{B<A.length-1&&(B++,H())}),(St=Z.querySelector("#pin-up"))==null||St.addEventListener("click",()=>{Y>0&&(Y--,H())}),(Qe=Z.querySelector("#pin-down"))==null||Qe.addEventListener("click",()=>{Y<F.length-1&&(Y++,H())});const ze=(De,Ze,Ne,vt)=>{const et=Z.querySelector("#"+De);if(!et)return;let Ke=0;et.addEventListener("touchstart",st=>{Ke=st.touches[0].clientY},{passive:!0}),et.addEventListener("touchend",st=>{const dt=st.changedTouches[0].clientY-Ke;if(Math.abs(dt)<30)return;const wt=Ze();dt<0&&wt<vt-1?(Ne(wt+1),H()):dt>0&&wt>0&&(Ne(wt-1),H())},{passive:!0})};ze("pin-panel",()=>Y,De=>Y=De,F.length),ze("pout-panel",()=>B,De=>B=De,A.length),(Zt=Z.querySelector("#psub-confirm"))==null||Zt.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),oe)return;oe=!0;const Ze=A[B],Ne=F[Y];if(!Ze||!Ne)return;const vt=Ze._line,et=(z[vt]||[]).findIndex(dt=>dt.cardId===Ze.cardId);if(et===-1){m("Erreur : joueur introuvable","error"),Z.remove();return}const Ke={...Ne,_line:vt,position:Ze.position,used:!1,boost:0};z[vt].splice(et,1,Ke);const st=[...I,Ne.cardId];Z.remove(),X(Ze,Ne,async()=>{await M({[p+"Team"]:z,[u+"Team"]:y[u+"Team"],["usedSubIds_"+p]:st})})})}document.body.appendChild(Z),H()}function X($,L,z){const I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const A=(K,Y,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Y};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${I[K.job]||"#555"};border:3px solid ${Y};position:relative;overflow:hidden;margin:0 auto">
        ${Xt(K)?`<img src="${Xt(K)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(K.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${A(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${A($,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let F=!1;const B=()=>{F||(F=!0,T.remove(),setTimeout(()=>z(),50))};T.addEventListener("click",B),setTimeout(B,2200)}function V(){var L;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",$.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${y[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${pi(y[u+"Team"],y[u+"Formation"],null,[],Tt(),Dt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild($),(L=$.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>$.remove())}function D(){var z;const $=y.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${$.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...$].reverse().map(I=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${I.type==="goal"?"#FFD700":I.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${I.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(z=L.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>L.remove())}async function O(){if(y.phase!==p+"-attack")return;const $=p==="p1"?"p2":"p1",L=(y.round||0)+1,z=[...y.log||[]];z.push({type:"info",text:`⏭️ ${y[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const I=He(y),T=Ce($),A=I||!T?"finished":$+"-attack";await M({["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:A,attacker:$,round:L,log:z}),A==="finished"&&await Je(y)}function _e($){const L=($.GK||[]).some(I=>!I.used),z=["DEF","MIL","ATT"].some(I=>($[I]||[]).some(T=>!T.used));return L&&!z}function ke($){return($.p1Score||0)!==($.p2Score||0)?null:_e($.p1Team)&&!ge($.p2Team)?{side:"p1",gk:($.p1Team.GK||[]).find(L=>!L.used)}:_e($.p2Team)&&!ge($.p1Team)?{side:"p2",gk:($.p2Team.GK||[]).find(L=>!L.used)}:null}async function be($,L){const{side:z,gk:I}=$;if(!I)return;const T=z+"Score",A=(L[T]||0)+1;I.used=!0;const F=[...L.log||[]];F.push({type:"duel",isGoal:!0,homeScored:z===p,homePlayers:z==="p1"?[Ct(I)]:[],aiPlayers:z==="p2"?[Ct(I)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[z+"Name"]} marque !`});const B=(L.round||0)+1,K=z==="p1"?"p2":"p1",Y={...L,[T]:A},oe=He(Y);N.add(B);const Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(Z);const H=(ue,ce)=>new Promise(xe=>{Z.innerHTML=`<div style="font-size:32px;font-weight:900;color:${ce};letter-spacing:2px;animation:lcFade 1.4s ease both">${ue}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(xe,1400)});await H("⚽ DERNIER CORNER","#FFD700"),await H("🧤 LE GARDIEN MONTE !","#4fc3f7"),Z.remove();const le=z===p?A:L[p+"Score"]||0,pe=z===p?L[u+"Score"]||0:A;rt([Ct(I)],le,pe,z===p,async()=>{await M({[T]:A,log:F,round:B,pendingAttack:null,phase:oe?"finished":K+"-attack",attacker:K,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}}}),oe&&await Je({...y,[T]:A})})}async function he(){const $=y[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(A=>(y[u+"Team"][A]||[]).some(F=>!F.used)),z=(y["selected_"+p]||[]).map(A=>{const F=($[A._role]||[]).find(pe=>pe.cardId===A.cardId)||A,B=["GK","DEF"].includes(A._role),K=$[A._role]||[],Y=K.findIndex(pe=>pe.cardId===A.cardId),oe=ut(K.length),Z=Y>=0?oe[Y]:F._col??1,H=y.stadiumDef||y.homeStadiumDef||null,le=F.stadiumBonus||H&&(H.club_id&&String(F.club_id)===String(H.club_id)||H.country_code&&F.country_code===H.country_code)||!1;return{...F,_line:A._role,_col:Z,stadiumBonus:le,...B?{note_a:Math.max(1,Number(F.note_a)||0)}:{}}});if(!z.length)return;const I=Yt(z,y.modifiers[p]||{},y[p+"Formation"]);ae(p,z.map(A=>A.cardId)),z.forEach(A=>{const F=($[A._role]||[]).find(B=>B.cardId===A.cardId);F&&(F.used=!0)}),y["selected_"+p]=[],de();const T=[...y.log||[]];if(L){if(z.length===1&&(z[0]._line==="GK"||z[0].job==="GK")&&(y.p1Score||0)===(y.p2Score||0)){await be({side:p,gk:z[0]},{...y,[p+"Team"]:$,log:T});return}const F=(y[p+"Score"]||0)+1,B=z.map(H=>Ct(H));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:I.total,aiTotal:0});const K=(y.round||0)+1,Y=p==="p1"?"p2":"p1",oe={...y,[p+"Team"]:$,[p+"Score"]:F},Z=He(oe);N.add(K),rt(B,F,y[u+"Score"]||0,!0,async()=>{await M({[p+"Team"]:$,[p+"Score"]:F,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:Z?"finished":Y+"-attack",attacker:Y,round:K,log:T}),Z&&await Je({...y,[p+"Score"]:F})});return}T.push({type:"pending",text:`⚔️ ${y[p+"Name"]} attaque (${I.total})`}),await M({[p+"Team"]:$,[u+"Team"]:y[u+"Team"],pendingAttack:{...I,players:z,side:p},["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},phase:u+"-defense",log:T})}async function Ee(){const $=y[p+"Team"],L=(y["selected_"+p]||[]).map(ce=>{const xe=($[ce._role]||[]).find(Se=>Se.cardId===ce.cardId)||ce,ye=$[ce._role]||[],te=ye.findIndex(Se=>Se.cardId===ce.cardId),ze=ut(ye.length),Pe=te>=0?ze[te]:xe._col??1;return{...xe,_line:ce._role,_col:Pe}}),z=Wt(L,y.modifiers[p]||{},y[p+"Formation"]);ae(p,L.map(ce=>ce.cardId)),L.forEach(ce=>{const xe=($[ce._role]||[]).find(ye=>ye.cardId===ce.cardId);xe&&(xe.used=!0)}),y["selected_"+p]=[],de();const I=Bi(y.pendingAttack.total,z.total,y.modifiers[p]||{}),T=y.pendingAttack.side,A=I==="attack"||(I==null?void 0:I.goal),F=T==="p1"?"p2":"p1",B=(y.round||0)+1,K=(y.pendingAttack.players||[]).map(ce=>Ct(ce)),Y=[...y.log||[]];Y.push({type:"duel",isGoal:A,homeScored:A&&T===p,text:A?`⚽ BUT de ${y[T+"Name"]} ! (${y.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${y.pendingAttack.total} vs ${z.total})`,homePlayers:K,aiPlayers:L.map(ce=>Ct(ce)),homeTotal:y.pendingAttack.total,aiTotal:z.total});const oe=A?(y[T+"Score"]||0)+1:y[T+"Score"]||0,Z={...y,[p+"Team"]:$,[T+"Score"]:oe},H=He(Z),le=H?"finished":F+"-attack",pe=!H&&!A?ke(Z):null,ue=async()=>{if(pe){await be(pe,Z);return}await M({[p+"Team"]:$,[u+"Team"]:y[u+"Team"],[T+"Score"]:oe,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:le,attacker:F,round:B,log:Y}),(le==="finished"||H)&&await Je({...y,[T+"Score"]:oe})};if(A){const ce=T===p,xe=ce?oe:y[p+"Score"]||0,ye=ce?y[u+"Score"]||0:oe;N.add(B),rt(K,xe,ye,ce,ue)}else await ue()}function Te($){return["MIL","ATT"].some(L=>($[L]||[]).some(z=>!z.used))}function ge($){return["GK","DEF","MIL","ATT"].some(L=>($[L]||[]).some(z=>!z.used))}function qe($){return ge($)&&!Te($)}function Ce($){const L=y[$+"Team"];return!!(Te(L)||qe(L))}function He($){return!ge($.p1Team)&&!ge($.p2Team)}function ht($){const L=$.p1Score||0,z=$.p2Score||0;return L===z?null:L>z?h.home_id:h.away_id}async function Je($){try{const L=ht($),z=L?h.home_id===L?h.away_id:h.home_id:null,I=$.p1Score||0,T=$.p2Score||0,{data:A,error:F}=await _.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:I,p_away_score:T,p_forfeit:!1});if(F&&console.error("[PvP] finish_pvp_match:",F),d)try{await _.rpc("check_and_finish_mini_league",{p_league_id:d})}catch(B){console.error("[PvP] check_and_finish_mini_league:",B)}L&&z&&to(L,z).catch(()=>{});try{const{data:B}=await _.rpc("apply_match_rewards",{p_match_id:i});B!=null&&B.success&&!(B!=null&&B.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(B){console.error("[PvP] apply_match_rewards:",B)}if(typeof c=="function")try{await c({homeScore:I,awayScore:T,winnerId:L,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(B){console.error("[PvP] onMatchEnd:",B)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Nt(){var T;const $=y[p+"Score"],L=y[u+"Score"],z=$>L,I=$===L;ot(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":I?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":I?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${d?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{_.removeChannel(Q)}catch{}Xe(e),d?f("mini-league",{openLeagueId:d}):f("home")})}de()}async function Ti(e,t,i=!1){var s,l;const{state:n,navigate:r,toast:o}=t,a=i&&((l=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:l.rankedData)||null;await ui(e,t,i?"ranked":"random",async({deckId:c,formation:d,starters:g,subsRaw:x,gcCardsEnriched:f,gcDefs:m,stadiumDef:p})=>{ot(e);const u=async b=>{await ir(e,t,c,d,g,x,b||[],m,p,i,a)};if(!(f!=null&&f.length)){await u([]);return}ci(e,f,u)})}async function tr(e,t,i){return er(e,t,i)}async function ir(e,t,i,n,r,o,a=[],s=[],l=null,c=!1,d=null){var ie,Q;const{state:g,navigate:x,toast:f}=t,m=(d==null?void 0:d.mmr)??((ie=g.profile)==null?void 0:ie.mmr)??1e3,p=c?Mi(m):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let v=!1,h=null,k=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const y=async()=>{v=!0,h&&(h.unsubscribe(),h=null),k&&(clearInterval(k),k=null);try{await _.rpc("cancel_matchmaking",{p_user_id:g.profile.id})}catch(M){console.error("[Matchmaking] cancel error:",M)}};(Q=document.getElementById("cancel-mm"))==null||Q.addEventListener("click",async()=>{await y(),Xe(e),x("home")});const C=async(M,w)=>{v||(v=!0,h&&(h.unsubscribe(),h=null),k&&(clearInterval(k),k=null),await It(e,t,M,w,{myGC:a,gcDefs:s,stadiumDef:l,isRanked:c,rankedData:d,onMatchEnd:c?nr:null}))},E=g.user.id,{data:G,error:N}=c?await _.rpc("try_matchmake_ranked",{p_user_id:E,p_deck_id:i,p_mmr:m}):await _.rpc("try_matchmake",{p_user_id:E,p_deck_id:i});if(N||!(G!=null&&G.success)){console.error("[Matchmaking] try_matchmake error:",N||G),f("Erreur de matchmaking","error"),Xe(e),x("home");return}if(G.matched){await C(G.match_id,!1);return}const ne=async()=>{if(v)return;const{data:M}=await _.from("matchmaking_queue").select("status, match_id").eq("user_id",E).maybeSingle();(M==null?void 0:M.status)==="matched"&&M.match_id&&await C(M.match_id,!0)};h=_.channel(`mm_${E}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${E}`},M=>{const w=M.new;w.status==="matched"&&w.match_id&&C(w.match_id,!0)}).subscribe(),k=setInterval(ne,3e3),setTimeout(()=>{v||y()},12e4)}async function nr(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:l,matchId:c}=e,d=i.user.id,g=o===d,x=r===d,{data:f}=await _.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:m}=await _.from("users").select("mmr, mmr_rd, mmr_v").eq("id",g?a:o).single();if(f&&m){const p=Mn(f.mmr,f.mmr_rd,f.mmr_v,m.mmr,m.mmr_rd,x?1:0);await _.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:x?_.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:_.sql`mmr_losses + 1`}).eq("id",d),n(x?`+MMR ↑ ${Math.round(p.mmr-f.mmr)}`:`-MMR ↓ ${Math.round(f.mmr-p.mmr)}`,x?"success":"error",4e3)}}const or=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Ti,resumePvpMatch:tr},Symbol.toStringTag,{value:"Module"}));async function rr(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",l=!!o.isAccepting;await ui(e,t,"friend",async({deckId:c,formation:d,starters:g,subsRaw:x,gcCardsEnriched:f,gcDefs:m,stadiumDef:p})=>{ot(e);const u=async b=>{const v=b||[];l?await sr(e,t,c,v,m,p):await ar(e,t,c,v,m,p,a,s)};if(!(f!=null&&f.length)){await u([]);return}ci(e,f,u)})}async function ar(e,t,i,n,r,o,a,s){var v;const{state:l,navigate:c,toast:d}=t,g=l.user.id,{data:x,error:f}=await _.from("friend_match_invites").insert({inviter_id:g,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(f||!x){console.error("[Friend] Erreur création invitation:",f),d("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(v=document.getElementById("cancel-friend"))==null||v.addEventListener("click",async()=>{await u(),await _.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),Xe(e),c("home")}),p=_.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:h})=>{m||h.status!=="accepted"||!h.match_id||(m=!0,await u(),await It(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(m)return;const{data:h}=await _.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(m=!0,clearInterval(b),await u(),await It(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{m||(clearInterval(b),await u(),d("Invitation expirée","info"),c("home"))},12e4)}async function sr(e,t,i,n,r,o){const{state:a,navigate:s,toast:l}=t,c=a.user.id,{data:d}=await _.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){l("Aucune invitation en attente","error"),s("home");return}const{data:g,error:x}=await _.rpc("accept_friend_invite",{p_invite_id:d.id,p_invitee_deck_id:i});if(x||!(g!=null&&g.success)){console.error("[Friend] Erreur accept_friend_invite:",x||g),l((g==null?void 0:g.error)||"Impossible de rejoindre le match","error"),s("home");return}await It(e,t,g.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const zn="#1A6B3C",mt="#D4A017",Ot="rgba(255,255,255,0.045)",$t="rgba(255,255,255,0.09)",Et="rgba(255,255,255,0.08)",Be="#f3f5f2",nt="rgba(243,245,242,0.62)",Ve="rgba(243,245,242,0.4)";async function dr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await at(e,t,i);return}await bt(e,t)}async function bt(e,t,i="waiting"){var v,h;const{state:n}=t,r=n.profile.id,{data:o}=await _.from("mini_league_members").select("league_id").eq("user_id",r),a=(o||[]).map(k=>k.league_id),{data:s,error:l}=await _.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=l?(await _.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],g=(a.length?await _.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],x=g.filter(k=>k.status==="waiting"&&!k.is_archived),f=g.filter(k=>k.status==="active"&&!k.is_archived),m=g.filter(k=>k.is_archived||k.status==="finished");let p=m;if(m.length){const{data:k}=await _.from("mini_league_matches").select("league_id").in("league_id",m.map(C=>C.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),y=new Set((k||[]).map(C=>C.league_id));p=m.filter(C=>y.has(C.id))}const u=c.filter(k=>!a.includes(k.id)),b=[{key:"waiting",label:"🟡 En attente",count:x.length+u.length},{key:"active",label:"🟢 En cours",count:f.length},{key:"archived",label:"📁 Archivées",count:p.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Be}">🏆 Mini League</div>
        <div style="font-size:12px;color:${nt}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${$t};border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Be}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et}">
      ${b.map(k=>`<button class="ml-tab" data-tab="${k.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===k.key?zn:"transparent"};background:none;font-size:12px;font-weight:${i===k.key?"900":"600"};color:${i===k.key?"#4ade80":Ve};cursor:pointer">${k.label}${k.count?` (${k.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?lr(x,u,r):i==="active"?cr(f,r):pr(p,r)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>ur(e,t)),(h=document.getElementById("ml-refresh-list"))==null||h.addEventListener("click",()=>bt(e,t,i)),e.querySelectorAll(".ml-tab").forEach(k=>k.addEventListener("click",()=>bt(e,t,k.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(k=>k.addEventListener("click",()=>at(e,t,k.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(k=>k.addEventListener("click",y=>{y.stopPropagation(),In(e,t,k.dataset.join,k.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(k=>k.addEventListener("click",y=>{y.stopPropagation(),zi(e,t,k.dataset.delete,k.dataset.name,i)}))}function li(e,t,i=!1){var a,s;const n=e.creator_id===t,r=e.pot||0,o=((s=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:${Ot};border:1px solid ${$t};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Be}">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${nt};margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${o}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${r>0?`<span style="color:${mt};font-weight:700">🏆 ${r.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function lr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ve};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>li(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ve};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>li(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ve}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function cr(e,t){return e.length?e.map(i=>li(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ve}">Aucune mini league en cours.</div>`}function pr(e,t){return e.length?e.map(i=>li(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ve}">Aucune mini league archivée.</div>`}function ur(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,p,u,b;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:d,error:g}=await _.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:l,max_players:o,entry_fee:a}).select().single();if(g){n("Erreur : "+g.message,"error");return}const{data:x}=await _.from("users").select("credits").eq("id",t.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await _.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await _.from("users").update({credits:x.credits-a}).eq("id",t.state.profile.id),await _.from("mini_leagues").update({pot:a}).eq("id",d.id),await _.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=x.credits-a);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),at(e,t,d.id)})}function fr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function In(e,t,i,n){var g;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await fr(),s===null))return;const{data:l,error:c}=await _.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",c||l),r((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:x}=await _.from("users").select("credits").eq("id",a).single();o.profile&&x&&(o.profile.credits=x.credits);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(((g=o.profile)==null?void 0:g.credits)||0).toLocaleString("fr")}`)}o.profile&&(o.profile.credits=me.credits-fee);const d=document.getElementById("nav-credits");d&&(d.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`✅ Inscrit ! −${fee.toLocaleString("fr")} cr. · Pot : ${((league.pot||0)+fee).toLocaleString("fr")} cr.`,"success"),at(e,t,i)}async function gr(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(x=>{const f=document.createElement("div");f.className="modal-overlay",f.style.zIndex="2100",f.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(f),f.querySelector("#lv-ok").onclick=()=>{f.remove(),x(!0)},f.querySelector("#lv-cancel").onclick=()=>{f.remove(),x(!1)}}))return;const{data:l,error:c}=await _.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(l!=null&&l.success)){r((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const d=l.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+d);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${d.toLocaleString("fr")} cr. remboursés`,"success"),bt(e,t,"waiting")}async function zi(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await _.from("mini_league_matches").delete().eq("league_id",i),await _.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await _.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),bt(e,t,r)}async function mr(e,t,i){await _.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),bt(e,t,"archived")}async function at(e,t,i){var k,y,C,E,G,N,ne,ie,Q;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:l}]=await Promise.all([_.from("mini_leagues").select("*").eq("id",i).single(),_.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),_.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await bt(e,t);return}const c=(s||[]).some(M=>M.user_id===o),d=a.creator_id===o,g=(s||[]).map(M=>M.user).filter(Boolean),x=vr(g,l||[]),f=(l||[]).filter(M=>M.matchday===a.current_day),m=a.pot||0,p=a.entry_fee||100,u=f.length>0&&f.every(M=>M.status==="finished"||M.status==="bye"),b=a.current_day>=a.total_days,v=(s||[]).find(M=>M.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Be}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${$t};border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Be};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Be}">${a.name}</div>
        <div style="font-size:11px;color:${nt}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${mt};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Ot};border:1px solid ${$t};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Be}">👥 Joueurs (${g.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${nt};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*g.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*g.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*g.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*g.length*.1).toLocaleString("fr")})</div>
        ${g.map(M=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Et}">
            <div style="width:36px;height:36px;border-radius:50%;background:${M.club_color2||zn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${M.club_color1||"#fff"}">${(M.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Be}">${M.club_name||M.pseudo}</div><div style="font-size:11px;color:${Ve}">@${M.pseudo}</div></div>
            ${M.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${d&&g.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${g.length})</button>`:""}
        ${d?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!d?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Ot};border:1px solid ${$t};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${f.map(M=>nn(M,g,o,c)).join("")}
        ${d&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${Ot};border:1px solid ${$t};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ve};text-transform:uppercase;border-bottom:2px solid ${Et}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${mt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map((M,w)=>{const j=m>0&&a.status==="finished"?w===0?Math.floor(m*.7):w===1?Math.floor(m*.2):w===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${Et};${M.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${w===0?mt:w<3?"#4ade80":nt}">${["🥇","🥈","🥉"][w]||w+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Be}">${M.clubName}</div><div style="font-size:10px;color:${Ve}">@${M.pseudo}</div></td>
              <td style="text-align:center;color:${nt}">${M.played}</td><td style="text-align:center;color:${nt}">${M.won}-${M.drawn}-${M.lost}</td>
              <td style="text-align:center;color:${M.goalDiff>=0?"#4ade80":"#ff6b6b"}">${M.goalDiff>=0?"+":""}${M.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Be}">${M.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${mt}">${j?j.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Ot};border:1px solid ${$t};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(M,w)=>w+1).reverse().map(M=>{const w=(l||[]).filter(j=>j.matchday===M);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ve};margin-bottom:6px">Journée ${M}</div>${w.map(j=>nn(j,g,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${nt}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((k=document.getElementById("ml-back"))==null||k.addEventListener("click",()=>bt(e,t,h)),(y=document.getElementById("ml-refresh"))==null||y.addEventListener("click",async M=>{const w=M.currentTarget;w.style.opacity="0.5",await at(e,t,i)}),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>xr(e,t,a,g)),(E=document.getElementById("ml-next-day"))==null||E.addEventListener("click",()=>yr(e,t,i)),(G=document.getElementById("ml-join-now"))==null||G.addEventListener("click",()=>In(e,t,i,a.type)),(N=document.getElementById("ml-leave-btn"))==null||N.addEventListener("click",()=>gr(e,t,i,p)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>zi(e,t,i,a.name,"waiting")),(ie=document.getElementById("ml-delete-now"))==null||ie.addEventListener("click",()=>zi(e,t,i,a.name,h)),(Q=document.getElementById("ml-archive-btn"))==null||Q.addEventListener("click",()=>mr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(M=>{M.addEventListener("click",()=>{const w=f.find(j=>j.id===M.dataset.playMatch);w&&t.navigate("match-mini-league",{mlMatchId:w.id,leagueId:i})})}),a.status==="finished"&&v){const M=x.findIndex(w=>w.userId===o);M>=0&&M<3&&v.prize_amount>0&&!v.prize_claimed&&setTimeout(()=>br(e,t,a,v,M),400)}}function nn(e,t,i,n,r=!1){const o=g=>t.find(x=>x.id===g);if(e.is_bye){const g=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${nt};text-align:center">🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),l=e.home_id===i||e.away_id===i,c=l&&e.status==="pending"&&n&&!r,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":Et}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Be};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ve}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Be};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function xr(e,t,i,n){const{toast:r,state:o}=t,a=hr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,d)=>c.forEach(g=>s.push({league_id:i.id,matchday:d+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})));const{error:l}=await _.from("mini_league_matches").insert(s);if(l){r("Erreur calendrier : "+l.message,"error");return}await _.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),at(e,t,i.id)}async function yr(e,t,i){const{data:n}=await _.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){at(e,t,i);return}await _.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),at(e,t,i)}async function br(e,t,i,n,r){var x,f;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,d=n.prize_claimed,g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",g.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${mt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${mt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${mt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(g),(x=g.querySelector("#prize-close"))==null||x.addEventListener("click",()=>g.remove()),(f=g.querySelector("#claim-prize-btn"))==null||f.addEventListener("click",async m=>{const p=m.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await _.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const v=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=v);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${v.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}g.remove(),at(e,t,i.id)})}function hr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const l=[],c=[n[0],...o];for(let d=0;d<r/2;d++){const g=c[d],x=c[r-1-d];g===null?l.push({bye:x}):x===null?l.push({bye:g}):l.push({home:g,away:x})}a.push(l),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function vr(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function on(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,l=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:d}=await _.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(d||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==l&&c.away_id!==l){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const g=c.home_id===l;if(c.match_id){await It(e,t,c.match_id,g,{mlLeagueId:a,mlMatchId:s});return}await ui(e,t,"mini_league",async({deckId:x,gcCardsEnriched:f,gcDefs:m,stadiumDef:p})=>{ot(e);const u=async b=>{const{data:v,error:h}=await _.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:l,p_deck_id:x});if(h||!(v!=null&&v.success)){console.error("[MiniLeague] start_mini_league_match error:",h||v),r((v==null?void 0:v.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(v.matched){await It(e,t,v.match_id,g,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:m,stadiumDef:p});return}await wr(e,t,{mlMatchId:s,leagueId:a,amIHome:g,chosenGC:b,gcDefs:m,stadiumDef:p})};if(!(f!=null&&f.length)){await u([]);return}ci(e,f,u)})}function wr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(l=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let d=!1;const g=async u=>{if(!d){if(d=!0,clearInterval(m),f)try{f.unsubscribe()}catch{}u&&await It(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),l()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(d=!0,clearInterval(m),f)try{f.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),l()});const x=async()=>{if(d)return;const{data:u}=await _.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&g(u.match_id)},f=_.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&g(u.new.match_id)}).subscribe(),m=setInterval(x,3e3);x()})}const _r="/",kr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function $r(e,t,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var d,g,x;const s=t[n],l=n===t.length-1,c=Math.round((n+1)/t.length*100);r.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${_r}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(f=>{f.style.paddingLeft="20px",f.style.marginTop="6px",f.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(f=>{f.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(f=>{f.style.marginBottom="8px"}),(d=r.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,o()}),(g=r.querySelector("#tuto-next"))==null||g.addEventListener("click",()=>{l?a():(n++,o())}),(x=r.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await _.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function Er(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await _.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:l}=await _.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):kr;$r(e,a,()=>t("boosters"))}const ni={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Bt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function Lr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Pi(e,t)}async function Pi(e,t){const{state:i,toast:n}=t,{data:r}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await _.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(r||[]).filter(p=>p.seller_id!==i.profile.id),s=o||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let l="buy";const c=()=>{var p,u,b,v,h,k,y;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((k=document.getElementById("flt-note1"))==null?void 0:k.value)||0,note2:parseInt((y=document.getElementById("flt-note2"))==null?void 0:y.value)||0}};function d(p){const u=c();return p.filter(b=>{var N,ne,ie;const v=(N=b.card)==null?void 0:N.player;if(!v)return!1;const h=`${v.firstname} ${v.surname_real}`.toLowerCase(),k=(((ne=v.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),y=(v.country_code||"").toLowerCase(),C=((ie=b.card)==null?void 0:ie.evolution_bonus)||0,E=Bt(v,v.job,C),G=v.job2?Bt(v,v.job2,C):0;return!(u.name&&!h.includes(u.name)||u.club&&!k.includes(u.club)||u.country&&!y.includes(u.country)||u.job&&v.job!==u.job||u.rarity&&v.rarity!==u.rarity||u.note1&&E<u.note1||u.note2&&G<u.note2)})}function g(p){var G,N,ne,ie;const u=(G=p.card)==null?void 0:G.player;if(!u)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,v=Bt(u,u.job,b),h=u.job2?Bt(u,u.job2,b):0,k=(i.profile.credits||0)>=p.price,y=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=ni[u.job]||"#bbb",E=u.job2?ni[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ne=u.clubs)!=null&&ne.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ie=p.seller)==null?void 0:ie.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${k?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${k?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function x(p){var G,N,ne,ie;const u=(G=p.card)==null?void 0:G.player;if(!u)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,v=Bt(u,u.job,b),h=u.job2?Bt(u,u.job2,b):0,k=p.status==="sold",y=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=ni[u.job]||"#bbb",E=u.job2?ni[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${k?"opacity:0.7":""}">
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ne=u.clubs)!=null&&ne.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${k?"#22c55e":"#999"};margin-top:1px">
          ${k?`✅ Vendu à ${((ie=p.buyer)==null?void 0:ie.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${k?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function f(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=l==="buy"?"flex":"none",l==="buy"){const b=d(a);p.innerHTML=b.length?b.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,k)=>new Date(k.listed_at)-new Date(h.listed_at)),v=s.filter(h=>h.status==="sold").sort((h,k)=>new Date(k.sold_at||k.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(x).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(x).join(""):"")+(!b.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>Tr(b.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>Ir(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const b=u===p;u.style.background=b?"var(--green)":"#fff",u.style.color=b?"#fff":"var(--gray-600)",u.style.borderColor=b?"var(--green)":"var(--gray-200)"}),f()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(f,250)})}),f()}async function Tr(e,t,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=t.find(d=>d.id===e);if(!s)return;const l=s.price;if((r.profile.credits||0)<l){o("Crédits insuffisants","error");return}zr(s,async()=>{const{error:d}=await _.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:r.profile.id});if(d){o("Erreur achat : "+d.message,"error");return}await a();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await Pi(i,n)})}function zr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function Ir(e,t,i){const{toast:n}=i,{data:r}=await _.from("market_listings").select("card_id").eq("id",e).single();if(await _.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await _.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),Pi(t,i)}async function Sr(e,t){var d,g,x,f;const{state:i,navigate:n}=t,r=((g=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:g.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:a}]=await Promise.all([_.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),_.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=r;function l(){var p,u;const m=document.getElementById("rankings-list");if(m){if(s==="global"){const b=o||[];m.innerHTML=b.length>0?b.map((v,h)=>`
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
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const b=a||[];m.innerHTML=b.length>0?b.map((v,h)=>{const k=Mi(v.mmr??1e3),y=(v.ranked_wins||0)+(v.ranked_losses||0)+(v.ranked_draws||0),C=y>0?Math.round((v.ranked_wins||0)/y*100):0,E=v.id===i.profile.id,G=(v.placement_matches||0)<10;return`
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
              <div style="font-size:20px">${G?"❓":k.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${k.color}">${G?"Placement":k.label}</div>
              ${G?"":`<div style="font-size:10px;color:var(--gray-600)">${C}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=c(s==="global")),(u=document.getElementById("tab-ranked"))!=null&&u.style&&(document.getElementById("tab-ranked").style.cssText=c(s==="ranked"))}}const c=m=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${m?"900":"400"};background:${m?"var(--green)":"rgba(255,255,255,0.06)"};color:${m?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,l(),(x=document.getElementById("tab-global"))==null||x.addEventListener("click",()=>{s="global",l()}),(f=document.getElementById("tab-ranked"))==null||f.addEventListener("click",()=>{s="ranked",l()})}async function Ar(e,t){var C,E,G,N;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([_.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),_.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(C=document.getElementById("ranked-back"))==null||C.addEventListener("click",()=>n("home"));return}const l=s.mmr??1e3,c=s.mmr_deviation??350,d=s.mmr_volatility??.06,g=s.placement_matches??0,x=g<10,f=Math.max(0,10-g),m=Mi(l),p=jn(l),u=mi.findIndex(ne=>ne.id===m.id),b=mi[u+1]||null,v={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),k=h>0?Math.round((s.ranked_wins||0)/h*100):0,y=mi.map(ne=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${m.id===ne.id?1:.35};
      transform:${m.id===ne.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${m.id===ne.id?"28px":"20px"}">${ne.emoji}</div>
      <div style="font-size:9px;color:${ne.color};font-weight:${m.id===ne.id?"900":"400"};letter-spacing:0.5px">${ne.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${v[m.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${b?b.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${y}
    </div>

    <!-- Placement / Stats -->
    ${x?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${g}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${f} match${f>1?"s":""} — gains et pertes ×2</div>
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
    ${a?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${a.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(a.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
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
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(G=document.getElementById("ranked-leaderboard-btn"))==null||G.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:l,rd:c,sigma:d,isPlacement:x}})})}async function Mr(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(d=>d.status==="finished"),l=(o||[]).filter(d=>d.status==="in_progress");function c(d){const g=d.home_id===r.id;g?d.home_score:d.away_score,g?d.away_score:d.home_score;const x=d.winner_id===r.id,f=d.home_score===d.away_score&&d.status==="finished",m=d.status!=="finished"?"…":f?"N":x?"V":"D",p=d.status!=="finished"||f?"#888":x?"#1A6B3C":"#c0392b";let u=a[d.mode]||d.mode;d.away_id===null&&!u.startsWith("IA")&&(u="IA");const v=d.home_id===r.id?d.away:d.home;let h;d.away_id===null?h=u:v?h=`${v.club_name||v.pseudo} (${v.pseudo})`:h="Adversaire";let k="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(d.created_at),C=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${C}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
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
  </div>`}Cn(qn);const we={user:null,profile:null,page:"home",params:{}};function qt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function jr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ht(){if(!we.user)return;const{data:e}=await _.from("users").select("*").eq("id",we.user.id).single();e&&(we.profile=e)}function Ut(e,t={}){we.page=e,we.params=t,Sn()}async function Sn(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===we.page)});const t=document.getElementById("nav-credits");t&&we.profile&&(t.textContent=`💰 ${(we.profile.credits||0).toLocaleString("fr")}`);const i={state:we,navigate:Ut,toast:qt,openModal:jr,closeModal:Ii,refreshProfile:Ht};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',we.page){case"home":await Ki(e,i);break;case"collection":await co(e,i);break;case"decks":await wi(e,i);break;case"boosters":await ko(e,i);break;case"ranked":await Ar(e,i);break;case"match":{const s=we.params&&we.params.matchMode||"vs_ai_easy";s==="random"?await Ti(e,i,!1):s==="ranked"?await Ti(e,i,!0):s==="friend"?await rr(e,i,(n=we.params)==null?void 0:n.friendId,(r=we.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await on(e,i,(o=we.params)==null?void 0:o.mlMatchId,(a=we.params)==null?void 0:a.leagueId):await Fo(e,i);break}case"market":await Lr(e,i);break;case"rankings":await Sr(e,i);break;case"matches":await Mr(e,i);break;case"friends":await On(e,i);break;case"mini-league":await dr(e,i);break;case"match-mini-league":{const s=we.params||{};await on(e,i,s.mlMatchId,s.leagueId);break}default:await Ki(e,i)}}function Cr(){var n;const e=document.getElementById("app"),t=we.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.19-1155" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(r=>{r.addEventListener("click",o=>{o.preventDefault(),Ut(r.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ut("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ut("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Br())}async function Br(){const{data:e}=await _.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${r}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function qr(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
  <style>
    #public-landing{
      --gold:#D4A017; --ink:#f3f5f2; --ink-dim:rgba(243,245,242,0.65); --ink-faint:rgba(243,245,242,0.42);
      min-height:100vh; box-sizing:border-box;
      background:
        radial-gradient(1100px 700px at 15% -10%, rgba(212,160,23,0.10), transparent 60%),
        radial-gradient(1400px 900px at 85% 10%, rgba(26,107,60,0.35), transparent 55%),
        linear-gradient(180deg, #081308, #0d1a0f 40%, #123018);
      color:var(--ink); font-family:'Inter', system-ui, sans-serif; line-height:1.6;
      display:flex; flex-direction:column; align-items:center; padding:32px 20px 60px;
    }
    #public-landing *{box-sizing:border-box}
    #public-landing .pl-wrap{max-width:640px; width:100%; text-align:center}
    #public-landing .pl-eyebrow{font-weight:700; letter-spacing:0.24em; text-transform:uppercase; font-size:11px; color:var(--gold); margin-bottom:12px}
    #public-landing h1{font-size:clamp(28px,7vw,42px); font-weight:900; line-height:1.05; margin:0 0 16px}
    #public-landing h1 em{font-style:normal; color:var(--gold)}
    #public-landing p.pl-lede{color:var(--ink-dim); font-size:15px; max-width:460px; margin:0 auto 26px}
    #public-landing .pl-btn{
      display:inline-flex; align-items:center; gap:8px; padding:14px 30px; border-radius:999px;
      background:var(--gold); color:#141000; font-weight:700; font-size:15px; border:none; cursor:pointer;
      box-shadow:0 10px 30px -8px rgba(212,160,23,0.55);
    }
    #public-landing .pl-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:44px 0}
    #public-landing .pl-card{background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; text-align:left}
    #public-landing .pl-card .pl-ico{font-size:20px; margin-bottom:10px}
    #public-landing .pl-card h3{font-size:15px; margin:0 0 6px; color:var(--ink)}
    #public-landing .pl-card p{font-size:13px; color:var(--ink-dim); margin:0}
    #public-landing .pl-foot{margin-top:30px; font-size:13px; color:var(--ink-faint)}
    #public-landing .pl-foot a{color:var(--ink-dim); text-decoration:none; margin:0 10px}
    #public-landing .pl-foot a:hover{color:var(--ink)}
    #public-landing .pl-logo{height:36px; margin-bottom:26px}
    @media (max-width:620px){ #public-landing .pl-grid{grid-template-columns:1fr} }
  </style>
  <div id="public-landing">
    <div class="pl-wrap">
      <img class="pl-logo" src="${i}logo-withname.png" alt="Manager Wars">
      <p class="pl-eyebrow">Jeu de cartes football — gratuit</p>
      <h1>Composez votre onze,<br><em>activez vos liens</em>,<br>gagnez le duel.</h1>
      <p class="pl-lede">Placez vos joueurs sur une grille de formation, activez des bonus de club et de pays entre joueurs adjacents, et affrontez d'autres managers en duel tour par tour.</p>
      <button id="pl-play-btn" class="pl-btn">Jouer maintenant</button>

      <div class="pl-grid">
        <div class="pl-card">
          <div class="pl-ico">🃏</div>
          <h3>Construisez votre deck</h3>
          <p>Collectionnez des joueurs et assemblez votre onze titulaire.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">🔗</div>
          <h3>Activez les liens</h3>
          <p>Club ou pays partagé entre joueurs adjacents : bonus garanti.</p>
        </div>
        <div class="pl-card">
          <div class="pl-ico">⚔️</div>
          <h3>Duel tour par tour</h3>
          <p>Attaquez, défendez, et affrontez IA, amis ou inconnus.</p>
        </div>
      </div>

      <div class="pl-foot">
        <a href="/accueil.html">En savoir plus</a>
        <a href="/confidentialite.html">Confidentialité</a>
        <a href="/contact.html">Contact</a>
      </div>
    </div>
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function Dr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ii()}),document.getElementById("modal-close").addEventListener("click",Ii);const{data:{session:e}}=await _.auth.getSession();if(!e){rn(),qr(document.getElementById("app"),{onPlay:()=>Oi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:qt})});return}we.user=e.user,await Ht(),rn();try{const{data:i}=await _.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),Bn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!we.profile){Fn(document.getElementById("app"),{state:we,navigate:async()=>{await Ht(),vi()},toast:qt,refreshProfile:Ht});return}const t=Array.isArray(we.profile.pending_boosters)?we.profile.pending_boosters:[];if(!we.profile.onboarding_done&&t.length>0){Ao(document.getElementById("app"),{state:we,navigate:()=>vi(),toast:qt,refreshProfile:Ht});return}vi(),setTimeout(()=>Er(we.profile,Ut,qt),800),_.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(we.user=null,we.profile=null,document.getElementById("app").innerHTML="",Oi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:qt}))})}function Fr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function fi(){const e=document.getElementById("app");e&&(e.style.height=Fr()+"px")}window.addEventListener("resize",fi);window.addEventListener("orientationchange",()=>setTimeout(fi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",fi);function vi(){const e=()=>{var i;(i=we.user)!=null&&i.id&&_.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",we.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",fi(),Cr(),Sn()}function rn(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function An(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Dr().catch(e=>{console.error("Échec du démarrage:",e),An()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&An("Le serveur met trop de temps à répondre.")},12e3);
