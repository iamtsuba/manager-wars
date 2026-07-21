const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-CiJC3HtT.js","assets/special-cards-CMI0Kx3r.css"])))=>i.map(i=>d[i]);
import{s as h,n as Ht,o as Ri,F as Oi,l as tt,k as ei,r as Ie,j as At,p as zi,h as Hi,q as ao,t as so,T as Ei,m as lo,u as co,b as po}from"./special-cards-CiJC3HtT.js";const uo="/";function dn(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,d,c,l,f;const o=n==="login";e.innerHTML=`
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
        <img src="${uo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o?((d=document.getElementById("login-password"))==null||d.addEventListener("keydown",x=>{var g;x.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const x=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,y=document.getElementById("login-error");if(y.textContent="",!x||!g){y.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:u}=await h.auth.signInWithPassword({email:x,password:g});if(p.textContent="⚽ Se connecter",p.disabled=!1,u){y.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",x=>{var g;x.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(f=document.getElementById("reg-btn"))==null||f.addEventListener("click",async()=>{const x=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,y=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!x||!g||!y){p.textContent="Remplissez tous les champs.";return}if(g.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==y){p.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:b}=await h.auth.signUp({email:x,password:g});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const _=document.getElementById("login-email");_&&(_.value=x)},50)}))};r()}function fo(e,{state:t,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function s(){var y;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),f=((y=document.getElementById("setup-club"))==null?void 0:y.value)||"MW",x=f.trim().split(" ").filter(Boolean),g=x.length>=2?(x[0][0]+x[1][0]).toUpperCase():f.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),l&&(l.textContent=g,l.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await h.from("users").select("id").eq("pseudo",c).maybeSingle();if(f){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await h.from("users").select("id").eq("club_name",c).maybeSingle();if(f){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),x=document.getElementById("step3-finish");f.textContent="",x.disabled=!0,x.textContent="Création en cours…";try{const{error:g}=await h.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:o,club_color2:a,credits:1e4});if(g)throw g;await mo(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){f.textContent=g.message,x.disabled=!1,x.textContent="🚀 Créer mon profil !"}})}async function mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await h.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const go="modulepreload",yo=function(e){return"/"+e},ln={},En=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=yo(d),d in ln)return;ln[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":go,c||(f.as="script"),f.crossOrigin="",f.href=d,s&&f.setAttribute("nonce",s),document.head.appendChild(f),c)return new Promise((x,g)=>{f.addEventListener("load",x),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},ti="#1A6B3C",ii="#cc2222",xo="#D4A017",cn="#888";async function bo(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Ln(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>ho(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Tn(i,n,null,t))}async function Ln(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${ii};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(o||[]).map(g=>g.requester_id===r?g.addressee_id:g.requester_id);let f={};if(l.length){const{data:g}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(g||[]).forEach(y=>{f[y.id]=y})}const x=(o||[]).map(g=>({friendshipId:g.id,friend:f[g.requester_id===r?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!x.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${x.length} ami${x.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${x.map(({friendshipId:g,friend:y})=>vo(y,g)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>_o(e,g.dataset.stats,g.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",async()=>{const y=g.dataset.friendId,p=g.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:b}=await h.from("friend_match_invites").select("id").eq("inviter_id",y).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),_=!!b;console.log("[Friends] clic match",{fid:y,fname:p,isAccepting:_}),n("match",{matchMode:"friend",friendId:y,friendName:p,isAccepting:_})})})}function vo(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||ti,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${xo};background:var(--tile-bg);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function ho(e,t){const i=Ui();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${ii};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ki()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await h.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:c}=await h.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){r.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Tn(e,t,i=null,n={}){const r=e.user.id,{data:o}=await h.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(x=>x.requester_id);let s={};if(a.length){const{data:x}=await h.from("users").select("id, pseudo, club_name").in("id",a);(x||[]).forEach(g=>{s[g.id]=g})}const d=(o||[]).map(x=>({...x,requester:s[x.requester_id]||{pseudo:"?"}})),c=Ui(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(x=>{var g,y,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=x.requester)==null?void 0:g.club_name)||((y=x.requester)==null?void 0:y.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=x.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${x.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ti};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${x.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ii};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ki()}`,document.body.appendChild(c);const f=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",f),c.addEventListener("click",x=>{x.target===c&&f()}),c.querySelectorAll("[data-accept]").forEach(x=>{x.addEventListener("click",async()=>{const{error:g}=await h.from("friendships").update({status:"accepted"}).eq("id",x.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}x.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ln(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(x=>{x.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",x.dataset.decline),x.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function _o(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await h.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=a?c.wins_p1||0:c.wins_p2||0,f=a?c.wins_p2||0:c.wins_p1||0,x=c.draws||0,g=a?c.goals_p1||0:c.goals_p2||0,y=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,_=(E,m,z,k=ti,A=ii)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${k}">${m}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${A}">${z}</div>
    </div>`,v=Ui();v.innerHTML=`
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
        ${_("Victoires",l,f)}
        ${_("Nuls",x,x,cn,cn)}
        ${_("Défaites",f,l)}
        ${_("Buts marqués",g,y)}
        ${_("Buts encaissés",y,g,ii,ti)}
        ${_("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Ki()}`,document.body.appendChild(v),v.querySelector("#stats-close").addEventListener("click",()=>v.remove()),v.addEventListener("click",E=>{E.target===v&&v.remove()})}function Ui(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Ki(){return`
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
        background:${ti};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const In="mw_sound_volume";function Vi(){const e=localStorage.getItem(In);if(e===null)return 100;const t=parseInt(e,10);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):100}function wo(e){localStorage.setItem(In,String(Math.max(0,Math.min(100,Math.round(e)))))}function Yi(){return Vi()===0}function ui(e){return Math.max(0,Math.min(1,e*(Vi()/100)))}function Sn(e,t=1){if(Yi())return null;try{const i=new Audio(e);return i.volume=ui(t),i.play().catch(()=>{}),i}catch{return null}}let gt=null,Mi=null,pn=.3;function An(e,t=.3){if(pn=t,gt&&Mi===e&&!gt.paused){gt.volume=ui(pn);return}if(Pt(),!Yi())try{const i=new Audio(e);i.loop=!0,i.volume=ui(t),i.play().catch(()=>{}),gt=i,Mi=e}catch{}}function Pt(){if(gt)try{gt.pause(),gt.currentTime=0}catch{}gt=null,Mi=null}let Wt=null;function zn(e,t=.6){if(Ue(),!Yi())try{const i=new Audio(e);i.volume=ui(t),i.play().catch(()=>{}),Wt=i}catch{}}function Ue(){if(Wt)try{Wt.pause(),Wt.currentTime=0}catch{}Wt=null}const ko="2026.07.21-1736";async function un(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${ko}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var f,x,g,y,p;const s=((f=window.visualViewport)==null?void 0:f.height)||window.innerHeight,d=((x=document.querySelector(".top-nav"))==null?void 0:x.offsetHeight)||56,c=((g=document.querySelector(".bottom-nav"))==null?void 0:g.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-d-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((y=e.querySelector(".home-hero"))==null?void 0:y.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const _=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,v=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((q,ie)=>{var ne;return q+(((ne=document.getElementById(ie))==null?void 0:ne.offsetHeight)||0)},0),E=12*5,m=s-d-c-u-_-v-E-32,z=Math.max(80,Math.round(m*.28)),k=Math.max(160,Math.round(m*.72)),A=Math.floor((k-10)/2);b&&(b.style.minHeight=b.style.maxHeight=z+"px"),e.querySelectorAll(".play-tile").forEach(q=>{q.style.minHeight=q.style.height=A+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(q=>{q.style.height=Math.round(A*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){Io(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()}),Cn(t,n),To(t,n,i),Mn(t,n,i),$o(t,n))}async function $o(e,t){const i=e.profile.id,{data:n}=await h.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of n){const{data:l}=await h.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){e.profile.credits=(e.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function Mn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=e.profile.id,{data:o}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(d=>d.home_id===r?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await h.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(d=>{const c=d.home_id===r?d.away_id:d.home_id,l=s[c]||"Adversaire",f=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${f?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await En(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>jr);return{resumePvpMatch:f}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Lo(async()=>{await Eo(d.dataset.abandon,d.dataset.opp,r),t("Match abandonné (défaite 3-0)","info"),Mn(e,t,i)})})})}async function Eo(e,t,i){Pt();const{data:n}=await h.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await h.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",e)}function Lo(e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function To(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((d=r.inviter)==null?void 0:d.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",t("Invitation refusée","info")})}async function Cn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Tn(e,t,()=>Cn(e,t)))}function Io(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
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
  </div>`,document.body.appendChild(i),i.querySelectorAll(".diff-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-1px)",r.style.boxShadow="0 6px 16px -6px rgba(0,0,0,0.18)"}),r.addEventListener("mouseleave",()=>{r.style.transform="",r.style.boxShadow=""})});const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",r=>{r.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(r=>{r.addEventListener("click",()=>{n(),e("match",{matchMode:r.dataset.mode})})})}async function jn(e,t){const{navigate:i}=t,n=io(),r=Vi();e.innerHTML=`
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

      <div style="background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:14px;padding:18px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🔊 Son</div>
          <div id="volume-label" style="font-size:14px;font-weight:900;color:#D4A017">${r}%</div>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Musiques et effets sonores de l'app.</div>
        <input id="volume-slider" type="range" min="0" max="100" step="5" value="${r}"
          style="width:100%;accent-color:#1A6B3C;cursor:pointer;margin-bottom:14px">
        <button id="volume-test" class="btn" style="width:100%;padding:11px;border-radius:10px;border:1.5px solid var(--tile-border);background:transparent;color:var(--tile-fg-on-page);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">
          🎵 Tester le son
        </button>
      </div>

      <button id="settings-logout" class="btn" style="width:100%;padding:14px;border-radius:12px;border:1.5px solid #ff6b6b;background:transparent;color:#ff6b6b;font-weight:700;font-size:14px;cursor:pointer;margin-top:6px">
        Déconnexion
      </button>

    </div>
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(d=>{d.addEventListener("click",()=>{pa(d.dataset.themeChoice),jn(e,t)})});const o=e.querySelector("#volume-slider"),a=e.querySelector("#volume-label");let s=null;o.addEventListener("input",()=>{wo(Number(o.value)),a.textContent=`${o.value}%`,s&&(s.volume=Math.max(0,Math.min(1,Number(o.value)/100)))}),e.querySelector("#volume-test").addEventListener("click",()=>{s=Sn("/sounds/match-opening.mp3",1)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()})}const je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const fn=["ATT","MIL","DEF","GK"];function Bn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Ri(i).some(([l,f])=>l===e.position&&f===t.position||l===t.position&&f===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=fn.indexOf(e._line||e.job),a=fn.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function qn(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!Bn(a,s,t))continue;const d=Ht(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function ni(e,t={},i){let n=0,r=0;e.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,f=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?l*2:l,r+=(d.boost||0)+f});const o=n+r,a=qn(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function oi(e,t={},i){const n=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+c+(s.boost||0)+l},0),r=qn(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Wi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Dn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const d=t==="attack"?Pe(a,"ATT"):a._line==="GK"?Pe(a,"GK"):Pe(a,"DEF");return(t==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function So(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Ao={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function zo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=Fn(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function Fn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Mo(e,t){!e||!t||await Promise.all([mn(e,"win"),mn(t,"loss")])}async function mn(e,t){const{data:i}=await h.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=Ao[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,d=r.player.note_max??10,c=Fn(r.player),l=r.current_note??c,f=Math.min(d,Math.max(s,l+a));return h.from("cards").update({current_note:f}).eq("id",r.id)}))}const Co={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Li={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},di=["GK","DEF","MIL","ATT"],jo=["Tous","GK","DEF","MIL","ATT"],Bo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function gn(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function qo(e){return e.length?e.reduce((t,i)=>gn(i)>gn(t)?i:t,e[0]):e[0]}function Do(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Fo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Po(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ti(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ii(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ie(r,{width:140})}
  </div>`}function yn(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ie(e,{width:140})}
  </div>`}async function Go(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter($=>$.card_type==="player"&&$.player),l=(s||[]).filter($=>$.card_type==="game_changer"),f=(s||[]).filter($=>$.card_type==="formation"),x=(s||[]).filter($=>$.card_type==="stadium"),{data:g}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),y={};(g||[]).forEach($=>{y[$.name]=$});const{data:p}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach($=>{u[$.id]=$}),x.forEach($=>{$.stadium_def&&(u[$.stadium_id]=$.stadium_def)});const b=Object.keys(Oi),_=Object.keys(je),v={};c.forEach($=>{const N=$.player.id;v[N]=(v[N]||0)+1}),new Set(Object.keys(v).map($=>String($)));const E=new Set(f.map($=>$.formation)),m=new Set(l.map($=>$.gc_type));let z="player",k="Tous",A="",q=!1;function ie(){return[...c].sort(($,N)=>{const V=di.indexOf($.player.job),H=di.indexOf(N.player.job);return V!==H?V-H:($.player.surname_real||"").localeCompare(N.player.surname_real||"")})}function ne(){return[...d||[]].sort(($,N)=>{const V=di.indexOf($.job),H=di.indexOf(N.job);return V!==H?V-H:($.surname_real||"").localeCompare(N.surname_real||"")})}function Z(){return ie().filter($=>{const N=$.player,V=k==="Tous"||N.job===k,H=!A||`${N.firstname} ${N.surname_real}`.toLowerCase().includes(A);return V&&H})}function j(){return ne().filter($=>{const N=k==="Tous"||$.job===k,V=!A||`${$.firstname} ${$.surname_real}`.toLowerCase().includes(A);return N&&V})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--tile-border);background:var(--tile-bg)">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="player"?"var(--green)":"transparent"};
        color:${z==="player"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="formation"?"var(--green)":"transparent"};
        color:${z==="formation"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="gc"?"var(--green)":"transparent"};
        color:${z==="gc"?"var(--green)":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${z==="stadium"?"#4FC3F7":"transparent"};
        color:${z==="stadium"?"#4FC3F7":"var(--tile-fg-dim)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
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
  </div>`,function(N){const V=document.getElementById(N);if(!V)return;V.addEventListener("wheel",ce=>{Math.abs(ce.deltaY)<=Math.abs(ce.deltaX)||(ce.preventDefault(),V.scrollLeft+=ce.deltaY)},{passive:!1});let H=!1,re=0,B=0,R=!1,ue=!1;V.addEventListener("mousedown",ce=>{H=!0,R=!1,re=ce.pageX,B=V.scrollLeft}),window.addEventListener("mouseup",()=>{H=!1,R&&(V.style.cursor="",ue=!0),R=!1}),window.addEventListener("mousemove",ce=>{if(!H)return;const he=ce.pageX-re;!R&&Math.abs(he)<6||(R=!0,V.style.cursor="grabbing",ce.preventDefault(),V.scrollLeft=B-he)}),V.addEventListener("click",ce=>{ue&&(ce.stopPropagation(),ce.preventDefault(),ue=!1)},!0)}("col-grid");function I(){const $=document.getElementById("col-filters");$&&(z==="player"?($.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${A}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${jo.map(N=>`
            <button class="filter-btn" data-job="${N}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${N===k?"var(--green)":"var(--tile-border)"};
                background:${N===k?"var(--green)":"#fff"};
                color:${N===k?"#fff":"var(--tile-fg-dim)"}">
              ${N}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",N=>{A=N.target.value.toLowerCase(),K()}),e.querySelectorAll(".filter-btn").forEach(N=>{N.addEventListener("click",()=>{k=N.dataset.job,I(),K()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,I(),K()})):($.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,I(),K()})))}function K(){const $=document.getElementById("col-grid");$&&(z==="player"?Y($):z==="formation"?pe($):z==="stadium"?O($):G($))}function X($,N,V,H,re,B=0){const R=document.getElementById("col-grid"),ue=document.getElementById("col-big");if(!R||!ue)return;var ce=0;function he(){var ct;const Se=window.innerWidth>=768,ve=document.getElementById("col-big"),Te=document.getElementById("col-gap"),Ae=((ct=document.getElementById("col-grid"))==null?void 0:ct.parentElement)||null,Be=ve?ve.closest(".page"):null;if(ve&&Ae&&Be){let $e=0;Array.from(Be.children).forEach(function(C){C!==ve&&C!==Ae&&C!==Te&&($e+=C.offsetHeight)});const Ce=Math.max(0,Be.clientHeight-$e),qe=Math.round(Ce*(B/100)),Ge=Math.max(0,Ce-qe),w=Se?50/71:45/63,L=Math.round(Ge*w),S=Math.max(0,Ge-L);Te&&(Te.style.height=qe+"px"),ve.style.flex="none",ve.style.height=L+"px",ve.style.minHeight="0",Ae.style.flex="none",Ae.style.height=S+"px",Ae.style.minHeight="0",Ae.style.display="flex",Ae.style.overflow="hidden"}const ke=document.getElementById("col-grid");ke&&(ke.style.height="100%",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.width="100%"),ue.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+N($[ce])+"</div>";var wt=ue.querySelector("[data-card-id],[data-form-id],[data-gc-id]");wt&&wt.addEventListener("click",function(){H($[ce])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(!(!$e||!ue)){var Ce=ue.clientHeight,qe=ue.clientWidth-16,Ge=$e.offsetHeight,w=$e.offsetWidth;if(Ge>0&&w>0&&Ce>40){var L=Math.min(Ce/Ge,qe/w);$e.style.transform="scale("+L.toFixed(3)+")",$e.style.transformOrigin="center center"}}}),R.innerHTML=$.map(function($e,Ce){var qe=Ce===ce,Ge="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+Ge+'">'+V($e,qe)+"</div>"}).join(""),R.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){ce=Number($e.dataset.idx),he(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var $e=ke?ke.clientHeight:0,Ce=R.querySelector(".col-mini-item > div");if(!(!$e||!Ce)){var qe=Ce.style.zoom;Ce.style.zoom="1";var Ge=Ce.offsetHeight;if(Ce.style.zoom=qe,!(Ge<=0)){var w=$e/Ge;R.querySelectorAll(".col-mini-item > div").forEach(function(L){L.style.zoom=w.toFixed(4)})}}})}he()}function le($){var N=window.innerWidth>=768?.76:.54,V;if(!$||$._fake){var H=$?$.player:null;if(!H)return"";V=yn(H)}else V=Ii($,"");return'<div style="display:inline-block;zoom:'+N+';pointer-events:none;line-height:0">'+V+"</div>"}function fe($,N,V){var H=V>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+V+"</div>":"",re=!!N,B=zi($,At[$],{width:160});return re||(B='<div style="filter:grayscale(1);opacity:0.5">'+B+"</div>"),"<div "+(N?'data-form-id="'+N.id+'"':"")+' style="position:relative;cursor:pointer">'+H+B+"</div>"}function M($,N){var V=window.innerWidth>=768?.76:.54,H=zi($,At[$],{width:140});return N||(H='<div style="filter:grayscale(1);opacity:0.45">'+H+"</div>"),'<div style="display:inline-block;zoom:'+V+';line-height:0;pointer-events:none">'+H+"</div>"}function Y($){if(q){const N=j();if(!N.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const V=N.map(H=>c.find(re=>re.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});X(V,H=>H._fake?yn(H.player):Ii(H,""),H=>H._fake?le({player:H.player,id:"x",_fake:!0}):le(H),H=>{H._fake||xn(H,c,v,t)})}else{const N=Z();if(!N.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const V={};N.forEach(re=>{const B=re.player.id;V[B]||(V[B]=[]),V[B].push(re)});const H=Object.values(V).map(re=>qo(re));X(H,re=>{const B=v[re.player.id]||1,R=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",ce=c.filter(he=>he.player.id===re.player.id&&he.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ii(re,R+ce)},re=>le(re),re=>xn(re,c,v,t))}}function pe($){const N=q?b:[...E];if(!N.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const V=N.map(H=>({formation:H,card:f.find(re=>re.formation===H)||null,owned:E.has(H)}));X(V,({formation:H,card:re,owned:B})=>fe(H,B?re:null,B?f.filter(R=>R.formation===H).length:0),({formation:H,owned:re})=>M(H,re),({card:H,owned:re})=>{re&&H&&Ro(H,f,t,o)},"#1A6B3C",5)}function G($){const N=Object.keys(y),V=q?N.length?N:_:[...m];if(!V.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=V.map(re=>({type:re,gc:je[re]||{icon:"⚡",desc:""},def:y[re]||null,owned:m.has(re),card:l.find(B=>B.gc_type===re)||null}));X(H,({type:re,gc:B,def:R,owned:ue,card:ce})=>{var ke;const he=(R==null?void 0:R.name)||re,Se=ue?l.filter(wt=>wt.gc_type===re).length:0,ve=Se>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Se}</div>`:"",Te=(R==null?void 0:R.effect)||B.desc||"",Ae=R!=null&&R.image_url?`/icons/${R.image_url}`:((ke=R==null?void 0:R.club)==null?void 0:ke.logo_url)||(R!=null&&R.country_code?`https://flagsapi.com/${R.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Be=tt(he,Ae,B.icon,Te,{width:160,onClick:ue});return ue||(Be=`<div style="filter:grayscale(1);opacity:0.5">${Be}</div>`),`<div ${ue&&ce?`data-gc-id="${ce.id}" data-gc-type="${re}"`:""} style="position:relative">${ve}${Be}</div>`},({type:re,gc:B,def:R,owned:ue})=>{const ce=window.innerWidth>=768?.76:.54,he=(R==null?void 0:R.name)||re,Se=(R==null?void 0:R.effect)||B.desc||"",ve=R!=null&&R.image_url?`/icons/${R.image_url}`:null;let Te=tt(he,ve,B.icon,Se,{width:140});return ue||(Te=`<div style="filter:grayscale(1);opacity:0.45">${Te}</div>`),`<div style="display:inline-block;zoom:${ce};line-height:0;pointer-events:none">${Te}</div>`},({type:re,owned:B,def:R})=>{B&&No(re,R,o)},"#7a28b8",5)}function O($){const N="#4FC3F7",V="/";if(!x.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const H={};x.forEach(B=>{const R=B.stadium_id||"?";(H[R]=H[R]||[]).push(B)});const re=Object.entries(H).map(([B,R])=>({sid:B,def:u[B]||null,count:R.length,card:R[0]}));X(re,({def:B,count:R})=>{var Te,Ae;const ue=(B==null?void 0:B.name)||"?",ce=((Te=B==null?void 0:B.club)==null?void 0:Te.encoded_name)||(B==null?void 0:B.country_code)||"—",he=B!=null&&B.image_url?`${V}icons/${B.image_url}`:((Ae=B==null?void 0:B.club)==null?void 0:Ae.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=R>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${R}</div>`:"",ve=`${ce}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${Se}${ei(ue,he,ve,{width:160})}</div>`},({def:B})=>{var ve,Te;const R=window.innerWidth>=768?.76:.54,ue=(B==null?void 0:B.name)||"?",ce=((ve=B==null?void 0:B.club)==null?void 0:ve.encoded_name)||(B==null?void 0:B.country_code)||"—",he=B!=null&&B.image_url?`${V}icons/${B.image_url}`:((Te=B==null?void 0:B.club)==null?void 0:Te.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=`${ce}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${R};line-height:0;pointer-events:none">${ei(ue,he,Se,{width:140})}</div>`},null,N,5)}e.querySelectorAll(".col-tab-btn").forEach($=>{$.addEventListener("click",()=>{z=$.dataset.tab,k="Tous",A="",q=!1,e.querySelectorAll(".col-tab-btn").forEach(N=>{const V=N.dataset.tab===z;N.style.borderBottomColor=V?"var(--green)":"transparent",N.style.color=V?"var(--green)":"var(--tile-fg-dim)"}),I(),K()})}),I(),K()}function No(e,t,i){const n=je[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,a=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${tt(r,a,n.icon,o,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const li=1e3;function Ro(e,t,i,n){var y,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const b=At[c]||{},_=Oi[c]||[],v=290,E=360,m=20;function z(A){const q=b[A];return q?{x:q.x*v,y:q.y*E}:null}let k=`<svg width="${v}" height="${E}" viewBox="0 0 ${v} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[A,q]of _){const ie=z(A),ne=z(q);!ie||!ne||(k+=`<line x1="${ie.x}" y1="${ie.y}" x2="${ne.x}" y2="${ne.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const A of Object.keys(b)){const q=z(A);if(!q)continue;const ie=A.replace(/\d+/,""),ne=l[ie]||"#555";k+=`<circle cx="${q.x}" cy="${q.y}" r="${m}" fill="${ne}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${q.x}" y="${q.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>`}return k+="</svg>",k}const x=t.filter(b=>b.formation===c);x.length;const g=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${f()}
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${li}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(y=document.getElementById("direct-sell-form-btn"))==null||y.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${li.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=x.find(v=>!v.is_for_sale)||x[0];if(!b){o("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",b.id),await h.from("transfer_history").delete().eq("card_id",b.id);const{error:_}=await h.from("cards").delete().eq("id",b.id);if(_){o(_.message,"error");return}await h.from("users").update({credits:(r.profile.credits||0)+li}).eq("id",r.profile.id),await d(),o(`+${li.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await h.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function xn(e,t,i,n){var le,fe,M,Y,pe;const{state:r,toast:o,openModal:a,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,f=t.filter(G=>G.player.id===l.id),x=f.length,g=e.evolution_bonus||0,y=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?g:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?g:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?g:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?g:0)),p=l.rarity||"normal",{data:u}=await h.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",y).gte("note_max",y).order("note_min",{ascending:!1}).limit(1);((le=u==null?void 0:u[0])==null?void 0:le.price)??Bo[p];const b=l.rarity!=="legende";Po(l);const _=((l.rarity==="pepite"||l.rarity==="papyte")&&e.current_note!=null?e.current_note:Ti(l,l.job))+g,v=l.rarity==="pepite"||l.rarity==="papyte",E=l.job2?(v?zo(e,Do(l.job2)):Ti(l,l.job2))+(Ti(l,l.job2)>0?g:0):null;Li[l.job],l.job2&&Li[l.job2];const m=Co[l.rarity]||"#ccc";Fo[l.country_code]||l.country_code;const z=e.evolution_bonus||0,A=_+z,q=E||0,ie=q>0?q+z:0,ne=f.map(G=>G.id);let Z={};if(ne.length){const{data:G}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(G||[]).forEach(O=>{Z[O.card_id]||(Z[O.card_id]=[]),Z[O.card_id].push(O)})}const j=G=>{const O=G.transferred_at?new Date(G.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",$=G.source==="booster"?"Booster":G.price?G.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${G.club_name}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">(${G.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${G.source==="booster"?"var(--tile-fg-dim)":"var(--yellow)"}">${$}</div>
        <div style="font-size:11px;color:var(--tile-fg-dim)">${O}</div>
      </div>
    </div>`},I=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${x>1?`(${x})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((G,O)=>{const $=Z[G.id]||[],N=G.is_for_sale,V=$.length?$[$.length-1]:null,re=(l.rarity==="pepite"||l.rarity==="papyte")&&G.current_note!=null?` (☆${G.current_note})`:"";return`
            <div data-card-id="${G.id}" data-card-idx="${O}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${N?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${G.id}" ${N?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${O+1}${re}${N?" 🏷️ En vente":""}</div>
                  ${V?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${V.club_name} · ${V.source==="booster"?"Booster":V.price?V.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${O}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${$.length?`${$.length} club${$.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${O}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${$.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${A}${l.job2&&q>0?` / ${ie}`:""}`:`Note actuelle : ${A}${l.job2&&q>0?` / ${ie}`:""}`}
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
      ${Ie({...l,_evolution_bonus:g},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${m}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:6px;background:${m}18;border-left:3px solid ${m};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${m};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([G,O])=>{const $=Li[G],N=G==="GK"?"#fff":$,V=G===l.job||G===l.job2,H=(Number(O)||0)+(V&&z>0?z:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${$};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${N};font-family:Arial Black,Arial;line-height:1">${H}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${N}">${G}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${x}</div>
        </div>
      </div>
    </div>
    ${I}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(fe=document.getElementById("close-detail"))==null||fe.addEventListener("click",s);let K=new Set;const X=()=>{const G=K.size,O=document.getElementById("sell-action-panel");if(!O)return;O.style.display=G>0?"block":"none",document.getElementById("sell-selected-count").textContent=G;const $=document.getElementById("evolve-btn");$&&($.textContent=`⬆️ Évoluer ${G>1?"(+"+G+")":""}`)};document.querySelectorAll(".expl-check").forEach(G=>{G.addEventListener("change",()=>{const O=G.dataset.id;G.checked?K.add(O):K.delete(O);const $=G.closest(".exemplaire-row");$&&($.style.borderColor=G.checked?"#1A6B3C":"#eee"),X()})}),document.querySelectorAll(".exemplaire-row").forEach(G=>{G.addEventListener("click",O=>{if(O.target.closest("button")||O.target.tagName==="INPUT")return;const $=G.querySelector(".expl-check");$&&!$.disabled&&($.checked=!$.checked,$.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(G=>{G.addEventListener("click",O=>{O.stopPropagation();const $=document.querySelector(`.expl-hist[data-hist="${G.dataset.idx}"]`);$&&($.style.display=$.style.display==="none"?"flex":"none")})}),(M=document.getElementById("evolve-btn"))==null||M.addEventListener("click",async()=>{if(x<=1)return;const G=[...K];if(!G.length)return;if(K.has(e.id)){const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",B.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(B),B.querySelector("#err-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",R=>{R.target===B&&B.remove()});return}const O=G.filter(B=>B!==e.id),$=l.rarity==="legende"?2:1;if((O.length||1)*$,!(!O.length&&G.length===1&&G[0]===e.id)){if(!O.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(B=>{const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",R.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${O.length}</strong> copie${O.length>1?"s":""} sacrifiée${O.length>1?"s":""}<br>
            📈 Note : <strong>${_+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${_+(e.evolution_bonus||0)+O.length*$}</strong>
            ${E&&E>0?`<br>📈 Note 2 : <strong>${E+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${E+(e.evolution_bonus||0)+O.length*$}</strong>`:""}
            ${l.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${$} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(R),R.querySelector("#sac-cancel").addEventListener("click",()=>{R.remove(),B(!1)}),R.querySelector("#sac-ok").addEventListener("click",()=>{R.remove(),B(!0)}),R.addEventListener("click",ue=>{ue.target===R&&(R.remove(),B(!1))})}))return;if(O.length){await h.from("market_listings").delete().in("card_id",O),await h.from("deck_cards").delete().in("card_id",O),await h.from("transfer_history").delete().in("card_id",O),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",O);const{error:B}=await h.from("cards").delete().in("id",O);if(B){o("Erreur suppression : "+B.message,"error");return}}const V=(e.evolution_bonus||0)+O.length*$,{error:H}=await h.from("cards").update({evolution_bonus:V}).eq("id",e.id);if(H){o("Erreur évolution : "+H.message,"error");return}const re=_+V;o(`⬆️ ${l.firstname} ${l.surname_real} : note ${_+e.evolution_bonus||_} → ${re}${O.length?` · ${O.length} copie${O.length>1?"s":""} sacrifiée${O.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{var H;const G=[...K];if(!G.length){o("Sélectionne au moins un exemplaire","warning");return}const O=parseInt((H=document.getElementById("sell-market-price"))==null?void 0:H.value);if(!O||O<1){o("Prix invalide","error");return}const{error:$}=await h.from("cards").update({is_for_sale:!0,sale_price:O}).in("id",G);if($){o($.message,"error");return}const N=G.map(re=>({seller_id:r.profile.id,card_id:re,price:O,status:"active"})),{error:V}=await h.from("market_listings").insert(N);V&&console.warn("[Market] insert listings:",V.message),o(`${G.length} carte${G.length>1?"s":""} mise${G.length>1?"s":""} en vente à ${O.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(pe=document.getElementById("cancel-sell-btn"))==null||pe.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}function bn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function Oo(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const fi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ci(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await bn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await h.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){r(d.message,"error");return}r("Deck créé !","success"),vn(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>vn(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await bn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await h.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){r(d.message,"error");return}r("Deck renommé !","success"),Ci(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await Oo(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await h.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ci(e,t)})})}async function vn(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select("*").eq("id",e).single(),{data:a}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await h.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(b=>b.card_type==="player"&&b.player),c=(a||[]).filter(b=>b.card_type==="formation"),l=(s||[]).filter(b=>b.card_type==="stadium"),f=[...new Set(l.map(b=>b.stadium_id).filter(Boolean))];let x={};if(l.forEach(b=>{b.stadium_def&&b.stadium_id&&(x[b.stadium_id]=b.stadium_def)}),f.length&&Object.keys(x).length<f.length){const{data:b}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(_=>{x[_.id]=_})}const g=c.map(b=>b.formation).filter(Boolean),{data:y}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";g.length>0&&!g.includes(p)&&(p=g[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:x,availableFormations:g};(y||[]).forEach(b=>{b.is_starter?u.slots[b.position]=b.card_id:u.subs.includes(b.card_id)||u.subs.push(b.card_id)}),_t(t,u,i)}function _t(e,t,i){var y,p;const{navigate:n}=i;fi[t.formation];const r=hn(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(fi),s=(y=t.stadiumCards)==null?void 0:y.find(u=>u.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(b=>b.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <style>.no-scrollbar::-webkit-scrollbar{display:none}</style>
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
            ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:90,showStad:!0,stadDef:d})}
                <button data-remove-sub="${u.id}"
                  style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:20px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:90px;height:117px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
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
              ${s?(()=>{var _;const u=t.stadDefMap[s.stadium_id],b=((_=u==null?void 0:u.club)==null?void 0:_.logo_url)||(u==null?void 0:u.image_url)||null;return ei((u==null?void 0:u.name)||"Stade",b,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
            <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none" id="subs-list" class="no-scrollbar">
              ${c.map(u=>{const b={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:66,showStad:!0,stadDef:d})}
                  <button data-remove-sub="${u.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${t.subs.length<5?'<div id="add-sub-btn" style="width:66px;height:85px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:50px;height:65px;border-radius:6px;background:#1A6B3C;border:2px solid #2ecc71;display:flex;align-items:center;justify-content:center">
              <span style="font-size:11px;font-weight:900;color:#fff;text-align:center">${t.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${s?(()=>{var _;const u=t.stadDefMap[s.stadium_id],b=((_=u==null?void 0:u.club)==null?void 0:_.logo_url)||(u==null?void 0:u.image_url)||null;return ei((u==null?void 0:u.name)||"Stade",b,"+10⭐",{width:50})})():`<div style="width:50px;height:85px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
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
  </div>`;const l=window.innerWidth>=900,f=e.querySelector(".deck-pc-layout"),x=e.querySelector(".deck-mobile-layout");f&&(f.style.display=l?"block":"none"),x&&(x.style.display=l?"none":"block"),Ho(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const g=()=>{const{openModal:u,closeModal:b}=i,_=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(v=>`<div data-forma="${v}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${v===t.formation?"#1A6B3C":"#f0f0f0"};color:${v===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${v===t.formation?"#1A6B3C":"#ddd"}">${v}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",_),document.querySelectorAll("#modal-body [data-forma]").forEach(v=>{v.addEventListener("click",()=>{t.formation=v.dataset.forma;const E=hn(t.formation),m={};E.forEach(z=>{t.slots[z]&&(m[z]=t.slots[z])}),t.slots=m,b(),_t(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",g)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Uo(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>Yo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==u.dataset.removeSub),_t(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Vo(t,e,i)))}function Ho(e,t,i,n){var v,E,m;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(v=t.stadiumCards)==null?void 0:v.find(z=>z.id===t.stadiumCardId),s=a&&((E=t.stadDefMap)==null?void 0:E[a.stadium_id])||null,d=At[t.formation]||{},c=Ri(t.formation)||[],l={};for(const z of i){const k=t.slots[z],A=k?t.playerCards.find(q=>q.id===k):null;A!=null&&A.player?l[z]={...A.player,_evolution_bonus:A.evolution_bonus||0,face:A.player.face||null}:l[z]=null}const f=window.innerWidth>=900,x=f?window.innerWidth-280:window.innerWidth-20,g=f?Math.min(x,860):x,y=Math.round(f?g*.82:g*.85),p=f?84:44;let u="";for(const[z,k]of c){const A=d[z],q=d[k];if(!A||!q)continue;const ie=A.x*g,ne=Math.round(.03*y+A.y*.85*y),Z=q.x*g,j=Math.round(.03*y+q.y*.85*y),I=l[z],K=l[k],X=Ht(I,K);X==="#ff3333"||X==="#cc2222"?u+=`<line x1="${ie.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${X}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${ie.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${X}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${ie.toFixed(1)}" y1="${ne.toFixed(1)}" x2="${Z.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${X}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const _=Math.round(p*657/507);for(const z of i){const k=d[z];if(!k)continue;const A=l[z],q=k.x*g;k.y*y;const ie=Math.round(.03*y+k.y*(.85*y)),ne=Math.round(q-p/2),Z=Math.round(ie-_/2);if(A){const j=z.replace(/\d+/,""),I=s&&(s.club_id&&String(A.club_id)===String(s.club_id)||s.country_code&&A.country_code===s.country_code),K=Ie({...A,_evolution_bonus:A._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:j}),X=I&&(((m=s.club)==null?void 0:m.logo_url)||s.image_url)||null,le=Math.round(p*(f?.578:.34)),fe=I?`<div style="position:absolute;top:2px;right:2px;width:${le}px;height:${le}px;border-radius:50%;background:rgba(0,0,0,0.6);border:1.5px solid #4FC3F7;display:flex;align-items:center;justify-content:center;overflow:hidden;z-index:6">${X?`<img src="${X}" style="width:100%;height:100%;object-fit:cover">`:`<span style="font-size:${Math.round(le*.6)}px;line-height:1">🏟️</span>`}</div>`:"";b+=`<div style="position:absolute;left:${ne}px;top:${Z}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${z}">
        <div style="position:relative">${K}${fe}</div>
      </div>`}else{const j=z.replace(/\d+/,"");b+=`<div style="position:absolute;left:${ne}px;top:${Z}px;width:${p}px;height:${_}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${z}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${j}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${g}px;height:${y}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${g} ${y}">${u}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Ko(z.dataset.pos,t,e,n))})}function Uo(e,t,i){var a;const{openModal:n,closeModal:r}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,_;const d=e.stadDefMap[s.stadium_id],c=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||null,l=d!=null&&d.image_url?"/icons/"+d.image_url:null,f=e.stadiumCardId===s.id,x=d!=null&&d.country_code&&!c?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,g=(d==null?void 0:d.name)||"Stade",y=g.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=y?y[1].trim():g.slice(0,8),u=((_=y==null?void 0:y[2])==null?void 0:_.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${f?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:x?`<img src="${x}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${f?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${f?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),_t(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),_t(t,e,i)})})}function Ko(e,t,i,n){var y,p,u,b,_;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(y=t.stadiumCards)==null?void 0:y.find(v=>v.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(v=>v.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const f=new Set;Object.entries(t.slots).forEach(([v,E])=>{var z;if(v===e||!E)return;const m=t.playerCards.find(k=>k.id===E);(z=m==null?void 0:m.player)!=null&&z.id&&f.add(m.player.id)}),t.subs.forEach(v=>{var m;const E=t.playerCards.find(z=>z.id===v);(m=E==null?void 0:E.player)!=null&&m.id&&f.add(E.player.id)});const x=new Set,g=t.playerCards.filter(v=>{const E=v.player;return!(E.job===a||E.job2===a)||f.has(E.id)||x.has(E.id)?!1:(x.add(E.id),!0)});g.sort((v,E)=>{const m=v.evolution_bonus||0,z=E.evolution_bonus||0,k=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?m:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?z:0)-k}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+g.map(v=>{const E={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${Ie(E,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(_=document.getElementById("remove-player"))==null||_.addEventListener("click",()=>{delete t.slots[e],o(),_t(i,t,n)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{t.slots[e]=v.dataset.cardId,o(),_t(i,t,n)})})}function Vo(e,t,i){var l,f,x;const{openModal:n,closeModal:r}=i,o=(l=e.stadiumCards)==null?void 0:l.find(g=>g.id===e.stadiumCardId),a=o&&((f=e.stadDefMap)==null?void 0:f[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(g=>{var u;const y=e.slots[g];if(!y)return;const p=e.playerCards.find(b=>b.id===y);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(g=>{var p;const y=e.playerCards.find(u=>u.id===g);(p=y==null?void 0:y.player)!=null&&p.id&&s.add(y.player.id)});const d=new Set,c=e.playerCards.filter(g=>{var y,p,u;return s.has((y=g.player)==null?void 0:y.id)||d.has((p=g.player)==null?void 0:p.id)?!1:(d.add((u=g.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(g=>{const y={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div class="player-option" data-card-id="${g.id}" style="cursor:pointer">
          ${Ie(y,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(x=document.getElementById("close-sub-selector"))==null||x.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(g=>{g.addEventListener("click",()=>{e.subs.push(g.dataset.cardId),r(),_t(t,e,i)})})}async function Yo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(d=>d.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await h.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await h.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await h.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function hn(e){const t=fi[e]||fi["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Pn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await h.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await h.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function Wo(e,t){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:e,booster_id:t})}function Xo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Gn=()=>Object.keys(At),Jo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ji={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Qo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ie({...t,_evolution_bonus:i},{width:140})}function Nn(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function Zo(e,{state:t,navigate:i,toast:n}){var f,x,g;const r=((f=t.profile)==null?void 0:f.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Pn((x=t.user)==null?void 0:x.id)).map(Nn)}catch(y){console.warn("Erreur chargement boosters DB, fallback hardcodé",y)}o.length||(o=Jo.map(y=>({...y,rates:[],isPub:y.id==="players_pub"})));const a=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(y=>y.data||[]),s=new Set(a.filter(y=>y.card_type==="stadium").map(y=>y.stadium_id)),d=new Set(a.filter(y=>y.card_type==="formation").map(y=>y.formation)),c=new Set(a.filter(y=>y.card_type==="game_changer").map(y=>y.gc_type)),l={};for(const y of o){if(y.allow_duplicates!==!1||!((g=y.rates)!=null&&g.length))continue;const p=[...new Set((y.rates||[]).map(b=>b.card_type))];let u=!1;for(const b of p)if(b==="stadium"){const{data:_}=await h.from("stadium_definitions").select("id");if((_||[]).some(v=>!s.has(v.id))){u=!0;break}}else if(b==="game_changer"){const{data:_}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((_||[]).some(v=>!c.has(v.name))){u=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:_}=await En(async()=>{const{FORMATION_LINKS:v}=await import("./special-cards-CiJC3HtT.js").then(E=>E.v);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(_).some(v=>!d.has(v))){u=!0;break}}else{u=!0;break}u||(l[y.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(y=>{const p=y.cost===0||r>=y.cost,u=l[y.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${y.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${y.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${y.img}" alt="${y.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${y.name}</div>
            <div class="desc">${y.sub}</div>
            <div class="cost">${y.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(y=>{y.addEventListener("click",async()=>{const p=o.find(u=>u.id===y.dataset.booster);if(p){y.style.opacity="0.5",y.style.pointerEvents="none";try{await er(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),y.style.opacity="",y.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(y=>{y.addEventListener("click",p=>{p.stopPropagation();const u=o.find(b=>b.id===y.dataset.boosterId);or(u)})})}async function er(e,{state:t,toast:i,navigate:n,container:r}){var f,x;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await ar();const{data:o}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set((o||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let d=[],c=null;try{if((f=e.rates)!=null&&f.length)d=await Bi(t.profile,e);else{const g=e.type||"player";g==="player"?d=await Rn(t.profile,e.cardCount,e.cost):g==="game_changer"?d=await On(t.profile,e.cardCount,e.cost):g==="formation"?d=await Hn(t.profile,e.cost):d=await Bi(t.profile,e)}}catch(g){c=g.message||String(g),console.error("[Booster] Erreur:",g)}if(d!=null&&d.length&&e._boosterId&&await Wo(t.user.id,e._boosterId),!(d!=null&&d.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(x=g.querySelector("#anim-close-err"))==null||x.addEventListener("click",()=>g.remove());return}d.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=s.has(g.formation))});const{data:l}=await h.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),Un(d,e,n)}function tr(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ir(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>mt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>mt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&mt(n)>=6),i.length||(i=e.filter(n=>mt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&mt(n)>=1&&mt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Bi(e,t){if(t.cost>0){const{error:x}=await h.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(x)throw x}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:x}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=x||[]}else n=r||[];const a=new Set(n.filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set(n.filter(x=>x.card_type==="formation").map(x=>x.formation)),d=new Set(n.filter(x=>x.card_type==="game_changer").map(x=>x.gc_type)),c=new Set(n.filter(x=>x.card_type==="stadium").map(x=>x.stadium_id).filter(Boolean)),l=new Set,f=[];for(let x=0;x<(t.cardCount||5);x++){const g=Xo(t.rates);if(g){if(g.card_type==="player"){const y=k=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[k]||k,p=g.rarity?y(g.rarity):null;let u=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:b}=await u;let _=b||[];if((g.note_min||g.note_max)&&(_=_.filter(k=>{const A=Math.max(Number(k.note_g)||0,Number(k.note_d)||0,Number(k.note_m)||0,Number(k.note_a)||0);return(!g.note_min||A>=g.note_min)&&(!g.note_max||A<=g.note_max)})),_.length||(g.note_min||g.note_max?(_=b||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):_=b||[]),!_.length)continue;let v=_.filter(k=>!l.has(k.id));if(i)v.length||(v=_);else if(v=v.filter(k=>!a.has(k.id)),!v.length)continue;const E=v[Math.floor(Math.random()*v.length)];l.add(E.id);const m=a.has(E.id),{data:z}=await h.from("cards").insert({owner_id:e.id,player_id:E.id,card_type:"player"}).select().single();z&&(f.push({...z,player:E,isDuplicate:m}),h.rpc("record_transfer",{p_card_id:z.id,p_player_id:E.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:y}=await h.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=y!=null&&y.length?y:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(E=>!d.has(E.name));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],_=b.name,{data:v}=await h.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:_,gc_definition_id:b.id||null}).select().single();v&&f.push({...v,_gcDef:b})}else if(g.card_type==="formation"){const y=Gn(),p=i?y:y.filter(v=>!s.has(v));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],b=s.has(u),{data:_}=await h.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();_!=null&&_[0]&&f.push({..._[0],isDuplicate:b})}else if(g.card_type==="stadium"){const{data:y,error:p}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(y!=null&&y.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?y:y.filter(E=>!c.has(E.id));if(!i&&!u.length)continue;const b=u[Math.floor(Math.random()*u.length)],{data:_,error:v}=await h.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}_&&f.push({..._,rarity:"normal",_stadiumDef:b})}}}return f}async function Rn(e,t,i){if(i>0){const{error:c}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&a?r:c===0?o:n,f=tr(),x=ir(l,f);x&&s.push(x)}a&&await h.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await h.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{h.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function On(e,t,i){const{error:n}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(ji).map(f=>({name:f,gc_type:"game_changer"})),a=Array.from({length:t},()=>o[Math.floor(Math.random()*o.length)]),s=a.map(f=>({owner_id:e.id,card_type:"game_changer",gc_type:f.name,gc_definition_id:f.id||null})),{data:d,error:c}=await h.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(d||[]).map((f,x)=>({...f,_gcDef:a[x]||null}))}async function Hn(e,t){const{error:i}=await h.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await h.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(l=>l.formation)),o=Gn(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:d,error:c}=await h.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function Un(e,t,i,n=null){var Z,j;if(!e||e.length===0){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(I),(Z=I.querySelector("#anim-close-err"))==null||Z.addEventListener("click",()=>I.remove());return}e=[...e].sort((I,K)=>{const X=I.player?mt(I.player):-1;return(K.player?mt(K.player):-1)-X});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=I=>I.touches&&I.touches[0]?I.touches[0].clientX:I.clientX;function l(I){o||(d=!0,s.style.opacity="1",f(I))}function f(I){if(!d||o)return;const K=a.getBoundingClientRect(),X=c(I)-K.left,le=Math.max(0,Math.min(1,X/K.width));s.style.width=le*K.width+"px",le>=.82&&g()}function x(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function g(){var K;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(K=document.getElementById("cut-flash"))==null||K.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const I=document.getElementById("cut-hint");I&&(I.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",f),window.addEventListener("pointerup",x),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",x);let y=0,p=!1;const u=new Set;function b(I){y=I,document.getElementById("reveal-phase").style.display="flex",_(),v(I,0),A()}function _(){const I=document.getElementById("card-dots");I&&(I.innerHTML=e.map((K,X)=>`<div class="card-dot" data-i="${X}" style="width:8px;height:8px;border-radius:50%;background:${X===y?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),I.querySelectorAll(".card-dot").forEach(K=>K.addEventListener("click",()=>m(parseInt(K.dataset.i)))))}function v(I,K){var $,N;const X=e[I],le=document.getElementById("card-counter"),fe=document.getElementById("card-track");le&&(le.textContent=`Carte ${I+1} / ${e.length}`);const M=document.getElementById("reveal-btns");M&&(M.style.display=I===e.length-1?"flex":"none");const Y=X.card_type==="player"&&(($=X.player)==null?void 0:$.rarity)==="legende",pe=!u.has(I);u.add(I);let G=0;if(X.card_type==="player"&&X.player){const V=X.player,H=V.job||"ATT";G=Number(H==="GK"?V.note_g:H==="DEF"?V.note_d:H==="MIL"?V.note_m:V.note_a)||0}const O=V=>{fe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${Y?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${nr(X)}</div>
          ${X.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const H=document.getElementById("current-card-wrap");K!==0?(H.style.transition="none",H.style.transform=`translateX(${K>0?100:-100}%)`,requestAnimationFrame(()=>{H.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",H.style.transform="translateX(0)"})):H.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),V||Y?ie():ne(),_()};pe&&(((N=X.player)==null?void 0:N.rarity)==="legende"||G>=8)&&X.card_type==="player"&&X.player?E(X,()=>O(!0)):O(!1)}function E(I,K){var Se;p=!0;const X=I.player,le=`https://flagsapi.com/${X.country_code}/flat/64.png`,fe=(Se=X.clubs)==null?void 0:Se.logo_url,M=X.face?"/"+X.face.replace(/^public\//,"").replace(/^\//,""):null,Y=X.job||"ATT",pe=Number(Y==="GK"?X.note_g:Y==="DEF"?X.note_d:Y==="MIL"?X.note_m:X.note_a)||0,G=I.evolution_bonus||0,O=pe+G,$=X.rarity==="legende",N=O>=18,V=document.getElementById("walkout-overlay"),H=document.getElementById("walkout-stage");if(!V||!H){p=!1,K();return}let re=null;$&&(re=Sn("/sounds/Legendary.mp3",.8)),V.style.display="flex";const B=()=>{const ve=H.firstElementChild;ve&&(ve.classList.remove("wo-in"),ve.classList.add("wo-out"))},R=1800,ue=400;H.innerHTML=`<img class="wo-in" src="${le}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(B,R),setTimeout(()=>{var ve;H.innerHTML=fe?`<img class="wo-in" src="${fe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ve=X.clubs)==null?void 0:ve.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},R+ue),setTimeout(B,R*2+ue),setTimeout(()=>{H.innerHTML=M?`<img class="wo-in" src="${M}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(R+ue)*2),setTimeout(B,(R+ue)*2+R);const he=N?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[Y]||"#fff";setTimeout(()=>{H.innerHTML=`<div class="wo-in" style="
        font-size:${N?"120px":"90px"};font-weight:900;color:${he};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${he}, 0 0 60px ${he};
        ${N?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${O}
      </div>`,N&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(R+ue)*3),setTimeout(B,(R+ue)*3+R),setTimeout(()=>{V.style.display="none",H.innerHTML="",p=!1,re&&!$&&re.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),K()},(R+ue)*4)}function m(I){if(p||I<0||I>=e.length||I===y)return;const K=I>y?1:-1;y=I,v(I,K)}function z(){m(y+1)}function k(){m(y-1)}function A(){const I=document.getElementById("card-viewport");if(!I||I._swipeBound)return;I._swipeBound=!0;let K=0,X=0,le=0,fe=!1;const M=$=>$.touches?$.touches[0].clientX:$.clientX,Y=$=>$.touches?$.touches[0].clientY:$.clientY,pe=$=>{fe=!0,K=M($),X=Y($),le=0},G=$=>{if(!fe)return;le=M($)-K;const N=Y($)-X;if(Math.abs(le)<Math.abs(N))return;const V=document.getElementById("current-card-wrap");V&&(V.style.transition="none",V.style.transform=`translateX(${le*.6}px) rotate(${le*.02}deg)`)},O=()=>{if(!fe)return;fe=!1;const $=document.getElementById("current-card-wrap"),N=55;le<=-N&&y<e.length-1?z():le>=N&&y>0?k():$&&($.style.transition="transform .2s ease",$.style.transform="translateX(0)")};I.addEventListener("pointerdown",pe),I.addEventListener("pointermove",G),I.addEventListener("pointerup",O),I.addEventListener("pointercancel",O),I.addEventListener("touchstart",pe,{passive:!0}),I.addEventListener("touchmove",G,{passive:!0}),I.addEventListener("touchend",O),I.addEventListener("click",$=>{if(Math.abs(le)>8)return;const N=I.getBoundingClientRect();$.clientX-N.left>N.width/2?z():k()})}let q=null;function ie(){const I=document.getElementById("fireworks-canvas");if(!I)return;I.width=window.innerWidth,I.height=window.innerHeight;const K=I.getContext("2d"),X=[];function le(){const M=Math.random()*I.width,Y=Math.random()*I.height*.6,pe=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],G=pe[Math.floor(Math.random()*pe.length)];for(let O=0;O<60;O++){const $=Math.PI*2/60*O,N=2+Math.random()*5;X.push({x:M,y:Y,vx:Math.cos($)*N,vy:Math.sin($)*N,alpha:1,color:G,size:2+Math.random()*3})}}le(),q=setInterval(le,600);function fe(){if(document.getElementById("fireworks-canvas")){K.clearRect(0,0,I.width,I.height);for(let M=X.length-1;M>=0;M--){const Y=X[M];if(Y.x+=Y.vx,Y.y+=Y.vy+.08,Y.vy*=.98,Y.alpha-=.018,Y.alpha<=0){X.splice(M,1);continue}K.globalAlpha=Y.alpha,K.fillStyle=Y.color,K.beginPath(),K.arc(Y.x,Y.y,Y.size,0,Math.PI*2),K.fill()}K.globalAlpha=1,(q!==null||X.length>0)&&requestAnimationFrame(fe)}}fe()}function ne(){q!==null&&(clearInterval(q),q=null);const I=document.getElementById("fireworks-canvas");I&&I.getContext("2d").clearRect(0,0,I.width,I.height)}if(n){const I=document.getElementById("reveal-btns");I&&(I.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{ne(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ne(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ne(),r.remove(),i("boosters")})}function nr(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return Qo(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.name)||e.gc_type||"Game Changer",s=(o==null?void 0:o.effect)||((t=ji[e.gc_type])==null?void 0:t.desc)||"",d=o!=null&&o.image_url?`/icons/${o.image_url}`:null,c=((i=ji[e.gc_type])==null?void 0:i.icon)||"⚡";return tt(a,d,c,s,{width:170})}if(e.card_type==="formation")return zi(e.formation,At[e.formation],{width:160});if(e.card_type==="stadium"){const o=e._stadiumDef,a=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",d=o!=null&&o.image_url?`/icons/${o.image_url}`:((r=o==null?void 0:o.club)==null?void 0:r.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=`${s}<br>+10 ⭐ joueurs alliés`;return ei(a,d,c,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function or(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}rr()}function rr(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function ar(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function sr(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var x,g;const{data:o}=await h.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((x=t.profile)==null?void 0:x.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await h.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Pn()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Nn(p))}catch(y){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',y)}const d=a.length;let c=0;e.innerHTML=`
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
  </div>`;const l=async()=>{await h.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function f(){var _;if(c>=d||!a.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const y=a[0],{data:p}=await h.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(y.type==="formation")u=await Hn(t.profile,0);else if(y.type==="game_changer")u=await On(t.profile,y.count||3,0);else if(s&&((_=s.rates)!=null&&_.length)){const v={...s,cost:0,cardCount:y.count||s.cardCount||5};u=await Bi(t.profile,v),y.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(m=>m.player&&m.player.job==="GK")||await dr(t.profile,u),await h.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await Rn(t.profile,y.count||5,0)}catch(v){n(v.message||"Erreur ouverture booster","error");return}a.shift(),c++,await l();const b=y.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:y.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Un(u,b,i,()=>{f()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>f())}async function dr(e,t){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await h.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Nt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},lr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function ri(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",r=e.face.replace(/^public\//,"").replace(/^\//,"");return n+r}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function qi(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ai(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function mi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function yt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Kn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function gi(e,t){const i=Nt[t]||Nt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),d=yt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let l=o.findIndex(f=>f.job===a);if(l===-1&&(l=o.findIndex(f=>f.job2===a)),l===-1&&(l=0),o[l]){const f={...o[l],_line:a};s.push(f),o.splice(l,1)}}const d=yt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}function st(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function it(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function vi(e,t,i){const r=new Set,o=t.filter(l=>{const f=l.gc_type||l.id;return r.has(f)?!1:(r.add(f),!0)});let a=[];function s(l,f){const x=l._gcDef,g=(x==null?void 0:x.name)||l.gc_type,y=x!=null&&x.image_url?`/icons/${x.image_url}`:null,p=tt(g,y,"⚡",(x==null?void 0:x.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${f?"3px solid #FFD700":"none"};
        box-shadow:${f?"0 0 18px #FFD700":"none"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(l)};function c(){var f,x,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const l=a.length>0;e.innerHTML=`
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
        ${o.map(y=>{const p=a.find(u=>u.gc_type===y.gc_type);return s(y,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(y=>{y.addEventListener("click",()=>{const p=y.dataset.id,u=o.find(_=>_.id===p);if(!u)return;const b=a.findIndex(_=>_.gc_type===u.gc_type);b>-1?a.splice(b,1):a.length<3&&a.push(u),c()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{l&&d(a)}),(x=e.querySelector("#gc-no-gc"))==null||x.addEventListener("click",()=>d([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function cr(e,t){var r;const i=((r=t==null?void 0:t.state)==null?void 0:r.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function pr(e,t,i){const{state:n,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){Tt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(x=>x.id),{data:s}=await h.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(x=>{var g,y;return((g=x.card)==null?void 0:g.card_type)==="stadium"&&((y=x.card)==null?void 0:y.stadium_id)}).map(x=>x.card.stadium_id))],c={};if(d.length){const{data:x}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(x||[]).forEach(g=>{c[g.id]=g}),(s||[]).forEach(g=>{var y,p;((y=g.card)==null?void 0:y.card_type)==="stadium"&&((p=g.card)!=null&&p.stadium_id)&&(g.card._stadiumDef=c[g.card.stadium_id]||null)})}let l=0;function f(){var m,z,k,A,q,ie,ne;const x=o[l],g=(s||[]).filter(Z=>Z.deck_id===x.id),y=g.filter(Z=>{var j;return Z.is_starter&&((j=Z.card)==null?void 0:j.player)}).map(Z=>qi(Z.card,Z.position)),p=g.find(Z=>{var j;return((j=Z.card)==null?void 0:j.card_type)==="formation"}),u=x.formation||((m=p==null?void 0:p.card)==null?void 0:m.formation)||"4-4-2";let b=y.length>=11?gi(y,u):null,_=((z=x.stadium_card)==null?void 0:z.stadium_def)||null;_&&b&&(b=ai(b,_));const v=y.length>=11;st(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${cr(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${x.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${y.length}/11${x.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((k=_.club)==null?void 0:k.encoded_name)||_.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${y.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((Z,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Z(){const j=e.querySelector(".deck-preview-wrap"),I=e.querySelector("#deck-swipe-zone");if(!j||!I||!b)return;const K=I.clientWidth>=900,X=Math.max(200,I.clientHeight-(K?60:40)),fe=Math.max(200,I.clientWidth-16),M=K?Math.min(117,Math.max(52,Math.round(fe*.22))):Math.max(44,Math.round(fe*.168));if(X<220||fe<220){requestAnimationFrame(Z);return}const Y=K?null:Math.round(M*.55);j.innerHTML=Rt(b,u,null,[],fe,X,[],Y),j.style.cssText=`width:${fe}px;height:${X}px;overflow:hidden;margin:${K?0:60}px auto 0`;const pe=j.querySelector("svg");pe&&(pe.style.cssText="display:block;width:100%;height:100%",pe.setAttribute("preserveAspectRatio",K?"xMidYMid meet":"none"))})),(A=document.getElementById("prev-deck"))==null||A.addEventListener("click",()=>{l>0&&(l--,f())}),(q=document.getElementById("next-deck"))==null||q.addEventListener("click",()=>{l<o.length-1&&(l++,f())}),(ie=document.getElementById("validate-deck"))==null||ie.addEventListener("click",()=>{if(!v)return;const Z=t.state.params||{};t.navigate("match",{...Z,matchMode:Z.matchMode||i,deckId:x.id})}),(ne=document.getElementById("cancel-deck-select"))==null||ne.addEventListener("click",()=>{it(e),r("home")});const E=document.getElementById("deck-swipe-zone");if(E){let Z=0,j=0;E.addEventListener("touchstart",I=>{Z=I.touches[0].clientX,j=I.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",I=>{const K=I.changedTouches[0].clientX-Z,X=I.changedTouches[0].clientY-j;Math.abs(K)<40||Math.abs(K)<Math.abs(X)||(K<0&&l<o.length-1?(l++,f()):K>0&&l>0&&(l--,f()))},{passive:!0})}}f()}function ht(e,t=44,i=58,n=null){return Ie(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Je(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:n||(l+=10)),a+=Ie(s,{width:40,role:c,extraNote:l}),d<o.length-1){const f=o[d+1],x=Bn(s,f,r)?Ht(s,f):null;a+=`<div style="width:7px;height:3px;background:${!x||x==="#ff3333"||x==="#cc2222"?"rgba(255,255,255,0.12)":x};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function hi(e,t,i,n,r=310,o=310,a=[],s=null){const d=At[t]||{},c=Ri(t)||Oi[t]||[],l={},f=["ATT","MIL","DEF","GK"];for(const b of f)(e[b]||[]).forEach((v,E)=>{l[`${b}${E+1}`]=v});function x(b){const _=d[b];return _?{x:_.x*r,y:_.y*o}:null}let g="";for(const[b,_]of c){const v=x(b),E=x(_);if(!v||!E)continue;const m=l[b],z=l[_],k=Ht(m,z);k==="#00ff88"||k==="#FFD700"?(g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):g+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(y*657/507);for(const[b,_]of Object.entries(l)){const v=x(b);if(!v||!_)continue;const E=b.replace(/[0-9]/g,""),m=a.includes(_.cardId),z=i==="attack"&&(["MIL","ATT"].includes(E)||m)&&!_.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!_.used,k=n.includes(_.cardId);let A=_.boost||0,q=!1;_.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(A+=10,q=!0):i||(A+=10,q=!0));const ie=Math.round(v.x-y/2),ne=Math.round(v.y-p/2);if(_.used){g+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ie}" y="${ne}" width="${y}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${_.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const Z=Ie({..._,_evolution_bonus:0,stadiumBonus:!1},{width:y,showStad:!1,stadDef:null,role:E,extraNote:A,_cardOffset:30,_forceStadColor:q}),j=k?`position:absolute;top:30px;left:0;width:${y}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";g+=`<foreignObject x="${ie-2}" y="${ne-30}" width="${y+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Z}
        ${k?`<div style="${j}"></div>`:""}
      </div>
    </foreignObject>`,z&&(g+=`<rect x="${ie}" y="${ne}" width="${y}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${_.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(y*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${g}
  </svg>`}function Rt(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${hi(e,t,i,n,r,o,a,s)}
  </div>`}async function _i(e,t,i,n){var z;const{state:r,navigate:o,toast:a}=t;st(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return pr(e,t,i);const d=s.deckId;let c,l,f,x;try{const k=await Promise.all([h.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),h.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=k[0].data,f=k[0].error,l=k[1].data,x=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),Tt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(f||x){console.error("[Match] Erreur Supabase:",f||x),Tt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const g=(l||[]).filter(k=>{var A;return k.is_starter&&((A=k.card)==null?void 0:A.player)}).map(k=>qi(k.card,k.position)),y=(l||[]).filter(k=>{var A;return!k.is_starter&&((A=k.card)==null?void 0:A.player)}).map(k=>qi(k.card,k.position));if(g.length<11){Tt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>o("decks"));return}const p=(l||[]).find(k=>{var A;return((A=k.card)==null?void 0:A.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((z=p==null?void 0:p.card)==null?void 0:z.formation)||"4-4-2",{data:b,error:_}=await h.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:v}=await h.from("gc_definitions").select("*").eq("is_active",!0),E=(b||[]).map(k=>({...k,_gcDef:(v==null?void 0:v.find(A=>A.name===k.gc_type||A.id===k.gc_definition_id))||null}));let m=null;if(c!=null&&c.stadium_card_id){const{data:k}=await h.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(k!=null&&k.stadium_id){const{data:A}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",k.stadium_id).single();m=A||null}}n({deckId:d,formation:u,starters:g,subsRaw:y,gcCardsEnriched:E,gcDefs:v||[],stadiumDef:m})}function It(){return Math.min(window.innerWidth-40,860)}function Gt(){return Math.round(It()*1.1)}function Vn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:ri(e)}}function ur(e,t,i,n="Adversaire"){An("/sounds/match-opening.mp3",.3);const r=It(),o=Gt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${hi(e,t,null,[],r,o)}
      </div>
    </div>`}function Yn(e){var o,a,s;if(!e)return"";const t=d=>d?Ie({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Ie({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
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
      }`,document.head.appendChild(d)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function fr(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=e?Ie({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Ie({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";r.innerHTML=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function Wn(e,t){const i=Pe(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function xt(e,t){return e.reduce((i,n)=>i+Wn(n,t),0)}function bt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ht(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function yi(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Ht(o,e[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Wn(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ie({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${xt(e,r)} + ${bt(e)} liens = <b style="color:#fff">${xt(e,r)+bt(e)}</b>
      </div>
    </div>`}async function mr(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await _i(e,t,r,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:f,gcDefs:x,stadiumDef:g})=>{try{let y=gi(c,d);g&&(y=ai(y,g),mi(l,g));const p=await gr(d,o),u=p.lines||p,b=async _=>{try{const v=a==="vs_ai_club"?"club":a,{data:E,error:m}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:v,home_deck_id:s,status:"in_progress"}).select().single();if(m){console.error("[MatchIA] Erreur création match:",m),Tt(e,"⚠️","Impossible de créer le match ("+m.message+").","Retour",()=>t.navigate("home"));return}const z=p.stadiumDef||null;z&&u&&(ai(u,z),mi(p.subs||[],z));const k={gcDefs:x||[],matchId:E==null?void 0:E.id,mode:a,difficulty:o,formation:d,homeTeam:y,aiTeam:u,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:z,homeScore:0,aiScore:0,gcCards:_,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};xr(e,k,t)}catch(v){console.error("[MatchIA] Exception launchMatch:",v),Tt(e,"⚠️","Erreur au lancement du match : "+v.message,"Retour",()=>t.navigate("home"))}};if(!f.length){b([]);return}vi(e,f,b)}catch(y){console.error("[MatchIA] Exception setup:",y),Tt(e,"⚠️","Erreur de préparation du match : "+y.message,"Retour",()=>t.navigate("home"))}})}async function gr(e,t){var u;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:yr(e),subs:[],gcCards:[],stadiumDef:null};const n=Nt[e]||Nt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(b,_,v){var E,m;return o.add(b.id),{cardId:"ai-"+b.id+"-"+v,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:((E=b.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((m=b.clubs)==null?void 0:m.logo_url)||null,boost:0,used:!1,_line:_}}for(const b of["GK","DEF","MIL","ATT"]){const _=i.filter(k=>k.job===b&&!o.has(k.id)),v=i.filter(k=>k.job!==b&&!o.has(k.id)),E=[..._,...v],m=[];for(let k=0;k<n[b];k++){const A=E[k];A&&m.push(a(A,b,k))}const z=yt(m.length);m.forEach((k,A)=>{k._col=z[A]}),r[b]=m}const d=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,_)=>a(b,b.job,100+_)),f=Object.keys(je).sort(()=>Math.random()-.5).slice(0,3).map((b,_)=>{var v,E;return{id:"ai-gc-"+_,gc_type:b,name:((v=je[b])==null?void 0:v.name)||b,icon:((E=je[b])==null?void 0:E.icon)||"⚡"}}),x=Object.values(r).flat(),g={};x.forEach(b=>{b.club_id&&(g[b.club_id]=(g[b.club_id]||0)+1)});const y=(u=Object.entries(g).sort((b,_)=>_[1]-b[1])[0])==null?void 0:u[0];let p=null;if(y){const{data:b}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",y).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:r,subs:d,gcCards:f,stadiumDef:p}}function yr(e){const t=Nt[e]||Nt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<t[o];d++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=yt(a.length);a.forEach((d,c)=>{d._col=s[c]}),i[o]=a}return i}function xr(e,t,i){var r;An("/sounds/match-opening.mp3",.3);const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Rt(t.aiTeam,t.formation,null,[],c,d,[],l),o.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const f=o.querySelector("svg");f&&(f.style.cssText="display:block;width:100%;height:100%",f.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>br(e,t,i),5e3)}const Ke=e=>Vn(e);function br(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=xt(n,o)+bt(n),d=xt(r,a)+bt(r),c=s>=d;e.innerHTML=`
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

    ${yi(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${yi(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const y=(p,u)=>e.querySelectorAll(p).forEach((b,_)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},u+_*90)});y(".duel-card-home",150),y(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{f("score-home",s,800),f("score-ai",d,800)},1500)};function f(y,p,u){const b=document.getElementById(y);if(!b)return;const _=performance.now(),v=E=>{const m=Math.min(1,(E-_)/u);b.textContent=Math.round(p*(1-Math.pow(1-m,3))),m<1?requestAnimationFrame(v):b.textContent=p};requestAnimationFrame(v)}requestAnimationFrame(l),t.attacker=c?"home":"ai";const x=c?Kn():null;c&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(y=>Ke(y)),aiPlayers:r.map(y=>Ke(y)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const g=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",we(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ji(e,t,i),800)};setTimeout(()=>{const y=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),_=c?y:p,v=c?p:y;_&&(_.style.fontSize="80px",_.style.color=c?"#FFD700":"#ff6b6b",_.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var m;const E=document.getElementById("duel-shock");if(E){const z=(m=b||u)==null?void 0:m.getBoundingClientRect(),k=e.querySelector(".match-screen").getBoundingClientRect();z&&(E.style.top=z.top-k.top+z.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var m;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
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
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(m=document.getElementById("start-match-btn"))==null||m.addEventListener("click",g))},600)},700)},2800)}function we(e,t,i){var ie,ne,Z,j,I,K,X,le,fe;const n=t.selected.map(M=>M.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(M=>!r.includes(M.cardId)),s=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(M=>!M.used),l=Ot(t.aiTeam),f=d.length===0&&c.length===0&&!l,x=(t.homeTeam.DEF||[]).filter(M=>!M.used),g=(t.homeTeam.GK||[]).filter(M=>!M.used);let y=[];t.phase==="attack"&&d.length===0&&(l?(y=x.map(M=>M.cardId),x.length===0&&(y=y.concat(g.map(M=>M.cardId)))):f&&(y=[...x,...g].map(M=>M.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",b=t.phase==="defense",_=t.phase==="finished",E=(t.homeSubs||[]).filter(M=>!(t.usedSubIds||[]).includes(M.cardId)).length>0&&t.subsUsed<t.maxSubs,m=u&&d.length===0&&y.length===0&&!E,z=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const Y=t.pendingAttack;let pe="";if(t.selected.length>0){const G=t.selected.map($=>({...(t.homeTeam[$._role]||[]).find(V=>V.cardId===$.cardId)||$,_line:$._role})),O=oi(G,t.modifiers.home,t.formation);pe=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Je(G.map($=>({...$,used:!1})),"#3a7bd5",O.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(G=>({...G,used:!1})),"#ff6b6b",Y.total,"attack",t.formation)}</div>
            ${pe}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(pe=>({...pe,used:!1})),"#00ff88",Y.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const Y=t.selected.map(G=>{const O=(t.homeTeam[G._role]||[]).find(N=>N.cardId===G.cardId)||G,$=["GK","DEF"].includes(G._role);return{...O,_line:G._role,...$?{note_a:Math.max(1,Number(O.note_a)||0)}:{}}}),pe=ni(Y,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Y.map(G=>({...G,used:!1})),"#FFD700",pe.total,"attack",t.formation)}</div>
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+Yn(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(B,R,ue)=>{var Ae,Be;const ce=(t.gcDefs||[]).find(ke=>ke.name===B.gc_type),he=(ce==null?void 0:ce.name)||B.gc_type,Se=(ce==null?void 0:ce.effect)||((Ae=je[B.gc_type])==null?void 0:Ae.desc)||"",ve=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,Te=((Be=je[B.gc_type])==null?void 0:Be.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${B.id}" data-gc-type="${B.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${tt(he,ve,Te,Se,{width:R})}
        </div>`},pe=(B,R)=>{var ue;return`<div id="boost-card"
          style="box-sizing:border-box;width:${B}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(R*.2)}px">⚡</div>
            <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${(ue=t.boostCard)==null?void 0:ue.value}</div>
          </div>`},G=(B,R)=>R?pe(95,162):Y(B,95),O=(B,R)=>R?pe(68,116):Y(B,68),$=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",N=_?`<button id="btn-results" style="${$};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${$};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:m?`<button id="btn-pass" style="${$};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:b?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${$};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,V=u||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",H=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(B=>`<div class="sub-btn-col" data-sub-id="${B.cardId}" style="cursor:pointer;flex-shrink:0">${ht(B,76,100)}</div>`).join("")}
      </div>`,re=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Rt(t.homeTeam,t.formation,t.phase,n,M?1300:It(),M?600:Gt(),y)}
        </div>
      </div>`;return M?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${H}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${re}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${N}${V}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${z.map(B=>G(B,!1)).join("")}
            ${k?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Rt(t.homeTeam,t.formation,t.phase,n,M?1300:It(),M?600:Gt(),y)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${z.map(B=>O(B,!1)).join("")}
            ${k?O(null,!0):""}
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
          <div>${N}${V}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,pe,G;if(M.type==="duel"){const O=M.isGoal,$=M.homeScored?"#FFD700":O?"#ff6b6b":"rgba(255,255,255,0.3)",N=M.homeScored?"⚽ BUT !":O?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${O?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${$};margin-bottom:4px">
                <div style="font-size:9px;color:${$};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${N}</div>
                ${(pe=M.homePlayers)!=null&&pe.length?`<div style="margin-bottom:3px">${Je(M.homePlayers,"rgba(255,255,255,0.7)",M.homeTotal,void 0,t.formation)}</div>`:""}
                ${(G=M.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${Je(M.aiPlayers,"#ff6b6b",M.aiTotal,void 0,t.formation)}</div>`:""}
              </div>`}return M.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${M.outPlayer?ht({...M.outPlayer,used:!0,_line:M.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${M.inPlayer?ht({...M.inPlayer,_line:M.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:M.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${M.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${M.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function A(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const pe=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");pe&&G&&(G.style.paddingBottom=pe.offsetHeight+"px")}if(A(),setTimeout(A,120),setTimeout(A,400),setTimeout(A,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",A),window.visualViewport.addEventListener("scroll",A)),window.addEventListener("resize",A)),function(){const Y=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!Y)return;const pe=Y.closest("#match-terrain-wrap");pe&&(pe.style.cssText="position:relative;width:100%;height:100%;padding:0"),Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");if(M){const Y=M.closest("#match-terrain-wrap");Y&&(Y.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const pe=()=>document.getElementById("match-timer"),G=()=>{const O=pe();if(!O)return;const $=String(Math.floor(Y/60)).padStart(2,"0"),N=String(Y%60).padStart(2,"0");O.textContent=` ${$}:${N}`,O.style.color=M?"#ff2222":"#ff9500",O.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,G(),zn("/sounds/timer-urgent.mp3",.6);else{clearInterval(t._timerInt),t._timerInt=null,Ue(),t.homeScore=0,t.aiScore=3;const O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",O.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(O),setTimeout(()=>{O.remove(),vt(e,t,i)},2500)}else G()},1e3)}(ie=document.getElementById("match-quit"))==null||ie.addEventListener("click",()=>{it(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,vt(e,t,i))}),(ne=document.getElementById("view-ai"))==null||ne.addEventListener("click",()=>Sr(t,i)),(Z=document.getElementById("toggle-history"))==null||Z.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(I=document.getElementById("btn-action"))==null||I.addEventListener("click",()=>{t.selected.length!==0&&(u?hr(e,t,i):b&&_r(e,t,i))}),(K=document.getElementById("btn-results"))==null||K.addEventListener("click",()=>vt(e,t,i)),(X=document.getElementById("btn-pass"))==null||X.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Di(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(e,t,i);return}t.phase="ai-attack",we(e,t,i),setTimeout(()=>Ji(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>vr(M,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Si(e,t,i,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{u?M.addEventListener("click",()=>Er(M.dataset.gcId,M.dataset.gcType,e,t,i)):(M.style.opacity="0.35",M.style.cursor="default",M.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>Ir(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Si(e,t,i,M.dataset.subId))}),(fe=document.getElementById("sub-btn-main"))==null||fe.addEventListener("click",()=>Si(e,t,i))}function vr(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}we(i,t,n)}function Xi(e,t,i){e.matchId&&h.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function hr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Xi(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=ni(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",we(e,t,i),setTimeout(()=>$r(e,t,i),1200)}function _r(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Xi(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(f=>f.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),o=oi(r,t.modifiers.home,t.formation);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const a=Wi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ke(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ke(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,we(e,t,i),Qe(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,St(e,t,i,"home-attack")}function wr(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(d=>d.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function kr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),je[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ji(e,t,i){Xi(t,i,null),wr(t),kr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!n.length){const l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(x=>!x.used),f=Ot(t.homeTeam);if(f||l.length===0){const x=(t.aiTeam.DEF||[]).filter(y=>!y.used),g=(t.aiTeam.GK||[]).filter(y=>!y.used);n=f?x.length?x:g:[...x,...g],r=!0}}const o=Dn(n,"attack",t.difficulty);if(!o.length){Fi(e,t,i);return}r&&o.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=ni(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ot(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,xi(e,t,i,"ai",o[0]);return}t.aiScore++;const f={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(x=>Ke(x)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(f),t.pendingAttack=null,we(e,t,i),Qe(f.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}t.phase="defense",we(e,t,i)}function $r(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=Dn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(x=>!x.used)).length){const f=((c=t.pendingAttack)==null?void 0:c.players)||[];if(f.length===1&&(f[0]._line==="GK"||f[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,xi(e,t,i,"home",f[0]);return}t.homeScore++;const g={type:"duel",isGoal:!0,homeScored:!0,homePlayers:f.map(y=>Ke(y)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,we(e,t,i),Qe(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}const a=r.length>0?oi(r,t.modifiers.ai,t.formation).total:0;r.forEach(f=>{f.used=!0});const s=Wi(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>Ke(f)),aiPlayers:r.map(f=>Ke(f)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,we(e,t,i),Qe(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,St(e,t,i,"ai-attack")}function St(e,t,i,n){if(t.round++,!Xn(e,t,i)){if(Qi(t)){vt(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Fi(e,t,i);return}t.phase="attack",we(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Fi(e,t,i);return}t.phase="ai-attack",we(e,t,i),setTimeout(()=>Ji(e,t,i),800)}}}function Ot(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function _n(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function Xn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(_n(t.homeTeam)&&Ot(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,xi(e,t,i,"home",n),!0):!1}if(_n(t.aiTeam)&&Ot(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,xi(e,t,i,"ai",n),!0):!1}return!1}function xi(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ke(r)]:[],aiPlayers:n==="ai"?[Ke(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,d)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,we(e,t,i),Qe([Ke(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Qi(t)){vt(e,t,i);return}St(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Qi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Di(e,t){return!(["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used))||Ot(t)||!["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used)))}function Fi(e,t,i){if(!Xn(e,t,i)){if(Qi(t)){vt(e,t,i);return}if(Di(t.homeTeam,t.aiTeam)&&Di(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(e,t,i);return}t.phase="attack",we(e,t,i)}}function Si(e,t,i,n=null,r=null){var g,y;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){$t("Aucun joueur utilisé à remplacer");return}if(!a.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const d=((g=o[s])==null?void 0:g._line)||((y=o[s])==null?void 0:y.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),l=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function x(){var m,z,k,A,q,ie;const p=o[s],u=a[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),_=Math.round(b*1.35),v=ne=>`background:rgba(255,255,255,0.12);border:none;color:${ne?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ne?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?ht({...u,used:!1,boost:0},b,_):"<div>—</div>"}</div>
        <button id="in-down" style="${v(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?ht({...p,used:!1,boost:0},b,_):"<div>—</div>"}</div>
        <button id="out-down" style="${v(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(m=f.querySelector("#sub-close"))==null||m.addEventListener("click",()=>f.remove()),(z=f.querySelector("#out-up"))==null||z.addEventListener("click",()=>{s>0&&(s--,x())}),(k=f.querySelector("#out-down"))==null||k.addEventListener("click",()=>{s<o.length-1&&(s++,x())}),(A=f.querySelector("#in-up"))==null||A.addEventListener("click",()=>{c>0&&(c--,x())}),(q=f.querySelector("#in-down"))==null||q.addEventListener("click",()=>{c<a.length-1&&(c++,x())});const E=(ne,Z,j,I)=>{const K=f.querySelector("#"+ne);if(!K)return;let X=0;K.addEventListener("touchstart",le=>{X=le.touches[0].clientY},{passive:!0}),K.addEventListener("touchend",le=>{const fe=le.changedTouches[0].clientY-X;if(Math.abs(fe)<30)return;const M=Z();fe<0&&M<I-1?(j(M+1),x()):fe>0&&M>0&&(j(M-1),x())},{passive:!0})};E("in-panel",()=>c,ne=>c=ne,a.length),E("out-panel",()=>s,ne=>s=ne,o.length),(ie=f.querySelector("#sub-confirm"))==null||ie.addEventListener("click",ne=>{if(ne.preventDefault(),ne.stopPropagation(),l)return;l=!0;const Z=o[s],j=a[c];if(!Z||!j)return;let I=null,K=-1;for(const[le,fe]of Object.entries(t.homeTeam)){const M=(fe||[]).findIndex(Y=>Y.cardId===Z.cardId);if(M!==-1){I=le,K=M;break}}if(K===-1||!I){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const X={...j,_line:I,_col:Z._col||0,used:!1,boost:0};t.homeTeam[I].splice(K,1,X),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Z.name,firstname:Z.firstname,note:Pe(Z,I),portrait:ri(Z),job:Z.job,country_code:Z.country_code,rarity:Z.rarity,clubName:Z.clubName,clubLogo:Z.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Pe(j,I),portrait:ri(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${Z.firstname} ${Z.name}`}),f.remove(),fr(Z,j,()=>we(e,t,i))})}document.body.appendChild(f),x()}function Er(e,t,i,n,r){var x,g;const o=(n.gcDefs||[]).find(y=>y.name===t),a=je[t]||{icon:"⚡",desc:"Carte spéciale."},s=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||a.desc,c=o!=null&&o.image_url?`/icons/${o.image_url}`:null,l=a.icon||"⚡",f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",f.innerHTML=`
    ${tt(s,c,l,d,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(f),(x=f.querySelector("#gc-back"))==null||x.addEventListener("click",()=>f.remove()),(g=f.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{f.remove(),Tr(e,t,i,n,r)})}function ci(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(f=>{const x=f._line||f.job||"MIL",g=s.find(p=>p.cardId===f.cardId),y=Ie({...f,_evolution_bonus:0},{width:90,showStad:!0,role:x,extraNote:f.boost||0});return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="position:relative;border-radius:8px;${g?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          ${y}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const x=f.dataset.cid,g=e.find(p=>p.cardId===x);if(!g)return;const y=s.findIndex(p=>p.cardId===x);y>-1?s.splice(y,1):s.length<t&&s.push(g),d()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),o(s)})}d(),document.body.appendChild(a)}const Lr={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(ci(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),we(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),we(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,f])=>f.filter(x=>!x.used).map(x=>({...x,_line:l})));return c.length?(ci(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,r,l=>{l.forEach(f=>{const g=((n==="home"?r.homeTeam:r.aiTeam)[f._line]||[]).find(y=>y.cardId===f.cardId);g&&(g.boost=(g.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${g.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),we(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),we(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(f=>!f.used).map(f=>({...f,_line:c})));return d.length?(ci(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(l=>{const x=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(g=>g.cardId===l.cardId);x&&(x.used=!0,n.log.push({text:`❌ ${x.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),we(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),we(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return o.length?(ci(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),we(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),we(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Tr(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(d=>d.name===t)||o.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=Lr[a.effect_type];d?d(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(f=>f.used).map(f=>({...f,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,f)=>Pe(f,"ATT")-Pe(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}h.from("cards").delete().eq("id",e).then(()=>{}),s&&we(i,n,r)}function Ir(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${lr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),we(e,t,i)})})}async function vt(e,t,i){var l,f;Pt(),Ue(),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=So(t.mode,a);t.matchId&&await h.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await h.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),it(e),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{c.remove(),it(e),i.navigate("match",{matchMode:t.mode})})}function Sr(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${hi(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=e=>Vn(e);async function zt(e,t,i,n,r={}){return Jn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function Ar(e,t,i){const{data:n}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return Jn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function Jn(e,t,i,n,r=[],o=[],a=!1,s=null,d=null,c=null,l=null,f=null){const{state:x,navigate:g,toast:y}=t,p=n?"p1":"p2",u=n?"p2":"p1",b=(r||[]).map(w=>w.id),_=(r||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await h.from("matches").select("*").eq("id",i).single();if(!v){y("Match introuvable","error"),g("home");return}async function E(){var ye,be;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:w,error:L},{data:S,error:C},{data:T},{data:P}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",C==null?void 0:C.message,"p1D:",(ye=w==null?void 0:w.starters)==null?void 0:ye.length,"p2D:",(be=S==null?void 0:S.starters)==null?void 0:be.length);const D=oe=>{const Ee=Number(oe.evolution_bonus)||0;return{cardId:oe.card_id,position:oe.position,id:oe.id,firstname:oe.firstname,name:oe.surname_real,country_code:oe.country_code,club_id:oe.club_id,job:oe.job,job2:oe.job2,note_g:(Number(oe.note_g)||0)+(oe.job==="GK"||oe.job2==="GK"&&Number(oe.note_g)>0?Ee:0),note_d:(Number(oe.note_d)||0)+(oe.job==="DEF"||oe.job2==="DEF"&&Number(oe.note_d)>0?Ee:0),note_m:(Number(oe.note_m)||0)+(oe.job==="MIL"||oe.job2==="MIL"&&Number(oe.note_m)>0?Ee:0),note_a:(Number(oe.note_a)||0)+(oe.job==="ATT"||oe.job2==="ATT"&&Number(oe.note_a)>0?Ee:0),evolution_bonus:Ee,rarity:oe.rarity,skin:oe.skin,hair:oe.hair,hair_length:oe.hair_length,face:oe.face||null,clubName:oe.club_encoded_name||null,clubLogo:oe.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},F=((w==null?void 0:w.starters)||[]).map(oe=>D(oe)),U=((S==null?void 0:S.starters)||[]).map(oe=>D(oe)),J=(w==null?void 0:w.formation)||"4-4-2",te=(S==null?void 0:S.formation)||"4-4-2";let ee=gi(F,J),Q=gi(U,te);const ae=((w==null?void 0:w.subs)||[]).map(oe=>D(oe)),se=((S==null?void 0:S.subs)||[]).map(oe=>D(oe)),ge=(w==null?void 0:w.stadium_def)||(n?d:null),de=(S==null?void 0:S.stadium_def)||(n?null:d);return ge&&(ee=ai(ee,ge),mi(ae,ge)),de&&(Q=ai(Q,de),mi(se,de)),{p1Team:ee,p2Team:Q,p1Subs:ae,p2Subs:se,p1Formation:J,p2Formation:te,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(P==null?void 0:P.club_name)||(P==null?void 0:P.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?_:[],gcCardsFull_p2:n?[]:_,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let m=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!m,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",x.profile.id),!m)if(n){m=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((m==null?void 0:m.p1Team)||{}));const{data:w}=await h.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await h.from("matches").update({game_state:m,turn_user_id:v.home_id}).eq("id",i):m=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let w=0;w<30&&!m;w++){await new Promise(S=>setTimeout(S,400));const{data:L}=await h.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(m=L.game_state),w%5===0&&console.log("[PvP] away - poll",w,"game_state:",!!(L!=null&&L.game_state))}if(!m){y("Erreur de synchronisation","error"),g("home");return}m.gc_p2=b,m.gcCardsFull_p2=_,await h.from("matches").update({game_state:m}).eq("id",i)}let z=!1,k=null,A=!1;const q=new Set,ie=new Set;async function ne(w){var te,ee;Pt();try{h.removeChannel(Z)}catch{}const L=m[p+"Score"]||0,S=m[u+"Score"]||0;let C,T;w.winner_id?(C=w.winner_id===x.profile.id,T=!1):w.forfeit?(C=L>S,T=!1):(T=L===S,C=L>S);let P="";if(a&&n)try{const{data:Q}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:ae}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(Q&&ae){const se=C?1:T?.5:0,ge=1-se,de=Q.placement_matches<10,ye=ae.placement_matches<10,be=computeGlicko2(Q.mmr,Q.mmr_deviation,Q.mmr_volatility,ae.mmr,ae.mmr_deviation,se===1?1:se===0?0:.5,de),oe=computeGlicko2(ae.mmr,ae.mmr_deviation,ae.mmr_volatility,Q.mmr,Q.mmr_deviation,ge===1?1:ge===0?0:.5,ye);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:C?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:be.delta,p_away_delta:oe.delta,p_home_new_rd:be.newRd,p_away_new_rd:oe.newRd,p_home_new_vol:be.newSigma,p_away_new_vol:oe.newSigma});const Ee=be.delta,Ne=be.newMmr,Le=getTier(Ne),Ve=Ee>=0?"+":"",Oe=Ee>=0?"#4caf50":"#ff6b6b",nt=getTier(Q.mmr);P=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Le.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Le.color}">
                    ${Ne>Q.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Le.emoji} ${Le.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>Q.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ee>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Le.color}">${Le.emoji} ${Le.label}</div>`}
              ${de?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${Q.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(Q){console.error("[Ranked] MMR update error:",Q)}(te=document.getElementById("pvp-end-overlay"))==null||te.remove();const D=document.createElement("div");D.id="pvp-end-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const F=T?"🤝":C?"🏆":"😞",U=T?"MATCH NUL":C?"VICTOIRE !":"DÉFAITE",J=T?"#fff":C?"#FFD700":"#ff6b6b";D.innerHTML=`
      <div style="font-size:64px">${F}</div>
      <div style="font-size:26px;font-weight:900;color:${J}">${U}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${m[p+"Name"]} ${L} – ${S} ${m[u+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${P}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(D),(ee=D.querySelector("#pvp-end-home"))==null||ee.addEventListener("click",()=>{D.remove(),it(e),l?g("mini-league",{openLeagueId:l}):g(a?"ranked":"home")})}const Z=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{var S;const L=w.new;try{if(L.status==="finished"||L.forfeit){if(z)return;z=!0,k&&(clearInterval(k),k=null),Ue(),L.game_state&&(m=L.game_state),ne(L);return}if(L.game_state){const C=m;m=L.game_state;const T=m._lastGC;if(T&&T.seq&&!ie.has(T.seq)&&(ie.add(T.seq),T.by!==p)){$(T.type,T.by,()=>Y());return}const P=C[p+"Score"]||0,D=C[u+"Score"]||0,F=m[p+"Score"]||0,U=m[u+"Score"]||0,J=F>P,te=U>D;if((J||te)&&!q.has(m.round)){q.add(m.round);const ee=[...m.log||[]].reverse().find(se=>se.isGoal),Q=((ee==null?void 0:ee.homePlayers)||[]).map(se=>({name:se.name,note:se.note,portrait:se.portrait,job:se.job}));!!((S=ee==null?void 0:ee.text)!=null&&S.includes("DERNIER CORNER"))?Se().then(()=>{Qe(Q,F,U,J,()=>Y())}):Qe(Q,F,U,J,()=>Y());return}Y()}}catch(C){console.error("[PvP] crash:",C)}}).subscribe();async function j(w){Object.assign(m,w),m.lastActionAt=new Date().toISOString();const{error:L}=await h.from("matches").update({game_state:m}).eq("id",i);L&&y("Erreur de synchronisation","error");try{Y()}catch(S){console.error("[PvP] renderPvpScreen crash:",S)}}async function I(){if(z)return;z=!0,Pt(),Ue(),k&&(clearInterval(k),k=null);const w=n?v.away_id:v.home_id,L=n?"p2":"p1",S=n?"p1":"p2",C={...m,[L+"Score"]:3,[S+"Score"]:0,phase:"finished"},T=C.p1Score||0,P=C.p2Score||0;try{await h.from("matches").update({game_state:C}).eq("id",i);const{data:D,error:F}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:w,p_home_score:T,p_away_score:P,p_forfeit:!0});if(F&&console.error("[PvP] finish_pvp_match (forfeit):",F),l)try{await h.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(U){console.error("[PvP] check_and_finish_mini_league (forfeit):",U)}try{const{data:U}=await h.rpc("apply_match_rewards",{p_match_id:i});U!=null&&U.success&&!(U!=null&&U.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(U){console.error("[PvP] apply_match_rewards (forfeit):",U)}}catch{}try{h.removeChannel(Z)}catch{}setTimeout(()=>{it(e),l?g("mini-league",{openLeagueId:l}):g("home")},800)}const K={BOOST_STAT:({value:w=1,count:L=1,roles:S=[]},C,T)=>{const P=C[p+"Team"],D=Object.entries(P).filter(([F])=>!S.length||S.includes(F)).flatMap(([F,U])=>U.filter(J=>!J.used).map(J=>({...J,_line:F})));if(!D.length){C.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(C);return}X(D,L,`Choisir ${L} joueur(s) à booster (+${w})`,F=>{F.forEach(U=>{const J=(P[U._line]||[]).find(te=>te.cardId===U.cardId);J&&(J.boost=(J.boost||0)+w,C.log.push({text:`⚡ +${w} sur ${J.name}`,type:"info"}))}),C[p+"Team"]=P,T(C)})},DEBUFF_STAT:({value:w=1,count:L=1,roles:S=[],target:C="ai"},T,P)=>{const D=C==="home"?p:u,F=T[D+"Team"],U=C==="home"?"allié":"adverse",J=Object.entries(F).filter(([te])=>!S.length||S.includes(te)).flatMap(([te,ee])=>ee.map(Q=>({...Q,_line:te})));if(!J.length){T.log.push({text:`🎯 Aucun joueur ${U}`,type:"info"}),P(T);return}X(J,L,`Choisir ${L} joueur(s) ${U}(s) (-${w})`,te=>{te.forEach(ee=>{const Q=(F[ee._line]||[]).find(ae=>ae.cardId===ee.cardId);Q&&(Q.boost=(Q.boost||0)-w,T.log.push({text:`🎯 -${w} sur ${Q.name}`,type:"info"}))}),T[D+"Team"]=F,P(T)})},GRAY_PLAYER:({count:w=1,roles:L=[],target:S="ai"},C,T)=>{const P=S==="home"?p:u,D=C[P+"Team"],F=S==="home"?"allié":"adverse",U=Object.entries(D).filter(([J])=>!L.length||L.includes(J)).flatMap(([J,te])=>te.filter(ee=>!ee.used).map(ee=>({...ee,_line:J})));if(!U.length){C.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),T(C);return}X(U,w,`Choisir ${w} joueur(s) ${F}(s) à exclure`,J=>{const te="usedCardIds_"+P,ee=new Set(C[te]||[]);J.forEach(Q=>{const ae=(D[Q._line]||[]).find(se=>se.cardId===Q.cardId);ae&&(ae.used=!0,ee.add(Q.cardId),C.log.push({text:`❌ ${ae.name} exclu !`,type:"info"}))}),C[te]=[...ee],C[P+"Team"]=D,T(C)})},REVIVE_PLAYER:({count:w=1,roles:L=[]},S,C)=>{const T=S[p+"Team"],P=Object.entries(T).filter(([D])=>!L.length||L.includes(D)).flatMap(([D,F])=>F.filter(U=>U.used).map(U=>({...U,_line:D})));if(!P.length){S.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),C(S);return}X(P,w,`Choisir ${w} joueur(s) à ressusciter`,D=>{D.forEach(F=>{const U=(T[F._line]||[]).find(J=>J.cardId===F.cardId);U&&(U.used=!1,S.log.push({text:`💫 ${U.name} ressuscité !`,type:"info"}))}),S[p+"Team"]=T,C(S)})},REMOVE_GOAL:({},w,L)=>{const S=u+"Score";w[S]>0?(w[S]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(w)},ADD_GOAL_DRAW:({},w,L)=>{w[p+"Score"]===w[u+"Score"]?(w[p+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(w)},ADD_SUB:({value:w=1},L,S)=>{L.maxSubs=(L.maxSubs||3)+w,L.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),S(L)},CUSTOM:({},w,L)=>L(w)};function X(w,L,S,C){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let P=[];function D(){var U,J;const F=w.map(te=>{const ee=te._line||te.job||"MIL",Q=P.find(se=>se.cardId===te.cardId),ae=Ie({...te,_evolution_bonus:0},{width:90,showStad:!0,role:ee,extraNote:te.boost||0});return`<div class="pp-item" data-cid="${te.cardId}"
          style="position:relative;border-radius:8px;${Q?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${te.used?"opacity:0.3;pointer-events:none":""}">
          ${ae}
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${S}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${P.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${P.length}/${L})
          </button>
        </div>`,(U=T.querySelector("#pp-close"))==null||U.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(te=>{te.addEventListener("click",()=>{const ee=te.dataset.cid,Q=w.find(se=>se.cardId===ee),ae=P.findIndex(se=>se.cardId===ee);Q&&(ae>-1?P.splice(ae,1):P.length<L&&P.push(Q),D())})}),(J=T.querySelector("#pp-confirm"))==null||J.addEventListener("click",()=>{T.remove(),C(P)})}D(),document.body.appendChild(T)}async function le(w,L){const C=(m["gcCardsFull_"+p]||[]).find(F=>F.id===w),T=(C==null?void 0:C._gcDef)||(m.gcDefs||[]).find(F=>{var U;return F.name===L||((U=F.name)==null?void 0:U.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),P=[...m["usedGc_"+p]||[],w],D={type:L,by:p,seq:(m._gcAnimSeq||0)+1};ie.add(D.seq),$(L,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const U=K[T.effect_type];if(U){const J={...m};U(T.effect_params||{},J,async te=>{te["usedGc_"+p]=P,te._lastGC=D,te._gcAnimSeq=D.seq,await j(te)});return}}const F={...m};switch(L){case"Remplacement+":F.maxSubs=(F.maxSubs||3)+1,F.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const U=u+"Score";F[U]>0&&(F[U]--,F.log.push({text:"🚫 But annulé",type:"info"}));break}}F["usedGc_"+p]=P,F._lastGC=D,F._gcAnimSeq=D.seq,await j(F)})}function fe(w,L){const S="usedCardIds_"+w,C=new Set(m[S]||[]);L.forEach(T=>C.add(T)),m[S]=[...C]}function M(){for(const w of["p1","p2"]){const L=new Set(m["usedCardIds_"+w]||[]),S=m[w+"Team"];if(S)for(const C of["GK","DEF","MIL","ATT"])(S[C]||[]).forEach(T=>{T.used=L.has(T.cardId)})}}function Y(){var tn,nn,on,rn,an,sn;if(m.phase==="reveal")return pe();if(m.phase==="midfield")return O();if(m.phase==="finished")return Ge();const w=m[p+"Team"],L=m[u+"Team"];M();const S=m[p+"Score"],C=m[u+"Score"],T=m[p+"Name"],P=m[u+"Name"],D=m.phase===p+"-attack",F=m.phase===p+"-defense",U=Array.isArray(m["selected_"+p])?m["selected_"+p]:[],J=U.map(W=>W.cardId),te=window.innerWidth>=700,ee=m[p+"Subs"]||[],Q=m["usedSubIds_"+p]||[],ae=ee.filter(W=>!Q.includes(W.cardId)),se=m["gcCardsFull_"+p]||[],ge=m["usedGc_"+p]||[],de=se.filter(W=>!ge.includes(W.id)),ye=m.boostOwner===p&&!m.boostUsed,be=[...w.MIL||[],...w.ATT||[]].filter(W=>!W.used),oe=[...L.MIL||[],...L.ATT||[]].filter(W=>!W.used),Ee=!ke(L),Ne=be.length===0&&oe.length===0&&!Ee,Le=(w.DEF||[]).filter(W=>!W.used),Ve=(w.GK||[]).filter(W=>!W.used);let Oe=[];D&&be.length===0&&(Ee?(Oe=Le.map(W=>W.cardId),Le.length===0&&(Oe=Oe.concat(Ve.map(W=>W.cardId)))):Ne&&(Oe=[...Le,...Ve].map(W=>W.cardId)));function nt(W,me,ze){var Me,ft;const _e=W._gcDef,jt=(_e==null?void 0:_e.name)||W.gc_type,at=(_e==null?void 0:_e.effect)||((Me=je[W.gc_type])==null?void 0:Me.desc)||"",Fe=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,Re=((ft=je[W.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${tt(jt,Fe,Re,at,{width:me})}
      </div>`}function Ut(W,me){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${W}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(me*.2)}px">⚡</div>
        <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const De=(W,me)=>me?Ut(95,162):nt(W,95),Ye=(W,me)=>me?Ut(68,116):nt(W,68),He=te?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=D?ct(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${U.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${U.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${P}</div>`,ot=D&&!ct(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':D||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${U.length}/3 sélectionné(s)</div>`:"",Mt=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${te?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ae.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ae.map(W=>`<div class="pvp-sub-btn" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${ht(W,te?76:44,te?100:58)}</div>`).join("")}
    </div>`,ut=D?"attack":F?"defense":"idle",kt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Rt(w,m[p+"Formation"],ut,J,te?1300:It(),te?600:Gt(),Oe)}
      </div>
    </div>`,rt=m[p+"Team"],ro=(()=>{var me,ze,_e,jt,at;if(F&&((me=m.pendingAttack)!=null&&me.players)){const Fe=m.pendingAttack;let Re="";if(U.length>0){const Me=U.map(We=>{const Kt=(rt[We._role]||[]).find($i=>$i.cardId===We.cardId)||We,Vt=rt[We._role]||[],si=Vt.findIndex($i=>$i.cardId===We.cardId),ki=yt(Vt.length),Yt=si>=0?ki[si]:Kt._col??1;return{...Kt,_line:We._role,_col:Yt}}),ft=oi(Me,((ze=m.modifiers)==null?void 0:ze[p])||{},m[p+"Formation"]);Re=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${U.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Me.map(We=>({...We,used:!1})),"#3a7bd5",ft.total,"defense",m[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${P} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",Fe.total,"attack",m[u+"Formation"])}</div>
          ${Re}
        </div>`}if(D&&((_e=m.pendingAttack)!=null&&_e.players)){const Fe=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Re=>({...Re,used:!1})),"#00ff88",Fe.total,"attack",m[p+"Formation"])}</div>
        </div>`}if(D&&!((jt=m.pendingAttack)!=null&&jt.players)&&U.length>0){const Fe=U.map(Me=>{const ft=(rt[Me._role]||[]).find(Yt=>Yt.cardId===Me.cardId)||Me,We=["GK","DEF"].includes(Me._role),Kt=rt[Me._role]||[],Vt=Kt.findIndex(Yt=>Yt.cardId===Me.cardId),si=yt(Kt.length),ki=Vt>=0?si[Vt]:ft._col??1;return{...ft,_line:Me._role,_col:ki,...We?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Re=ni(Fe,((at=m.modifiers)==null?void 0:at[p])||{},m[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${U.length}/3)</div>
          <div style="display:flex;justify-content:center">${Je(Fe.map(Me=>({...Me,used:!1})),"#FFD700",Re.total,"attack",m[p+"Formation"])}</div>
        </div>`}const W=(m.log||[]).slice(-1)[0];return W?'<div style="padding:2px 4px">'+Yn(W)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),en=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${S} – ${C}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${ro}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;st(e),e.style.overflow="hidden",te?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${en}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Mt}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${kt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${ot}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${de.map(W=>De(W,!1)).join("")}
            ${ye?De(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${en}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Rt(w,m[p+"Formation"],ut,J,It(),Gt(),Oe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${de.map(W=>Ye(W,!1)).join("")}
            ${ye?Ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${D&&ae.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${D&&ae.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${D&&ae.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${D&&ae.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ae.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+p]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${pt}${ot}</div>
        </div>
      </div>`;function Ct(){const W=e.querySelector(".match-screen");if(!W)return;const me=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);W.style.height=me+"px",W.style.minHeight=me+"px",W.style.maxHeight=me+"px",W.style.overflow="hidden";const ze=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");ze&&_e&&(_e.style.paddingBottom=ze.offsetHeight+"px")}if(Ct(),setTimeout(Ct,120),setTimeout(Ct,400),A||(A=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ct),window.visualViewport.addEventListener("scroll",Ct)),window.addEventListener("resize",Ct)),function(){const me=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!me)return;const ze=me.closest("#match-terrain-wrap");ze&&(ze.style.cssText="position:relative;width:100%;height:100%;padding:0"),me.removeAttribute("width"),me.removeAttribute("height"),me.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",me.setAttribute("preserveAspectRatio","xMidYMid meet")}(),m._pvpResizeBound||(m._pvpResizeBound=!0,window.addEventListener("resize",()=>{const W=e.querySelector(".terrain-wrapper svg");if(W){const me=W.closest("#match-terrain-wrap");me&&(me.style.cssText="position:relative;width:100%;height:100%;padding:0"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(W=>{W.addEventListener("click",()=>{if(!D&&!F)return;const me=W.dataset.cardId,ze=W.dataset.role,_e=(w[ze]||[]).find(Re=>Re.cardId===me);if(!_e||_e.used)return;const jt=Oe.includes(me);if(D&&!["MIL","ATT"].includes(ze)&&!jt)return;Array.isArray(m["selected_"+p])||(m["selected_"+p]=[]);const at=m["selected_"+p],Fe=at.findIndex(Re=>Re.cardId===me);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({..._e,_role:ze}),Y()})}),e.querySelectorAll(".match-used-hit").forEach(W=>{W.addEventListener("click",()=>H(W.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(W=>{W.addEventListener("click",()=>H())}),(tn=e.querySelector("#pvp-sub-open"))==null||tn.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(W=>{D?W.addEventListener("click",()=>N(W.dataset.gcId,W.dataset.gcType)):(W.style.opacity="0.35",W.style.cursor="default",W.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(nn=e.querySelector("#pvp-boost-card"))==null||nn.addEventListener("click",()=>V()),(on=e.querySelector("#pvp-action"))==null||on.addEventListener("click",W=>{D?W.currentTarget.dataset.pass==="1"||!ct(p)?ue():Te():F&&Ae()}),(rn=e.querySelector("#pvp-quit"))==null||rn.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&I()}),(an=e.querySelector("#pvp-view-opp"))==null||an.addEventListener("click",()=>B()),(sn=e.querySelector("#pvp-toggle-history"))==null||sn.addEventListener("click",()=>R()),k&&(clearInterval(k),k=null),Ue(),(D||F)&&!z){let W=30,me=!1;const ze=()=>document.getElementById("pvp-timer"),_e=()=>{ze()&&(ze().textContent=W+"s",ze().style.color=me?"#ff4444":"#fff")};_e(),k=setInterval(()=>{W--,W<0?me?(clearInterval(k),k=null,Ue(),D&&!ct(p)?ue():I()):(me=!0,W=15,_e(),zn("/sounds/timer-urgent.mp3",.6)):_e()},1e3)}}function pe(){st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${ur(m[u+"Team"],m[u+"Formation"],null,m[u+"Name"]||"Adversaire")}
    </div>`;const w=e.querySelector("svg"),L=w==null?void 0:w.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),w&&(w.removeAttribute("width"),w.removeAttribute("height"),w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",w.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let G=!1;function O(){if(G)return;const w=m[p+"Team"].MIL||[],L=m[u+"Team"].MIL||[],S=xt(w)+bt(w),C=xt(L)+bt(L),T=S>=C;st(e),e.innerHTML=`
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
      ${yi(w,m[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${yi(L,m[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(ae,se)=>e.querySelectorAll(ae).forEach((ge,de)=>{setTimeout(()=>{ge.style.opacity="1",ge.style.transform="translateY(0) scale(1)"},se+de*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ae,se)=>setTimeout(()=>{ae.style.opacity="1"},se*70)),900),setTimeout(()=>{const ae=e.querySelector("#pvp-vs");ae&&(ae.style.opacity="1",ae.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(se=>se.style.opacity="1")},1250);function D(ae,se,ge){const de=document.getElementById(ae);if(!de)return;const ye=performance.now(),be=oe=>{const Ee=Math.min(1,(oe-ye)/ge);de.textContent=Math.round(se*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(be):de.textContent=se};requestAnimationFrame(be)}setTimeout(()=>{D("pvp-score-me",S,800),D("pvp-score-opp",C,800)},1500);const F=m.p1Team.MIL||[],U=m.p2Team.MIL||[],J=xt(F)+bt(F),te=xt(U)+bt(U),ee=J>=te?"p1":"p2";let Q=m.boostValue;Q==null&&(Q=Kn(),m.boostValue=Q,m.boostOwner=ee,m.boostUsed=!1),G=!0,setTimeout(()=>{const ae=e.querySelector("#duel-row-"+(T?"me":"opp")),se=e.querySelector("#duel-row-"+(T?"opp":"me")),ge=document.getElementById("pvp-score-me"),de=document.getElementById("pvp-score-opp"),ye=T?ge:de,be=T?de:ge;ye&&(ye.style.fontSize="80px",ye.style.color=T?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{ae&&(ae.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ae.style.zIndex="5"),setTimeout(()=>{const oe=document.getElementById("duel-shock");oe&&(oe.style.animation="shockwave .5s ease-out forwards"),se&&(se.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const oe=document.getElementById("pvp-duel-finale");if(!oe)return;const Ee=m.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Q+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;oe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+m[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Ne,oe.style.transition="opacity .45s ease",oe.style.opacity="1",oe.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Ve=ee;await j({phase:Ve+"-attack",attacker:Ve,round:1,boostValue:Q,boostUsed:!1,boostOwner:Ve})})},600)},700)},2800)}function $(w,L,S){var se,ge;const C=(m.gcDefs||[]).find(de=>{var ye;return de.name===w||((ye=de.name)==null?void 0:ye.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),T={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",P=(C==null?void 0:C.name)||w,D=(C==null?void 0:C.effect)||((se=je[w])==null?void 0:se.desc)||"",F=C!=null&&C.image_url?`/icons/${C.image_url}`:null,U=((ge=je[w])==null?void 0:ge.icon)||"⚡",te=L===p?"Vous":m[L+"Name"]||"Adversaire",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ee.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${T}66)}50%{filter:drop-shadow(0 0 40px ${T}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${T};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${te} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${tt(P,F,U,D,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ee);let Q=!1;const ae=()=>{Q||(Q=!0,ee.remove(),setTimeout(()=>S&&S(),50))};ee.addEventListener("click",ae),setTimeout(ae,3e3)}function N(w,L){var te,ee,Q,ae;const C=(m["gcCardsFull_"+p]||[]).find(se=>se.id===w),T=C==null?void 0:C._gcDef,P=(T==null?void 0:T.name)||L,D=(T==null?void 0:T.effect)||((te=je[L])==null?void 0:te.desc)||"Carte spéciale.",F=T!=null&&T.image_url?`/icons/${T.image_url}`:null,U=((ee=je[L])==null?void 0:ee.icon)||"⚡",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",J.innerHTML=`
      ${tt(P,F,U,D,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(J),(Q=J.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>J.remove()),(ae=J.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{J.remove(),le(w,L)})}function V(){var C;const w=m[p+"Team"],L=Object.entries(w).flatMap(([T,P])=>(P||[]).filter(D=>!D.used).map(D=>({...D,_line:T})));if(!L.length)return;const S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",S.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(T=>{const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",D=Pe(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${P};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(S),(C=S.querySelector("#bp-close"))==null||C.addEventListener("click",()=>S.remove()),S.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const P=T.dataset.cid,D=L.find(U=>U.cardId===P);if(!D)return;const F=(w[D._line]||[]).find(U=>U.cardId===P);F&&(F.boost=(F.boost||0)+m.boostValue),S.remove(),await j({[p+"Team"]:w,boostUsed:!0})})})}function H(w=null){var ae,se;if(!(m.phase===p+"-attack")){y("Remplacement uniquement avant votre attaque","warning");return}const S=m[p+"Team"],C=m["usedSubIds_"+p]||[],T=m.maxSubs||3;if(C.length>=T){y(`Maximum ${T} remplacements atteint`,"warning");return}const P=Object.entries(S).flatMap(([ge,de])=>(de||[]).filter(ye=>ye.used).map(ye=>({...ye,_line:ge}))),D=(m[p+"Subs"]||[]).filter(ge=>!C.includes(ge.cardId));if(!P.length){y("Aucun joueur utilisé à remplacer","warning");return}if(!D.length){y("Aucun remplaçant disponible","warning");return}let F=Math.max(0,P.findIndex(ge=>ge.cardId===w));const U=((ae=P[F])==null?void 0:ae._line)||((se=P[F])==null?void 0:se.job);let J=Math.max(0,D.findIndex(ge=>ge.job===U)),te=!1;const ee=document.createElement("div");ee.id="pvp-sub-overlay",ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var Ne,Le,Ve,Oe,nt,Ut;const ge=P[F],de=D[J],ye=Math.min(130,Math.round((window.innerWidth-90)/2)),be=Math.round(ye*1.35),oe=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;ee.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${C.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${oe(J===0)}" ${J===0?"disabled":""}>▲</button>
          <div>${de?ht({...de,used:!1,boost:0},ye,be):"<div>—</div>"}</div>
          <button id="pin-down" style="${oe(J>=D.length-1)}" ${J>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${J+1}/${D.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${oe(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${ge?ht({...ge,used:!1,boost:0},ye,be):"<div>—</div>"}</div>
          <button id="pout-down" style="${oe(F>=P.length-1)}" ${F>=P.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${P.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=ee.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>ee.remove()),(Le=ee.querySelector("#pout-up"))==null||Le.addEventListener("click",()=>{F>0&&(F--,Q())}),(Ve=ee.querySelector("#pout-down"))==null||Ve.addEventListener("click",()=>{F<P.length-1&&(F++,Q())}),(Oe=ee.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{J>0&&(J--,Q())}),(nt=ee.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{J<D.length-1&&(J++,Q())});const Ee=(De,Ye,He,pt)=>{const ot=ee.querySelector("#"+De);if(!ot)return;let Mt=0;ot.addEventListener("touchstart",ut=>{Mt=ut.touches[0].clientY},{passive:!0}),ot.addEventListener("touchend",ut=>{const kt=ut.changedTouches[0].clientY-Mt;if(Math.abs(kt)<30)return;const rt=Ye();kt<0&&rt<pt-1?(He(rt+1),Q()):kt>0&&rt>0&&(He(rt-1),Q())},{passive:!0})};Ee("pin-panel",()=>J,De=>J=De,D.length),Ee("pout-panel",()=>F,De=>F=De,P.length),(Ut=ee.querySelector("#psub-confirm"))==null||Ut.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),te)return;te=!0;const Ye=P[F],He=D[J];if(!Ye||!He)return;const pt=Ye._line,ot=(S[pt]||[]).findIndex(kt=>kt.cardId===Ye.cardId);if(ot===-1){y("Erreur : joueur introuvable","error"),ee.remove();return}const Mt={...He,_line:pt,position:Ye.position,used:!1,boost:0};S[pt].splice(ot,1,Mt);const ut=[...C,He.cardId];ee.remove(),re(Ye,He,async()=>{await j({[p+"Team"]:S,[u+"Team"]:m[u+"Team"],["usedSubIds_"+p]:ut})})})}document.body.appendChild(ee),Q()}function re(w,L,S){const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const P=(U,J,te)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${J};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${te}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${C[U.job]||"#555"};border:3px solid ${J};position:relative;overflow:hidden;margin:0 auto">
        ${ri(U)?`<img src="${ri(U)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(U.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${P(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${P(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let D=!1;const F=()=>{D||(D=!0,T.remove(),setTimeout(()=>S(),50))};T.addEventListener("click",F),setTimeout(F,2200)}function B(){var L;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${hi(m[u+"Team"],m[u+"Formation"],null,[],It(),Gt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(L=w.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>w.remove())}function R(){var S;const w=m.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(C=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${C.type==="goal"?"#FFD700":C.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${C.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(S=L.querySelector("#pvp-hist-close"))==null||S.addEventListener("click",()=>L.remove())}async function ue(){if(m.phase!==p+"-attack")return;const w=p==="p1"?"p2":"p1",L=(m.round||0)+1,S=[...m.log||[]];S.push({type:"info",text:`⏭️ ${m[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const C=$e(m),T=ct(w),P=C||!T?"finished":w+"-attack";await j({["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:P,attacker:w,round:L,log:S}),P==="finished"&&await qe(m)}function ce(w){const L=(w.GK||[]).some(C=>!C.used),S=["DEF","MIL","ATT"].some(C=>(w[C]||[]).some(T=>!T.used));return L&&!S}function he(w){return(w.p1Score||0)!==(w.p2Score||0)?null:ce(w.p1Team)&&!ke(w.p2Team)?{side:"p1",gk:(w.p1Team.GK||[]).find(L=>!L.used)}:ce(w.p2Team)&&!ke(w.p1Team)?{side:"p2",gk:(w.p2Team.GK||[]).find(L=>!L.used)}:null}async function Se(){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(w);const L=(S,C)=>new Promise(T=>{w.innerHTML=`<div style="font-size:32px;font-weight:900;color:${C};letter-spacing:2px;animation:lcFade 1.4s ease both">${S}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(T,1400)});await L("⚽ DERNIER CORNER","#FFD700"),await L("🧤 LE GARDIEN MONTE !","#4fc3f7"),w.remove()}async function ve(w,L){const{side:S,gk:C}=w;if(!C)return;const T=S+"Score",P=(L[T]||0)+1;C.used=!0;const D=[...L.log||[]];D.push({type:"duel",isGoal:!0,homeScored:S===p,homePlayers:S==="p1"?[Bt(C)]:[],aiPlayers:S==="p2"?[Bt(C)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[S+"Name"]} marque !`});const F=(L.round||0)+1,U=S==="p1"?"p2":"p1",J={...L,[T]:P},te=$e(J);q.add(F),await Se();const ee=S===p?P:L[p+"Score"]||0,Q=S===p?L[u+"Score"]||0:P;Qe([Bt(C)],ee,Q,S===p,async()=>{await j({[T]:P,log:D,round:F,pendingAttack:null,phase:te?"finished":U+"-attack",attacker:U,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}}}),te&&await qe({...m,[T]:P})})}async function Te(){const w=m[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(P=>(m[u+"Team"][P]||[]).some(D=>!D.used)),S=(m["selected_"+p]||[]).map(P=>{const D=(w[P._role]||[]).find(se=>se.cardId===P.cardId)||P,F=["GK","DEF"].includes(P._role),U=w[P._role]||[],J=U.findIndex(se=>se.cardId===P.cardId),te=yt(U.length),ee=J>=0?te[J]:D._col??1,Q=m.stadiumDef||m.homeStadiumDef||null,ae=D.stadiumBonus||Q&&(Q.club_id&&String(D.club_id)===String(Q.club_id)||Q.country_code&&D.country_code===Q.country_code)||!1;return{...D,_line:P._role,_col:ee,stadiumBonus:ae,...F?{note_a:Math.max(1,Number(D.note_a)||0)}:{}}});if(!S.length)return;const C=ni(S,m.modifiers[p]||{},m[p+"Formation"]);fe(p,S.map(P=>P.cardId)),S.forEach(P=>{const D=(w[P._role]||[]).find(F=>F.cardId===P.cardId);D&&(D.used=!0)}),m["selected_"+p]=[],Y();const T=[...m.log||[]];if(L){if(S.length===1&&(S[0]._line==="GK"||S[0].job==="GK")&&(m.p1Score||0)===(m.p2Score||0)){await ve({side:p,gk:S[0]},{...m,[p+"Team"]:w,log:T});return}const D=(m[p+"Score"]||0)+1,F=S.map(Q=>Bt(Q));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:F,homeTotal:C.total,aiTotal:0});const U=(m.round||0)+1,J=p==="p1"?"p2":"p1",te={...m,[p+"Team"]:w,[p+"Score"]:D},ee=$e(te);q.add(U),Qe(F,D,m[u+"Score"]||0,!0,async()=>{await j({[p+"Team"]:w,[p+"Score"]:D,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ee?"finished":J+"-attack",attacker:J,round:U,log:T}),ee&&await qe({...m,[p+"Score"]:D})});return}T.push({type:"pending",text:`⚔️ ${m[p+"Name"]} attaque (${C.total})`}),await j({[p+"Team"]:w,[u+"Team"]:m[u+"Team"],pendingAttack:{...C,players:S,side:p},["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},phase:u+"-defense",log:T})}async function Ae(){const w=m[p+"Team"],L=(m["selected_"+p]||[]).map(de=>{const ye=(w[de._role]||[]).find(Le=>Le.cardId===de.cardId)||de,be=w[de._role]||[],oe=be.findIndex(Le=>Le.cardId===de.cardId),Ee=yt(be.length),Ne=oe>=0?Ee[oe]:ye._col??1;return{...ye,_line:de._role,_col:Ne}}),S=oi(L,m.modifiers[p]||{},m[p+"Formation"]);fe(p,L.map(de=>de.cardId)),L.forEach(de=>{const ye=(w[de._role]||[]).find(be=>be.cardId===de.cardId);ye&&(ye.used=!0)}),m["selected_"+p]=[],Y();const C=Wi(m.pendingAttack.total,S.total,m.modifiers[p]||{}),T=m.pendingAttack.side,P=C==="attack"||(C==null?void 0:C.goal),D=T==="p1"?"p2":"p1",F=(m.round||0)+1,U=(m.pendingAttack.players||[]).map(de=>Bt(de)),J=[...m.log||[]];J.push({type:"duel",isGoal:P,homeScored:P&&T===p,text:P?`⚽ BUT de ${m[T+"Name"]} ! (${m.pendingAttack.total} vs ${S.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${S.total})`,homePlayers:U,aiPlayers:L.map(de=>Bt(de)),homeTotal:m.pendingAttack.total,aiTotal:S.total});const te=P?(m[T+"Score"]||0)+1:m[T+"Score"]||0,ee={...m,[p+"Team"]:w,[T+"Score"]:te},Q=$e(ee),ae=Q?"finished":D+"-attack",se=!Q&&!P?he(ee):null,ge=async()=>{if(se){await ve(se,ee);return}await j({[p+"Team"]:w,[u+"Team"]:m[u+"Team"],[T+"Score"]:te,["selected_"+p]:[],modifiers:{...m.modifiers,[p]:{}},pendingAttack:null,phase:ae,attacker:D,round:F,log:J}),(ae==="finished"||Q)&&await qe({...m,[T+"Score"]:te})};if(P){const de=T===p,ye=de?te:m[p+"Score"]||0,be=de?m[u+"Score"]||0:te;q.add(F),Qe(U,ye,be,de,ge)}else await ge()}function Be(w){return["MIL","ATT"].some(L=>(w[L]||[]).some(S=>!S.used))}function ke(w){return["GK","DEF","MIL","ATT"].some(L=>(w[L]||[]).some(S=>!S.used))}function wt(w){return ke(w)&&!Be(w)}function ct(w){const L=m[w+"Team"],S=m[(w==="p1"?"p2":"p1")+"Team"];return!!(Be(L)||wt(L)&&!ke(S)||wt(L)&&!Be(S)&&ke(S))}function $e(w){return!ke(w.p1Team)&&!ke(w.p2Team)}function Ce(w){const L=w.p1Score||0,S=w.p2Score||0;return L===S?null:L>S?v.home_id:v.away_id}async function qe(w){Pt(),Ue();try{const L=Ce(w),S=L?v.home_id===L?v.away_id:v.home_id:null,C=w.p1Score||0,T=w.p2Score||0,{data:P,error:D}=await h.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:C,p_away_score:T,p_forfeit:!1});if(D&&console.error("[PvP] finish_pvp_match:",D),l)try{await h.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(F){console.error("[PvP] check_and_finish_mini_league:",F)}L&&S&&Mo(L,S).catch(()=>{});try{const{data:F}=await h.rpc("apply_match_rewards",{p_match_id:i});F!=null&&F.success&&!(F!=null&&F.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(F){console.error("[PvP] apply_match_rewards:",F)}if(typeof c=="function")try{await c({homeScore:C,awayScore:T,winnerId:L,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(F){console.error("[PvP] onMatchEnd:",F)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Ge(){var T;const w=m[p+"Score"],L=m[u+"Score"],S=w>L,C=w===L;st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${S?"🏆":C?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${S?"Victoire !":C?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{h.removeChannel(Z)}catch{}it(e),l?g("mini-league",{openLeagueId:l}):g("home")})}Y()}async function Pi(e,t,i=!1){var s,d;const{state:n,navigate:r,toast:o}=t,a=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await _i(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:f,subsRaw:x,gcCardsEnriched:g,gcDefs:y,stadiumDef:p})=>{st(e);const u=async b=>{await Mr(e,t,c,l,f,x,b||[],y,p,i,a)};if(!(g!=null&&g.length)){await u([]);return}vi(e,g,u)})}async function zr(e,t,i){return Ar(e,t,i)}async function Mr(e,t,i,n,r,o,a=[],s=[],d=null,c=!1,l=null){var ne,Z;const{state:f,navigate:x,toast:g}=t,y=(l==null?void 0:l.mmr)??((ne=f.profile)==null?void 0:ne.mmr)??1e3,p=c?Hi(y):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let _=!1,v=null,E=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(y)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const m=async()=>{_=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await h.rpc("cancel_matchmaking",{p_user_id:f.profile.id})}catch(j){console.error("[Matchmaking] cancel error:",j)}};(Z=document.getElementById("cancel-mm"))==null||Z.addEventListener("click",async()=>{await m(),it(e),x("home")});const z=async(j,I)=>{_||(_=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null),await zt(e,t,j,I,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?Cr:null}))},k=f.user.id,{data:A,error:q}=c?await h.rpc("try_matchmake_ranked",{p_user_id:k,p_deck_id:i,p_mmr:y}):await h.rpc("try_matchmake",{p_user_id:k,p_deck_id:i});if(q||!(A!=null&&A.success)){console.error("[Matchmaking] try_matchmake error:",q||A),g("Erreur de matchmaking","error"),it(e),x("home");return}if(A.matched){await z(A.match_id,!1);return}const ie=async()=>{if(_)return;const{data:j}=await h.from("matchmaking_queue").select("status, match_id").eq("user_id",k).maybeSingle();(j==null?void 0:j.status)==="matched"&&j.match_id&&await z(j.match_id,!0)};v=h.channel(`mm_${k}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${k}`},j=>{const I=j.new;I.status==="matched"&&I.match_id&&z(I.match_id,!0)}).subscribe(),E=setInterval(ie,3e3),setTimeout(()=>{_||m()},12e4)}async function Cr(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,f=o===l,x=r===l,{data:g}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:y}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",f?a:o).single();if(g&&y){const p=ao(g.mmr,g.mmr_rd,g.mmr_v,y.mmr,y.mmr_rd,x?1:0);await h.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:x?h.sql`mmr_wins + 1`:void 0,mmr_losses:x?void 0:h.sql`mmr_losses + 1`}).eq("id",l),n(x?`+MMR ↑ ${Math.round(p.mmr-g.mmr)}`:`-MMR ↓ ${Math.round(g.mmr-p.mmr)}`,x?"success":"error",4e3)}}const jr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Pi,resumePvpMatch:zr},Symbol.toStringTag,{value:"Module"}));async function Br(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",d=!!o.isAccepting;await _i(e,t,"friend",async({deckId:c,formation:l,starters:f,subsRaw:x,gcCardsEnriched:g,gcDefs:y,stadiumDef:p})=>{st(e);const u=async b=>{const _=b||[];d?await Dr(e,t,c,_,y,p):await qr(e,t,c,_,y,p,a,s)};if(!(g!=null&&g.length)){await u([]);return}vi(e,g,u)})}async function qr(e,t,i,n,r,o,a,s){var _;const{state:d,navigate:c,toast:l}=t,f=d.user.id,{data:x,error:g}=await h.from("friend_match_invites").insert({inviter_id:f,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(g||!x){console.error("[Friend] Erreur création invitation:",g),l("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let y=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(_=document.getElementById("cancel-friend"))==null||_.addEventListener("click",async()=>{await u(),await h.from("friend_match_invites").update({status:"declined"}).eq("id",x.id),it(e),c("home")}),p=h.channel(`friend_invite_${x.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${x.id}`},async({new:v})=>{y||v.status!=="accepted"||!v.match_id||(y=!0,await u(),await zt(e,t,v.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(y)return;const{data:v}=await h.from("friend_match_invites").select("status, match_id").eq("id",x.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(y=!0,clearInterval(b),await u(),await zt(e,t,v.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{y||(clearInterval(b),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function Dr(e,t,i,n,r,o){const{state:a,navigate:s,toast:d}=t,c=a.user.id,{data:l}=await h.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:f,error:x}=await h.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(x||!(f!=null&&f.success)){console.error("[Friend] Erreur accept_friend_invite:",x||f),d((f==null?void 0:f.error)||"Impossible de rejoindre le match","error"),s("home");return}await zt(e,t,f.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const Qn="#1A6B3C",dt="#D4A017",Xt="var(--tile-bg)",Jt="var(--tile-border)",Lt="var(--divider)",Xe="var(--tile-fg-on-page)",Et="var(--tile-fg-dim)",Ze="var(--tile-fg-faint)",Zt="var(--nav-fg,#fff)",Zn="rgba(255,255,255,0.62)",Fr="rgba(255,255,255,0.4)";async function Pr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await lt(e,t,i);return}await et(e,t)}async function et(e,t,i="waiting"){var v,E;const{state:n}=t,r=n.profile.id,{data:o}=await h.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(m=>m.league_id),s={};(o||[]).forEach(m=>{s[m.league_id]={amount:m.prize_amount,claimed:m.prize_claimed}});const{data:d,error:c}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],x=(a.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],g=x.filter(m=>m.status==="waiting"&&!m.is_archived),y=x.filter(m=>m.status==="active"&&!m.is_archived),p=x.filter(m=>m.is_archived||m.status==="finished");let u=p;if(p.length){const{data:m}=await h.from("mini_league_matches").select("league_id").in("league_id",p.map(k=>k.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),z=new Set((m||[]).map(k=>k.league_id));u=p.filter(k=>z.has(k.id))}const b=l.filter(m=>!a.includes(m.id)),_=[{key:"waiting",label:"🟡 En attente",count:g.length+b.length},{key:"active",label:"🟢 En cours",count:y.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${Zt}">🏆 Mini League</div>
        <div style="font-size:12px;color:${Zn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${Zt}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt}">
      ${_.map(m=>`<button class="ml-tab" data-tab="${m.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===m.key?Qn:"transparent"};background:none;font-size:12px;font-weight:${i===m.key?"900":"600"};color:${i===m.key?"#4ade80":Fr};cursor:pointer">${m.label}${m.count?` (${m.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Gr(g,b,r):i==="active"?Nr(y,r):Rr(u,r,s)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>Or(e,t)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>et(e,t,i)),e.querySelectorAll(".ml-tab").forEach(m=>m.addEventListener("click",()=>et(e,t,m.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(m=>m.addEventListener("click",()=>lt(e,t,m.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",z=>{z.stopPropagation(),eo(e,t,m.dataset.join,m.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(m=>m.addEventListener("click",z=>{z.stopPropagation(),Gi(e,t,m.dataset.delete,m.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(m=>m.addEventListener("click",async z=>{z.stopPropagation(),m.disabled=!0,m.textContent="...";const{data:k,error:A}=await h.rpc("claim_mini_league_prize",{p_league_id:m.dataset.claimLeague,p_user_id:n.profile.id});if(A||!(k!=null&&k.success)){t.toast((k==null?void 0:k.error)||"Erreur lors de la récupération","error"),et(e,t,i);return}if(!k.already_claimed){n.profile.credits=(n.profile.credits||0)+k.prize;const q=document.getElementById("nav-credits");q&&(q.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${k.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}et(e,t,i)}))}function bi(e,t,i=!1,n=null){var d,c;const r=e.creator_id===t,o=e.pot||0,a=((c=(d=e.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Xt};border:1px solid ${s?"rgba(212,160,23,0.5)":Jt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px;color:${Xe}">${e.name}</div>
      ${r?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#ff6b6b;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:${Et};margin-bottom:${i||s?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${o>0?`<span style="color:${dt};font-weight:700">🏆 ${o.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
    ${s?`<button data-claim-league="${e.id}" class="btn btn-sm" style="width:100%;background:${dt};color:#141000;font-weight:900;border:none">💰 Récupérer ${n.amount.toLocaleString("fr")} cr.</button>`:""}
  </div>`}function Gr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>bi(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>bi(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ze}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Nr(e,t){return e.length?e.map(i=>bi(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league en cours.</div>`}function Rr(e,t,i={}){return e.length?e.map(n=>bi(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league archivée.</div>`}function Or(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var y,p,u,b;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((y=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:y.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:b.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:f}=await h.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:o,entry_fee:a}).select().single();if(f){n("Erreur : "+f.message,"error");return}const{data:x}=await h.from("users").select("credits").eq("id",t.state.profile.id).single();if(((x==null?void 0:x.credits)||0)<a){await h.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:x.credits-a}).eq("id",t.state.profile.id),await h.from("mini_leagues").update({pot:a}).eq("id",l.id),await h.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=x.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),lt(e,t,l.id)})}function Hr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function eo(e,t,i,n){var f;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await Hr(),s===null))return;const{data:d,error:c}=await h.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),r((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:x}=await h.from("users").select("credits").eq("id",a).single();o.profile&&x&&(o.profile.credits=x.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((f=o.profile)==null?void 0:f.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),lt(e,t,i)}async function Ur(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(x=>{const g=document.createElement("div");g.className="modal-overlay",g.style.zIndex="2100",g.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),g.querySelector("#lv-ok").onclick=()=>{g.remove(),x(!0)},g.querySelector("#lv-cancel").onclick=()=>{g.remove(),x(!1)}}))return;const{data:d,error:c}=await h.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(d!=null&&d.success)){r((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+l);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),et(e,t,"waiting")}async function Gi(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await h.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),et(e,t,r)}async function Kr(e,t,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),et(e,t,"archived")}async function lt(e,t,i){var E,m,z,k,A,q,ie,ne,Z;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await et(e,t);return}const c=(s||[]).some(j=>j.user_id===o),l=a.creator_id===o,f=(s||[]).map(j=>j.user).filter(Boolean),x=Jr(f,d||[]),g=(d||[]).filter(j=>j.matchday===a.current_day),y=a.pot||0,p=a.entry_fee||100,u=g.length>0&&g.every(j=>j.status==="finished"||j.status==="bye"),b=a.current_day>=a.total_days,_=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${Zt}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${Zt};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${Zt}">${a.name}</div>
        <div style="font-size:11px;color:${Zn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${y>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${y.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Xt};border:1px solid ${Jt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${f.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Et};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*f.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*f.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*f.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*f.length*.1).toLocaleString("fr")})</div>
        ${f.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Lt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Qn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:${Ze}">@${j.pseudo}</div></div>
            ${j.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${f.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#ff6b6b;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:${Xt};border:1px solid ${Jt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(j=>wn(j,f,o,c)).join("")}
        ${l&&u&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&x.length?`
      <div style="background:${Xt};border:1px solid ${Jt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ze};text-transform:uppercase;border-bottom:2px solid ${Lt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${y>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${x.map((j,I)=>{const K=y>0&&a.status==="finished"?I===0?Math.floor(y*.7):I===1?Math.floor(y*.2):I===2?Math.floor(y*.1):0:0;return`<tr style="border-bottom:1px solid ${Lt};${j.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${I===0?dt:I<3?"#4ade80":Et}">${["🥇","🥈","🥉"][I]||I+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${j.clubName}</div><div style="font-size:10px;color:${Ze}">@${j.pseudo}</div></td>
              <td style="text-align:center;color:${Et}">${j.played}</td><td style="text-align:center;color:${Et}">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?"#4ade80":"#ff6b6b"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${j.points}</td>
              ${y>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${K?K.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Xt};border:1px solid ${Jt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(j,I)=>I+1).reverse().map(j=>{const I=(d||[]).filter(K=>K.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ze};margin-bottom:6px">Journée ${j}</div>${I.map(K=>wn(K,f,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Et}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>et(e,t,v)),(m=document.getElementById("ml-refresh"))==null||m.addEventListener("click",async j=>{const I=j.currentTarget;I.style.opacity="0.5",await lt(e,t,i)}),(z=document.getElementById("ml-start-btn"))==null||z.addEventListener("click",()=>Vr(e,t,a,f)),(k=document.getElementById("ml-next-day"))==null||k.addEventListener("click",()=>Yr(e,t,i)),(A=document.getElementById("ml-join-now"))==null||A.addEventListener("click",()=>eo(e,t,i,a.type)),(q=document.getElementById("ml-leave-btn"))==null||q.addEventListener("click",()=>Ur(e,t,i,p)),(ie=document.getElementById("ml-delete-btn"))==null||ie.addEventListener("click",()=>Gi(e,t,i,a.name,"waiting")),(ne=document.getElementById("ml-delete-now"))==null||ne.addEventListener("click",()=>Gi(e,t,i,a.name,v)),(Z=document.getElementById("ml-archive-btn"))==null||Z.addEventListener("click",()=>Kr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const I=g.find(K=>K.id===j.dataset.playMatch);I&&t.navigate("match-mini-league",{mlMatchId:I.id,leagueId:i})})}),a.status==="finished"&&_){const j=x.findIndex(I=>I.userId===o);j>=0&&j<3&&_.prize_amount>0&&!_.prize_claimed&&setTimeout(()=>Wr(e,t,a,_,j),400)}}function wn(e,t,i,n,r=!1){const o=f=>t.find(x=>x.id===f);if(e.is_bye){const f=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Et};text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!r,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":Lt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ze}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Vr(e,t,i,n){const{toast:r,state:o}=t,a=Xr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,l)=>c.forEach(f=>s.push({league_id:i.id,matchday:l+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:d}=await h.from("mini_league_matches").insert(s);if(d){r("Erreur calendrier : "+d.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),lt(e,t,i.id)}async function Yr(e,t,i){const{data:n}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){lt(e,t,i);return}await h.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),lt(e,t,i)}async function Wr(e,t,i,n,r){var x,g;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,l=n.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
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
    </div>`,document.body.appendChild(f),(x=f.querySelector("#prize-close"))==null||x.addEventListener("click",()=>f.remove()),(g=f.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async y=>{const p=y.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:b}=await h.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(b||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",b||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const _=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=_);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${_.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}f.remove(),lt(e,t,i.id)})}function Xr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const d=[],c=[n[0],...o];for(let l=0;l<r/2;l++){const f=c[l],x=c[r-1-l];f===null?d.push({bye:x}):x===null?d.push({bye:f}):d.push({home:f,away:x})}a.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function Jr(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function kn(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,d=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:l}=await h.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==d&&c.away_id!==d){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const f=c.home_id===d;if(c.match_id){await zt(e,t,c.match_id,f,{mlLeagueId:a,mlMatchId:s});return}await _i(e,t,"mini_league",async({deckId:x,gcCardsEnriched:g,gcDefs:y,stadiumDef:p})=>{st(e);const u=async b=>{const{data:_,error:v}=await h.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:x});if(v||!(_!=null&&_.success)){console.error("[MiniLeague] start_mini_league_match error:",v||_),r((_==null?void 0:_.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(_.matched){await zt(e,t,_.match_id,f,{mlLeagueId:a,mlMatchId:s,myGC:b||[],gcDefs:y,stadiumDef:p});return}await Qr(e,t,{mlMatchId:s,leagueId:a,amIHome:f,chosenGC:b,gcDefs:y,stadiumDef:p})};if(!(g!=null&&g.length)){await u([]);return}vi(e,g,u)})}function Qr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const f=async u=>{if(!l){if(l=!0,clearInterval(y),g)try{g.unsubscribe()}catch{}u&&await zt(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(y),g)try{g.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),d()});const x=async()=>{if(l)return;const{data:u}=await h.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&f(u.match_id)},g=h.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var b;(b=u.new)!=null&&b.match_id&&f(u.new.match_id)}).subscribe(),y=setInterval(x,3e3);x()})}const Zr="/",ea=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ta(e,t,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var l,f,x;const s=t[n],d=n===t.length-1,c=Math.round((n+1)/t.length*100);r.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${Zr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,o()}),(f=r.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{d?a():(n++,o())}),(x=r.querySelector("#tuto-skip"))==null||x.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await h.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function ia(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await h.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ea;ta(e,a,()=>t("boosters"))}const pi={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function qt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function na(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Zi(e,t)}async function Zi(e,t){const{state:i,toast:n}=t,{data:r}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await h.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let d="buy";const c=()=>{var p,u,b,_,v,E,m;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((_=document.getElementById("flt-job"))==null?void 0:_.value)||"",rarity:((v=document.getElementById("flt-rarity"))==null?void 0:v.value)||"",note1:parseInt((E=document.getElementById("flt-note1"))==null?void 0:E.value)||0,note2:parseInt((m=document.getElementById("flt-note2"))==null?void 0:m.value)||0}};function l(p){const u=c();return p.filter(b=>{var q,ie,ne;const _=(q=b.card)==null?void 0:q.player;if(!_)return!1;const v=`${_.firstname} ${_.surname_real}`.toLowerCase(),E=(((ie=_.clubs)==null?void 0:ie.encoded_name)||"").toLowerCase(),m=(_.country_code||"").toLowerCase(),z=((ne=b.card)==null?void 0:ne.evolution_bonus)||0,k=qt(_,_.job,z),A=_.job2?qt(_,_.job2,z):0;return!(u.name&&!v.includes(u.name)||u.club&&!E.includes(u.club)||u.country&&!m.includes(u.country)||u.job&&_.job!==u.job||u.rarity&&_.rarity!==u.rarity||u.note1&&k<u.note1||u.note2&&A<u.note2)})}function f(p){var A,q,ie,ne;const u=(A=p.card)==null?void 0:A.player;if(!u)return"";const b=((q=p.card)==null?void 0:q.evolution_bonus)||0,_=qt(u,u.job,b),v=u.job2?qt(u,u.job2,b):0,E=(i.profile.credits||0)>=p.price,m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,z=pi[u.job]||"#bbb",k=u.job2?pi[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ie=u.clubs)!=null&&ie.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${z};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${z};font-family:Arial Black,Arial">${_}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${v}</span>
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
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${E?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${E?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function x(p){var A,q,ie,ne;const u=(A=p.card)==null?void 0:A.player;if(!u)return"";const b=((q=p.card)==null?void 0:q.evolution_bonus)||0,_=qt(u,u.job,b),v=u.job2?qt(u,u.job2,b):0,E=p.status==="sold",m=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,z=pi[u.job]||"#bbb",k=u.job2?pi[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${E?"opacity:0.7":""}">
      ${m?`<img src="${m}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ie=u.clubs)!=null&&ie.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${z};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${z};font-family:Arial Black,Arial">${_}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${v}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${E?"#22c55e":"#999"};margin-top:1px">
          ${E?`✅ Vendu à ${((ne=p.buyer)==null?void 0:ne.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${E?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const b=l(a);p.innerHTML=b.length?b.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(v=>v.status==="active").sort((v,E)=>new Date(E.listed_at)-new Date(v.listed_at)),_=s.filter(v=>v.status==="sold").sort((v,E)=>new Date(E.sold_at||E.listed_at)-new Date(v.sold_at||v.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(x).join(""):"")+(_.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${_.length})</div>`+_.map(x).join(""):"")+(!b.length&&!_.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>oa(b.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>aa(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const b=u===p;u.style.background=b?"var(--green)":"var(--tile-bg)",u.style.color=b?"#fff":"var(--tile-fg-dim)",u.style.borderColor=b?"var(--green)":"var(--tile-border)"}),g()})});let y;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(y),y=setTimeout(g,250)})}),g()}async function oa(e,t,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=t.find(l=>l.id===e);if(!s)return;const d=s.price;if((r.profile.credits||0)<d){o("Crédits insuffisants","error");return}ra(s,async()=>{const{error:l}=await h.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:r.profile.id});if(l){o("Erreur achat : "+l.message,"error");return}await a();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await Zi(i,n)})}function ra(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function aa(e,t,i){const{toast:n}=i,{data:r}=await h.from("market_listings").select("card_id").eq("id",e).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),Zi(t,i)}async function sa(e,t){var g,y,p,u,b;const{state:i,navigate:n}=t,r=((y=(g=t==null?void 0:t.state)==null?void 0:g.params)==null?void 0:y.tab)||"ranked";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:o},{data:a},{data:s}]=await Promise.all([h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),h.rpc("get_mini_league_leaderboard"),h.rpc("get_random_leaderboard")]);let d=r;const c=_=>_<3?["#D4A017","#a0a0a0","#cd7f32"][_]:"var(--green)",l=_=>_<3?"#000":"#fff";function f(){var E,m,z;const _=document.getElementById("rankings-legend");_&&(_.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(d==="ranked"){const k=o||[];v.innerHTML=k.length>0?k.map((A,q)=>{const ie=Hi(A.mmr??1e3),ne=(A.ranked_wins||0)+(A.ranked_losses||0)+(A.ranked_draws||0),Z=ne>0?Math.round((A.ranked_wins||0)/ne*100):0,j=A.id===i.profile.id,I=(A.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${j?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${q<3?["#D4A017","#a0a0a0","#cd7f32"][q]:"rgba(255,255,255,0.08)"};color:${q<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${ie.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name} · ${ie.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${I?"❓":ie.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${ie.color}">${I?"Placement":ie.label}</div>
              ${I?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${Z}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const k=a||[];v.innerHTML=k.length>0?k.map((A,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${A.top1} 🥈${A.top2} 🥉${A.top3}</div>
            <div style="color:var(--tile-fg-dim)">${A.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const k=s||[];v.innerHTML=k.length>0?k.map((A,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${A.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${A.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${A.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${A.wins}/${A.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${A.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=x(d==="ranked")),(m=document.getElementById("tab-mini-league"))!=null&&m.style&&(document.getElementById("tab-mini-league").style.cssText=x(d==="mini-league")),(z=document.getElementById("tab-random"))!=null&&z.style&&(document.getElementById("tab-random").style.cssText=x(d==="random"))}}const x=_=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${x(d==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${x(d==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${x(d==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,f(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",f()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",f()}),(b=document.getElementById("tab-random"))==null||b.addEventListener("click",()=>{d="random",f()})}async function da(e,t){var z,k,A,q;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(z=document.getElementById("ranked-back"))==null||z.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,f=s.placement_matches??0,x=f<10,g=Math.max(0,10-f),y=Hi(d),p=so(d),u=Ei.findIndex(ie=>ie.id===y.id),b=Ei[u+1]||null,_={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},v=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),E=v>0?Math.round((s.ranked_wins||0)/v*100):0,m=Ei.map(ie=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${y.id===ie.id?1:.35};
      transform:${y.id===ie.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${y.id===ie.id?"28px":"20px"}">${ie.emoji}</div>
      <div style="font-size:9px;color:${ie.color};font-weight:${y.id===ie.id?"900":"400"};letter-spacing:0.5px">${ie.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${_[y.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${y.color}40">
      <div style="font-size:52px;margin-bottom:4px">${y.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${y.color};letter-spacing:3px;text-transform:uppercase">${y.label}</div>
    </div>

    <!-- Progression bar -->
    ${y.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${y.emoji} ${y.label}</span>
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${y.color},${y.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${b?b.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${m}
    </div>

    <!-- Placement / Stats -->
    ${x?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${f}/10</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${E}%</div>
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
        background:linear-gradient(135deg,${y.color},${y.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${y.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(k=document.getElementById("ranked-back"))==null||k.addEventListener("click",()=>n("home")),(A=document.getElementById("ranked-leaderboard-btn"))==null||A.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(q=document.getElementById("ranked-play-btn"))==null||q.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:x}})})}async function la(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(l=>l.status==="finished"),d=(o||[]).filter(l=>l.status==="in_progress");function c(l){const f=l.home_id===r.id;f?l.home_score:l.away_score,f?l.away_score:l.home_score;const x=l.winner_id===r.id,g=l.home_score===l.away_score&&l.status==="finished",y=l.status!=="finished"?"…":g?"N":x?"V":"D",p=l.status!=="finished"||g?"#888":x?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const _=l.home_id===r.id?l.away:l.home;let v;l.away_id===null?v=u:_?v=`${_.club_name||_.pseudo} (${_.pseudo})`:v="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const m=new Date(l.created_at),z=m.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+m.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${z}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${y}</span>
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
  </div>`}lo(po);const xe={user:null,profile:null,page:"home",params:{}};function Dt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function ca(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ni(){document.getElementById("modal-overlay").classList.add("hidden")}async function Qt(){if(!xe.user)return;const{data:e}=await h.from("users").select("*").eq("id",xe.user.id).single();e&&(xe.profile=e)}const to="mw_theme";function io(){return localStorage.getItem(to)||"dark"}function pa(e){var t;localStorage.setItem(to,e),ua(e),(t=xe.profile)!=null&&t.id&&h.from("users").update({theme:e}).eq("id",xe.profile.id).then(()=>{})}function ua(e){document.documentElement.setAttribute("data-theme",e)}function Ft(e,t={}){xe.page=e,xe.params=t,no()}async function no(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===xe.page)});const t=document.getElementById("nav-credits");t&&xe.profile&&(t.textContent=`💰 ${(xe.profile.credits||0).toLocaleString("fr")}`);const i={state:xe,navigate:Ft,toast:Dt,openModal:ca,closeModal:Ni,refreshProfile:Qt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',xe.page){case"home":await un(e,i);break;case"settings":await jn(e,i);break;case"collection":await Go(e,i);break;case"decks":await Ci(e,i);break;case"boosters":await Zo(e,i);break;case"ranked":await da(e,i);break;case"match":{const s=xe.params&&xe.params.matchMode||"vs_ai_easy";s==="random"?await Pi(e,i,!1):s==="ranked"?await Pi(e,i,!0):s==="friend"?await Br(e,i,(n=xe.params)==null?void 0:n.friendId,(r=xe.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await kn(e,i,(o=xe.params)==null?void 0:o.mlMatchId,(a=xe.params)==null?void 0:a.leagueId):await mr(e,i);break}case"market":await na(e,i);break;case"rankings":await sa(e,i);break;case"matches":await la(e,i);break;case"friends":await bo(e,i);break;case"mini-league":await Pr(e,i);break;case"match-mini-league":{const s=xe.params||{};await kn(e,i,s.mlMatchId,s.leagueId);break}default:await un(e,i)}}function fa(){var n,r;const e=document.getElementById("app"),t=xe.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.21-1736" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Ft(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>ma()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Ft("settings"))}async function ma(){const{data:e}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function ga(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function ya(){document.documentElement.setAttribute("data-theme",io()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ni()}),document.getElementById("modal-close").addEventListener("click",Ni);const{data:{session:e}}=await h.auth.getSession();if(!e){$n(),ga(document.getElementById("app"),{onPlay:()=>dn(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Dt})});return}xe.user=e.user,await Qt(),$n();try{const{data:i}=await h.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),co(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!xe.profile){fo(document.getElementById("app"),{state:xe,navigate:async()=>{await Qt(),Ai()},toast:Dt,refreshProfile:Qt});return}const t=Array.isArray(xe.profile.pending_boosters)?xe.profile.pending_boosters:[];if(!xe.profile.onboarding_done&&t.length>0){sr(document.getElementById("app"),{state:xe,navigate:()=>Ai(),toast:Dt,refreshProfile:Qt});return}Ai(),setTimeout(()=>ia(xe.profile,Ft,Dt),800),h.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(xe.user=null,xe.profile=null,document.getElementById("app").innerHTML="",dn(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Dt}))})}function xa(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function wi(){const e=document.getElementById("app");e&&(e.style.height=xa()+"px")}window.addEventListener("resize",wi);window.addEventListener("orientationchange",()=>setTimeout(wi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",wi);function Ai(){const e=()=>{var i;(i=xe.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",xe.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",wi(),fa(),no()}function $n(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function oo(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}ya().catch(e=>{console.error("Échec du démarrage:",e),oo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&oo("Le serveur met trop de temps à répondre.")},12e3);
