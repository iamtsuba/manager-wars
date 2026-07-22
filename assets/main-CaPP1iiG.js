const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/special-cards-DZxbxWIu.js","assets/special-cards-C5_OzvLA.css"])))=>i.map(i=>d[i]);
import{s as _,q as Ut,t as Ri,F as Oi,o as tt,n as ti,g as At,r as Te,m as zt,u as zi,j as Hi,v as ao,w as so,T as Li,p as lo,x as co,d as po}from"./special-cards-DZxbxWIu.js";const uo="/";function ln(e,{navigate:t,toast:i}){let n="login";const r=()=>{var a,s,d,c,l,m,b;const o=n==="login";if(e.innerHTML=`
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
            <div>
              <label style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);display:block;margin-bottom:6px;letter-spacing:.5px">CODE D'ACCÈS</label>
              <input type="password" id="reg-access-code" placeholder="Code fourni par l'administrateur" autocomplete="off" style="
                width:100%;box-sizing:border-box;padding:12px 14px;
                background:rgba(255,255,255,0.06);border:1.5px solid rgba(255,255,255,0.12);
                border-radius:10px;font-size:15px;color:#fff;outline:none;
              " onfocus="this.style.borderColor='#22c55e'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'"
              >
              <div id="access-code-status" style="font-size:11px;margin-top:5px;min-height:14px"></div>
            </div>
            <div id="reg-error" style="font-size:12px;color:#f87171;min-height:16px;text-align:center"></div>
            <button id="reg-btn" disabled style="
              width:100%;padding:14px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#1A6B3C,#22c55e);
              color:#fff;font-size:15px;font-weight:900;cursor:not-allowed;
              box-shadow:0 4px 16px rgba(34,197,94,0.3);
              opacity:0.45;transition:opacity .2s;
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{n="login",r()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",r()}),o)(d=document.getElementById("login-password"))==null||d.addEventListener("keydown",y=>{var g;y.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const y=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,p=document.getElementById("login-error");if(p.textContent="",!y||!g){p.textContent="Remplissez tous les champs.";return}const u=document.getElementById("login-btn");u.textContent="⏳ Connexion…",u.disabled=!0;const{error:x}=await _.auth.signInWithPassword({email:y,password:g});if(u.textContent="⚽ Se connecter",u.disabled=!1,x){p.textContent=x.message.includes("Invalid")?"Email ou mot de passe incorrect.":x.message;return}window.location.reload()});else{(l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",p=>{var u;p.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())});let y=null,g=!1;(m=document.getElementById("reg-access-code"))==null||m.addEventListener("input",p=>{const u=p.target.value,x=document.getElementById("access-code-status"),h=document.getElementById("reg-btn");if(clearTimeout(y),g=!1,h&&(h.disabled=!0,h.style.opacity="0.45",h.style.cursor="not-allowed"),!u){x&&(x.textContent="");return}x&&(x.textContent="⏳ Vérification…",x.style.color="rgba(255,255,255,0.4)"),y=setTimeout(async()=>{const{data:v,error:E}=await _.rpc("check_signup_password",{input_password:u});if(E){x&&(x.textContent="Erreur de vérification.",x.style.color="#f87171");return}g=!!v,x&&(x.textContent=g?"✅ Code valide":"❌ Code incorrect",x.style.color=g?"#4ade80":"#f87171"),h&&(h.disabled=!g,h.style.opacity=g?"1":"0.45",h.style.cursor=g?"pointer":"not-allowed")},400)}),(b=document.getElementById("reg-btn"))==null||b.addEventListener("click",async()=>{var k;const p=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,x=document.getElementById("reg-confirm").value,h=((k=document.getElementById("reg-access-code"))==null?void 0:k.value)||"",v=document.getElementById("reg-error");if(v.textContent="",!p||!u||!x){v.textContent="Remplissez tous les champs.";return}if(u.length<6){v.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==x){v.textContent="Les mots de passe ne correspondent pas.";return}const{data:E}=await _.rpc("check_signup_password",{input_password:h});if(!E){v.textContent="Code d'accès incorrect.";return}const f=document.getElementById("reg-btn");f.textContent="⏳ Création…",f.disabled=!0;const{error:z}=await _.auth.signUp({email:p,password:u});if(f.textContent="🚀 Créer mon compte",f.disabled=!1,z){v.textContent=z.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",r(),setTimeout(()=>{const S=document.getElementById("login-email");S&&(S.value=p)},50)})}};r()}function fo(e,{state:t,navigate:i,toast:n,refreshProfile:r}){let o="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),m=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",b=m.trim().split(" ").filter(Boolean),y=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();c&&(c.style.background=a,c.style.borderColor=o),l&&(l.textContent=y,l.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{a=c.target.value,document.getElementById("swatch2").style.background=a,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await _.from("users").select("id").eq("pseudo",c).maybeSingle();if(m){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await _.from("users").select("id").eq("club_name",c).maybeSingle();if(m){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:y}=await _.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:o,club_color2:a,credits:1e4});if(y)throw y;await mo(t.user.id),await r(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){m.textContent=y.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await _.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const go="modulepreload",yo=function(e){return"/"+e},cn={},Ln=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(i.map(d=>{if(d=yo(d),d in cn)return;cn[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":go,c||(m.as="script"),m.crossOrigin="",m.href=d,s&&m.setAttribute("nonce",s),document.head.appendChild(m),c)return new Promise((b,y)=>{m.addEventListener("load",b),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},ii="#1A6B3C",ni="#cc2222",xo="#D4A017",pn="#888";async function bo(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Tn(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>ho(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>In(i,n,null,t))}async function Tn(e,t,i={}){const{navigate:n}=i,r=e.user.id,{data:o,error:a}=await _.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${r},addressee_id.eq.${r}`),{count:s}=await _.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",r).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(a){console.error("[Friends] Erreur:",a),c.innerHTML=`<div style="color:${ni};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const l=(o||[]).map(y=>y.requester_id===r?y.addressee_id:y.requester_id);let m={};if(l.length){const{data:y}=await _.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(y||[]).forEach(g=>{m[g.id]=g})}const b=(o||[]).map(y=>({friendshipId:y.id,friend:m[y.requester_id===r?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!b.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:y,friend:g})=>vo(g,y)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>_o(e,y.dataset.stats,y.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",async()=>{const g=y.dataset.friendId,p=y.dataset.friendName;if(typeof n!="function"){t("Erreur navigation","error");return}const u=e.user.id,{data:x}=await _.from("friend_match_invites").select("id").eq("inviter_id",g).eq("invitee_id",u).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle(),h=!!x;console.log("[Friends] clic match",{fid:g,fname:p,isAccepting:h}),n("match",{matchMode:"friend",friendId:g,friendName:p,isAccepting:h})})})}function vo(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",r=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||ii,a=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
      <div id="add-friend-error" style="color:${ni};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${Ki()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),r=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=n.value.trim();if(!a){r.textContent="Entre un pseudo";return}r.textContent="";const{data:s}=await _.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!s){r.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){r.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await _.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";r.textContent=l;return}const{error:c}=await _.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){r.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function In(e,t,i=null,n={}){const r=e.user.id,{data:o}=await _.from("friendships").select("id, requester_id").eq("addressee_id",r).eq("status","pending").order("created_at",{ascending:!1}),a=(o||[]).map(b=>b.requester_id);let s={};if(a.length){const{data:b}=await _.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(y=>{s[y.id]=y})}const d=(o||[]).map(b=>({...b,requester:s[b.requester_id]||{pseudo:"?"}})),c=Ui(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(b=>{var y,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=b.requester)==null?void 0:y.club_name)||((g=b.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=b.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ii};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${ni};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Ki()}`,document.body.appendChild(c);const m=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",m),c.addEventListener("click",b=>{b.target===c&&m()}),c.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:y}=await _.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Tn(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await _.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function _o(e,t,i){const n=e.user.id,[r,o]=[n,t].sort(),a=n===r,{data:s}=await _.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=a?c.wins_p1||0:c.wins_p2||0,m=a?c.wins_p2||0:c.wins_p1||0,b=c.draws||0,y=a?c.goals_p1||0:c.goals_p2||0,g=a?c.goals_p2||0:c.goals_p1||0,p=a?c.gc_used_p1||0:c.gc_used_p2||0,u=a?c.gc_used_p2||0:c.gc_used_p1||0,x=c.matches_total||0,h=(E,f,z,k=ii,S=ni)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${k}">${f}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${E}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${S}">${z}</div>
    </div>`,v=Ui();v.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${x===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${h("Victoires",l,m)}
        ${h("Nuls",b,b,pn,pn)}
        ${h("Défaites",m,l)}
        ${h("Buts marqués",y,g)}
        ${h("Buts encaissés",g,y,ni,ii)}
        ${h("GC utilisés ⚡",p,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${x} match${x>1?"s":""} joué${x>1?"s":""}</div>`}
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
        background:${ii};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Sn="mw_sound_volume";function Vi(){const e=localStorage.getItem(Sn);if(e===null)return 100;const t=parseInt(e,10);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):100}function wo(e){localStorage.setItem(Sn,String(Math.max(0,Math.min(100,Math.round(e)))))}function Yi(){return Vi()===0}function fi(e){return Math.max(0,Math.min(1,e*(Vi()/100)))}function Wi(e,t=1){if(Yi())return null;try{const i=new Audio(e);return i.volume=fi(t),i.play().catch(()=>{}),i}catch{return null}}let gt=null,Mi=null,un=.3;function An(e,t=.3){if(un=t,gt&&Mi===e&&!gt.paused){gt.volume=fi(un);return}if(Gt(),!Yi())try{const i=new Audio(e);i.loop=!0,i.volume=fi(t),i.play().catch(()=>{}),gt=i,Mi=e}catch{}}function Gt(){if(gt)try{gt.pause(),gt.currentTime=0}catch{}gt=null,Mi=null}let Xt=null;function zn(e,t=.6){if(Ue(),!Yi())try{const i=new Audio(e);i.volume=fi(t),i.play().catch(()=>{}),Xt=i}catch{}}function Ue(){if(Xt)try{Xt.pause(),Xt.currentTime=0}catch{}Xt=null}const ko="2026.07.22-1937";async function fn(e,{state:t,navigate:i,toast:n}){var o,a;const r=t.profile;r&&(e.innerHTML=`
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
  </div>`,requestAnimationFrame(()=>{var m,b,y,g,p;const s=((m=window.visualViewport)==null?void 0:m.height)||window.innerHeight,d=((b=document.querySelector(".top-nav"))==null?void 0:b.offsetHeight)||56,c=((y=document.querySelector(".bottom-nav"))==null?void 0:y.offsetHeight)||60;if(e.querySelector(".home-inner")){const u=s-d-c;e.querySelector(".home-dark").style.minHeight=u+"px"}if(window.innerWidth<768){const u=((g=e.querySelector(".home-hero"))==null?void 0:g.offsetHeight)||60,x=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const h=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,v=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((q,ne)=>{var oe;return q+(((oe=document.getElementById(ne))==null?void 0:oe.offsetHeight)||0)},0),E=12*5,f=s-d-c-u-h-v-E-32,z=Math.max(80,Math.round(f*.28)),k=Math.max(160,Math.round(f*.72)),S=Math.floor((k-10)/2);x&&(x.style.minHeight=x.style.maxHeight=z+"px"),e.querySelectorAll(".play-tile").forEach(q=>{q.style.minHeight=q.style.height=S+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(q=>{q.style.height=Math.round(S*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){Io(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()}),Cn(t,n),To(t,n,i),Mn(t,n,i),$o(t,n))}async function $o(e,t){const i=e.profile.id,{data:n}=await _.from("mini_league_members").select("league_id, prize_amount, mini_leagues(name)").eq("user_id",i).eq("prize_claimed",!1).gt("prize_amount",0);if(!(n!=null&&n.length))return;const r=n.reduce((a,s)=>a+(s.prize_amount||0),0),o=document.createElement("div");o.className="modal-overlay",o.style.zIndex="2200",o.innerHTML=`<div class="modal" style="max-width:400px">
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
  </div>`,document.body.appendChild(o),o.querySelector("#claim-later-btn").addEventListener("click",()=>o.remove()),o.querySelector("#claim-all-btn").addEventListener("click",async a=>{const s=a.currentTarget;s.disabled=!0,s.textContent="...";let d=0;for(const c of n){const{data:l}=await _.rpc("claim_mini_league_prize",{p_league_id:c.league_id,p_user_id:i});l!=null&&l.success&&!l.already_claimed&&(d+=l.prize||0)}if(d>0){e.profile.credits=(e.profile.credits||0)+d;const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${e.profile.credits.toLocaleString("fr")}`),t(`💰 +${d.toLocaleString("fr")} cr. récupérés !`,"success")}o.remove()})}async function Mn(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const r=e.profile.id,{data:o}=await _.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${r},away_id.eq.${r}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const a=o.map(d=>d.home_id===r?d.away_id:d.home_id).filter(Boolean);let s={};if(a.length){const{data:d}=await _.from("users").select("id, pseudo, club_name").in("id",a);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(d=>{const c=d.home_id===r?d.away_id:d.home_id,l=s[c]||"Adversaire",m=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${m?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await _.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Ln(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>Cr);return{resumePvpMatch:m}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Lo(async()=>{await Eo(d.dataset.abandon,d.dataset.opp,r),t("Match abandonné (défaite 3-0)","info"),Mn(e,t,i)})})})}async function Eo(e,t,i){Gt();const{data:n}=await _.from("matches").select("home_id, away_id, game_state, mode").eq("id",e).single();if(!n)return;const r=n.home_id===i,o=r?0:3,a=r?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=a,s.phase="finished",s.forfeit=!0,await _.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:a,game_state:s}).eq("id",e),n.mode==="mini_league"&&await _.from("mini_league_matches").update({status:"finished",home_score:o,away_score:a}).eq("match_id",e)}function Lo(e){const t=document.createElement("div");t.className="modal-overlay",t.innerHTML=`<div class="modal" style="max-width:340px">
    <div class="modal-body" style="padding:26px 22px 20px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
        <button id="ab-ok" class="btn" style="flex:1;background:var(--danger);color:#fff;border:none;font-weight:900">Abandonner</button>
      </div>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function To(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:r}=await _.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!r){n.innerHTML="";return}const o=((s=r.inviter)==null?void 0:s.club_name)||((d=r.inviter)==null?void 0:d.pseudo)||"?",a=r.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:o,isAccepting:!0})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await _.from("friend_match_invites").update({status:"declined"}).eq("id",r.id),n.innerHTML="",t("Invitation refusée","info")})}async function Cn(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:r}=await _.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(r||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,a=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>In(e,t,()=>Cn(e,t)))}function Io(e){const t=[{mode:"vs_ai_easy",label:"Facile",desc:"Pour découvrir le jeu",credits:"500",icon:"🟢",bg:"#eefaf2",border:"#bfe8cf",iconBg:"#1A6B3C",text:"#12401f"},{mode:"vs_ai_medium",label:"Moyen",desc:"Un défi équilibré",credits:"1 000",icon:"🟡",bg:"#fdf7e6",border:"#f0dd9e",iconBg:"#D4A017",text:"#5c4408"},{mode:"vs_ai_hard",label:"Difficile",desc:"Réservé aux experts",credits:"1 500",icon:"🔴",bg:"#fdecec",border:"#f3bcbc",iconBg:"#bb2020",text:"#5c1010"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:400px;border-radius:18px;overflow:hidden">
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
  </div>`,e.querySelector("#settings-back").addEventListener("click",()=>i("home")),e.querySelectorAll("[data-theme-choice]").forEach(d=>{d.addEventListener("click",()=>{ca(d.dataset.themeChoice),jn(e,t)})});const o=e.querySelector("#volume-slider"),a=e.querySelector("#volume-label");let s=null;o.addEventListener("input",()=>{wo(Number(o.value)),a.textContent=`${o.value}%`,s&&(s.volume=Math.max(0,Math.min(1,Number(o.value)/100)))}),e.querySelector("#volume-test").addEventListener("click",()=>{s=Wi("/sounds/match-opening.mp3",1)}),e.querySelector("#settings-logout").addEventListener("click",async()=>{await _.auth.signOut(),window.location.reload()})}const je={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Pe(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const mn=["ATT","MIL","DEF","GK"];function Bn(e,t,i){if(!e||!t)return!1;if(i&&e.position&&t.position)return Ri(i).some(([l,m])=>l===e.position&&m===t.position||l===t.position&&m===e.position);const n=e._col!=null&&t._col!=null&&e._col===t._col,r=e._col!=null&&t._col!=null&&Math.abs(e._col-t._col)===1,o=mn.indexOf(e._line||e.job),a=mn.indexOf(t._line||t.job),s=Math.abs(o-a)===1;return(e._line||e.job)===(t._line||t.job)&&r||n&&s}function qn(e,t){let i=0;const n=e.length;for(let r=0;r<n;r++)for(let o=r+1;o<n;o++){const a=e[r],s=e[o];if(!a||!s||!Bn(a,s,t))continue;const d=Ut(a,s);d==="#00ff88"?i+=10:d==="#FFD700"&&(i+=5)}return i}function oi(e,t={},i){let n=0,r=0;e.forEach(d=>{const c=d._line||d.job,l=Number(c==="MIL"?d.note_m:d.note_a)||0,m=d.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;n+=t.doubleAttack?l*2:l,r+=(d.boost||0)+m});const o=n+r,a=qn(e,i);let s=o+a;return t.stolenNote&&(s-=t.stolenNote),{base:o,links:a,total:Math.max(0,s)}}function ri(e,t={},i){const n=e.reduce((a,s)=>{const d=s._line||s.job;let c=0;d==="GK"?c=Number(s.note_g)||0:d==="MIL"?c=Number(s.note_m)||0:c=Number(s.note_d)||0;const l=s.stadiumBonus&&(d==="GK"||d==="DEF"||d==="MIL")?10:0;return a+c+(s.boost||0)+l},0),r=qn(e,i);let o=n+r;return t.stolenNote&&(o-=t.stolenNote),{base:n,links:r,total:Math.max(0,o)}}function Xi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Dn(e,t,i="easy"){const n=e.filter(a=>!a.used);if(!n.length)return[];const r=[...n].sort((a,s)=>{const d=t==="attack"?Pe(a,"ATT"):a._line==="GK"?Pe(a,"GK"):Pe(a,"DEF");return(t==="attack"?Pe(s,"ATT"):s._line==="GK"?Pe(s,"GK"):Pe(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return r.slice(0,Math.min(o,r.length,3))}function So(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Ao={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function zo(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const r=Fn(i),o=Number(i[t])||0;if(o<=0)return 0;const a=i.note_min??1,s=i.note_max??10,c=(e.current_note??r)-r;return Math.min(s,Math.max(a,o+c))}function Fn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Mo(e,t){!e||!t||await Promise.all([gn(e,"win"),gn(t,"loss")])}async function gn(e,t){const{data:i}=await _.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(r=>{var o,a;return((o=r.player)==null?void 0:o.rarity)==="pepite"||((a=r.player)==null?void 0:a.rarity)==="papyte"});n.length&&await Promise.all(n.map(r=>{const o=Ao[r.player.rarity],a=t==="win"?o.win:o.loss,s=r.player.note_min??1,d=r.player.note_max??10,c=Fn(r.player),l=r.current_note??c,m=Math.min(d,Math.max(s,l+a));return _.from("cards").update({current_note:m}).eq("id",r.id)}))}const Co={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ti={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},di=["GK","DEF","MIL","ATT"],jo=["Tous","GK","DEF","MIL","ATT"],Bo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function yn(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function qo(e){return e.length?e.reduce((t,i)=>yn(i)>yn(t)?i:t,e[0]):e[0]}function Do(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Fo={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function li(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ii(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,r={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Te(r,{width:140})}
  </div>`}function xn(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Te(e,{width:140})}
  </div>`}async function Po(e,t){const{state:i,navigate:n,toast:r,openModal:o,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await _.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await _.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter($=>$.card_type==="player"&&$.player),l=(s||[]).filter($=>$.card_type==="game_changer"),m=(s||[]).filter($=>$.card_type==="formation"),b=(s||[]).filter($=>$.card_type==="stadium"),{data:y}=await _.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(y||[]).forEach($=>{g[$.name]=$});const{data:p}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(p||[]).forEach($=>{u[$.id]=$}),b.forEach($=>{$.stadium_def&&(u[$.stadium_id]=$.stadium_def)});const x=Object.keys(Oi),h=Object.keys(je),v={};c.forEach($=>{const G=$.player.id;v[G]=(v[G]||0)+1}),new Set(Object.keys(v).map($=>String($)));const E=new Set(m.map($=>$.formation)),f=new Set(l.map($=>$.gc_type));let z="player",k="Tous",S="",q=!1;function ne(){return[...c].sort(($,G)=>{const H=di.indexOf($.player.job),R=di.indexOf(G.player.job);return H!==R?H-R:($.player.surname_real||"").localeCompare(G.player.surname_real||"")})}function oe(){return[...d||[]].sort(($,G)=>{const H=di.indexOf($.job),R=di.indexOf(G.job);return H!==R?H-R:($.surname_real||"").localeCompare(G.surname_real||"")})}function ee(){return ne().filter($=>{const G=$.player,H=k==="Tous"||G.job===k,R=!S||`${G.firstname} ${G.surname_real}`.toLowerCase().includes(S);return H&&R})}function j(){return oe().filter($=>{const G=k==="Tous"||$.job===k,H=!S||`${$.firstname} ${$.surname_real}`.toLowerCase().includes(S);return G&&H})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${b.length})</div>
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
  </div>`,function(G){const H=document.getElementById(G);if(!H)return;H.addEventListener("wheel",de=>{Math.abs(de.deltaY)<=Math.abs(de.deltaX)||(de.preventDefault(),H.scrollLeft+=de.deltaY)},{passive:!1});let R=!1,W=0,B=0,N=!1,pe=!1;H.addEventListener("mousedown",de=>{R=!0,N=!1,W=de.pageX,B=H.scrollLeft}),window.addEventListener("mouseup",()=>{R=!1,N&&(H.style.cursor="",pe=!0),N=!1}),window.addEventListener("mousemove",de=>{if(!R)return;const he=de.pageX-W;!N&&Math.abs(he)<6||(N=!0,H.style.cursor="grabbing",de.preventDefault(),H.scrollLeft=B-he)}),H.addEventListener("click",de=>{pe&&(de.stopPropagation(),de.preventDefault(),pe=!1)},!0)}("col-grid");function T(){const $=document.getElementById("col-filters");$&&(z==="player"?($.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${S}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${jo.map(G=>`
            <button class="filter-btn" data-job="${G}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${G===k?"var(--green)":"var(--tile-border)"};
                background:${G===k?"var(--green)":"#fff"};
                color:${G===k?"#fff":"var(--tile-fg-dim)"}">
              ${G}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",G=>{S=G.target.value.toLowerCase(),K()}),e.querySelectorAll(".filter-btn").forEach(G=>{G.addEventListener("click",()=>{k=G.dataset.job,T(),K()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,T(),K()})):($.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${q?"var(--yellow)":"var(--tile-border)"};
              background:${q?"var(--yellow)":"#fff"};
              color:${q?"#111":"var(--tile-fg-dim)"}; font-size:18px; padding:5px 10px">
            ${q?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{q=!q,T(),K()})))}function K(){const $=document.getElementById("col-grid");$&&(z==="player"?Y($):z==="formation"?ce($):z==="stadium"?V($):U($))}function Z($,G,H,R,W,B=0){const N=document.getElementById("col-grid"),pe=document.getElementById("col-big");if(!N||!pe)return;var de=0;function he(){var ct;const Se=window.innerWidth>=768,ve=document.getElementById("col-big"),Ie=document.getElementById("col-gap"),Ae=((ct=document.getElementById("col-grid"))==null?void 0:ct.parentElement)||null,Be=ve?ve.closest(".page"):null;if(ve&&Ae&&Be){let $e=0;Array.from(Be.children).forEach(function(C){C!==ve&&C!==Ae&&C!==Ie&&($e+=C.offsetHeight)});const Ce=Math.max(0,Be.clientHeight-$e),qe=Math.round(Ce*(B/100)),Ge=Math.max(0,Ce-qe),w=Se?50/71:45/63,L=Math.round(Ge*w),A=Math.max(0,Ge-L);Ie&&(Ie.style.height=qe+"px"),ve.style.flex="none",ve.style.height=L+"px",ve.style.minHeight="0",Ae.style.flex="none",Ae.style.height=A+"px",Ae.style.minHeight="0",Ae.style.display="flex",Ae.style.overflow="hidden"}const ke=document.getElementById("col-grid");ke&&(ke.style.height="100%",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.width="100%"),pe.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:center center">'+G($[de])+"</div>";var wt=pe.querySelector("[data-card-id],[data-form-id],[data-gc-id]");wt&&wt.addEventListener("click",function(){R($[de])}),requestAnimationFrame(function(){var $e=document.getElementById("big-card-inner");if(!(!$e||!pe)){var Ce=pe.clientHeight,qe=pe.clientWidth-16,Ge=$e.offsetHeight,w=$e.offsetWidth;if(Ge>0&&w>0&&Ce>40){var L=Math.min(Ce/Ge,qe/w);$e.style.transform="scale("+L.toFixed(3)+")",$e.style.transformOrigin="center center"}}}),N.innerHTML=$.map(function($e,Ce){var qe=Ce===de,Ge="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+Ge+'">'+H($e,qe)+"</div>"}).join(""),N.querySelectorAll(".col-mini-item").forEach(function($e){$e.addEventListener("click",function(){de=Number($e.dataset.idx),he(),$e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})}),requestAnimationFrame(function(){var $e=ke?ke.clientHeight:0,Ce=N.querySelector(".col-mini-item > div");if(!(!$e||!Ce)){var qe=Ce.style.zoom;Ce.style.zoom="1";var Ge=Ce.offsetHeight;if(Ce.style.zoom=qe,!(Ge<=0)){var w=$e/Ge;N.querySelectorAll(".col-mini-item > div").forEach(function(L){L.style.zoom=w.toFixed(4)})}}})}he()}function ue($,G){var H=window.innerWidth>=768?.76:.54,R;if(!$||$._fake){var W=$?$.player:null;if(!W)return"";R=xn(W)}else R=Ii($,"");var B=$&&!$._fake?v[$.player&&$.player.id]||1:0,N=B>0?'<div style="position:absolute;top:6px;right:6px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:11px;font-weight:900;padding:2px 7px;z-index:3;box-shadow:0 1px 4px rgba(0,0,0,0.4)">×'+B+"</div>":"";return'<div style="display:inline-block;position:relative;zoom:'+H+';pointer-events:none;line-height:0">'+N+R+"</div>"}function fe($,G,H){var R=H>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+H+"</div>":"",W=!!G,B=zi($,zt[$],{width:160});return W||(B='<div style="filter:grayscale(1);opacity:0.5">'+B+"</div>"),"<div "+(G?'data-form-id="'+G.id+'"':"")+' style="position:relative;cursor:pointer">'+R+B+"</div>"}function M($,G){var H=window.innerWidth>=768?.76:.54,R=zi($,zt[$],{width:140});return G||(R='<div style="filter:grayscale(1);opacity:0.45">'+R+"</div>"),'<div style="display:inline-block;zoom:'+H+';line-height:0;pointer-events:none">'+R+"</div>"}function Y($){if(q){const G=j();if(!G.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucun joueur.</div>';return}const H=G.map(R=>c.find(W=>W.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});Z(H,R=>R._fake?xn(R.player):Ii(R,""),R=>R._fake?ue({player:R.player,id:"x",_fake:!0}):ue(R),R=>{R._fake||bn(R,c,v,t)})}else{const G=ee();if(!G.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const H={};G.forEach(W=>{const B=W.player.id;H[B]||(H[B]=[]),H[B].push(W)});const R=Object.values(H).map(W=>qo(W));Z(R,W=>{const B=v[W.player.id]||1,N=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",de=c.filter(he=>he.player.id===W.player.id&&he.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Ii(W,N+de)},W=>ue(W),W=>bn(W,c,v,t))}}function ce($){const G=q?x:[...E];if(!G.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const H=G.map(R=>({formation:R,card:m.find(W=>W.formation===R)||null,owned:E.has(R)}));Z(H,({formation:R,card:W,owned:B})=>fe(R,B?W:null,B?m.filter(N=>N.formation===R).length:0),({formation:R,owned:W})=>M(R,W),({card:R,owned:W})=>{W&&R&&No(R,m,t,o)},"#1A6B3C",5)}function U($){const G=Object.keys(g),H=q?G.length?G:h:[...f];if(!H.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=H.map(W=>({type:W,gc:je[W]||{icon:"⚡",desc:""},def:g[W]||null,owned:f.has(W),card:l.find(B=>B.gc_type===W)||null}));Z(R,({type:W,gc:B,def:N,owned:pe,card:de})=>{var ke;const he=(N==null?void 0:N.name)||W,Se=pe?l.filter(wt=>wt.gc_type===W).length:0,ve=Se>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Se}</div>`:"",Ie=(N==null?void 0:N.effect)||B.desc||"",Ae=N!=null&&N.image_url?`/icons/${N.image_url}`:((ke=N==null?void 0:N.club)==null?void 0:ke.logo_url)||(N!=null&&N.country_code?`https://flagsapi.com/${N.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);let Be=tt(he,Ae,B.icon,Ie,{width:160,onClick:pe});return pe||(Be=`<div style="filter:grayscale(1);opacity:0.5">${Be}</div>`),`<div ${pe&&de?`data-gc-id="${de.id}" data-gc-type="${W}"`:""} style="position:relative">${ve}${Be}</div>`},({type:W,gc:B,def:N,owned:pe})=>{const de=window.innerWidth>=768?.76:.54,he=(N==null?void 0:N.name)||W,Se=(N==null?void 0:N.effect)||B.desc||"",ve=N!=null&&N.image_url?`/icons/${N.image_url}`:null;let Ie=tt(he,ve,B.icon,Se,{width:140});return pe||(Ie=`<div style="filter:grayscale(1);opacity:0.45">${Ie}</div>`),`<div style="display:inline-block;zoom:${de};line-height:0;pointer-events:none">${Ie}</div>`},({type:W,owned:B,def:N})=>{B&&Go(W,N,o)},"#7a28b8",5)}function V($){const G="#4FC3F7",H="/";if(!b.length){$.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--tile-fg-dim)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const R={};b.forEach(B=>{const N=B.stadium_id||"?";(R[N]=R[N]||[]).push(B)});const W=Object.entries(R).map(([B,N])=>({sid:B,def:u[B]||null,count:N.length,card:N[0]}));Z(W,({def:B,count:N})=>{var Ie,Ae;const pe=(B==null?void 0:B.name)||"?",de=((Ie=B==null?void 0:B.club)==null?void 0:Ie.encoded_name)||(B==null?void 0:B.country_code)||"—",he=B!=null&&B.image_url?`${H}icons/${B.image_url}`:((Ae=B==null?void 0:B.club)==null?void 0:Ae.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=N>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${N}</div>`:"",ve=`${de}<br>+10 ⭐ joueurs alliés`;return`<div style="position:relative">${Se}${ti(pe,he,ve,{width:160})}</div>`},({def:B})=>{var ve,Ie;const N=window.innerWidth>=768?.76:.54,pe=(B==null?void 0:B.name)||"?",de=((ve=B==null?void 0:B.club)==null?void 0:ve.encoded_name)||(B==null?void 0:B.country_code)||"—",he=B!=null&&B.image_url?`${H}icons/${B.image_url}`:((Ie=B==null?void 0:B.club)==null?void 0:Ie.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Se=`${de}<br>+10 ⭐`;return`<div style="display:inline-block;zoom:${N};line-height:0;pointer-events:none">${ti(pe,he,Se,{width:140})}</div>`},null,G,5)}e.querySelectorAll(".col-tab-btn").forEach($=>{$.addEventListener("click",()=>{z=$.dataset.tab,k="Tous",S="",q=!1,e.querySelectorAll(".col-tab-btn").forEach(G=>{const H=G.dataset.tab===z;G.style.borderBottomColor=H?"var(--green)":"transparent",G.style.color=H?"var(--green)":"var(--tile-fg-dim)"}),T(),K()})}),T(),K()}function Go(e,t,i){const n=je[e]||{icon:"⚡",desc:"Effet spécial."},r=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,a=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      ${tt(r,a,n.icon,o,{width:200})}
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const ci=1e3;function No(e,t,i,n){var g,p,u;const{state:r,toast:o,closeModal:a,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const x=zt[c]||{},h=Oi[c]||[],v=290,E=360,f=20;function z(S){const q=x[S];return q?{x:q.x*v,y:q.y*E}:null}let k=`<svg width="${v}" height="${E}" viewBox="0 0 ${v} ${E}" xmlns="http://www.w3.org/2000/svg">`;for(const[S,q]of h){const ne=z(S),oe=z(q);!ne||!oe||(k+=`<line x1="${ne.x}" y1="${ne.y}" x2="${oe.x}" y2="${oe.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const S of Object.keys(x)){const q=z(S);if(!q)continue;const ne=S.replace(/\d+/,""),oe=l[ne]||"#555";k+=`<circle cx="${q.x}" cy="${q.y}" r="${f}" fill="${oe}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,k+=`<text x="${q.x}" y="${q.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return k+="</svg>",k}const b=t.filter(x=>x.formation===c);b.length;const y=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${y?`
    <div style="margin-top:12px;border-top:1px solid var(--tile-border);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${ci}"
          style="flex:1;padding:8px;border:1.5px solid var(--tile-border);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${ci.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const x=b.find(v=>!v.is_for_sale)||b[0];if(!x){o("Aucune carte à vendre","error");return}await _.from("market_listings").delete().eq("card_id",x.id),await _.from("transfer_history").delete().eq("card_id",x.id);const{error:h}=await _.from("cards").delete().eq("id",x.id);if(h){o(h.message,"error");return}await _.from("users").update({credits:(r.profile.credits||0)+ci}).eq("id",r.profile.id),await d(),o(`+${ci.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const x=parseInt(document.getElementById("sell-price-form").value);if(!x||x<1){o("Prix invalide","error");return}await _.from("cards").update({is_for_sale:!0,sale_price:x}).eq("id",e.id),await _.from("market_listings").insert({seller_id:r.profile.id,card_id:e.id,price:x}),o("Carte mise en vente sur le marché !","success"),a(),s("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),a(),s("collection")})}async function bn(e,t,i,n){var ue,fe,M,Y,ce;const{state:r,toast:o,openModal:a,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,m=t.filter(U=>U.player.id===l.id),b=m.length,y=e.evolution_bonus||0,g=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?y:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?y:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?y:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?y:0)),p=l.rarity||"normal",{data:u}=await _.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((ue=u==null?void 0:u[0])==null?void 0:ue.price)??Bo[p];const x=l.rarity!=="legende";At(l);const h=((l.rarity==="pepite"||l.rarity==="papyte")&&e.current_note!=null?e.current_note:li(l,l.job))+y,v=l.rarity==="pepite"||l.rarity==="papyte",E=l.job2?(v?zo(e,Do(l.job2)):li(l,l.job2))+(li(l,l.job2)>0?y:0):null;Ti[l.job],l.job2&&Ti[l.job2];const f=Co[l.rarity]||"#ccc";Fo[l.country_code]||l.country_code;const z=e.evolution_bonus||0,S=h+z,q=E||0,ne=q>0?q+z:0,oe=m.map(U=>U.id);let ee={};if(oe.length){const{data:U}=await _.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",oe).order("transferred_at",{ascending:!0});(U||[]).forEach(V=>{ee[V.card_id]||(ee[V.card_id]=[]),ee[V.card_id].push(V)})}const j=oe.length?`
    <div style="margin-top:16px;border-top:1px solid var(--tile-border);padding-top:14px">
      ${b-1>0?`<div style="font-size:13px;font-weight:700;margin-bottom:10px">🗂️ Copies (${b-1})</div>`:'<div style="font-size:12px;color:#aaa;margin-bottom:6px;font-style:italic">Aucune copie à sacrifier</div>'}
      <!-- Grille de mini-cartes (copies uniquement, l'exemplaire 1 = carte principale affichée en haut) -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${m.filter(U=>U.id!==e.id).map((U,V)=>{const $=ee[U.id]||[],G=U.is_for_sale,H=$.length?$[$.length-1]:null,R=U.evolution_bonus||0,W=H?H.source==="booster"?"Booster":H.price?H.price.toLocaleString("fr")+" cr.":"—":"—",B=H?new Date(H.transferred_at).toLocaleDateString("fr",{day:"2-digit",month:"2-digit",year:"numeric"}):"",N=80,pe=Math.round(N*657/507),de=Te({...l,_evolution_bonus:R},{width:N});return`
            <div class="exemplaire-row" data-card-id="${U.id}" data-card-idx="${V}"
              style="position:relative;cursor:${G?"not-allowed":"pointer"};opacity:${G?.55:1};transition:transform .1s">
              <!-- Checkbox cachée -->
              <input type="checkbox" class="expl-check"
                data-id="${U.id}" data-evo="${R}" data-note="${li(l,l.job)}"
                ${G?"disabled":""}
                style="display:none">
              <!-- Wrapper exactement aux dimensions de la carte -->
              <div class="expl-mini-card" style="position:relative;width:${N}px;height:${pe}px;border-radius:8px;overflow:hidden">
                ${de}
                <!-- Overlay vert sélection — couvre toute la carte -->
                <div class="expl-sel-overlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(26,107,60,0.38);pointer-events:none;z-index:10;box-shadow:inset 0 0 0 3px #1A6B3C;border-radius:8px"></div>
                <!-- Checkmark -->
                <div class="expl-sel-check" style="display:none;position:absolute;top:5px;left:5px;width:20px;height:20px;background:#1A6B3C;border-radius:50%;z-index:11;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:900">✓</div>
                ${G?'<div style="position:absolute;top:0;right:0;background:#e67e22;color:#fff;font-size:6px;font-weight:900;padding:2px 4px;border-radius:0 6px 0 4px;z-index:12">VENTE</div>':""}
              </div>
              <!-- Source + date -->
              <div style="font-size:9px;color:#888;text-align:center;margin-top:3px;line-height:1.3">
                ${W}${B?`<br>${B}`:""}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${S}${l.job2&&q>0?` / ${ne}`:""}`:`Note actuelle : ${S}${l.job2&&q>0?` / ${ne}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${x?`
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
      ${Te({...l,_evolution_bonus:y},{width:160})}


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
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([U,V])=>{const $=Ti[U],G=U==="GK"?"#fff":$,H=U===l.job||U===l.job2,R=(Number(V)||0)+(H&&z>0?z:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${$};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${G};font-family:Arial Black,Arial;line-height:1">${R}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${G}">${U}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--tile-fg-dim);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${j}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(fe=document.getElementById("close-detail"))==null||fe.addEventListener("click",s);let T=new Set;function K(){let U=0;return document.querySelectorAll(".expl-check:checked").forEach(V=>{if(V.dataset.id===e.id)return;const G=Number(V.dataset.evo)||0,H=Number(V.dataset.note)||0;U+=H+G}),U}const Z=()=>{const U=T.size,V=document.getElementById("sell-action-panel");if(!V)return;V.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const $=document.getElementById("evolve-btn");if($){const G=K();$.textContent=G>0?`⬆️ Évoluer (+${G})`:"⬆️ Évoluer"}};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const V=U.dataset.id;U.checked?T.add(V):T.delete(V);const $=U.closest(".exemplaire-row");if($){const G=$.querySelector(".expl-sel-overlay"),H=$.querySelector(".expl-sel-check");G&&(G.style.display=U.checked?"block":"none"),H&&(H.style.display=U.checked?"flex":"none"),$.style.transform=U.checked?"scale(1.05)":"scale(1)"}Z()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",V=>{if(V.target.tagName==="INPUT")return;const $=U.querySelector(".expl-check");$&&!$.disabled&&($.checked=!$.checked,$.dispatchEvent(new Event("change")))})}),(M=document.getElementById("evolve-btn"))==null||M.addEventListener("click",async()=>{if(b<=1)return;const U=[...T];if(!U.length)return;if(T.has(e.id)){const W=document.createElement("div");W.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",W.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(W),W.querySelector("#err-close").addEventListener("click",()=>W.remove()),W.addEventListener("click",B=>{B.target===W&&W.remove()});return}const V=U.filter(W=>W!==e.id);if(!V.length){o("Sélectionne des copies à sacrifier","warning");return}const $=V.reduce((W,B)=>{const N=document.querySelector(`.expl-check[data-id="${B}"]`),pe=N&&Number(N.dataset.evo)||0,de=N&&Number(N.dataset.note)||0;return W+de+pe},0);if(!await new Promise(W=>{const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",B.innerHTML=`
        <div style="background:var(--tile-bg);border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${V.length}</strong> copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}<br>
            ⬆️ Bonus gagné : <strong style="color:#1A6B3C">+${$}</strong> <span style="font-size:11px;color:#888">(Σ note + évolution de chaque copie)</span><br>
            📈 Évolution : <strong>${e.evolution_bonus||0}</strong> → <strong style="color:#1A6B3C">${(e.evolution_bonus||0)+$}</strong><br>
            📊 Note finale : <strong>${h}</strong> → <strong style="color:#1A6B3C">${h+$}</strong>
            ${E&&E>0?`<br>📊 Note 2 finale : <strong>${E}</strong> → <strong style="color:#1A6B3C">${E+$}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:var(--tile-bg);font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(B),B.querySelector("#sac-cancel").addEventListener("click",()=>{B.remove(),W(!1)}),B.querySelector("#sac-ok").addEventListener("click",()=>{B.remove(),W(!0)}),B.addEventListener("click",N=>{N.target===B&&(B.remove(),W(!1))})}))return;if(V.length){await _.from("market_listings").delete().in("card_id",V),await _.from("deck_cards").delete().in("card_id",V),await _.from("transfer_history").delete().in("card_id",V),await _.from("decks").update({stadium_card_id:null}).in("stadium_card_id",V);const{error:W}=await _.from("cards").delete().in("id",V);if(W){o("Erreur suppression : "+W.message,"error");return}}const H=(e.evolution_bonus||0)+$,{error:R}=await _.from("cards").update({evolution_bonus:H}).eq("id",e.id);if(R){o("Erreur évolution : "+R.message,"error");return}o(`⬆️ ${l.firstname} ${l.surname_real} : note ${h} → ${h+H} (+${$}) !`,"success",4e3),s(),d("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{var R;const U=[...T];if(!U.length){o("Sélectionne au moins un exemplaire","warning");return}const V=parseInt((R=document.getElementById("sell-market-price"))==null?void 0:R.value);if(!V||V<1){o("Prix invalide","error");return}const{error:$}=await _.from("cards").update({is_for_sale:!0,sale_price:V}).in("id",U);if($){o($.message,"error");return}const G=U.map(W=>({seller_id:r.profile.id,card_id:W,price:V,status:"active"})),{error:H}=await _.from("market_listings").insert(G);H&&console.warn("[Market] insert listings:",H.message),o(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${V.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(ce=document.getElementById("cancel-sell-btn"))==null||ce.addEventListener("click",async()=>{await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await _.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}function vn(e,t=""){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-header"><h2>${e}</h2><button class="btn-icon" id="pm-cancel">✕</button></div>
      <div class="modal-body" style="padding:18px 20px">
        <input id="pm-input" type="text" value="${(t||"").replace(/"/g,"&quot;")}"
          style="width:100%;padding:11px 14px;border-radius:10px;border:1px solid var(--gray-300,#d1d5db);font-size:15px;box-sizing:border-box" />
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
          <button class="btn btn-ghost" id="pm-cancel2">Annuler</button>
          <button class="btn btn-primary" id="pm-ok">Valider</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=n.querySelector("#pm-input");r.focus(),r.select();const o=a=>{n.remove(),i(a)};n.querySelector("#pm-ok").addEventListener("click",()=>o(r.value.trim()||null)),n.querySelector("#pm-cancel").addEventListener("click",()=>o(null)),n.querySelector("#pm-cancel2").addEventListener("click",()=>o(null)),n.addEventListener("click",a=>{a.target===n&&o(null)}),r.addEventListener("keydown",a=>{a.key==="Enter"&&o(r.value.trim()||null),a.key==="Escape"&&o(null)})})}function Ro(e,t=!1){return new Promise(i=>{const n=document.createElement("div");n.className="modal-overlay",n.style.zIndex="2100",n.innerHTML=`<div class="modal" style="max-width:380px">
      <div class="modal-body" style="padding:24px 22px 20px;text-align:center">
        <p style="font-size:15px;line-height:1.5;margin:0 0 20px">${e}</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="cm-cancel">Annuler</button>
          <button class="btn ${t?"":"btn-primary"}" id="cm-ok" style="${t?"background:var(--red,#c0392b);color:#fff;border:none":""}">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n);const r=o=>{n.remove(),i(o)};n.querySelector("#cm-ok").addEventListener("click",()=>r(!0)),n.querySelector("#cm-cancel").addEventListener("click",()=>r(!1)),n.addEventListener("click",o=>{o.target===n&&r(!1)})})}const mi={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Ci(e,t){const{state:i,navigate:n,toast:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=await vn("Nom du deck",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!a)return;const{data:s,error:d}=await _.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(d){r(d.message,"error");return}r("Deck créé !","success"),hn(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>hn(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const s=await vn("Nouveau nom",a.dataset.name);if(!s||s===a.dataset.name)return;const{error:d}=await _.from("decks").update({name:s}).eq("id",a.dataset.rename);if(d){r(d.message,"error");return}r("Deck renommé !","success"),Ci(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!await Ro(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`,!0))return;await _.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:s}=await _.from("decks").delete().eq("id",a.dataset.delete);if(s){r(s.message,"error");return}r("Deck supprimé.","success"),Ci(e,t)})})}async function hn(e,t,i){const{state:n,toast:r}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select("*").eq("id",e).single(),{data:a}=await _.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await _.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(a||[]).filter(x=>x.card_type==="player"&&x.player),c=(a||[]).filter(x=>x.card_type==="formation"),l=(s||[]).filter(x=>x.card_type==="stadium"),m=[...new Set(l.map(x=>x.stadium_id).filter(Boolean))];let b={};if(l.forEach(x=>{x.stadium_def&&x.stadium_id&&(b[x.stadium_id]=x.stadium_def)}),m.length&&Object.keys(b).length<m.length){const{data:x}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(x||[]).forEach(h=>{b[h.id]=h})}const y=c.map(x=>x.formation).filter(Boolean),{data:g}=await _.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";y.length>0&&!y.includes(p)&&(p=y[0]);const u={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:b,availableFormations:y};(g||[]).forEach(x=>{x.is_starter?u.slots[x.position]=x.card_id:u.subs.includes(x.card_id)||u.subs.push(x.card_id)}),_t(t,u,i)}function _t(e,t,i){var g,p;const{navigate:n}=i;mi[t.formation];const r=_n(t.formation),o=r.filter(u=>t.slots[u]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(mi),s=(g=t.stadiumCards)==null?void 0:g.find(u=>u.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(u=>t.playerCards.find(x=>x.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${c.map(u=>{const x={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:24px">
                ${Te({...x,_evolution_bonus:x._evolution_bonus||0},{width:90,showStad:!0,stadDef:d})}
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
              ${s?(()=>{var h;const u=t.stadDefMap[s.stadium_id],x=((h=u==null?void 0:u.club)==null?void 0:h.logo_url)||(u==null?void 0:u.image_url)||null;return ti((u==null?void 0:u.name)||"Stade",x,"+10 ⭐",{width:100})})():`<div style="width:100px;height:171px;border:2px dashed rgba(79,195,247,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
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
              ${c.map(u=>{const x={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible;padding-bottom:20px">
                  ${Te({...x,_evolution_bonus:x._evolution_bonus||0},{width:66,showStad:!0,stadDef:d})}
                  <button data-remove-sub="${u.id}"
                    style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:16px;height:16px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${t.subs.length<5?'<div id="add-sub-btn" style="width:66px;height:85px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:66px;height:86px;border-radius:6px;background:#1A6B3C;border:2px solid #2ecc71;display:flex;align-items:center;justify-content:center">
              <span style="font-size:11px;font-weight:900;color:#fff;text-align:center">${t.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${s?(()=>{var h;const u=t.stadDefMap[s.stadium_id],x=((h=u==null?void 0:u.club)==null?void 0:h.logo_url)||(u==null?void 0:u.image_url)||null;return ti((u==null?void 0:u.name)||"Stade",x,"+10⭐",{width:66})})():`<div style="width:66px;height:86px;border:2px dashed rgba(79,195,247,0.5);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
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
  </div>`;const l=window.innerWidth>=900,m=e.querySelector(".deck-pc-layout"),b=e.querySelector(".deck-mobile-layout");m&&(m.style.display=l?"block":"none"),b&&(b.style.display=l?"none":"block"),Oo(e,t,r,i),e.querySelectorAll("#builder-back").forEach(u=>u.addEventListener("click",()=>n("decks")));const y=()=>{const{openModal:u,closeModal:x}=i,h=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${a.map(v=>`<div data-forma="${v}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${v===t.formation?"#1A6B3C":"#f0f0f0"};color:${v===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${v===t.formation?"#1A6B3C":"#ddd"}">${v}</div>`).join("")}
    </div>`;u("⚽ Choisir une formation",h),document.querySelectorAll("#modal-body [data-forma]").forEach(v=>{v.addEventListener("click",()=>{t.formation=v.dataset.forma;const E=_n(t.formation),f={};E.forEach(z=>{t.slots[z]&&(f[z]=t.slots[z])}),t.slots=f,x(),_t(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(u=>u.addEventListener("click",y)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(u=>u.addEventListener("click",()=>Ho(t,e,i))),e.querySelectorAll("#save-deck").forEach(u=>u.addEventListener("click",()=>Vo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(x=>x!==u.dataset.removeSub),_t(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(u=>u.addEventListener("click",()=>Ko(t,e,i)))}function Oo(e,t,i,n){var v,E,f;const r=window.innerWidth>=900,o=e.querySelector(r?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const a=(v=t.stadiumCards)==null?void 0:v.find(z=>z.id===t.stadiumCardId),s=a&&((E=t.stadDefMap)==null?void 0:E[a.stadium_id])||null,d=zt[t.formation]||{},c=Ri(t.formation)||[],l={};for(const z of i){const k=t.slots[z],S=k?t.playerCards.find(q=>q.id===k):null;S!=null&&S.player?l[z]={...S.player,_evolution_bonus:S.evolution_bonus||0,face:S.player.face||null}:l[z]=null}const m=window.innerWidth>=900,b=m?window.innerWidth-280:window.innerWidth-20,y=m?Math.min(b,860):b,g=Math.round(m?y*.82:y*.85),p=m?84:44;let u="";for(const[z,k]of c){const S=d[z],q=d[k];if(!S||!q)continue;const ne=S.x*y,oe=Math.round(.03*g+S.y*.85*g),ee=q.x*y,j=Math.round(.03*g+q.y*.85*g),T=l[z],K=l[k],Z=Ut(T,K);Z==="#ff3333"||Z==="#cc2222"?u+=`<line x1="${ne.toFixed(1)}" y1="${oe.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${Z}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(u+=`<line x1="${ne.toFixed(1)}" y1="${oe.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${Z}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,u+=`<line x1="${ne.toFixed(1)}" y1="${oe.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${j.toFixed(1)}" stroke="${Z}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let x="";const h=Math.round(p*657/507);for(const z of i){const k=d[z];if(!k)continue;const S=l[z],q=k.x*y;k.y*g;const ne=Math.round(.03*g+k.y*(.85*g)),oe=Math.round(q-p/2),ee=Math.round(ne-h/2);if(S){const j=z.replace(/\d+/,""),T=s&&(s.club_id&&String(S.club_id)===String(s.club_id)||s.country_code&&S.country_code===s.country_code),K=Te({...S,_evolution_bonus:S._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:j});T&&((f=s.club)!=null&&f.logo_url||s.image_url),x+=`<div style="position:absolute;left:${oe}px;top:${ee}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${z}">
        <div style="position:relative">${K}</div>
      </div>`}else{const j=z.replace(/\d+/,"");x+=`<div style="position:absolute;left:${oe}px;top:${ee}px;width:${p}px;height:${h}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${z}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${j}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${y}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${y} ${g}">${u}</svg>
      ${x}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(z=>{z.addEventListener("click",()=>Uo(z.dataset.pos,t,e,n))})}function Ho(e,t,i){var a;const{openModal:n,closeModal:r}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var x,h;const d=e.stadDefMap[s.stadium_id],c=((x=d==null?void 0:d.club)==null?void 0:x.logo_url)||null,l=d!=null&&d.image_url?"/icons/"+d.image_url:null,m=e.stadiumCardId===s.id,b=d!=null&&d.country_code&&!c?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,y=(d==null?void 0:d.name)||"Stade",g=y.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=g?g[1].trim():y.slice(0,8),u=((h=g==null?void 0:g[2])==null?void 0:h.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${m?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:b?`<img src="${b}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${m?"#4fc3f7":"#ccc"}">${p}</div>
              ${u?`<div style="font-size:8px;font-weight:700;color:${m?"#4fc3f7":"#aaa"}">${u}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(a=document.getElementById("stad-none"))==null||a.addEventListener("click",()=>{e.stadiumCardId=null,r(),_t(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,r(),_t(t,e,i)})})}function Uo(e,t,i,n){var g,p,u,x,h;const{openModal:r,closeModal:o}=n,a=e.replace(/\d+/,""),s=(g=t.stadiumCards)==null?void 0:g.find(v=>v.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(v=>v.id===c):null;(u=l==null?void 0:l.player)==null||u.id;const m=new Set;Object.entries(t.slots).forEach(([v,E])=>{var z;if(v===e||!E)return;const f=t.playerCards.find(k=>k.id===E);(z=f==null?void 0:f.player)!=null&&z.id&&m.add(f.player.id)}),t.subs.forEach(v=>{var f;const E=t.playerCards.find(z=>z.id===v);(f=E==null?void 0:E.player)!=null&&f.id&&m.add(E.player.id)});const b=new Set,y=t.playerCards.filter(v=>{const E=v.player;return!(E.job===a||E.job2===a)||m.has(E.id)||b.has(E.id)?!1:(b.add(E.id),!0)});y.sort((v,E)=>{const f=v.evolution_bonus||0,z=E.evolution_bonus||0,k=(a==="GK"?v.player.note_g:a==="DEF"?v.player.note_d:a==="MIL"?v.player.note_m:v.player.note_a)+(a===v.player.job||a===v.player.job2?f:0);return(a==="GK"?E.player.note_g:a==="DEF"?E.player.note_d:a==="MIL"?E.player.note_m:E.player.note_a)+(a===E.player.job||a===E.player.job2?z:0)-k}),r(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${y.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+y.map(v=>{const E={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${Te(E,{width:100,showStad:!0,stadDef:d,role:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--tile-fg-dim);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(x=document.getElementById("close-selector"))==null||x.addEventListener("click",o),(h=document.getElementById("remove-player"))==null||h.addEventListener("click",()=>{delete t.slots[e],o(),_t(i,t,n)}),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{t.slots[e]=v.dataset.cardId,o(),_t(i,t,n)})})}function Ko(e,t,i){var l,m,b;const{openModal:n,closeModal:r}=i,o=(l=e.stadiumCards)==null?void 0:l.find(y=>y.id===e.stadiumCardId),a=o&&((m=e.stadDefMap)==null?void 0:m[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(y=>{var u;const g=e.slots[y];if(!g)return;const p=e.playerCards.find(x=>x.id===g);(u=p==null?void 0:p.player)!=null&&u.id&&s.add(p.player.id)}),e.subs.forEach(y=>{var p;const g=e.playerCards.find(u=>u.id===y);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const d=new Set,c=e.playerCards.filter(y=>{var g,p,u;return s.has((g=y.player)==null?void 0:g.id)||d.has((p=y.player)==null?void 0:p.id)?!1:(d.add((u=y.player)==null?void 0:u.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(y=>{const g={...y.player,_evolution_bonus:y.evolution_bonus||0};return`<div class="player-option" data-card-id="${y.id}" style="cursor:pointer">
          ${Te(g,{width:100,showStad:!0,stadDef:a})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--tile-fg-dim)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(b=document.getElementById("close-sub-selector"))==null||b.addEventListener("click",r),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{e.subs.push(y.dataset.cardId),r(),_t(t,e,i)})})}async function Vo(e,t){const{state:i,toast:n,navigate:r}=t,o=e.formationCards.find(d=>d.formation===e.formation),a=(o==null?void 0:o.id)||e.formationCardId;await _.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await _.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await _.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),r("decks")}function _n(e){const t=mi[e]||mi["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Pn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await _.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(a=>!(a.available_from&&t<a.available_from||a.available_until&&t>a.available_until));if(!n.length)return[];let r=n;if(e){const a=n.filter(s=>s.max_per_user!=null);if(a.length){const{data:s}=await _.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",a.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),r=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!r.length)return[];const{data:o}=await _.from("booster_drop_rates").select("*").in("booster_id",r.map(a=>a.id)).order("sort_order");return r.map(a=>({...a,rates:(o||[]).filter(s=>s.booster_id===a.id)}))}async function Yo(e,t){const{data:i}=await _.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await _.from("booster_claims").insert({user_id:e,booster_id:t})}function Wo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,r)=>n+Number(r.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Gn=()=>Object.keys(zt),Xo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ji={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Jo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Te({...t,_evolution_bonus:i},{width:140})}function Nn(e){var r;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((r=Object.entries(t).sort((o,a)=>a[1]-o[1])[0])==null?void 0:r[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function Qo(e,{state:t,navigate:i,toast:n}){var m,b,y;const r=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Pn((b=t.user)==null?void 0:b.id)).map(Nn)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}o.length||(o=Xo.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await _.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),d=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l={};for(const g of o){if(g.allow_duplicates!==!1||!((y=g.rates)!=null&&y.length))continue;const p=[...new Set((g.rates||[]).map(x=>x.card_type))];let u=!1;for(const x of p)if(x==="stadium"){const{data:h}=await _.from("stadium_definitions").select("id");if((h||[]).some(v=>!s.has(v.id))){u=!0;break}}else if(x==="game_changer"){const{data:h}=await _.from("gc_definitions").select("name").eq("is_active",!0);if((h||[]).some(v=>!c.has(v.name))){u=!0;break}}else if(x==="formation"){const{FORMATION_LINKS:h}=await Ln(async()=>{const{FORMATION_LINKS:v}=await import("./special-cards-DZxbxWIu.js").then(E=>E.y);return{FORMATION_LINKS:v}},__vite__mapDeps([0,1]));if(Object.keys(h).some(v=>!d.has(v))){u=!0;break}}else{u=!0;break}u||(l[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${r.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(g=>{const p=g.cost===0||r>=g.cost,u=l[g.id]===!0;return`<div class="booster-card ${!p||u?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=o.find(u=>u.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await Zo(p,{state:t,toast:n,navigate:i,container:e})}catch(u){n(u.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const u=o.find(x=>x.id===g.dataset.boosterId);nr(u)})})}async function Zo(e,{state:t,toast:i,navigate:n,container:r}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await rr();const{data:o}=await _.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((o||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),s=new Set((o||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let d=[],c=null;try{if((m=e.rates)!=null&&m.length)d=await Bi(t.profile,e);else{const y=e.type||"player";y==="player"?d=await Rn(t.profile,e.cardCount,e.cost):y==="game_changer"?d=await On(t.profile,e.cardCount,e.cost):y==="formation"?d=await Hn(t.profile,e.cost):d=await Bi(t.profile,e)}}catch(y){c=y.message||String(y),console.error("[Booster] Erreur:",y)}if(d!=null&&d.length&&e._boosterId&&await Yo(t.user.id,e._boosterId),!(d!=null&&d.length)){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),(b=y.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>y.remove());return}d.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=a.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=s.has(y.formation))});const{data:l}=await _.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),Un(d,e,n)}function er(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function tr(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>mt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>mt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&mt(n)>=6),i.length||(i=e.filter(n=>mt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&mt(n)>=1&&mt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Bi(e,t){if(t.cost>0){const{error:b}=await _.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let n=[];const{data:r,error:o}=await _.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:b}=await _.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=b||[]}else n=r||[];const a=new Set(n.filter(b=>b.card_type==="player").map(b=>b.player_id)),s=new Set(n.filter(b=>b.card_type==="formation").map(b=>b.formation)),d=new Set(n.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),c=new Set(n.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),l=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const y=Wo(t.rates);if(y){if(y.card_type==="player"){const g=k=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[k]||k,p=y.rarity?g(y.rarity):null;let u=_.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(u=u.eq("rarity",p));const{data:x}=await u;let h=x||[];if((y.note_min||y.note_max)&&(h=h.filter(k=>{const S=Math.max(Number(k.note_g)||0,Number(k.note_d)||0,Number(k.note_m)||0,Number(k.note_a)||0);return(!y.note_min||S>=y.note_min)&&(!y.note_max||S<=y.note_max)})),h.length||(y.note_min||y.note_max?(h=x||[],console.warn("[Booster] Aucun joueur avec note",y.note_min,"-",y.note_max,"— fallback rareté uniquement")):h=x||[]),!h.length)continue;let v=h.filter(k=>!l.has(k.id));if(i)v.length||(v=h);else if(v=v.filter(k=>!a.has(k.id)),!v.length)continue;const E=v[Math.floor(Math.random()*v.length)];l.add(E.id);const f=a.has(E.id),{data:z}=await _.from("cards").insert({owner_id:e.id,player_id:E.id,card_type:"player"}).select().single();z&&(m.push({...z,player:E,isDuplicate:f}),_.rpc("record_transfer",{p_card_id:z.id,p_player_id:E.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(y.card_type==="game_changer"){const{data:g}=await _.from("gc_definitions").select("id,name,color,effect,image_url,gc_type").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],u=i?p:p.filter(E=>!d.has(E.name));if(!i&&!u.length)continue;const x=u[Math.floor(Math.random()*u.length)],h=x.name,{data:v}=await _.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:h,gc_definition_id:x.id||null}).select().single();v&&m.push({...v,_gcDef:x})}else if(y.card_type==="formation"){const g=Gn(),p=i?g:g.filter(v=>!s.has(v));if(!i&&!p.length)continue;const u=p[Math.floor(Math.random()*p.length)],x=s.has(u),{data:h}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:u}).select();h!=null&&h[0]&&m.push({...h[0],isDuplicate:x})}else if(y.card_type==="stadium"){const{data:g,error:p}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const u=i?g:g.filter(E=>!c.has(E.id));if(!i&&!u.length)continue;const x=u[Math.floor(Math.random()*u.length)],{data:h,error:v}=await _.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:x.id}).select("id,card_type,stadium_id").single();if(v){console.error("[Booster] insert stadium card:",v.message);continue}h&&m.push({...h,rarity:"normal",_stadiumDef:x})}}}return m}async function Rn(e,t,i){if(i>0){const{error:c}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await _.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const r=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),a=!e.first_booster_opened&&r.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&a?r:c===0?o:n,m=er(),b=tr(l,m);b&&s.push(b)}a&&await _.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await _.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{_.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function On(e,t,i){const{error:n}=await _.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:r}=await _.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=r!=null&&r.length?r:Object.keys(ji).map(m=>({name:m,gc_type:"game_changer"})),a=Array.from({length:t},()=>o[Math.floor(Math.random()*o.length)]),s=a.map(m=>({owner_id:e.id,card_type:"game_changer",gc_type:m.name,gc_definition_id:m.id||null})),{data:d,error:c}=await _.from("cards").insert(s).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(d||[]).map((m,b)=>({...m,_gcDef:a[b]||null}))}async function Hn(e,t){const{error:i}=await _.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await _.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),r=new Set((n||[]).map(l=>l.formation)),o=Gn(),a=o[Math.floor(Math.random()*o.length)],s=r.has(a),{data:d,error:c}=await _.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function Un(e,t,i,n=null){var ee,j;if(!e||e.length===0){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",T.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(T),(ee=T.querySelector("#anim-close-err"))==null||ee.addEventListener("click",()=>T.remove());return}e=[...e].sort((T,K)=>{const Z=T.player?mt(T.player):-1;return(K.player?mt(K.player):-1)-Z});const r=document.createElement("div");r.id="booster-anim-overlay",r.innerHTML=`
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
  `,document.body.appendChild(r);let o=!1;const a=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=T=>T.touches&&T.touches[0]?T.touches[0].clientX:T.clientX;function l(T){o||(d=!0,s.style.opacity="1",m(T))}function m(T){if(!d||o)return;const K=a.getBoundingClientRect(),Z=c(T)-K.left,ue=Math.max(0,Math.min(1,Z/K.width));s.style.width=ue*K.width+"px",ue>=.82&&y()}function b(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function y(){var K;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(K=document.getElementById("cut-flash"))==null||K.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const T=document.getElementById("cut-hint");T&&(T.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",x(0)},620)}a.addEventListener("pointerdown",l),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),a.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let g=0,p=!1;const u=new Set;function x(T){g=T,document.getElementById("reveal-phase").style.display="flex",h(),v(T,0),S()}function h(){const T=document.getElementById("card-dots");T&&(T.innerHTML=e.map((K,Z)=>`<div class="card-dot" data-i="${Z}" style="width:8px;height:8px;border-radius:50%;background:${Z===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),T.querySelectorAll(".card-dot").forEach(K=>K.addEventListener("click",()=>f(parseInt(K.dataset.i)))))}function v(T,K){var $,G;const Z=e[T],ue=document.getElementById("card-counter"),fe=document.getElementById("card-track");ue&&(ue.textContent=`Carte ${T+1} / ${e.length}`);const M=document.getElementById("reveal-btns");M&&(M.style.display=T===e.length-1?"flex":"none");const Y=Z.card_type==="player"&&(($=Z.player)==null?void 0:$.rarity)==="legende",ce=!u.has(T);u.add(T);let U=0;if(Z.card_type==="player"&&Z.player){const H=Z.player,R=H.job||"ATT";U=Number(R==="GK"?H.note_g:R==="DEF"?H.note_d:R==="MIL"?H.note_m:H.note_a)||0}const V=H=>{fe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${Y?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${ir(Z)}</div>
          ${Z.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const R=document.getElementById("current-card-wrap");K!==0?(R.style.transition="none",R.style.transform=`translateX(${K>0?100:-100}%)`,requestAnimationFrame(()=>{R.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",R.style.transform="translateX(0)"})):R.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),H||Y?ne():oe(),h()};ce&&(((G=Z.player)==null?void 0:G.rarity)==="legende"||U>=8)&&Z.card_type==="player"&&Z.player?E(Z,()=>V(!0)):V(!1)}function E(T,K){var Se;p=!0;const Z=T.player,ue=`https://flagsapi.com/${Z.country_code}/flat/64.png`,fe=(Se=Z.clubs)==null?void 0:Se.logo_url,M=At(Z),Y=Z.job||"ATT",ce=Number(Y==="GK"?Z.note_g:Y==="DEF"?Z.note_d:Y==="MIL"?Z.note_m:Z.note_a)||0,U=T.evolution_bonus||0,V=ce+U,$=V>=18&&V<=20,G=V>=18,H=document.getElementById("walkout-overlay"),R=document.getElementById("walkout-stage");if(!H||!R){p=!1,K();return}let W=null;$&&(W=Wi("/sounds/Legendary.mp3",.8)),H.style.display="flex";const B=()=>{const ve=R.firstElementChild;ve&&(ve.classList.remove("wo-in"),ve.classList.add("wo-out"))},N=1800,pe=400;R.innerHTML=`<img class="wo-in" src="${ue}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(B,N),setTimeout(()=>{var ve;R.innerHTML=fe?`<img class="wo-in" src="${fe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ve=Z.clubs)==null?void 0:ve.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},N+pe),setTimeout(B,N*2+pe),setTimeout(()=>{R.innerHTML=M?`<img class="wo-in" src="${M}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(N+pe)*2),setTimeout(B,(N+pe)*2+N);const he=G?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[Y]||"#fff";setTimeout(()=>{R.innerHTML=`<div class="wo-in" style="
        font-size:${G?"120px":"90px"};font-weight:900;color:${he};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${he}, 0 0 60px ${he};
        ${G?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${V}
      </div>`,G&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(N+pe)*3),setTimeout(B,(N+pe)*3+N),setTimeout(()=>{H.style.display="none",R.innerHTML="",p=!1,W&&!$&&W.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),K()},(N+pe)*4)}function f(T){if(p||T<0||T>=e.length||T===g)return;const K=T>g?1:-1;g=T,v(T,K)}function z(){f(g+1)}function k(){f(g-1)}function S(){const T=document.getElementById("card-viewport");if(!T||T._swipeBound)return;T._swipeBound=!0;let K=0,Z=0,ue=0,fe=!1;const M=$=>$.touches?$.touches[0].clientX:$.clientX,Y=$=>$.touches?$.touches[0].clientY:$.clientY,ce=$=>{fe=!0,K=M($),Z=Y($),ue=0},U=$=>{if(!fe)return;ue=M($)-K;const G=Y($)-Z;if(Math.abs(ue)<Math.abs(G))return;const H=document.getElementById("current-card-wrap");H&&(H.style.transition="none",H.style.transform=`translateX(${ue*.6}px) rotate(${ue*.02}deg)`)},V=()=>{if(!fe)return;fe=!1;const $=document.getElementById("current-card-wrap"),G=55;ue<=-G&&g<e.length-1?z():ue>=G&&g>0?k():$&&($.style.transition="transform .2s ease",$.style.transform="translateX(0)")};T.addEventListener("pointerdown",ce),T.addEventListener("pointermove",U),T.addEventListener("pointerup",V),T.addEventListener("pointercancel",V),T.addEventListener("touchstart",ce,{passive:!0}),T.addEventListener("touchmove",U,{passive:!0}),T.addEventListener("touchend",V),T.addEventListener("click",$=>{if(Math.abs(ue)>8)return;const G=T.getBoundingClientRect();$.clientX-G.left>G.width/2?z():k()})}let q=null;function ne(){const T=document.getElementById("fireworks-canvas");if(!T)return;T.width=window.innerWidth,T.height=window.innerHeight;const K=T.getContext("2d"),Z=[];function ue(){const M=Math.random()*T.width,Y=Math.random()*T.height*.6,ce=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],U=ce[Math.floor(Math.random()*ce.length)];for(let V=0;V<60;V++){const $=Math.PI*2/60*V,G=2+Math.random()*5;Z.push({x:M,y:Y,vx:Math.cos($)*G,vy:Math.sin($)*G,alpha:1,color:U,size:2+Math.random()*3})}}ue(),q=setInterval(ue,600);function fe(){if(document.getElementById("fireworks-canvas")){K.clearRect(0,0,T.width,T.height);for(let M=Z.length-1;M>=0;M--){const Y=Z[M];if(Y.x+=Y.vx,Y.y+=Y.vy+.08,Y.vy*=.98,Y.alpha-=.018,Y.alpha<=0){Z.splice(M,1);continue}K.globalAlpha=Y.alpha,K.fillStyle=Y.color,K.beginPath(),K.arc(Y.x,Y.y,Y.size,0,Math.PI*2),K.fill()}K.globalAlpha=1,(q!==null||Z.length>0)&&requestAnimationFrame(fe)}}fe()}function oe(){q!==null&&(clearInterval(q),q=null);const T=document.getElementById("fireworks-canvas");T&&T.getContext("2d").clearRect(0,0,T.width,T.height)}if(n){const T=document.getElementById("reveal-btns");T&&(T.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{oe(),r.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{oe(),r.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{oe(),r.remove(),i("boosters")})}function ir(e){var t,i,n,r;if(e.card_type==="player"&&e.player)return Jo(e);if(e.card_type==="game_changer"){const o=e._gcDef,a=(o==null?void 0:o.name)||e.gc_type||"Game Changer",s=(o==null?void 0:o.effect)||((t=ji[e.gc_type])==null?void 0:t.desc)||"",d=o!=null&&o.image_url?`/icons/${o.image_url}`:null,c=((i=ji[e.gc_type])==null?void 0:i.icon)||"⚡";return tt(a,d,c,s,{width:170})}if(e.card_type==="formation")return zi(e.formation,zt[e.formation],{width:160});if(e.card_type==="stadium"){const o=e._stadiumDef,a=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",d=o!=null&&o.image_url?`/icons/${o.image_url}`:((r=o==null?void 0:o.club)==null?void 0:r.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),c=`${s}<br>+10 ⭐ joueurs alliés`;return ti(a,d,c,{width:170})}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function nr(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const r={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",a=>{a.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}or()}function or(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function rr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const r=document.getElementById("mw-ad-cd");r&&(r.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function ar(e,{state:t,navigate:i,toast:n,refreshProfile:r}){var b,y;const{data:o}=await _.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let a=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await _.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Pn()).find(u=>(u.name||"").toLowerCase().includes("new player"));p&&(s=Nn(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const d=a.length;let c=0;e.innerHTML=`
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
  </div>`;const l=async()=>{await _.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function m(){var h;if(c>=d||!a.length){await _.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),r&&await r(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=a[0],{data:p}=await _.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let u=[];try{if(g.type==="formation")u=await Hn(t.profile,0);else if(g.type==="game_changer")u=await On(t.profile,g.count||3,0);else if(s&&((h=s.rates)!=null&&h.length)){const v={...s,cost:0,cardCount:g.count||s.cardCount||5};u=await Bi(t.profile,v),g.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(f=>f.player&&f.player.job==="GK")||await sr(t.profile,u),await _.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await Rn(t.profile,g.count||5,0)}catch(v){n(v.message||"Erreur ouverture booster","error");return}a.shift(),c++,await l();const x=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Un(u,x,i,()=>{m()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>m())}async function sr(e,t){try{const{data:i}=await _.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],r=t.findIndex(a=>a.player);if(r===-1)return;const o=t[r];await _.from("cards").update({player_id:n.id}).eq("id",o.id),t[r]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Rt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},dr={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i,n,r){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",r)}function qi(e,t){var o,a;const i=e.player,n=e.evolution_bonus||0,r=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&r>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&r>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&r>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&r>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function ai(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(r=>{Array.isArray(r)&&r.forEach(o=>{const a=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(a||s)&&(o.stadiumBonus=!0)})}),e}function gi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(r=>{if(!r)return;const o=i&&String(r.club_id)===String(i),a=n&&String(r.country_code)===String(n);(o||a)&&(r.stadiumBonus=!0)}),e}function yt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Kn(){const e=Math.random()*100;return e<10?10:e<30?5:3}function yi(e,t){const i=Rt[t]||Rt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===a).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:a})),d=yt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}const o=[...e];for(const a of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[a];c++){let l=o.findIndex(m=>m.job===a);if(l===-1&&(l=o.findIndex(m=>m.job2===a)),l===-1&&(l=0),o[l]){const m={...o[l],_line:a};s.push(m),o.splice(l,1)}}const d=yt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[a]=s}return n}function st(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function it(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function hi(e,t,i){const r=new Set,o=t.filter(l=>{const m=l.gc_type||l.id;return r.has(m)?!1:(r.add(m),!0)});let a=[];function s(l,m){const b=l._gcDef,y=(b==null?void 0:b.name)||l.gc_type,g=b!=null&&b.image_url?`/icons/${b.image_url}`:null,p=tt(y,g,"⚡",(b==null?void 0:b.effect)||"",{width:100});return`<div class="gc-select-card" data-id="${l.id}"
      style="position:relative;flex-shrink:0;cursor:pointer;border-radius:10px;
        outline:${m?"3px solid #FFD700":"none"};
        box-shadow:${m?"0 0 18px #FFD700":"none"};
        transform:${m?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      ${p}
      ${m?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(l)};function c(){var m,b,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const l=a.length>0;e.innerHTML=`
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
        ${o.map(g=>{const p=a.find(u=>u.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,u=o.find(h=>h.id===p);if(!u)return;const x=a.findIndex(h=>h.gc_type===u.gc_type);x>-1?a.splice(x,1):a.length<3&&a.push(u),c()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{l&&d(a)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>d([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{a.length&&(a=[],c())})}c()}function lr(e,t){var r;const i=((r=t==null?void 0:t.state)==null?void 0:r.params)||{},n=e||i.matchMode||"vs_ai_easy";return n==="friend"?`Match vs ${i.friendName||"Ami"}`:n==="random"?"Match vs Random":n==="ranked"?"Match Classé":n==="mini_league"||n==="mini-league"?"🏆 Match de Mini League":`Match vs IA — ${n.replace("vs_ai_","").toUpperCase()}`}async function cr(e,t,i){const{state:n,navigate:r}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){Tt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>r("decks"));return}const a=o.map(b=>b.id),{data:s}=await _.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),d=[...new Set((s||[]).filter(b=>{var y,g;return((y=b.card)==null?void 0:y.card_type)==="stadium"&&((g=b.card)==null?void 0:g.stadium_id)}).map(b=>b.card.stadium_id))],c={};if(d.length){const{data:b}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(b||[]).forEach(y=>{c[y.id]=y}),(s||[]).forEach(y=>{var g,p;((g=y.card)==null?void 0:g.card_type)==="stadium"&&((p=y.card)!=null&&p.stadium_id)&&(y.card._stadiumDef=c[y.card.stadium_id]||null)})}let l=0;function m(){var f,z,k,S,q,ne,oe;const b=o[l],y=(s||[]).filter(ee=>ee.deck_id===b.id),g=y.filter(ee=>{var j;return ee.is_starter&&((j=ee.card)==null?void 0:j.player)}).map(ee=>qi(ee.card,ee.position)),p=y.find(ee=>{var j;return((j=ee.card)==null?void 0:j.card_type)==="formation"}),u=b.formation||((f=p==null?void 0:p.card)==null?void 0:f.formation)||"4-4-2";let x=g.length>=11?yi(g,u):null,h=((z=b.stadium_card)==null?void 0:z.stadium_def)||null;h&&x&&(x=ai(x,h));const v=g.length>=11;st(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${lr(i,t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${b.name}</div>
            <div style="font-size:11px;opacity:.6">${u} · ${g.length}/11${b.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((k=h.club)==null?void 0:k.encoded_name)||h.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${x?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((ee,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${v?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${v?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${v?"pointer":"default"}">
          ${v?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function ee(){const j=e.querySelector(".deck-preview-wrap"),T=e.querySelector("#deck-swipe-zone");if(!j||!T||!x)return;const K=T.clientWidth>=900,Z=Math.max(200,T.clientHeight-(K?60:40)),fe=Math.max(200,T.clientWidth-16),M=K?Math.min(117,Math.max(52,Math.round(fe*.22))):Math.max(44,Math.round(fe*.168));if(Z<220||fe<220){requestAnimationFrame(ee);return}const Y=K?null:Math.round(M*.55);j.innerHTML=Ot(x,u,null,[],fe,Z,[],Y),j.style.cssText=`width:${fe}px;height:${Z}px;overflow:hidden;margin:${K?0:60}px auto 0`;const ce=j.querySelector("svg");ce&&(ce.style.cssText="display:block;width:100%;height:100%",ce.setAttribute("preserveAspectRatio",K?"xMidYMid meet":"none"))})),(S=document.getElementById("prev-deck"))==null||S.addEventListener("click",()=>{l>0&&(l--,m())}),(q=document.getElementById("next-deck"))==null||q.addEventListener("click",()=>{l<o.length-1&&(l++,m())}),(ne=document.getElementById("validate-deck"))==null||ne.addEventListener("click",()=>{if(!v)return;const ee=t.state.params||{};t.navigate("match",{...ee,matchMode:ee.matchMode||i,deckId:b.id})}),(oe=document.getElementById("cancel-deck-select"))==null||oe.addEventListener("click",()=>{it(e),r("home")});const E=document.getElementById("deck-swipe-zone");if(E){let ee=0,j=0;E.addEventListener("touchstart",T=>{ee=T.touches[0].clientX,j=T.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",T=>{const K=T.changedTouches[0].clientX-ee,Z=T.changedTouches[0].clientY-j;Math.abs(K)<40||Math.abs(K)<Math.abs(Z)||(K<0&&l<o.length-1?(l++,m()):K>0&&l>0&&(l--,m()))},{passive:!0})}}m()}function ht(e,t=44,i=58,n=null){return Te(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function Je(e,t,i,n,r){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((s,d)=>{const c=s._line||s.job||"MIL";let l=s.boost||0;if(s.stadiumBonus&&(n==="attack"&&(c==="ATT"||c==="MIL")||n==="defense"&&(c==="GK"||c==="DEF"||c==="MIL")?l+=10:n||(l+=10)),a+=Te(s,{width:40,role:c,extraNote:l}),d<o.length-1){const m=o[d+1],b=Bn(s,m,r)?Ut(s,m):null;a+=`<div style="width:7px;height:3px;background:${!b||b==="#ff3333"||b==="#cc2222"?"rgba(255,255,255,0.12)":b};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function _i(e,t,i,n,r=310,o=310,a=[],s=null){const d=zt[t]||{},c=Ri(t)||Oi[t]||[],l={},m=["ATT","MIL","DEF","GK"];for(const x of m)(e[x]||[]).forEach((v,E)=>{l[`${x}${E+1}`]=v});function b(x){const h=d[x];return h?{x:h.x*r,y:h.y*o}:null}let y="";for(const[x,h]of c){const v=b(x),E=b(h);if(!v||!E)continue;const f=l[x],z=l[h],k=Ut(f,z);k==="#00ff88"||k==="#FFD700"?(y+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,y+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):y+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}"
        stroke="${k}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(r*.225)),117):Math.max(44,Math.round(r*.168)),p=Math.round(g*657/507);for(const[x,h]of Object.entries(l)){const v=b(x);if(!v||!h)continue;const E=x.replace(/[0-9]/g,""),f=a.includes(h.cardId),z=i==="attack"&&(["MIL","ATT"].includes(E)||f)&&!h.used||i==="defense"&&["GK","DEF","MIL"].includes(E)&&!h.used,k=n.includes(h.cardId);let S=h.boost||0,q=!1;h.stadiumBonus&&(i==="attack"&&(E==="ATT"||E==="MIL")||i==="defense"&&(E==="GK"||E==="DEF"||E==="MIL")?(S+=10,q=!0):i||(S+=10,q=!0));const ne=Math.round(v.x-g/2),oe=Math.round(v.y-p/2);if(h.used){y+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ne}" y="${oe}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${h.cardId}" data-role="${E}" style="cursor:pointer"/>`;continue}const ee=Te({...h,_evolution_bonus:0,stadiumBonus:!1},{width:g,showStad:!1,stadDef:null,role:E,extraNote:S,_cardOffset:30,_forceStadColor:q}),j=k?`position:absolute;top:30px;left:0;width:${g}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";y+=`<foreignObject x="${ne-2}" y="${oe-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${ee}
        ${k?`<div style="${j}"></div>`:""}
      </div>
    </foreignObject>`,z&&(y+=`<rect x="${ne}" y="${oe}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${k?"selected":""}" data-card-id="${h.cardId}" data-role="${E}" style="cursor:pointer"/>`)}const u=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-u} ${-u} ${r+u*2} ${o+u*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${y}
  </svg>`}function Ot(e,t,i,n,r=300,o=300,a=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${_i(e,t,i,n,r,o,a,s)}
  </div>`}async function wi(e,t,i,n){var z;const{state:r,navigate:o,toast:a}=t;st(e);const s=r.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return cr(e,t,i);const d=s.deckId;let c,l,m,b;try{const k=await Promise.all([_.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),_.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=k[0].data,m=k[0].error,l=k[1].data,b=k[1].error}catch(k){console.error("[Match] Exception chargement deck:",k),Tt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),Tt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const y=(l||[]).filter(k=>{var S;return k.is_starter&&((S=k.card)==null?void 0:S.player)}).map(k=>qi(k.card,k.position)),g=(l||[]).filter(k=>{var S;return!k.is_starter&&((S=k.card)==null?void 0:S.player)}).map(k=>qi(k.card,k.position));if(y.length<11){Tt(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>o("decks"));return}const p=(l||[]).find(k=>{var S;return((S=k.card)==null?void 0:S.card_type)==="formation"}),u=(c==null?void 0:c.formation)||((z=p==null?void 0:p.card)==null?void 0:z.formation)||"4-4-2",{data:x,error:h}=await _.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",r.profile.id).eq("card_type","game_changer"),{data:v}=await _.from("gc_definitions").select("*").eq("is_active",!0),E=(x||[]).map(k=>({...k,_gcDef:(v==null?void 0:v.find(S=>S.name===k.gc_type||S.id===k.gc_definition_id))||null}));let f=null;if(c!=null&&c.stadium_card_id){const{data:k}=await _.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(k!=null&&k.stadium_id){const{data:S}=await _.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",k.stadium_id).single();f=S||null}}n({deckId:d,formation:u,starters:y,subsRaw:g,gcCardsEnriched:E,gcDefs:v||[],stadiumDef:f})}function It(){return Math.min(window.innerWidth-40,860)}function Nt(){return Math.round(It()*1.1)}function Vn(e){var r,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((r=e.clubs)==null?void 0:r.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:At(e)}}function pr(e,t,i,n="Adversaire"){An("/sounds/match-opening.mp3",.3);const r=It(),o=Nt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${r}px;margin:0 auto">
        ${_i(e,t,null,[],r,o)}
      </div>
    </div>`}function Yn(e){var o,a,s;if(!e)return"";const t=d=>d?Te({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function Qe(e,t,i,n,r){Wi("/sounds/goal.mp3",.7);const o=document.getElementById("goal-anim-overlay");o&&o.remove();const a=document.createElement("div");a.id="goal-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Te({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(a.innerHTML=`
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
      }`,document.head.appendChild(d)}setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),r==null||r()},400)},1800)}function ur(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const r=document.createElement("div");r.id="sub-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),a=e?Te({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Te({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";r.innerHTML=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.3s",setTimeout(()=>r.remove(),300)},i)}function Wn(e,t){const i=Pe(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function xt(e,t){return e.reduce((i,n)=>i+Wn(n,t),0)}function bt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ut(e[i],e[i+1]);n==="#00ff88"?t+=10:n==="#FFD700"&&(t+=5)}return t}function xi(e,t,i,n,r){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,a)=>{const s=a<e.length-1?Ut(o,e[a+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+10":s==="#FFD700"?"+5":"";return Wn(o,r),o.stadiumBonus||r&&(r.club_id&&String(o.club_id)===String(r.club_id)||r.country_code&&(o.country_code,r.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${a}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Te({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:r,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${a<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${a}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${xt(e,r)} + ${bt(e)} liens = <b style="color:#fff">${xt(e,r)+bt(e)}</b>
      </div>
    </div>`}async function fr(e,t){const{state:i}=t,r=(i.params||{}).matchMode||"vs_ai_easy",o=r.replace("vs_ai_",""),a=r;await wi(e,t,r,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:m,gcDefs:b,stadiumDef:y})=>{try{let g=yi(c,d);y&&(g=ai(g,y),gi(l,y));const p=await mr(d,o),u=p.lines||p,x=async h=>{try{const v=a==="vs_ai_club"?"club":a,{data:E,error:f}=await _.from("matches").insert({home_id:i.profile.id,away_id:null,mode:v,home_deck_id:s,status:"in_progress"}).select().single();if(f){console.error("[MatchIA] Erreur création match:",f),Tt(e,"⚠️","Impossible de créer le match ("+f.message+").","Retour",()=>t.navigate("home"));return}const z=p.stadiumDef||null;z&&u&&(ai(u,z),gi(p.subs||[],z));const k={gcDefs:b||[],matchId:E==null?void 0:E.id,mode:a,difficulty:o,formation:d,homeTeam:g,aiTeam:u,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:z,homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};yr(e,k,t)}catch(v){console.error("[MatchIA] Exception launchMatch:",v),Tt(e,"⚠️","Erreur au lancement du match : "+v.message,"Retour",()=>t.navigate("home"))}};if(!m.length){x([]);return}hi(e,m,x)}catch(g){console.error("[MatchIA] Exception setup:",g),Tt(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function mr(e,t){var u;const{data:i}=await _.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:gr(e),subs:[],gcCards:[],stadiumDef:null};const n=Rt[e]||Rt["4-4-2"],r={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function a(x,h,v){var E,f;return o.add(x.id),{cardId:"ai-"+x.id+"-"+v,id:x.id,firstname:x.firstname,name:x.surname_real,country_code:x.country_code,club_id:x.club_id,job:x.job,job2:x.job2,note_g:Number(x.note_g)||0,note_d:Number(x.note_d)||0,note_m:Number(x.note_m)||0,note_a:Number(x.note_a)||0,rarity:x.rarity,skin:x.skin,hair:x.hair,hair_length:x.hair_length,clubName:((E=x.clubs)==null?void 0:E.encoded_name)||null,clubLogo:((f=x.clubs)==null?void 0:f.logo_url)||null,boost:0,used:!1,_line:h}}for(const x of["GK","DEF","MIL","ATT"]){const h=i.filter(k=>k.job===x&&!o.has(k.id)),v=i.filter(k=>k.job!==x&&!o.has(k.id)),E=[...h,...v],f=[];for(let k=0;k<n[x];k++){const S=E[k];S&&f.push(a(S,x,k))}const z=yt(f.length);f.forEach((k,S)=>{k._col=z[S]}),r[x]=f}const d=i.filter(x=>!o.has(x.id)).slice(0,5).map((x,h)=>a(x,x.job,100+h)),m=Object.keys(je).sort(()=>Math.random()-.5).slice(0,3).map((x,h)=>{var v,E;return{id:"ai-gc-"+h,gc_type:x,name:((v=je[x])==null?void 0:v.name)||x,icon:((E=je[x])==null?void 0:E.icon)||"⚡"}}),b=Object.values(r).flat(),y={};b.forEach(x=>{x.club_id&&(y[x.club_id]=(y[x.club_id]||0)+1)});const g=(u=Object.entries(y).sort((x,h)=>h[1]-x[1])[0])==null?void 0:u[0];let p=null;if(g){const{data:x}=await _.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();x&&(p={club_id:x.id,country_code:null,name:x.encoded_name+" Stadium",club:{encoded_name:x.encoded_name,logo_url:x.logo_url}})}return{lines:r,subs:d,gcCards:m,stadiumDef:p}}function gr(e){const t=Rt[e]||Rt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let r=0;for(const o of["GK","DEF","MIL","ATT"]){const a=[];for(let d=0;d<t[o];d++){const c=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+r,id:"fake-"+r,firstname:"IA",name:n[r%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),r++}const s=yt(a.length);a.forEach((d,c)=>{d._col=s[c]}),i[o]=a}return i}function yr(e,t,i){var r;An("/sounds/match-opening.mp3",.3);const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
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
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),a=e.querySelector("#opponent-swipe-zone");if(!o||!a)return;const s=a.clientWidth>=900,d=Math.max(200,a.clientHeight-(s?8:40)),c=Math.max(200,a.clientWidth-(s?8:16)),l=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=Ot(t.aiTeam,t.formation,null,[],c,d,[],l),o.style.cssText=`width:${c}px;height:${d}px;overflow:hidden;flex-shrink:0`;const m=o.querySelector("svg");m&&(m.style.cssText="display:block;width:100%;height:100%",m.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>xr(e,t,i),5e3)}const Ke=e=>Vn(e);function xr(e,t,i){const n=t.homeTeam.MIL||[],r=t.aiTeam.MIL||[],o=t.stadiumDef||null,a=t.aiStadiumDef||null,s=xt(n,o)+bt(n),d=xt(r,a)+bt(r),c=s>=d;e.innerHTML=`
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

    ${xi(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${xi(r,"IA","#bb2020","ai",a)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const l=()=>{const g=(p,u)=>e.querySelectorAll(p).forEach((x,h)=>{setTimeout(()=>{x.style.opacity="1",x.style.transform="translateY(0) scale(1)"},u+h*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,u)=>{setTimeout(()=>{p.style.opacity="1"},u*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(u=>u.style.opacity="1")},1250),setTimeout(()=>{m("score-home",s,800),m("score-ai",d,800)},1500)};function m(g,p,u){const x=document.getElementById(g);if(!x)return;const h=performance.now(),v=E=>{const f=Math.min(1,(E-h)/u);x.textContent=Math.round(p*(1-Math.pow(1-f,3))),f<1?requestAnimationFrame(v):x.textContent=p};requestAnimationFrame(v)}requestAnimationFrame(l),t.attacker=c?"home":"ai";const b=c?Kn():null;c&&(t.boostCard={value:b}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Ke(g)),aiPlayers:r.map(g=>Ke(g)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const y=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",we(e,t,i),t.attacker==="ai"&&setTimeout(()=>Qi(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),u=document.getElementById(c?"duel-row-home":"duel-row-ai"),x=document.getElementById(c?"duel-row-ai":"duel-row-home"),h=c?g:p,v=c?p:g;h&&(h.style.fontSize="80px",h.style.color=c?"#FFD700":"#ff6b6b",h.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),v&&(v.style.opacity="0.25"),setTimeout(()=>{u&&(u.style.transformOrigin="center",u.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",u.style.zIndex="5"),setTimeout(()=>{var f;const E=document.getElementById("duel-shock");if(E){const z=(f=x||u)==null?void 0:f.getBoundingClientRect(),k=e.querySelector(".match-screen").getBoundingClientRect();z&&(E.style.top=z.top-k.top+z.height/2+"px"),E.style.animation="shockwave .5s ease-out forwards"}x&&(x.style.transformOrigin="center",x.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var f;const E=document.getElementById("duel-finale");E&&(E.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${b}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,E.style.transition="opacity .45s ease",E.style.opacity="1",E.style.pointerEvents="auto",(f=document.getElementById("start-match-btn"))==null||f.addEventListener("click",y))},600)},700)},2800)}function we(e,t,i){var ne,oe,ee,j,T,K,Z,ue,fe;const n=t.selected.map(M=>M.cardId),r=t.usedSubIds||[],o=t.homeSubs.filter(M=>!r.includes(M.cardId)),s=Object.values(t.homeTeam).flat().filter(M=>M.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(M=>!M.used),c=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(M=>!M.used),l=Ht(t.aiTeam),m=d.length===0&&c.length===0&&!l,b=(t.homeTeam.DEF||[]).filter(M=>!M.used),y=(t.homeTeam.GK||[]).filter(M=>!M.used);let g=[];t.phase==="attack"&&d.length===0&&(l?(g=b.map(M=>M.cardId),b.length===0&&(g=g.concat(y.map(M=>M.cardId)))):m&&(g=[...b,...y].map(M=>M.cardId))),t.log[t.log.length-1];const p=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",x=t.phase==="defense",h=t.phase==="finished",E=(t.homeSubs||[]).filter(M=>!(t.usedSubIds||[]).includes(M.cardId)).length>0&&t.subsUsed<t.maxSubs,f=u&&d.length===0&&g.length===0&&!E,z=t.gcCards.filter(M=>!t.usedGc.includes(M.id)),k=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const Y=t.pendingAttack;let ce="";if(t.selected.length>0){const U=t.selected.map($=>({...(t.homeTeam[$._role]||[]).find(H=>H.cardId===$.cardId)||$,_line:$._role})),V=ri(U,t.modifiers.home,t.formation);ce=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
              <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${t.selected.length}/3)</div>
              <div style="display:flex;justify-content:center">${Je(U.map($=>({...$,used:!1})),"#3a7bd5",V.total,"defense",t.formation)}</div>
            </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",Y.total,"attack",t.formation)}</div>
            ${ce}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${Je((Y.players||[]).map(ce=>({...ce,used:!1})),"#00ff88",Y.total,"attack",t.formation)}</div>
          </div>`}if(t.phase==="attack"&&t.selected.length>0){const Y=t.selected.map(U=>{const V=(t.homeTeam[U._role]||[]).find(G=>G.cardId===U.cardId)||U,$=["GK","DEF"].includes(U._role);return{...V,_line:U._role,...$?{note_a:Math.max(1,Number(V.note_a)||0)}:{}}}),ce=oi(Y,t.modifiers.home,t.formation);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
            <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${t.selected.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Y.map(U=>({...U,used:!1})),"#FFD700",ce.total,"attack",t.formation)}</div>
          </div>`}const M=t.log[t.log.length-1];return M?'<div style="padding:2px 4px">'+Yn(M)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const M=window.innerWidth>=700,Y=(B,N,pe)=>{var Ae,Be;const de=(t.gcDefs||[]).find(ke=>ke.name===B.gc_type),he=(de==null?void 0:de.name)||B.gc_type,Se=(de==null?void 0:de.effect)||((Ae=je[B.gc_type])==null?void 0:Ae.desc)||"",ve=de!=null&&de.image_url?`/icons/${de.image_url}`:null,Ie=((Be=je[B.gc_type])==null?void 0:Be.icon)||"⚡";return`<div class="gc-mini" data-gc-id="${B.id}" data-gc-type="${B.gc_type}" style="flex-shrink:0;cursor:pointer">
          ${tt(he,ve,Ie,Se,{width:N})}
        </div>`},ce=(B,N)=>{var pe;return`<div id="boost-card"
          style="box-sizing:border-box;width:${B}px;height:${N}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(N*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(N*.2)}px">⚡</div>
            <div style="font-size:${Math.round(N*.09)}px;color:#000;font-weight:900">+${(pe=t.boostCard)==null?void 0:pe.value}</div>
          </div>`},U=(B,N)=>N?ce(95,162):Y(B,95),V=(B,N)=>N?ce(68,116):Y(B,68),$=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",G=h?`<button id="btn-results" style="${$};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:p?`<div style="${$};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:f?`<button id="btn-pass" style="${$};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${$};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${$};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,H=u||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",R=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(B=>`<div class="sub-btn-col" data-sub-id="${B.cardId}" style="cursor:pointer;flex-shrink:0">${ht(B,76,100)}</div>`).join("")}
      </div>`,W=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${Ot(t.homeTeam,t.formation,t.phase,n,M?1300:It(),M?600:Nt(),g)}
        </div>
      </div>`;return M?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${R}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${W}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${G}${H}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${z.map(B=>U(B,!1)).join("")}
            ${k?U(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(t.homeTeam,t.formation,t.phase,n,M?1300:It(),M?600:Nt(),g)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${z.map(B=>V(B,!1)).join("")}
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
          <div>${G}${H}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(M=>{var Y,ce,U;if(M.type==="duel"){const V=M.isGoal,$=M.homeScored?"#FFD700":V?"#ff6b6b":"rgba(255,255,255,0.3)",G=M.homeScored?"⚽ BUT !":V?"⚽ BUT IA !":(Y=M.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${V?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${$};margin-bottom:4px">
                <div style="font-size:9px;color:${$};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${G}</div>
                ${(ce=M.homePlayers)!=null&&ce.length?`<div style="margin-bottom:3px">${Je(M.homePlayers,"rgba(255,255,255,0.7)",M.homeTotal,void 0,t.formation)}</div>`:""}
                ${(U=M.aiPlayers)!=null&&U.length?`<div style="opacity:0.7">${Je(M.aiPlayers,"#ff6b6b",M.aiTotal,void 0,t.formation)}</div>`:""}
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
  </div>`;function S(){const M=e.querySelector(".match-screen");if(!M)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);M.style.bottom="auto",M.style.height=Y+"px",M.style.minHeight=Y+"px",M.style.maxHeight=Y+"px",M.style.overflow="hidden";const ce=e.querySelector("#mobile-action-bar"),U=e.querySelector("#mobile-play-area");ce&&U&&(U.style.paddingBottom=ce.offsetHeight+"px")}if(S(),setTimeout(S,120),setTimeout(S,400),setTimeout(S,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",S),window.visualViewport.addEventListener("scroll",S)),window.addEventListener("resize",S)),function(){const Y=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!Y)return;const ce=Y.closest("#match-terrain-wrap");ce&&(ce.style.cssText="position:relative;width:100%;height:100%;padding:0"),Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const M=e.querySelector(".terrain-wrapper svg");if(M){const Y=M.closest("#match-terrain-wrap");Y&&(Y.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),t.phase==="attack"||t.phase==="defense"){let M=!1,Y=30;const ce=()=>document.getElementById("match-timer"),U=()=>{const V=ce();if(!V)return;const $=String(Math.floor(Y/60)).padStart(2,"0"),G=String(Y%60).padStart(2,"0");V.textContent=` ${$}:${G}`,V.style.color=M?"#ff2222":"#ff9500",V.style.fontWeight="900"};U(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!M)M=!0,Y=15,U(),zn("/sounds/timer-urgent.mp3",.6);else{clearInterval(t._timerInt),t._timerInt=null,Ue(),t.homeScore=0,t.aiScore=3;const V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",V.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(V),setTimeout(()=>{V.remove(),vt(e,t,i)},2500)}else U()},1e3)}(ne=document.getElementById("match-quit"))==null||ne.addEventListener("click",()=>{it(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,vt(e,t,i))}),(oe=document.getElementById("view-ai"))==null||oe.addEventListener("click",()=>Ir(t,i)),(ee=document.getElementById("toggle-history"))==null||ee.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var M;(M=document.getElementById("match-history-panel"))==null||M.classList.remove("open")}),(T=document.getElementById("btn-action"))==null||T.addEventListener("click",()=>{t.selected.length!==0&&(u?vr(e,t,i):x&&hr(e,t,i))}),(K=document.getElementById("btn-results"))==null||K.addEventListener("click",()=>vt(e,t,i)),(Z=document.getElementById("btn-pass"))==null||Z.addEventListener("click",()=>{if(t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),Di(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(e,t,i);return}t.phase="ai-attack",we(e,t,i),setTimeout(()=>Qi(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(M=>{M.addEventListener("click",()=>br(M,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(M=>{M.addEventListener("click",()=>Si(e,t,i,null,M.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(M=>{u?M.addEventListener("click",()=>$r(M.dataset.gcId,M.dataset.gcType,e,t,i)):(M.style.opacity="0.35",M.style.cursor="default",M.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(ue=document.getElementById("boost-card"))==null||ue.addEventListener("click",()=>Tr(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(M=>{M.addEventListener("click",()=>Si(e,t,i,M.dataset.subId))}),(fe=document.getElementById("sub-btn-main"))==null||fe.addEventListener("click",()=>Si(e,t,i))}function br(e,t,i,n){const r=e.dataset.cardId,o=e.dataset.role,a=t.selected.findIndex(s=>s.cardId===r);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===r);s&&t.selected.push({...s,_role:o,_line:o})}we(i,t,n)}function Ji(e,t,i){e.matchId&&_.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function vr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Ji(t,i,i.state.profile.id);const n=t.selected.map(o=>{const a=(t.homeTeam[o._role]||[]).find(d=>d.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...a,_line:o._role,...s?{note_a:Math.max(1,Number(a.note_a)||0)}:{}}}),r=oi(n,t.modifiers.home,t.formation);t.pendingAttack={...r,players:[...n],side:"home"},t.selected.forEach(o=>{const a=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);a&&(a.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${r.total} (base ${r.base}${r.links?` +${r.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",we(e,t,i),setTimeout(()=>kr(e,t,i),1200)}function hr(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ue(),Ji(t,i,i.state.profile.id);const n=t.stadiumDef||null,r=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(m=>m.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),o=ri(r,t.modifiers.home,t.formation);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const a=Xi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ke(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ke(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(a.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,we(e,t,i),Qe(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,St(e,t,i,"home-attack")}function _r(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],r=i.find(d=>d.job===n.job)||i[0],o={...r,used:!1,_line:n._line,_col:n._col},a=e.aiTeam[n._line],s=a.findIndex(d=>d.cardId===n.cardId);s!==-1&&(a[s]=o),e.aiUsedSubIds.push(r.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${r.firstname} ${r.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function wr(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(r=>!e.aiUsedGc.includes(r.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),je[i.gc_type],i.gc_type){case"Boost+2":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const r=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(r.length){const o=r[Math.floor(Math.random()*r.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Qi(e,t,i){Ji(t,i,null),_r(t),wr(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used),r=!1;if(!n.length){const l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(b=>!b.used),m=Ht(t.homeTeam);if(m||l.length===0){const b=(t.aiTeam.DEF||[]).filter(g=>!g.used),y=(t.aiTeam.GK||[]).filter(g=>!g.used);n=m?b.length?b:y:[...b,...y],r=!0}}const o=Dn(n,"attack",t.difficulty);if(!o.length){Fi(e,t,i);return}r&&o.forEach(l=>{l._line=l._line||l.job,l.note_a=Math.max(1,Number(l.note_a)||0)});const a=oi(o,t.modifiers.ai,t.formation);t.pendingAttack={...a,players:o,side:"ai"},o.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${o.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&Ht(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,bi(e,t,i,"ai",o[0]);return}t.aiScore++;const m={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(b=>Ke(b)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(m),t.pendingAttack=null,we(e,t,i),Qe(m.aiPlayers,t.homeScore,t.aiScore,!1,()=>{St(e,t,i,"home-attack")});return}t.phase="defense",we(e,t,i)}function kr(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],r=Dn(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){const m=((c=t.pendingAttack)==null?void 0:c.players)||[];if(m.length===1&&(m[0]._line==="GK"||m[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,bi(e,t,i,"home",m[0]);return}t.homeScore++;const y={type:"duel",isGoal:!0,homeScored:!0,homePlayers:m.map(g=>Ke(g)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(y),t.modifiers.ai={},t.pendingAttack=null,we(e,t,i),Qe(y.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}const a=r.length>0?ri(r,t.modifiers.ai,t.formation).total:0;r.forEach(m=>{m.used=!0});const s=Xi(t.pendingAttack.total,a,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>Ke(m)),aiPlayers:r.map(m=>Ke(m)),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,we(e,t,i),Qe(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{St(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,St(e,t,i,"ai-attack")}function St(e,t,i,n){if(t.round++,!Xn(e,t,i)){if(Zi(t)){vt(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(a=>!a.used))){Fi(e,t,i);return}t.phase="attack",we(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(a=>!a.used))){Fi(e,t,i);return}t.phase="ai-attack",we(e,t,i),setTimeout(()=>Qi(e,t,i),800)}}}function Ht(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function wn(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(r=>!r.used));return t&&!i}function Xn(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(wn(t.homeTeam)&&Ht(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.homeScore++,bi(e,t,i,"home",n),!0):!1}if(wn(t.aiTeam)&&Ht(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(r=>!r.used);return n?(n.used=!0,t.aiScore++,bi(e,t,i,"ai",n),!0):!1}return!1}function bi(e,t,i,n,r){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Ke(r)]:[],aiPlayers:n==="ai"?[Ke(r)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const a=(s,d)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${d};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await a("⚽ DERNIER CORNER","#FFD700"),await a("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,we(e,t,i),Qe([Ke(r)],t.homeScore,t.aiScore,n==="home",()=>{if(Zi(t)){vt(e,t,i);return}St(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function Zi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(r=>!r.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(r=>!r.used));return!t&&!i}function Di(e,t){return!(["MIL","ATT"].some(r=>(e[r]||[]).some(o=>!o.used))||Ht(t)||!["MIL","ATT"].some(r=>(t[r]||[]).some(o=>!o.used)))}function Fi(e,t,i){if(!Xn(e,t,i)){if(Zi(t)){vt(e,t,i);return}if(Di(t.homeTeam,t.aiTeam)&&Di(t.aiTeam,t.homeTeam)){t.log.push({text:"🏁 Plus personne ne peut attaquer — match terminé.",type:"info"}),vt(e,t,i);return}t.phase="attack",we(e,t,i)}}function Si(e,t,i,n=null,r=null){var y,g;if(t.phase!=="attack"){$t("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){$t(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,u])=>(u||[]).filter(x=>x.used).map(x=>({...x,_line:x._line||p}))),a=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){$t("Aucun joueur utilisé à remplacer");return}if(!a.length){$t("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===r));const d=((y=o[s])==null?void 0:y._line)||((g=o[s])==null?void 0:g.job);let c=n?Math.max(0,a.findIndex(p=>p.cardId===n)):Math.max(0,a.findIndex(p=>p.job===d)),l=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var f,z,k,S,q,ne;const p=o[s],u=a[c],x=Math.min(130,Math.round((window.innerWidth-90)/2)),h=Math.round(x*1.35),v=oe=>`background:rgba(255,255,255,0.12);border:none;color:${oe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${oe?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${v(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${u?ht({...u,used:!1,boost:0},x,h):"<div>—</div>"}</div>
        <button id="in-down" style="${v(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${v(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?ht({...p,used:!1,boost:0},x,h):"<div>—</div>"}</div>
        <button id="out-down" style="${v(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(f=m.querySelector("#sub-close"))==null||f.addEventListener("click",()=>m.remove()),(z=m.querySelector("#out-up"))==null||z.addEventListener("click",()=>{s>0&&(s--,b())}),(k=m.querySelector("#out-down"))==null||k.addEventListener("click",()=>{s<o.length-1&&(s++,b())}),(S=m.querySelector("#in-up"))==null||S.addEventListener("click",()=>{c>0&&(c--,b())}),(q=m.querySelector("#in-down"))==null||q.addEventListener("click",()=>{c<a.length-1&&(c++,b())});const E=(oe,ee,j,T)=>{const K=m.querySelector("#"+oe);if(!K)return;let Z=0;K.addEventListener("touchstart",ue=>{Z=ue.touches[0].clientY},{passive:!0}),K.addEventListener("touchend",ue=>{const fe=ue.changedTouches[0].clientY-Z;if(Math.abs(fe)<30)return;const M=ee();fe<0&&M<T-1?(j(M+1),b()):fe>0&&M>0&&(j(M-1),b())},{passive:!0})};E("in-panel",()=>c,oe=>c=oe,a.length),E("out-panel",()=>s,oe=>s=oe,o.length),(ne=m.querySelector("#sub-confirm"))==null||ne.addEventListener("click",oe=>{if(oe.preventDefault(),oe.stopPropagation(),l)return;l=!0;const ee=o[s],j=a[c];if(!ee||!j)return;let T=null,K=-1;for(const[ue,fe]of Object.entries(t.homeTeam)){const M=(fe||[]).findIndex(Y=>Y.cardId===ee.cardId);if(M!==-1){T=ue,K=M;break}}if(K===-1||!T){$t("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const Z={...j,_line:T,_col:ee._col||0,used:!1,boost:0};t.homeTeam[T].splice(K,1,Z),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ee.name,firstname:ee.firstname,note:Pe(ee,T),portrait:At(ee),job:ee.job,country_code:ee.country_code,rarity:ee.rarity,clubName:ee.clubName,clubLogo:ee.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Pe(j,T),portrait:At(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${ee.firstname} ${ee.name}`}),m.remove(),ur(ee,j,()=>we(e,t,i))})}document.body.appendChild(m),b()}function $r(e,t,i,n,r){var b,y;const o=(n.gcDefs||[]).find(g=>g.name===t),a=je[t]||{icon:"⚡",desc:"Carte spéciale."},s=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||a.desc,c=o!=null&&o.image_url?`/icons/${o.image_url}`:null,l=a.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    ${tt(s,c,l,d,{width:190})}
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(b=m.querySelector("#gc-back"))==null||b.addEventListener("click",()=>m.remove()),(y=m.querySelector("#gc-use"))==null||y.addEventListener("click",()=>{m.remove(),Lr(e,t,i,n,r)})}function pi(e,t,i,n,r,o){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(m=>{const b=m._line||m.job||"MIL",y=s.find(p=>p.cardId===m.cardId),g=Te({...m,_evolution_bonus:0},{width:90,showStad:!0,role:b,extraNote:m.boost||0});return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="position:relative;border-radius:8px;${y?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          ${g}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=a.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,y=e.find(p=>p.cardId===b);if(!y)return;const g=s.findIndex(p=>p.cardId===b);g>-1?s.splice(g,1):s.length<t&&s.push(y),d()})}),(l=a.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{a.remove(),o(s)})}d(),document.body.appendChild(a)}const Er={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,r,o)=>{const a=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return a.length?(pi(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,r,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),we(r,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),we(r,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},r,o,a)=>{const s=n==="home"?r.homeTeam:r.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:l})));return c.length?(pi(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,r,l=>{l.forEach(m=>{const y=((n==="home"?r.homeTeam:r.aiTeam)[m._line]||[]).find(g=>g.cardId===m.cardId);y&&(y.boost=(y.boost||0)-e,r.log.push({text:`🎯 -${e} sur ${y.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),we(o,r,a)}),!0):(r.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),we(o,r,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,r,o)=>{const a=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(a).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(m=>!m.used).map(m=>({...m,_line:c})));return d.length?(pi(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,r,n,c=>{c.forEach(l=>{const b=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(y=>y.cardId===l.cardId);b&&(b.used=!0,n.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),we(r,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),we(r,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,r)=>{const o=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,s])=>s.filter(d=>d.used).map(d=>({...d,_line:a})));return o.length?(pi(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,a=>{a.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),we(n,i,r)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),we(n,i,r),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Lr(e,t,i,n,r){n.usedGc.push(e);const o=n.gcDefs||[],a=o.find(d=>d.name===t)||o.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const d=Er[a.effect_type];d?d(a.effect_params||{},n,i,r)||(s=!0):(r.toast(`Effet "${a.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(m=>m.used).map(m=>({...m,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,m)=>Pe(m,"ATT")-Pe(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}_.from("cards").delete().eq("id",e).then(()=>{}),s&&we(i,n,r)}function Tr(e,t,i){const n=Object.values(t.homeTeam).flat().filter(r=>!r.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(r=>`
        <div class="player-boost-opt" data-card-id="${r.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${dr[r.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Pe(r,r._line||r.job)}</div>
          <div style="flex:1"><b>${r.firstname} ${r.name}</b><div style="font-size:11px;color:#888">${r._line||r.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[a]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),we(e,t,i)})})}async function vt(e,t,i){var l,m;Gt(),Ue(),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,r=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,a=r?"victoire":o?"nul":"defaite",s=So(t.mode,a);t.matchId&&await _.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:r?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};r?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await _.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),it(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{c.remove(),it(e),i.navigate("match",{matchMode:t.mode})})}function Ir(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${_i(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qt=e=>Vn(e);async function Mt(e,t,i,n,r={}){return Jn(e,t,i,n,r.myGC||[],r.gcDefs||[],r.isRanked||!1,r.rankedData||null,r.stadiumDef||null,r.onMatchEnd||null,r.mlLeagueId||null,r.mlMatchId||null)}async function Sr(e,t,i){const{data:n}=await _.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const r=n.home_id===t.state.user.id;let o=null,a=null;if(n.mode==="mini_league"){const{data:s}=await _.from("mini_league_matches").select("id, league_id").eq("match_id",i).maybeSingle();s&&(o=s.league_id,a=s.id)}return Jn(e,t,i,r,[],[],n.is_ranked||!1,null,null,null,o,a)}async function Jn(e,t,i,n,r=[],o=[],a=!1,s=null,d=null,c=null,l=null,m=null){const{state:b,navigate:y,toast:g}=t,p=n?"p1":"p2",u=n?"p2":"p1",x=(r||[]).map(w=>w.id),h=(r||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await _.from("matches").select("*").eq("id",i).single();if(!v){g("Match introuvable","error"),y("home");return}async function E(){var ye,be;console.log("[PvP] buildGameState match:",{id:v.id,home_deck_id:v.home_deck_id,away_deck_id:v.away_deck_id,mode:v.mode,is_ranked:v.is_ranked});const[{data:w,error:L},{data:A,error:C},{data:I},{data:P}]=await Promise.all([_.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),_.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),_.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),_.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",C==null?void 0:C.message,"p1D:",(ye=w==null?void 0:w.starters)==null?void 0:ye.length,"p2D:",(be=A==null?void 0:A.starters)==null?void 0:be.length);const D=re=>{const Ee=Number(re.evolution_bonus)||0;return{cardId:re.card_id,position:re.position,id:re.id,firstname:re.firstname,name:re.surname_real,country_code:re.country_code,club_id:re.club_id,job:re.job,job2:re.job2,note_g:(Number(re.note_g)||0)+(re.job==="GK"||re.job2==="GK"&&Number(re.note_g)>0?Ee:0),note_d:(Number(re.note_d)||0)+(re.job==="DEF"||re.job2==="DEF"&&Number(re.note_d)>0?Ee:0),note_m:(Number(re.note_m)||0)+(re.job==="MIL"||re.job2==="MIL"&&Number(re.note_m)>0?Ee:0),note_a:(Number(re.note_a)||0)+(re.job==="ATT"||re.job2==="ATT"&&Number(re.note_a)>0?Ee:0),evolution_bonus:Ee,rarity:re.rarity,skin:re.skin,hair:re.hair,hair_length:re.hair_length,face:re.face||null,clubName:re.club_encoded_name||null,clubLogo:re.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},F=((w==null?void 0:w.starters)||[]).map(re=>D(re)),O=((A==null?void 0:A.starters)||[]).map(re=>D(re)),J=(w==null?void 0:w.formation)||"4-4-2",ie=(A==null?void 0:A.formation)||"4-4-2";let te=yi(F,J),Q=yi(O,ie);const ae=((w==null?void 0:w.subs)||[]).map(re=>D(re)),se=((A==null?void 0:A.subs)||[]).map(re=>D(re)),ge=(w==null?void 0:w.stadium_def)||(n?d:null),le=(A==null?void 0:A.stadium_def)||(n?null:d);return ge&&(te=ai(te,ge),gi(ae,ge)),le&&(Q=ai(Q,le),gi(se,le)),{p1Team:te,p2Team:Q,p1Subs:ae,p2Subs:se,p1Formation:J,p2Formation:ie,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(P==null?void 0:P.club_name)||(P==null?void 0:P.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?x:[],gc_p2:n?[]:x,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let f=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!f,"match.status:",v.status,"home_id:",v.home_id,"away_id:",v.away_id,"myId:",b.profile.id),!f)if(n){f=await E(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:w}=await _.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await _.from("matches").update({game_state:f,turn_user_id:v.home_id}).eq("id",i):f=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let w=0;w<30&&!f;w++){await new Promise(A=>setTimeout(A,400));const{data:L}=await _.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(f=L.game_state),w%5===0&&console.log("[PvP] away - poll",w,"game_state:",!!(L!=null&&L.game_state))}if(!f){g("Erreur de synchronisation","error"),y("home");return}f.gc_p2=x,f.gcCardsFull_p2=h,await _.from("matches").update({game_state:f}).eq("id",i)}let z=!1,k=null,S=!1;const q=new Set,ne=new Set;async function oe(w){var ie,te;Gt();try{_.removeChannel(ee)}catch{}const L=f[p+"Score"]||0,A=f[u+"Score"]||0;let C,I;w.winner_id?(C=w.winner_id===b.profile.id,I=!1):w.forfeit?(C=L>A,I=!1):(I=L===A,C=L>A);let P="";if(a&&n)try{const{data:Q}=await _.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.home_id).single(),{data:ae}=await _.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",v.away_id).single();if(Q&&ae){const se=C?1:I?.5:0,ge=1-se,le=Q.placement_matches<10,ye=ae.placement_matches<10,be=computeGlicko2(Q.mmr,Q.mmr_deviation,Q.mmr_volatility,ae.mmr,ae.mmr_deviation,se===1?1:se===0?0:.5,le),re=computeGlicko2(ae.mmr,ae.mmr_deviation,ae.mmr_volatility,Q.mmr,Q.mmr_deviation,ge===1?1:ge===0?0:.5,ye);await _.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:I?null:C?v.home_id:v.away_id,p_home_id:v.home_id,p_away_id:v.away_id,p_home_delta:be.delta,p_away_delta:re.delta,p_home_new_rd:be.newRd,p_away_new_rd:re.newRd,p_home_new_vol:be.newSigma,p_away_new_vol:re.newSigma});const Ee=be.delta,Ne=be.newMmr,Le=getTier(Ne),Ve=Ee>=0?"+":"",Oe=Ee>=0?"#4caf50":"#ff6b6b",nt=getTier(Q.mmr);P=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Le.id!==nt.id?`<div style="font-size:20px;font-weight:900;color:${Le.color}">
                    ${Ne>Q.mmr?"📈":"📉"} ${nt.emoji} ${nt.label} → ${Le.emoji} ${Le.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ne>Q.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Ee>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Le.color}">${Le.emoji} ${Le.label}</div>`}
              ${le?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${Q.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(Q){console.error("[Ranked] MMR update error:",Q)}(ie=document.getElementById("pvp-end-overlay"))==null||ie.remove();const D=document.createElement("div");D.id="pvp-end-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const F=I?"🤝":C?"🏆":"😞",O=I?"MATCH NUL":C?"VICTOIRE !":"DÉFAITE",J=I?"#fff":C?"#FFD700":"#ff6b6b";D.innerHTML=`
      <div style="font-size:64px">${F}</div>
      <div style="font-size:26px;font-weight:900;color:${J}">${O}</div>
      ${a?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[p+"Name"]} ${L} – ${A} ${f[u+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${C?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${P}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":a?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(D),(te=D.querySelector("#pvp-end-home"))==null||te.addEventListener("click",()=>{D.remove(),it(e),l?y("mini-league",{openLeagueId:l}):y(a?"ranked":"home")})}const ee=_.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{var A;const L=w.new;try{if(L.status==="finished"||L.forfeit){if(z)return;z=!0,k&&(clearInterval(k),k=null),Ue(),L.game_state&&(f=L.game_state),oe(L);return}if(L.game_state){const C=f;f=L.game_state;const I=f._lastGC;if(I&&I.seq&&!ne.has(I.seq)&&(ne.add(I.seq),I.by!==p)){$(I.type,I.by,()=>Y());return}const P=C[p+"Score"]||0,D=C[u+"Score"]||0,F=f[p+"Score"]||0,O=f[u+"Score"]||0,J=F>P,ie=O>D;if((J||ie)&&!q.has(f.round)){q.add(f.round);const te=[...f.log||[]].reverse().find(se=>se.isGoal),Q=((te==null?void 0:te.homePlayers)||[]).map(se=>({name:se.name,note:se.note,portrait:se.portrait,job:se.job}));!!((A=te==null?void 0:te.text)!=null&&A.includes("DERNIER CORNER"))?Se().then(()=>{Qe(Q,F,O,J,()=>Y())}):Qe(Q,F,O,J,()=>Y());return}Y()}}catch(C){console.error("[PvP] crash:",C)}}).subscribe();async function j(w){Object.assign(f,w),f.lastActionAt=new Date().toISOString();const{error:L}=await _.from("matches").update({game_state:f}).eq("id",i);L&&g("Erreur de synchronisation","error");try{Y()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function T(){if(z)return;z=!0,Gt(),Ue(),k&&(clearInterval(k),k=null);const w=n?v.away_id:v.home_id,L=n?"p2":"p1",A=n?"p1":"p2",C={...f,[L+"Score"]:3,[A+"Score"]:0,phase:"finished"},I=C.p1Score||0,P=C.p2Score||0;try{await _.from("matches").update({game_state:C}).eq("id",i);const{data:D,error:F}=await _.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:w,p_home_score:I,p_away_score:P,p_forfeit:!0});if(F&&console.error("[PvP] finish_pvp_match (forfeit):",F),l)try{await _.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(O){console.error("[PvP] check_and_finish_mini_league (forfeit):",O)}try{const{data:O}=await _.rpc("apply_match_rewards",{p_match_id:i});O!=null&&O.success&&!(O!=null&&O.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(O){console.error("[PvP] apply_match_rewards (forfeit):",O)}}catch{}try{_.removeChannel(ee)}catch{}setTimeout(()=>{it(e),l?y("mini-league",{openLeagueId:l}):y("home")},800)}const K={BOOST_STAT:({value:w=1,count:L=1,roles:A=[]},C,I)=>{const P=C[p+"Team"],D=Object.entries(P).filter(([F])=>!A.length||A.includes(F)).flatMap(([F,O])=>O.filter(J=>!J.used).map(J=>({...J,_line:F})));if(!D.length){C.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),I(C);return}Z(D,L,`Choisir ${L} joueur(s) à booster (+${w})`,F=>{F.forEach(O=>{const J=(P[O._line]||[]).find(ie=>ie.cardId===O.cardId);J&&(J.boost=(J.boost||0)+w,C.log.push({text:`⚡ +${w} sur ${J.name}`,type:"info"}))}),C[p+"Team"]=P,I(C)})},DEBUFF_STAT:({value:w=1,count:L=1,roles:A=[],target:C="ai"},I,P)=>{const D=C==="home"?p:u,F=I[D+"Team"],O=C==="home"?"allié":"adverse",J=Object.entries(F).filter(([ie])=>!A.length||A.includes(ie)).flatMap(([ie,te])=>te.map(Q=>({...Q,_line:ie})));if(!J.length){I.log.push({text:`🎯 Aucun joueur ${O}`,type:"info"}),P(I);return}Z(J,L,`Choisir ${L} joueur(s) ${O}(s) (-${w})`,ie=>{ie.forEach(te=>{const Q=(F[te._line]||[]).find(ae=>ae.cardId===te.cardId);Q&&(Q.boost=(Q.boost||0)-w,I.log.push({text:`🎯 -${w} sur ${Q.name}`,type:"info"}))}),I[D+"Team"]=F,P(I)})},GRAY_PLAYER:({count:w=1,roles:L=[],target:A="ai"},C,I)=>{const P=A==="home"?p:u,D=C[P+"Team"],F=A==="home"?"allié":"adverse",O=Object.entries(D).filter(([J])=>!L.length||L.includes(J)).flatMap(([J,ie])=>ie.filter(te=>!te.used).map(te=>({...te,_line:J})));if(!O.length){C.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),I(C);return}Z(O,w,`Choisir ${w} joueur(s) ${F}(s) à exclure`,J=>{const ie="usedCardIds_"+P,te=new Set(C[ie]||[]);J.forEach(Q=>{const ae=(D[Q._line]||[]).find(se=>se.cardId===Q.cardId);ae&&(ae.used=!0,te.add(Q.cardId),C.log.push({text:`❌ ${ae.name} exclu !`,type:"info"}))}),C[ie]=[...te],C[P+"Team"]=D,I(C)})},REVIVE_PLAYER:({count:w=1,roles:L=[]},A,C)=>{const I=A[p+"Team"],P=Object.entries(I).filter(([D])=>!L.length||L.includes(D)).flatMap(([D,F])=>F.filter(O=>O.used).map(O=>({...O,_line:D})));if(!P.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),C(A);return}Z(P,w,`Choisir ${w} joueur(s) à ressusciter`,D=>{D.forEach(F=>{const O=(I[F._line]||[]).find(J=>J.cardId===F.cardId);O&&(O.used=!1,A.log.push({text:`💫 ${O.name} ressuscité !`,type:"info"}))}),A[p+"Team"]=I,C(A)})},REMOVE_GOAL:({},w,L)=>{const A=u+"Score";w[A]>0?(w[A]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(w)},ADD_GOAL_DRAW:({},w,L)=>{w[p+"Score"]===w[u+"Score"]?(w[p+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(w)},ADD_SUB:({value:w=1},L,A)=>{L.maxSubs=(L.maxSubs||3)+w,L.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),A(L)},CUSTOM:({},w,L)=>L(w)};function Z(w,L,A,C){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let P=[];function D(){var O,J;const F=w.map(ie=>{const te=ie._line||ie.job||"MIL",Q=P.find(se=>se.cardId===ie.cardId),ae=Te({...ie,_evolution_bonus:0},{width:90,showStad:!0,role:te,extraNote:ie.boost||0});return`<div class="pp-item" data-cid="${ie.cardId}"
          style="position:relative;border-radius:8px;${Q?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${ie.used?"opacity:0.3;pointer-events:none":""}">
          ${ae}
        </div>`}).join("");I.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
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
        </div>`,(O=I.querySelector("#pp-close"))==null||O.addEventListener("click",()=>I.remove()),I.querySelectorAll(".pp-item").forEach(ie=>{ie.addEventListener("click",()=>{const te=ie.dataset.cid,Q=w.find(se=>se.cardId===te),ae=P.findIndex(se=>se.cardId===te);Q&&(ae>-1?P.splice(ae,1):P.length<L&&P.push(Q),D())})}),(J=I.querySelector("#pp-confirm"))==null||J.addEventListener("click",()=>{I.remove(),C(P)})}D(),document.body.appendChild(I)}async function ue(w,L){const C=(f["gcCardsFull_"+p]||[]).find(F=>F.id===w),I=(C==null?void 0:C._gcDef)||(f.gcDefs||[]).find(F=>{var O;return F.name===L||((O=F.name)==null?void 0:O.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),P=[...f["usedGc_"+p]||[],w],D={type:L,by:p,seq:(f._gcAnimSeq||0)+1};ne.add(D.seq),$(L,p,async()=>{if(I!=null&&I.effect_type&&I.effect_type!=="CUSTOM"){const O=K[I.effect_type];if(O){const J={...f};O(I.effect_params||{},J,async ie=>{ie["usedGc_"+p]=P,ie._lastGC=D,ie._gcAnimSeq=D.seq,await j(ie)});return}}const F={...f};switch(L){case"Remplacement+":F.maxSubs=(F.maxSubs||3)+1,F.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const O=u+"Score";F[O]>0&&(F[O]--,F.log.push({text:"🚫 But annulé",type:"info"}));break}}F["usedGc_"+p]=P,F._lastGC=D,F._gcAnimSeq=D.seq,await j(F)})}function fe(w,L){const A="usedCardIds_"+w,C=new Set(f[A]||[]);L.forEach(I=>C.add(I)),f[A]=[...C]}function M(){for(const w of["p1","p2"]){const L=new Set(f["usedCardIds_"+w]||[]),A=f[w+"Team"];if(A)for(const C of["GK","DEF","MIL","ATT"])(A[C]||[]).forEach(I=>{I.used=L.has(I.cardId)})}}function Y(){var nn,on,rn,an,sn,dn;if(f.phase==="reveal")return ce();if(f.phase==="midfield")return V();if(f.phase==="finished")return Ge();const w=f[p+"Team"],L=f[u+"Team"];M();const A=f[p+"Score"],C=f[u+"Score"],I=f[p+"Name"],P=f[u+"Name"],D=f.phase===p+"-attack",F=f.phase===p+"-defense",O=Array.isArray(f["selected_"+p])?f["selected_"+p]:[],J=O.map(X=>X.cardId),ie=window.innerWidth>=700,te=f[p+"Subs"]||[],Q=f["usedSubIds_"+p]||[],ae=te.filter(X=>!Q.includes(X.cardId)),se=f["gcCardsFull_"+p]||[],ge=f["usedGc_"+p]||[],le=se.filter(X=>!ge.includes(X.id)),ye=f.boostOwner===p&&!f.boostUsed,be=[...w.MIL||[],...w.ATT||[]].filter(X=>!X.used),re=[...L.MIL||[],...L.ATT||[]].filter(X=>!X.used),Ee=!ke(L),Ne=be.length===0&&re.length===0&&!Ee,Le=(w.DEF||[]).filter(X=>!X.used),Ve=(w.GK||[]).filter(X=>!X.used);let Oe=[];D&&be.length===0&&(Ee?(Oe=Le.map(X=>X.cardId),Le.length===0&&(Oe=Oe.concat(Ve.map(X=>X.cardId)))):Ne&&(Oe=[...Le,...Ve].map(X=>X.cardId)));function nt(X,me,ze){var Me,ft;const _e=X._gcDef,Bt=(_e==null?void 0:_e.name)||X.gc_type,at=(_e==null?void 0:_e.effect)||((Me=je[X.gc_type])==null?void 0:Me.desc)||"",Fe=_e!=null&&_e.image_url?`/icons/${_e.image_url}`:null,Re=((ft=je[X.gc_type])==null?void 0:ft.icon)||"⚡";return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}" style="flex-shrink:0;cursor:pointer">
        ${tt(Bt,Fe,Re,at,{width:me})}
      </div>`}function Kt(X,me){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${me}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(me*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(me*.2)}px">⚡</div>
        <div style="font-size:${Math.round(me*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const De=(X,me)=>me?Kt(95,162):nt(X,95),Ye=(X,me)=>me?Kt(68,116):nt(X,68),He=ie?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",pt=D?ct(p)?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${O.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${He};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${He};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${O.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${P}</div>`,ot=D&&!ct(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':D||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${O.length}/3 sélectionné(s)</div>`:"",Ct=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${ie?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ae.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ae.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${ht(X,ie?76:44,ie?100:58)}</div>`).join("")}
    </div>`,ut=D?"attack":F?"defense":"idle",kt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${Ot(w,f[p+"Formation"],ut,J,ie?1300:It(),ie?600:Nt(),Oe)}
      </div>
    </div>`,rt=f[p+"Team"],ro=(()=>{var me,ze,_e,Bt,at;if(F&&((me=f.pendingAttack)!=null&&me.players)){const Fe=f.pendingAttack;let Re="";if(O.length>0){const Me=O.map(We=>{const Vt=(rt[We._role]||[]).find(Ei=>Ei.cardId===We.cardId)||We,Yt=rt[We._role]||[],si=Yt.findIndex(Ei=>Ei.cardId===We.cardId),$i=yt(Yt.length),Wt=si>=0?$i[si]:Vt._col??1;return{...Vt,_line:We._role,_col:Wt}}),ft=ri(Me,((ze=f.modifiers)==null?void 0:ze[p])||{},f[p+"Formation"]);Re=`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.15)">
            <div style="font-size:8px;color:#3a7bd5;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">🛡️ Votre défense (${O.length}/3)</div>
            <div style="display:flex;justify-content:center">${Je(Me.map(We=>({...We,used:!1})),"#3a7bd5",ft.total,"defense",f[p+"Formation"])}</div>
          </div>`}return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${P} ATTAQUE — Défendez !</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",Fe.total,"attack",f[u+"Formation"])}</div>
          ${Re}
        </div>`}if(D&&((_e=f.pendingAttack)!=null&&_e.players)){const Fe=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          <div style="display:flex;justify-content:center">${Je((Fe.players||[]).map(Re=>({...Re,used:!1})),"#00ff88",Fe.total,"attack",f[p+"Formation"])}</div>
        </div>`}if(D&&!((Bt=f.pendingAttack)!=null&&Bt.players)&&O.length>0){const Fe=O.map(Me=>{const ft=(rt[Me._role]||[]).find(Wt=>Wt.cardId===Me.cardId)||Me,We=["GK","DEF"].includes(Me._role),Vt=rt[Me._role]||[],Yt=Vt.findIndex(Wt=>Wt.cardId===Me.cardId),si=yt(Vt.length),$i=Yt>=0?si[Yt]:ft._col??1;return{...ft,_line:Me._role,_col:$i,...We?{note_a:Math.max(1,Number(ft.note_a)||0)}:{}}}),Re=oi(Fe,((at=f.modifiers)==null?void 0:at[p])||{},f[p+"Formation"]);return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #FFD700;text-align:center">
          <div style="font-size:8px;color:#FFD700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ Votre sélection (${O.length}/3)</div>
          <div style="display:flex;justify-content:center">${Je(Fe.map(Me=>({...Me,used:!1})),"#FFD700",Re.total,"attack",f[p+"Formation"])}</div>
        </div>`}const X=(f.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Yn(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3);text-align:center">⏳ Match en cours...</div>'})(),tn=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${C}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${P}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${ro}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;st(e),e.style.overflow="hidden",ie?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tn}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ct}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${kt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${pt}${ot}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${le.map(X=>De(X,!1)).join("")}
            ${ye?De(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tn}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${Ot(w,f[p+"Formation"],ut,J,It(),Nt(),Oe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${le.map(X=>Ye(X,!1)).join("")}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+p]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${pt}${ot}</div>
        </div>
      </div>`;function jt(){const X=e.querySelector(".match-screen");if(!X)return;const me=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=me+"px",X.style.minHeight=me+"px",X.style.maxHeight=me+"px",X.style.overflow="hidden";const ze=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");ze&&_e&&(_e.style.paddingBottom=ze.offsetHeight+"px")}if(jt(),setTimeout(jt,120),setTimeout(jt,400),S||(S=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",jt),window.visualViewport.addEventListener("scroll",jt)),window.addEventListener("resize",jt)),function(){const me=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!me)return;const ze=me.closest("#match-terrain-wrap");ze&&(ze.style.cssText="position:relative;width:100%;height:100%;padding:0"),me.removeAttribute("width"),me.removeAttribute("height"),me.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",me.setAttribute("preserveAspectRatio","xMidYMid meet")}(),f._pvpResizeBound||(f._pvpResizeBound=!0,window.addEventListener("resize",()=>{const X=e.querySelector(".terrain-wrapper svg");if(X){const me=X.closest("#match-terrain-wrap");me&&(me.style.cssText="position:relative;width:100%;height:100%;padding:0"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!D&&!F)return;const me=X.dataset.cardId,ze=X.dataset.role,_e=(w[ze]||[]).find(Re=>Re.cardId===me);if(!_e||_e.used)return;const Bt=Oe.includes(me);if(D&&!["MIL","ATT"].includes(ze)&&!Bt)return;Array.isArray(f["selected_"+p])||(f["selected_"+p]=[]);const at=f["selected_"+p],Fe=at.findIndex(Re=>Re.cardId===me);Fe>-1?at.splice(Fe,1):at.length<3&&at.push({..._e,_role:ze}),Y()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>R(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>R())}),(nn=e.querySelector("#pvp-sub-open"))==null||nn.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{D?X.addEventListener("click",()=>G(X.dataset.gcId,X.dataset.gcType)):(X.style.opacity="0.35",X.style.cursor="default",X.addEventListener("click",()=>$t("⚡ Les Game Changers ne sont utilisables qu'en attaque","rgba(180,100,0,0.9)")))}),(on=e.querySelector("#pvp-boost-card"))==null||on.addEventListener("click",()=>H()),(rn=e.querySelector("#pvp-action"))==null||rn.addEventListener("click",X=>{D?X.currentTarget.dataset.pass==="1"||!ct(p)?pe():Ie():F&&Ae()}),(an=e.querySelector("#pvp-quit"))==null||an.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&T()}),(sn=e.querySelector("#pvp-view-opp"))==null||sn.addEventListener("click",()=>B()),(dn=e.querySelector("#pvp-toggle-history"))==null||dn.addEventListener("click",()=>N()),k&&(clearInterval(k),k=null),Ue(),(D||F)&&!z){let X=30,me=!1;const ze=()=>document.getElementById("pvp-timer"),_e=()=>{ze()&&(ze().textContent=X+"s",ze().style.color=me?"#ff4444":"#fff")};_e(),k=setInterval(()=>{X--,X<0?me?(clearInterval(k),k=null,Ue(),D&&!ct(p)?pe():T()):(me=!0,X=15,_e(),zn("/sounds/timer-urgent.mp3",.6)):_e()},1e3)}}function ce(){st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${pr(f[u+"Team"],f[u+"Formation"],null,f[u+"Name"]||"Adversaire")}
    </div>`;const w=e.querySelector("svg"),L=w==null?void 0:w.closest("#match-terrain-wrap");L&&(L.style.cssText="position:relative;width:100%;height:100%;padding:0"),w&&(w.removeAttribute("width"),w.removeAttribute("height"),w.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",w.setAttribute("preserveAspectRatio","xMidYMid meet")),p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let U=!1;function V(){if(U)return;const w=f[p+"Team"].MIL||[],L=f[u+"Team"].MIL||[],A=xt(w)+bt(w),C=xt(L)+bt(L),I=A>=C;st(e),e.innerHTML=`
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
      ${xi(w,f[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${xi(L,f[u+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const P=(ae,se)=>e.querySelectorAll(ae).forEach((ge,le)=>{setTimeout(()=>{ge.style.opacity="1",ge.style.transform="translateY(0) scale(1)"},se+le*90)});P(".duel-card-me",150),P(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ae,se)=>setTimeout(()=>{ae.style.opacity="1"},se*70)),900),setTimeout(()=>{const ae=e.querySelector("#pvp-vs");ae&&(ae.style.opacity="1",ae.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(se=>se.style.opacity="1")},1250);function D(ae,se,ge){const le=document.getElementById(ae);if(!le)return;const ye=performance.now(),be=re=>{const Ee=Math.min(1,(re-ye)/ge);le.textContent=Math.round(se*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(be):le.textContent=se};requestAnimationFrame(be)}setTimeout(()=>{D("pvp-score-me",A,800),D("pvp-score-opp",C,800)},1500);const F=f.p1Team.MIL||[],O=f.p2Team.MIL||[],J=xt(F)+bt(F),ie=xt(O)+bt(O),te=J>=ie?"p1":"p2";let Q=f.boostValue;Q==null&&(Q=Kn(),f.boostValue=Q,f.boostOwner=te,f.boostUsed=!1),U=!0,setTimeout(()=>{const ae=e.querySelector("#duel-row-"+(I?"me":"opp")),se=e.querySelector("#duel-row-"+(I?"opp":"me")),ge=document.getElementById("pvp-score-me"),le=document.getElementById("pvp-score-opp"),ye=I?ge:le,be=I?le:ge;ye&&(ye.style.fontSize="80px",ye.style.color=I?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{ae&&(ae.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ae.style.zIndex="5"),setTimeout(()=>{const re=document.getElementById("duel-shock");re&&(re.style.animation="shockwave .5s ease-out forwards"),se&&(se.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const re=document.getElementById("pvp-duel-finale");if(!re)return;const Ee=f.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Q+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ne=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;re.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(I?"⚽ "+f[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[u+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Ne,re.style.transition="opacity .45s ease",re.style.opacity="1",re.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Ve=te;await j({phase:Ve+"-attack",attacker:Ve,round:1,boostValue:Q,boostUsed:!1,boostOwner:Ve})})},600)},700)},2800)}function $(w,L,A){var se,ge;const C=(f.gcDefs||[]).find(le=>{var ye;return le.name===w||((ye=le.name)==null?void 0:ye.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),I={purple:"#b06ce0",light_blue:"#00d4ef"}[C==null?void 0:C.color]||"#b06ce0",P=(C==null?void 0:C.name)||w,D=(C==null?void 0:C.effect)||((se=je[w])==null?void 0:se.desc)||"",F=C!=null&&C.image_url?`/icons/${C.image_url}`:null,O=((ge=je[w])==null?void 0:ge.icon)||"⚡",ie=L===p?"Vous":f[L+"Name"]||"Adversaire",te=document.createElement("div");te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",te.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{filter:drop-shadow(0 0 20px ${I}66)}50%{filter:drop-shadow(0 0 40px ${I}cc)}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${I};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ie} joue une carte</div>
      <div style="animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        ${tt(P,F,O,D,{width:200})}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(te);let Q=!1;const ae=()=>{Q||(Q=!0,te.remove(),setTimeout(()=>A&&A(),50))};te.addEventListener("click",ae),setTimeout(ae,3e3)}function G(w,L){var ie,te,Q,ae;const C=(f["gcCardsFull_"+p]||[]).find(se=>se.id===w),I=C==null?void 0:C._gcDef,P=(I==null?void 0:I.name)||L,D=(I==null?void 0:I.effect)||((ie=je[L])==null?void 0:ie.desc)||"Carte spéciale.",F=I!=null&&I.image_url?`/icons/${I.image_url}`:null,O=((te=je[L])==null?void 0:te.icon)||"⚡",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",J.innerHTML=`
      ${tt(P,F,O,D,{width:190})}
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(J),(Q=J.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>J.remove()),(ae=J.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{J.remove(),ue(w,L)})}function H(){var C;const w=f[p+"Team"],L=Object.entries(w).flatMap(([I,P])=>(P||[]).filter(D=>!D.used).map(D=>({...D,_line:I})));if(!L.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(I=>{const P={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",D=Pe(I,I._line)+(I.boost||0);return`<div class="bp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${P};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(C=A.querySelector("#bp-close"))==null||C.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(I=>{I.addEventListener("click",async()=>{const P=I.dataset.cid,D=L.find(O=>O.cardId===P);if(!D)return;const F=(w[D._line]||[]).find(O=>O.cardId===P);F&&(F.boost=(F.boost||0)+f.boostValue),A.remove(),await j({[p+"Team"]:w,boostUsed:!0})})})}function R(w=null){var ae,se;if(!(f.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const A=f[p+"Team"],C=f["usedSubIds_"+p]||[],I=f.maxSubs||3;if(C.length>=I){g(`Maximum ${I} remplacements atteint`,"warning");return}const P=Object.entries(A).flatMap(([ge,le])=>(le||[]).filter(ye=>ye.used).map(ye=>({...ye,_line:ge}))),D=(f[p+"Subs"]||[]).filter(ge=>!C.includes(ge.cardId));if(!P.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!D.length){g("Aucun remplaçant disponible","warning");return}let F=Math.max(0,P.findIndex(ge=>ge.cardId===w));const O=((ae=P[F])==null?void 0:ae._line)||((se=P[F])==null?void 0:se.job);let J=Math.max(0,D.findIndex(ge=>ge.job===O)),ie=!1;const te=document.createElement("div");te.id="pvp-sub-overlay",te.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var Ne,Le,Ve,Oe,nt,Kt;const ge=P[F],le=D[J],ye=Math.min(130,Math.round((window.innerWidth-90)/2)),be=Math.round(ye*1.35),re=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;te.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${C.length}/${I})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${re(J===0)}" ${J===0?"disabled":""}>▲</button>
          <div>${le?ht({...le,used:!1,boost:0},ye,be):"<div>—</div>"}</div>
          <button id="pin-down" style="${re(J>=D.length-1)}" ${J>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${J+1}/${D.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${re(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${ge?ht({...ge,used:!1,boost:0},ye,be):"<div>—</div>"}</div>
          <button id="pout-down" style="${re(F>=P.length-1)}" ${F>=P.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${P.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ne=te.querySelector("#psub-close"))==null||Ne.addEventListener("click",()=>te.remove()),(Le=te.querySelector("#pout-up"))==null||Le.addEventListener("click",()=>{F>0&&(F--,Q())}),(Ve=te.querySelector("#pout-down"))==null||Ve.addEventListener("click",()=>{F<P.length-1&&(F++,Q())}),(Oe=te.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{J>0&&(J--,Q())}),(nt=te.querySelector("#pin-down"))==null||nt.addEventListener("click",()=>{J<D.length-1&&(J++,Q())});const Ee=(De,Ye,He,pt)=>{const ot=te.querySelector("#"+De);if(!ot)return;let Ct=0;ot.addEventListener("touchstart",ut=>{Ct=ut.touches[0].clientY},{passive:!0}),ot.addEventListener("touchend",ut=>{const kt=ut.changedTouches[0].clientY-Ct;if(Math.abs(kt)<30)return;const rt=Ye();kt<0&&rt<pt-1?(He(rt+1),Q()):kt>0&&rt>0&&(He(rt-1),Q())},{passive:!0})};Ee("pin-panel",()=>J,De=>J=De,D.length),Ee("pout-panel",()=>F,De=>F=De,P.length),(Kt=te.querySelector("#psub-confirm"))==null||Kt.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),ie)return;ie=!0;const Ye=P[F],He=D[J];if(!Ye||!He)return;const pt=Ye._line,ot=(A[pt]||[]).findIndex(kt=>kt.cardId===Ye.cardId);if(ot===-1){g("Erreur : joueur introuvable","error"),te.remove();return}const Ct={...He,_line:pt,position:Ye.position,used:!1,boost:0};A[pt].splice(ot,1,Ct);const ut=[...C,He.cardId];te.remove(),W(Ye,He,async()=>{await j({[p+"Team"]:A,[u+"Team"]:f[u+"Team"],["usedSubIds_"+p]:ut})})})}document.body.appendChild(te),Q()}function W(w,L,A){const C={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const P=(O,J,ie)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${J};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${ie}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${C[O.job]||"#555"};border:3px solid ${J};position:relative;overflow:hidden;margin:0 auto">
        ${At(O)?`<img src="${At(O)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(O.name||"").slice(0,12)}</div>
    </div>`;I.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${P(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${P(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(I);let D=!1;const F=()=>{D||(D=!0,I.remove(),setTimeout(()=>A(),50))};I.addEventListener("click",F),setTimeout(F,2200)}function B(){var L;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[u+"Name"]}</div>
      <div style="width:min(90vw,420px)">${_i(f[u+"Team"],f[u+"Formation"],null,[],It(),Nt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(L=w.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>w.remove())}function N(){var A;const w=f.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(C=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${C.type==="goal"?"#FFD700":C.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${C.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(A=L.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>L.remove())}async function pe(){if(f.phase!==p+"-attack")return;const w=p==="p1"?"p2":"p1",L=(f.round||0)+1,A=[...f.log||[]];A.push({type:"info",text:`⏭️ ${f[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const C=$e(f),I=ct(w),P=C||!I?"finished":w+"-attack";await j({["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:P,attacker:w,round:L,log:A}),P==="finished"&&await qe(f)}function de(w){const L=(w.GK||[]).some(C=>!C.used),A=["DEF","MIL","ATT"].some(C=>(w[C]||[]).some(I=>!I.used));return L&&!A}function he(w){return(w.p1Score||0)!==(w.p2Score||0)?null:de(w.p1Team)&&!ke(w.p2Team)?{side:"p1",gk:(w.p1Team.GK||[]).find(L=>!L.used)}:de(w.p2Team)&&!ke(w.p1Team)?{side:"p2",gk:(w.p2Team.GK||[]).find(L=>!L.used)}:null}async function Se(){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(w);const L=(A,C)=>new Promise(I=>{w.innerHTML=`<div style="font-size:32px;font-weight:900;color:${C};letter-spacing:2px;animation:lcFade 1.4s ease both">${A}</div>
      <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(I,1400)});await L("⚽ DERNIER CORNER","#FFD700"),await L("🧤 LE GARDIEN MONTE !","#4fc3f7"),w.remove()}async function ve(w,L){const{side:A,gk:C}=w;if(!C)return;const I=A+"Score",P=(L[I]||0)+1;C.used=!0;const D=[...L.log||[]];D.push({type:"duel",isGoal:!0,homeScored:A===p,homePlayers:A==="p1"?[qt(C)]:[],aiPlayers:A==="p2"?[qt(C)]:[],text:`⚽ DERNIER CORNER — Le gardien de ${L[A+"Name"]} marque !`});const F=(L.round||0)+1,O=A==="p1"?"p2":"p1",J={...L,[I]:P},ie=$e(J);q.add(F),await Se();const te=A===p?P:L[p+"Score"]||0,Q=A===p?L[u+"Score"]||0:P;Qe([qt(C)],te,Q,A===p,async()=>{await j({[I]:P,log:D,round:F,pendingAttack:null,phase:ie?"finished":O+"-attack",attacker:O,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}}}),ie&&await qe({...f,[I]:P})})}async function Ie(){const w=f[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(P=>(f[u+"Team"][P]||[]).some(D=>!D.used)),A=(f["selected_"+p]||[]).map(P=>{const D=(w[P._role]||[]).find(se=>se.cardId===P.cardId)||P,F=["GK","DEF"].includes(P._role),O=w[P._role]||[],J=O.findIndex(se=>se.cardId===P.cardId),ie=yt(O.length),te=J>=0?ie[J]:D._col??1,Q=f.stadiumDef||f.homeStadiumDef||null,ae=D.stadiumBonus||Q&&(Q.club_id&&String(D.club_id)===String(Q.club_id)||Q.country_code&&D.country_code===Q.country_code)||!1;return{...D,_line:P._role,_col:te,stadiumBonus:ae,...F?{note_a:Math.max(1,Number(D.note_a)||0)}:{}}});if(!A.length)return;const C=oi(A,f.modifiers[p]||{},f[p+"Formation"]);fe(p,A.map(P=>P.cardId)),A.forEach(P=>{const D=(w[P._role]||[]).find(F=>F.cardId===P.cardId);D&&(D.used=!0)}),f["selected_"+p]=[],Y();const I=[...f.log||[]];if(L){if(A.length===1&&(A[0]._line==="GK"||A[0].job==="GK")&&(f.p1Score||0)===(f.p2Score||0)){await ve({side:p,gk:A[0]},{...f,[p+"Team"]:w,log:I});return}const D=(f[p+"Score"]||0)+1,F=A.map(Q=>qt(Q));I.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:F,homeTotal:C.total,aiTotal:0});const O=(f.round||0)+1,J=p==="p1"?"p2":"p1",ie={...f,[p+"Team"]:w,[p+"Score"]:D},te=$e(ie);q.add(O),Qe(F,D,f[u+"Score"]||0,!0,async()=>{await j({[p+"Team"]:w,[p+"Score"]:D,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:te?"finished":J+"-attack",attacker:J,round:O,log:I}),te&&await qe({...f,[p+"Score"]:D})});return}I.push({type:"pending",text:`⚔️ ${f[p+"Name"]} attaque (${C.total})`}),await j({[p+"Team"]:w,[u+"Team"]:f[u+"Team"],pendingAttack:{...C,players:A,side:p},["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},phase:u+"-defense",log:I})}async function Ae(){const w=f[p+"Team"],L=(f["selected_"+p]||[]).map(le=>{const ye=(w[le._role]||[]).find(Le=>Le.cardId===le.cardId)||le,be=w[le._role]||[],re=be.findIndex(Le=>Le.cardId===le.cardId),Ee=yt(be.length),Ne=re>=0?Ee[re]:ye._col??1;return{...ye,_line:le._role,_col:Ne}}),A=ri(L,f.modifiers[p]||{},f[p+"Formation"]);fe(p,L.map(le=>le.cardId)),L.forEach(le=>{const ye=(w[le._role]||[]).find(be=>be.cardId===le.cardId);ye&&(ye.used=!0)}),f["selected_"+p]=[],Y();const C=Xi(f.pendingAttack.total,A.total,f.modifiers[p]||{}),I=f.pendingAttack.side,P=C==="attack"||(C==null?void 0:C.goal),D=I==="p1"?"p2":"p1",F=(f.round||0)+1,O=(f.pendingAttack.players||[]).map(le=>qt(le)),J=[...f.log||[]];J.push({type:"duel",isGoal:P,homeScored:P&&I===p,text:P?`⚽ BUT de ${f[I+"Name"]} ! (${f.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${A.total})`,homePlayers:O,aiPlayers:L.map(le=>qt(le)),homeTotal:f.pendingAttack.total,aiTotal:A.total});const ie=P?(f[I+"Score"]||0)+1:f[I+"Score"]||0,te={...f,[p+"Team"]:w,[I+"Score"]:ie},Q=$e(te),ae=Q?"finished":D+"-attack",se=!Q&&!P?he(te):null,ge=async()=>{if(se){await ve(se,te);return}await j({[p+"Team"]:w,[u+"Team"]:f[u+"Team"],[I+"Score"]:ie,["selected_"+p]:[],modifiers:{...f.modifiers,[p]:{}},pendingAttack:null,phase:ae,attacker:D,round:F,log:J}),(ae==="finished"||Q)&&await qe({...f,[I+"Score"]:ie})};if(P){const le=I===p,ye=le?ie:f[p+"Score"]||0,be=le?f[u+"Score"]||0:ie;q.add(F),Qe(O,ye,be,le,ge)}else await ge()}function Be(w){return["MIL","ATT"].some(L=>(w[L]||[]).some(A=>!A.used))}function ke(w){return["GK","DEF","MIL","ATT"].some(L=>(w[L]||[]).some(A=>!A.used))}function wt(w){return ke(w)&&!Be(w)}function ct(w){const L=f[w+"Team"],A=f[(w==="p1"?"p2":"p1")+"Team"];return!!(Be(L)||wt(L)&&!ke(A)||wt(L)&&!Be(A)&&ke(A))}function $e(w){return!ke(w.p1Team)&&!ke(w.p2Team)}function Ce(w){const L=w.p1Score||0,A=w.p2Score||0;return L===A?null:L>A?v.home_id:v.away_id}async function qe(w){Gt(),Ue();try{const L=Ce(w),A=L?v.home_id===L?v.away_id:v.home_id:null,C=w.p1Score||0,I=w.p2Score||0,{data:P,error:D}=await _.rpc("finish_pvp_match",{p_match_id:i,p_winner_id:L,p_home_score:C,p_away_score:I,p_forfeit:!1});if(D&&console.error("[PvP] finish_pvp_match:",D),l)try{await _.rpc("check_and_finish_mini_league",{p_league_id:l})}catch(F){console.error("[PvP] check_and_finish_mini_league:",F)}L&&A&&Mo(L,A).catch(()=>{});try{const{data:F}=await _.rpc("apply_match_rewards",{p_match_id:i});F!=null&&F.success&&!(F!=null&&F.skipped)&&typeof t.refreshProfile=="function"&&await t.refreshProfile()}catch(F){console.error("[PvP] apply_match_rewards:",F)}if(typeof c=="function")try{await c({homeScore:C,awayScore:I,winnerId:L,homeId:v.home_id,awayId:v.away_id,matchId:i})}catch(F){console.error("[PvP] onMatchEnd:",F)}}catch(L){console.error("[PvP] finishMatch:",L)}}function Ge(){var I;const w=f[p+"Score"],L=f[u+"Score"],A=w>L,C=w===L;st(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":C?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":C?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${l?"🏆 Retour à la Mini League":"🏠 Retour"}</button>
    </div>`,(I=document.getElementById("pvp-home"))==null||I.addEventListener("click",()=>{try{_.removeChannel(ee)}catch{}it(e),l?y("mini-league",{openLeagueId:l}):y("home")})}Y()}async function Pi(e,t,i=!1){var s,d;const{state:n,navigate:r,toast:o}=t,a=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await wi(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:m,subsRaw:b,gcCardsEnriched:y,gcDefs:g,stadiumDef:p})=>{st(e);const u=async x=>{await zr(e,t,c,l,m,b,x||[],g,p,i,a)};if(!(y!=null&&y.length)){await u([]);return}hi(e,y,u)})}async function Ar(e,t,i){return Sr(e,t,i)}async function zr(e,t,i,n,r,o,a=[],s=[],d=null,c=!1,l=null){var oe,ee;const{state:m,navigate:b,toast:y}=t,g=(l==null?void 0:l.mmr)??((oe=m.profile)==null?void 0:oe.mmr)??1e3,p=c?Hi(g):null,u=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",x=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let h=!1,v=null,E=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${u};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${x};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const f=async()=>{h=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null);try{await _.rpc("cancel_matchmaking",{p_user_id:m.profile.id})}catch(j){console.error("[Matchmaking] cancel error:",j)}};(ee=document.getElementById("cancel-mm"))==null||ee.addEventListener("click",async()=>{await f(),it(e),b("home")});const z=async(j,T)=>{h||(h=!0,v&&(v.unsubscribe(),v=null),E&&(clearInterval(E),E=null),await Mt(e,t,j,T,{myGC:a,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?Mr:null}))},k=m.user.id,{data:S,error:q}=c?await _.rpc("try_matchmake_ranked",{p_user_id:k,p_deck_id:i,p_mmr:g}):await _.rpc("try_matchmake",{p_user_id:k,p_deck_id:i});if(q||!(S!=null&&S.success)){console.error("[Matchmaking] try_matchmake error:",q||S),y("Erreur de matchmaking","error"),it(e),b("home");return}if(S.matched){await z(S.match_id,!1);return}const ne=async()=>{if(h)return;const{data:j}=await _.from("matchmaking_queue").select("status, match_id").eq("user_id",k).maybeSingle();(j==null?void 0:j.status)==="matched"&&j.match_id&&await z(j.match_id,!0)};v=_.channel(`mm_${k}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${k}`},j=>{const T=j.new;T.status==="matched"&&T.match_id&&z(T.match_id,!0)}).subscribe(),E=setInterval(ne,3e3),setTimeout(()=>{h||f()},12e4)}async function Mr(e,t){const{state:i,toast:n}=t,{winnerId:r,homeId:o,awayId:a,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,m=o===l,b=r===l,{data:y}=await _.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:g}=await _.from("users").select("mmr, mmr_rd, mmr_v").eq("id",m?a:o).single();if(y&&g){const p=ao(y.mmr,y.mmr_rd,y.mmr_v,g.mmr,g.mmr_rd,b?1:0);await _.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:b?_.sql`mmr_wins + 1`:void 0,mmr_losses:b?void 0:_.sql`mmr_losses + 1`}).eq("id",l),n(b?`+MMR ↑ ${Math.round(p.mmr-y.mmr)}`:`-MMR ↓ ${Math.round(y.mmr-p.mmr)}`,b?"success":"error",4e3)}}const Cr=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:Pi,resumePvpMatch:Ar},Symbol.toStringTag,{value:"Module"}));async function jr(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.friendId||null,s=o.friendName||"Ami",d=!!o.isAccepting;await wi(e,t,"friend",async({deckId:c,formation:l,starters:m,subsRaw:b,gcCardsEnriched:y,gcDefs:g,stadiumDef:p})=>{st(e);const u=async x=>{const h=x||[];d?await qr(e,t,c,h,g,p):await Br(e,t,c,h,g,p,a,s)};if(!(y!=null&&y.length)){await u([]);return}hi(e,y,u)})}async function Br(e,t,i,n,r,o,a,s){var h;const{state:d,navigate:c,toast:l}=t,m=d.user.id,{data:b,error:y}=await _.from("friend_match_invites").insert({inviter_id:m,invitee_id:a,friend_id:a,status:"pending",inviter_deck_id:i,expires_at:new Date(Date.now()+2*60*1e3).toISOString()}).select("id").single();if(y||!b){console.error("[Friend] Erreur création invitation:",y),l("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let g=!1,p=null;const u=async()=>{p&&(p.unsubscribe(),p=null)};(h=document.getElementById("cancel-friend"))==null||h.addEventListener("click",async()=>{await u(),await _.from("friend_match_invites").update({status:"declined"}).eq("id",b.id),it(e),c("home")}),p=_.channel(`friend_invite_${b.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${b.id}`},async({new:v})=>{g||v.status!=="accepted"||!v.match_id||(g=!0,await u(),await Mt(e,t,v.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))}).subscribe();const x=setInterval(async()=>{if(g)return;const{data:v}=await _.from("friend_match_invites").select("status, match_id").eq("id",b.id).single();(v==null?void 0:v.status)==="accepted"&&v.match_id&&(g=!0,clearInterval(x),await u(),await Mt(e,t,v.match_id,!0,{myGC:n,gcDefs:r,stadiumDef:o}))},3e3);setTimeout(async()=>{g||(clearInterval(x),await u(),l("Invitation expirée","info"),c("home"))},12e4)}async function qr(e,t,i,n,r,o){const{state:a,navigate:s,toast:d}=t,c=a.user.id,{data:l}=await _.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucune invitation en attente","error"),s("home");return}const{data:m,error:b}=await _.rpc("accept_friend_invite",{p_invite_id:l.id,p_invitee_deck_id:i});if(b||!(m!=null&&m.success)){console.error("[Friend] Erreur accept_friend_invite:",b||m),d((m==null?void 0:m.error)||"Impossible de rejoindre le match","error"),s("home");return}await Mt(e,t,m.match_id,!1,{myGC:n,gcDefs:r,stadiumDef:o})}const Qn="#1A6B3C",dt="#D4A017",Jt="var(--tile-bg)",Qt="var(--tile-border)",Lt="var(--divider)",Xe="var(--tile-fg-on-page)",Et="var(--tile-fg-dim)",Ze="var(--tile-fg-faint)",ei="var(--nav-fg,#fff)",Zn="rgba(255,255,255,0.62)",Dr="rgba(255,255,255,0.4)";async function Fr(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await lt(e,t,i);return}await et(e,t)}async function et(e,t,i="waiting"){var v,E;const{state:n}=t,r=n.profile.id,{data:o}=await _.from("mini_league_members").select("league_id, prize_amount, prize_claimed").eq("user_id",r),a=(o||[]).map(f=>f.league_id),s={};(o||[]).forEach(f=>{s[f.league_id]={amount:f.prize_amount,claimed:f.prize_claimed}});const{data:d,error:c}=await _.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await _.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],b=(a.length?await _.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],y=b.filter(f=>f.status==="waiting"&&!f.is_archived),g=b.filter(f=>f.status==="active"&&!f.is_archived),p=b.filter(f=>f.is_archived||f.status==="finished");let u=p;if(p.length){const{data:f}=await _.from("mini_league_matches").select("league_id").in("league_id",p.map(k=>k.id)).or(`home_id.eq.${r},away_id.eq.${r}`).not("status","eq","bye"),z=new Set((f||[]).map(k=>k.league_id));u=p.filter(k=>z.has(k.id))}const x=l.filter(f=>!a.includes(f.id)),h=[{key:"waiting",label:"🟡 En attente",count:y.length+x.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:u.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900;color:${ei}">🏆 Mini League</div>
        <div style="font-size:12px;color:${Zn}">Championnats 3 à 8 joueurs</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="ml-refresh-list" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:36px;height:36px;font-size:16px;cursor:pointer;color:${ei}">🔄</button>
        <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
      </div>
    </div>
    <div style="display:flex;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt}">
      ${h.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:11px 4px;border:none;border-bottom:2px solid ${i===f.key?Qn:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?"#4ade80":Dr};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Pr(y,x,r):i==="active"?Gr(g,r):Nr(u,r,s)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>Rr(e,t)),(E=document.getElementById("ml-refresh-list"))==null||E.addEventListener("click",()=>et(e,t,i)),e.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>et(e,t,f.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>lt(e,t,f.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",z=>{z.stopPropagation(),eo(e,t,f.dataset.join,f.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",z=>{z.stopPropagation(),Gi(e,t,f.dataset.delete,f.dataset.name,i)})),e.querySelectorAll("[data-claim-league]").forEach(f=>f.addEventListener("click",async z=>{z.stopPropagation(),f.disabled=!0,f.textContent="...";const{data:k,error:S}=await _.rpc("claim_mini_league_prize",{p_league_id:f.dataset.claimLeague,p_user_id:n.profile.id});if(S||!(k!=null&&k.success)){t.toast((k==null?void 0:k.error)||"Erreur lors de la récupération","error"),et(e,t,i);return}if(!k.already_claimed){n.profile.credits=(n.profile.credits||0)+k.prize;const q=document.getElementById("nav-credits");q&&(q.textContent=`💰 ${n.profile.credits.toLocaleString("fr")}`),t.toast(`💰 +${k.prize.toLocaleString("fr")} cr. ajoutés !`,"success")}et(e,t,i)}))}function vi(e,t,i=!1,n=null){var d,c;const r=e.creator_id===t,o=e.pot||0,a=((c=(d=e.mini_league_members)==null?void 0:d[0])==null?void 0:c.count)||0,s=n&&n.amount>0&&!n.claimed;return`<div data-league-id="${e.id}" style="background:${Jt};border:1px solid ${s?"rgba(212,160,23,0.5)":Qt};border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:8px">
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
  </div>`}function Pr(e,t,i){const n=[];return e.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>`),n.push(...e.map(r=>vi(r,i,!1)))),t.length&&(n.push(`<div style="font-size:11px;font-weight:700;color:${Ze};text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>`),n.push(...t.map(r=>vi(r,i,!0)))),n.length?n.join(""):`<div style="text-align:center;padding:40px;color:${Ze}">🏆<br>Aucune mini league.<br>Crée la première !</div>`}function Gr(e,t){return e.length?e.map(i=>vi(i,t)).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league en cours.</div>`}function Nr(e,t,i={}){return e.length?e.map(n=>vi(n,t,!1,i[n.id])).join(""):`<div style="text-align:center;padding:40px;color:${Ze}">Aucune mini league archivée.</div>`}function Rr(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,u,x;const{toast:n}=t,r=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((x=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:x.trim())||null;if(!r){n("Le nom est obligatoire","error");return}if(a<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:m}=await _.from("mini_leagues").insert({name:r,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:o,entry_fee:a}).select().single();if(m){n("Erreur : "+m.message,"error");return}const{data:b}=await _.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await _.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await _.from("users").update({credits:b.credits-a}).eq("id",t.state.profile.id),await _.from("mini_leagues").update({pot:a}).eq("id",l.id),await _.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),lt(e,t,l.id)})}function Or(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=r=>{t.remove(),e(r)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",r=>{r.key==="Enter"&&n(i.value.trim())})})}async function eo(e,t,i,n){var m;const{toast:r,state:o}=t,a=o.profile.id;let s=null;if(n==="private"&&(s=await Or(),s===null))return;const{data:d,error:c}=await _.rpc("join_mini_league",{p_league_id:i,p_user_id:a,p_password:s});if(c||!(d!=null&&d.success)){console.error("[MiniLeague] join_mini_league:",c||d),r((d==null?void 0:d.error)||"Erreur lors de l'inscription","error");return}if(typeof t.refreshProfile=="function")await t.refreshProfile();else{const{data:b}=await _.from("users").select("credits").eq("id",a).single();o.profile&&b&&(o.profile.credits=b.credits)}const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(((m=o.profile)==null?void 0:m.credits)||0).toLocaleString("fr")}`),r("✅ Inscrit ! Pot mis à jour.","success"),lt(e,t,i)}async function Hr(e,t,i,n){const{toast:r,state:o}=t,a=o.profile.id;if(!await new Promise(b=>{const y=document.createElement("div");y.className="modal-overlay",y.style.zIndex="2100",y.innerHTML=`<div class="modal" style="max-width:360px">
      <div class="modal-body" style="padding:22px 20px 18px;text-align:center">
        <p style="font-size:15px;margin:0 0 18px">Te désinscrire et récupérer <strong>${n.toLocaleString("fr")} cr.</strong> ?</p>
        <div style="display:flex;justify-content:center;gap:10px">
          <button class="btn btn-ghost" id="lv-cancel">Annuler</button>
          <button class="btn btn-primary" id="lv-ok">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(y),y.querySelector("#lv-ok").onclick=()=>{y.remove(),b(!0)},y.querySelector("#lv-cancel").onclick=()=>{y.remove(),b(!1)}}))return;const{data:d,error:c}=await _.rpc("leave_mini_league",{p_league_id:i,p_user_id:a});if(c||!(d!=null&&d.success)){r((d==null?void 0:d.error)||"Erreur lors de la désinscription","error");return}const l=d.refund||n;o.profile&&(o.profile.credits=(o.profile.credits||0)+l);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),r(`↩️ Désinscrit · +${l.toLocaleString("fr")} cr. remboursés`,"success"),et(e,t,"waiting")}async function Gi(e,t,i,n,r){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await _.from("mini_league_matches").delete().eq("league_id",i),await _.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await _.from("mini_leagues").delete().eq("id",i);if(a){o("Erreur suppression ("+a.message+")","error");return}o("Mini League supprimée avec succès","success"),et(e,t,r)}async function Ur(e,t,i){await _.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),et(e,t,"archived")}async function lt(e,t,i){var E,f,z,k,S,q,ne,oe,ee;const{state:n,toast:r}=t,o=n.profile.id,[{data:a},{data:s},{data:d}]=await Promise.all([_.from("mini_leagues").select("*").eq("id",i).single(),_.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),_.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){r("Introuvable","error"),await et(e,t);return}const c=(s||[]).some(j=>j.user_id===o),l=a.creator_id===o,m=(s||[]).map(j=>j.user).filter(Boolean),b=Xr(m,d||[]),y=(d||[]).filter(j=>j.matchday===a.current_day),g=a.pot||0,p=a.entry_fee||100,u=y.length>0&&y.every(j=>j.status==="finished"||j.status==="bye"),x=a.current_day>=a.total_days,h=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:14px 16px;background:var(--nav-bg,#0d1a0f);border-bottom:1px solid ${Lt};display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer;color:${ei}">‹</button>
      <button id="ml-refresh" title="Actualiser" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:32px;height:32px;font-size:15px;cursor:pointer;color:${ei};flex-shrink:0">🔄</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900;color:${ei}">${a.name}</div>
        <div style="font-size:11px;color:${Zn}">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"rgba(74,222,128,0.16)":a.status==="finished"?"rgba(168,85,247,0.16)":"rgba(212,160,23,0.16)"};color:${a.status==="active"?"#4ade80":a.status==="finished"?"#c084fc":"#eab308"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${dt};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px;color:${Xe}">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:${Et};margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${Lt}">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||Qn};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${Xe}">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:${Ze}">@${j.pseudo}</div></div>
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
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${y.map(j=>kn(j,m,o,c)).join("")}
        ${l&&u&&!x?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:${Ze};text-transform:uppercase;border-bottom:2px solid ${Lt}">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${dt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((j,T)=>{const K=g>0&&a.status==="finished"?T===0?Math.floor(g*.7):T===1?Math.floor(g*.2):T===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid ${Lt};${j.userId===o?"background:rgba(74,222,128,0.08);":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${T===0?dt:T<3?"#4ade80":Et}">${["🥇","🥈","🥉"][T]||T+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700;color:${Xe}">${j.clubName}</div><div style="font-size:10px;color:${Ze}">@${j.pseudo}</div></td>
              <td style="text-align:center;color:${Et}">${j.played}</td><td style="text-align:center;color:${Et}">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?"#4ade80":"#ff6b6b"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px;color:${Xe}">${j.points}</td>
              ${g>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${dt}">${K?K.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:${Jt};border:1px solid ${Qt};border-radius:12px;padding:16px">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px;color:${Xe}">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(j,T)=>T+1).reverse().map(j=>{const T=(d||[]).filter(K=>K.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:${Ze};margin-bottom:6px">Journée ${j}</div>${T.map(K=>kn(K,m,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:${Et}">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#ff6b6b">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const v=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((E=document.getElementById("ml-back"))==null||E.addEventListener("click",()=>et(e,t,v)),(f=document.getElementById("ml-refresh"))==null||f.addEventListener("click",async j=>{const T=j.currentTarget;T.style.opacity="0.5",await lt(e,t,i)}),(z=document.getElementById("ml-start-btn"))==null||z.addEventListener("click",()=>Kr(e,t,a,m)),(k=document.getElementById("ml-next-day"))==null||k.addEventListener("click",()=>Vr(e,t,i)),(S=document.getElementById("ml-join-now"))==null||S.addEventListener("click",()=>eo(e,t,i,a.type)),(q=document.getElementById("ml-leave-btn"))==null||q.addEventListener("click",()=>Hr(e,t,i,p)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>Gi(e,t,i,a.name,"waiting")),(oe=document.getElementById("ml-delete-now"))==null||oe.addEventListener("click",()=>Gi(e,t,i,a.name,v)),(ee=document.getElementById("ml-archive-btn"))==null||ee.addEventListener("click",()=>Ur(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const T=y.find(K=>K.id===j.dataset.playMatch);T&&t.navigate("match-mini-league",{mlMatchId:T.id,leagueId:i})})}),a.status==="finished"&&h){const j=b.findIndex(T=>T.userId===o);j>=0&&j<3&&h.prize_amount>0&&!h.prize_claimed&&setTimeout(()=>Yr(e,t,a,h,j),400)}}function kn(e,t,i,n,r=!1){const o=m=>t.find(b=>b.id===m);if(e.is_bye){const m=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);margin-bottom:6px;font-size:12px;color:${Et};text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!r,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"rgba(26,107,60,0.16)":"rgba(255,255,255,0.03)"};margin-bottom:6px;border:1px solid ${d?"rgba(74,222,128,0.35)":Lt}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?"#4ade80":Ze}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;color:${Xe};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#4ade80;flex-shrink:0">✅</span>':""}
  </div>`}async function Kr(e,t,i,n){const{toast:r,state:o}=t,a=Wr(n.map(c=>c.id),i.mode),s=[];a.forEach((c,l)=>c.forEach(m=>s.push({league_id:i.id,matchday:l+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:d}=await _.from("mini_league_matches").insert(s);if(d){r("Erreur calendrier : "+d.message,"error");return}await _.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),r(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),lt(e,t,i.id)}async function Vr(e,t,i){const{data:n}=await _.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),r=(n.current_day||0)+1;if(r>(n.total_days||0)){lt(e,t,i);return}await _.from("mini_leagues").update({current_day:r}).eq("id",i),t.toast(`Journée ${r} commencée !`,"success"),lt(e,t,i)}async function Yr(e,t,i,n,r){var b,y;const{state:o,toast:a}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][r],c=n.prize_amount||s[r]||0,l=n.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
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
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),(y=m.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async g=>{const p=g.currentTarget;p.disabled=!0,p.textContent="...";const{data:u,error:x}=await _.rpc("claim_mini_league_prize",{p_league_id:i.id,p_user_id:o.profile.id});if(x||!(u!=null&&u.success)){console.error("[MiniLeague] claim_mini_league_prize:",x||u),a((u==null?void 0:u.error)||"Erreur lors de la récupération","error"),p.disabled=!1,p.textContent=`💰 Récupérer ${c.toLocaleString("fr")} cr.`;return}if(u.already_claimed)a("Déjà récupéré précédemment","info");else{const h=(o.profile.credits||0)+u.prize;o.profile&&(o.profile.credits=h);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${h.toLocaleString("fr")}`),a(`💰 +${u.prize.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success")}m.remove(),lt(e,t,i.id)})}function Wr(e,t){const n=e.length%2===0?[...e]:[...e,null],r=n.length;let o=n.slice(1);const a=[];for(let s=0;s<r-1;s++){const d=[],c=[n[0],...o];for(let l=0;l<r/2;l++){const m=c[l],b=c[r-1-l];m===null?d.push({bye:b}):b===null?d.push({bye:m}):d.push({home:m,away:b})}a.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:a}function Xr(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const r=i[n.home_id],o=i[n.away_id];!r||!o||(r.played++,o.played++,r.goalsFor+=n.home_score,r.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(r.won++,r.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,r.lost++):(r.drawn++,r.points++,o.drawn++,o.points++),r.goalDiff=r.goalsFor-r.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,r)=>r.points-n.points||r.goalDiff-n.goalDiff||r.goalsFor-n.goalsFor)}async function $n(e,t){const{state:i,navigate:n,toast:r}=t,o=i.params||{},a=o.leagueId||null,s=o.mlMatchId||null,d=i.user.id;if(!s||!a){r("Match introuvable","error"),n("mini-league");return}const{data:c,error:l}=await _.from("mini_league_matches").select("id, league_id, home_id, away_id, status, match_id").eq("id",s).single();if(l||!c){r("Match introuvable","error"),n("mini-league",{openLeagueId:a});return}if(c.home_id!==d&&c.away_id!==d){r("Vous ne faites pas partie de ce match","error"),n("mini-league",{openLeagueId:a});return}const m=c.home_id===d;if(c.match_id){await Mt(e,t,c.match_id,m,{mlLeagueId:a,mlMatchId:s});return}await wi(e,t,"mini_league",async({deckId:b,gcCardsEnriched:y,gcDefs:g,stadiumDef:p})=>{st(e);const u=async x=>{const{data:h,error:v}=await _.rpc("start_mini_league_match",{p_ml_match_id:s,p_user_id:d,p_deck_id:b});if(v||!(h!=null&&h.success)){console.error("[MiniLeague] start_mini_league_match error:",v||h),r((h==null?void 0:h.error)||"Impossible de lancer le match","error"),n("mini-league",{openLeagueId:a});return}if(h.matched){await Mt(e,t,h.match_id,m,{mlLeagueId:a,mlMatchId:s,myGC:x||[],gcDefs:g,stadiumDef:p});return}await Jr(e,t,{mlMatchId:s,leagueId:a,amIHome:m,chosenGC:x,gcDefs:g,stadiumDef:p})};if(!(y!=null&&y.length)){await u([]);return}hi(e,y,u)})}function Jr(e,t,{mlMatchId:i,leagueId:n,amIHome:r,chosenGC:o,gcDefs:a,stadiumDef:s}){return new Promise(d=>{var p;const{navigate:c}=t;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">🏆</div>
      <div style="font-size:18px;font-weight:900">En attente de l'adversaire…</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Il doit choisir son deck pour cette journée.</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#D4A017;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="wait-back" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Retour</button>
    </div>`;let l=!1;const m=async u=>{if(!l){if(l=!0,clearInterval(g),y)try{y.unsubscribe()}catch{}u&&await Mt(e,t,u,r,{mlLeagueId:n,mlMatchId:i,myGC:o||[],gcDefs:a,stadiumDef:s}),d()}};(p=document.getElementById("wait-back"))==null||p.addEventListener("click",()=>{if(l=!0,clearInterval(g),y)try{y.unsubscribe()}catch{}c("mini-league",{openLeagueId:n}),d()});const b=async()=>{if(l)return;const{data:u}=await _.from("mini_league_matches").select("match_id").eq("id",i).single();u!=null&&u.match_id&&m(u.match_id)},y=_.channel(`ml_match_${i}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"mini_league_matches",filter:`id=eq.${i}`},u=>{var x;(x=u.new)!=null&&x.match_id&&m(u.new.match_id)}).subscribe(),g=setInterval(b,3e3);b()})}const Qr="/",Zr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ea(e,t,i){let n=0;const r=document.createElement("div");r.id="tutorial-overlay",r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var l,m,b;const s=t[n],d=n===t.length-1,c=Math.round((n+1)/t.length*100);r.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${Qr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,r.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),r.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),r.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(l=r.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,o()}),(m=r.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{d?a():(n++,o())}),(b=r.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{r.remove(),e!=null&&e.id&&await _.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(r),o()}async function ta(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:r,error:o}=await _.rpc("get_tutorial_steps");if(!o&&(r==null?void 0:r.length)>0)n=r,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await _.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):Zr;ea(e,a,()=>t("boosters"))}const ui={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Dt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function ia(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await en(e,t)}async function en(e,t){const{state:i,toast:n}=t,{data:r}=await _.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let d="buy";const c=()=>{var p,u,x,h,v,E,f;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((x=document.getElementById("flt-country"))==null?void 0:x.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:((v=document.getElementById("flt-rarity"))==null?void 0:v.value)||"",note1:parseInt((E=document.getElementById("flt-note1"))==null?void 0:E.value)||0,note2:parseInt((f=document.getElementById("flt-note2"))==null?void 0:f.value)||0}};function l(p){const u=c();return p.filter(x=>{var q,ne,oe;const h=(q=x.card)==null?void 0:q.player;if(!h)return!1;const v=`${h.firstname} ${h.surname_real}`.toLowerCase(),E=(((ne=h.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),f=(h.country_code||"").toLowerCase(),z=((oe=x.card)==null?void 0:oe.evolution_bonus)||0,k=Dt(h,h.job,z),S=h.job2?Dt(h,h.job2,z):0;return!(u.name&&!v.includes(u.name)||u.club&&!E.includes(u.club)||u.country&&!f.includes(u.country)||u.job&&h.job!==u.job||u.rarity&&h.rarity!==u.rarity||u.note1&&k<u.note1||u.note2&&S<u.note2)})}function m(p){var S,q,ne,oe;const u=(S=p.card)==null?void 0:S.player;if(!u)return"";const x=((q=p.card)==null?void 0:q.evolution_bonus)||0,h=Dt(u,u.job,x),v=u.job2?Dt(u,u.job2,x):0,E=(i.profile.credits||0)>=p.price,f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,z=ui[u.job]||"#bbb",k=u.job2?ui[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ne=u.clubs)!=null&&ne.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${z};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${z};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${v}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((oe=p.seller)==null?void 0:oe.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${E?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${E?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(p){var S,q,ne,oe;const u=(S=p.card)==null?void 0:S.player;if(!u)return"";const x=((q=p.card)==null?void 0:q.evolution_bonus)||0,h=Dt(u,u.job,x),v=u.job2?Dt(u,u.job2,x):0,E=p.status==="sold",f=u.country_code?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,z=ui[u.job]||"#bbb",k=u.job2?ui[u.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${E?"opacity:0.7":""}">
      ${f?`<img src="${f}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ne=u.clubs)!=null&&ne.logo_url?`<img src="${u.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${z};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${z};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${v?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${k};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${k};font-family:Arial Black,Arial">${v}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${u.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.surname_real}</div>
        <div style="font-size:10px;color:${E?"#22c55e":"#999"};margin-top:1px">
          ${E?`✅ Vendu à ${((oe=p.buyer)==null?void 0:oe.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${E?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function y(){const p=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(p){if(u.style.display=d==="buy"?"flex":"none",d==="buy"){const x=l(a);p.innerHTML=x.length?x.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const x=s.filter(v=>v.status==="active").sort((v,E)=>new Date(E.listed_at)-new Date(v.listed_at)),h=s.filter(v=>v.status==="sold").sort((v,E)=>new Date(E.sold_at||E.listed_at)-new Date(v.sold_at||v.listed_at));p.innerHTML=(x.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${x.length})</div>`+x.map(b).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(b).join(""):"")+(!x.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(x=>x.addEventListener("click",()=>na(x.dataset.buy,a,e,t))),p.querySelectorAll("[data-cancel]").forEach(x=>x.addEventListener("click",()=>ra(x.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const x=u===p;u.style.background=x?"var(--green)":"var(--tile-bg)",u.style.color=x?"#fff":"var(--tile-fg-dim)",u.style.borderColor=x?"var(--green)":"var(--tile-border)"}),y()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var u;(u=document.getElementById(p))==null||u.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(y,250)})}),y()}async function na(e,t,i,n){const{state:r,toast:o,refreshProfile:a}=n,s=t.find(l=>l.id===e);if(!s)return;const d=s.price;if((r.profile.credits||0)<d){o("Crédits insuffisants","error");return}oa(s,async()=>{const{error:l}=await _.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:r.profile.id});if(l){o("Erreur achat : "+l.message,"error");return}await a();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(r.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await en(i,n)})}function oa(e,t){var a;const i=(a=e.card)==null?void 0:a.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",r.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px;color:#1a1a1a">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(r);const o=s=>{r.remove(),s&&t()};r.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),r.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),r.addEventListener("click",s=>{s.target===r&&o(!1)})}async function ra(e,t,i){const{toast:n}=i,{data:r}=await _.from("market_listings").select("card_id").eq("id",e).single();if(await _.from("market_listings").update({status:"cancelled"}).eq("id",e),r!=null&&r.card_id){const{count:o}=await _.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",r.card_id).eq("status","active");o||await _.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",r.card_id)}n("Annonce retirée","success"),en(t,i)}async function aa(e,t){var y,g,p,u,x;const{state:i,navigate:n}=t,r=((g=(y=t==null?void 0:t.state)==null?void 0:y.params)==null?void 0:g.tab)||"ranked";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:var(--tile-fg-dim)">⚽ Chargement...</div>';const[{data:o},{data:a},{data:s}]=await Promise.all([_.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100),_.rpc("get_mini_league_leaderboard"),_.rpc("get_random_leaderboard")]);let d=r;const c=h=>h<3?["#D4A017","#a0a0a0","#cd7f32"][h]:"var(--green)",l=h=>h<3?"#000":"#fff";function m(){var E,f,z;const h=document.getElementById("rankings-legend");h&&(h.innerHTML=d==="random"?'<div style="font-size:11px;color:var(--tile-fg-dim);text-align:center;margin-bottom:10px">📊 = score de classement fiable (tient compte du nombre de matchs joués, pas seulement du %)</div>':"");const v=document.getElementById("rankings-list");if(v){if(d==="ranked"){const k=o||[];v.innerHTML=k.length>0?k.map((S,q)=>{const ne=Hi(S.mmr??1e3),oe=(S.ranked_wins||0)+(S.ranked_losses||0)+(S.ranked_draws||0),ee=oe>0?Math.round((S.ranked_wins||0)/oe*100):0,j=S.id===i.profile.id,T=(S.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${j?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${q<3?["#D4A017","#a0a0a0","#cd7f32"][q]:"rgba(255,255,255,0.08)"};color:${q<3?"#000":"var(--tile-fg-on-page)"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px;color:var(--tile-fg-on-page)">
                <span>${ne.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name} · ${ne.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${T?"❓":ne.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${ne.color}">${T?"Placement":ne.label}</div>
              ${T?"":`<div style="font-size:10px;color:var(--tile-fg-dim)">${ee}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun joueur classé.</div>'}else if(d==="mini-league"){const k=a||[];v.innerHTML=k.length>0?k.map((S,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px;flex-shrink:0">
            <div style="color:var(--tile-fg-on-page)">🥇${S.top1} 🥈${S.top2} 🥉${S.top3}</div>
            <div style="color:var(--tile-fg-dim)">${S.ml_wins} match(s) gagné(s)</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun résultat de Mini League pour l'instant.</div>`}else{const k=s||[];v.innerHTML=k.length>0?k.map((S,q)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${S.user_id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${c(q)};color:${l(q)};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${q<3?"16":"13"}px">${q<3?["🥇","🥈","🥉"][q]:q+1}</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:var(--tile-fg-on-page);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${S.pseudo}</div>
            <div style="font-size:11px;color:var(--tile-fg-dim)">${S.club_name}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:16px;font-weight:900;color:#D4A017" title="Score de classement — tient compte du nombre de matchs joués">📊 ${S.wilson_score}</div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">${S.wins}/${S.total} V</div>
            <div style="font-size:9px;color:var(--green);font-weight:700;margin-top:2px">${S.win_pct}%</div>
          </div>
        </div>
      `).join(""):`<div style="text-align:center;color:var(--tile-fg-dim);padding:40px">Aucun match random joué pour l'instant.</div>`}(E=document.getElementById("tab-ranked"))!=null&&E.style&&(document.getElementById("tab-ranked").style.cssText=b(d==="ranked")),(f=document.getElementById("tab-mini-league"))!=null&&f.style&&(document.getElementById("tab-mini-league").style.cssText=b(d==="mini-league")),(z=document.getElementById("tab-random"))!=null&&z.style&&(document.getElementById("tab-random").style.cssText=b(d==="random"))}}const b=h=>`flex:1;padding:10px 4px;border:none;border-radius:10px;cursor:pointer;font-size:12px;font-weight:${h?"900":"400"};background:${h?"var(--green)":"rgba(255,255,255,0.06)"};color:${h?"#fff":"var(--tile-fg-dim)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-ranked" style="${b(d==="ranked")}">⚔️ Ranked</button>
        <button id="tab-mini-league" style="${b(d==="mini-league")}">🏆 Mini Leagues</button>
        <button id="tab-random" style="${b(d==="random")}">🎲 Random</button>
      </div>
      <div id="rankings-legend"></div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,m(),(p=document.getElementById("tab-ranked"))==null||p.addEventListener("click",()=>{d="ranked",m()}),(u=document.getElementById("tab-mini-league"))==null||u.addEventListener("click",()=>{d="mini-league",m()}),(x=document.getElementById("tab-random"))==null||x.addEventListener("click",()=>{d="random",m()})}async function sa(e,t){var z,k,S,q;const{state:i,navigate:n,toast:r}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:s}]=await Promise.all([_.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),_.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){r("Erreur chargement profil","error"),n("home");return}if(!a){e.innerHTML=`
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
    </div>`,(z=document.getElementById("ranked-back"))==null||z.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,m=s.placement_matches??0,b=m<10,y=Math.max(0,10-m),g=Hi(d),p=so(d),u=Li.findIndex(ne=>ne.id===g.id),x=Li[u+1]||null,h={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},v=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),E=v>0?Math.round((s.ranked_wins||0)/v*100):0,f=Li.map(ne=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===ne.id?1:.35};
      transform:${g.id===ne.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===ne.id?"28px":"20px"}">${ne.emoji}</div>
      <div style="font-size:9px;color:${ne.color};font-weight:${g.id===ne.id?"900":"400"};letter-spacing:0.5px">${ne.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${h[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${x?`<span>${x.emoji} ${x.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${x?x.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${f}
    </div>

    <!-- Placement / Stats -->
    ${b?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${m}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${y} match${y>1?"s":""} — gains et pertes ×2</div>
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
  </div>`,(k=document.getElementById("ranked-back"))==null||k.addEventListener("click",()=>n("home")),(S=document.getElementById("ranked-leaderboard-btn"))==null||S.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(q=document.getElementById("ranked-play-btn"))==null||q.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:b}})})}async function da(e,{state:t,navigate:i,toast:n}){const r=t.profile;if(!r)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await _.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${r.id},away_id.eq.${r.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(l=>l.status==="finished"),d=(o||[]).filter(l=>l.status==="in_progress");function c(l){const m=l.home_id===r.id;m?l.home_score:l.away_score,m?l.away_score:l.home_score;const b=l.winner_id===r.id,y=l.home_score===l.away_score&&l.status==="finished",g=l.status!=="finished"?"…":y?"N":b?"V":"D",p=l.status!=="finished"||y?"#888":b?"#1A6B3C":"#c0392b";let u=a[l.mode]||l.mode;l.away_id===null&&!u.startsWith("IA")&&(u="IA");const h=l.home_id===r.id?l.away:l.home;let v;l.away_id===null?v=u:h?v=`${h.club_name||h.pseudo} (${h.pseudo})`:v="Adversaire";let E="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(E=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const f=new Date(l.created_at),z=f.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+f.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),k=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${v}${E}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${z}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${k}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
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
  </div>`}lo(po);const xe={user:null,profile:null,page:"home",params:{}};function Ft(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function la(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function Ni(){document.getElementById("modal-overlay").classList.add("hidden")}async function Zt(){if(!xe.user)return;const{data:e}=await _.from("users").select("*").eq("id",xe.user.id).single();e&&(xe.profile=e)}const to="mw_theme";function io(){return localStorage.getItem(to)||"dark"}function ca(e){var t;localStorage.setItem(to,e),pa(e),(t=xe.profile)!=null&&t.id&&_.from("users").update({theme:e}).eq("id",xe.profile.id).then(()=>{})}function pa(e){document.documentElement.setAttribute("data-theme",e)}function Pt(e,t={}){xe.page=e,xe.params=t,no()}async function no(){var n,r,o,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===xe.page)});const t=document.getElementById("nav-credits");t&&xe.profile&&(t.textContent=`💰 ${(xe.profile.credits||0).toLocaleString("fr")}`);const i={state:xe,navigate:Pt,toast:Ft,openModal:la,closeModal:Ni,refreshProfile:Zt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',xe.page){case"home":await fn(e,i);break;case"settings":await jn(e,i);break;case"collection":await Po(e,i);break;case"decks":await Ci(e,i);break;case"boosters":await Qo(e,i);break;case"ranked":await sa(e,i);break;case"match":{const s=xe.params&&xe.params.matchMode||"vs_ai_easy";s==="random"?await Pi(e,i,!1):s==="ranked"?await Pi(e,i,!0):s==="friend"?await jr(e,i,(n=xe.params)==null?void 0:n.friendId,(r=xe.params)==null?void 0:r.friendName):s==="mini_league"||s==="mini-league"?await $n(e,i,(o=xe.params)==null?void 0:o.mlMatchId,(a=xe.params)==null?void 0:a.leagueId):await fr(e,i);break}case"market":await ia(e,i);break;case"rankings":await aa(e,i);break;case"matches":await da(e,i);break;case"friends":await bo(e,i);break;case"mini-league":await Fr(e,i);break;case"match-mini-league":{const s=xe.params||{};await $n(e,i,s.mlMatchId,s.leagueId);break}default:await fn(e,i)}}function ua(){var n,r;const e=document.getElementById("app"),t=xe.profile;if(!t)return;const i="/icons/";e.innerHTML=`
    <nav class="top-nav">
      <div class="logo" id="nav-logo" title="Manager Wars v2026.07.22-1937" style="cursor:pointer">
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
  `,document.querySelectorAll(".bottom-nav a").forEach(o=>{o.addEventListener("click",a=>{a.preventDefault(),Pt(o.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Pt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Pt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>fa()),(r=document.getElementById("settings-btn"))==null||r.addEventListener("click",()=>Pt("settings"))}async function fa(){const{data:e}=await _.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const r=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}function ma(e,{onPlay:t}){var n;const i="/icons/";e.style.cssText="",e.innerHTML=`
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
  </div>`,(n=e.querySelector("#pl-play-btn"))==null||n.addEventListener("click",t)}async function ga(){document.documentElement.setAttribute("data-theme",io()),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Ni()}),document.getElementById("modal-close").addEventListener("click",Ni);const{data:{session:e}}=await _.auth.getSession();if(!e){En(),ma(document.getElementById("app"),{onPlay:()=>ln(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft})});return}xe.user=e.user,await Zt(),En();try{const{data:i}=await _.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(r=>{n[r.formation]=r.links}),co(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!xe.profile){fo(document.getElementById("app"),{state:xe,navigate:async()=>{await Zt(),Ai()},toast:Ft,refreshProfile:Zt});return}const t=Array.isArray(xe.profile.pending_boosters)?xe.profile.pending_boosters:[];if(!xe.profile.onboarding_done&&t.length>0){ar(document.getElementById("app"),{state:xe,navigate:()=>Ai(),toast:Ft,refreshProfile:Zt});return}Ai(),setTimeout(()=>ta(xe.profile,Pt,Ft),800),_.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(xe.user=null,xe.profile=null,document.getElementById("app").innerHTML="",ln(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Ft}))})}function ya(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ki(){const e=document.getElementById("app");e&&(e.style.height=ya()+"px")}window.addEventListener("resize",ki);window.addEventListener("orientationchange",()=>setTimeout(ki,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ki);function Ai(){const e=()=>{var i;(i=xe.user)!=null&&i.id&&_.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",xe.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ki(),ua(),no()}function En(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function oo(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}ga().catch(e=>{console.error("Échec du démarrage:",e),oo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&oo("Le serveur met trop de temps à répondre.")},12e3);
