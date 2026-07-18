const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-yJiMLlPw.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as w,l as Gt,F as Ii,r as Se,j as Jt,m as on,h as Si,n as Mn,o as jn,T as gi,k as Cn,p as Bn,b as qn}from"./formation-links-yJiMLlPw.js";const Dn="/";function Ri(e,{navigate:t,toast:i}){let n="login";const o=()=>{var a,s,l,c,d,u;const r=n==="login";e.innerHTML=`
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
            flex:1;padding:16px;border:none;background:${r?"rgba(26,107,60,0.3)":"transparent"};
            color:${r?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${r?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${r?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${r?"transparent":"rgba(26,107,60,0.3)"};
            color:${r?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${r?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${r?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${r?`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",o()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",o()}),r?((l=document.getElementById("login-password"))==null||l.addEventListener("keydown",x=>{var m;x.key==="Enter"&&((m=document.getElementById("login-btn"))==null||m.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),m=document.getElementById("login-password").value,g=document.getElementById("login-error");if(g.textContent="",!x||!m){g.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:f}=await w.auth.signInWithPassword({email:x,password:m});if(p.textContent="⚽ Se connecter",p.disabled=!1,f){g.textContent=f.message.includes("Invalid")?"Email ou mot de passe incorrect.":f.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",x=>{var m;x.key==="Enter"&&((m=document.getElementById("reg-btn"))==null||m.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const x=document.getElementById("reg-email").value.trim(),m=document.getElementById("reg-password").value,g=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!x||!m||!g){p.textContent="Remplissez tous les champs.";return}if(m.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(m!==g){p.textContent="Les mots de passe ne correspondent pas.";return}const f=document.getElementById("reg-btn");f.textContent="⏳ Création…",f.disabled=!0;const{error:h}=await w.auth.signUp({email:x,password:m});if(f.textContent="🚀 Créer mon compte",f.disabled=!1,h){p.textContent=h.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",o(),setTimeout(()=>{const _=document.getElementById("login-email");_&&(_.value=x)},50)}))};o()}function Fn(e,{state:t,navigate:i,toast:n,refreshProfile:o}){let r="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${r}">
          <span id="logo-initials" style="color:${r}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${r};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${r}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),u=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",x=u.trim().split(" ").filter(Boolean),m=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():u.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=r),d&&(d.textContent=m,d.style.color=r)}document.getElementById("color1").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch1").style.background=r,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function l(c){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",c.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await w.from("users").select("id").eq("pseudo",c).maybeSingle();if(u){d.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",c.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await w.from("users").select("id").eq("club_name",c).maybeSingle();if(u){d.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),x=document.getElementById("step3-finish");u.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:m}=await w.from("users").insert({id:t.user.id,pseudo:c,club_name:d,club_color1:r,club_color2:a,credits:1e4});if(m)throw m;await Pn(t.user.id),await o(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function Pn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await w.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Gn="modulepreload",Rn=function(e){return"/"+e},Ni={},rn=function(t,i,n){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(i.map(l=>{if(l=Rn(l),l in Ni)return;Ni[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Gn,c||(u.as="script"),u.crossOrigin="",u.href=l,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((x,m)=>{u.addEventListener("load",x),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},Ut="#1A6B3C",Kt="#cc2222",Nn="#D4A017",Oi="#888";async function On(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await an(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Un(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>sn(i,n,null,t))}async function an(e,t,i={}){const{navigate:n}=i,o=e.user.id,{data:r,error:a}=await w.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${o},addressee_id.eq.${o}`),{count:s}=await w.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",o).eq("status","pending"),l=document.getElementById("pending-badge");l&&(s>0?(l.style.display="flex",l.textContent=s):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${Kt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const d=(r||[]).map(m=>m.requester_id===o?m.addressee_id:m.requester_id);let u={};if(d.length){const{data:m}=await w.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(m||[]).forEach(g=>{u[g.id]=g})}const x=(r||[]).map(m=>({friendshipId:m.id,friend:u[m.requester_id===o?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!x.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:m,friend:g})=>Hn(g,m)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>Kn(e,m.dataset.stats,m.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",async()=>{const g=m.dataset.friendId,p=m.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const f=e.user.id,{data:h}=await w.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",f).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),_=!!h;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:_}),n("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:_})})})}function Hn(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",o=(n||i).slice(0,2).toUpperCase(),r=e.club_color2||Ut,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,l=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${r};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${o}
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
    </div>`}function Un(e,t){const i=Ai();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Kt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Mi()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),o=i.querySelector("#add-friend-error"),r=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",r),i.addEventListener("click",a=>{a.target===i&&r()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){o.textContent="Entre un pseudo";return}o.textContent="";const{data:s}=await w.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){o.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){o.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await w.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(l){const d=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";o.textContent=d;return}const{error:c}=await w.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){o.textContent="Erreur : "+c.message;return}r(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function sn(e,t,i=null,n={}){const o=e.user.id,{data:r}=await w.from("friendships").select("id, requester_id").eq("addressee_id",o).eq("status","pending").order("created_at",{ascending:!1}),a=(r||[]).map(x=>x.requester_id);let s={};if(a.length){const{data:x}=await w.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(m=>{s[m.id]=m})}const l=(r||[]).map(x=>({...x,requester:s[x.requester_id]||{pseudo:"?"}})),c=Ai(),d=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(x=>{var m,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=x.requester)==null?void 0:m.club_name)||((g=x.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=x.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ut};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Kt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Mi()}`,document.body.appendChild(c);const u=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",u),c.addEventListener("click",x=>{x.target===c&&u()}),c.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:m}=await w.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}x.closest("div[style]").remove(),t("✅ Ami accepté !","success"),an(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await w.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Kn(e,t,i){const n=e.user.id,[o,r]=[n,t].sort(),a=n===o,{data:s}=await w.from("friend_match_stats").select("*").eq("player1_id",o).eq("player2_id",r).single(),l=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},d=a?c.wins_p1||0:c.wins_p2||0,u=a?c.wins_p2||0:c.wins_p1||0,x=c.draws||0,m=a?c.goals_p1||0:c.goals_p2||0,g=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,f=a?c.gc_used_p2||0:c.gc_used_p1||0,h=c.matches_total||0,_=($,y,j,E=Ut,F=Kt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${y}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${F}">${j}</div>
    </div>`,b=Ai();b.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${h===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${_("Victoires",d,u)}
        ${_("Nuls",x,x,Oi,Oi)}
        ${_("Défaites",u,d)}
        ${_("Buts marqués",m,g)}
        ${_("Buts encaissés",g,m,Kt,Ut)}
        ${_("GC utilisés ⚡",p,f,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${h} match${h>1?"s":""} joué${h>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Mi()}`,document.body.appendChild(b),b.querySelector("#stats-close").addEventListener("click",()=>b.remove()),b.addEventListener("click",$=>{$.target===b&&b.remove()})}function Ai(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Mi(){return`
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
        background:${Ut};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Vn="2026.07.18-2233";async function Hi(e,{state:t,navigate:i,toast:n}){var r,a;const o=t.profile;o&&(e.innerHTML=`
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
      background: linear-gradient(135deg, ${o.club_color1}cc, ${o.club_color2}88);
      border: 1.5px solid ${o.club_color2};
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
          <h3>${o.pseudo}</h3>
          <div class="level">Niveau ${o.level} · ${o.club_name}</div>
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
        ${o.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Vn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,x,m,g,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,l=((x=document.querySelector(".top-nav"))==null?void 0:x.offsetHeight)||56,c=((m=document.querySelector(".bottom-nav"))==null?void 0:m.offsetHeight)||60;if(e.querySelector(".home-inner")){const f=s-l-c;e.querySelector(".home-dark").style.minHeight=f+"px"}if(window.innerWidth<768){const f=((g=e.querySelector(".home-hero"))==null?void 0:g.offsetHeight)||60,h=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const _=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,b=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((N,ne)=>{var ie;return N+(((ie=document.getElementById(ne))==null?void 0:ie.offsetHeight)||0)},0),$=12*5,y=s-l-c-f-_-b-$-32,j=Math.max(80,Math.round(y*.28)),E=Math.max(160,Math.round(y*.72)),F=Math.floor((E-10)/2);h&&(h.style.minHeight=h.style.maxHeight=j+"px"),e.querySelectorAll(".play-tile").forEach(N=>{N.style.minHeight=N.style.height=F+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(N=>{N.style.height=Math.round(F*.55)+"px"})}}),(r=document.getElementById("nav-rankings"))==null||r.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const l=s.dataset.action;if(l==="match-ai"){Jn(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()}),ln(t,n),Xn(t,n,i),dn(t,n,i))}async function dn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const o=e.profile.id,{data:r}=await w.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${o},away_id.eq.${o}`).order("created_at",{ascending:!1});if(!(r!=null&&r.length)){n.innerHTML="";return}const a=r.map(l=>l.home_id===o?l.away_id:l.home_id).filter(Boolean);let s={};if(a.length){const{data:l}=await w.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=r.map(l=>{const c=l.home_id===o?l.away_id:l.home_id,d=s[c]||"Adversaire",u=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:d}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await rn(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>rr);return{resumePvpMatch:u}},void 0);d(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{Wn(async()=>{await Yn(l.dataset.abandon,l.dataset.opp,o),t("Match abandonné (défaite 3-0)","info"),dn(e,t,i)})})})}async function Yn(e,t,i){const{data:n}=await w.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const o=n.home_id===i,r=o?0:3,a=o?3:0,s=n.game_state||{};s.p1Score=r,s.p2Score=a,s.phase="finished",s.forfeit=!0,await w.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:r,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await w.from("mini_league_matches").update({status:"finished",home_score:r,away_score:a}).eq("match_id",e)}function Wn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Xn(e,t,i){var s,l,c,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:o}=await w.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!o){n.innerHTML="";return}const r=((s=o.inviter)==null?void 0:s.club_name)||((l=o.inviter)==null?void 0:l.pseudo)||"?",a=o.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${r} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:r,isAccepting:!0})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await w.from("friend_match_invites").update({status:"declined"}).eq("id",o.id),n.innerHTML="",t("Invitation refusée","info")})}async function ln(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:o}=await w.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(o||!(n!=null&&n.length)){i.innerHTML="";return}const r=n.length,a=n.slice(0,2).map(l=>{var c;return((c=l.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=r>2?` +${r-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${r} demande${r>1?"s":""} d'ami${r>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>sn(e,t,()=>ln(e,t)))}function Jn(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body" style="padding:16px">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${t.map(o=>`
          <div class="diff-card" data-mode="${o.mode}" style="cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:${o.bg};border:1px solid ${o.border};transition:transform .12s ease, box-shadow .12s ease">
            <div style="width:46px;height:46px;border-radius:12px;background:${o.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 10px -4px ${o.iconBg}">${o.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:800;font-size:15px;color:${o.text}">${o.label}</div>
              <div style="font-size:12px;color:${o.text};opacity:0.65;margin-top:1px">${o.desc}</div>
            </div>
            <div style="font-weight:900;font-size:12.5px;color:${o.text};background:rgba(255,255,255,0.6);padding:6px 11px;border-radius:999px;flex-shrink:0;white-space:nowrap">+${o.credits} cr.</div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-1px)",o.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),o.addEventListener("mouseleave",()=>{o.style.transform="",o.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(o=>{o.addEventListener("click",()=>{n(),e("match",{matchMode:o.dataset.mode})})})}const Me={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ge(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ui=["ATT","MIL","DEF","GK"];function Qn(e,t){if(!e||!t)return!1;const i=e._col!=null&&t._col!=null&&e._col===t._col,n=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=Ui.indexOf(e._line||e.job),r=Ui.indexOf(t._line||t.job),a=Math.abs(o-r)===1;return(e._line||e.job)===(t._line||t.job)&&n||i&&a}function cn(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let o=n+1;o<i;o++){const r=e[n],a=e[o];if(!r||!a||!Qn(r,a))continue;const s=Gt(r,a);s==="#00ff88"?t+=10:s==="#FFD700"&&(t+=5)}return t}function Vt(e,t={}){let i=0,n=0;e.forEach(s=>{const l=s._line||s.job,c=Number(l==="MIL"?s.note_m:s.note_a)||0,d=s.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;i+=t.doubleAttack?c*2:c,n+=(s.boost||0)+d});const o=i+n,r=cn(e);let a=o+r;return t.stolenNote&&(a-=t.stolenNote),{base:o,links:r,total:Math.max(0,a)}}function Yt(e,t={}){const i=e.reduce((r,a)=>{const s=a._line||a.job;let l=0;s==="GK"?l=Number(a.note_g)||0:s==="MIL"?l=Number(a.note_m)||0:l=Number(a.note_d)||0;const c=a.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return r+l+(a.boost||0)+c},0),n=cn(e);let o=i+n;return t.stolenNote&&(o-=t.stolenNote),{base:i,links:n,total:Math.max(0,o)}}function ji(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function pn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const o=[...n].sort((a,s)=>{const l=t==="attack"?Ge(a,"ATT"):a._line==="GK"?Ge(a,"GK"):Ge(a,"DEF");return(t==="attack"?Ge(s,"ATT"):s._line==="GK"?Ge(s,"GK"):Ge(s,"DEF"))-l});let r=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return o.slice(0,Math.min(r,o.length,3))}function Zn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const eo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function to(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const o=un(i),r=Number(i[t])||0;if(r<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??o)-o;return Math.min(s,Math.max(a,r+c))}function un(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function io(e,t){!e||!t||await Promise.all([Ki(e,"win"),Ki(t,"loss")])}async function Ki(e,t){const{data:i}=await w.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(o=>{var r,a;return((r=o.player)==null?void 0:r.rarity)==="pepite"||((a=o.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(o=>{const r=eo[o.player.rarity],a=t==="win"?r.win:r.loss,s=o.player.note_min??1,l=o.player.note_max??10,c=un(o.player),d=o.current_note??c,u=Math.min(l,Math.max(s,d+a));return w.from("cards").update({current_note:u}).eq("id",o.id)}))}const no={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},mi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Zt=["GK","DEF","MIL","ATT"],oo=["Tous","GK","DEF","MIL","ATT"],ro={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Vi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function ao(e){return e.length?e.reduce((t,i)=>Vi(i)>Vi(t)?i:t,e[0]):e[0]}function so(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const lo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function co(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function yi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,o={...i,_evolution_bonus:n},r=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${r}
    ${Se(o,{width:140})}
  </div>`}function Yi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Se(e,{width:140})}
  </div>`}async function po(e,t){const{state:i,navigate:n,toast:o,openModal:r,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await w.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(M=>M.card_type==="player"&&M.player),d=(s||[]).filter(M=>M.card_type==="game_changer"),u=(s||[]).filter(M=>M.card_type==="formation"),x=(s||[]).filter(M=>M.card_type==="stadium"),{data:m}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(m||[]).forEach(M=>{g[M.name]=M});const{data:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),f={};(p||[]).forEach(M=>{f[M.id]=M}),x.forEach(M=>{M.stadium_def&&(f[M.stadium_id]=M.stadium_def)});const h=Object.keys(Ii),_=Object.keys(Me),b={};c.forEach(M=>{const C=M.player.id;b[C]=(b[C]||0)+1}),new Set(Object.keys(b).map(M=>String(M)));const $=new Set(u.map(M=>M.formation)),y=new Set(d.map(M=>M.gc_type));let j="player",E="Tous",F="",N=!1;function ne(){return[...c].sort((M,C)=>{const D=Zt.indexOf(M.player.job),W=Zt.indexOf(C.player.job);return D!==W?D-W:(M.player.surname_real||"").localeCompare(C.player.surname_real||"")})}function ie(){return[...l||[]].sort((M,C)=>{const D=Zt.indexOf(M.job),W=Zt.indexOf(C.job);return D!==W?D-W:(M.surname_real||"").localeCompare(C.surname_real||"")})}function Q(){return ne().filter(M=>{const C=M.player,D=E==="Tous"||C.job===E,W=!F||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(F);return D&&W})}function U(){return ie().filter(M=>{const C=E==="Tous"||M.job===E,D=!F||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(F);return C&&D})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="player"?"var(--green)":"transparent"};
        color:${j==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="formation"?"var(--green)":"transparent"};
        color:${j==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="gc"?"var(--green)":"transparent"};
        color:${j==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="stadium"?"#E87722":"transparent"};
        color:${j==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function v(){const M=document.getElementById("col-filters");M&&(j==="player"?(M.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${F}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${oo.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===E?"var(--green)":"var(--gray-200)"};
                background:${C===E?"var(--green)":"#fff"};
                color:${C===E?"#fff":"var(--gray-600)"}">
              ${C}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{F=C.target.value.toLowerCase(),S()}),e.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{E=C.dataset.job,v(),S()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,v(),S()})):(M.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,v(),S()})))}function S(){const M=document.getElementById("col-grid");M&&(j==="player"?ke(M):j==="formation"?Y(M):j==="stadium"?R(M):J(M))}function G(M,C,D,W,K){const q=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!q||!O)return;var we=0;function _e(){const ye=window.innerWidth>=768,be=document.getElementById("col-big"),$e=document.getElementById("col-grid");ye&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),ye&&$e&&($e.style.height=Math.round(310*.76+16)+"px",$e.style.flexShrink="0",$e.style.overflowX="auto",$e.style.overflowY="hidden",$e.style.alignItems="center",$e.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+C(M[we])+"</div>";var Le=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Le&&Le.addEventListener("click",function(){W(M[we])}),requestAnimationFrame(function(){var ge=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ge||!O)){var Be=O.clientHeight-8,je=O.clientWidth-24,Oe=ge.offsetHeight,bt=ge.offsetWidth;if(Oe>0&&bt>0&&Be>40){var Xe=ye?2.2:1.6,Rt=Math.min(Be/Oe,je/bt,Xe);ge.style.transform="scale("+Rt.toFixed(3)+")",ge.style.transformOrigin="top center"}}}),q.innerHTML=M.map(function(ge,Be){var je=Be===we,Oe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(je?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Be+'" style="'+Oe+'">'+D(ge,je)+"</div>"}).join(""),q.querySelectorAll(".col-mini-item").forEach(function(ge){ge.addEventListener("click",function(){we=Number(ge.dataset.idx),_e(),ge.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function re(M){var C=window.innerWidth>=768?.76:.54,D;if(!M||M._fake){var W=M?M.player:null;if(!W)return"";D=Yi(W)}else D=yi(M,"");return'<div style="display:inline-block;zoom:'+C+';pointer-events:none;line-height:0">'+D+"</div>"}function ae(M,C,D){C=C||100,D=D||140;var W=Jt[M]||{},K={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},q=Math.max(3,Math.round(C*.06)),O=Object.entries(W).map(function(_e){var ye=_e[0],be=_e[1],$e=ye.replace(/\d+$/,""),Le=K[$e]||"#888",ge=Math.round(be.x*C),Be=Math.round(be.y*D);return'<circle cx="'+ge+'" cy="'+Be+'" r="'+q+'" fill="'+Le+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),we=Math.max(1,Math.round(C/50));return'<svg viewBox="0 0 '+C+" "+D+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+C+'" height="'+D+'" fill="#1A6B3C"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(D*.02)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(D*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/><line x1="0" y1="'+Math.round(D*.5)+'" x2="'+C+'" y2="'+Math.round(D*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><ellipse cx="'+Math.round(C*.5)+'" cy="'+Math.round(D*.5)+'" rx="'+Math.round(C*.18)+'" ry="'+Math.round(D*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+we+'"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(D*.82)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(D*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+we+'"/>'+O+"</svg>"}function se(M,C,D){var W=D>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+D+"</div>":"",K=C?'data-form-id="'+C.id+'"':"",q=M.length>7?14:M.length>5?16:19,O=!!C;return"<div "+K+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+W+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+q+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+M+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+ae(M,140,220)+"</div></div>"}function de(M,C){var D=window.innerWidth>=768?.76:.54,W=140,K=305,q=Math.round(K*.22),O=K-q,we=M.length>7?10:13,_e=ae(M,W,O),ye=C?"1.5px solid #2a7a40":"1px solid #ddd",be=C?"":"filter:grayscale(1);opacity:0.45;",$e=C?"#1A6B3C":"#bbb",Le="#fff";return'<div style="display:inline-block;zoom:'+D+';line-height:0;pointer-events:none"><div style="width:'+W+"px;height:"+K+"px;border-radius:6px;border:"+ye+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+q+"px;background:"+$e+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+we+"px;font-weight:900;color:"+Le+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(W-4)+'px">'+M+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function ke(M){if(N){const C=U();if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const D=C.map(W=>c.find(K=>K.player.id===W.id)||{_fake:!0,player:W,id:"fake-"+W.id});G(D,W=>W._fake?Yi(W.player):yi(W,""),W=>W._fake?re({player:W.player,id:"x",_fake:!0}):re(W),W=>{W._fake||Wi(W,c,b,t)})}else{const C=Q();if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const D={};C.forEach(K=>{const q=K.player.id;D[q]||(D[q]=[]),D[q].push(K)});const W=Object.values(D).map(K=>ao(K));G(W,K=>{const q=b[K.player.id]||1,O=q>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${q}</div>`:"",_e=c.filter(ye=>ye.player.id===K.player.id&&ye.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return yi(K,O+_e)},K=>re(K),K=>Wi(K,c,b,t))}}function Y(M){const C=N?h:[...$];if(!C.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const D=C.map(W=>({formation:W,card:u.find(K=>K.formation===W)||null,owned:$.has(W)}));G(D,({formation:W,card:K,owned:q})=>se(W,q?K:null,q?u.filter(O=>O.formation===W).length:0),({formation:W,owned:K})=>de(W,K),({card:W,owned:K})=>{K&&W&&fo(W,u,t,r)})}function J(M){const C=Object.keys(g),D=N?C.length?C:_:[...y];if(!D.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const W=D.map(K=>({type:K,gc:Me[K]||{icon:"⚡",desc:""},def:g[K]||null,owned:y.has(K),card:d.find(q=>q.gc_type===K)||null}));G(W,({type:K,gc:q,def:O,owned:we,card:_e})=>{var Xe;const ye=we?d.filter(Rt=>Rt.gc_type===K).length:0,be=ye>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ye}</div>`:"",$e=(O==null?void 0:O.gc_type)==="ultra_game_changer",Le={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ge={purple:"#b06ce0",light_blue:"#00d4ef"},Be=Le[O==null?void 0:O.color]||Le.purple,je=ge[O==null?void 0:O.color]||ge.purple,Oe=(O==null?void 0:O.effect)||q.desc||"",bt=O!=null&&O.image_url?`/icons/${O.image_url}`:((Xe=O==null?void 0:O.club)==null?void 0:Xe.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return we&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${K}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${je};background:${Be};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${je}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${K.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${K}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${$e?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${bt?`<img src="${bt}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${q.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Oe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${K}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${q.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:K,gc:q,def:O,owned:we})=>{const _e=window.innerWidth>=768?.76:.54,ye={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},$e=ye[O==null?void 0:O.color]||ye.purple,Le=be[O==null?void 0:O.color]||be.purple,ge=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return we?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${$e};border:1px solid ${Le};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${K}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ge?`<img src="${ge}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${q.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||q.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${q.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${K}</span></div></div>`},({type:K,owned:q,def:O})=>{q&&uo(K,O,r)})}function R(M){const C="#E87722",D="/";if(!x.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const W={};x.forEach(q=>{const O=q.stadium_id||"?";(W[O]=W[O]||[]).push(q)});const K=Object.entries(W).map(([q,O])=>({sid:q,def:f[q]||null,count:O.length,card:O[0]}));G(K,({def:q,count:O})=>{var Le,ge;const we=(q==null?void 0:q.name)||"?",_e=((Le=q==null?void 0:q.club)==null?void 0:Le.encoded_name)||(q==null?void 0:q.country_code)||"—",ye=q!=null&&q.image_url?`${D}icons/${q.image_url}`:((ge=q==null?void 0:q.club)==null?void 0:ge.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),be=ye?`<img src="${ye}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',$e=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${C},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${C}66">
          ${$e}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${we}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:q,count:O})=>{var Le,ge;const we=window.innerWidth>=768?.76:.54,_e=(q==null?void 0:q.name)||"?",ye=((Le=q==null?void 0:q.club)==null?void 0:Le.encoded_name)||(q==null?void 0:q.country_code)||"—",be=q!=null&&q.image_url?`${D}icons/${q.image_url}`:((ge=q==null?void 0:q.club)==null?void 0:ge.logo_url)||(q!=null&&q.country_code?`https://flagsapi.com/${q.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),$e=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${C},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${_e}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${$e}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${ye}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(M=>{M.addEventListener("click",()=>{j=M.dataset.tab,E="Tous",F="",N=!1,e.querySelectorAll(".col-tab-btn").forEach(C=>{const D=C.dataset.tab===j;C.style.borderBottomColor=D?"var(--green)":"transparent",C.style.color=D?"var(--green)":"var(--gray-600)"}),v(),S()})}),v(),S()}function uo(e,t,i){const n=Me[e]||{icon:"⚡",desc:"Effet spécial."},o=(t==null?void 0:t.gc_type)==="ultra_game_changer",r={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=r[t==null?void 0:t.color]||r.purple,l=a[t==null?void 0:t.color]||a.purple,c=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${o?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ei=1e3;function fo(e,t,i,n){var g,p,f;const{state:o,toast:r,closeModal:a,navigate:s,refreshProfile:l}=i,c=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const h=Jt[c]||{},_=Ii[c]||[],b=290,$=360,y=20;function j(F){const N=h[F];return N?{x:N.x*b,y:N.y*$}:null}let E=`<svg width="${b}" height="${$}" viewBox="0 0 ${b} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[F,N]of _){const ne=j(F),ie=j(N);!ne||!ie||(E+=`<line x1="${ne.x}" y1="${ne.y}" x2="${ie.x}" y2="${ie.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const F of Object.keys(h)){const N=j(F);if(!N)continue;const ne=F.replace(/\d+/,""),ie=d[ne]||"#555";E+=`<circle cx="${N.x}" cy="${N.y}" r="${y}" fill="${ie}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return E+="</svg>",E}const x=t.filter(h=>h.formation===c);x.length;const m=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${u()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${m?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ei}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ei.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const h=x.find(b=>!b.is_for_sale)||x[0];if(!h){r("Aucune carte à vendre","error");return}await w.from("market_listings").delete().eq("card_id",h.id),await w.from("transfer_history").delete().eq("card_id",h.id);const{error:_}=await w.from("cards").delete().eq("id",h.id);if(_){r(_.message,"error");return}await w.from("users").update({credits:(o.profile.credits||0)+ei}).eq("id",o.profile.id),await l(),r(`+${ei.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const h=parseInt(document.getElementById("sell-price-form").value);if(!h||h<1){r("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:h}).eq("id",e.id),await w.from("market_listings").insert({seller_id:o.profile.id,card_id:e.id,price:h}),r("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(f=document.getElementById("cancel-sell-form-btn"))==null||f.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),r("Annonce retirée","success"),a(),s("collection")})}async function Wi(e,t,i,n){var re,ae,se,de,ke;const{state:o,toast:r,openModal:a,closeModal:s,navigate:l,refreshProfile:c}=n,d=e.player,u=t.filter(Y=>Y.player.id===d.id),x=u.length,m=e.evolution_bonus||0,g=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?m:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?m:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?m:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?m:0)),p=d.rarity||"normal",{data:f}=await w.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((re=f==null?void 0:f[0])==null?void 0:re.price)??ro[p];const h=d.rarity!=="legende";co(d);const _=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:xi(d,d.job))+m,b=d.rarity==="pepite"||d.rarity==="papyte",$=d.job2?(b?to(e,so(d.job2)):xi(d,d.job2))+(xi(d,d.job2)>0?m:0):null;mi[d.job],d.job2&&mi[d.job2];const y=no[d.rarity]||"#ccc";lo[d.country_code]||d.country_code;const j=e.evolution_bonus||0,F=_+j,N=$||0,ne=N>0?N+j:0,ie=u.map(Y=>Y.id);let Q={};if(ie.length){const{data:Y}=await w.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(Y||[]).forEach(J=>{Q[J.card_id]||(Q[J.card_id]=[]),Q[J.card_id].push(J)})}const U=Y=>{const J=Y.transferred_at?new Date(Y.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",R=Y.source==="booster"?"Booster":Y.price?Y.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Y.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${Y.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${Y.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R}</div>
        <div style="font-size:11px;color:var(--gray-600)">${J}</div>
      </div>
    </div>`},v=ie.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${x>1?`(${x})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((Y,J)=>{const R=Q[Y.id]||[],M=Y.is_for_sale,C=R.length?R[R.length-1]:null,W=(d.rarity==="pepite"||d.rarity==="papyte")&&Y.current_note!=null?` (☆${Y.current_note})`:"";return`
            <div data-card-id="${Y.id}" data-card-idx="${J}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${M?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${Y.id}" ${M?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${J+1}${W}${M?" 🏷️ En vente":""}</div>
                  ${C?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${C.club_name} · ${C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${J}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${R.length?`${R.length} club${R.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${J}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${R.map(U).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${F}${d.job2&&N>0?` / ${ne}`:""}`:`Note actuelle : ${F}${d.job2&&N>0?` / ${ne}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${x<=1?"#ccc":"#1A6B3C"};border-color:${x<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${x<=1?"not-allowed":"pointer"}"
            ${x<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${h?`
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
      ${Se({...d,_evolution_bonus:m},{width:160})}


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
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([Y,J])=>{const R=mi[Y],M=Y==="GK"?"#fff":R,C=Y===d.job||Y===d.job2,D=(Number(J)||0)+(C&&j>0?j:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${R};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${M};font-family:Arial Black,Arial;line-height:1">${D}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${M}">${Y}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${x}</div>
        </div>
      </div>
    </div>
    ${v}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ae=document.getElementById("close-detail"))==null||ae.addEventListener("click",s);let S=new Set;const G=()=>{const Y=S.size,J=document.getElementById("sell-action-panel");if(!J)return;J.style.display=Y>0?"block":"none",document.getElementById("sell-selected-count").textContent=Y;const R=document.getElementById("evolve-btn");R&&(R.textContent=`⬆️ Évoluer ${Y>1?"(+"+Y+")":""}`)};document.querySelectorAll(".expl-check").forEach(Y=>{Y.addEventListener("change",()=>{const J=Y.dataset.id;Y.checked?S.add(J):S.delete(J);const R=Y.closest(".exemplaire-row");R&&(R.style.borderColor=Y.checked?"#1A6B3C":"#eee"),G()})}),document.querySelectorAll(".exemplaire-row").forEach(Y=>{Y.addEventListener("click",J=>{if(J.target.closest("button")||J.target.tagName==="INPUT")return;const R=Y.querySelector(".expl-check");R&&!R.disabled&&(R.checked=!R.checked,R.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(Y=>{Y.addEventListener("click",J=>{J.stopPropagation();const R=document.querySelector(`.expl-hist[data-hist="${Y.dataset.idx}"]`);R&&(R.style.display=R.style.display==="none"?"flex":"none")})}),(se=document.getElementById("evolve-btn"))==null||se.addEventListener("click",async()=>{if(x<=1)return;const Y=[...S];if(!Y.length)return;if(S.has(e.id)){const K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",K.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(K),K.querySelector("#err-close").addEventListener("click",()=>K.remove()),K.addEventListener("click",q=>{q.target===K&&K.remove()});return}const J=Y.filter(K=>K!==e.id),R=d.rarity==="legende"?2:1;if((J.length||1)*R,!(!J.length&&Y.length===1&&Y[0]===e.id)){if(!J.length){r("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(K=>{const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",q.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${J.length}</strong> copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}<br>
            📈 Note : <strong>${_+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${_+(e.evolution_bonus||0)+J.length*R}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+J.length*R}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${R} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(q),q.querySelector("#sac-cancel").addEventListener("click",()=>{q.remove(),K(!1)}),q.querySelector("#sac-ok").addEventListener("click",()=>{q.remove(),K(!0)}),q.addEventListener("click",O=>{O.target===q&&(q.remove(),K(!1))})}))return;if(J.length){await w.from("market_listings").delete().in("card_id",J),await w.from("deck_cards").delete().in("card_id",J),await w.from("transfer_history").delete().in("card_id",J),await w.from("decks").update({stadium_card_id:null}).in("stadium_card_id",J);const{error:K}=await w.from("cards").delete().in("id",J);if(K){r("Erreur suppression : "+K.message,"error");return}}const C=(e.evolution_bonus||0)+J.length*R,{error:D}=await w.from("cards").update({evolution_bonus:C}).eq("id",e.id);if(D){r("Erreur évolution : "+D.message,"error");return}const W=_+C;r(`⬆️ ${d.firstname} ${d.surname_real} : note ${_+e.evolution_bonus||_} → ${W}${J.length?` · ${J.length} copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}`:""} !`,"success",4e3),s(),l("collection")}),(de=document.getElementById("market-sell-btn"))==null||de.addEventListener("click",async()=>{var D;const Y=[...S];if(!Y.length){r("Sélectionne au moins un exemplaire","warning");return}const J=parseInt((D=document.getElementById("sell-market-price"))==null?void 0:D.value);if(!J||J<1){r("Prix invalide","error");return}const{error:R}=await w.from("cards").update({is_for_sale:!0,sale_price:J}).in("id",Y);if(R){r(R.message,"error");return}const M=Y.map(W=>({seller_id:o.profile.id,card_id:W,price:J,status:"active"})),{error:C}=await w.from("market_listings").insert(M);C&&console.warn("[Market] insert listings:",C.message),r(`${Y.length} carte${Y.length>1?"s":""} mise${Y.length>1?"s":""} en vente à ${J.toLocaleString("fr")} cr. chacune !`,"success"),s(),l("collection")}),(ke=document.getElementById("cancel-sell-btn"))==null||ke.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),r("Annonce retirée","success"),s(),l("collection")})}function Xi(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const o=n.querySelector("#pm-input");o.focus(),o.select();const r=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>r(o.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>r(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>r(null)),n.addEventListener("click",a=>{a.target===n&&r(null)}),o.addEventListener("keydown",a=>{a.key==="Enter"&&r(o.value.trim()||null),a.key==="Escape"&&r(null)})})}function go(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const o=r=>{n.remove(),i(r)};n.querySelector("#cm-ok").addEventListener("click",()=>o(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>o(!1)),n.addEventListener("click",r=>{r.target===n&&o(!1)})})}const ni={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function vi(e,t){const{state:i,navigate:n,toast:o}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(r==null?void 0:r.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(r==null?void 0:r.length)>0?r.map(a=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await Xi("Nom du deck",`Deck ${((r==null?void 0:r.length)||0)+1}`);if(!a)return;const{data:s,error:l}=await w.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){o(l.message,"error");return}o("Deck créé !","success"),Ji(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Ji(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await Xi("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:l}=await w.from("decks").update({name:s}).eq("id",a.dataset.rename);if(l){o(l.message,"error");return}o("Deck renommé !","success"),vi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await go(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await w.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await w.from("decks").delete().eq("id",a.dataset.delete);if(s){o(s.message,"error");return}o("Deck supprimé.","success"),vi(e,t)})})}async function Ji(e,t,i){const{state:n,toast:o}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await w.from("decks").select("*").eq("id",e).single(),{data:a}=await w.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await w.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),l=(a||[]).filter(h=>h.card_type==="player"&&h.player),c=(a||[]).filter(h=>h.card_type==="formation"),d=(s||[]).filter(h=>h.card_type==="stadium"),u=[...new Set(d.map(h=>h.stadium_id).filter(Boolean))];let x={};if(d.forEach(h=>{h.stadium_def&&h.stadium_id&&(x[h.stadium_id]=h.stadium_def)}),u.length&&Object.keys(x).length<u.length){const{data:h}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(h||[]).forEach(_=>{x[_.id]=_})}const m=c.map(h=>h.formation).filter(Boolean),{data:g}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=r.formation||"4-4-2";m.length>0&&!m.includes(p)&&(p=m[0]);const f={deckId:e,name:r.name,formation:p,formationCardId:r.formation_card_id,stadiumCardId:r.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:c,stadiumCards:d,stadDefMap:x,availableFormations:m};(g||[]).forEach(h=>{h.is_starter?f.slots[h.position]=h.card_id:f.subs.includes(h.card_id)||f.subs.push(h.card_id)}),xt(t,f,i)}function xt(e,t,i){var g,p;const{navigate:n}=i;ni[t.formation];const o=Qi(t.formation),r=o.filter(f=>t.slots[f]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(ni),s=(g=t.stadiumCards)==null?void 0:g.find(f=>f.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(f=>t.playerCards.find(h=>h.id===f)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${t.name}</h2>
        <p style="font-size:11px;margin:0">${r}/11 · ${t.subs.length}/5 rempl.</p>
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
            ${c.map(f=>{const h={...f.player,_evolution_bonus:f.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${Se({...h,_evolution_bonus:h._evolution_bonus||0},{width:60,showStad:!0,stadDef:l})}
                <button data-remove-sub="${f.id}"
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
              ${s?(()=>{var _;const f=t.stadDefMap[s.stadium_id],h=((_=f==null?void 0:f.club)==null?void 0:_.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${h?`<img src="${h}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((f==null?void 0:f.name)||"Stade").slice(0,14)}</span>
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
              ${c.map(f=>{const h={...f.player,_evolution_bonus:f.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${Se({...h,_evolution_bonus:h._evolution_bonus||0},{width:44,showStad:!0,stadDef:l})}
                  <button data-remove-sub="${f.id}"
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
              ${s?(()=>{var _;const f=t.stadDefMap[s.stadium_id],h=((_=f==null?void 0:f.club)==null?void 0:_.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${h?`<img src="${h}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((f==null?void 0:f.name)||"Stade").slice(0,10)}</span>
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${r<11?"disabled":""}>
        ${r<11?`Placez encore ${11-r} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const d=window.innerWidth>=900,u=e.querySelector(".deck-pc-layout"),x=e.querySelector(".deck-mobile-layout");u&&(u.style.display=d?"block":"none"),x&&(x.style.display=d?"none":"block"),mo(e,t,o,i),e.querySelectorAll("#builder-back").forEach(f=>f.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:f,closeModal:h}=i,_=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(b=>`<div data-forma="${b}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${b===t.formation?"#1A6B3C":"#f0f0f0"};color:${b===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${b===t.formation?"#1A6B3C":"#ddd"}">${b}</div>`).join("")}
    </div>`;f("⚽ Choisir une formation",_),document.querySelectorAll("#modal-body [data-forma]").forEach(b=>{b.addEventListener("click",()=>{t.formation=b.dataset.forma;const $=Qi(t.formation),y={};$.forEach(j=>{t.slots[j]&&(y[j]=t.slots[j])}),t.slots=y,h(),xt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(f=>f.addEventListener("click",m)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(f=>f.addEventListener("click",()=>xo(t,e,i))),e.querySelectorAll("#save-deck").forEach(f=>f.addEventListener("click",()=>ho(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(f=>{f.addEventListener("click",()=>{t.subs=t.subs.filter(h=>h!==f.dataset.removeSub),xt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(f=>f.addEventListener("click",()=>bo(t,e,i)))}function mo(e,t,i,n){var b,$;const o=window.innerWidth>=900,r=e.querySelector(o?"#deck-field-pc":"#deck-field-mobile");if(!r)return;const a=(b=t.stadiumCards)==null?void 0:b.find(y=>y.id===t.stadiumCardId),s=a&&(($=t.stadDefMap)==null?void 0:$[a.stadium_id])||null,l=Jt[t.formation]||{},c=on(t.formation)||[],d={};for(const y of i){const j=t.slots[y],E=j?t.playerCards.find(F=>F.id===j):null;E!=null&&E.player?d[y]={...E.player,_evolution_bonus:E.evolution_bonus||0,face:E.player.face||null}:d[y]=null}const u=window.innerWidth>=900,x=u?window.innerWidth-280:window.innerWidth-20,m=u?Math.min(x,860):x,g=Math.round(u?m*.82:m*.85),p=u?84:44;let f="";for(const[y,j]of c){const E=l[y],F=l[j];if(!E||!F)continue;const N=E.x*m,ne=Math.round(.03*g+E.y*.85*g),ie=F.x*m,Q=Math.round(.03*g+F.y*.85*g),U=d[y],v=d[j],S=Gt(U,v);S==="#ff3333"||S==="#cc2222"?f+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${S}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(f+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${S}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,f+=`<line x1="${N.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${S}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let h="";const _=Math.round(p*657/507);for(const y of i){const j=l[y];if(!j)continue;const E=d[y],F=j.x*m;j.y*g;const N=Math.round(.03*g+j.y*(.85*g)),ne=Math.round(F-p/2),ie=Math.round(N-_/2);if(E){const Q=y.replace(/\d+/,""),U=s&&(s.club_id&&String(E.club_id)===String(s.club_id)||s.country_code&&E.country_code===s.country_code),v=Se({...E,_evolution_bonus:E._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:Q});h+=`<div style="position:absolute;left:${ne}px;top:${ie}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${y}">
        <div style="position:relative">${U?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${v}</div>
      </div>`}else{const Q=y.replace(/\d+/,"");h+=`<div style="position:absolute;left:${ne}px;top:${ie}px;width:${p}px;height:${_}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${y}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${Q}</span>
      </div>`}}r.innerHTML=`
    <div style="position:relative;width:${m}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${g}">${f}</svg>
      ${h}
    </div>`,r.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>yo(y.dataset.pos,t,e,n))})}function xo(e,t,i){var a;const{openModal:n,closeModal:o}=i,r=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${r.map(s=>{var h,_;const l=e.stadDefMap[s.stadium_id],c=((h=l==null?void 0:l.club)==null?void 0:h.logo_url)||null,d=l!=null&&l.image_url?"/icons/"+l.image_url:null,u=e.stadiumCardId===s.id,x=l!=null&&l.country_code&&!c?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,m=(l==null?void 0:l.name)||"Stade",g=m.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=g?g[1].trim():m.slice(0,8),f=((_=g==null?void 0:g[2])==null?void 0:_.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${u?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:x?`<img src="${x}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#ccc"}">${p}</div>
              ${f?`<div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#aaa"}">${f}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,o(),xt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,o(),xt(t,e,i)})})}function yo(e,t,i,n){var g,p,f,h,_;const{openModal:o,closeModal:r}=n,a=e.replace(/\d+/,""),s=(g=t.stadiumCards)==null?void 0:g.find(b=>b.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],d=c?t.playerCards.find(b=>b.id===c):null;(f=d==null?void 0:d.player)==null||f.id;const u=new Set;Object.entries(t.slots).forEach(([b,$])=>{var j;if(b===e||!$)return;const y=t.playerCards.find(E=>E.id===$);(j=y==null?void 0:y.player)!=null&&j.id&&u.add(y.player.id)}),t.subs.forEach(b=>{var y;const $=t.playerCards.find(j=>j.id===b);(y=$==null?void 0:$.player)!=null&&y.id&&u.add($.player.id)});const x=new Set,m=t.playerCards.filter(b=>{const $=b.player;return!($.job===a||$.job2===a)||u.has($.id)||x.has($.id)?!1:(x.add($.id),!0)});m.sort((b,$)=>{const y=b.evolution_bonus||0,j=$.evolution_bonus||0,E=(a==="GK"?b.player.note_g:a==="DEF"?b.player.note_d:a==="MIL"?b.player.note_m:b.player.note_a)+(a===b.player.job||a===b.player.job2?y:0);return(a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a)+(a===$.player.job||a===$.player.job2?j:0)-E}),o(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(b=>{const $={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div class="player-option" data-card-id="${b.id}" style="cursor:pointer">
          ${Se($,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(h=document.getElementById("close-selector"))==null||h.addEventListener("click",r),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete t.slots[e],r(),xt(i,t,n)}),document.querySelectorAll(".player-option").forEach(b=>{b.addEventListener("click",()=>{t.slots[e]=b.dataset.cardId,r(),xt(i,t,n)})})}function bo(e,t,i){var d,u,x;const{openModal:n,closeModal:o}=i,r=(d=e.stadiumCards)==null?void 0:d.find(m=>m.id===e.stadiumCardId),a=r&&((u=e.stadDefMap)==null?void 0:u[r.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(m=>{var f;const g=e.slots[m];if(!g)return;const p=e.playerCards.find(h=>h.id===g);(f=p==null?void 0:p.player)!=null&&f.id&&s.add(p.player.id)}),e.subs.forEach(m=>{var p;const g=e.playerCards.find(f=>f.id===m);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const l=new Set,c=e.playerCards.filter(m=>{var g,p,f;return s.has((g=m.player)==null?void 0:g.id)||l.has((p=m.player)==null?void 0:p.id)?!1:(l.add((f=m.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(m=>{const g={...m.player,_evolution_bonus:m.evolution_bonus||0};return`<div class="player-option" data-card-id="${m.id}" style="cursor:pointer">
          ${Se(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",o),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{e.subs.push(m.dataset.cardId),o(),xt(t,e,i)})})}async function ho(e,t){const{state:i,toast:n,navigate:o}=t,r=e.formationCards.find(l=>l.formation===e.formation),a=(r==null?void 0:r.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,c],d)=>{s.push({deck_id:e.deckId,card_id:c,position:l,is_starter:!0,slot_order:d})}),e.subs.forEach((l,c)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:l}=await w.from("deck_cards").insert(s);if(l){n(l.message,"error");return}}n("Deck enregistré ✅","success"),o("decks")}function Qi(e){const t=ni[e]||ni["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function fn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let o=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await w.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),l={};(s||[]).forEach(c=>{l[c.booster_id]=(l[c.booster_id]||0)+1}),o=n.filter(c=>c.max_per_user==null?!0:(l[c.id]||0)<c.max_per_user)}}if(!o.length)return[];const{data:r}=await w.from("booster_drop_rates").select("*").in("booster_id",o.map(a=>a.id)).order("sort_order");return o.map(a=>({...a,rates:(r||[]).filter(s=>s.booster_id===a.id)}))}async function vo(e,t){const{data:i}=await w.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await w.from("booster_claims").insert({user_id:e,booster_id:t})}function wo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,o)=>n+Number(o.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const gn=()=>Object.keys(Jt),_o=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],wi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ko(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Se({...t,_evolution_bonus:i},{width:140})}function mn(e){var o;const t={};(e.rates||[]).forEach(r=>{t[r.card_type]=(t[r.card_type]||0)+Number(r.percentage||0)});const i=((o=Object.entries(t).sort((r,a)=>a[1]-r[1])[0])==null?void 0:o[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function $o(e,{state:t,navigate:i,toast:n}){var u,x,m;const o=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let r=[];try{r=(await fn((x=t.user)==null?void 0:x.id)).map(mn)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}r.length||(r=_o.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),l=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),d={};for(const g of r){if(g.allow_duplicates!==!1||!((m=g.rates)!=null&&m.length))continue;const p=[...new Set((g.rates||[]).map(h=>h.card_type))];let f=!1;for(const h of p)if(h==="stadium"){const{data:_}=await w.from("stadium_definitions").select("id");if((_||[]).some(b=>!s.has(b.id))){f=!0;break}}else if(h==="game_changer"){const{data:_}=await w.from("gc_definitions").select("name").eq("is_active",!0);if((_||[]).some(b=>!c.has(b.name))){f=!0;break}}else if(h==="formation"){const{FORMATION_LINKS:_}=await rn(async()=>{const{FORMATION_LINKS:b}=await import("./formation-links-yJiMLlPw.js").then($=>$.q);return{FORMATION_LINKS:b}},__vite__mapDeps([0,1]));if(Object.keys(_).some(b=>!l.has(b))){f=!0;break}}else{f=!0;break}f||(d[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${o.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${r.map(g=>{const p=g.cost===0||o>=g.cost,f=d[g.id]===!0;return`<div class="booster-card ${!p||f?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
            ${f?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=r.find(f=>f.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await Eo(p,{state:t,toast:n,navigate:i,container:e})}catch(f){n(f.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const f=r.find(h=>h.id===g.dataset.boosterId);Io(f)})})}async function Eo(e,{state:t,toast:i,navigate:n,container:o}){var u,x;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await Ao();const{data:r}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((r||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),s=new Set((r||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],c=null;try{if((u=e.rates)!=null&&u.length)l=await _i(t.profile,e);else{const m=e.type||"player";m==="player"?l=await xn(t.profile,e.cardCount,e.cost):m==="game_changer"?l=await yn(t.profile,e.cardCount,e.cost):m==="formation"?l=await bn(t.profile,e.cost):l=await _i(t.profile,e)}}catch(m){c=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&e._boosterId&&await vo(t.user.id,e._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(x=m.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=a.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=s.has(m.formation))});const{data:d}=await w.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),hn(l,e,n)}function Lo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function ct(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function To(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>ct(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>ct(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&ct(n)>=6),i.length||(i=e.filter(n=>ct(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&ct(n)>=1&&ct(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function _i(e,t){if(t.cost>0){const{error:x}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(x)throw x}const i=t.allow_duplicates!==!1;let n=[];const{data:o,error:r}=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(r){const{data:x}=await w.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=x||[]}else n=o||[];const a=new Set(n.filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set(n.filter(x=>x.card_type==="formation").map(x=>x.formation)),l=new Set(n.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),c=new Set(n.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id).filter(Boolean)),d=new Set,u=[];for(let x=0;x<(t.cardCount||5);x++){const m=wo(t.rates);if(m){if(m.card_type==="player"){const g=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=m.rarity?g(m.rarity):null;let f=w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(f=f.eq("rarity",p));const{data:h}=await f;let _=h||[];if((m.note_min||m.note_max)&&(_=_.filter(E=>{const F=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!m.note_min||F>=m.note_min)&&(!m.note_max||F<=m.note_max)})),_.length||(m.note_min||m.note_max?(_=h||[],console.warn("[Booster] Aucun joueur avec note",m.note_min,"-",m.note_max,"— fallback rareté uniquement")):_=h||[]),!_.length)continue;let b=_.filter(E=>!d.has(E.id));if(i)b.length||(b=_);else if(b=b.filter(E=>!a.has(E.id)),!b.length)continue;const $=b[Math.floor(Math.random()*b.length)];d.add($.id);const y=a.has($.id),{data:j}=await w.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();j&&(u.push({...j,player:$,isDuplicate:y}),w.rpc("record_transfer",{p_card_id:j.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(m.card_type==="game_changer"){const{data:g}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],f=i?p:p.filter($=>!l.has($.name));if(!i&&!f.length)continue;const _=f[Math.floor(Math.random()*f.length)].name,{data:b}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:_}).select().single();b&&u.push(b)}else if(m.card_type==="formation"){const g=gn(),p=i?g:g.filter(b=>!s.has(b));if(!i&&!p.length)continue;const f=p[Math.floor(Math.random()*p.length)],h=s.has(f),{data:_}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:f}).select();_!=null&&_[0]&&u.push({..._[0],isDuplicate:h})}else if(m.card_type==="stadium"){const{data:g,error:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const f=i?g:g.filter($=>!c.has($.id));if(!i&&!f.length)continue;const h=f[Math.floor(Math.random()*f.length)],{data:_,error:b}=await w.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:h.id}).select("id,card_type,stadium_id").single();if(b){console.error("[Booster] insert stadium card:",b.message);continue}_&&u.push({..._,rarity:"normal",_stadiumDef:h})}}}return u}async function xn(e,t,i){if(i>0){const{error:c}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const o=n.filter(c=>c.job==="GK"),r=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&o.length>0,s=[];for(let c=0;c<t;c++){const d=c===0&&a?o:c===0?r:n,u=Lo(),x=To(d,u);x&&s.push(x)}a&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await w.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(l||[]).forEach((c,d)=>{w.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,d)=>({...l[d],player:c}))}async function yn(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:o}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),r=o!=null&&o.length?o:Object.keys(wi).map(d=>({name:d,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const d=r[Math.floor(Math.random()*r.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:l}=await w.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(d=>{const u=o==null?void 0:o.find(x=>x.name===d.gc_type||x.id===d.gc_definition_id);return{...d,_gcDef:u||null}})}async function bn(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await w.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),o=new Set((n||[]).map(d=>d.formation)),r=gn(),a=r[Math.floor(Math.random()*r.length)],s=o.has(a),{data:l,error:c}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(l||[]).map(d=>({...d,isDuplicate:s}))}function hn(e,t,i,n=null){var Q,U;if(!e||e.length===0){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",v.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(v),(Q=v.querySelector("#anim-close-err"))==null||Q.addEventListener("click",()=>v.remove());return}e=[...e].sort((v,S)=>{const G=v.player?ct(v.player):-1;return(S.player?ct(S.player):-1)-G});const o=document.createElement("div");o.id="booster-anim-overlay",o.innerHTML=`
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
  `,document.body.appendChild(o);let r=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let l=!1;const c=v=>v.touches&&v.touches[0]?v.touches[0].clientX:v.clientX;function d(v){r||(l=!0,s.style.opacity="1",u(v))}function u(v){if(!l||r)return;const S=a.getBoundingClientRect(),G=c(v)-S.left,re=Math.max(0,Math.min(1,G/S.width));s.style.width=re*S.width+"px",re>=.82&&m()}function x(){r||(l=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{r||(s.style.transition="")},220))}function m(){var S;if(r)return;r=!0,l=!1,s.style.width="100%",s.style.opacity="1",(S=document.getElementById("cut-flash"))==null||S.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const v=document.getElementById("cut-hint");v&&(v.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",h(0)},620)}a.addEventListener("pointerdown",d),window.addEventListener("pointermove",u),window.addEventListener("pointerup",x),a.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",x);let g=0,p=!1;const f=new Set;function h(v){g=v,document.getElementById("reveal-phase").style.display="flex",_(),b(v,0),F()}function _(){const v=document.getElementById("card-dots");v&&(v.innerHTML=e.map((S,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),v.querySelectorAll(".card-dot").forEach(S=>S.addEventListener("click",()=>y(parseInt(S.dataset.i)))))}function b(v,S){var R,M;const G=e[v],re=document.getElementById("card-counter"),ae=document.getElementById("card-track");re&&(re.textContent=`Carte ${v+1} / ${e.length}`);const se=document.getElementById("reveal-btns");se&&(se.style.display=v===e.length-1?"flex":"none");const de=G.card_type==="player"&&((R=G.player)==null?void 0:R.rarity)==="legende",ke=!f.has(v);f.add(v);let Y=0;if(G.card_type==="player"&&G.player){const C=G.player,D=C.job||"ATT";Y=Number(D==="GK"?C.note_g:D==="DEF"?C.note_d:D==="MIL"?C.note_m:C.note_a)||0}const J=C=>{ae.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${de?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${zo(G)}</div>
          ${G.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const D=document.getElementById("current-card-wrap");S!==0?(D.style.transition="none",D.style.transform=`translateX(${S>0?100:-100}%)`,requestAnimationFrame(()=>{D.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",D.style.transform="translateX(0)"})):D.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),C||de?ne():ie(),_()};ke&&(((M=G.player)==null?void 0:M.rarity)==="legende"||Y>=8)&&G.card_type==="player"&&G.player?$(G,()=>J(!0)):J(!1)}function $(v,S){var ye;p=!0;const G=v.player,re=`https://flagsapi.com/${G.country_code}/flat/64.png`,ae=(ye=G.clubs)==null?void 0:ye.logo_url,se=G.face?"/"+G.face.replace(/^public\//,"").replace(/^\//,""):null,de=G.job||"ATT",ke=Number(de==="GK"?G.note_g:de==="DEF"?G.note_d:de==="MIL"?G.note_m:G.note_a)||0,Y=v.evolution_bonus||0,J=ke+Y,R=G.rarity==="legende",M=J>=18,C=document.getElementById("walkout-overlay"),D=document.getElementById("walkout-stage");if(!C||!D){p=!1,S();return}let W=null;R&&(W=new Audio("/sounds/Legendary.mp3"),W.volume=.8,W.play().catch(()=>{})),C.style.display="flex";const K=()=>{const be=D.firstElementChild;be&&(be.classList.remove("wo-in"),be.classList.add("wo-out"))},q=1800,O=400;D.innerHTML=`<img class="wo-in" src="${re}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(K,q),setTimeout(()=>{var be;D.innerHTML=ae?`<img class="wo-in" src="${ae}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((be=G.clubs)==null?void 0:be.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},q+O),setTimeout(K,q*2+O),setTimeout(()=>{D.innerHTML=se?`<img class="wo-in" src="${se}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(q+O)*2),setTimeout(K,(q+O)*2+q);const _e=M?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[de]||"#fff";setTimeout(()=>{D.innerHTML=`<div class="wo-in" style="
        font-size:${M?"120px":"90px"};font-weight:900;color:${_e};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${_e}, 0 0 60px ${_e};
        ${M?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${J}
      </div>`,M&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(q+O)*3),setTimeout(K,(q+O)*3+q),setTimeout(()=>{C.style.display="none",D.innerHTML="",p=!1,W&&!R&&W.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),S()},(q+O)*4)}function y(v){if(p||v<0||v>=e.length||v===g)return;const S=v>g?1:-1;g=v,b(v,S)}function j(){y(g+1)}function E(){y(g-1)}function F(){const v=document.getElementById("card-viewport");if(!v||v._swipeBound)return;v._swipeBound=!0;let S=0,G=0,re=0,ae=!1;const se=R=>R.touches?R.touches[0].clientX:R.clientX,de=R=>R.touches?R.touches[0].clientY:R.clientY,ke=R=>{ae=!0,S=se(R),G=de(R),re=0},Y=R=>{if(!ae)return;re=se(R)-S;const M=de(R)-G;if(Math.abs(re)<Math.abs(M))return;const C=document.getElementById("current-card-wrap");C&&(C.style.transition="none",C.style.transform=`translateX(${re*.6}px) rotate(${re*.02}deg)`)},J=()=>{if(!ae)return;ae=!1;const R=document.getElementById("current-card-wrap"),M=55;re<=-M&&g<e.length-1?j():re>=M&&g>0?E():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};v.addEventListener("pointerdown",ke),v.addEventListener("pointermove",Y),v.addEventListener("pointerup",J),v.addEventListener("pointercancel",J),v.addEventListener("touchstart",ke,{passive:!0}),v.addEventListener("touchmove",Y,{passive:!0}),v.addEventListener("touchend",J),v.addEventListener("click",R=>{if(Math.abs(re)>8)return;const M=v.getBoundingClientRect();R.clientX-M.left>M.width/2?j():E()})}let N=null;function ne(){const v=document.getElementById("fireworks-canvas");if(!v)return;v.width=window.innerWidth,v.height=window.innerHeight;const S=v.getContext("2d"),G=[];function re(){const se=Math.random()*v.width,de=Math.random()*v.height*.6,ke=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Y=ke[Math.floor(Math.random()*ke.length)];for(let J=0;J<60;J++){const R=Math.PI*2/60*J,M=2+Math.random()*5;G.push({x:se,y:de,vx:Math.cos(R)*M,vy:Math.sin(R)*M,alpha:1,color:Y,size:2+Math.random()*3})}}re(),N=setInterval(re,600);function ae(){if(document.getElementById("fireworks-canvas")){S.clearRect(0,0,v.width,v.height);for(let se=G.length-1;se>=0;se--){const de=G[se];if(de.x+=de.vx,de.y+=de.vy+.08,de.vy*=.98,de.alpha-=.018,de.alpha<=0){G.splice(se,1);continue}S.globalAlpha=de.alpha,S.fillStyle=de.color,S.beginPath(),S.arc(de.x,de.y,de.size,0,Math.PI*2),S.fill()}S.globalAlpha=1,(N!==null||G.length>0)&&requestAnimationFrame(ae)}}ae()}function ie(){N!==null&&(clearInterval(N),N=null);const v=document.getElementById("fireworks-canvas");v&&v.getContext("2d").clearRect(0,0,v.width,v.height)}if(n){const v=document.getElementById("reveal-btns");v&&(v.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(U=document.getElementById("reveal-next"))==null||U.addEventListener("click",()=>{ie(),o.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ie(),o.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ie(),o.remove(),i("boosters")})}function zo(e){var t,i,n,o;if(e.card_type==="player"&&e.player)return ko(e);if(e.card_type==="game_changer"){const r=e._gcDef,a=(r==null?void 0:r.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[r==null?void 0:r.color]||s.purple,d=l[r==null?void 0:r.color]||l.purple,u=(r==null?void 0:r.name)||e.gc_type||"Game Changer",x=(r==null?void 0:r.effect)||((t=wi[e.gc_type])==null?void 0:t.desc)||"",m=r!=null&&r.image_url?`/icons/${r.image_url}`:null,g=((i=wi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${m?`<img src="${m}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${x.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const r=e._stadiumDef,a=(r==null?void 0:r.name)||"Stade",s=((n=r==null?void 0:r.club)==null?void 0:n.encoded_name)||(r==null?void 0:r.country_code)||"—",l=r!=null&&r.image_url?`/icons/${r.image_url}`:((o=r==null?void 0:r.club)==null?void 0:o.logo_url)||(r!=null&&r.country_code?`https://flagsapi.com/${r.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Io(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const o={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},r={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${r[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${o[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}So()}function So(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function Ao(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const o=document.getElementById("mw-ad-cd");o&&(o.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Mo(e,{state:t,navigate:i,toast:n,refreshProfile:o}){var x,m;const{data:r}=await w.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let a=Array.isArray((x=t.profile)==null?void 0:x.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await w.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await fn()).find(f=>(f.name||"").toLowerCase().includes("new player"));p&&(s=mn(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const l=a.length;let c=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await w.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function u(){var _;if(c>=l||!a.length){await w.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),o&&await o(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:p}=await w.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let f=[];try{if(g.type==="formation")f=await bn(t.profile,0);else if(g.type==="game_changer")f=await yn(t.profile,g.count||3,0);else if(s&&((_=s.rates)!=null&&_.length)){const b={...s,cost:0,cardCount:g.count||s.cardCount||5};f=await _i(t.profile,b),g.guaranteeGK&&!t.profile.first_booster_opened&&(f.some(y=>y.player&&y.player.job==="GK")||await jo(t.profile,f),await w.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else f=await xn(t.profile,g.count||5,0)}catch(b){n(b.message||"Erreur ouverture booster","error");return}a.shift(),c++,await d();const h=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${l})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};hn(f,h,i,()=>{u()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>u())}async function jo(e,t){try{const{data:i}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],o=t.findIndex(a=>a.player);if(o===-1)return;const r=t[o];await w.from("cards").update({player_id:n.id}).eq("id",r.id),t[o]={...r,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Ft={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Co={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,n,o){var r;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(r=document.getElementById("msg-btn"))==null||r.addEventListener("click",o)}function Wt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",o=e.face.replace(/^public\//,"").replace(/^\//,"");return n+o}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ki(e,t){var r,a;const i=e.player,n=e.evolution_bonus||0,o=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&o>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&o>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&o>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&o>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((r=i.clubs)==null?void 0:r.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Xt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(o=>{Array.isArray(o)&&o.forEach(r=>{const a=i&&String(r.club_id)===String(i),s=n&&String(r.country_code)===String(n);(a||s)&&(r.stadiumBonus=!0)})}),e}function oi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(o=>{if(!o)return;const r=i&&String(o.club_id)===String(i),a=n&&String(o.country_code)===String(n);(r||a)&&(o.stadiumBonus=!0)}),e}function pt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function vn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function ri(e,t){const i=Ft[t]||Ft["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,d)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),l=pt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}const r=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let d=r.findIndex(u=>u.job===a);if(d===-1&&(d=r.findIndex(u=>u.job2===a)),d===-1&&(d=0),r[d]){const u={...r[d],_line:a};s.push(u),r.splice(d,1)}}const l=pt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}function nt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function li(e,t,i){const o=new Set,r=t.filter(d=>{const u=d.gc_type||d.id;return o.has(u)?!1:(o.add(u),!0)});let a=[];function s(d,u){const x=d._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[x==null?void 0:x.color]||m.purple,f=g[x==null?void 0:x.color]||g.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":f};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((x==null?void 0:x.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(x==null?void 0:x.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${x!=null&&x.image_url?`<img src="/icons/${x.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((x==null?void 0:x.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function c(){var u,x,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=a.length>0;e.innerHTML=`
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
        ${r.map(g=>{const p=a.find(f=>f.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,f=r.find(_=>_.id===p);if(!f)return;const h=a.findIndex(_=>_.gc_type===f.gc_type);h>-1?a.splice(h,1):a.length<3&&a.push(f),c()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{d&&l(a)}),(x=e.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>l([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function Bo(e,t){var o;const i=((o=t==null?void 0:t.state)==null?void 0:o.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function qo(e,t,i){const{state:n,navigate:o}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await w.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!r||r.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>o("decks"));return}const a=r.map(x=>x.id),{data:s}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),l=[...new Set((s||[]).filter(x=>{var m,g;return((m=x.card)==null?void 0:m.card_type)==="stadium"&&((g=x.card)==null?void 0:g.stadium_id)}).map(x=>x.card.stadium_id))],c={};if(l.length){const{data:x}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(x||[]).forEach(m=>{c[m.id]=m}),(s||[]).forEach(m=>{var g,p;((g=m.card)==null?void 0:g.card_type)==="stadium"&&((p=m.card)!=null&&p.stadium_id)&&(m.card._stadiumDef=c[m.card.stadium_id]||null)})}let d=0;function u(){var y,j,E,F,N,ne,ie;const x=r[d],m=(s||[]).filter(Q=>Q.deck_id===x.id),g=m.filter(Q=>{var U;return Q.is_starter&&((U=Q.card)==null?void 0:U.player)}).map(Q=>ki(Q.card,Q.position)),p=m.find(Q=>{var U;return((U=Q.card)==null?void 0:U.card_type)==="formation"}),f=x.formation||((y=p==null?void 0:p.card)==null?void 0:y.formation)||"4-4-2";let h=g.length>=11?ri(g,f):null,_=((j=x.stadium_card)==null?void 0:j.stadium_def)||null;_&&h&&(h=Xt(h,_));const b=g.length>=11;nt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Bo(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${x.name}</div>
            <div style="font-size:11px;opacity:.6">${f} · ${g.length}/11${x.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===r.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===r.length-1?"0.1":"0.3"});color:${d===r.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===r.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${_?`
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
          <span style="font-size:12px;font-weight:700">${_.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((E=_.club)==null?void 0:E.encoded_name)||_.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${h?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${r.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${r.map((Q,U)=>`<div style="width:6px;height:6px;border-radius:50%;background:${U===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${b?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${b?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${b?"pointer":"default"}">
          ${b?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Q(){const U=e.querySelector(".deck-preview-wrap"),v=e.querySelector("#deck-swipe-zone");if(!U||!v||!h)return;const S=v.clientWidth>=900,G=Math.max(200,v.clientHeight-(S?60:40)),ae=Math.max(200,v.clientWidth-16),se=S?Math.min(117,Math.max(52,Math.round(ae*.22))):Math.max(44,Math.round(ae*.168));if(G<220||ae<220){requestAnimationFrame(Q);return}const de=S?null:Math.round(se*.55);U.innerHTML=Pt(h,f,null,[],ae,G,[],de),U.style.cssText=`width:${ae}px;height:${G}px;overflow:hidden;margin:${S?0:60}px auto 0`;const ke=U.querySelector("svg");ke&&(ke.style.cssText="display:block;width:100%;height:100%",ke.setAttribute("preserveAspectRatio",S?"xMidYMid meet":"none"))})),(F=document.getElementById("prev-deck"))==null||F.addEventListener("click",()=>{d>0&&(d--,u())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{d<r.length-1&&(d++,u())}),(ne=document.getElementById("validate-deck"))==null||ne.addEventListener("click",()=>{if(!b)return;const Q=t.state.params||{};t.navigate("match",{...Q,matchMode:Q.matchMode||i,deckId:x.id})}),(ie=document.getElementById("cancel-deck-select"))==null||ie.addEventListener("click",()=>{We(e),o("home")});const $=document.getElementById("deck-swipe-zone");if($){let Q=0,U=0;$.addEventListener("touchstart",v=>{Q=v.touches[0].clientX,U=v.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",v=>{const S=v.changedTouches[0].clientX-Q,G=v.changedTouches[0].clientY-U;Math.abs(S)<40||Math.abs(S)<Math.abs(G)||(S<0&&d<r.length-1?(d++,u()):S>0&&d>0&&(d--,u()))},{passive:!0})}}u()}function mt(e,t=44,i=58,n=null){return Se(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Ye(e,t,i,n){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let r='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((a,s)=>{const l=a._line||a.job||"MIL";let c=a.boost||0;if(a.stadiumBonus&&(n==="attack"&&(l==="ATT"||l==="MIL")||n==="defense"&&(l==="GK"||l==="DEF"||l==="MIL")?c+=10:n||(c+=10)),r+=Se(a,{width:40,role:l,extraNote:c}),s<o.length-1){const d=Gt(a,o[s+1]);r+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(r+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),r+="</div>",r}function ci(e,t,i,n,o=310,r=310,a=[],s=null){const l=Jt[t]||{},c=on(t)||Ii[t]||[],d={},u=["ATT","MIL","DEF","GK"];for(const h of u)(e[h]||[]).forEach((b,$)=>{d[`${h}${$+1}`]=b});function x(h){const _=l[h];return _?{x:_.x*o,y:_.y*r}:null}let m="";for(const[h,_]of c){const b=x(h),$=x(_);if(!b||!$)continue;const y=d[h],j=d[_],E=Gt(y,j);E==="#00ff88"||E==="#FFD700"?(m+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${b.x.toFixed(1)}" y1="${b.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(o*.225)),117):Math.max(44,Math.round(o*.168)),p=Math.round(g*657/507);for(const[h,_]of Object.entries(d)){const b=x(h);if(!b||!_)continue;const $=h.replace(/[0-9]/g,""),y=a.includes(_.cardId),j=i==="attack"&&(["MIL","ATT"].includes($)||y)&&!_.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!_.used,E=n.includes(_.cardId);let F=_.boost||0,N=!1;_.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?(F+=10,N=!0):i||(F+=10,N=!0));const ne=Math.round(b.x-g/2),ie=Math.round(b.y-p/2);if(_.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ne}" y="${ie}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${_.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const Q=Se({..._,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:$,extraNote:F,_cardOffset:30,_forceStadColor:N}),U=E?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";m+=`<foreignObject x="${ne-2}" y="${ie-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Q}
        ${E?`<div style="${U}"></div>`:""}
      </div>
    </foreignObject>`,j&&(m+=`<rect x="${ne}" y="${ie}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${_.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const f=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-f} ${-f} ${o+f*2} ${r+f*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${m}
  </svg>`}function Pt(e,t,i,n,o=300,r=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ci(e,t,i,n,o,r,a,s)}
  </div>`}async function pi(e,t,i,n){var j;const{state:o,navigate:r,toast:a}=t;nt(e);const s=o.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return qo(e,t,i);const l=s.deckId;let c,d,u,x;try{const E=await Promise.all([w.from("decks").select("formation,name,stadium_card_id").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);c=E[0].data,u=E[0].error,d=E[1].data,x=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),Et(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>r("home"));return}if(u||x){console.error("[Match] Erreur Supabase:",u||x),Et(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>r("home"));return}const m=(d||[]).filter(E=>{var F;return E.is_starter&&((F=E.card)==null?void 0:F.player)}).map(E=>ki(E.card,E.position)),g=(d||[]).filter(E=>{var F;return!E.is_starter&&((F=E.card)==null?void 0:F.player)}).map(E=>ki(E.card,E.position));if(m.length<11){Et(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>r("decks"));return}const p=(d||[]).find(E=>{var F;return((F=E.card)==null?void 0:F.card_type)==="formation"}),f=(c==null?void 0:c.formation)||((j=p==null?void 0:p.card)==null?void 0:j.formation)||"4-4-2",{data:h,error:_}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",o.profile.id).eq("card_type","game_changer"),{data:b}=await w.from("gc_definitions").select("*").eq("is_active",!0),$=(h||[]).map(E=>({...E,_gcDef:(b==null?void 0:b.find(F=>F.name===E.gc_type||F.id===E.gc_definition_id))||null}));let y=null;if(c!=null&&c.stadium_card_id){const{data:E}=await w.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:F}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();y=F||null}}n({deckId:l,formation:f,starters:m,subsRaw:g,gcCardsEnriched:$,gcDefs:b||[],stadiumDef:y})}function Lt(){return Math.min(window.innerWidth-40,860)}function qt(){return Math.round(Lt()*1.1)}function wn(e){var o,r;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((o=e.clubs)==null?void 0:o.encoded_name)||null,clubLogo:e.clubLogo||((r=e.clubs)==null?void 0:r.logo_url)||null,face:e.face||null,portrait:Wt(e)}}function Do(e,t,i,n="Adversaire"){const o=Lt(),r=qt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${o}px;margin:0 auto">
        ${ci(e,t,null,[],o,r)}
      </div>
    </div>`}function _n(e){var r,a,s;if(!e)return"";const t=l=>l?Se({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((r=e.type)==null?void 0:r.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
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
    </div>`}function ot(e,t,i,n,o){const r=document.getElementById("goal-anim-overlay");r&&r.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(l=>Se({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(a.innerHTML=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),o==null||o()},400)},1800)}function Fo(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const o=document.createElement("div");o.id="sub-anim-overlay",o.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const r=Math.min(120,Math.round(window.innerWidth/4)),a=e?Se({...e,_evolution_bonus:0},{width:r,role:e._line||e.job}):"",s=t?Se({...t,_evolution_bonus:0},{width:r,role:t._line||t.job}):"";o.innerHTML=`
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
    </div>`,document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.4s",setTimeout(()=>{o.remove(),i==null||i()},400)},1600)}function _t(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const o=document.createElement("div");if(o.id="game-toast",o.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,o.textContent=e,!document.getElementById("game-toast-style")){const r=document.createElement("style");r.id="game-toast-style",r.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(r)}document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.3s",setTimeout(()=>o.remove(),300)},i)}function kn(e,t){const i=Ge(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function ut(e,t){return e.reduce((i,n)=>i+kn(n,t),0)}function ft(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Gt(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function ai(e,t,i,n,o){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((r,a)=>{const s=a<e.length-1?Gt(r,e[a+1]):null,l=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return kn(r,o),r.stadiumBonus||o&&(o.club_id&&String(r.club_id)===String(o.club_id)||o.country_code&&(r.country_code,o.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Se({...r,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:o,role:"MIL",extraNote:r.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${ut(e,o)} + ${ft(e)} liens = <b style="color:#fff">${ut(e,o)+ft(e)}</b>
      </div>
    </div>`}async function Po(e,t){const{state:i}=t,o=(i.params||{}).matchMode||"vs_ai_easy",r=o.replace("vs_ai_",""),a=o;await pi(e,t,o,async({deckId:s,formation:l,starters:c,subsRaw:d,gcCardsEnriched:u,gcDefs:x,stadiumDef:m})=>{try{let g=ri(c,l);m&&(g=Xt(g,m),oi(d,m));const p=await Go(l,r),f=p.lines||p,h=async _=>{try{const b=a==="vs_ai_club"?"club":a,{data:$,error:y}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:b,home_deck_id:s,status:"in_progress"}).select().single();if(y){console.error("[MatchIA] Erreur création match:",y),Et(e,"⚠️","Impossible de créer le match ("+y.message+").","Retour",()=>t.navigate("home"));return}const j=p.stadiumDef||null;j&&f&&(Xt(f,j),oi(p.subs||[],j));const E={gcDefs:x||[],matchId:$==null?void 0:$.id,mode:a,difficulty:r,formation:l,homeTeam:g,aiTeam:f,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:j,homeScore:0,aiScore:0,gcCards:_,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};No(e,E,t)}catch(b){console.error("[MatchIA] Exception launchMatch:",b),Et(e,"⚠️","Erreur au lancement du match : "+b.message,"Retour",()=>t.navigate("home"))}};if(!u.length){h([]);return}li(e,u,h)}catch(g){console.error("[MatchIA] Exception setup:",g),Et(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function Go(e,t){var f;const{data:i}=await w.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Ro(e),subs:[],gcCards:[],stadiumDef:null};const n=Ft[e]||Ft["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]},r=new Set;function a(h,_,b){var $,y;return r.add(h.id),{cardId:"ai-"+h.id+"-"+b,id:h.id,firstname:h.firstname,name:h.surname_real,country_code:h.country_code,club_id:h.club_id,job:h.job,job2:h.job2,note_g:Number(h.note_g)||0,note_d:Number(h.note_d)||0,note_m:Number(h.note_m)||0,note_a:Number(h.note_a)||0,rarity:h.rarity,skin:h.skin,hair:h.hair,hair_length:h.hair_length,clubName:(($=h.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((y=h.clubs)==null?void 0:y.logo_url)||null,boost:0,used:!1,_line:_}}for(const h of["GK","DEF","MIL","ATT"]){const _=i.filter(E=>E.job===h&&!r.has(E.id)),b=i.filter(E=>E.job!==h&&!r.has(E.id)),$=[..._,...b],y=[];for(let E=0;E<n[h];E++){const F=$[E];F&&y.push(a(F,h,E))}const j=pt(y.length);y.forEach((E,F)=>{E._col=j[F]}),o[h]=y}const l=i.filter(h=>!r.has(h.id)).slice(0,5).map((h,_)=>a(h,h.job,100+_)),u=Object.keys(Me).sort(()=>Math.random()-.5).slice(0,3).map((h,_)=>{var b,$;return{id:"ai-gc-"+_,gc_type:h,name:((b=Me[h])==null?void 0:b.name)||h,icon:(($=Me[h])==null?void 0:$.icon)||"⚡"}}),x=Object.values(o).flat(),m={};x.forEach(h=>{h.club_id&&(m[h.club_id]=(m[h.club_id]||0)+1)});const g=(f=Object.entries(m).sort((h,_)=>_[1]-h[1])[0])==null?void 0:f[0];let p=null;if(g){const{data:h}=await w.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();h&&(p={club_id:h.id,country_code:null,name:h.encoded_name+" Stadium",club:{encoded_name:h.encoded_name,logo_url:h.logo_url}})}return{lines:o,subs:l,gcCards:u,stadiumDef:p}}function Ro(e){const t=Ft[e]||Ft["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let o=0;for(const r of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[r];l++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+o,id:"fake-"+o,firstname:"IA",name:n[o%n.length],country_code:"XX",club_id:null,job:r,job2:null,note_g:r==="GK"?c:2,note_d:r==="DEF"?c:2,note_m:r==="MIL"?c:2,note_a:r==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:r}),o++}const s=pt(a.length);a.forEach((l,c)=>{l._col=s[c]}),i[r]=a}return i}function No(e,t,i){var o;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((o=t.aiStadiumDef.club)==null?void 0:o.encoded_name)||t.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const r=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!r||!a)return;const s=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),d=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);r.innerHTML=Pt(t.aiTeam,t.formation,null,[],c,l,[],d),r.style.cssText=`width:${c}px;height:${l}px;overflow:hidden;flex-shrink:0`;const u=r.querySelector("svg");u&&(u.style.cssText="display:block;width:100%;height:100%",u.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Oo(e,t,i),5e3)}const Ve=e=>wn(e);function Oo(e,t,i){const n=t.homeTeam.MIL||[],o=t.aiTeam.MIL||[],r=t.stadiumDef||null,a=t.aiStadiumDef||null,s=ut(n,r)+ft(n),l=ut(o,a)+ft(o),c=s>=l;e.innerHTML=`
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

    ${ai(n,t.clubName,"#D4A017","home",r)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${ai(o,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const g=(p,f)=>e.querySelectorAll(p).forEach((h,_)=>{setTimeout(()=>{h.style.opacity="1",h.style.transform="translateY(0) scale(1)"},f+_*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,f)=>{setTimeout(()=>{p.style.opacity="1"},f*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(f=>f.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",l,800)},1500)};function u(g,p,f){const h=document.getElementById(g);if(!h)return;const _=performance.now(),b=$=>{const y=Math.min(1,($-_)/f);h.textContent=Math.round(p*(1-Math.pow(1-y,3))),y<1?requestAnimationFrame(b):h.textContent=p};requestAnimationFrame(b)}requestAnimationFrame(d),t.attacker=c?"home":"ai";const x=c?vn():null;c&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Ve(g)),aiPlayers:o.map(g=>Ve(g)),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const m=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ee(e,t,i),t.attacker==="ai"&&setTimeout(()=>Bi(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),f=document.getElementById(c?"duel-row-home":"duel-row-ai"),h=document.getElementById(c?"duel-row-ai":"duel-row-home"),_=c?g:p,b=c?p:g;_&&(_.style.fontSize="80px",_.style.color=c?"#FFD700":"#ff6b6b",_.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),b&&(b.style.opacity="0.25"),setTimeout(()=>{f&&(f.style.transformOrigin="center",f.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",f.style.zIndex="5"),setTimeout(()=>{var y;const $=document.getElementById("duel-shock");if($){const j=(y=h||f)==null?void 0:y.getBoundingClientRect(),E=e.querySelector(".match-screen").getBoundingClientRect();j&&($.style.top=j.top-E.top+j.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}h&&(h.style.transformOrigin="center",h.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var y;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
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
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(y=document.getElementById("start-match-btn"))==null||y.addEventListener("click",m))},600)},700)},2800)}function Ee(e,t,i){var y,j,E,F,N,ne,ie,Q,U;const n=t.selected.map(v=>v.cardId),o=t.usedSubIds||[],r=t.homeSubs.filter(v=>!o.includes(v.cardId)),s=Object.values(t.homeTeam).flat().filter(v=>v.used).length>0&&r.length>0&&t.subsUsed<t.maxSubs,l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(v=>!v.used),c=t.phase==="attack"&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(v=>!v.used).map(v=>v.cardId):[];t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",x=t.phase==="defense",m=t.phase==="finished",p=(t.homeSubs||[]).filter(v=>!(t.usedSubIds||[]).includes(v.cardId)).length>0&&t.subsUsed<t.maxSubs,f=u&&l.length===0&&c.length===0&&!p,h=t.gcCards.filter(v=>!t.usedGc.includes(v.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const S=t.pendingAttack;let G="";if(t.selected.length>0){const re=t.selected.map(se=>({...(t.homeTeam[se._role]||[]).find(ke=>ke.cardId===se.cardId)||se,_line:se._role})),ae=Yt(re,t.modifiers.home);G=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Ye(re.map(se=>({...se,used:!1})),"#3a7bd5",ae.total,"defense")}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Ye((S.players||[]).map(re=>({...re,used:!1})),"#ff6b6b",S.total,"attack")}</div>
            ${G}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const S=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Ye((S.players||[]).map(G=>({...G,used:!1})),"#00ff88",S.total,"attack")}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const S=t.selected.map(re=>{const ae=(t.homeTeam[re._role]||[]).find(de=>de.cardId===re.cardId)||re,se=["GK","DEF"].includes(re._role);return{...ae,_line:re._role,...se?{note_a:Math.max(1,Number(ae.note_a)||0)}:{}}}),G=Vt(S,t.modifiers.home);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Ye(S.map(re=>({...re,used:!1})),"#FFD700",G.total,"attack")}</div>
          </div>`}const v=t.log[t.log.length-1];return v?'<div style="padding:2px 4px">'+_n(v)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const v=window.innerWidth>=700,S=(R,M,C)=>{var ge,Be;const D=(t.gcDefs||[]).find(je=>je.name===R.gc_type),W={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[D==null?void 0:D.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",K={purple:"#b06ce0",light_blue:"#00d4ef"}[D==null?void 0:D.color]||"#b06ce0",q=(D==null?void 0:D.name)||R.gc_type,O=(D==null?void 0:D.effect)||((ge=Me[R.gc_type])==null?void 0:ge.desc)||"",we=D!=null&&D.image_url?`/icons/${D.image_url}`:null,_e=((Be=Me[R.gc_type])==null?void 0:Be.icon)||"⚡",ye=Math.round(C*.22),be=Math.round(C*.22),$e=C-ye-be,Le=q.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${M}px;height:${C}px;border-radius:10px;border:2px solid ${K};background:${W};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ye}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Le}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${M-6}px">${q}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${$e}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${we?`<img src="${we}" style="max-width:${M-10}px;max-height:${$e-6}px;object-fit:contain">`:`<span style="font-size:${Math.round($e*.55)}px">${_e}</span>`}
          </div>
          <div style="height:${be}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${O.slice(0,38)}</span>
          </div>
        </div>`},G=(R,M)=>{var C;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${M}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(M*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(M*.2)}px">⚡</div>
            <div style="font-size:${Math.round(M*.09)}px;color:#000;font-weight:900">+${(C=t.boostCard)==null?void 0:C.value}</div>
          </div>`},re=(R,M)=>M?G(130,175):S(R,130,175),ae=(R,M)=>M?G(68,95):S(R,68,95),se=v?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",de=m?`<button id="btn-results" style="${se};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${se};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${se};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ke=u||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Y=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${v?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${r.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':r.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${mt(R,76,100)}</div>`).join("")}
      </div>`,J=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Pt(t.homeTeam,t.formation,t.phase,n,v?1300:Lt(),v?600:qt(),c)}
        </div>
      </div>`;return v?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Y}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${J}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${de}${ke}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${h.map(R=>re(R,!1)).join("")}
            ${_?re(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Pt(t.homeTeam,t.formation,t.phase,n,v?1300:Lt(),v?600:qt(),c)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${h.map(R=>ae(R,!1)).join("")}
            ${_?ae(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${r.length}</div>
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
          <div>${de}${ke}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(v=>{var S,G,re;if(v.type==="duel"){const ae=v.isGoal,se=v.homeScored?"#FFD700":ae?"#ff6b6b":"rgba(255,255,255,0.3)",de=v.homeScored?"⚽ BUT !":ae?"⚽ BUT IA !":(S=v.homePlayers)!=null&&S.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ae?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${se};margin-bottom:4px">
                <div style="font-size:9px;color:${se};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${de}</div>
                ${(G=v.homePlayers)!=null&&G.length?`<div style="margin-bottom:3px">${Ye(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
                ${(re=v.aiPlayers)!=null&&re.length?`<div style="opacity:0.7">${Ye(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
              </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${v.outPlayer?mt({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${v.inPlayer?mt({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:v.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${v.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${v.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function b(){const v=e.querySelector(".match-screen");if(!v)return;const S=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);v.style.bottom="auto",v.style.height=S+"px",v.style.minHeight=S+"px",v.style.maxHeight=S+"px",v.style.overflow="hidden";const G=e.querySelector("#mobile-action-bar"),re=e.querySelector("#mobile-play-area");G&&re&&(re.style.paddingBottom=G.offsetHeight+"px")}if(b(),setTimeout(b,120),setTimeout(b,400),setTimeout(b,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",b),window.visualViewport.addEventListener("scroll",b)),window.addEventListener("resize",b)),function(){const S=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!S)return;const G=S.closest("#match-terrain-wrap");G&&(G.style.cssText="position:relative;width:100%;height:100%;padding:0"),S.removeAttribute("width"),S.removeAttribute("height"),S.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",S.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const v=e.querySelector(".terrain-wrapper svg");if(v){const S=v.closest("#match-terrain-wrap");S&&(S.style.cssText="position:relative;width:100%;height:100%;padding:0"),v.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let v=!1,S=30;const G=()=>document.getElementById("match-timer"),re=()=>{const ae=G();if(!ae)return;const se=String(Math.floor(S/60)).padStart(2,"0"),de=String(S%60).padStart(2,"0");ae.textContent=` ${se}:${de}`,ae.style.color=v?"#ff2222":"#ff9500",ae.style.fontWeight="900"};re(),t._timerInt=setInterval(()=>{if(S--,S<0)if(!v)v=!0,S=15,re();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ae=document.createElement("div");ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ae.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ae),setTimeout(()=>{ae.remove(),Dt(e,t,i)},2500)}else re()},1e3)}(y=document.getElementById("match-quit"))==null||y.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Dt(e,t,i))}),(j=document.getElementById("view-ai"))==null||j.addEventListener("click",()=>er(t,i)),(E=document.getElementById("toggle-history"))==null||E.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.add("open")}),(F=document.getElementById("close-history"))==null||F.addEventListener("click",()=>{var v;(v=document.getElementById("match-history-panel"))==null||v.classList.remove("open")}),(N=document.getElementById("btn-action"))==null||N.addEventListener("click",()=>{t.selected.length!==0&&(u?Uo(e,t,i):x&&Ko(e,t,i))}),(ne=document.getElementById("btn-results"))==null||ne.addEventListener("click",()=>Dt(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ee(e,t,i),setTimeout(()=>Bi(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(v=>{v.addEventListener("click",()=>Ho(v,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(v=>{v.addEventListener("click",()=>bi(e,t,i,null,v.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(v=>{u?v.addEventListener("click",()=>Xo(v.dataset.gcId,v.dataset.gcType,e,t,i)):(v.style.opacity="0.35",v.style.cursor="default",v.addEventListener("click",()=>_t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Q=document.getElementById("boost-card"))==null||Q.addEventListener("click",()=>Zo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(v=>{v.addEventListener("click",()=>bi(e,t,i,v.dataset.subId))}),(U=document.getElementById("sub-btn-main"))==null||U.addEventListener("click",()=>bi(e,t,i))}function Ho(e,t,i,n){const o=e.dataset.cardId,r=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===o);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[r]||[]).find(l=>l.cardId===o);s&&t.selected.push({...s,_role:r,_line:r})}Ee(i,t,n)}function Ci(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Uo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ci(t,i,i.state.profile.id);const n=t.selected.map(r=>{const a=(t.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,s=["GK","DEF"].includes(r._role);return{...a,_line:r._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),o=Vt(n,t.modifiers.home);t.pendingAttack={...o,players:[...n],side:"home"},t.selected.forEach(r=>{const a=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ee(e,t,i),setTimeout(()=>Wo(e,t,i),1200)}function Ko(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ci(t,i,i.state.profile.id);const n=t.stadiumDef||null,o=t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(u=>u.cardId===l.cardId)||l,d=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:l._role,stadiumBonus:d}}),r=Yt(o,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);c&&(c.used=!0)});const a=ji(t.pendingAttack.total,r.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>Ve(l)),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return Ve(c)}),homeTotal:r.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${r.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ee(e,t,i),ot(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Tt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${r.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Tt(e,t,i,"home-attack")}function Vo(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(l=>l.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(l=>!e.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],o=i.find(l=>l.job===n.job)||i[0],r={...o,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(l=>l.cardId===n.cardId);s!==-1&&(a[s]=r),e.aiUsedSubIds.push(o.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${o.firstname} ${o.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Yo(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(o=>!e.aiUsedGc.includes(o.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Me[i.gc_type],i.gc_type){case"Boost+2":{const o=Object.values(e.aiTeam).flat().filter(r=>!r.used);if(o.length){const r=o[Math.floor(Math.random()*o.length)];r.boost=(r.boost||0)+2}break}case"Boost+3":{const o=Object.values(e.aiTeam).flat().filter(r=>!r.used);if(o.length){const r=o[Math.floor(Math.random()*o.length)];r.boost=(r.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Bi(e,t,i){Ci(t,i,null),Vo(t),Yo(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used),o=!1;n.length||(n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[]].filter(d=>!d.used),o=!0);const r=pn(n,"attack",t.difficulty);if(!r.length){Ei(e,t,i);return}o&&r.forEach(d=>{d._line=d._line||d.job,d.note_a=Math.max(1,Number(d.note_a)||0)});const a=Vt(r,t.modifiers.ai);t.pendingAttack={...a,players:r,side:"ai"},r.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${r.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(r.length===1&&(r[0]._line==="GK"||r[0].job==="GK")&&$i(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,si(e,t,i,"ai",r[0]);return}t.aiScore++;const u={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:r.map(x=>Ve(x)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(u),t.pendingAttack=null,Ee(e,t,i),ot(u.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Tt(e,t,i,"home-attack")});return}t.phase="defense",Ee(e,t,i)}function Wo(e,t,i){var c,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],o=pn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(x=>!x.used)).length){const u=((c=t.pendingAttack)==null?void 0:c.players)||[];if(u.length===1&&(u[0]._line==="GK"||u[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,si(e,t,i,"home",u[0]);return}t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:u.map(g=>Ve(g)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Ee(e,t,i),ot(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{Tt(e,t,i,"ai-attack")});return}const a=o.length>0?Yt(o,t.modifiers.ai).total:0;o.forEach(u=>{u.used=!0});const s=ji(t.pendingAttack.total,a,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Ve(u)),aiPlayers:o.map(u=>Ve(u)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,Ee(e,t,i),ot(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{Tt(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,Tt(e,t,i,"ai-attack")}function Tt(e,t,i,n){if(t.round++,!$n(e,t,i)){if(qi(t)){Dt(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(r=>(t.homeTeam[r]||[]).some(a=>!a.used))){Ei(e,t,i);return}t.phase="attack",Ee(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(r=>(t.aiTeam[r]||[]).some(a=>!a.used))){Ei(e,t,i);return}t.phase="ai-attack",Ee(e,t,i),setTimeout(()=>Bi(e,t,i),800)}}}function $i(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function Zi(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(o=>!o.used));return t&&!i}function $n(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(Zi(t.homeTeam)&&$i(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(o=>!o.used);return n?(n.used=!0,t.homeScore++,si(e,t,i,"home",n),!0):!1}if(Zi(t.aiTeam)&&$i(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(o=>!o.used);return n?(n.used=!0,t.aiScore++,si(e,t,i,"ai",n),!0):!1}return!1}function si(e,t,i,n,o){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ve(o)]:[],aiPlayers:n==="ai"?[Ve(o)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(r);const a=(s,l)=>new Promise(c=>{r.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),r.remove(),t.pendingAttack=null,Ee(e,t,i),ot([Ve(o)],t.homeScore,t.aiScore,n==="home",()=>{if(qi(t)){Dt(e,t,i);return}Tt(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function qi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(o=>!o.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(o=>!o.used));return!t&&!i}function Ei(e,t,i){$n(e,t,i)||(qi(t)?Dt(e,t,i):(t.phase="attack",Ee(e,t,i)))}function bi(e,t,i,n=null,o=null){var m,g;if(t.phase!=="attack"){_t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){_t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const r=Object.entries(t.homeTeam).flatMap(([p,f])=>(f||[]).filter(h=>h.used).map(h=>({...h,_line:h._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!r.length){_t("Aucun joueur utilisé à remplacer");return}if(!a.length){_t("Aucun remplaçant disponible");return}let s=Math.max(0,r.findIndex(p=>p.cardId===o));const l=((m=r[s])==null?void 0:m._line)||((g=r[s])==null?void 0:g.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===l)),d=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var y,j,E,F,N,ne;const p=r[s],f=a[c],h=Math.min(130,Math.round((window.innerWidth-90)/2)),_=Math.round(h*1.35),b=ie=>`background:rgba(255,255,255,0.12);border:none;color:${ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ie?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${b(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${f?mt({...f,used:!1,boost:0},h,_):"<div>—</div>"}</div>
        <button id="in-down" style="${b(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${b(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?mt({...p,used:!1,boost:0},h,_):"<div>—</div>"}</div>
        <button id="out-down" style="${b(s>=r.length-1)}" ${s>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${r.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(y=u.querySelector("#sub-close"))==null||y.addEventListener("click",()=>u.remove()),(j=u.querySelector("#out-up"))==null||j.addEventListener("click",()=>{s>0&&(s--,x())}),(E=u.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<r.length-1&&(s++,x())}),(F=u.querySelector("#in-up"))==null||F.addEventListener("click",()=>{c>0&&(c--,x())}),(N=u.querySelector("#in-down"))==null||N.addEventListener("click",()=>{c<a.length-1&&(c++,x())});const $=(ie,Q,U,v)=>{const S=u.querySelector("#"+ie);if(!S)return;let G=0;S.addEventListener("touchstart",re=>{G=re.touches[0].clientY},{passive:!0}),S.addEventListener("touchend",re=>{const ae=re.changedTouches[0].clientY-G;if(Math.abs(ae)<30)return;const se=Q();ae<0&&se<v-1?(U(se+1),x()):ae>0&&se>0&&(U(se-1),x())},{passive:!0})};$("in-panel",()=>c,ie=>c=ie,a.length),$("out-panel",()=>s,ie=>s=ie,r.length),(ne=u.querySelector("#sub-confirm"))==null||ne.addEventListener("click",ie=>{if(ie.preventDefault(),ie.stopPropagation(),d)return;d=!0;const Q=r[s],U=a[c];if(!Q||!U)return;let v=null,S=-1;for(const[re,ae]of Object.entries(t.homeTeam)){const se=(ae||[]).findIndex(de=>de.cardId===Q.cardId);if(se!==-1){v=re,S=se;break}}if(S===-1||!v){_t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const G={...U,_line:v,_col:Q._col||0,used:!1,boost:0};t.homeTeam[v].splice(S,1,G),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Q.name,firstname:Q.firstname,note:Ge(Q,v),portrait:Wt(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:Ge(U,v),portrait:Wt(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${Q.firstname} ${Q.name}`}),u.remove(),Fo(Q,U,()=>Ee(e,t,i))})}document.body.appendChild(u),x()}function Xo(e,t,i,n,o){var g,p;const r=(n.gcDefs||[]).find(f=>f.name===t),a=Me[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[r==null?void 0:r.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[r==null?void 0:r.color]||"#b06ce0",c=(r==null?void 0:r.name)||t,d=(r==null?void 0:r.effect)||a.desc,u=r!=null&&r.image_url?`/icons/${r.image_url}`:null,x=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${x}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(g=m.querySelector("#gc-back"))==null||g.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),Qo(e,t,i,n,o)})}function ti(e,t,i,n,o,r){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var c,d;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(u=>{const x=u._line||u.job||"MIL",m=s.find(p=>p.cardId===u.cardId),g=Se({...u,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:u.boost||0});return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="position:relative;border-radius:8px;${m?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const x=u.dataset.cid,m=e.find(p=>p.cardId===x);if(!m)return;const g=s.findIndex(p=>p.cardId===x);g>-1?s.splice(g,1):s.length<t&&s.push(m),l()})}),(d=a.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{a.remove(),r(s)})}l(),document.body.appendChild(a)}const Jo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,o,r)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,l])=>l.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(ti(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,o,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(d=>d.cardId===l.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),Ee(o,n,r)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ee(o,n,r),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},o,r,a)=>{const s=n==="home"?o.homeTeam:o.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(x=>!x.used).map(x=>({...x,_line:d})));return c.length?(ti(c,t,`Choisir ${t} joueur(s) ${l}(s) à débuffer (-${e})`,r,o,d=>{d.forEach(u=>{const m=((n==="home"?o.homeTeam:o.aiTeam)[u._line]||[]).find(g=>g.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,o.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ee(r,o,a)}),!0):(o.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ee(r,o,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,o,r)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,d])=>d.filter(u=>!u.used).map(u=>({...u,_line:c})));return l.length?(ti(l,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,o,n,c=>{c.forEach(d=>{const x=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(m=>m.cardId===d.cardId);x&&(x.used=!0,n.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ee(o,n,r)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Ee(o,n,r),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,o)=>{const r=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(l=>l.used).map(l=>({...l,_line:a})));return r.length?(ti(r,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const l=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ee(n,i,o)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ee(n,i,o),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Qo(e,t,i,n,o){n.usedGc.push(e);const r=n.gcDefs||[],a=r.find(l=>l.name===t)||r.find(l=>{var c;return((c=l.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=Jo[a.effect_type];l?l(a.effect_params||{},n,i,o)||(s=!0):(o.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(n.homeTeam).flatMap(([c,d])=>(d||[]).filter(u=>u.used).map(u=>({...u,_line:c})));l.length?(l[0].used=!1,n.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(l.length){const c=l.sort((d,u)=>Ge(u,"ATT")-Ge(d,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}w.from("cards").delete().eq("id",e).then(()=>{}),s&&Ee(i,n,o)}function Zo(e,t,i){const n=Object.values(t.homeTeam).flat().filter(o=>!o.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(o=>`
        <div class="player-boost-opt" data-card-id="${o.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Co[o.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ge(o,o._line||o.job)}</div>
          <div style="flex:1"><b>${o.firstname} ${o.name}</b><div style="font-size:11px;color:#888">${o._line||o.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(o=>{o.addEventListener("click",()=>{const r=o.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(l=>l.cardId===r);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ee(e,t,i)})})}async function Dt(e,t,i){var d,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,o=t.homeScore>t.aiScore,r=t.homeScore===t.aiScore,a=o?"victoire":r?"nul":"defaite",s=Zn(t.mode,a);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:o?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};o?l.wins=(n.profile.wins||0)+1:r?l.draws=(n.profile.draws||0)+1:l.losses=(n.profile.losses||0)+1,await w.from("users").update(l).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${o?"🏆":r?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${o?"Victoire !":r?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(c),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{c.remove(),We(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{c.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function er(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ci(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const jt=e=>wn(e);async function zt(e,t,i,n,o={}){return En(e,t,i,n,o.myGC||[],o.gcDefs||[],o.isRanked||!1,o.rankedData||null,o.stadiumDef||null,o.onMatchEnd||null,o.mlLeagueId||null,o.mlMatchId||null)}async function tr(e,t,i){const{data:n}=await w.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const o=n.home_id===t.state.user.id;return En(e,t,i,o,[],[],n.is_ranked||!1,null,null,null,null,null)}async function En(e,t,i,n,o=[],r=[],a=!1,s=null,l=null,c=null,d=null,u=null){const{state:x,navigate:m,toast:g}=t,p=n?"p1":"p2",f=n?"p2":"p1",h=(o||[]).map(k=>k.id),_=(o||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:b}=await w.from("matches").select("*").eq("id",i).single();if(!b){g("Match introuvable","error"),m("home");return}async function $(){var me,xe;console.log("[PvP] buildGameState match:",{id:b.id,home_deck_id:b.home_deck_id,away_deck_id:b.away_deck_id,mode:b.mode,is_ranked:b.is_ranked});const[{data:k,error:L},{data:I,error:A},{data:T},{data:z}]=await Promise.all([w.rpc("get_deck_for_match",{p_deck_id:b.home_deck_id}),w.rpc("get_deck_for_match",{p_deck_id:b.away_deck_id}),w.from("users").select("id,pseudo,club_name").eq("id",b.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",b.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",A==null?void 0:A.message,"p1D:",(me=k==null?void 0:k.starters)==null?void 0:me.length,"p2D:",(xe=I==null?void 0:I.starters)==null?void 0:xe.length);const B=te=>{const Te=Number(te.evolution_bonus)||0;return{cardId:te.card_id,position:te.position,id:te.id,firstname:te.firstname,name:te.surname_real,country_code:te.country_code,club_id:te.club_id,job:te.job,job2:te.job2,note_g:(Number(te.note_g)||0)+(te.job==="GK"||te.job2==="GK"&&Number(te.note_g)>0?Te:0),note_d:(Number(te.note_d)||0)+(te.job==="DEF"||te.job2==="DEF"&&Number(te.note_d)>0?Te:0),note_m:(Number(te.note_m)||0)+(te.job==="MIL"||te.job2==="MIL"&&Number(te.note_m)>0?Te:0),note_a:(Number(te.note_a)||0)+(te.job==="ATT"||te.job2==="ATT"&&Number(te.note_a)>0?Te:0),evolution_bonus:Te,rarity:te.rarity,skin:te.skin,hair:te.hair,hair_length:te.hair_length,face:te.face||null,clubName:te.club_encoded_name||null,clubLogo:te.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},P=((k==null?void 0:k.starters)||[]).map(te=>B(te)),X=((I==null?void 0:I.starters)||[]).map(te=>B(te)),V=(k==null?void 0:k.formation)||"4-4-2",oe=(I==null?void 0:I.formation)||"4-4-2";let Z=ri(P,V),H=ri(X,oe);const le=((k==null?void 0:k.subs)||[]).map(te=>B(te)),pe=((I==null?void 0:I.subs)||[]).map(te=>B(te)),ue=(k==null?void 0:k.stadium_def)||(n?l:null),ce=(I==null?void 0:I.stadium_def)||(n?null:l);return ue&&(Z=Xt(Z,ue),oi(le,ue)),ce&&(H=Xt(H,ce),oi(pe,ce)),{p1Team:Z,p2Team:H,p1Subs:le,p2Subs:pe,p1Formation:V,p2Formation:oe,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?h:[],gc_p2:n?[]:h,gcCardsFull_p1:n?_:[],gcCardsFull_p2:n?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:r||[],lastActionAt:new Date().toISOString()}}let y=b.game_state&&Object.keys(b.game_state).length?b.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!y,"match.status:",b.status,"home_id:",b.home_id,"away_id:",b.away_id,"myId:",x.profile.id),!y)if(n){y=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((y==null?void 0:y.p1Team)||{}));const{data:k}=await w.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await w.from("matches").update({game_state:y,turn_user_id:b.home_id}).eq("id",i):y=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!y;k++){await new Promise(I=>setTimeout(I,400));const{data:L}=await w.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(y=L.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(L!=null&&L.game_state))}if(!y){g("Erreur de synchronisation","error"),m("home");return}y.gc_p2=h,y.gcCardsFull_p2=_,await w.from("matches").update({game_state:y}).eq("id",i)}let j=!1,E=null,F=!1;const N=new Set,ne=new Set;async function ie(k){var oe,Z;try{w.removeChannel(Q)}catch{}const L=y[p+"Score"]||0,I=y[f+"Score"]||0;let A,T;k.winner_id?(A=k.winner_id===x.profile.id,T=!1):k.forfeit?(A=L>I,T=!1):(T=L===I,A=L>I);let z="";if(a&&n)try{const{data:H}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",b.home_id).single(),{data:le}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",b.away_id).single();if(H&&le){const pe=A?1:T?.5:0,ue=1-pe,ce=H.placement_matches<10,me=le.placement_matches<10,xe=computeGlicko2(H.mmr,H.mmr_deviation,H.mmr_volatility,le.mmr,le.mmr_deviation,pe===1?1:pe===0?0:.5,ce),te=computeGlicko2(le.mmr,le.mmr_deviation,le.mmr_volatility,H.mmr,H.mmr_deviation,ue===1?1:ue===0?0:.5,me);await w.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:A?b.home_id:b.away_id,p_home_id:b.home_id,p_away_id:b.away_id,p_home_delta:xe.delta,p_away_delta:te.delta,p_home_new_rd:xe.newRd,p_away_new_rd:te.newRd,p_home_new_vol:xe.newSigma,p_away_new_vol:te.newSigma});const Te=xe.delta,Fe=xe.newMmr,Ie=getTier(Fe),He=Te>=0?"+":"",It=Te>=0?"#4caf50":"#ff6b6b",Je=getTier(H.mmr);z=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ie.id!==Je.id?`<div style="font-size:20px;font-weight:900;color:${Ie.color}">
                    ${Fe>H.mmr?"📈":"📉"} ${Je.emoji} ${Je.label} → ${Ie.emoji} ${Ie.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Fe>H.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Te>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ie.color}">${Ie.emoji} ${Ie.label}</div>`}
              ${ce?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${H.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(H){console.error("[Ranked] MMR update error:",H)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const P=T?"🤝":A?"🏆":"😞",X=T?"MATCH NUL":A?"VICTOIRE !":"DÉFAITE",V=T?"#fff":A?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${P}</div>
      <div style="font-size:26px;font-weight:900;color:${V}">${X}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${y[p+"Name"]} ${L} – ${I} ${y[f+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${A?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${z}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(Z=B.querySelector("#pvp-end-home"))==null||Z.addEventListener("click",()=>{B.remove(),We(e),m(a?"ranked":"home")})}const Q=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{const L=k.new;try{if(L.status==="finished"||L.forfeit){if(j)return;j=!0,E&&(clearInterval(E),E=null),L.game_state&&(y=L.game_state),ie(L);return}if(L.game_state){const I=y;y=L.game_state;const A=y._lastGC;if(A&&A.seq&&!ne.has(A.seq)&&(ne.add(A.seq),A.by!==p)){R(A.type,A.by,()=>de());return}const T=I[p+"Score"]||0,z=I[f+"Score"]||0,B=y[p+"Score"]||0,P=y[f+"Score"]||0,X=B>T,V=P>z;if((X||V)&&!N.has(y.round)){N.add(y.round);const oe=[...y.log||[]].reverse().find(H=>H.isGoal),Z=((oe==null?void 0:oe.homePlayers)||[]).map(H=>({name:H.name,note:H.note,portrait:H.portrait,job:H.job}));ot(Z,B,P,X,()=>de());return}de()}}catch(I){console.error("[PvP] crash:",I)}}).subscribe();async function U(k){Object.assign(y,k),y.lastActionAt=new Date().toISOString();const{error:L}=await w.from("matches").update({game_state:y}).eq("id",i);L&&g("Erreur de synchronisation","error");try{de()}catch(I){console.error("[PvP] renderPvpScreen crash:",I)}}async function v(){if(j)return;j=!0,E&&(clearInterval(E),E=null);const k=n?b.away_id:b.home_id,L=n?"p2":"p1",I=n?"p1":"p2",A={...y,[L+"Score"]:3,[I+"Score"]:0,phase:"finished"},T=A.p1Score||0,z=A.p2Score||0;try{await w.from("matches").update({status:"finished",forfeit:!0,winner_id:k,home_score:T,away_score:z,game_state:A}).eq("id",i),u&&await w.from("mini_league_matches").update({status:"finished",home_score:T,away_score:z,match_id:i}).eq("id",u);try{const{data:B}=await w.rpc("apply_match_rewards",{p_match_id:i});B!=null&&B.success&&!(B!=null&&B.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(B){console.error("[PvP] apply_match_rewards (forfeit):",B)}}catch{}try{w.removeChannel(Q)}catch{}setTimeout(()=>{We(e),d?m("mini-league",{openLeagueId:d}):m("home")},800)}const S={BOOST_STAT:({value:k=1,count:L=1,roles:I=[]},A,T)=>{const z=A[p+"Team"],B=Object.entries(z).filter(([P])=>!I.length||I.includes(P)).flatMap(([P,X])=>X.filter(V=>!V.used).map(V=>({...V,_line:P})));if(!B.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(A);return}G(B,L,`Choisir ${L} joueur(s) à booster (+${k})`,P=>{P.forEach(X=>{const V=(z[X._line]||[]).find(oe=>oe.cardId===X.cardId);V&&(V.boost=(V.boost||0)+k,A.log.push({text:`⚡ +${k} sur ${V.name}`,type:"info"}))}),A[p+"Team"]=z,T(A)})},DEBUFF_STAT:({value:k=1,count:L=1,roles:I=[],target:A="ai"},T,z)=>{const B=A==="home"?p:f,P=T[B+"Team"],X=A==="home"?"allié":"adverse",V=Object.entries(P).filter(([oe])=>!I.length||I.includes(oe)).flatMap(([oe,Z])=>Z.map(H=>({...H,_line:oe})));if(!V.length){T.log.push({text:`🎯 Aucun joueur ${X}`,type:"info"}),z(T);return}G(V,L,`Choisir ${L} joueur(s) ${X}(s) (-${k})`,oe=>{oe.forEach(Z=>{const H=(P[Z._line]||[]).find(le=>le.cardId===Z.cardId);H&&(H.boost=(H.boost||0)-k,T.log.push({text:`🎯 -${k} sur ${H.name}`,type:"info"}))}),T[B+"Team"]=P,z(T)})},GRAY_PLAYER:({count:k=1,roles:L=[],target:I="ai"},A,T)=>{const z=I==="home"?p:f,B=A[z+"Team"],P=I==="home"?"allié":"adverse",X=Object.entries(B).filter(([V])=>!L.length||L.includes(V)).flatMap(([V,oe])=>oe.filter(Z=>!Z.used).map(Z=>({...Z,_line:V})));if(!X.length){A.log.push({text:`❌ Aucun joueur ${P}`,type:"info"}),T(A);return}G(X,k,`Choisir ${k} joueur(s) ${P}(s) à exclure`,V=>{const oe="usedCardIds_"+z,Z=new Set(A[oe]||[]);V.forEach(H=>{const le=(B[H._line]||[]).find(pe=>pe.cardId===H.cardId);le&&(le.used=!0,Z.add(H.cardId),A.log.push({text:`❌ ${le.name} exclu !`,type:"info"}))}),A[oe]=[...Z],A[z+"Team"]=B,T(A)})},REVIVE_PLAYER:({count:k=1,roles:L=[]},I,A)=>{const T=I[p+"Team"],z=Object.entries(T).filter(([B])=>!L.length||L.includes(B)).flatMap(([B,P])=>P.filter(X=>X.used).map(X=>({...X,_line:B})));if(!z.length){I.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(I);return}G(z,k,`Choisir ${k} joueur(s) à ressusciter`,B=>{B.forEach(P=>{const X=(T[P._line]||[]).find(V=>V.cardId===P.cardId);X&&(X.used=!1,I.log.push({text:`💫 ${X.name} ressuscité !`,type:"info"}))}),I[p+"Team"]=T,A(I)})},REMOVE_GOAL:({},k,L)=>{const I=f+"Score";k[I]>0?(k[I]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(k)},ADD_GOAL_DRAW:({},k,L)=>{k[p+"Score"]===k[f+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(k)},ADD_SUB:({value:k=1},L,I)=>{L.maxSubs=(L.maxSubs||3)+k,L.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),I(L)},CUSTOM:({},k,L)=>L(k)};function G(k,L,I,A){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let z=[];function B(){var X,V;const P=k.map(oe=>{const Z=oe._line||oe.job||"MIL",H=z.find(pe=>pe.cardId===oe.cardId),le=Se({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:Z,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${H?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${le}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${I}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${z.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${P}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${z.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${z.length}/${L})
          </button>
        </div>`,(X=T.querySelector("#pp-close"))==null||X.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const Z=oe.dataset.cid,H=k.find(pe=>pe.cardId===Z),le=z.findIndex(pe=>pe.cardId===Z);H&&(le>-1?z.splice(le,1):z.length<L&&z.push(H),B())})}),(V=T.querySelector("#pp-confirm"))==null||V.addEventListener("click",()=>{T.remove(),A(z)})}B(),document.body.appendChild(T)}async function re(k,L){const A=(y["gcCardsFull_"+p]||[]).find(P=>P.id===k),T=(A==null?void 0:A._gcDef)||(y.gcDefs||[]).find(P=>{var X;return P.name===L||((X=P.name)==null?void 0:X.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),z=[...y["usedGc_"+p]||[],k],B={type:L,by:p,seq:(y._gcAnimSeq||0)+1};ne.add(B.seq),R(L,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const X=S[T.effect_type];if(X){const V={...y};X(T.effect_params||{},V,async oe=>{oe["usedGc_"+p]=z,oe._lastGC=B,oe._gcAnimSeq=B.seq,await U(oe)});return}}const P={...y};switch(L){case"Remplacement+":P.maxSubs=(P.maxSubs||3)+1,P.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const X=f+"Score";P[X]>0&&(P[X]--,P.log.push({text:"🚫 But annulé",type:"info"}));break}}P["usedGc_"+p]=z,P._lastGC=B,P._gcAnimSeq=B.seq,await U(P)})}function ae(k,L){const I="usedCardIds_"+k,A=new Set(y[I]||[]);L.forEach(T=>A.add(T)),y[I]=[...A]}function se(){for(const k of["p1","p2"]){const L=new Set(y["usedCardIds_"+k]||[]),I=y[k+"Team"];if(I)for(const A of["GK","DEF","MIL","ATT"])(I[A]||[]).forEach(T=>{T.used=L.has(T.cardId)})}}function de(){var at,st,vt,Fi,Pi,Gi;if(y.phase==="reveal")return ke();if(y.phase==="midfield")return J();if(y.phase==="finished")return Rt();const k=y[p+"Team"];y[f+"Team"],se();const L=y[p+"Score"],I=y[f+"Score"],A=y[p+"Name"],T=y[f+"Name"],z=y.phase===p+"-attack",B=y.phase===p+"-defense",P=Array.isArray(y["selected_"+p])?y["selected_"+p]:[],X=P.map(ee=>ee.cardId),V=window.innerWidth>=700,oe=y[p+"Subs"]||[],Z=y["usedSubIds_"+p]||[],H=oe.filter(ee=>!Z.includes(ee.cardId)),le=y["gcCardsFull_"+p]||[],pe=y["usedGc_"+p]||[],ue=le.filter(ee=>!pe.includes(ee.id)),ce=y.boostOwner===p&&!y.boostUsed,me=[...k.MIL||[],...k.ATT||[]].filter(ee=>!ee.used),xe=z&&me.length===0?[...k.GK||[],...k.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function te(ee,fe,ze){var Mt,lt;const he=ee._gcDef,St={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[he==null?void 0:he.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",et={purple:"#b06ce0",light_blue:"#00d4ef"}[he==null?void 0:he.color]||"#b06ce0",De=(he==null?void 0:he.name)||ee.gc_type,Ne=(he==null?void 0:he.effect)||((Mt=Me[ee.gc_type])==null?void 0:Mt.desc)||"",Ae=he!=null&&he.image_url?`/icons/${he.image_url}`:null,wt=((lt=Me[ee.gc_type])==null?void 0:lt.icon)||"⚡",Pe=Math.round(ze*.22),dt=Math.round(ze*.22),tt=ze-Pe-dt,At=De.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${ze}px;border-radius:10px;border:2px solid ${et};background:${St};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Pe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${At}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${De}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${tt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Ae?`<img src="${Ae}" style="max-width:${fe-10}px;max-height:${tt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(tt*.55)}px">${wt}</span>`}
        </div>
        <div style="height:${dt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ne.slice(0,38)}</span>
        </div>
      </div>`}function Te(ee,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${y.boostValue}</div>
      </div>`}const Fe=(ee,fe)=>fe?Te(130,175):te(ee,130,175),Ie=(ee,fe)=>fe?Te(68,95):te(ee,68,95),He=V?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",It=z?je(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${P.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:B?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${P.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${T}</div>`,Je=z&&!je(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||B?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${P.length}/3 sélectionné(s)</div>`:"",Qt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${V?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${mt(ee,V?76:44,V?100:58)}</div>`).join("")}
    </div>`,qe=z?"attack":B?"defense":"idle",Qe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Pt(k,y[p+"Formation"],qe,X,V?1300:Lt(),V?600:qt(),xe)}
      </div>
    </div>`,Re=y[p+"Team"],ht=(()=>{var fe,ze,he,St,et;if(B&&((fe=y.pendingAttack)!=null&&fe.players)){const De=y.pendingAttack;let Ne="";if(P.length>0){const Ae=P.map(Pe=>{const dt=(Re[Pe._role]||[]).find(fi=>fi.cardId===Pe.cardId)||Pe,tt=Re[Pe._role]||[],At=tt.findIndex(fi=>fi.cardId===Pe.cardId),Mt=pt(tt.length),lt=At>=0?Mt[At]:dt._col??1;return{...dt,_line:Pe._role,_col:lt}}),wt=Yt(Ae,((ze=y.modifiers)==null?void 0:ze[p])||{});Ne=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${P.length}/3)</div>
            <div style="display:flex;justify-content:center">${Ye(Ae.map(Pe=>({...Pe,used:!1})),"#3a7bd5",wt.total,"defense")}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${T} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Ye((De.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",De.total,"attack")}</div>
          ${Ne}
        </div>`}if(z&&((he=y.pendingAttack)!=null&&he.players)){const De=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Ye((De.players||[]).map(Ne=>({...Ne,used:!1})),"#00ff88",De.total,"attack")}</div>
        </div>`}if(z&&!((St=y.pendingAttack)!=null&&St.players)&&P.length>0){const De=P.map(Ae=>{const wt=(Re[Ae._role]||[]).find(lt=>lt.cardId===Ae.cardId)||Ae,Pe=["GK","DEF"].includes(Ae._role),dt=Re[Ae._role]||[],tt=dt.findIndex(lt=>lt.cardId===Ae.cardId),At=pt(dt.length),Mt=tt>=0?At[tt]:wt._col??1;return{...wt,_line:Ae._role,_col:Mt,...Pe?{note_a:Math.max(1,Number(wt.note_a)||0)}:{}}}),Ne=Vt(De,((et=y.modifiers)==null?void 0:et[p])||{});return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${P.length}/3)</div>
          <div style="display:flex;justify-content:center">${Ye(De.map(Ae=>({...Ae,used:!1})),"#FFD700",Ne.total,"attack")}</div>
        </div>`}const ee=(y.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+_n(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${L} – ${I}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${T}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${ht}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(y.log||[]).length})
      </button>`;nt(e),e.style.overflow="hidden",V?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Qt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Qe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${It}${Je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(ee=>Fe(ee,!1)).join("")}
            ${ce?Fe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Pt(k,y[p+"Formation"],qe,X,Lt(),qt(),xe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(ee=>Ie(ee,!1)).join("")}
            ${ce?Ie(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&H.length>0?1:.4}">
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
          <div>${It}${Je}</div>
        </div>
      </div>`;function Ue(){const ee=e.querySelector(".match-screen");if(!ee)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=fe+"px",ee.style.minHeight=fe+"px",ee.style.maxHeight=fe+"px",ee.style.overflow="hidden";const ze=e.querySelector("#mobile-action-bar"),he=e.querySelector("#mobile-play-area");ze&&he&&(he.style.paddingBottom=ze.offsetHeight+"px")}if(Ue(),setTimeout(Ue,120),setTimeout(Ue,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ue),window.visualViewport.addEventListener("scroll",Ue)),window.addEventListener("resize",Ue)),function(){const fe=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!fe)return;const ze=fe.closest("#match-terrain-wrap");ze&&(ze.style.cssText="position:relative;width:100%;height:100%;padding:0"),fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("preserveAspectRatio","xMidYMid meet")}(),y._pvpResizeBound||(y._pvpResizeBound=!0,window.addEventListener("resize",()=>{const ee=e.querySelector(".terrain-wrapper svg");if(ee){const fe=ee.closest("#match-terrain-wrap");fe&&(fe.style.cssText="position:relative;width:100%;height:100%;padding:0"),ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!z&&!B)return;const fe=ee.dataset.cardId,ze=ee.dataset.role,he=(k[ze]||[]).find(Ne=>Ne.cardId===fe);if(!he||he.used)return;const St=xe.includes(fe);if(z&&!["MIL","ATT"].includes(ze)&&!St)return;Array.isArray(y["selected_"+p])||(y["selected_"+p]=[]);const et=y["selected_"+p],De=et.findIndex(Ne=>Ne.cardId===fe);De>-1?et.splice(De,1):et.length<3&&et.push({...he,_role:ze}),de()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>D(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>D())}),(at=e.querySelector("#pvp-sub-open"))==null||at.addEventListener("click",()=>D()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{z?ee.addEventListener("click",()=>M(ee.dataset.gcId,ee.dataset.gcType)):(ee.style.opacity="0.35",ee.style.cursor="default",ee.addEventListener("click",()=>_t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(st=e.querySelector("#pvp-boost-card"))==null||st.addEventListener("click",()=>C()),(vt=e.querySelector("#pvp-action"))==null||vt.addEventListener("click",ee=>{z?ee.currentTarget.dataset.pass==="1"||!je(p)?O():be():B&&$e()}),(Fi=e.querySelector("#pvp-quit"))==null||Fi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&v()}),(Pi=e.querySelector("#pvp-view-opp"))==null||Pi.addEventListener("click",()=>K()),(Gi=e.querySelector("#pvp-toggle-history"))==null||Gi.addEventListener("click",()=>q()),E&&(clearInterval(E),E=null),(z||B)&&!j){let ee=30,fe=!1;const ze=()=>document.getElementById("pvp-timer"),he=()=>{ze()&&(ze().textContent=ee+"s",ze().style.color=fe?"#ff4444":"#fff")};he(),E=setInterval(()=>{ee--,ee<0?fe?(clearInterval(E),E=null,z&&!je(p)?O():v()):(fe=!0,ee=15,he()):he()},1e3)}}function ke(){nt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Do(y[f+"Team"],y[f+"Formation"],null,y[f+"Name"]||"Adversaire")}
    </div>`;const k=e.querySelector("svg"),L=k==null?void 0:k.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await U({phase:"midfield"})},5e3)}let Y=!1;function J(){if(Y)return;const k=y[p+"Team"].MIL||[],L=y[f+"Team"].MIL||[],I=ut(k)+ft(k),A=ut(L)+ft(L),T=I>=A;nt(e),e.innerHTML=`
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
      ${ai(k,y[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${ai(L,y[f+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(le,pe)=>e.querySelectorAll(le).forEach((ue,ce)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},pe+ce*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((le,pe)=>setTimeout(()=>{le.style.opacity="1"},pe*70)),900),setTimeout(()=>{const le=e.querySelector("#pvp-vs");le&&(le.style.opacity="1",le.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function B(le,pe,ue){const ce=document.getElementById(le);if(!ce)return;const me=performance.now(),xe=te=>{const Te=Math.min(1,(te-me)/ue);ce.textContent=Math.round(pe*(1-Math.pow(1-Te,3))),Te<1?requestAnimationFrame(xe):ce.textContent=pe};requestAnimationFrame(xe)}setTimeout(()=>{B("pvp-score-me",I,800),B("pvp-score-opp",A,800)},1500);const P=y.p1Team.MIL||[],X=y.p2Team.MIL||[],V=ut(P)+ft(P),oe=ut(X)+ft(X),Z=V>=oe?"p1":"p2";let H=y.boostValue;H==null&&(H=vn(),y.boostValue=H,y.boostOwner=Z,y.boostUsed=!1),Y=!0,setTimeout(()=>{const le=e.querySelector("#duel-row-"+(T?"me":"opp")),pe=e.querySelector("#duel-row-"+(T?"opp":"me")),ue=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),me=T?ue:ce,xe=T?ce:ue;me&&(me.style.fontSize="80px",me.style.color=T?"#FFD700":"#ff6b6b",me.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),xe&&(xe.style.opacity="0.25"),setTimeout(()=>{le&&(le.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",le.style.zIndex="5"),setTimeout(()=>{const te=document.getElementById("duel-shock");te&&(te.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const te=document.getElementById("pvp-duel-finale");if(!te)return;const Te=y.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Fe=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;te.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+y[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+y[f+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Te+Fe,te.style.transition="opacity .45s ease",te.style.opacity="1",te.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const He=Z;await U({phase:He+"-attack",attacker:He,round:1,boostValue:H,boostUsed:!1,boostOwner:He})})},600)},700)},2800)}function R(k,L,I){var ue,ce;const A=(y.gcDefs||[]).find(me=>{var xe;return me.name===k||((xe=me.name)==null?void 0:xe.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",B=(A==null?void 0:A.name)||k,P=(A==null?void 0:A.effect)||((ue=Me[k])==null?void 0:ue.desc)||"",X=A!=null&&A.image_url?`/icons/${A.image_url}`:null,V=((ce=Me[k])==null?void 0:ce.icon)||"⚡",Z=L===p?"Vous":y[L+"Name"]||"Adversaire",H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",H.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${z}66}50%{box-shadow:0 0 60px ${z}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${z};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${Z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${z};background:${T};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${X?`<img src="${X}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${V}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(H);let le=!1;const pe=()=>{le||(le=!0,H.remove(),setTimeout(()=>I&&I(),50))};H.addEventListener("click",pe),setTimeout(pe,3e3)}function M(k,L){var H,le,pe,ue;const A=(y["gcCardsFull_"+p]||[]).find(ce=>ce.id===k),T=A==null?void 0:A._gcDef,z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",P=(T==null?void 0:T.name)||L,X=(T==null?void 0:T.effect)||((H=Me[L])==null?void 0:H.desc)||"Carte spéciale.",V=T!=null&&T.image_url?`/icons/${T.image_url}`:null,oe=((le=Me[L])==null?void 0:le.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${z};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${P.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${P}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${V?`<img src="${V}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${oe}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${X}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(pe=Z.querySelector("#pvp-gc-back"))==null||pe.addEventListener("click",()=>Z.remove()),(ue=Z.querySelector("#pvp-gc-use"))==null||ue.addEventListener("click",()=>{Z.remove(),re(k,L)})}function C(){var A;const k=y[p+"Team"],L=Object.entries(k).flatMap(([T,z])=>(z||[]).filter(B=>!B.used).map(B=>({...B,_line:T})));if(!L.length)return;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",I.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${y.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(T=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",B=Ge(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${z};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(I),(A=I.querySelector("#bp-close"))==null||A.addEventListener("click",()=>I.remove()),I.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const z=T.dataset.cid,B=L.find(X=>X.cardId===z);if(!B)return;const P=(k[B._line]||[]).find(X=>X.cardId===z);P&&(P.boost=(P.boost||0)+y.boostValue),I.remove(),await U({[p+"Team"]:k,boostUsed:!0})})})}function D(k=null){var le,pe;if(!(y.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const I=y[p+"Team"],A=y["usedSubIds_"+p]||[],T=y.maxSubs||3;if(A.length>=T){g(`Maximum ${T} remplacements atteint`,"warning");return}const z=Object.entries(I).flatMap(([ue,ce])=>(ce||[]).filter(me=>me.used).map(me=>({...me,_line:ue}))),B=(y[p+"Subs"]||[]).filter(ue=>!A.includes(ue.cardId));if(!z.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){g("Aucun remplaçant disponible","warning");return}let P=Math.max(0,z.findIndex(ue=>ue.cardId===k));const X=((le=z[P])==null?void 0:le._line)||((pe=z[P])==null?void 0:pe.job);let V=Math.max(0,B.findIndex(ue=>ue.job===X)),oe=!1;const Z=document.createElement("div");Z.id="pvp-sub-overlay",Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function H(){var Fe,Ie,He,It,Je,Qt;const ue=z[P],ce=B[V],me=Math.min(130,Math.round((window.innerWidth-90)/2)),xe=Math.round(me*1.35),te=qe=>`background:rgba(255,255,255,0.12);border:none;color:${qe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${qe?"default":"pointer"};flex-shrink:0`;Z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${A.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(V===0)}" ${V===0?"disabled":""}>▲</button>
          <div>${ce?mt({...ce,used:!1,boost:0},me,xe):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(V>=B.length-1)}" ${V>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${V+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(P===0)}" ${P===0?"disabled":""}>▲</button>
          <div>${ue?mt({...ue,used:!1,boost:0},me,xe):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(P>=z.length-1)}" ${P>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${P+1}/${z.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Fe=Z.querySelector("#psub-close"))==null||Fe.addEventListener("click",()=>Z.remove()),(Ie=Z.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{P>0&&(P--,H())}),(He=Z.querySelector("#pout-down"))==null||He.addEventListener("click",()=>{P<z.length-1&&(P++,H())}),(It=Z.querySelector("#pin-up"))==null||It.addEventListener("click",()=>{V>0&&(V--,H())}),(Je=Z.querySelector("#pin-down"))==null||Je.addEventListener("click",()=>{V<B.length-1&&(V++,H())});const Te=(qe,Qe,Re,ht)=>{const Ze=Z.querySelector("#"+qe);if(!Ze)return;let Ue=0;Ze.addEventListener("touchstart",at=>{Ue=at.touches[0].clientY},{passive:!0}),Ze.addEventListener("touchend",at=>{const st=at.changedTouches[0].clientY-Ue;if(Math.abs(st)<30)return;const vt=Qe();st<0&&vt<ht-1?(Re(vt+1),H()):st>0&&vt>0&&(Re(vt-1),H())},{passive:!0})};Te("pin-panel",()=>V,qe=>V=qe,B.length),Te("pout-panel",()=>P,qe=>P=qe,z.length),(Qt=Z.querySelector("#psub-confirm"))==null||Qt.addEventListener("click",async qe=>{if(qe.preventDefault(),qe.stopPropagation(),oe)return;oe=!0;const Qe=z[P],Re=B[V];if(!Qe||!Re)return;const ht=Qe._line,Ze=(I[ht]||[]).findIndex(st=>st.cardId===Qe.cardId);if(Ze===-1){g("Erreur : joueur introuvable","error"),Z.remove();return}const Ue={...Re,_line:ht,position:Qe.position,used:!1,boost:0};I[ht].splice(Ze,1,Ue);const at=[...A,Re.cardId];Z.remove(),W(Qe,Re,async()=>{await U({[p+"Team"]:I,[f+"Team"]:y[f+"Team"],["usedSubIds_"+p]:at})})})}document.body.appendChild(Z),H()}function W(k,L,I){const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const z=(X,V,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${V};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${A[X.job]||"#555"};border:3px solid ${V};position:relative;overflow:hidden;margin:0 auto">
        ${Wt(X)?`<img src="${Wt(X)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(X.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${z(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${z(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let B=!1;const P=()=>{B||(B=!0,T.remove(),setTimeout(()=>I(),50))};T.addEventListener("click",P),setTimeout(P,2200)}function K(){var L;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${y[f+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ci(y[f+"Team"],y[f+"Formation"],null,[],Lt(),qt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(L=k.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>k.remove())}function q(){var I;const k=y.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(I=L.querySelector("#pvp-hist-close"))==null||I.addEventListener("click",()=>L.remove())}async function O(){if(y.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",L=(y.round||0)+1,I=[...y.log||[]];I.push({type:"info",text:`⏭️ ${y[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const A=Oe(y),T=je(k),z=A||!T?"finished":k+"-attack";await U({["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:z,attacker:k,round:L,log:I}),z==="finished"&&await Xe(y)}function we(k){const L=(k.GK||[]).some(A=>!A.used),I=["DEF","MIL","ATT"].some(A=>(k[A]||[]).some(T=>!T.used));return L&&!I}function _e(k){return(k.p1Score||0)!==(k.p2Score||0)?null:we(k.p1Team)&&!ge(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(L=>!L.used)}:we(k.p2Team)&&!ge(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(L=>!L.used)}:null}async function ye(k,L){const{side:I,gk:A}=k;if(!A)return;const T=I+"Score",z=(L[T]||0)+1;A.used=!0;const B=[...L.log||[]];B.push({type:"duel",isGoal:!0,homeScored:I===p,homePlayers:I==="p1"?[jt(A)]:[],aiPlayers:I==="p2"?[jt(A)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[I+"Name"]} marque !`});const P=(L.round||0)+1,X=I==="p1"?"p2":"p1",V={...L,[T]:z},oe=Oe(V);N.add(P);const Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(Z);const H=(ue,ce)=>new Promise(me=>{Z.innerHTML=`<div style="font-size:32px;font-weight:900;color:${ce};letter-spacing:2px;animation:lcFade 1.4s ease both">${ue}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(me,1400)});await H("⚽ DERNIER CORNER","#FFD700"),await H("🧤 LE GARDIEN MONTE !","#4fc3f7"),Z.remove();const le=I===p?z:L[p+"Score"]||0,pe=I===p?L[f+"Score"]||0:z;ot([jt(A)],le,pe,I===p,async()=>{await U({[T]:z,log:B,round:P,pendingAttack:null,phase:oe?"finished":X+"-attack",attacker:X,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}}}),oe&&await Xe({...y,[T]:z})})}async function be(){const k=y[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(z=>(y[f+"Team"][z]||[]).some(B=>!B.used)),I=(y["selected_"+p]||[]).map(z=>{const B=(k[z._role]||[]).find(pe=>pe.cardId===z.cardId)||z,P=["GK","DEF"].includes(z._role),X=k[z._role]||[],V=X.findIndex(pe=>pe.cardId===z.cardId),oe=pt(X.length),Z=V>=0?oe[V]:B._col??1,H=y.stadiumDef||y.homeStadiumDef||null,le=B.stadiumBonus||H&&(H.club_id&&String(B.club_id)===String(H.club_id)||H.country_code&&B.country_code===H.country_code)||!1;return{...B,_line:z._role,_col:Z,stadiumBonus:le,...P?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!I.length)return;const A=Vt(I,y.modifiers[p]||{});ae(p,I.map(z=>z.cardId)),I.forEach(z=>{const B=(k[z._role]||[]).find(P=>P.cardId===z.cardId);B&&(B.used=!0)}),y["selected_"+p]=[],de();const T=[...y.log||[]];if(L){if(I.length===1&&(I[0]._line==="GK"||I[0].job==="GK")&&(y.p1Score||0)===(y.p2Score||0)){await ye({side:p,gk:I[0]},{...y,[p+"Team"]:k,log:T});return}const B=(y[p+"Score"]||0)+1,P=I.map(H=>jt(H));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:P,homeTotal:A.total,aiTotal:0});const X=(y.round||0)+1,V=p==="p1"?"p2":"p1",oe={...y,[p+"Team"]:k,[p+"Score"]:B},Z=Oe(oe);N.add(X),ot(P,B,y[f+"Score"]||0,!0,async()=>{await U({[p+"Team"]:k,[p+"Score"]:B,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:Z?"finished":V+"-attack",attacker:V,round:X,log:T}),Z&&await Xe({...y,[p+"Score"]:B})});return}T.push({type:"pending",text:`⚔️ ${y[p+"Name"]} attaque (${A.total})`}),await U({[p+"Team"]:k,[f+"Team"]:y[f+"Team"],pendingAttack:{...A,players:I,side:p},["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},phase:f+"-defense",log:T})}async function $e(){const k=y[p+"Team"],L=(y["selected_"+p]||[]).map(ce=>{const me=(k[ce._role]||[]).find(Ie=>Ie.cardId===ce.cardId)||ce,xe=k[ce._role]||[],te=xe.findIndex(Ie=>Ie.cardId===ce.cardId),Te=pt(xe.length),Fe=te>=0?Te[te]:me._col??1;return{...me,_line:ce._role,_col:Fe}}),I=Yt(L,y.modifiers[p]||{});ae(p,L.map(ce=>ce.cardId)),L.forEach(ce=>{const me=(k[ce._role]||[]).find(xe=>xe.cardId===ce.cardId);me&&(me.used=!0)}),y["selected_"+p]=[],de();const A=ji(y.pendingAttack.total,I.total,y.modifiers[p]||{}),T=y.pendingAttack.side,z=A==="attack"||(A==null?void 0:A.goal),B=T==="p1"?"p2":"p1",P=(y.round||0)+1,X=(y.pendingAttack.players||[]).map(ce=>jt(ce)),V=[...y.log||[]];V.push({type:"duel",isGoal:z,homeScored:z&&T===p,text:z?`⚽ BUT de ${y[T+"Name"]} ! (${y.pendingAttack.total} vs ${I.total})`:`✋ Attaque stoppée (${y.pendingAttack.total} vs ${I.total})`,homePlayers:X,aiPlayers:L.map(ce=>jt(ce)),homeTotal:y.pendingAttack.total,aiTotal:I.total});const oe=z?(y[T+"Score"]||0)+1:y[T+"Score"]||0,Z={...y,[p+"Team"]:k,[T+"Score"]:oe},H=Oe(Z),le=H?"finished":B+"-attack",pe=!H&&!z?_e(Z):null,ue=async()=>{if(pe){await ye(pe,Z);return}await U({[p+"Team"]:k,[f+"Team"]:y[f+"Team"],[T+"Score"]:oe,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:le,attacker:B,round:P,log:V}),(le==="finished"||H)&&await Xe({...y,[T+"Score"]:oe})};if(z){const ce=T===p,me=ce?oe:y[p+"Score"]||0,xe=ce?y[f+"Score"]||0:oe;N.add(P),ot(X,me,xe,ce,ue)}else await ue()}function Le(k){return["MIL","ATT"].some(L=>(k[L]||[]).some(I=>!I.used))}function ge(k){return["GK","DEF","MIL","ATT"].some(L=>(k[L]||[]).some(I=>!I.used))}function Be(k){return ge(k)&&!Le(k)}function je(k){const L=y[k+"Team"];return!!(Le(L)||Be(L))}function Oe(k){return!ge(k.p1Team)&&!ge(k.p2Team)}function bt(k){const L=k.p1Score||0,I=k.p2Score||0;return L===I?null:L>I?b.home_id:b.away_id}async function Xe(k){try{const L=bt(k),I=L?b.home_id===L?b.away_id:b.home_id:null,A=k.p1Score||0,T=k.p2Score||0;await w.from("matches").update({status:"finished",winner_id:L,home_score:A,away_score:T}).eq("id",i),L&&I&&io(L,I).catch(()=>{}),u&&await w.from("mini_league_matches").update({status:"finished",home_score:A,away_score:T,match_id:i}).eq("id",u);try{const{data:z}=await w.rpc("apply_match_rewards",{p_match_id:i});z!=null&&z.success&&!(z!=null&&z.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(z){console.error("[PvP] apply_match_rewards:",z)}if(typeof c=="function")try{await c({homeScore:A,awayScore:T,winnerId:L,homeId:b.home_id,awayId:b.away_id,matchId:i})}catch(z){console.error("[PvP] onMatchEnd:",z)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Rt(){var T;const k=y[p+"Score"],L=y[f+"Score"],I=k>L,A=k===L;nt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${I?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${I?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${d?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{w.removeChannel(Q)}catch{}We(e),d?m("mini-league",{openLeagueId:d}):m("home")})}de()}async function Li(e,t,i=!1){var s,l;const{state:n,navigate:o,toast:r}=t,a=i&&((l=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:l.rankedData)||null;await pi(e,t,i?"ranked":"random",async({deckId:c,formation:d,starters:u,subsRaw:x,gcCardsEnriched:m,gcDefs:g,stadiumDef:p})=>{nt(e);const f=async h=>{await nr(e,t,c,d,u,x,h||[],g,p,i,a)};if(!(m!=null&&m.length)){await f([]);return}li(e,m,f)})}async function ir(e,t,i){return tr(e,t,i)}async function nr(e,t,i,n,o,r,a=[],s=[],l=null,c=!1,d=null){var ie,Q;const{state:u,navigate:x,toast:m}=t,g=(d==null?void 0:d.mmr)??((ie=u.profile)==null?void 0:ie.mmr)??1e3,p=c?Si(g):null,f=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",h=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let _=!1,b=null,$=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${f};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${h};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const y=async()=>{_=!0,b&&(b.unsubscribe(),b=null),$&&(clearInterval($),$=null);try{await w.rpc("cancel_matchmaking",{p_user_id:u.profile.id})}catch(U){console.error("[Matchmaking] cancel error:",U)}};(Q=document.getElementById("cancel-mm"))==null||Q.addEventListener("click",async()=>{await y(),We(e),x("home")});const j=async(U,v)=>{_||(_=!0,b&&(b.unsubscribe(),b=null),$&&(clearInterval($),$=null),await zt(e,t,U,v,{myGC:a,gcDefs:s,stadiumDef:l,isRanked:c,rankedData:d,onMatchEnd:c?or:null}))},E=u.user.id,{data:F,error:N}=c?await w.rpc("try_matchmake_ranked",{p_user_id:E,p_deck_id:i,p_mmr:g}):await w.rpc("try_matchmake",{p_user_id:E,p_deck_id:i});if(N||!(F!=null&&F.success)){console.error("[Matchmaking] try_matchmake error:",N||F),m("Erreur de matchmaking","error"),We(e),x("home");return}if(F.matched){await j(F.match_id,!1);return}const ne=async()=>{if(_)return;const{data:U}=await w.from("matchmaking_queue").select("status, match_id").eq("user_id",E).maybeSingle();(U==null?void 0:U.status)==="matched"&&U.match_id&&await j(U.match_id,!0)};b=w.channel(`mm_${E}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${E}`},U=>{const v=U.new;v.status==="matched"&&v.match_id&&j(v.match_id,!0)}).subscribe(),$=setInterval(ne,3e3),setTimeout(()=>{_||y()},12e4)}async function or(e,t){const{state:i,toast:n}=t,{winnerId:o,homeId:r,awayId:a,homeScore:s,awayScore:l,matchId:c}=e,d=i.user.id,u=r===d,x=o===d,{data:m}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:g}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?a:r).single();if(m&&g){const p=Mn(m.mmr,m.mmr_rd,m.mmr_v,g.mmr,g.mmr_rd,x?1:0);await w.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:x?w.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:w.sql`mmr_losses + 1`}).eq("id",d),n(x?`+MMR ↑ ${Math.round(p.mmr-m.mmr)}`:`-MMR ↓ ${Math.round(m.mmr-p.mmr)}`,x?"success":"error",4e3)}}const rr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Li,resumePvpMatch:ir},Symbol.toStringTag,{value:"Module"}));async function ar(e,t){const{state:i,navigate:n,toast:o}=t,r=i.params||{},a=r.friendId||null,s=r.friendName||"Ami",l=!!r.isAccepting;await pi(e,t,"friend",async({deckId:c,formation:d,starters:u,subsRaw:x,gcCardsEnriched:m,gcDefs:g,stadiumDef:p})=>{nt(e);const f=async h=>{const _=h||[];l?await dr(e,t,c,_,g,p):await sr(e,t,c,_,g,p,a,s)};if(!(m!=null&&m.length)){await f([]);return}li(e,m,f)})}async function sr(e,t,i,n,o,r,a,s){var _;const{state:l,navigate:c,toast:d}=t,u=l.user.id,{data:x,error:m}=await w.from("friend_match_invites").insert({inviter_id:u,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(m||!x){console.error("[Friend] Erreur création invitation:",m),d("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const f=async()=>{p&&(p.unsubscribe(),p=null)};(_=document.getElementById("cancel-friend"))==null||_.addEventListener("click",async()=>{await f(),await w.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),We(e),c("home")}),p=w.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:b})=>{g||b.status!=="accepted"||!b.match_id||(g=!0,await f(),await zt(e,t,b.match_id,!0,{myGC:n,gcDefs:o,stadiumDef:r}))}).subscribe();const h=setInterval(async()=>{if(g)return;const{data:b}=await w.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(b==null?void 0:b.status)==="accepted"&&b.match_id&&(g=!0,clearInterval(h),await f(),await zt(e,t,b.match_id,!0,{myGC:n,gcDefs:o,stadiumDef:r}))},3e3);setTimeout(async()=>{g||(clearInterval(h),await f(),d("Invitation expirée","info"),c("home"))},12e4)}async function dr(e,t,i,n,o,r){const{state:a,navigate:s,toast:l}=t,c=a.user.id,{data:d}=await w.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){l("Aucune invitation en attente","error"),s("home");return}const{data:u,error:x}=await w.rpc("accept_friend_invite",{p_invite_id:d.id,p_invitee_deck_id:i});if(x||!(u!=null&&u.success)){console.error("[Friend] Erreur accept_friend_invite:",x||u),l((u==null?void 0:u.error)||"Impossible de rejoindre le match","error"),s("home");return}await zt(e,t,u.match_id,!1,{myGC:n,gcDefs:o,stadiumDef:r})}const Ln="#1A6B3C",gt="#D4A017",Nt="rgba(255,255,255,0.045)",kt="rgba(255,255,255,0.09)",$t="rgba(255,255,255,0.08)",Ce="#f3f5f2",it="rgba(243,245,242,0.62)",Ke="rgba(243,245,242,0.4)";async function lr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await rt(e,t,i);return}await yt(e,t)}async function yt(e,t,i="waiting"){var h,_;const{state:n}=t,o=n.profile.id,{data:r}=await w.from("mini_league_members").select("league_id").eq("user_id",o),a=(r||[]).map(b=>b.league_id),{data:s,error:l}=await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=l?(await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(a.length?await w.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],x=u.filter(b=>b.status==="waiting"&&!b.is_archived),m=u.filter(b=>b.status==="active"&&!b.is_archived),g=u.filter(b=>b.is_archived||b.status==="finished"),p=c.filter(b=>!a.includes(b.id)),f=[{key:"waiting",label:"🟡 En attente",count:x.length+p.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:g.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${$t};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Ce}">🏆 Mini League</div>
        <div style="font-size:12px;color:${it}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${kt};border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Ce}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${$t}">
      ${f.map(b=>`<button class="ml-tab" data-tab="${b.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===b.key?Ln:"transparent"};background:none;font-size:12px;font-weight:${i===b.key?"900":"600"};color:${i===b.key?"#4ade80":Ke};cursor:pointer">${b.label}${b.count?` (${b.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?cr(x,p,o):i==="active"?pr(m,o):ur(g,o)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>fr(e,t)),(_=document.getElementById("ml-refresh-list"))==null||_.addEventListener("click",()=>yt(e,t,i)),e.querySelectorAll(".ml-tab").forEach(b=>b.addEventListener("click",()=>yt(e,t,b.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(b=>b.addEventListener("click",()=>rt(e,t,b.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(b=>b.addEventListener("click",$=>{$.stopPropagation(),Tn(e,t,b.dataset.join,b.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",$=>{$.stopPropagation(),Ti(e,t,b.dataset.delete,b.dataset.name,i)}))}function di(e,t,i=!1){var a,s;const n=e.creator_id===t,o=e.pot||0,r=((s=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:${Nt};border:1px solid ${kt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Ce}">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${it};margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${r}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${gt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function cr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ke};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(o=>di(o,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ke};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(o=>di(o,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ke}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function pr(e,t){return e.length?e.map(i=>di(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ke}">Aucune mini league en cours.</div>`}function ur(e,t){return e.length?e.map(i=>di(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ke}">Aucune mini league archivée.</div>`}function fr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,f,h;const{toast:n}=t,o=document.getElementById("ml-name").value.trim(),r=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",l=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((h=(f=document.getElementById("ml-pwd"))==null?void 0:f.value)==null?void 0:h.trim())||null;if(!o){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:d,error:u}=await w.from("mini_leagues").insert({name:o,creator_id:t.state.profile.id,type:s,password:c,mode:l,max_players:r,entry_fee:a}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:x}=await w.from("users").select("credits").eq("id",t.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await w.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await w.from("users").update({credits:x.credits-a}).eq("id",t.state.profile.id),await w.from("mini_leagues").update({pot:a}).eq("id",d.id),await w.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=x.credits-a);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),rt(e,t,d.id)})}function gr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=o=>{t.remove(),e(o)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",o=>{o.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",o=>{o.target===t&&n(null)})})}async function Tn(e,t,i,n){const{toast:o,state:r}=t,a=r.profile.id,{data:s}=await w.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){o("Mini League introuvable","error");return}if(s.status!=="waiting"){o("Cette Mini League a déjà démarré","warning");return}const{count:l}=await w.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(l>=s.max_players){o("La Mini League est complète","warning");return}if(n==="private"){const p=await gr();if(p===null)return;if(s.password!==p){o("Mot de passe incorrect","error");return}}const c=s.entry_fee||100,{data:d}=await w.from("users").select("credits").eq("id",a).single();if(((d==null?void 0:d.credits)||0)<c){o(`Crédits insuffisants — il te faut ${c.toLocaleString("fr")} cr. (solde : ${((d==null?void 0:d.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await w.from("mini_league_members").insert({league_id:i,user_id:a});if(u){o("Erreur inscription : "+u.message,"error");return}const{error:x}=await w.from("users").update({credits:d.credits-c}).eq("id",a),{error:m}=await w.from("mini_leagues").update({pot:(s.pot||0)+c}).eq("id",i);(x||m)&&console.error("Erreur post-inscription:",x,m),r.profile&&(r.profile.credits=d.credits-c);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o(`✅ Inscrit ! −${c.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+c).toLocaleString("fr")} cr.`,"success"),rt(e,t,i)}async function mr(e,t,i,n){const{toast:o,state:r}=t,a=r.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await w.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){o("Impossible — la league a déjà démarré","error");return}const{data:l}=await w.from("users").select("credits").eq("id",a).single();await w.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await w.from("users").update({credits:((l==null?void 0:l.credits)||0)+n}).eq("id",a),await w.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),r.profile&&(r.profile.credits=((l==null?void 0:l.credits)||0)+n);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),yt(e,t,"waiting")}async function Ti(e,t,i,n,o){const{toast:r}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await w.from("mini_league_matches").delete().eq("league_id",i),await w.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await w.from("mini_leagues").delete().eq("id",i);if(a){r("Erreur suppression ("+a.message+")","error");return}r("Mini League supprimée avec succès","success"),yt(e,t,o)}async function xr(e,t,i){await w.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),yt(e,t,"archived")}async function rt(e,t,i){var $,y,j,E,F,N,ne,ie,Q,U;const{state:n,toast:o}=t,r=n.profile.id,[{data:a},{data:s},{data:l}]=await Promise.all([w.from("mini_leagues").select("*").eq("id",i).single(),w.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),w.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){o("Introuvable","error"),await yt(e,t);return}const c=(s||[]).some(v=>v.user_id===r),d=a.creator_id===r,u=(s||[]).map(v=>v.user).filter(Boolean),x=In(u,l||[]),m=(l||[]).filter(v=>v.matchday===a.current_day),g=a.pot||0,p=a.entry_fee||100,f=m.length>0&&m.every(v=>v.status==="finished"||v.status==="bye"),h=a.current_day>=a.total_days,_=(s||[]).find(v=>v.user_id===r);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${$t};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Ce}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${kt};border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Ce};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Ce}">${a.name}</div>
        <div style="font-size:11px;color:${it}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${gt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Nt};border:1px solid ${kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Ce}">👥 Joueurs (${u.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${it};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(v=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${$t}">
            <div style="width:36px;height:36px;border-radius:50%;background:${v.club_color2||Ln};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${v.club_color1||"#fff"}">${(v.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Ce}">${v.club_name||v.pseudo}</div><div style="font-size:11px;color:${Ke}">@${v.pseudo}</div></div>
            ${v.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${d&&u.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${u.length})</button>`:""}
        ${d?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!d?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Nt};border:1px solid ${kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ce}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${m.map(v=>en(v,u,r,c)).join("")}
        ${d&&f&&!h?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${d&&f&&h?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${Nt};border:1px solid ${kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ce}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ke};text-transform:uppercase;border-bottom:2px solid ${$t}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${gt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map((v,S)=>{const G=g>0&&a.status==="finished"?S===0?Math.floor(g*.7):S===1?Math.floor(g*.2):S===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${$t};${v.userId===r?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${S===0?gt:S<3?"#4ade80":it}">${["🥇","🥈","🥉"][S]||S+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Ce}">${v.clubName}</div><div style="font-size:10px;color:${Ke}">@${v.pseudo}</div></td>
              <td style="text-align:center;color:${it}">${v.played}</td><td style="text-align:center;color:${it}">${v.won}-${v.drawn}-${v.lost}</td>
              <td style="text-align:center;color:${v.goalDiff>=0?"#4ade80":"#ff6b6b"}">${v.goalDiff>=0?"+":""}${v.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Ce}">${v.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${gt}">${G?G.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Nt};border:1px solid ${kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Ce}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(v,S)=>S+1).reverse().map(v=>{const S=(l||[]).filter(G=>G.matchday===v);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ke};margin-bottom:6px">Journée ${v}</div>${S.map(G=>en(G,u,r,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${it}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const b=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>yt(e,t,b)),(y=document.getElementById("ml-refresh"))==null||y.addEventListener("click",async v=>{const S=v.currentTarget;S.style.opacity="0.5",await rt(e,t,i)}),(j=document.getElementById("ml-start-btn"))==null||j.addEventListener("click",()=>yr(e,t,a,u)),(E=document.getElementById("ml-next-day"))==null||E.addEventListener("click",()=>br(e,t,i)),(F=document.getElementById("ml-finish-btn"))==null||F.addEventListener("click",()=>zn(e,t,i,g,x,u)),(N=document.getElementById("ml-join-now"))==null||N.addEventListener("click",()=>Tn(e,t,i,a.type)),(ne=document.getElementById("ml-leave-btn"))==null||ne.addEventListener("click",()=>mr(e,t,i,p)),(ie=document.getElementById("ml-delete-btn"))==null||ie.addEventListener("click",()=>Ti(e,t,i,a.name,"waiting")),(Q=document.getElementById("ml-delete-now"))==null||Q.addEventListener("click",()=>Ti(e,t,i,a.name,b)),(U=document.getElementById("ml-archive-btn"))==null||U.addEventListener("click",()=>xr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(v=>{v.addEventListener("click",()=>{const S=m.find(G=>G.id===v.dataset.playMatch);S&&t.navigate("match-mini-league",{mlMatchId:S.id,leagueId:i})})}),a.status==="finished"&&_){const v=x.findIndex(S=>S.userId===r);v>=0&&v<3&&_.prize_amount>0&&setTimeout(()=>hr(e,t,a,_,v),400)}}function en(e,t,i,n,o=!1){const r=u=>t.find(x=>x.id===u);if(e.is_bye){const u=r(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${it};text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const a=r(e.home_id),s=r(e.away_id),l=e.home_id===i||e.away_id===i,c=l&&e.status==="pending"&&n&&!o,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":$t}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Ce};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ke}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Ce};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function yr(e,t,i,n){const{toast:o,state:r}=t,a=vr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,d)=>c.forEach(u=>s.push({league_id:i.id,matchday:d+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:l}=await w.from("mini_league_matches").insert(s);if(l){o("Erreur calendrier : "+l.message,"error");return}await w.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),o(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),rt(e,t,i.id)}async function br(e,t,i){const{data:n}=await w.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),o=(n.current_day||0)+1;if(o>(n.total_days||0)){await zn(e,t,i,n.pot||0,null,null);return}await w.from("mini_leagues").update({current_day:o}).eq("id",i),t.toast(`Journée ${o} commencée !`,"success"),rt(e,t,i)}async function zn(e,t,i,n,o,r){const{toast:a,state:s}=t;let l=o,c=r;if(!l){const{data:u}=await w.from("mini_league_matches").select("*").eq("league_id",i),{data:x}=await w.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);c=(x||[]).map(m=>m.user).filter(Boolean),l=In(c,u||[])}const d=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(l.slice(0,3).map((u,x)=>d[x]?w.from("mini_league_members").update({prize_amount:d[x],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await w.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),rt(e,t,i)}async function hr(e,t,i,n,o){var x,m;const{state:r,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][o],c=n.prize_amount||s[o]||0,d=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${o===0?"Champion !":o===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${gt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${gt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${o===0?"70%":o===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${gt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(x=u.querySelector("#prize-close"))==null||x.addEventListener("click",()=>u.remove()),u.addEventListener("click",g=>{g.target===u&&u.remove()}),(m=u.querySelector("#claim-prize-btn"))==null||m.addEventListener("click",async()=>{const{data:g}=await w.from("users").select("credits").eq("id",r.profile.id).single();await w.from("users").update({credits:((g==null?void 0:g.credits)||0)+c}).eq("id",r.profile.id),await w.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",r.profile.id),r.profile&&(r.profile.credits=((g==null?void 0:g.credits)||0)+c);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${r.profile.credits.toLocaleString("fr")}`),a(`💰 +${c.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),rt(e,t,i.id)})}function vr(e,t){const n=e.length%2===0?[...e]:[...e,null],o=n.length;let r=n.slice(1);const a=[];for(let s=0;s<o-1;s++){const l=[],c=[n[0],...r];for(let d=0;d<o/2;d++){const u=c[d],x=c[o-1-d];u===null?l.push({bye:x}):x===null?l.push({bye:u}):l.push({home:u,away:x})}a.push(l),r=[r[r.length-1],...r.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function In(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const o=i[n.home_id],r=i[n.away_id];!o||!r||(o.played++,r.played++,o.goalsFor+=n.home_score,o.goalsAgainst+=n.away_score,r.goalsFor+=n.away_score,r.goalsAgainst+=n.home_score,n.home_score>n.away_score?(o.won++,o.points+=3,r.lost++):n.home_score<n.away_score?(r.won++,r.points+=3,o.lost++):(o.drawn++,o.points++,r.drawn++,r.points++),o.goalDiff=o.goalsFor-o.goalsAgainst,r.goalDiff=r.goalsFor-r.goalsAgainst)}),Object.values(i).sort((n,o)=>o.points-n.points||o.goalDiff-n.goalDiff||o.goalsFor-n.goalsFor)}async function tn(e,t){const{state:i,navigate:n,toast:o}=t,r=i.params||{},a=r.leagueId||null,s=r.mlMatchId||null,l=i.user.id;if(!s||!a){o("Match introuvable","error"),n("mini-league");return}const{data:c,error:d}=await w.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(d||!c){o("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==l&&c.away_id!==l){o("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const u=c.home_id===l;if(c.match_id){await zt(e,t,c.match_id,u,{mlLeagueId:a,mlMatchId:s});return}await pi(e,t,"mini_league",async({deckId:x,gcCardsEnriched:m,gcDefs:g,stadiumDef:p})=>{nt(e);const f=async h=>{const{data:_,error:b}=await w.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:l,p_deck_id:x});if(b||!(_!=null&&_.success)){console.error("[MiniLeague] start_mini_league_match error:",b||_),o((_==null?void 0:_.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(_.matched){await zt(e,t,_.match_id,u,{mlLeagueId:a,mlMatchId:s,myGC:h||[],gcDefs:g,stadiumDef:p});return}await wr(e,t,{mlMatchId:s,leagueId:a,amIHome:u,chosenGC:h,gcDefs:g,stadiumDef:p})};if(!(m!=null&&m.length)){await f([]);return}li(e,m,f)})}function wr(e,t,{mlMatchId:i,leagueId:n,amIHome:o,chosenGC:r,gcDefs:a,stadiumDef:s}){return new Promise(l=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let d=!1;const u=async f=>{if(!d){if(d=!0,clearInterval(g),m)try{m.unsubscribe()}catch{}f&&await zt(e,t,f,o,{mlLeagueId:n,mlMatchId:i,myGC:r||[],gcDefs:a,stadiumDef:s}),l()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(d=!0,clearInterval(g),m)try{m.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),l()});const x=async()=>{if(d)return;const{data:f}=await w.from("mini_league_matches").select("match_id").eq("id",i).single();f!=null&&f.match_id&&u(f.match_id)},m=w.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},f=>{var h;(h=f.new)!=null&&h.match_id&&u(f.new.match_id)}).subscribe(),g=setInterval(x,3e3);x()})}const _r="/",kr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function $r(e,t,i){let n=0;const o=document.createElement("div");o.id="tutorial-overlay",o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const r=()=>{var d,u,x;const s=t[n],l=n===t.length-1,c=Math.round((n+1)/t.length*100);o.innerHTML=`
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
    `,o.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.marginTop="6px",m.style.marginBottom="6px"}),o.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),o.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"}),(d=o.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,r()}),(u=o.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{l?a():(n++,r())}),(x=o.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{o.remove(),e!=null&&e.id&&await w.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(o),r()}async function Er(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:o,error:r}=await w.rpc("get_tutorial_steps");if(!r&&(o==null?void 0:o.length)>0)n=o,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:l}=await w.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${r==null?void 0:r.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):kr;$r(e,a,()=>t("boosters"))}const ii={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Ct(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function Lr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Di(e,t)}async function Di(e,t){const{state:i,toast:n}=t,{data:o}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:r}=await w.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(o||[]).filter(p=>p.seller_id!==i.profile.id),s=r||[];e.innerHTML=`
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
  </div>`;let l="buy";const c=()=>{var p,f,h,_,b,$,y;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((f=document.getElementById("flt-club"))==null?void 0:f.value)||"").toLowerCase().trim(),country:(((h=document.getElementById("flt-country"))==null?void 0:h.value)||"").toLowerCase().trim(),job:((_=document.getElementById("flt-job"))==null?void 0:_.value)||"",rarity:((b=document.getElementById("flt-rarity"))==null?void 0:b.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((y=document.getElementById("flt-note2"))==null?void 0:y.value)||0}};function d(p){const f=c();return p.filter(h=>{var N,ne,ie;const _=(N=h.card)==null?void 0:N.player;if(!_)return!1;const b=`${_.firstname} ${_.surname_real}`.toLowerCase(),$=(((ne=_.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),y=(_.country_code||"").toLowerCase(),j=((ie=h.card)==null?void 0:ie.evolution_bonus)||0,E=Ct(_,_.job,j),F=_.job2?Ct(_,_.job2,j):0;return!(f.name&&!b.includes(f.name)||f.club&&!$.includes(f.club)||f.country&&!y.includes(f.country)||f.job&&_.job!==f.job||f.rarity&&_.rarity!==f.rarity||f.note1&&E<f.note1||f.note2&&F<f.note2)})}function u(p){var F,N,ne,ie;const f=(F=p.card)==null?void 0:F.player;if(!f)return"";const h=((N=p.card)==null?void 0:N.evolution_bonus)||0,_=Ct(f,f.job,h),b=f.job2?Ct(f,f.job2,h):0,$=(i.profile.credits||0)>=p.price,y=f.country_code?`https://flagsapi.com/${f.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,j=ii[f.job]||"#bbb",E=f.job2?ii[f.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ne=f.clubs)!=null&&ne.logo_url?`<img src="${f.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${_}</span>
        </div>
        ${b?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${b}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${f.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ie=p.seller)==null?void 0:ie.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function x(p){var F,N,ne,ie;const f=(F=p.card)==null?void 0:F.player;if(!f)return"";const h=((N=p.card)==null?void 0:N.evolution_bonus)||0,_=Ct(f,f.job,h),b=f.job2?Ct(f,f.job2,h):0,$=p.status==="sold",y=f.country_code?`https://flagsapi.com/${f.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,j=ii[f.job]||"#bbb",E=f.job2?ii[f.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ne=f.clubs)!=null&&ne.logo_url?`<img src="${f.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${_}</span>
        </div>
        ${b?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${b}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${f.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((ie=p.buyer)==null?void 0:ie.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function m(){const p=document.getElementById("mkt-content"),f=document.getElementById("mkt-filters");if(p){if(f.style.display=l==="buy"?"flex":"none",l==="buy"){const h=d(a);p.innerHTML=h.length?h.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const h=s.filter(b=>b.status==="active").sort((b,$)=>new Date($.listed_at)-new Date(b.listed_at)),_=s.filter(b=>b.status==="sold").sort((b,$)=>new Date($.sold_at||$.listed_at)-new Date(b.sold_at||b.listed_at));p.innerHTML=(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${h.length})</div>`+h.map(x).join(""):"")+(_.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${_.length})</div>`+_.map(x).join(""):"")+(!h.length&&!_.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(h=>h.addEventListener("click",()=>Tr(h.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(h=>h.addEventListener("click",()=>Ir(h.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(f=>{const h=f===p;f.style.background=h?"var(--green)":"#fff",f.style.color=h?"#fff":"var(--gray-600)",f.style.borderColor=h?"var(--green)":"var(--gray-200)"}),m()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var f;(f=document.getElementById(p))==null||f.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(m,250)})}),m()}async function Tr(e,t,i,n){const{state:o,toast:r,refreshProfile:a}=n,s=t.find(d=>d.id===e);if(!s)return;const l=s.price;if((o.profile.credits||0)<l){r("Crédits insuffisants","error");return}zr(s,async()=>{const{error:d}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:o.profile.id});if(d){r("Erreur achat : "+d.message,"error");return}await a();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r("✅ Carte achetée !","success"),await Di(i,n)})}function zr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",o.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(o);const r=s=>{o.remove(),s&&t()};o.querySelector("#buy-cancel").addEventListener("click",()=>r(!1)),o.querySelector("#buy-ok").addEventListener("click",()=>r(!0)),o.addEventListener("click",s=>{s.target===o&&r(!1)})}async function Ir(e,t,i){const{toast:n}=i,{data:o}=await w.from("market_listings").select("card_id").eq("id",e).single();if(await w.from("market_listings").update({status:"cancelled"}).eq("id",e),o!=null&&o.card_id){const{count:r}=await w.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",o.card_id).eq("status","active");r||await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",o.card_id)}n("Annonce retirée","success"),Di(t,i)}async function Sr(e,t){var d,u,x,m;const{state:i,navigate:n}=t,o=((u=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:a}]=await Promise.all([w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),w.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=o;function l(){var p,f;const g=document.getElementById("rankings-list");if(g){if(s==="global"){const h=r||[];g.innerHTML=h.length>0?h.map((_,b)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${b<3?["#D4A017","#a0a0a0","#cd7f32"][b]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${b<3?"16":"13"}px">${b<3?["🥇","🥈","🥉"][b]:b+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${_.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${_.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${_.trophies_top1} 🥈${_.trophies_top2} 🥉${_.trophies_top3}</div>
            <div style="color:var(--gray-600)">${_.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const h=a||[];g.innerHTML=h.length>0?h.map((_,b)=>{const $=Si(_.mmr??1e3),y=(_.ranked_wins||0)+(_.ranked_losses||0)+(_.ranked_draws||0),j=y>0?Math.round((_.ranked_wins||0)/y*100):0,E=_.id===i.profile.id,F=(_.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${E?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${b<3?["#D4A017","#a0a0a0","#cd7f32"][b]:"rgba(255,255,255,0.08)"};color:${b<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${b<3?"16":"13"}px">${b<3?["🥇","🥈","🥉"][b]:b+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${$.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${_.club_name} · ${$.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${F?"❓":$.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${$.color}">${F?"Placement":$.label}</div>
              ${F?"":`<div style="font-size:10px;color:var(--gray-600)">${j}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=c(s==="global")),(f=document.getElementById("tab-ranked"))!=null&&f.style&&(document.getElementById("tab-ranked").style.cssText=c(s==="ranked"))}}const c=g=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${g?"900":"400"};background:${g?"var(--green)":"rgba(255,255,255,0.06)"};color:${g?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,l(),(x=document.getElementById("tab-global"))==null||x.addEventListener("click",()=>{s="global",l()}),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{s="ranked",l()})}async function Ar(e,t){var j,E,F,N;const{state:i,navigate:n,toast:o}=t,r=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),w.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",r.id).single()]);if(!s){o("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(j=document.getElementById("ranked-back"))==null||j.addEventListener("click",()=>n("home"));return}const l=s.mmr??1e3,c=s.mmr_deviation??350,d=s.mmr_volatility??.06,u=s.placement_matches??0,x=u<10,m=Math.max(0,10-u),g=Si(l),p=jn(l),f=gi.findIndex(ne=>ne.id===g.id),h=gi[f+1]||null,_={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},b=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=b>0?Math.round((s.ranked_wins||0)/b*100):0,y=gi.map(ne=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===ne.id?1:.35};
      transform:${g.id===ne.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===ne.id?"28px":"20px"}">${ne.emoji}</div>
      <div style="font-size:9px;color:${ne.color};font-weight:${g.id===ne.id?"900":"400"};letter-spacing:0.5px">${ne.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${_[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${h?`<span>${h.emoji} ${h.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${h?h.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${y}
    </div>

    <!-- Placement / Stats -->
    ${x?`
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
    ${a?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${a.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(a.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
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
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(F=document.getElementById("ranked-leaderboard-btn"))==null||F.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:l,rd:c,sigma:d,isPlacement:x}})})}async function Mr(e,{state:t,navigate:i,toast:n}){const o=t.profile;if(!o)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:r}=await w.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${o.id},away_id.eq.${o.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(r||[]).filter(d=>d.status==="finished"),l=(r||[]).filter(d=>d.status==="in_progress");function c(d){const u=d.home_id===o.id;u?d.home_score:d.away_score,u?d.away_score:d.home_score;const x=d.winner_id===o.id,m=d.home_score===d.away_score&&d.status==="finished",g=d.status!=="finished"?"…":m?"N":x?"V":"D",p=d.status!=="finished"||m?"#888":x?"#1A6B3C":"#c0392b";let f=a[d.mode]||d.mode;d.away_id===null&&!f.startsWith("IA")&&(f="IA");const _=d.home_id===o.id?d.away:d.home;let b;d.away_id===null?b=f:_?b=`${_.club_name||_.pseudo} (${_.pseudo})`:b="Adversaire";let $="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(d.created_at),j=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${b}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${f} · ${j}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(r||[]).length} match(s)</p>
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

      ${(r||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Cn(qn);const ve={user:null,profile:null,page:"home",params:{}};function Bt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function jr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function zi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ot(){if(!ve.user)return;const{data:e}=await w.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}function Ht(e,t={}){ve.page=e,ve.params=t,Sn()}async function Sn(){var n,o,r,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:Ht,toast:Bt,openModal:jr,closeModal:zi,refreshProfile:Ot};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Hi(e,i);break;case"collection":await po(e,i);break;case"decks":await vi(e,i);break;case"boosters":await $o(e,i);break;case"ranked":await Ar(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await Li(e,i,!1):s==="ranked"?await Li(e,i,!0):s==="friend"?await ar(e,i,(n=ve.params)==null?void 0:n.friendId,(o=ve.params)==null?void 0:o.friendName):s==="mini_league"||s==="mini-league"?await tn(e,i,(r=ve.params)==null?void 0:r.mlMatchId,(a=ve.params)==null?void 0:a.leagueId):await Po(e,i);break}case"market":await Lr(e,i);break;case"rankings":await Sr(e,i);break;case"matches":await Mr(e,i);break;case"friends":await On(e,i);break;case"mini-league":await lr(e,i);break;case"match-mini-league":{const s=ve.params||{};await tn(e,i,s.mlMatchId,s.leagueId);break}default:await Hi(e,i)}}function Cr(){var n;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),Ht(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ht("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ht("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Br())}async function Br(){const{data:e}=await w.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const o=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${o}</div>
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function Dr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&zi()}),document.getElementById("modal-close").addEventListener("click",zi);const{data:{session:e}}=await w.auth.getSession();if(!e){nn(),qr(document.getElementById("app"),{onPlay:()=>Ri(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Bt})});return}ve.user=e.user,await Ot(),nn();try{const{data:i}=await w.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(o=>{n[o.formation]=o.links}),Bn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){Fn(document.getElementById("app"),{state:ve,navigate:async()=>{await Ot(),hi()},toast:Bt,refreshProfile:Ot});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){Mo(document.getElementById("app"),{state:ve,navigate:()=>hi(),toast:Bt,refreshProfile:Ot});return}hi(),setTimeout(()=>Er(ve.profile,Ht,Bt),800),w.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Ri(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Bt}))})}function Fr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ui(){const e=document.getElementById("app");e&&(e.style.height=Fr()+"px")}window.addEventListener("resize",ui);window.addEventListener("orientationchange",()=>setTimeout(ui,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ui);function hi(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&w.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ui(),Cr(),Sn()}function nn(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function An(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}Dr().catch(e=>{console.error("Échec du démarrage:",e),An()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&An("Le serveur met trop de temps à répondre.")},12e3);
