const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Bb-Ce4un.js","assets/formation-links-CMI0Kx3r.css"])))=>i.map(i=>d[i]);
import{s as w,l as Ht,m as Ci,F as Bi,r as Ae,j as ei,h as qi,n as Hn,o as Un,T as yi,k as Kn,p as Vn,b as Yn}from"./formation-links-Bb-Ce4un.js";const Wn="/";function Ji(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,l,c,d,x;const o=n==="login";e.innerHTML=`
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
        <img src="${Wn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o?((l=document.getElementById("login-password"))==null||l.addEventListener("keydown",y=>{var g;y.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const y=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,m=document.getElementById("login-error");if(m.textContent="",!y||!g){m.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await w.auth.signInWithPassword({email:y,password:g});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){m.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",y=>{var g;y.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{const y=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,m=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!y||!g||!m){p.textContent="Remplissez tous les champs.";return}if(g.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==m){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:b}=await w.auth.signUp({email:y,password:g});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const v=document.getElementById("login-email");v&&(v.value=y)},50)}))};r()}function Xn(e,{state:t,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function s(){var m;const c=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),x=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",y=x.trim().split(" ").filter(Boolean),g=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():x.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),d&&(d.textContent=g,d.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function l(c){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",c.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:x}=await w.from("users").select("id").eq("pseudo",c).maybeSingle();if(x){d.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",c.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:x}=await w.from("users").select("id").eq("club_name",c).maybeSingle();if(x){d.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),x=document.getElementById("step3-error"),y=document.getElementById("step3-finish");x.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:g}=await w.from("users").insert({id:t.user.id,pseudo:c,club_name:d,club_color1:o,club_color2:a,credits:1e4});if(g)throw g;await Jn(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){x.textContent=g.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function Jn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await w.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Qn="modulepreload",Zn=function(e){return"/"+e},Qi={},gn=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(l=>{if(l=Zn(l),l in Qi)return;Qi[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const x=document.createElement("link");if(x.rel=c?"stylesheet":Qn,c||(x.as="script"),x.crossOrigin="",x.href=l,s&&x.setAttribute("nonce",s),document.head.appendChild(x),c)return new Promise((y,g)=>{x.addEventListener("load",y),x.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Yt="#1A6B3C",Wt="#cc2222",eo="#D4A017",Zi="#888";async function to(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await mn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>no(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>xn(i,n,null,t))}async function mn(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await w.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await w.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),l=document.getElementById("pending-badge");l&&(s>0?(l.style.display="flex",l.textContent=s):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${Wt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const d=(o||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let x={};if(d.length){const{data:g}=await w.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(g||[]).forEach(m=>{x[m.id]=m})}const y=(o||[]).map(g=>({friendshipId:g.id,friend:x[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!y.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:g,friend:m})=>io(m,g)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>oo(e,g.dataset.stats,g.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const m=g.dataset.friendId,p=g.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await w.from("friend_match_invites").select("id").eq("inviter_id",m).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),v=!!b;console.log("[Friends] clic match",{fid:m,fname:p,isAccepting:v}),n("match",{matchMode:"friend",friendId:m,friendName:p,isAccepting:v})})})}function io(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Yt,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,l=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${eo};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function no(e,t){const i=Di();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Wt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Fi()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await w.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await w.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(l){const d=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=d;return}const{error:c}=await w.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){r.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function xn(e,t,i=null,n={}){const r=e.user.id,{data:o}=await w.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(y=>y.requester_id);let s={};if(a.length){const{data:y}=await w.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(g=>{s[g.id]=g})}const l=(o||[]).map(y=>({...y,requester:s[y.requester_id]||{pseudo:"?"}})),c=Di(),d=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(y=>{var g,m,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=y.requester)==null?void 0:g.club_name)||((m=y.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=y.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Yt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Wt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Fi()}`,document.body.appendChild(c);const x=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",x),c.addEventListener("click",y=>{y.target===c&&x()}),c.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:g}=await w.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}y.closest("div[style]").remove(),t("✅ Ami accepté !","success"),mn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await w.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function oo(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await w.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),l=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},d=a?c.wins_p1||0:c.wins_p2||0,x=a?c.wins_p2||0:c.wins_p1||0,y=c.draws||0,g=a?c.goals_p1||0:c.goals_p2||0,m=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,v=($,f,M,k=Yt,P=Wt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${k}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${P}">${M}</div>
    </div>`,h=Di();h.innerHTML=`
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
        ${v("Victoires",d,x)}
        ${v("Nuls",y,y,Zi,Zi)}
        ${v("Défaites",x,d)}
        ${v("Buts marqués",g,m)}
        ${v("Buts encaissés",m,g,Wt,Yt)}
        ${v("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Fi()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",$=>{$.target===h&&h.remove()})}function Di(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Fi(){return`
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
        background:${Yt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const ro="2026.07.19-2341";async function en(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${ro}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var x,y,g,m,p;const s=((x=window.visualViewport)==null?void 0:x.height)||window.innerHeight,l=((y=document.querySelector(".top-nav"))==null?void 0:y.offsetHeight)||56,c=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-l-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((m=e.querySelector(".home-hero"))==null?void 0:m.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const v=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((H,ae)=>{var re;return H+(((re=document.getElementById(ae))==null?void 0:re.offsetHeight)||0)},0),$=12*5,f=s-l-c-u-v-h-$-32,M=Math.max(80,Math.round(f*.28)),k=Math.max(160,Math.round(f*.72)),P=Math.floor((k-10)/2);b&&(b.style.minHeight=b.style.maxHeight=M+"px"),e.querySelectorAll(".play-tile").forEach(H=>{H.style.minHeight=H.style.height=P+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(H=>{H.style.height=Math.round(P*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const l=s.dataset.action;if(l==="match-ai"){po(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()}),bn(t,n),co(t,n,i),yn(t,n,i),ao(t,n))}async function ao(e,t){const i=e.profile.id,{data:n}=await w.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
    <div class="modal-header"><h2 style="color:#1A6B3C">🏆 Gains à récupérer</h2></div>
    <div class="modal-body" style="padding:18px 20px">
      <p style="font-size:14px;color:#555;margin:0 0 14px">Tu as terminé sur le podium de ${n.length>1?"plusieurs mini leagues":"une mini league"} !</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        ${n.map(a=>{var s;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f7f7f7;border-radius:10px">
          <span style="font-size:13px;font-weight:700;color:#1a1a1a">${((s=a.mini_leagues)==null?void 0:s.name)||"Mini League"}</span>
          <span style="font-size:13px;font-weight:900;color:#D4A017">+${(a.prize_amount||0).toLocaleString("fr")} cr.</span>
        </div>`}).join("")}
      </div>
      <button id="claim-all-btn" class="btn btn-primary" style="width:100%;margin-bottom:8px">💰 Tout récupérer (+${r.toLocaleString("fr")} cr.)</button>
      <button id="claim-later-btn" class="btn btn-ghost" style="width:100%">Plus tard</button>
    </div>
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let l=0;for(const c of n){const{data:d}=await w.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});d!=null&&d.success&&!d.already_claimed&&(l+=d.prize||0)}if(l>0){e.profile.credits=(e.profile.credits||0)+l;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${l.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function yn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=e.profile.id,{data:o}=await w.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(l=>l.home_id===r?l.away_id:l.home_id).filter(Boolean);let s={};if(a.length){const{data:l}=await w.from("users").select("id, pseudo, club_name").in("id",a);(l||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(l=>{const c=l.home_id===r?l.away_id:l.home_id,d=s[c]||"Adversaire",x=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${x?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${x?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:d}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await gn(async()=>{const{resumePvpMatch:x}=await Promise.resolve().then(()=>hr);return{resumePvpMatch:x}},void 0);d(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{lo(async()=>{await so(l.dataset.abandon,l.dataset.opp,r),t("Match abandonné (défaite 3-0)","info"),yn(e,t,i)})})})}async function so(e,t,i){const{data:n}=await w.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await w.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await w.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",e)}function lo(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function co(e,t,i){var s,l,c,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await w.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((l=r.inviter)==null?void 0:l.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await w.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",t("Invitation refusée","info")})}async function bn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await w.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(l=>{var c;return((c=l.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>xn(e,t,()=>bn(e,t)))}function po(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
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
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-1px)",r.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),r.addEventListener("mouseleave",()=>{r.style.transform="",r.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{n(),e("match",{matchMode:r.dataset.mode})})})}const hn="mw_sound_muted";function ki(){return localStorage.getItem(hn)==="1"}function uo(e){localStorage.setItem(hn,e?"1":"0")}function fo(e,t=1){if(ki())return null;try{const i=new Audio(e);return i.volume=t,i.play().catch(()=>{}),i}catch{return null}}async function $i(e,t){const{navigate:i}=t,n=Gn(),r=ki();e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px">
      <button id="settings-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:#f3f5f2">‹</button>
      <div style="font-size:18px;font-weight:900;color:#f3f5f2">⚙️ Réglages</div>
    </div>

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.09);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:#f3f5f2;margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:rgba(243,245,242,0.6);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="dark"?"#D4A017":"rgba(255,255,255,0.15)"};background:${n==="dark"?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.03)"}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:#f3f5f2">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="light"?"#D4A017":"rgba(255,255,255,0.15)"};background:${n==="light"?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.03)"}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:#f3f5f2">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.045);border:1px solid rgba(255,255,255,0.09);border-radius:14px;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:14px">
        <div>
          <div style="font-size:14px;font-weight:900;color:#f3f5f2">🔊 Son</div>
          <div style="font-size:12px;color:rgba(243,245,242,0.6);margin-top:2px">Musiques et effets sonores de l'app.</div>
        </div>
        <button id="sound-toggle" role="switch" aria-checked="${!r}" style="flex-shrink:0;width:52px;height:30px;border-radius:999px;border:none;cursor:pointer;position:relative;background:${r?"rgba(255,255,255,0.15)":"#1A6B3C"};transition:background .2s">
          <span style="position:absolute;top:3px;left:${r?"3px":"25px"};width:24px;height:24px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></span>
        </button>
      </div>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:6px">
        Déconnexion
      </button>

    </div>
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(o=>{o.addEventListener("click",()=>{Wr(o.dataset.themeChoice),$i(e,t)})}),e.querySelector("#sound-toggle").addEventListener("click",()=>{uo(!ki()),$i(e,t)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ge(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const tn=["ATT","MIL","DEF","GK"];function vn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Ci(i).some(([d,x])=>d===e.position&&x===t.position||d===t.position&&x===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=tn.indexOf(e._line||e.job),a=tn.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function wn(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!vn(a,s,t))continue;const l=Ht(a,s);l==="#00ff88"?i+=10:l==="#FFD700"&&(i+=5)}return i}function Xt(e,t={},i){let n=0,r=0;e.forEach(l=>{const c=l._line||l.job,d=Number(c==="MIL"?l.note_m:l.note_a)||0,x=l.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?d*2:d,r+=(l.boost||0)+x});const o=n+r,a=wn(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function Jt(e,t={},i){const n=e.reduce((a,s)=>{const l=s._line||s.job;let c=0;l==="GK"?c=Number(s.note_g)||0:l==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const d=s.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return a+c+(s.boost||0)+d},0),r=wn(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Pi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function _n(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const l=t==="attack"?Ge(a,"ATT"):a._line==="GK"?Ge(a,"GK"):Ge(a,"DEF");return(t==="attack"?Ge(s,"ATT"):s._line==="GK"?Ge(s,"GK"):Ge(s,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function go(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const mo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function xo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=kn(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function kn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function yo(e,t){!e||!t||await Promise.all([nn(e,"win"),nn(t,"loss")])}async function nn(e,t){const{data:i}=await w.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=mo[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,l=r.player.note_max??10,c=kn(r.player),d=r.current_note??c,x=Math.min(l,Math.max(s,d+a));return w.from("cards").update({current_note:x}).eq("id",r.id)}))}const bo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},bi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ti=["GK","DEF","MIL","ATT"],ho=["Tous","GK","DEF","MIL","ATT"],vo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function on(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function wo(e){return e.length?e.reduce((t,i)=>on(i)>on(t)?i:t,e[0]):e[0]}function _o(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const ko={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function $o(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function hi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function vi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ae(r,{width:140})}
  </div>`}function rn(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ae(e,{width:140})}
  </div>`}async function Eo(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await w.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(A=>A.card_type==="player"&&A.player),d=(s||[]).filter(A=>A.card_type==="game_changer"),x=(s||[]).filter(A=>A.card_type==="formation"),y=(s||[]).filter(A=>A.card_type==="stadium"),{data:g}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(g||[]).forEach(A=>{m[A.name]=A});const{data:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(A=>{u[A.id]=A}),y.forEach(A=>{A.stadium_def&&(u[A.stadium_id]=A.stadium_def)});const b=Object.keys(Bi),v=Object.keys(Ce),h={};c.forEach(A=>{const D=A.player.id;h[D]=(h[D]||0)+1}),new Set(Object.keys(h).map(A=>String(A)));const $=new Set(x.map(A=>A.formation)),f=new Set(d.map(A=>A.gc_type));let M="player",k="Tous",P="",H=!1;function ae(){return[...c].sort((A,D)=>{const Y=ti.indexOf(A.player.job),te=ti.indexOf(D.player.job);return Y!==te?Y-te:(A.player.surname_real||"").localeCompare(D.player.surname_real||"")})}function re(){return[...l||[]].sort((A,D)=>{const Y=ti.indexOf(A.job),te=ti.indexOf(D.job);return Y!==te?Y-te:(A.surname_real||"").localeCompare(D.surname_real||"")})}function ee(){return ae().filter(A=>{const D=A.player,Y=k==="Tous"||D.job===k,te=!P||`${D.firstname} ${D.surname_real}`.toLowerCase().includes(P);return Y&&te})}function j(){return re().filter(A=>{const D=k==="Tous"||A.job===k,Y=!P||`${A.firstname} ${A.surname_real}`.toLowerCase().includes(P);return D&&Y})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="player"?"var(--green)":"transparent"};
        color:${M==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="formation"?"var(--green)":"transparent"};
        color:${M==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="gc"?"var(--green)":"transparent"};
        color:${M==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${M==="stadium"?"#E87722":"transparent"};
        color:${M==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function L(){const A=document.getElementById("col-filters");A&&(M==="player"?(A.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${P}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${ho.map(D=>`
            <button class="filter-btn" data-job="${D}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${D===k?"var(--green)":"var(--gray-200)"};
                background:${D===k?"var(--green)":"#fff"};
                color:${D===k?"#fff":"var(--gray-600)"}">
              ${D}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${H?"var(--yellow)":"var(--gray-200)"};
              background:${H?"var(--yellow)":"#fff"};
              color:${H?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${H?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",D=>{P=D.target.value.toLowerCase(),V()}),e.querySelectorAll(".filter-btn").forEach(D=>{D.addEventListener("click",()=>{k=D.dataset.job,L(),V()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{H=!H,L(),V()})):(A.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${H?"var(--yellow)":"var(--gray-200)"};
              background:${H?"var(--yellow)":"#fff"};
              color:${H?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${H?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{H=!H,L(),V()})))}function V(){const A=document.getElementById("col-grid");A&&(M==="player"?pe(A):M==="formation"?G(A):M==="stadium"?N(A):K(A))}function ie(A,D,Y,te,R){const C=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!C||!O)return;var ce=0;function ke(){const _e=window.innerWidth>=768,he=document.getElementById("col-big"),Ee=document.getElementById("col-grid");_e&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),_e&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+D(A[ce])+"</div>";var Te=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){te(A[ce])}),requestAnimationFrame(function(){var ve=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ve||!O)){var ze=O.clientHeight-8,Fe=O.clientWidth-24,je=ve.offsetHeight,Re=ve.offsetWidth;if(je>0&&Re>0&&ze>40){var tt=_e?2.2:1.6,He=Math.min(ze/je,Fe/Re,tt);ve.style.transform="scale("+He.toFixed(3)+")",ve.style.transformOrigin="top center"}}}),C.innerHTML=A.map(function(ve,ze){var Fe=ze===ce,je="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Fe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+ze+'" style="'+je+'">'+Y(ve,Fe)+"</div>"}).join(""),C.querySelectorAll(".col-mini-item").forEach(function(ve){ve.addEventListener("click",function(){ce=Number(ve.dataset.idx),ke(),ve.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function ue(A){var D=window.innerWidth>=768?.76:.54,Y;if(!A||A._fake){var te=A?A.player:null;if(!te)return"";Y=rn(te)}else Y=vi(A,"");return'<div style="display:inline-block;zoom:'+D+';pointer-events:none;line-height:0">'+Y+"</div>"}function ge(A,D,Y){D=D||100,Y=Y||140;var te=ei[A]||{},R={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},C=Math.max(3,Math.round(D*.06)),O=Object.entries(te).map(function(ke){var _e=ke[0],he=ke[1],Ee=_e.replace(/\d+$/,""),Te=R[Ee]||"#888",ve=Math.round(he.x*D),ze=Math.round(he.y*Y);return'<circle cx="'+ve+'" cy="'+ze+'" r="'+C+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ce=Math.max(1,Math.round(D/50));return'<svg viewBox="0 0 '+D+" "+Y+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+D+'" height="'+Y+'" fill="#1A6B3C"/><rect x="'+Math.round(D*.2)+'" y="'+Math.round(Y*.02)+'" width="'+Math.round(D*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ce+'"/><line x1="0" y1="'+Math.round(Y*.5)+'" x2="'+D+'" y2="'+Math.round(Y*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ce+'"/><ellipse cx="'+Math.round(D*.5)+'" cy="'+Math.round(Y*.5)+'" rx="'+Math.round(D*.18)+'" ry="'+Math.round(Y*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ce+'"/><rect x="'+Math.round(D*.2)+'" y="'+Math.round(Y*.82)+'" width="'+Math.round(D*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ce+'"/>'+O+"</svg>"}function I(A,D,Y){var te=Y>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+Y+"</div>":"",R=D?'data-form-id="'+D.id+'"':"",C=A.length>7?14:A.length>5?16:19,O=!!D;return"<div "+R+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+te+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+C+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+A+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+ge(A,140,220)+"</div></div>"}function W(A,D){var Y=window.innerWidth>=768?.76:.54,te=140,R=305,C=Math.round(R*.22),O=R-C,ce=A.length>7?10:13,ke=ge(A,te,O),_e=D?"1.5px solid #2a7a40":"1px solid #ddd",he=D?"":"filter:grayscale(1);opacity:0.45;",Ee=D?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+Y+';line-height:0;pointer-events:none"><div style="width:'+te+"px;height:"+R+"px;border-radius:6px;border:"+_e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+C+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ce+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(te-4)+'px">'+A+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div></div>"}function pe(A){if(H){const D=j();if(!D.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const Y=D.map(te=>c.find(R=>R.player.id===te.id)||{_fake:!0,player:te,id:"fake-"+te.id});ie(Y,te=>te._fake?rn(te.player):vi(te,""),te=>te._fake?ue({player:te.player,id:"x",_fake:!0}):ue(te),te=>{te._fake||an(te,c,h,t)})}else{const D=ee();if(!D.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const Y={};D.forEach(R=>{const C=R.player.id;Y[C]||(Y[C]=[]),Y[C].push(R)});const te=Object.values(Y).map(R=>wo(R));ie(te,R=>{const C=h[R.player.id]||1,O=C>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${C}</div>`:"",ke=c.filter(_e=>_e.player.id===R.player.id&&_e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return vi(R,O+ke)},R=>ue(R),R=>an(R,c,h,t))}}function G(A){const D=H?b:[...$];if(!D.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const Y=D.map(te=>({formation:te,card:x.find(R=>R.formation===te)||null,owned:$.has(te)}));ie(Y,({formation:te,card:R,owned:C})=>I(te,C?R:null,C?x.filter(O=>O.formation===te).length:0),({formation:te,owned:R})=>W(te,R),({card:te,owned:R})=>{R&&te&&Lo(te,x,t,o)})}function K(A){const D=Object.keys(m),Y=H?D.length?D:v:[...f];if(!Y.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const te=Y.map(R=>({type:R,gc:Ce[R]||{icon:"⚡",desc:""},def:m[R]||null,owned:f.has(R),card:d.find(C=>C.gc_type===R)||null}));ie(te,({type:R,gc:C,def:O,owned:ce,card:ke})=>{var tt;const _e=ce?d.filter(He=>He.gc_type===R).length:0,he=_e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${_e}</div>`:"",Ee=(O==null?void 0:O.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ve={purple:"#b06ce0",light_blue:"#00d4ef"},ze=Te[O==null?void 0:O.color]||Te.purple,Fe=ve[O==null?void 0:O.color]||ve.purple,je=(O==null?void 0:O.effect)||C.desc||"",Re=O!=null&&O.image_url?`/icons/${O.image_url}`:((tt=O==null?void 0:O.club)==null?void 0:tt.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return ce&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${R}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Fe};background:${ze};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Fe}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${R.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${R}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Re?`<img src="${Re}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${C.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${je.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${R}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${C.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:R,gc:C,def:O,owned:ce})=>{const ke=window.innerWidth>=768?.76:.54,_e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=_e[O==null?void 0:O.color]||_e.purple,Te=he[O==null?void 0:O.color]||he.purple,ve=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return ce?`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${R}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ve?`<img src="${ve}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${C.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||C.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${C.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${R}</span></div></div>`},({type:R,owned:C,def:O})=>{C&&To(R,O,o)})}function N(A){const D="#E87722",Y="/";if(!y.length){A.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const te={};y.forEach(C=>{const O=C.stadium_id||"?";(te[O]=te[O]||[]).push(C)});const R=Object.entries(te).map(([C,O])=>({sid:C,def:u[C]||null,count:O.length,card:O[0]}));ie(R,({def:C,count:O})=>{var Te,ve;const ce=(C==null?void 0:C.name)||"?",ke=((Te=C==null?void 0:C.club)==null?void 0:Te.encoded_name)||(C==null?void 0:C.country_code)||"—",_e=C!=null&&C.image_url?`${Y}icons/${C.image_url}`:((ve=C==null?void 0:C.club)==null?void 0:ve.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),he=_e?`<img src="${_e}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ee=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${D},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${D}66">
          ${Ee}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ce}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${he}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ke}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:C,count:O})=>{var Te,ve;const ce=window.innerWidth>=768?.76:.54,ke=(C==null?void 0:C.name)||"?",_e=((Te=C==null?void 0:C.club)==null?void 0:Te.encoded_name)||(C==null?void 0:C.country_code)||"—",he=C!=null&&C.image_url?`${Y}icons/${C.image_url}`:((ve=C==null?void 0:C.club)==null?void 0:ve.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ee=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ce};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${D},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${ke}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ee}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${_e}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(A=>{A.addEventListener("click",()=>{M=A.dataset.tab,k="Tous",P="",H=!1,e.querySelectorAll(".col-tab-btn").forEach(D=>{const Y=D.dataset.tab===M;D.style.borderBottomColor=Y?"var(--green)":"transparent",D.style.color=Y?"var(--green)":"var(--gray-600)"}),L(),V()})}),L(),V()}function To(e,t,i){const n=Ce[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,l=a[t==null?void 0:t.color]||a.purple,c=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,x=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${r?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${c}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${d}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ii=1e3;function Lo(e,t,i,n){var m,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:l}=i,c=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function x(){const b=ei[c]||{},v=Bi[c]||[],h=290,$=360,f=20;function M(P){const H=b[P];return H?{x:H.x*h,y:H.y*$}:null}let k=`<svg width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[P,H]of v){const ae=M(P),re=M(H);!ae||!re||(k+=`<line x1="${ae.x}" y1="${ae.y}" x2="${re.x}" y2="${re.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const P of Object.keys(b)){const H=M(P);if(!H)continue;const ae=P.replace(/\d+/,""),re=d[ae]||"#555";k+=`<circle cx="${H.x}" cy="${H.y}" r="${f}" fill="${re}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${H.x}" y="${H.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ae}</text>`}return k+="</svg>",k}const y=t.filter(b=>b.formation===c);y.length;const g=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${x()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+5</b> à l'action (<b>+10</b> si les deux correspondent).
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${g?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ii}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ii.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=y.find(h=>!h.is_for_sale)||y[0];if(!b){o("Aucune carte à vendre","error");return}await w.from("market_listings").delete().eq("card_id",b.id),await w.from("transfer_history").delete().eq("card_id",b.id);const{error:v}=await w.from("cards").delete().eq("id",b.id);if(v){o(v.message,"error");return}await w.from("users").update({credits:(r.profile.credits||0)+ii}).eq("id",r.profile.id),await l(),o(`+${ii.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await w.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function an(e,t,i,n){var ue,ge,I,W,pe;const{state:r,toast:o,openModal:a,closeModal:s,navigate:l,refreshProfile:c}=n,d=e.player,x=t.filter(G=>G.player.id===d.id),y=x.length,g=e.evolution_bonus||0,m=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?g:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?g:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?g:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?g:0)),p=d.rarity||"normal",{data:u}=await w.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",m).gte("note_max",m).order("note_min",{ascending:!1}).limit(1);((ue=u==null?void 0:u[0])==null?void 0:ue.price)??vo[p];const b=d.rarity!=="legende";$o(d);const v=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:hi(d,d.job))+g,h=d.rarity==="pepite"||d.rarity==="papyte",$=d.job2?(h?xo(e,_o(d.job2)):hi(d,d.job2))+(hi(d,d.job2)>0?g:0):null;bi[d.job],d.job2&&bi[d.job2];const f=bo[d.rarity]||"#ccc";ko[d.country_code]||d.country_code;const M=e.evolution_bonus||0,P=v+M,H=$||0,ae=H>0?H+M:0,re=x.map(G=>G.id);let ee={};if(re.length){const{data:G}=await w.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(G||[]).forEach(K=>{ee[K.card_id]||(ee[K.card_id]=[]),ee[K.card_id].push(K)})}const j=G=>{const K=G.transferred_at?new Date(G.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",N=G.source==="booster"?"Booster":G.price?G.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${G.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${G.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${N}</div>
        <div style="font-size:11px;color:var(--gray-600)">${K}</div>
      </div>
    </div>`},L=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${y>1?`(${y})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${x.map((G,K)=>{const N=ee[G.id]||[],A=G.is_for_sale,D=N.length?N[N.length-1]:null,te=(d.rarity==="pepite"||d.rarity==="papyte")&&G.current_note!=null?` (☆${G.current_note})`:"";return`
            <div data-card-id="${G.id}" data-card-idx="${K}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${A?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${G.id}" ${A?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${K+1}${te}${A?" 🏷️ En vente":""}</div>
                  ${D?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${D.club_name} · ${D.source==="booster"?"Booster":D.price?D.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${K}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${N.length?`${N.length} club${N.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${K}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${N.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${P}${d.job2&&H>0?` / ${ae}`:""}`:`Note actuelle : ${P}${d.job2&&H>0?` / ${ae}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${y<=1?"#ccc":"#1A6B3C"};border-color:${y<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${y<=1?"not-allowed":"pointer"}"
            ${y<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
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
      ${Ae({...d,_evolution_bonus:g},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${f}">${d.rarity.toUpperCase()}</div>
          ${d.rarity==="pepite"||d.rarity==="papyte"?`
          <div style="margin-top:6px;background:${f}18;border-left:3px solid ${f};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${f};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([G,K])=>{const N=bi[G],A=G==="GK"?"#fff":N,D=G===d.job||G===d.job2,Y=(Number(K)||0)+(D&&M>0?M:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${N};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${A};font-family:Arial Black,Arial;line-height:1">${Y}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${A}">${G}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${y}</div>
        </div>
      </div>
    </div>
    ${L}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ge=document.getElementById("close-detail"))==null||ge.addEventListener("click",s);let V=new Set;const ie=()=>{const G=V.size,K=document.getElementById("sell-action-panel");if(!K)return;K.style.display=G>0?"block":"none",document.getElementById("sell-selected-count").textContent=G;const N=document.getElementById("evolve-btn");N&&(N.textContent=`⬆️ Évoluer ${G>1?"(+"+G+")":""}`)};document.querySelectorAll(".expl-check").forEach(G=>{G.addEventListener("change",()=>{const K=G.dataset.id;G.checked?V.add(K):V.delete(K);const N=G.closest(".exemplaire-row");N&&(N.style.borderColor=G.checked?"#1A6B3C":"#eee"),ie()})}),document.querySelectorAll(".exemplaire-row").forEach(G=>{G.addEventListener("click",K=>{if(K.target.closest("button")||K.target.tagName==="INPUT")return;const N=G.querySelector(".expl-check");N&&!N.disabled&&(N.checked=!N.checked,N.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(G=>{G.addEventListener("click",K=>{K.stopPropagation();const N=document.querySelector(`.expl-hist[data-hist="${G.dataset.idx}"]`);N&&(N.style.display=N.style.display==="none"?"flex":"none")})}),(I=document.getElementById("evolve-btn"))==null||I.addEventListener("click",async()=>{if(y<=1)return;const G=[...V];if(!G.length)return;if(V.has(e.id)){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",R.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(R),R.querySelector("#err-close").addEventListener("click",()=>R.remove()),R.addEventListener("click",C=>{C.target===R&&R.remove()});return}const K=G.filter(R=>R!==e.id),N=d.rarity==="legende"?2:1;if((K.length||1)*N,!(!K.length&&G.length===1&&G[0]===e.id)){if(!K.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(R=>{const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",C.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${K.length}</strong> copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}<br>
            📈 Note : <strong>${v+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${v+(e.evolution_bonus||0)+K.length*N}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+K.length*N}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${N} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(C),C.querySelector("#sac-cancel").addEventListener("click",()=>{C.remove(),R(!1)}),C.querySelector("#sac-ok").addEventListener("click",()=>{C.remove(),R(!0)}),C.addEventListener("click",O=>{O.target===C&&(C.remove(),R(!1))})}))return;if(K.length){await w.from("market_listings").delete().in("card_id",K),await w.from("deck_cards").delete().in("card_id",K),await w.from("transfer_history").delete().in("card_id",K),await w.from("decks").update({stadium_card_id:null}).in("stadium_card_id",K);const{error:R}=await w.from("cards").delete().in("id",K);if(R){o("Erreur suppression : "+R.message,"error");return}}const D=(e.evolution_bonus||0)+K.length*N,{error:Y}=await w.from("cards").update({evolution_bonus:D}).eq("id",e.id);if(Y){o("Erreur évolution : "+Y.message,"error");return}const te=v+D;o(`⬆️ ${d.firstname} ${d.surname_real} : note ${v+e.evolution_bonus||v} → ${te}${K.length?` · ${K.length} copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}`:""} !`,"success",4e3),s(),l("collection")}),(W=document.getElementById("market-sell-btn"))==null||W.addEventListener("click",async()=>{var Y;const G=[...V];if(!G.length){o("Sélectionne au moins un exemplaire","warning");return}const K=parseInt((Y=document.getElementById("sell-market-price"))==null?void 0:Y.value);if(!K||K<1){o("Prix invalide","error");return}const{error:N}=await w.from("cards").update({is_for_sale:!0,sale_price:K}).in("id",G);if(N){o(N.message,"error");return}const A=G.map(te=>({seller_id:r.profile.id,card_id:te,price:K,status:"active"})),{error:D}=await w.from("market_listings").insert(A);D&&console.warn("[Market] insert listings:",D.message),o(`${G.length} carte${G.length>1?"s":""} mise${G.length>1?"s":""} en vente à ${K.toLocaleString("fr")} cr. chacune !`,"success"),s(),l("collection")}),(pe=document.getElementById("cancel-sell-btn"))==null||pe.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),l("collection")})}function sn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function zo(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const ri={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ei(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await sn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:l}=await w.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(l){r(l.message,"error");return}r("Deck créé !","success"),dn(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>dn(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await sn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:l}=await w.from("decks").update({name:s}).eq("id",a.dataset.rename);if(l){r(l.message,"error");return}r("Deck renommé !","success"),Ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await zo(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await w.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await w.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ei(e,t)})})}async function dn(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("*").eq("id",e).single(),{data:a}=await w.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await w.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),l=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),d=(s||[]).filter(b=>b.card_type==="stadium"),x=[...new Set(d.map(b=>b.stadium_id).filter(Boolean))];let y={};if(d.forEach(b=>{b.stadium_def&&b.stadium_id&&(y[b.stadium_id]=b.stadium_def)}),x.length&&Object.keys(y).length<x.length){const{data:b}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",x);(b||[]).forEach(v=>{y[v.id]=v})}const g=c.map(b=>b.formation).filter(Boolean),{data:m}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";g.length>0&&!g.includes(p)&&(p=g[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:c,stadiumCards:d,stadDefMap:y,availableFormations:g};(m||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),wt(t,u,i)}function wt(e,t,i){var m,p;const{navigate:n}=i;ri[t.formation];const r=ln(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(ri),s=(m=t.stadiumCards)==null?void 0:m.find(u=>u.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
  </div>`;const d=window.innerWidth>=900,x=e.querySelector(".deck-pc-layout"),y=e.querySelector(".deck-mobile-layout");x&&(x.style.display=d?"block":"none"),y&&(y.style.display=d?"none":"block"),Io(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const g=()=>{const{openModal:u,closeModal:b}=i,v=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",v),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const $=ln(t.formation),f={};$.forEach(M=>{t.slots[M]&&(f[M]=t.slots[M])}),t.slots=f,b(),wt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",g)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>So(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>jo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),wt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Mo(t,e,i)))}function Io(e,t,i,n){var h,$;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(h=t.stadiumCards)==null?void 0:h.find(f=>f.id===t.stadiumCardId),s=a&&(($=t.stadDefMap)==null?void 0:$[a.stadium_id])||null,l=ei[t.formation]||{},c=Ci(t.formation)||[],d={};for(const f of i){const M=t.slots[f],k=M?t.playerCards.find(P=>P.id===M):null;k!=null&&k.player?d[f]={...k.player,_evolution_bonus:k.evolution_bonus||0,face:k.player.face||null}:d[f]=null}const x=window.innerWidth>=900,y=x?window.innerWidth-280:window.innerWidth-20,g=x?Math.min(y,860):y,m=Math.round(x?g*.82:g*.85),p=x?84:44;let u="";for(const[f,M]of c){const k=l[f],P=l[M];if(!k||!P)continue;const H=k.x*g,ae=Math.round(.03*m+k.y*.85*m),re=P.x*g,ee=Math.round(.03*m+P.y*.85*m),j=d[f],L=d[M],V=Ht(j,L);V==="#ff3333"||V==="#cc2222"?u+=`<line x1="${H.toFixed(1)}" y1="${ae.toFixed(1)}" x2="${re.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${V}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${H.toFixed(1)}" y1="${ae.toFixed(1)}" x2="${re.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${V}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${H.toFixed(1)}" y1="${ae.toFixed(1)}" x2="${re.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="${V}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const v=Math.round(p*657/507);for(const f of i){const M=l[f];if(!M)continue;const k=d[f],P=M.x*g;M.y*m;const H=Math.round(.03*m+M.y*(.85*m)),ae=Math.round(P-p/2),re=Math.round(H-v/2);if(k){const ee=f.replace(/\d+/,""),j=s&&(s.club_id&&String(k.club_id)===String(s.club_id)||s.country_code&&k.country_code===s.country_code),L=Ae({...k,_evolution_bonus:k._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:ee});b+=`<div style="position:absolute;left:${ae}px;top:${re}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${f}">
        <div style="position:relative">${j?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${L}</div>
      </div>`}else{const ee=f.replace(/\d+/,"");b+=`<div style="position:absolute;left:${ae}px;top:${re}px;width:${p}px;height:${v}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${f}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${ee}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${g}px;height:${m}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${m}">${u}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(f=>{f.addEventListener("click",()=>Ao(f.dataset.pos,t,e,n))})}function So(e,t,i){var a;const{openModal:n,closeModal:r}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,v;const l=e.stadDefMap[s.stadium_id],c=((b=l==null?void 0:l.club)==null?void 0:b.logo_url)||null,d=l!=null&&l.image_url?"/icons/"+l.image_url:null,x=e.stadiumCardId===s.id,y=l!=null&&l.country_code&&!c?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,g=(l==null?void 0:l.name)||"Stade",m=g.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=m?m[1].trim():g.slice(0,8),u=((v=m==null?void 0:m[2])==null?void 0:v.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${x?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:y?`<img src="${y}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${x?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${x?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),wt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),wt(t,e,i)})})}function Ao(e,t,i,n){var m,p,u,b,v;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(m=t.stadiumCards)==null?void 0:m.find(h=>h.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],d=c?t.playerCards.find(h=>h.id===c):null;(u=d==null?void 0:d.player)==null||u.id;const x=new Set;Object.entries(t.slots).forEach(([h,$])=>{var M;if(h===e||!$)return;const f=t.playerCards.find(k=>k.id===$);(M=f==null?void 0:f.player)!=null&&M.id&&x.add(f.player.id)}),t.subs.forEach(h=>{var f;const $=t.playerCards.find(M=>M.id===h);(f=$==null?void 0:$.player)!=null&&f.id&&x.add($.player.id)});const y=new Set,g=t.playerCards.filter(h=>{const $=h.player;return!($.job===a||$.job2===a)||x.has($.id)||y.has($.id)?!1:(y.add($.id),!0)});g.sort((h,$)=>{const f=h.evolution_bonus||0,M=$.evolution_bonus||0,k=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?f:0);return(a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a)+(a===$.player.job||a===$.player.job2?M:0)-k}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ae($,{width:100,showStad:!0,stadDef:l,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(v=document.getElementById("remove-player"))==null||v.addEventListener("click",()=>{delete t.slots[e],o(),wt(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),wt(i,t,n)})})}function Mo(e,t,i){var d,x,y;const{openModal:n,closeModal:r}=i,o=(d=e.stadiumCards)==null?void 0:d.find(g=>g.id===e.stadiumCardId),a=o&&((x=e.stadDefMap)==null?void 0:x[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(g=>{var u;const m=e.slots[g];if(!m)return;const p=e.playerCards.find(b=>b.id===m);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(g=>{var p;const m=e.playerCards.find(u=>u.id===g);(p=m==null?void 0:m.player)!=null&&p.id&&s.add(m.player.id)});const l=new Set,c=e.playerCards.filter(g=>{var m,p,u;return s.has((m=g.player)==null?void 0:m.id)||l.has((p=g.player)==null?void 0:p.id)?!1:(l.add((u=g.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(g=>{const m={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Ae(m,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{e.subs.push(g.dataset.cardId),r(),wt(t,e,i)})})}async function jo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(l=>l.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,c],d)=>{s.push({deck_id:e.deckId,card_id:c,position:l,is_starter:!0,slot_order:d})}),e.subs.forEach((l,c)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:l}=await w.from("deck_cards").insert(s);if(l){n(l.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function ln(e){const t=ri[e]||ri["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function $n(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await w.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),l={};(s||[]).forEach(c=>{l[c.booster_id]=(l[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(l[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await w.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function Co(e,t){const{data:i}=await w.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await w.from("booster_claims").insert({user_id:e,booster_id:t})}function Bo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const En=()=>Object.keys(ei),qo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Do(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ae({...t,_evolution_bonus:i},{width:140})}function Tn(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function Fo(e,{state:t,navigate:i,toast:n}){var x,y,g;const r=((x=t.profile)==null?void 0:x.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await $n((y=t.user)==null?void 0:y.id)).map(Tn)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}o.length||(o=qo.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const a=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(m=>m.data||[]),s=new Set(a.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),l=new Set(a.filter(m=>m.card_type==="formation").map(m=>m.formation)),c=new Set(a.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),d={};for(const m of o){if(m.allow_duplicates!==!1||!((g=m.rates)!=null&&g.length))continue;const p=[...new Set((m.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:v}=await w.from("stadium_definitions").select("id");if((v||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(b==="game_changer"){const{data:v}=await w.from("gc_definitions").select("name").eq("is_active",!0);if((v||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:v}=await gn(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-Bb-Ce4un.js").then($=>$.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(v).some(h=>!l.has(h))){u=!0;break}}else{u=!0;break}u||(d[m.id]=!0)}e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const p=o.find(u=>u.id===m.dataset.booster);if(p){m.style.opacity="0.5",m.style.pointerEvents="none";try{await Po(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",p=>{p.stopPropagation();const u=o.find(b=>b.id===m.dataset.boosterId);Oo(u)})})}async function Po(e,{state:t,toast:i,navigate:n,container:r}){var x,y;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await Uo();const{data:o}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set((o||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let l=[],c=null;try{if((x=e.rates)!=null&&x.length)l=await Li(t.profile,e);else{const g=e.type||"player";g==="player"?l=await Ln(t.profile,e.cardCount,e.cost):g==="game_changer"?l=await zn(t.profile,e.cardCount,e.cost):g==="formation"?l=await In(t.profile,e.cost):l=await Li(t.profile,e)}}catch(g){c=g.message||String(g),console.error("[Booster] Erreur:",g)}if(l!=null&&l.length&&e._boosterId&&await Co(t.user.id,e._boosterId),!(l!=null&&l.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}l.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=s.has(g.formation))});const{data:d}=await w.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),Sn(l,e,n)}function Go(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Ro(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>mt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>mt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&mt(n)>=6),i.length||(i=e.filter(n=>mt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&mt(n)>=1&&mt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Li(e,t){if(t.cost>0){const{error:y}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(y)throw y}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:y}=await w.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=y||[]}else n=r||[];const a=new Set(n.filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set(n.filter(y=>y.card_type==="formation").map(y=>y.formation)),l=new Set(n.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),c=new Set(n.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),d=new Set,x=[];for(let y=0;y<(t.cardCount||5);y++){const g=Bo(t.rates);if(g){if(g.card_type==="player"){const m=k=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[k]||k,p=g.rarity?m(g.rarity):null;let u=w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let v=b||[];if((g.note_min||g.note_max)&&(v=v.filter(k=>{const P=Math.max(Number(k.note_g)||0,Number(k.note_d)||0,Number(k.note_m)||0,Number(k.note_a)||0);return(!g.note_min||P>=g.note_min)&&(!g.note_max||P<=g.note_max)})),v.length||(g.note_min||g.note_max?(v=b||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):v=b||[]),!v.length)continue;let h=v.filter(k=>!d.has(k.id));if(i)h.length||(h=v);else if(h=h.filter(k=>!a.has(k.id)),!h.length)continue;const $=h[Math.floor(Math.random()*h.length)];d.add($.id);const f=a.has($.id),{data:M}=await w.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();M&&(x.push({...M,player:$,isDuplicate:f}),w.rpc("record_transfer",{p_card_id:M.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:m}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter($=>!l.has($.name));if(!i&&!u.length)continue;const v=u[Math.floor(Math.random()*u.length)].name,{data:h}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();h&&x.push(h)}else if(g.card_type==="formation"){const m=En(),p=i?m:m.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:v}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();v!=null&&v[0]&&x.push({...v[0],isDuplicate:b})}else if(g.card_type==="stadium"){const{data:m,error:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?m:m.filter($=>!c.has($.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:v,error:h}=await w.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}v&&x.push({...v,rarity:"normal",_stadiumDef:b})}}}return x}async function Ln(e,t,i){if(i>0){const{error:c}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const d=c===0&&a?r:c===0?o:n,x=Go(),y=Ro(d,x);y&&s.push(y)}a&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await w.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(l||[]).forEach((c,d)=>{w.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,d)=>({...l[d],player:c}))}async function zn(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(Ti).map(d=>({name:d,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const d=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:l}=await w.from("cards").insert(a).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(d=>{const x=r==null?void 0:r.find(y=>y.name===d.gc_type||y.id===d.gc_definition_id);return{...d,_gcDef:x||null}})}async function In(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await w.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(d=>d.formation)),o=En(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:l,error:c}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(l||[]).map(d=>({...d,isDuplicate:s}))}function Sn(e,t,i,n=null){var ee,j;if(!e||e.length===0){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",L.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(L),(ee=L.querySelector("#anim-close-err"))==null||ee.addEventListener("click",()=>L.remove());return}e=[...e].sort((L,V)=>{const ie=L.player?mt(L.player):-1;return(V.player?mt(V.player):-1)-ie});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let l=!1;const c=L=>L.touches&&L.touches[0]?L.touches[0].clientX:L.clientX;function d(L){o||(l=!0,s.style.opacity="1",x(L))}function x(L){if(!l||o)return;const V=a.getBoundingClientRect(),ie=c(L)-V.left,ue=Math.max(0,Math.min(1,ie/V.width));s.style.width=ue*V.width+"px",ue>=.82&&g()}function y(){o||(l=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function g(){var V;if(o)return;o=!0,l=!1,s.style.width="100%",s.style.opacity="1",(V=document.getElementById("cut-flash"))==null||V.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const L=document.getElementById("cut-hint");L&&(L.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",d),window.addEventListener("pointermove",x),window.addEventListener("pointerup",y),a.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",y);let m=0,p=!1;const u=new Set;function b(L){m=L,document.getElementById("reveal-phase").style.display="flex",v(),h(L,0),P()}function v(){const L=document.getElementById("card-dots");L&&(L.innerHTML=e.map((V,ie)=>`<div class="card-dot" data-i="${ie}" style="width:8px;height:8px;border-radius:50%;background:${ie===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),L.querySelectorAll(".card-dot").forEach(V=>V.addEventListener("click",()=>f(parseInt(V.dataset.i)))))}function h(L,V){var N,A;const ie=e[L],ue=document.getElementById("card-counter"),ge=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${L+1} / ${e.length}`);const I=document.getElementById("reveal-btns");I&&(I.style.display=L===e.length-1?"flex":"none");const W=ie.card_type==="player"&&((N=ie.player)==null?void 0:N.rarity)==="legende",pe=!u.has(L);u.add(L);let G=0;if(ie.card_type==="player"&&ie.player){const D=ie.player,Y=D.job||"ATT";G=Number(Y==="GK"?D.note_g:Y==="DEF"?D.note_d:Y==="MIL"?D.note_m:D.note_a)||0}const K=D=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${W?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${No(ie)}</div>
          ${ie.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const Y=document.getElementById("current-card-wrap");V!==0?(Y.style.transition="none",Y.style.transform=`translateX(${V>0?100:-100}%)`,requestAnimationFrame(()=>{Y.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Y.style.transform="translateX(0)"})):Y.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),D||W?ae():re(),v()};pe&&(((A=ie.player)==null?void 0:A.rarity)==="legende"||G>=8)&&ie.card_type==="player"&&ie.player?$(ie,()=>K(!0)):K(!1)}function $(L,V){var _e;p=!0;const ie=L.player,ue=`https://flagsapi.com/${ie.country_code}/flat/64.png`,ge=(_e=ie.clubs)==null?void 0:_e.logo_url,I=ie.face?"/"+ie.face.replace(/^public\//,"").replace(/^\//,""):null,W=ie.job||"ATT",pe=Number(W==="GK"?ie.note_g:W==="DEF"?ie.note_d:W==="MIL"?ie.note_m:ie.note_a)||0,G=L.evolution_bonus||0,K=pe+G,N=ie.rarity==="legende",A=K>=18,D=document.getElementById("walkout-overlay"),Y=document.getElementById("walkout-stage");if(!D||!Y){p=!1,V();return}let te=null;N&&(te=fo("/sounds/Legendary.mp3",.8)),D.style.display="flex";const R=()=>{const he=Y.firstElementChild;he&&(he.classList.remove("wo-in"),he.classList.add("wo-out"))},C=1800,O=400;Y.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(R,C),setTimeout(()=>{var he;Y.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((he=ie.clubs)==null?void 0:he.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},C+O),setTimeout(R,C*2+O),setTimeout(()=>{Y.innerHTML=I?`<img class="wo-in" src="${I}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(C+O)*2),setTimeout(R,(C+O)*2+C);const ke=A?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[W]||"#fff";setTimeout(()=>{Y.innerHTML=`<div class="wo-in" style="
        font-size:${A?"120px":"90px"};font-weight:900;color:${ke};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ke}, 0 0 60px ${ke};
        ${A?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${K}
      </div>`,A&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(C+O)*3),setTimeout(R,(C+O)*3+C),setTimeout(()=>{D.style.display="none",Y.innerHTML="",p=!1,te&&!N&&te.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),V()},(C+O)*4)}function f(L){if(p||L<0||L>=e.length||L===m)return;const V=L>m?1:-1;m=L,h(L,V)}function M(){f(m+1)}function k(){f(m-1)}function P(){const L=document.getElementById("card-viewport");if(!L||L._swipeBound)return;L._swipeBound=!0;let V=0,ie=0,ue=0,ge=!1;const I=N=>N.touches?N.touches[0].clientX:N.clientX,W=N=>N.touches?N.touches[0].clientY:N.clientY,pe=N=>{ge=!0,V=I(N),ie=W(N),ue=0},G=N=>{if(!ge)return;ue=I(N)-V;const A=W(N)-ie;if(Math.abs(ue)<Math.abs(A))return;const D=document.getElementById("current-card-wrap");D&&(D.style.transition="none",D.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},K=()=>{if(!ge)return;ge=!1;const N=document.getElementById("current-card-wrap"),A=55;ue<=-A&&m<e.length-1?M():ue>=A&&m>0?k():N&&(N.style.transition="transform .2s ease",N.style.transform="translateX(0)")};L.addEventListener("pointerdown",pe),L.addEventListener("pointermove",G),L.addEventListener("pointerup",K),L.addEventListener("pointercancel",K),L.addEventListener("touchstart",pe,{passive:!0}),L.addEventListener("touchmove",G,{passive:!0}),L.addEventListener("touchend",K),L.addEventListener("click",N=>{if(Math.abs(ue)>8)return;const A=L.getBoundingClientRect();N.clientX-A.left>A.width/2?M():k()})}let H=null;function ae(){const L=document.getElementById("fireworks-canvas");if(!L)return;L.width=window.innerWidth,L.height=window.innerHeight;const V=L.getContext("2d"),ie=[];function ue(){const I=Math.random()*L.width,W=Math.random()*L.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],G=pe[Math.floor(Math.random()*pe.length)];for(let K=0;K<60;K++){const N=Math.PI*2/60*K,A=2+Math.random()*5;ie.push({x:I,y:W,vx:Math.cos(N)*A,vy:Math.sin(N)*A,alpha:1,color:G,size:2+Math.random()*3})}}ue(),H=setInterval(ue,600);function ge(){if(document.getElementById("fireworks-canvas")){V.clearRect(0,0,L.width,L.height);for(let I=ie.length-1;I>=0;I--){const W=ie[I];if(W.x+=W.vx,W.y+=W.vy+.08,W.vy*=.98,W.alpha-=.018,W.alpha<=0){ie.splice(I,1);continue}V.globalAlpha=W.alpha,V.fillStyle=W.color,V.beginPath(),V.arc(W.x,W.y,W.size,0,Math.PI*2),V.fill()}V.globalAlpha=1,(H!==null||ie.length>0)&&requestAnimationFrame(ge)}}ge()}function re(){H!==null&&(clearInterval(H),H=null);const L=document.getElementById("fireworks-canvas");L&&L.getContext("2d").clearRect(0,0,L.width,L.height)}if(n){const L=document.getElementById("reveal-btns");L&&(L.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{re(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{re(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{re(),r.remove(),i("boosters")})}function No(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return Do(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,d=l[o==null?void 0:o.color]||l.purple,x=(o==null?void 0:o.name)||e.gc_type||"Game Changer",y=(o==null?void 0:o.effect)||((t=Ti[e.gc_type])==null?void 0:t.desc)||"",g=o!=null&&o.image_url?`/icons/${o.image_url}`:null,m=((i=Ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${x.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${x}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${y.slice(0,55)}</div>
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Oo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Ho()}function Ho(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function Uo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Ko(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var y,g;const{data:o}=await w.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((y=t.profile)==null?void 0:y.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await w.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await $n()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Tn(p))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const l=a.length;let c=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await w.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function x(){var v;if(c>=l||!a.length){await w.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=a[0],{data:p}=await w.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(m.type==="formation")u=await In(t.profile,0);else if(m.type==="game_changer")u=await zn(t.profile,m.count||3,0);else if(s&&((v=s.rates)!=null&&v.length)){const h={...s,cost:0,cardCount:m.count||s.cardCount||5};u=await Li(t.profile,h),m.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(f=>f.player&&f.player.job==="GK")||await Vo(t.profile,u),await w.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await Ln(t.profile,m.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),c++,await d();const b=m.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${l})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Sn(u,b,i,()=>{x()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>x())}async function Vo(e,t){try{const{data:i}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await w.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Rt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Yo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Lt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function Qt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",r=e.face.replace(/^public\//,"").replace(/^\//,"");return n+r}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function zi(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Zt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function ai(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function xt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function An(){const e=Math.random()*100;return e<10?10:e<30?5:3}function si(e,t){const i=Rt[t]||Rt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,d)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),l=xt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let d=o.findIndex(x=>x.job===a);if(d===-1&&(d=o.findIndex(x=>x.job2===a)),d===-1&&(d=0),o[d]){const x={...o[d],_line:a};s.push(x),o.splice(d,1)}}const l=xt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[a]=s}return n}function dt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function pi(e,t,i){const r=new Set,o=t.filter(d=>{const x=d.gc_type||d.id;return r.has(x)?!1:(r.add(x),!0)});let a=[];function s(d,x){const y=d._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},m={purple:"#9b59b6",light_blue:"#00bcd4"},p=g[y==null?void 0:y.color]||g.purple,u=m[y==null?void 0:y.color]||m.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${x?"#FFD700":u};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${x?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${x?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((y==null?void 0:y.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(y==null?void 0:y.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${y!=null&&y.image_url?`<img src="/icons/${y.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((y==null?void 0:y.effect)||"").slice(0,50)}</span>
      </div>
      ${x?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function c(){var x,y,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=a.length>0;e.innerHTML=`
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(m=>{m.addEventListener("click",()=>{const p=m.dataset.id,u=o.find(v=>v.id===p);if(!u)return;const b=a.findIndex(v=>v.gc_type===u.gc_type);b>-1?a.splice(b,1):a.length<3&&a.push(u),c()})}),(x=e.querySelector("#gc-launch"))==null||x.addEventListener("click",()=>{d&&l(a)}),(y=e.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>l([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function Wo(e,t){var r;const i=((r=t==null?void 0:t.state)==null?void 0:r.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function Xo(e,t,i){const{state:n,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){Lt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(y=>y.id),{data:s}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),l=[...new Set((s||[]).filter(y=>{var g,m;return((g=y.card)==null?void 0:g.card_type)==="stadium"&&((m=y.card)==null?void 0:m.stadium_id)}).map(y=>y.card.stadium_id))],c={};if(l.length){const{data:y}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(y||[]).forEach(g=>{c[g.id]=g}),(s||[]).forEach(g=>{var m,p;((m=g.card)==null?void 0:m.card_type)==="stadium"&&((p=g.card)!=null&&p.stadium_id)&&(g.card._stadiumDef=c[g.card.stadium_id]||null)})}let d=0;function x(){var f,M,k,P,H,ae,re;const y=o[d],g=(s||[]).filter(ee=>ee.deck_id===y.id),m=g.filter(ee=>{var j;return ee.is_starter&&((j=ee.card)==null?void 0:j.player)}).map(ee=>zi(ee.card,ee.position)),p=g.find(ee=>{var j;return((j=ee.card)==null?void 0:j.card_type)==="formation"}),u=y.formation||((f=p==null?void 0:p.card)==null?void 0:f.formation)||"4-4-2";let b=m.length>=11?si(m,u):null,v=((M=y.stadium_card)==null?void 0:M.stadium_def)||null;v&&b&&(b=Zt(b,v));const h=m.length>=11;dt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Wo(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${y.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${m.length}/11${y.is_active?" · ⭐":""}</div>
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((k=v.club)==null?void 0:k.encoded_name)||v.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${m.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((ee,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function ee(){const j=e.querySelector(".deck-preview-wrap"),L=e.querySelector("#deck-swipe-zone");if(!j||!L||!b)return;const V=L.clientWidth>=900,ie=Math.max(200,L.clientHeight-(V?60:40)),ge=Math.max(200,L.clientWidth-16),I=V?Math.min(117,Math.max(52,Math.round(ge*.22))):Math.max(44,Math.round(ge*.168));if(ie<220||ge<220){requestAnimationFrame(ee);return}const W=V?null:Math.round(I*.55);j.innerHTML=Nt(b,u,null,[],ge,ie,[],W),j.style.cssText=`width:${ge}px;height:${ie}px;overflow:hidden;margin:${V?0:60}px auto 0`;const pe=j.querySelector("svg");pe&&(pe.style.cssText="display:block;width:100%;height:100%",pe.setAttribute("preserveAspectRatio",V?"xMidYMid meet":"none"))})),(P=document.getElementById("prev-deck"))==null||P.addEventListener("click",()=>{d>0&&(d--,x())}),(H=document.getElementById("next-deck"))==null||H.addEventListener("click",()=>{d<o.length-1&&(d++,x())}),(ae=document.getElementById("validate-deck"))==null||ae.addEventListener("click",()=>{if(!h)return;const ee=t.state.params||{};t.navigate("match",{...ee,matchMode:ee.matchMode||i,deckId:y.id})}),(re=document.getElementById("cancel-deck-select"))==null||re.addEventListener("click",()=>{et(e),r("home")});const $=document.getElementById("deck-swipe-zone");if($){let ee=0,j=0;$.addEventListener("touchstart",L=>{ee=L.touches[0].clientX,j=L.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",L=>{const V=L.changedTouches[0].clientX-ee,ie=L.changedTouches[0].clientY-j;Math.abs(V)<40||Math.abs(V)<Math.abs(ie)||(V<0&&d<o.length-1?(d++,x()):V>0&&d>0&&(d--,x()))},{passive:!0})}}x()}function vt(e,t=44,i=58,n=null){return Ae(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Je(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,l)=>{const c=s._line||s.job||"MIL";let d=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?d+=10:n||(d+=10)),a+=Ae(s,{width:40,role:c,extraNote:d}),l<o.length-1){const x=o[l+1],y=vn(s,x,r)?Ht(s,x):null;a+=`<div style="width:7px;height:3px;background:${!y||y==="#ff3333"||y==="#cc2222"?"rgba(255,255,255,0.12)":y};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function ui(e,t,i,n,r=310,o=310,a=[],s=null){const l=ei[t]||{},c=Ci(t)||Bi[t]||[],d={},x=["ATT","MIL","DEF","GK"];for(const b of x)(e[b]||[]).forEach((h,$)=>{d[`${b}${$+1}`]=h});function y(b){const v=l[b];return v?{x:v.x*r,y:v.y*o}:null}let g="";for(const[b,v]of c){const h=y(b),$=y(v);if(!h||!$)continue;const f=d[b],M=d[v],k=Ht(f,M);k==="#00ff88"||k==="#FFD700"?(g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(m*657/507);for(const[b,v]of Object.entries(d)){const h=y(b);if(!h||!v)continue;const $=b.replace(/[0-9]/g,""),f=a.includes(v.cardId),M=i==="attack"&&(["MIL","ATT"].includes($)||f)&&!v.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!v.used,k=n.includes(v.cardId);let P=v.boost||0,H=!1;v.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?(P+=10,H=!0):i||(P+=10,H=!0));const ae=Math.round(h.x-m/2),re=Math.round(h.y-p/2);if(v.used){g+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ae}" y="${re}" width="${m}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${v.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const ee=Ae({...v,_evolution_bonus:0,stadiumBonus:!1},{width:m,showStad:!1,stadDef:null,role:$,extraNote:P,_cardOffset:30,_forceStadColor:H}),j=k?`position:absolute;top:30px;left:0;width:${m}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";g+=`<foreignObject x="${ae-2}" y="${re-30}" width="${m+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${ee}
        ${k?`<div style="${j}"></div>`:""}
      </div>
    </foreignObject>`,M&&(g+=`<rect x="${ae}" y="${re}" width="${m}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${v.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(m*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${g}
  </svg>`}function Nt(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ui(e,t,i,n,r,o,a,s)}
  </div>`}async function fi(e,t,i,n){var M;const{state:r,navigate:o,toast:a}=t;dt(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Xo(e,t,i);const l=s.deckId;let c,d,x,y;try{const k=await Promise.all([w.from("decks").select("formation,name,stadium_card_id").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);c=k[0].data,x=k[0].error,d=k[1].data,y=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),Lt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(x||y){console.error("[Match] Erreur Supabase:",x||y),Lt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const g=(d||[]).filter(k=>{var P;return k.is_starter&&((P=k.card)==null?void 0:P.player)}).map(k=>zi(k.card,k.position)),m=(d||[]).filter(k=>{var P;return!k.is_starter&&((P=k.card)==null?void 0:P.player)}).map(k=>zi(k.card,k.position));if(g.length<11){Lt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>o("decks"));return}const p=(d||[]).find(k=>{var P;return((P=k.card)==null?void 0:P.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((M=p==null?void 0:p.card)==null?void 0:M.formation)||"4-4-2",{data:b,error:v}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await w.from("gc_definitions").select("*").eq("is_active",!0),$=(b||[]).map(k=>({...k,_gcDef:(h==null?void 0:h.find(P=>P.name===k.gc_type||P.id===k.gc_definition_id))||null}));let f=null;if(c!=null&&c.stadium_card_id){const{data:k}=await w.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(k!=null&&k.stadium_id){const{data:P}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",k.stadium_id).single();f=P||null}}n({deckId:l,formation:u,starters:g,subsRaw:m,gcCardsEnriched:$,gcDefs:h||[],stadiumDef:f})}function zt(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(zt()*1.1)}function Mn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Qt(e)}}function Jo(e,t,i,n="Adversaire"){const r=zt(),o=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${ui(e,t,null,[],r,o)}
      </div>
    </div>`}function jn(e){var o,a,s;if(!e)return"";const t=l=>l?Ae({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function Qe(e,t,i,n,r){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function Qo(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
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
    </div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),i==null||i()},400)},1600)}function $t(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const r=document.createElement("div");if(r.id="game-toast",r.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,r.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function Cn(e,t){const i=Ge(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function yt(e,t){return e.reduce((i,n)=>i+Cn(n,t),0)}function bt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ht(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function di(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Ht(o,e[a+1]):null,l=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Cn(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ae({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${yt(e,r)} + ${bt(e)} liens = <b style="color:#fff">${yt(e,r)+bt(e)}</b>
      </div>
    </div>`}async function Zo(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await fi(e,t,r,async({deckId:s,formation:l,starters:c,subsRaw:d,gcCardsEnriched:x,gcDefs:y,stadiumDef:g})=>{try{let m=si(c,l);g&&(m=Zt(m,g),ai(d,g));const p=await er(l,o),u=p.lines||p,b=async v=>{try{const h=a==="vs_ai_club"?"club":a,{data:$,error:f}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:h,home_deck_id:s,status:"in_progress"}).select().single();if(f){console.error("[MatchIA] Erreur création match:",f),Lt(e,"⚠️","Impossible de créer le match ("+f.message+").","Retour",()=>t.navigate("home"));return}const M=p.stadiumDef||null;M&&u&&(Zt(u,M),ai(p.subs||[],M));const k={gcDefs:y||[],matchId:$==null?void 0:$.id,mode:a,difficulty:o,formation:l,homeTeam:m,aiTeam:u,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:M,homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ir(e,k,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),Lt(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!x.length){b([]);return}pi(e,x,b)}catch(m){console.error("[MatchIA] Exception setup:",m),Lt(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function er(e,t){var u;const{data:i}=await w.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:tr(e),subs:[],gcCards:[],stadiumDef:null};const n=Rt[e]||Rt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(b,v,h){var $,f;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:(($=b.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((f=b.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:v}}for(const b of["GK","DEF","MIL","ATT"]){const v=i.filter(k=>k.job===b&&!o.has(k.id)),h=i.filter(k=>k.job!==b&&!o.has(k.id)),$=[...v,...h],f=[];for(let k=0;k<n[b];k++){const P=$[k];P&&f.push(a(P,b,k))}const M=xt(f.length);f.forEach((k,P)=>{k._col=M[P]}),r[b]=f}const l=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,v)=>a(b,b.job,100+v)),x=Object.keys(Ce).sort(()=>Math.random()-.5).slice(0,3).map((b,v)=>{var h,$;return{id:"ai-gc-"+v,gc_type:b,name:((h=Ce[b])==null?void 0:h.name)||b,icon:(($=Ce[b])==null?void 0:$.icon)||"⚡"}}),y=Object.values(r).flat(),g={};y.forEach(b=>{b.club_id&&(g[b.club_id]=(g[b.club_id]||0)+1)});const m=(u=Object.entries(g).sort((b,v)=>v[1]-b[1])[0])==null?void 0:u[0];let p=null;if(m){const{data:b}=await w.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:r,subs:l,gcCards:x,stadiumDef:p}}function tr(e){const t=Rt[e]||Rt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let l=0;l<t[o];l++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=xt(a.length);a.forEach((l,c)=>{l._col=s[c]}),i[o]=a}return i}function ir(e,t,i){var r;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,l=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),d=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Nt(t.aiTeam,t.formation,null,[],c,l,[],d),o.style.cssText=`width:${c}px;height:${l}px;overflow:hidden;flex-shrink:0`;const x=o.querySelector("svg");x&&(x.style.cssText="display:block;width:100%;height:100%",x.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>nr(e,t,i),5e3)}const Ye=e=>Mn(e);function nr(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=yt(n,o)+bt(n),l=yt(r,a)+bt(r),c=s>=l;e.innerHTML=`
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

    ${di(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${di(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const m=(p,u)=>e.querySelectorAll(p).forEach((b,v)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+v*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{x("score-home",s,800),x("score-ai",l,800)},1500)};function x(m,p,u){const b=document.getElementById(m);if(!b)return;const v=performance.now(),h=$=>{const f=Math.min(1,($-v)/u);b.textContent=Math.round(p*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(d),t.attacker=c?"home":"ai";const y=c?An():null;c&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(m=>Ye(m)),aiPlayers:r.map(m=>Ye(m)),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const g=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",$e(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ri(e,t,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),v=c?m:p,h=c?p:m;v&&(v.style.fontSize="80px",v.style.color=c?"#FFD700":"#ff6b6b",v.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var f;const $=document.getElementById("duel-shock");if($){const M=(f=b||u)==null?void 0:f.getBoundingClientRect(),k=e.querySelector(".match-screen").getBoundingClientRect();M&&($.style.top=M.top-k.top+M.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",g))},600)},700)},2800)}function $e(e,t,i){var ae,re,ee,j,L,V,ie,ue,ge;const n=t.selected.map(I=>I.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(I=>!r.includes(I.cardId)),s=Object.values(t.homeTeam).flat().filter(I=>I.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(I=>!I.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(I=>!I.used),d=Ot(t.aiTeam),x=l.length===0&&c.length===0&&!d,y=(t.homeTeam.DEF||[]).filter(I=>!I.used),g=(t.homeTeam.GK||[]).filter(I=>!I.used);let m=[];t.phase==="attack"&&l.length===0&&(d?(m=y.map(I=>I.cardId),y.length===0&&(m=m.concat(g.map(I=>I.cardId)))):x&&(m=[...y,...g].map(I=>I.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",b=t.phase==="defense",v=t.phase==="finished",$=(t.homeSubs||[]).filter(I=>!(t.usedSubIds||[]).includes(I.cardId)).length>0&&t.subsUsed<t.maxSubs,f=u&&l.length===0&&m.length===0&&!$,M=t.gcCards.filter(I=>!t.usedGc.includes(I.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const W=t.pendingAttack;let pe="";if(t.selected.length>0){const G=t.selected.map(N=>({...(t.homeTeam[N._role]||[]).find(D=>D.cardId===N.cardId)||N,_line:N._role})),K=Jt(G,t.modifiers.home,t.formation);pe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Je(G.map(N=>({...N,used:!1})),"#3a7bd5",K.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Je((W.players||[]).map(G=>({...G,used:!1})),"#ff6b6b",W.total,"attack",t.formation)}</div>
            ${pe}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const W=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Je((W.players||[]).map(pe=>({...pe,used:!1})),"#00ff88",W.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const W=t.selected.map(G=>{const K=(t.homeTeam[G._role]||[]).find(A=>A.cardId===G.cardId)||G,N=["GK","DEF"].includes(G._role);return{...K,_line:G._role,...N?{note_a:Math.max(1,Number(K.note_a)||0)}:{}}}),pe=Xt(W,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(W.map(G=>({...G,used:!1})),"#FFD700",pe.total,"attack",t.formation)}</div>
          </div>`}const I=t.log[t.log.length-1];return I?'<div style="padding:2px 4px">'+jn(I)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const I=window.innerWidth>=700,W=(R,C,O)=>{var tt,He;const ce=(t.gcDefs||[]).find(mi=>mi.name===R.gc_type),ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",he=(ce==null?void 0:ce.name)||R.gc_type,Ee=(ce==null?void 0:ce.effect)||((tt=Ce[R.gc_type])==null?void 0:tt.desc)||"",Te=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,ve=((He=Ce[R.gc_type])==null?void 0:He.icon)||"⚡",ze=Math.round(O*.22),Fe=Math.round(O*.22),je=O-ze-Fe,Re=he.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${C}px;height:${O}px;border-radius:10px;border:2px solid ${_e};background:${ke};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ze}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Re}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${C-6}px">${he}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${je}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${C-10}px;max-height:${je-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(je*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${Fe}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ee.slice(0,38)}</span>
          </div>
        </div>`},pe=(R,C)=>{var O;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${C}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(C*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(C*.2)}px">⚡</div>
            <div style="font-size:${Math.round(C*.09)}px;color:#000;font-weight:900">+${(O=t.boostCard)==null?void 0:O.value}</div>
          </div>`},G=(R,C)=>C?pe(130,175):W(R,130,175),K=(R,C)=>C?pe(68,95):W(R,68,95),N=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",A=v?`<button id="btn-results" style="${N};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${N};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${N};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${N};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${N};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${N};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,D=u||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Y=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${vt(R,76,100)}</div>`).join("")}
      </div>`,te=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Nt(t.homeTeam,t.formation,t.phase,n,I?1300:zt(),I?600:Gt(),m)}
        </div>
      </div>`;return I?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Y}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${te}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${A}${D}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${M.map(R=>G(R,!1)).join("")}
            ${k?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Nt(t.homeTeam,t.formation,t.phase,n,I?1300:zt(),I?600:Gt(),m)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${M.map(R=>K(R,!1)).join("")}
            ${k?K(null,!0):""}
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
          <div>${A}${D}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(I=>{var W,pe,G;if(I.type==="duel"){const K=I.isGoal,N=I.homeScored?"#FFD700":K?"#ff6b6b":"rgba(255,255,255,0.3)",A=I.homeScored?"⚽ BUT !":K?"⚽ BUT IA !":(W=I.homePlayers)!=null&&W.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${K?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${N};margin-bottom:4px">
                <div style="font-size:9px;color:${N};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${A}</div>
                ${(pe=I.homePlayers)!=null&&pe.length?`<div style="margin-bottom:3px">${Je(I.homePlayers,"rgba(255,255,255,0.7)",I.homeTotal,void 0,t.formation)}</div>`:""}
                ${(G=I.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${Je(I.aiPlayers,"#ff6b6b",I.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return I.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${I.outPlayer?vt({...I.outPlayer,used:!0,_line:I.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${I.inPlayer?vt({...I.inPlayer,_line:I.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:I.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${I.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${I.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function P(){const I=e.querySelector(".match-screen");if(!I)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);I.style.bottom="auto",I.style.height=W+"px",I.style.minHeight=W+"px",I.style.maxHeight=W+"px",I.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");pe&&G&&(G.style.paddingBottom=pe.offsetHeight+"px")}if(P(),setTimeout(P,120),setTimeout(P,400),setTimeout(P,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",P),window.visualViewport.addEventListener("scroll",P)),window.addEventListener("resize",P)),function(){const W=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!W)return;const pe=W.closest("#match-terrain-wrap");pe&&(pe.style.cssText="position:relative;width:100%;height:100%;padding:0"),W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const I=e.querySelector(".terrain-wrapper svg");if(I){const W=I.closest("#match-terrain-wrap");W&&(W.style.cssText="position:relative;width:100%;height:100%;padding:0"),I.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let I=!1,W=30;const pe=()=>document.getElementById("match-timer"),G=()=>{const K=pe();if(!K)return;const N=String(Math.floor(W/60)).padStart(2,"0"),A=String(W%60).padStart(2,"0");K.textContent=` ${N}:${A}`,K.style.color=I?"#ff2222":"#ff9500",K.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(W--,W<0)if(!I)I=!0,W=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",K.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(K),setTimeout(()=>{K.remove(),ht(e,t,i)},2500)}else G()},1e3)}(ae=document.getElementById("match-quit"))==null||ae.addEventListener("click",()=>{et(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ht(e,t,i))}),(re=document.getElementById("view-ai"))==null||re.addEventListener("click",()=>gr(t,i)),(ee=document.getElementById("toggle-history"))==null||ee.addEventListener("click",()=>{var I;(I=document.getElementById("match-history-panel"))==null||I.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var I;(I=document.getElementById("match-history-panel"))==null||I.classList.remove("open")}),(L=document.getElementById("btn-action"))==null||L.addEventListener("click",()=>{t.selected.length!==0&&(u?rr(e,t,i):b&&ar(e,t,i))}),(V=document.getElementById("btn-results"))==null||V.addEventListener("click",()=>ht(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ii(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="ai-attack",$e(e,t,i),setTimeout(()=>Ri(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(I=>{I.addEventListener("click",()=>or(I,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(I=>{I.addEventListener("click",()=>wi(e,t,i,null,I.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(I=>{u?I.addEventListener("click",()=>cr(I.dataset.gcId,I.dataset.gcType,e,t,i)):(I.style.opacity="0.35",I.style.cursor="default",I.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>fr(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(I=>{I.addEventListener("click",()=>wi(e,t,i,I.dataset.subId))}),(ge=document.getElementById("sub-btn-main"))==null||ge.addEventListener("click",()=>wi(e,t,i))}function or(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(l=>l.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}$e(i,t,n)}function Gi(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function rr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Gi(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(l=>l.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=Xt(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",$e(e,t,i),setTimeout(()=>lr(e,t,i),1200)}function ar(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Gi(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(x=>x.cardId===l.cardId)||l,d=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:l._role,stadiumBonus:d}}),o=Jt(r,t.modifiers.home,t.formation);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);c&&(c.used=!0)});const a=Pi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>Ye(l)),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return Ye(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,$e(e,t,i),Qe(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,It(e,t,i,"home-attack")}function sr(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(l=>l.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(l=>!e.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(l=>l.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(l=>l.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function dr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Ce[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ri(e,t,i){Gi(t,i,null),sr(t),dr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used),r=!1;if(!n.length){const d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(y=>!y.used),x=Ot(t.homeTeam);if(x||d.length===0){const y=(t.aiTeam.DEF||[]).filter(m=>!m.used),g=(t.aiTeam.GK||[]).filter(m=>!m.used);n=x?y.length?y:g:[...y,...g],r=!0}}const o=_n(n,"attack",t.difficulty);if(!o.length){Si(e,t,i);return}r&&o.forEach(d=>{d._line=d._line||d.job,d.note_a=Math.max(1,Number(d.note_a)||0)});const a=Xt(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ot(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,li(e,t,i,"ai",o[0]);return}t.aiScore++;const x={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(y=>Ye(y)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(x),t.pendingAttack=null,$e(e,t,i),Qe(x.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}t.phase="defense",$e(e,t,i)}function lr(e,t,i){var c,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=_n(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(x=>(t.aiTeam[x]||[]).filter(y=>!y.used)).length){const x=((c=t.pendingAttack)==null?void 0:c.players)||[];if(x.length===1&&(x[0]._line==="GK"||x[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,li(e,t,i,"home",x[0]);return}t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:x.map(m=>Ye(m)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,$e(e,t,i),Qe(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}const a=r.length>0?Jt(r,t.modifiers.ai,t.formation).total:0;r.forEach(x=>{x.used=!0});const s=Pi(t.pendingAttack.total,a,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(x=>Ye(x)),aiPlayers:r.map(x=>Ye(x)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,$e(e,t,i),Qe(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,It(e,t,i,"ai-attack")}function It(e,t,i,n){if(t.round++,!Bn(e,t,i)){if(Ni(t)){ht(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Si(e,t,i);return}t.phase="attack",$e(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Si(e,t,i);return}t.phase="ai-attack",$e(e,t,i),setTimeout(()=>Ri(e,t,i),800)}}}function Ot(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function cn(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function Bn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(cn(t.homeTeam)&&Ot(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,li(e,t,i,"home",n),!0):!1}if(cn(t.aiTeam)&&Ot(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,li(e,t,i,"ai",n),!0):!1}return!1}function li(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ye(r)]:[],aiPlayers:n==="ai"?[Ye(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,l)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,$e(e,t,i),Qe([Ye(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Ni(t)){ht(e,t,i);return}It(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Ni(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Ii(e,t){return!(["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used))||Ot(t)||!["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used)))}function Si(e,t,i){if(!Bn(e,t,i)){if(Ni(t)){ht(e,t,i);return}if(Ii(t.homeTeam,t.aiTeam)&&Ii(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="attack",$e(e,t,i)}}function wi(e,t,i,n=null,r=null){var g,m;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){$t("Aucun joueur utilisé à remplacer");return}if(!a.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const l=((g=o[s])==null?void 0:g._line)||((m=o[s])==null?void 0:m.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===l)),d=!1;const x=document.createElement("div");x.id="sub-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var f,M,k,P,H,ae;const p=o[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),v=Math.round(b*1.35),h=re=>`background:rgba(255,255,255,0.12);border:none;color:${re?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${re?"default":"pointer"};flex-shrink:0`;x.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?vt({...u,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?vt({...p,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=x.querySelector("#sub-close"))==null||f.addEventListener("click",()=>x.remove()),(M=x.querySelector("#out-up"))==null||M.addEventListener("click",()=>{s>0&&(s--,y())}),(k=x.querySelector("#out-down"))==null||k.addEventListener("click",()=>{s<o.length-1&&(s++,y())}),(P=x.querySelector("#in-up"))==null||P.addEventListener("click",()=>{c>0&&(c--,y())}),(H=x.querySelector("#in-down"))==null||H.addEventListener("click",()=>{c<a.length-1&&(c++,y())});const $=(re,ee,j,L)=>{const V=x.querySelector("#"+re);if(!V)return;let ie=0;V.addEventListener("touchstart",ue=>{ie=ue.touches[0].clientY},{passive:!0}),V.addEventListener("touchend",ue=>{const ge=ue.changedTouches[0].clientY-ie;if(Math.abs(ge)<30)return;const I=ee();ge<0&&I<L-1?(j(I+1),y()):ge>0&&I>0&&(j(I-1),y())},{passive:!0})};$("in-panel",()=>c,re=>c=re,a.length),$("out-panel",()=>s,re=>s=re,o.length),(ae=x.querySelector("#sub-confirm"))==null||ae.addEventListener("click",re=>{if(re.preventDefault(),re.stopPropagation(),d)return;d=!0;const ee=o[s],j=a[c];if(!ee||!j)return;let L=null,V=-1;for(const[ue,ge]of Object.entries(t.homeTeam)){const I=(ge||[]).findIndex(W=>W.cardId===ee.cardId);if(I!==-1){L=ue,V=I;break}}if(V===-1||!L){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),x.remove();return}const ie={...j,_line:L,_col:ee._col||0,used:!1,boost:0};t.homeTeam[L].splice(V,1,ie),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ee.name,firstname:ee.firstname,note:Ge(ee,L),portrait:Qt(ee),job:ee.job,country_code:ee.country_code,rarity:ee.rarity,clubName:ee.clubName,clubLogo:ee.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Ge(j,L),portrait:Qt(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${ee.firstname} ${ee.name}`}),x.remove(),Qo(ee,j,()=>$e(e,t,i))})}document.body.appendChild(x),y()}function cr(e,t,i,n,r){var m,p;const o=(n.gcDefs||[]).find(u=>u.name===t),a=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||a.desc,x=o!=null&&o.image_url?`/icons/${o.image_url}`:null,y=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${y}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(m=g.querySelector("#gc-back"))==null||m.addEventListener("click",()=>g.remove()),(p=g.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{g.remove(),ur(e,t,i,n,r)})}function ni(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var c,d;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(x=>{const y=x._line||x.job||"MIL",g=s.find(p=>p.cardId===x.cardId),m=Ae({...x,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:x.boost||0});return`<div class="gc-pick-item" data-cid="${x.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${x.used?"opacity:0.3;pointer-events:none":""}">
          ${m}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(x=>{x.addEventListener("click",()=>{const y=x.dataset.cid,g=e.find(p=>p.cardId===y);if(!g)return;const m=s.findIndex(p=>p.cardId===y);m>-1?s.splice(m,1):s.length<t&&s.push(g),l()})}),(d=a.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{a.remove(),o(s)})}l(),document.body.appendChild(a)}const pr={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,l])=>l.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(ni(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(d=>d.cardId===l.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),$e(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),$e(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,x])=>x.filter(y=>!y.used).map(y=>({...y,_line:d})));return c.length?(ni(c,t,`Choisir ${t} joueur(s) ${l}(s) à débuffer (-${e})`,o,r,d=>{d.forEach(x=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[x._line]||[]).find(m=>m.cardId===x.cardId);g&&(g.boost=(g.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),$e(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),$e(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",l=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,d])=>d.filter(x=>!x.used).map(x=>({...x,_line:c})));return l.length?(ni(l,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(d=>{const y=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(g=>g.cardId===d.cardId);y&&(y.used=!0,n.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),$e(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),$e(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(l=>l.used).map(l=>({...l,_line:a})));return o.length?(ni(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const l=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),$e(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),$e(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function ur(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(l=>l.name===t)||o.find(l=>{var c;return((c=l.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const l=pr[a.effect_type];l?l(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(n.homeTeam).flatMap(([c,d])=>(d||[]).filter(x=>x.used).map(x=>({...x,_line:c})));l.length?(l[0].used=!1,n.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(l.length){const c=l.sort((d,x)=>Ge(x,"ATT")-Ge(d,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}w.from("cards").delete().eq("id",e).then(()=>{}),s&&$e(i,n,r)}function fr(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Yo[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ge(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(l=>l.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),$e(e,t,i)})})}async function ht(e,t,i){var d,x;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=go(t.mode,a);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?l.wins=(n.profile.wins||0)+1:o?l.draws=(n.profile.draws||0)+1:l.losses=(n.profile.losses||0)+1,await w.from("users").update(l).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{c.remove(),et(e),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",()=>{c.remove(),et(e),i.navigate("match",{matchMode:t.mode})})}function gr(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ui(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qt=e=>Mn(e);async function St(e,t,i,n,r={}){return qn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function mr(e,t,i){const{data:n}=await w.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return qn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function qn(e,t,i,n,r=[],o=[],a=!1,s=null,l=null,c=null,d=null,x=null){const{state:y,navigate:g,toast:m}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(r||[]).map(_=>_.id),v=(r||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await w.from("matches").select("*").eq("id",i).single();if(!h){m("Match introuvable","error"),g("home");return}async function $(){var xe,ye;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:_,error:E},{data:z,error:S},{data:T},{data:F}]=await Promise.all([w.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),w.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),w.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",S==null?void 0:S.message,"p1D:",(xe=_==null?void 0:_.starters)==null?void 0:xe.length,"p2D:",(ye=z==null?void 0:z.starters)==null?void 0:ye.length);const B=oe=>{const Le=Number(oe.evolution_bonus)||0;return{cardId:oe.card_id,position:oe.position,id:oe.id,firstname:oe.firstname,name:oe.surname_real,country_code:oe.country_code,club_id:oe.club_id,job:oe.job,job2:oe.job2,note_g:(Number(oe.note_g)||0)+(oe.job==="GK"||oe.job2==="GK"&&Number(oe.note_g)>0?Le:0),note_d:(Number(oe.note_d)||0)+(oe.job==="DEF"||oe.job2==="DEF"&&Number(oe.note_d)>0?Le:0),note_m:(Number(oe.note_m)||0)+(oe.job==="MIL"||oe.job2==="MIL"&&Number(oe.note_m)>0?Le:0),note_a:(Number(oe.note_a)||0)+(oe.job==="ATT"||oe.job2==="ATT"&&Number(oe.note_a)>0?Le:0),evolution_bonus:Le,rarity:oe.rarity,skin:oe.skin,hair:oe.hair,hair_length:oe.hair_length,face:oe.face||null,clubName:oe.club_encoded_name||null,clubLogo:oe.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},q=((_==null?void 0:_.starters)||[]).map(oe=>B(oe)),U=((z==null?void 0:z.starters)||[]).map(oe=>B(oe)),Q=(_==null?void 0:_.formation)||"4-4-2",ne=(z==null?void 0:z.formation)||"4-4-2";let Z=si(q,Q),J=si(U,ne);const se=((_==null?void 0:_.subs)||[]).map(oe=>B(oe)),de=((z==null?void 0:z.subs)||[]).map(oe=>B(oe)),me=(_==null?void 0:_.stadium_def)||(n?l:null),le=(z==null?void 0:z.stadium_def)||(n?null:l);return me&&(Z=Zt(Z,me),ai(se,me)),le&&(J=Zt(J,le),ai(de,le)),{p1Team:Z,p2Team:J,p1Subs:se,p2Subs:de,p1Formation:Q,p2Formation:ne,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(F==null?void 0:F.club_name)||(F==null?void 0:F.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?v:[],gcCardsFull_p2:n?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let f=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!f,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",y.profile.id),!f)if(n){f=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:_}=await w.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await w.from("matches").update({game_state:f,turn_user_id:h.home_id}).eq("id",i):f=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!f;_++){await new Promise(z=>setTimeout(z,400));const{data:E}=await w.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(f=E.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(E!=null&&E.game_state))}if(!f){m("Erreur de synchronisation","error"),g("home");return}f.gc_p2=b,f.gcCardsFull_p2=v,await w.from("matches").update({game_state:f}).eq("id",i)}let M=!1,k=null,P=!1;const H=new Set,ae=new Set;async function re(_){var ne,Z;try{w.removeChannel(ee)}catch{}const E=f[p+"Score"]||0,z=f[u+"Score"]||0;let S,T;_.winner_id?(S=_.winner_id===y.profile.id,T=!1):_.forfeit?(S=E>z,T=!1):(T=E===z,S=E>z);let F="";if(a&&n)try{const{data:J}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:se}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(J&&se){const de=S?1:T?.5:0,me=1-de,le=J.placement_matches<10,xe=se.placement_matches<10,ye=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,se.mmr,se.mmr_deviation,de===1?1:de===0?0:.5,le),oe=computeGlicko2(se.mmr,se.mmr_deviation,se.mmr_volatility,J.mmr,J.mmr_deviation,me===1?1:me===0?0:.5,xe);await w.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:S?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ye.delta,p_away_delta:oe.delta,p_home_new_rd:ye.newRd,p_away_new_rd:oe.newRd,p_home_new_vol:ye.newSigma,p_away_new_vol:oe.newSigma});const Le=ye.delta,Ne=ye.newMmr,Ie=getTier(Ne),We=Le>=0?"+":"",Ue=Le>=0?"#4caf50":"#ff6b6b",it=getTier(J.mmr);F=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ie.id!==it.id?`<div style="font-size:20px;font-weight:900;color:${Ie.color}">
                    ${Ne>J.mmr?"📈":"📉"} ${it.emoji} ${it.label} → ${Ie.emoji} ${Ie.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Le>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ie.color}">${Ie.emoji} ${Ie.label}</div>`}
              ${le?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(ne=document.getElementById("pvp-end-overlay"))==null||ne.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const q=T?"🤝":S?"🏆":"😞",U=T?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",Q=T?"#fff":S?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${q}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[p+"Name"]} ${E} – ${z} ${f[u+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${F}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${d?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(Z=B.querySelector("#pvp-end-home"))==null||Z.addEventListener("click",()=>{B.remove(),et(e),d?g("mini-league",{openLeagueId:d}):g(a?"ranked":"home")})}const ee=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var z;const E=_.new;try{if(E.status==="finished"||E.forfeit){if(M)return;M=!0,k&&(clearInterval(k),k=null),E.game_state&&(f=E.game_state),re(E);return}if(E.game_state){const S=f;f=E.game_state;const T=f._lastGC;if(T&&T.seq&&!ae.has(T.seq)&&(ae.add(T.seq),T.by!==p)){N(T.type,T.by,()=>W());return}const F=S[p+"Score"]||0,B=S[u+"Score"]||0,q=f[p+"Score"]||0,U=f[u+"Score"]||0,Q=q>F,ne=U>B;if((Q||ne)&&!H.has(f.round)){H.add(f.round);const Z=[...f.log||[]].reverse().find(de=>de.isGoal),J=((Z==null?void 0:Z.homePlayers)||[]).map(de=>({name:de.name,note:de.note,portrait:de.portrait,job:de.job}));!!((z=Z==null?void 0:Z.text)!=null&&z.includes("DERNIER CORNER"))?_e().then(()=>{Qe(J,q,U,Q,()=>W())}):Qe(J,q,U,Q,()=>W());return}W()}}catch(S){console.error("[PvP] crash:",S)}}).subscribe();async function j(_){Object.assign(f,_),f.lastActionAt=new Date().toISOString();const{error:E}=await w.from("matches").update({game_state:f}).eq("id",i);E&&m("Erreur de synchronisation","error");try{W()}catch(z){console.error("[PvP] renderPvpScreen crash:",z)}}async function L(){if(M)return;M=!0,k&&(clearInterval(k),k=null);const _=n?h.away_id:h.home_id,E=n?"p2":"p1",z=n?"p1":"p2",S={...f,[E+"Score"]:3,[z+"Score"]:0,phase:"finished"},T=S.p1Score||0,F=S.p2Score||0;try{await w.from("matches").update({game_state:S}).eq("id",i);const{data:B,error:q}=await w.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:T,p_away_score:F,p_forfeit:!0});if(q&&console.error("[PvP] finish_pvp_match (forfeit):",q),d)try{await w.rpc("check_and_finish_mini_league",{p_league_id:d})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await w.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{w.removeChannel(ee)}catch{}setTimeout(()=>{et(e),d?g("mini-league",{openLeagueId:d}):g("home")},800)}const V={BOOST_STAT:({value:_=1,count:E=1,roles:z=[]},S,T)=>{const F=S[p+"Team"],B=Object.entries(F).filter(([q])=>!z.length||z.includes(q)).flatMap(([q,U])=>U.filter(Q=>!Q.used).map(Q=>({...Q,_line:q})));if(!B.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(S);return}ie(B,E,`Choisir ${E} joueur(s) à booster (+${_})`,q=>{q.forEach(U=>{const Q=(F[U._line]||[]).find(ne=>ne.cardId===U.cardId);Q&&(Q.boost=(Q.boost||0)+_,S.log.push({text:`⚡ +${_} sur ${Q.name}`,type:"info"}))}),S[p+"Team"]=F,T(S)})},DEBUFF_STAT:({value:_=1,count:E=1,roles:z=[],target:S="ai"},T,F)=>{const B=S==="home"?p:u,q=T[B+"Team"],U=S==="home"?"allié":"adverse",Q=Object.entries(q).filter(([ne])=>!z.length||z.includes(ne)).flatMap(([ne,Z])=>Z.map(J=>({...J,_line:ne})));if(!Q.length){T.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),F(T);return}ie(Q,E,`Choisir ${E} joueur(s) ${U}(s) (-${_})`,ne=>{ne.forEach(Z=>{const J=(q[Z._line]||[]).find(se=>se.cardId===Z.cardId);J&&(J.boost=(J.boost||0)-_,T.log.push({text:`🎯 -${_} sur ${J.name}`,type:"info"}))}),T[B+"Team"]=q,F(T)})},GRAY_PLAYER:({count:_=1,roles:E=[],target:z="ai"},S,T)=>{const F=z==="home"?p:u,B=S[F+"Team"],q=z==="home"?"allié":"adverse",U=Object.entries(B).filter(([Q])=>!E.length||E.includes(Q)).flatMap(([Q,ne])=>ne.filter(Z=>!Z.used).map(Z=>({...Z,_line:Q})));if(!U.length){S.log.push({text:`❌ Aucun joueur ${q}`,type:"info"}),T(S);return}ie(U,_,`Choisir ${_} joueur(s) ${q}(s) à exclure`,Q=>{const ne="usedCardIds_"+F,Z=new Set(S[ne]||[]);Q.forEach(J=>{const se=(B[J._line]||[]).find(de=>de.cardId===J.cardId);se&&(se.used=!0,Z.add(J.cardId),S.log.push({text:`❌ ${se.name} exclu !`,type:"info"}))}),S[ne]=[...Z],S[F+"Team"]=B,T(S)})},REVIVE_PLAYER:({count:_=1,roles:E=[]},z,S)=>{const T=z[p+"Team"],F=Object.entries(T).filter(([B])=>!E.length||E.includes(B)).flatMap(([B,q])=>q.filter(U=>U.used).map(U=>({...U,_line:B})));if(!F.length){z.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(z);return}ie(F,_,`Choisir ${_} joueur(s) à ressusciter`,B=>{B.forEach(q=>{const U=(T[q._line]||[]).find(Q=>Q.cardId===q.cardId);U&&(U.used=!1,z.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),z[p+"Team"]=T,S(z)})},REMOVE_GOAL:({},_,E)=>{const z=u+"Score";_[z]>0?(_[z]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(_)},ADD_GOAL_DRAW:({},_,E)=>{_[p+"Score"]===_[u+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(_)},ADD_SUB:({value:_=1},E,z)=>{E.maxSubs=(E.maxSubs||3)+_,E.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),z(E)},CUSTOM:({},_,E)=>E(_)};function ie(_,E,z,S){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let F=[];function B(){var U,Q;const q=_.map(ne=>{const Z=ne._line||ne.job||"MIL",J=F.find(de=>de.cardId===ne.cardId),se=Ae({...ne,_evolution_bonus:0},{width:90,showStad:!0,role:Z,extraNote:ne.boost||0});return`<div class="pp-item" data-cid="${ne.cardId}"
          style="position:relative;border-radius:8px;${J?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ne.used?"opacity:0.3;pointer-events:none":""}">
          ${se}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${z}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${q}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${F.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${F.length}/${E})
          </button>
        </div>`,(U=T.querySelector("#pp-close"))==null||U.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(ne=>{ne.addEventListener("click",()=>{const Z=ne.dataset.cid,J=_.find(de=>de.cardId===Z),se=F.findIndex(de=>de.cardId===Z);J&&(se>-1?F.splice(se,1):F.length<E&&F.push(J),B())})}),(Q=T.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{T.remove(),S(F)})}B(),document.body.appendChild(T)}async function ue(_,E){const S=(f["gcCardsFull_"+p]||[]).find(q=>q.id===_),T=(S==null?void 0:S._gcDef)||(f.gcDefs||[]).find(q=>{var U;return q.name===E||((U=q.name)==null?void 0:U.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),F=[...f["usedGc_"+p]||[],_],B={type:E,by:p,seq:(f._gcAnimSeq||0)+1};ae.add(B.seq),N(E,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const U=V[T.effect_type];if(U){const Q={...f};U(T.effect_params||{},Q,async ne=>{ne["usedGc_"+p]=F,ne._lastGC=B,ne._gcAnimSeq=B.seq,await j(ne)});return}}const q={...f};switch(E){case"Remplacement+":q.maxSubs=(q.maxSubs||3)+1,q.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=u+"Score";q[U]>0&&(q[U]--,q.log.push({text:"🚫 But annulé",type:"info"}));break}}q["usedGc_"+p]=F,q._lastGC=B,q._gcAnimSeq=B.seq,await j(q)})}function ge(_,E){const z="usedCardIds_"+_,S=new Set(f[z]||[]);E.forEach(T=>S.add(T)),f[z]=[...S]}function I(){for(const _ of["p1","p2"]){const E=new Set(f["usedCardIds_"+_]||[]),z=f[_+"Team"];if(z)for(const S of["GK","DEF","MIL","ATT"])(z[S]||[]).forEach(T=>{T.used=E.has(T.cardId)})}}function W(){var Ui,Ki,Vi,Yi,Wi,Xi;if(f.phase==="reveal")return pe();if(f.phase==="midfield")return K();if(f.phase==="finished")return mi();const _=f[p+"Team"],E=f[u+"Team"];I();const z=f[p+"Score"],S=f[u+"Score"],T=f[p+"Name"],F=f[u+"Name"],B=f.phase===p+"-attack",q=f.phase===p+"-defense",U=Array.isArray(f["selected_"+p])?f["selected_"+p]:[],Q=U.map(X=>X.cardId),ne=window.innerWidth>=700,Z=f[p+"Subs"]||[],J=f["usedSubIds_"+p]||[],se=Z.filter(X=>!J.includes(X.cardId)),de=f["gcCardsFull_"+p]||[],me=f["usedGc_"+p]||[],le=de.filter(X=>!me.includes(X.id)),xe=f.boostOwner===p&&!f.boostUsed,ye=[..._.MIL||[],..._.ATT||[]].filter(X=>!X.used),oe=[...E.MIL||[],...E.ATT||[]].filter(X=>!X.used),Le=!ze(E),Ne=ye.length===0&&oe.length===0&&!Le,Ie=(_.DEF||[]).filter(X=>!X.used),We=(_.GK||[]).filter(X=>!X.used);let Ue=[];B&&ye.length===0&&(Le?(Ue=Ie.map(X=>X.cardId),Ie.length===0&&(Ue=Ue.concat(We.map(X=>X.cardId)))):Ne&&(Ue=[...Ie,...We].map(X=>X.cardId)));function it(X,fe,Se){var Bt,gt;const we=X._gcDef,jt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[we==null?void 0:we.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",rt={purple:"#b06ce0",light_blue:"#00d4ef"}[we==null?void 0:we.color]||"#b06ce0",De=(we==null?void 0:we.name)||X.gc_type,Oe=(we==null?void 0:we.effect)||((Bt=Ce[X.gc_type])==null?void 0:Bt.desc)||"",Me=we!=null&&we.image_url?`/icons/${we.image_url}`:null,kt=((gt=Ce[X.gc_type])==null?void 0:gt.icon)||"⚡",Pe=Math.round(Se*.22),ft=Math.round(Se*.22),at=Se-Pe-ft,Ct=De.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${Se}px;border-radius:10px;border:2px solid ${rt};background:${jt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Pe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ct}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${De}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${at}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Me?`<img src="${Me}" style="max-width:${fe-10}px;max-height:${at-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(at*.55)}px">${kt}</span>`}
        </div>
        <div style="height:${ft}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Oe.slice(0,38)}</span>
        </div>
      </div>`}function Ut(X,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const qe=(X,fe)=>fe?Ut(130,175):it(X,130,175),Xe=(X,fe)=>fe?Ut(68,95):it(X,68,95),Ke=ne?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=B?je(p)?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:q?`<button id="pvp-action" style="${Ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${F}</div>`,nt=B&&!je(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||q?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",At=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ne?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${se.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':se.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${vt(X,ne?76:44,ne?100:58)}</div>`).join("")}
    </div>`,ut=B?"attack":q?"defense":"idle",_t=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Nt(_,f[p+"Formation"],ut,Q,ne?1300:zt(),ne?600:Gt(),Ue)}
      </div>
    </div>`,ot=f[p+"Team"],On=(()=>{var fe,Se,we,jt,rt;if(q&&((fe=f.pendingAttack)!=null&&fe.players)){const De=f.pendingAttack;let Oe="";if(U.length>0){const Me=U.map(Pe=>{const ft=(ot[Pe._role]||[]).find(xi=>xi.cardId===Pe.cardId)||Pe,at=ot[Pe._role]||[],Ct=at.findIndex(xi=>xi.cardId===Pe.cardId),Bt=xt(at.length),gt=Ct>=0?Bt[Ct]:ft._col??1;return{...ft,_line:Pe._role,_col:gt}}),kt=Jt(Me,((Se=f.modifiers)==null?void 0:Se[p])||{},f[p+"Formation"]);Oe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Me.map(Pe=>({...Pe,used:!1})),"#3a7bd5",kt.total,"defense",f[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${F} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Je((De.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",De.total,"attack",f[u+"Formation"])}</div>
          ${Oe}
        </div>`}if(B&&((we=f.pendingAttack)!=null&&we.players)){const De=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Je((De.players||[]).map(Oe=>({...Oe,used:!1})),"#00ff88",De.total,"attack",f[p+"Formation"])}</div>
        </div>`}if(B&&!((jt=f.pendingAttack)!=null&&jt.players)&&U.length>0){const De=U.map(Me=>{const kt=(ot[Me._role]||[]).find(gt=>gt.cardId===Me.cardId)||Me,Pe=["GK","DEF"].includes(Me._role),ft=ot[Me._role]||[],at=ft.findIndex(gt=>gt.cardId===Me.cardId),Ct=xt(ft.length),Bt=at>=0?Ct[at]:kt._col??1;return{...kt,_line:Me._role,_col:Bt,...Pe?{note_a:Math.max(1,Number(kt.note_a)||0)}:{}}}),Oe=Xt(De,((rt=f.modifiers)==null?void 0:rt[p])||{},f[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${Je(De.map(Me=>({...Me,used:!1})),"#FFD700",Oe.total,"attack",f[p+"Formation"])}</div>
        </div>`}const X=(f.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+jn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),Hi=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${z} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${F}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${On}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;dt(e),e.style.overflow="hidden",ne?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Hi}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${At}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${_t}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${nt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${le.map(X=>qe(X,!1)).join("")}
            ${xe?qe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Hi}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Nt(_,f[p+"Formation"],ut,Q,zt(),Gt(),Ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${le.map(X=>Xe(X,!1)).join("")}
            ${xe?Xe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&se.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&se.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&se.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&se.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${se.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+p]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${pt}${nt}</div>
        </div>
      </div>`;function Mt(){const X=e.querySelector(".match-screen");if(!X)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=fe+"px",X.style.minHeight=fe+"px",X.style.maxHeight=fe+"px",X.style.overflow="hidden";const Se=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");Se&&we&&(we.style.paddingBottom=Se.offsetHeight+"px")}if(Mt(),setTimeout(Mt,120),setTimeout(Mt,400),P||(P=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Mt),window.visualViewport.addEventListener("scroll",Mt)),window.addEventListener("resize",Mt)),function(){const fe=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!fe)return;const Se=fe.closest("#match-terrain-wrap");Se&&(Se.style.cssText="position:relative;width:100%;height:100%;padding:0"),fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=e.querySelector(".terrain-wrapper svg");if(X){const fe=X.closest("#match-terrain-wrap");fe&&(fe.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!B&&!q)return;const fe=X.dataset.cardId,Se=X.dataset.role,we=(_[Se]||[]).find(Oe=>Oe.cardId===fe);if(!we||we.used)return;const jt=Ue.includes(fe);if(B&&!["MIL","ATT"].includes(Se)&&!jt)return;Array.isArray(f["selected_"+p])||(f["selected_"+p]=[]);const rt=f["selected_"+p],De=rt.findIndex(Oe=>Oe.cardId===fe);De>-1?rt.splice(De,1):rt.length<3&&rt.push({...we,_role:Se}),W()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>Y(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>Y())}),(Ui=e.querySelector("#pvp-sub-open"))==null||Ui.addEventListener("click",()=>Y()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{B?X.addEventListener("click",()=>A(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Ki=e.querySelector("#pvp-boost-card"))==null||Ki.addEventListener("click",()=>D()),(Vi=e.querySelector("#pvp-action"))==null||Vi.addEventListener("click",X=>{B?X.currentTarget.dataset.pass==="1"||!je(p)?O():Ee():q&&Te()}),(Yi=e.querySelector("#pvp-quit"))==null||Yi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&L()}),(Wi=e.querySelector("#pvp-view-opp"))==null||Wi.addEventListener("click",()=>R()),(Xi=e.querySelector("#pvp-toggle-history"))==null||Xi.addEventListener("click",()=>C()),k&&(clearInterval(k),k=null),(B||q)&&!M){let X=30,fe=!1;const Se=()=>document.getElementById("pvp-timer"),we=()=>{Se()&&(Se().textContent=X+"s",Se().style.color=fe?"#ff4444":"#fff")};we(),k=setInterval(()=>{X--,X<0?fe?(clearInterval(k),k=null,B&&!je(p)?O():L()):(fe=!0,X=15,we()):we()},1e3)}}function pe(){dt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Jo(f[u+"Team"],f[u+"Formation"],null,f[u+"Name"]||"Adversaire")}
    </div>`;const _=e.querySelector("svg"),E=_==null?void 0:_.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let G=!1;function K(){if(G)return;const _=f[p+"Team"].MIL||[],E=f[u+"Team"].MIL||[],z=yt(_)+bt(_),S=yt(E)+bt(E),T=z>=S;dt(e),e.innerHTML=`
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
      ${di(_,f[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${di(E,f[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const F=(se,de)=>e.querySelectorAll(se).forEach((me,le)=>{setTimeout(()=>{me.style.opacity="1",me.style.transform="translateY(0) scale(1)"},de+le*90)});F(".duel-card-me",150),F(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((se,de)=>setTimeout(()=>{se.style.opacity="1"},de*70)),900),setTimeout(()=>{const se=e.querySelector("#pvp-vs");se&&(se.style.opacity="1",se.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(de=>de.style.opacity="1")},1250);function B(se,de,me){const le=document.getElementById(se);if(!le)return;const xe=performance.now(),ye=oe=>{const Le=Math.min(1,(oe-xe)/me);le.textContent=Math.round(de*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame(ye):le.textContent=de};requestAnimationFrame(ye)}setTimeout(()=>{B("pvp-score-me",z,800),B("pvp-score-opp",S,800)},1500);const q=f.p1Team.MIL||[],U=f.p2Team.MIL||[],Q=yt(q)+bt(q),ne=yt(U)+bt(U),Z=Q>=ne?"p1":"p2";let J=f.boostValue;J==null&&(J=An(),f.boostValue=J,f.boostOwner=Z,f.boostUsed=!1),G=!0,setTimeout(()=>{const se=e.querySelector("#duel-row-"+(T?"me":"opp")),de=e.querySelector("#duel-row-"+(T?"opp":"me")),me=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),xe=T?me:le,ye=T?le:me;xe&&(xe.style.fontSize="80px",xe.style.color=T?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{se&&(se.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",se.style.zIndex="5"),setTimeout(()=>{const oe=document.getElementById("duel-shock");oe&&(oe.style.animation="shockwave .5s ease-out forwards"),de&&(de.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const oe=document.getElementById("pvp-duel-finale");if(!oe)return;const Le=f.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;oe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+f[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Ne,oe.style.transition="opacity .45s ease",oe.style.opacity="1",oe.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const We=Z;await j({phase:We+"-attack",attacker:We,round:1,boostValue:J,boostUsed:!1,boostOwner:We})})},600)},700)},2800)}function N(_,E,z){var me,le;const S=(f.gcDefs||[]).find(xe=>{var ye;return xe.name===_||((ye=xe.name)==null?void 0:ye.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",F={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",B=(S==null?void 0:S.name)||_,q=(S==null?void 0:S.effect)||((me=Ce[_])==null?void 0:me.desc)||"",U=S!=null&&S.image_url?`/icons/${S.image_url}`:null,Q=((le=Ce[_])==null?void 0:le.icon)||"⚡",Z=E===p?"Vous":f[E+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${F}66}50%{box-shadow:0 0 60px ${F}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${F};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${Z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${F};background:${T};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${U?`<img src="${U}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${Q}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${q}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let se=!1;const de=()=>{se||(se=!0,J.remove(),setTimeout(()=>z&&z(),50))};J.addEventListener("click",de),setTimeout(de,3e3)}function A(_,E){var J,se,de,me;const S=(f["gcCardsFull_"+p]||[]).find(le=>le.id===_),T=S==null?void 0:S._gcDef,F={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",q=(T==null?void 0:T.name)||E,U=(T==null?void 0:T.effect)||((J=Ce[E])==null?void 0:J.desc)||"Carte spéciale.",Q=T!=null&&T.image_url?`/icons/${T.image_url}`:null,ne=((se=Ce[E])==null?void 0:se.icon)||"⚡",Z=document.createElement("div");Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",Z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${F};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Q?`<img src="${Q}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${ne}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${U}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(Z),(de=Z.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>Z.remove()),(me=Z.querySelector("#pvp-gc-use"))==null||me.addEventListener("click",()=>{Z.remove(),ue(_,E)})}function D(){var S;const _=f[p+"Team"],E=Object.entries(_).flatMap(([T,F])=>(F||[]).filter(B=>!B.used).map(B=>({...B,_line:T})));if(!E.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(T=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",B=Ge(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${F};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(S=z.querySelector("#bp-close"))==null||S.addEventListener("click",()=>z.remove()),z.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const F=T.dataset.cid,B=E.find(U=>U.cardId===F);if(!B)return;const q=(_[B._line]||[]).find(U=>U.cardId===F);q&&(q.boost=(q.boost||0)+f.boostValue),z.remove(),await j({[p+"Team"]:_,boostUsed:!0})})})}function Y(_=null){var se,de;if(!(f.phase===p+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const z=f[p+"Team"],S=f["usedSubIds_"+p]||[],T=f.maxSubs||3;if(S.length>=T){m(`Maximum ${T} remplacements atteint`,"warning");return}const F=Object.entries(z).flatMap(([me,le])=>(le||[]).filter(xe=>xe.used).map(xe=>({...xe,_line:me}))),B=(f[p+"Subs"]||[]).filter(me=>!S.includes(me.cardId));if(!F.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){m("Aucun remplaçant disponible","warning");return}let q=Math.max(0,F.findIndex(me=>me.cardId===_));const U=((se=F[q])==null?void 0:se._line)||((de=F[q])==null?void 0:de.job);let Q=Math.max(0,B.findIndex(me=>me.job===U)),ne=!1;const Z=document.createElement("div");Z.id="pvp-sub-overlay",Z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var Ne,Ie,We,Ue,it,Ut;const me=F[q],le=B[Q],xe=Math.min(130,Math.round((window.innerWidth-90)/2)),ye=Math.round(xe*1.35),oe=qe=>`background:rgba(255,255,255,0.12);border:none;color:${qe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${qe?"default":"pointer"};flex-shrink:0`;Z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${le?vt({...le,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(Q>=B.length-1)}" ${Q>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(q===0)}" ${q===0?"disabled":""}>▲</button>
          <div>${me?vt({...me,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(q>=F.length-1)}" ${q>=F.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${q+1}/${F.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=Z.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>Z.remove()),(Ie=Z.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{q>0&&(q--,J())}),(We=Z.querySelector("#pout-down"))==null||We.addEventListener("click",()=>{q<F.length-1&&(q++,J())}),(Ue=Z.querySelector("#pin-up"))==null||Ue.addEventListener("click",()=>{Q>0&&(Q--,J())}),(it=Z.querySelector("#pin-down"))==null||it.addEventListener("click",()=>{Q<B.length-1&&(Q++,J())});const Le=(qe,Xe,Ke,pt)=>{const nt=Z.querySelector("#"+qe);if(!nt)return;let At=0;nt.addEventListener("touchstart",ut=>{At=ut.touches[0].clientY},{passive:!0}),nt.addEventListener("touchend",ut=>{const _t=ut.changedTouches[0].clientY-At;if(Math.abs(_t)<30)return;const ot=Xe();_t<0&&ot<pt-1?(Ke(ot+1),J()):_t>0&&ot>0&&(Ke(ot-1),J())},{passive:!0})};Le("pin-panel",()=>Q,qe=>Q=qe,B.length),Le("pout-panel",()=>q,qe=>q=qe,F.length),(Ut=Z.querySelector("#psub-confirm"))==null||Ut.addEventListener("click",async qe=>{if(qe.preventDefault(),qe.stopPropagation(),ne)return;ne=!0;const Xe=F[q],Ke=B[Q];if(!Xe||!Ke)return;const pt=Xe._line,nt=(z[pt]||[]).findIndex(_t=>_t.cardId===Xe.cardId);if(nt===-1){m("Erreur : joueur introuvable","error"),Z.remove();return}const At={...Ke,_line:pt,position:Xe.position,used:!1,boost:0};z[pt].splice(nt,1,At);const ut=[...S,Ke.cardId];Z.remove(),te(Xe,Ke,async()=>{await j({[p+"Team"]:z,[u+"Team"]:f[u+"Team"],["usedSubIds_"+p]:ut})})})}document.body.appendChild(Z),J()}function te(_,E,z){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const F=(U,Q,ne)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ne}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[U.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${Qt(U)?`<img src="${Qt(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${F(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${F(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let B=!1;const q=()=>{B||(B=!0,T.remove(),setTimeout(()=>z(),50))};T.addEventListener("click",q),setTimeout(q,2200)}function R(){var E;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ui(f[u+"Team"],f[u+"Formation"],null,[],zt(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(E=_.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>_.remove())}function C(){var z;const _=f.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(z=E.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>E.remove())}async function O(){if(f.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",E=(f.round||0)+1,z=[...f.log||[]];z.push({type:"info",text:`⏭️ ${f[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=Re(f),T=je(_),F=S||!T?"finished":_+"-attack";await j({["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:F,attacker:_,round:E,log:z}),F==="finished"&&await He(f)}function ce(_){const E=(_.GK||[]).some(S=>!S.used),z=["DEF","MIL","ATT"].some(S=>(_[S]||[]).some(T=>!T.used));return E&&!z}function ke(_){return(_.p1Score||0)!==(_.p2Score||0)?null:ce(_.p1Team)&&!ze(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(E=>!E.used)}:ce(_.p2Team)&&!ze(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(E=>!E.used)}:null}async function _e(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const E=(z,S)=>new Promise(T=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${S};letter-spacing:2px;animation:lcFade 1.4s ease both">${z}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(T,1400)});await E("⚽ DERNIER CORNER","#FFD700"),await E("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function he(_,E){const{side:z,gk:S}=_;if(!S)return;const T=z+"Score",F=(E[T]||0)+1;S.used=!0;const B=[...E.log||[]];B.push({type:"duel",isGoal:!0,homeScored:z===p,homePlayers:z==="p1"?[qt(S)]:[],aiPlayers:z==="p2"?[qt(S)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${E[z+"Name"]} marque !`});const q=(E.round||0)+1,U=z==="p1"?"p2":"p1",Q={...E,[T]:F},ne=Re(Q);H.add(q),await _e();const Z=z===p?F:E[p+"Score"]||0,J=z===p?E[u+"Score"]||0:F;Qe([qt(S)],Z,J,z===p,async()=>{await j({[T]:F,log:B,round:q,pendingAttack:null,phase:ne?"finished":U+"-attack",attacker:U,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}}}),ne&&await He({...f,[T]:F})})}async function Ee(){const _=f[p+"Team"],E=!["GK","DEF","MIL","ATT"].some(F=>(f[u+"Team"][F]||[]).some(B=>!B.used)),z=(f["selected_"+p]||[]).map(F=>{const B=(_[F._role]||[]).find(de=>de.cardId===F.cardId)||F,q=["GK","DEF"].includes(F._role),U=_[F._role]||[],Q=U.findIndex(de=>de.cardId===F.cardId),ne=xt(U.length),Z=Q>=0?ne[Q]:B._col??1,J=f.stadiumDef||f.homeStadiumDef||null,se=B.stadiumBonus||J&&(J.club_id&&String(B.club_id)===String(J.club_id)||J.country_code&&B.country_code===J.country_code)||!1;return{...B,_line:F._role,_col:Z,stadiumBonus:se,...q?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!z.length)return;const S=Xt(z,f.modifiers[p]||{},f[p+"Formation"]);ge(p,z.map(F=>F.cardId)),z.forEach(F=>{const B=(_[F._role]||[]).find(q=>q.cardId===F.cardId);B&&(B.used=!0)}),f["selected_"+p]=[],W();const T=[...f.log||[]];if(E){if(z.length===1&&(z[0]._line==="GK"||z[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await he({side:p,gk:z[0]},{...f,[p+"Team"]:_,log:T});return}const B=(f[p+"Score"]||0)+1,q=z.map(J=>qt(J));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:q,homeTotal:S.total,aiTotal:0});const U=(f.round||0)+1,Q=p==="p1"?"p2":"p1",ne={...f,[p+"Team"]:_,[p+"Score"]:B},Z=Re(ne);H.add(U),Qe(q,B,f[u+"Score"]||0,!0,async()=>{await j({[p+"Team"]:_,[p+"Score"]:B,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:Z?"finished":Q+"-attack",attacker:Q,round:U,log:T}),Z&&await He({...f,[p+"Score"]:B})});return}T.push({type:"pending",text:`⚔️ ${f[p+"Name"]} attaque (${S.total})`}),await j({[p+"Team"]:_,[u+"Team"]:f[u+"Team"],pendingAttack:{...S,players:z,side:p},["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},phase:u+"-defense",log:T})}async function Te(){const _=f[p+"Team"],E=(f["selected_"+p]||[]).map(le=>{const xe=(_[le._role]||[]).find(Ie=>Ie.cardId===le.cardId)||le,ye=_[le._role]||[],oe=ye.findIndex(Ie=>Ie.cardId===le.cardId),Le=xt(ye.length),Ne=oe>=0?Le[oe]:xe._col??1;return{...xe,_line:le._role,_col:Ne}}),z=Jt(E,f.modifiers[p]||{},f[p+"Formation"]);ge(p,E.map(le=>le.cardId)),E.forEach(le=>{const xe=(_[le._role]||[]).find(ye=>ye.cardId===le.cardId);xe&&(xe.used=!0)}),f["selected_"+p]=[],W();const S=Pi(f.pendingAttack.total,z.total,f.modifiers[p]||{}),T=f.pendingAttack.side,F=S==="attack"||(S==null?void 0:S.goal),B=T==="p1"?"p2":"p1",q=(f.round||0)+1,U=(f.pendingAttack.players||[]).map(le=>qt(le)),Q=[...f.log||[]];Q.push({type:"duel",isGoal:F,homeScored:F&&T===p,text:F?`⚽ BUT de ${f[T+"Name"]} ! (${f.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${z.total})`,homePlayers:U,aiPlayers:E.map(le=>qt(le)),homeTotal:f.pendingAttack.total,aiTotal:z.total});const ne=F?(f[T+"Score"]||0)+1:f[T+"Score"]||0,Z={...f,[p+"Team"]:_,[T+"Score"]:ne},J=Re(Z),se=J?"finished":B+"-attack",de=!J&&!F?ke(Z):null,me=async()=>{if(de){await he(de,Z);return}await j({[p+"Team"]:_,[u+"Team"]:f[u+"Team"],[T+"Score"]:ne,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:se,attacker:B,round:q,log:Q}),(se==="finished"||J)&&await He({...f,[T+"Score"]:ne})};if(F){const le=T===p,xe=le?ne:f[p+"Score"]||0,ye=le?f[u+"Score"]||0:ne;H.add(q),Qe(U,xe,ye,le,me)}else await me()}function ve(_){return["MIL","ATT"].some(E=>(_[E]||[]).some(z=>!z.used))}function ze(_){return["GK","DEF","MIL","ATT"].some(E=>(_[E]||[]).some(z=>!z.used))}function Fe(_){return ze(_)&&!ve(_)}function je(_){const E=f[_+"Team"],z=f[(_==="p1"?"p2":"p1")+"Team"];return!!(ve(E)||Fe(E)&&!ze(z)||Fe(E)&&!ve(z)&&ze(z))}function Re(_){return!ze(_.p1Team)&&!ze(_.p2Team)}function tt(_){const E=_.p1Score||0,z=_.p2Score||0;return E===z?null:E>z?h.home_id:h.away_id}async function He(_){try{const E=tt(_),z=E?h.home_id===E?h.away_id:h.home_id:null,S=_.p1Score||0,T=_.p2Score||0,{data:F,error:B}=await w.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:E,p_home_score:S,p_away_score:T,p_forfeit:!1});if(B&&console.error("[PvP] finish_pvp_match:",B),d)try{await w.rpc("check_and_finish_mini_league",{p_league_id:d})}catch(q){console.error("[PvP] check_and_finish_mini_league:",q)}E&&z&&yo(E,z).catch(()=>{});try{const{data:q}=await w.rpc("apply_match_rewards",{p_match_id:i});q!=null&&q.success&&!(q!=null&&q.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(q){console.error("[PvP] apply_match_rewards:",q)}if(typeof c=="function")try{await c({homeScore:S,awayScore:T,winnerId:E,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(q){console.error("[PvP] onMatchEnd:",q)}}catch(E){console.error("[PvP] finishMatch:",E)}}function mi(){var T;const _=f[p+"Score"],E=f[u+"Score"],z=_>E,S=_===E;dt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${d?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{w.removeChannel(ee)}catch{}et(e),d?g("mini-league",{openLeagueId:d}):g("home")})}W()}async function Ai(e,t,i=!1){var s,l;const{state:n,navigate:r,toast:o}=t,a=i&&((l=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:l.rankedData)||null;await fi(e,t,i?"ranked":"random",async({deckId:c,formation:d,starters:x,subsRaw:y,gcCardsEnriched:g,gcDefs:m,stadiumDef:p})=>{dt(e);const u=async b=>{await yr(e,t,c,d,x,y,b||[],m,p,i,a)};if(!(g!=null&&g.length)){await u([]);return}pi(e,g,u)})}async function xr(e,t,i){return mr(e,t,i)}async function yr(e,t,i,n,r,o,a=[],s=[],l=null,c=!1,d=null){var re,ee;const{state:x,navigate:y,toast:g}=t,m=(d==null?void 0:d.mmr)??((re=x.profile)==null?void 0:re.mmr)??1e3,p=c?qi(m):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let v=!1,h=null,$=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{v=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null);try{await w.rpc("cancel_matchmaking",{p_user_id:x.profile.id})}catch(j){console.error("[Matchmaking] cancel error:",j)}};(ee=document.getElementById("cancel-mm"))==null||ee.addEventListener("click",async()=>{await f(),et(e),y("home")});const M=async(j,L)=>{v||(v=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await St(e,t,j,L,{myGC:a,gcDefs:s,stadiumDef:l,isRanked:c,rankedData:d,onMatchEnd:c?br:null}))},k=x.user.id,{data:P,error:H}=c?await w.rpc("try_matchmake_ranked",{p_user_id:k,p_deck_id:i,p_mmr:m}):await w.rpc("try_matchmake",{p_user_id:k,p_deck_id:i});if(H||!(P!=null&&P.success)){console.error("[Matchmaking] try_matchmake error:",H||P),g("Erreur de matchmaking","error"),et(e),y("home");return}if(P.matched){await M(P.match_id,!1);return}const ae=async()=>{if(v)return;const{data:j}=await w.from("matchmaking_queue").select("status, match_id").eq("user_id",k).maybeSingle();(j==null?void 0:j.status)==="matched"&&j.match_id&&await M(j.match_id,!0)};h=w.channel(`mm_${k}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${k}`},j=>{const L=j.new;L.status==="matched"&&L.match_id&&M(L.match_id,!0)}).subscribe(),$=setInterval(ae,3e3),setTimeout(()=>{v||f()},12e4)}async function br(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:l,matchId:c}=e,d=i.user.id,x=o===d,y=r===d,{data:g}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:m}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",x?a:o).single();if(g&&m){const p=Hn(g.mmr,g.mmr_rd,g.mmr_v,m.mmr,m.mmr_rd,y?1:0);await w.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:y?w.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:w.sql`mmr_losses + 1`}).eq("id",d),n(y?`+MMR ↑ ${Math.round(p.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-p.mmr)}`,y?"success":"error",4e3)}}const hr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Ai,resumePvpMatch:xr},Symbol.toStringTag,{value:"Module"}));async function vr(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",l=!!o.isAccepting;await fi(e,t,"friend",async({deckId:c,formation:d,starters:x,subsRaw:y,gcCardsEnriched:g,gcDefs:m,stadiumDef:p})=>{dt(e);const u=async b=>{const v=b||[];l?await _r(e,t,c,v,m,p):await wr(e,t,c,v,m,p,a,s)};if(!(g!=null&&g.length)){await u([]);return}pi(e,g,u)})}async function wr(e,t,i,n,r,o,a,s){var v;const{state:l,navigate:c,toast:d}=t,x=l.user.id,{data:y,error:g}=await w.from("friend_match_invites").insert({inviter_id:x,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!y){console.error("[Friend] Erreur création invitation:",g),d("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let m=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(v=document.getElementById("cancel-friend"))==null||v.addEventListener("click",async()=>{await u(),await w.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),et(e),c("home")}),p=w.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:h})=>{m||h.status!=="accepted"||!h.match_id||(m=!0,await u(),await St(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(m)return;const{data:h}=await w.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(m=!0,clearInterval(b),await u(),await St(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{m||(clearInterval(b),await u(),d("Invitation expirée","info"),c("home"))},12e4)}async function _r(e,t,i,n,r,o){const{state:a,navigate:s,toast:l}=t,c=a.user.id,{data:d}=await w.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){l("Aucune invitation en attente","error"),s("home");return}const{data:x,error:y}=await w.rpc("accept_friend_invite",{p_invite_id:d.id,p_invitee_deck_id:i});if(y||!(x!=null&&x.success)){console.error("[Friend] Erreur accept_friend_invite:",y||x),l((x==null?void 0:x.error)||"Impossible de rejoindre le match","error"),s("home");return}await St(e,t,x.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const Dn="#1A6B3C",lt="#D4A017",Kt="rgba(255,255,255,0.045)",Et="rgba(255,255,255,0.09)",Tt="rgba(255,255,255,0.08)",Be="#f3f5f2",st="rgba(243,245,242,0.62)",Ve="rgba(243,245,242,0.4)";async function kr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await ct(e,t,i);return}await Ze(e,t)}async function Ze(e,t,i="waiting"){var h,$;const{state:n}=t,r=n.profile.id,{data:o}=await w.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(f=>f.league_id),s={};(o||[]).forEach(f=>{s[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:l,error:c}=await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),d=c?(await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],y=(a.length?await w.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=y.filter(f=>f.status==="waiting"&&!f.is_archived),m=y.filter(f=>f.status==="active"&&!f.is_archived),p=y.filter(f=>f.is_archived||f.status==="finished");let u=p;if(p.length){const{data:f}=await w.from("mini_league_matches").select("league_id").in("league_id",p.map(k=>k.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),M=new Set((f||[]).map(k=>k.league_id));u=p.filter(k=>M.has(k.id))}const b=d.filter(f=>!a.includes(f.id)),v=[{key:"waiting",label:"🟡 En attente",count:g.length+b.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Be}">🏆 Mini League</div>
        <div style="font-size:12px;color:${st}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${Et};border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Be}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt}">
      ${v.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Dn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":Ve};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?$r(g,b,r):i==="active"?Er(m,r):Tr(u,r,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>Lr(e,t)),($=document.getElementById("ml-refresh-list"))==null||$.addEventListener("click",()=>Ze(e,t,i)),e.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>Ze(e,t,f.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>ct(e,t,f.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",M=>{M.stopPropagation(),Fn(e,t,f.dataset.join,f.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",M=>{M.stopPropagation(),Mi(e,t,f.dataset.delete,f.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async M=>{M.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:k,error:P}=await w.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:n.profile.id});if(P||!(k!=null&&k.success)){t.toast((k==null?void 0:k.error)||"Erreur lors de la récupération","error"),Ze(e,t,i);return}if(!k.already_claimed){n.profile.credits=(n.profile.credits||0)+k.prize;const H=document.getElementById("nav-credits");H&&(H.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${k.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}Ze(e,t,i)}))}function ci(e,t,i=!1,n=null){var l,c;const r=e.creator_id===t,o=e.pot||0,a=((c=(l=e.mini_league_members)==null?void 0:l[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Kt};border:1px solid ${s?"rgba(212,160,23,0.5)":Et};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Be}">${e.name}</div>
      ${r?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${st};margin-bottom:${i||s?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${lt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${e.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function $r(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ve};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>ci(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ve};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>ci(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ve}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Er(e,t){return e.length?e.map(i=>ci(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ve}">Aucune mini league en cours.</div>`}function Tr(e,t,i={}){return e.length?e.map(n=>ci(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Ve}">Aucune mini league archivée.</div>`}function Lr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,p,u,b;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",l=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:d,error:x}=await w.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:l,max_players:o,entry_fee:a}).select().single();if(x){n("Erreur : "+x.message,"error");return}const{data:y}=await w.from("users").select("credits").eq("id",t.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await w.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await w.from("users").update({credits:y.credits-a}).eq("id",t.state.profile.id),await w.from("mini_leagues").update({pot:a}).eq("id",d.id),await w.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=y.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ct(e,t,d.id)})}function zr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function Fn(e,t,i,n){var x;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await zr(),s===null))return;const{data:l,error:c}=await w.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(l!=null&&l.success)){console.error("[MiniLeague] join_mini_league:",c||l),r((l==null?void 0:l.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:y}=await w.from("users").select("credits").eq("id",a).single();o.profile&&y&&(o.profile.credits=y.credits)}const d=document.getElementById("nav-credits");d&&(d.textContent=`💰 ${(((x=o.profile)==null?void 0:x.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ct(e,t,i)}async function Ir(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(y=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),y(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),y(!1)}}))return;const{data:l,error:c}=await w.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(l!=null&&l.success)){r((l==null?void 0:l.error)||"Erreur lors de la désinscription","error");return}const d=l.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+d);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${d.toLocaleString("fr")} cr. remboursés`,"success"),Ze(e,t,"waiting")}async function Mi(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await w.from("mini_league_matches").delete().eq("league_id",i),await w.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await w.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),Ze(e,t,r)}async function Sr(e,t,i){await w.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),Ze(e,t,"archived")}async function ct(e,t,i){var $,f,M,k,P,H,ae,re,ee;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:l}]=await Promise.all([w.from("mini_leagues").select("*").eq("id",i).single(),w.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),w.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await Ze(e,t);return}const c=(s||[]).some(j=>j.user_id===o),d=a.creator_id===o,x=(s||[]).map(j=>j.user).filter(Boolean),y=Br(x,l||[]),g=(l||[]).filter(j=>j.matchday===a.current_day),m=a.pot||0,p=a.entry_fee||100,u=g.length>0&&g.every(j=>j.status==="finished"||j.status==="bye"),b=a.current_day>=a.total_days,v=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Tt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Be}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid ${Et};border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Be};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Be}">${a.name}</div>
        <div style="font-size:11px;color:${st}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${lt};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Kt};border:1px solid ${Et};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Be}">👥 Joueurs (${x.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${st};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*x.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*x.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*x.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*x.length*.1).toLocaleString("fr")})</div>
        ${x.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Tt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Dn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Be}">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:${Ve}">@${j.pseudo}</div></div>
            ${j.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${d&&x.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${x.length})</button>`:""}
        ${d?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!d?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Kt};border:1px solid ${Et};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(j=>pn(j,x,o,c)).join("")}
        ${d&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${Kt};border:1px solid ${Et};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ve};text-transform:uppercase;border-bottom:2px solid ${Tt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((j,L)=>{const V=m>0&&a.status==="finished"?L===0?Math.floor(m*.7):L===1?Math.floor(m*.2):L===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid ${Tt};${j.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${L===0?lt:L<3?"#4ade80":st}">${["🥇","🥈","🥉"][L]||L+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Be}">${j.clubName}</div><div style="font-size:10px;color:${Ve}">@${j.pseudo}</div></td>
              <td style="text-align:center;color:${st}">${j.played}</td><td style="text-align:center;color:${st}">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?"#4ade80":"#ff6b6b"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Be}">${j.points}</td>
              ${m>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${V?V.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Kt};border:1px solid ${Et};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Be}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(j,L)=>L+1).reverse().map(j=>{const L=(l||[]).filter(V=>V.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ve};margin-bottom:6px">Journée ${j}</div>${L.map(V=>pn(V,x,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${st}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>Ze(e,t,h)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async j=>{const L=j.currentTarget;L.style.opacity="0.5",await ct(e,t,i)}),(M=document.getElementById("ml-start-btn"))==null||M.addEventListener("click",()=>Ar(e,t,a,x)),(k=document.getElementById("ml-next-day"))==null||k.addEventListener("click",()=>Mr(e,t,i)),(P=document.getElementById("ml-join-now"))==null||P.addEventListener("click",()=>Fn(e,t,i,a.type)),(H=document.getElementById("ml-leave-btn"))==null||H.addEventListener("click",()=>Ir(e,t,i,p)),(ae=document.getElementById("ml-delete-btn"))==null||ae.addEventListener("click",()=>Mi(e,t,i,a.name,"waiting")),(re=document.getElementById("ml-delete-now"))==null||re.addEventListener("click",()=>Mi(e,t,i,a.name,h)),(ee=document.getElementById("ml-archive-btn"))==null||ee.addEventListener("click",()=>Sr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const L=g.find(V=>V.id===j.dataset.playMatch);L&&t.navigate("match-mini-league",{mlMatchId:L.id,leagueId:i})})}),a.status==="finished"&&v){const j=y.findIndex(L=>L.userId===o);j>=0&&j<3&&v.prize_amount>0&&!v.prize_claimed&&setTimeout(()=>jr(e,t,a,v,j),400)}}function pn(e,t,i,n,r=!1){const o=x=>t.find(y=>y.id===x);if(e.is_bye){const x=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${st};text-align:center">🔵 ${(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),l=e.home_id===i||e.away_id===i,c=l&&e.status==="pending"&&n&&!r,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${l?"rgba(74,222,128,0.35)":Tt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Be};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ve}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Be};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Ar(e,t,i,n){const{toast:r,state:o}=t,a=Cr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,d)=>c.forEach(x=>s.push({league_id:i.id,matchday:d+1,home_id:x.home||x.bye,away_id:x.away||null,is_bye:!!x.bye,status:x.bye?"bye":"pending"})));const{error:l}=await w.from("mini_league_matches").insert(s);if(l){r("Erreur calendrier : "+l.message,"error");return}await w.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ct(e,t,i.id)}async function Mr(e,t,i){const{data:n}=await w.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){ct(e,t,i);return}await w.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),ct(e,t,i)}async function jr(e,t,i,n,r){var y,g;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,d=n.prize_claimed,x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",x.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${lt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${lt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${lt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(x),(y=x.querySelector("#prize-close"))==null||y.addEventListener("click",()=>x.remove()),(g=x.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async m=>{const p=m.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await w.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const v=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=v);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${v.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}x.remove(),ct(e,t,i.id)})}function Cr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const l=[],c=[n[0],...o];for(let d=0;d<r/2;d++){const x=c[d],y=c[r-1-d];x===null?l.push({bye:y}):y===null?l.push({bye:x}):l.push({home:x,away:y})}a.push(l),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(l=>l.bye?l:{home:l.away,away:l.home}))]:a}function Br(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function un(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,l=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:d}=await w.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(d||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==l&&c.away_id!==l){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const x=c.home_id===l;if(c.match_id){await St(e,t,c.match_id,x,{mlLeagueId:a,mlMatchId:s});return}await fi(e,t,"mini_league",async({deckId:y,gcCardsEnriched:g,gcDefs:m,stadiumDef:p})=>{dt(e);const u=async b=>{const{data:v,error:h}=await w.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:l,p_deck_id:y});if(h||!(v!=null&&v.success)){console.error("[MiniLeague] start_mini_league_match error:",h||v),r((v==null?void 0:v.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(v.matched){await St(e,t,v.match_id,x,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:m,stadiumDef:p});return}await qr(e,t,{mlMatchId:s,leagueId:a,amIHome:x,chosenGC:b,gcDefs:m,stadiumDef:p})};if(!(g!=null&&g.length)){await u([]);return}pi(e,g,u)})}function qr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(l=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let d=!1;const x=async u=>{if(!d){if(d=!0,clearInterval(m),g)try{g.unsubscribe()}catch{}u&&await St(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),l()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(d=!0,clearInterval(m),g)try{g.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),l()});const y=async()=>{if(d)return;const{data:u}=await w.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&x(u.match_id)},g=w.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&x(u.new.match_id)}).subscribe(),m=setInterval(y,3e3);y()})}const Dr="/",Fr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function Pr(e,t,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var d,x,y;const s=t[n],l=n===t.length-1,c=Math.round((n+1)/t.length*100);r.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${Dr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(d=r.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,o()}),(x=r.querySelector("#tuto-next"))==null||x.addEventListener("click",()=>{l?a():(n++,o())}),(y=r.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await w.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function Gr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await w.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:l}=await w.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):Fr;Pr(e,a,()=>t("boosters"))}const oi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Dt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function Rr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Oi(e,t)}async function Oi(e,t){const{state:i,toast:n}=t,{data:r}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await w.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let l="buy";const c=()=>{var p,u,b,v,h,$,f;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((f=document.getElementById("flt-note2"))==null?void 0:f.value)||0}};function d(p){const u=c();return p.filter(b=>{var H,ae,re;const v=(H=b.card)==null?void 0:H.player;if(!v)return!1;const h=`${v.firstname} ${v.surname_real}`.toLowerCase(),$=(((ae=v.clubs)==null?void 0:ae.encoded_name)||"").toLowerCase(),f=(v.country_code||"").toLowerCase(),M=((re=b.card)==null?void 0:re.evolution_bonus)||0,k=Dt(v,v.job,M),P=v.job2?Dt(v,v.job2,M):0;return!(u.name&&!h.includes(u.name)||u.club&&!$.includes(u.club)||u.country&&!f.includes(u.country)||u.job&&v.job!==u.job||u.rarity&&v.rarity!==u.rarity||u.note1&&k<u.note1||u.note2&&P<u.note2)})}function x(p){var P,H,ae,re;const u=(P=p.card)==null?void 0:P.player;if(!u)return"";const b=((H=p.card)==null?void 0:H.evolution_bonus)||0,v=Dt(u,u.job,b),h=u.job2?Dt(u,u.job2,b):0,$=(i.profile.credits||0)>=p.price,f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,M=oi[u.job]||"#bbb",k=u.job2?oi[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ae=u.clubs)!=null&&ae.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${M};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((re=p.seller)==null?void 0:re.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function y(p){var P,H,ae,re;const u=(P=p.card)==null?void 0:P.player;if(!u)return"";const b=((H=p.card)==null?void 0:H.evolution_bonus)||0,v=Dt(u,u.job,b),h=u.job2?Dt(u,u.job2,b):0,$=p.status==="sold",f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,M=oi[u.job]||"#bbb",k=u.job2?oi[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ae=u.clubs)!=null&&ae.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${M};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${M};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((re=p.buyer)==null?void 0:re.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=l==="buy"?"flex":"none",l==="buy"){const b=d(a);p.innerHTML=b.length?b.map(x).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,$)=>new Date($.listed_at)-new Date(h.listed_at)),v=s.filter(h=>h.status==="sold").sort((h,$)=>new Date($.sold_at||$.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(y).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(y).join(""):"")+(!b.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>Nr(b.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>Hr(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const b=u===p;u.style.background=b?"var(--green)":"#fff",u.style.color=b?"#fff":"var(--gray-600)",u.style.borderColor=b?"var(--green)":"var(--gray-200)"}),g()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(g,250)})}),g()}async function Nr(e,t,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=t.find(d=>d.id===e);if(!s)return;const l=s.price;if((r.profile.credits||0)<l){o("Crédits insuffisants","error");return}Or(s,async()=>{const{error:d}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:r.profile.id});if(d){o("Erreur achat : "+d.message,"error");return}await a();const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await Oi(i,n)})}function Or(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function Hr(e,t,i){const{toast:n}=i,{data:r}=await w.from("market_listings").select("card_id").eq("id",e).single();if(await w.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await w.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),Oi(t,i)}async function Ur(e,t){var d,x,y,g;const{state:i,navigate:n}=t,r=((x=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:x.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:a}]=await Promise.all([w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),w.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=r;function l(){var p,u;const m=document.getElementById("rankings-list");if(m){if(s==="global"){const b=o||[];m.innerHTML=b.length>0?b.map((v,h)=>`
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
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const b=a||[];m.innerHTML=b.length>0?b.map((v,h)=>{const $=qi(v.mmr??1e3),f=(v.ranked_wins||0)+(v.ranked_losses||0)+(v.ranked_draws||0),M=f>0?Math.round((v.ranked_wins||0)/f*100):0,k=v.id===i.profile.id,P=(v.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${k?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${h<3?["#D4A017","#a0a0a0","#cd7f32"][h]:"rgba(255,255,255,0.08)"};color:${h<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${h<3?"16":"13"}px">${h<3?["🥇","🥈","🥉"][h]:h+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${$.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${v.club_name} · ${$.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${P?"❓":$.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${$.color}">${P?"Placement":$.label}</div>
              ${P?"":`<div style="font-size:10px;color:var(--gray-600)">${M}% WR</div>`}
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
  </div>`,l(),(y=document.getElementById("tab-global"))==null||y.addEventListener("click",()=>{s="global",l()}),(g=document.getElementById("tab-ranked"))==null||g.addEventListener("click",()=>{s="ranked",l()})}async function Kr(e,t){var M,k,P,H;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),w.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(M=document.getElementById("ranked-back"))==null||M.addEventListener("click",()=>n("home"));return}const l=s.mmr??1e3,c=s.mmr_deviation??350,d=s.mmr_volatility??.06,x=s.placement_matches??0,y=x<10,g=Math.max(0,10-x),m=qi(l),p=Un(l),u=yi.findIndex(ae=>ae.id===m.id),b=yi[u+1]||null,v={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=h>0?Math.round((s.ranked_wins||0)/h*100):0,f=yi.map(ae=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${m.id===ae.id?1:.35};
      transform:${m.id===ae.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${m.id===ae.id?"28px":"20px"}">${ae.emoji}</div>
      <div style="font-size:9px;color:${ae.color};font-weight:${m.id===ae.id?"900":"400"};letter-spacing:0.5px">${ae.label.toUpperCase()}</div>
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
      ${f}
    </div>

    <!-- Placement / Stats -->
    ${y?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${x}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${g} match${g>1?"s":""} — gains et pertes ×2</div>
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
  </div>`,(k=document.getElementById("ranked-back"))==null||k.addEventListener("click",()=>n("home")),(P=document.getElementById("ranked-leaderboard-btn"))==null||P.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(H=document.getElementById("ranked-play-btn"))==null||H.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:l,rd:c,sigma:d,isPlacement:y}})})}async function Vr(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(d=>d.status==="finished"),l=(o||[]).filter(d=>d.status==="in_progress");function c(d){const x=d.home_id===r.id;x?d.home_score:d.away_score,x?d.away_score:d.home_score;const y=d.winner_id===r.id,g=d.home_score===d.away_score&&d.status==="finished",m=d.status!=="finished"?"…":g?"N":y?"V":"D",p=d.status!=="finished"||g?"#888":y?"#1A6B3C":"#c0392b";let u=a[d.mode]||d.mode;d.away_id===null&&!u.startsWith("IA")&&(u="IA");const v=d.home_id===r.id?d.away:d.home;let h;d.away_id===null?h=u:v?h=`${v.club_name||v.pseudo} (${v.pseudo})`:h="Adversaire";let $="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(d.created_at),M=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${M}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
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
  </div>`}Kn(Yn);const be={user:null,profile:null,page:"home",params:{}};function Ft(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Yr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ji(){document.getElementById("modal-overlay").classList.add("hidden")}async function Vt(){if(!be.user)return;const{data:e}=await w.from("users").select("*").eq("id",be.user.id).single();e&&(be.profile=e)}const Pn="mw_theme";function Gn(){return localStorage.getItem(Pn)||"dark"}function Wr(e){var t;localStorage.setItem(Pn,e),Xr(e),(t=be.profile)!=null&&t.id&&w.from("users").update({theme:e}).eq("id",be.profile.id).then(()=>{})}function Xr(e){document.documentElement.setAttribute("data-theme",e)}function Pt(e,t={}){be.page=e,be.params=t,Rn()}async function Rn(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===be.page)});const t=document.getElementById("nav-credits");t&&be.profile&&(t.textContent=`💰 ${(be.profile.credits||0).toLocaleString("fr")}`);const i={state:be,navigate:Pt,toast:Ft,openModal:Yr,closeModal:ji,refreshProfile:Vt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',be.page){case"home":await en(e,i);break;case"settings":await $i(e,i);break;case"collection":await Eo(e,i);break;case"decks":await Ei(e,i);break;case"boosters":await Fo(e,i);break;case"ranked":await Kr(e,i);break;case"match":{const s=be.params&&be.params.matchMode||"vs_ai_easy";s==="random"?await Ai(e,i,!1):s==="ranked"?await Ai(e,i,!0):s==="friend"?await vr(e,i,(n=be.params)==null?void 0:n.friendId,(r=be.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await un(e,i,(o=be.params)==null?void 0:o.mlMatchId,(a=be.params)==null?void 0:a.leagueId):await Zo(e,i);break}case"market":await Rr(e,i);break;case"rankings":await Ur(e,i);break;case"matches":await Vr(e,i);break;case"friends":await to(e,i);break;case"mini-league":await kr(e,i);break;case"match-mini-league":{const s=be.params||{};await un(e,i,s.mlMatchId,s.leagueId);break}default:await en(e,i)}}function Jr(){var n,r;const e=document.getElementById("app"),t=be.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.19-2341" style="cursor:pointer">
        <img src="${i}logo-withname.png" alt="Manager Wars" style="height:48px;width:auto;display:block">
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="nav-credits" class="credits">💰 ${(t.credits||0).toLocaleString("fr")}</div>
        <button id="journal-btn" title="Journal des mises à jour" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          📰
        </button>
        <button id="settings-btn" title="Réglages" style="background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:0.8;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
          ⚙️
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Pt(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Pt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Pt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>Qr()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Pt("settings"))}async function Qr(){const{data:e}=await w.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function Zr(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function ea(){document.documentElement.setAttribute("data-theme",Gn()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ji()}),document.getElementById("modal-close").addEventListener("click",ji);const{data:{session:e}}=await w.auth.getSession();if(!e){fn(),Zr(document.getElementById("app"),{onPlay:()=>Ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft})});return}be.user=e.user,await Vt(),fn();try{const{data:i}=await w.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),Vn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!be.profile){Xn(document.getElementById("app"),{state:be,navigate:async()=>{await Vt(),_i()},toast:Ft,refreshProfile:Vt});return}const t=Array.isArray(be.profile.pending_boosters)?be.profile.pending_boosters:[];if(!be.profile.onboarding_done&&t.length>0){Ko(document.getElementById("app"),{state:be,navigate:()=>_i(),toast:Ft,refreshProfile:Vt});return}_i(),setTimeout(()=>Gr(be.profile,Pt,Ft),800),w.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(be.user=null,be.profile=null,document.getElementById("app").innerHTML="",Ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft}))})}function ta(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function gi(){const e=document.getElementById("app");e&&(e.style.height=ta()+"px")}window.addEventListener("resize",gi);window.addEventListener("orientationchange",()=>setTimeout(gi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",gi);function _i(){const e=()=>{var i;(i=be.user)!=null&&i.id&&w.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",be.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",gi(),Jr(),Rn()}function fn(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Nn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}ea().catch(e=>{console.error("Échec du démarrage:",e),Nn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Nn("Le serveur met trop de temps à répondre.")},12e3);
