const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Bb-Ce4un.js","assets/formation-links-CMI0Kx3r.css"])))=>i.map(i=>d[i]);
import{s as v,l as Ht,m as Bi,F as qi,r as Ce,j as ii,h as Di,n as Kn,o as Vn,T as bi,k as Yn,p as Wn,b as Xn}from"./formation-links-Bb-Ce4un.js";const Jn="/";function Qi(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,d,c,l,m;const o=n==="login";e.innerHTML=`
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
  `;function s(){var x;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),m=((x=document.getElementById("setup-club"))==null?void 0:x.value)||"MW",y=m.trim().split(" ").filter(Boolean),g=y.length>=2?(y[0][0]+y[1][0]).toUpperCase():m.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),l&&(l.textContent=g,l.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await v.from("users").select("id").eq("pseudo",c).maybeSingle();if(m){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await v.from("users").select("id").eq("club_name",c).maybeSingle();if(m){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),y=document.getElementById("step3-finish");m.textContent="",y.disabled=!0,y.textContent="Création en cours…";try{const{error:g}=await v.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:o,club_color2:a,credits:1e4});if(g)throw g;await Zn(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){m.textContent=g.message,y.disabled=!1,y.textContent="🚀 Créer mon profil !"}})}async function Zn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const eo="modulepreload",to=function(e){return"/"+e},Zi={},mn=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=to(d),d in Zi)return;Zi[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":eo,c||(m.as="script"),m.crossOrigin="",m.href=d,s&&m.setAttribute("nonce",s),document.head.appendChild(m),c)return new Promise((y,g)=>{m.addEventListener("load",y),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Xt="#1A6B3C",Jt="#cc2222",io="#D4A017",en="#888";async function no(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await xn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>ro(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>yn(i,n,null,t))}async function xn(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${Jt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(o||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let m={};if(l.length){const{data:g}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(g||[]).forEach(x=>{m[x.id]=x})}const y=(o||[]).map(g=>({friendshipId:g.id,friend:m[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!y.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${y.length} ami${y.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${y.map(({friendshipId:g,friend:x})=>oo(x,g)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>ao(e,g.dataset.stats,g.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.friendId,p=g.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await v.from("friend_match_invites").select("id").eq("inviter_id",x).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),w=!!b;console.log("[Friends] clic match",{fid:x,fname:p,isAccepting:w}),n("match",{matchMode:"friend",friendId:x,friendName:p,isAccepting:w})})})}function oo(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Xt,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
      <div id="add-friend-error" style="color:${Jt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
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
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Xt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${y.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Jt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Pi()}`,document.body.appendChild(c);const m=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",m),c.addEventListener("click",y=>{y.target===c&&m()}),c.querySelectorAll("[data-accept]").forEach(y=>{y.addEventListener("click",async()=>{const{error:g}=await v.from("friendships").update({status:"accepted"}).eq("id",y.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}y.closest("div[style]").remove(),t("✅ Ami accepté !","success"),xn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(y=>{y.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",y.dataset.decline),y.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function ao(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=a?c.wins_p1||0:c.wins_p2||0,m=a?c.wins_p2||0:c.wins_p1||0,y=c.draws||0,g=a?c.goals_p1||0:c.goals_p2||0,x=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,w=($,f,C,k=Xt,I=Jt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${k}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${I}">${C}</div>
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
        ${w("Buts encaissés",x,g,Jt,Xt)}
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
        background:${Xt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const so="2026.07.20-2329";async function tn(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
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
  </div>`,requestAnimationFrame(()=>{var m,y,g,x,p;const s=((m=window.visualViewport)==null?void 0:m.height)||window.innerHeight,d=((y=document.querySelector(".top-nav"))==null?void 0:y.offsetHeight)||56,c=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-d-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((x=e.querySelector(".home-hero"))==null?void 0:x.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const w=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((D,ie)=>{var ne;return D+(((ne=document.getElementById(ie))==null?void 0:ne.offsetHeight)||0)},0),$=12*5,f=s-d-c-u-w-h-$-32,C=Math.max(80,Math.round(f*.28)),k=Math.max(160,Math.round(f*.72)),I=Math.floor((k-10)/2);b&&(b.style.minHeight=b.style.maxHeight=C+"px"),e.querySelectorAll(".play-tile").forEach(D=>{D.style.minHeight=D.style.height=I+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(D=>{D.style.height=Math.round(I*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){fo(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()}),hn(t,n),uo(t,n,i),bn(t,n,i),lo(t,n))}async function lo(e,t){const i=e.profile.id,{data:n}=await v.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(o=>{o.addEventListener("click",()=>{Qr(o.dataset.themeChoice),Ei(e,t)})}),e.querySelector("#sound-toggle").addEventListener("click",()=>{go(!$i()),Ei(e,t)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()})}const qe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ne(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const nn=["ATT","MIL","DEF","GK"];function wn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Bi(i).some(([l,m])=>l===e.position&&m===t.position||l===t.position&&m===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=nn.indexOf(e._line||e.job),a=nn.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function _n(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!wn(a,s,t))continue;const d=Ht(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function Qt(e,t={},i){let n=0,r=0;e.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,m=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?l*2:l,r+=(d.boost||0)+m});const o=n+r,a=_n(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function Zt(e,t={},i){const n=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+c+(s.boost||0)+l},0),r=_n(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Gi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function kn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const d=t==="attack"?Ne(a,"ATT"):a._line==="GK"?Ne(a,"GK"):Ne(a,"DEF");return(t==="attack"?Ne(s,"ATT"):s._line==="GK"?Ne(s,"GK"):Ne(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function xo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const yo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function bo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=$n(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function $n(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ho(e,t){!e||!t||await Promise.all([on(e,"win"),on(t,"loss")])}async function on(e,t){const{data:i}=await v.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=yo[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,d=r.player.note_max??10,c=$n(r.player),l=r.current_note??c,m=Math.min(d,Math.max(s,l+a));return v.from("cards").update({current_note:m}).eq("id",r.id)}))}const vo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},hi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ni=["GK","DEF","MIL","ATT"],wo=["Tous","GK","DEF","MIL","ATT"],_o={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function rn(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function ko(e){return e.length?e.reduce((t,i)=>rn(i)>rn(t)?i:t,e[0]):e[0]}function $o(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Eo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Lo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function vi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function wi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ce(r,{width:140})}
  </div>`}function an(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ce(e,{width:140})}
  </div>`}async function To(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(M=>M.card_type==="player"&&M.player),l=(s||[]).filter(M=>M.card_type==="game_changer"),m=(s||[]).filter(M=>M.card_type==="formation"),y=(s||[]).filter(M=>M.card_type==="stadium"),{data:g}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),x={};(g||[]).forEach(M=>{x[M.name]=M});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach(M=>{u[M.id]=M}),y.forEach(M=>{M.stadium_def&&(u[M.stadium_id]=M.stadium_def)});const b=Object.keys(qi),w=Object.keys(qe),h={};c.forEach(M=>{const F=M.player.id;h[F]=(h[F]||0)+1}),new Set(Object.keys(h).map(M=>String(M)));const $=new Set(m.map(M=>M.formation)),f=new Set(l.map(M=>M.gc_type));let C="player",k="Tous",I="",D=!1;function ie(){return[...c].sort((M,F)=>{const O=ni.indexOf(M.player.job),Q=ni.indexOf(F.player.job);return O!==Q?O-Q:(M.player.surname_real||"").localeCompare(F.player.surname_real||"")})}function ne(){return[...d||[]].sort((M,F)=>{const O=ni.indexOf(M.job),Q=ni.indexOf(F.job);return O!==Q?O-Q:(M.surname_real||"").localeCompare(F.surname_real||"")})}function Z(){return ie().filter(M=>{const F=M.player,O=k==="Tous"||F.job===k,Q=!I||`${F.firstname} ${F.surname_real}`.toLowerCase().includes(I);return O&&Q})}function j(){return ne().filter(M=>{const F=k==="Tous"||M.job===k,O=!I||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(I);return F&&O})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="player"?"var(--green)":"transparent"};
        color:${C==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="formation"?"var(--green)":"transparent"};
        color:${C==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="stadium"?"#4FC3F7":"transparent"};
        color:${C==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${y.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:var(--tile-bg);border-bottom:1px solid var(--tile-border);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:center;padding:0 16px;overflow:visible"></div>
    <div id="col-gap" style="flex-shrink:0;height:0"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:0 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none;align-items:center"></div>
    </div>
  </div>`,function(F){const O=document.getElementById(F);if(!O)return;O.addEventListener("wheel",pe=>{Math.abs(pe.deltaY)<=Math.abs(pe.deltaX)||(pe.preventDefault(),O.scrollLeft+=pe.deltaY)},{passive:!1});let Q=!1,H=0,B=0,R=!1,le=!1;O.addEventListener("mousedown",pe=>{Q=!0,R=!1,H=pe.pageX,B=O.scrollLeft}),window.addEventListener("mouseup",()=>{Q=!1,R&&(O.style.cursor="",le=!0),R=!1}),window.addEventListener("mousemove",pe=>{if(!Q)return;const be=pe.pageX-H;!R&&Math.abs(be)<6||(R=!0,O.style.cursor="grabbing",pe.preventDefault(),O.scrollLeft=B-be)}),O.addEventListener("click",pe=>{le&&(pe.stopPropagation(),pe.preventDefault(),le=!1)},!0)}("col-grid");function z(){const M=document.getElementById("col-filters");M&&(C==="player"?(M.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${I}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${wo.map(F=>`
            <button class="filter-btn" data-job="${F}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${F===k?"var(--green)":"var(--tile-border)"};
                background:${F===k?"var(--green)":"#fff"};
                color:${F===k?"#fff":"var(--tile-fg-dim)"}">
              ${F}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${D?"var(--yellow)":"var(--tile-border)"};
              background:${D?"var(--yellow)":"#fff"};
              color:${D?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${D?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",F=>{I=F.target.value.toLowerCase(),Y()}),e.querySelectorAll(".filter-btn").forEach(F=>{F.addEventListener("click",()=>{k=F.dataset.job,z(),Y()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{D=!D,z(),Y()})):(M.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${D?"var(--yellow)":"var(--tile-border)"};
              background:${D?"var(--yellow)":"#fff"};
              color:${D?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${D?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{D=!D,z(),Y()})))}function Y(){const M=document.getElementById("col-grid");M&&(C==="player"?ue(M):C==="formation"?N(M):C==="stadium"?U(M):V(M))}function oe(M,F,O,Q,H,B=0){const R=document.getElementById("col-grid"),le=document.getElementById("col-big");if(!R||!le)return;var pe=0;function be(){var Ue;const we=window.innerWidth>=768,Te=document.getElementById("col-big"),Se=document.getElementById("col-gap"),ke=((Ue=document.getElementById("col-grid"))==null?void 0:Ue.parentElement)||null,$e=Te?Te.closest(".page"):null;if(Te&&ke&&$e){let Ee=0;Array.from($e.children).forEach(function(L){L!==Te&&L!==ke&&L!==Se&&(Ee+=L.offsetHeight)});const Le=Math.max(0,$e.clientHeight-Ee),Fe=Math.round(Le*(B/100)),_=Math.max(0,Le-Fe),E=we?50/71:45/63,T=Math.round(_*E),A=Math.max(0,_-T);Se&&(Se.style.height=Fe+"px"),Te.style.flex="none",Te.style.height=T+"px",Te.style.minHeight="0",ke.style.flex="none",ke.style.height=A+"px",ke.style.minHeight="0",ke.style.display="flex",ke.style.overflow="hidden"}const je=document.getElementById("col-grid");je&&(je.style.height="100%",je.style.flexShrink="0",je.style.overflowX="auto",je.style.overflowY="hidden",je.style.alignItems="center",je.style.width="100%"),le.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+F(M[pe])+"</div>";var De=le.querySelector("[data-card-id],[data-form-id],[data-gc-id]");De&&De.addEventListener("click",function(){Q(M[pe])}),requestAnimationFrame(function(){var Ee=document.getElementById("big-card-inner");if(!(!Ee||!le)){var Le=le.clientHeight,Fe=le.clientWidth-16,_=Ee.offsetHeight,E=Ee.offsetWidth;if(_>0&&E>0&&Le>40){var T=Math.min(Le/_,Fe/E);Ee.style.transform="scale("+T.toFixed(3)+")",Ee.style.transformOrigin="center center"}}}),R.innerHTML=M.map(function(Ee,Le){var Fe=Le===pe,_="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Fe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Le+'" style="'+_+'">'+O(Ee,Fe)+"</div>"}).join(""),R.querySelectorAll(".col-mini-item").forEach(function(Ee){Ee.addEventListener("click",function(){pe=Number(Ee.dataset.idx),be(),Ee.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var Ee=je?je.clientHeight:0,Le=R.querySelector(".col-mini-item > div");if(!(!Ee||!Le)){var Fe=Le.style.zoom;Le.style.zoom="1";var _=Le.offsetHeight;if(Le.style.zoom=Fe,!(_<=0)){var E=Ee/_;R.querySelectorAll(".col-mini-item > div").forEach(function(T){T.style.zoom=E.toFixed(4)})}}})}be()}function fe(M){var F=window.innerWidth>=768?.76:.54,O;if(!M||M._fake){var Q=M?M.player:null;if(!Q)return"";O=an(Q)}else O=wi(M,"");return'<div style="display:inline-block;zoom:'+F+';pointer-events:none;line-height:0">'+O+"</div>"}function me(M,F,O){F=F||100,O=O||140;var Q=ii[M]||{},H={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},B=Math.max(3,Math.round(F*.06)),R=Object.entries(Q).map(function(pe){var be=pe[0],we=pe[1],Te=be.replace(/\d+$/,""),Se=H[Te]||"#888",ke=Math.round(we.x*F),$e=Math.round(we.y*O);return'<circle cx="'+ke+'" cy="'+$e+'" r="'+B+'" fill="'+Se+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),le=Math.max(1,Math.round(F/50));return'<svg viewBox="0 0 '+F+" "+O+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+F+'" height="'+O+'" fill="#1A6B3C"/><rect x="'+Math.round(F*.2)+'" y="'+Math.round(O*.02)+'" width="'+Math.round(F*.6)+'" height="'+Math.round(O*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+le+'"/><line x1="0" y1="'+Math.round(O*.5)+'" x2="'+F+'" y2="'+Math.round(O*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+le+'"/><ellipse cx="'+Math.round(F*.5)+'" cy="'+Math.round(O*.5)+'" rx="'+Math.round(F*.18)+'" ry="'+Math.round(O*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+le+'"/><rect x="'+Math.round(F*.2)+'" y="'+Math.round(O*.82)+'" width="'+Math.round(F*.6)+'" height="'+Math.round(O*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+le+'"/>'+R+"</svg>"}function S(M,F,O){var Q=O>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+O+"</div>":"",H=F?'data-form-id="'+F.id+'"':"",B=M.length>7?14:M.length>5?16:19,R=!!F;return"<div "+H+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(R?"#2a7a40":"#bbb")+";background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(R?"":"filter:grayscale(1);opacity:0.5")+'">'+Q+'<div style="padding:8px 6px 6px;background:var(--tile-bg);text-align:center;border-bottom:3px solid '+(R?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+B+"px;font-weight:900;color:"+(R?"#1A6B3C":"#aaa")+';line-height:1">'+M+'</div></div><div style="flex:1;overflow:hidden;background:'+(R?"#1A6B3C":"#ccc")+'">'+me(M,140,220)+"</div></div>"}function W(M,F){var O=window.innerWidth>=768?.76:.54,Q=140,H=Math.round(140*657/507),B=Math.round(H*.28),R=H-B,le=M.length>7?9:11,pe=me(M,Q,R),be=F?"1.5px solid #2a7a40":"1px solid #ddd",we=F?"":"filter:grayscale(1);opacity:0.45;",Te=F?"#1A6B3C":"#bbb",Se="#fff";return'<div style="display:inline-block;zoom:'+O+';line-height:0;pointer-events:none"><div style="width:'+Q+"px;height:"+H+"px;border-radius:6px;border:"+be+";background:var(--tile-bg);display:flex;flex-direction:column;overflow:hidden;"+we+'"><div style="height:'+B+"px;background:"+Te+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+le+"px;font-weight:900;color:"+Se+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(Q-4)+'px;line-height:1.2;display:inline-block">'+M+'</span></div><div style="height:'+R+'px;overflow:hidden;flex-shrink:0">'+pe+"</div></div></div>"}function ue(M){if(D){const F=j();if(!F.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const O=F.map(Q=>c.find(H=>H.player.id===Q.id)||{_fake:!0,player:Q,id:"fake-"+Q.id});oe(O,Q=>Q._fake?an(Q.player):wi(Q,""),Q=>Q._fake?fe({player:Q.player,id:"x",_fake:!0}):fe(Q),Q=>{Q._fake||sn(Q,c,h,t)})}else{const F=Z();if(!F.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const O={};F.forEach(H=>{const B=H.player.id;O[B]||(O[B]=[]),O[B].push(H)});const Q=Object.values(O).map(H=>ko(H));oe(Q,H=>{const B=h[H.player.id]||1,R=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",pe=c.filter(be=>be.player.id===H.player.id&&be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return wi(H,R+pe)},H=>fe(H),H=>sn(H,c,h,t))}}function N(M){const F=D?b:[...$];if(!F.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const O=F.map(Q=>({formation:Q,card:m.find(H=>H.formation===Q)||null,owned:$.has(Q)}));oe(O,({formation:Q,card:H,owned:B})=>S(Q,B?H:null,B?m.filter(R=>R.formation===Q).length:0),({formation:Q,owned:H})=>W(Q,H),({card:Q,owned:H})=>{H&&Q&&Io(Q,m,t,o)},"#1A6B3C",5)}function V(M){const F=Object.keys(x),O=D?F.length?F:w:[...f];if(!O.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const Q=O.map(H=>({type:H,gc:qe[H]||{icon:"⚡",desc:""},def:x[H]||null,owned:f.has(H),card:l.find(B=>B.gc_type===H)||null}));oe(Q,({type:H,gc:B,def:R,owned:le,card:pe})=>{var Le;const be=(R==null?void 0:R.name)||H,we=le?l.filter(Fe=>Fe.gc_type===H).length:0,Te=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Se=(R==null?void 0:R.gc_type)==="ultra_game_changer",ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},$e={purple:"#b06ce0",light_blue:"#00d4ef"},je=ke[R==null?void 0:R.color]||ke.purple,De=$e[R==null?void 0:R.color]||$e.purple,Ue=(R==null?void 0:R.effect)||B.desc||"",Ee=R!=null&&R.image_url?`/icons/${R.image_url}`:((Le=R==null?void 0:R.club)==null?void 0:Le.logo_url)||(R!=null&&R.country_code?`https://flagsapi.com/${R.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return le&&pe?`<div data-gc-id="${pe.id}" data-gc-type="${H}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${De};background:${je};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${De}66;cursor:pointer">
          ${Te}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${be.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${be}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Se?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ee?`<img src="${Ee}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${B.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Ue.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${be}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${B.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:H,gc:B,def:R,owned:le})=>{const pe=window.innerWidth>=768?.76:.54,be=(R==null?void 0:R.name)||H,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Te={purple:"#9b59b6",light_blue:"#00bcd4"},Se=we[R==null?void 0:R.color]||we.purple,ke=Te[R==null?void 0:R.color]||Te.purple,$e=R!=null&&R.image_url?`/icons/${R.image_url}`:null,je=Math.round(140*657/507);return le?`<div style="display:inline-block;zoom:${pe};line-height:0;pointer-events:none"><div style="width:140px;height:${je}px;border-radius:8px;background:${Se};border:1px solid ${ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:34px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:10px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;line-height:1.2;display:inline-block">${be}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:0">${$e?`<img src="${$e}" style="max-width:110px;max-height:100px;object-fit:contain">`:`<span style="font-size:28px;line-height:1">${B.icon}</span>`}</div><div style="height:30px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:8px;color:rgba(255,255,255,0.7);text-align:center;line-height:1.2;display:inline-block">${((R==null?void 0:R.effect)||B.desc||"").slice(0,26)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${pe};line-height:0;pointer-events:none"><div style="width:140px;height:${je}px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:24px;line-height:1">${B.icon}</span><span style="font-size:9px;color:#aaa;margin-top:4px;text-align:center;padding:0 6px;line-height:1.2;display:inline-block">${be}</span></div></div>`},({type:H,owned:B,def:R})=>{B&&zo(H,R,o)},"#7a28b8",5)}function U(M){const F="#4FC3F7",O="/";if(!y.length){M.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const Q={};y.forEach(B=>{const R=B.stadium_id||"?";(Q[R]=Q[R]||[]).push(B)});const H=Object.entries(Q).map(([B,R])=>({sid:B,def:u[B]||null,count:R.length,card:R[0]}));oe(H,({def:B,count:R})=>{var Se,ke;const le=(B==null?void 0:B.name)||"?",pe=((Se=B==null?void 0:B.club)==null?void 0:Se.encoded_name)||(B==null?void 0:B.country_code)||"—",be=B!=null&&B.image_url?`${O}icons/${B.image_url}`:((ke=B==null?void 0:B.club)==null?void 0:ke.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),we=be?`<img src="${be}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Te=R>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${R}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #0288D1;background:linear-gradient(160deg,${F},#0288D1);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${F}66">
          ${Te}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${le}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${we}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${pe}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:B,count:R})=>{var ke,$e;const le=window.innerWidth>=768?.76:.54,pe=(B==null?void 0:B.name)||"?",be=((ke=B==null?void 0:B.club)==null?void 0:ke.encoded_name)||(B==null?void 0:B.country_code)||"—",we=B!=null&&B.image_url?`${O}icons/${B.image_url}`:(($e=B==null?void 0:B.club)==null?void 0:$e.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Te=we?`<img src="${we}" style="width:44px;height:44px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:22px">🏟️</span>',Se=Math.round(140*657/507);return`<div style="display:inline-block;zoom:${le};line-height:0;pointer-events:none">
          <div style="width:140px;height:${Se}px;border-radius:8px;background:linear-gradient(160deg,${F},#0288D1);border:1px solid #0288D1;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:36px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:2px 6px">
              <div style="font-size:6px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;line-height:1.2">🏟️ STADE</div>
              <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:1px;line-height:1.2;display:inline-block">${pe}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:0">${Te}</div>
            <div style="height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:3px;gap:2px">
              <div style="font-size:8px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center;line-height:1.2">${be}</div>
              <div style="font-size:10px;font-weight:900;color:#FFD700;line-height:1.2">+10 ⭐</div>
            </div>
          </div>
        </div>`},null,F,5)}e.querySelectorAll(".col-tab-btn").forEach(M=>{M.addEventListener("click",()=>{C=M.dataset.tab,k="Tous",I="",D=!1,e.querySelectorAll(".col-tab-btn").forEach(F=>{const O=F.dataset.tab===C;F.style.borderBottomColor=O?"var(--green)":"transparent",F.style.color=O?"var(--green)":"var(--tile-fg-dim)"}),z(),Y()})}),z(),Y()}function zo(e,t,i){const n=qe[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,d=a[t==null?void 0:t.color]||a.purple,c=(t==null?void 0:t.name)||e,l=(t==null?void 0:t.effect)||n.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const oi=1e3;function Io(e,t,i,n){var x,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const b=ii[c]||{},w=qi[c]||[],h=290,$=360,f=20;function C(I){const D=b[I];return D?{x:D.x*h,y:D.y*$}:null}let k=`<svg width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[I,D]of w){const ie=C(I),ne=C(D);!ie||!ne||(k+=`<line x1="${ie.x}" y1="${ie.y}" x2="${ne.x}" y2="${ne.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const I of Object.keys(b)){const D=C(I);if(!D)continue;const ie=I.replace(/\d+/,""),ne=l[ie]||"#555";k+=`<circle cx="${D.x}" cy="${D.y}" r="${f}" fill="${ne}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${D.x}" y="${D.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>`}return k+="</svg>",k}const y=t.filter(b=>b.formation===c);y.length;const g=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${oi}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(x=document.getElementById("direct-sell-form-btn"))==null||x.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${oi.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=y.find(h=>!h.is_for_sale)||y[0];if(!b){o("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",b.id),await v.from("transfer_history").delete().eq("card_id",b.id);const{error:w}=await v.from("cards").delete().eq("id",b.id);if(w){o(w.message,"error");return}await v.from("users").update({credits:(r.profile.credits||0)+oi}).eq("id",r.profile.id),await d(),o(`+${oi.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await v.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function sn(e,t,i,n){var fe,me,S,W,ue;const{state:r,toast:o,openModal:a,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,m=t.filter(N=>N.player.id===l.id),y=m.length,g=e.evolution_bonus||0,x=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?g:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?g:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?g:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?g:0)),p=l.rarity||"normal",{data:u}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",x).gte("note_max",x).order("note_min",{ascending:!1}).limit(1);((fe=u==null?void 0:u[0])==null?void 0:fe.price)??_o[p];const b=l.rarity!=="legende";Lo(l);const w=((l.rarity==="pepite"||l.rarity==="papyte")&&e.current_note!=null?e.current_note:vi(l,l.job))+g,h=l.rarity==="pepite"||l.rarity==="papyte",$=l.job2?(h?bo(e,$o(l.job2)):vi(l,l.job2))+(vi(l,l.job2)>0?g:0):null;hi[l.job],l.job2&&hi[l.job2];const f=vo[l.rarity]||"#ccc";Eo[l.country_code]||l.country_code;const C=e.evolution_bonus||0,I=w+C,D=$||0,ie=D>0?D+C:0,ne=m.map(N=>N.id);let Z={};if(ne.length){const{data:N}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(N||[]).forEach(V=>{Z[V.card_id]||(Z[V.card_id]=[]),Z[V.card_id].push(V)})}const j=N=>{const V=N.transferred_at?new Date(N.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",U=N.source==="booster"?"Booster":N.price?N.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.club_name}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">(${N.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${N.source==="booster"?"var(--tile-fg-dim)":"var(--yellow)"}">${U}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">${V}</div>
      </div>
    </div>`},z=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${y>1?`(${y})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((N,V)=>{const U=Z[N.id]||[],M=N.is_for_sale,F=U.length?U[U.length-1]:null,Q=(l.rarity==="pepite"||l.rarity==="papyte")&&N.current_note!=null?` (☆${N.current_note})`:"";return`
            <div data-card-id="${N.id}" data-card-idx="${V}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${M?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${N.id}" ${M?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${V+1}${Q}${M?" 🏷️ En vente":""}</div>
                  ${F?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${F.club_name} · ${F.source==="booster"?"Booster":F.price?F.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${V}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${U.length?`${U.length} club${U.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${V}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${U.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${I}${l.job2&&D>0?` / ${ie}`:""}`:`Note actuelle : ${I}${l.job2&&D>0?` / ${ie}`:""}`}
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
      ${Ce({...l,_evolution_bonus:g},{width:160})}


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
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([N,V])=>{const U=hi[N],M=N==="GK"?"#fff":U,F=N===l.job||N===l.job2,O=(Number(V)||0)+(F&&C>0?C:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${U};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${M};font-family:Arial Black,Arial;line-height:1">${O}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${M}">${N}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${y}</div>
        </div>
      </div>
    </div>
    ${z}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(me=document.getElementById("close-detail"))==null||me.addEventListener("click",s);let Y=new Set;const oe=()=>{const N=Y.size,V=document.getElementById("sell-action-panel");if(!V)return;V.style.display=N>0?"block":"none",document.getElementById("sell-selected-count").textContent=N;const U=document.getElementById("evolve-btn");U&&(U.textContent=`⬆️ Évoluer ${N>1?"(+"+N+")":""}`)};document.querySelectorAll(".expl-check").forEach(N=>{N.addEventListener("change",()=>{const V=N.dataset.id;N.checked?Y.add(V):Y.delete(V);const U=N.closest(".exemplaire-row");U&&(U.style.borderColor=N.checked?"#1A6B3C":"#eee"),oe()})}),document.querySelectorAll(".exemplaire-row").forEach(N=>{N.addEventListener("click",V=>{if(V.target.closest("button")||V.target.tagName==="INPUT")return;const U=N.querySelector(".expl-check");U&&!U.disabled&&(U.checked=!U.checked,U.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(N=>{N.addEventListener("click",V=>{V.stopPropagation();const U=document.querySelector(`.expl-hist[data-hist="${N.dataset.idx}"]`);U&&(U.style.display=U.style.display==="none"?"flex":"none")})}),(S=document.getElementById("evolve-btn"))==null||S.addEventListener("click",async()=>{if(y<=1)return;const N=[...Y];if(!N.length)return;if(Y.has(e.id)){const H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",H.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(H),H.querySelector("#err-close").addEventListener("click",()=>H.remove()),H.addEventListener("click",B=>{B.target===H&&H.remove()});return}const V=N.filter(H=>H!==e.id),U=l.rarity==="legende"?2:1;if((V.length||1)*U,!(!V.length&&N.length===1&&N[0]===e.id)){if(!V.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(H=>{const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",B.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${V.length}</strong> copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}<br>
            📈 Note : <strong>${w+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${w+(e.evolution_bonus||0)+V.length*U}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+V.length*U}</strong>`:""}
            ${l.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${U} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(B),B.querySelector("#sac-cancel").addEventListener("click",()=>{B.remove(),H(!1)}),B.querySelector("#sac-ok").addEventListener("click",()=>{B.remove(),H(!0)}),B.addEventListener("click",R=>{R.target===B&&(B.remove(),H(!1))})}))return;if(V.length){await v.from("market_listings").delete().in("card_id",V),await v.from("deck_cards").delete().in("card_id",V),await v.from("transfer_history").delete().in("card_id",V),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",V);const{error:H}=await v.from("cards").delete().in("id",V);if(H){o("Erreur suppression : "+H.message,"error");return}}const F=(e.evolution_bonus||0)+V.length*U,{error:O}=await v.from("cards").update({evolution_bonus:F}).eq("id",e.id);if(O){o("Erreur évolution : "+O.message,"error");return}const Q=w+F;o(`⬆️ ${l.firstname} ${l.surname_real} : note ${w+e.evolution_bonus||w} → ${Q}${V.length?` · ${V.length} copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(W=document.getElementById("market-sell-btn"))==null||W.addEventListener("click",async()=>{var O;const N=[...Y];if(!N.length){o("Sélectionne au moins un exemplaire","warning");return}const V=parseInt((O=document.getElementById("sell-market-price"))==null?void 0:O.value);if(!V||V<1){o("Prix invalide","error");return}const{error:U}=await v.from("cards").update({is_for_sale:!0,sale_price:V}).in("id",N);if(U){o(U.message,"error");return}const M=N.map(Q=>({seller_id:r.profile.id,card_id:Q,price:V,status:"active"})),{error:F}=await v.from("market_listings").insert(M);F&&console.warn("[Market] insert listings:",F.message),o(`${N.length} carte${N.length>1?"s":""} mise${N.length>1?"s":""} en vente à ${V.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(ue=document.getElementById("cancel-sell-btn"))==null||ue.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}function dn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function So(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const si={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Li(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await dn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await v.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){r(d.message,"error");return}r("Deck créé !","success"),ln(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>ln(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await dn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await v.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){r(d.message,"error");return}r("Deck renommé !","success"),Li(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await So(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await v.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Li(e,t)})})}async function ln(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("*").eq("id",e).single(),{data:a}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await v.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),l=(s||[]).filter(b=>b.card_type==="stadium"),m=[...new Set(l.map(b=>b.stadium_id).filter(Boolean))];let y={};if(l.forEach(b=>{b.stadium_def&&b.stadium_id&&(y[b.stadium_id]=b.stadium_def)}),m.length&&Object.keys(y).length<m.length){const{data:b}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(b||[]).forEach(w=>{y[w.id]=w})}const g=c.map(b=>b.formation).filter(Boolean),{data:x}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";g.length>0&&!g.includes(p)&&(p=g[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:y,availableFormations:g};(x||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),wt(t,u,i)}function wt(e,t,i){var x,p;const{navigate:n}=i;si[t.formation];const r=cn(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(si),s=(x=t.stadiumCards)==null?void 0:x.find(u=>u.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
                ${Ce({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:d})}
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
                  ${Ce({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
  </div>`;const l=window.innerWidth>=900,m=e.querySelector(".deck-pc-layout"),y=e.querySelector(".deck-mobile-layout");m&&(m.style.display=l?"block":"none"),y&&(y.style.display=l?"none":"block"),Ao(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const g=()=>{const{openModal:u,closeModal:b}=i,w=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",w),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const $=cn(t.formation),f={};$.forEach(C=>{t.slots[C]&&(f[C]=t.slots[C])}),t.slots=f,b(),wt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",g)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Mo(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>Bo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),wt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Co(t,e,i)))}function Ao(e,t,i,n){var h,$;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(h=t.stadiumCards)==null?void 0:h.find(f=>f.id===t.stadiumCardId),s=a&&(($=t.stadDefMap)==null?void 0:$[a.stadium_id])||null,d=ii[t.formation]||{},c=Bi(t.formation)||[],l={};for(const f of i){const C=t.slots[f],k=C?t.playerCards.find(I=>I.id===C):null;k!=null&&k.player?l[f]={...k.player,_evolution_bonus:k.evolution_bonus||0,face:k.player.face||null}:l[f]=null}const m=window.innerWidth>=900,y=m?window.innerWidth-280:window.innerWidth-20,g=m?Math.min(y,860):y,x=Math.round(m?g*.82:g*.85),p=m?84:44;let u="";for(const[f,C]of c){const k=d[f],I=d[C];if(!k||!I)continue;const D=k.x*g,ie=Math.round(.03*x+k.y*.85*x),ne=I.x*g,Z=Math.round(.03*x+I.y*.85*x),j=l[f],z=l[C],Y=Ht(j,z);Y==="#ff3333"||Y==="#cc2222"?u+=`<line x1="${D.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${Y}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${D.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${Y}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${D.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ne.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${Y}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const w=Math.round(p*657/507);for(const f of i){const C=d[f];if(!C)continue;const k=l[f],I=C.x*g;C.y*x;const D=Math.round(.03*x+C.y*(.85*x)),ie=Math.round(I-p/2),ne=Math.round(D-w/2);if(k){const Z=f.replace(/\d+/,""),j=s&&(s.club_id&&String(k.club_id)===String(s.club_id)||s.country_code&&k.country_code===s.country_code),z=Ce({...k,_evolution_bonus:k._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:Z});b+=`<div style="position:absolute;left:${ie}px;top:${ne}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${f}">
        <div style="position:relative">${j?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${z}</div>
      </div>`}else{const Z=f.replace(/\d+/,"");b+=`<div style="position:absolute;left:${ie}px;top:${ne}px;width:${p}px;height:${w}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${f}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${Z}</span>
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
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),wt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),wt(t,e,i)})})}function jo(e,t,i,n){var x,p,u,b,w;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(x=t.stadiumCards)==null?void 0:x.find(h=>h.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(h=>h.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const m=new Set;Object.entries(t.slots).forEach(([h,$])=>{var C;if(h===e||!$)return;const f=t.playerCards.find(k=>k.id===$);(C=f==null?void 0:f.player)!=null&&C.id&&m.add(f.player.id)}),t.subs.forEach(h=>{var f;const $=t.playerCards.find(C=>C.id===h);(f=$==null?void 0:$.player)!=null&&f.id&&m.add($.player.id)});const y=new Set,g=t.playerCards.filter(h=>{const $=h.player;return!($.job===a||$.job2===a)||m.has($.id)||y.has($.id)?!1:(y.add($.id),!0)});g.sort((h,$)=>{const f=h.evolution_bonus||0,C=$.evolution_bonus||0,k=(a==="GK"?h.player.note_g:a==="DEF"?h.player.note_d:a==="MIL"?h.player.note_m:h.player.note_a)+(a===h.player.job||a===h.player.job2?f:0);return(a==="GK"?$.player.note_g:a==="DEF"?$.player.note_d:a==="MIL"?$.player.note_m:$.player.note_a)+(a===$.player.job||a===$.player.job2?C:0)-k}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ce($,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],o(),wt(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),wt(i,t,n)})})}function Co(e,t,i){var l,m,y;const{openModal:n,closeModal:r}=i,o=(l=e.stadiumCards)==null?void 0:l.find(g=>g.id===e.stadiumCardId),a=o&&((m=e.stadDefMap)==null?void 0:m[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(g=>{var u;const x=e.slots[g];if(!x)return;const p=e.playerCards.find(b=>b.id===x);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(g=>{var p;const x=e.playerCards.find(u=>u.id===g);(p=x==null?void 0:x.player)!=null&&p.id&&s.add(x.player.id)});const d=new Set,c=e.playerCards.filter(g=>{var x,p,u;return s.has((x=g.player)==null?void 0:x.id)||d.has((p=g.player)==null?void 0:p.id)?!1:(d.add((u=g.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(g=>{const x={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Ce(x,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(y=document.getElementById("close-sub-selector"))==null||y.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{e.subs.push(g.dataset.cardId),r(),wt(t,e,i)})})}async function Bo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(d=>d.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await v.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await v.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await v.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function cn(e){const t=si[e]||si["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function En(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await v.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function qo(e,t){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:e,booster_id:t})}function Do(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Ln=()=>Object.keys(ii),Fo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Po(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ce({...t,_evolution_bonus:i},{width:140})}function Tn(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function Go(e,{state:t,navigate:i,toast:n}){var m,y,g;const r=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await En((y=t.user)==null?void 0:y.id)).map(Tn)}catch(x){console.warn("Erreur chargement boosters DB, fallback hardcodé",x)}o.length||(o=Fo.map(x=>({...x,rates:[],isPub:x.id==="players_pub"})));const a=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(x=>x.data||[]),s=new Set(a.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id)),d=new Set(a.filter(x=>x.card_type==="formation").map(x=>x.formation)),c=new Set(a.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),l={};for(const x of o){if(x.allow_duplicates!==!1||!((g=x.rates)!=null&&g.length))continue;const p=[...new Set((x.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:w}=await v.from("stadium_definitions").select("id");if((w||[]).some(h=>!s.has(h.id))){u=!0;break}}else if(b==="game_changer"){const{data:w}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((w||[]).some(h=>!c.has(h.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:w}=await mn(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-Bb-Ce4un.js").then($=>$.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(w).some(h=>!d.has(h))){u=!0;break}}else{u=!0;break}u||(l[x.id]=!0)}e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(x=>{x.addEventListener("click",async()=>{const p=o.find(u=>u.id===x.dataset.booster);if(p){x.style.opacity="0.5",x.style.pointerEvents="none";try{await Ro(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),x.style.opacity="",x.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(x=>{x.addEventListener("click",p=>{p.stopPropagation();const u=o.find(b=>b.id===x.dataset.boosterId);Uo(u)})})}async function Ro(e,{state:t,toast:i,navigate:n,container:r}){var m,y;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await Vo();const{data:o}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set((o||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let d=[],c=null;try{if((m=e.rates)!=null&&m.length)d=await zi(t.profile,e);else{const g=e.type||"player";g==="player"?d=await zn(t.profile,e.cardCount,e.cost):g==="game_changer"?d=await In(t.profile,e.cardCount,e.cost):g==="formation"?d=await Sn(t.profile,e.cost):d=await zi(t.profile,e)}}catch(g){c=g.message||String(g),console.error("[Booster] Erreur:",g)}if(d!=null&&d.length&&e._boosterId&&await qo(t.user.id,e._boosterId),!(d!=null&&d.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(y=g.querySelector("#anim-close-err"))==null||y.addEventListener("click",()=>g.remove());return}d.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=s.has(g.formation))});const{data:l}=await v.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),An(d,e,n)}function No(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function Oo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>mt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>mt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&mt(n)>=6),i.length||(i=e.filter(n=>mt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&mt(n)>=1&&mt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function zi(e,t){if(t.cost>0){const{error:y}=await v.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(y)throw y}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:y}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=y||[]}else n=r||[];const a=new Set(n.filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set(n.filter(y=>y.card_type==="formation").map(y=>y.formation)),d=new Set(n.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),c=new Set(n.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id).filter(Boolean)),l=new Set,m=[];for(let y=0;y<(t.cardCount||5);y++){const g=Do(t.rates);if(g){if(g.card_type==="player"){const x=k=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[k]||k,p=g.rarity?x(g.rarity):null;let u=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let w=b||[];if((g.note_min||g.note_max)&&(w=w.filter(k=>{const I=Math.max(Number(k.note_g)||0,Number(k.note_d)||0,Number(k.note_m)||0,Number(k.note_a)||0);return(!g.note_min||I>=g.note_min)&&(!g.note_max||I<=g.note_max)})),w.length||(g.note_min||g.note_max?(w=b||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):w=b||[]),!w.length)continue;let h=w.filter(k=>!l.has(k.id));if(i)h.length||(h=w);else if(h=h.filter(k=>!a.has(k.id)),!h.length)continue;const $=h[Math.floor(Math.random()*h.length)];l.add($.id);const f=a.has($.id),{data:C}=await v.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();C&&(m.push({...C,player:$,isDuplicate:f}),v.rpc("record_transfer",{p_card_id:C.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:x}=await v.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=x!=null&&x.length?x:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter($=>!d.has($.name));if(!i&&!u.length)continue;const w=u[Math.floor(Math.random()*u.length)].name,{data:h}=await v.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:w}).select().single();h&&m.push(h)}else if(g.card_type==="formation"){const x=Ln(),p=i?x:x.filter(h=>!s.has(h));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:w}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();w!=null&&w[0]&&m.push({...w[0],isDuplicate:b})}else if(g.card_type==="stadium"){const{data:x,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(x!=null&&x.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?x:x.filter($=>!c.has($.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:w,error:h}=await v.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}w&&m.push({...w,rarity:"normal",_stadiumDef:b})}}}return m}async function zn(e,t,i){if(i>0){const{error:c}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&a?r:c===0?o:n,m=No(),y=Oo(l,m);y&&s.push(y)}a&&await v.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await v.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{v.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function In(e,t,i){const{error:n}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(Ti).map(l=>({name:l,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const l=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:l.name,gc_definition_id:l.id||null}}),{data:s,error:d}=await v.from("cards").insert(a).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(s||[]).map(l=>{const m=r==null?void 0:r.find(y=>y.name===l.gc_type||y.id===l.gc_definition_id);return{...l,_gcDef:m||null}})}async function Sn(e,t){const{error:i}=await v.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await v.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(l=>l.formation)),o=Ln(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:d,error:c}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function An(e,t,i,n=null){var Z,j;if(!e||e.length===0){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",z.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(z),(Z=z.querySelector("#anim-close-err"))==null||Z.addEventListener("click",()=>z.remove());return}e=[...e].sort((z,Y)=>{const oe=z.player?mt(z.player):-1;return(Y.player?mt(Y.player):-1)-oe});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=z=>z.touches&&z.touches[0]?z.touches[0].clientX:z.clientX;function l(z){o||(d=!0,s.style.opacity="1",m(z))}function m(z){if(!d||o)return;const Y=a.getBoundingClientRect(),oe=c(z)-Y.left,fe=Math.max(0,Math.min(1,oe/Y.width));s.style.width=fe*Y.width+"px",fe>=.82&&g()}function y(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function g(){var Y;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(Y=document.getElementById("cut-flash"))==null||Y.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const z=document.getElementById("cut-hint");z&&(z.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",m),window.addEventListener("pointerup",y),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",y);let x=0,p=!1;const u=new Set;function b(z){x=z,document.getElementById("reveal-phase").style.display="flex",w(),h(z,0),I()}function w(){const z=document.getElementById("card-dots");z&&(z.innerHTML=e.map((Y,oe)=>`<div class="card-dot" data-i="${oe}" style="width:8px;height:8px;border-radius:50%;background:${oe===x?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),z.querySelectorAll(".card-dot").forEach(Y=>Y.addEventListener("click",()=>f(parseInt(Y.dataset.i)))))}function h(z,Y){var U,M;const oe=e[z],fe=document.getElementById("card-counter"),me=document.getElementById("card-track");fe&&(fe.textContent=`Carte ${z+1} / ${e.length}`);const S=document.getElementById("reveal-btns");S&&(S.style.display=z===e.length-1?"flex":"none");const W=oe.card_type==="player"&&((U=oe.player)==null?void 0:U.rarity)==="legende",ue=!u.has(z);u.add(z);let N=0;if(oe.card_type==="player"&&oe.player){const F=oe.player,O=F.job||"ATT";N=Number(O==="GK"?F.note_g:O==="DEF"?F.note_d:O==="MIL"?F.note_m:F.note_a)||0}const V=F=>{me.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${W?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${Ho(oe)}</div>
          ${oe.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const O=document.getElementById("current-card-wrap");Y!==0?(O.style.transition="none",O.style.transform=`translateX(${Y>0?100:-100}%)`,requestAnimationFrame(()=>{O.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",O.style.transform="translateX(0)"})):O.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),F||W?ie():ne(),w()};ue&&(((M=oe.player)==null?void 0:M.rarity)==="legende"||N>=8)&&oe.card_type==="player"&&oe.player?$(oe,()=>V(!0)):V(!1)}function $(z,Y){var be;p=!0;const oe=z.player,fe=`https://flagsapi.com/${oe.country_code}/flat/64.png`,me=(be=oe.clubs)==null?void 0:be.logo_url,S=oe.face?"/"+oe.face.replace(/^public\//,"").replace(/^\//,""):null,W=oe.job||"ATT",ue=Number(W==="GK"?oe.note_g:W==="DEF"?oe.note_d:W==="MIL"?oe.note_m:oe.note_a)||0,N=z.evolution_bonus||0,V=ue+N,U=oe.rarity==="legende",M=V>=18,F=document.getElementById("walkout-overlay"),O=document.getElementById("walkout-stage");if(!F||!O){p=!1,Y();return}let Q=null;U&&(Q=mo("/sounds/Legendary.mp3",.8)),F.style.display="flex";const H=()=>{const we=O.firstElementChild;we&&(we.classList.remove("wo-in"),we.classList.add("wo-out"))},B=1800,R=400;O.innerHTML=`<img class="wo-in" src="${fe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(H,B),setTimeout(()=>{var we;O.innerHTML=me?`<img class="wo-in" src="${me}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((we=oe.clubs)==null?void 0:we.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},B+R),setTimeout(H,B*2+R),setTimeout(()=>{O.innerHTML=S?`<img class="wo-in" src="${S}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(B+R)*2),setTimeout(H,(B+R)*2+B);const pe=M?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[W]||"#fff";setTimeout(()=>{O.innerHTML=`<div class="wo-in" style="
        font-size:${M?"120px":"90px"};font-weight:900;color:${pe};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${pe}, 0 0 60px ${pe};
        ${M?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${V}
      </div>`,M&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(B+R)*3),setTimeout(H,(B+R)*3+B),setTimeout(()=>{F.style.display="none",O.innerHTML="",p=!1,Q&&!U&&Q.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),Y()},(B+R)*4)}function f(z){if(p||z<0||z>=e.length||z===x)return;const Y=z>x?1:-1;x=z,h(z,Y)}function C(){f(x+1)}function k(){f(x-1)}function I(){const z=document.getElementById("card-viewport");if(!z||z._swipeBound)return;z._swipeBound=!0;let Y=0,oe=0,fe=0,me=!1;const S=U=>U.touches?U.touches[0].clientX:U.clientX,W=U=>U.touches?U.touches[0].clientY:U.clientY,ue=U=>{me=!0,Y=S(U),oe=W(U),fe=0},N=U=>{if(!me)return;fe=S(U)-Y;const M=W(U)-oe;if(Math.abs(fe)<Math.abs(M))return;const F=document.getElementById("current-card-wrap");F&&(F.style.transition="none",F.style.transform=`translateX(${fe*.6}px) rotate(${fe*.02}deg)`)},V=()=>{if(!me)return;me=!1;const U=document.getElementById("current-card-wrap"),M=55;fe<=-M&&x<e.length-1?C():fe>=M&&x>0?k():U&&(U.style.transition="transform .2s ease",U.style.transform="translateX(0)")};z.addEventListener("pointerdown",ue),z.addEventListener("pointermove",N),z.addEventListener("pointerup",V),z.addEventListener("pointercancel",V),z.addEventListener("touchstart",ue,{passive:!0}),z.addEventListener("touchmove",N,{passive:!0}),z.addEventListener("touchend",V),z.addEventListener("click",U=>{if(Math.abs(fe)>8)return;const M=z.getBoundingClientRect();U.clientX-M.left>M.width/2?C():k()})}let D=null;function ie(){const z=document.getElementById("fireworks-canvas");if(!z)return;z.width=window.innerWidth,z.height=window.innerHeight;const Y=z.getContext("2d"),oe=[];function fe(){const S=Math.random()*z.width,W=Math.random()*z.height*.6,ue=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],N=ue[Math.floor(Math.random()*ue.length)];for(let V=0;V<60;V++){const U=Math.PI*2/60*V,M=2+Math.random()*5;oe.push({x:S,y:W,vx:Math.cos(U)*M,vy:Math.sin(U)*M,alpha:1,color:N,size:2+Math.random()*3})}}fe(),D=setInterval(fe,600);function me(){if(document.getElementById("fireworks-canvas")){Y.clearRect(0,0,z.width,z.height);for(let S=oe.length-1;S>=0;S--){const W=oe[S];if(W.x+=W.vx,W.y+=W.vy+.08,W.vy*=.98,W.alpha-=.018,W.alpha<=0){oe.splice(S,1);continue}Y.globalAlpha=W.alpha,Y.fillStyle=W.color,Y.beginPath(),Y.arc(W.x,W.y,W.size,0,Math.PI*2),Y.fill()}Y.globalAlpha=1,(D!==null||oe.length>0)&&requestAnimationFrame(me)}}me()}function ne(){D!==null&&(clearInterval(D),D=null);const z=document.getElementById("fireworks-canvas");z&&z.getContext("2d").clearRect(0,0,z.width,z.height)}if(n){const z=document.getElementById("reveal-btns");z&&(z.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{ne(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ne(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ne(),r.remove(),i("boosters")})}function Ho(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return Po(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,l=d[o==null?void 0:o.color]||d.purple,m=(o==null?void 0:o.name)||e.gc_type||"Game Changer",y=(o==null?void 0:o.effect)||((t=Ti[e.gc_type])==null?void 0:t.desc)||"",g=o!=null&&o.image_url?`/icons/${o.image_url}`:null,x=((i=Ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${l}88;flex-shrink:0">
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
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function Yo(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var y,g;const{data:o}=await v.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((y=t.profile)==null?void 0:y.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await v.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await En()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Tn(p))}catch(x){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',x)}const d=a.length;let c=0;e.innerHTML=`
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
  </div>`;const l=async()=>{await v.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function m(){var w;if(c>=d||!a.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const x=a[0],{data:p}=await v.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(x.type==="formation")u=await Sn(t.profile,0);else if(x.type==="game_changer")u=await In(t.profile,x.count||3,0);else if(s&&((w=s.rates)!=null&&w.length)){const h={...s,cost:0,cardCount:x.count||s.cardCount||5};u=await zi(t.profile,h),x.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(f=>f.player&&f.player.job==="GK")||await Wo(t.profile,u),await v.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await zn(t.profile,x.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}a.shift(),c++,await l();const b=x.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:x.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};An(u,b,i,()=>{m()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>m())}async function Wo(e,t){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await v.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Rt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Xo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function ei(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",r=e.face.replace(/^public\//,"").replace(/^\//,"");return n+r}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ii(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ti(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function di(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function xt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Mn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function li(e,t){const i=Rt[t]||Rt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),d=xt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let l=o.findIndex(m=>m.job===a);if(l===-1&&(l=o.findIndex(m=>m.job2===a)),l===-1&&(l=0),o[l]){const m={...o[l],_line:a};s.push(m),o.splice(l,1)}}const d=xt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}function dt(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function it(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function fi(e,t,i){const r=new Set,o=t.filter(l=>{const m=l.gc_type||l.id;return r.has(m)?!1:(r.add(m),!0)});let a=[];function s(l,m){const y=l._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},x={purple:"#9b59b6",light_blue:"#00bcd4"},p=g[y==null?void 0:y.color]||g.purple,u=x[y==null?void 0:y.color]||x.purple;return`<div class="gc-select-card" data-id="${l.id}"
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
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(y=>{var g,x;return((g=y.card)==null?void 0:g.card_type)==="stadium"&&((x=y.card)==null?void 0:x.stadium_id)}).map(y=>y.card.stadium_id))],c={};if(d.length){const{data:y}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(y||[]).forEach(g=>{c[g.id]=g}),(s||[]).forEach(g=>{var x,p;((x=g.card)==null?void 0:x.card_type)==="stadium"&&((p=g.card)!=null&&p.stadium_id)&&(g.card._stadiumDef=c[g.card.stadium_id]||null)})}let l=0;function m(){var f,C,k,I,D,ie,ne;const y=o[l],g=(s||[]).filter(Z=>Z.deck_id===y.id),x=g.filter(Z=>{var j;return Z.is_starter&&((j=Z.card)==null?void 0:j.player)}).map(Z=>Ii(Z.card,Z.position)),p=g.find(Z=>{var j;return((j=Z.card)==null?void 0:j.card_type)==="formation"}),u=y.formation||((f=p==null?void 0:p.card)==null?void 0:f.formation)||"4-4-2";let b=x.length>=11?li(x,u):null,w=((C=y.stadium_card)==null?void 0:C.stadium_def)||null;w&&b&&(b=ti(b,w));const h=x.length>=11;dt(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((k=w.club)==null?void 0:k.encoded_name)||w.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${x.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((Z,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Z(){const j=e.querySelector(".deck-preview-wrap"),z=e.querySelector("#deck-swipe-zone");if(!j||!z||!b)return;const Y=z.clientWidth>=900,oe=Math.max(200,z.clientHeight-(Y?60:40)),me=Math.max(200,z.clientWidth-16),S=Y?Math.min(117,Math.max(52,Math.round(me*.22))):Math.max(44,Math.round(me*.168));if(oe<220||me<220){requestAnimationFrame(Z);return}const W=Y?null:Math.round(S*.55);j.innerHTML=Nt(b,u,null,[],me,oe,[],W),j.style.cssText=`width:${me}px;height:${oe}px;overflow:hidden;margin:${Y?0:60}px auto 0`;const ue=j.querySelector("svg");ue&&(ue.style.cssText="display:block;width:100%;height:100%",ue.setAttribute("preserveAspectRatio",Y?"xMidYMid meet":"none"))})),(I=document.getElementById("prev-deck"))==null||I.addEventListener("click",()=>{l>0&&(l--,m())}),(D=document.getElementById("next-deck"))==null||D.addEventListener("click",()=>{l<o.length-1&&(l++,m())}),(ie=document.getElementById("validate-deck"))==null||ie.addEventListener("click",()=>{if(!h)return;const Z=t.state.params||{};t.navigate("match",{...Z,matchMode:Z.matchMode||i,deckId:y.id})}),(ne=document.getElementById("cancel-deck-select"))==null||ne.addEventListener("click",()=>{it(e),r("home")});const $=document.getElementById("deck-swipe-zone");if($){let Z=0,j=0;$.addEventListener("touchstart",z=>{Z=z.touches[0].clientX,j=z.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",z=>{const Y=z.changedTouches[0].clientX-Z,oe=z.changedTouches[0].clientY-j;Math.abs(Y)<40||Math.abs(Y)<Math.abs(oe)||(Y<0&&l<o.length-1?(l++,m()):Y>0&&l>0&&(l--,m()))},{passive:!0})}}m()}function vt(e,t=44,i=58,n=null){return Ce(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Qe(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:n||(l+=10)),a+=Ce(s,{width:40,role:c,extraNote:l}),d<o.length-1){const m=o[d+1],y=wn(s,m,r)?Ht(s,m):null;a+=`<div style="width:7px;height:3px;background:${!y||y==="#ff3333"||y==="#cc2222"?"rgba(255,255,255,0.12)":y};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function gi(e,t,i,n,r=310,o=310,a=[],s=null){const d=ii[t]||{},c=Bi(t)||qi[t]||[],l={},m=["ATT","MIL","DEF","GK"];for(const b of m)(e[b]||[]).forEach((h,$)=>{l[`${b}${$+1}`]=h});function y(b){const w=d[b];return w?{x:w.x*r,y:w.y*o}:null}let g="";for(const[b,w]of c){const h=y(b),$=y(w);if(!h||!$)continue;const f=l[b],C=l[w],k=Ht(f,C);k==="#00ff88"||k==="#FFD700"?(g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const x=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(x*657/507);for(const[b,w]of Object.entries(l)){const h=y(b);if(!h||!w)continue;const $=b.replace(/[0-9]/g,""),f=a.includes(w.cardId),C=i==="attack"&&(["MIL","ATT"].includes($)||f)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!w.used,k=n.includes(w.cardId);let I=w.boost||0,D=!1;w.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?(I+=10,D=!0):i||(I+=10,D=!0));const ie=Math.round(h.x-x/2),ne=Math.round(h.y-p/2);if(w.used){g+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ie}" y="${ne}" width="${x}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const Z=Ce({...w,_evolution_bonus:0,stadiumBonus:!1},{width:x,showStad:!1,stadDef:null,role:$,extraNote:I,_cardOffset:30,_forceStadColor:D}),j=k?`position:absolute;top:30px;left:0;width:${x}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";g+=`<foreignObject x="${ie-2}" y="${ne-30}" width="${x+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Z}
        ${k?`<div style="${j}"></div>`:""}
      </div>
    </foreignObject>`,C&&(g+=`<rect x="${ie}" y="${ne}" width="${x}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${w.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(x*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${g}
  </svg>`}function Nt(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${gi(e,t,i,n,r,o,a,s)}
  </div>`}async function mi(e,t,i,n){var C;const{state:r,navigate:o,toast:a}=t;dt(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Qo(e,t,i);const d=s.deckId;let c,l,m,y;try{const k=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=k[0].data,m=k[0].error,l=k[1].data,y=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),Tt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(m||y){console.error("[Match] Erreur Supabase:",m||y),Tt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const g=(l||[]).filter(k=>{var I;return k.is_starter&&((I=k.card)==null?void 0:I.player)}).map(k=>Ii(k.card,k.position)),x=(l||[]).filter(k=>{var I;return!k.is_starter&&((I=k.card)==null?void 0:I.player)}).map(k=>Ii(k.card,k.position));if(g.length<11){Tt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>o("decks"));return}const p=(l||[]).find(k=>{var I;return((I=k.card)==null?void 0:I.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((C=p==null?void 0:p.card)==null?void 0:C.formation)||"4-4-2",{data:b,error:w}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:h}=await v.from("gc_definitions").select("*").eq("is_active",!0),$=(b||[]).map(k=>({...k,_gcDef:(h==null?void 0:h.find(I=>I.name===k.gc_type||I.id===k.gc_definition_id))||null}));let f=null;if(c!=null&&c.stadium_card_id){const{data:k}=await v.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(k!=null&&k.stadium_id){const{data:I}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",k.stadium_id).single();f=I||null}}n({deckId:d,formation:u,starters:g,subsRaw:x,gcCardsEnriched:$,gcDefs:h||[],stadiumDef:f})}function zt(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(zt()*1.1)}function jn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:ei(e)}}function Zo(e,t,i,n="Adversaire"){const r=zt(),o=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${gi(e,t,null,[],r,o)}
      </div>
    </div>`}function Cn(e){var o,a,s;if(!e)return"";const t=d=>d?Ce({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function Ze(e,t,i,n,r){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Ce({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
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
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=e?Ce({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Ce({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";r.innerHTML=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function Bn(e,t){const i=Ne(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function yt(e,t){return e.reduce((i,n)=>i+Bn(n,t),0)}function bt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ht(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function ci(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Ht(o,e[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Bn(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ce({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${yt(e,r)} + ${bt(e)} liens = <b style="color:#fff">${yt(e,r)+bt(e)}</b>
      </div>
    </div>`}async function tr(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await mi(e,t,r,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:m,gcDefs:y,stadiumDef:g})=>{try{let x=li(c,d);g&&(x=ti(x,g),di(l,g));const p=await ir(d,o),u=p.lines||p,b=async w=>{try{const h=a==="vs_ai_club"?"club":a,{data:$,error:f}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:h,home_deck_id:s,status:"in_progress"}).select().single();if(f){console.error("[MatchIA] Erreur création match:",f),Tt(e,"⚠️","Impossible de créer le match ("+f.message+").","Retour",()=>t.navigate("home"));return}const C=p.stadiumDef||null;C&&u&&(ti(u,C),di(p.subs||[],C));const k={gcDefs:y||[],matchId:$==null?void 0:$.id,mode:a,difficulty:o,formation:d,homeTeam:x,aiTeam:u,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:w,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};or(e,k,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),Tt(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!m.length){b([]);return}fi(e,m,b)}catch(x){console.error("[MatchIA] Exception setup:",x),Tt(e,"⚠️","Erreur de préparation du match : "+x.message,"Retour",()=>t.navigate("home"))}})}async function ir(e,t){var u;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:nr(e),subs:[],gcCards:[],stadiumDef:null};const n=Rt[e]||Rt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(b,w,h){var $,f;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:(($=b.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((f=b.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:w}}for(const b of["GK","DEF","MIL","ATT"]){const w=i.filter(k=>k.job===b&&!o.has(k.id)),h=i.filter(k=>k.job!==b&&!o.has(k.id)),$=[...w,...h],f=[];for(let k=0;k<n[b];k++){const I=$[k];I&&f.push(a(I,b,k))}const C=xt(f.length);f.forEach((k,I)=>{k._col=C[I]}),r[b]=f}const d=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,w)=>a(b,b.job,100+w)),m=Object.keys(qe).sort(()=>Math.random()-.5).slice(0,3).map((b,w)=>{var h,$;return{id:"ai-gc-"+w,gc_type:b,name:((h=qe[b])==null?void 0:h.name)||b,icon:(($=qe[b])==null?void 0:$.icon)||"⚡"}}),y=Object.values(r).flat(),g={};y.forEach(b=>{b.club_id&&(g[b.club_id]=(g[b.club_id]||0)+1)});const x=(u=Object.entries(g).sort((b,w)=>w[1]-b[1])[0])==null?void 0:u[0];let p=null;if(x){const{data:b}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",x).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:r,subs:d,gcCards:m,stadiumDef:p}}function nr(e){const t=Rt[e]||Rt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<t[o];d++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=xt(a.length);a.forEach((d,c)=>{d._col=s[c]}),i[o]=a}return i}function or(e,t,i){var r;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Nt(t.aiTeam,t.formation,null,[],c,d,[],l),o.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const m=o.querySelector("svg");m&&(m.style.cssText="display:block;width:100%;height:100%",m.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>rr(e,t,i),5e3)}const Ye=e=>jn(e);function rr(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=yt(n,o)+bt(n),d=yt(r,a)+bt(r),c=s>=d;e.innerHTML=`
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

    ${ci(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${ci(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const x=(p,u)=>e.querySelectorAll(p).forEach((b,w)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+w*90)});x(".duel-card-home",150),x(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{m("score-home",s,800),m("score-ai",d,800)},1500)};function m(x,p,u){const b=document.getElementById(x);if(!b)return;const w=performance.now(),h=$=>{const f=Math.min(1,($-w)/u);b.textContent=Math.round(p*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(l),t.attacker=c?"home":"ai";const y=c?Mn():null;c&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(x=>Ye(x)),aiPlayers:r.map(x=>Ye(x)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const g=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ni(e,t,i),800)};setTimeout(()=>{const x=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),w=c?x:p,h=c?p:x;w&&(w.style.fontSize="80px",w.style.color=c?"#FFD700":"#ff6b6b",w.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var f;const $=document.getElementById("duel-shock");if($){const C=(f=b||u)==null?void 0:f.getBoundingClientRect(),k=e.querySelector(".match-screen").getBoundingClientRect();C&&($.style.top=C.top-k.top+C.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
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
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",g))},600)},700)},2800)}function ze(e,t,i){var ie,ne,Z,j,z,Y,oe,fe,me;const n=t.selected.map(S=>S.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(S=>!r.includes(S.cardId)),s=Object.values(t.homeTeam).flat().filter(S=>S.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(S=>!S.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(S=>!S.used),l=Ot(t.aiTeam),m=d.length===0&&c.length===0&&!l,y=(t.homeTeam.DEF||[]).filter(S=>!S.used),g=(t.homeTeam.GK||[]).filter(S=>!S.used);let x=[];t.phase==="attack"&&d.length===0&&(l?(x=y.map(S=>S.cardId),y.length===0&&(x=x.concat(g.map(S=>S.cardId)))):m&&(x=[...y,...g].map(S=>S.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",b=t.phase==="defense",w=t.phase==="finished",$=(t.homeSubs||[]).filter(S=>!(t.usedSubIds||[]).includes(S.cardId)).length>0&&t.subsUsed<t.maxSubs,f=u&&d.length===0&&x.length===0&&!$,C=t.gcCards.filter(S=>!t.usedGc.includes(S.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const W=t.pendingAttack;let ue="";if(t.selected.length>0){const N=t.selected.map(U=>({...(t.homeTeam[U._role]||[]).find(F=>F.cardId===U.cardId)||U,_line:U._role})),V=Zt(N,t.modifiers.home,t.formation);ue=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Qe(N.map(U=>({...U,used:!1})),"#3a7bd5",V.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Qe((W.players||[]).map(N=>({...N,used:!1})),"#ff6b6b",W.total,"attack",t.formation)}</div>
            ${ue}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const W=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Qe((W.players||[]).map(ue=>({...ue,used:!1})),"#00ff88",W.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const W=t.selected.map(N=>{const V=(t.homeTeam[N._role]||[]).find(M=>M.cardId===N.cardId)||N,U=["GK","DEF"].includes(N._role);return{...V,_line:N._role,...U?{note_a:Math.max(1,Number(V.note_a)||0)}:{}}}),ue=Qt(W,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(W.map(N=>({...N,used:!1})),"#FFD700",ue.total,"attack",t.formation)}</div>
          </div>`}const S=t.log[t.log.length-1];return S?'<div style="padding:2px 4px">'+Cn(S)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const S=window.innerWidth>=700,W=(H,B,R)=>{var Ee,Le;const le=(t.gcDefs||[]).find(Fe=>Fe.name===H.gc_type),pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",be={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",we=(le==null?void 0:le.name)||H.gc_type,Te=(le==null?void 0:le.effect)||((Ee=qe[H.gc_type])==null?void 0:Ee.desc)||"",Se=le!=null&&le.image_url?`/icons/${le.image_url}`:null,ke=((Le=qe[H.gc_type])==null?void 0:Le.icon)||"⚡",$e=Math.round(R*.22),je=Math.round(R*.22),De=R-$e-je,Ue=we.length>12?7:9;return`<div class="gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}"
          style="box-sizing:border-box;width:${B}px;height:${R}px;border-radius:10px;border:2px solid ${be};background:${pe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${$e}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ue}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${B-6}px">${we}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${De}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Se?`<img src="${Se}" style="max-width:${B-10}px;max-height:${De-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(De*.55)}px">${ke}</span>`}
          </div>
          <div style="height:${je}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Te.slice(0,38)}</span>
          </div>
        </div>`},ue=(H,B)=>{var R;return`<div id="boost-card"
          style="box-sizing:border-box;width:${H}px;height:${B}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(B*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(B*.2)}px">⚡</div>
            <div style="font-size:${Math.round(B*.09)}px;color:#000;font-weight:900">+${(R=t.boostCard)==null?void 0:R.value}</div>
          </div>`},N=(H,B)=>B?ue(130,175):W(H,130,175),V=(H,B)=>B?ue(68,95):W(H,68,95),U=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",M=w?`<button id="btn-results" style="${U};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${U};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${U};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${U};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${U};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,F=u||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",O=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(H=>`<div class="sub-btn-col" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${vt(H,76,100)}</div>`).join("")}
      </div>`,Q=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Nt(t.homeTeam,t.formation,t.phase,n,S?1300:zt(),S?600:Gt(),x)}
        </div>
      </div>`;return S?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${O}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Q}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${M}${F}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${C.map(H=>N(H,!1)).join("")}
            ${k?N(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Nt(t.homeTeam,t.formation,t.phase,n,S?1300:zt(),S?600:Gt(),x)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${C.map(H=>V(H,!1)).join("")}
            ${k?V(null,!0):""}
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
          <div>${M}${F}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(S=>{var W,ue,N;if(S.type==="duel"){const V=S.isGoal,U=S.homeScored?"#FFD700":V?"#ff6b6b":"rgba(255,255,255,0.3)",M=S.homeScored?"⚽ BUT !":V?"⚽ BUT IA !":(W=S.homePlayers)!=null&&W.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${V?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${U};margin-bottom:4px">
                <div style="font-size:9px;color:${U};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
                ${(ue=S.homePlayers)!=null&&ue.length?`<div style="margin-bottom:3px">${Qe(S.homePlayers,"rgba(255,255,255,0.7)",S.homeTotal,void 0,t.formation)}</div>`:""}
                ${(N=S.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${Qe(S.aiPlayers,"#ff6b6b",S.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return S.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${S.outPlayer?vt({...S.outPlayer,used:!0,_line:S.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${S.inPlayer?vt({...S.inPlayer,_line:S.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:S.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${S.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${S.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const S=e.querySelector(".match-screen");if(!S)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);S.style.bottom="auto",S.style.height=W+"px",S.style.minHeight=W+"px",S.style.maxHeight=W+"px",S.style.overflow="hidden";const ue=e.querySelector("#mobile-action-bar"),N=e.querySelector("#mobile-play-area");ue&&N&&(N.style.paddingBottom=ue.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const W=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!W)return;const ue=W.closest("#match-terrain-wrap");ue&&(ue.style.cssText="position:relative;width:100%;height:100%;padding:0"),W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const S=e.querySelector(".terrain-wrapper svg");if(S){const W=S.closest("#match-terrain-wrap");W&&(W.style.cssText="position:relative;width:100%;height:100%;padding:0"),S.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let S=!1,W=30;const ue=()=>document.getElementById("match-timer"),N=()=>{const V=ue();if(!V)return;const U=String(Math.floor(W/60)).padStart(2,"0"),M=String(W%60).padStart(2,"0");V.textContent=` ${U}:${M}`,V.style.color=S?"#ff2222":"#ff9500",V.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(W--,W<0)if(!S)S=!0,W=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",V.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(V),setTimeout(()=>{V.remove(),ht(e,t,i)},2500)}else N()},1e3)}(ie=document.getElementById("match-quit"))==null||ie.addEventListener("click",()=>{it(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,ht(e,t,i))}),(ne=document.getElementById("view-ai"))==null||ne.addEventListener("click",()=>xr(t,i)),(Z=document.getElementById("toggle-history"))==null||Z.addEventListener("click",()=>{var S;(S=document.getElementById("match-history-panel"))==null||S.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var S;(S=document.getElementById("match-history-panel"))==null||S.classList.remove("open")}),(z=document.getElementById("btn-action"))==null||z.addEventListener("click",()=>{t.selected.length!==0&&(u?sr(e,t,i):b&&dr(e,t,i))}),(Y=document.getElementById("btn-results"))==null||Y.addEventListener("click",()=>ht(e,t,i)),(oe=document.getElementById("btn-pass"))==null||oe.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Si(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="ai-attack",ze(e,t,i),setTimeout(()=>Ni(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(S=>{S.addEventListener("click",()=>ar(S,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(S=>{S.addEventListener("click",()=>_i(e,t,i,null,S.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(S=>{u?S.addEventListener("click",()=>ur(S.dataset.gcId,S.dataset.gcType,e,t,i)):(S.style.opacity="0.35",S.style.cursor="default",S.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(fe=document.getElementById("boost-card"))==null||fe.addEventListener("click",()=>mr(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(S=>{S.addEventListener("click",()=>_i(e,t,i,S.dataset.subId))}),(me=document.getElementById("sub-btn-main"))==null||me.addEventListener("click",()=>_i(e,t,i))}function ar(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}ze(i,t,n)}function Ri(e,t,i){e.matchId&&v.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function sr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ri(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=Qt(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,i),setTimeout(()=>pr(e,t,i),1200)}function dr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ri(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(m=>m.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),o=Zt(r,t.modifiers.home,t.formation);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const a=Gi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ye(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ye(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,i),Ze(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,It(e,t,i,"home-attack")}function lr(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(d=>d.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function cr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),qe[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ni(e,t,i){Ri(t,i,null),lr(t),cr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!n.length){const l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(y=>!y.used),m=Ot(t.homeTeam);if(m||l.length===0){const y=(t.aiTeam.DEF||[]).filter(x=>!x.used),g=(t.aiTeam.GK||[]).filter(x=>!x.used);n=m?y.length?y:g:[...y,...g],r=!0}}const o=kn(n,"attack",t.difficulty);if(!o.length){Ai(e,t,i);return}r&&o.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=Qt(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ot(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,pi(e,t,i,"ai",o[0]);return}t.aiScore++;const m={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(y=>Ye(y)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(m),t.pendingAttack=null,ze(e,t,i),Ze(m.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}t.phase="defense",ze(e,t,i)}function pr(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=kn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(y=>!y.used)).length){const m=((c=t.pendingAttack)==null?void 0:c.players)||[];if(m.length===1&&(m[0]._line==="GK"||m[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,pi(e,t,i,"home",m[0]);return}t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:m.map(x=>Ye(x)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i),Ze(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}const a=r.length>0?Zt(r,t.modifiers.ai,t.formation).total:0;r.forEach(m=>{m.used=!0});const s=Gi(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>Ye(m)),aiPlayers:r.map(m=>Ye(m)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i),Ze(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,It(e,t,i,"ai-attack")}function It(e,t,i,n){if(t.round++,!qn(e,t,i)){if(Oi(t)){ht(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Ai(e,t,i);return}t.phase="attack",ze(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Ai(e,t,i);return}t.phase="ai-attack",ze(e,t,i),setTimeout(()=>Ni(e,t,i),800)}}}function Ot(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function pn(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function qn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(pn(t.homeTeam)&&Ot(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,pi(e,t,i,"home",n),!0):!1}if(pn(t.aiTeam)&&Ot(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,pi(e,t,i,"ai",n),!0):!1}return!1}function pi(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ye(r)]:[],aiPlayers:n==="ai"?[Ye(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,d)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,ze(e,t,i),Ze([Ye(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Oi(t)){ht(e,t,i);return}It(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Oi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Si(e,t){return!(["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used))||Ot(t)||!["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used)))}function Ai(e,t,i){if(!qn(e,t,i)){if(Oi(t)){ht(e,t,i);return}if(Si(t.homeTeam,t.aiTeam)&&Si(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),ht(e,t,i);return}t.phase="attack",ze(e,t,i)}}function _i(e,t,i,n=null,r=null){var g,x;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){$t("Aucun joueur utilisé à remplacer");return}if(!a.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const d=((g=o[s])==null?void 0:g._line)||((x=o[s])==null?void 0:x.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),l=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function y(){var f,C,k,I,D,ie;const p=o[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),w=Math.round(b*1.35),h=ne=>`background:rgba(255,255,255,0.12);border:none;color:${ne?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ne?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?vt({...u,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?vt({...p,used:!1,boost:0},b,w):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=m.querySelector("#sub-close"))==null||f.addEventListener("click",()=>m.remove()),(C=m.querySelector("#out-up"))==null||C.addEventListener("click",()=>{s>0&&(s--,y())}),(k=m.querySelector("#out-down"))==null||k.addEventListener("click",()=>{s<o.length-1&&(s++,y())}),(I=m.querySelector("#in-up"))==null||I.addEventListener("click",()=>{c>0&&(c--,y())}),(D=m.querySelector("#in-down"))==null||D.addEventListener("click",()=>{c<a.length-1&&(c++,y())});const $=(ne,Z,j,z)=>{const Y=m.querySelector("#"+ne);if(!Y)return;let oe=0;Y.addEventListener("touchstart",fe=>{oe=fe.touches[0].clientY},{passive:!0}),Y.addEventListener("touchend",fe=>{const me=fe.changedTouches[0].clientY-oe;if(Math.abs(me)<30)return;const S=Z();me<0&&S<z-1?(j(S+1),y()):me>0&&S>0&&(j(S-1),y())},{passive:!0})};$("in-panel",()=>c,ne=>c=ne,a.length),$("out-panel",()=>s,ne=>s=ne,o.length),(ie=m.querySelector("#sub-confirm"))==null||ie.addEventListener("click",ne=>{if(ne.preventDefault(),ne.stopPropagation(),l)return;l=!0;const Z=o[s],j=a[c];if(!Z||!j)return;let z=null,Y=-1;for(const[fe,me]of Object.entries(t.homeTeam)){const S=(me||[]).findIndex(W=>W.cardId===Z.cardId);if(S!==-1){z=fe,Y=S;break}}if(Y===-1||!z){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const oe={...j,_line:z,_col:Z._col||0,used:!1,boost:0};t.homeTeam[z].splice(Y,1,oe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Z.name,firstname:Z.firstname,note:Ne(Z,z),portrait:ei(Z),job:Z.job,country_code:Z.country_code,rarity:Z.rarity,clubName:Z.clubName,clubLogo:Z.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Ne(j,z),portrait:ei(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${Z.firstname} ${Z.name}`}),m.remove(),er(Z,j,()=>ze(e,t,i))})}document.body.appendChild(m),y()}function ur(e,t,i,n,r){var x,p;const o=(n.gcDefs||[]).find(u=>u.name===t),a=qe[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",d={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,l=(o==null?void 0:o.effect)||a.desc,m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,y=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
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
    </div>`,document.body.appendChild(g),(x=g.querySelector("#gc-back"))==null||x.addEventListener("click",()=>g.remove()),(p=g.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{g.remove(),gr(e,t,i,n,r)})}function ri(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(m=>{const y=m._line||m.job||"MIL",g=s.find(p=>p.cardId===m.cardId),x=Ce({...m,_evolution_bonus:0},{width:90,showStad:!0,role:y,extraNote:m.boost||0});return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          ${x}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const y=m.dataset.cid,g=e.find(p=>p.cardId===y);if(!g)return;const x=s.findIndex(p=>p.cardId===y);x>-1?s.splice(x,1):s.length<t&&s.push(g),d()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),o(s)})}d(),document.body.appendChild(a)}const fr={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(ri(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),ze(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,m])=>m.filter(y=>!y.used).map(y=>({...y,_line:l})));return c.length?(ri(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,r,l=>{l.forEach(m=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[m._line]||[]).find(x=>x.cardId===m.cardId);g&&(g.boost=(g.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ze(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),ze(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(m=>!m.used).map(m=>({...m,_line:c})));return d.length?(ri(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(l=>{const y=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(g=>g.cardId===l.cardId);y&&(y.used=!0,n.log.push({text:`❌ ${y.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),ze(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return o.length?(ri(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),ze(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function gr(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(d=>d.name===t)||o.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=fr[a.effect_type];d?d(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(m=>m.used).map(m=>({...m,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,m)=>Ne(m,"ATT")-Ne(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",e).then(()=>{}),s&&ze(i,n,r)}function mr(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Xo[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ne(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ze(e,t,i)})})}async function ht(e,t,i){var l,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=xo(t.mode,a);t.matchId&&await v.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await v.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),it(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{c.remove(),it(e),i.navigate("match",{matchMode:t.mode})})}function xr(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${gi(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qt=e=>jn(e);async function St(e,t,i,n,r={}){return Dn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function yr(e,t,i){const{data:n}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return Dn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function Dn(e,t,i,n,r=[],o=[],a=!1,s=null,d=null,c=null,l=null,m=null){const{state:y,navigate:g,toast:x}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(r||[]).map(_=>_.id),w=(r||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await v.from("matches").select("*").eq("id",i).single();if(!h){x("Match introuvable","error"),g("home");return}async function $(){var ye,he;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:_,error:E},{data:T,error:A},{data:L},{data:G}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",A==null?void 0:A.message,"p1D:",(ye=_==null?void 0:_.starters)==null?void 0:ye.length,"p2D:",(he=T==null?void 0:T.starters)==null?void 0:he.length);const q=ae=>{const Ie=Number(ae.evolution_bonus)||0;return{cardId:ae.card_id,position:ae.position,id:ae.id,firstname:ae.firstname,name:ae.surname_real,country_code:ae.country_code,club_id:ae.club_id,job:ae.job,job2:ae.job2,note_g:(Number(ae.note_g)||0)+(ae.job==="GK"||ae.job2==="GK"&&Number(ae.note_g)>0?Ie:0),note_d:(Number(ae.note_d)||0)+(ae.job==="DEF"||ae.job2==="DEF"&&Number(ae.note_d)>0?Ie:0),note_m:(Number(ae.note_m)||0)+(ae.job==="MIL"||ae.job2==="MIL"&&Number(ae.note_m)>0?Ie:0),note_a:(Number(ae.note_a)||0)+(ae.job==="ATT"||ae.job2==="ATT"&&Number(ae.note_a)>0?Ie:0),evolution_bonus:Ie,rarity:ae.rarity,skin:ae.skin,hair:ae.hair,hair_length:ae.hair_length,face:ae.face||null,clubName:ae.club_encoded_name||null,clubLogo:ae.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},P=((_==null?void 0:_.starters)||[]).map(ae=>q(ae)),K=((T==null?void 0:T.starters)||[]).map(ae=>q(ae)),ee=(_==null?void 0:_.formation)||"4-4-2",re=(T==null?void 0:T.formation)||"4-4-2";let te=li(P,ee),J=li(K,re);const se=((_==null?void 0:_.subs)||[]).map(ae=>q(ae)),de=((T==null?void 0:T.subs)||[]).map(ae=>q(ae)),xe=(_==null?void 0:_.stadium_def)||(n?d:null),ce=(T==null?void 0:T.stadium_def)||(n?null:d);return xe&&(te=ti(te,xe),di(se,xe)),ce&&(J=ti(J,ce),di(de,ce)),{p1Team:te,p2Team:J,p1Subs:se,p2Subs:de,p1Formation:ee,p2Formation:re,p1Name:(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"Joueur 1",p2Name:(G==null?void 0:G.club_name)||(G==null?void 0:G.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?w:[],gcCardsFull_p2:n?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let f=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!f,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",y.profile.id),!f)if(n){f=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:_}=await v.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await v.from("matches").update({game_state:f,turn_user_id:h.home_id}).eq("id",i):f=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!f;_++){await new Promise(T=>setTimeout(T,400));const{data:E}=await v.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(f=E.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(E!=null&&E.game_state))}if(!f){x("Erreur de synchronisation","error"),g("home");return}f.gc_p2=b,f.gcCardsFull_p2=w,await v.from("matches").update({game_state:f}).eq("id",i)}let C=!1,k=null,I=!1;const D=new Set,ie=new Set;async function ne(_){var re,te;try{v.removeChannel(Z)}catch{}const E=f[p+"Score"]||0,T=f[u+"Score"]||0;let A,L;_.winner_id?(A=_.winner_id===y.profile.id,L=!1):_.forfeit?(A=E>T,L=!1):(L=E===T,A=E>T);let G="";if(a&&n)try{const{data:J}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:se}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(J&&se){const de=A?1:L?.5:0,xe=1-de,ce=J.placement_matches<10,ye=se.placement_matches<10,he=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,se.mmr,se.mmr_deviation,de===1?1:de===0?0:.5,ce),ae=computeGlicko2(se.mmr,se.mmr_deviation,se.mmr_volatility,J.mmr,J.mmr_deviation,xe===1?1:xe===0?0:.5,ye);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:L?null:A?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:he.delta,p_away_delta:ae.delta,p_home_new_rd:he.newRd,p_away_new_rd:ae.newRd,p_home_new_vol:he.newSigma,p_away_new_vol:ae.newSigma});const Ie=he.delta,Oe=he.newMmr,Ae=getTier(Oe),We=Ie>=0?"+":"",Ke=Ie>=0?"#4caf50":"#ff6b6b",nt=getTier(J.mmr);G=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ae.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Ae.color}">
                    ${Oe>J.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Ae.emoji} ${Ae.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Oe>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ie>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ae.color}">${Ae.emoji} ${Ae.label}</div>`}
              ${ce?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(re=document.getElementById("pvp-end-overlay"))==null||re.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const P=L?"🤝":A?"🏆":"😞",K=L?"MATCH NUL":A?"VICTOIRE !":"DÉFAITE",ee=L?"#fff":A?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${P}</div>
      <div style="font-size:26px;font-weight:900;color:${ee}">${K}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[p+"Name"]} ${E} – ${T} ${f[u+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${A?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${G}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(te=q.querySelector("#pvp-end-home"))==null||te.addEventListener("click",()=>{q.remove(),it(e),l?g("mini-league",{openLeagueId:l}):g(a?"ranked":"home")})}const Z=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{var T;const E=_.new;try{if(E.status==="finished"||E.forfeit){if(C)return;C=!0,k&&(clearInterval(k),k=null),E.game_state&&(f=E.game_state),ne(E);return}if(E.game_state){const A=f;f=E.game_state;const L=f._lastGC;if(L&&L.seq&&!ie.has(L.seq)&&(ie.add(L.seq),L.by!==p)){U(L.type,L.by,()=>W());return}const G=A[p+"Score"]||0,q=A[u+"Score"]||0,P=f[p+"Score"]||0,K=f[u+"Score"]||0,ee=P>G,re=K>q;if((ee||re)&&!D.has(f.round)){D.add(f.round);const te=[...f.log||[]].reverse().find(de=>de.isGoal),J=((te==null?void 0:te.homePlayers)||[]).map(de=>({name:de.name,note:de.note,portrait:de.portrait,job:de.job}));!!((T=te==null?void 0:te.text)!=null&&T.includes("DERNIER CORNER"))?be().then(()=>{Ze(J,P,K,ee,()=>W())}):Ze(J,P,K,ee,()=>W());return}W()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function j(_){Object.assign(f,_),f.lastActionAt=new Date().toISOString();const{error:E}=await v.from("matches").update({game_state:f}).eq("id",i);E&&x("Erreur de synchronisation","error");try{W()}catch(T){console.error("[PvP] renderPvpScreen crash:",T)}}async function z(){if(C)return;C=!0,k&&(clearInterval(k),k=null);const _=n?h.away_id:h.home_id,E=n?"p2":"p1",T=n?"p1":"p2",A={...f,[E+"Score"]:3,[T+"Score"]:0,phase:"finished"},L=A.p1Score||0,G=A.p2Score||0;try{await v.from("matches").update({game_state:A}).eq("id",i);const{data:q,error:P}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:_,p_home_score:L,p_away_score:G,p_forfeit:!0});if(P&&console.error("[PvP] finish_pvp_match (forfeit):",P),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(K){console.error("[PvP] check_and_finish_mini_league (forfeit):",K)}try{const{data:K}=await v.rpc("apply_match_rewards",{p_match_id:i});K!=null&&K.success&&!(K!=null&&K.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(K){console.error("[PvP] apply_match_rewards (forfeit):",K)}}catch{}try{v.removeChannel(Z)}catch{}setTimeout(()=>{it(e),l?g("mini-league",{openLeagueId:l}):g("home")},800)}const Y={BOOST_STAT:({value:_=1,count:E=1,roles:T=[]},A,L)=>{const G=A[p+"Team"],q=Object.entries(G).filter(([P])=>!T.length||T.includes(P)).flatMap(([P,K])=>K.filter(ee=>!ee.used).map(ee=>({...ee,_line:P})));if(!q.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),L(A);return}oe(q,E,`Choisir ${E} joueur(s) à booster (+${_})`,P=>{P.forEach(K=>{const ee=(G[K._line]||[]).find(re=>re.cardId===K.cardId);ee&&(ee.boost=(ee.boost||0)+_,A.log.push({text:`⚡ +${_} sur ${ee.name}`,type:"info"}))}),A[p+"Team"]=G,L(A)})},DEBUFF_STAT:({value:_=1,count:E=1,roles:T=[],target:A="ai"},L,G)=>{const q=A==="home"?p:u,P=L[q+"Team"],K=A==="home"?"allié":"adverse",ee=Object.entries(P).filter(([re])=>!T.length||T.includes(re)).flatMap(([re,te])=>te.map(J=>({...J,_line:re})));if(!ee.length){L.log.push({text:`🎯 Aucun joueur ${K}`,type:"info"}),G(L);return}oe(ee,E,`Choisir ${E} joueur(s) ${K}(s) (-${_})`,re=>{re.forEach(te=>{const J=(P[te._line]||[]).find(se=>se.cardId===te.cardId);J&&(J.boost=(J.boost||0)-_,L.log.push({text:`🎯 -${_} sur ${J.name}`,type:"info"}))}),L[q+"Team"]=P,G(L)})},GRAY_PLAYER:({count:_=1,roles:E=[],target:T="ai"},A,L)=>{const G=T==="home"?p:u,q=A[G+"Team"],P=T==="home"?"allié":"adverse",K=Object.entries(q).filter(([ee])=>!E.length||E.includes(ee)).flatMap(([ee,re])=>re.filter(te=>!te.used).map(te=>({...te,_line:ee})));if(!K.length){A.log.push({text:`❌ Aucun joueur ${P}`,type:"info"}),L(A);return}oe(K,_,`Choisir ${_} joueur(s) ${P}(s) à exclure`,ee=>{const re="usedCardIds_"+G,te=new Set(A[re]||[]);ee.forEach(J=>{const se=(q[J._line]||[]).find(de=>de.cardId===J.cardId);se&&(se.used=!0,te.add(J.cardId),A.log.push({text:`❌ ${se.name} exclu !`,type:"info"}))}),A[re]=[...te],A[G+"Team"]=q,L(A)})},REVIVE_PLAYER:({count:_=1,roles:E=[]},T,A)=>{const L=T[p+"Team"],G=Object.entries(L).filter(([q])=>!E.length||E.includes(q)).flatMap(([q,P])=>P.filter(K=>K.used).map(K=>({...K,_line:q})));if(!G.length){T.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(T);return}oe(G,_,`Choisir ${_} joueur(s) à ressusciter`,q=>{q.forEach(P=>{const K=(L[P._line]||[]).find(ee=>ee.cardId===P.cardId);K&&(K.used=!1,T.log.push({text:`💫 ${K.name} ressuscité !`,type:"info"}))}),T[p+"Team"]=L,A(T)})},REMOVE_GOAL:({},_,E)=>{const T=u+"Score";_[T]>0?(_[T]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(_)},ADD_GOAL_DRAW:({},_,E)=>{_[p+"Score"]===_[u+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(_)},ADD_SUB:({value:_=1},E,T)=>{E.maxSubs=(E.maxSubs||3)+_,E.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),T(E)},CUSTOM:({},_,E)=>E(_)};function oe(_,E,T,A){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let G=[];function q(){var K,ee;const P=_.map(re=>{const te=re._line||re.job||"MIL",J=G.find(de=>de.cardId===re.cardId),se=Ce({...re,_evolution_bonus:0},{width:90,showStad:!0,role:te,extraNote:re.boost||0});return`<div class="pp-item" data-cid="${re.cardId}"
          style="position:relative;border-radius:8px;${J?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${re.used?"opacity:0.3;pointer-events:none":""}">
          ${se}
        </div>`}).join("");L.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${T}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${P}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${G.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${G.length}/${E})
          </button>
        </div>`,(K=L.querySelector("#pp-close"))==null||K.addEventListener("click",()=>L.remove()),L.querySelectorAll(".pp-item").forEach(re=>{re.addEventListener("click",()=>{const te=re.dataset.cid,J=_.find(de=>de.cardId===te),se=G.findIndex(de=>de.cardId===te);J&&(se>-1?G.splice(se,1):G.length<E&&G.push(J),q())})}),(ee=L.querySelector("#pp-confirm"))==null||ee.addEventListener("click",()=>{L.remove(),A(G)})}q(),document.body.appendChild(L)}async function fe(_,E){const A=(f["gcCardsFull_"+p]||[]).find(P=>P.id===_),L=(A==null?void 0:A._gcDef)||(f.gcDefs||[]).find(P=>{var K;return P.name===E||((K=P.name)==null?void 0:K.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),G=[...f["usedGc_"+p]||[],_],q={type:E,by:p,seq:(f._gcAnimSeq||0)+1};ie.add(q.seq),U(E,p,async()=>{if(L!=null&&L.effect_type&&L.effect_type!=="CUSTOM"){const K=Y[L.effect_type];if(K){const ee={...f};K(L.effect_params||{},ee,async re=>{re["usedGc_"+p]=G,re._lastGC=q,re._gcAnimSeq=q.seq,await j(re)});return}}const P={...f};switch(E){case"Remplacement+":P.maxSubs=(P.maxSubs||3)+1,P.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const K=u+"Score";P[K]>0&&(P[K]--,P.log.push({text:"🚫 But annulé",type:"info"}));break}}P["usedGc_"+p]=G,P._lastGC=q,P._gcAnimSeq=q.seq,await j(P)})}function me(_,E){const T="usedCardIds_"+_,A=new Set(f[T]||[]);E.forEach(L=>A.add(L)),f[T]=[...A]}function S(){for(const _ of["p1","p2"]){const E=new Set(f["usedCardIds_"+_]||[]),T=f[_+"Team"];if(T)for(const A of["GK","DEF","MIL","ATT"])(T[A]||[]).forEach(L=>{L.used=E.has(L.cardId)})}}function W(){var Ki,Vi,Yi,Wi,Xi,Ji;if(f.phase==="reveal")return ue();if(f.phase==="midfield")return V();if(f.phase==="finished")return Fe();const _=f[p+"Team"],E=f[u+"Team"];S();const T=f[p+"Score"],A=f[u+"Score"],L=f[p+"Name"],G=f[u+"Name"],q=f.phase===p+"-attack",P=f.phase===p+"-defense",K=Array.isArray(f["selected_"+p])?f["selected_"+p]:[],ee=K.map(X=>X.cardId),re=window.innerWidth>=700,te=f[p+"Subs"]||[],J=f["usedSubIds_"+p]||[],se=te.filter(X=>!J.includes(X.cardId)),de=f["gcCardsFull_"+p]||[],xe=f["usedGc_"+p]||[],ce=de.filter(X=>!xe.includes(X.id)),ye=f.boostOwner===p&&!f.boostUsed,he=[..._.MIL||[],..._.ATT||[]].filter(X=>!X.used),ae=[...E.MIL||[],...E.ATT||[]].filter(X=>!X.used),Ie=!$e(E),Oe=he.length===0&&ae.length===0&&!Ie,Ae=(_.DEF||[]).filter(X=>!X.used),We=(_.GK||[]).filter(X=>!X.used);let Ke=[];q&&he.length===0&&(Ie?(Ke=Ae.map(X=>X.cardId),Ae.length===0&&(Ke=Ke.concat(We.map(X=>X.cardId)))):Oe&&(Ke=[...Ae,...We].map(X=>X.cardId)));function nt(X,ge,Me){var Bt,gt;const _e=X._gcDef,jt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[_e==null?void 0:_e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",at={purple:"#b06ce0",light_blue:"#00d4ef"}[_e==null?void 0:_e.color]||"#b06ce0",Ge=(_e==null?void 0:_e.name)||X.gc_type,He=(_e==null?void 0:_e.effect)||((Bt=qe[X.gc_type])==null?void 0:Bt.desc)||"",Be=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,kt=((gt=qe[X.gc_type])==null?void 0:gt.icon)||"⚡",Re=Math.round(Me*.22),ft=Math.round(Me*.22),st=Me-Re-ft,Ct=Ge.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${ge}px;height:${Me}px;border-radius:10px;border:2px solid ${at};background:${jt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Re}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ct}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${Ge}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${st}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Be?`<img src="${Be}" style="max-width:${ge-10}px;max-height:${st-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(st*.55)}px">${kt}</span>`}
        </div>
        <div style="height:${ft}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${He.slice(0,38)}</span>
        </div>
      </div>`}function Ut(X,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Pe=(X,ge)=>ge?Ut(130,175):nt(X,130,175),Xe=(X,ge)=>ge?Ut(68,95):nt(X,68,95),Ve=re?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=q?De(p)?`<button id="pvp-action" style="${Ve};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${K.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ve};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:P?`<button id="pvp-action" style="${Ve};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${K.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${G}</div>`,ot=q&&!De(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||P?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${K.length}/3 sélectionné(s)</div>`:"",At=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${re?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${se.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':se.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${vt(X,re?76:44,re?100:58)}</div>`).join("")}
    </div>`,ut=q?"attack":P?"defense":"idle",_t=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Nt(_,f[p+"Formation"],ut,ee,re?1300:zt(),re?600:Gt(),Ke)}
      </div>
    </div>`,rt=f[p+"Team"],Un=(()=>{var ge,Me,_e,jt,at;if(P&&((ge=f.pendingAttack)!=null&&ge.players)){const Ge=f.pendingAttack;let He="";if(K.length>0){const Be=K.map(Re=>{const ft=(rt[Re._role]||[]).find(yi=>yi.cardId===Re.cardId)||Re,st=rt[Re._role]||[],Ct=st.findIndex(yi=>yi.cardId===Re.cardId),Bt=xt(st.length),gt=Ct>=0?Bt[Ct]:ft._col??1;return{...ft,_line:Re._role,_col:gt}}),kt=Zt(Be,((Me=f.modifiers)==null?void 0:Me[p])||{},f[p+"Formation"]);He=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${K.length}/3)</div>
            <div style="display:flex;justify-content:center">${Qe(Be.map(Re=>({...Re,used:!1})),"#3a7bd5",kt.total,"defense",f[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${G} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Qe((Ge.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",Ge.total,"attack",f[u+"Formation"])}</div>
          ${He}
        </div>`}if(q&&((_e=f.pendingAttack)!=null&&_e.players)){const Ge=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Qe((Ge.players||[]).map(He=>({...He,used:!1})),"#00ff88",Ge.total,"attack",f[p+"Formation"])}</div>
        </div>`}if(q&&!((jt=f.pendingAttack)!=null&&jt.players)&&K.length>0){const Ge=K.map(Be=>{const kt=(rt[Be._role]||[]).find(gt=>gt.cardId===Be.cardId)||Be,Re=["GK","DEF"].includes(Be._role),ft=rt[Be._role]||[],st=ft.findIndex(gt=>gt.cardId===Be.cardId),Ct=xt(ft.length),Bt=st>=0?Ct[st]:kt._col??1;return{...kt,_line:Be._role,_col:Bt,...Re?{note_a:Math.max(1,Number(kt.note_a)||0)}:{}}}),He=Qt(Ge,((at=f.modifiers)==null?void 0:at[p])||{},f[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${K.length}/3)</div>
          <div style="display:flex;justify-content:center">${Qe(Ge.map(Be=>({...Be,used:!1})),"#FFD700",He.total,"attack",f[p+"Formation"])}</div>
        </div>`}const X=(f.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Cn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),Ui=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${T} – ${A}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${G}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Un}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;dt(e),e.style.overflow="hidden",re?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ui}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${At}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${_t}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${ot}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ce.map(X=>Pe(X,!1)).join("")}
            ${ye?Pe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ui}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Nt(_,f[p+"Formation"],ut,ee,zt(),Gt(),Ke)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ce.map(X=>Xe(X,!1)).join("")}
            ${ye?Xe(null,!0):""}
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
          <div>${pt}${ot}</div>
        </div>
      </div>`;function Mt(){const X=e.querySelector(".match-screen");if(!X)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=ge+"px",X.style.minHeight=ge+"px",X.style.maxHeight=ge+"px",X.style.overflow="hidden";const Me=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");Me&&_e&&(_e.style.paddingBottom=Me.offsetHeight+"px")}if(Mt(),setTimeout(Mt,120),setTimeout(Mt,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Mt),window.visualViewport.addEventListener("scroll",Mt)),window.addEventListener("resize",Mt)),function(){const ge=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!ge)return;const Me=ge.closest("#match-terrain-wrap");Me&&(Me.style.cssText="position:relative;width:100%;height:100%;padding:0"),ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=e.querySelector(".terrain-wrapper svg");if(X){const ge=X.closest("#match-terrain-wrap");ge&&(ge.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!q&&!P)return;const ge=X.dataset.cardId,Me=X.dataset.role,_e=(_[Me]||[]).find(He=>He.cardId===ge);if(!_e||_e.used)return;const jt=Ke.includes(ge);if(q&&!["MIL","ATT"].includes(Me)&&!jt)return;Array.isArray(f["selected_"+p])||(f["selected_"+p]=[]);const at=f["selected_"+p],Ge=at.findIndex(He=>He.cardId===ge);Ge>-1?at.splice(Ge,1):at.length<3&&at.push({..._e,_role:Me}),W()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>O(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>O())}),(Ki=e.querySelector("#pvp-sub-open"))==null||Ki.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{q?X.addEventListener("click",()=>M(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(Vi=e.querySelector("#pvp-boost-card"))==null||Vi.addEventListener("click",()=>F()),(Yi=e.querySelector("#pvp-action"))==null||Yi.addEventListener("click",X=>{q?X.currentTarget.dataset.pass==="1"||!De(p)?R():Te():P&&Se()}),(Wi=e.querySelector("#pvp-quit"))==null||Wi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&z()}),(Xi=e.querySelector("#pvp-view-opp"))==null||Xi.addEventListener("click",()=>H()),(Ji=e.querySelector("#pvp-toggle-history"))==null||Ji.addEventListener("click",()=>B()),k&&(clearInterval(k),k=null),(q||P)&&!C){let X=30,ge=!1;const Me=()=>document.getElementById("pvp-timer"),_e=()=>{Me()&&(Me().textContent=X+"s",Me().style.color=ge?"#ff4444":"#fff")};_e(),k=setInterval(()=>{X--,X<0?ge?(clearInterval(k),k=null,q&&!De(p)?R():z()):(ge=!0,X=15,_e()):_e()},1e3)}}function ue(){dt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${Zo(f[u+"Team"],f[u+"Formation"],null,f[u+"Name"]||"Adversaire")}
    </div>`;const _=e.querySelector("svg"),E=_==null?void 0:_.closest("#match-terrain-wrap");E&&(E.style.cssText="position:relative;width:100%;height:100%;padding:0"),_&&(_.removeAttribute("width"),_.removeAttribute("height"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let N=!1;function V(){if(N)return;const _=f[p+"Team"].MIL||[],E=f[u+"Team"].MIL||[],T=yt(_)+bt(_),A=yt(E)+bt(E),L=T>=A;dt(e),e.innerHTML=`
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
      ${ci(_,f[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${ci(E,f[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const G=(se,de)=>e.querySelectorAll(se).forEach((xe,ce)=>{setTimeout(()=>{xe.style.opacity="1",xe.style.transform="translateY(0) scale(1)"},de+ce*90)});G(".duel-card-me",150),G(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((se,de)=>setTimeout(()=>{se.style.opacity="1"},de*70)),900),setTimeout(()=>{const se=e.querySelector("#pvp-vs");se&&(se.style.opacity="1",se.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(de=>de.style.opacity="1")},1250);function q(se,de,xe){const ce=document.getElementById(se);if(!ce)return;const ye=performance.now(),he=ae=>{const Ie=Math.min(1,(ae-ye)/xe);ce.textContent=Math.round(de*(1-Math.pow(1-Ie,3))),Ie<1?requestAnimationFrame(he):ce.textContent=de};requestAnimationFrame(he)}setTimeout(()=>{q("pvp-score-me",T,800),q("pvp-score-opp",A,800)},1500);const P=f.p1Team.MIL||[],K=f.p2Team.MIL||[],ee=yt(P)+bt(P),re=yt(K)+bt(K),te=ee>=re?"p1":"p2";let J=f.boostValue;J==null&&(J=Mn(),f.boostValue=J,f.boostOwner=te,f.boostUsed=!1),N=!0,setTimeout(()=>{const se=e.querySelector("#duel-row-"+(L?"me":"opp")),de=e.querySelector("#duel-row-"+(L?"opp":"me")),xe=document.getElementById("pvp-score-me"),ce=document.getElementById("pvp-score-opp"),ye=L?xe:ce,he=L?ce:xe;ye&&(ye.style.fontSize="80px",ye.style.color=L?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(L?",duelGlow 1.5s ease infinite .5s":"")),he&&(he.style.opacity="0.25"),setTimeout(()=>{se&&(se.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",se.style.zIndex="5"),setTimeout(()=>{const ae=document.getElementById("duel-shock");ae&&(ae.style.animation="shockwave .5s ease-out forwards"),de&&(de.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ae;const ae=document.getElementById("pvp-duel-finale");if(!ae)return;const Ie=f.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ae.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(L?"⚽ "+f[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ie+Oe,ae.style.transition="opacity .45s ease",ae.style.opacity="1",ae.style.pointerEvents="auto",(Ae=document.getElementById("pvp-start-match"))==null||Ae.addEventListener("click",async()=>{const We=te;await j({phase:We+"-attack",attacker:We,round:1,boostValue:J,boostUsed:!1,boostOwner:We})})},600)},700)},2800)}function U(_,E,T){var xe,ce;const A=(f.gcDefs||[]).find(ye=>{var he;return ye.name===_||((he=ye.name)==null?void 0:he.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),L={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",G={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",q=(A==null?void 0:A.name)||_,P=(A==null?void 0:A.effect)||((xe=qe[_])==null?void 0:xe.desc)||"",K=A!=null&&A.image_url?`/icons/${A.image_url}`:null,ee=((ce=qe[_])==null?void 0:ce.icon)||"⚡",te=E===p?"Vous":f[E+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${G}66}50%{box-shadow:0 0 60px ${G}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${G};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${te} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${G};background:${L};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${K?`<img src="${K}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${ee}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let se=!1;const de=()=>{se||(se=!0,J.remove(),setTimeout(()=>T&&T(),50))};J.addEventListener("click",de),setTimeout(de,3e3)}function M(_,E){var J,se,de,xe;const A=(f["gcCardsFull_"+p]||[]).find(ce=>ce.id===_),L=A==null?void 0:A._gcDef,G={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[L==null?void 0:L.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[L==null?void 0:L.color]||"#b06ce0",P=(L==null?void 0:L.name)||E,K=(L==null?void 0:L.effect)||((J=qe[E])==null?void 0:J.desc)||"Carte spéciale.",ee=L!=null&&L.image_url?`/icons/${L.image_url}`:null,re=((se=qe[E])==null?void 0:se.icon)||"⚡",te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",te.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${q};background:${G};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${q}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${P.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${P}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ee?`<img src="${ee}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${re}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${K}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(te),(de=te.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>te.remove()),(xe=te.querySelector("#pvp-gc-use"))==null||xe.addEventListener("click",()=>{te.remove(),fe(_,E)})}function F(){var A;const _=f[p+"Team"],E=Object.entries(_).flatMap(([L,G])=>(G||[]).filter(q=>!q.used).map(q=>({...q,_line:L})));if(!E.length)return;const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",T.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(L=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",q=Ne(L,L._line)+(L.boost||0);return`<div class="bp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${G};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(T),(A=T.querySelector("#bp-close"))==null||A.addEventListener("click",()=>T.remove()),T.querySelectorAll(".bp-item").forEach(L=>{L.addEventListener("click",async()=>{const G=L.dataset.cid,q=E.find(K=>K.cardId===G);if(!q)return;const P=(_[q._line]||[]).find(K=>K.cardId===G);P&&(P.boost=(P.boost||0)+f.boostValue),T.remove(),await j({[p+"Team"]:_,boostUsed:!0})})})}function O(_=null){var se,de;if(!(f.phase===p+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const T=f[p+"Team"],A=f["usedSubIds_"+p]||[],L=f.maxSubs||3;if(A.length>=L){x(`Maximum ${L} remplacements atteint`,"warning");return}const G=Object.entries(T).flatMap(([xe,ce])=>(ce||[]).filter(ye=>ye.used).map(ye=>({...ye,_line:xe}))),q=(f[p+"Subs"]||[]).filter(xe=>!A.includes(xe.cardId));if(!G.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){x("Aucun remplaçant disponible","warning");return}let P=Math.max(0,G.findIndex(xe=>xe.cardId===_));const K=((se=G[P])==null?void 0:se._line)||((de=G[P])==null?void 0:de.job);let ee=Math.max(0,q.findIndex(xe=>xe.job===K)),re=!1;const te=document.createElement("div");te.id="pvp-sub-overlay",te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var Oe,Ae,We,Ke,nt,Ut;const xe=G[P],ce=q[ee],ye=Math.min(130,Math.round((window.innerWidth-90)/2)),he=Math.round(ye*1.35),ae=Pe=>`background:rgba(255,255,255,0.12);border:none;color:${Pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Pe?"default":"pointer"};flex-shrink:0`;te.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${A.length}/${L})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(ee===0)}" ${ee===0?"disabled":""}>▲</button>
          <div>${ce?vt({...ce,used:!1,boost:0},ye,he):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(ee>=q.length-1)}" ${ee>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${ee+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(P===0)}" ${P===0?"disabled":""}>▲</button>
          <div>${xe?vt({...xe,used:!1,boost:0},ye,he):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(P>=G.length-1)}" ${P>=G.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${P+1}/${G.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Oe=te.querySelector("#psub-close"))==null||Oe.addEventListener("click",()=>te.remove()),(Ae=te.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{P>0&&(P--,J())}),(We=te.querySelector("#pout-down"))==null||We.addEventListener("click",()=>{P<G.length-1&&(P++,J())}),(Ke=te.querySelector("#pin-up"))==null||Ke.addEventListener("click",()=>{ee>0&&(ee--,J())}),(nt=te.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{ee<q.length-1&&(ee++,J())});const Ie=(Pe,Xe,Ve,pt)=>{const ot=te.querySelector("#"+Pe);if(!ot)return;let At=0;ot.addEventListener("touchstart",ut=>{At=ut.touches[0].clientY},{passive:!0}),ot.addEventListener("touchend",ut=>{const _t=ut.changedTouches[0].clientY-At;if(Math.abs(_t)<30)return;const rt=Xe();_t<0&&rt<pt-1?(Ve(rt+1),J()):_t>0&&rt>0&&(Ve(rt-1),J())},{passive:!0})};Ie("pin-panel",()=>ee,Pe=>ee=Pe,q.length),Ie("pout-panel",()=>P,Pe=>P=Pe,G.length),(Ut=te.querySelector("#psub-confirm"))==null||Ut.addEventListener("click",async Pe=>{if(Pe.preventDefault(),Pe.stopPropagation(),re)return;re=!0;const Xe=G[P],Ve=q[ee];if(!Xe||!Ve)return;const pt=Xe._line,ot=(T[pt]||[]).findIndex(_t=>_t.cardId===Xe.cardId);if(ot===-1){x("Erreur : joueur introuvable","error"),te.remove();return}const At={...Ve,_line:pt,position:Xe.position,used:!1,boost:0};T[pt].splice(ot,1,At);const ut=[...A,Ve.cardId];te.remove(),Q(Xe,Ve,async()=>{await j({[p+"Team"]:T,[u+"Team"]:f[u+"Team"],["usedSubIds_"+p]:ut})})})}document.body.appendChild(te),J()}function Q(_,E,T){const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const G=(K,ee,re)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${ee};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${re}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${A[K.job]||"#555"};border:3px solid ${ee};position:relative;overflow:hidden;margin:0 auto">
        ${ei(K)?`<img src="${ei(K)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(K.name||"").slice(0,12)}</div>
    </div>`;L.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${G(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${G(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(L);let q=!1;const P=()=>{q||(q=!0,L.remove(),setTimeout(()=>T(),50))};L.addEventListener("click",P),setTimeout(P,2200)}function H(){var E;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${gi(f[u+"Team"],f[u+"Formation"],null,[],zt(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(E=_.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>_.remove())}function B(){var T;const _=f.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(T=E.querySelector("#pvp-hist-close"))==null||T.addEventListener("click",()=>E.remove())}async function R(){if(f.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",E=(f.round||0)+1,T=[...f.log||[]];T.push({type:"info",text:`⏭️ ${f[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const A=Ue(f),L=De(_),G=A||!L?"finished":_+"-attack";await j({["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:G,attacker:_,round:E,log:T}),G==="finished"&&await Le(f)}function le(_){const E=(_.GK||[]).some(A=>!A.used),T=["DEF","MIL","ATT"].some(A=>(_[A]||[]).some(L=>!L.used));return E&&!T}function pe(_){return(_.p1Score||0)!==(_.p2Score||0)?null:le(_.p1Team)&&!$e(_.p2Team)?{side:"p1",gk:(_.p1Team.GK||[]).find(E=>!E.used)}:le(_.p2Team)&&!$e(_.p1Team)?{side:"p2",gk:(_.p2Team.GK||[]).find(E=>!E.used)}:null}async function be(){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(_);const E=(T,A)=>new Promise(L=>{_.innerHTML=`<div style="font-size:32px;font-weight:900;color:${A};letter-spacing:2px;animation:lcFade 1.4s ease both">${T}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(L,1400)});await E("⚽ DERNIER CORNER","#FFD700"),await E("🧤 LE GARDIEN MONTE !","#4fc3f7"),_.remove()}async function we(_,E){const{side:T,gk:A}=_;if(!A)return;const L=T+"Score",G=(E[L]||0)+1;A.used=!0;const q=[...E.log||[]];q.push({type:"duel",isGoal:!0,homeScored:T===p,homePlayers:T==="p1"?[qt(A)]:[],aiPlayers:T==="p2"?[qt(A)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${E[T+"Name"]} marque !`});const P=(E.round||0)+1,K=T==="p1"?"p2":"p1",ee={...E,[L]:G},re=Ue(ee);D.add(P),await be();const te=T===p?G:E[p+"Score"]||0,J=T===p?E[u+"Score"]||0:G;Ze([qt(A)],te,J,T===p,async()=>{await j({[L]:G,log:q,round:P,pendingAttack:null,phase:re?"finished":K+"-attack",attacker:K,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}}}),re&&await Le({...f,[L]:G})})}async function Te(){const _=f[p+"Team"],E=!["GK","DEF","MIL","ATT"].some(G=>(f[u+"Team"][G]||[]).some(q=>!q.used)),T=(f["selected_"+p]||[]).map(G=>{const q=(_[G._role]||[]).find(de=>de.cardId===G.cardId)||G,P=["GK","DEF"].includes(G._role),K=_[G._role]||[],ee=K.findIndex(de=>de.cardId===G.cardId),re=xt(K.length),te=ee>=0?re[ee]:q._col??1,J=f.stadiumDef||f.homeStadiumDef||null,se=q.stadiumBonus||J&&(J.club_id&&String(q.club_id)===String(J.club_id)||J.country_code&&q.country_code===J.country_code)||!1;return{...q,_line:G._role,_col:te,stadiumBonus:se,...P?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!T.length)return;const A=Qt(T,f.modifiers[p]||{},f[p+"Formation"]);me(p,T.map(G=>G.cardId)),T.forEach(G=>{const q=(_[G._role]||[]).find(P=>P.cardId===G.cardId);q&&(q.used=!0)}),f["selected_"+p]=[],W();const L=[...f.log||[]];if(E){if(T.length===1&&(T[0]._line==="GK"||T[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await we({side:p,gk:T[0]},{...f,[p+"Team"]:_,log:L});return}const q=(f[p+"Score"]||0)+1,P=T.map(J=>qt(J));L.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:P,homeTotal:A.total,aiTotal:0});const K=(f.round||0)+1,ee=p==="p1"?"p2":"p1",re={...f,[p+"Team"]:_,[p+"Score"]:q},te=Ue(re);D.add(K),Ze(P,q,f[u+"Score"]||0,!0,async()=>{await j({[p+"Team"]:_,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:te?"finished":ee+"-attack",attacker:ee,round:K,log:L}),te&&await Le({...f,[p+"Score"]:q})});return}L.push({type:"pending",text:`⚔️ ${f[p+"Name"]} attaque (${A.total})`}),await j({[p+"Team"]:_,[u+"Team"]:f[u+"Team"],pendingAttack:{...A,players:T,side:p},["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},phase:u+"-defense",log:L})}async function Se(){const _=f[p+"Team"],E=(f["selected_"+p]||[]).map(ce=>{const ye=(_[ce._role]||[]).find(Ae=>Ae.cardId===ce.cardId)||ce,he=_[ce._role]||[],ae=he.findIndex(Ae=>Ae.cardId===ce.cardId),Ie=xt(he.length),Oe=ae>=0?Ie[ae]:ye._col??1;return{...ye,_line:ce._role,_col:Oe}}),T=Zt(E,f.modifiers[p]||{},f[p+"Formation"]);me(p,E.map(ce=>ce.cardId)),E.forEach(ce=>{const ye=(_[ce._role]||[]).find(he=>he.cardId===ce.cardId);ye&&(ye.used=!0)}),f["selected_"+p]=[],W();const A=Gi(f.pendingAttack.total,T.total,f.modifiers[p]||{}),L=f.pendingAttack.side,G=A==="attack"||(A==null?void 0:A.goal),q=L==="p1"?"p2":"p1",P=(f.round||0)+1,K=(f.pendingAttack.players||[]).map(ce=>qt(ce)),ee=[...f.log||[]];ee.push({type:"duel",isGoal:G,homeScored:G&&L===p,text:G?`⚽ BUT de ${f[L+"Name"]} ! (${f.pendingAttack.total} vs ${T.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${T.total})`,homePlayers:K,aiPlayers:E.map(ce=>qt(ce)),homeTotal:f.pendingAttack.total,aiTotal:T.total});const re=G?(f[L+"Score"]||0)+1:f[L+"Score"]||0,te={...f,[p+"Team"]:_,[L+"Score"]:re},J=Ue(te),se=J?"finished":q+"-attack",de=!J&&!G?pe(te):null,xe=async()=>{if(de){await we(de,te);return}await j({[p+"Team"]:_,[u+"Team"]:f[u+"Team"],[L+"Score"]:re,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:se,attacker:q,round:P,log:ee}),(se==="finished"||J)&&await Le({...f,[L+"Score"]:re})};if(G){const ce=L===p,ye=ce?re:f[p+"Score"]||0,he=ce?f[u+"Score"]||0:re;D.add(P),Ze(K,ye,he,ce,xe)}else await xe()}function ke(_){return["MIL","ATT"].some(E=>(_[E]||[]).some(T=>!T.used))}function $e(_){return["GK","DEF","MIL","ATT"].some(E=>(_[E]||[]).some(T=>!T.used))}function je(_){return $e(_)&&!ke(_)}function De(_){const E=f[_+"Team"],T=f[(_==="p1"?"p2":"p1")+"Team"];return!!(ke(E)||je(E)&&!$e(T)||je(E)&&!ke(T)&&$e(T))}function Ue(_){return!$e(_.p1Team)&&!$e(_.p2Team)}function Ee(_){const E=_.p1Score||0,T=_.p2Score||0;return E===T?null:E>T?h.home_id:h.away_id}async function Le(_){try{const E=Ee(_),T=E?h.home_id===E?h.away_id:h.home_id:null,A=_.p1Score||0,L=_.p2Score||0,{data:G,error:q}=await v.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:E,p_home_score:A,p_away_score:L,p_forfeit:!1});if(q&&console.error("[PvP] finish_pvp_match:",q),l)try{await v.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(P){console.error("[PvP] check_and_finish_mini_league:",P)}E&&T&&ho(E,T).catch(()=>{});try{const{data:P}=await v.rpc("apply_match_rewards",{p_match_id:i});P!=null&&P.success&&!(P!=null&&P.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(P){console.error("[PvP] apply_match_rewards:",P)}if(typeof c=="function")try{await c({homeScore:A,awayScore:L,winnerId:E,homeId:h.home_id,awayId:h.away_id,matchId:i})}catch(P){console.error("[PvP] onMatchEnd:",P)}}catch(E){console.error("[PvP] finishMatch:",E)}}function Fe(){var L;const _=f[p+"Score"],E=f[u+"Score"],T=_>E,A=_===E;dt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${T?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${T?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(L=document.getElementById("pvp-home"))==null||L.addEventListener("click",()=>{try{v.removeChannel(Z)}catch{}it(e),l?g("mini-league",{openLeagueId:l}):g("home")})}W()}async function Mi(e,t,i=!1){var s,d;const{state:n,navigate:r,toast:o}=t,a=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await mi(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:m,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{dt(e);const u=async b=>{await hr(e,t,c,l,m,y,b||[],x,p,i,a)};if(!(g!=null&&g.length)){await u([]);return}fi(e,g,u)})}async function br(e,t,i){return yr(e,t,i)}async function hr(e,t,i,n,r,o,a=[],s=[],d=null,c=!1,l=null){var ne,Z;const{state:m,navigate:y,toast:g}=t,x=(l==null?void 0:l.mmr)??((ne=m.profile)==null?void 0:ne.mmr)??1e3,p=c?Di(x):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let w=!1,h=null,$=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(x)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null);try{await v.rpc("cancel_matchmaking",{p_user_id:m.profile.id})}catch(j){console.error("[Matchmaking] cancel error:",j)}};(Z=document.getElementById("cancel-mm"))==null||Z.addEventListener("click",async()=>{await f(),it(e),y("home")});const C=async(j,z)=>{w||(w=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await St(e,t,j,z,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?vr:null}))},k=m.user.id,{data:I,error:D}=c?await v.rpc("try_matchmake_ranked",{p_user_id:k,p_deck_id:i,p_mmr:x}):await v.rpc("try_matchmake",{p_user_id:k,p_deck_id:i});if(D||!(I!=null&&I.success)){console.error("[Matchmaking] try_matchmake error:",D||I),g("Erreur de matchmaking","error"),it(e),y("home");return}if(I.matched){await C(I.match_id,!1);return}const ie=async()=>{if(w)return;const{data:j}=await v.from("matchmaking_queue").select("status, match_id").eq("user_id",k).maybeSingle();(j==null?void 0:j.status)==="matched"&&j.match_id&&await C(j.match_id,!0)};h=v.channel(`mm_${k}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${k}`},j=>{const z=j.new;z.status==="matched"&&z.match_id&&C(z.match_id,!0)}).subscribe(),$=setInterval(ie,3e3),setTimeout(()=>{w||f()},12e4)}async function vr(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,m=o===l,y=r===l,{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",m?a:o).single();if(g&&x){const p=Kn(g.mmr,g.mmr_rd,g.mmr_v,x.mmr,x.mmr_rd,y?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:y?v.sql`mmr_wins + 1`:void 0,mmr_losses:y?void 0:v.sql`mmr_losses + 1`}).eq("id",l),n(y?`+MMR ↑ ${Math.round(p.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-p.mmr)}`,y?"success":"error",4e3)}}const wr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Mi,resumePvpMatch:br},Symbol.toStringTag,{value:"Module"}));async function _r(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",d=!!o.isAccepting;await mi(e,t,"friend",async({deckId:c,formation:l,starters:m,subsRaw:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{dt(e);const u=async b=>{const w=b||[];d?await $r(e,t,c,w,x,p):await kr(e,t,c,w,x,p,a,s)};if(!(g!=null&&g.length)){await u([]);return}fi(e,g,u)})}async function kr(e,t,i,n,r,o,a,s){var w;const{state:d,navigate:c,toast:l}=t,m=d.user.id,{data:y,error:g}=await v.from("friend_match_invites").insert({inviter_id:m,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!y){console.error("[Friend] Erreur création invitation:",g),l("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let x=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(w=document.getElementById("cancel-friend"))==null||w.addEventListener("click",async()=>{await u(),await v.from("friend_match_invites").update({status:"declined"}).eq("id",y.id),it(e),c("home")}),p=v.channel(`friend_invite_${y.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${y.id}`},async({new:h})=>{x||h.status!=="accepted"||!h.match_id||(x=!0,await u(),await St(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(x)return;const{data:h}=await v.from("friend_match_invites").select("status, match_id").eq("id",y.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(x=!0,clearInterval(b),await u(),await St(e,t,h.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{x||(clearInterval(b),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function $r(e,t,i,n,r,o){const{state:a,navigate:s,toast:d}=t,c=a.user.id,{data:l}=await v.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:m,error:y}=await v.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(y||!(m!=null&&m.success)){console.error("[Friend] Erreur accept_friend_invite:",y||m),d((m==null?void 0:m.error)||"Impossible de rejoindre le match","error"),s("home");return}await St(e,t,m.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const Fn="#1A6B3C",lt="#D4A017",Kt="var(--tile-bg)",Vt="var(--tile-border)",Lt="var(--divider)",Je="var(--tile-fg-on-page)",Et="var(--tile-fg-dim)",et="var(--tile-fg-faint)",Wt="var(--nav-fg,#fff)",Pn="rgba(255,255,255,0.62)",Er="rgba(255,255,255,0.4)";async function Lr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await ct(e,t,i);return}await tt(e,t)}async function tt(e,t,i="waiting"){var h,$;const{state:n}=t,r=n.profile.id,{data:o}=await v.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(f=>f.league_id),s={};(o||[]).forEach(f=>{s[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:d,error:c}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],y=(a.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=y.filter(f=>f.status==="waiting"&&!f.is_archived),x=y.filter(f=>f.status==="active"&&!f.is_archived),p=y.filter(f=>f.is_archived||f.status==="finished");let u=p;if(p.length){const{data:f}=await v.from("mini_league_matches").select("league_id").in("league_id",p.map(k=>k.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),C=new Set((f||[]).map(k=>k.league_id));u=p.filter(k=>C.has(k.id))}const b=l.filter(f=>!a.includes(f.id)),w=[{key:"waiting",label:"🟡 En attente",count:g.length+b.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Wt}">🏆 Mini League</div>
        <div style="font-size:12px;color:${Pn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Wt}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt}">
      ${w.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Fn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":Er};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Tr(g,b,r):i==="active"?zr(x,r):Ir(u,r,s)}
    </div>
  </div>`,(h=document.getElementById("ml-create-btn"))==null||h.addEventListener("click",()=>Sr(e,t)),($=document.getElementById("ml-refresh-list"))==null||$.addEventListener("click",()=>tt(e,t,i)),e.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>tt(e,t,f.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>ct(e,t,f.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",C=>{C.stopPropagation(),Gn(e,t,f.dataset.join,f.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",C=>{C.stopPropagation(),ji(e,t,f.dataset.delete,f.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async C=>{C.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:k,error:I}=await v.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:n.profile.id});if(I||!(k!=null&&k.success)){t.toast((k==null?void 0:k.error)||"Erreur lors de la récupération","error"),tt(e,t,i);return}if(!k.already_claimed){n.profile.credits=(n.profile.credits||0)+k.prize;const D=document.getElementById("nav-credits");D&&(D.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${k.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}tt(e,t,i)}))}function ui(e,t,i=!1,n=null){var d,c;const r=e.creator_id===t,o=e.pot||0,a=((c=(d=e.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Kt};border:1px solid ${s?"rgba(212,160,23,0.5)":Vt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Je}">${e.name}</div>
      ${r?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Et};margin-bottom:${i||s?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${lt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${e.id}" class="btn btn-sm" style="width:100%;background:${lt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function Tr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>ui(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${et};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>ui(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${et}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function zr(e,t){return e.length?e.map(i=>ui(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league en cours.</div>`}function Ir(e,t,i={}){return e.length?e.map(n=>ui(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${et}">Aucune mini league archivée.</div>`}function Sr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var x,p,u,b;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((x=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:x.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:m}=await v.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:o,entry_fee:a}).select().single();if(m){n("Erreur : "+m.message,"error");return}const{data:y}=await v.from("users").select("credits").eq("id",t.state.profile.id).single();if(((y==null?void 0:y.credits)||0)<a){await v.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:y.credits-a}).eq("id",t.state.profile.id),await v.from("mini_leagues").update({pot:a}).eq("id",l.id),await v.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=y.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),ct(e,t,l.id)})}function Ar(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function Gn(e,t,i,n){var m;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await Ar(),s===null))return;const{data:d,error:c}=await v.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),r((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:y}=await v.from("users").select("credits").eq("id",a).single();o.profile&&y&&(o.profile.credits=y.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((m=o.profile)==null?void 0:m.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),ct(e,t,i)}async function Mr(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(y=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),y(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),y(!1)}}))return;const{data:d,error:c}=await v.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(d!=null&&d.success)){r((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+l);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),tt(e,t,"waiting")}async function ji(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await v.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),tt(e,t,r)}async function jr(e,t,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),tt(e,t,"archived")}async function ct(e,t,i){var $,f,C,k,I,D,ie,ne,Z;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await tt(e,t);return}const c=(s||[]).some(j=>j.user_id===o),l=a.creator_id===o,m=(s||[]).map(j=>j.user).filter(Boolean),y=Fr(m,d||[]),g=(d||[]).filter(j=>j.matchday===a.current_day),x=a.pot||0,p=a.entry_fee||100,u=g.length>0&&g.every(j=>j.status==="finished"||j.status==="bye"),b=a.current_day>=a.total_days,w=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Wt}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Wt};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Wt}">${a.name}</div>
        <div style="font-size:11px;color:${Pn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${x>0?`<div style="font-size:12px;font-weight:900;color:${lt};margin-top:4px">🏆 ${x.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Kt};border:1px solid ${Vt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Je}">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Et};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Lt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Fn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Je}">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:${et}">@${j.pseudo}</div></div>
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
      <div style="background:${Kt};border:1px solid ${Vt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(j=>un(j,m,o,c)).join("")}
        ${l&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&y.length?`
      <div style="background:${Kt};border:1px solid ${Vt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${et};text-transform:uppercase;border-bottom:2px solid ${Lt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${x>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${lt}">💰</th>`:""}
          </tr></thead>
          <tbody>${y.map((j,z)=>{const Y=x>0&&a.status==="finished"?z===0?Math.floor(x*.7):z===1?Math.floor(x*.2):z===2?Math.floor(x*.1):0:0;return`<tr style="border-bottom:1px solid ${Lt};${j.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${z===0?lt:z<3?"#4ade80":Et}">${["🥇","🥈","🥉"][z]||z+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Je}">${j.clubName}</div><div style="font-size:10px;color:${et}">@${j.pseudo}</div></td>
              <td style="text-align:center;color:${Et}">${j.played}</td><td style="text-align:center;color:${Et}">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?"#4ade80":"#ff6b6b"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Je}">${j.points}</td>
              ${x>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${lt}">${Y?Y.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Kt};border:1px solid ${Vt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Je}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(j,z)=>z+1).reverse().map(j=>{const z=(d||[]).filter(Y=>Y.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${et};margin-bottom:6px">Journée ${j}</div>${z.map(Y=>un(Y,m,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Et}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>tt(e,t,h)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async j=>{const z=j.currentTarget;z.style.opacity="0.5",await ct(e,t,i)}),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>Cr(e,t,a,m)),(k=document.getElementById("ml-next-day"))==null||k.addEventListener("click",()=>Br(e,t,i)),(I=document.getElementById("ml-join-now"))==null||I.addEventListener("click",()=>Gn(e,t,i,a.type)),(D=document.getElementById("ml-leave-btn"))==null||D.addEventListener("click",()=>Mr(e,t,i,p)),(ie=document.getElementById("ml-delete-btn"))==null||ie.addEventListener("click",()=>ji(e,t,i,a.name,"waiting")),(ne=document.getElementById("ml-delete-now"))==null||ne.addEventListener("click",()=>ji(e,t,i,a.name,h)),(Z=document.getElementById("ml-archive-btn"))==null||Z.addEventListener("click",()=>jr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const z=g.find(Y=>Y.id===j.dataset.playMatch);z&&t.navigate("match-mini-league",{mlMatchId:z.id,leagueId:i})})}),a.status==="finished"&&w){const j=y.findIndex(z=>z.userId===o);j>=0&&j<3&&w.prize_amount>0&&!w.prize_claimed&&setTimeout(()=>qr(e,t,a,w,j),400)}}function un(e,t,i,n,r=!1){const o=m=>t.find(y=>y.id===m);if(e.is_bye){const m=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Et};text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!r,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":Lt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Je};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":et}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Je};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Cr(e,t,i,n){const{toast:r,state:o}=t,a=Dr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,l)=>c.forEach(m=>s.push({league_id:i.id,matchday:l+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:d}=await v.from("mini_league_matches").insert(s);if(d){r("Erreur calendrier : "+d.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),ct(e,t,i.id)}async function Br(e,t,i){const{data:n}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){ct(e,t,i);return}await v.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),ct(e,t,i)}async function qr(e,t,i,n,r){var y,g;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,l=n.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${r===0?"Champion !":r===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${lt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${lt}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${r===0?"70%":r===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${lt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(y=m.querySelector("#prize-close"))==null||y.addEventListener("click",()=>m.remove()),(g=m.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async x=>{const p=x.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await v.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const w=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=w);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${w.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}m.remove(),ct(e,t,i.id)})}function Dr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const d=[],c=[n[0],...o];for(let l=0;l<r/2;l++){const m=c[l],y=c[r-1-l];m===null?d.push({bye:y}):y===null?d.push({bye:m}):d.push({home:m,away:y})}a.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function Fr(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function fn(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,d=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:l}=await v.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==d&&c.away_id!==d){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const m=c.home_id===d;if(c.match_id){await St(e,t,c.match_id,m,{mlLeagueId:a,mlMatchId:s});return}await mi(e,t,"mini_league",async({deckId:y,gcCardsEnriched:g,gcDefs:x,stadiumDef:p})=>{dt(e);const u=async b=>{const{data:w,error:h}=await v.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:y});if(h||!(w!=null&&w.success)){console.error("[MiniLeague] start_mini_league_match error:",h||w),r((w==null?void 0:w.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(w.matched){await St(e,t,w.match_id,m,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:x,stadiumDef:p});return}await Pr(e,t,{mlMatchId:s,leagueId:a,amIHome:m,chosenGC:b,gcDefs:x,stadiumDef:p})};if(!(g!=null&&g.length)){await u([]);return}fi(e,g,u)})}function Pr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const m=async u=>{if(!l){if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}u&&await St(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(x),g)try{g.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),d()});const y=async()=>{if(l)return;const{data:u}=await v.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&m(u.match_id)},g=v.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&m(u.new.match_id)}).subscribe(),x=setInterval(y,3e3);y()})}const Gr="/",Rr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,o()}),(m=r.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{d?a():(n++,o())}),(y=r.querySelector("#tuto-skip"))==null||y.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await v.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function Or(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await v.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):Rr;Nr(e,a,()=>t("boosters"))}const ai={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Dt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function Hr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Hi(e,t)}async function Hi(e,t){const{state:i,toast:n}=t,{data:r}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let d="buy";const c=()=>{var p,u,b,w,h,$,f;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((w=document.getElementById("flt-job"))==null?void 0:w.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((f=document.getElementById("flt-note2"))==null?void 0:f.value)||0}};function l(p){const u=c();return p.filter(b=>{var D,ie,ne;const w=(D=b.card)==null?void 0:D.player;if(!w)return!1;const h=`${w.firstname} ${w.surname_real}`.toLowerCase(),$=(((ie=w.clubs)==null?void 0:ie.encoded_name)||"").toLowerCase(),f=(w.country_code||"").toLowerCase(),C=((ne=b.card)==null?void 0:ne.evolution_bonus)||0,k=Dt(w,w.job,C),I=w.job2?Dt(w,w.job2,C):0;return!(u.name&&!h.includes(u.name)||u.club&&!$.includes(u.club)||u.country&&!f.includes(u.country)||u.job&&w.job!==u.job||u.rarity&&w.rarity!==u.rarity||u.note1&&k<u.note1||u.note2&&I<u.note2)})}function m(p){var I,D,ie,ne;const u=(I=p.card)==null?void 0:I.player;if(!u)return"";const b=((D=p.card)==null?void 0:D.evolution_bonus)||0,w=Dt(u,u.job,b),h=u.job2?Dt(u,u.job2,b):0,$=(i.profile.credits||0)>=p.price,f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=ai[u.job]||"#bbb",k=u.job2?ai[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ie=u.clubs)!=null&&ie.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ne=p.seller)==null?void 0:ne.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function y(p){var I,D,ie,ne;const u=(I=p.card)==null?void 0:I.player;if(!u)return"";const b=((D=p.card)==null?void 0:D.evolution_bonus)||0,w=Dt(u,u.job,b),h=u.job2?Dt(u,u.job2,b):0,$=p.status==="sold",f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,C=ai[u.job]||"#bbb",k=u.job2?ai[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ie=u.clubs)!=null&&ie.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${C};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${C};font-family:Arial Black,Arial">${w}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((ne=p.buyer)==null?void 0:ne.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
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
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function Vr(e,t,i){const{toast:n}=i,{data:r}=await v.from("market_listings").select("card_id").eq("id",e).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),Hi(t,i)}async function Yr(e,t){var g,x,p,u,b;const{state:i,navigate:n}=t,r=((x=(g=t==null?void 0:t.state)==null?void 0:g.params)==null?void 0:x.tab)||"ranked";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:o},{data:a},{data:s}]=await Promise.all([v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),v.rpc("get_mini_league_leaderboard"),v.rpc("get_random_leaderboard")]);let d=r;const c=w=>w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)",l=w=>w<3?"#000":"#fff";function m(){var $,f,C;const w=document.getElementById("rankings-legend");w&&(w.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const h=document.getElementById("rankings-list");if(h){if(d==="ranked"){const k=o||[];h.innerHTML=k.length>0?k.map((I,D)=>{const ie=Di(I.mmr??1e3),ne=(I.ranked_wins||0)+(I.ranked_losses||0)+(I.ranked_draws||0),Z=ne>0?Math.round((I.ranked_wins||0)/ne*100):0,j=I.id===i.profile.id,z=(I.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${j?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${D<3?["#D4A017","#a0a0a0","#cd7f32"][D]:"rgba(255,255,255,0.08)"};color:${D<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${D<3?"16":"13"}px">${D<3?["🥇","🥈","🥉"][D]:D+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${ie.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name} · ${ie.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${z?"❓":ie.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${ie.color}">${z?"Placement":ie.label}</div>
              ${z?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${Z}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const k=a||[];h.innerHTML=k.length>0?k.map((I,D)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(D)};color:${l(D)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${D<3?"16":"13"}px">${D<3?["🥇","🥈","🥉"][D]:D+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${I.top1} 🥈${I.top2} 🥉${I.top3}</div>
            <div style="color:var(--tile-fg-dim)">${I.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const k=s||[];h.innerHTML=k.length>0?k.map((I,D)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(D)};color:${l(D)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${D<3?"16":"13"}px">${D<3?["🥇","🥈","🥉"][D]:D+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${I.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${I.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${I.wins}/${I.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${I.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}($=document.getElementById("tab-ranked"))!=null&&$.style&&(document.getElementById("tab-ranked").style.cssText=y(d==="ranked")),(f=document.getElementById("tab-mini-league"))!=null&&f.style&&(document.getElementById("tab-mini-league").style.cssText=y(d==="mini-league")),(C=document.getElementById("tab-random"))!=null&&C.style&&(document.getElementById("tab-random").style.cssText=y(d==="random"))}}const y=w=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${w?"900":"400"};background:${w?"var(--green)":"rgba(255,255,255,0.06)"};color:${w?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;e.innerHTML=`
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
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,m(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",m()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",m()}),(b=document.getElementById("tab-random"))==null||b.addEventListener("click",()=>{d="random",m()})}async function Wr(e,t){var C,k,I,D;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(C=document.getElementById("ranked-back"))==null||C.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,m=s.placement_matches??0,y=m<10,g=Math.max(0,10-m),x=Di(d),p=Vn(d),u=bi.findIndex(ie=>ie.id===x.id),b=bi[u+1]||null,w={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=h>0?Math.round((s.ranked_wins||0)/h*100):0,f=bi.map(ie=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${x.id===ie.id?1:.35};
      transform:${x.id===ie.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${x.id===ie.id?"28px":"20px"}">${ie.emoji}</div>
      <div style="font-size:9px;color:${ie.color};font-weight:${x.id===ie.id?"900":"400"};letter-spacing:0.5px">${ie.label.toUpperCase()}</div>
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
  </div>`,(k=document.getElementById("ranked-back"))==null||k.addEventListener("click",()=>n("home")),(I=document.getElementById("ranked-leaderboard-btn"))==null||I.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(D=document.getElementById("ranked-play-btn"))==null||D.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:y}})})}async function Xr(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(l=>l.status==="finished"),d=(o||[]).filter(l=>l.status==="in_progress");function c(l){const m=l.home_id===r.id;m?l.home_score:l.away_score,m?l.away_score:l.home_score;const y=l.winner_id===r.id,g=l.home_score===l.away_score&&l.status==="finished",x=l.status!=="finished"?"…":g?"N":y?"V":"D",p=l.status!=="finished"||g?"#888":y?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const w=l.home_id===r.id?l.away:l.home;let h;l.away_id===null?h=u:w?h=`${w.club_name||w.pseudo} (${w.pseudo})`:h="Adversaire";let $="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(l.created_at),C=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${C}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
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
  </div>`}Yn(Xn);const ve={user:null,profile:null,page:"home",params:{}};function Ft(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function Jr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ci(){document.getElementById("modal-overlay").classList.add("hidden")}async function Yt(){if(!ve.user)return;const{data:e}=await v.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}const Rn="mw_theme";function Nn(){return localStorage.getItem(Rn)||"dark"}function Qr(e){var t;localStorage.setItem(Rn,e),Zr(e),(t=ve.profile)!=null&&t.id&&v.from("users").update({theme:e}).eq("id",ve.profile.id).then(()=>{})}function Zr(e){document.documentElement.setAttribute("data-theme",e)}function Pt(e,t={}){ve.page=e,ve.params=t,On()}async function On(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:Pt,toast:Ft,openModal:Jr,closeModal:Ci,refreshProfile:Yt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await tn(e,i);break;case"settings":await Ei(e,i);break;case"collection":await To(e,i);break;case"decks":await Li(e,i);break;case"boosters":await Go(e,i);break;case"ranked":await Wr(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await Mi(e,i,!1):s==="ranked"?await Mi(e,i,!0):s==="friend"?await _r(e,i,(n=ve.params)==null?void 0:n.friendId,(r=ve.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await fn(e,i,(o=ve.params)==null?void 0:o.mlMatchId,(a=ve.params)==null?void 0:a.leagueId):await tr(e,i);break}case"market":await Hr(e,i);break;case"rankings":await Yr(e,i);break;case"matches":await Xr(e,i);break;case"friends":await no(e,i);break;case"mini-league":await Lr(e,i);break;case"match-mini-league":{const s=ve.params||{};await fn(e,i,s.mlMatchId,s.leagueId);break}default:await tn(e,i)}}function ea(){var n,r;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.20-2329" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Pt(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Pt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Pt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>ta()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Pt("settings"))}async function ta(){const{data:e}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function na(){document.documentElement.setAttribute("data-theme",Nn()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ci()}),document.getElementById("modal-close").addEventListener("click",Ci);const{data:{session:e}}=await v.auth.getSession();if(!e){gn(),ia(document.getElementById("app"),{onPlay:()=>Qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft})});return}ve.user=e.user,await Yt(),gn();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),Wn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){Qn(document.getElementById("app"),{state:ve,navigate:async()=>{await Yt(),ki()},toast:Ft,refreshProfile:Yt});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){Yo(document.getElementById("app"),{state:ve,navigate:()=>ki(),toast:Ft,refreshProfile:Yt});return}ki(),setTimeout(()=>Or(ve.profile,Pt,Ft),800),v.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Qi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft}))})}function oa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function xi(){const e=document.getElementById("app");e&&(e.style.height=oa()+"px")}window.addEventListener("resize",xi);window.addEventListener("orientationchange",()=>setTimeout(xi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",xi);function ki(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",xi(),ea(),On()}function gn(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Hn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}na().catch(e=>{console.error("Échec du démarrage:",e),Hn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Hn("Le serveur met trop de temps à répondre.")},12e3);
