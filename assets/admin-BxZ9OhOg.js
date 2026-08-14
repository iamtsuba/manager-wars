import{s as k,i as Ft,C as ye,a as Ae,r as le,b as qt,g as qe,c as Ot,_ as yt,A as Gt,l as Ut,K as Ye,D as J,d as Ht,S as Kt,e as X,H as Vt,f as Jt,h as Yt,E as Wt,j as Zt,N as Xt,M as Qt,B as en,k as bt,m as tn,F as Ee,n as Oe,o as Ie,p as nn,q as an,t as Ce,u as We,T as be}from"./match-shared-CAdt6XHO.js";const on={normal:"#cccccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function vt(e){var l;const[{count:n},{count:t},{count:i},{count:r},{count:a},{data:v},{data:$}]=await Promise.all([k.from("players").select("*",{count:"exact",head:!0}),k.from("clubs").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}),k.from("stadium_definitions").select("*",{count:"exact",head:!0}),k.from("users").select("*",{count:"exact",head:!0}).gt("last_seen_at",new Date(Date.now()-18e4).toISOString()),k.rpc("get_signup_password"),k.from("app_feature_flags").select("*").order("key")]),w=v||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px">

      <!-- Managers -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">👥 Managers</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${i??"–"}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--tile-fg-dim)">
          <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;display:inline-block;box-shadow:0 0 6px #2ecc71"></span>
          ${a??0} joueurs connectés
        </div>
      </div>

      <!-- Stadiums -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🏟️ Stadiums</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${r??"–"}</div>
        <button class="btn btn-primary btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('stadiums')">+ Add new stadium</button>
      </div>

      <!-- Teams -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🛡️ Teams</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${t??"–"}</div>
        <button class="btn btn-yellow btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('clubs')">+ Add new teams</button>
      </div>

      <!-- Players -->
      <div class="card-panel">
        <div style="font-size:12px;color:var(--tile-fg-dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🃏 Players</div>
        <div style="font-size:32px;font-weight:900;color:var(--tile-fg-on-page)">${n??"–"}</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:10px" onclick="window.adminNav('players')">+ Add new players</button>
      </div>

    </div>

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${w.replace(/"/g,"&quot;")}" style="flex:1">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
    <div class="card-panel" style="margin-top:20px">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600;color:var(--tile-fg-on-page)">🧪 Modes activables</h3>
      <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:14px">Active/désactive des fonctionnalités entières de l'app. Quand désactivé, un popup "Module en cours de développement" s'affiche à la place.</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${($||[]).map(m=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:var(--tile-bg);border:1px solid var(--tile-border)">
            <div>
              <div style="font-weight:700;font-size:14px;color:var(--tile-fg-on-page)">${m.label}</div>
              <div style="font-size:11px;color:var(--tile-fg-dim)">${m.enabled?"✅ Activé":"⛔ Désactivé"}</div>
            </div>
            <button class="feature-flag-toggle" data-key="${m.key}" data-enabled="${m.enabled}"
              style="width:52px;height:28px;border-radius:20px;border:none;cursor:pointer;position:relative;background:${m.enabled?"#1A6B3C":"#555"};transition:background .2s">
              <span style="position:absolute;top:3px;left:${m.enabled?"27px":"3px"};width:22px;height:22px;border-radius:50%;background:#fff;transition:left .2s"></span>
            </button>
          </div>
        `).join("")||'<div style="font-size:12px;color:var(--tile-fg-dim)">Aucun mode configuré — lance la migration correspondante.</div>'}
      </div>
    </div>
  `,window.adminNav=m=>{var g;(g=document.querySelector(`[data-page="${m}"]`))==null||g.click()},e.querySelectorAll(".feature-flag-toggle").forEach(m=>{m.addEventListener("click",async()=>{const g=m.dataset.key,h=m.dataset.enabled!=="true";m.disabled=!0;const{error:E}=await k.from("app_feature_flags").update({enabled:h,updated_at:new Date().toISOString()}).eq("key",g);if(m.disabled=!1,E){alert(E.message);return}Ft(),vt(e)})}),(l=document.getElementById("signup-pwd-save"))==null||l.addEventListener("click",async()=>{const m=document.getElementById("signup-pwd-input").value.trim(),g=document.getElementById("signup-pwd-status");if(!m){g.textContent="Le code ne peut pas être vide.",g.style.color="#ff6b6b";return}const h=document.getElementById("signup-pwd-save");h.disabled=!0,h.textContent="⏳...";const{error:E}=await k.rpc("set_signup_password",{new_password:m});if(h.disabled=!1,h.textContent="💾 Enregistrer",E){g.textContent=E.message,g.style.color="#ff6b6b";return}g.textContent="✅ Code mis à jour.",g.style.color="#2ecc71"})}function rn(e){return e.length<2?null:`https://flagsapi.com/${e.slice(0,2).toUpperCase()}/flat/64.png`}const ge=[{key:"name",label:"📛 Nom"},{key:"photo",label:"🖼️ Photo / silhouette"},{key:"note",label:"🔢 Note principale"},{key:"note2",label:"🔸 Note secondaire"},{key:"flag",label:"🏳️ Drapeau (pays)"},{key:"club",label:"🛡️ Logo club"},{key:"stadium_badge",label:"🏟️ Badge stade"}],Ze={collection:"Collection",formation:"Formation",selector:"Sélecteur",match:"Match",mercato:"Mercato",boosters:"Boosters",admin:"Admin",accueil:"Accueil"};async function ln(e){const{toast:n}=e;let t="pc",i="name",r={pc:{},mobile:{}},a={pc:{},mobile:{}};const{data:v}=await k.from("card_design_components").select("*"),{data:$}=await k.from("card_design_visibility").select("*");(v||[]).forEach(f=>{r[f.mode][f.component]={x:Number(f.x_pct),y:Number(f.y_pct),scale:Number(f.scale)}}),($||[]).forEach(f=>{a[f.mode][f.component]||(a[f.mode][f.component]={}),a[f.mode][f.component][f.context]=f.visible}),ge.forEach(({key:f})=>{["pc","mobile"].forEach(L=>{r[L][f]||(r[L][f]={x:.5,y:.5,scale:1}),a[L][f]||(a[L][f]={}),ye.forEach(A=>{a[L][f][A]===void 0&&(a[L][f][A]=!0)})})});const w={id:"preview",firstname:"Jean",surname_real:"MANGALA",job:"MIL",job2:"DEF",rarity:"pepite",country_code:"FR",note_g:10,note_d:62,note_m:78,note_a:15,clubs:{encoded_name:"PSG",logo_url:null,kit_style:"uni",kit_color1:"#1A6B3C",kit_color2:"#fff",kit_shorts:"#fff",kit_socks:"#1A6B3C"},face:null,evolution_bonus:0};let l="collection",m=!1;Ae(w.country_code).then(f=>{f&&(w.face=f,g())});function g(){const f=s==null?void 0:s.querySelector("#cde-card-render");f&&(f.innerHTML=E())}let h=380;function E(){return le(w,{width:h,compactSquare:t==="mobile",context:l,showStad:m,stadDef:m?{club_id:null,country_code:"FR"}:null})}let s=null;function d(){s==null||s.remove(),s=null}function x(){var L;s&&s.remove(),h=Math.max(220,Math.min(420,Math.round(window.innerWidth*.28)));const f=t==="mobile"?h:Math.round(h*574/372);s=document.createElement("div"),s.id="cde-overlay",s.style.cssText="position:fixed;inset:0;z-index:5000;background:#0b1410;overflow-y:auto",s.innerHTML=`
      <style>
        .cde-tab { padding:8px 16px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;cursor:pointer;font-weight:700;font-size:13px;color:#fff }
        .cde-tab.active { background:#1A6B3C;border-color:#1A6B3C;color:#fff }
        .cde-comp-btn { display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.18);background:transparent;cursor:pointer;font-size:13px;margin-bottom:6px;color:#e8e8e8 }
        .cde-comp-btn.active { background:#1A6B3C;border-color:#1A6B3C;color:#fff;font-weight:700 }
        .cde-drag-box { position:absolute;cursor:move;box-sizing:border-box;touch-action:none;
          border:2px dashed rgba(255,215,0,0.85);display:flex;align-items:center;justify-content:center;overflow:visible }
        .cde-drag-box.active { border-color:#00e5ff;border-width:3px;z-index:20 }
        .cde-drag-box:not(.active) { pointer-events:none;opacity:0.85 }
        .cde-resize-handle { position:absolute;right:-9px;bottom:-9px;width:18px;height:18px;border-radius:50%;
          background:#00e5ff;border:2px solid #06282b;cursor:nwse-resize;touch-action:none;z-index:21 }
        .cde-vis-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:11px }
        .cde-vis-cell { display:flex;align-items:center;gap:4px;padding:4px 6px;border-radius:6px;background:rgba(255,255,255,0.06);color:#ddd }
        .cde-label { font-size:11px;color:#aaa;font-weight:800;text-transform:uppercase;margin-bottom:6px }
        .cde-field label { color:#bbb !important }
        .cde-field input, .cde-field select { background:#182620;color:#fff;border-color:rgba(255,255,255,0.2) }
      </style>

      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.1);position:sticky;top:0;background:#0b1410;z-index:10">
        <div style="display:flex;align-items:center;gap:14px">
          <h2 style="color:#fff;margin:0;font-size:18px">🎨 Design Card</h2>
          <div style="display:flex;gap:6px">
            <button class="cde-tab ${t==="pc"?"active":""}" data-mode="pc">🖥️ PC</button>
            <button class="cde-tab ${t==="mobile"?"active":""}" data-mode="mobile">📱 Mobile</button>
          </div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" id="cde-close" style="color:#fff;border-color:rgba(255,255,255,0.3)">Fermer sans enregistrer</button>
          <button class="btn btn-primary" id="cde-save">💾 Enregistrer</button>
        </div>
      </div>

      <div style="display:flex;gap:24px;padding:20px;flex-wrap:wrap;align-items:flex-start">
        <!-- Liste des composants -->
        <div style="min-width:190px">
          <div class="cde-label">Composants (glisser = déplacer, poignée bleue = zoom)</div>
          ${ge.map(A=>`<button class="cde-comp-btn ${i===A.key?"active":""}" data-comp="${A.key}">${A.label}</button>`).join("")}
          <button class="btn btn-ghost btn-sm" id="cde-reset-pos" style="width:100%;margin-top:8px;color:#fff;border-color:rgba(255,255,255,0.3)">↺ Réinitialiser ce composant</button>
        </div>

        <!-- Aperçu + zone de drag -->
        <div style="flex:0 0 auto">
          <div id="cde-preview-wrap" style="position:relative;width:${h}px;height:${f}px;background:#0a1a0f;border-radius:8px;box-shadow:0 0 0 1px rgba(255,255,255,0.08)">
            <div id="cde-card-render" style="position:absolute;top:0;left:0">${E()}</div>
            <div id="cde-drag-layer" style="position:absolute;top:0;left:0;width:100%;height:100%"></div>
          </div>
        </div>

        <!-- Champs de test -->
        <div style="min-width:230px;display:flex;flex-direction:column;gap:8px" class="cde-field">
          <div class="cde-label">Tester avec</div>
          <div class="form-group"><label>Nom</label><input id="cde-t-name" value="${w.surname_real}"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
            <div class="form-group"><label>Poste</label>
              <select id="cde-t-job">${["GK","DEF","MIL","ATT"].map(A=>`<option ${w.job===A?"selected":""}>${A}</option>`).join("")}</select>
            </div>
            <div class="form-group"><label>Poste 2</label>
              <select id="cde-t-job2"><option value="">Aucun</option>${["GK","DEF","MIL","ATT"].map(A=>`<option ${w.job2===A?"selected":""}>${A}</option>`).join("")}</select>
            </div>
          </div>
          <div class="form-group"><label>Rareté</label>
            <select id="cde-t-rarity">${["normal","pepite","papyte","legende"].map(A=>`<option value="${A}" ${w.rarity===A?"selected":""}>${A}</option>`).join("")}</select>
          </div>
          <div class="form-group"><label>Note (poste actuel)</label><input id="cde-t-note" type="number" value="62"></div>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#ddd"><input type="checkbox" id="cde-t-stad" ${m?"checked":""}> Bonus de stade actif</label>
          <div class="form-group"><label>Écran prévisualisé</label>
            <select id="cde-t-context">${ye.map(A=>`<option value="${A}" ${l===A?"selected":""}>${Ze[A]}</option>`).join("")}</select>
          </div>

          <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.12);padding-top:12px">
            <div class="cde-label">Visibilité de « ${(L=ge.find(A=>A.key===i))==null?void 0:L.label} » (${t==="pc"?"PC":"Mobile"})</div>
            <div class="cde-vis-grid">
              ${ye.map(A=>`<label class="cde-vis-cell"><input type="checkbox" data-vis-ctx="${A}" ${a[t][i][A]?"checked":""}> ${Ze[A]}</label>`).join("")}
            </div>
          </div>
          <div id="cde-error" style="color:#ff6b6b;font-size:13px;margin-top:6px"></div>
        </div>
      </div>
    `,document.body.appendChild(s),b()}function b(){var L,A,S;s.querySelectorAll(".cde-tab").forEach(T=>T.addEventListener("click",()=>{t=T.dataset.mode,x()})),s.querySelectorAll(".cde-comp-btn").forEach(T=>T.addEventListener("click",()=>{i=T.dataset.comp,x()})),(L=s.querySelector("#cde-close"))==null||L.addEventListener("click",d),(A=s.querySelector("#cde-save"))==null||A.addEventListener("click",p);const f=()=>{w.surname_real=s.querySelector("#cde-t-name").value||"JOUEUR",w.job=s.querySelector("#cde-t-job").value,w.job2=s.querySelector("#cde-t-job2").value||null,w.rarity=s.querySelector("#cde-t-rarity").value;const T=parseInt(s.querySelector("#cde-t-note").value)||0,M={GK:"note_g",DEF:"note_d",MIL:"note_m",ATT:"note_a"};w[M[w.job]]=T,w.job2&&(w[M[w.job2]]=Math.round(T*.8)),m=s.querySelector("#cde-t-stad").checked,l=s.querySelector("#cde-t-context").value,s.querySelector("#cde-card-render").innerHTML=E(),_()};["cde-t-name","cde-t-job","cde-t-job2","cde-t-rarity","cde-t-note","cde-t-stad","cde-t-context"].forEach(T=>{var M,D;(M=s.querySelector("#"+T))==null||M.addEventListener("input",f),(D=s.querySelector("#"+T))==null||D.addEventListener("change",f)}),s.querySelectorAll("[data-vis-ctx]").forEach(T=>{T.addEventListener("change",()=>{a[t][i][T.dataset.visCtx]=T.checked,f()})}),(S=s.querySelector("#cde-reset-pos"))==null||S.addEventListener("click",()=>{r[t][i]={x:.5,y:.5,scale:1},f()}),_()}function I(f,L,A,S){const T=A/372,M=D=>Math.round(D*T);if(f==="name")return{w:A,h:M(t==="mobile"?372*.155:574*.155)};if(f==="photo"){const D=M(305.03999999999996),P=M(t==="mobile"?372*(.7-.155):574*(.62-.155));return{w:D*L.scale,h:P*L.scale}}if(f==="note"){const D=M(t==="mobile"?48:58)*L.scale,P=String(130).length;return{w:Math.round(P*D*.62),h:Math.round(D*1.15)}}if(f==="note2"){const D=M(16)*L.scale,P=String(110).length;return{w:Math.round(P*D*.62),h:Math.round(D*1.15)}}if(f==="flag"||f==="club"){const D=t==="mobile"?Math.max(M(52.080000000000005),M(95.604)):Math.max(M(66.00999999999999),M(84.6672));return{w:D*L.scale,h:D*L.scale}}return f==="stadium_badge"?{w:M(38)*L.scale,h:M(38)*L.scale}:{w:40*L.scale,h:40*L.scale}}function B(f,L,A,S){const T=L/(f.length*.6);return Math.max(S,Math.min(A,Math.round(T)))}const o="130",y="110",c=rn("FR");function u(f){const L=h/372,A=S=>Math.round(S*L);if(f==="name"){const S=A(t==="mobile"?10:18),T=h-S*2,M=A(t==="mobile"?20:46)*r[t].name.scale;return`<span style="font-size:${B("MANGALA",T,M,A(9))}px;font-weight:900;color:#fff;white-space:nowrap;text-shadow:0 1px 3px #000">MANGALA</span>`}if(f==="note")return`<span style="font-size:${A(t==="mobile"?48:58)*r[t].note.scale}px;font-weight:900;color:#D4A017;text-shadow:0 1px 3px #000">${o}</span>`;if(f==="note2")return`<span style="font-size:${A(16)*r[t].note2.scale}px;font-weight:900;color:#e03030;text-shadow:0 1px 3px #000">${y}</span>`;if(f==="flag")return c?`<img src="${c}" style="width:100%;height:100%;object-fit:fill;border-radius:3px">`:"🌍";if(f==="club")return'<div style="width:100%;height:100%;background:#2a9df4;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900;text-align:center;line-height:1.1">OM<br>MARSEILLE</div>';if(f==="photo"){const S=qe(w);return S?`<img src="${S}" style="width:100%;height:100%;object-fit:cover;border-radius:3px">`:'<div style="width:100%;height:100%;background:#333;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:20px">👤</div>'}return f==="stadium_badge"?Ot:""}function _(){const f=s.querySelector("#cde-drag-layer");if(!f)return;f.innerHTML="";const L=s.querySelector("#cde-preview-wrap"),A=L.offsetWidth,S=L.offsetHeight;ge.forEach(({key:T})=>{const M=r[t][T],D=T===i,{w:P,h:O}=I(T,M,A),C=document.createElement("div");C.className="cde-drag-box"+(D?" active":""),C.style.left=M.x*A-P/2+"px",C.style.top=M.y*S-O/2+"px",C.style.width=P+"px",C.style.height=O+"px",C.style.borderRadius=T==="flag"||T==="club"||T==="photo"||T==="stadium_badge"?"4px":"6px",C.style.pointerEvents="auto",C.style.opacity=D?"1":"0.75",C.innerHTML=u(T),f.appendChild(C);let z=null;D&&(z=document.createElement("div"),z.className="cde-resize-handle",C.appendChild(z));let R=!1,j=0,N=0,q=M.x,U=M.y,H=!1,Y=0,W=M.scale;const Z=()=>({cx:M.x*A,cy:M.y*S}),ue=()=>{i!==T&&(i=T,x())};C.addEventListener("mousedown",F=>{F.target!==z&&(F.preventDefault(),ue(),R=!0,j=F.clientX,N=F.clientY,q=M.x,U=M.y)}),z==null||z.addEventListener("mousedown",F=>{F.preventDefault(),F.stopPropagation(),H=!0,W=M.scale;const{cx:G,cy:K}=Z();Y=Math.hypot(F.clientX-(L.getBoundingClientRect().left+G),F.clientY-(L.getBoundingClientRect().top+K))}),window.addEventListener("mousemove",F=>{if(R){const G=(F.clientX-j)/A,K=(F.clientY-N)/S;M.x=Math.max(0,Math.min(1,q+G)),M.y=Math.max(0,Math.min(1,U+K));const{w:Q,h:ee}=I(T,M,A);C.style.left=M.x*A-Q/2+"px",C.style.top=M.y*S-ee/2+"px",s.querySelector("#cde-card-render").innerHTML=E()}else if(H){const{cx:G,cy:K}=Z(),Q=L.getBoundingClientRect(),ee=Math.hypot(F.clientX-(Q.left+G),F.clientY-(Q.top+K));M.scale=Math.max(.3,Math.min(4,Math.round(W*(ee/Math.max(20,Y))*100)/100));const{w:de,h:me}=I(T,M,A);C.style.width=de+"px",C.style.height=me+"px",C.style.left=M.x*A-de/2+"px",C.style.top=M.y*S-me/2+"px",C.innerHTML=u(T),z&&C.appendChild(z),s.querySelector("#cde-card-render").innerHTML=E()}}),window.addEventListener("mouseup",()=>{R=!1,H=!1}),C.addEventListener("touchstart",F=>{ue();const G=F.touches[0];if(F.target===z){H=!0,W=M.scale;const{cx:K,cy:Q}=Z(),ee=L.getBoundingClientRect();Y=Math.hypot(G.clientX-(ee.left+K),G.clientY-(ee.top+Q))}else R=!0,j=G.clientX,N=G.clientY,q=M.x,U=M.y},{passive:!0}),C.addEventListener("touchmove",F=>{const G=F.touches[0];if(R){const ee=(G.clientX-j)/A,de=(G.clientY-N)/S;M.x=Math.max(0,Math.min(1,q+ee)),M.y=Math.max(0,Math.min(1,U+de))}else if(H){const{cx:ee,cy:de}=Z(),me=L.getBoundingClientRect(),Pt=Math.hypot(G.clientX-(me.left+ee),G.clientY-(me.top+de));M.scale=Math.max(.3,Math.min(4,Math.round(W*(Pt/Math.max(20,Y))*100)/100))}const{w:K,h:Q}=I(T,M,A);C.style.width=K+"px",C.style.height=Q+"px",C.style.left=M.x*A-K/2+"px",C.style.top=M.y*S-Q/2+"px",s.querySelector("#cde-card-render").innerHTML=E()},{passive:!0}),C.addEventListener("touchend",()=>{R=!1,H=!1})})}async function p(){const f=s.querySelector("#cde-error");f.textContent="";const L=s.querySelector("#cde-save");L.disabled=!0,L.textContent="⏳ Enregistrement...";const A=[],S=[];["pc","mobile"].forEach(D=>{ge.forEach(({key:P})=>{const O=r[D][P];A.push({mode:D,component:P,x_pct:O.x,y_pct:O.y,scale:O.scale}),ye.forEach(C=>S.push({mode:D,component:P,context:C,visible:!!a[D][P][C]}))})});const{error:T}=await k.from("card_design_components").upsert(A,{onConflict:"mode,component"});if(T){f.textContent=T.message,L.disabled=!1,L.textContent="💾 Enregistrer";return}const{error:M}=await k.from("card_design_visibility").upsert(S,{onConflict:"mode,component,context"});if(M){f.textContent=M.message,L.disabled=!1,L.textContent="💾 Enregistrer";return}qt(),n("✅ Design enregistré — appliqué partout dans l'app","success"),d()}x()}async function ze(e){let t=[],i=0;for(;;){const{data:r,error:a}=await e(k.from("players"),i,i+1e3-1);if(a)return{data:t,error:a};if(t=t.concat(r||[]),!r||r.length<1e3)break;i+=1e3}return{data:t,error:null}}const Re={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},sn={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function dn(){const e={};for(const n of Gt)e[n]=await Ut(n);return e}function ve(e){return e.job==="GK"?e.note_g||0:e.job==="DEF"?e.note_d||0:e.job==="MIL"?e.note_m||0:e.note_a||0}async function cn(e){const n=document.getElementById("export-players-btn");n&&(n.disabled=!0,n.textContent="⏳ Export...");try{let t=[],i=0;const r=1e3;for(;;){const{data:l,error:m}=await k.from("players").select("*").order("surname_real").range(i,i+r-1);if(m){e(m.message,"error");return}if(t=t.concat(l||[]),!l||l.length<r)break;i+=r}if(!t.length){e("Aucun joueur à exporter","error");return}const a=await yt(()=>import("./xlsx-D_0l8YDs.js"),[]),v=a.utils.json_to_sheet(t),$=a.utils.book_new();a.utils.book_append_sheet($,v,"Joueurs");const w=new Date().toISOString().slice(0,10);a.writeFile($,`joueurs_${w}.xlsx`),e(`${t.length} joueur(s) exporté(s) ✅`,"success")}catch(t){e(`Erreur export : ${t.message}`,"error")}finally{n&&(n.disabled=!1,n.textContent="📤 Export Excel")}}async function pn(e,n,t){const{toast:i}=t,r=document.getElementById("import-players-btn");r&&(r.disabled=!0,r.textContent="⏳ Import...");try{let a=function(y){const c={};return m.forEach(u=>{if(!(u in y))return;let _=y[u];if(typeof _=="string"&&(_=_.trim()),_===""&&(_=null),_!==null&&g.has(u)){const p=Number(_);_=Number.isFinite(p)?p:null}c[u]=_}),c};const v=await yt(()=>import("./xlsx-D_0l8YDs.js"),[]),$=await e.arrayBuffer(),w=v.read($,{type:"array"}),l=v.utils.sheet_to_json(w.Sheets[w.SheetNames[0]],{defval:null});if(!l.length){i("Fichier vide","error");return}const m=["firstname","surname_real","lastname_reel","job","job2","rarity","country_code","club_id","sell_price","note_g","note_d","note_m","note_a","note_min","note_max","face","ethnie","skin"],g=new Set(["sell_price","note_g","note_d","note_m","note_a","note_min","note_max"]),h=new Set(["firstname","surname_real"]),E=[],s=[],d=[];if(l.forEach((y,c)=>{if(y.id){const p={id:y.id};m.forEach(f=>{if(!(f in y))return;let L=y[f];if(typeof L=="string"&&(L=L.trim()),L===""&&(L=null),L!==null&&g.has(f)){const A=Number(L);L=Number.isFinite(A)?A:null}L===null&&h.has(f)||(p[f]=L)}),p.updated_at=new Date().toISOString(),E.push(p);return}const u=a(y),_=[...h].filter(p=>u[p]==null);if(_.length){d.push(`ligne ${c+2} : champ(s) requis manquant(s) pour la création (${_.join(", ")})`);return}s.push(u)}),!E.length&&!s.length){i("Aucune ligne exploitable","error");return}if(!confirm(`${E.length} joueur(s) à mettre à jour, ${s.length} à créer depuis le fichier.

Continuer ?`))return;let x=0,b=0;const I=[],B=20;for(let y=0;y<E.length;y+=B){const c=E.slice(y,y+B);(await Promise.all(c.map(({id:_,...p})=>k.from("players").update(p).eq("id",_)))).forEach((_,p)=>{_.error?I.push(`${c[p].id}: ${_.error.message}`):x++})}I.length&&console.warn("[Import joueurs] erreurs update :",I);const o=100;for(let y=0;y<s.length;y+=o){const c=s.slice(y,y+o),{error:u}=await k.from("players").insert(c);if(u){I.push(`Lot création ${Math.floor(y/o)+1}: ${u.message}`);continue}b+=c.length}i(`${x} mis à jour, ${b} créés ✅${d.length?` — ${d.length} ligne(s) ignorée(s)`:""}${I.length?` — ${I.length} erreur(s) update (voir console)`:""}`,I.length?"error":"success"),d.length&&console.warn("[Import joueurs] lignes ignorées :",d),(x||b)&&ae(n,t)}catch(a){i(`Erreur import : ${a.message}`,"error")}finally{r&&(r.disabled=!1,r.textContent="📥 Import Excel")}}function Xe(e,n,t,i=!1){const r=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`;return window[r]||(window[r]=new Set),`<div class="ms-wrap" data-ms-kind="${e}" style="position:relative;min-width:150px">
    <button type="button" id="ms-btn-${e}" class="btn btn-ghost" style="width:100%;text-align:left;display:flex;justify-content:space-between;align-items:center;gap:6px">
      <span id="ms-label-${e}">${n}</span>
      <span style="font-size:10px;opacity:.6">▾</span>
    </button>
    <div id="ms-panel-${e}" style="display:none;position:absolute;z-index:50;top:calc(100% + 4px);left:0;min-width:220px;max-height:280px;overflow-y:auto;background:#fff;border:1px solid var(--gray-200,#ddd);border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,0.15);padding:8px">
      ${i?`<input id="ms-search-${e}" placeholder="Rechercher…" style="width:100%;margin-bottom:6px;padding:6px 8px;font-size:12.5px">`:""}
      <div style="display:flex;gap:6px;margin-bottom:6px">
        <button type="button" class="btn btn-ghost btn-sm" id="ms-all-${e}" style="flex:1;font-size:11px;padding:4px">Tout</button>
        <button type="button" class="btn btn-ghost btn-sm" id="ms-none-${e}" style="flex:1;font-size:11px;padding:4px">Aucun</button>
      </div>
      <div id="ms-options-${e}">
        ${t.map(a=>`
          <label style="display:flex;align-items:center;gap:6px;padding:3px 2px;font-size:12.5px;cursor:pointer" data-ms-label="${(a.label||"").toLowerCase()}">
            <input type="checkbox" class="ms-check-${e}" value="${a.value}">
            <span>${a.label}</span>
          </label>`).join("")}
      </div>
    </div>
  </div>`}function Qe(e,n,t){var m,g,h;const i=`__players${e[0].toUpperCase()}${e.slice(1)}Filter`,r=window[i],a=n.querySelector(`#ms-btn-${e}`),v=n.querySelector(`#ms-panel-${e}`),$=n.querySelector(`#ms-label-${e}`),w=($==null?void 0:$.textContent)||"";function l(){$&&($.textContent=r.size?`${w} (${r.size})`:w)}n.querySelectorAll(`.ms-check-${e}`).forEach(E=>{E.checked=r.has(E.value),E.addEventListener("change",()=>{E.checked?r.add(E.value):r.delete(E.value),l(),t()})}),l(),a==null||a.addEventListener("click",E=>{E.stopPropagation();const s=v.style.display==="block";document.querySelectorAll('[id^="ms-panel-"]').forEach(d=>d.style.display="none"),v.style.display=s?"none":"block"}),v==null||v.addEventListener("click",E=>E.stopPropagation()),(m=n.querySelector(`#ms-all-${e}`))==null||m.addEventListener("click",()=>{n.querySelectorAll(`.ms-check-${e}`).forEach(E=>{E.checked=!0,r.add(E.value)}),l(),t()}),(g=n.querySelector(`#ms-none-${e}`))==null||g.addEventListener("click",()=>{n.querySelectorAll(`.ms-check-${e}`).forEach(E=>{E.checked=!1}),r.clear(),l(),t()}),(h=n.querySelector(`#ms-search-${e}`))==null||h.addEventListener("input",E=>{const s=E.target.value.toLowerCase();n.querySelectorAll(`#ms-options-${e} label`).forEach(d=>{d.style.display=d.dataset.msLabel.includes(s)?"flex":"none"})})}window.__playersMsDocListener||(window.__playersMsDocListener=!0,document.addEventListener("click",()=>{document.querySelectorAll('[id^="ms-panel-"]').forEach(e=>e.style.display="none")}));async function un(e,n){const{toast:t}=n,i=document.getElementById("assign-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ Attribution en cours...");try{const{data:r,error:a}=await ze((h,E,s)=>h.select("id,country_code").or("face.is.null,face.eq.").range(E,s));if(a){t(a.message,"error");return}if(!r||!r.length){t("Aucun joueur sans face","info");return}if(!confirm(`${r.length} joueur(s) sans face. Leur attribuer une photo aléatoire maintenant ?`))return;const{data:v}=await ze((h,E,s)=>h.select("face").not("face","is",null).range(E,s)),$=new Set((v||[]).map(h=>h.face).filter(Boolean)),w=[];for(const h of r){const E=await Ae(h.country_code,$);E&&($.add(E),w.push({id:h.id,face:E}))}let l=0;const m=20,g=[];for(let h=0;h<w.length;h+=m){const E=w.slice(h,h+m);(await Promise.all(E.map(d=>k.from("players").update({face:d.face}).eq("id",d.id)))).forEach((d,x)=>{d.error?g.push(`${E[x].id}: ${d.error.message}`):l++})}g.length&&console.warn("[assignMissingFaces] erreurs :",g),t(`${l} face(s) attribuée(s) ✅${w.length<r.length?` — ${r.length-w.length} sans photo disponible pour leur continent`:""}${g.length?` — ${g.length} erreur(s) (voir console)`:""}`,g.length?"error":"success"),l&&ae(e,n)}finally{i&&(i.disabled=!1,i.textContent="🖼️ Assigner les faces manquantes")}}async function mn(e,n){await ae(e,n)}async function ae(e,n,t=null){var l,m,g,h;const{toast:i}=n;t||(t={search:((l=document.getElementById("search-players"))==null?void 0:l.value)||"",job:((m=document.getElementById("filter-job"))==null?void 0:m.value)||"",rarity:((g=document.getElementById("filter-rarity"))==null?void 0:g.value)||"",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[],sort:((h=document.getElementById("sort-players"))==null?void 0:h.value)||"job"});const[{data:r,error:a},{data:v}]=await Promise.all([ze((E,s,d)=>E.select("*, clubs(id,encoded_name,logo_url)").range(s,d)),k.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const $={GK:0,DEF:1,MIL:2,ATT:3},w=(r||[]).sort((E,s)=>{const d=($[E.job]??4)-($[s.job]??4);return d!==0?d:(E.surname_real||"").localeCompare(s.surname_real||"")});gn(e,w,v||[],n,t)}function gn(e,n,t,i,r=null){var E,s,d;const{toast:a}=i;if(e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="flex:1;min-width:140px">
        <select id="filter-job" style="width:100px">
          <option value="">Tout</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
        <select id="filter-rarity" style="width:110px">
          <option value="">Toutes</option>
          ${Object.entries(Re).map(([x,b])=>`<option value="${x}">${b}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="export-players-btn" style="white-space:nowrap">📤 Export Excel</button>
        <button class="btn btn-ghost" id="import-players-btn" style="white-space:nowrap">📥 Import Excel</button>
        <button class="btn btn-ghost" id="assign-faces-btn" style="white-space:nowrap">🖼️ Assigner les faces manquantes</button>
        <input type="file" id="import-players-file" accept=".xlsx,.xls" style="display:none">
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
        ${Xe("club","🏟️ Club",t.map(x=>({value:x.id,label:x.encoded_name})),!0)}
        ${Xe("country","🌍 Pays",[...new Set(n.map(x=>x.country_code).filter(Boolean))].sort().map(x=>({value:x,label:x})),!0)}
        <select id="sort-players" style="min-width:170px">
          <option value="job">Trier : Poste (défaut)</option>
          <option value="note_desc">Trier : Note ↓ (plus haute)</option>
          <option value="note_asc">Trier : Note ↑ (plus basse)</option>
          <option value="name">Trier : Nom (A→Z)</option>
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div style="display:flex;align-items:center;gap:10px">
        <div id="count-label" style="font-size:12px;color:var(--gray-600);flex:1">${n.length} joueur(s)</div>
        <div style="display:flex;gap:4px;background:var(--gray-100,#f0f0f0);border-radius:8px;padding:3px">
          <button type="button" class="view-mode-btn" data-view="card" style="padding:6px 12px;border-radius:6px;border:none;font-size:12px;font-weight:700;cursor:pointer;background:var(--green);color:#fff">🎴 Carte</button>
          <button type="button" class="view-mode-btn" data-view="list" style="padding:6px 12px;border-radius:6px;border:none;font-size:12px;font-weight:700;cursor:pointer;background:transparent;color:var(--gray-600)">📋 Liste</button>
        </div>
        <button type="button" id="btn-design-card" style="padding:7px 14px;border-radius:8px;border:1.5px solid #D4A017;background:linear-gradient(135deg,#f6d365,#D4A017);color:#1a1a1a;font-weight:900;font-size:12px;cursor:pointer">🎨 Design Card</button>
      </div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
      <!-- Liste modifiable (tableau) -->
      <div id="players-table-wrap" style="display:none;overflow-x:auto;border:1px solid var(--gray-200,#e0e0e0);border-radius:10px"></div>
    </div>`,r){const x=r,b=I=>document.getElementById(I);x.search&&b("search-players")&&(b("search-players").value=x.search),x.job&&b("filter-job")&&(b("filter-job").value=x.job),x.rarity&&b("filter-rarity")&&(b("filter-rarity").value=x.rarity),x.sort&&b("sort-players")&&(b("sort-players").value=x.sort)}r!=null&&r.clubs&&(window.__playersClubFilter=new Set(r.clubs)),r!=null&&r.countries&&(window.__playersCountryFilter=new Set(r.countries));function v(){var u;const x=document.getElementById("search-players").value.toLowerCase(),b=document.getElementById("filter-job").value,I=document.getElementById("filter-rarity").value,B=window.__playersClubFilter||new Set,o=window.__playersCountryFilter||new Set,y=((u=document.getElementById("sort-players"))==null?void 0:u.value)||"job";let c=n.filter(_=>(!x||`${_.firstname} ${_.surname_real}`.toLowerCase().includes(x))&&(!b||_.job===b)&&(!I||_.rarity===I)&&(!B.size||B.has(_.club_id))&&(!o.size||o.has(_.country_code)));return y==="note_desc"?c=[...c].sort((_,p)=>ve(p)-ve(_)):y==="note_asc"?c=[...c].sort((_,p)=>ve(_)-ve(p)):y==="name"&&(c=[...c].sort((_,p)=>(_.surname_real||"").localeCompare(p.surname_real||""))),c}const $=new Set;function w(){const x=document.getElementById("bulk-bar"),b=document.getElementById("bulk-count");x&&(x.style.display=$.size>0?"flex":"none",b&&(b.textContent=`${$.size} joueur(s) sélectionné(s)`))}let l="card";function m(){const x=v();if(document.getElementById("count-label").textContent=`${x.length} joueur(s)`,l==="list"){document.getElementById("players-list").style.display="none",document.getElementById("players-table-wrap").style.display="block",h(x);return}document.getElementById("players-list").style.display="flex",document.getElementById("players-table-wrap").style.display="none",g(x)}function g(x){const b=document.getElementById("players-list");if(!x.length){b.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}b.innerHTML=x.map(I=>{const B={...I,clubs:I.clubs,face:I.face||null},o=le(B,{width:120,context:"admin"});return`<div style="position:relative;cursor:pointer" data-edit="${I.id}">
        ${o}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${I.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),b.querySelectorAll("[data-edit]").forEach(I=>{I.addEventListener("click",()=>{const B=n.find(o=>o.id===I.dataset.edit);B&&et(B,t,e,i)})}),b.querySelectorAll(".btn-del-player").forEach(I=>{I.addEventListener("click",async B=>{if(B.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:o}=await k.from("players").delete().eq("id",I.dataset.del);o?a(o.message,"error"):(a("Joueur supprimé ✅","success"),ae(e,i))})})}function h(x){const b=document.getElementById("players-table-wrap");if(!x.length){b.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}const I=S=>'<option value="">—</option>'+t.map(T=>`<option value="${T.id}" ${S===T.id?"selected":""}>${T.encoded_name}</option>`).join(""),B=S=>["GK","DEF","MIL","ATT"].map(T=>`<option value="${T}" ${S===T?"selected":""}>${T}</option>`).join(""),o=S=>'<option value="">Aucun</option>'+["GK","DEF","MIL","ATT"].map(T=>`<option value="${T}" ${S===T?"selected":""}>${T}</option>`).join(""),y=S=>["normal","pepite","papyte","legende"].map(T=>`<option value="${T}" ${S===T?"selected":""}>${Re[T]}</option>`).join(""),c=S=>xt.map(T=>`<option value="${T}" ${(S||"FR")===T?"selected":""}>${ht[T]||T}</option>`).join(""),u=S=>`<th style="position:sticky;top:0;background:#f5f5f5;padding:8px 6px;font-size:11px;font-weight:800;color:#666;text-transform:uppercase;letter-spacing:0.3px;border-bottom:2px solid #e0e0e0;white-space:nowrap;text-align:left">${S}</th>`,_="width:100%;min-width:90px;padding:6px 7px;border:1px solid #ddd;border-radius:6px;font-size:12.5px;background:#fff;color:#1a1a1a",p="width:48px;padding:6px 4px;border:1px solid #ddd;border-radius:6px;font-size:12.5px;text-align:center;background:#fff;color:#1a1a1a";b.innerHTML=`
      <table style="border-collapse:collapse;width:100%;font-size:13px">
        <thead><tr>
          ${u("Prénom")}${u("Nom")}${u("Lastname")}${u("Poste 1")}${u("Poste 2")}${u("Rareté")}
          ${u("Pays")}${u("Club")}${u("GK")}${u("DEF")}${u("MIL")}${u("ATT")}${u("Visage")}${u("")}
        </tr></thead>
        <tbody>
          ${x.map(S=>{const T=S.face?qe({face:S.face}):null;return`<tr data-row-id="${S.id}" style="border-bottom:1px solid #eee">
              <td style="padding:5px"><input class="tv-field" data-field="firstname" data-id="${S.id}" value="${(S.firstname||"").replace(/"/g,"&quot;")}" style="${_}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="surname_real" data-id="${S.id}" value="${(S.surname_real||"").replace(/"/g,"&quot;")}" style="${_}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="lastname_reel" data-id="${S.id}" value="${(S.lastname_reel||"").replace(/"/g,"&quot;")}" style="${_}"></td>
              <td style="padding:5px"><select class="tv-field" data-field="job" data-id="${S.id}" style="${_}">${B(S.job)}</select></td>
              <td style="padding:5px"><select class="tv-field" data-field="job2" data-id="${S.id}" style="${_}">${o(S.job2)}</select></td>
              <td style="padding:5px"><select class="tv-field" data-field="rarity" data-id="${S.id}" style="${_}">${y(S.rarity)}</select></td>
              <td style="padding:5px">
                <div style="display:flex;align-items:center;gap:5px">
                  <img src="https://flagsapi.com/${(S.country_code||"FR").slice(0,2).toUpperCase()}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
                  <select class="tv-field tv-country" data-field="country_code" data-id="${S.id}" style="${_}">${c(S.country_code)}</select>
                </div>
              </td>
              <td style="padding:5px"><select class="tv-field" data-field="club_id" data-id="${S.id}" style="${_};min-width:130px">${I(S.club_id)}</select></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_g" data-id="${S.id}" type="number" min="0" max="20" value="${S.note_g??0}" style="${p}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_d" data-id="${S.id}" type="number" min="0" max="20" value="${S.note_d??0}" style="${p}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_m" data-id="${S.id}" type="number" min="0" max="20" value="${S.note_m??0}" style="${p}"></td>
              <td style="padding:5px"><input class="tv-field" data-field="note_a" data-id="${S.id}" type="number" min="0" max="20" value="${S.note_a??0}" style="${p}"></td>
              <td style="padding:5px;text-align:center">
                ${T?`<img src="${T}" style="width:32px;height:32px;object-fit:cover;border-radius:6px" onerror="this.style.display='none'">`:'<span style="color:#ccc;font-size:11px">—</span>'}
              </td>
              <td style="padding:5px">
                <button class="btn-del-player-tv" data-del="${S.id}" style="width:24px;height:24px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:12px;cursor:pointer">✕</button>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>`;const f=new Set(["note_g","note_d","note_m","note_a"]);function L(S,T){S.style.transition="background-color .15s",S.style.backgroundColor=T?"#d4f4dd":"#f9d0d0",setTimeout(()=>{S.style.backgroundColor="#fff"},500)}async function A(S){const T=S.dataset.id,M=S.dataset.field;let D=S.value;if(f.has(M)){const C=Number(D);D=Number.isFinite(C)?Math.max(0,Math.min(20,C)):0,S.value=D}if((M==="club_id"||M==="job2")&&!D&&(D=null),(M==="firstname"||M==="surname_real")&&!D.trim()){L(S,!1),a("Ce champ ne peut pas être vide","error");return}const{error:P}=await k.from("players").update({[M]:D,updated_at:new Date().toISOString()}).eq("id",T);if(L(S,!P),P){a(P.message,"error");return}const O=n.find(C=>C.id===T);O&&(O[M]=D)}b.querySelectorAll("input.tv-field").forEach(S=>{S.addEventListener("blur",()=>A(S)),S.addEventListener("keydown",T=>{T.key==="Enter"&&S.blur()})}),b.querySelectorAll("select.tv-field").forEach(S=>{S.addEventListener("change",()=>A(S))}),b.querySelectorAll(".btn-del-player-tv").forEach(S=>{S.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ?"))return;const{error:T}=await k.from("players").delete().eq("id",S.dataset.del);T?a(T.message,"error"):(a("Joueur supprimé ✅","success"),ae(e,i))})})}m(),document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("sort-players").addEventListener("change",m),Qe("club",e,m),Qe("country",e,m),e.querySelectorAll(".view-mode-btn").forEach(x=>{x.addEventListener("click",()=>{l=x.dataset.view==="list"?"list":"card",e.querySelectorAll(".view-mode-btn").forEach(b=>{const I=b===x;b.style.background=I?"var(--green)":"transparent",b.style.color=I?"#fff":"var(--gray-600)"}),m()})}),(E=document.getElementById("btn-design-card"))==null||E.addEventListener("click",()=>ln(i)),(s=document.getElementById("bulk-cancel-btn"))==null||s.addEventListener("click",()=>{$.clear(),w(),m()}),(d=document.getElementById("bulk-delete-btn"))==null||d.addEventListener("click",async()=>{var B,o,y,c;if(!$.size||!confirm(`Supprimer ${$.size} joueur(s) ?`))return;const x=[...$],{error:b}=await k.from("players").delete().in("id",x);if(b){a(b.message,"error");return}a(`${x.length} joueur(s) supprimé(s) ✅`,"success"),$.clear();const I={search:((B=document.getElementById("search-players"))==null?void 0:B.value)||"",job:((o=document.getElementById("filter-job"))==null?void 0:o.value)||"",rarity:((y=document.getElementById("filter-rarity"))==null?void 0:y.value)||"",sort:((c=document.getElementById("sort-players"))==null?void 0:c.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ae(e,i,I)}),document.getElementById("add-player-btn").addEventListener("click",()=>et(null,t,e,i)),document.getElementById("export-players-btn").addEventListener("click",()=>cn(i.toast)),document.getElementById("import-players-btn").addEventListener("click",()=>{document.getElementById("import-players-file").click()}),document.getElementById("import-players-file").addEventListener("change",x=>{var I;const b=(I=x.target.files)==null?void 0:I[0];b&&pn(b,e,i),x.target.value=""}),document.getElementById("assign-faces-btn").addEventListener("click",()=>un(e,i))}const xt=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD","GE","AM","AZ","BY","LT","LV","EE","SK","SI","BA","MK","ME","XK","MD","IS","IE","LU","FI","CY","MT","LI","SM","MC","AD","VA","UZ","KZ","TM","TJ","KG","IL","IQ","JO","LB","SY","KW","QA","BH","OM","YE","AF","MN","LK","NP","MM","KH","LA","MY","SG","TW","HK","MO","BT","MV","NZ","FJ","PG","NC","VU","SB","WS","TO","BO","PY","VE","GY","SR","PA","CR","HN","GT","SV","NI","BZ","CU","JM","HT","DO","TT","BS","BB","GD","LC","VC","AG","DM","KN","ET","SD","SS","SO","ER","DJ","UG","RW","BI","TZ","MZ","ZM","ZW","MW","NA","BW","LS","SZ","MG","MU","LY","TD","NE","BF","MR","GM","GW","SL","LR","TG","BJ","GA","CG","CF","GQ","KM","CV","ST","SC"],ht={FR:"France",DE:"Allemagne",ES:"Espagne",PT:"Portugal",IT:"Italie",GB:"Angleterre",NL:"Pays-Bas",BE:"Belgique",DK:"Danemark",SE:"Suède",NO:"Norvège",PL:"Pologne",CH:"Suisse",AT:"Autriche",CZ:"Tchéquie",HR:"Croatie",RS:"Serbie",AL:"Albanie",TR:"Turquie",AR:"Argentine",BR:"Brésil",UY:"Uruguay",CO:"Colombie",MX:"Mexique",CL:"Chili",PE:"Pérou",EC:"Équateur",MA:"Maroc",DZ:"Algérie",TN:"Tunisie",EG:"Égypte",NG:"Nigeria",SN:"Sénégal",CI:"Côte d'Ivoire",CM:"Cameroun",GH:"Ghana",ML:"Mali",GN:"Guinée",CD:"RD Congo",AO:"Angola",ZA:"Afrique du Sud",KE:"Kenya",JP:"Japon",KR:"Corée du Sud",CN:"Chine",VN:"Vietnam",TH:"Thaïlande",ID:"Indonésie",PH:"Philippines",US:"États-Unis",CA:"Canada",AU:"Australie",RU:"Russie",UA:"Ukraine",GR:"Grèce",RO:"Roumanie",BG:"Bulgarie",IR:"Iran",SA:"Arabie Saoudite",AE:"Émirats Arabes Unis",IN:"Inde",PK:"Pakistan",BD:"Bangladesh",GE:"Géorgie",AM:"Arménie",AZ:"Azerbaïdjan",BY:"Biélorussie",LT:"Lituanie",LV:"Lettonie",EE:"Estonie",SK:"Slovaquie",SI:"Slovénie",BA:"Bosnie-Herzégovine",MK:"Macédoine du Nord",ME:"Monténégro",XK:"Kosovo",MD:"Moldavie",IS:"Islande",IE:"Irlande",LU:"Luxembourg",FI:"Finlande",CY:"Chypre",MT:"Malte",LI:"Liechtenstein",SM:"Saint-Marin",MC:"Monaco",AD:"Andorre",VA:"Vatican",UZ:"Ouzbékistan",KZ:"Kazakhstan",TM:"Turkménistan",TJ:"Tadjikistan",KG:"Kirghizistan",IL:"Israël",IQ:"Irak",JO:"Jordanie",LB:"Liban",SY:"Syrie",KW:"Koweït",QA:"Qatar",BH:"Bahreïn",OM:"Oman",YE:"Yémen",AF:"Afghanistan",MN:"Mongolie",LK:"Sri Lanka",NP:"Népal",MM:"Myanmar",KH:"Cambodge",LA:"Laos",MY:"Malaisie",SG:"Singapour",TW:"Taïwan",HK:"Hong Kong",MO:"Macao",BT:"Bhoutan",MV:"Maldives",NZ:"Nouvelle-Zélande",FJ:"Fidji",PG:"Papouasie-Nouvelle-Guinée",NC:"Nouvelle-Calédonie",VU:"Vanuatu",SB:"Îles Salomon",WS:"Samoa",TO:"Tonga",BO:"Bolivie",PY:"Paraguay",VE:"Venezuela",GY:"Guyana",SR:"Suriname",PA:"Panama",CR:"Costa Rica",HN:"Honduras",GT:"Guatemala",SV:"Salvador",NI:"Nicaragua",BZ:"Belize",CU:"Cuba",JM:"Jamaïque",HT:"Haïti",DO:"République Dominicaine",TT:"Trinité-et-Tobago",BS:"Bahamas",BB:"Barbade",GD:"Grenade",LC:"Sainte-Lucie",VC:"Saint-Vincent",AG:"Antigua-et-Barbuda",DM:"Dominique",KN:"Saint-Kitts-et-Nevis",ET:"Éthiopie",SD:"Soudan",SS:"Soudan du Sud",SO:"Somalie",ER:"Érythrée",DJ:"Djibouti",UG:"Ouganda",RW:"Rwanda",BI:"Burundi",TZ:"Tanzanie",MZ:"Mozambique",ZM:"Zambie",ZW:"Zimbabwe",MW:"Malawi",NA:"Namibie",BW:"Botswana",LS:"Lesotho",SZ:"Eswatini",MG:"Madagascar",MU:"Maurice",LY:"Libye",TD:"Tchad",NE:"Niger",BF:"Burkina Faso",MR:"Mauritanie",GM:"Gambie",GW:"Guinée-Bissau",SL:"Sierra Leone",LR:"Liberia",TG:"Togo",BJ:"Bénin",GA:"Gabon",CG:"Congo",CF:"Centrafrique",GQ:"Guinée Équatoriale",KM:"Comores",CV:"Cap-Vert",ST:"Sao Tomé-et-Principe",SC:"Seychelles"};async function et(e,n,t,i){const{toast:r,openModal:a,closeModal:v}=i,$=!!e,w=await dn(),{data:l}=await k.from("players").select("face").not("face","is",null),m=new Set((l||[]).map(s=>s.face).filter(Boolean));e!=null&&e.face&&m.delete(e.face);const g='<option value="">— Club —</option>'+n.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),h=e!=null&&e.face?e.face.split("/")[0]:"",E=Object.keys(w).map(s=>`<option value="${s}" ${h===s?"selected":""}>${s}</option>`).join("");a($?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<style>
      /* Sur mobile, l'aperçu (largeur fixe) + le formulaire (min-width:300px)
         dépassaient la largeur de l'écran (480px minimum requis), forçant un
         layout écrasé avec scroll horizontal. En dessous de 700px, on empile
         verticalement : aperçu centré en haut, formulaire pleine largeur. */
      @media (max-width: 700px) {
        .pm-layout { flex-direction: column !important; gap: 14px !important }
        .pm-preview-col { position: static !important; width: 100% !important }
        .pm-preview-col > div:last-child { display:flex; justify-content:center }
        .pm-form-col { min-width: 0 !important; width: 100% !important; gap: 14px !important }
        .pm-grid4 { grid-template-columns: 1fr 1fr !important }

        /* Regroupement des champs en "sections" façon app mobile : fond
           légèrement distinct, coins arrondis, séparation nette entre
           blocs — au lieu de tout empiler à plat sans repère visuel. */
        .pm-section {
          background: #f7f8fa; border-radius: 14px; padding: 14px;
          border: 1px solid #ececec;
        }
        .pm-section-title {
          font-size: 11px; font-weight: 800; color: #999; text-transform: uppercase;
          letter-spacing: 0.6px; margin-bottom: 10px;
        }

        /* Zones tactiles agrandies (16px = évite le zoom auto iOS au focus) */
        .pm-form-col input, .pm-form-col select {
          font-size: 16px !important; padding: 12px 12px !important;
          border-radius: 10px !important; min-height: 46px;
        }
        .pm-form-col label { font-size: 12.5px; font-weight: 700; color: #555 }

        /* Barre "Enregistrer" façon barre d'action fixe d'app mobile */
        #pm-error { padding: 0 2px }
        .pm-save-bar {
          margin: 4px -14px -14px !important; padding: 12px 14px !important;
          box-shadow: 0 -4px 14px rgba(0,0,0,0.08);
          border-top: 1px solid #eee;
        }
        .pm-save-bar button { padding: 15px !important; border-radius: 12px !important; font-size: 16px !important }

        /* Aperçu de carte mis en valeur, comme une vraie prévisualisation d'app */
        #card-preview { filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18)) }
      }
    </style>
    <div class="pm-layout" style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">

      <!-- Colonne gauche : aperçu carte -->
      <div class="pm-preview-col" style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="pm-form-col" style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
        <div class="pm-section">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Prénom *</label>
            <input id="pm-fn" value="${(e==null?void 0:e.firstname)||""}" placeholder="Lucas">
          </div>
          <div class="form-group">
            <label>Nom</label>
            <input id="pm-real" value="${(e==null?void 0:e.surname_real)||""}" placeholder="Silva">
          </div>
        </div>
        <div class="form-group" style="margin-top:8px">
          <label>Lastname (réel) <span style="font-weight:400;color:#999">— champ libre, indépendant</span></label>
          <input id="pm-lastname-reel" value="${(e==null?void 0:e.lastname_reel)||""}" placeholder="Silva">
        </div>
        </div>

        <!-- Poste + Rareté + Pays -->
        <div class="pm-section">
        <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job)===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job2)===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${Re[s]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${xt.map(s=>`<option value="${s}" ${((e==null?void 0:e.country_code)||"FR")===s?"selected":""}>${ht[s]||s}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${g}</select>
          </div>
          <div class="form-group">
            <label>Prix vente (cr.)</label>
            <input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}">
          </div>
        </div>
        </div>

        <!-- Notes -->
        <div class="pm-section" style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (0–20)</div>
          <div class="pm-grid4" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,d,x])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${sn[s]};font-weight:700">${s}</label>
                <input id="${d}" type="number" min="0" max="20" value="${(e==null?void 0:e[x])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
              </div>`).join("")}
          </div>
          <div id="pm-minmax" style="display:${["pepite","papyte"].includes(e==null?void 0:e.rarity)?"grid":"none"};grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
            <div class="form-group">
              <label>Note min</label>
              <input id="pm-nmin" type="number" min="0" max="20" value="${(e==null?void 0:e.note_min)||""}">
            </div>
            <div class="form-group">
              <label>Note max</label>
              <input id="pm-nmax" type="number" min="0" max="20" value="${(e==null?void 0:e.note_max)||""}">
            </div>
          </div>
        </div>

        <!-- Physique : choix du dossier puis de la face -->
        <div class="pm-section" style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="form-group">
              <label>Continent</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${E}
              </select>
            </div>
            <div class="form-group">
              <label>Visage</label>
              <select id="pm-face">
                <option value="">— Choisir un visage —</option>
              </select>
            </div>
          </div>
          <!-- Aperçu grille de visages -->
          <div id="faces-grid" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;max-height:200px;overflow-y:auto"></div>
        </div>

        <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
        <div class="pm-save-bar" style="position:sticky;bottom:0;background:#fff;padding:8px 0 4px;margin-top:4px">
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${$?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var B,o,y;let s=(e==null?void 0:e.face)||null;function d(){var N,q,U,H,Y,W,Z,ue,F,G,K;const c=document.getElementById("card-preview");if(!c)return;const u=((N=document.getElementById("pm-fn"))==null?void 0:N.value)||"",_=(((q=document.getElementById("pm-real"))==null?void 0:q.value)||"").toUpperCase(),p=((U=document.getElementById("pm-job"))==null?void 0:U.value)||"ATT",f=((H=document.getElementById("pm-job2"))==null?void 0:H.value)||null,L=((Y=document.getElementById("pm-rarity"))==null?void 0:Y.value)||"normal",A=((W=document.getElementById("pm-country"))==null?void 0:W.value)||"FR",S=((Z=document.getElementById("pm-club"))==null?void 0:Z.value)||null,T=document.getElementById("pm-club"),M=T==null?void 0:T.options[T.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const D=parseInt((ue=document.getElementById("pm-g"))==null?void 0:ue.value)||0,P=parseInt((F=document.getElementById("pm-d"))==null?void 0:F.value)||0,O=parseInt((G=document.getElementById("pm-m"))==null?void 0:G.value)||0,C=parseInt((K=document.getElementById("pm-a"))==null?void 0:K.value)||0,z=n.find(Q=>Q.id===S),R={firstname:u||"Prénom",surname_real:_||"NOM",job:p,job2:f||null,rarity:L,country_code:A,club_id:S,note_g:D,note_d:P,note_m:O,note_a:C,face:s||null,clubs:z?{encoded_name:z.encoded_name,logo_url:z.logo_url}:null};c.innerHTML=le(R,{width:160,context:"admin"});const j=document.getElementById("pm-minmax");j&&(j.style.display=["pepite","papyte"].includes(L)?"grid":"none")}function x(c){const u=document.getElementById("faces-grid"),_=document.getElementById("pm-face");if(!u||!_)return;const p=w[c]||[];if(console.log("[players] loadFacesGrid folder=",c,"files=",p.length,p.slice(0,5)),!p.length){_.innerHTML='<option value="">— Aucun visage disponible —</option>',u.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${c}" du bucket Supabase.</p>`;return}const f=p.filter(L=>{const A=c+"/"+L;return A===s||!m.has(A)});_.innerHTML='<option value="">— Choisir un visage —</option>'+f.map(L=>{const A=c+"/"+L;return`<option value="${A}" ${s===A?"selected":""}>${L}</option>`}).join(""),u.innerHTML=f.map(L=>{const A=c+"/"+L,S=s===A,T=qe({face:A});return`<div data-face="${A}" style="cursor:pointer;border:2px solid ${S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${T}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),u.querySelectorAll("[data-face]").forEach(L=>{L.addEventListener("click",()=>{s=L.dataset.face;const A=document.getElementById("pm-face");A&&(A.value=s),u.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),d()})})}const b=e!=null&&e.face?e.face.split("/")[0]:"";b&&w[b]&&(document.getElementById("pm-folder").value=b,x(b)),(B=document.getElementById("pm-folder"))==null||B.addEventListener("change",c=>{x(c.target.value)}),(o=document.getElementById("pm-face"))==null||o.addEventListener("change",c=>{s=c.target.value||null,d()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(c=>{var u,_;(u=document.getElementById(c))==null||u.addEventListener("input",d),(_=document.getElementById(c))==null||_.addEventListener("change",d)}),(y=document.getElementById("pm-save"))==null||y.addEventListener("click",()=>yn(e,$,s,t,i)),d()},50)}function fn(e){const n=t=>{var i;return(i=document.getElementById(t))==null?void 0:i.value};return{firstname:(n("pm-fn")||"").trim(),surname_real:(n("pm-real")||"").trim()||"JOUEUR",lastname_reel:(n("pm-lastname-reel")||"").trim()||null,country_code:n("pm-country")||"FR",club_id:n("pm-club")||null,job:n("pm-job")||"ATT",job2:n("pm-job2")||null,rarity:n("pm-rarity")||"normal",note_g:parseInt(n("pm-g"))||0,note_d:parseInt(n("pm-d"))||0,note_m:parseInt(n("pm-m"))||0,note_a:parseInt(n("pm-a"))||0,note_min:parseInt(n("pm-nmin"))||null,note_max:parseInt(n("pm-nmax"))||null,sell_price:parseInt(n("pm-price"))||0,face:e||null,ethnie:n("pm-folder")||null,is_active:!0}}async function yn(e,n,t,i,r){var E,s,d,x;const{toast:a,closeModal:v}=r,$=document.getElementById("pm-error"),w=document.getElementById("pm-save"),l=fn(t);if(!l.firstname){$.textContent="Le prénom est requis.";return}if(!l.surname_real){$.textContent="Le nom est requis.";return}w.disabled=!0,w.textContent="Enregistrement…";const m=l,{error:g}=n?await k.from("players").update({...m,updated_at:new Date().toISOString()}).eq("id",e.id):await k.from("players").insert(m);if(g){$.textContent=g.message,w.disabled=!1,w.textContent=n?"💾 Enregistrer":"✅ Créer le joueur";return}a(n?"Joueur modifié ✅":"Joueur créé ✅","success"),v();const h={search:((E=document.getElementById("search-players"))==null?void 0:E.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((d=document.getElementById("filter-rarity"))==null?void 0:d.value)||"",sort:((x=document.getElementById("sort-players"))==null?void 0:x.value)||"job",clubs:window.__playersClubFilter?[...window.__playersClubFilter]:[],countries:window.__playersCountryFilter?[...window.__playersCountryFilter]:[]};ae(i,r,h)}const bn={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Et=["rase","court","milong","long"];function vn(e){const n=Ue(e);if(n==="noir")return"noir";if(n==="typ")return Math.random()<.9?"noir":"marron";if(n==="metisse")return Math.random()<.6?"noir":"marron";const t=Math.random();return t<.35?"blond":t<.75?"marron":"noir"}function xn(e){return Math.random()<.05?"chauve":vn(e)}const Ge=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ue(e){return bn[e]||"blanc"}function _t(e){return xn(e)}function se(e,n){return Math.floor(Math.random()*(n-e+1))+e}function oe(e){return e[Math.floor(Math.random()*e.length)]}function wt(e){const n=Ge.filter(t=>t!==e);return oe(n)}function je(e){const n=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],t=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],r=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return n.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":t.includes(e)?"North Africans":i.includes(e)?"Africans":r.includes(e)?"Asians":"Europeans"}const hn=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function $t(){const e=Math.random()*100;let n=0;for(const t of hn)if(n+=t.pct,e<n)return se(t.min,t.max);return se(1,4)}function En(){const e=Array.from({length:20},(n,t)=>t);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let _e=null;function _n(e,n){return e&&(_e||(_e=En()),_e.has(n))?se(15,20):$t()}const Le={FR:{first:["Lucas","Tom","Hugo","Théo","Antoine","Kylian","Rayan","Axel","Paul","Enzo","Léo","Mathis","Nathan","Alexis","Ethan","Maxime","Julien","Baptiste","Nicolas","Pierre","Clément","Adrien","Valentin","Dylan","Loïc","Quentin","Florian","Kevin","Corentin","Raphaël"],last:["Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Garnier","Boyer","Gauthier","Garcia","Perrin","Robin","Clément","Morin","Nicolas","Henry","Lemaire","Noël","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Rivière","Brunet"]},ES:{first:["Carlos","Miguel","Javier","Alejandro","Sergio","David","Diego","Pablo","Álvaro","Marcos","Adrián","Rubén","Iker","Raúl","Fernando","Roberto","Víctor","Iván","Gonzalo","Antonio","Manuel","Jesús","Josué","Rodrigo","Cristian","Héctor","Óscar","Mario","Daniel","Jorge"],last:["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Hernández","Jiménez","Díaz","Torres","Ramírez","Flores","Rivera","Gómez","Morales","Álvarez","Romero","Herrera","Medina","Aguilar","Vargas","Guzmán","Muñoz","Salazar","Soto","Contreras","Rojas","Ramos","Ortiz"]},PT:{first:["João","Pedro","Diogo","Rúben","Bruno","Tiago","André","Ricardo","Luís","Gonçalo","Nuno","Mário","Fábio","Rui","Miguel","Sérgio","Hugo","Filipe","Paulo","Vítor"],last:["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Carvalho","Gomes","Ribeiro","Araújo","Barbosa","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Pinto","Melo","Barros","Freitas","Fonseca","Andrade","Castro","Neves","Figueiredo","Duarte"]},BR:{first:["Gabriel","Lucas","Mateus","Gustavo","Felipe","Rodrigo","Thiago","Rafael","Bruno","Diego","Leonardo","Eduardo","Victor","Pedro","Carlos","Alexandre","André","Paulo","Danilo","Marcelo"],last:["Silva","Santos","Oliveira","Souza","Lima","Ferreira","Costa","Nascimento","Alves","Pereira","Rodrigues","Almeida","Nunes","Melo","Barbosa","Rocha","Brito","Castro","Carvalho","Gomes","Lopes","Ramos","Mendes","Cavalcanti","Batista","Azevedo","Campos","Freitas","Reis","Andrade"]},AR:{first:["Lionel","Sergio","Rodrigo","Nicolás","Ezequiel","Gonzalo","Federico","Mauro","Pablo","Diego","Lucas","Matías","Alejandro","Maximiliano","Emiliano","Marcos","Lautaro","Ángel","Leandro","Julián"],last:["González","Rodríguez","Martínez","García","López","Pérez","Sánchez","Romero","Torres","Flores","Díaz","Gómez","Alvarez","Ruiz","Castro","Herrera","Cabrera","Medina","Ferreyra","Suárez"]},IT:{first:["Marco","Luca","Alessandro","Matteo","Davide","Andrea","Francesco","Federico","Lorenzo","Riccardo","Stefano","Simone","Roberto","Nicola","Giovanni","Antonio","Emanuele","Daniele","Alberto","Giorgio"],last:["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","De Luca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Fontana","Rinaldi"]},DE:{first:["Lukas","Max","Jonas","Florian","Tobias","Stefan","Markus","Sebastian","Niklas","Leon","Tim","Felix","Alexander","Philipp","Christian","Thomas","Michael","Jan","Moritz","Fabian"],last:["Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schröder","Neumann","Schwarz","Zimmermann","Braun","Krüger","Hofmann","Wagner","Becker","Koch","Lehmann","Kaiser"]},GB:{first:["James","Harry","Oliver","Jack","George","Charlie","William","Thomas","Alfie","Edward","Ryan","Liam","Noah","Ethan","Kyle","Jordan","Callum","Aaron","Declan","Connor"],last:["Smith","Jones","Williams","Brown","Taylor","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Walker","Wright","Robinson","White","Thompson","Hughes","Edwards","Green","Hall"]},MA:{first:["Yassine","Karim","Mehdi","Amine","Hamza","Bilal","Soufiane","Rachid","Omar","Mohammed","Zakaria","Ilyas","Ayoub","Saad","Khalid","Adil","Tarik","Hicham","Reda","Nabil"],last:["Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Fassi","Lahlou","Naciri","Tahiri","Zniber"]},DZ:{first:["Yacine","Riyad","Sofiane","Haris","Adem","Islam","Bilal","Omar","Nassim","Mehdi","Ryad","Zinedine","Youssef","Farid","Karim","Mourad","Walid","Anes","Ferhat","Djamel"],last:["Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Lakhal","Mahjoub","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Khaldi","Larbi"]},SN:{first:["Sadio","Ismaïla","Cheikhou","Gana","Famara","Mbaye","Pape","Aliou","Moussa","Sidy","Idrissa","Lamine","Bamba","Fallou","Abdou","Diallo","Mamadou","Souleymane","Oumar","Cheikh"],last:["Diallo","Traoré","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Ndiaye","Sow","Cissé","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Baldé","Kouyaté"]},CI:{first:["Didier","Wilfried","Serge","Jonathan","Franck","Maxwel","Salomon","Gervinho","Nicolas","Maxime","Ismael","Romaric","Abdul","Cheick","Arouna","Kolo","Yaya","Geoffroy","Siaka","Adama"],last:["Drogba","Zaha","Gnagnon","Koné","Touré","Bamba","Diomandé","Konaté","Coulibaly","Fofana","Traoré","Doumbia","Sanogo","Diabaté","Kalou","Bakayoko","Gradel","Seri","Aurier","Haller"]},CM:{first:["Samuel","Alex","Karl","Fabrice","Cédric","Nicolas","Georges","André","Joël","Roger","François","Jean","Patrick","Thierry","Eric","Benjamin","Aristide","Clinton","Clinton","Stéphane"],last:["Eto'o","Song","Choupo-Moting","Aboubakar","Bassogog","Kunde","Toko","Nkoudou","Ngadeu","Oyongo","Fai","Zambo","Mokoena","Ekambi","Tchamba","Mbida","Biya","Kameni","Meyong","Webo"]},NG:{first:["Kelechi","Ahmed","Victor","John","Emmanuel","Samuel","Moses","Ola","Chukwuemeka","Odion","Sunday","Chidi","Nnamdi","Chisom","Tunde","Emeka","Obinna","Uchenna","Ifeanyi","Segun"],last:["Osimhen","Iheanacho","Musa","Onyekuru","Iwobi","Ndidi","Nwankwo","Obi","Mikel","Martins","Okocha","Yekini","Amunike","Babangida","Fash","Lawal","Onuoha","Taiwo","Ayodele","Ameobi"]},JP:{first:["Ryota","Kenji","Hiroshi","Takumi","Yuto","Daichi","Shinji","Makoto","Koji","Naoki","Yuya","Shoya","Ryo","Shu","Atsuto","Masato","Hotaru","Genki","Ko","Ritsu"],last:["Nakamura","Tanaka","Suzuki","Sato","Yamamoto","Watanabe","Ito","Yamada","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Kato","Honda"]},KR:{first:["Heung","Son","Ji","Sung","Jae","Young","Kang","Hyun","Woo","Tae","Seung","Min","Jun","Dong","Chang","Sang","Yo","Hee","Jin","Bum"],last:["Kim","Park","Lee","Choi","Jung","Kang","Cho","Yoon","Lim","Oh","Han","Seo","Kwon","Hwang","Ahn","Yang","Shin","Yoo","Jang","Song"]},MX:{first:["Carlos","Hirving","Andrés","Javier","Miguel","Raúl","Héctor","Diego","Jorge","Luis","Rodolfo","Erick","Jonathan","Néstor","Tecatito","Chicharito","Oswaldo","Oribe","Uriel","Giovanni"],last:["Hernández","Lozano","Guardado","Vela","Morales","Jiménez","Reyes","Corona","Herrera","Rodríguez","Ochoa","Chicharito","Flores","Domínguez","Araujo","Álvarez","Pineda","Sánchez","Antuna","Meza"]},_DEFAULT_EUROPE:{first:["Stefan","Ivan","Luca","Marco","Andrei","Cristian","Bogdan","Mircea","Adrian","Florin","Dušan","Aleksandar","Nikola","Nemanja","Marko","Filip","Milan","Branislav","Radomir","Dejan"],last:["Popescu","Ionescu","Stan","Marin","Stoica","Popa","Radu","Constantin","Barbu","Dobre","Petrović","Marković","Nikolić","Jovanović","Popović","Stanković","Đorđević","Lukić","Simić","Ilić"]},_DEFAULT_AFRIQUE:{first:["Mamadou","Ibrahima","Moussa","Seydou","Boubacar","Oumar","Modibo","Adama","Bakary","Abdoulaye","Lamine","Ousmane","Sekou","Demba","Tidiane","Amadou","Issiaka","Siaka","Fode","Samba"],last:["Diallo","Traoré","Coulibaly","Koné","Doumbia","Kouyaté","Bah","Konaté","Touré","Camara","Sylla","Keita","Diakité","Sangaré","Sanou","Sidibé","Bathily","Niakaté","Dioumassi","Sissoko"]},_DEFAULT_ASIE:{first:["Wei","Ming","Jae","Van","Duc","Sorn","Ali","Hassan","Reza","Arman","Yusuf","Tariq","Faris","Khalid","Saad","Rashid","Nasser","Walid","Ziad","Adel"],last:["Zhang","Wang","Liu","Chen","Yang","Huang","Zhou","Wu","Xu","Sun","Al-Rashidi","Al-Dosari","Al-Harthi","Al-Balushi","Al-Farsi","Al-Shamsi","Al-Neyadi","Al-Breiki","Al-Hammadi","Al-Mansouri"]},_DEFAULT_AMERIQUE:{first:["James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Marcus","Jordan","Andre","Devonte","Malik","Tyrone","Jamal","Darius","DeShawn","Brandon","Cody"],last:["Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King"]}},wn={FR:"FR",BE:"FR",CH:"FR",MC:"FR",LU:"FR",ES:"ES",MX:"MX",CO:"ES",VE:"ES",PE:"ES",CL:"ES",EC:"ES",UY:"ES",PY:"ES",BO:"ES",CR:"ES",PA:"ES",HN:"ES",GT:"ES",SV:"ES",NI:"ES",DO:"ES",CU:"ES",PT:"PT",AO:"PT",MZ:"PT",CV:"PT",BR:"BR",AR:"AR",IT:"IT",SM:"IT",DE:"DE",AT:"DE",GB:"GB",IE:"GB",AU:"GB",NZ:"GB",CA:"GB",MA:"MA",TN:"DZ",LY:"DZ",DZ:"DZ",SN:"SN",ML:"SN",GN:"SN",GW:"SN",GM:"SN",MR:"SN",CI:"CI",BF:"CI",TG:"CI",BJ:"CI",GH:"CI",CM:"CM",GA:"CM",CG:"CM",CD:"CM",NG:"NG",JP:"JP",KR:"KR",MX:"MX",PL:"_DEFAULT_EUROPE",CZ:"_DEFAULT_EUROPE",SK:"_DEFAULT_EUROPE",HU:"_DEFAULT_EUROPE",HR:"_DEFAULT_EUROPE",RS:"_DEFAULT_EUROPE",SI:"_DEFAULT_EUROPE",RO:"_DEFAULT_EUROPE",BG:"_DEFAULT_EUROPE",GR:"_DEFAULT_EUROPE",TR:"_DEFAULT_EUROPE",RU:"_DEFAULT_EUROPE",UA:"_DEFAULT_EUROPE",NL:"_DEFAULT_EUROPE",DK:"_DEFAULT_EUROPE",SE:"_DEFAULT_EUROPE",NO:"_DEFAULT_EUROPE",FI:"_DEFAULT_EUROPE",AL:"_DEFAULT_EUROPE",EG:"_DEFAULT_AFRIQUE",ZA:"_DEFAULT_AFRIQUE",KE:"_DEFAULT_AFRIQUE",ET:"_DEFAULT_AFRIQUE",TZ:"_DEFAULT_AFRIQUE",UG:"_DEFAULT_AFRIQUE",CN:"_DEFAULT_ASIE",VN:"_DEFAULT_ASIE",TH:"_DEFAULT_ASIE",ID:"_DEFAULT_ASIE",PH:"_DEFAULT_ASIE",IN:"_DEFAULT_ASIE",PK:"_DEFAULT_ASIE",BD:"_DEFAULT_ASIE",IR:"_DEFAULT_ASIE",SA:"_DEFAULT_ASIE",AE:"_DEFAULT_ASIE",QA:"_DEFAULT_ASIE",KW:"_DEFAULT_ASIE",IQ:"_DEFAULT_ASIE",SY:"_DEFAULT_ASIE",JO:"_DEFAULT_ASIE",US:"_DEFAULT_AMERIQUE"};function It(e){return wn[e]||"_DEFAULT_EUROPE"}function Lt(e){const n=It(e),t=(Le[n]||Le._DEFAULT_EUROPE).first;return oe(t)}function St(e){const n=It(e);return(Le[n]||Le._DEFAULT_EUROPE).last}function $n(e,n,t=new Set,i=!1){const r=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],a=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],v=new Set(a.sort(()=>Math.random()-.5).slice(0,4)),$=[...a].sort(()=>Math.random()-.5),w=new Set($.slice(0,2)),l=new Set($.slice(2,4)),m=10,g=r.map((s,d)=>d<m);for(let s=g.length-1;s>0;s--){const d=Math.floor(Math.random()*(s+1));[g[s],g[d]]=[g[d],g[s]]}const h=new Set;function E(s){const d=St(s),x=d.filter(o=>!h.has(o)&&!t.has(o)),b=x.length?x:d.filter(o=>!h.has(o)),I=b.length?b:d,B=oe(I);return h.add(B),B}return r.map((s,d)=>{const x=g[d]?n:wt(n),b=Ue(x),I=_t(x),B=oe(Et),o=w.has(d)?"pepite":l.has(d)?"papyte":"normal",y=o==="pepite"?se(10,15):o==="papyte"?se(15,20):_n(i,d),c=v.has(d),u=c?Math.max(0,y-2):0;let _=0,p=0,f=0,L=0,A=null;s==="GK"?_=y:s==="DEF"?(p=y,c&&(f=u,A="MIL")):s==="ATT"?(L=y,c&&(f=u,A="MIL")):(f=y,c&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(p=u,A="DEF"):(L=u,A="ATT")));const S=E(x);return{job:s,job2:A,firstname:Lt(x),surname_real:S,country_code:x,club_id:e,note_g:_,note_d:p,note_m:f,note_a:L,skin:b,hair:I,hair_length:B,rarity:o,sell_price:0,ethnie:je(x),_ethnie:je(x)}})}async function kt(e,n,t,i=!1){_e=null;const{data:r}=await k.from("players").select("surname_real").not("surname_real","is",null),a=new Set((r||[]).map(s=>s.surname_real).filter(Boolean)),v=$n(e,n,a,i),{data:$}=await k.from("players").select("face").not("face","is",null),w=new Set(($||[]).map(s=>s.face).filter(Boolean)),l=new Set;for(const s of v){const d=await Ae(s.country_code,new Set([...w,...l]));d&&(s.face=d,l.add(d)),delete s._ethnie}const{data:m,error:g}=await k.from("players").insert(v).select("id");if(g){console.error("[GenSquad] Erreur batch insert:",g.message,g.details),t("Erreur: "+g.message,"error");return}const h=(m||[]).map(s=>({card_type:"player",player_id:s.id}));if(h.length){const{error:s}=await k.from("cards").insert(h);s&&console.warn("[GenSquad] Erreur cartes:",s.message)}const E=(m==null?void 0:m.length)||0;console.log("[GenSquad] Créés:",E,"/",v.length),E>0?t(`${E} joueurs générés ✅`,"success"):t("Erreur génération joueurs","error")}function At(e){return{style:e.kit_style||J.style,color1:e.kit_color1||J.color1,color2:e.kit_color2||J.color2,color3:e.kit_color3||J.color3,shorts:e.kit_shorts||J.shorts,socks:e.kit_socks||J.socks}}let we=[];async function In(e,n){await Be(e,n)}async function Be(e,n){const[{data:t,error:i},{data:r}]=await Promise.all([k.from("clubs").select("*").order("real_name"),k.rpc("admin_get_player_counts_by_club")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}we=t||[];const a={};(r||[]).forEach(v=>{a[v.club_id]=Number(v.nb_players)||0}),Ln(e,n,a)}function Ln(e,n,t={}){const{toast:i,openModal:r,closeModal:a}=n;e.innerHTML=`
    <div style="display:flex;gap:16px;height:calc(100vh - 56px);overflow:hidden;padding:16px">

      <!-- Colonne gauche : liste des clubs -->
      <div style="width:300px;flex-shrink:0;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;gap:8px;align-items:center">
          <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
          <button class="btn btn-primary btn-sm" id="add-club-btn" style="white-space:nowrap">+ Club</button>
        </div>
        <div id="clubs-list" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px"></div>
      </div>

      <!-- Colonne droite : fiche club -->
      <div id="club-panel" class="card-panel" style="flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center">
        <div style="color:var(--tile-fg-dim);text-align:center;padding:40px">← Sélectionnez un club ou créez-en un nouveau</div>
      </div>
    </div>`,v(we),document.getElementById("search-clubs").addEventListener("input",$=>{const w=$.target.value.toLowerCase();v(we.filter(l=>l.real_name.toLowerCase().includes(w)||l.encoded_name.toLowerCase().includes(w)))}),document.getElementById("add-club-btn").addEventListener("click",()=>tt(null,e,n));function v($){const w=document.getElementById("clubs-list");if(!$.length){w.innerHTML='<p style="color:var(--tile-fg-dim);padding:20px;text-align:center">Aucun club.</p>';return}const l={};$.forEach(h=>{const E=h.country_code||"—";l[E]||(l[E]=[]),l[E].push(h)});const m=Object.keys(l).sort(),g=h=>{const E=At(h),s=h.logo_url?`<img src="${h.logo_url}" style="width:36px;height:36px;object-fit:contain;border-radius:8px;flex-shrink:0">`:`<div style="width:36px;height:36px;background:linear-gradient(135deg,${E.color1},${E.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:900;flex-shrink:0">${h.encoded_name.slice(0,3)}</div>`,d=t[h.id]||0;return`
        <div class="club-row" data-club-id="${h.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;background:var(--tile-bg);border:1px solid var(--tile-border);transition:background .15s">
          ${s}
          <img src="https://flagsapi.com/${h.country_code}/flat/24.png" style="width:18px;height:13px;object-fit:cover;border-radius:2px;flex-shrink:0" onerror="this.style.display='none'">
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:12px;color:var(--tile-fg-on-page);font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.encoded_name}</div>
            <div style="font-size:10px;color:${d===0?"#e67e22":"var(--tile-fg-dim)"}">${d===0?"⚠️ 0 joueur":`👥 ${d}`}</div>
          </div>
          <button class="btn-del-club" data-del="${h.id}"
            style="width:22px;height:22px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;flex-shrink:0"
            onclick="event.stopPropagation()">✕</button>
        </div>`};w.innerHTML=m.map(h=>`
      <div style="display:flex;align-items:center;gap:8px;padding:8px 4px 4px;margin-top:6px">
        ${h!=="—"?`<img src="https://flagsapi.com/${h}/flat/24.png" style="width:20px;height:15px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">`:'<span style="font-size:14px">🌍</span>'}
        <span style="font-size:11px;font-weight:900;color:var(--tile-fg-dim);letter-spacing:1px">${h}</span>
        <span style="font-size:11px;color:var(--tile-fg-dim);background:var(--tile-bg);border:1px solid var(--tile-border);border-radius:10px;padding:1px 8px">${l[h].length}</span>
        <div style="flex:1;height:1px;background:var(--tile-border)"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">
        ${l[h].map(g).join("")}
      </div>
    `).join(""),w.querySelectorAll(".club-row").forEach(h=>{h.addEventListener("click",()=>{const E=we.find(s=>s.id===h.dataset.clubId);E&&tt(E,e,n),w.querySelectorAll(".club-row").forEach(s=>s.style.background="var(--tile-bg)"),h.style.background="rgba(26,107,60,0.18)"})}),w.querySelectorAll(".btn-del-club").forEach(h=>{h.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:E}=await k.from("clubs").delete().eq("id",h.dataset.del);E?i(E.message,"error"):(i("Club supprimé","success"),Be(e,n))})})}}function Sn(e){var M,D,P,O;const{openModal:n,closeModal:t}=e;let i=6;const r=36;function a(C){return new Array(C*C).fill("#ffffff")}let v=a(i),$="OP",w="#D4A017",l=50,m=0,g=0,h="",E="#ffffff",s=25,d=0,x=35,b=new Set,I=null;function B(){const C=r*i;let z="";for(let j=0;j<i;j++)for(let N=0;N<i;N++){const q=j*i+N;z+=`<rect x="${N*r}" y="${j*r}" width="${r}" height="${r}" fill="${v[q]}"/>`}const R=(j,N,q,U,H)=>{if(!j)return"";const Y=C/2+U/100*C,W=C/2+H/100*C,Z=q/100*C*(j.length>3?3/j.length:1);return`<text x="${Y}" y="${W}" text-anchor="middle" dominant-baseline="central"
        font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${Z}"
        fill="${N}">${j}</text>`};return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${C} ${C}">
      ${z}
      ${R($,w,l,m,g)}
      ${R(h,E,s,d,x)}
    </svg>`}function o(C){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(C)))}const y=(C,z,R,j,N,q,U)=>`
    <div style="background:#f7f7f7;border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:700;font-size:12px;color:#333">${z}</div>
      <input id="flag-text${C}" maxlength="20" value="${R}" placeholder="${C===2?"Vide = désactivé":""}" style="font-weight:900">
      <div style="display:flex;align-items:center;gap:8px">
        <label style="margin:0;font-size:11px;white-space:nowrap">Couleur</label>
        <input type="color" id="flag-text${C}-color" value="${j}" style="width:40px;height:28px;padding:2px;cursor:pointer">
      </div>
      <div>
        <label style="font-size:10px">Taille (<span id="flag-size${C}-val">${N}</span>%)</label>
        <input type="range" id="flag-text${C}-size" min="5" max="120" value="${N}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position H (<span id="flag-x${C}-val">${q}</span>)</label>
        <input type="range" id="flag-text${C}-x" min="-50" max="50" value="${q}" style="width:100%">
      </div>
      <div>
        <label style="font-size:10px">Position V (<span id="flag-y${C}-val">${U}</span>)</label>
        <input type="range" id="flag-text${C}-y" min="-50" max="50" value="${U}" style="width:100%">
      </div>
    </div>
  `,c=`
    <div id="flag-builder-wide"></div>
    <style>
      .modal:has(#flag-builder-wide) { max-width: 980px !important; }
    </style>
    <div style="display:grid;grid-template-columns:200px 1fr 1fr;gap:16px;margin-bottom:16px">
      <div style="display:flex;flex-direction:column;gap:10px;align-items:center">
        <div id="flag-preview" style="width:180px;height:180px;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.15)"></div>
        <div style="width:100%">
          <label style="font-size:11px">TAILLE DE LA GRILLE</label>
          <div style="display:flex;gap:4px">
            ${[6,9,12].map(C=>`<button type="button" class="btn ${C===i?"btn-primary":"btn-ghost"} btn-sm flag-grid-size" data-n="${C}" style="flex:1;padding:6px 4px">${C}×${C}</button>`).join("")}
          </div>
        </div>
      </div>

      ${y(1,"TEXTE 1 (20 caractères max)",$,w,l,m,g)}
      ${y(2,"TEXTE 2 — optionnel (20 caractères max)",h,E,s,d,x)}
    </div>

    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px">
        <label style="margin:0;font-size:12px">Couleurs des ${i*i} carrés — clique un carré (Ctrl/Shift+clic pour en sélectionner plusieurs), puis Ctrl+C / Ctrl+V pour copier-coller la couleur sur toute la sélection</label>
        <div style="display:flex;gap:6px;align-items:center">
          <button type="button" id="flag-copy-btn" class="btn btn-ghost btn-sm" disabled>📋 Copier</button>
          <button type="button" id="flag-paste-btn" class="btn btn-ghost btn-sm" disabled>📥 Coller</button>
          <span id="flag-clipboard-preview" style="display:none;align-items:center;gap:6px;font-size:12px;color:#666">
            Copié : <span id="flag-clipboard-swatch" style="display:inline-block;width:16px;height:16px;border-radius:4px;border:1px solid #ccc"></span>
          </span>
        </div>
      </div>
      <div id="flag-squares-grid" style="display:grid;gap:2px;justify-content:center"></div>
    </div>
  `;n(`🎨 Générer un logo (${i}×${i})`,c,`
    <button id="flag-cancel" class="btn btn-ghost">Annuler</button>
    <button id="flag-use" class="btn btn-primary">✅ Utiliser ce logo</button>
  `);function _(){const C=document.getElementById("flag-squares-grid");if(!C)return;const z=i>=12?30:i>=9?36:44;C.style.gridTemplateColumns=`repeat(${i}, ${z}px)`,C.innerHTML=v.map((R,j)=>`
      <div class="flag-square" data-i="${j}" style="width:${z}px;height:${z}px;border-radius:4px;background:${R};cursor:pointer;
        box-sizing:border-box;border:${b.has(j)?"3px solid #1A6B3C":"1px solid rgba(0,0,0,0.15)"}"></div>
    `).join(""),C.querySelectorAll(".flag-square").forEach(R=>{R.addEventListener("click",j=>{const N=parseInt(R.dataset.i);j.ctrlKey||j.metaKey||j.shiftKey?b.has(N)?b.delete(N):b.add(N):b=new Set([N]),_(),p()}),R.addEventListener("dblclick",()=>{const j=parseInt(R.dataset.i),N=document.createElement("input");N.type="color",N.value=v[j],N.style.position="fixed",N.style.opacity="0",document.body.appendChild(N),N.addEventListener("input",()=>{v[j]=N.value,_(),S()}),N.addEventListener("change",()=>N.remove()),N.click()})})}function p(){const C=document.getElementById("flag-copy-btn"),z=document.getElementById("flag-paste-btn");C.disabled=b.size===0,z.disabled=b.size===0||I===null}function f(){if(b.size===0)return;const C=[...b][0];I=v[C];const z=document.getElementById("flag-clipboard-preview"),R=document.getElementById("flag-clipboard-swatch");z&&(z.style.display="inline-flex"),R&&(R.style.background=I),p()}function L(){b.size===0||I===null||(b.forEach(C=>{v[C]=I}),_(),S())}(M=document.getElementById("flag-copy-btn"))==null||M.addEventListener("click",f),(D=document.getElementById("flag-paste-btn"))==null||D.addEventListener("click",L);function A(C){if(!document.getElementById("flag-squares-grid")){document.removeEventListener("keydown",A);return}!(C.ctrlKey||C.metaKey)||b.size===0||(C.key==="c"||C.key==="C"?(C.preventDefault(),f()):(C.key==="v"||C.key==="V")&&(C.preventDefault(),L()))}document.addEventListener("keydown",A),document.querySelectorAll(".flag-grid-size").forEach(C=>{C.addEventListener("click",()=>{const z=parseInt(C.dataset.n);if(z===i)return;i=z,v=a(i),b=new Set,I=null;const R=document.getElementById("flag-clipboard-preview");R&&(R.style.display="none"),_(),p(),S(),document.querySelectorAll(".flag-grid-size").forEach(j=>{j.classList.toggle("btn-primary",parseInt(j.dataset.n)===i),j.classList.toggle("btn-ghost",parseInt(j.dataset.n)!==i)})})});function S(){const C=document.getElementById("flag-preview");C&&(C.innerHTML=B())}_(),p(),S();function T(C){document.getElementById(`flag-text${C}`).addEventListener("input",z=>{const R=z.target.value.slice(0,20);C===1?$=R:h=R,S()}),document.getElementById(`flag-text${C}-color`).addEventListener("input",z=>{C===1?w=z.target.value:E=z.target.value,S()}),document.getElementById(`flag-text${C}-size`).addEventListener("input",z=>{const R=parseInt(z.target.value);C===1?l=R:s=R,document.getElementById(`flag-size${C}-val`).textContent=R,S()}),document.getElementById(`flag-text${C}-x`).addEventListener("input",z=>{const R=parseInt(z.target.value);C===1?m=R:d=R,document.getElementById(`flag-x${C}-val`).textContent=R,S()}),document.getElementById(`flag-text${C}-y`).addEventListener("input",z=>{const R=parseInt(z.target.value);C===1?g=R:x=R,document.getElementById(`flag-y${C}-val`).textContent=R,S()})}T(1),T(2),(P=document.getElementById("flag-cancel"))==null||P.addEventListener("click",()=>t()),(O=document.getElementById("flag-use"))==null||O.addEventListener("click",()=>{const C=o(B()),z=document.getElementById("m-logo-url-current");z&&(z.value=C);const R=document.getElementById("logo-preview");R&&(R.innerHTML=`<img src="${C}" style="width:100%;height:100%;object-fit:contain">`),t()})}async function tt(e,n,t){var x,b,I,B,o,y,c;const{toast:i}=t,r=!!e,a=e?At(e):{...J},v=document.getElementById("club-panel");if(!v)return;const $=Object.entries(Ye).map(([u,_])=>`<option value="${u}" ${a.style===u?"selected":""}>${_.label}</option>`).join(""),w=Ge.map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("");v.style.display="block",v.style.alignItems="",v.style.justifyContent="",v.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h3 style="font-size:17px;font-weight:900;color:var(--tile-fg-on-page)">${r?`✏️ ${e.real_name}`:"➕ Nouveau club"}</h3>
      ${r?'<button id="btn-gen-squad-panel" class="btn btn-primary btn-sm">⚽ Générer joueurs</button>':""}
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;max-width:640px">
      <div class="form-group">
        <label>Nom du club *</label>
        <input id="m-real" value="${(e==null?void 0:e.real_name)||""}" placeholder="Paris Saint-Germain">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="form-group">
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${(e==null?void 0:e.encoded_name)||""}" placeholder="PSG" style="flex:1;text-transform:uppercase;font-family:monospace">
            <button class="btn btn-ghost btn-sm" id="auto-encode-btn" title="Auto-générer">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Pays *</label>
          <select id="m-country" style="width:100%">
            <option value="">-- Choisir --</option>
            ${w}
          </select>
        </div>
      </div>

      <!-- Logo : upload de fichier, plus une URL -->
      <div class="form-group">
        <label>Logo du club</label>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="logo-preview" style="width:56px;height:56px;border-radius:10px;background:var(--tile-bg);border:1.5px solid var(--tile-border);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">
            ${e!=null&&e.logo_url?`<img src="${e.logo_url}" style="width:100%;height:100%;object-fit:contain">`:'<span style="font-size:22px;opacity:.4">🏟️</span>'}
          </div>
          <div style="flex:1">
            <input type="file" id="m-logo-file" accept="image/png,image/jpeg,image/webp,image/svg+xml">
            <div style="font-size:11px;color:var(--tile-fg-dim);margin-top:4px">PNG/JPG/WEBP/SVG — remplace le logo actuel si un fichier est choisi</div>
            <button type="button" id="m-open-flag-builder" class="btn btn-ghost btn-sm" style="margin-top:8px">🎨 Générer un logo (6×6)</button>
          </div>
        </div>
        <input type="hidden" id="m-logo-url-current" value="${(e==null?void 0:e.logo_url)||""}">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--tile-border);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px;color:var(--tile-fg-on-page)">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${$}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([u,_,p,f])=>`
              <div class="form-group" id="wrap-${_}" ${f?'style="display:none"':""}>
                <label>${u}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${_}" value="${p||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--tile-border);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${_}-txt" value="${p||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--tile-border);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--tile-fg-dim)">Aperçu</div>
          </div>
        </div>
      </div>

      ${r?"":`
      <div style="border-top:1px solid var(--tile-border);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px;color:var(--tile-fg-on-page)">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.1);border-radius:8px;border:1px solid rgba(26,107,60,0.3);color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.1);border-radius:8px;border:1px solid rgba(212,160,23,0.4);margin-left:12px;color:var(--tile-fg-on-page)">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:var(--tile-fg-dim);font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
      </div>`}

      <div id="m-error" style="color:#ff6b6b;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${r?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>

    ${r?`
    <div style="border-top:1px solid var(--tile-border);margin-top:24px;padding-top:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h4 style="font-size:14px;font-weight:900;color:var(--tile-fg-on-page)">🃏 Joueurs du club (<span id="club-players-count">…</span>)</h4>
        <button id="btn-gen-one-player" class="btn btn-primary btn-sm">➕ Générer 1 joueur</button>
      </div>
      <div id="club-players-grid" style="display:flex;flex-wrap:wrap;gap:10px"></div>
    </div>`:""}
  `,(x=document.getElementById("m-logo-file"))==null||x.addEventListener("change",u=>{var f;const _=(f=u.target.files)==null?void 0:f[0];if(!_)return;const p=new FileReader;p.onload=()=>{document.getElementById("logo-preview").innerHTML=`<img src="${p.result}" style="width:100%;height:100%;object-fit:contain">`},p.readAsDataURL(_)}),(b=document.getElementById("m-open-flag-builder"))==null||b.addEventListener("click",()=>{Sn(t)}),fe();function l(){var f,L;const u=((f=document.getElementById("m-kit-style"))==null?void 0:f.value)||"uni",_=((L=Ye[u])==null?void 0:L.colors)===3,p=document.getElementById("wrap-m-kit-color3");p&&(p.style.display=_?"":"none")}l(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(u=>{const _=document.getElementById(u),p=document.getElementById(u+"-txt");!_||!p||(_.addEventListener("input",()=>{p.value=_.value,fe()}),p.addEventListener("input",()=>{const f=p.value.trim();/^#[0-9a-fA-F]{6}$/.test(f)&&(_.value=f,fe())}),p.addEventListener("change",()=>{let f=p.value.trim();f.startsWith("#")||(f="#"+f),/^#[0-9a-fA-F]{6}$/.test(f)&&(_.value=f,p.value=f,fe())}))}),(I=document.getElementById("m-kit-style"))==null||I.addEventListener("change",()=>{l(),fe()});const m=document.getElementById("m-real"),g=document.getElementById("m-encoded");function h(){if(!m||!g||g.value)return;const u=m.value.trim().split(/\s+/),_=u.length===1?u[0].toUpperCase().slice(0,6):u.filter(p=>p.length>2).map(p=>p[0].toUpperCase()).join("")||u[0].toUpperCase().slice(0,4);g.value=_}m==null||m.addEventListener("input",h),(B=document.getElementById("auto-encode-btn"))==null||B.addEventListener("click",()=>{g&&(g.value=""),h()}),(o=document.getElementById("m-save"))==null||o.addEventListener("click",()=>Mn(e,r,n,t));const E=document.getElementById("m-gen-squad"),s=document.getElementById("m-gen-strong-label");function d(){if(s&&(s.style.display=E!=null&&E.checked?"flex":"none",!(E!=null&&E.checked))){const u=document.getElementById("m-gen-strong");u&&(u.checked=!1)}}E==null||E.addEventListener("change",d),d(),(y=document.getElementById("btn-gen-squad-panel"))==null||y.addEventListener("click",()=>{kn(e,t,n)}),(c=document.getElementById("btn-gen-one-player"))==null||c.addEventListener("click",()=>{Bn(e,t)}),r&&He(e.id)}async function He(e){const{data:n}=await k.from("players").select("*, clubs(encoded_name, logo_url, kit_style, kit_color1, kit_color2, kit_color3, kit_shorts, kit_socks)").eq("club_id",e).order("surname_real"),t=document.getElementById("club-players-grid"),i=document.getElementById("club-players-count");if(i&&(i.textContent=(n||[]).length),!!t){if(!(n!=null&&n.length)){t.innerHTML='<div style="color:var(--tile-fg-dim);padding:20px;font-size:13px">Aucun joueur dans ce club.</div>';return}t.innerHTML=n.map(r=>le(r,{width:100,context:"admin"})).join("")}}function kn(e,n,t){const{openModal:i,closeModal:r,toast:a}=n;i(`⚽ Générer — ${e.real_name}`,`<div style="display:flex;flex-direction:column;gap:14px">
      <div style="font-size:12px;color:#888;background:#f8f8f8;border-radius:8px;padding:10px;line-height:1.6">
        Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20<br>
        2 pépites + 2 papytes · 50% nationalité du club
      </div>
      <label style="display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;padding:12px;background:rgba(212,160,23,0.08);border-radius:10px;border:1.5px solid rgba(212,160,23,0.35)">
        <input type="checkbox" id="qg-strong" style="width:18px;height:18px;accent-color:#D4A017;flex-shrink:0">
        <div>
          <div style="font-weight:700">💪 Équipe Forte</div>
          <div style="font-size:11px;color:#888;margin-top:2px">10 joueurs avec une note entre 15 et 20 garantis</div>
        </div>
      </label>
    </div>`,`<div style="display:flex;gap:10px;width:100%">
      <button id="qg-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
      <button id="qg-ok" class="btn btn-primary" style="flex:1">⚽ Générer</button>
    </div>`),setTimeout(()=>{var v,$;(v=document.getElementById("qg-cancel"))==null||v.addEventListener("click",()=>r()),($=document.getElementById("qg-ok"))==null||$.addEventListener("click",async()=>{var l;const w=((l=document.getElementById("qg-strong"))==null?void 0:l.checked)??!1;r(),a("Génération en cours…","info"),await kt(e.id,e.country_code,a,w),a("Effectif généré ✅","success"),He(e.id),Be(t,n)})},50)}const Bt=["GK","DEF","MIL","ATT"],An=[{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}];function Bn(e,n){const{openModal:t,closeModal:i,toast:r}=n,a=Ge.map(l=>`<option value="${l}">${l}</option>`).join(""),v=l=>Bt.map(m=>`<option value="${m}" ${m===l?"selected":""}>${m}</option>`).join(""),$=`
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;gap:10px">
        <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px;border-radius:10px;border:1.5px solid var(--gray-200);cursor:pointer">
          <input type="radio" name="gen-one-mode" value="random" checked style="width:16px;height:16px">
          <span style="font-weight:700">🎲 Aléatoire</span>
        </label>
        <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px;border-radius:10px;border:1.5px solid var(--gray-200);cursor:pointer">
          <input type="radio" name="gen-one-mode" value="custom" style="width:16px;height:16px">
          <span style="font-weight:700">🎛️ Personnalisé</span>
        </label>
      </div>

      <div id="gen-one-custom-fields" style="display:none;flex-direction:column;gap:12px;background:#f7f7f7;border-radius:10px;padding:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>POSTE 1</label>
            <select id="gen-one-job1">${v("MIL")}</select>
          </div>
          <div>
            <label>POSTE 2 (optionnel)</label>
            <select id="gen-one-job2">
              <option value="">— Aucun —</option>
              ${v(null)}
            </select>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>RARETÉ</label>
            <select id="gen-one-rarity">
              ${An.map(l=>`<option value="${l.value}">${l.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label>PAYS</label>
            <select id="gen-one-country">
              <option value="">— Aléatoire —</option>
              ${a}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;t(`➕ Générer un joueur — ${e.real_name}`,$,`
    <button id="gen-one-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gen-one-ok" class="btn btn-primary">➕ Générer</button>
  `),setTimeout(()=>{var l,m;document.querySelectorAll('input[name="gen-one-mode"]').forEach(g=>{g.addEventListener("change",()=>{document.getElementById("gen-one-custom-fields").style.display=g.value==="custom"&&g.checked?"flex":"none"})}),(l=document.getElementById("gen-one-cancel"))==null||l.addEventListener("click",()=>i()),(m=document.getElementById("gen-one-ok"))==null||m.addEventListener("click",async()=>{var s,d,x,b,I;const g=((s=document.querySelector('input[name="gen-one-mode"]:checked'))==null?void 0:s.value)||"random",h=document.getElementById("gen-one-ok");h.disabled=!0,h.textContent="⏳ Génération…";const E={};g==="custom"&&(E.job=((d=document.getElementById("gen-one-job1"))==null?void 0:d.value)||null,E.job2=((x=document.getElementById("gen-one-job2"))==null?void 0:x.value)||null,E.rarity=((b=document.getElementById("gen-one-rarity"))==null?void 0:b.value)||null,E.country=((I=document.getElementById("gen-one-country"))==null?void 0:I.value)||null);try{await Cn(e,E),r("Joueur généré ✅","success"),i(),He(e.id)}catch(B){r("Erreur : "+B.message,"error"),h.disabled=!1,h.textContent="➕ Générer"}})},50)}async function Cn(e,n={}){const t=n.country||(Math.random()<.5?e.country_code:wt(e.country_code)),i=n.job||oe(Bt),r=n.job2||null,a=n.rarity||(()=>{const L=Math.random()*100;return L<1.5?"legende":L<3?"pepite":L<4.5?"papyte":"normal"})(),v=a==="pepite"?se(10,15):a==="papyte"?se(15,20):$t(),$=r?Math.max(0,v-2):0;let w=0,l=0,m=0,g=0;i==="GK"&&(w=v),i==="DEF"&&(l=v),i==="MIL"&&(m=v),i==="ATT"&&(g=v),r==="GK"&&(w=$),r==="DEF"&&(l=$),r==="MIL"&&(m=$),r==="ATT"&&(g=$);const h=Ue(t),E=_t(t),s=oe(Et),{data:d}=await k.from("players").select("surname_real").not("surname_real","is",null),x=new Set((d||[]).map(L=>L.surname_real).filter(Boolean)),b=St(t),I=b.filter(L=>!x.has(L)),B=oe(I.length?I:b),o={job:i,job2:r,firstname:Lt(t),surname_real:B,country_code:t,club_id:e.id,note_g:w,note_d:l,note_m:m,note_a:g,skin:h,hair:E,hair_length:s,rarity:a,sell_price:0,ethnie:je(t)},{data:y}=await k.from("players").select("face").not("face","is",null),c=new Set((y||[]).map(L=>L.face).filter(Boolean)),u=await Ae(t,c);u&&(o.face=u);const{data:_,error:p}=await k.from("players").insert(o).select("id").single();if(p)throw p;const{error:f}=await k.from("cards").insert({card_type:"player",player_id:_.id});f&&console.warn("[GenOnePlayer] Erreur carte:",f.message)}function Ct(){var e,n,t,i,r,a;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((r=document.getElementById("m-kit-shorts"))==null?void 0:r.value)||"#111111",socks:((a=document.getElementById("m-kit-socks"))==null?void 0:a.value)||"#ffffff"}}function fe(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ht(Ct(),"panel"))}async function Tn(e,n){const t=(e.name.split(".").pop()||"png").toLowerCase(),i=`clubs/${n||"new"}-${Date.now()}.${t}`,{error:r}=await k.storage.from("assets").upload(i,e,{upsert:!0,cacheControl:"3600"});if(r)throw r;const{data:a}=k.storage.from("assets").getPublicUrl(i);return a.publicUrl}async function Mn(e,n,t,i){var B,o,y,c,u,_,p,f,L;const{toast:r}=i,a=document.getElementById("m-error"),v=document.getElementById("m-save"),$=(B=document.getElementById("m-real"))==null?void 0:B.value.trim(),w=(o=document.getElementById("m-encoded"))==null?void 0:o.value.trim().toUpperCase(),l=(y=document.getElementById("m-country"))==null?void 0:y.value.trim().toUpperCase(),m=((u=(c=document.getElementById("m-logo-file"))==null?void 0:c.files)==null?void 0:u[0])||null,g=((_=document.getElementById("m-logo-url-current"))==null?void 0:_.value)||null,h=((p=document.getElementById("m-gen-stadium"))==null?void 0:p.checked)??!1,E=((f=document.getElementById("m-gen-squad"))==null?void 0:f.checked)??!1,s=((L=document.getElementById("m-gen-strong"))==null?void 0:L.checked)??!1,d=Ct();if(!$){a.textContent="Le nom du club est requis.";return}if(!w){a.textContent="Le nom encodé est requis.";return}if(!l){a.textContent="Le pays est requis.";return}v.disabled=!0,v.textContent="Enregistrement…";let x=g;if(m)try{v.textContent="📤 Envoi du logo…",x=await Tn(m,e==null?void 0:e.id)}catch(A){a.textContent="Erreur upload logo : "+A.message,v.disabled=!1,v.textContent=n?"💾 Enregistrer":"✅ Créer le club";return}const b={real_name:$,encoded_name:w,country_code:l,logo_url:x,kit_style:d.style,kit_color1:d.color1,kit_color2:d.color2,kit_color3:d.color3,kit_shorts:d.shorts,kit_socks:d.socks};let I=e==null?void 0:e.id;if(n){const{error:A}=await k.from("clubs").update(b).eq("id",I);if(A){a.textContent=A.message,v.disabled=!1,v.textContent="💾 Enregistrer";return}}else{const{data:A,error:S}=await k.from("clubs").insert(b).select().single();if(S){a.textContent=S.message,v.disabled=!1,v.textContent="✅ Créer le club";return}if(I=A.id,h){v.textContent="🏟️ Création du stade…";const{data:T,error:M}=await k.from("stadium_definitions").insert({name:`Stade de ${$}`,club_id:I,country_code:null}).select().single();M?console.warn("[Stadium] Erreur def stade:",M.message):T&&await k.from("cards").insert({card_type:"stadium",stadium_id:T.id})}E&&(v.textContent="⚽ Génération des joueurs…",await kt(I,l,r,s))}r(n?"Club modifié ✅":"Club créé ✅","success"),Be(t,i)}const zn=["normal","pepite","papyte","legende"],nt=["GK","DEF","MIL","ATT"],Rn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let re={...X},$e=[];async function jn(e,{toast:n}){const{data:t}=await k.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");$e=t||[],re={...X},e.innerHTML=Fn($e),Nn(e,$e,n),te()}function Dn(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=$e.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||J.style,color1:n.kit_color1||J.color1,color2:n.kit_color2||J.color2,shorts:n.kit_shorts||J.shorts,socks:n.kit_socks||J.socks}:{...J}}function te(){var m,g,h,E;const e=s=>{var d;return((d=document.getElementById(s))==null?void 0:d.value)||""},n={firstname:e("cb-firstname"),surname_real:e("cb-surname-real"),country_code:e("cb-country"),clubName:((g=(m=document.getElementById("cb-club"))==null?void 0:m.selectedOptions[0])==null?void 0:g.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=Dn(),i=document.getElementById("cb-club"),r=((E=(h=i==null?void 0:i.selectedOptions[0])==null?void 0:h.dataset)==null?void 0:E.logo)||null;n.clubLogo=r;const a=Jt(re,t,120),v=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,$=le(n,{width:260,showStad:!0,portraitOverride:v,context:"admin"}),w=document.getElementById("card-preview");w&&(w.innerHTML=$);const l=document.getElementById("avatar-preview-wrap");l&&(l.innerHTML=a)}function Tt(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};re={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Nn(e,n,t){var r,a,v,$,w;e.querySelectorAll("input,select").forEach(l=>{l.addEventListener("input",te),l.addEventListener("change",te)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(l=>{var m;(m=document.getElementById(l))==null||m.addEventListener("change",()=>{Tt(),te()})}),(r=document.getElementById("cb-surname-real"))==null||r.addEventListener("input",te),(a=document.getElementById("cb-surname-enc"))==null||a.addEventListener("input",te),(v=document.getElementById("cb-club"))==null||v.addEventListener("change",te),($=document.getElementById("btn-save-player"))==null||$.addEventListener("click",()=>Pn(t)),(w=document.getElementById("btn-reset"))==null||w.addEventListener("click",()=>{e.querySelectorAll("input").forEach(l=>l.value=""),e.querySelectorAll("select").forEach(l=>l.selectedIndex=0),re={...X},i.forEach(l=>{const m=l.replace("av-",""),g=document.getElementById(l);g&&(g.value=X[m]||"")}),te()})}async function Pn(e){const n=a=>{var v;return((v=document.getElementById(a))==null?void 0:v.value)||""},t=n("cb-surname-real").trim();if(n("cb-surname-enc").trim(),!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Tt();const i={firstname:n("cb-firstname").trim(),surname_real:t,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:re,skin:re.skin||"blanc",hair:re.hairColor||"marron",hair_length:"court"},{error:r}=await k.from("players").insert(i);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${i.firstname} ${i.surname_real}" enregistré !`,"success")}function Fn(e){const n=Rn.map(([l,m])=>`<option value="${l}">${m} (${l})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(l=>`<option value="${l.id}" data-logo="${l.logo_url||""}">${l.encoded_name}</option>`).join(""),i=nt.map(l=>`<option value="${l}">${l}</option>`).join(""),r='<option value="">Aucun</option>'+nt.map(l=>`<option value="${l}">${l}</option>`).join(""),a=zn.map(l=>`<option value="${l}">${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),v=(l,m,g)=>Object.entries(m).map(([h,E])=>`<option value="${h}" ${h===(g||"")?"selected":""}>${E.label}</option>`).join(""),$=Object.keys(Kt).map(l=>`<option value="${l}" ${l===X.skin?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),w=Object.keys(Vt).map(l=>`<option value="${l}" ${l===X.hairColor?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join("");return`
  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start">

    <!-- ── Formulaire gauche ── -->
    <div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">👤 Identité du joueur</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Prénom *</label><input id="cb-firstname" placeholder="Osame"></div>
          <div>
            <label>Nom *</label>
            <input id="cb-surname-real" placeholder="Sahraoui" style="width:100%">
          </div>
          <div>
            <label>Surname</label>
            <input id="cb-surname-enc" placeholder="Sahraoui">
          </div>
          <div id="encode-summary-wrap" style="display:none">
          </div>
          <div><label>Pays *</label><select id="cb-country">${n}</select></div>
          <div><label>Club</label><select id="cb-club">${t}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${i}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${r}</select></div>
          <div><label>Note GK (0-10)</label><input id="cb-note-g" type="number" min="0" max="10" value="0"></div>
          <div><label>Note DEF (0-10)</label><input id="cb-note-d" type="number" min="0" max="10" value="0"></div>
          <div><label>Note MIL (0-10)</label><input id="cb-note-m" type="number" min="0" max="10" value="0"></div>
          <div><label>Note ATT (0-10)</label><input id="cb-note-a" type="number" min="0" max="10" value="0"></div>
        </div>
      </div>

      <!-- Rareté -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💎 Rareté</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div><label>Rareté</label><select id="cb-rarity">${a}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(l=>`
            <div style="background:${on[l]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${l.toUpperCase()}
            </div>`).join("")}
        </div>
      </div>

      <!-- Avatar -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:4px">🎨 Portrait joueur (SVG)</h3>
        <p style="font-size:12px;color:var(--gray-600);margin-bottom:14px">
          Crée le personnage — il apparaîtra sur la carte avec la tenue du club sélectionné.
        </p>

        <div style="display:grid;grid-template-columns:1fr 120px;gap:16px;align-items:start">

          <!-- Contrôles avatar -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">

            <div>
              <label>Teint de peau</label>
              <select id="av-skin">${$}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${v("av-hair",Yt,X.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${w}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${v("av-eyebrows",Wt,X.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${v("av-eyes",Zt,X.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${v("av-nose",Xt,X.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${v("av-mouth",Qt,X.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${v("av-beard",en,X.beard)}</select>
            </div>
          </div>

          <!-- Preview avatar -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="avatar-preview-wrap" style="background:linear-gradient(135deg,#e8f4e8,#d0e8d0);border-radius:12px;padding:8px;border:2px solid var(--gray-200)">
              <!-- SVG injecté -->
            </div>
            <div style="font-size:10px;color:var(--gray-600);text-align:center">Personnage<br>(tenue du club)</div>
          </div>
        </div>
      </div>

      <!-- Prix -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💰 Prix & Enregistrement</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <div><label>Prix de vente (crédits)</label><input id="cb-price" type="number" min="0" value="30000"></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary" id="btn-save-player">💾 Enregistrer en BDD</button>
          <button class="btn btn-ghost" id="btn-reset">↺ Réinitialiser</button>
        </div>
      </div>
    </div>

    <!-- ── Preview droite (carte) ── -->
    <div style="position:sticky;top:16px">
      <div class="card-panel" style="text-align:center">
        <h3 style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--gray-600)">APERÇU EN TEMPS RÉEL</h3>
        <div id="card-preview" style="display:inline-block"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--gray-600)">
          La carte se met à jour automatiquement.<br>
          La tenue correspond au club sélectionné.
        </div>
      </div>
    </div>
  </div>
  `}const qn=2*60*1e3;function ce(e){return e.last_seen?Date.now()-new Date(e.last_seen).getTime()<qn:!1}async function De(e,{toast:n}){const[{data:t,error:i},{data:r},{data:a}]=await Promise.all([k.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws,last_seen").order("created_at",{ascending:!1}),k.rpc("admin_get_solo_progress"),k.rpc("admin_get_user_emails")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const v={};(r||[]).forEach(s=>{v[s.user_id]=s.unlocked_level});const $={};(a||[]).forEach(s=>{$[s.id]=s.email});const w=t||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;user-select:none">
          <input type="checkbox" id="filter-online" style="width:16px;height:16px;cursor:pointer">
          <span>🟢 En ligne uniquement (<span id="online-count">0</span>)</span>
        </label>
      </div>
      <span style="font-size:13px;color:var(--gray-600)">${w.length} manager(s)</span>
    </div>
    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Manager</th>
              <th>Crédits / Niv.</th>
              <th>Matchs (V/N/D)</th>
              <th>Trophées</th>
              <th>⚔️ Ranked</th>
              <th>MMR (caché)</th>
              <th>Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-tbody"></tbody>
        </table>
      </div>
    </div>
  `;function l(s){const d=document.getElementById("online-count");d&&(d.textContent=s.filter(ce).length)}function m(){const s=document.getElementById("search-users").value.toLowerCase(),d=document.getElementById("filter-online").checked;E(w.filter(x=>{var b;return(x.pseudo.toLowerCase().includes(s)||((b=x.club_name)==null?void 0:b.toLowerCase().includes(s)))&&(!d||ce(x))}))}E(w),l(w),document.getElementById("search-users").addEventListener("input",m),document.getElementById("filter-online").addEventListener("change",m);const g=setInterval(async()=>{const{data:s}=await k.from("users").select("id,last_seen");if(!s)return;const d={};s.forEach(x=>{d[x.id]=x.last_seen}),w.forEach(x=>{x.last_seen=d[x.id]??x.last_seen}),l(w),document.querySelectorAll("[data-online-dot]").forEach(x=>{const b=w.find(I=>I.id===x.dataset.onlineDot);b&&(x.style.background=ce(b)?"#22c55e":"transparent")})},2e4),h=new MutationObserver(()=>{document.body.contains(e)||(clearInterval(g),h.disconnect())});h.observe(document.body,{childList:!0,subtree:!0});function E(s){document.getElementById("users-tbody").innerHTML=s.map(d=>{const x=d.mmr??1e3,b=d.mmr_deviation??350,I=d.placement_matches??0,B=bt(x),o=d.ranked_wins??0,y=d.ranked_losses??0,c=d.ranked_draws??0,u=o+y+c,_=u>0?Math.round(o/u*100):null,p=I<10,f=b<80?"#1A6B3C":b<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:6px">
              <span data-online-dot="${d.id}" title="${ce(d)?"En ligne":"Hors ligne"}"
                style="width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${ce(d)?"#22c55e":"transparent"};border:1px solid ${ce(d)?"#22c55e":"var(--gray-300,#ccc)"}"></span>
              <div style="font-weight:700">${d.pseudo}</div>
            </div>
            <div style="font-size:11px;color:var(--gray-600);margin-left:14px">${d.club_name||"—"}</div>
            <div style="font-size:10.5px;color:var(--gray-600);margin-left:14px">${$[d.id]||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <span id="credits-display-${d.id}">${(d.credits||0).toLocaleString("fr")} cr.</span>
              <button class="btn-edit-credits" data-user="${d.id}" data-current="${d.credits||0}"
                style="background:none;border:none;cursor:pointer;font-size:12px;padding:0;opacity:.7" title="Modifier les crédits">✏️</button>
            </div>
            <div style="color:var(--gray-600)">🎮 Solo max : niv. ${v[d.id]??1}</div>
          </td>
          <td style="font-size:12px">${d.wins}V / ${d.draws}N / ${d.losses}D</td>
          <td style="font-size:12px">🥇${d.trophies_top1} 🥈${d.trophies_top2} 🥉${d.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${B.emoji}</span>
              <span style="font-weight:700;color:${B.color}">${B.label}</span>
            </div>
            ${p?`<div style="font-size:10px;color:#e67e22">${I}/10 placement${I<10?` (${10-I} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${c}N ${y}D${_!==null?` · ${_}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${x}</div>
            <div style="font-size:10px;color:${f}">RD ±${Math.round(b)}</div>
          </td>
          <td>
            ${d.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td style="display:flex;gap:4px">
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${d.id}" data-is-admin="${d.is_admin}">
              ${d.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
            <button class="btn btn-ghost btn-sm" data-view-cards="${d.id}" data-pseudo="${d.pseudo}"
              title="Voir toutes les cartes et équipes de ce Manager">🃏</button>
            <button class="btn btn-ghost btn-sm" data-delete-manager="${d.id}" data-pseudo="${d.pseudo}"
              style="color:var(--red,#bb2020);" title="Supprimer ce Manager et TOUT ce qui le lie">
              🗑️
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll(".btn-edit-credits").forEach(d=>{d.addEventListener("click",async()=>{const x=d.dataset.user,b=Number(d.dataset.current)||0,I=prompt("Nouveau solde de crédits :",b);if(I===null)return;const B=parseInt(I.replace(/\s/g,""),10);if(isNaN(B)||B<0){n("Valeur invalide","error");return}const{data:o,error:y}=await k.rpc("admin_update_user_credits",{p_user_id:x,p_new_credits:B});if(y){n(y.message,"error");return}if(!(o!=null&&o.success)){n((o==null?void 0:o.error)||"Échec de la mise à jour","error");return}n("Crédits mis à jour ✅","success");const c=document.getElementById(`credits-display-${x}`);c&&(c.textContent=`${B.toLocaleString("fr")} cr.`),d.dataset.current=B})}),document.querySelectorAll("[data-toggle-admin]").forEach(d=>{d.addEventListener("click",async()=>{const x=d.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${x?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:b}=await k.from("users").update({is_admin:x}).eq("id",d.dataset.toggleAdmin);b?n(b.message,"error"):(n("Rôle mis à jour ✅","success"),De(e,{toast:n}))})}),document.querySelectorAll("[data-view-cards]").forEach(d=>{d.addEventListener("click",()=>{Hn(d.dataset.viewCards,d.dataset.pseudo)})}),document.querySelectorAll("[data-delete-manager]").forEach(d=>{d.addEventListener("click",async()=>{const x=d.dataset.deleteManager,b=d.dataset.pseudo;if(!confirm(`⚠️ ATTENTION: Supprimer le Manager "${b}" supprimera DÉFINITIVEMENT:
- Tous ses decks
- Toutes ses cartes
- Tous ses matchs
- Tous ses résultats ranked
- Tout ce qui le lie en base

Continuer ?`)||!confirm("Êtes-vous vraiment sûr ? Cette action est IRRÉVERSIBLE."))return;d.disabled=!0,d.textContent="⏳";const{data:I,error:B}=await k.rpc("delete_manager_cascade",{p_user_id:x});if(B){n(`Erreur: ${B.message}`,"error"),d.disabled=!1,d.textContent="🗑️";return}if(!(I!=null&&I.success)){n(`Erreur: ${(I==null?void 0:I.error)||"Suppression échouée"}`,"error"),d.disabled=!1,d.textContent="🗑️";return}n(`Manager "${b}" supprimé et ${Object.values(I.deleted).reduce((o,y)=>o+y)} entrées supprimées ✅`,"success"),De(e,{toast:n})})})}}const it=[{key:"player",label:"⚽ Joueurs"},{key:"formation",label:"📋 Formations"},{key:"stadium",label:"🏟️ Stades"},{key:"game_changer",label:"⚡ Game Changers"},{key:"decks",label:"👥 Équipes"},{key:"boosters",label:"🎁 Boosters"}];function On(e){const n={GK:[],DEF:[],MIL:[],ATT:[]};return(e||[]).filter(t=>t.is_starter).forEach(t=>{const i=/^(GK|DEF|MIL|ATT)(\d+)$/.exec(t.position||"");if(!i)return;const r=i[1],a=parseInt(i[2],10)-1;n[r][a]=Mt(t)}),n}function Mt(e){const n=e.evolution_bonus||0,t=e.job2,i=t&&Number(e[`note_${t.toLowerCase()}`])||0,r=(a,v)=>(Number(v)||0)+(e.job===a?n:0)+(t===a&&i>0?n:0);return{cardId:e.card_id,firstname:e.firstname,name:e.surname_real,surname_real:e.surname_real,country_code:e.country_code,club_id:e.club_id,job:e.job,job2:e.job2,note_g:r("GK",e.note_g),note_d:r("DEF",e.note_d),note_m:r("MIL",e.note_m),note_a:r("ATT",e.note_a),evolution_bonus:n,rarity:e.rarity,face:e.face||null,clubName:e.club_encoded_name||null,clubLogo:e.club_logo_url||null,boost:0,used:!1}}function Gn(e){return e!=null&&e.image_url?`/icons/${e.image_url}`:null}function Un(e){var n;return e!=null&&e.image_url?`/icons/${e.image_url}`:(n=e==null?void 0:e.club)!=null&&n.logo_url?e.club.logo_url:e!=null&&e.country_code?`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null}function xe(e){return e?`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start">${e}</div>`:'<div style="padding:30px;text-align:center;color:#999;font-size:13px">Aucune carte dans cette catégorie.</div>'}async function Hn(e,n,t){const i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="3000",i.innerHTML=`<div class="modal admin-light-card" style="max-width:1100px;width:96%">
    <div class="modal-header"><h2>🃏 Collection de ${n}</h2><button class="btn-icon" id="mc-close">✕</button></div>
    <div class="modal-body" id="mc-body" style="padding:16px">
      <div style="text-align:center;color:#999;padding:30px">⏳ Chargement de la collection…</div>
    </div>
  </div>`,document.body.appendChild(i);const r=()=>i.remove();i.querySelector("#mc-close").addEventListener("click",r),i.addEventListener("click",o=>{o.target===i&&r()});const{data:a,error:v}=await k.rpc("admin_get_manager_collection",{p_user_id:e}),$=i.querySelector("#mc-body");if(!$)return;if(v||!(a!=null&&a.success)){$.innerHTML=`<div style="padding:20px;color:#bb2020">Erreur : ${(v==null?void 0:v.message)||(a==null?void 0:a.error)||"chargement impossible"}</div>`;return}const w=a.cards||[],l=a.decks||[],m={player:w.filter(o=>o.card_type==="player"&&o.player),formation:w.filter(o=>o.card_type==="formation"),stadium:w.filter(o=>o.card_type==="stadium"),game_changer:w.filter(o=>o.card_type==="game_changer")},g={player:m.player.length,formation:m.formation.length,stadium:m.stadium.length,game_changer:m.game_changer.length,decks:l.length},h={};h.player=xe(m.player.map(o=>{const y={...o.player,_evolution_bonus:o.evolution_bonus||0};return`<div style="position:relative">${o.is_for_sale?'<div style="position:absolute;top:4px;right:4px;background:#D4A017;color:#111;font-size:9px;font-weight:800;padding:2px 6px;border-radius:8px;z-index:3">EN VENTE</div>':""}${le(y,{width:110,context:"admin"})}</div>`}).join("")),h.formation=xe(m.formation.map(o=>`<div style="position:relative">${tn(o.formation,Ee[o.formation],{width:120})}</div>`).join("")),h.stadium=xe(m.stadium.map(o=>{var u;const y=o.stadium_def,c=((u=y==null?void 0:y.club)==null?void 0:u.encoded_name)||(y==null?void 0:y.country_code)||"—";return`<div style="position:relative">${Oe((y==null?void 0:y.name)||"?",Un(y),`${c}<br>+10 ⭐ joueurs alliés`,{width:120})}</div>`}).join("")),h.game_changer=xe(m.game_changer.map(o=>{const y=o.gc_def;return`<div style="position:relative">${Ie((y==null?void 0:y.name)||o.gc_type||"Game Changer",Gn(y),"⚡",(y==null?void 0:y.effect)||"",{width:120})}</div>`}).join(""));function E(o){var S,T;const y=o.cards||[],c=y.filter(M=>!M.is_starter),u=On(y),_=o.stadium||null;_&&nn(u,_);const p=["GK","DEF","MIL","ATT"].reduce((M,D)=>M+u[D].filter(Boolean).length,0),f=_?`
      <div style="display:flex;align-items:center;gap:10px;background:#eaf3fb;border:1px solid #c9def0;border-radius:10px;padding:8px 12px;margin-bottom:10px">
        ${(S=_.club)!=null&&S.logo_url?`<img src="${_.club.logo_url}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:20px">🏟️</span>'}
        <div style="font-weight:800;font-size:13px;color:#1a1a1a">${_.name||"Stade"}</div>
        <div style="margin-left:auto;font-size:12px;color:#1A6B3C;font-weight:700">
          +10 aux joueurs ${((T=_.club)==null?void 0:T.encoded_name)||_.country_code||""}
        </div>
      </div>`:"",L=o.formation&&Ee[o.formation]&&p?`<div style="max-width:560px;margin:0 auto;pointer-events:none">
           ${an(u,o.formation,null,[],340,375)}
         </div>`:`<div style="font-size:12px;color:#999;padding:20px;text-align:center">
           ${o.formation?Ee[o.formation]?"Aucun titulaire enregistré.":`Formation inconnue : ${o.formation}`:"Aucune formation définie pour ce deck."}
         </div>`,A=M=>`<div style="position:relative">${le(Mt(M),{width:74,context:"admin"})}</div>`;return`
      ${f}
      ${L}
      ${c.length?`
        <div style="margin-top:12px">
          <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:5px">REMPLAÇANTS (${c.length})</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${c.map(A).join("")}</div>
        </div>`:""}
    `}h.decks=l.length?`<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
         <label style="font-size:12px;font-weight:700;color:#555">Équipe :</label>
         <select id="mc-deck-select" style="padding:7px 10px;border-radius:8px;border:1px solid var(--gray-200,#ddd);background:#fff;color:#1a1a1a;font-size:13px;font-weight:600;min-width:240px">
           ${l.map((o,y)=>`<option value="${y}">${o.name||"Deck sans nom"} — ${o.formation||"?"}</option>`).join("")}
         </select>
         <span style="font-size:12px;color:#888">${l.length} équipe(s)</span>
       </div>
       <div id="mc-deck-pitch">${E(l[0])}</div>`:`<div style="padding:30px;text-align:center;color:#999;font-size:13px">Ce manager n'a créé aucune équipe.</div>`;const s=a.boosters||[],d=a.legacy_booster_cards||0,x={legende:"Légende",pepite:"Pépite",papyte:"Papyte",normal:"Normal"},b={legende:"#7a28b8",pepite:"#D4A017",papyte:"#909090",normal:"#888"},I=s.reduce((o,y)=>o+(y.nb_cards||0),0);h.boosters=`
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <div style="flex:1;min-width:150px;background:#f4f8f5;border:1px solid #d6e8dc;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Boosters ouverts</div>
        <div style="font-size:22px;font-weight:900;color:#1A6B3C">${s.length}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#fdf8ec;border:1px solid #efe0bb;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes obtenues</div>
        <div style="font-size:22px;font-weight:900;color:#D4A017">${I}</div>
      </div>
      <div style="flex:1;min-width:150px;background:#f7f7f7;border:1px solid #e0e0e0;border-radius:12px;padding:12px 14px">
        <div style="font-size:11px;color:#666">Cartes booster (historique)</div>
        <div style="font-size:22px;font-weight:900;color:#555">${d}</div>
      </div>
    </div>
    ${s.length?`
      <div style="display:flex;flex-direction:column;gap:8px">
        ${s.map(o=>{const y=o.opened_at?new Date(o.opened_at).toLocaleString("fr"):"—",c=(o.cards||[]).map(u=>{const _=b[u.rarity]||"#888",p=u.rarity?` · <span style="color:${_};font-weight:700">${x[u.rarity]||u.rarity}</span>`:"",f=u.is_duplicate?' <span style="color:#aaa">(doublon)</span>':"";return`<div style="font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #eee">
              ${u.name||u.card_type||"?"}${p}${u.note!=null?` · note ${u.note}`:""}${f}
            </div>`}).join("");return`<details style="border:1px solid var(--gray-200,#e0e0e0);border-radius:10px;padding:10px 12px;background:#fafafa">
            <summary style="cursor:pointer;font-size:13px;font-weight:700;color:#1a1a1a">
              ${o.booster_name||"Booster"} <span style="font-weight:400;color:#777">· ${o.nb_cards||0} carte(s) · ${y}</span>
            </summary>
            <div style="margin-top:8px">${c||'<div style="font-size:12px;color:#999">Contenu non détaillé.</div>'}</div>
          </details>`}).join("")}
      </div>`:`
      <div style="padding:20px;text-align:center;color:#999;font-size:13px;line-height:1.6">
        Aucune ouverture enregistrée pour ce manager.<br>
        <span style="font-size:11.5px">Le journal des ouvertures a été mis en place récemment : seules les ouvertures postérieures y figurent.${d?` Le compteur « historique » (${d}) recense les cartes joueur encore possédées et obtenues en booster avant cela.`:""}</span>
      </div>`}
  `,$.innerHTML=`
    <div style="display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--gray-200,#e0e0e0);padding-bottom:10px;margin-bottom:14px">
      ${it.map((o,y)=>`
        <button class="mc-tab" data-tab="${o.key}" style="
          border:1px solid ${y===0?"#1A6B3C":"var(--gray-200,#ddd)"};
          background:${y===0?"#1A6B3C":"#fff"};
          color:${y===0?"#fff":"#444"};
          padding:7px 13px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer">
          ${o.label} (${g[o.key]})
        </button>`).join("")}
    </div>
    ${it.map((o,y)=>`
      <div class="mc-pane" data-pane="${o.key}" style="display:${y===0?"block":"none"}">${h[o.key]}</div>
    `).join("")}
  `;const B=$.querySelector("#mc-deck-select");B&&B.addEventListener("change",()=>{const o=$.querySelector("#mc-deck-pitch");o&&(o.innerHTML=E(l[Number(B.value)]))}),$.querySelectorAll(".mc-tab").forEach(o=>{o.addEventListener("click",()=>{$.querySelectorAll(".mc-tab").forEach(y=>{const c=y===o;y.style.background=c?"#1A6B3C":"#fff",y.style.color=c?"#fff":"#444",y.style.borderColor=c?"#1A6B3C":"var(--gray-200,#ddd)"}),$.querySelectorAll(".mc-pane").forEach(y=>{y.style.display=y.dataset.pane===o.dataset.tab?"block":"none"})})})}const Kn=[{value:"normal",label:"Normal",color:"#ccc"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function zt(e,n){var w;const{toast:t}=n,{data:i,error:r}=await k.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(r){e.innerHTML=`<p style="color:var(--danger)">${r.message}</p>`;return}const a=i||[],v=a.filter(l=>l.status==="active").length,$=a.filter(l=>l.status==="sold").length;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button id="btn-price-grid" class="btn btn-primary">📊 Grille des prix</button>
      <div style="display:flex;gap:12px">
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#1A6B3C">${v}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Annonces actives</div>
        </div>
        <div class="card-panel" style="min-width:120px;text-align:center;padding:12px 20px">
          <div style="font-size:22px;font-weight:700;color:#D4A017">${$}</div>
          <div style="font-size:11px;color:var(--tile-fg-dim)">Vendues</div>
        </div>
      </div>
    </div>
    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Carte</th><th>Vendeur</th><th>Acheteur</th>
              <th>Prix</th><th>Statut</th><th>Date</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${a.map(l=>{var E,s,d,x;const m=(E=l.card)==null?void 0:E.player,g=m?`${m.firstname} ${m.surname_real}`:((s=l.card)==null?void 0:s.card_type)||"—",h={active:"#1A6B3C",sold:"#D4A017",cancelled:"#888"};return`<tr>
                <td><b>${g}</b>${m?`<div style="font-size:10px;color:var(--tile-fg-dim)">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((d=l.seller)==null?void 0:d.pseudo)||"—"}</td>
                <td style="font-size:12px">${((x=l.buyer)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${h[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${l.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:var(--tile-fg-dim)">${new Date(l.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${l.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${l.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await k.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);m?t(m.message,"error"):(t("Annonce annulée","success"),zt(e,n))})}),(w=document.getElementById("btn-price-grid"))==null||w.addEventListener("click",()=>Vn(n))}async function Vn(e){await Ne(e)}function Jn(){const e=document.getElementById("modal-overlay");if(!e||e._pgBlocker)return;const n=t=>{t.target===t.currentTarget&&t.stopImmediatePropagation()};e.addEventListener("click",n,!0),e._pgBlocker=n}function Te(){const e=document.getElementById("modal-overlay");e!=null&&e._pgBlocker&&(e.removeEventListener("click",e._pgBlocker,!0),delete e._pgBlocker)}async function Ne(e){var E,s;const{openModal:n,closeModal:t,toast:i}=e,{data:r,error:a}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(a){i(a.message,"error");return}const v=d=>Kn.map(x=>`<option value="${x.value}" ${x.value===d?"selected":""}>${x.label}</option>`).join(""),$=d=>`
    <tr data-row="${d.id}">
      <td style="padding:4px 8px">
        <select data-field="rarity" data-id="${d.id}" style="width:100%;padding:6px;font-size:13px">${v(d.rarity)}</select>
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_min" data-id="${d.id}" type="number" min="0" max="999" value="${d.note_min}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="note_max" data-id="${d.id}" type="number" min="0" max="999" value="${d.note_max}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_min" data-id="${d.id}" type="number" min="0" value="${d.price_min}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="price_max" data-id="${d.id}" type="number" min="0" value="${d.price_max}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${d.id}">🗑️</button>
      </td>
    </tr>`,w=`
    <p style="font-size:13px;color:#666;margin-bottom:14px">
      Définit la fourchette de prix autorisée à la vente sur le marché, selon la rareté et la note du joueur.
      Modifie une cellule et quitte-la (Tab/clic ailleurs) pour enregistrer automatiquement — comme dans un tableur.
    </p>
    <div style="max-height:400px;overflow-y:auto;margin-bottom:14px">
      <table>
        <thead>
          <tr><th>Rareté</th><th style="text-align:center">Note min</th><th style="text-align:center">Note max</th><th style="text-align:right">Prix min</th><th style="text-align:right">Prix max</th><th style="text-align:center">Actions</th></tr>
        </thead>
        <tbody id="pg-tbody">
          ${(r||[]).map($).join("")||'<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Aucune règle définie.</td></tr>'}
        </tbody>
      </table>
    </div>
  `;n("📊 Grille des prix — vente marché",w,`
    <button id="pg-add-row" class="btn btn-primary">+ Ajouter une ligne</button>
    <button id="pg-close" class="btn btn-ghost">Fermer</button>
  `),Jn(),(E=document.getElementById("pg-close"))==null||E.addEventListener("click",()=>{Te(),t()});function m(d){const x=d.dataset.id,b=d.dataset.field,I=b==="rarity"?d.value:Number(d.value)||0;return g(x,{[b]:I},d)}async function g(d,x,b){const I=document.querySelector(`tr[data-row="${d}"]`),B=p=>I.querySelector(`[data-field="${p}"]`),o="note_min"in x?x.note_min:Number(B("note_min").value),y="note_max"in x?x.note_max:Number(B("note_max").value),c="price_min"in x?x.price_min:Number(B("price_min").value),u="price_max"in x?x.price_max:Number(B("price_max").value);if(o>y){i("Note min doit être ≤ note max","error");return}if(c>u){i("Prix min doit être ≤ prix max","error");return}const{error:_}=await k.from("sell_price_configs").update(x).eq("id",d);if(_){i(_.message,"error");return}b&&(b.style.transition="background .3s",b.style.background="#e8f8ee",setTimeout(()=>{b.style.background=""},500))}function h(){document.querySelectorAll("#pg-tbody [data-field]").forEach(d=>{d.addEventListener("change",()=>m(d))})}h(),document.querySelectorAll("[data-del-row]").forEach(d=>{d.addEventListener("click",async()=>{confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",d.dataset.delRow),i("Ligne supprimée","success"),Te(),Ne(e))})}),(s=document.getElementById("pg-add-row"))==null||s.addEventListener("click",async()=>{var B;const d={rarity:"normal",note_min:0,note_max:20,price_min:2500,price_max:15e3},{data:x,error:b}=await k.from("sell_price_configs").insert(d).select().single();if(b){i(b.message,"error");return}const I=document.getElementById("pg-tbody");I.querySelector("td[colspan]")&&(I.innerHTML=""),I.insertAdjacentHTML("beforeend",$(x)),h(),(B=document.querySelector(`[data-del-row="${x.id}"]`))==null||B.addEventListener("click",async function(){confirm("Supprimer cette ligne ?")&&(await k.from("sell_price_configs").delete().eq("id",x.id),i("Ligne supprimée","success"),Te(),Ne(e))}),i("Ligne ajoutée — modifie les valeurs directement","success")})}async function Yn(e,{toast:n}){e.innerHTML=`
  <div style="display:flex;flex-direction:column;gap:20px">

    <!-- CLUBS -->
    <div class="card-panel">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:4px">🏟️ Clubs</h3>
      <p style="font-size:12px;color:var(--gray-600);margin-bottom:16px">Exporter/importer les clubs en masse via CSV.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost" id="export-clubs-template">📄 Template CSV vide</button>
        <button class="btn btn-primary" id="export-clubs">⬇️ Exporter les clubs</button>
        <label class="btn btn-yellow" style="cursor:pointer;margin:0">
          ⬆️ Importer clubs
          <input type="file" id="import-clubs" accept=".csv" style="display:none">
        </label>
      </div>
      <div id="clubs-import-result" style="margin-top:12px;font-size:13px"></div>
    </div>

    <!-- JOUEURS -->
    <div class="card-panel">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:4px">🃏 Joueurs</h3>
      <p style="font-size:12px;color:var(--gray-600);margin-bottom:16px">Exporter/importer les joueurs en masse via CSV (par lots de 500). Une ligne avec un <code>id</code> renseigné met à jour ce joueur (id/face conservés) ; une ligne sans <code>id</code> en crée un nouveau.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost" id="export-players-template">📄 Template CSV vide</button>
        <button class="btn btn-primary" id="export-players">⬇️ Exporter les joueurs</button>
        <label class="btn btn-yellow" style="cursor:pointer;margin:0">
          ⬆️ Importer joueurs
          <input type="file" id="import-players" accept=".csv" style="display:none">
        </label>
      </div>
      <div id="players-import-result" style="margin-top:12px;font-size:13px"></div>
    </div>

    <!-- AIDE -->
    <div class="card-panel" style="background:#f9f9f9">
      <h4 style="font-size:13px;font-weight:700;margin-bottom:8px">📋 Format CSV</h4>
      <div style="font-size:12px;color:var(--gray-600);line-height:1.8">
        <b>Clubs :</b> real_name, encoded_name, country_code, logo_url<br>
        <b>Joueurs :</b> id (optionnel, active l'update), firstname, surname_real, lastname_reel, country_code, club_id (optionnel), club_encoded_name, job, job2, note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face, ethnie<br><br>
        <b>Valeurs autorisées :</b><br>
        • job/job2 : GK, DEF, MIL, ATT<br>
        • rarity : normal, pepite, papyte, legende<br>
        • skin : texte libre (ex: Skin/ATT1.png)<br>
        • hair : blond, marron, noir, chauve<br>
        • hair_length : rase, court, milong, long<br><br>
        💡 Le séparateur est la virgule. Première ligne = en-têtes. club_id (si fourni) est prioritaire sur club_encoded_name. Import envoyé par lots de 500 lignes.
      </div>
    </div>
  </div>
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{he("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{he("players_template.csv",`id,firstname,surname_real,lastname_reel,country_code,club_id,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,face,ethnie
,Kylian,Mbappe,,FR,,PARIS FC,ATT,,0,0,2,9,legende,,,Skin/ATT1.png,noir,court,50000,,
,Achraf,Hakimi,,MA,,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,Skin/DEF7.png,noir,court,20000,,
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await k.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let r=`real_name,encoded_name,country_code,logo_url
`;t.forEach(a=>{r+=[a.real_name,a.encoded_name,a.country_code,a.logo_url||""].map(at).join(",")+`
`}),he("clubs_export.csv",r),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await k.from("players").select("id,firstname,surname_real,lastname_reel,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,face,ethnie,clubs(encoded_name)").order("surname_real");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let r=`id,firstname,surname_real,lastname_reel,country_code,club_id,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,face,ethnie
`;t.forEach(a=>{var v;r+=[a.id,a.firstname,a.surname_real,a.lastname_reel||"",a.country_code,a.club_id||"",((v=a.clubs)==null?void 0:v.encoded_name)||"",a.job,a.job2||"",a.note_g,a.note_d,a.note_m,a.note_a,a.rarity,a.note_min??"",a.note_max??"",a.skin,a.hair,a.hair_length,a.sell_price,a.face||"",a.ethnie||""].map(at).join(",")+`
`}),he("players_export.csv",r),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const r=document.getElementById("clubs-import-result");r.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),v=ot(a);if(v.length===0){r.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let $=0,w=0;const l=[];for(const m of v){if(!m.real_name||!m.encoded_name||!m.country_code){w++,l.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const g={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:h}=await k.from("clubs").upsert(g,{onConflict:"encoded_name"});h?(w++,l.push(`${m.encoded_name}: ${h.message}`)):$++}r.innerHTML=`<div style="color:var(--green)">✅ ${$} clubs importés</div>
        ${w>0?`<div style="color:#c0392b">❌ ${w} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,n(`${$} clubs importés`,"success")}catch(a){r.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const r=document.getElementById("players-import-result");r.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const a=await i.text(),v=ot(a);if(v.length===0){r.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:$}=await k.from("clubs").select("id,encoded_name"),w={};($||[]).forEach(c=>{w[c.encoded_name.toUpperCase()]=c.id});const l=["GK","DEF","MIL","ATT"],m=["normal","pepite","papyte","legende"],g=["blond","marron","noir","chauve"],h=["rase","court","milong","long"],E=[],s=[],d=[];let x=0;for(const c of v){if(!c.firstname||!c.surname_real||!c.country_code||!c.job){x++,d.push(`Ligne ignorée (champs requis manquants): ${c.firstname||"?"}`);continue}if(!l.includes(c.job)){x++,d.push(`${c.firstname}: job invalide "${c.job}"`);continue}const u=c.club_id||c.club_encoded_name&&w[c.club_encoded_name.toUpperCase()]||null,_={firstname:c.firstname,surname_real:c.surname_real,lastname_reel:c.lastname_reel||null,country_code:c.country_code.toUpperCase().slice(0,2),club_id:u,job:c.job,job2:l.includes(c.job2)?c.job2:null,note_g:parseInt(c.note_g)||0,note_d:parseInt(c.note_d)||0,note_m:parseInt(c.note_m)||0,note_a:parseInt(c.note_a)||0,rarity:m.includes(c.rarity)?c.rarity:"normal",note_min:c.note_min!==""&&c.note_min!=null?parseInt(c.note_min):null,note_max:c.note_max!==""&&c.note_max!=null?parseInt(c.note_max):null,skin:c.skin||null,hair:g.includes(c.hair)?c.hair:"noir",hair_length:h.includes(c.hair_length)?c.hair_length:"court",sell_price:parseInt(c.sell_price)||0,face:c.face||null,ethnie:c.ethnie||null};c.id?E.push({id:c.id,..._}):s.push(_)}const b=500;let I=0,B=0,o=0;async function y(c,u){for(let _=0;_<c.length;_+=b){const p=c.slice(_,_+b),{error:f,count:L}=await u(p);f?(o+=p.length,d.push(`Lot ${_}-${_+p.length}: ${f.message}`)):u._ok=(u._ok||0)+p.length}return u._ok||0}I=await y(E,c=>k.from("players").upsert(c,{onConflict:"id"})),B=await y(s,c=>k.from("players").insert(c)),r.innerHTML=`<div style="color:var(--green)">✅ ${B} créés, ${I} mis à jour</div>
        ${x+o>0?`<div style="color:#c0392b">❌ ${x} lignes invalides, ${o} en erreur sur les lots</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,n(`${B} créés, ${I} mis à jour`,"success")}catch(a){r.innerHTML=`<span style="color:#c0392b">Erreur : ${a.message}</span>`}t.target.value=""})}function at(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function he(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}function ot(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(v=>v.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",r=rt(t,i).map(v=>v.trim().replace(/^\uFEFF/,"").toLowerCase()),a=[];for(let v=1;v<n.length;v++){if(!n[v].trim())continue;const $=rt(n[v],i),w={};r.forEach((l,m)=>{w[l]=($[m]||"").trim()}),!Object.values(w).every(l=>!l)&&a.push(w)}return a}function rt(e,n=","){const t=[];let i="",r=!1;for(let a=0;a<e.length;a++){const v=e[a];r?v==='"'?e[a+1]==='"'?(i+='"',a++):r=!1:i+=v:v==='"'?r=!0:v===n?(t.push(i),i=""):i+=v}return t.push(i),t}const Wn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Zn(e,{toast:n}){const t=Object.keys(Ce);let i=t[0];const{data:r}=await k.from("formation_links_overrides").select("formation, links"),a={};(r||[]).forEach(m=>{a[m.formation]=m.links});let v=new Set;function $(m,g){return[m,g].sort().join("-")}function w(m){const g=a[m]||Ce[m]||[];v=new Set(g.map(([h,E])=>$(h,E)))}w(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(m=>`<option value="${m}" ${m===i?"selected":""}>${m}</option>`).join("")}
        </select>
        <button class="btn btn-ghost btn-sm" id="reset-btn">↺ Réinitialiser (défaut)</button>
      </div>
      <button class="btn btn-primary" id="save-btn">💾 Enregistrer les liens</button>
    </div>

    <div class="card-panel" style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start">
      <div style="flex-shrink:0">
        <div id="field-wrap" style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px"></div>
        <div style="margin-top:10px;font-size:12px;color:var(--gray-600);line-height:1.6">
          <div><span style="display:inline-block;width:18px;height:3px;background:#3b82f6;vertical-align:middle;margin-right:6px"></span> Lien actif (cliquer pour désactiver)</div>
          <div><span style="display:inline-block;width:18px;height:3px;background:#999;vertical-align:middle;margin-right:6px;opacity:0.5"></span> Lien inactif (cliquer pour activer)</div>
        </div>
      </div>
      <div style="flex:1;min-width:240px">
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${v.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function l(){const m=Ee[i]||{},g=We(i),h=320,E=400,s=22;function d(o){const y=m[o];return y?{x:y.x*h,y:y.y*E}:null}let x=`<svg width="${h}" height="${E}" viewBox="0 0 ${h} ${E}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;g.forEach(([o,y],c)=>{const u=d(o),_=d(y);if(!u||!_)return;const p=$(o,y),f=v.has(p),L=f?"#3b82f6":"#999",A=f?.95:.35,S=f?4:3;x+=`<line x1="${u.x}" y1="${u.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${p}" style="cursor:pointer"/>`,x+=`<line x1="${u.x}" y1="${u.y}" x2="${_.x}" y2="${_.y}"
        stroke="${L}" stroke-width="${S}" stroke-dasharray="${f?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${p}"/>`});for(const o of Object.keys(m)){const y=d(o);if(!y)continue;const c=o.replace(/\d+/,""),u=Wn[c]||"#555";x+=`<circle cx="${y.x}" cy="${y.y}" r="${s}" fill="${u}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,x+=`<text x="${y.x}" y="${y.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${o}</text>`}x+="</svg>",document.getElementById("field-wrap").innerHTML=x;const b=document.getElementById("links-list");b.innerHTML=g.map(([o,y])=>{const c=$(o,y),u=v.has(c);return`
        <button class="link-toggle" data-key="${c}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${u?"#3b82f6":"#ddd"};
          background:${u?"#eaf2ff":"#fafafa"};
          color:${u?"#1d4ed8":"#888"}">
          <span>${o} ↔ ${y}</span>
          <span>${u?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${v.size}/${g.length} actifs)`);function B(o){v.has(o)?v.delete(o):v.add(o),l()}e.querySelectorAll(".link-hit").forEach(o=>{o.addEventListener("click",()=>B(o.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(o=>{o.addEventListener("click",()=>B(o.dataset.key))})}l(),document.getElementById("formation-select").addEventListener("change",m=>{i=m.target.value,w(i),l()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=Ce[i]||[];v=new Set(m.map(([g,h])=>$(g,h))),l(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const g=We(i).filter(([E,s])=>v.has($(E,s))),{error:h}=await k.from("formation_links_overrides").upsert({formation:i,links:g,updated_at:new Date().toISOString()});if(h){n(h.message,"error");return}a[i]=g,n(`Liens enregistrés pour ${i} (${g.length} actifs)`,"success")})}const Xn=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Qn=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],ei=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function ti(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await k.from("booster_configs").select("*").order("sort_order");let t=null,i=[],r=null;const a=()=>window.innerWidth<700;async function v(){if(!t){i=[];return}if(t!==r){const{data:g}=await k.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=g||[],r=t}}function $(){return`
    <div id="booster-list" style="background:#fff;${a()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(g=>`
      <div class="booster-row" data-id="${g.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${g.id===t?"#f0f7f0":"#fff"}">
        ${g.image_url?`<img src="/icons/${g.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g.name}</div>
          <div style="font-size:11px;color:#888">
            ${g.price_type==="credits"?(g.price_credits||0)+" cr.":g.price_type==="pub"?"Pub":"Gratuit"}
            · ${g.card_count||5} cartes · ${g.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${g.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function w(){const g=t?(n||[]).find(s=>s.id===t):null;if(!g)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const h=i.reduce((s,d)=>s+Number(d.percentage||0),0),E=Math.abs(h-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${a()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${g.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${g.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${g.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${g.image_url?`<img src="/icons/${g.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ei.map(s=>`<option value="${s.value}" ${g.price_type===s.value?"selected":""}>${s.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${g.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${g.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${g.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${g.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${g.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-allow-dup" style="font-size:13px;cursor:pointer;font-weight:600">
            Possibilité de doublons
            <span style="font-size:11px;color:#888;font-weight:400;display:block">Si décoché : impossible d'obtenir un joueur/carte déjà possédé(e)</span>
          </label>
        </div>

        <!-- Quota & période -->
        <div style="border-top:1px solid #eee;padding-top:14px;margin-top:14px">
          <div style="font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Quota & période de disponibilité</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Max par manager (vide = illimité)</label>
              <input id="f-max-per-user" type="number" min="1" value="${g.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${g.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${g.available_until||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
          </div>
          <div style="font-size:11px;color:#aaa;margin-top:6px">
            💡 Si max = 1 : le booster disparaît dès que le manager l'a ouvert. Laissez vide pour aucune limite.
          </div>
        </div>
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${E?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${h.toFixed(1)}% ${E?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((s,d)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${d}">
            <select class="rate-type" data-idx="${d}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Xn.map(x=>`<option value="${x.value}" ${s.card_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${d}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Qn.map(x=>`<option value="${x.value}" ${(s.rarity||"")===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${d}" type="number" min="0" max="100" value="${s.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${d}" type="number" min="0" max="100" value="${s.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${d}" type="number" min="0.1" max="100" step="0.1" value="${s.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${d}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function l(g=!1){g||await v();const h=!t&&a(),E=t&&a();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!a()||h||!t?$():""}
      ${!a()||E?w():""}
    </div>`,m()}function m(){var E,s,d,x,b,I,B;const g=o=>e.querySelector(o);e.querySelectorAll(".booster-row").forEach(o=>{o.addEventListener("click",y=>{y.target.closest(".btn-delete")||(t=o.dataset.id,r=null,l())})}),(E=g("#btn-back"))==null||E.addEventListener("click",()=>{t=null,l()}),(s=g("#btn-new"))==null||s.addEventListener("click",async()=>{const o=prompt("Nom du nouveau booster :");if(!(o!=null&&o.trim()))return;const{data:y,error:c}=await k.from("booster_configs").insert({name:o.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(c){alert(c.message);return}n.push(y),t=y.id,r=null,l()}),e.querySelectorAll(".btn-delete").forEach(o=>{o.addEventListener("click",async y=>{if(y.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await k.from("booster_configs").delete().eq("id",o.dataset.id);const c=n.findIndex(u=>u.id===o.dataset.id);c>-1&&n.splice(c,1),t===o.dataset.id&&(t=null,r=null),l()})}),(d=g("#btn-cancel"))==null||d.addEventListener("click",()=>{t=null,l()}),(x=g("#f-price-type"))==null||x.addEventListener("change",o=>{const y=g("#credits-field");y&&(y.style.opacity=o.target.value!=="credits"?"0.4":"1")}),(b=g("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var y;const o=g("#icon-picker-grid");if(o){if(o.style.display!=="none"){o.style.display="none";return}o.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',o.style.display="block";try{const u=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(u)?u.filter(f=>f.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(f.name)):[];if(!_.length){o.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const p=((y=g("#f-image-url"))==null?void 0:y.value)||"";o.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(f=>`
          <div class="icon-pick-item" data-name="${f.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${f.name===p?"#1A6B3C":"#ddd"};background:${f.name===p?"#f0f7f0":"#fff"}">
            <img src="/icons/${f.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,o.querySelectorAll(".icon-pick-item").forEach(f=>{f.addEventListener("click",()=>{const L=g("#f-image-url");L&&(L.value=f.dataset.name),o.style.display="none"})})}catch(c){o.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${c.message}</div>`}}});function h(){e.querySelectorAll("[data-rate-idx]").forEach(o=>{var c,u,_,p,f;const y=Number(o.dataset.rateIdx);y>=0&&y<i.length&&(i[y].card_type=((c=o.querySelector(".rate-type"))==null?void 0:c.value)||"player",i[y].rarity=((u=o.querySelector(".rate-rarity"))==null?void 0:u.value)||null,i[y].note_min=Number((_=o.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[y].note_max=Number((p=o.querySelector(".rate-note-max"))==null?void 0:p.value)||null,i[y].percentage=Number((f=o.querySelector(".rate-pct"))==null?void 0:f.value)||0)})}(I=g("#btn-add-rate"))==null||I.addEventListener("click",()=>{h(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),l(!0)}),e.querySelectorAll(".btn-del-rate").forEach(o=>{o.addEventListener("click",()=>{h(),i.splice(Number(o.dataset.idx),1),l(!0)})}),(B=g("#btn-save"))==null||B.addEventListener("click",async()=>{var p,f,L,A,S,T,M,D,P,O,C,z,R;const o=(n||[]).find(j=>j.id===t);if(!o)return;const y=[];e.querySelectorAll("[data-rate-idx]").forEach(j=>{var U,H,Y,W,Z;const N=Number(j.dataset.rateIdx);y.push({booster_id:t,card_type:((U=j.querySelector(".rate-type"))==null?void 0:U.value)||"player",rarity:((H=j.querySelector(".rate-rarity"))==null?void 0:H.value)||null,note_min:Number((Y=j.querySelector(".rate-note-min"))==null?void 0:Y.value)||null,note_max:Number((W=j.querySelector(".rate-note-max"))==null?void 0:W.value)||null,percentage:Number((Z=j.querySelector(".rate-pct"))==null?void 0:Z.value)||0,sort_order:N});const q=y[y.length-1];q.rarity||(q.rarity=null),q.note_min||(q.note_min=null),q.note_max||(q.note_max=null)});const c=y.reduce((j,N)=>j+N.percentage,0);if(y.length&&Math.abs(c-100)>.5){alert(`La somme doit faire 100% (actuellement ${c.toFixed(1)}%)`);return}const u={name:((f=(p=g("#f-name"))==null?void 0:p.value)==null?void 0:f.trim())||o.name,image_url:((A=(L=g("#f-image-url"))==null?void 0:L.value)==null?void 0:A.trim())||null,price_type:(S=g("#f-price-type"))==null?void 0:S.value,price_credits:Number((T=g("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((M=g("#f-card-count"))==null?void 0:M.value)||5,is_active:((D=g("#f-active"))==null?void 0:D.checked)??o.is_active,allow_duplicates:((P=g("#f-allow-dup"))==null?void 0:P.checked)??!0,sort_order:Number((O=g("#f-sort"))==null?void 0:O.value)||0,max_per_user:(C=g("#f-max-per-user"))!=null&&C.value?Number(g("#f-max-per-user").value):null,available_from:((z=g("#f-available-from"))==null?void 0:z.value)||null,available_until:((R=g("#f-available-until"))==null?void 0:R.value)||null},{error:_}=await k.from("booster_configs").update(u).eq("id",t);if(_){alert(_.message);return}if(Object.assign(o,u),await k.from("booster_drop_rates").delete().eq("booster_id",t),y.length){const{error:j}=await k.from("booster_drop_rates").insert(y);if(j){alert(j.message);return}}i=y,r=t,alert("✅ Booster enregistré !"),l(!0)})}l()}const Rt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ni(e){await Ke(e)}async function Ke(e){const{data:n,error:t}=await k.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
    <div style="padding:20px;max-width:720px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">💰 Prix de vente directe</h2>
        <button id="add-config" class="btn btn-primary">+ Ajouter</button>
      </div>
      <p style="font-size:13px;color:#666;margin-bottom:16px">
        Configure le prix de vente directe selon la rareté et la plage de notes.
        La règle la plus précise (plage de notes la plus étroite) est appliquée en priorité.
      </p>

      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.1)">
        <thead>
          <tr style="background:#f5f5f5;font-size:12px;text-transform:uppercase;color:#666">
            <th style="padding:10px 14px;text-align:left">Rareté</th>
            <th style="padding:10px 14px;text-align:center">Note min</th>
            <th style="padding:10px 14px;text-align:center">Note max</th>
            <th style="padding:10px 14px;text-align:right">Prix (crédits)</th>
            <th style="padding:10px 14px;text-align:center">Actions</th>
          </tr>
        </thead>
        <tbody id="configs-tbody">
          ${(n||[]).map(i=>ii(i)).join("")}
        </tbody>
      </table>

      <!-- Formulaire ajout/édition -->
      <div id="config-form" style="display:none;margin-top:20px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 6px rgba(0,0,0,0.1)">
        <h3 id="form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvelle règle</h3>
        <input type="hidden" id="form-id">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">RARETÉ</label>
            <select id="form-rarity" style="width:100%;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
              ${Rt.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">PRIX (crédits)</label>
            <input id="form-price" type="number" min="0" value="1000"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOTE MIN</label>
            <input id="form-note-min" type="number" min="1" max="20" value="1"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOTE MAX</label>
            <input id="form-note-max" type="number" min="1" max="20" value="10"
              style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
        </div>
        <div style="display:flex;gap:10px">
          <button id="form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="form-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
      </div>
    </div>`,document.getElementById("add-config").addEventListener("click",()=>lt(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>ai(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const r=(n||[]).find(a=>a.id===i.dataset.edit);r&&i.addEventListener("click",()=>lt(r))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await k.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Ke(e))})})}function ii(e){const n=Rt.find(t=>t.value===e.rarity);return`
    <tr style="border-top:1px solid #f0f0f0">
      <td style="padding:10px 14px">
        <span style="font-weight:700;color:${(n==null?void 0:n.color)||"#888"}">${(n==null?void 0:n.label)||e.rarity}</span>
      </td>
      <td style="padding:10px 14px;text-align:center">${e.note_min}</td>
      <td style="padding:10px 14px;text-align:center">${e.note_max}</td>
      <td style="padding:10px 14px;text-align:right;font-weight:900;color:#D4A017">${(e.price||0).toLocaleString("fr")} cr.</td>
      <td style="padding:10px 14px;text-align:center">
        <div style="display:flex;gap:6px;justify-content:center">
          <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
          <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
        </div>
      </td>
    </tr>`}function lt(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function ai(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,r=parseInt(document.getElementById("form-note-min").value)||1,a=parseInt(document.getElementById("form-note-max").value)||10;if(r>a){alert("Note min doit être ≤ note max");return}const v={rarity:t,price:i,note_min:r,note_max:a,updated_at:new Date().toISOString()};let $;if(n?{error:$}=await k.from("sell_price_configs").update(v).eq("id",n):{error:$}=await k.from("sell_price_configs").insert(v),$){alert("Erreur : "+$.message);return}document.getElementById("config-form").style.display="none",await Ke(e)}async function oi(e){await Ve(e)}async function Ve(e){const{data:n}=await k.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Actualités</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>ri(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
      </div>

      <!-- Formulaire -->
      <div id="article-form" class="admin-light-card" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
        <h3 id="form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvel article</h3>
        <input type="hidden" id="form-id">
        <div style="display:flex;flex-direction:column;gap:12px">
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">TITRE *</label>
            <input id="form-art-title" placeholder="Ex : Version 1.2 — Nouvelles formations" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">DATE DE PUBLICATION</label>
            <input id="form-art-date" type="datetime-local" style="padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">DESCRIPTION *</label>
            <textarea id="form-art-desc" rows="5" placeholder="Décris les changements apportés..." style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;resize:vertical"></textarea>
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">IMAGE (optionnel)</label>
            <div style="display:flex;align-items:center;gap:12px">
              <div id="form-art-img-preview" style="width:56px;height:56px;border-radius:8px;background:#f0f0f0;border:1.5px solid #ddd;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">
                <span style="font-size:20px;opacity:.4">📰</span>
              </div>
              <div style="flex:1">
                <input type="file" id="form-art-img-file" accept="image/png,image/jpeg,image/webp">
                <div style="font-size:11px;color:#888;margin-top:4px">PNG/JPG/WEBP — remplace l'image actuelle si un fichier est choisi</div>
              </div>
            </div>
            <input type="hidden" id="form-art-img-current">
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <input type="checkbox" id="form-art-pub" checked style="width:16px;height:16px">
            <label for="form-art-pub" style="font-size:13px;font-weight:600">Publié (visible des joueurs)</label>
          </div>
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="form-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
            <button id="form-save"   class="btn btn-primary" style="flex:1">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>`,document.getElementById("add-article").addEventListener("click",()=>st(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>si(e)),e.querySelectorAll("[data-edit-row]").forEach(t=>{const i=(n||[]).find(r=>r.id===t.dataset.editRow);i&&t.addEventListener("click",()=>st(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await k.from("patch_notes").delete().eq("id",t.dataset.delete),await Ve(e))})})}function ri(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div data-edit-row="${e.id}" class="admin-light-card" style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start;cursor:pointer">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900;color:#1a1a1a">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${n}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222" onclick="event.stopPropagation()">🗑️</button>
      </div>
    </div>`}function st(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img-current").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-img-file").value="";const t=document.getElementById("form-art-img-preview");t.innerHTML=e!=null&&e.image_url?`<img src="${e.image_url}" style="width:100%;height:100%;object-fit:cover">`:'<span style="font-size:20px;opacity:.4">📰</span>',document.getElementById("form-art-img-file").onchange=a=>{var w;const v=(w=a.target.files)==null?void 0:w[0];if(!v)return;const $=new FileReader;$.onload=()=>{t.innerHTML=`<img src="${$.result}" style="width:100%;height:100%;object-fit:cover">`},$.readAsDataURL(v)},document.getElementById("form-art-pub").checked=e?e.is_published:!0;const i=new Date((e==null?void 0:e.published_at)||Date.now()),r=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=r,n.scrollIntoView({behavior:"smooth"})}async function li(e){const n=(e.name.split(".").pop()||"png").toLowerCase(),t=`journal/${Date.now()}.${n}`,{error:i}=await k.storage.from("assets").upload(t,e,{upsert:!0,cacheControl:"3600"});if(i)throw i;const{data:r}=k.storage.from("assets").getPublicUrl(t);return r.publicUrl}async function si(e){var E;const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),r=((E=document.getElementById("form-art-img-file").files)==null?void 0:E[0])||null,a=document.getElementById("form-art-img-current").value||null,v=document.getElementById("form-art-pub").checked,$=document.getElementById("form-art-date").value,w=document.getElementById("form-save");if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}let l=a;if(r)try{w&&(w.textContent="📤 Envoi de l'image…"),l=await li(r)}catch(s){alert("Erreur upload image : "+s.message),w&&(w.textContent="💾 Enregistrer");return}const m=$?new Date($).toISOString():new Date().toISOString(),g={title:t,description:i,image_url:l,is_published:v,published_at:m};let h;if(n?{error:h}=await k.from("patch_notes").update(g).eq("id",n):{error:h}=await k.from("patch_notes").insert(g),h){alert("Erreur : "+h.message);return}document.getElementById("article-form").style.display="none",await Ve(e)}async function di(e){await pe(e)}async function pe(e){var m,g,h,E,s,d,x,b,I,B,o,y;const{data:n}=await k.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
    <div style="display:flex;gap:16px;height:calc(100vh - 56px);overflow:hidden;padding:16px">

      <!-- Colonne gauche : panneau de modification -->
      <div style="width:420px;flex-shrink:0;overflow-y:auto">
        <!-- Formulaire -->
        <div id="ts-form" style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
          <div id="ts-form-empty" style="text-align:center;padding:40px 10px;color:#aaa">
            ← Sélectionnez une étape ou créez-en une nouvelle
          </div>
          <div id="ts-form-content" style="display:none">
          <h3 id="ts-form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouvelle étape</h3>
          <input type="hidden" id="ts-id">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          <div>
            <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">EMOJI *</label>
            <input id="ts-emoji" placeholder="⚽" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:22px;text-align:center">
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">COULEUR ACCENT</label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="color" id="ts-color" value="#1A6B3C" style="width:48px;height:38px;border:none;border-radius:6px;cursor:pointer">
              <input id="ts-color-hex" value="#1A6B3C" placeholder="#1A6B3C" maxlength="7"
                style="flex:1;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;font-family:monospace">
            </div>
          </div>
        </div>
        <div style="margin-bottom:12px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">TITRE *</label>
          <input id="ts-title" placeholder="Ex: Bienvenue dans Manager Wars !" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div style="margin-bottom:12px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">ORDRE (position dans le tutoriel)</label>
          <input id="ts-order" type="number" min="0" value="0" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:6px">CONTENU *</label>
          <!-- Toolbar -->
          <div id="ts-toolbar" style="display:flex;flex-wrap:wrap;gap:4px;padding:6px 8px;background:#f5f5f5;border:1.5px solid #ddd;border-bottom:none;border-radius:8px 8px 0 0">
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([c,u,_])=>`<button type="button" data-cmd="${u}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${c}</button>`).join("")}
            <button type="button" id="ts-insert-color" title="Couleur texte" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;cursor:pointer">🎨</button>
            <button type="button" id="ts-clear-format" title="Effacer la mise en forme" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;cursor:pointer">✕ Format</button>
          </div>
          <!-- Zone éditable -->
          <div id="ts-editor" contenteditable="true" spellcheck="true" style="
            min-height:140px;max-height:320px;overflow-y:auto;
            padding:12px;border:1.5px solid #ddd;border-radius:0 0 8px 8px;
            font-size:14px;line-height:1.7;color:#333;outline:none;background:#fff;
          "></div>
          <!-- Textarea caché pour compatibilité avec saveForm -->
          <textarea id="ts-content" style="display:none"></textarea>
          <div style="font-size:11px;color:#aaa;margin-top:4px">Utilise la barre d'outils ou écris directement dans l'éditeur.</div>
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">IMAGE (optionnel — fichiers tuto_* du dossier icons)</label>
          <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
            <input id="ts-image" placeholder="tuto_deck.png" style="flex:1;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
            <button id="ts-img-pick" class="btn btn-ghost btn-sm">📂 Choisir</button>
            <button id="ts-img-clear" class="btn btn-ghost btn-sm" style="color:#cc2222">✕</button>
          </div>
          <div id="ts-img-preview" style="display:none;text-align:center;margin-bottom:6px">
            <img id="ts-img-preview-el" style="max-height:120px;max-width:100%;border-radius:8px;border:1px solid #eee;object-fit:contain">
          </div>
          <div id="ts-img-picker-grid" style="display:none;margin-top:8px;background:#f9f9f9;border-radius:8px;padding:10px;border:1px solid #eee;max-height:200px;overflow-y:auto"></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
          <input type="checkbox" id="ts-active" checked style="width:16px;height:16px">
          <label for="ts-active" style="font-size:13px;font-weight:600">Visible (activée)</label>
        </div>
        <!-- Aperçu -->
        <div id="ts-preview-area" style="margin-bottom:16px"></div>
        <div style="display:flex;gap:10px">
          <button id="ts-preview-btn" class="btn btn-ghost" style="flex:1">👁️ Aperçu</button>
          <button id="ts-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="ts-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
          </div><!-- /ts-form-content -->
        </div><!-- /ts-form -->
      </div><!-- /colonne gauche -->

      <!-- Colonne droite : liste des étapes -->
      <div style="flex:1;overflow-y:auto">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
          <div>
            <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🎓 Tutoriel — Étapes</h2>
            <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
          </div>
          <div style="display:flex;gap:8px">
            <button id="ts-reset" class="btn btn-ghost btn-sm" style="color:#7a28b8" title="Réinitialiser tutorial_done pour tous les joueurs">🔄 Reset tutos</button>
            <button id="ts-add" class="btn btn-primary">+ Ajouter</button>
          </div>
        </div>

        <div id="ts-list" style="display:flex;flex-direction:column;gap:10px">
          ${(n||[]).length===0?`
            <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
              Aucune étape. Clique sur "+ Ajouter" pour commencer.
            </div>`:(n||[]).map(c=>ci(c)).join("")}
        </div>
      </div><!-- /colonne droite -->
    </div>`,(m=document.getElementById("ts-add"))==null||m.addEventListener("click",()=>dt(null,(n==null?void 0:n.length)||0)),(g=document.getElementById("ts-reset"))==null||g.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:c}=await k.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(c?"Erreur : "+c.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(h=document.getElementById("ts-cancel"))==null||h.addEventListener("click",jt),(E=document.getElementById("ts-save"))==null||E.addEventListener("click",()=>ui(e)),(s=document.getElementById("ts-preview-btn"))==null||s.addEventListener("click",pi);const t=document.getElementById("ts-editor"),i=()=>{const c=document.getElementById("ts-content");c&&t&&(c.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const r=()=>{document.activeElement!==t&&(t==null||t.focus())};(d=document.getElementById("ts-toolbar"))==null||d.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("mousedown",u=>{u.preventDefault(),r();const _=c.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(x=document.getElementById("ts-insert-color"))==null||x.addEventListener("mousedown",c=>{c.preventDefault(),r();const u=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");u&&(document.execCommand("foreColor",!1,u),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",c=>{c.preventDefault(),r(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const a=document.getElementById("ts-image"),v=document.getElementById("ts-img-preview"),$=document.getElementById("ts-img-preview-el"),w=document.getElementById("ts-img-picker-grid"),l=()=>{var u;const c=(u=a==null?void 0:a.value)==null?void 0:u.trim();if(c){const _="/";$.src=`${_}icons/${c}`,v.style.display="block"}else v.style.display="none"};a==null||a.addEventListener("input",l),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{a&&(a.value=""),v.style.display="none",w.style.display="none"}),(B=document.getElementById("ts-img-pick"))==null||B.addEventListener("click",async()=>{if(w.style.display!=="none"){w.style.display="none";return}w.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',w.style.display="block";try{const u=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(u)?u.filter(f=>f.name.startsWith("tuto_")):[];if(!_.length){w.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const p="/";w.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(f=>`
          <div data-pick="${f.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${p}icons/${f.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",w.querySelectorAll("[data-pick]").forEach(f=>{f.addEventListener("click",()=>{a&&(a.value=f.dataset.pick),l(),w.style.display="none"})})}catch(c){w.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+c.message+"</div>"}}),(o=document.getElementById("ts-color"))==null||o.addEventListener("input",c=>{const u=document.getElementById("ts-color-hex");u&&(u.value=c.target.value)}),(y=document.getElementById("ts-color-hex"))==null||y.addEventListener("input",c=>{const u=c.target.value;if(/^#[0-9a-fA-F]{6}$/.test(u)){const _=document.getElementById("ts-color");_&&(_.value=u)}}),e.querySelectorAll("[data-edit-row]").forEach(c=>{const u=(n||[]).find(_=>_.id===c.dataset.editRow);u&&c.addEventListener("click",()=>dt(u))}),e.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await k.from("tutorial_steps").delete().eq("id",c.dataset.delete),pe(e))})}),e.querySelectorAll("[data-toggle]").forEach(c=>{c.addEventListener("click",async()=>{const u=(n||[]).find(_=>_.id===c.dataset.toggle);u&&(await k.from("tutorial_steps").update({is_active:!u.is_active}).eq("id",u.id),pe(e))})}),e.querySelectorAll("[data-up]").forEach(c=>{c.addEventListener("click",async()=>{const u=n||[],_=u.findIndex(p=>p.id===c.dataset.up);_<=0||(await Promise.all([k.from("tutorial_steps").update({step_order:u[_-1].step_order}).eq("id",u[_].id),k.from("tutorial_steps").update({step_order:u[_].step_order}).eq("id",u[_-1].id)]),pe(e))})}),e.querySelectorAll("[data-down]").forEach(c=>{c.addEventListener("click",async()=>{const u=n||[],_=u.findIndex(p=>p.id===c.dataset.down);_<0||_>=u.length-1||(await Promise.all([k.from("tutorial_steps").update({step_order:u[_+1].step_order}).eq("id",u[_].id),k.from("tutorial_steps").update({step_order:u[_].step_order}).eq("id",u[_+1].id)]),pe(e))})})}function ci(e){return`
  <div data-edit-row="${e.id}" style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px;cursor:pointer">
    <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">${e.emoji}</div>
    <div style="width:10px;height:36px;border-radius:4px;flex-shrink:0;background:${e.color}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.title}</div>
      <div style="font-size:11px;color:#aaa;margin-top:2px">Ordre : ${e.step_order} · ${e.is_active?"🟢 Active":"🔴 Désactivée"}</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
      <button data-up="${e.id}" class="btn btn-ghost btn-sm" title="Monter" style="padding:4px 8px" onclick="event.stopPropagation()">↑</button>
      <button data-down="${e.id}" class="btn btn-ghost btn-sm" title="Descendre" style="padding:4px 8px" onclick="event.stopPropagation()">↓</button>
      <button data-toggle="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px" onclick="event.stopPropagation()">${e.is_active?"🔴 Désactiver":"🟢 Activer"}</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222;padding:4px 8px" onclick="event.stopPropagation()">🗑️</button>
    </div>
  </div>`}function dt(e,n=0){document.getElementById("ts-form-empty").style.display="none",document.getElementById("ts-form-content").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const r=(e==null?void 0:e.image_url)||"",a=document.getElementById("ts-image");a&&(a.value=r);const v=document.getElementById("ts-img-preview"),$=document.getElementById("ts-img-preview-el");if(r&&v&&$){const w="/";$.src=`${w}icons/${r}`,v.style.display="block"}else v&&(v.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function jt(){document.getElementById("ts-form-content").style.display="none",document.getElementById("ts-form-empty").style.display="block",document.getElementById("ts-preview-area").innerHTML=""}function pi(){var l,m;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",r=document.getElementById("ts-color-hex").value||"#1A6B3C",a=(m=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:m.trim(),$=a?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${a}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",w=document.getElementById("ts-preview-area");w.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${r}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${n}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${$}
        <div style="padding:${a?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${r};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,w.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.margin="6px 0"}),w.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),w.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"})}async function ui(e){var g,h;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),r=document.getElementById("ts-editor"),a=(r?r.innerHTML:document.getElementById("ts-content").value).trim(),v=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",$=parseInt(document.getElementById("ts-order").value)||0,w=document.getElementById("ts-active").checked;if(!i||!a){alert("Titre et contenu sont obligatoires.");return}const l={emoji:t,title:i,content:a,color:v,step_order:$,is_active:w,image_url:((h=(g=document.getElementById("ts-image"))==null?void 0:g.value)==null?void 0:h.trim())||null};let m;if(n?{error:m}=await k.from("tutorial_steps").update(l).eq("id",n):{error:m}=await k.from("tutorial_steps").insert(l),m){alert("Erreur : "+m.message);return}jt(),pe(e)}const Dt="/",Nt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function mi(e,n){await Se(e,n)}async function Se(e,n){var r,a;const[{data:t},{data:i}]=await Promise.all([k.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),k.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:10px;flex-wrap:wrap">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🏟️ Stades</h2>
        <div style="display:flex;gap:8px">
          <button id="st-gen-countries-btn" class="btn btn-ghost">🌍 Créer les stades Pays manquants</button>
          <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="st-list">
        ${(t||[]).length?(t||[]).map(v=>gi(v)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucun stade créé.</div>'}
      </div>
    </div>`,(r=document.getElementById("st-add-btn"))==null||r.addEventListener("click",()=>ct(null,i,e,n)),(a=document.getElementById("st-gen-countries-btn"))==null||a.addEventListener("click",async()=>{const{toast:v}=n,$=new Set((t||[]).filter(h=>!h.club_id&&h.country_code).map(h=>h.country_code)),w=Nt.filter(([h])=>!$.has(h));if(!w.length){v("Tous les pays ont déjà un stade.","info");return}if(!confirm(`Créer ${w.length} stade(s) "Pays" manquant(s) ?`))return;const l=w.map(([h,E])=>({name:`Stade ${E}`,club_id:null,country_code:h})),{data:m,error:g}=await k.from("stadium_definitions").insert(l).select();if(g){v("Erreur : "+g.message,"error");return}m!=null&&m.length&&await k.from("cards").insert(m.map(h=>({card_type:"stadium",stadium_id:h.id}))),v(`${(m==null?void 0:m.length)||0} stade(s) Pays créé(s) ✅`,"success"),Se(e,n)}),e.querySelectorAll("[data-edit-stadium]").forEach(v=>{v.addEventListener("click",()=>{const $=(t||[]).find(w=>w.id===v.dataset.editStadium);$&&ct($,i,e,n)})})}function gi(e){var r,a;let n=null;e.image_url?n=e.image_url.startsWith("http")?e.image_url:`${Dt}icons/${e.image_url}`:(r=e.club)!=null&&r.logo_url?n=e.club.logo_url:e.country_code&&(n=`https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/64.png`);const t=((a=e.club)==null?void 0:a.encoded_name)||e.country_code||"—",i=Oe(e.name,n,`${t}<br>+10 ⭐`,{width:140});return`<div data-edit-stadium="${e.id}" style="cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
    ${i}
  </div>`}function ct(e,n,t,i){var m,g,h;const{openModal:r,closeModal:a,toast:v}=i,$=`
    <div style="display:flex;gap:20px;flex-wrap:wrap">
      <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
        <div>
          <label>NOM DU STADE *</label>
          <input id="st-name" placeholder="Ex: Stade de France" value="${(e==null?void 0:e.name)||""}">
        </div>
        <div>
          <label>CLUB AFFILIÉ (optionnel)</label>
          <select id="st-club">
            <option value="">-- Aucun club (bonus pays) --</option>
            ${(n||[]).map(E=>`<option value="${E.id}" data-logo="${E.logo_url||""}" ${(e==null?void 0:e.club_id)===E.id?"selected":""}>${E.encoded_name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>PAYS (si pas de club)</label>
          <select id="st-country">
            <option value="">— Aucun pays —</option>
            ${Nt.map(([E,s])=>`<option value="${E}" ${(e==null?void 0:e.country_code)===E?"selected":""}>${s} (${E})</option>`).join("")}
          </select>
        </div>
        <div>
          <label>IMAGE (icône du stade)</label>
          <input id="st-image" placeholder="logo_club.png" value="${(e==null?void 0:e.image_url)||""}">
        </div>
      </div>
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:8px">
        <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Aperçu carte</div>
        <div id="st-preview-card" style="width:140px"></div>
      </div>
    </div>
    ${e?'<button id="st-delete" class="btn btn-danger btn-sm" style="margin-top:16px">🗑️ Supprimer ce stade</button>':""}
  `;r(e?`Modifier : ${e.name}`:"Nouveau stade",$,`
    <button id="st-cancel" class="btn btn-ghost">Annuler</button>
    <button id="st-save" class="btn btn-primary">Enregistrer</button>
  `);const l=()=>{var u,_,p,f,L,A,S;const E=((u=document.getElementById("st-name"))==null?void 0:u.value)||"NOM DU STADE",s=(p=(_=document.getElementById("st-image"))==null?void 0:_.value)==null?void 0:p.trim(),d=(L=(f=document.getElementById("st-country"))==null?void 0:f.value)==null?void 0:L.trim(),x=document.getElementById("st-club"),b=(x==null?void 0:x.selectedIndex)||0,I=x&&b>0?x.options[b].text:"",B=((S=(A=x==null?void 0:x.options[b])==null?void 0:A.getAttribute)==null?void 0:S.call(A,"data-logo"))||"";let o=null;s?o=s.startsWith("http")?s:`${Dt}icons/${s}`:B?o=B:d&&(o=`https://flagsapi.com/${d.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const y=I||d||"—",c=document.getElementById("st-preview-card");c&&(c.innerHTML=Oe(E,o,`${y}<br>+10 ⭐`,{width:140}))};l(),["st-name","st-club","st-country","st-image"].forEach(E=>{var s,d;(s=document.getElementById(E))==null||s.addEventListener("input",l),(d=document.getElementById(E))==null||d.addEventListener("change",l)}),(m=document.getElementById("st-cancel"))==null||m.addEventListener("click",()=>a()),(g=document.getElementById("st-save"))==null||g.addEventListener("click",async()=>{const E=document.getElementById("st-name").value.trim(),s=document.getElementById("st-club").value||null,d=document.getElementById("st-country").value.trim().toUpperCase()||null,x=document.getElementById("st-image").value.trim()||null;if(!E){v("Le nom est obligatoire","error");return}const b={name:E,club_id:s,country_code:d,image_url:x},{error:I}=e?await k.from("stadium_definitions").update(b).eq("id",e.id):await k.from("stadium_definitions").insert(b);if(I){v("Erreur : "+I.message,"error");return}v(e?"Stade modifié ✅":"Stade créé ✅","success"),a(),Se(t,i)}),(h=document.getElementById("st-delete"))==null||h.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await k.from("stadium_definitions").delete().eq("id",e.id),v("Stade supprimé","success"),a(),Se(t,i))})}const ie=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],fi=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}],ne=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],pt=["GK","DEF","MIL","ATT"];async function yi(e,n){await Je(e,n)}async function Je(e,n){var i;const{data:t}=await k.from("gc_definitions").select("*").order("sort_order").order("created_at");e.innerHTML=`
    <div style="padding:20px;max-width:1100px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">⚡ Game Changers</h2>
        <button id="gc-add-btn" class="btn btn-primary">+ Nouvelle carte</button>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:14px" id="gc-list">
        ${(t||[]).length?(t||[]).map(r=>bi(r)).join(""):'<div style="color:var(--tile-fg-dim);padding:24px;text-align:center;width:100%">Aucune carte Game Changer.</div>'}
      </div>
    </div>`,(i=document.getElementById("gc-add-btn"))==null||i.addEventListener("click",()=>ut(null,e,n)),e.querySelectorAll("[data-edit-gc]").forEach(r=>{r.addEventListener("click",()=>{const a=(t||[]).find(v=>v.id===r.dataset.editGc);a&&ut(a,e,n)})}),e.querySelectorAll(".btn-del-gc").forEach(r=>{r.addEventListener("click",async a=>{a.stopPropagation(),confirm("Supprimer cette carte Game Changer ?")&&(await k.from("gc_definitions").delete().eq("id",r.dataset.del),Je(e,n))})})}function bi(e){const n=ie.find(r=>r.value===e.gc_type)||ie[0],t=e.image_url?`/icons/${e.image_url}`:null,i=Ie(e.name||"?",t,n.label.split(" ")[0],e.effect||"",{width:130});return`<div data-edit-gc="${e.id}" style="position:relative;cursor:pointer">
    ${i}
    <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
      <button class="btn-del-gc" data-del="${e.id}"
        style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0">✕</button>
    </div>
    ${e.is_active?"":'<div style="position:absolute;top:4px;right:4px;z-index:10;background:#555;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px">INACTIF</div>'}
  </div>`}function ut(e,n,t){var h,E,s,d,x;const{openModal:i,closeModal:r,toast:a}=t,v=!e,$=e||{name:"",gc_type:"game_changer",color:"purple",effect:"",image_url:"",sort_order:0,is_active:!0,effect_type:"BOOST_STAT",effect_params:{}},w=(()=>{const b=$.effect_params||{},I=ne.find(B=>B.value===($.effect_type||"BOOST_STAT"))||ne[0];return`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${I.hasValue?`<div>
        <label>VALEUR (+N)</label>
        <input id="gc-p-value" type="number" min="1" max="5" value="${b.value||2}">
      </div>`:""}
      ${I.hasCount?`<div>
        <label>NB JOUEURS</label>
        <input id="gc-p-count" type="number" min="1" max="11" value="${b.count||1}">
      </div>`:""}
      ${I.hasTarget?`<div>
        <label>CIBLE</label>
        <select id="gc-p-target">
          <option value="home" ${(b.target||"home")==="home"?"selected":""}>Mon équipe</option>
          <option value="opponent" ${b.target==="opponent"?"selected":""}>Équipe adverse</option>
        </select>
      </div>`:""}
      ${I.hasRoles?`<div>
        <label>POSTES CIBLÉS</label>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${pt.map(B=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555">
            <input type="checkbox" class="gc-p-role" value="${B}" ${!b.roles||b.roles.includes(B)?"checked":""}> ${B}
          </label>`).join("")}
        </div>
      </div>`:""}
    </div>`})(),l=`
    <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
      <div id="gc-modal-preview">${Ie($.name||"?",$.image_url?`/icons/${$.image_url}`:null,(ie.find(b=>b.value===$.gc_type)||ie[0]).label.split(" ")[0],$.effect||"",{width:150})}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>NOM</label>
        <input id="gc-name" value="${$.name}">
      </div>
      <div>
        <label>EFFET / DESCRIPTION</label>
        <textarea id="gc-effect" rows="3">${$.effect||""}</textarea>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>TYPE</label>
          <select id="gc-type">
            ${ie.map(b=>`<option value="${b.value}" ${$.gc_type===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>COULEUR</label>
          <select id="gc-color">
            ${fi.map(b=>`<option value="${b.value}" ${$.color===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
      </div>
      <div>
        <label>IMAGE (public/icons/gamechanger-*)</label>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
          <input id="gc-image-url" value="${$.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1">
          <button id="btn-pick-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <input type="file" id="gc-image-upload" accept="image/png,image/jpeg,image/webp" style="flex:1;padding:6px;border:1px solid #ddd;border-radius:6px;background:#f9f9f9">
          <button id="btn-upload-gc-icon" class="btn btn-primary btn-sm" style="white-space:nowrap;flex-shrink:0">📤 Upload</button>
        </div>
        <div id="gc-upload-status" style="font-size:11px;color:#666;margin-top:6px;display:none"></div>
        <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>ORDRE</label>
          <input id="gc-sort" type="number" value="${$.sort_order||0}">
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
          <input type="checkbox" id="gc-active" ${$.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="gc-active" style="cursor:pointer;font-weight:600;text-transform:none">Actif</label>
        </div>
      </div>
      <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
        <label style="color:#7a28b8">EFFET EN JEU</label>
        <div>
          <label>TYPE D'EFFET</label>
          <select id="gc-effect-type" style="margin-bottom:10px">
            ${ne.map(b=>`<option value="${b.value}" ${($.effect_type||"BOOST_STAT")===b.value?"selected":""}>${b.label}</option>`).join("")}
          </select>
        </div>
        <div id="gc-params-wrap">${w}</div>
      </div>
    </div>
  `;i(v?"Nouvelle carte Game Changer":`Modifier : ${$.name}`,l,`
    <button id="gc-cancel" class="btn btn-ghost">Annuler</button>
    <button id="gc-save" class="btn btn-primary">💾 Enregistrer</button>
  `);const g=()=>{var u,_,p,f,L;const b=((u=document.getElementById("gc-name"))==null?void 0:u.value)||"?",I=((_=document.getElementById("gc-effect"))==null?void 0:_.value)||"",B=((p=document.getElementById("gc-type"))==null?void 0:p.value)||"game_changer",o=(L=(f=document.getElementById("gc-image-url"))==null?void 0:f.value)==null?void 0:L.trim(),y=ie.find(A=>A.value===B)||ie[0],c=document.getElementById("gc-modal-preview");c&&(c.innerHTML=Ie(b,o?`/icons/${o}`:null,y.label.split(" ")[0],I,{width:150}))};["gc-name","gc-effect","gc-type","gc-image-url"].forEach(b=>{var I,B;(I=document.getElementById(b))==null||I.addEventListener("input",g),(B=document.getElementById(b))==null||B.addEventListener("change",g)}),(h=document.getElementById("gc-effect-type"))==null||h.addEventListener("change",()=>{const b=document.getElementById("gc-effect-type").value,I=ne.find(o=>o.value===b)||ne[0],B=document.getElementById("gc-params-wrap");B.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${I.hasValue?'<div><label>VALEUR (+N)</label><input id="gc-p-value" type="number" min="1" max="5" value="2"></div>':""}
      ${I.hasCount?'<div><label>NB JOUEURS</label><input id="gc-p-count" type="number" min="1" max="11" value="1"></div>':""}
      ${I.hasTarget?'<div><label>CIBLE</label><select id="gc-p-target"><option value="home">Mon équipe</option><option value="opponent">Équipe adverse</option></select></div>':""}
      ${I.hasRoles?`<div><label>POSTES CIBLÉS</label><div style="display:flex;gap:4px;flex-wrap:wrap">${pt.map(o=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer;color:#555"><input type="checkbox" class="gc-p-role" value="${o}" checked> ${o}</label>`).join("")}</div></div>`:""}
    </div>`}),(E=document.getElementById("btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var I;const b=document.getElementById("gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const o=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(o)?o.filter(u=>u.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(u.name)):[];if(!y.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const c=((I=document.getElementById("gc-image-url"))==null?void 0:I.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
        ${y.map(u=>`
        <div class="gc-icon-item" data-name="${u.name}"
          style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${u.name===c?"#7a28b8":"#ddd"};background:${u.name===c?"#f5f0ff":"#fff"}">
          <img src="/icons/${u.name}" style="height:44px;width:100%;object-fit:contain">
          <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
        </div>`).join("")}
      </div>`,b.querySelectorAll(".gc-icon-item").forEach(u=>{u.addEventListener("click",()=>{const _=document.getElementById("gc-image-url");_&&(_.value=u.dataset.name),b.style.display="none",g()})})}catch(B){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${B.message}</div>`}}}),(s=document.getElementById("btn-upload-gc-icon"))==null||s.addEventListener("click",async()=>{var c;const b=document.getElementById("gc-image-upload"),I=(c=b==null?void 0:b.files)==null?void 0:c[0];if(!I){a("Choisir une image d'abord","error");return}const B=document.getElementById("gc-upload-status"),o=document.getElementById("btn-upload-gc-icon"),y=o.textContent;try{B.style.display="block",B.textContent="⏳ Upload en cours...",B.style.color="#666",o.disabled=!0;const u=I.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg","webp"].includes(u))throw new Error("Format invalide (PNG, JPG, WebP)");const p=Date.now(),L=`gamechanger-${I.name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9-]/gi,"_").toLowerCase()}-${p}.${u}`,{data:A,error:S}=await k.storage.from("gc-icons").upload(L,I,{upsert:!1});if(S)throw S;document.getElementById("gc-image-url").value=L,g(),B.textContent="✅ Image uploadée avec succès",B.style.color="#27ae60",o.disabled=!1,o.textContent=y,b.value="",setTimeout(()=>{B.style.display="none"},3e3)}catch(u){B.textContent=`❌ Erreur : ${u.message}`,B.style.color="#c0392b",o.disabled=!1,o.textContent=y}}),(d=document.getElementById("gc-cancel"))==null||d.addEventListener("click",()=>r()),(x=document.getElementById("gc-save"))==null||x.addEventListener("click",async()=>{var c,u,_,p,f,L,A,S,T,M,D,P,O,C;const b=ne.find(z=>{var R;return z.value===(((R=document.getElementById("gc-effect-type"))==null?void 0:R.value)||"BOOST_STAT")})||ne[0],I=b.hasRoles?[...document.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,B={...b.hasValue?{value:Number((c=document.getElementById("gc-p-value"))==null?void 0:c.value)||2}:{},...b.hasCount?{count:Number((u=document.getElementById("gc-p-count"))==null?void 0:u.value)||1}:{},...b.hasTarget?{target:((_=document.getElementById("gc-p-target"))==null?void 0:_.value)||"home"}:{},...b.hasRoles?{roles:I!=null&&I.length?I:null}:{}},o={name:((f=(p=document.getElementById("gc-name"))==null?void 0:p.value)==null?void 0:f.trim())||"",effect:((A=(L=document.getElementById("gc-effect"))==null?void 0:L.value)==null?void 0:A.trim())||null,image_url:((T=(S=document.getElementById("gc-image-url"))==null?void 0:S.value)==null?void 0:T.trim())||null,gc_type:((M=document.getElementById("gc-type"))==null?void 0:M.value)||"game_changer",color:((D=document.getElementById("gc-color"))==null?void 0:D.value)||"purple",sort_order:Number((P=document.getElementById("gc-sort"))==null?void 0:P.value)||0,is_active:((O=document.getElementById("gc-active"))==null?void 0:O.checked)??!0,effect_type:((C=document.getElementById("gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT",effect_params:B};if(!o.name){a("Le nom est obligatoire","error");return}const{error:y}=v?await k.from("gc_definitions").insert(o):await k.from("gc_definitions").update(o).eq("id",$.id);if(y){a(y.message,"error");return}a(v?"Carte créée ✅":"Carte modifiée ✅","success"),r(),Je(n,t)})}async function vi(e,{toast:n,openModal:t,closeModal:i}){await V(e,{toast:n,openModal:t,closeModal:i})}async function V(e,n){var c,u,_;const{toast:t,openModal:i,closeModal:r}=n,[{data:a,error:v},{data:$},{data:w},{data:l}]=await Promise.all([k.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),k.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1),k.from("season_reward_tiers").select("*").order("rank_min"),k.from("booster_configs").select("id,name").order("sort_order")]);if(v){e.innerHTML=`<p style="color:red">${v.message}</p>`;return}const m=a||[],g=m.find(p=>p.is_active),h=($||[]).filter(p=>(p.placement_matches||0)>=1),E=h.filter(p=>(p.placement_matches||0)>=10),s=be.map(p=>p.id),d=Object.fromEntries(be.map(p=>[p.id,p.label])),x=Object.fromEntries(be.map(p=>[p.id,p.color])),b=Object.fromEntries(be.map(p=>[p.id,p.emoji])),I={};s.forEach(p=>{I[p]=0}),E.forEach(p=>{const f=bt(p.mmr??450).id;I[f]!==void 0&&I[f]++});const B=E.length?Math.round(E.reduce((p,f)=>p+(f.mmr||450),0)/E.length):0;function o(p){return p?new Date(p).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function y(p){const f=new Date;return p.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(p.end_at)<f?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${g?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${g.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${h.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${E.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${B}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(g.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${E.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${s.map(p=>{const f=I[p],L=E.length>0?Math.round(f/E.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${b[p]} ${d[p]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${L}%;background:${x[p]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${f} (${L}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${m.length})</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-yellow" id="start-new-season-btn">🚀 Démarrer une nouvelle saison</button>
          <button class="btn btn-primary" id="create-season-btn">+ Nouvelle saison (sans reset)</button>
        </div>
      </div>

      <!-- Liste des saisons -->
      <div class="card-panel">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Durée</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="seasons-tbody">
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(p=>{const f=Math.round((new Date(p.end_at)-new Date(p.start_at))/864e5),L=new Date(p.end_at)<new Date&&!p.is_active;return`
                    <tr>
                      <td><b>${p.name}</b></td>
                      <td style="font-size:12px">${o(p.start_at)}</td>
                      <td style="font-size:12px">${o(p.end_at)}</td>
                      <td style="font-size:12px">${f} jours</td>
                      <td>${y(p)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${p.id}">✏️ Modifier</button>
                        <button class="btn btn-ghost btn-sm" data-rewards-for="${p.id}" style="color:#D4A017;border-color:#D4A017">🏆 Récompenses</button>
                        ${p.is_active?"":`<button class="btn btn-yellow btn-sm" data-launch="${p.id}">▶ Lancer la saison</button>`}
                        ${p.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${p.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${p.id}">▶ Activer</button>`}
                        ${L?`<button class="btn btn-danger btn-sm" data-delete="${p.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Récompenses de saison par palier de classement -->
      <div class="card-panel" id="rewards-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:8px">
          <div style="font-weight:700;font-size:14px">🏆 Récompenses de saison</div>
          <button id="add-reward-tier-btn" class="btn btn-primary btn-sm" ${m.length?"":`disabled title="Crée d'abord une saison"`}>+ Ajouter un palier</button>
        </div>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-bottom:12px">
          Paliers de classement (TOP 1, TOP 3, TOP 10...) associés à une saison Ranked. Chaque palier peut donner des crédits,
          des cartes joueur spécifiques et/ou des boosters, à partir d'une date d'activation optionnelle.
        </div>
        ${m.length?`
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Saison</th><th>Palier</th><th>Classement</th><th style="text-align:right">Crédits</th><th style="text-align:center">Cartes</th><th style="text-align:center">Boosters</th><th>Activation</th><th>Statut</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${(w||[]).map(p=>{var A;const f=!p.activate_at||new Date(p.activate_at)<=new Date;return`<tr>
                  <td style="font-size:12px">${((A=m.find(S=>S.id===p.season_id))==null?void 0:A.name)||"—"}</td>
                  <td><b>${p.label}</b></td>
                  <td>${p.rank_min===p.rank_max?`#${p.rank_min}`:`#${p.rank_min}–${p.rank_max}`}</td>
                  <td style="text-align:right">${(p.credits||0).toLocaleString("fr")}</td>
                  <td style="text-align:center">${(p.player_ids||[]).length}</td>
                  <td style="text-align:center">${(p.booster_config_ids||[]).length}</td>
                  <td style="font-size:12px">${p.activate_at?o(p.activate_at):"Immédiat"}</td>
                  <td>
                    ${p.distributed_at?`<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Distribué le ${o(p.distributed_at)}</span>`:f?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">● Prêt</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">⏳ Programmé</span>'}
                  </td>
                  <td style="white-space:nowrap">
                    <button class="btn btn-ghost btn-sm" data-edit-tier="${p.id}">✏️</button>
                    <button class="btn btn-primary btn-sm" data-distribute-tier="${p.id}" ${f?"":"disabled"}>🎁 Distribuer</button>
                    <button class="btn btn-danger btn-sm" data-delete-tier="${p.id}">🗑️</button>
                  </td>
                </tr>`}).join("")||'<tr><td colspan="9" style="text-align:center;color:var(--tile-fg-dim);padding:16px">Aucun palier configuré.</td></tr>'}
            </tbody>
          </table>
        </div>`:'<div style="color:var(--tile-fg-dim);font-size:13px;padding:10px">Crée une saison pour configurer ses récompenses.</div>'}
      </div>
    </div>`,(c=document.getElementById("create-season-btn"))==null||c.addEventListener("click",()=>{mt(null,{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})}),(u=document.getElementById("start-new-season-btn"))==null||u.addEventListener("click",()=>{xi(g,{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})}),e.querySelectorAll("[data-edit]").forEach(p=>{const f=m.find(L=>L.id==p.dataset.edit);p.addEventListener("click",()=>{mt(f,{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(p=>{p.addEventListener("click",async()=>{const f=parseInt(p.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:L}=await k.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(L){t(L.message,"error");return}const{error:A}=await k.from("ranked_seasons").update({is_active:!0}).eq("id",f);if(A){t(A.message,"error");return}await k.from("users").update({current_season_id:f}).gt("placement_matches",0),t("Saison activée ✅","success"),V(e,n)})}),e.querySelectorAll("[data-rewards-for]").forEach(p=>{p.addEventListener("click",()=>{var A;const f=parseInt(p.dataset.rewardsFor);(A=document.getElementById("rewards-section"))==null||A.scrollIntoView({behavior:"smooth",block:"start"});const L=m.find(S=>S.id===f);Me(null,m,L,l||[],{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})})}),e.querySelectorAll("[data-launch]").forEach(p=>{p.addEventListener("click",async()=>{const f=parseInt(p.dataset.launch),L=m.find(T=>T.id===f);if(!confirm(`Lancer "${L==null?void 0:L.name}" ?

Ceci va :
• Journaliser le classement actuel dans l'historique
• Recalculer le MMR de TOUS les joueurs (reset doux)
• Activer cette saison

Action irréversible. Continuer ?`))return;p.disabled=!0,p.textContent="⏳ Lancement...";const{data:A,error:S}=await k.rpc("admin_launch_season",{p_season_id:f});if(p.disabled=!1,p.textContent="▶ Lancer la saison",S){t(S.message,"error");return}if(!(A!=null&&A.success)){t((A==null?void 0:A.error)||"Échec du lancement","error");return}t(`Saison lancée ✅ (${A.logged} classement(s) archivé(s), ${A.reset} joueur(s) recalculé(s))`,"success"),V(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:f}=await k.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(p.dataset.deactivate));if(f){t(f.message,"error");return}t("Saison désactivée","success"),V(e,n)})}),e.querySelectorAll("[data-delete]").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:f}=await k.from("ranked_seasons").delete().eq("id",parseInt(p.dataset.delete));if(f){t(f.message,"error");return}t("Saison supprimée","success"),V(e,n)})}),(_=document.getElementById("add-reward-tier-btn"))==null||_.addEventListener("click",()=>{Me(null,m,g,l||[],{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})}),e.querySelectorAll("[data-edit-tier]").forEach(p=>{const f=(w||[]).find(L=>L.id===p.dataset.editTier);p.addEventListener("click",()=>{Me(f,m,g,l||[],{toast:t,openModal:i,closeModal:r,reload:()=>V(e,n)})})}),e.querySelectorAll("[data-distribute-tier]").forEach(p=>{p.addEventListener("click",async()=>{const f=(w||[]).find(S=>S.id===p.dataset.distributeTier);if(!confirm(`Distribuer les récompenses du palier "${f==null?void 0:f.label}" à tous les joueurs concernés ?`))return;p.disabled=!0,p.textContent="⏳...";const{data:L,error:A}=await k.rpc("admin_distribute_season_reward",{p_tier_id:p.dataset.distributeTier});if(A){t(A.message,"error"),p.disabled=!1,p.textContent="🎁 Distribuer";return}if(!(L!=null&&L.success)){t((L==null?void 0:L.error)||"Échec de la distribution","error"),p.disabled=!1,p.textContent="🎁 Distribuer";return}t(`Récompenses distribuées à ${L.rewarded} joueur(s) ✅`,"success"),V(e,n)})}),e.querySelectorAll("[data-delete-tier]").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Supprimer ce palier de récompense ?"))return;const{error:f}=await k.from("season_reward_tiers").delete().eq("id",p.dataset.deleteTier);if(f){t(f.message,"error");return}t("Palier supprimé","success"),V(e,n)})})}function Me(e,n,t,i,{toast:r,openModal:a,closeModal:v,reload:$}){var d,x,b,I,B;const w=!!e,l=(e==null?void 0:e.season_id)??(t==null?void 0:t.id)??((d=n[0])==null?void 0:d.id)??null;let m=[];const g=o=>{if(!o)return"";const y=new Date(o);return new Date(y.getTime()-y.getTimezoneOffset()*6e4).toISOString().slice(0,16)},h=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>SAISON RANKED</label>
        <select id="rt-season">
          ${n.map(o=>`<option value="${o.id}" ${o.id===l?"selected":""}>${o.name}${o.is_active?" (active)":""}</option>`).join("")}
        </select>
      </div>
      <div>
        <label>LIBELLÉ</label>
        <input id="rt-label" value="${(e==null?void 0:e.label)||""}" placeholder="Ex: TOP 1, TOP 10...">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>CLASSEMENT MIN</label>
          <input id="rt-rank-min" type="number" min="1" value="${(e==null?void 0:e.rank_min)??1}">
        </div>
        <div>
          <label>CLASSEMENT MAX</label>
          <input id="rt-rank-max" type="number" min="1" value="${(e==null?void 0:e.rank_max)??1}">
        </div>
      </div>
      <div>
        <label>CRÉDITS OFFERTS</label>
        <input id="rt-credits" type="number" min="0" value="${(e==null?void 0:e.credits)??0}">
      </div>
      <div>
        <label>DATE D'ACTIVATION (optionnel — vide = immédiat)</label>
        <input id="rt-activate-at" type="datetime-local" value="${g(e==null?void 0:e.activate_at)}">
      </div>
      <div>
        <label>BOOSTERS OFFERTS</label>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:140px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:8px">
          ${i.length?i.map(o=>`
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
              <input type="checkbox" class="rt-booster-cb" value="${o.id}" ${((e==null?void 0:e.booster_config_ids)||[]).includes(o.id)?"checked":""}>
              ${o.name}
            </label>`).join(""):'<div style="color:#999;font-size:12px">Aucun booster configuré.</div>'}
        </div>
      </div>
      <div>
        <label>CARTES JOUEUR SPÉCIFIQUES GARANTIES</label>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="rt-player-search" placeholder="Rechercher un joueur par nom..." style="flex:1">
          <button id="rt-player-search-btn" class="btn btn-ghost btn-sm" style="white-space:nowrap">🔍 Chercher</button>
        </div>
        <div id="rt-player-results" style="display:none;flex-direction:column;gap:4px;max-height:120px;overflow-y:auto;background:#f7f7f7;border-radius:8px;padding:6px;margin-bottom:8px"></div>
        <div id="rt-player-chips" style="display:flex;flex-wrap:wrap;gap:6px"></div>
      </div>
      <div id="rt-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;a(w?`Modifier : ${e.label}`:"Nouveau palier de récompense",h,`
    <button id="rt-cancel" class="btn btn-ghost">Annuler</button>
    <button id="rt-save" class="btn btn-primary">💾 Enregistrer</button>
  `);function s(){const o=document.getElementById("rt-player-chips");o&&(o.innerHTML=m.map(y=>`
      <span style="display:inline-flex;align-items:center;gap:6px;background:#1A6B3C;color:#fff;font-size:12px;font-weight:700;padding:4px 8px;border-radius:14px">
        ${y.label}
        <button data-remove-player="${y.id}" style="background:none;border:none;color:#fff;cursor:pointer;font-size:12px;padding:0">✕</button>
      </span>`).join(""),o.querySelectorAll("[data-remove-player]").forEach(y=>{y.addEventListener("click",()=>{m=m.filter(c=>c.id!==y.dataset.removePlayer),s()})}))}(x=e==null?void 0:e.player_ids)!=null&&x.length&&k.from("players").select("id,firstname,surname_real").in("id",e.player_ids).then(({data:o})=>{m=(o||[]).map(y=>({id:y.id,label:`${y.firstname} ${y.surname_real}`})),s()}),(b=document.getElementById("rt-player-search-btn"))==null||b.addEventListener("click",async()=>{const o=document.getElementById("rt-player-search").value.trim();if(o.length<2)return;const{data:y}=await k.from("players").select("id,firstname,surname_real,rarity").or(`firstname.ilike.%${o}%,surname_real.ilike.%${o}%`).limit(10),c=document.getElementById("rt-player-results");if(!(y!=null&&y.length)){c.style.display="flex",c.innerHTML='<div style="color:#999;font-size:12px;padding:4px">Aucun résultat.</div>';return}c.style.display="flex",c.innerHTML=y.map(u=>`
      <div data-add-player="${u.id}" data-label="${u.firstname} ${u.surname_real}" style="cursor:pointer;padding:6px 8px;border-radius:6px;font-size:13px;color:#333" onmouseover="this.style.background='#eee'" onmouseout="this.style.background=''">
        ${u.firstname} ${u.surname_real} <span style="color:#999;font-size:11px">(${u.rarity})</span>
      </div>`).join(""),c.querySelectorAll("[data-add-player]").forEach(u=>{u.addEventListener("click",()=>{const _=u.dataset.addPlayer;m.some(p=>p.id===_)||m.push({id:_,label:u.dataset.label}),s(),c.style.display="none",document.getElementById("rt-player-search").value=""})})}),(I=document.getElementById("rt-cancel"))==null||I.addEventListener("click",()=>v()),(B=document.getElementById("rt-save"))==null||B.addEventListener("click",async()=>{const o=document.getElementById("rt-error"),y=parseInt(document.getElementById("rt-season").value),c=document.getElementById("rt-label").value.trim(),u=parseInt(document.getElementById("rt-rank-min").value)||1,_=parseInt(document.getElementById("rt-rank-max").value)||1,p=parseInt(document.getElementById("rt-credits").value)||0,f=document.getElementById("rt-activate-at").value,L=f?new Date(f).toISOString():null,A=[...document.querySelectorAll(".rt-booster-cb:checked")].map(M=>M.value);if(!c){o.textContent="Le libellé est obligatoire.";return}if(u>_){o.textContent="Le classement min doit être ≤ au max.";return}if(!y){o.textContent="Choisis une saison.";return}const S={season_id:y,label:c,rank_min:u,rank_max:_,credits:p,booster_config_ids:A,player_ids:m.map(M=>M.id),activate_at:L},{error:T}=w?await k.from("season_reward_tiers").update(S).eq("id",e.id):await k.from("season_reward_tiers").insert(S);if(T){o.textContent=T.message;return}r(w?"Palier modifié ✅":"Palier créé ✅","success"),v(),$()})}function xi(e,{toast:n,openModal:t,closeModal:i,reload:r}){var m,g;const a=new Date,v=new Date(a.getTime()+30*864e5),$=h=>h.toISOString().slice(0,10),w=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="background:#fff3cd;border:1.5px solid #e6a817;border-radius:10px;padding:12px 14px;color:#7a5c00;font-size:13px;line-height:1.5">
        ⚠️ <b>Action irréversible.</b> ${e?`La saison actuelle ("${e.name}") sera clôturée et `:""}
        le MMR de <b>tous les joueurs</b> sera recalculé (compression à 50% vers la moyenne 1000, RD remis à 350,
        matchs de placement remis à 0). Les statistiques de carrière (V/N/D) ne sont pas affectées.
      </div>
      <div>
        <label>NOM DE LA SAISON</label>
        <input id="sns-name" placeholder="Ex: Saison 2">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>DATE DE DÉBUT</label>
          <input id="sns-start" type="date" value="${$(a)}">
        </div>
        <div>
          <label>DATE DE FIN</label>
          <input id="sns-end" type="date" value="${$(v)}">
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;color:#333">
        <input type="checkbox" id="sns-confirm">
        Je comprends que cette action va recalculer le MMR de tous les joueurs et ne peut pas être annulée.
      </label>
      <div id="sns-error" style="font-size:12px;color:#ff6b6b;min-height:14px"></div>
    </div>
  `;t("Démarrer une nouvelle saison",w,`
    <button id="sns-cancel" class="btn btn-ghost">Annuler</button>
    <button id="sns-launch" class="btn btn-primary">🚀 Démarrer la saison</button>
  `),(m=document.getElementById("sns-cancel"))==null||m.addEventListener("click",()=>i()),(g=document.getElementById("sns-launch"))==null||g.addEventListener("click",async()=>{const h=document.getElementById("sns-error"),E=document.getElementById("sns-name").value.trim(),s=document.getElementById("sns-start").value,d=document.getElementById("sns-end").value,x=document.getElementById("sns-confirm").checked;if(!E){h.textContent="Le nom de la saison est requis.";return}if(!s||!d){h.textContent="Les deux dates sont requises.";return}if(new Date(s)>=new Date(d)){h.textContent="La date de fin doit être après la date de début.";return}if(!x){h.textContent="Coche la case de confirmation pour continuer.";return}const b=document.getElementById("sns-launch");b.disabled=!0,b.textContent="⏳ Recalcul en cours...";const{data:I,error:B}=await k.rpc("admin_start_new_season",{p_name:E,p_start_at:new Date(s).toISOString(),p_end_at:new Date(d).toISOString()});if(b.disabled=!1,b.textContent="🚀 Démarrer la saison",B){h.textContent=B.message;return}if(!(I!=null&&I.success)){h.textContent=(I==null?void 0:I.error)||"Échec de l'opération.";return}n(`Nouvelle saison démarrée ✅ (${I.users_reset} joueur(s) recalculé(s))`,"success"),i(),r()})}function mt(e,{toast:n,openModal:t,closeModal:i,reload:r}){const a=!!e,v=new Date().toISOString().slice(0,16),$=new Date(Date.now()+90*864e5).toISOString().slice(0,16),w=e?new Date(e.start_at).toISOString().slice(0,16):v,l=e?new Date(e.end_at).toISOString().slice(0,16):$,m=(e==null?void 0:e.name)||"";t(a?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${m}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${w}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${l}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${a?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function g(){var x,b;const h=(x=document.getElementById("season-start"))==null?void 0:x.value,E=(b=document.getElementById("season-end"))==null?void 0:b.value,s=document.getElementById("season-duration");if(!h||!E||!s)return;const d=Math.round((new Date(E)-new Date(h))/864e5);s.textContent=d>0?`Durée : ${d} jour${d>1?"s":""}`:"⚠️ La fin doit être après le début",s.style.color=d>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var h,E,s;(h=document.getElementById("season-start"))==null||h.addEventListener("input",g),(E=document.getElementById("season-end"))==null||E.addEventListener("input",g),g(),(s=document.getElementById("season-save-btn"))==null||s.addEventListener("click",async()=>{var c,u,_;const d=(c=document.getElementById("season-name"))==null?void 0:c.value.trim(),x=(u=document.getElementById("season-start"))==null?void 0:u.value,b=(_=document.getElementById("season-end"))==null?void 0:_.value,I=document.getElementById("season-error");if(!d){I.textContent="Le nom est requis.";return}if(!x){I.textContent="La date de début est requise.";return}if(!b){I.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(x)){I.textContent="La date de fin doit être après le début.";return}const B=document.getElementById("season-save-btn");B.disabled=!0,B.textContent="Enregistrement…";const o={name:d,start_at:new Date(x).toISOString(),end_at:new Date(b).toISOString()};let y;if(a?{error:y}=await k.from("ranked_seasons").update(o).eq("id",e.id):{error:y}=await k.from("ranked_seasons").insert({...o,is_active:!1}),y){I.textContent=y.message,B.disabled=!1,B.textContent=a?"💾 Enregistrer":"✅ Créer la saison";return}n(a?"Saison modifiée ✅":"Saison créée ✅","success"),i(),r()})},50)}async function Pe(e,n){var w;const{toast:t}=n,{data:i,error:r}=await k.from("solo_levels").select("*").order("level_number");if(r){e.innerHTML=`<p style="color:var(--danger)">${r.message}</p>`;return}const a=l=>`
    <tr data-row="${l.id}">
      <td style="padding:4px 8px;text-align:center">
        <input data-field="level_number" data-id="${l.id}" type="number" min="1" value="${l.level_number}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="target_note_avg" data-id="${l.id}" type="number" min="0" max="999" step="0.5" value="${l.target_note_avg}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_jaune" data-id="${l.id}" type="number" min="0" value="${l.nb_liens_jaune}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_liens_vert" data-id="${l.id}" type="number" min="0" value="${l.nb_liens_vert}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="nb_joueurs_stade" data-id="${l.id}" type="number" min="0" max="16" value="${l.nb_joueurs_stade}" style="width:100%;padding:6px;text-align:center;font-size:13px">
      </td>
      <td style="padding:4px 8px">
        <input data-field="reward_credits" data-id="${l.id}" type="number" min="0" value="${l.reward_credits}" style="width:100%;padding:6px;text-align:right;font-size:13px">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <input data-field="is_active" data-id="${l.id}" type="checkbox" ${l.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
      </td>
      <td style="text-align:center;padding:4px 8px">
        <button class="btn btn-danger btn-sm" data-del-row="${l.id}">🗑️</button>
      </td>
    </tr>`;e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <h2 style="font-size:20px;font-weight:900;color:var(--tile-fg-on-page)">🎮 Solo Mode — Niveaux</h2>
        <div style="font-size:12px;color:var(--tile-fg-dim);margin-top:2px">
          Chaque niveau se débloque après victoire sur le précédent. Le choix des cartes précises reste piloté par l'IA ;
          ces paramètres définissent seulement le profil global de l'adversaire.
        </div>
      </div>
      <button id="solo-add-row" class="btn btn-primary">+ Ajouter un niveau</button>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="text-align:center">Niveau</th>
              <th>Note globale visée<br><span style="font-weight:400;font-size:10px">(moyenne / 16 joueurs)</span></th>
              <th style="text-align:center">Liens jaunes</th>
              <th style="text-align:center">Liens verts</th>
              <th style="text-align:center">Joueurs liés au stade</th>
              <th style="text-align:right">Récompense (cr.)</th>
              <th style="text-align:center">Actif</th>
              <th style="text-align:center">Actions</th>
            </tr>
          </thead>
          <tbody id="solo-tbody">
            ${(i||[]).map(a).join("")||'<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Aucun niveau défini.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;function v(){document.querySelectorAll("#solo-tbody [data-field]").forEach(l=>{l.addEventListener("change",()=>$(l))})}async function $(l){const m=l.dataset.id,g=l.dataset.field,h=g==="is_active"?l.checked:Number(l.value)||0,{error:E}=await k.from("solo_levels").update({[g]:h}).eq("id",m);if(E){t(E.message,"error");return}l.style.transition="background .3s",l.style.background="#e8f8ee",setTimeout(()=>{l.style.background=""},500)}v(),document.querySelectorAll("[data-del-row]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce niveau ? Les joueurs ayant progressé au-delà seront affectés.")&&(await k.from("solo_levels").delete().eq("id",l.dataset.delRow),t("Niveau supprimé","success"),Pe(e,n))})}),(w=document.getElementById("solo-add-row"))==null||w.addEventListener("click",async()=>{const m={level_number:Math.max(0,...(i||[]).map(E=>E.level_number))+1,target_note_avg:10,nb_liens_jaune:2,nb_liens_vert:1,nb_joueurs_stade:2,reward_credits:500,is_active:!0},{data:g,error:h}=await k.from("solo_levels").insert(m).select().single();if(h){t(h.message,"error");return}t("Niveau ajouté — modifie les valeurs directement","success"),Pe(e,n)})}function hi(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Ei(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function Fe(){document.getElementById("modal-overlay").classList.add("hidden")}const gt={dashboard:{title:"Dashboard",fn:vt},players:{title:"Joueurs & Cartes",fn:mn},clubs:{title:"Clubs",fn:In},"card-builder":{title:"Card Builder",fn:jn},users:{title:"Managers",fn:De},market:{title:"Mercato",fn:zt},"import-export":{title:"Import / Export CSV",fn:Yn},formations:{title:"Formations & Liens",fn:Zn},"boosters-config":{title:"Boosters",fn:ti},"sell-price":{title:"Prix vente directe",fn:ni},journal:{title:"Actualités",fn:oi},tutorial:{title:"Tutoriel",fn:di},stadiums:{title:"Stades",fn:mi},"gc-cards":{title:"Game Changers",fn:yi},"ranked-seasons":{title:"Saisons Ranked",fn:vi},"solo-mode":{title:"Solo Mode",fn:Pe}};async function ke(e){document.querySelectorAll(".admin-sidebar nav a").forEach(r=>{r.classList.toggle("active",r.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=gt[e]||gt.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:hi,openModal:Ei,closeModal:Fe,navigate:ke})}catch(r){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${r.message}</div>`,console.error(r)}}async function _i(){var n;const{data:{session:e}}=await k.auth.getSession();e&&await ft(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,r=document.getElementById("auth-error");if(r.textContent="",!t||!i){r.textContent="Remplissez tous les champs.";return}const{data:a,error:v}=await k.auth.signInWithPassword({email:t,password:i});if(v){r.textContent=v.message;return}await ft(a.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",Fe),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&Fe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),ke(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{ke(t.target.value)})}async function ft(e){const{data:n,error:t}=await k.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await k.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,ke("dashboard")}_i();
