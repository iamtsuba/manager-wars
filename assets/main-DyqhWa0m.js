const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Bb-Ce4un.js","assets/formation-links-CMI0Kx3r.css"])))=>i.map(i=>d[i]);
import{s as v,l as Ot,m as Bi,F as qi,r as Se,j as ti,h as Di,n as Kn,o as Vn,T as bi,k as Yn,p as Wn,b as Xn}from"./formation-links-Bb-Ce4un.js";const Jn="/";function Qi(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,d,c,l,m;const o=n==="login";e.innerHTML=`
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
        <img src="${Jn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o?((d=document.getElementById("login-password"))==null||d.addEventListener("keydown",y=>{var g;y.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const y=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,x=document.getElementById("login-error");if(x.textContent="",!y||!g){x.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await v.auth.signInWithPassword({email:y,password:g});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){x.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",y=>{var g;y.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const y=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,x=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!y||!g||!x){p.textContent="Remplissez tous les champs.";return}if(g.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==x){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:b}=await v.auth.signUp({email:y,password:g});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const w=document.getElementById("login-email");w&&(w.value=y)},50)}))};r()}function Qn(e,{state:t,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function s(){var x;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),m=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",y=m.trim().split(" ").filter(Boolean),g=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():m.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),l&&(l.textContent=g,l.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await v.from("users").select("id").eq("pseudo",c).maybeSingle();if(m){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await v.from("users").select("id").eq("club_name",c).maybeSingle();if(m){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),y=document.getElementById("step3-finish");m.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:g}=await v.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:o,club_color2:a,credits:1e4});if(g)throw g;await Zn(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){m.textContent=g.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function Zn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const eo="modulepreload",to=function(e){return"/"+e},Zi={},mn=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=to(d),d in Zi)return;Zi[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":eo,c||(m.as="script"),m.crossOrigin="",m.href=d,s&&m.setAttribute("nonce",s),document.head.appendChild(m),c)return new Promise((y,g)=>{m.addEventListener("load",y),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Wt="#1A6B3C",Xt="#cc2222",io="#D4A017",en="#888";async function no(e,t){const{state:i,toast:n}=t;e.innerHTML=`
    <div style="padding:16px;max-width:640px;margin:0 auto">
      <h2 style="font-size:20px;font-weight:900;margin-bottom:16px">👥 Amis</h2>

      <!-- Actions -->
      <div style="display:flex;gap:10px;margin-bottom:20px">
        <button id="btn-add-friend" class="btn btn-primary" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
          ➕ Ajouter un ami
        </button>
        <button id="btn-accept-friend" class="btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:var(--tile-bg);border:1.5px solid var(--green,#1A6B3C);color:var(--green,#1A6B3C);font-weight:700">
          ✅ Accepter un ami
          <span id="pending-badge" style="display:none;background:#cc2222;color:#fff;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center"></span>
        </button>
      </div>

      <!-- Liste amis -->
      <div id="friends-list">
        <div style="text-align:center;color:#aaa;padding:32px">Chargement…</div>
      </div>
    </div>`,await xn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>ro(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>yn(i,n,null,t))}async function xn(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${Xt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(o||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let m={};if(l.length){const{data:g}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(g||[]).forEach(x=>{m[x.id]=x})}const y=(o||[]).map(g=>({friendshipId:g.id,friend:m[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!y.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:g,friend:x})=>oo(x,g)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>ao(e,g.dataset.stats,g.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,p=g.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await v.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!b;console.log("[Friends] clic match",{fid:x,fname:p,isAccepting:w}),n("match",{matchMode:"friend",friendId:x,friendName:p,isAccepting:w})})})}function oo(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Wt,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:var(--tile-bg);border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${r}
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
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:var(--tile-bg);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${io};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function ro(e,t){const i=Fi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Xt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Pi()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:c}=await v.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){r.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function yn(e,t,i=null,n={}){const r=e.user.id,{data:o}=await v.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(y=>y.requester_id);let s={};if(a.length){const{data:y}=await v.from("users").select("id, pseudo, club_name").in("id",a);(y||[]).forEach(g=>{s[g.id]=g})}const d=(o||[]).map(y=>({...y,requester:s[y.requester_id]||{pseudo:"?"}})),c=Fi(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(y=>{var g,x,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=y.requester)==null?void 0:g.club_name)||((x=y.requester)==null?void 0:x.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=y.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${y.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Wt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Xt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Pi()}`,document.body.appendChild(c);const m=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",m),c.addEventListener("click",y=>{y.target===c&&m()}),c.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:g}=await v.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}y.closest("div[style]").remove(),t("✅ Ami accepté !","success"),xn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function ao(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=a?c.wins_p1||0:c.wins_p2||0,m=a?c.wins_p2||0:c.wins_p1||0,y=c.draws||0,g=a?c.goals_p1||0:c.goals_p2||0,x=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,w=($,f,I,_=Wt,M=Xt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${_}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${M}">${I}</div>
    </div>`,h=Fi();h.innerHTML=`
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
        ${w("Victoires",l,m)}
        ${w("Nuls",y,y,en,en)}
        ${w("Défaites",m,l)}
        ${w("Buts marqués",g,x)}
        ${w("Buts encaissés",x,g,Xt,Wt)}
        ${w("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Pi()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",$=>{$.target===h&&h.remove()})}function Fi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Pi(){return`
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
        background:${Wt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const so="2026.07.20-0833";async function tn(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: var(--page-bg);
      background-image: var(--page-gradient);
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
    .home-hero-info h3 { margin:0; font-size:17px; font-weight:900; color:var(--tile-fg-on-page); }
    .home-hero-info .level { font-size:11px; color:var(--tile-fg-dim); letter-spacing:1px; text-transform:uppercase; margin-top:2px; }
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
      background: var(--tile-bg);
      border: 1px solid var(--tile-border);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: transform .15s, filter .15s;
      backdrop-filter: blur(4px);
    }
    .play-tile:hover { filter: brightness(1.12); }
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
      background: var(--tile-bg);
      border: 1px solid var(--tile-border);
      border-radius: 20px;
      color: var(--tile-fg-dim);
      font-size: 12px;
      padding: 6px 18px;
      cursor: pointer;
      transition: filter .2s;
    }
    .home-logout-btn:hover { filter: brightness(1.15); }
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${so}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var m,y,g,x,p;const s=((m=window.visualViewport)==null?void 0:m.height)||window.innerHeight,d=((y=document.querySelector(".top-nav"))==null?void 0:y.offsetHeight)||56,c=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-d-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((x=e.querySelector(".home-hero"))==null?void 0:x.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const w=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((G,re)=>{var ie;return G+(((ie=document.getElementById(re))==null?void 0:ie.offsetHeight)||0)},0),$=12*5,f=s-d-c-u-w-h-$-32,I=Math.max(80,Math.round(f*.28)),_=Math.max(160,Math.round(f*.72)),M=Math.floor((_-10)/2);b&&(b.style.minHeight=b.style.maxHeight=I+"px"),e.querySelectorAll(".play-tile").forEach(G=>{G.style.minHeight=G.style.height=M+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(G=>{G.style.height=Math.round(M*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){fo(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()}),hn(t,n),uo(t,n,i),bn(t,n,i),lo(t,n))}async function lo(e,t){const i=e.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of n){const{data:l}=await v.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){e.profile.credits=(e.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function bn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=e.profile.id,{data:o}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(d=>d.home_id===r?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await v.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(d=>{const c=d.home_id===r?d.away_id:d.home_id,l=s[c]||"Adversaire",m=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${m?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await mn(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>wr);return{resumePvpMatch:m}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{po(async()=>{await co(d.dataset.abandon,d.dataset.opp,r),t("Match abandonné (défaite 3-0)","info"),bn(e,t,i)})})})}async function co(e,t,i){const{data:n}=await v.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await v.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",e)}function po(e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function uo(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((d=r.inviter)==null?void 0:d.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",t("Invitation refusée","info")})}async function hn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>yn(e,t,()=>hn(e,t)))}function fo(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
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
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-1px)",r.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),r.addEventListener("mouseleave",()=>{r.style.transform="",r.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{n(),e("match",{matchMode:r.dataset.mode})})})}const vn="mw_sound_muted";function $i(){return localStorage.getItem(vn)==="1"}function go(e){localStorage.setItem(vn,e?"1":"0")}function mo(e,t=1){if($i())return null;try{const i=new Audio(e);return i.volume=t,i.play().catch(()=>{}),i}catch{return null}}async function Ei(e,t){const{navigate:i}=t,n=Nn(),r=$i();e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px">
      <button id="settings-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--nav-fg,#fff)">‹</button>
      <div style="font-size:18px;font-weight:900;color:var(--nav-fg,#fff)">⚙️ Réglages</div>
    </div>

    <div style="padding:16px;display:flex;flex-direction:column;gap:14px;max-width:520px;margin:0 auto">

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page);margin-bottom:4px">🎨 Apparence</div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Choisis le thème de l'application.</div>
        <div style="display:flex;gap:10px">
          <button data-theme-choice="dark" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="dark"?"#D4A017":"var(--tile-border)"};background:${n==="dark"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">🌙</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Sombre</div>
          </button>
          <button data-theme-choice="light" style="flex:1;padding:14px;border-radius:12px;cursor:pointer;text-align:center;border:2px solid ${n==="light"?"#D4A017":"var(--tile-border)"};background:${n==="light"?"rgba(212,160,23,0.12)":"transparent"}">
            <div style="font-size:22px;margin-bottom:6px">☀️</div>
            <div style="font-size:13px;font-weight:700;color:var(--tile-fg-on-page)">Clair</div>
          </button>
        </div>
      </div>

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:14px">
        <div>
          <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🔊 Son</div>
          <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">Musiques et effets sonores de l'app.</div>
        </div>
        <button id="sound-toggle" role="switch" aria-checked="${!r}" style="flex-shrink:0;width:52px;height:30px;border-radius:999px;border:none;cursor:pointer;position:relative;background:${r?"var(--tile-border)":"#1A6B3C"};transition:background .2s">
          <span style="position:absolute;top:3px;left:${r?"3px":"25px"};width:24px;height:24px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></span>
        </button>
      </div>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:6px">
        Déconnexion
      </button>

    </div>
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(o=>{o.addEventListener("click",()=>{Qr(o.dataset.themeChoice),Ei(e,t)})}),e.querySelector("#sound-toggle").addEventListener("click",()=>{go(!$i()),Ei(e,t)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const nn=["ATT","MIL","DEF","GK"];function wn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Bi(i).some(([l,m])=>l===e.position&&m===t.position||l===t.position&&m===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=nn.indexOf(e._line||e.job),a=nn.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function _n(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!wn(a,s,t))continue;const d=Ot(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function Jt(e,t={},i){let n=0,r=0;e.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,m=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?l*2:l,r+=(d.boost||0)+m});const o=n+r,a=_n(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function Qt(e,t={},i){const n=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+c+(s.boost||0)+l},0),r=_n(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Gi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function kn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const d=t==="attack"?Pe(a,"ATT"):a._line==="GK"?Pe(a,"GK"):Pe(a,"DEF");return(t==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function xo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const yo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function bo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=$n(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function $n(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ho(e,t){!e||!t||await Promise.all([on(e,"win"),on(t,"loss")])}async function on(e,t){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=yo[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,d=r.player.note_max??10,c=$n(r.player),l=r.current_note??c,m=Math.min(d,Math.max(s,l+a));return v.from("cards").update({current_note:m}).eq("id",r.id)}))}const vo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},hi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ii=["GK","DEF","MIL","ATT"],wo=["Tous","GK","DEF","MIL","ATT"],_o={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function rn(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function ko(e){return e.length?e.reduce((t,i)=>rn(i)>rn(t)?i:t,e[0]):e[0]}function $o(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Eo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function To(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function vi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function wi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Se(r,{width:140})}
  </div>`}function an(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Se(e,{width:140})}
  </div>`}async function Lo(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(C=>C.card_type==="player"&&C.player),l=(s||[]).filter(C=>C.card_type==="game_changer"),m=(s||[]).filter(C=>C.card_type==="formation"),y=(s||[]).filter(C=>C.card_type==="stadium"),{data:g}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(C=>{x[C.name]=C});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(C=>{u[C.id]=C}),y.forEach(C=>{C.stadium_def&&(u[C.stadium_id]=C.stadium_def)});const b=Object.keys(qi),w=Object.keys(Ce),h={};c.forEach(C=>{const F=C.player.id;h[F]=(h[F]||0)+1}),new Set(Object.keys(h).map(C=>String(C)));const $=new Set(m.map(C=>C.formation)),f=new Set(l.map(C=>C.gc_type));let I="player",_="Tous",M="",G=!1;function re(){return[...c].sort((C,F)=>{const Y=ii.indexOf(C.player.job),te=ii.indexOf(F.player.job);return Y!==te?Y-te:(C.player.surname_real||"").localeCompare(F.player.surname_real||"")})}function ie(){return[...d||[]].sort((C,F)=>{const Y=ii.indexOf(C.job),te=ii.indexOf(F.job);return Y!==te?Y-te:(C.surname_real||"").localeCompare(F.surname_real||"")})}function Q(){return re().filter(C=>{const F=C.player,Y=_==="Tous"||F.job===_,te=!M||`${F.firstname} ${F.surname_real}`.toLowerCase().includes(M);return Y&&te})}function j(){return ie().filter(C=>{const F=_==="Tous"||C.job===_,Y=!M||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(M);return F&&Y})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="player"?"var(--green)":"transparent"};
        color:${I==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="formation"?"var(--green)":"transparent"};
        color:${I==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="gc"?"var(--green)":"transparent"};
        color:${I==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="stadium"?"#E87722":"transparent"};
        color:${I==="stadium"?"#E87722":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function L(){const C=document.getElementById("col-filters");C&&(I==="player"?(C.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${M}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${wo.map(F=>`
            <button class="filter-btn" data-job="${F}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${F===_?"var(--green)":"var(--tile-border)"};
                background:${F===_?"var(--green)":"#fff"};
                color:${F===_?"#fff":"var(--tile-fg-dim)"}">
              ${F}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${G?"var(--yellow)":"var(--tile-border)"};
              background:${G?"var(--yellow)":"#fff"};
              color:${G?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${G?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",F=>{M=F.target.value.toLowerCase(),V()}),e.querySelectorAll(".filter-btn").forEach(F=>{F.addEventListener("click",()=>{_=F.dataset.job,L(),V()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{G=!G,L(),V()})):(C.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${G?"var(--yellow)":"var(--tile-border)"};
              background:${G?"var(--yellow)":"#fff"};
              color:${G?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${G?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{G=!G,L(),V()})))}function V(){const C=document.getElementById("col-grid");C&&(I==="player"?pe(C):I==="formation"?R(C):I==="stadium"?O(C):K(C))}function ne(C,F,Y,te,N){const B=document.getElementById("col-grid"),H=document.getElementById("col-big");if(!B||!H)return;var ce=0;function ke(){const _e=window.innerWidth>=768,he=document.getElementById("col-big"),Ee=document.getElementById("col-grid");_e&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),_e&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),H.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+F(C[ce])+"</div>";var Te=H.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){te(C[ce])}),requestAnimationFrame(function(){var ve=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ve||!H)){var ze=H.clientHeight-8,De=H.clientWidth-24,je=ve.offsetHeight,Ge=ve.offsetWidth;if(je>0&&Ge>0&&ze>40){var tt=_e?2.2:1.6,Oe=Math.min(ze/je,De/Ge,tt);ve.style.transform="scale("+Oe.toFixed(3)+")",ve.style.transformOrigin="top center"}}}),B.innerHTML=C.map(function(ve,ze){var De=ze===ce,je="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(De?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+ze+'" style="'+je+'">'+Y(ve,De)+"</div>"}).join(""),B.querySelectorAll(".col-mini-item").forEach(function(ve){ve.addEventListener("click",function(){ce=Number(ve.dataset.idx),ke(),ve.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ke()}function ue(C){var F=window.innerWidth>=768?.76:.54,Y;if(!C||C._fake){var te=C?C.player:null;if(!te)return"";Y=an(te)}else Y=wi(C,"");return'<div style="display:inline-block;zoom:'+F+';pointer-events:none;line-height:0">'+Y+"</div>"}function ge(C,F,Y){F=F||100,Y=Y||140;var te=ti[C]||{},N={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},B=Math.max(3,Math.round(F*.06)),H=Object.entries(te).map(function(ke){var _e=ke[0],he=ke[1],Ee=_e.replace(/\d+$/,""),Te=N[Ee]||"#888",ve=Math.round(he.x*F),ze=Math.round(he.y*Y);return'<circle cx="'+ve+'" cy="'+ze+'" r="'+B+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ce=Math.max(1,Math.round(F/50));return'<svg viewBox="0 0 '+F+" "+Y+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+F+'" height="'+Y+'" fill="#1A6B3C"/><rect x="'+Math.round(F*.2)+'" y="'+Math.round(Y*.02)+'" width="'+Math.round(F*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ce+'"/><line x1="0" y1="'+Math.round(Y*.5)+'" x2="'+F+'" y2="'+Math.round(Y*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ce+'"/><ellipse cx="'+Math.round(F*.5)+'" cy="'+Math.round(Y*.5)+'" rx="'+Math.round(F*.18)+'" ry="'+Math.round(Y*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ce+'"/><rect x="'+Math.round(F*.2)+'" y="'+Math.round(Y*.82)+'" width="'+Math.round(F*.6)+'" height="'+Math.round(Y*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ce+'"/>'+H+"</svg>"}function A(C,F,Y){var te=Y>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+Y+"</div>":"",N=F?'data-form-id="'+F.id+'"':"",B=C.length>7?14:C.length>5?16:19,H=!!F;return"<div "+N+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(H?"#2a7a40":"#bbb")+";background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(H?"":"filter:grayscale(1);opacity:0.5")+'">'+te+'<div style="padding:8px 6px 6px;background:var(--tile-bg);text-align:center;border-bottom:3px solid '+(H?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+B+"px;font-weight:900;color:"+(H?"#1A6B3C":"#aaa")+';line-height:1">'+C+'</div></div><div style="flex:1;overflow:hidden;background:'+(H?"#1A6B3C":"#ccc")+'">'+ge(C,140,220)+"</div></div>"}function W(C,F){var Y=window.innerWidth>=768?.76:.54,te=140,N=305,B=Math.round(N*.22),H=N-B,ce=C.length>7?10:13,ke=ge(C,te,H),_e=F?"1.5px solid #2a7a40":"1px solid #ddd",he=F?"":"filter:grayscale(1);opacity:0.45;",Ee=F?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+Y+';line-height:0;pointer-events:none"><div style="width:'+te+"px;height:"+N+"px;border-radius:6px;border:"+_e+";background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+B+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ce+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(te-4)+'px">'+C+'</span></div><div style="height:'+H+'px;overflow:hidden;flex-shrink:0">'+ke+"</div></div></div>"}function pe(C){if(G){const F=j();if(!F.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const Y=F.map(te=>c.find(N=>N.player.id===te.id)||{_fake:!0,player:te,id:"fake-"+te.id});ne(Y,te=>te._fake?an(te.player):wi(te,""),te=>te._fake?ue({player:te.player,id:"x",_fake:!0}):ue(te),te=>{te._fake||sn(te,c,h,t)})}else{const F=Q();if(!F.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const Y={};F.forEach(N=>{const B=N.player.id;Y[B]||(Y[B]=[]),Y[B].push(N)});const te=Object.values(Y).map(N=>ko(N));ne(te,N=>{const B=h[N.player.id]||1,H=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",ke=c.filter(_e=>_e.player.id===N.player.id&&_e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return wi(N,H+ke)},N=>ue(N),N=>sn(N,c,h,t))}}function R(C){const F=G?b:[...$];if(!F.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const Y=F.map(te=>({formation:te,card:m.find(N=>N.formation===te)||null,owned:$.has(te)}));ne(Y,({formation:te,card:N,owned:B})=>A(te,B?N:null,B?m.filter(H=>H.formation===te).length:0),({formation:te,owned:N})=>W(te,N),({card:te,owned:N})=>{N&&te&&Io(te,m,t,o)})}function K(C){const F=Object.keys(x),Y=G?F.length?F:w:[...f];if(!Y.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const te=Y.map(N=>({type:N,gc:Ce[N]||{icon:"⚡",desc:""},def:x[N]||null,owned:f.has(N),card:l.find(B=>B.gc_type===N)||null}));ne(te,({type:N,gc:B,def:H,owned:ce,card:ke})=>{var tt;const _e=ce?l.filter(Oe=>Oe.gc_type===N).length:0,he=_e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${_e}</div>`:"",Ee=(H==null?void 0:H.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ve={purple:"#b06ce0",light_blue:"#00d4ef"},ze=Te[H==null?void 0:H.color]||Te.purple,De=ve[H==null?void 0:H.color]||ve.purple,je=(H==null?void 0:H.effect)||B.desc||"",Ge=H!=null&&H.image_url?`/icons/${H.image_url}`:((tt=H==null?void 0:H.club)==null?void 0:tt.logo_url)||(H!=null&&H.country_code?`https://flagsapi.com/${H.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return ce&&ke?`<div data-gc-id="${ke.id}" data-gc-type="${N}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${De};background:${ze};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${De}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${N.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${N}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ge?`<img src="${Ge}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${B.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${je.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${N}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${B.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:N,gc:B,def:H,owned:ce})=>{const ke=window.innerWidth>=768?.76:.54,_e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=_e[H==null?void 0:H.color]||_e.purple,Te=he[H==null?void 0:H.color]||he.purple,ve=H!=null&&H.image_url?`/icons/${H.image_url}`:null;return ce?`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${N}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ve?`<img src="${ve}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${B.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((H==null?void 0:H.effect)||B.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${ke};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${B.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${N}</span></div></div>`},({type:N,owned:B,def:H})=>{B&&zo(N,H,o)})}function O(C){const F="#E87722",Y="/";if(!y.length){C.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const te={};y.forEach(B=>{const H=B.stadium_id||"?";(te[H]=te[H]||[]).push(B)});const N=Object.entries(te).map(([B,H])=>({sid:B,def:u[B]||null,count:H.length,card:H[0]}));ne(N,({def:B,count:H})=>{var Te,ve;const ce=(B==null?void 0:B.name)||"?",ke=((Te=B==null?void 0:B.club)==null?void 0:Te.encoded_name)||(B==null?void 0:B.country_code)||"—",_e=B!=null&&B.image_url?`${Y}icons/${B.image_url}`:((ve=B==null?void 0:B.club)==null?void 0:ve.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),he=_e?`<img src="${_e}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ee=H>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${H}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${F},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${F}66">
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
        </div>`},({def:B,count:H})=>{var Te,ve;const ce=window.innerWidth>=768?.76:.54,ke=(B==null?void 0:B.name)||"?",_e=((Te=B==null?void 0:B.club)==null?void 0:Te.encoded_name)||(B==null?void 0:B.country_code)||"—",he=B!=null&&B.image_url?`${Y}icons/${B.image_url}`:((ve=B==null?void 0:B.club)==null?void 0:ve.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ee=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ce};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${F},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(C=>{C.addEventListener("click",()=>{I=C.dataset.tab,_="Tous",M="",G=!1,e.querySelectorAll(".col-tab-btn").forEach(F=>{const Y=F.dataset.tab===I;F.style.borderBottomColor=Y?"var(--green)":"transparent",F.style.color=Y?"var(--green)":"var(--tile-fg-dim)"}),L(),V()})}),L(),V()}function zo(e,t,i){const n=Ce[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,d=a[t==null?void 0:t.color]||a.purple,c=(t==null?void 0:t.name)||e,l=(t==null?void 0:t.effect)||n.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${d};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${r?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${c}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${l}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ni=1e3;function Io(e,t,i,n){var x,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const b=ti[c]||{},w=qi[c]||[],h=290,$=360,f=20;function I(M){const G=b[M];return G?{x:G.x*h,y:G.y*$}:null}let _=`<svg width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[M,G]of w){const re=I(M),ie=I(G);!re||!ie||(_+=`<line x1="${re.x}" y1="${re.y}" x2="${ie.x}" y2="${ie.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const M of Object.keys(b)){const G=I(M);if(!G)continue;const re=M.replace(/\d+/,""),ie=l[re]||"#555";_+=`<circle cx="${G.x}" cy="${G.y}" r="${f}" fill="${ie}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,_+=`<text x="${G.x}" y="${G.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return _+="</svg>",_}const y=t.filter(b=>b.formation===c);y.length;const g=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${m()}
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
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ni}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ni.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=y.find(h=>!h.is_for_sale)||y[0];if(!b){o("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",b.id),await v.from("transfer_history").delete().eq("card_id",b.id);const{error:w}=await v.from("cards").delete().eq("id",b.id);if(w){o(w.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+ni}).eq("id",r.profile.id),await d(),o(`+${ni.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function sn(e,t,i,n){var ue,ge,A,W,pe;const{state:r,toast:o,openModal:a,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,m=t.filter(R=>R.player.id===l.id),y=m.length,g=e.evolution_bonus||0,x=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?g:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?g:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?g:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?g:0)),p=l.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1);((ue=u==null?void 0:u[0])==null?void 0:ue.price)??_o[p];const b=l.rarity!=="legende";To(l);const w=((l.rarity==="pepite"||l.rarity==="papyte")&&e.current_note!=null?e.current_note:vi(l,l.job))+g,h=l.rarity==="pepite"||l.rarity==="papyte",$=l.job2?(h?bo(e,$o(l.job2)):vi(l,l.job2))+(vi(l,l.job2)>0?g:0):null;hi[l.job],l.job2&&hi[l.job2];const f=vo[l.rarity]||"#ccc";Eo[l.country_code]||l.country_code;const I=e.evolution_bonus||0,M=w+I,G=$||0,re=G>0?G+I:0,ie=m.map(R=>R.id);let Q={};if(ie.length){const{data:R}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(R||[]).forEach(K=>{Q[K.card_id]||(Q[K.card_id]=[]),Q[K.card_id].push(K)})}const j=R=>{const K=R.transferred_at?new Date(R.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",O=R.source==="booster"?"Booster":R.price?R.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${R.club_name}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">(${R.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${R.source==="booster"?"var(--tile-fg-dim)":"var(--yellow)"}">${O}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">${K}</div>
      </div>
    </div>`},L=ie.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${y>1?`(${y})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((R,K)=>{const O=Q[R.id]||[],C=R.is_for_sale,F=O.length?O[O.length-1]:null,te=(l.rarity==="pepite"||l.rarity==="papyte")&&R.current_note!=null?` (☆${R.current_note})`:"";return`
            <div data-card-id="${R.id}" data-card-idx="${K}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${C?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${R.id}" ${C?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${K+1}${te}${C?" 🏷️ En vente":""}</div>
                  ${F?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${F.club_name} · ${F.source==="booster"?"Booster":F.price?F.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${K}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${O.length?`${O.length} club${O.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${K}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${O.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${M}${l.job2&&G>0?` / ${re}`:""}`:`Note actuelle : ${M}${l.job2&&G>0?` / ${re}`:""}`}
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
              value="${l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";a(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Se({...l,_evolution_bonus:g},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${f}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:6px;background:${f}18;border-left:3px solid ${f};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${f};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${l.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(l.rarity==="pepite"?l.note_min:l.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${l.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${l.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${l.job}${l.job2?" / "+l.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([R,K])=>{const O=hi[R],C=R==="GK"?"#fff":O,F=R===l.job||R===l.job2,Y=(Number(K)||0)+(F&&I>0?I:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${O};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${C};font-family:Arial Black,Arial;line-height:1">${Y}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${C}">${R}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${y}</div>
        </div>
      </div>
    </div>
    ${L}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ge=document.getElementById("close-detail"))==null||ge.addEventListener("click",s);let V=new Set;const ne=()=>{const R=V.size,K=document.getElementById("sell-action-panel");if(!K)return;K.style.display=R>0?"block":"none",document.getElementById("sell-selected-count").textContent=R;const O=document.getElementById("evolve-btn");O&&(O.textContent=`⬆️ Évoluer ${R>1?"(+"+R+")":""}`)};document.querySelectorAll(".expl-check").forEach(R=>{R.addEventListener("change",()=>{const K=R.dataset.id;R.checked?V.add(K):V.delete(K);const O=R.closest(".exemplaire-row");O&&(O.style.borderColor=R.checked?"#1A6B3C":"#eee"),ne()})}),document.querySelectorAll(".exemplaire-row").forEach(R=>{R.addEventListener("click",K=>{if(K.target.closest("button")||K.target.tagName==="INPUT")return;const O=R.querySelector(".expl-check");O&&!O.disabled&&(O.checked=!O.checked,O.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(R=>{R.addEventListener("click",K=>{K.stopPropagation();const O=document.querySelector(`.expl-hist[data-hist="${R.dataset.idx}"]`);O&&(O.style.display=O.style.display==="none"?"flex":"none")})}),(A=document.getElementById("evolve-btn"))==null||A.addEventListener("click",async()=>{if(y<=1)return;const R=[...V];if(!R.length)return;if(V.has(e.id)){const N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",N.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(N),N.querySelector("#err-close").addEventListener("click",()=>N.remove()),N.addEventListener("click",B=>{B.target===N&&N.remove()});return}const K=R.filter(N=>N!==e.id),O=l.rarity==="legende"?2:1;if((K.length||1)*O,!(!K.length&&R.length===1&&R[0]===e.id)){if(!K.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(N=>{const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",B.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${K.length}</strong> copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}<br>
            📈 Note : <strong>${w+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${w+(e.evolution_bonus||0)+K.length*O}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+K.length*O}</strong>`:""}
            ${l.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${O} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(B),B.querySelector("#sac-cancel").addEventListener("click",()=>{B.remove(),N(!1)}),B.querySelector("#sac-ok").addEventListener("click",()=>{B.remove(),N(!0)}),B.addEventListener("click",H=>{H.target===B&&(B.remove(),N(!1))})}))return;if(K.length){await v.from("market_listings").delete().in("card_id",K),await v.from("deck_cards").delete().in("card_id",K),await v.from("transfer_history").delete().in("card_id",K),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",K);const{error:N}=await v.from("cards").delete().in("id",K);if(N){o("Erreur suppression : "+N.message,"error");return}}const F=(e.evolution_bonus||0)+K.length*O,{error:Y}=await v.from("cards").update({evolution_bonus:F}).eq("id",e.id);if(Y){o("Erreur évolution : "+Y.message,"error");return}const te=w+F;o(`⬆️ ${l.firstname} ${l.surname_real} : note ${w+e.evolution_bonus||w} → ${te}${K.length?` · ${K.length} copie${K.length>1?"s":""} sacrifiée${K.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(W=document.getElementById("market-sell-btn"))==null||W.addEventListener("click",async()=>{var Y;const R=[...V];if(!R.length){o("Sélectionne au moins un exemplaire","warning");return}const K=parseInt((Y=document.getElementById("sell-market-price"))==null?void 0:Y.value);if(!K||K<1){o("Prix invalide","error");return}const{error:O}=await v.from("cards").update({is_for_sale:!0,sale_price:K}).in("id",R);if(O){o(O.message,"error");return}const C=R.map(te=>({seller_id:r.profile.id,card_id:te,price:K,status:"active"})),{error:F}=await v.from("market_listings").insert(C);F&&console.warn("[Market] insert listings:",F.message),o(`${R.length} carte${R.length>1?"s":""} mise${R.length>1?"s":""} en vente à ${K.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(pe=document.getElementById("cancel-sell-btn"))==null||pe.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}function dn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function Ao(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const ai={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ti(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
          </div>`).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await dn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await v.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){r(d.message,"error");return}r("Deck créé !","success"),ln(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ln(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await dn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await v.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){r(d.message,"error");return}r("Deck renommé !","success"),Ti(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await Ao(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ti(e,t)})})}async function ln(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("*").eq("id",e).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),l=(s||[]).filter(b=>b.card_type==="stadium"),m=[...new Set(l.map(b=>b.stadium_id).filter(Boolean))];let y={};if(l.forEach(b=>{b.stadium_def&&b.stadium_id&&(y[b.stadium_id]=b.stadium_def)}),m.length&&Object.keys(y).length<m.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(b||[]).forEach(w=>{y[w.id]=w})}const g=c.map(b=>b.formation).filter(Boolean),{data:x}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";g.length>0&&!g.includes(p)&&(p=g[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:y,availableFormations:g};(x||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),vt(t,u,i)}function vt(e,t,i){var x,p;const{navigate:n}=i;ai[t.formation];const r=cn(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(ai),s=(x=t.stadiumCards)==null?void 0:x.find(u=>u.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
                ${Se({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var w;const u=t.stadDefMap[s.stadium_id],b=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
                  ${Se({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var w;const u=t.stadDefMap[s.stadium_id],b=((w=u==null?void 0:u.club)==null?void 0:w.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
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
  </div>`;const l=window.innerWidth>=900,m=e.querySelector(".deck-pc-layout"),y=e.querySelector(".deck-mobile-layout");m&&(m.style.display=l?"block":"none"),y&&(y.style.display=l?"none":"block"),So(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const g=()=>{const{openModal:u,closeModal:b}=i,w=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",w),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const $=cn(t.formation),f={};$.forEach(I=>{t.slots[I]&&(f[I]=t.slots[I])}),t.slots=f,b(),vt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",g)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Mo(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>Bo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),vt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Co(t,e,i)))}function So(e,t,i,n){var h,$;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(h=t.stadiumCards)==null?void 0:h.find(f=>f.id===t.stadiumCardId),s=a&&(($=t.stadDefMap)==null?void 0:$[a.stadium_id])||null,d=ti[t.formation]||{},c=Bi(t.formation)||[],l={};for(const f of i){const I=t.slots[f],_=I?t.playerCards.find(M=>M.id===I):null;_!=null&&_.player?l[f]={..._.player,_evolution_bonus:_.evolution_bonus||0,face:_.player.face||null}:l[f]=null}const m=window.innerWidth>=900,y=m?window.innerWidth-280:window.innerWidth-20,g=m?Math.min(y,860):y,x=Math.round(m?g*.82:g*.85),p=m?84:44;let u="";for(const[f,I]of c){const _=d[f],M=d[I];if(!_||!M)continue;const G=_.x*g,re=Math.round(.03*x+_.y*.85*x),ie=M.x*g,Q=Math.round(.03*x+M.y*.85*x),j=l[f],L=l[I],V=Ot(j,L);V==="#ff3333"||V==="#cc2222"?u+=`<line x1="${G.toFixed(1)}" y1="${re.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${V}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${G.toFixed(1)}" y1="${re.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${V}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${G.toFixed(1)}" y1="${re.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${Q.toFixed(1)}" stroke="${V}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const w=Math.round(p*657/507);for(const f of i){const I=d[f];if(!I)continue;const _=l[f],M=I.x*g;I.y*x;const G=Math.round(.03*x+I.y*(.85*x)),re=Math.round(M-p/2),ie=Math.round(G-w/2);if(_){const Q=f.replace(/\d+/,""),j=s&&(s.club_id&&String(_.club_id)===String(s.club_id)||s.country_code&&_.country_code===s.country_code),L=Se({..._,_evolution_bonus:_._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:Q});b+=`<div style="position:absolute;left:${re}px;top:${ie}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${f}">
        <div style="position:relative">${j?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${L}</div>
      </div>`}else{const Q=f.replace(/\d+/,"");b+=`<div style="position:absolute;left:${re}px;top:${ie}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${f}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${Q}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${g}px;height:${x}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${x}">${u}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(f=>{f.addEventListener("click",()=>jo(f.dataset.pos,t,e,n))})}function Mo(e,t,i){var a;const{openModal:n,closeModal:r}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,w;const d=e.stadDefMap[s.stadium_id],c=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||null,l=d!=null&&d.image_url?"/icons/"+d.image_url:null,m=e.stadiumCardId===s.id,y=d!=null&&d.country_code&&!c?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,g=(d==null?void 0:d.name)||"Stade",x=g.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=x?x[1].trim():g.slice(0,8),u=((w=x==null?void 0:x[2])==null?void 0:w.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${m?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:y?`<img src="${y}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${m?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${m?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),vt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),vt(t,e,i)})})}function jo(e,t,i,n){var x,p,u,b,w;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(x=t.stadiumCards)==null?void 0:x.find(h=>h.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(h=>h.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const m=new Set;Object.entries(t.slots).forEach(([h,$])=>{var I;if(h===e||!$)return;const f=t.playerCards.find(_=>_.id===$);(I=f==null?void 0:f.player)!=null&&I.id&&m.add(f.player.id)}),t.subs.forEach(h=>{var f;const $=t.playerCards.find(I=>I.id===h);(f=$==null?void 0:$.player)!=null&&f.id&&m.add($.player.id)});const y=new Set,g=t.playerCards.filter(h=>{const $=h.player;return!($.job===a||$.job2===a)||m.has($.id)||y.has($.id)?!1:(y.add($.id),!0)});g.sort((h,$)=>{const f=h.evolution_bonus||0,I=$.evolution_bonus||0,_=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?f:0);return(a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a)+(a===$.player.job||a===$.player.job2?I:0)-_}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Se($,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],o(),vt(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),vt(i,t,n)})})}function Co(e,t,i){var l,m,y;const{openModal:n,closeModal:r}=i,o=(l=e.stadiumCards)==null?void 0:l.find(g=>g.id===e.stadiumCardId),a=o&&((m=e.stadDefMap)==null?void 0:m[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(g=>{var u;const x=e.slots[g];if(!x)return;const p=e.playerCards.find(b=>b.id===x);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(g=>{var p;const x=e.playerCards.find(u=>u.id===g);(p=x==null?void 0:x.player)!=null&&p.id&&s.add(x.player.id)});const d=new Set,c=e.playerCards.filter(g=>{var x,p,u;return s.has((x=g.player)==null?void 0:x.id)||d.has((p=g.player)==null?void 0:p.id)?!1:(d.add((u=g.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Se(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{e.subs.push(g.dataset.cardId),r(),vt(t,e,i)})})}async function Bo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(d=>d.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await v.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await v.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await v.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function cn(e){const t=ai[e]||ai["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function En(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function qo(e,t){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:e,booster_id:t})}function Do(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Tn=()=>Object.keys(ti),Fo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Li={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Po(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Se({...t,_evolution_bonus:i},{width:140})}function Ln(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function Go(e,{state:t,navigate:i,toast:n}){var m,y,g;const r=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await En((y=t.user)==null?void 0:y.id)).map(Ln)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}o.length||(o=Fo.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(x=>x.data||[]),s=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),d=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),c=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),l={};for(const x of o){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const p=[...new Set((x.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(b==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:w}=await mn(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-Bb-Ce4un.js").then($=>$.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!d.has(h))){u=!0;break}}else{u=!0;break}u||(l[x.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(x=>{const p=x.cost===0||r>=x.cost,u=l[x.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${x.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${x.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${x.img}" alt="${x.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${x.name}</div>
            <div class="desc">${x.sub}</div>
            <div class="cost">${x.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${u?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--tile-fg-dim);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const p=o.find(u=>u.id===x.dataset.booster);if(p){x.style.opacity="0.5",x.style.pointerEvents="none";try{await Ro(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",p=>{p.stopPropagation();const u=o.find(b=>b.id===x.dataset.boosterId);Uo(u)})})}async function Ro(e,{state:t,toast:i,navigate:n,container:r}){var m,y;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await Vo();const{data:o}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set((o||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let d=[],c=null;try{if((m=e.rates)!=null&&m.length)d=await zi(t.profile,e);else{const g=e.type||"player";g==="player"?d=await zn(t.profile,e.cardCount,e.cost):g==="game_changer"?d=await In(t.profile,e.cardCount,e.cost):g==="formation"?d=await An(t.profile,e.cost):d=await zi(t.profile,e)}}catch(g){c=g.message||String(g),console.error("[Booster] Erreur:",g)}if(d!=null&&d.length&&e._boosterId&&await qo(t.user.id,e._boosterId),!(d!=null&&d.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}d.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=s.has(g.formation))});const{data:l}=await v.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),Sn(d,e,n)}function No(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function gt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Oo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>gt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>gt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&gt(n)>=6),i.length||(i=e.filter(n=>gt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&gt(n)>=1&&gt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function zi(e,t){if(t.cost>0){const{error:y}=await v.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(y)throw y}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:y}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=y||[]}else n=r||[];const a=new Set(n.filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set(n.filter(y=>y.card_type==="formation").map(y=>y.formation)),d=new Set(n.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),c=new Set(n.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),l=new Set,m=[];for(let y=0;y<(t.cardCount||5);y++){const g=Do(t.rates);if(g){if(g.card_type==="player"){const x=_=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[_]||_,p=g.rarity?x(g.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let w=b||[];if((g.note_min||g.note_max)&&(w=w.filter(_=>{const M=Math.max(Number(_.note_g)||0,Number(_.note_d)||0,Number(_.note_m)||0,Number(_.note_a)||0);return(!g.note_min||M>=g.note_min)&&(!g.note_max||M<=g.note_max)})),w.length||(g.note_min||g.note_max?(w=b||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):w=b||[]),!w.length)continue;let h=w.filter(_=>!l.has(_.id));if(i)h.length||(h=w);else if(h=h.filter(_=>!a.has(_.id)),!h.length)continue;const $=h[Math.floor(Math.random()*h.length)];l.add($.id);const f=a.has($.id),{data:I}=await v.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();I&&(m.push({...I,player:$,isDuplicate:f}),v.rpc("record_transfer",{p_card_id:I.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await v.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter($=>!d.has($.name));if(!i&&!u.length)continue;const w=u[Math.floor(Math.random()*u.length)].name,{data:h}=await v.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:w}).select().single();h&&m.push(h)}else if(g.card_type==="formation"){const x=Tn(),p=i?x:x.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:w}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&m.push({...w[0],isDuplicate:b})}else if(g.card_type==="stadium"){const{data:x,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?x:x.filter($=>!c.has($.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&m.push({...w,rarity:"normal",_stadiumDef:b})}}}return m}async function zn(e,t,i){if(i>0){const{error:c}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&a?r:c===0?o:n,m=No(),y=Oo(l,m);y&&s.push(y)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await v.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{v.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function In(e,t,i){const{error:n}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(Li).map(l=>({name:l,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const l=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:l.name,gc_definition_id:l.id||null}}),{data:s,error:d}=await v.from("cards").insert(a).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(s||[]).map(l=>{const m=r==null?void 0:r.find(y=>y.name===l.gc_type||y.id===l.gc_definition_id);return{...l,_gcDef:m||null}})}async function An(e,t){const{error:i}=await v.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await v.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(l=>l.formation)),o=Tn(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:d,error:c}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function Sn(e,t,i,n=null){var Q,j;if(!e||e.length===0){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",L.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(L),(Q=L.querySelector("#anim-close-err"))==null||Q.addEventListener("click",()=>L.remove());return}e=[...e].sort((L,V)=>{const ne=L.player?gt(L.player):-1;return(V.player?gt(V.player):-1)-ne});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=L=>L.touches&&L.touches[0]?L.touches[0].clientX:L.clientX;function l(L){o||(d=!0,s.style.opacity="1",m(L))}function m(L){if(!d||o)return;const V=a.getBoundingClientRect(),ne=c(L)-V.left,ue=Math.max(0,Math.min(1,ne/V.width));s.style.width=ue*V.width+"px",ue>=.82&&g()}function y(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function g(){var V;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(V=document.getElementById("cut-flash"))==null||V.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const L=document.getElementById("cut-hint");L&&(L.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",m),window.addEventListener("pointerup",y),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",y);let x=0,p=!1;const u=new Set;function b(L){x=L,document.getElementById("reveal-phase").style.display="flex",w(),h(L,0),M()}function w(){const L=document.getElementById("card-dots");L&&(L.innerHTML=e.map((V,ne)=>`<div class="card-dot" data-i="${ne}" style="width:8px;height:8px;border-radius:50%;background:${ne===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),L.querySelectorAll(".card-dot").forEach(V=>V.addEventListener("click",()=>f(parseInt(V.dataset.i)))))}function h(L,V){var O,C;const ne=e[L],ue=document.getElementById("card-counter"),ge=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${L+1} / ${e.length}`);const A=document.getElementById("reveal-btns");A&&(A.style.display=L===e.length-1?"flex":"none");const W=ne.card_type==="player"&&((O=ne.player)==null?void 0:O.rarity)==="legende",pe=!u.has(L);u.add(L);let R=0;if(ne.card_type==="player"&&ne.player){const F=ne.player,Y=F.job||"ATT";R=Number(Y==="GK"?F.note_g:Y==="DEF"?F.note_d:Y==="MIL"?F.note_m:F.note_a)||0}const K=F=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${W?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Ho(ne)}</div>
          ${ne.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const Y=document.getElementById("current-card-wrap");V!==0?(Y.style.transition="none",Y.style.transform=`translateX(${V>0?100:-100}%)`,requestAnimationFrame(()=>{Y.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Y.style.transform="translateX(0)"})):Y.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),F||W?re():ie(),w()};pe&&(((C=ne.player)==null?void 0:C.rarity)==="legende"||R>=8)&&ne.card_type==="player"&&ne.player?$(ne,()=>K(!0)):K(!1)}function $(L,V){var _e;p=!0;const ne=L.player,ue=`https://flagsapi.com/${ne.country_code}/flat/64.png`,ge=(_e=ne.clubs)==null?void 0:_e.logo_url,A=ne.face?"/"+ne.face.replace(/^public\//,"").replace(/^\//,""):null,W=ne.job||"ATT",pe=Number(W==="GK"?ne.note_g:W==="DEF"?ne.note_d:W==="MIL"?ne.note_m:ne.note_a)||0,R=L.evolution_bonus||0,K=pe+R,O=ne.rarity==="legende",C=K>=18,F=document.getElementById("walkout-overlay"),Y=document.getElementById("walkout-stage");if(!F||!Y){p=!1,V();return}let te=null;O&&(te=mo("/sounds/Legendary.mp3",.8)),F.style.display="flex";const N=()=>{const he=Y.firstElementChild;he&&(he.classList.remove("wo-in"),he.classList.add("wo-out"))},B=1800,H=400;Y.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(N,B),setTimeout(()=>{var he;Y.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((he=ne.clubs)==null?void 0:he.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},B+H),setTimeout(N,B*2+H),setTimeout(()=>{Y.innerHTML=A?`<img class="wo-in" src="${A}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(B+H)*2),setTimeout(N,(B+H)*2+B);const ke=C?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[W]||"#fff";setTimeout(()=>{Y.innerHTML=`<div class="wo-in" style="
        font-size:${C?"120px":"90px"};font-weight:900;color:${ke};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${ke}, 0 0 60px ${ke};
        ${C?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${K}
      </div>`,C&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(B+H)*3),setTimeout(N,(B+H)*3+B),setTimeout(()=>{F.style.display="none",Y.innerHTML="",p=!1,te&&!O&&te.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),V()},(B+H)*4)}function f(L){if(p||L<0||L>=e.length||L===x)return;const V=L>x?1:-1;x=L,h(L,V)}function I(){f(x+1)}function _(){f(x-1)}function M(){const L=document.getElementById("card-viewport");if(!L||L._swipeBound)return;L._swipeBound=!0;let V=0,ne=0,ue=0,ge=!1;const A=O=>O.touches?O.touches[0].clientX:O.clientX,W=O=>O.touches?O.touches[0].clientY:O.clientY,pe=O=>{ge=!0,V=A(O),ne=W(O),ue=0},R=O=>{if(!ge)return;ue=A(O)-V;const C=W(O)-ne;if(Math.abs(ue)<Math.abs(C))return;const F=document.getElementById("current-card-wrap");F&&(F.style.transition="none",F.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},K=()=>{if(!ge)return;ge=!1;const O=document.getElementById("current-card-wrap"),C=55;ue<=-C&&x<e.length-1?I():ue>=C&&x>0?_():O&&(O.style.transition="transform .2s ease",O.style.transform="translateX(0)")};L.addEventListener("pointerdown",pe),L.addEventListener("pointermove",R),L.addEventListener("pointerup",K),L.addEventListener("pointercancel",K),L.addEventListener("touchstart",pe,{passive:!0}),L.addEventListener("touchmove",R,{passive:!0}),L.addEventListener("touchend",K),L.addEventListener("click",O=>{if(Math.abs(ue)>8)return;const C=L.getBoundingClientRect();O.clientX-C.left>C.width/2?I():_()})}let G=null;function re(){const L=document.getElementById("fireworks-canvas");if(!L)return;L.width=window.innerWidth,L.height=window.innerHeight;const V=L.getContext("2d"),ne=[];function ue(){const A=Math.random()*L.width,W=Math.random()*L.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],R=pe[Math.floor(Math.random()*pe.length)];for(let K=0;K<60;K++){const O=Math.PI*2/60*K,C=2+Math.random()*5;ne.push({x:A,y:W,vx:Math.cos(O)*C,vy:Math.sin(O)*C,alpha:1,color:R,size:2+Math.random()*3})}}ue(),G=setInterval(ue,600);function ge(){if(document.getElementById("fireworks-canvas")){V.clearRect(0,0,L.width,L.height);for(let A=ne.length-1;A>=0;A--){const W=ne[A];if(W.x+=W.vx,W.y+=W.vy+.08,W.vy*=.98,W.alpha-=.018,W.alpha<=0){ne.splice(A,1);continue}V.globalAlpha=W.alpha,V.fillStyle=W.color,V.beginPath(),V.arc(W.x,W.y,W.size,0,Math.PI*2),V.fill()}V.globalAlpha=1,(G!==null||ne.length>0)&&requestAnimationFrame(ge)}}ge()}function ie(){G!==null&&(clearInterval(G),G=null);const L=document.getElementById("fireworks-canvas");L&&L.getContext("2d").clearRect(0,0,L.width,L.height)}if(n){const L=document.getElementById("reveal-btns");L&&(L.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{ie(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ie(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ie(),r.remove(),i("boosters")})}function Ho(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return Po(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,l=d[o==null?void 0:o.color]||d.purple,m=(o==null?void 0:o.name)||e.gc_type||"Game Changer",y=(o==null?void 0:o.effect)||((t=Li[e.gc_type])==null?void 0:t.desc)||"",g=o!=null&&o.image_url?`/icons/${o.image_url}`:null,x=((i=Li[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${l}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${m.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${x}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${y.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const o=e._stadiumDef,a=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",d=o!=null&&o.image_url?`/icons/${o.image_url}`:((r=o==null?void 0:o.club)==null?void 0:r.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${a.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${a}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${d?`<img src="${d}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function Uo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}Ko()}function Ko(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function Vo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Yo(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var y,g;const{data:o}=await v.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((y=t.profile)==null?void 0:y.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await En()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Ln(p))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const d=a.length;let c=0;e.innerHTML=`
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
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function m(){var w;if(c>=d||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:p}=await v.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(x.type==="formation")u=await An(t.profile,0);else if(x.type==="game_changer")u=await In(t.profile,x.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:x.count||s.cardCount||5};u=await zi(t.profile,h),x.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(f=>f.player&&f.player.job==="GK")||await Wo(t.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await zn(t.profile,x.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),c++,await l();const b=x.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Sn(u,b,i,()=>{m()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>m())}async function Wo(e,t){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await v.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Xo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function Zt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",r=e.face.replace(/^public\//,"").replace(/^\//,"");return n+r}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ii(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ei(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function si(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function mt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Mn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function di(e,t){const i=Gt[t]||Gt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),d=mt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let l=o.findIndex(m=>m.job===a);if(l===-1&&(l=o.findIndex(m=>m.job2===a)),l===-1&&(l=0),o[l]){const m={...o[l],_line:a};s.push(m),o.splice(l,1)}}const d=mt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}function st(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ui(e,t,i){const r=new Set,o=t.filter(l=>{const m=l.gc_type||l.id;return r.has(m)?!1:(r.add(m),!0)});let a=[];function s(l,m){const y=l._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},x={purple:"#9b59b6",light_blue:"#00bcd4"},p=g[y==null?void 0:y.color]||g.purple,u=x[y==null?void 0:y.color]||x.purple;return`<div class="gc-select-card" data-id="${l.id}"
      style="width:100px;border-radius:10px;border:3px solid ${m?"#FFD700":u};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${m?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${m?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((y==null?void 0:y.name)||l.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(y==null?void 0:y.name)||l.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${y!=null&&y.image_url?`<img src="/icons/${y.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((y==null?void 0:y.effect)||"").slice(0,50)}</span>
      </div>
      ${m?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(l)};function c(){var m,y,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const l=a.length>0;e.innerHTML=`
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
        ${o.map(x=>{const p=a.find(u=>u.gc_type===x.gc_type);return s(x,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${l?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${l?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${l?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${l?"pointer":"default"};box-shadow:${l?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(x=>{x.addEventListener("click",()=>{const p=x.dataset.id,u=o.find(w=>w.id===p);if(!u)return;const b=a.findIndex(w=>w.gc_type===u.gc_type);b>-1?a.splice(b,1):a.length<3&&a.push(u),c()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{l&&d(a)}),(y=e.querySelector("#gc-no-gc"))==null||y.addEventListener("click",()=>d([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function Jo(e,t){var r;const i=((r=t==null?void 0:t.state)==null?void 0:r.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function Qo(e,t,i){const{state:n,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){Tt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(y=>y.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(y=>{var g,x;return((g=y.card)==null?void 0:g.card_type)==="stadium"&&((x=y.card)==null?void 0:x.stadium_id)}).map(y=>y.card.stadium_id))],c={};if(d.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(y||[]).forEach(g=>{c[g.id]=g}),(s||[]).forEach(g=>{var x,p;((x=g.card)==null?void 0:x.card_type)==="stadium"&&((p=g.card)!=null&&p.stadium_id)&&(g.card._stadiumDef=c[g.card.stadium_id]||null)})}let l=0;function m(){var f,I,_,M,G,re,ie;const y=o[l],g=(s||[]).filter(Q=>Q.deck_id===y.id),x=g.filter(Q=>{var j;return Q.is_starter&&((j=Q.card)==null?void 0:j.player)}).map(Q=>Ii(Q.card,Q.position)),p=g.find(Q=>{var j;return((j=Q.card)==null?void 0:j.card_type)==="formation"}),u=y.formation||((f=p==null?void 0:p.card)==null?void 0:f.formation)||"4-4-2";let b=x.length>=11?di(x,u):null,w=((I=y.stadium_card)==null?void 0:I.stadium_def)||null;w&&b&&(b=ei(b,w));const h=x.length>=11;st(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Jo(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${y.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${x.length}/11${y.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${w?`
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
          <span style="font-size:12px;font-weight:700">${w.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((_=w.club)==null?void 0:_.encoded_name)||w.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${x.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((Q,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Q(){const j=e.querySelector(".deck-preview-wrap"),L=e.querySelector("#deck-swipe-zone");if(!j||!L||!b)return;const V=L.clientWidth>=900,ne=Math.max(200,L.clientHeight-(V?60:40)),ge=Math.max(200,L.clientWidth-16),A=V?Math.min(117,Math.max(52,Math.round(ge*.22))):Math.max(44,Math.round(ge*.168));if(ne<220||ge<220){requestAnimationFrame(Q);return}const W=V?null:Math.round(A*.55);j.innerHTML=Rt(b,u,null,[],ge,ne,[],W),j.style.cssText=`width:${ge}px;height:${ne}px;overflow:hidden;margin:${V?0:60}px auto 0`;const pe=j.querySelector("svg");pe&&(pe.style.cssText="display:block;width:100%;height:100%",pe.setAttribute("preserveAspectRatio",V?"xMidYMid meet":"none"))})),(M=document.getElementById("prev-deck"))==null||M.addEventListener("click",()=>{l>0&&(l--,m())}),(G=document.getElementById("next-deck"))==null||G.addEventListener("click",()=>{l<o.length-1&&(l++,m())}),(re=document.getElementById("validate-deck"))==null||re.addEventListener("click",()=>{if(!h)return;const Q=t.state.params||{};t.navigate("match",{...Q,matchMode:Q.matchMode||i,deckId:y.id})}),(ie=document.getElementById("cancel-deck-select"))==null||ie.addEventListener("click",()=>{et(e),r("home")});const $=document.getElementById("deck-swipe-zone");if($){let Q=0,j=0;$.addEventListener("touchstart",L=>{Q=L.touches[0].clientX,j=L.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",L=>{const V=L.changedTouches[0].clientX-Q,ne=L.changedTouches[0].clientY-j;Math.abs(V)<40||Math.abs(V)<Math.abs(ne)||(V<0&&l<o.length-1?(l++,m()):V>0&&l>0&&(l--,m()))},{passive:!0})}}m()}function ht(e,t=44,i=58,n=null){return Se(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Xe(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:n||(l+=10)),a+=Se(s,{width:40,role:c,extraNote:l}),d<o.length-1){const m=o[d+1],y=wn(s,m,r)?Ot(s,m):null;a+=`<div style="width:7px;height:3px;background:${!y||y==="#ff3333"||y==="#cc2222"?"rgba(255,255,255,0.12)":y};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function fi(e,t,i,n,r=310,o=310,a=[],s=null){const d=ti[t]||{},c=Bi(t)||qi[t]||[],l={},m=["ATT","MIL","DEF","GK"];for(const b of m)(e[b]||[]).forEach((h,$)=>{l[`${b}${$+1}`]=h});function y(b){const w=d[b];return w?{x:w.x*r,y:w.y*o}:null}let g="";for(const[b,w]of c){const h=y(b),$=y(w);if(!h||!$)continue;const f=l[b],I=l[w],_=Ot(f,I);_==="#00ff88"||_==="#FFD700"?(g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${_}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(x*657/507);for(const[b,w]of Object.entries(l)){const h=y(b);if(!h||!w)continue;const $=b.replace(/[0-9]/g,""),f=a.includes(w.cardId),I=i==="attack"&&(["MIL","ATT"].includes($)||f)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!w.used,_=n.includes(w.cardId);let M=w.boost||0,G=!1;w.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?(M+=10,G=!0):i||(M+=10,G=!0));const re=Math.round(h.x-x/2),ie=Math.round(h.y-p/2);if(w.used){g+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${re}" y="${ie}" width="${x}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const Q=Se({...w,_evolution_bonus:0,stadiumBonus:!1},{width:x,showStad:!1,stadDef:null,role:$,extraNote:M,_cardOffset:30,_forceStadColor:G}),j=_?`position:absolute;top:30px;left:0;width:${x}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";g+=`<foreignObject x="${re-2}" y="${ie-30}" width="${x+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Q}
        ${_?`<div style="${j}"></div>`:""}
      </div>
    </foreignObject>`,I&&(g+=`<rect x="${re}" y="${ie}" width="${x}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${_?"selected":""}" data-card-id="${w.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(x*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${g}
  </svg>`}function Rt(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${fi(e,t,i,n,r,o,a,s)}
  </div>`}async function gi(e,t,i,n){var I;const{state:r,navigate:o,toast:a}=t;st(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Qo(e,t,i);const d=s.deckId;let c,l,m,y;try{const _=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=_[0].data,m=_[0].error,l=_[1].data,y=_[1].error}catch(_){console.error("[Match] Exception chargement deck:",_),Tt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(m||y){console.error("[Match] Erreur Supabase:",m||y),Tt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const g=(l||[]).filter(_=>{var M;return _.is_starter&&((M=_.card)==null?void 0:M.player)}).map(_=>Ii(_.card,_.position)),x=(l||[]).filter(_=>{var M;return!_.is_starter&&((M=_.card)==null?void 0:M.player)}).map(_=>Ii(_.card,_.position));if(g.length<11){Tt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>o("decks"));return}const p=(l||[]).find(_=>{var M;return((M=_.card)==null?void 0:M.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((I=p==null?void 0:p.card)==null?void 0:I.formation)||"4-4-2",{data:b,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),$=(b||[]).map(_=>({..._,_gcDef:(h==null?void 0:h.find(M=>M.name===_.gc_type||M.id===_.gc_definition_id))||null}));let f=null;if(c!=null&&c.stadium_card_id){const{data:_}=await v.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(_!=null&&_.stadium_id){const{data:M}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",_.stadium_id).single();f=M||null}}n({deckId:d,formation:u,starters:g,subsRaw:x,gcCardsEnriched:$,gcDefs:h||[],stadiumDef:f})}function Lt(){return Math.min(window.innerWidth-40,860)}function Pt(){return Math.round(Lt()*1.1)}function jn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Zt(e)}}function Zo(e,t,i,n="Adversaire"){const r=Lt(),o=Pt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${fi(e,t,null,[],r,o)}
      </div>
    </div>`}function Cn(e){var o,a,s;if(!e)return"";const t=d=>d?Se({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function Je(e,t,i,n,r){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Se({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(a),!document.getElementById("goal-anim-style")){const d=document.createElement("style");d.id="goal-anim-style",d.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(d)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function er(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=e?Se({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Se({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";r.innerHTML=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function Bn(e,t){const i=Pe(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function xt(e,t){return e.reduce((i,n)=>i+Bn(n,t),0)}function yt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ot(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function li(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Ot(o,e[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Bn(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Se({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${xt(e,r)} + ${yt(e)} liens = <b style="color:#fff">${xt(e,r)+yt(e)}</b>
      </div>
    </div>`}async function tr(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await gi(e,t,r,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:m,gcDefs:y,stadiumDef:g})=>{try{let x=di(c,d);g&&(x=ei(x,g),si(l,g));const p=await ir(d,o),u=p.lines||p,b=async w=>{try{const h=a==="vs_ai_club"?"club":a,{data:$,error:f}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:h,home_deck_id:s,status:"in_progress"}).select().single();if(f){console.error("[MatchIA] Erreur création match:",f),Tt(e,"⚠️","Impossible de créer le match ("+f.message+").","Retour",()=>t.navigate("home"));return}const I=p.stadiumDef||null;I&&u&&(ei(u,I),si(p.subs||[],I));const _={gcDefs:y||[],matchId:$==null?void 0:$.id,mode:a,difficulty:o,formation:d,homeTeam:x,aiTeam:u,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:I,homeScore:0,aiScore:0,gcCards:w,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};or(e,_,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),Tt(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!m.length){b([]);return}ui(e,m,b)}catch(x){console.error("[MatchIA] Exception setup:",x),Tt(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function ir(e,t){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:nr(e),subs:[],gcCards:[],stadiumDef:null};const n=Gt[e]||Gt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(b,w,h){var $,f;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:(($=b.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((f=b.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:w}}for(const b of["GK","DEF","MIL","ATT"]){const w=i.filter(_=>_.job===b&&!o.has(_.id)),h=i.filter(_=>_.job!==b&&!o.has(_.id)),$=[...w,...h],f=[];for(let _=0;_<n[b];_++){const M=$[_];M&&f.push(a(M,b,_))}const I=mt(f.length);f.forEach((_,M)=>{_._col=I[M]}),r[b]=f}const d=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,w)=>a(b,b.job,100+w)),m=Object.keys(Ce).sort(()=>Math.random()-.5).slice(0,3).map((b,w)=>{var h,$;return{id:"ai-gc-"+w,gc_type:b,name:((h=Ce[b])==null?void 0:h.name)||b,icon:(($=Ce[b])==null?void 0:$.icon)||"⚡"}}),y=Object.values(r).flat(),g={};y.forEach(b=>{b.club_id&&(g[b.club_id]=(g[b.club_id]||0)+1)});const x=(u=Object.entries(g).sort((b,w)=>w[1]-b[1])[0])==null?void 0:u[0];let p=null;if(x){const{data:b}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:r,subs:d,gcCards:m,stadiumDef:p}}function nr(e){const t=Gt[e]||Gt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<t[o];d++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=mt(a.length);a.forEach((d,c)=>{d._col=s[c]}),i[o]=a}return i}function or(e,t,i){var r;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Rt(t.aiTeam,t.formation,null,[],c,d,[],l),o.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const m=o.querySelector("svg");m&&(m.style.cssText="display:block;width:100%;height:100%",m.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>rr(e,t,i),5e3)}const Ke=e=>jn(e);function rr(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=xt(n,o)+yt(n),d=xt(r,a)+yt(r),c=s>=d;e.innerHTML=`
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

    ${li(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${li(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const x=(p,u)=>e.querySelectorAll(p).forEach((b,w)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+w*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{m("score-home",s,800),m("score-ai",d,800)},1500)};function m(x,p,u){const b=document.getElementById(x);if(!b)return;const w=performance.now(),h=$=>{const f=Math.min(1,($-w)/u);b.textContent=Math.round(p*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(l),t.attacker=c?"home":"ai";const y=c?Mn():null;c&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(x=>Ke(x)),aiPlayers:r.map(x=>Ke(x)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const g=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",$e(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ni(e,t,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),w=c?x:p,h=c?p:x;w&&(w.style.fontSize="80px",w.style.color=c?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var f;const $=document.getElementById("duel-shock");if($){const I=(f=b||u)==null?void 0:f.getBoundingClientRect(),_=e.querySelector(".match-screen").getBoundingClientRect();I&&($.style.top=I.top-_.top+I.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
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
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",g))},600)},700)},2800)}function $e(e,t,i){var re,ie,Q,j,L,V,ne,ue,ge;const n=t.selected.map(A=>A.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(A=>!r.includes(A.cardId)),s=Object.values(t.homeTeam).flat().filter(A=>A.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(A=>!A.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(A=>!A.used),l=Nt(t.aiTeam),m=d.length===0&&c.length===0&&!l,y=(t.homeTeam.DEF||[]).filter(A=>!A.used),g=(t.homeTeam.GK||[]).filter(A=>!A.used);let x=[];t.phase==="attack"&&d.length===0&&(l?(x=y.map(A=>A.cardId),y.length===0&&(x=x.concat(g.map(A=>A.cardId)))):m&&(x=[...y,...g].map(A=>A.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",b=t.phase==="defense",w=t.phase==="finished",$=(t.homeSubs||[]).filter(A=>!(t.usedSubIds||[]).includes(A.cardId)).length>0&&t.subsUsed<t.maxSubs,f=u&&d.length===0&&x.length===0&&!$,I=t.gcCards.filter(A=>!t.usedGc.includes(A.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const W=t.pendingAttack;let pe="";if(t.selected.length>0){const R=t.selected.map(O=>({...(t.homeTeam[O._role]||[]).find(F=>F.cardId===O.cardId)||O,_line:O._role})),K=Qt(R,t.modifiers.home,t.formation);pe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Xe(R.map(O=>({...O,used:!1})),"#3a7bd5",K.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Xe((W.players||[]).map(R=>({...R,used:!1})),"#ff6b6b",W.total,"attack",t.formation)}</div>
            ${pe}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const W=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Xe((W.players||[]).map(pe=>({...pe,used:!1})),"#00ff88",W.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const W=t.selected.map(R=>{const K=(t.homeTeam[R._role]||[]).find(C=>C.cardId===R.cardId)||R,O=["GK","DEF"].includes(R._role);return{...K,_line:R._role,...O?{note_a:Math.max(1,Number(K.note_a)||0)}:{}}}),pe=Jt(W,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Xe(W.map(R=>({...R,used:!1})),"#FFD700",pe.total,"attack",t.formation)}</div>
          </div>`}const A=t.log[t.log.length-1];return A?'<div style="padding:2px 4px">'+Cn(A)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const A=window.innerWidth>=700,W=(N,B,H)=>{var tt,Oe;const ce=(t.gcDefs||[]).find(xi=>xi.name===N.gc_type),ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_e={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",he=(ce==null?void 0:ce.name)||N.gc_type,Ee=(ce==null?void 0:ce.effect)||((tt=Ce[N.gc_type])==null?void 0:tt.desc)||"",Te=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,ve=((Oe=Ce[N.gc_type])==null?void 0:Oe.icon)||"⚡",ze=Math.round(H*.22),De=Math.round(H*.22),je=H-ze-De,Ge=he.length>12?7:9;return`<div class="gc-mini" data-gc-id="${N.id}" data-gc-type="${N.gc_type}"
          style="box-sizing:border-box;width:${B}px;height:${H}px;border-radius:10px;border:2px solid ${_e};background:${ke};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ze}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ge}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${B-6}px">${he}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${je}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${B-10}px;max-height:${je-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(je*.55)}px">${ve}</span>`}
          </div>
          <div style="height:${De}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ee.slice(0,38)}</span>
          </div>
        </div>`},pe=(N,B)=>{var H;return`<div id="boost-card"
          style="box-sizing:border-box;width:${N}px;height:${B}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(B*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(B*.2)}px">⚡</div>
            <div style="font-size:${Math.round(B*.09)}px;color:#000;font-weight:900">+${(H=t.boostCard)==null?void 0:H.value}</div>
          </div>`},R=(N,B)=>B?pe(130,175):W(N,130,175),K=(N,B)=>B?pe(68,95):W(N,68,95),O=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",C=w?`<button id="btn-results" style="${O};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${O};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${O};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${O};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${O};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${O};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,F=u||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Y=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(N=>`<div class="sub-btn-col" data-sub-id="${N.cardId}" style="cursor:pointer;flex-shrink:0">${ht(N,76,100)}</div>`).join("")}
      </div>`,te=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Rt(t.homeTeam,t.formation,t.phase,n,A?1300:Lt(),A?600:Pt(),x)}
        </div>
      </div>`;return A?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Y}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${te}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${C}${F}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${I.map(N=>R(N,!1)).join("")}
            ${_?R(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Rt(t.homeTeam,t.formation,t.phase,n,A?1300:Lt(),A?600:Pt(),x)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${I.map(N=>K(N,!1)).join("")}
            ${_?K(null,!0):""}
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
          <div>${C}${F}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(A=>{var W,pe,R;if(A.type==="duel"){const K=A.isGoal,O=A.homeScored?"#FFD700":K?"#ff6b6b":"rgba(255,255,255,0.3)",C=A.homeScored?"⚽ BUT !":K?"⚽ BUT IA !":(W=A.homePlayers)!=null&&W.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${K?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${O};margin-bottom:4px">
                <div style="font-size:9px;color:${O};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
                ${(pe=A.homePlayers)!=null&&pe.length?`<div style="margin-bottom:3px">${Xe(A.homePlayers,"rgba(255,255,255,0.7)",A.homeTotal,void 0,t.formation)}</div>`:""}
                ${(R=A.aiPlayers)!=null&&R.length?`<div style="opacity:0.7">${Xe(A.aiPlayers,"#ff6b6b",A.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return A.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${A.outPlayer?ht({...A.outPlayer,used:!0,_line:A.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${A.inPlayer?ht({...A.inPlayer,_line:A.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:A.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${A.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${A.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function M(){const A=e.querySelector(".match-screen");if(!A)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);A.style.bottom="auto",A.style.height=W+"px",A.style.minHeight=W+"px",A.style.maxHeight=W+"px",A.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),R=e.querySelector("#mobile-play-area");pe&&R&&(R.style.paddingBottom=pe.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const W=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!W)return;const pe=W.closest("#match-terrain-wrap");pe&&(pe.style.cssText="position:relative;width:100%;height:100%;padding:0"),W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const A=e.querySelector(".terrain-wrapper svg");if(A){const W=A.closest("#match-terrain-wrap");W&&(W.style.cssText="position:relative;width:100%;height:100%;padding:0"),A.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let A=!1,W=30;const pe=()=>document.getElementById("match-timer"),R=()=>{const K=pe();if(!K)return;const O=String(Math.floor(W/60)).padStart(2,"0"),C=String(W%60).padStart(2,"0");K.textContent=` ${O}:${C}`,K.style.color=A?"#ff2222":"#ff9500",K.style.fontWeight="900"};R(),t._timerInt=setInterval(()=>{if(W--,W<0)if(!A)A=!0,W=15,R();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",K.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(K),setTimeout(()=>{K.remove(),bt(e,t,i)},2500)}else R()},1e3)}(re=document.getElementById("match-quit"))==null||re.addEventListener("click",()=>{et(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,bt(e,t,i))}),(ie=document.getElementById("view-ai"))==null||ie.addEventListener("click",()=>xr(t,i)),(Q=document.getElementById("toggle-history"))==null||Q.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var A;(A=document.getElementById("match-history-panel"))==null||A.classList.remove("open")}),(L=document.getElementById("btn-action"))==null||L.addEventListener("click",()=>{t.selected.length!==0&&(u?sr(e,t,i):b&&dr(e,t,i))}),(V=document.getElementById("btn-results"))==null||V.addEventListener("click",()=>bt(e,t,i)),(ne=document.getElementById("btn-pass"))==null||ne.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Ai(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),bt(e,t,i);return}t.phase="ai-attack",$e(e,t,i),setTimeout(()=>Ni(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(A=>{A.addEventListener("click",()=>ar(A,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(A=>{A.addEventListener("click",()=>_i(e,t,i,null,A.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(A=>{u?A.addEventListener("click",()=>ur(A.dataset.gcId,A.dataset.gcType,e,t,i)):(A.style.opacity="0.35",A.style.cursor="default",A.addEventListener("click",()=>kt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>mr(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(A=>{A.addEventListener("click",()=>_i(e,t,i,A.dataset.subId))}),(ge=document.getElementById("sub-btn-main"))==null||ge.addEventListener("click",()=>_i(e,t,i))}function ar(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}$e(i,t,n)}function Ri(e,t,i){e.matchId&&v.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function sr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ri(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=Jt(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",$e(e,t,i),setTimeout(()=>pr(e,t,i),1200)}function dr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ri(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(m=>m.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),o=Qt(r,t.modifiers.home,t.formation);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const a=Gi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ke(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ke(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,$e(e,t,i),Je(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function lr(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(d=>d.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function cr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Ce[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ni(e,t,i){Ri(t,i,null),lr(t),cr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!n.length){const l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(y=>!y.used),m=Nt(t.homeTeam);if(m||l.length===0){const y=(t.aiTeam.DEF||[]).filter(x=>!x.used),g=(t.aiTeam.GK||[]).filter(x=>!x.used);n=m?y.length?y:g:[...y,...g],r=!0}}const o=kn(n,"attack",t.difficulty);if(!o.length){Si(e,t,i);return}r&&o.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=Jt(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Nt(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,ci(e,t,i,"ai",o[0]);return}t.aiScore++;const m={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(y=>Ke(y)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(m),t.pendingAttack=null,$e(e,t,i),Je(m.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",$e(e,t,i)}function pr(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=kn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(y=>!y.used)).length){const m=((c=t.pendingAttack)==null?void 0:c.players)||[];if(m.length===1&&(m[0]._line==="GK"||m[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,ci(e,t,i,"home",m[0]);return}t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:m.map(x=>Ke(x)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,$e(e,t,i),Je(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const a=r.length>0?Qt(r,t.modifiers.ai,t.formation).total:0;r.forEach(m=>{m.used=!0});const s=Gi(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>Ke(m)),aiPlayers:r.map(m=>Ke(m)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,$e(e,t,i),Je(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,n){if(t.round++,!qn(e,t,i)){if(Oi(t)){bt(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Si(e,t,i);return}t.phase="attack",$e(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Si(e,t,i);return}t.phase="ai-attack",$e(e,t,i),setTimeout(()=>Ni(e,t,i),800)}}}function Nt(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function pn(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function qn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(pn(t.homeTeam)&&Nt(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,ci(e,t,i,"home",n),!0):!1}if(pn(t.aiTeam)&&Nt(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,ci(e,t,i,"ai",n),!0):!1}return!1}function ci(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ke(r)]:[],aiPlayers:n==="ai"?[Ke(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,d)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,$e(e,t,i),Je([Ke(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Oi(t)){bt(e,t,i);return}zt(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Oi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Ai(e,t){return!(["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used))||Nt(t)||!["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used)))}function Si(e,t,i){if(!qn(e,t,i)){if(Oi(t)){bt(e,t,i);return}if(Ai(t.homeTeam,t.aiTeam)&&Ai(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),bt(e,t,i);return}t.phase="attack",$e(e,t,i)}}function _i(e,t,i,n=null,r=null){var g,x;if(t.phase!=="attack"){kt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){kt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){kt("Aucun joueur utilisé à remplacer");return}if(!a.length){kt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const d=((g=o[s])==null?void 0:g._line)||((x=o[s])==null?void 0:x.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),l=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var f,I,_,M,G,re;const p=o[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(b*1.35),h=ie=>`background:rgba(255,255,255,0.12);border:none;color:${ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ie?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?ht({...u,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?ht({...p,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=m.querySelector("#sub-close"))==null||f.addEventListener("click",()=>m.remove()),(I=m.querySelector("#out-up"))==null||I.addEventListener("click",()=>{s>0&&(s--,y())}),(_=m.querySelector("#out-down"))==null||_.addEventListener("click",()=>{s<o.length-1&&(s++,y())}),(M=m.querySelector("#in-up"))==null||M.addEventListener("click",()=>{c>0&&(c--,y())}),(G=m.querySelector("#in-down"))==null||G.addEventListener("click",()=>{c<a.length-1&&(c++,y())});const $=(ie,Q,j,L)=>{const V=m.querySelector("#"+ie);if(!V)return;let ne=0;V.addEventListener("touchstart",ue=>{ne=ue.touches[0].clientY},{passive:!0}),V.addEventListener("touchend",ue=>{const ge=ue.changedTouches[0].clientY-ne;if(Math.abs(ge)<30)return;const A=Q();ge<0&&A<L-1?(j(A+1),y()):ge>0&&A>0&&(j(A-1),y())},{passive:!0})};$("in-panel",()=>c,ie=>c=ie,a.length),$("out-panel",()=>s,ie=>s=ie,o.length),(re=m.querySelector("#sub-confirm"))==null||re.addEventListener("click",ie=>{if(ie.preventDefault(),ie.stopPropagation(),l)return;l=!0;const Q=o[s],j=a[c];if(!Q||!j)return;let L=null,V=-1;for(const[ue,ge]of Object.entries(t.homeTeam)){const A=(ge||[]).findIndex(W=>W.cardId===Q.cardId);if(A!==-1){L=ue,V=A;break}}if(V===-1||!L){kt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const ne={...j,_line:L,_col:Q._col||0,used:!1,boost:0};t.homeTeam[L].splice(V,1,ne),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Q.name,firstname:Q.firstname,note:Pe(Q,L),portrait:Zt(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Pe(j,L),portrait:Zt(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${Q.firstname} ${Q.name}`}),m.remove(),er(Q,j,()=>$e(e,t,i))})}document.body.appendChild(m),y()}function ur(e,t,i,n,r){var x,p;const o=(n.gcDefs||[]).find(u=>u.name===t),a=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",d={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,l=(o==null?void 0:o.effect)||a.desc,m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,y=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${d};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${d}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${y}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${l}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(x=g.querySelector("#gc-back"))==null||x.addEventListener("click",()=>g.remove()),(p=g.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{g.remove(),gr(e,t,i,n,r)})}function oi(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(m=>{const y=m._line||m.job||"MIL",g=s.find(p=>p.cardId===m.cardId),x=Se({...m,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:m.boost||0});return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          ${x}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const y=m.dataset.cid,g=e.find(p=>p.cardId===y);if(!g)return;const x=s.findIndex(p=>p.cardId===y);x>-1?s.splice(x,1):s.length<t&&s.push(g),d()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),o(s)})}d(),document.body.appendChild(a)}const fr={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(oi(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),$e(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),$e(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,m])=>m.filter(y=>!y.used).map(y=>({...y,_line:l})));return c.length?(oi(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,r,l=>{l.forEach(m=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[m._line]||[]).find(x=>x.cardId===m.cardId);g&&(g.boost=(g.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),$e(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),$e(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(m=>!m.used).map(m=>({...m,_line:c})));return d.length?(oi(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(l=>{const y=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(g=>g.cardId===l.cardId);y&&(y.used=!0,n.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),$e(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),$e(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return o.length?(oi(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),$e(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),$e(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function gr(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(d=>d.name===t)||o.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=fr[a.effect_type];d?d(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(m=>m.used).map(m=>({...m,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,m)=>Pe(m,"ATT")-Pe(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",e).then(()=>{}),s&&$e(i,n,r)}function mr(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Xo[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),$e(e,t,i)})})}async function bt(e,t,i){var l,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=xo(t.mode,a);t.matchId&&await v.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await v.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),et(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{c.remove(),et(e),i.navigate("match",{matchMode:t.mode})})}function xr(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${fi(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=e=>jn(e);async function It(e,t,i,n,r={}){return Dn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function yr(e,t,i){const{data:n}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return Dn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function Dn(e,t,i,n,r=[],o=[],a=!1,s=null,d=null,c=null,l=null,m=null){const{state:y,navigate:g,toast:x}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(r||[]).map(k=>k.id),w=(r||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){x("Match introuvable","error"),g("home");return}async function $(){var xe,ye;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:E},{data:z,error:S},{data:T},{data:P}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",S==null?void 0:S.message,"p1D:",(xe=k==null?void 0:k.starters)==null?void 0:xe.length,"p2D:",(ye=z==null?void 0:z.starters)==null?void 0:ye.length);const q=ae=>{const Le=Number(ae.evolution_bonus)||0;return{cardId:ae.card_id,position:ae.position,id:ae.id,firstname:ae.firstname,name:ae.surname_real,country_code:ae.country_code,club_id:ae.club_id,job:ae.job,job2:ae.job2,note_g:(Number(ae.note_g)||0)+(ae.job==="GK"||ae.job2==="GK"&&Number(ae.note_g)>0?Le:0),note_d:(Number(ae.note_d)||0)+(ae.job==="DEF"||ae.job2==="DEF"&&Number(ae.note_d)>0?Le:0),note_m:(Number(ae.note_m)||0)+(ae.job==="MIL"||ae.job2==="MIL"&&Number(ae.note_m)>0?Le:0),note_a:(Number(ae.note_a)||0)+(ae.job==="ATT"||ae.job2==="ATT"&&Number(ae.note_a)>0?Le:0),evolution_bonus:Le,rarity:ae.rarity,skin:ae.skin,hair:ae.hair,hair_length:ae.hair_length,face:ae.face||null,clubName:ae.club_encoded_name||null,clubLogo:ae.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},D=((k==null?void 0:k.starters)||[]).map(ae=>q(ae)),U=((z==null?void 0:z.starters)||[]).map(ae=>q(ae)),Z=(k==null?void 0:k.formation)||"4-4-2",oe=(z==null?void 0:z.formation)||"4-4-2";let ee=di(D,Z),J=di(U,oe);const se=((k==null?void 0:k.subs)||[]).map(ae=>q(ae)),de=((z==null?void 0:z.subs)||[]).map(ae=>q(ae)),me=(k==null?void 0:k.stadium_def)||(n?d:null),le=(z==null?void 0:z.stadium_def)||(n?null:d);return me&&(ee=ei(ee,me),si(se,me)),le&&(J=ei(J,le),si(de,le)),{p1Team:ee,p2Team:J,p1Subs:se,p2Subs:de,p1Formation:Z,p2Formation:oe,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(P==null?void 0:P.club_name)||(P==null?void 0:P.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?w:[],gcCardsFull_p2:n?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let f=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!f,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",y.profile.id),!f)if(n){f=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:k}=await v.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await v.from("matches").update({game_state:f,turn_user_id:h.home_id}).eq("id",i):f=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!f;k++){await new Promise(z=>setTimeout(z,400));const{data:E}=await v.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(f=E.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(E!=null&&E.game_state))}if(!f){x("Erreur de synchronisation","error"),g("home");return}f.gc_p2=b,f.gcCardsFull_p2=w,await v.from("matches").update({game_state:f}).eq("id",i)}let I=!1,_=null,M=!1;const G=new Set,re=new Set;async function ie(k){var oe,ee;try{v.removeChannel(Q)}catch{}const E=f[p+"Score"]||0,z=f[u+"Score"]||0;let S,T;k.winner_id?(S=k.winner_id===y.profile.id,T=!1):k.forfeit?(S=E>z,T=!1):(T=E===z,S=E>z);let P="";if(a&&n)try{const{data:J}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:se}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(J&&se){const de=S?1:T?.5:0,me=1-de,le=J.placement_matches<10,xe=se.placement_matches<10,ye=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,se.mmr,se.mmr_deviation,de===1?1:de===0?0:.5,le),ae=computeGlicko2(se.mmr,se.mmr_deviation,se.mmr_volatility,J.mmr,J.mmr_deviation,me===1?1:me===0?0:.5,xe);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:S?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ye.delta,p_away_delta:ae.delta,p_home_new_rd:ye.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:ye.newSigma,p_away_new_vol:ae.newSigma});const Le=ye.delta,Re=ye.newMmr,Ie=getTier(Re),Ve=Le>=0?"+":"",He=Le>=0?"#4caf50":"#ff6b6b",it=getTier(J.mmr);P=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ie.id!==it.id?`<div style="font-size:20px;font-weight:900;color:${Ie.color}">
                    ${Re>J.mmr?"📈":"📉"} ${it.emoji} ${it.label} → ${Ie.emoji} ${Ie.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Re>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Le>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ie.color}">${Ie.emoji} ${Ie.label}</div>`}
              ${le?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(oe=document.getElementById("pvp-end-overlay"))==null||oe.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const D=T?"🤝":S?"🏆":"😞",U=T?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",Z=T?"#fff":S?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${D}</div>
      <div style="font-size:26px;font-weight:900;color:${Z}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[p+"Name"]} ${E} – ${z} ${f[u+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${P}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(ee=q.querySelector("#pvp-end-home"))==null||ee.addEventListener("click",()=>{q.remove(),et(e),l?g("mini-league",{openLeagueId:l}):g(a?"ranked":"home")})}const Q=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{var z;const E=k.new;try{if(E.status==="finished"||E.forfeit){if(I)return;I=!0,_&&(clearInterval(_),_=null),E.game_state&&(f=E.game_state),ie(E);return}if(E.game_state){const S=f;f=E.game_state;const T=f._lastGC;if(T&&T.seq&&!re.has(T.seq)&&(re.add(T.seq),T.by!==p)){O(T.type,T.by,()=>W());return}const P=S[p+"Score"]||0,q=S[u+"Score"]||0,D=f[p+"Score"]||0,U=f[u+"Score"]||0,Z=D>P,oe=U>q;if((Z||oe)&&!G.has(f.round)){G.add(f.round);const ee=[...f.log||[]].reverse().find(de=>de.isGoal),J=((ee==null?void 0:ee.homePlayers)||[]).map(de=>({name:de.name,note:de.note,portrait:de.portrait,job:de.job}));!!((z=ee==null?void 0:ee.text)!=null&&z.includes("DERNIER CORNER"))?_e().then(()=>{Je(J,D,U,Z,()=>W())}):Je(J,D,U,Z,()=>W());return}W()}}catch(S){console.error("[PvP] crash:",S)}}).subscribe();async function j(k){Object.assign(f,k),f.lastActionAt=new Date().toISOString();const{error:E}=await v.from("matches").update({game_state:f}).eq("id",i);E&&x("Erreur de synchronisation","error");try{W()}catch(z){console.error("[PvP] renderPvpScreen crash:",z)}}async function L(){if(I)return;I=!0,_&&(clearInterval(_),_=null);const k=n?h.away_id:h.home_id,E=n?"p2":"p1",z=n?"p1":"p2",S={...f,[E+"Score"]:3,[z+"Score"]:0,phase:"finished"},T=S.p1Score||0,P=S.p2Score||0;try{await v.from("matches").update({game_state:S}).eq("id",i);const{data:q,error:D}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:k,p_home_score:T,p_away_score:P,p_forfeit:!0});if(D&&console.error("[PvP] finish_pvp_match (forfeit):",D),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await v.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{v.removeChannel(Q)}catch{}setTimeout(()=>{et(e),l?g("mini-league",{openLeagueId:l}):g("home")},800)}const V={BOOST_STAT:({value:k=1,count:E=1,roles:z=[]},S,T)=>{const P=S[p+"Team"],q=Object.entries(P).filter(([D])=>!z.length||z.includes(D)).flatMap(([D,U])=>U.filter(Z=>!Z.used).map(Z=>({...Z,_line:D})));if(!q.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(S);return}ne(q,E,`Choisir ${E} joueur(s) à booster (+${k})`,D=>{D.forEach(U=>{const Z=(P[U._line]||[]).find(oe=>oe.cardId===U.cardId);Z&&(Z.boost=(Z.boost||0)+k,S.log.push({text:`⚡ +${k} sur ${Z.name}`,type:"info"}))}),S[p+"Team"]=P,T(S)})},DEBUFF_STAT:({value:k=1,count:E=1,roles:z=[],target:S="ai"},T,P)=>{const q=S==="home"?p:u,D=T[q+"Team"],U=S==="home"?"allié":"adverse",Z=Object.entries(D).filter(([oe])=>!z.length||z.includes(oe)).flatMap(([oe,ee])=>ee.map(J=>({...J,_line:oe})));if(!Z.length){T.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),P(T);return}ne(Z,E,`Choisir ${E} joueur(s) ${U}(s) (-${k})`,oe=>{oe.forEach(ee=>{const J=(D[ee._line]||[]).find(se=>se.cardId===ee.cardId);J&&(J.boost=(J.boost||0)-k,T.log.push({text:`🎯 -${k} sur ${J.name}`,type:"info"}))}),T[q+"Team"]=D,P(T)})},GRAY_PLAYER:({count:k=1,roles:E=[],target:z="ai"},S,T)=>{const P=z==="home"?p:u,q=S[P+"Team"],D=z==="home"?"allié":"adverse",U=Object.entries(q).filter(([Z])=>!E.length||E.includes(Z)).flatMap(([Z,oe])=>oe.filter(ee=>!ee.used).map(ee=>({...ee,_line:Z})));if(!U.length){S.log.push({text:`❌ Aucun joueur ${D}`,type:"info"}),T(S);return}ne(U,k,`Choisir ${k} joueur(s) ${D}(s) à exclure`,Z=>{const oe="usedCardIds_"+P,ee=new Set(S[oe]||[]);Z.forEach(J=>{const se=(q[J._line]||[]).find(de=>de.cardId===J.cardId);se&&(se.used=!0,ee.add(J.cardId),S.log.push({text:`❌ ${se.name} exclu !`,type:"info"}))}),S[oe]=[...ee],S[P+"Team"]=q,T(S)})},REVIVE_PLAYER:({count:k=1,roles:E=[]},z,S)=>{const T=z[p+"Team"],P=Object.entries(T).filter(([q])=>!E.length||E.includes(q)).flatMap(([q,D])=>D.filter(U=>U.used).map(U=>({...U,_line:q})));if(!P.length){z.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(z);return}ne(P,k,`Choisir ${k} joueur(s) à ressusciter`,q=>{q.forEach(D=>{const U=(T[D._line]||[]).find(Z=>Z.cardId===D.cardId);U&&(U.used=!1,z.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),z[p+"Team"]=T,S(z)})},REMOVE_GOAL:({},k,E)=>{const z=u+"Score";k[z]>0?(k[z]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(k)},ADD_GOAL_DRAW:({},k,E)=>{k[p+"Score"]===k[u+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(k)},ADD_SUB:({value:k=1},E,z)=>{E.maxSubs=(E.maxSubs||3)+k,E.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),z(E)},CUSTOM:({},k,E)=>E(k)};function ne(k,E,z,S){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let P=[];function q(){var U,Z;const D=k.map(oe=>{const ee=oe._line||oe.job||"MIL",J=P.find(de=>de.cardId===oe.cardId),se=Se({...oe,_evolution_bonus:0},{width:90,showStad:!0,role:ee,extraNote:oe.boost||0});return`<div class="pp-item" data-cid="${oe.cardId}"
          style="position:relative;border-radius:8px;${J?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${oe.used?"opacity:0.3;pointer-events:none":""}">
          ${se}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${z}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${D}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${P.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${P.length}/${E})
          </button>
        </div>`,(U=T.querySelector("#pp-close"))==null||U.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(oe=>{oe.addEventListener("click",()=>{const ee=oe.dataset.cid,J=k.find(de=>de.cardId===ee),se=P.findIndex(de=>de.cardId===ee);J&&(se>-1?P.splice(se,1):P.length<E&&P.push(J),q())})}),(Z=T.querySelector("#pp-confirm"))==null||Z.addEventListener("click",()=>{T.remove(),S(P)})}q(),document.body.appendChild(T)}async function ue(k,E){const S=(f["gcCardsFull_"+p]||[]).find(D=>D.id===k),T=(S==null?void 0:S._gcDef)||(f.gcDefs||[]).find(D=>{var U;return D.name===E||((U=D.name)==null?void 0:U.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),P=[...f["usedGc_"+p]||[],k],q={type:E,by:p,seq:(f._gcAnimSeq||0)+1};re.add(q.seq),O(E,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const U=V[T.effect_type];if(U){const Z={...f};U(T.effect_params||{},Z,async oe=>{oe["usedGc_"+p]=P,oe._lastGC=q,oe._gcAnimSeq=q.seq,await j(oe)});return}}const D={...f};switch(E){case"Remplacement+":D.maxSubs=(D.maxSubs||3)+1,D.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=u+"Score";D[U]>0&&(D[U]--,D.log.push({text:"🚫 But annulé",type:"info"}));break}}D["usedGc_"+p]=P,D._lastGC=q,D._gcAnimSeq=q.seq,await j(D)})}function ge(k,E){const z="usedCardIds_"+k,S=new Set(f[z]||[]);E.forEach(T=>S.add(T)),f[z]=[...S]}function A(){for(const k of["p1","p2"]){const E=new Set(f["usedCardIds_"+k]||[]),z=f[k+"Team"];if(z)for(const S of["GK","DEF","MIL","ATT"])(z[S]||[]).forEach(T=>{T.used=E.has(T.cardId)})}}function W(){var Ki,Vi,Yi,Wi,Xi,Ji;if(f.phase==="reveal")return pe();if(f.phase==="midfield")return K();if(f.phase==="finished")return xi();const k=f[p+"Team"],E=f[u+"Team"];A();const z=f[p+"Score"],S=f[u+"Score"],T=f[p+"Name"],P=f[u+"Name"],q=f.phase===p+"-attack",D=f.phase===p+"-defense",U=Array.isArray(f["selected_"+p])?f["selected_"+p]:[],Z=U.map(X=>X.cardId),oe=window.innerWidth>=700,ee=f[p+"Subs"]||[],J=f["usedSubIds_"+p]||[],se=ee.filter(X=>!J.includes(X.cardId)),de=f["gcCardsFull_"+p]||[],me=f["usedGc_"+p]||[],le=de.filter(X=>!me.includes(X.id)),xe=f.boostOwner===p&&!f.boostUsed,ye=[...k.MIL||[],...k.ATT||[]].filter(X=>!X.used),ae=[...E.MIL||[],...E.ATT||[]].filter(X=>!X.used),Le=!ze(E),Re=ye.length===0&&ae.length===0&&!Le,Ie=(k.DEF||[]).filter(X=>!X.used),Ve=(k.GK||[]).filter(X=>!X.used);let He=[];q&&ye.length===0&&(Le?(He=Ie.map(X=>X.cardId),Ie.length===0&&(He=He.concat(Ve.map(X=>X.cardId)))):Re&&(He=[...Ie,...Ve].map(X=>X.cardId)));function it(X,fe,Ae){var Ct,ft;const we=X._gcDef,Mt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[we==null?void 0:we.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",rt={purple:"#b06ce0",light_blue:"#00d4ef"}[we==null?void 0:we.color]||"#b06ce0",qe=(we==null?void 0:we.name)||X.gc_type,Ne=(we==null?void 0:we.effect)||((Ct=Ce[X.gc_type])==null?void 0:Ct.desc)||"",Me=we!=null&&we.image_url?`/icons/${we.image_url}`:null,_t=((ft=Ce[X.gc_type])==null?void 0:ft.icon)||"⚡",Fe=Math.round(Ae*.22),ut=Math.round(Ae*.22),at=Ae-Fe-ut,jt=qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${Ae}px;border-radius:10px;border:2px solid ${rt};background:${Mt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Fe}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${jt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${at}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Me?`<img src="${Me}" style="max-width:${fe-10}px;max-height:${at-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(at*.55)}px">${_t}</span>`}
        </div>
        <div style="height:${ut}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ne.slice(0,38)}</span>
        </div>
      </div>`}function Ht(X,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Be=(X,fe)=>fe?Ht(130,175):it(X,130,175),Ye=(X,fe)=>fe?Ht(68,95):it(X,68,95),Ue=oe?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ct=q?je(p)?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ue};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:D?`<button id="pvp-action" style="${Ue};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${P}</div>`,nt=q&&!je(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||D?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",At=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${oe?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${se.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':se.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${ht(X,oe?76:44,oe?100:58)}</div>`).join("")}
    </div>`,pt=q?"attack":D?"defense":"idle",wt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Rt(k,f[p+"Formation"],pt,Z,oe?1300:Lt(),oe?600:Pt(),He)}
      </div>
    </div>`,ot=f[p+"Team"],Un=(()=>{var fe,Ae,we,Mt,rt;if(D&&((fe=f.pendingAttack)!=null&&fe.players)){const qe=f.pendingAttack;let Ne="";if(U.length>0){const Me=U.map(Fe=>{const ut=(ot[Fe._role]||[]).find(yi=>yi.cardId===Fe.cardId)||Fe,at=ot[Fe._role]||[],jt=at.findIndex(yi=>yi.cardId===Fe.cardId),Ct=mt(at.length),ft=jt>=0?Ct[jt]:ut._col??1;return{...ut,_line:Fe._role,_col:ft}}),_t=Qt(Me,((Ae=f.modifiers)==null?void 0:Ae[p])||{},f[p+"Formation"]);Ne=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${Xe(Me.map(Fe=>({...Fe,used:!1})),"#3a7bd5",_t.total,"defense",f[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${P} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Xe((qe.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",qe.total,"attack",f[u+"Formation"])}</div>
          ${Ne}
        </div>`}if(q&&((we=f.pendingAttack)!=null&&we.players)){const qe=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Xe((qe.players||[]).map(Ne=>({...Ne,used:!1})),"#00ff88",qe.total,"attack",f[p+"Formation"])}</div>
        </div>`}if(q&&!((Mt=f.pendingAttack)!=null&&Mt.players)&&U.length>0){const qe=U.map(Me=>{const _t=(ot[Me._role]||[]).find(ft=>ft.cardId===Me.cardId)||Me,Fe=["GK","DEF"].includes(Me._role),ut=ot[Me._role]||[],at=ut.findIndex(ft=>ft.cardId===Me.cardId),jt=mt(ut.length),Ct=at>=0?jt[at]:_t._col??1;return{..._t,_line:Me._role,_col:Ct,...Fe?{note_a:Math.max(1,Number(_t.note_a)||0)}:{}}}),Ne=Jt(qe,((rt=f.modifiers)==null?void 0:rt[p])||{},f[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${Xe(qe.map(Me=>({...Me,used:!1})),"#FFD700",Ne.total,"attack",f[p+"Formation"])}</div>
        </div>`}const X=(f.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Cn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),Ui=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${z} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Un}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;st(e),e.style.overflow="hidden",oe?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ui}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${At}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${wt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ct}${nt}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${le.map(X=>Be(X,!1)).join("")}
            ${xe?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ui}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Rt(k,f[p+"Formation"],pt,Z,Lt(),Pt(),He)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${le.map(X=>Ye(X,!1)).join("")}
            ${xe?Ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${q&&se.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${q&&se.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${q&&se.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${q&&se.length>0?1:.4}">
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
          <div>${ct}${nt}</div>
        </div>
      </div>`;function St(){const X=e.querySelector(".match-screen");if(!X)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=fe+"px",X.style.minHeight=fe+"px",X.style.maxHeight=fe+"px",X.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");Ae&&we&&(we.style.paddingBottom=Ae.offsetHeight+"px")}if(St(),setTimeout(St,120),setTimeout(St,400),M||(M=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",St),window.visualViewport.addEventListener("scroll",St)),window.addEventListener("resize",St)),function(){const fe=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!fe)return;const Ae=fe.closest("#match-terrain-wrap");Ae&&(Ae.style.cssText="position:relative;width:100%;height:100%;padding:0"),fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=e.querySelector(".terrain-wrapper svg");if(X){const fe=X.closest("#match-terrain-wrap");fe&&(fe.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!q&&!D)return;const fe=X.dataset.cardId,Ae=X.dataset.role,we=(k[Ae]||[]).find(Ne=>Ne.cardId===fe);if(!we||we.used)return;const Mt=He.includes(fe);if(q&&!["MIL","ATT"].includes(Ae)&&!Mt)return;Array.isArray(f["selected_"+p])||(f["selected_"+p]=[]);const rt=f["selected_"+p],qe=rt.findIndex(Ne=>Ne.cardId===fe);qe>-1?rt.splice(qe,1):rt.length<3&&rt.push({...we,_role:Ae}),W()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>Y(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>Y())}),(Ki=e.querySelector("#pvp-sub-open"))==null||Ki.addEventListener("click",()=>Y()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{q?X.addEventListener("click",()=>C(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>kt("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Vi=e.querySelector("#pvp-boost-card"))==null||Vi.addEventListener("click",()=>F()),(Yi=e.querySelector("#pvp-action"))==null||Yi.addEventListener("click",X=>{q?X.currentTarget.dataset.pass==="1"||!je(p)?H():Ee():D&&Te()}),(Wi=e.querySelector("#pvp-quit"))==null||Wi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&L()}),(Xi=e.querySelector("#pvp-view-opp"))==null||Xi.addEventListener("click",()=>N()),(Ji=e.querySelector("#pvp-toggle-history"))==null||Ji.addEventListener("click",()=>B()),_&&(clearInterval(_),_=null),(q||D)&&!I){let X=30,fe=!1;const Ae=()=>document.getElementById("pvp-timer"),we=()=>{Ae()&&(Ae().textContent=X+"s",Ae().style.color=fe?"#ff4444":"#fff")};we(),_=setInterval(()=>{X--,X<0?fe?(clearInterval(_),_=null,q&&!je(p)?H():L()):(fe=!0,X=15,we()):we()},1e3)}}function pe(){st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Zo(f[u+"Team"],f[u+"Formation"],null,f[u+"Name"]||"Adversaire")}
    </div>`;const k=e.querySelector("svg"),E=k==null?void 0:k.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),k&&(k.removeAttribute("width"),k.removeAttribute("height"),k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",k.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let R=!1;function K(){if(R)return;const k=f[p+"Team"].MIL||[],E=f[u+"Team"].MIL||[],z=xt(k)+yt(k),S=xt(E)+yt(E),T=z>=S;st(e),e.innerHTML=`
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
      ${li(k,f[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${li(E,f[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(se,de)=>e.querySelectorAll(se).forEach((me,le)=>{setTimeout(()=>{me.style.opacity="1",me.style.transform="translateY(0) scale(1)"},de+le*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((se,de)=>setTimeout(()=>{se.style.opacity="1"},de*70)),900),setTimeout(()=>{const se=e.querySelector("#pvp-vs");se&&(se.style.opacity="1",se.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(de=>de.style.opacity="1")},1250);function q(se,de,me){const le=document.getElementById(se);if(!le)return;const xe=performance.now(),ye=ae=>{const Le=Math.min(1,(ae-xe)/me);le.textContent=Math.round(de*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame(ye):le.textContent=de};requestAnimationFrame(ye)}setTimeout(()=>{q("pvp-score-me",z,800),q("pvp-score-opp",S,800)},1500);const D=f.p1Team.MIL||[],U=f.p2Team.MIL||[],Z=xt(D)+yt(D),oe=xt(U)+yt(U),ee=Z>=oe?"p1":"p2";let J=f.boostValue;J==null&&(J=Mn(),f.boostValue=J,f.boostOwner=ee,f.boostUsed=!1),R=!0,setTimeout(()=>{const se=e.querySelector("#duel-row-"+(T?"me":"opp")),de=e.querySelector("#duel-row-"+(T?"opp":"me")),me=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),xe=T?me:le,ye=T?le:me;xe&&(xe.style.fontSize="80px",xe.style.color=T?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{se&&(se.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",se.style.zIndex="5"),setTimeout(()=>{const ae=document.getElementById("duel-shock");ae&&(ae.style.animation="shockwave .5s ease-out forwards"),de&&(de.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const ae=document.getElementById("pvp-duel-finale");if(!ae)return;const Le=f.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+f[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Re,ae.style.transition="opacity .45s ease",ae.style.opacity="1",ae.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const Ve=ee;await j({phase:Ve+"-attack",attacker:Ve,round:1,boostValue:J,boostUsed:!1,boostOwner:Ve})})},600)},700)},2800)}function O(k,E,z){var me,le;const S=(f.gcDefs||[]).find(xe=>{var ye;return xe.name===k||((ye=xe.name)==null?void 0:ye.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",P={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",q=(S==null?void 0:S.name)||k,D=(S==null?void 0:S.effect)||((me=Ce[k])==null?void 0:me.desc)||"",U=S!=null&&S.image_url?`/icons/${S.image_url}`:null,Z=((le=Ce[k])==null?void 0:le.icon)||"⚡",ee=E===p?"Vous":f[E+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${P}66}50%{box-shadow:0 0 60px ${P}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${P};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ee} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${P};background:${T};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${U?`<img src="${U}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${Z}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${D}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let se=!1;const de=()=>{se||(se=!0,J.remove(),setTimeout(()=>z&&z(),50))};J.addEventListener("click",de),setTimeout(de,3e3)}function C(k,E){var J,se,de,me;const S=(f["gcCardsFull_"+p]||[]).find(le=>le.id===k),T=S==null?void 0:S._gcDef,P={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",D=(T==null?void 0:T.name)||E,U=(T==null?void 0:T.effect)||((J=Ce[E])==null?void 0:J.desc)||"Carte spéciale.",Z=T!=null&&T.image_url?`/icons/${T.image_url}`:null,oe=((se=Ce[E])==null?void 0:se.icon)||"⚡",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ee.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${q};background:${P};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${q}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${D.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${D}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Z?`<img src="${Z}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${oe}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${U}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ee),(de=ee.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>ee.remove()),(me=ee.querySelector("#pvp-gc-use"))==null||me.addEventListener("click",()=>{ee.remove(),ue(k,E)})}function F(){var S;const k=f[p+"Team"],E=Object.entries(k).flatMap(([T,P])=>(P||[]).filter(q=>!q.used).map(q=>({...q,_line:T})));if(!E.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(T=>{const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",q=Pe(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${P};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(S=z.querySelector("#bp-close"))==null||S.addEventListener("click",()=>z.remove()),z.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const P=T.dataset.cid,q=E.find(U=>U.cardId===P);if(!q)return;const D=(k[q._line]||[]).find(U=>U.cardId===P);D&&(D.boost=(D.boost||0)+f.boostValue),z.remove(),await j({[p+"Team"]:k,boostUsed:!0})})})}function Y(k=null){var se,de;if(!(f.phase===p+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const z=f[p+"Team"],S=f["usedSubIds_"+p]||[],T=f.maxSubs||3;if(S.length>=T){x(`Maximum ${T} remplacements atteint`,"warning");return}const P=Object.entries(z).flatMap(([me,le])=>(le||[]).filter(xe=>xe.used).map(xe=>({...xe,_line:me}))),q=(f[p+"Subs"]||[]).filter(me=>!S.includes(me.cardId));if(!P.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){x("Aucun remplaçant disponible","warning");return}let D=Math.max(0,P.findIndex(me=>me.cardId===k));const U=((se=P[D])==null?void 0:se._line)||((de=P[D])==null?void 0:de.job);let Z=Math.max(0,q.findIndex(me=>me.job===U)),oe=!1;const ee=document.createElement("div");ee.id="pvp-sub-overlay",ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var Re,Ie,Ve,He,it,Ht;const me=P[D],le=q[Z],xe=Math.min(130,Math.round((window.innerWidth-90)/2)),ye=Math.round(xe*1.35),ae=Be=>`background:rgba(255,255,255,0.12);border:none;color:${Be?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Be?"default":"pointer"};flex-shrink:0`;ee.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(Z===0)}" ${Z===0?"disabled":""}>▲</button>
          <div>${le?ht({...le,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(Z>=q.length-1)}" ${Z>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Z+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(D===0)}" ${D===0?"disabled":""}>▲</button>
          <div>${me?ht({...me,used:!1,boost:0},xe,ye):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(D>=P.length-1)}" ${D>=P.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${D+1}/${P.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Re=ee.querySelector("#psub-close"))==null||Re.addEventListener("click",()=>ee.remove()),(Ie=ee.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{D>0&&(D--,J())}),(Ve=ee.querySelector("#pout-down"))==null||Ve.addEventListener("click",()=>{D<P.length-1&&(D++,J())}),(He=ee.querySelector("#pin-up"))==null||He.addEventListener("click",()=>{Z>0&&(Z--,J())}),(it=ee.querySelector("#pin-down"))==null||it.addEventListener("click",()=>{Z<q.length-1&&(Z++,J())});const Le=(Be,Ye,Ue,ct)=>{const nt=ee.querySelector("#"+Be);if(!nt)return;let At=0;nt.addEventListener("touchstart",pt=>{At=pt.touches[0].clientY},{passive:!0}),nt.addEventListener("touchend",pt=>{const wt=pt.changedTouches[0].clientY-At;if(Math.abs(wt)<30)return;const ot=Ye();wt<0&&ot<ct-1?(Ue(ot+1),J()):wt>0&&ot>0&&(Ue(ot-1),J())},{passive:!0})};Le("pin-panel",()=>Z,Be=>Z=Be,q.length),Le("pout-panel",()=>D,Be=>D=Be,P.length),(Ht=ee.querySelector("#psub-confirm"))==null||Ht.addEventListener("click",async Be=>{if(Be.preventDefault(),Be.stopPropagation(),oe)return;oe=!0;const Ye=P[D],Ue=q[Z];if(!Ye||!Ue)return;const ct=Ye._line,nt=(z[ct]||[]).findIndex(wt=>wt.cardId===Ye.cardId);if(nt===-1){x("Erreur : joueur introuvable","error"),ee.remove();return}const At={...Ue,_line:ct,position:Ye.position,used:!1,boost:0};z[ct].splice(nt,1,At);const pt=[...S,Ue.cardId];ee.remove(),te(Ye,Ue,async()=>{await j({[p+"Team"]:z,[u+"Team"]:f[u+"Team"],["usedSubIds_"+p]:pt})})})}document.body.appendChild(ee),J()}function te(k,E,z){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const P=(U,Z,oe)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${oe}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[U.job]||"#555"};border:3px solid ${Z};position:relative;overflow:hidden;margin:0 auto">
        ${Zt(U)?`<img src="${Zt(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${P(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${P(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let q=!1;const D=()=>{q||(q=!0,T.remove(),setTimeout(()=>z(),50))};T.addEventListener("click",D),setTimeout(D,2200)}function N(){var E;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${fi(f[u+"Team"],f[u+"Formation"],null,[],Lt(),Pt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(E=k.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>k.remove())}function B(){var z;const k=f.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(z=E.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>E.remove())}async function H(){if(f.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",E=(f.round||0)+1,z=[...f.log||[]];z.push({type:"info",text:`⏭️ ${f[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=Ge(f),T=je(k),P=S||!T?"finished":k+"-attack";await j({["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:P,attacker:k,round:E,log:z}),P==="finished"&&await Oe(f)}function ce(k){const E=(k.GK||[]).some(S=>!S.used),z=["DEF","MIL","ATT"].some(S=>(k[S]||[]).some(T=>!T.used));return E&&!z}function ke(k){return(k.p1Score||0)!==(k.p2Score||0)?null:ce(k.p1Team)&&!ze(k.p2Team)?{side:"p1",gk:(k.p1Team.GK||[]).find(E=>!E.used)}:ce(k.p2Team)&&!ze(k.p1Team)?{side:"p2",gk:(k.p2Team.GK||[]).find(E=>!E.used)}:null}async function _e(){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(k);const E=(z,S)=>new Promise(T=>{k.innerHTML=`<div style="font-size:32px;font-weight:900;color:${S};letter-spacing:2px;animation:lcFade 1.4s ease both">${z}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(T,1400)});await E("⚽ DERNIER CORNER","#FFD700"),await E("🧤 LE GARDIEN MONTE !","#4fc3f7"),k.remove()}async function he(k,E){const{side:z,gk:S}=k;if(!S)return;const T=z+"Score",P=(E[T]||0)+1;S.used=!0;const q=[...E.log||[]];q.push({type:"duel",isGoal:!0,homeScored:z===p,homePlayers:z==="p1"?[Bt(S)]:[],aiPlayers:z==="p2"?[Bt(S)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${E[z+"Name"]} marque !`});const D=(E.round||0)+1,U=z==="p1"?"p2":"p1",Z={...E,[T]:P},oe=Ge(Z);G.add(D),await _e();const ee=z===p?P:E[p+"Score"]||0,J=z===p?E[u+"Score"]||0:P;Je([Bt(S)],ee,J,z===p,async()=>{await j({[T]:P,log:q,round:D,pendingAttack:null,phase:oe?"finished":U+"-attack",attacker:U,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}}}),oe&&await Oe({...f,[T]:P})})}async function Ee(){const k=f[p+"Team"],E=!["GK","DEF","MIL","ATT"].some(P=>(f[u+"Team"][P]||[]).some(q=>!q.used)),z=(f["selected_"+p]||[]).map(P=>{const q=(k[P._role]||[]).find(de=>de.cardId===P.cardId)||P,D=["GK","DEF"].includes(P._role),U=k[P._role]||[],Z=U.findIndex(de=>de.cardId===P.cardId),oe=mt(U.length),ee=Z>=0?oe[Z]:q._col??1,J=f.stadiumDef||f.homeStadiumDef||null,se=q.stadiumBonus||J&&(J.club_id&&String(q.club_id)===String(J.club_id)||J.country_code&&q.country_code===J.country_code)||!1;return{...q,_line:P._role,_col:ee,stadiumBonus:se,...D?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!z.length)return;const S=Jt(z,f.modifiers[p]||{},f[p+"Formation"]);ge(p,z.map(P=>P.cardId)),z.forEach(P=>{const q=(k[P._role]||[]).find(D=>D.cardId===P.cardId);q&&(q.used=!0)}),f["selected_"+p]=[],W();const T=[...f.log||[]];if(E){if(z.length===1&&(z[0]._line==="GK"||z[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await he({side:p,gk:z[0]},{...f,[p+"Team"]:k,log:T});return}const q=(f[p+"Score"]||0)+1,D=z.map(J=>Bt(J));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:D,homeTotal:S.total,aiTotal:0});const U=(f.round||0)+1,Z=p==="p1"?"p2":"p1",oe={...f,[p+"Team"]:k,[p+"Score"]:q},ee=Ge(oe);G.add(U),Je(D,q,f[u+"Score"]||0,!0,async()=>{await j({[p+"Team"]:k,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:ee?"finished":Z+"-attack",attacker:Z,round:U,log:T}),ee&&await Oe({...f,[p+"Score"]:q})});return}T.push({type:"pending",text:`⚔️ ${f[p+"Name"]} attaque (${S.total})`}),await j({[p+"Team"]:k,[u+"Team"]:f[u+"Team"],pendingAttack:{...S,players:z,side:p},["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},phase:u+"-defense",log:T})}async function Te(){const k=f[p+"Team"],E=(f["selected_"+p]||[]).map(le=>{const xe=(k[le._role]||[]).find(Ie=>Ie.cardId===le.cardId)||le,ye=k[le._role]||[],ae=ye.findIndex(Ie=>Ie.cardId===le.cardId),Le=mt(ye.length),Re=ae>=0?Le[ae]:xe._col??1;return{...xe,_line:le._role,_col:Re}}),z=Qt(E,f.modifiers[p]||{},f[p+"Formation"]);ge(p,E.map(le=>le.cardId)),E.forEach(le=>{const xe=(k[le._role]||[]).find(ye=>ye.cardId===le.cardId);xe&&(xe.used=!0)}),f["selected_"+p]=[],W();const S=Gi(f.pendingAttack.total,z.total,f.modifiers[p]||{}),T=f.pendingAttack.side,P=S==="attack"||(S==null?void 0:S.goal),q=T==="p1"?"p2":"p1",D=(f.round||0)+1,U=(f.pendingAttack.players||[]).map(le=>Bt(le)),Z=[...f.log||[]];Z.push({type:"duel",isGoal:P,homeScored:P&&T===p,text:P?`⚽ BUT de ${f[T+"Name"]} ! (${f.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${z.total})`,homePlayers:U,aiPlayers:E.map(le=>Bt(le)),homeTotal:f.pendingAttack.total,aiTotal:z.total});const oe=P?(f[T+"Score"]||0)+1:f[T+"Score"]||0,ee={...f,[p+"Team"]:k,[T+"Score"]:oe},J=Ge(ee),se=J?"finished":q+"-attack",de=!J&&!P?ke(ee):null,me=async()=>{if(de){await he(de,ee);return}await j({[p+"Team"]:k,[u+"Team"]:f[u+"Team"],[T+"Score"]:oe,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:se,attacker:q,round:D,log:Z}),(se==="finished"||J)&&await Oe({...f,[T+"Score"]:oe})};if(P){const le=T===p,xe=le?oe:f[p+"Score"]||0,ye=le?f[u+"Score"]||0:oe;G.add(D),Je(U,xe,ye,le,me)}else await me()}function ve(k){return["MIL","ATT"].some(E=>(k[E]||[]).some(z=>!z.used))}function ze(k){return["GK","DEF","MIL","ATT"].some(E=>(k[E]||[]).some(z=>!z.used))}function De(k){return ze(k)&&!ve(k)}function je(k){const E=f[k+"Team"],z=f[(k==="p1"?"p2":"p1")+"Team"];return!!(ve(E)||De(E)&&!ze(z)||De(E)&&!ve(z)&&ze(z))}function Ge(k){return!ze(k.p1Team)&&!ze(k.p2Team)}function tt(k){const E=k.p1Score||0,z=k.p2Score||0;return E===z?null:E>z?h.home_id:h.away_id}async function Oe(k){try{const E=tt(k),z=E?h.home_id===E?h.away_id:h.home_id:null,S=k.p1Score||0,T=k.p2Score||0,{data:P,error:q}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:E,p_home_score:S,p_away_score:T,p_forfeit:!1});if(q&&console.error("[PvP] finish_pvp_match:",q),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(D){console.error("[PvP] check_and_finish_mini_league:",D)}E&&z&&ho(E,z).catch(()=>{});try{const{data:D}=await v.rpc("apply_match_rewards",{p_match_id:i});D!=null&&D.success&&!(D!=null&&D.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(D){console.error("[PvP] apply_match_rewards:",D)}if(typeof c=="function")try{await c({homeScore:S,awayScore:T,winnerId:E,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(D){console.error("[PvP] onMatchEnd:",D)}}catch(E){console.error("[PvP] finishMatch:",E)}}function xi(){var T;const k=f[p+"Score"],E=f[u+"Score"],z=k>E,S=k===E;st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{v.removeChannel(Q)}catch{}et(e),l?g("mini-league",{openLeagueId:l}):g("home")})}W()}async function Mi(e,t,i=!1){var s,d;const{state:n,navigate:r,toast:o}=t,a=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await gi(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:m,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{st(e);const u=async b=>{await hr(e,t,c,l,m,y,b||[],x,p,i,a)};if(!(g!=null&&g.length)){await u([]);return}ui(e,g,u)})}async function br(e,t,i){return yr(e,t,i)}async function hr(e,t,i,n,r,o,a=[],s=[],d=null,c=!1,l=null){var ie,Q;const{state:m,navigate:y,toast:g}=t,x=(l==null?void 0:l.mmr)??((ie=m.profile)==null?void 0:ie.mmr)??1e3,p=c?Di(x):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,$=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null);try{await v.rpc("cancel_matchmaking",{p_user_id:m.profile.id})}catch(j){console.error("[Matchmaking] cancel error:",j)}};(Q=document.getElementById("cancel-mm"))==null||Q.addEventListener("click",async()=>{await f(),et(e),y("home")});const I=async(j,L)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await It(e,t,j,L,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?vr:null}))},_=m.user.id,{data:M,error:G}=c?await v.rpc("try_matchmake_ranked",{p_user_id:_,p_deck_id:i,p_mmr:x}):await v.rpc("try_matchmake",{p_user_id:_,p_deck_id:i});if(G||!(M!=null&&M.success)){console.error("[Matchmaking] try_matchmake error:",G||M),g("Erreur de matchmaking","error"),et(e),y("home");return}if(M.matched){await I(M.match_id,!1);return}const re=async()=>{if(w)return;const{data:j}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",_).maybeSingle();(j==null?void 0:j.status)==="matched"&&j.match_id&&await I(j.match_id,!0)};h=v.channel(`mm_${_}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${_}`},j=>{const L=j.new;L.status==="matched"&&L.match_id&&I(L.match_id,!0)}).subscribe(),$=setInterval(re,3e3),setTimeout(()=>{w||f()},12e4)}async function vr(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,m=o===l,y=r===l,{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",m?a:o).single();if(g&&x){const p=Kn(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,y?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:y?v.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:v.sql`mmr_losses + 1`}).eq("id",l),n(y?`+MMR ↑ ${Math.round(p.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-p.mmr)}`,y?"success":"error",4e3)}}const wr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Mi,resumePvpMatch:br},Symbol.toStringTag,{value:"Module"}));async function _r(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",d=!!o.isAccepting;await gi(e,t,"friend",async({deckId:c,formation:l,starters:m,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{st(e);const u=async b=>{const w=b||[];d?await $r(e,t,c,w,x,p):await kr(e,t,c,w,x,p,a,s)};if(!(g!=null&&g.length)){await u([]);return}ui(e,g,u)})}async function kr(e,t,i,n,r,o,a,s){var w;const{state:d,navigate:c,toast:l}=t,m=d.user.id,{data:y,error:g}=await v.from("friend_match_invites").insert({inviter_id:m,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!y){console.error("[Friend] Erreur création invitation:",g),l("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),et(e),c("home")}),p=v.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:h})=>{x||h.status!=="accepted"||!h.match_id||(x=!0,await u(),await It(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(x)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(x=!0,clearInterval(b),await u(),await It(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{x||(clearInterval(b),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function $r(e,t,i,n,r,o){const{state:a,navigate:s,toast:d}=t,c=a.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:m,error:y}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(y||!(m!=null&&m.success)){console.error("[Friend] Erreur accept_friend_invite:",y||m),d((m==null?void 0:m.error)||"Impossible de rejoindre le match","error"),s("home");return}await It(e,t,m.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const Fn="#1A6B3C",dt="#D4A017",Ut="var(--tile-bg)",Kt="var(--tile-border)",Et="var(--divider)",We="var(--tile-fg-on-page)",$t="var(--tile-fg-dim)",Qe="var(--tile-fg-faint)",Yt="var(--nav-fg,#fff)",Pn="rgba(255,255,255,0.62)",Er="rgba(255,255,255,0.4)";async function Tr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await lt(e,t,i);return}await Ze(e,t)}async function Ze(e,t,i="waiting"){var h,$;const{state:n}=t,r=n.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(f=>f.league_id),s={};(o||[]).forEach(f=>{s[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:d,error:c}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],y=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=y.filter(f=>f.status==="waiting"&&!f.is_archived),x=y.filter(f=>f.status==="active"&&!f.is_archived),p=y.filter(f=>f.is_archived||f.status==="finished");let u=p;if(p.length){const{data:f}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map(_=>_.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),I=new Set((f||[]).map(_=>_.league_id));u=p.filter(_=>I.has(_.id))}const b=l.filter(f=>!a.includes(f.id)),w=[{key:"waiting",label:"🟡 En attente",count:g.length+b.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Yt}">🏆 Mini League</div>
        <div style="font-size:12px;color:${Pn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Yt}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et}">
      ${w.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Fn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":Er};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Lr(g,b,r):i==="active"?zr(x,r):Ir(u,r,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>Ar(e,t)),($=document.getElementById("ml-refresh-list"))==null||$.addEventListener("click",()=>Ze(e,t,i)),e.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>Ze(e,t,f.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>lt(e,t,f.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",I=>{I.stopPropagation(),Gn(e,t,f.dataset.join,f.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",I=>{I.stopPropagation(),ji(e,t,f.dataset.delete,f.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async I=>{I.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:_,error:M}=await v.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:n.profile.id});if(M||!(_!=null&&_.success)){t.toast((_==null?void 0:_.error)||"Erreur lors de la récupération","error"),Ze(e,t,i);return}if(!_.already_claimed){n.profile.credits=(n.profile.credits||0)+_.prize;const G=document.getElementById("nav-credits");G&&(G.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${_.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}Ze(e,t,i)}))}function pi(e,t,i=!1,n=null){var d,c;const r=e.creator_id===t,o=e.pot||0,a=((c=(d=e.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Ut};border:1px solid ${s?"rgba(212,160,23,0.5)":Kt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${We}">${e.name}</div>
      ${r?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${$t};margin-bottom:${i||s?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${dt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${e.id}" class="btn btn-sm" style="width:100%;background:${dt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function Lr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Qe};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>pi(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Qe};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>pi(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Qe}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function zr(e,t){return e.length?e.map(i=>pi(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Qe}">Aucune mini league en cours.</div>`}function Ir(e,t,i={}){return e.length?e.map(n=>pi(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Qe}">Aucune mini league archivée.</div>`}function Ar(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,p,u,b;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:m}=await v.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:o,entry_fee:a}).select().single();if(m){n("Erreur : "+m.message,"error");return}const{data:y}=await v.from("users").select("credits").eq("id",t.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:y.credits-a}).eq("id",t.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=y.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),lt(e,t,l.id)})}function Sr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function Gn(e,t,i,n){var m;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await Sr(),s===null))return;const{data:d,error:c}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),r((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:y}=await v.from("users").select("credits").eq("id",a).single();o.profile&&y&&(o.profile.credits=y.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((m=o.profile)==null?void 0:m.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),lt(e,t,i)}async function Mr(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(y=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),y(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),y(!1)}}))return;const{data:d,error:c}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(d!=null&&d.success)){r((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+l);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),Ze(e,t,"waiting")}async function ji(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),Ze(e,t,r)}async function jr(e,t,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),Ze(e,t,"archived")}async function lt(e,t,i){var $,f,I,_,M,G,re,ie,Q;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await Ze(e,t);return}const c=(s||[]).some(j=>j.user_id===o),l=a.creator_id===o,m=(s||[]).map(j=>j.user).filter(Boolean),y=Fr(m,d||[]),g=(d||[]).filter(j=>j.matchday===a.current_day),x=a.pot||0,p=a.entry_fee||100,u=g.length>0&&g.every(j=>j.status==="finished"||j.status==="bye"),b=a.current_day>=a.total_days,w=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Et};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Yt}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Yt};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Yt}">${a.name}</div>
        <div style="font-size:11px;color:${Pn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${x>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${x.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Ut};border:1px solid ${Kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${We}">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${$t};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Et}">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Fn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${We}">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:${Qe}">@${j.pseudo}</div></div>
            ${j.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&m.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${m.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Ut};border:1px solid ${Kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${We}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(j=>un(j,m,o,c)).join("")}
        ${l&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${Ut};border:1px solid ${Kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${We}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Qe};text-transform:uppercase;border-bottom:2px solid ${Et}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${x>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((j,L)=>{const V=x>0&&a.status==="finished"?L===0?Math.floor(x*.7):L===1?Math.floor(x*.2):L===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${Et};${j.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${L===0?dt:L<3?"#4ade80":$t}">${["🥇","🥈","🥉"][L]||L+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${We}">${j.clubName}</div><div style="font-size:10px;color:${Qe}">@${j.pseudo}</div></td>
              <td style="text-align:center;color:${$t}">${j.played}</td><td style="text-align:center;color:${$t}">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?"#4ade80":"#ff6b6b"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${We}">${j.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${V?V.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Ut};border:1px solid ${Kt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${We}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(j,L)=>L+1).reverse().map(j=>{const L=(d||[]).filter(V=>V.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Qe};margin-bottom:6px">Journée ${j}</div>${L.map(V=>un(V,m,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${$t}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>Ze(e,t,h)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async j=>{const L=j.currentTarget;L.style.opacity="0.5",await lt(e,t,i)}),(I=document.getElementById("ml-start-btn"))==null||I.addEventListener("click",()=>Cr(e,t,a,m)),(_=document.getElementById("ml-next-day"))==null||_.addEventListener("click",()=>Br(e,t,i)),(M=document.getElementById("ml-join-now"))==null||M.addEventListener("click",()=>Gn(e,t,i,a.type)),(G=document.getElementById("ml-leave-btn"))==null||G.addEventListener("click",()=>Mr(e,t,i,p)),(re=document.getElementById("ml-delete-btn"))==null||re.addEventListener("click",()=>ji(e,t,i,a.name,"waiting")),(ie=document.getElementById("ml-delete-now"))==null||ie.addEventListener("click",()=>ji(e,t,i,a.name,h)),(Q=document.getElementById("ml-archive-btn"))==null||Q.addEventListener("click",()=>jr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const L=g.find(V=>V.id===j.dataset.playMatch);L&&t.navigate("match-mini-league",{mlMatchId:L.id,leagueId:i})})}),a.status==="finished"&&w){const j=y.findIndex(L=>L.userId===o);j>=0&&j<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>qr(e,t,a,w,j),400)}}function un(e,t,i,n,r=!1){const o=m=>t.find(y=>y.id===m);if(e.is_bye){const m=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${$t};text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!r,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":Et}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${We};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Qe}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${We};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Cr(e,t,i,n){const{toast:r,state:o}=t,a=Dr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,l)=>c.forEach(m=>s.push({league_id:i.id,matchday:l+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:d}=await v.from("mini_league_matches").insert(s);if(d){r("Erreur calendrier : "+d.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),lt(e,t,i.id)}async function Br(e,t,i){const{data:n}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){lt(e,t,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),lt(e,t,i)}async function qr(e,t,i,n,r){var y,g;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,l=n.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${dt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${dt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${dt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(y=m.querySelector("#prize-close"))==null||y.addEventListener("click",()=>m.remove()),(g=m.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const p=x.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}m.remove(),lt(e,t,i.id)})}function Dr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const d=[],c=[n[0],...o];for(let l=0;l<r/2;l++){const m=c[l],y=c[r-1-l];m===null?d.push({bye:y}):y===null?d.push({bye:m}):d.push({home:m,away:y})}a.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function Fr(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function fn(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,d=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==d&&c.away_id!==d){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const m=c.home_id===d;if(c.match_id){await It(e,t,c.match_id,m,{mlLeagueId:a,mlMatchId:s});return}await gi(e,t,"mini_league",async({deckId:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{st(e);const u=async b=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:y});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(w.matched){await It(e,t,w.match_id,m,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:x,stadiumDef:p});return}await Pr(e,t,{mlMatchId:s,leagueId:a,amIHome:m,chosenGC:b,gcDefs:x,stadiumDef:p})};if(!(g!=null&&g.length)){await u([]);return}ui(e,g,u)})}function Pr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const m=async u=>{if(!l){if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}u&&await It(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),d()});const y=async()=>{if(l)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&m(u.match_id)},g=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&m(u.new.match_id)}).subscribe(),x=setInterval(y,3e3);y()})}const Gr="/",Rr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function Nr(e,t,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var l,m,y;const s=t[n],d=n===t.length-1,c=Math.round((n+1)/t.length*100);r.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${Gr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,o()}),(m=r.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{d?a():(n++,o())}),(y=r.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await v.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function Or(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await v.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):Rr;Nr(e,a,()=>t("boosters"))}const ri={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function qt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function Hr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Hi(e,t)}async function Hi(e,t){const{state:i,toast:n}=t,{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(r||[]).filter(p=>p.seller_id!==i.profile.id),s=o||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--tile-border);background:var(--tile-bg);color:var(--tile-fg-dim);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${s.length})</button>
    </div>

    <!-- Filtres (onglet Acheter seulement) -->
    <div id="mkt-filters" style="padding:10px 16px;background:var(--tile-dark-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-wrap:wrap;gap:8px">
      <input id="flt-name"    placeholder="🔍 Nom"         style="flex:1;min-width:110px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-club"    placeholder="🏟️ Club"        style="flex:1;min-width:90px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <input id="flt-country" placeholder="🌍 Pays"        style="flex:1;min-width:80px;padding:6px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:12px">
      <select id="flt-job" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:var(--tile-bg)">
        <option value="">Tous postes</option>
        <option>GK</option><option>DEF</option><option>MIL</option><option>ATT</option>
      </select>
      <select id="flt-rarity" style="padding:6px 8px;border:1.5px solid #ddd;border-radius:8px;font-size:12px;background:var(--tile-bg)">
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
  </div>`;let d="buy";const c=()=>{var p,u,b,w,h,$,f;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((f=document.getElementById("flt-note2"))==null?void 0:f.value)||0}};function l(p){const u=c();return p.filter(b=>{var G,re,ie;const w=(G=b.card)==null?void 0:G.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),$=(((re=w.clubs)==null?void 0:re.encoded_name)||"").toLowerCase(),f=(w.country_code||"").toLowerCase(),I=((ie=b.card)==null?void 0:ie.evolution_bonus)||0,_=qt(w,w.job,I),M=w.job2?qt(w,w.job2,I):0;return!(u.name&&!h.includes(u.name)||u.club&&!$.includes(u.club)||u.country&&!f.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&_<u.note1||u.note2&&M<u.note2)})}function m(p){var M,G,re,ie;const u=(M=p.card)==null?void 0:M.player;if(!u)return"";const b=((G=p.card)==null?void 0:G.evolution_bonus)||0,w=qt(u,u.job,b),h=u.job2?qt(u,u.job2,b):0,$=(i.profile.credits||0)>=p.price,f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=ri[u.job]||"#bbb",_=u.job2?ri[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(re=u.clubs)!=null&&re.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${_};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${_};font-family:Arial Black,Arial">${h}</span>
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
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function y(p){var M,G,re,ie;const u=(M=p.card)==null?void 0:M.player;if(!u)return"";const b=((G=p.card)==null?void 0:G.evolution_bonus)||0,w=qt(u,u.job,b),h=u.job2?qt(u,u.job2,b):0,$=p.status==="sold",f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=ri[u.job]||"#bbb",_=u.job2?ri[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(re=u.clubs)!=null&&re.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${_};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${_};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((ie=p.buyer)==null?void 0:ie.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const b=l(a);p.innerHTML=b.length?b.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,$)=>new Date($.listed_at)-new Date(h.listed_at)),w=s.filter(h=>h.status==="sold").sort((h,$)=>new Date($.sold_at||$.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(y).join(""):"")+(w.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${w.length})</div>`+w.map(y).join(""):"")+(!b.length&&!w.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>Ur(b.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>Vr(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const b=u===p;u.style.background=b?"var(--green)":"var(--tile-bg)",u.style.color=b?"#fff":"var(--tile-fg-dim)",u.style.borderColor=b?"var(--green)":"var(--tile-border)"}),g()})});let x;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(x),x=setTimeout(g,250)})}),g()}async function Ur(e,t,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=t.find(l=>l.id===e);if(!s)return;const d=s.price;if((r.profile.credits||0)<d){o("Crédits insuffisants","error");return}Kr(s,async()=>{const{error:l}=await v.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:r.profile.id});if(l){o("Erreur achat : "+l.message,"error");return}await a();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await Hi(i,n)})}function Kr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function Vr(e,t,i){const{toast:n}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",e).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),Hi(t,i)}async function Yr(e,t){var g,x,p,u,b;const{state:i,navigate:n}=t,r=((x=(g=t==null?void 0:t.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:o},{data:a},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let d=r;const c=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function m(){var h,$,f;const w=document.getElementById("rankings-list");if(w){if(d==="ranked"){const I=o||[];w.innerHTML=I.length>0?I.map((_,M)=>{const G=Di(_.mmr??1e3),re=(_.ranked_wins||0)+(_.ranked_losses||0)+(_.ranked_draws||0),ie=re>0?Math.round((_.ranked_wins||0)/re*100):0,Q=_.id===i.profile.id,j=(_.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${Q?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${M<3?["#D4A017","#a0a0a0","#cd7f32"][M]:"rgba(255,255,255,0.08)"};color:${M<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${M<3?"16":"13"}px">${M<3?["🥇","🥈","🥉"][M]:M+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${G.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${_.club_name} · ${G.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${j?"❓":G.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${G.color}">${j?"Placement":G.label}</div>
              ${j?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${ie}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const I=a||[];w.innerHTML=I.length>0?I.map((_,M)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(M)};color:${l(M)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${M<3?"16":"13"}px">${M<3?["🥇","🥈","🥉"][M]:M+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${_.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${_.top1} 🥈${_.top2} 🥉${_.top3}</div>
            <div style="color:var(--tile-fg-dim)">${_.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const I=s||[];w.innerHTML=I.length>0?I.map((_,M)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${_.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(M)};color:${l(M)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${M<3?"16":"13"}px">${M<3?["🥇","🥈","🥉"][M]:M+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${_.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:var(--green)">${_.win_pct}%</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${_.wins}/${_.total} V</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(h=document.getElementById("tab-ranked"))!=null&&h.style&&(document.getElementById("tab-ranked").style.cssText=y(d==="ranked")),($=document.getElementById("tab-mini-league"))!=null&&$.style&&(document.getElementById("tab-mini-league").style.cssText=y(d==="mini-league")),(f=document.getElementById("tab-random"))!=null&&f.style&&(document.getElementById("tab-random").style.cssText=y(d==="random"))}}const y=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${y(d==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${y(d==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${y(d==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,m(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",m()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",m()}),(b=document.getElementById("tab-random"))==null||b.addEventListener("click",()=>{d="random",m()})}async function Wr(e,t){var I,_,M,G;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(I=document.getElementById("ranked-back"))==null||I.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,m=s.placement_matches??0,y=m<10,g=Math.max(0,10-m),x=Di(d),p=Vn(d),u=bi.findIndex(re=>re.id===x.id),b=bi[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=h>0?Math.round((s.ranked_wins||0)/h*100):0,f=bi.map(re=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${x.id===re.id?1:.35};
      transform:${x.id===re.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${x.id===re.id?"28px":"20px"}">${re.emoji}</div>
      <div style="font-size:9px;color:${re.color};font-weight:${x.id===re.id?"900":"400"};letter-spacing:0.5px">${re.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${w[x.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${x.color}40">
      <div style="font-size:52px;margin-bottom:4px">${x.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${x.color};letter-spacing:3px;text-transform:uppercase">${x.label}</div>
    </div>

    <!-- Progression bar -->
    ${x.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${x.emoji} ${x.label}</span>
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${x.color},${x.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
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
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${m}/10</div>
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
        background:linear-gradient(135deg,${x.color},${x.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${x.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(_=document.getElementById("ranked-back"))==null||_.addEventListener("click",()=>n("home")),(M=document.getElementById("ranked-leaderboard-btn"))==null||M.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(G=document.getElementById("ranked-play-btn"))==null||G.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:y}})})}async function Xr(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(l=>l.status==="finished"),d=(o||[]).filter(l=>l.status==="in_progress");function c(l){const m=l.home_id===r.id;m?l.home_score:l.away_score,m?l.away_score:l.home_score;const y=l.winner_id===r.id,g=l.home_score===l.away_score&&l.status==="finished",x=l.status!=="finished"?"…":g?"N":y?"V":"D",p=l.status!=="finished"||g?"#888":y?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=l.home_id===r.id?l.away:l.home;let h;l.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let $="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(l.created_at),I=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),_=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${I}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${_}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${x}</span>
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
  </div>`}Yn(Xn);const be={user:null,profile:null,page:"home",params:{}};function Dt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Jr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ci(){document.getElementById("modal-overlay").classList.add("hidden")}async function Vt(){if(!be.user)return;const{data:e}=await v.from("users").select("*").eq("id",be.user.id).single();e&&(be.profile=e)}const Rn="mw_theme";function Nn(){return localStorage.getItem(Rn)||"dark"}function Qr(e){var t;localStorage.setItem(Rn,e),Zr(e),(t=be.profile)!=null&&t.id&&v.from("users").update({theme:e}).eq("id",be.profile.id).then(()=>{})}function Zr(e){document.documentElement.setAttribute("data-theme",e)}function Ft(e,t={}){be.page=e,be.params=t,On()}async function On(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===be.page)});const t=document.getElementById("nav-credits");t&&be.profile&&(t.textContent=`💰 ${(be.profile.credits||0).toLocaleString("fr")}`);const i={state:be,navigate:Ft,toast:Dt,openModal:Jr,closeModal:Ci,refreshProfile:Vt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',be.page){case"home":await tn(e,i);break;case"settings":await Ei(e,i);break;case"collection":await Lo(e,i);break;case"decks":await Ti(e,i);break;case"boosters":await Go(e,i);break;case"ranked":await Wr(e,i);break;case"match":{const s=be.params&&be.params.matchMode||"vs_ai_easy";s==="random"?await Mi(e,i,!1):s==="ranked"?await Mi(e,i,!0):s==="friend"?await _r(e,i,(n=be.params)==null?void 0:n.friendId,(r=be.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await fn(e,i,(o=be.params)==null?void 0:o.mlMatchId,(a=be.params)==null?void 0:a.leagueId):await tr(e,i);break}case"market":await Hr(e,i);break;case"rankings":await Yr(e,i);break;case"matches":await Xr(e,i);break;case"friends":await no(e,i);break;case"mini-league":await Tr(e,i);break;case"match-mini-league":{const s=be.params||{};await fn(e,i,s.mlMatchId,s.leagueId);break}default:await tn(e,i)}}function ea(){var n,r;const e=document.getElementById("app"),t=be.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.20-0833" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Ft(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>ta()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Ft("settings"))}async function ta(){const{data:e}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function ia(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function na(){document.documentElement.setAttribute("data-theme",Nn()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ci()}),document.getElementById("modal-close").addEventListener("click",Ci);const{data:{session:e}}=await v.auth.getSession();if(!e){gn(),ia(document.getElementById("app"),{onPlay:()=>Qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Dt})});return}be.user=e.user,await Vt(),gn();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),Wn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!be.profile){Qn(document.getElementById("app"),{state:be,navigate:async()=>{await Vt(),ki()},toast:Dt,refreshProfile:Vt});return}const t=Array.isArray(be.profile.pending_boosters)?be.profile.pending_boosters:[];if(!be.profile.onboarding_done&&t.length>0){Yo(document.getElementById("app"),{state:be,navigate:()=>ki(),toast:Dt,refreshProfile:Vt});return}ki(),setTimeout(()=>Or(be.profile,Ft,Dt),800),v.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(be.user=null,be.profile=null,document.getElementById("app").innerHTML="",Qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Dt}))})}function oa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function mi(){const e=document.getElementById("app");e&&(e.style.height=oa()+"px")}window.addEventListener("resize",mi);window.addEventListener("orientationchange",()=>setTimeout(mi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",mi);function ki(){const e=()=>{var i;(i=be.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",be.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",mi(),ea(),On()}function gn(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Hn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}na().catch(e=>{console.error("Échec du démarrage:",e),Hn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Hn("Le serveur met trop de temps à répondre.")},12e3);
