import{s as E,r as Fe,a as Ge,A as nt,l as it,g as ot,b as qe,K as _e,D as M,S as at,c as j,H as rt,R as lt,e as ue,d as He,f as st,h as dt,E as ct,i as pt,N as ut,M as mt,B as gt,j as ft,F as me,k as ke,m as bt,n as yt,o as xt,p as vt}from"./special-cards-DZxbxWIu.js";async function ht(e){var y;const[{count:t},{count:n},{count:i},{count:m},{count:c},{data:u}]=await Promise.all([E.from("players").select("*",{count:"exact",head:!0}),E.from("clubs").select("*",{count:"exact",head:!0}),E.from("users").select("*",{count:"exact",head:!0}),E.from("cards").select("*",{count:"exact",head:!0}),E.from("matches").select("*",{count:"exact",head:!0}),E.rpc("get_signup_password")]),l=u||"";e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ee("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ee("🏟️","Clubs",n??"–","#D4A017")}
      ${ee("👥","Managers",i??"–","#7a28b8")}
      ${ee("📦","Cartes possédées",m??"–","#2a8f52")}
      ${ee("⚽","Matchs joués",c??"–","#bb2020")}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
      <div class="card-panel">
        <h3 style="font-size:14px;margin-bottom:12px;font-weight:600">🎯 Actions rapides</h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn btn-primary" onclick="window.adminNav('players')">+ Ajouter un joueur</button>
          <button class="btn btn-yellow" onclick="window.adminNav('clubs')">+ Ajouter un club</button>
          <button class="btn btn-ghost" onclick="window.adminNav('card-builder')">🎨 Ouvrir Card Builder</button>
        </div>
      </div>
      <div class="card-panel">
        <h3 style="font-size:14px;margin-bottom:12px;font-weight:600">📋 Infos GDD</h3>
        <div style="font-size:12px;color:var(--gray-600);line-height:1.7">
          <div>Rarités: Normal / Pépite (or) / Papyte (argent) / Légende (violet)</div>
          <div>Postes: GK (noir) / DEF (rouge) / MIL (jaune) / ATT (vert)</div>
          <div>Formations: 25/25 schémas FUT17 (toutes les formations officielles)</div>
          <div>Encodage voyelles: A→E, E→I, I→O, O→U, U→A</div>
        </div>
      </div>
    </div>

    <div class="card-panel">
      <h3 style="font-size:14px;margin-bottom:4px;font-weight:600">🔐 Code d'accès à l'inscription</h3>
      <div style="font-size:12px;color:var(--gray-600);margin-bottom:12px">Requis pour que le bouton "Créer mon compte" soit actif sur la page de connexion.</div>
      <div style="display:flex;gap:8px;max-width:420px">
        <input id="signup-pwd-input" type="text" value="${l.replace(/"/g,"&quot;")}" style="flex:1;padding:10px 12px;border-radius:8px;border:1.5px solid var(--gray-200);font-size:14px;color:#1a1a1a">
        <button id="signup-pwd-save" class="btn btn-primary">💾 Enregistrer</button>
      </div>
      <div id="signup-pwd-status" style="font-size:12px;margin-top:8px;min-height:16px"></div>
    </div>
  `,window.adminNav=o=>{var s;(s=document.querySelector(`[data-page="${o}"]`))==null||s.click()},(y=document.getElementById("signup-pwd-save"))==null||y.addEventListener("click",async()=>{const o=document.getElementById("signup-pwd-input").value.trim(),s=document.getElementById("signup-pwd-status");if(!o){s.textContent="Le code ne peut pas être vide.",s.style.color="#cc2222";return}const r=document.getElementById("signup-pwd-save");r.disabled=!0,r.textContent="⏳...";const{error:a}=await E.rpc("set_signup_password",{new_password:o});if(r.disabled=!1,r.textContent="💾 Enregistrer",a){s.textContent=a.message,s.style.color="#cc2222";return}s.textContent="✅ Code mis à jour.",s.style.color="#1A6B3C"})}function ee(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const Oe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Et={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function wt(){const e={};for(const t of nt)e[t]=await it(t);return e}async function _t(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:m,error:c}=await E.from("players").select("id, country_code, face").like("face","public/faces/%");if(c){n(c.message,"error");return}if(!(m!=null&&m.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:u}=await E.from("players").select("face").not("face","is",null),l=new Set((u||[]).map(s=>s.face).filter(s=>s&&!s.startsWith("public/faces/")));let y=0,o=0;for(const s of m){const r=await Ge(s.country_code,l);if(!r){o++;continue}const{error:a}=await E.from("players").update({face:r}).eq("id",s.id);if(a){o++;continue}l.add(r),y++}n(`${y} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function kt(e,t){await de(e,t)}async function de(e,t,n=null){var o,s,r,a,p;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((s=document.getElementById("filter-job"))==null?void 0:s.value)||"",rarity:((r=document.getElementById("filter-rarity"))==null?void 0:r.value)||"",club:((a=document.getElementById("filter-club"))==null?void 0:a.value)||"",country:((p=document.getElementById("filter-country"))==null?void 0:p.value)||""});const[{data:m,error:c},{data:u}]=await Promise.all([E.from("players").select("*, clubs(id,encoded_name,logo_url)"),E.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const l={GK:0,DEF:1,MIL:2,ATT:3},y=(m||[]).sort((d,h)=>{const w=(l[d.job]??4)-(l[h.job]??4);return w!==0?w:(d.surname_real||"").localeCompare(h.surname_real||"")});$t(e,y,u||[],t,n)}function $t(e,t,n,i,m=null){var s,r;const{toast:c}=i;if(e.innerHTML=`
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
          ${Object.entries(Oe).map(([a,p])=>`<option value="${a}">${p}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
        <button class="btn btn-ghost" id="fix-old-faces-btn" style="white-space:nowrap">🖼️ Réattribuer anciennes photos</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(a=>`<option value="${a.id}">${a.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(a=>a.country_code).filter(Boolean))].sort().map(a=>`<option value="${a}">${a}</option>`).join("")}
        </select>
      </div>
      <div id="filters-restore-hook" style="display:none"></div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${t.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Grille de cartes -->
      <div id="players-list" style="display:flex;flex-wrap:wrap;gap:12px"></div>
    </div>`,m){const a=m,p=d=>document.getElementById(d);a.search&&p("search-players")&&(p("search-players").value=a.search),a.job&&p("filter-job")&&(p("filter-job").value=a.job),a.rarity&&p("filter-rarity")&&(p("filter-rarity").value=a.rarity),a.club&&p("filter-club")&&(p("filter-club").value=a.club),a.country&&p("filter-country")&&(p("filter-country").value=a.country)}if(m){const a=m,p=d=>document.getElementById(d);a.search&&p("search-players")&&(p("search-players").value=a.search),a.job&&p("filter-job")&&(p("filter-job").value=a.job),a.rarity&&p("filter-rarity")&&(p("filter-rarity").value=a.rarity),a.club&&p("filter-club")&&(p("filter-club").value=a.club),a.country&&p("filter-country")&&(p("filter-country").value=a.country)}function u(){const a=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,d=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,w=document.getElementById("filter-country").value;return t.filter(g=>(!a||`${g.firstname} ${g.surname_real}`.toLowerCase().includes(a))&&(!p||g.job===p)&&(!d||g.rarity===d)&&(!h||g.club_id===h)&&(!w||g.country_code===w))}const l=new Set;function y(){const a=document.getElementById("bulk-bar"),p=document.getElementById("bulk-count");a&&(a.style.display=l.size>0?"flex":"none",p&&(p.textContent=`${l.size} joueur(s) sélectionné(s)`))}function o(){const a=u();document.getElementById("count-label").textContent=`${a.length} joueur(s)`;const p=document.getElementById("players-list");if(!a.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=a.map(d=>{const h={...d,clubs:d.clubs,face:d.face||null},w=Fe(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${d.id}">
        ${w}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${d.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const h=t.find(w=>w.id===d.dataset.edit);h&&$e(h,n,e,i)})}),p.querySelectorAll(".btn-del-player").forEach(d=>{d.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:w}=await E.from("players").delete().eq("id",d.dataset.del);w?c(w.message,"error"):(c("Joueur supprimé ✅","success"),de(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(s=document.getElementById("bulk-cancel-btn"))==null||s.addEventListener("click",()=>{l.clear(),y(),o()}),(r=document.getElementById("bulk-delete-btn"))==null||r.addEventListener("click",async()=>{var h,w,g,k,$;if(!l.size||!confirm(`Supprimer ${l.size} joueur(s) ?`))return;const a=[...l],{error:p}=await E.from("players").delete().in("id",a);if(p){c(p.message,"error");return}c(`${a.length} joueur(s) supprimé(s) ✅`,"success"),l.clear();const d={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((w=document.getElementById("filter-job"))==null?void 0:w.value)||"",rarity:((g=document.getElementById("filter-rarity"))==null?void 0:g.value)||"",club:((k=document.getElementById("filter-club"))==null?void 0:k.value)||"",country:(($=document.getElementById("filter-country"))==null?void 0:$.value)||""};de(e,i,d)}),document.getElementById("add-player-btn").addEventListener("click",()=>$e(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>_t(e,i))}async function $e(e,t,n,i){const{toast:m,openModal:c,closeModal:u}=i,l=!!e,y=await wt(),{data:o}=await E.from("players").select("face").not("face","is",null),s=new Set((o||[]).map(d=>d.face).filter(Boolean));e!=null&&e.face&&s.delete(e.face);const r='<option value="">— Club —</option>'+t.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join(""),a=e!=null&&e.face?e.face.split("/")[0]:"",p=Object.keys(y).map(d=>`<option value="${d}" ${a===d?"selected":""}>${d}</option>`).join("");c(l?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

      <!-- Colonne gauche : aperçu carte -->
      <div style="flex-shrink:0;position:sticky;top:0">
        <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;text-align:center">Aperçu</div>
        <div id="card-preview" style="min-width:160px"></div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div style="flex:1;min-width:300px;display:flex;flex-direction:column;gap:12px">

        <!-- Identité -->
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

        <!-- Poste + Rareté + Pays -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Poste 1</label>
            <select id="pm-job">
              ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job)===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job2)===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(d=>`<option value="${d}" ${(e==null?void 0:e.rarity)===d?"selected":""}>${Oe[d]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(d=>`<option value="${d}" ${((e==null?void 0:e.country_code)||"FR")===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${r}</select>
          </div>
          <div class="form-group">
            <label>Prix vente (cr.)</label>
            <input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}">
          </div>
        </div>

        <!-- Notes -->
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (0–20)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([d,h,w])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${Et[d]};font-weight:700">${d}</label>
                <input id="${h}" type="number" min="0" max="20" value="${(e==null?void 0:e[w])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
        <div style="border-top:1px solid var(--gray-200);padding-top:10px">
          <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="form-group">
              <label>Continent</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${p}
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
        <div style="position:sticky;bottom:0;background:#fff;padding:8px 0 4px;margin-top:4px">
        <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
          ${l?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var $,v,b;let d=(e==null?void 0:e.face)||null;function h(){var K,P,W,Y,Z,X,Q,ve,he,Ee,we;const f=document.getElementById("card-preview");if(!f)return;const x=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",_=(((P=document.getElementById("pm-real"))==null?void 0:P.value)||"").toUpperCase(),B=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",I=((Y=document.getElementById("pm-job2"))==null?void 0:Y.value)||null,S=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",L=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",C=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,A=document.getElementById("pm-club"),T=A==null?void 0:A.options[A.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const N=parseInt((ve=document.getElementById("pm-g"))==null?void 0:ve.value)||0,G=parseInt((he=document.getElementById("pm-d"))==null?void 0:he.value)||0,q=parseInt((Ee=document.getElementById("pm-m"))==null?void 0:Ee.value)||0,H=parseInt((we=document.getElementById("pm-a"))==null?void 0:we.value)||0,D=t.find(tt=>tt.id===C),R={firstname:x||"Prénom",surname_real:_||"NOM",job:B,job2:I||null,rarity:S,country_code:L,club_id:C,note_g:N,note_d:G,note_m:q,note_a:H,face:d||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};f.innerHTML=Fe(R,{width:160});const z=document.getElementById("pm-minmax");z&&(z.style.display=["pepite","papyte"].includes(S)?"grid":"none")}function w(f){const x=document.getElementById("faces-grid"),_=document.getElementById("pm-face");if(!x||!_)return;const B=y[f]||[];if(console.log("[players] loadFacesGrid folder=",f,"files=",B.length,B.slice(0,5)),!B.length){_.innerHTML='<option value="">— Aucun visage disponible —</option>',x.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${f}" du bucket Supabase.</p>`;return}const I=B.filter(S=>{const L=f+"/"+S;return L===d||!s.has(L)});_.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(S=>{const L=f+"/"+S;return`<option value="${L}" ${d===L?"selected":""}>${S}</option>`}).join(""),x.innerHTML=I.map(S=>{const L=f+"/"+S,C=d===L,A=ot({face:L});return`<div data-face="${L}" style="cursor:pointer;border:2px solid ${C?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${A}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(S=>{S.addEventListener("click",()=>{d=S.dataset.face;const L=document.getElementById("pm-face");L&&(L.value=d),x.querySelectorAll("[data-face]").forEach(C=>{C.style.border=`2px solid ${C.dataset.face===d?"#4fc3f7":"transparent"}`}),h()})})}const g=e!=null&&e.face?e.face.split("/")[0]:"";g&&y[g]&&(document.getElementById("pm-folder").value=g,w(g)),($=document.getElementById("pm-folder"))==null||$.addEventListener("change",f=>{w(f.target.value)}),(v=document.getElementById("pm-face"))==null||v.addEventListener("change",f=>{d=f.target.value||null,h()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(f=>{var x,_;(x=document.getElementById(f))==null||x.addEventListener("input",h),(_=document.getElementById(f))==null||_.addEventListener("change",h)}),(b=document.getElementById("pm-save"))==null||b.addEventListener("click",()=>Bt(e,l,d,n,i)),h()},50)}function It(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function Bt(e,t,n,i,m){var p,d,h,w,g;const{toast:c,closeModal:u}=m,l=document.getElementById("pm-error"),y=document.getElementById("pm-save"),o=It(n);if(!o.firstname){l.textContent="Le prénom est requis.";return}if(!o.surname_real){l.textContent="Le nom est requis.";return}y.disabled=!0,y.textContent="Enregistrement…";const s=o,{error:r}=t?await E.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await E.from("players").insert(s);if(r){l.textContent=r.message,y.disabled=!1,y.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}c(t?"Joueur modifié ✅":"Joueur créé ✅","success"),u();const a={search:((p=document.getElementById("search-players"))==null?void 0:p.value)||"",job:((d=document.getElementById("filter-job"))==null?void 0:d.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((w=document.getElementById("filter-club"))==null?void 0:w.value)||"",country:((g=document.getElementById("filter-country"))==null?void 0:g.value)||""};de(i,m,a)}const St={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},Lt=["rase","court","milong","long"];function Ct(e){const t=Ke(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function zt(e){return Math.random()<.05?"chauve":Ct(e)}const Ue=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ke(e){return St[e]||"blanc"}function At(e){return zt(e)}function ge(e,t){return Math.floor(Math.random()*(t-e+1))+e}function oe(e){return e[Math.floor(Math.random()*e.length)]}function Tt(e){const t=Ue.filter(n=>n!==e);return oe(t)}function Ie(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],m=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":m.includes(e)?"Asians":"Europeans"}const Mt=[{min:1,max:4,pct:55},{min:5,max:10,pct:20},{min:11,max:14,pct:10},{min:15,max:17,pct:10},{min:18,max:20,pct:5}];function jt(){const e=Math.random()*100;let t=0;for(const n of Mt)if(t+=n.pct,e<t)return ge(n.min,n.max);return ge(1,4)}function Rt(){const e=Array.from({length:20},(t,n)=>n);return e.sort(()=>Math.random()-.5),new Set(e.slice(0,10))}let ae=null;function Dt(e,t){return e&&(ae||(ae=Rt()),ae.has(t))?ge(15,20):jt()}function Pt(e,t,n=new Set,i=!1){const m=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],c=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Souza","Rodrigues","Almeida","Carvalho","Gomes","Ribeiro","Araujo","Barbosa","Nascimento","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Barros","Freitas","Melo","Pinto","Moura","Cavalcanti","Batista","Nunes","Lima","Rocha","Azevedo","Marques","Castro","Reis","Fonseca","Andrade","Braga","Peixoto","Coelho","Amaral","Guimaraes","Pires","Salgado","Xavier","Assuncao","Brito","Vasconcelos","Tavares","Duarte","Bastos","Neves","Figueiredo","Sales","Farias","Siqueira","Camargo","Prado","Miranda","Ramos","Correa","Gaspar","Leite","Pacheco","Sequeira","Marcelino","Antunes","Esteves","Rodriguez","Godinho","Faria","Sardinha","Cordeiro","Aguiar","Salvador","Sarmento","Nogueira","Pimentel","Simoes","Loureiro","Abreu","Sepulveda","Quaresma","Portela","Valente","Franco","Pina","Camilo","Falcao","Serra","Trindade","Belo","Cabral","Vidal","Sanches","Furtado","Guerreiro","Delgado","Coutinho","Vale","Marreiros","Bento","Salavessa","Domingues","Diallo","Traore","Coulibaly","Bah","Konate","Toure","Camara","Barry","Diop","Ndiaye","Sow","Cisse","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Balde","Diakite","Kouyate","Sissoko","Doumbia","Sarr","Mbaye","Fall","Toumbou","Coumbassa","Faye","Gueye","Thiam","Sarré","Kaba","Dabo","Sacko","Kourouma","Konde","Sangare","Sanou","Toubali","Bangoura","Kante","Samake","Nikiema","Ouedraogo","Zongo","Sawadogo","Compaore","Kabore","Tapsoba","Kagambega","Yameogo","Some","Kienou","Dembele","Bamba","Mendy","Djalo","Konte","Diabate","Doumbouya","Fadiga","Tounkara","Cheikh","Dieng","Diagne","Mbengue","Sagna","Sy","Ba","Wade","Niang","Diedhiou","Sonko","Dieye","Diatta","Mane","Coly","Badiane","Ndour","Faty","Seck","Kone","Berthe","Sidibe","Yattara","Cissoko","Bagayoko","Diakhate","Thioune","Bocoum","Guisse","Muller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schroder","Neumann","Schwarz","Zimmermann","Braun","Kruger","Hofmann","Klein","Wagner","Becker","Hoffmann","Koch","Bergmann","Lange","Schulze","Krause","Meyer","Werner","Krämer","Schulz","Lehmann","Kaiser","Herrmann","Konig","Walter","Mayer","Huber","Kaufmann","Vogel","Friedrich","Keller","Gunther","Frank","Berger","Winkler","Roth","Beck","Lorenz","Baumann","Franke","Albrecht","Winter","Peters","Vogt","Jager","Simon","Ludwig","Bohm","Horn","Winkelmann","Fuchs","Sommer","Graf","Ebert","Stein","Wilhelm","Seidel","Heinrich","Brandt","Haas","Schuster","Kramer","Sauer","Busch","Voigt","Thomas","Peter","Arnold","Hartmann","Dietrich","Zimmer","Herzog","Pohl","Sturm","Hartung","Vogler","Reichert","Kessler","Bock","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Sato","Yamamoto","Watanabe","Ito","Yamada","Choi","Jung","Kang","Zhang","Huang","Yamaguchi","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Hashimoto","Yamashita","Ishikawa","Nakajima","Ono","Maeda","Fujita","Goto","Okada","Hasegawa","Murakami","Kondo","Ishii","Sakamoto","Endo","Aoki","Fujii","Nishimura","Fukuda","Ota","Han","Yoon","Cho","Song","Shin","Yoo","Jang","Lim","Oh","Seo","Kwon","Hwang","Ahn","Yang","Zhao","Zhou","Wu","Xu","Sun","Zhu","Ma","Guo","He","Lin","Takahashi","Kobayashi","Kato","Yoshida","Sasaki","Yamaoka","Miura","Okamoto","Matsuda","Nakagawa","Ogawa","Uchida","Kubo","Miyazaki","Shimada","Yoshikawa","Yokoyama","Miyamoto","Sakai","Chiba","Kudo","Baek","Nam","Bae","Ha","Ko","Moon","Yu","Woo","Gu","Cha","Chu","Peng","Lu","Xie","Tang","Feng","Deng","Cao","Cai","Jiang","Yuan","Pan","Du","Dai","Fan","Kikuchi","Anzai","Uehara","Oda","Kawai","Noda","Xiao","Jin","Qian","Yan","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King","Wright","Scott","Green","Baker","Adams","Nelson","Carter","Mitchell","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Morris","Murphy","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gray","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Sullivan","Russell","Hayes","Kelly","Simpson","Patterson","Ellis","Fisher","Hunter","Grant","Mason","Barnes","Ryan","Palmer","Hamilton","George","Freeman","Wells","Webb","Gordon","Burns","Marshall","Owens","Ford","Snyder","Fox","Warren","Payne","Rice","Weaver","Butler","Simmons","Boyd","Craig","Stone","Franklin","Vasquez","Stephens","Wallace","Woods","Elliott","Chapman","Dunn","Perkins","Hudson","Spencer","Gardner","Stevens","Tucker","Porter","Hicks","Crawford","Dubois","Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Guerin","Boyer","Garnier","Chevallier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson","Marchand","Duval","Denis","Dumont","Marie","Lemaire","Noel","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Riviere","Lucas","Brunet","Gaillard","Barbier","Arnaud","Martel","Rolland","Renaud","Roger","Roche","Fabre","Aubert","Poulain","Guyot","Lefebvre","Leclerc","Michaud","Colin","Charpentier","Renard","Legros","Caron","Picard","Roy","Guillot","Regnier","Marechal","Perrot","Antoine","Poirier","Voisin","Prevost","Adam","Lecomte","Marty","Charles","Rousset","Chauvin","Jacquet","Lambert","Bouvier","Beaumont","Roulet","Chartier","Deschamps","Lecoq","Perret","Charrier","Sauvage","Rivet","Dumas","Bourgeois","Blondel","Payet","Isambert","Auger","Lemoine","Millet","Guillon","Aubry","Humbert","Constant","Gilbert","Renou","Barre","Vallet","Cardon","Fernandez","Gonzalez","Hernandez","Sanchez","Ramirez","Torres","Flores","Rivera","Gomez","Morales","Ortiz","Gutierrez","Chavez","Ruiz","Alvarez","Mendoza","Vazquez","Romero","Herrera","Medina","Aguilar","Vargas","Guzman","Munoz","Salazar","Soto","Contreras","Rojas","Nunez","Vega","Guerrero","Rios","Acosta","Fuentes","Cabrera","Espinoza","Mendez","Molina","Cortez","Suarez","Pena","Cervantes","Estrada","Ochoa","Bravo","Padilla","Carrillo","Escobar","Marin","Ibarra","Salinas","Mora","Trejo","Cardenas","Aguirre","Villanueva","Villalobos","Solis","Robles","Beltran","Camacho","Zamora","Valdez","Meza","Avila","Lara","Segura","Cano","Prieto","Cabello","Pardo","Serrano","Nieto","Crespo","Gil","Iglesias","Santana","Gallego","Zapata","Paredes","Nava","Barrera","Montes","Peralta","Cortes","Galvan","Rosales","Maldonado","Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","Deluca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Barone","Fontana","Santoro","Mariani","Rinaldi","Caruso","Ferrara","Galli","Martini","Leone","Longo","Gentile","Martinelli","Vitale","Lombardo","Coppola","Deangelis","Marchetti","Parisi","Villa","Conte","Ferro","Fabbri","Bianco","Marini","Grasso","Valentini","Messina","Sala","Farina","Rizzi","Monti","Cattaneo","Morelli","Amato","Fiore","Colombo","Testa","Riva","Barbieri","Fiorentino","Sarti","Piras","Neri","Palumbo","Sanna","Grieco","Sartori","Basile","Bernardi","Marchi","Ferretti","Milani","Guerra","Silvestri","Cocco","Ferraro","Damico","Vitali","Basso","Guerrini","Carbone","Ruggiero","Piazza","Rossetti","Cristofaro","Palma","Franchini","Bruni","Villani","Marconi","Sforza","Sarno","Damato","Angeli","Bosco","Ferri","Grimaldi","Costantini","Marchese","Iannotti","Palermo","Vitiello","Damiani","Orlando","De Jong","Van Dijk","Bakker","Jansen","Visser","Smit","Meijer","Bos","Andersen","Hansen","Nielsen","Pedersen","Larsen","Johansson","Karlsson","Vermeulen","Van Den Berg","Van Der Meer","Dekker","Brouwer","Mulder","De Groot","Hoekstra","Van Leeuwen","Vos","Peeters","De Boer","Kok","Andersson","Eriksson","Persson","Lindqvist","Gustafsson","Olsen","Berg","Jorgensen","Sorensen","Rasmussen","Christiansen","Poulsen","Madsen","Kristensen","Van Der Berg","Klaassen","Van Der Linden","Postma","Vink","Terpstra","Schouten","Van Zanten","Hendriks","Van Der Laan","Wolters","Blom","Van Vliet","Van Der Velde","Hermansen","Bergstrom","Lindberg","Holm","Nystrom","Blomqvist","Sandberg","Wikstrom","Forsberg","Dahl","Falk","Ostergaard","Mortensen","Simonsen","Thomsen","Iversen","Kristiansen","Vermeer","Willems","Aarts","Sondergaard","Frandsen","Bang","Lindholm","Berglund","Wikman","Backstrom","Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Boumediene","Yacoub","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Chraibi","Fassi","Kadiri","Lahlou","Naciri","Sbai","Skalli","Tahiri","Zniber","Boukhris","Chakroun","Gharbi","Jendoubi","Karoui","Mansouri","Sassi","Toumi","Zaidi","Ayari","Bouazizi","Chaabane","Dhaouadi","Ghannouchi","Hammami","Jemai","Khedher","Mabrouk","Nasri","Ouali","Rekik","Sahli","Zaoui","Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Karim","Lakhal","Mahjoub","Nabil","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Hachani","Islah","Jemili","Khaldi","Larbi","Mokrani","Nadir","Ouahes","Riahi","Salhi","Taleb","Wahabi","Zeroual","Aissa","Belaid","Chami","Djelloul","Fekih","Guerfi","Bouzid","Chettouh","Djebbari","Ferjani","Guenaoui","Hallaoui","Khemiri","Mejri","Ouarda","Selmi"],u=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],l=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],y=new Set(l.sort(()=>Math.random()-.5).slice(0,4)),o=[...l].sort(()=>Math.random()-.5),s=new Set(o.slice(0,2)),r=new Set(o.slice(2,4)),a=10,p=u.map((w,g)=>g<a);for(let w=p.length-1;w>0;w--){const g=Math.floor(Math.random()*(w+1));[p[w],p[g]]=[p[g],p[w]]}const d=new Set;function h(){const w=c.filter(v=>!d.has(v)&&!n.has(v)),g=w.length?w:c.filter(v=>!d.has(v)),k=g.length?g:c,$=oe(k);return d.add($),$}return u.map((w,g)=>{const k=p[g]?t:Tt(t),$=Ke(k),v=At(k),b=oe(Lt),f=Dt(i,g),x=y.has(g),_=x?Math.max(0,f-2):0;let B=0,I=0,S=0,L=0,C=null;w==="GK"?B=f:w==="DEF"?(I=f,x&&(S=_,C="MIL")):w==="ATT"?(L=f,x&&(S=_,C="MIL")):(S=f,x&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(I=_,C="DEF"):(L=_,C="ATT")));const A=s.has(g)?"pepite":r.has(g)?"papyte":"normal",T=h();return{job:w,job2:C,firstname:oe(m),surname_real:T,country_code:k,club_id:e,note_g:B,note_d:I,note_m:S,note_a:L,skin:$,hair:v,hair_length:b,rarity:A,sell_price:0,ethnie:Ie(k),_ethnie:Ie(k)}})}async function Ve(e,t,n,i=!1){ae=null;const{data:m}=await E.from("players").select("surname_real").not("surname_real","is",null),c=new Set((m||[]).map(d=>d.surname_real).filter(Boolean)),u=Pt(e,t,c,i),{data:l}=await E.from("players").select("face").not("face","is",null),y=new Set((l||[]).map(d=>d.face).filter(Boolean)),o=new Set;for(const d of u){const h=await Ge(d.country_code,new Set([...y,...o]));h&&(d.face=h,o.add(h)),delete d._ethnie}const{data:s,error:r}=await E.from("players").insert(u).select("id");if(r){console.error("[GenSquad] Erreur batch insert:",r.message,r.details),n("Erreur: "+r.message,"error");return}const a=(s||[]).map(d=>({card_type:"player",player_id:d.id}));if(a.length){const{error:d}=await E.from("cards").insert(a);d&&console.warn("[GenSquad] Erreur cartes:",d.message)}const p=(s==null?void 0:s.length)||0;console.log("[GenSquad] Créés:",p,"/",u.length),p>0?n(`${p} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Je(e){return{style:e.kit_style||M.style,color1:e.kit_color1||M.color1,color2:e.kit_color2||M.color2,color3:e.kit_color3||M.color3,shorts:e.kit_shorts||M.shorts,socks:e.kit_socks||M.socks}}let re=[];async function Nt(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:m}]=await Promise.all([E.from("clubs").select("*").order("real_name"),E.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const c={};(m||[]).forEach(u=>{c[u.club_id]=(c[u.club_id]||0)+1}),Ft(e,t,c)}function Ft(e,t,n={}){const{toast:i,openModal:m,closeModal:c}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,u(re),document.getElementById("search-clubs").addEventListener("input",l=>{const y=l.target.value.toLowerCase();u(re.filter(o=>o.real_name.toLowerCase().includes(y)||o.encoded_name.toLowerCase().includes(y)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Be(null,e,t));function u(l){const y=document.getElementById("clubs-list");if(!l.length){y.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}y.innerHTML=l.map(o=>{const s=Je(o),r=qe(s,o.id).replace("<svg ",'<svg style="width:40px;height:48px" '),a=o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${s.color1},${s.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`,p=n[o.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${a}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${p===0?"#e67e22":"var(--gray-600)"}">
              ${p===0?"⚠️ Aucun joueur":`👥 ${p} joueur${p>1?"s":""}`}
            </div>
          </div>
          ${r}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${p===0?`<button class="btn btn-primary btn-sm" data-gen="${o.id}" data-cc="${o.country_code}" data-name="${o.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),y.querySelectorAll("[data-gen]").forEach(o=>{o.addEventListener("click",async()=>{const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",s.innerHTML=`
          <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
            <div style="font-size:17px;font-weight:900;margin-bottom:6px">⚽ Générer l'effectif</div>
            <div style="font-size:13px;color:#555;margin-bottom:16px"><strong>${o.dataset.name}</strong> — 20 joueurs</div>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer;padding:10px;background:rgba(212,160,23,0.08);border-radius:8px;border:1px solid rgba(212,160,23,0.3);margin-bottom:16px">
              <input type="checkbox" id="quick-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
              💪 Équipe Forte <span style="font-size:11px;color:#888">(10 joueurs note 15–20)</span>
            </label>
            <div style="display:flex;gap:10px">
              <button id="qg-cancel" style="flex:1;padding:10px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
              <button id="qg-ok" style="flex:1;padding:10px;border-radius:8px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">Générer</button>
            </div>
          </div>`,document.body.appendChild(s);const r=await new Promise(a=>{s.querySelector("#qg-cancel").onclick=()=>{s.remove(),a(null)},s.querySelector("#qg-ok").onclick=()=>{const p=s.querySelector("#quick-gen-strong").checked;s.remove(),a(p)},s.onclick=p=>{p.target===s&&(s.remove(),a(null))}});r!==null&&(o.disabled=!0,o.textContent="⏳",await Ve(o.dataset.gen,o.dataset.cc,i,r),ce(e,t))})}),y.querySelectorAll("[data-edit]").forEach(o=>{const s=re.find(r=>r.id===o.dataset.edit);o.addEventListener("click",()=>Be(s,e,t))}),y.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await E.from("clubs").delete().eq("id",o.dataset.del);s?i(s.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function Be(e,t,n){const{toast:i,openModal:m,closeModal:c}=n,u=!!e,l=e?Je(e):{...M},y=Object.entries(_e).map(([s,r])=>`<option value="${s}" ${l.style===s?"selected":""}>${r.label}</option>`).join(""),o=Ue.map(s=>`<option value="${s}" ${((e==null?void 0:e.country_code)||"FR")===s?"selected":""}>${s}</option>`).join("");m(u?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
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
            ${o}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Logo (URL)</label>
        <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <!-- Contrôles -->
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${y}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([s,r,a,p])=>`
              <div class="form-group" id="wrap-${r}" ${p?'style="display:none"':""}>
                <label>${s}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${r}" value="${a||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${r}-txt" value="${a||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <!-- Aperçu -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--gray-200);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Génération auto (création uniquement) -->
      ${u?"":`
      <div style="border-top:1px solid var(--gray-200);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <label id="m-gen-strong-label" style="display:none;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(212,160,23,0.08);border-radius:8px;border:1px solid rgba(212,160,23,0.35);margin-left:12px">
          <input type="checkbox" id="m-gen-strong" style="width:16px;height:16px;accent-color:#D4A017">
          💪 Équipe Forte <span style="font-size:11px;color:#888;font-weight:400">(10 joueurs note 15–20 garantis)</span>
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">Distribution : 55% note 1–4 · 20% note 5–10 · 10% note 11–14 · 10% note 15–17 · 5% note 18–20 · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${u?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var g,k,$;te();function s(){var x,_;const v=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",b=((_=_e[v])==null?void 0:_.colors)===3,f=document.getElementById("wrap-m-kit-color3");f&&(f.style.display=b?"":"none")}s(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(v=>{const b=document.getElementById(v),f=document.getElementById(v+"-txt");!b||!f||(b.addEventListener("input",()=>{f.value=b.value,te()}),f.addEventListener("input",()=>{const x=f.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&(b.value=x,te())}),f.addEventListener("change",()=>{let x=f.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&(b.value=x,f.value=x,te())}))}),(g=document.getElementById("m-kit-style"))==null||g.addEventListener("change",()=>{s(),te()});const r=document.getElementById("m-real"),a=document.getElementById("m-encoded");function p(){if(!r||!a||a.value)return;const v=r.value.trim().split(/\s+/),b=v.length===1?v[0].toUpperCase().slice(0,6):v.filter(f=>f.length>2).map(f=>f[0].toUpperCase()).join("")||v[0].toUpperCase().slice(0,4);a.value=b}r==null||r.addEventListener("input",p),(k=document.getElementById("auto-encode-btn"))==null||k.addEventListener("click",()=>{a&&(a.value=""),p()}),($=document.getElementById("m-save"))==null||$.addEventListener("click",()=>Gt(e,u,t,n));const d=document.getElementById("m-gen-squad"),h=document.getElementById("m-gen-strong-label");function w(){if(h&&(h.style.display=d!=null&&d.checked?"flex":"none",!(d!=null&&d.checked))){const v=document.getElementById("m-gen-strong");v&&(v.checked=!1)}}d==null||d.addEventListener("change",w),w()},50)}function We(){var e,t,n,i,m,c;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((m=document.getElementById("m-kit-shorts"))==null?void 0:m.value)||"#111111",socks:((c=document.getElementById("m-kit-socks"))==null?void 0:c.value)||"#ffffff"}}function te(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=qe(We(),"modal"))}async function Gt(e,t,n,i){var k,$,v,b,f,x,_;const{toast:m,closeModal:c}=i,u=document.getElementById("m-error"),l=document.getElementById("m-save"),y=(k=document.getElementById("m-real"))==null?void 0:k.value.trim(),o=($=document.getElementById("m-encoded"))==null?void 0:$.value.trim().toUpperCase(),s=(v=document.getElementById("m-country"))==null?void 0:v.value.trim().toUpperCase(),r=((b=document.getElementById("m-logo"))==null?void 0:b.value.trim())||null,a=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,p=((x=document.getElementById("m-gen-squad"))==null?void 0:x.checked)??!1,d=((_=document.getElementById("m-gen-strong"))==null?void 0:_.checked)??!1,h=We();if(!y){u.textContent="Le nom du club est requis.";return}if(!o){u.textContent="Le nom encodé est requis.";return}if(!s){u.textContent="Le pays est requis.";return}l.disabled=!0,l.textContent="Enregistrement…";const w={real_name:y,encoded_name:o,country_code:s,logo_url:r,kit_style:h.style,kit_color1:h.color1,kit_color2:h.color2,kit_color3:h.color3,kit_shorts:h.shorts,kit_socks:h.socks};let g=e==null?void 0:e.id;if(t){const{error:B}=await E.from("clubs").update(w).eq("id",g);if(B){u.textContent=B.message,l.disabled=!1,l.textContent="💾 Enregistrer";return}}else{const{data:B,error:I}=await E.from("clubs").insert(w).select().single();if(I){u.textContent=I.message,l.disabled=!1,l.textContent="✅ Créer le club";return}if(g=B.id,a){l.textContent="🏟️ Création du stade…";const{data:S,error:L}=await E.from("stadium_definitions").insert({name:`Stade de ${y}`,club_id:g,country_code:s}).select().single();L?console.warn("[Stadium] Erreur def stade:",L.message):S&&await E.from("cards").insert({card_type:"stadium",stadium_id:S.id})}p&&(l.textContent="⚽ Génération des joueurs…",await Ve(g,s,m,d))}m(t?"Club modifié ✅":"Club créé ✅","success"),c(),ce(n,i)}const qt=["normal","pepite","papyte","legende"],Se=["GK","DEF","MIL","ATT"],Ht=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let U={...j},le=[];async function Ot(e,{toast:t}){const{data:n}=await E.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],U={...j},e.innerHTML=Jt(le),Kt(e,le,t),F()}function Le(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function Ut(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||M.style,color1:t.kit_color1||M.color1,color2:t.kit_color2||M.color2,shorts:t.kit_shorts||M.shorts,socks:t.kit_socks||M.socks}:{...M}}function F(){var a,p,d,h;const e=w=>{var g;return((g=document.getElementById(w))==null?void 0:g.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((p=(a=document.getElementById("cb-club"))==null?void 0:a.selectedOptions[0])==null?void 0:p.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Ut(),i=document.getElementById("cb-club"),m=((h=(d=i==null?void 0:i.selectedOptions[0])==null?void 0:d.dataset)==null?void 0:h.logo)||null,c=He(U,n,120),u=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`,l=st(t,{portraitUrl:u,clubLogoUrl:m,showNotes:!0}),y=document.getElementById("card-preview");y&&(y.innerHTML=l);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=c);const s=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&s&&(r.textContent=`${e("cb-firstname")} ${s} → ${e("cb-firstname")} ${t.surname_real}`)}function Ye(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};U={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Kt(e,t,n){var m,c,u,l,y;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",F),o.addEventListener("change",F)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var s;(s=document.getElementById(o))==null||s.addEventListener("change",()=>{Ye(),F()})}),(m=document.getElementById("cb-surname-real"))==null||m.addEventListener("input",()=>{Le(),F()}),(c=document.getElementById("btn-encode"))==null||c.addEventListener("click",()=>{Le(),F()}),(u=document.getElementById("cb-club"))==null||u.addEventListener("change",F),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",()=>Vt(n)),(y=document.getElementById("btn-reset"))==null||y.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),U={...j},i.forEach(o=>{const s=o.replace("av-",""),r=document.getElementById(o);r&&(r.value=j[s]||"")}),F()})}async function Vt(e){const t=u=>{var l;return((l=document.getElementById(u))==null?void 0:l.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ye();const m={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:U,skin:U.skin||"blanc",hair:U.hairColor||"marron",hair_length:"court"},{error:c}=await E.from("players").insert(m);if(c){e("Erreur: "+c.message,"error");return}e(`✅ Joueur "${m.firstname} ${m.surname_real}" enregistré !`,"success")}function Jt(e){const t=Ht.map(([o,s])=>`<option value="${o}">${s} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Se.map(o=>`<option value="${o}">${o}</option>`).join(""),m='<option value="">Aucun</option>'+Se.map(o=>`<option value="${o}">${o}</option>`).join(""),c=qt.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),u=(o,s,r)=>Object.entries(s).map(([a,p])=>`<option value="${a}" ${a===(r||"")?"selected":""}>${p.label}</option>`).join(""),l=Object.keys(at).map(o=>`<option value="${o}" ${o===j.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),y=Object.keys(rt).map(o=>`<option value="${o}" ${o===j.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
  <div style="display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start">

    <!-- ── Formulaire gauche ── -->
    <div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">👤 Identité du joueur</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Prénom *</label><input id="cb-firstname" placeholder="Osame"></div>
          <div>
            <label>Nom réel * <span style="font-weight:400;color:#999">(non affiché en jeu)</span></label>
            <div style="display:flex;gap:6px">
              <input id="cb-surname-real" placeholder="Sahraoui" style="flex:1">
              <button class="btn btn-ghost btn-sm" id="btn-encode" title="Encoder les voyelles">↻</button>
            </div>
          </div>
          <div>
            <label>Nom encodé * <span style="font-weight:400;color:#999">(GDD §4.5)</span></label>
            <input id="cb-surname-enc" placeholder="Sehreuao">
          </div>
          <div id="encode-summary-wrap" style="display:flex;align-items:flex-end">
            <div id="encode-summary" style="font-size:11px;color:var(--gray-600);padding-bottom:8px;font-style:italic"></div>
          </div>
          <div><label>Pays *</label><select id="cb-country">${t}</select></div>
          <div><label>Club</label><select id="cb-club">${n}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${i}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${m}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${c}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${lt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${o.toUpperCase()}
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
              <select id="av-skin">${l}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${u("av-hair",dt,j.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${y}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${u("av-eyebrows",ct,j.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${u("av-eyes",pt,j.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${u("av-nose",ut,j.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${u("av-mouth",mt,j.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${u("av-beard",gt,j.beard)}</select>
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
  `}async function Ze(e,{toast:t}){const{data:n,error:i}=await E.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const m=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${m.length} manager(s)</span>
    </div>
    <div class="card-panel" style="background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
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
  `,c(m),document.getElementById("search-users").addEventListener("input",u=>{const l=u.target.value.toLowerCase();c(m.filter(y=>{var o;return y.pseudo.toLowerCase().includes(l)||((o=y.club_name)==null?void 0:o.toLowerCase().includes(l))}))});function c(u){document.getElementById("users-tbody").innerHTML=u.map(l=>{const y=l.mmr??1e3,o=l.mmr_deviation??350,s=l.placement_matches??0,r=ft(y),a=l.ranked_wins??0,p=l.ranked_losses??0,d=l.ranked_draws??0,h=a+p+d,w=h>0?Math.round(a/h*100):null,g=s<10,k=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${l.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${l.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(l.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${l.level}</div>
          </td>
          <td style="font-size:12px">${l.wins}V / ${l.draws}N / ${l.losses}D</td>
          <td style="font-size:12px">🥇${l.trophies_top1} 🥈${l.trophies_top2} 🥉${l.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${r.emoji}</span>
              <span style="font-weight:700;color:${r.color}">${r.label}</span>
            </div>
            ${g?`<div style="font-size:10px;color:#e67e22">${s}/10 placement${s<10?` (${10-s} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${d}N ${p}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${y}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${l.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${l.id}" data-is-admin="${l.is_admin}">
              ${l.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(l=>{l.addEventListener("click",async()=>{const y=l.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${y?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await E.from("users").update({is_admin:y}).eq("id",l.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),Ze(e,{toast:t}))})})}}async function Xe(e,{toast:t}){const{data:n,error:i}=await E.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const m=n||[],c=m.filter(l=>l.status==="active").length,u=m.filter(l=>l.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${c}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${u}</div>
        <div style="font-size:11px;color:#666">Vendues</div>
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
            ${m.map(l=>{var r,a,p,d;const y=(r=l.card)==null?void 0:r.player,o=y?`${y.firstname} ${y.surname_real}`:((a=l.card)==null?void 0:a.card_type)||"—",s={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${o}</b>${y?`<div style="font-size:10px;color:#999">${y.rarity} · ${y.job}</div>`:""}</td>
                <td style="font-size:12px">${((p=l.seller)==null?void 0:p.pseudo)||"—"}</td>
                <td style="font-size:12px">${((d=l.buyer)==null?void 0:d.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${s[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${l.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(l.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${l.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${l.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:y}=await E.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);y?t(y.message,"error"):(t("Annonce annulée","success"),Xe(e,{toast:t}))})})}async function Wt(e,{toast:t}){e.innerHTML=`
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
      <p style="font-size:12px;color:var(--gray-600);margin-bottom:16px">Exporter/importer les joueurs en masse via CSV. L'encodage des noms est automatique si la colonne surname_real est vide.</p>
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
        <b>Joueurs :</b> firstname, surname_real, surname_real, country_code, club_encoded_name, job, job2, note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price<br><br>
        <b>Valeurs autorisées :</b><br>
        • job/job2 : GK, DEF, MIL, ATT<br>
        • rarity : normal, pepite, papyte, legende<br>
        • skin : blanc, metisse, typ, noir<br>
        • hair : blond, marron, noir, chauve<br>
        • hair_length : rase, court, milong, long<br><br>
        💡 Le séparateur est la virgule. Première ligne = en-têtes. Si surname_real est vide, il est calculé automatiquement.
      </div>
    </div>
  </div>
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ie("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ie("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let m=`real_name,encoded_name,country_code,logo_url
`;n.forEach(c=>{m+=[c.real_name,c.encoded_name,c.country_code,c.logo_url||""].map(Ce).join(",")+`
`}),ie("clubs_export.csv",m),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let m=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(c=>{var u;m+=[c.firstname,c.surname_real,c.surname_real,c.country_code,((u=c.clubs)==null?void 0:u.encoded_name)||"",c.job,c.job2||"",c.note_g,c.note_d,c.note_m,c.note_a,c.rarity,c.note_min??"",c.note_max??"",c.skin,c.hair,c.hair_length,c.sell_price].map(Ce).join(",")+`
`}),ie("players_export.csv",m),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const m=document.getElementById("clubs-import-result");m.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const c=await i.text(),u=ze(c);if(u.length===0){m.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let l=0,y=0;const o=[];for(const s of u){if(!s.real_name||!s.encoded_name||!s.country_code){y++,o.push(`Ligne ignorée (champs manquants): ${s.real_name||"?"}`);continue}const r={real_name:s.real_name,encoded_name:s.encoded_name.toUpperCase(),country_code:s.country_code.toUpperCase().slice(0,2),logo_url:s.logo_url||null},{error:a}=await E.from("clubs").upsert(r,{onConflict:"encoded_name"});a?(y++,o.push(`${s.encoded_name}: ${a.message}`)):l++}m.innerHTML=`<div style="color:var(--green)">✅ ${l} clubs importés</div>
        ${y>0?`<div style="color:#c0392b">❌ ${y} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${l} clubs importés`,"success")}catch(c){m.innerHTML=`<span style="color:#c0392b">Erreur : ${c.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const m=document.getElementById("players-import-result");m.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const c=await i.text(),u=ze(c);if(u.length===0){m.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:l}=await E.from("clubs").select("id,encoded_name"),y={};(l||[]).forEach(g=>{y[g.encoded_name.toUpperCase()]=g.id});let o=0,s=0;const r=[],a=["GK","DEF","MIL","ATT"],p=["normal","pepite","papyte","legende"],d=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const g of u){if(!g.firstname||!g.surname_real||!g.country_code||!g.job){s++,r.push(`Ligne ignorée (champs requis manquants): ${g.firstname||"?"}`);continue}if(!a.includes(g.job)){s++,r.push(`${g.firstname}: job invalide "${g.job}"`);continue}const k=g.club_encoded_name&&y[g.club_encoded_name.toUpperCase()]||null,$={firstname:g.firstname,surname_real:g.surname_real,surname_real:g.surname_real||ue(g.surname_real),country_code:g.country_code.toUpperCase().slice(0,2),club_id:k,job:g.job,job2:a.includes(g.job2)?g.job2:null,note_g:parseInt(g.note_g)||0,note_d:parseInt(g.note_d)||0,note_m:parseInt(g.note_m)||0,note_a:parseInt(g.note_a)||0,rarity:p.includes(g.rarity)?g.rarity:"normal",note_min:g.note_min!==""&&g.note_min!=null?parseInt(g.note_min):null,note_max:g.note_max!==""&&g.note_max!=null?parseInt(g.note_max):null,skin:d.includes(g.skin)?g.skin:"blanc",hair:h.includes(g.hair)?g.hair:"noir",hair_length:w.includes(g.hair_length)?g.hair_length:"court",sell_price:parseInt(g.sell_price)||0},{error:v}=await E.from("players").insert($);v?(s++,r.push(`${g.firstname} ${g.surname_real}: ${v.message}`)):o++}m.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(c){m.innerHTML=`<span style="color:#c0392b">Erreur : ${c.message}</span>`}n.target.value=""})}function Ce(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function ie(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),m=document.createElement("a");m.href=i,m.download=e,m.click(),URL.revokeObjectURL(i)}function ze(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(u=>u.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",m=Ae(n,i).map(u=>u.trim().replace(/^\uFEFF/,"").toLowerCase()),c=[];for(let u=1;u<t.length;u++){if(!t[u].trim())continue;const l=Ae(t[u],i),y={};m.forEach((o,s)=>{y[o]=(l[s]||"").trim()}),!Object.values(y).every(o=>!o)&&c.push(y)}return c}function Ae(e,t=","){const n=[];let i="",m=!1;for(let c=0;c<e.length;c++){const u=e[c];m?u==='"'?e[c+1]==='"'?(i+='"',c++):m=!1:i+=u:u==='"'?m=!0:u===t?(n.push(i),i=""):i+=u}return n.push(i),n}const Yt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Zt(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:m}=await E.from("formation_links_overrides").select("formation, links"),c={};(m||[]).forEach(s=>{c[s.formation]=s.links});let u=new Set;function l(s,r){return[s,r].sort().join("-")}function y(s){const r=c[s]||me[s]||[];u=new Set(r.map(([a,p])=>l(a,p)))}y(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(s=>`<option value="${s}" ${s===i?"selected":""}>${s}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${u.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const s=bt[i]||{},r=ke(i),a=320,p=400,d=22;function h(v){const b=s[v];return b?{x:b.x*a,y:b.y*p}:null}let w=`<svg width="${a}" height="${p}" viewBox="0 0 ${a} ${p}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([v,b],f)=>{const x=h(v),_=h(b);if(!x||!_)return;const B=l(v,b),I=u.has(B),S=I?"#3b82f6":"#999",L=I?.95:.35,C=I?4:3;w+=`<line x1="${x.x}" y1="${x.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,w+=`<line x1="${x.x}" y1="${x.y}" x2="${_.x}" y2="${_.y}"
        stroke="${S}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${L}" pointer-events="none" data-line-key="${B}"/>`});for(const v of Object.keys(s)){const b=h(v);if(!b)continue;const f=v.replace(/\d+/,""),x=Yt[f]||"#555";w+=`<circle cx="${b.x}" cy="${b.y}" r="${d}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${b.x}" y="${b.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${v}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const g=document.getElementById("links-list");g.innerHTML=r.map(([v,b])=>{const f=l(v,b),x=u.has(f);return`
        <button class="link-toggle" data-key="${f}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${v} ↔ ${b}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${u.size}/${r.length} actifs)`);function $(v){u.has(v)?u.delete(v):u.add(v),o()}e.querySelectorAll(".link-hit").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",s=>{i=s.target.value,y(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const s=me[i]||[];u=new Set(s.map(([r,a])=>l(r,a))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=ke(i).filter(([p,d])=>u.has(l(p,d))),{error:a}=await E.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(a){t(a.message,"error");return}c[i]=r,t(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const Xt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Qt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],en=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function tn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("booster_configs").select("*").order("sort_order");let n=null,i=[],m=null;const c=()=>window.innerWidth<700;async function u(){if(!n){i=[];return}if(n!==m){const{data:r}=await E.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=r||[],m=n}}function l(){return`
    <div id="booster-list" style="background:#fff;${c()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(r=>`
      <div class="booster-row" data-id="${r.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===n?"#f0f7f0":"#fff"}">
        ${r.image_url?`<img src="/icons/${r.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.name}</div>
          <div style="font-size:11px;color:#888">
            ${r.price_type==="credits"?(r.price_credits||0)+" cr.":r.price_type==="pub"?"Pub":"Gratuit"}
            · ${r.card_count||5} cartes · ${r.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${r.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function y(){const r=n?(t||[]).find(d=>d.id===n):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=i.reduce((d,h)=>d+Number(h.percentage||0),0),p=Math.abs(a-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${c()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${r.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${r.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${r.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${r.image_url?`<img src="/icons/${r.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${en.map(d=>`<option value="${d.value}" ${r.price_type===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${r.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${r.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${r.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${r.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${r.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${r.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${r.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${r.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${p?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${p?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((d,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Xt.map(w=>`<option value="${w.value}" ${d.card_type===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Qt.map(w=>`<option value="${w.value}" ${(d.rarity||"")===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="0" max="20" value="${d.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="0" max="20" value="${d.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${h}" type="number" min="0.1" max="100" step="0.1" value="${d.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${h}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(r=!1){r||await u();const a=!n&&c(),p=n&&c();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!c()||a||!n?l():""}
      ${!c()||p?y():""}
    </div>`,s()}function s(){var p,d,h,w,g,k,$;const r=v=>e.querySelector(v);e.querySelectorAll(".booster-row").forEach(v=>{v.addEventListener("click",b=>{b.target.closest(".btn-delete")||(n=v.dataset.id,m=null,o())})}),(p=r("#btn-back"))==null||p.addEventListener("click",()=>{n=null,o()}),(d=r("#btn-new"))==null||d.addEventListener("click",async()=>{const v=prompt("Nom du nouveau booster :");if(!(v!=null&&v.trim()))return;const{data:b,error:f}=await E.from("booster_configs").insert({name:v.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(f){alert(f.message);return}t.push(b),n=b.id,m=null,o()}),e.querySelectorAll(".btn-delete").forEach(v=>{v.addEventListener("click",async b=>{if(b.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await E.from("booster_configs").delete().eq("id",v.dataset.id);const f=t.findIndex(x=>x.id===v.dataset.id);f>-1&&t.splice(f,1),n===v.dataset.id&&(n=null,m=null),o()})}),(h=r("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,o()}),(w=r("#f-price-type"))==null||w.addEventListener("change",v=>{const b=r("#credits-field");b&&(b.style.opacity=v.target.value!=="credits"?"0.4":"1")}),(g=r("#btn-pick-icon"))==null||g.addEventListener("click",async()=>{var b;const v=r("#icon-picker-grid");if(v){if(v.style.display!=="none"){v.style.display="none";return}v.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',v.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(x)?x.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){v.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((b=r("#f-image-url"))==null?void 0:b.value)||"";v.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,v.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const S=r("#f-image-url");S&&(S.value=I.dataset.name),v.style.display="none"})})}catch(f){v.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${f.message}</div>`}}});function a(){e.querySelectorAll("[data-rate-idx]").forEach(v=>{var f,x,_,B,I;const b=Number(v.dataset.rateIdx);b>=0&&b<i.length&&(i[b].card_type=((f=v.querySelector(".rate-type"))==null?void 0:f.value)||"player",i[b].rarity=((x=v.querySelector(".rate-rarity"))==null?void 0:x.value)||null,i[b].note_min=Number((_=v.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[b].note_max=Number((B=v.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[b].percentage=Number((I=v.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(k=r("#btn-add-rate"))==null||k.addEventListener("click",()=>{a(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(v=>{v.addEventListener("click",()=>{a(),i.splice(Number(v.dataset.idx),1),o(!0)})}),($=r("#btn-save"))==null||$.addEventListener("click",async()=>{var B,I,S,L,C,A,T,N,G,q,H,D,R;const v=(t||[]).find(z=>z.id===n);if(!v)return;const b=[];e.querySelectorAll("[data-rate-idx]").forEach(z=>{var W,Y,Z,X,Q;const K=Number(z.dataset.rateIdx);b.push({booster_id:n,card_type:((W=z.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Y=z.querySelector(".rate-rarity"))==null?void 0:Y.value)||null,note_min:Number((Z=z.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=z.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=z.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const P=b[b.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const f=b.reduce((z,K)=>z+K.percentage,0);if(b.length&&Math.abs(f-100)>.5){alert(`La somme doit faire 100% (actuellement ${f.toFixed(1)}%)`);return}const x={name:((I=(B=r("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||v.name,image_url:((L=(S=r("#f-image-url"))==null?void 0:S.value)==null?void 0:L.trim())||null,price_type:(C=r("#f-price-type"))==null?void 0:C.value,price_credits:Number((A=r("#f-price-credits"))==null?void 0:A.value)||0,card_count:Number((T=r("#f-card-count"))==null?void 0:T.value)||5,is_active:((N=r("#f-active"))==null?void 0:N.checked)??v.is_active,allow_duplicates:((G=r("#f-allow-dup"))==null?void 0:G.checked)??!0,sort_order:Number((q=r("#f-sort"))==null?void 0:q.value)||0,max_per_user:(H=r("#f-max-per-user"))!=null&&H.value?Number(r("#f-max-per-user").value):null,available_from:((D=r("#f-available-from"))==null?void 0:D.value)||null,available_until:((R=r("#f-available-until"))==null?void 0:R.value)||null},{error:_}=await E.from("booster_configs").update(x).eq("id",n);if(_){alert(_.message);return}if(Object.assign(v,x),await E.from("booster_drop_rates").delete().eq("booster_id",n),b.length){const{error:z}=await E.from("booster_drop_rates").insert(b);if(z){alert(z.message);return}}i=b,m=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const Qe=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function nn(e){await be(e)}async function be(e){const{data:t,error:n}=await E.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>on(i)).join("")}
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
              ${Qe.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Te(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>an(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const m=(t||[]).find(c=>c.id===i.dataset.edit);m&&i.addEventListener("click",()=>Te(m))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await E.from("sell_price_configs").delete().eq("id",i.dataset.delete),await be(e))})})}function on(e){const t=Qe.find(n=>n.value===e.rarity);return`
    <tr style="border-top:1px solid #f0f0f0">
      <td style="padding:10px 14px">
        <span style="font-weight:700;color:${(t==null?void 0:t.color)||"#888"}">${(t==null?void 0:t.label)||e.rarity}</span>
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
    </tr>`}function Te(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function an(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,m=parseInt(document.getElementById("form-note-min").value)||1,c=parseInt(document.getElementById("form-note-max").value)||10;if(m>c){alert("Note min doit être ≤ note max");return}const u={rarity:n,price:i,note_min:m,note_max:c,updated_at:new Date().toISOString()};let l;if(t?{error:l}=await E.from("sell_price_configs").update(u).eq("id",t):{error:l}=await E.from("sell_price_configs").insert(u),l){alert("Erreur : "+l.message);return}document.getElementById("config-form").style.display="none",await be(e)}async function rn(e){await ye(e)}async function ye(e){const{data:t}=await E.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>ln(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
      </div>

      <!-- Formulaire -->
      <div id="article-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
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
            <label style="font-size:12px;font-weight:700;color:#555;display:block;margin-bottom:4px">URL IMAGE (optionnel)</label>
            <input id="form-art-img" placeholder="https://... ou chemin relatif" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Me(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>sn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(m=>m.id===n.dataset.edit);i&&n.addEventListener("click",()=>Me(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await E.from("patch_notes").delete().eq("id",n.dataset.delete),await ye(e))})})}function ln(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${t}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`}function Me(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function sn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),m=document.getElementById("form-art-img").value.trim()||null,c=document.getElementById("form-art-pub").checked,u=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const l=u?new Date(u).toISOString():new Date().toISOString(),y={title:n,description:i,image_url:m,is_published:c,published_at:l};let o;if(t?{error:o}=await E.from("patch_notes").update(y).eq("id",t):{error:o}=await E.from("patch_notes").insert(y),o){alert("Erreur : "+o.message);return}document.getElementById("article-form").style.display="none",await ye(e)}async function dn(e){await J(e)}async function J(e){var s,r,a,p,d,h,w,g,k,$,v,b;const{data:t}=await E.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div>
          <h2 style="font-size:20px;font-weight:900">🎓 Tutoriel — Étapes</h2>
          <div style="font-size:12px;color:#888;margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
        </div>
        <div style="display:flex;gap:8px">
          <button id="ts-reset" class="btn btn-ghost btn-sm" style="color:#7a28b8" title="Réinitialiser tutorial_done pour tous les joueurs">🔄 Reset tutos</button>
          <button id="ts-add" class="btn btn-primary">+ Ajouter</button>
        </div>
      </div>

      <div id="ts-list" style="display:flex;flex-direction:column;gap:10px">
        ${(t||[]).length===0?`
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>`:(t||[]).map(f=>cn(f)).join("")}
      </div>

      <!-- Formulaire -->
      <div id="ts-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([f,x,_])=>`<button type="button" data-cmd="${x}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${f}</button>`).join("")}
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
      </div>
    </div>`,(s=document.getElementById("ts-add"))==null||s.addEventListener("click",()=>je(null,(t==null?void 0:t.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:f}=await E.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(f?"Erreur : "+f.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(a=document.getElementById("ts-cancel"))==null||a.addEventListener("click",et),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>un(e)),(d=document.getElementById("ts-preview-btn"))==null||d.addEventListener("click",pn);const n=document.getElementById("ts-editor"),i=()=>{const f=document.getElementById("ts-content");f&&n&&(f.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const m=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(f=>{f.addEventListener("mousedown",x=>{x.preventDefault(),m();const _=f.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",f=>{f.preventDefault(),m();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),i())}),(g=document.getElementById("ts-clear-format"))==null||g.addEventListener("mousedown",f=>{f.preventDefault(),m(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const c=document.getElementById("ts-image"),u=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el"),y=document.getElementById("ts-img-picker-grid"),o=()=>{var x;const f=(x=c==null?void 0:c.value)==null?void 0:x.trim();if(f){const _="/";l.src=`${_}icons/${f}`,u.style.display="block"}else u.style.display="none"};c==null||c.addEventListener("input",o),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{c&&(c.value=""),u.style.display="none",y.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',y.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(x)?x.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){y.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";y.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",y.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{c&&(c.value=I.dataset.pick),o(),y.style.display="none"})})}catch(f){y.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+f.message+"</div>"}}),(v=document.getElementById("ts-color"))==null||v.addEventListener("input",f=>{const x=document.getElementById("ts-color-hex");x&&(x.value=f.target.value)}),(b=document.getElementById("ts-color-hex"))==null||b.addEventListener("input",f=>{const x=f.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const _=document.getElementById("ts-color");_&&(_.value=x)}}),e.querySelectorAll("[data-edit]").forEach(f=>{const x=(t||[]).find(_=>_.id===f.dataset.edit);x&&f.addEventListener("click",()=>je(x))}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await E.from("tutorial_steps").delete().eq("id",f.dataset.delete),J(e))})}),e.querySelectorAll("[data-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const x=(t||[]).find(_=>_.id===f.dataset.toggle);x&&(await E.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),J(e))})}),e.querySelectorAll("[data-up]").forEach(f=>{f.addEventListener("click",async()=>{const x=t||[],_=x.findIndex(B=>B.id===f.dataset.up);_<=0||(await Promise.all([E.from("tutorial_steps").update({step_order:x[_-1].step_order}).eq("id",x[_].id),E.from("tutorial_steps").update({step_order:x[_].step_order}).eq("id",x[_-1].id)]),J(e))})}),e.querySelectorAll("[data-down]").forEach(f=>{f.addEventListener("click",async()=>{const x=t||[],_=x.findIndex(B=>B.id===f.dataset.down);_<0||_>=x.length-1||(await Promise.all([E.from("tutorial_steps").update({step_order:x[_+1].step_order}).eq("id",x[_].id),E.from("tutorial_steps").update({step_order:x[_].step_order}).eq("id",x[_+1].id)]),J(e))})})}function cn(e){return`
  <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
    <div style="font-size:28px;flex-shrink:0;width:40px;text-align:center">${e.emoji}</div>
    <div style="width:10px;height:36px;border-radius:4px;flex-shrink:0;background:${e.color}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.title}</div>
      <div style="font-size:11px;color:#aaa;margin-top:2px">Ordre : ${e.step_order} · ${e.is_active?"🟢 Active":"🔴 Désactivée"}</div>
    </div>
    <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
      <button data-up="${e.id}" class="btn btn-ghost btn-sm" title="Monter" style="padding:4px 8px">↑</button>
      <button data-down="${e.id}" class="btn btn-ghost btn-sm" title="Descendre" style="padding:4px 8px">↓</button>
      <button data-toggle="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">${e.is_active?"🔴 Désactiver":"🟢 Activer"}</button>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm" style="padding:4px 8px">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222;padding:4px 8px">🗑️</button>
    </div>
  </div>`}function je(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const m=(e==null?void 0:e.image_url)||"",c=document.getElementById("ts-image");c&&(c.value=m);const u=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el");if(m&&u&&l){const y="/";l.src=`${y}icons/${m}`,u.style.display="block"}else u&&(u.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function et(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function pn(){var o,s;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",m=document.getElementById("ts-color-hex").value||"#1A6B3C",c=(s=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:s.trim(),l=c?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${c}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",y=document.getElementById("ts-preview-area");y.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${m}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${l}
        <div style="padding:${c?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${m};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,y.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),y.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),y.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function un(e){var r,a;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),m=document.getElementById("ts-editor"),c=(m?m.innerHTML:document.getElementById("ts-content").value).trim(),u=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",l=parseInt(document.getElementById("ts-order").value)||0,y=document.getElementById("ts-active").checked;if(!i||!c){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:c,color:u,step_order:l,is_active:y,image_url:((a=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:a.trim())||null};let s;if(t?{error:s}=await E.from("tutorial_steps").update(o).eq("id",t):{error:s}=await E.from("tutorial_steps").insert(o),s){alert("Erreur : "+s.message);return}et(),J(e)}const mn="/",gn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function fn(e){await xe(e)}async function xe(e){var i,m,c,u;const[{data:t},{data:n}]=await Promise.all([E.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),E.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:#1a1a1a">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(l=>bn(l)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
      </div>

      <!-- Formulaire -->
      <div id="st-form" style="display:none;margin-top:24px;background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 8px rgba(0,0,0,0.1)">
        <h3 id="st-form-title" style="font-size:16px;font-weight:900;margin-bottom:16px">Nouveau stade</h3>
        <input type="hidden" id="st-id">
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          <!-- Formulaire gauche -->
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:12px">
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">NOM DU STADE *</label>
              <input id="st-name" placeholder="Ex: Stade de France" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">CLUB AFFILIÉ (optionnel)</label>
              <select id="st-club" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">-- Aucun club (bonus pays) --</option>
                ${(n||[]).map(l=>`<option value="${l.id}" data-logo="${l.logo_url||""}">${l.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${gn.map(([l,y])=>`<option value="${l}">${y} (${l})</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">IMAGE (icône du stade)</label>
              <input id="st-image" placeholder="logo_club.png" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px">
            </div>
          </div>
          <!-- Aperçu carte -->
          <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:8px">
            <div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Aperçu carte</div>
            <div id="st-preview-card" style="width:140px"></div>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin-top:16px">
          <button id="st-cancel" class="btn btn-ghost" style="flex:1">Annuler</button>
          <button id="st-preview-btn" class="btn btn-ghost" style="flex:1">👁️ Aperçu</button>
          <button id="st-save" class="btn btn-primary" style="flex:1">Enregistrer</button>
        </div>
      </div>
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Re(null)),(m=document.getElementById("st-cancel"))==null||m.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(c=document.getElementById("st-save"))==null||c.addEventListener("click",()=>yn(e)),(u=document.getElementById("st-preview-btn"))==null||u.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(l=>{var y,o;(y=document.getElementById(l))==null||y.addEventListener("input",se),(o=document.getElementById(l))==null||o.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(l=>{const y=(t||[]).find(o=>o.id===l.dataset.edit);y&&l.addEventListener("click",()=>Re(y))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await E.from("stadium_definitions").delete().eq("id",l.dataset.delete),xe(e))})})}function bn(e){var n,i;let t;return(n=e.club)!=null&&n.logo_url?t=`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:e.country_code?t=`<img src="https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/32.png" style="width:32px;height:24px;object-fit:contain;border-radius:3px" onerror="this.style.display='none'">`:t='<span style="font-size:20px">🌍</span>',`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:#4FC3F7;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900;color:#1a1a1a">${e.name}</div>
        <div style="font-size:11px;color:#888">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Re(e,t){var i,m;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(m=e==null?void 0:e.club)==null?void 0:m.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var o,s,r,a,p,d,h;const e=((o=document.getElementById("st-name"))==null?void 0:o.value)||"NOM DU STADE",t=(r=(s=document.getElementById("st-image"))==null?void 0:s.value)==null?void 0:r.trim(),n=(p=(a=document.getElementById("st-country"))==null?void 0:a.value)==null?void 0:p.trim(),i=document.getElementById("st-club"),m=(i==null?void 0:i.selectedIndex)||0,c=i&&m>0?i.options[m].text:"",u=((h=(d=i==null?void 0:i.options[m])==null?void 0:d.getAttribute)==null?void 0:h.call(d,"data-logo"))||"";let l=null;t?l=`${mn}icons/${t}`:u?l=u:n&&(l=`https://flagsapi.com/${n.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const y=c||n||"—";document.getElementById("st-preview-card").innerHTML=yt(e,l,`${y}<br>+10 ⭐`,{width:140})}async function yn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,m=document.getElementById("st-country").value.trim().toUpperCase()||null,c=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const u={name:n,club_id:i,country_code:m,image_url:c},{error:l}=t?await E.from("stadium_definitions").update(u).eq("id",t):await E.from("stadium_definitions").insert(u);if(l){alert("Erreur : "+l.message);return}document.getElementById("st-form").style.display="none",xe(e)}const O=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ne=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function xn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],m=["GK","DEF","MIL","ATT"],c=()=>window.innerWidth<700,u=a=>e.querySelector(a);function l(a,p=130){if(!a)return"";const d=O.find(w=>w.value===a.gc_type)||O[0],h=a.image_url?`/icons/${a.image_url}`:null;return xt(a.name||"?",h,d.label.split(" ")[0],a.effect||"",{width:p})}function y(){return`
    <div id="gc-list" style="background:#fff;${c()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(a=>{const p=O.find(h=>h.value===a.gc_type)||O[0],d=ne.find(h=>h.value===a.color)||ne[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${d.hex};background:${p.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:p.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${p.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${a.id}" data-active="${a.is_active}"
              style="background:${a.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${a.is_active?"#27ae60":"#e74c3c"};color:${a.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${a.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${a.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function o(){const a=n?(t||[]).find(p=>p.id===n):null;return a?(O.find(p=>p.value===a.gc_type)||O[0],ne.find(p=>p.value===a.color)||ne[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${c()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${l(a,c()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${a.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${a.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${O.map(p=>`<option value="${p.value}" ${a.gc_type===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ne.map(p=>`<option value="${p.value}" ${a.color===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${a.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${a.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${a.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(p=>`<option value="${p.value}" ${(a.effect_type||"BOOST_STAT")===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const p=a.effect_params||{},d=i.find(h=>h.value===(a.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${d.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${p.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${d.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${p.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${d.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(p.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${p.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${d.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${m.map(h=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${h}" ${!p.roles||p.roles.includes(h)?"checked":""}> ${h}
                  </label>`).join("")}
                </div>
              </div>`:""}
            </div>`})()}
        </div>
      </div>

      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save-gc" style="flex:1;background:#7a28b8;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel-gc" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`):`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`}function s(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!c()||!n?y():""}
      ${!c()||n?o():""}
    </div>`,r()}function r(){var a,p,d,h,w;e.querySelectorAll(".gc-row").forEach(g=>{g.addEventListener("click",k=>{k.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=g.dataset.id,s())})}),(a=u("#btn-gc-back"))==null||a.addEventListener("click",()=>{n=null,s()}),(p=u("#btn-cancel-gc"))==null||p.addEventListener("click",()=>{n=null,s()}),(d=u("#btn-new-gc"))==null||d.addEventListener("click",async()=>{const g=prompt("Nom de la carte Game Changer :");if(!(g!=null&&g.trim()))return;const{data:k,error:$}=await E.from("gc_definitions").insert({name:g.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(k),n=k.id,s()}),e.querySelectorAll(".btn-toggle-gc").forEach(g=>{g.addEventListener("click",async k=>{k.stopPropagation();const $=g.dataset.active!=="true";await E.from("gc_definitions").update({is_active:$}).eq("id",g.dataset.id);const v=t.find(b=>b.id===g.dataset.id);v&&(v.is_active=$),s()})}),e.querySelectorAll(".btn-delete-gc").forEach(g=>{g.addEventListener("click",async k=>{if(k.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await E.from("gc_definitions").delete().eq("id",g.dataset.id);const $=t.findIndex(v=>v.id===g.dataset.id);$>-1&&t.splice($,1),n===g.dataset.id&&(n=null),s()})}),(h=u("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var k;const g=u("#gc-icon-picker");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),b=Array.isArray(v)?v.filter(x=>x.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(x.name)):[];if(!b.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const f=((k=u("#gc-image-url"))==null?void 0:k.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${b.map(x=>`
          <div class="gc-icon-item" data-name="${x.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${x.name===f?"#7a28b8":"#ddd"};background:${x.name===f?"#f5f0ff":"#fff"}">
            <img src="/icons/${x.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".gc-icon-item").forEach(x=>{x.addEventListener("click",()=>{const _=u("#gc-image-url");_&&(_.value=x.dataset.name),g.style.display="none"})})}catch($){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(w=u("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var x,_,B,I,S,L,C,A,T,N,G,q,H,D;const g=t.find(R=>R.id===n);if(!g)return;const k=i.find(R=>{var z;return R.value===(((z=u("#gc-effect-type"))==null?void 0:z.value)||"BOOST_STAT")})||i[0],$=k.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(R=>R.value):null,v={...k.hasValue?{value:Number((x=u("#gc-p-value"))==null?void 0:x.value)||2}:{},...k.hasCount?{count:Number((_=u("#gc-p-count"))==null?void 0:_.value)||1}:{},...k.hasTarget?{target:((B=u("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...k.hasRoles?{roles:$!=null&&$.length?$:null}:{}},b={name:((S=(I=u("#gc-name"))==null?void 0:I.value)==null?void 0:S.trim())||g.name,effect:((C=(L=u("#gc-effect"))==null?void 0:L.value)==null?void 0:C.trim())||null,image_url:((T=(A=u("#gc-image-url"))==null?void 0:A.value)==null?void 0:T.trim())||null,gc_type:((N=u("#gc-type"))==null?void 0:N.value)||"game_changer",color:((G=u("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((q=u("#gc-sort"))==null?void 0:q.value)||0,is_active:((H=u("#gc-active"))==null?void 0:H.checked)??g.is_active,effect_type:((D=u("#gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT",effect_params:v},{error:f}=await E.from("gc_definitions").update(b).eq("id",n);if(f){alert(f.message);return}Object.assign(g,b),alert("✅ Carte enregistrée !"),s()})}s()}async function vn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var v;const{toast:n,openModal:i,closeModal:m}=t,[{data:c,error:u},{data:l}]=await Promise.all([E.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),E.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(u){e.innerHTML=`<p style="color:red">${u.message}</p>`;return}const y=c||[],o=y.find(b=>b.is_active),s=(l||[]).filter(b=>(b.placement_matches||0)>=1),r=s.filter(b=>(b.placement_matches||0)>=10),a=["bronze","silver","gold","platinum","diamond","master"],p={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},d={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};a.forEach(b=>{w[b]=0}),r.forEach(b=>{const f=b.rank_tier||"bronze";w[f]!==void 0&&w[f]++});const g=r.length?Math.round(r.reduce((b,f)=>b+(f.mmr||1e3),0)/r.length):0;function k(b){return b?new Date(b).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(b){const f=new Date;return b.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(b.end_at)<f?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${s.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${g}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${a.map(b=>{const f=w[b],x=r.length>0?Math.round(f/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[b]} ${p[b]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${d[b]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${f} (${x}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${y.length})</div>
        <button class="btn btn-primary" id="create-season-btn">+ Nouvelle saison</button>
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
              ${y.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':y.map(b=>{const f=Math.round((new Date(b.end_at)-new Date(b.start_at))/864e5),x=new Date(b.end_at)<new Date&&!b.is_active;return`
                    <tr>
                      <td><b>${b.name}</b></td>
                      <td style="font-size:12px">${k(b.start_at)}</td>
                      <td style="font-size:12px">${k(b.end_at)}</td>
                      <td style="font-size:12px">${f} jours</td>
                      <td>${$(b)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${b.id}">✏️ Modifier</button>
                        ${b.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${b.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${b.id}">▶ Activer</button>`}
                        ${x?`<button class="btn btn-danger btn-sm" data-delete="${b.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(v=document.getElementById("create-season-btn"))==null||v.addEventListener("click",()=>{De(null,{toast:n,openModal:i,closeModal:m,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(b=>{const f=y.find(x=>x.id==b.dataset.edit);b.addEventListener("click",()=>{De(f,{toast:n,openModal:i,closeModal:m,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(b=>{b.addEventListener("click",async()=>{const f=parseInt(b.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await E.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:_}=await E.from("ranked_seasons").update({is_active:!0}).eq("id",f);if(_){n(_.message,"error");return}await E.from("users").update({current_season_id:f}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:f}=await E.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(b.dataset.deactivate));if(f){n(f.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:f}=await E.from("ranked_seasons").delete().eq("id",parseInt(b.dataset.delete));if(f){n(f.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function De(e,{toast:t,openModal:n,closeModal:i,reload:m}){const c=!!e,u=new Date().toISOString().slice(0,16),l=new Date(Date.now()+90*864e5).toISOString().slice(0,16),y=e?new Date(e.start_at).toISOString().slice(0,16):u,o=e?new Date(e.end_at).toISOString().slice(0,16):l,s=(e==null?void 0:e.name)||"";n(c?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${s}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${y}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${c?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var w,g;const a=(w=document.getElementById("season-start"))==null?void 0:w.value,p=(g=document.getElementById("season-end"))==null?void 0:g.value,d=document.getElementById("season-duration");if(!a||!p||!d)return;const h=Math.round((new Date(p)-new Date(a))/864e5);d.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",d.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var a,p,d;(a=document.getElementById("season-start"))==null||a.addEventListener("input",r),(p=document.getElementById("season-end"))==null||p.addEventListener("input",r),r(),(d=document.getElementById("season-save-btn"))==null||d.addEventListener("click",async()=>{var f,x,_;const h=(f=document.getElementById("season-name"))==null?void 0:f.value.trim(),w=(x=document.getElementById("season-start"))==null?void 0:x.value,g=(_=document.getElementById("season-end"))==null?void 0:_.value,k=document.getElementById("season-error");if(!h){k.textContent="Le nom est requis.";return}if(!w){k.textContent="La date de début est requise.";return}if(!g){k.textContent="La date de fin est requise.";return}if(new Date(g)<=new Date(w)){k.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const v={name:h,start_at:new Date(w).toISOString(),end_at:new Date(g).toISOString()};let b;if(c?{error:b}=await E.from("ranked_seasons").update(v).eq("id",e.id):{error:b}=await E.from("ranked_seasons").insert({...v,is_active:!1}),b){k.textContent=b.message,$.disabled=!1,$.textContent=c?"💾 Enregistrer":"✅ Créer la saison";return}t(c?"Saison modifiée ✅":"Saison créée ✅","success"),i(),m()})},50)}vt(He);function hn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function En(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function fe(){document.getElementById("modal-overlay").classList.add("hidden")}const Pe={dashboard:{title:"Dashboard",fn:ht},players:{title:"Joueurs & Cartes",fn:kt},clubs:{title:"Clubs",fn:Nt},"card-builder":{title:"Card Builder",fn:Ot},users:{title:"Managers",fn:Ze},market:{title:"Marché des transferts",fn:Xe},"import-export":{title:"Import / Export CSV",fn:Wt},formations:{title:"Formations & Liens",fn:Zt},"boosters-config":{title:"Boosters",fn:tn},"sell-price":{title:"Prix vente directe",fn:nn},journal:{title:"Journal",fn:rn},tutorial:{title:"Tutoriel",fn:dn},stadiums:{title:"Stades",fn},"gc-cards":{title:"Game Changers",fn:xn},"ranked-seasons":{title:"Saisons Ranked",fn:vn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(m=>{m.classList.toggle("active",m.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Pe[e]||Pe.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:hn,openModal:En,closeModal:fe,navigate:pe})}catch(m){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${m.message}</div>`,console.error(m)}}async function wn(){var t;const{data:{session:e}}=await E.auth.getSession();e&&await Ne(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,m=document.getElementById("auth-error");if(m.textContent="",!n||!i){m.textContent="Remplissez tous les champs.";return}const{data:c,error:u}=await E.auth.signInWithPassword({email:n,password:i});if(u){m.textContent=u.message;return}await Ne(c.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",fe),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&fe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Ne(e){const{data:t,error:n}=await E.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await E.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}wn();
