import{s as w,r as Ne,g as Pe,K as Ee,D as S,S as tt,a as j,H as nt,R as it,e as ue,b as qe,c as ot,d as at,E as rt,f as lt,N as st,M as dt,B as ct,h as pt,F as me,i as we,j as ut,k as mt}from"./formation-links-DbBZzHQV.js";async function ft(e){const[{count:t},{count:n},{count:i},{count:p},{count:d}]=await Promise.all([w.from("players").select("*",{count:"exact",head:!0}),w.from("clubs").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}),w.from("cards").select("*",{count:"exact",head:!0}),w.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${te("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${te("🏟️","Clubs",n??"–","#D4A017")}
      ${te("👥","Managers",i??"–","#7a28b8")}
      ${te("📦","Cartes possédées",p??"–","#2a8f52")}
      ${te("⚽","Matchs joués",d??"–","#bb2020")}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
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
  `,window.adminNav=c=>{var l;(l=document.querySelector(`[data-page="${c}"]`))==null||l.click()}}function te(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const Oe="/",Fe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},gt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let ne=null;async function bt(){if(ne)return ne;try{ne=await(await fetch(Oe+"faces-manifest.json")).json()}catch{ne={}}return ne}async function xt(e,t){await de(e,t)}async function de(e,t,n=null){var a,g,s,o,r;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((g=document.getElementById("filter-job"))==null?void 0:g.value)||"",rarity:((s=document.getElementById("filter-rarity"))==null?void 0:s.value)||"",club:((o=document.getElementById("filter-club"))==null?void 0:o.value)||"",country:((r=document.getElementById("filter-country"))==null?void 0:r.value)||""});const[{data:p,error:d},{data:c}]=await Promise.all([w.from("players").select("*, clubs(id,encoded_name,logo_url)"),w.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const l={GK:0,DEF:1,MIL:2,ATT:3},b=(p||[]).sort((u,h)=>{const E=(l[u.job]??4)-(l[h.job]??4);return E!==0?E:(u.surname_real||"").localeCompare(h.surname_real||"")});yt(e,b,c||[],t,n)}function yt(e,t,n,i,p=null){var g,s;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(Fe).map(([o,r])=>`<option value="${o}">${r}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(o=>`<option value="${o.id}">${o.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(o=>o.country_code).filter(Boolean))].sort().map(o=>`<option value="${o}">${o}</option>`).join("")}
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
    </div>`,p){const o=p,r=u=>document.getElementById(u);o.search&&r("search-players")&&(r("search-players").value=o.search),o.job&&r("filter-job")&&(r("filter-job").value=o.job),o.rarity&&r("filter-rarity")&&(r("filter-rarity").value=o.rarity),o.club&&r("filter-club")&&(r("filter-club").value=o.club),o.country&&r("filter-country")&&(r("filter-country").value=o.country)}if(p){const o=p,r=u=>document.getElementById(u);o.search&&r("search-players")&&(r("search-players").value=o.search),o.job&&r("filter-job")&&(r("filter-job").value=o.job),o.rarity&&r("filter-rarity")&&(r("filter-rarity").value=o.rarity),o.club&&r("filter-club")&&(r("filter-club").value=o.club),o.country&&r("filter-country")&&(r("filter-country").value=o.country)}function c(){const o=document.getElementById("search-players").value.toLowerCase(),r=document.getElementById("filter-job").value,u=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return t.filter(m=>(!o||`${m.firstname} ${m.surname_real}`.toLowerCase().includes(o))&&(!r||m.job===r)&&(!u||m.rarity===u)&&(!h||m.club_id===h)&&(!E||m.country_code===E))}const l=new Set;function b(){const o=document.getElementById("bulk-bar"),r=document.getElementById("bulk-count");o&&(o.style.display=l.size>0?"flex":"none",r&&(r.textContent=`${l.size} joueur(s) sélectionné(s)`))}function a(){const o=c();document.getElementById("count-label").textContent=`${o.length} joueur(s)`;const r=document.getElementById("players-list");if(!o.length){r.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}r.innerHTML=o.map(u=>{const h={...u,clubs:u.clubs,face:u.face||null},E=Ne(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${u.id}">
        ${E}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${u.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),r.querySelectorAll("[data-edit]").forEach(u=>{u.addEventListener("click",()=>{const h=t.find(E=>E.id===u.dataset.edit);h&&_e(h,n,e,i)})}),r.querySelectorAll(".btn-del-player").forEach(u=>{u.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:E}=await w.from("players").delete().eq("id",u.dataset.del);E?d(E.message,"error"):(d("Joueur supprimé ✅","success"),de(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(g=document.getElementById("bulk-cancel-btn"))==null||g.addEventListener("click",()=>{l.clear(),b(),a()}),(s=document.getElementById("bulk-delete-btn"))==null||s.addEventListener("click",async()=>{var h,E,m,_,$;if(!l.size||!confirm(`Supprimer ${l.size} joueur(s) ?`))return;const o=[...l],{error:r}=await w.from("players").delete().in("id",o);if(r){d(r.message,"error");return}d(`${o.length} joueur(s) supprimé(s) ✅`,"success"),l.clear();const u={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((E=document.getElementById("filter-job"))==null?void 0:E.value)||"",rarity:((m=document.getElementById("filter-rarity"))==null?void 0:m.value)||"",club:((_=document.getElementById("filter-club"))==null?void 0:_.value)||"",country:(($=document.getElementById("filter-country"))==null?void 0:$.value)||""};de(e,i,u)}),document.getElementById("add-player-btn").addEventListener("click",()=>_e(null,n,e,i))}async function _e(e,t,n,i){const{toast:p,openModal:d,closeModal:c}=i,l=!!e,b=await bt(),{data:a}=await w.from("players").select("face").not("face","is",null),g=new Set((a||[]).map(r=>r.face?r.face.replace("public/faces/",""):null).filter(Boolean));e!=null&&e.face&&g.delete(e.face);const s='<option value="">— Club —</option>'+t.map(r=>`<option value="${r.id}" ${(e==null?void 0:e.club_id)===r.id?"selected":""}>${r.encoded_name}</option>`).join(""),o=Object.keys(b).map(r=>{var u;return`<option value="${r}" ${(e==null?void 0:e.ethnie)===r||!(e!=null&&e.ethnie)&&((u=e==null?void 0:e.face)!=null&&u.startsWith(r))?"selected":""}>${r}</option>`}).join("");d(l?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(r=>`<option value="${r}" ${(e==null?void 0:e.job)===r?"selected":""}>${r}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(r=>`<option value="${r}" ${(e==null?void 0:e.job2)===r?"selected":""}>${r}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(r=>`<option value="${r}" ${(e==null?void 0:e.rarity)===r?"selected":""}>${Fe[r]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(r=>`<option value="${r}" ${((e==null?void 0:e.country_code)||"FR")===r?"selected":""}>${r}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${s}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([r,u,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${gt[r]};font-weight:700">${r}</label>
                <input id="${u}" type="number" min="0" max="20" value="${(e==null?void 0:e[h])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
              <label>Ethnie</label>
              <select id="pm-folder">
                <option value="">— Choisir —</option>
                ${o}
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
    </div>`),setTimeout(()=>{var _,$,y;let r=e!=null&&e.face?e.face.replace("public/faces/",""):null;function u(){var A,K,D,W,Z,X,Q,ee,ye,ve,he;const f=document.getElementById("card-preview");if(!f)return;const x=((A=document.getElementById("pm-fn"))==null?void 0:A.value)||"",v=(((K=document.getElementById("pm-real"))==null?void 0:K.value)||"").toUpperCase(),k=((D=document.getElementById("pm-job"))==null?void 0:D.value)||"ATT",B=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,I=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",L=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",z=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const P=parseInt((ee=document.getElementById("pm-g"))==null?void 0:ee.value)||0,q=parseInt((ye=document.getElementById("pm-d"))==null?void 0:ye.value)||0,O=parseInt((ve=document.getElementById("pm-m"))==null?void 0:ve.value)||0,F=parseInt((he=document.getElementById("pm-a"))==null?void 0:he.value)||0,R=t.find(et=>et.id===z),H={firstname:x||"Prénom",surname_real:v||"NOM",job:k,job2:B||null,rarity:I,country_code:L,club_id:z,note_g:P,note_d:q,note_m:O,note_a:F,face:r?"faces/"+r:null,clubs:R?{encoded_name:R.encoded_name,logo_url:R.logo_url}:null};f.innerHTML=Ne(H,{width:160});const M=document.getElementById("pm-minmax");M&&(M.style.display=["pepite","papyte"].includes(I)?"grid":"none")}function h(f){const x=document.getElementById("faces-grid"),v=document.getElementById("pm-face");if(!x||!v)return;const B=(b[f]||[]).filter(I=>{const L=f+"/"+I;return L===r||!g.has(L)});v.innerHTML='<option value="">— Choisir un visage —</option>'+B.map(I=>{const L=f+"/"+I;return`<option value="${L}" ${r===L?"selected":""}>${I}</option>`}).join(""),x.innerHTML=B.map(I=>{const L=f+"/"+I;return`<div data-face="${L}" style="cursor:pointer;border:2px solid ${r===L?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${Oe}faces/${L}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),x.querySelectorAll("[data-face]").forEach(I=>{I.addEventListener("click",()=>{r=I.dataset.face;const L=document.getElementById("pm-face");L&&(L.value=r),x.querySelectorAll("[data-face]").forEach(z=>{z.style.border=`2px solid ${z.dataset.face===r?"#4fc3f7":"transparent"}`}),u()})})}const E=(e==null?void 0:e.ethnie)||(e!=null&&e.face?e.face.replace("public/faces/","").split("/")[0]:"");E&&b[E]&&(document.getElementById("pm-folder").value=E,h(E)),(_=document.getElementById("pm-folder"))==null||_.addEventListener("change",f=>{h(f.target.value)}),($=document.getElementById("pm-face"))==null||$.addEventListener("change",f=>{r=f.target.value||null,u()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(f=>{var x,v;(x=document.getElementById(f))==null||x.addEventListener("input",u),(v=document.getElementById(f))==null||v.addEventListener("change",u)}),(y=document.getElementById("pm-save"))==null||y.addEventListener("click",()=>ht(e,l,r,n,i)),u()},50)}function vt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e?"public/faces/"+e:null,ethnie:t("pm-folder")||null,is_active:!0}}async function ht(e,t,n,i,p){var r,u,h,E,m;const{toast:d,closeModal:c}=p,l=document.getElementById("pm-error"),b=document.getElementById("pm-save"),a=vt(n);if(!a.firstname){l.textContent="Le prénom est requis.";return}if(!a.surname_real){l.textContent="Le nom est requis.";return}b.disabled=!0,b.textContent="Enregistrement…";const g=a,{error:s}=t?await w.from("players").update({...g,updated_at:new Date().toISOString()}).eq("id",e.id):await w.from("players").insert(g);if(s){l.textContent=s.message,b.disabled=!1,b.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),c();const o={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((E=document.getElementById("filter-club"))==null?void 0:E.value)||"",country:((m=document.getElementById("filter-country"))==null?void 0:m.value)||""};de(i,p,o)}const Et={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},wt=["rase","court","milong","long"];function _t(e){const t=Ge(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function $t(e){return Math.random()<.05?"chauve":_t(e)}const He=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ge(e){return Et[e]||"blanc"}function kt(e){return $t(e)}function It(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ae(e){return e[Math.floor(Math.random()*e.length)]}function Bt(e){const t=He.filter(n=>n!==e);return ae(t)}function $e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}function Lt(e,t){const n=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],p=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],d=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],c=new Set(d.sort(()=>Math.random()-.5).slice(0,4)),l=[...d].sort(()=>Math.random()-.5),b=new Set(l.slice(0,2)),a=new Set(l.slice(2,4)),g=10,s=p.map((o,r)=>r<g);for(let o=s.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[s[o],s[r]]=[s[r],s[o]]}return p.map((o,r)=>{const u=s[r]?t:Bt(t),h=Ge(u),E=kt(u),m=ae(wt),_=It(1,20),$=c.has(r),y=$?Math.max(0,_-2):0;let f=0,x=0,v=0,k=0,B=null;o==="GK"?f=_:o==="DEF"?(x=_,$&&(v=y,B="MIL")):o==="ATT"?(k=_,$&&(v=y,B="MIL")):(v=_,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(x=y,B="DEF"):(k=y,B="ATT")));const I=b.has(r)?"pepite":a.has(r)?"papyte":"normal",L=ae(i),z=L.toUpperCase();return{job:o,job2:B,firstname:ae(n),surname_real:L,surname_real:z,country_code:u,club_id:e,note_g:f,note_d:x,note_m:v,note_a:k,skin:h,hair:E,hair_length:m,rarity:I,sell_price:0,ethnie:$e(u),_ethnie:$e(u)}})}async function Ue(e,t,n){const i=Lt(e,t);let p={};try{p=await(await fetch(BASE+"faces-manifest.json")).json()}catch{console.warn("Manifest faces non chargé")}const{data:d}=await w.from("players").select("face").not("face","is",null),c=new Set((d||[]).map(o=>o.face).filter(Boolean)),l=new Set;for(const o of i){const r=o._ethnie||"Europeans",E=[...p[r]||[]].sort(()=>Math.random()-.5).find(m=>{const _="public/faces/"+r+"/"+m;return!c.has(_)&&!l.has(_)});if(E){const m="public/faces/"+r+"/"+E;o.face=m,l.add(m)}delete o._ethnie}const{data:b,error:a}=await w.from("players").insert(i).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const g=(b||[]).map(o=>({card_type:"player",player_id:o.id}));if(g.length){const{error:o}=await w.from("cards").insert(g);o&&console.warn("[GenSquad] Erreur cartes:",o.message)}const s=(b==null?void 0:b.length)||0;console.log("[GenSquad] Créés:",s,"/",i.length),s>0?n(`${s} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Ve(e){return{style:e.kit_style||S.style,color1:e.kit_color1||S.color1,color2:e.kit_color2||S.color2,color3:e.kit_color3||S.color3,shorts:e.kit_shorts||S.shorts,socks:e.kit_socks||S.socks}}let re=[];async function At(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([w.from("clubs").select("*").order("real_name"),w.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const d={};(p||[]).forEach(c=>{d[c.club_id]=(d[c.club_id]||0)+1}),zt(e,t,d)}function zt(e,t,n={}){const{toast:i,openModal:p,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,c(re),document.getElementById("search-clubs").addEventListener("input",l=>{const b=l.target.value.toLowerCase();c(re.filter(a=>a.real_name.toLowerCase().includes(b)||a.encoded_name.toLowerCase().includes(b)))}),document.getElementById("add-club-btn").addEventListener("click",()=>ke(null,e,t));function c(l){const b=document.getElementById("clubs-list");if(!l.length){b.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}b.innerHTML=l.map(a=>{const g=Ve(a),s=Pe(g,a.id).replace("<svg ",'<svg style="width:40px;height:48px" '),o=a.logo_url?`<img src="${a.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${g.color1},${g.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`,r=n[a.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${o}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name} · ${a.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${r===0?"#e67e22":"var(--gray-600)"}">
              ${r===0?"⚠️ Aucun joueur":`👥 ${r} joueur${r>1?"s":""}`}
            </div>
          </div>
          ${s}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${r===0?`<button class="btn btn-primary btn-sm" data-gen="${a.id}" data-cc="${a.country_code}" data-name="${a.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
          </div>
        </div>`}).join(""),b.querySelectorAll("[data-gen]").forEach(a=>{a.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${a.dataset.name} ?`)&&(a.disabled=!0,a.textContent="⏳",await Ue(a.dataset.gen,a.dataset.cc,i),ce(e,t))})}),b.querySelectorAll("[data-edit]").forEach(a=>{const g=re.find(s=>s.id===a.dataset.edit);a.addEventListener("click",()=>ke(g,e,t))}),b.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:g}=await w.from("clubs").delete().eq("id",a.dataset.del);g?i(g.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function ke(e,t,n){const{toast:i,openModal:p,closeModal:d}=n,c=!!e,l=e?Ve(e):{...S},b=Object.entries(Ee).map(([g,s])=>`<option value="${g}" ${l.style===g?"selected":""}>${s.label}</option>`).join(""),a=He.map(g=>`<option value="${g}" ${((e==null?void 0:e.country_code)||"FR")===g?"selected":""}>${g}</option>`).join("");p(c?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${a}
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
              <select id="m-kit-style" style="width:100%">${b}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([g,s,o,r])=>`
              <div class="form-group" id="wrap-${s}" ${r?'style="display:none"':""}>
                <label>${g}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${s}" value="${o||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${s}-txt" value="${o||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
      ${c?"":`
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
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 0–20 · physique adapté au pays · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${c?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var u,h,E;ie();function g(){var y,f;const m=((y=document.getElementById("m-kit-style"))==null?void 0:y.value)||"uni",_=((f=Ee[m])==null?void 0:f.colors)===3,$=document.getElementById("wrap-m-kit-color3");$&&($.style.display=_?"":"none")}g(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(m=>{const _=document.getElementById(m),$=document.getElementById(m+"-txt");!_||!$||(_.addEventListener("input",()=>{$.value=_.value,ie()}),$.addEventListener("input",()=>{const y=$.value.trim();/^#[0-9a-fA-F]{6}$/.test(y)&&(_.value=y,ie())}),$.addEventListener("change",()=>{let y=$.value.trim();y.startsWith("#")||(y="#"+y),/^#[0-9a-fA-F]{6}$/.test(y)&&(_.value=y,$.value=y,ie())}))}),(u=document.getElementById("m-kit-style"))==null||u.addEventListener("change",()=>{g(),ie()});const s=document.getElementById("m-real"),o=document.getElementById("m-encoded");function r(){if(!s||!o||o.value)return;const m=s.value.trim().split(/\s+/),_=m.length===1?m[0].toUpperCase().slice(0,6):m.filter($=>$.length>2).map($=>$[0].toUpperCase()).join("")||m[0].toUpperCase().slice(0,4);o.value=_}s==null||s.addEventListener("input",r),(h=document.getElementById("auto-encode-btn"))==null||h.addEventListener("click",()=>{o&&(o.value=""),r()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>Ct(e,c,t,n))},50)}function Ke(){var e,t,n,i,p,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function ie(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Pe(Ke(),"modal"))}async function Ct(e,t,n,i){var m,_,$,y,f,x;const{toast:p,closeModal:d}=i,c=document.getElementById("m-error"),l=document.getElementById("m-save"),b=(m=document.getElementById("m-real"))==null?void 0:m.value.trim(),a=(_=document.getElementById("m-encoded"))==null?void 0:_.value.trim().toUpperCase(),g=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),s=((y=document.getElementById("m-logo"))==null?void 0:y.value.trim())||null,o=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,r=((x=document.getElementById("m-gen-squad"))==null?void 0:x.checked)??!1,u=Ke();if(!b){c.textContent="Le nom du club est requis.";return}if(!a){c.textContent="Le nom encodé est requis.";return}if(!g){c.textContent="Le pays est requis.";return}l.disabled=!0,l.textContent="Enregistrement…";const h={real_name:b,encoded_name:a,country_code:g,logo_url:s,kit_style:u.style,kit_color1:u.color1,kit_color2:u.color2,kit_color3:u.color3,kit_shorts:u.shorts,kit_socks:u.socks};let E=e==null?void 0:e.id;if(t){const{error:v}=await w.from("clubs").update(h).eq("id",E);if(v){c.textContent=v.message,l.disabled=!1,l.textContent="💾 Enregistrer";return}}else{const{data:v,error:k}=await w.from("clubs").insert(h).select().single();if(k){c.textContent=k.message,l.disabled=!1,l.textContent="✅ Créer le club";return}if(E=v.id,o){l.textContent="🏟️ Création du stade…";const{data:B,error:I}=await w.from("stadium_definitions").insert({name:`Stade de ${b}`,club_id:E,country_code:g}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):B&&await w.from("cards").insert({card_type:"stadium",stadium_id:B.id})}r&&(l.textContent="⚽ Génération des joueurs…",await Ue(E,g,p))}p(t?"Club modifié ✅":"Club créé ✅","success"),d(),ce(n,i)}const St=["normal","pepite","papyte","legende"],Ie=["GK","DEF","MIL","ATT"],Tt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let V={...j},le=[];async function jt(e,{toast:t}){const{data:n}=await w.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],V={...j},e.innerHTML=Nt(le),Rt(e,le,t),N()}function Be(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function Mt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||S.style,color1:t.kit_color1||S.color1,color2:t.kit_color2||S.color2,shorts:t.kit_shorts||S.shorts,socks:t.kit_socks||S.socks}:{...S}}function N(){var o,r,u,h;const e=E=>{var m;return((m=document.getElementById(E))==null?void 0:m.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((r=(o=document.getElementById("cb-club"))==null?void 0:o.selectedOptions[0])==null?void 0:r.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Mt(),i=document.getElementById("cb-club"),p=((h=(u=i==null?void 0:i.selectedOptions[0])==null?void 0:u.dataset)==null?void 0:h.logo)||null,d=qe(V,n,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,l=ot(t,{portraitUrl:c,clubLogoUrl:p,showNotes:!0}),b=document.getElementById("card-preview");b&&(b.innerHTML=l);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=d);const g=e("cb-surname-real"),s=document.getElementById("encode-summary");s&&g&&(s.textContent=`${e("cb-firstname")} ${g} → ${e("cb-firstname")} ${t.surname_real}`)}function Je(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};V={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Rt(e,t,n){var p,d,c,l,b;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",N),a.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var g;(g=document.getElementById(a))==null||g.addEventListener("change",()=>{Je(),N()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Be(),N()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Be(),N()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",N),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",()=>Dt(n)),(b=document.getElementById("btn-reset"))==null||b.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),V={...j},i.forEach(a=>{const g=a.replace("av-",""),s=document.getElementById(a);s&&(s.value=j[g]||"")}),N()})}async function Dt(e){const t=c=>{var l;return((l=document.getElementById(c))==null?void 0:l.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Je();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:V,skin:V.skin||"blanc",hair:V.hairColor||"marron",hair_length:"court"},{error:d}=await w.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function Nt(e){const t=Tt.map(([a,g])=>`<option value="${a}">${g} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Ie.map(a=>`<option value="${a}">${a}</option>`).join(""),p='<option value="">Aucun</option>'+Ie.map(a=>`<option value="${a}">${a}</option>`).join(""),d=St.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),c=(a,g,s)=>Object.entries(g).map(([o,r])=>`<option value="${o}" ${o===(s||"")?"selected":""}>${r.label}</option>`).join(""),l=Object.keys(tt).map(a=>`<option value="${a}" ${a===j.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),b=Object.keys(nt).map(a=>`<option value="${a}" ${a===j.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${p}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${d}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(a=>`
            <div style="background:${it[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${a.toUpperCase()}
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
              <select id="av-hair">${c("av-hair",at,j.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${b}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",rt,j.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",lt,j.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",st,j.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",dt,j.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",ct,j.beard)}</select>
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
  `}async function Ye(e,{toast:t}){const{data:n,error:i}=await w.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${p.length} manager(s)</span>
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
  `,d(p),document.getElementById("search-users").addEventListener("input",c=>{const l=c.target.value.toLowerCase();d(p.filter(b=>{var a;return b.pseudo.toLowerCase().includes(l)||((a=b.club_name)==null?void 0:a.toLowerCase().includes(l))}))});function d(c){document.getElementById("users-tbody").innerHTML=c.map(l=>{const b=l.mmr??1e3,a=l.mmr_deviation??350,g=l.placement_matches??0,s=pt(b),o=l.ranked_wins??0,r=l.ranked_losses??0,u=l.ranked_draws??0,h=o+r+u,E=h>0?Math.round(o/h*100):null,m=g<10,_=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
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
              <span style="font-size:16px">${s.emoji}</span>
              <span style="font-weight:700;color:${s.color}">${s.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${g}/10 placement${g<10?` (${10-g} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${u}N ${r}D${E!==null?` · ${E}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${b}</div>
            <div style="font-size:10px;color:${_}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${l.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${l.id}" data-is-admin="${l.is_admin}">
              ${l.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(l=>{l.addEventListener("click",async()=>{const b=l.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${b?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await w.from("users").update({is_admin:b}).eq("id",l.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),Ye(e,{toast:t}))})})}}async function We(e,{toast:t}){const{data:n,error:i}=await w.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[],d=p.filter(l=>l.status==="active").length,c=p.filter(l=>l.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${c}</div>
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
            ${p.map(l=>{var s,o,r,u;const b=(s=l.card)==null?void 0:s.player,a=b?`${b.firstname} ${b.surname_real}`:((o=l.card)==null?void 0:o.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${a}</b>${b?`<div style="font-size:10px;color:#999">${b.rarity} · ${b.job}</div>`:""}</td>
                <td style="font-size:12px">${((r=l.seller)==null?void 0:r.pseudo)||"—"}</td>
                <td style="font-size:12px">${((u=l.buyer)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:b}=await w.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);b?t(b.message,"error"):(t("Annonce annulée","success"),We(e,{toast:t}))})})}async function Pt(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{oe("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{oe("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(Le).join(",")+`
`}),oe("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var c;p+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((c=d.clubs)==null?void 0:c.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(Le).join(",")+`
`}),oe("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Ae(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let l=0,b=0;const a=[];for(const g of c){if(!g.real_name||!g.encoded_name||!g.country_code){b++,a.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const s={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:o}=await w.from("clubs").upsert(s,{onConflict:"encoded_name"});o?(b++,a.push(`${g.encoded_name}: ${o.message}`)):l++}p.innerHTML=`<div style="color:var(--green)">✅ ${l} clubs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${l} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Ae(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:l}=await w.from("clubs").select("id,encoded_name"),b={};(l||[]).forEach(m=>{b[m.encoded_name.toUpperCase()]=m.id});let a=0,g=0;const s=[],o=["GK","DEF","MIL","ATT"],r=["normal","pepite","papyte","legende"],u=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],E=["rase","court","milong","long"];for(const m of c){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){g++,s.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!o.includes(m.job)){g++,s.push(`${m.firstname}: job invalide "${m.job}"`);continue}const _=m.club_encoded_name&&b[m.club_encoded_name.toUpperCase()]||null,$={firstname:m.firstname,surname_real:m.surname_real,surname_real:m.surname_real||ue(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:_,job:m.job,job2:o.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:r.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:u.includes(m.skin)?m.skin:"blanc",hair:h.includes(m.hair)?m.hair:"noir",hair_length:E.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:y}=await w.from("players").insert($);y?(g++,s.push(`${m.firstname} ${m.surname_real}: ${y.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${s.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function Le(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Ae(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(c=>c.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=ze(n,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let c=1;c<t.length;c++){if(!t[c].trim())continue;const l=ze(t[c],i),b={};p.forEach((a,g)=>{b[a]=(l[g]||"").trim()}),!Object.values(b).every(a=>!a)&&d.push(b)}return d}function ze(e,t=","){const n=[];let i="",p=!1;for(let d=0;d<e.length;d++){const c=e[d];p?c==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=c:c==='"'?p=!0:c===t?(n.push(i),i=""):i+=c}return n.push(i),n}const qt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ot(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:p}=await w.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(g=>{d[g.formation]=g.links});let c=new Set;function l(g,s){return[g,s].sort().join("-")}function b(g){const s=d[g]||me[g]||[];c=new Set(s.map(([o,r])=>l(o,r)))}b(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(g=>`<option value="${g}" ${g===i?"selected":""}>${g}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${c.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function a(){const g=ut[i]||{},s=we(i),o=320,r=400,u=22;function h(y){const f=g[y];return f?{x:f.x*o,y:f.y*r}:null}let E=`<svg width="${o}" height="${r}" viewBox="0 0 ${o} ${r}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;s.forEach(([y,f],x)=>{const v=h(y),k=h(f);if(!v||!k)return;const B=l(y,f),I=c.has(B),L=I?"#3b82f6":"#999",z=I?.95:.35,C=I?4:3;E+=`<line x1="${v.x}" y1="${v.y}" x2="${k.x}" y2="${k.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,E+=`<line x1="${v.x}" y1="${v.y}" x2="${k.x}" y2="${k.y}"
        stroke="${L}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${z}" pointer-events="none" data-line-key="${B}"/>`});for(const y of Object.keys(g)){const f=h(y);if(!f)continue;const x=y.replace(/\d+/,""),v=qt[x]||"#555";E+=`<circle cx="${f.x}" cy="${f.y}" r="${u}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,E+=`<text x="${f.x}" y="${f.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}E+="</svg>",document.getElementById("field-wrap").innerHTML=E;const m=document.getElementById("links-list");m.innerHTML=s.map(([y,f])=>{const x=l(y,f),v=c.has(x);return`
        <button class="link-toggle" data-key="${x}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${f}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const _=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');_&&(_.textContent=`Liens (${c.size}/${s.length} actifs)`);function $(y){c.has(y)?c.delete(y):c.add(y),a()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>$(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>$(y.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",g=>{i=g.target.value,b(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=me[i]||[];c=new Set(g.map(([s,o])=>l(s,o))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const s=we(i).filter(([r,u])=>c.has(l(r,u))),{error:o}=await w.from("formation_links_overrides").upsert({formation:i,links:s,updated_at:new Date().toISOString()});if(o){t(o.message,"error");return}d[i]=s,t(`Liens enregistrés pour ${i} (${s.length} actifs)`,"success")})}const Ft=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Ht=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Gt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Ut(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const d=()=>window.innerWidth<700;async function c(){if(!n){i=[];return}if(n!==p){const{data:s}=await w.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=s||[],p=n}}function l(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(s=>`
      <div class="booster-row" data-id="${s.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${s.id===n?"#f0f7f0":"#fff"}">
        ${s.image_url?`<img src="/icons/${s.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</div>
          <div style="font-size:11px;color:#888">
            ${s.price_type==="credits"?(s.price_credits||0)+" cr.":s.price_type==="pub"?"Pub":"Gratuit"}
            · ${s.card_count||5} cartes · ${s.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${s.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function b(){const s=n?(t||[]).find(u=>u.id===n):null;if(!s)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const o=i.reduce((u,h)=>u+Number(h.percentage||0),0),r=Math.abs(o-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${s.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${s.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${s.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${s.image_url?`<img src="/icons/${s.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Gt.map(u=>`<option value="${u.value}" ${s.price_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${s.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${s.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${s.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${s.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${s.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${s.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${s.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${s.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${r?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${o.toFixed(1)}% ${r?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((u,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ft.map(E=>`<option value="${E.value}" ${u.card_type===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ht.map(E=>`<option value="${E.value}" ${(u.rarity||"")===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="1" max="10" value="${u.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="1" max="10" value="${u.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${h}" type="number" min="0.1" max="100" step="0.1" value="${u.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${h}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(s=!1){s||await c();const o=!n&&d(),r=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||o||!n?l():""}
      ${!d()||r?b():""}
    </div>`,g()}function g(){var r,u,h,E,m,_,$;const s=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",f=>{f.target.closest(".btn-delete")||(n=y.dataset.id,p=null,a())})}),(r=s("#btn-back"))==null||r.addEventListener("click",()=>{n=null,a()}),(u=s("#btn-new"))==null||u.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:f,error:x}=await w.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(x){alert(x.message);return}t.push(f),n=f.id,p=null,a()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await w.from("booster_configs").delete().eq("id",y.dataset.id);const x=t.findIndex(v=>v.id===y.dataset.id);x>-1&&t.splice(x,1),n===y.dataset.id&&(n=null,p=null),a()})}),(h=s("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,a()}),(E=s("#f-price-type"))==null||E.addEventListener("change",y=>{const f=s("#credits-field");f&&(f.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(m=s("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var f;const y=s("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!k.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((f=s("#f-image-url"))==null?void 0:f.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${k.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const L=s("#f-image-url");L&&(L.value=I.dataset.name),y.style.display="none"})})}catch(x){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${x.message}</div>`}}});function o(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var x,v,k,B,I;const f=Number(y.dataset.rateIdx);f>=0&&f<i.length&&(i[f].card_type=((x=y.querySelector(".rate-type"))==null?void 0:x.value)||"player",i[f].rarity=((v=y.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[f].note_min=Number((k=y.querySelector(".rate-note-min"))==null?void 0:k.value)||null,i[f].note_max=Number((B=y.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[f].percentage=Number((I=y.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(_=s("#btn-add-rate"))==null||_.addEventListener("click",()=>{o(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{o(),i.splice(Number(y.dataset.idx),1),a(!0)})}),($=s("#btn-save"))==null||$.addEventListener("click",async()=>{var B,I,L,z,C,T,P,q,O,F,R,H,M;const y=(t||[]).find(A=>A.id===n);if(!y)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(A=>{var W,Z,X,Q,ee;const K=Number(A.dataset.rateIdx);f.push({booster_id:n,card_type:((W=A.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Z=A.querySelector(".rate-rarity"))==null?void 0:Z.value)||null,note_min:Number((X=A.querySelector(".rate-note-min"))==null?void 0:X.value)||null,note_max:Number((Q=A.querySelector(".rate-note-max"))==null?void 0:Q.value)||null,percentage:Number((ee=A.querySelector(".rate-pct"))==null?void 0:ee.value)||0,sort_order:K});const D=f[f.length-1];D.rarity||(D.rarity=null),D.note_min||(D.note_min=null),D.note_max||(D.note_max=null)});const x=f.reduce((A,K)=>A+K.percentage,0);if(f.length&&Math.abs(x-100)>.5){alert(`La somme doit faire 100% (actuellement ${x.toFixed(1)}%)`);return}const v={name:((I=(B=s("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||y.name,image_url:((z=(L=s("#f-image-url"))==null?void 0:L.value)==null?void 0:z.trim())||null,price_type:(C=s("#f-price-type"))==null?void 0:C.value,price_credits:Number((T=s("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((P=s("#f-card-count"))==null?void 0:P.value)||5,is_active:((q=s("#f-active"))==null?void 0:q.checked)??y.is_active,allow_duplicates:((O=s("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((F=s("#f-sort"))==null?void 0:F.value)||0,max_per_user:(R=s("#f-max-per-user"))!=null&&R.value?Number(s("#f-max-per-user").value):null,available_from:((H=s("#f-available-from"))==null?void 0:H.value)||null,available_until:((M=s("#f-available-until"))==null?void 0:M.value)||null},{error:k}=await w.from("booster_configs").update(v).eq("id",n);if(k){alert(k.message);return}if(Object.assign(y,v),await w.from("booster_drop_rates").delete().eq("booster_id",n),f.length){const{error:A}=await w.from("booster_drop_rates").insert(f);if(A){alert(A.message);return}}i=f,p=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const Ze=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Vt(e){await ge(e)}async function ge(e){const{data:t,error:n}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Kt(i)).join("")}
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
              ${Ze.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ce(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Jt(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>Ce(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await w.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ge(e))})})}function Kt(e){const t=Ze.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ce(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Jt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const c={rarity:n,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let l;if(t?{error:l}=await w.from("sell_price_configs").update(c).eq("id",t):{error:l}=await w.from("sell_price_configs").insert(c),l){alert("Erreur : "+l.message);return}document.getElementById("config-form").style.display="none",await ge(e)}async function Yt(e){await be(e)}async function be(e){const{data:t}=await w.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Wt(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Se(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Zt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.edit);i&&n.addEventListener("click",()=>Se(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await w.from("patch_notes").delete().eq("id",n.dataset.delete),await be(e))})})}function Wt(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Se(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function Zt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const l=c?new Date(c).toISOString():new Date().toISOString(),b={title:n,description:i,image_url:p,is_published:d,published_at:l};let a;if(t?{error:a}=await w.from("patch_notes").update(b).eq("id",t):{error:a}=await w.from("patch_notes").insert(b),a){alert("Erreur : "+a.message);return}document.getElementById("article-form").style.display="none",await be(e)}async function Xt(e){await Y(e)}async function Y(e){var g,s,o,r,u,h,E,m,_,$,y,f;const{data:t}=await w.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(x=>Qt(x)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([x,v,k])=>`<button type="button" data-cmd="${v}" title="${k}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${x}</button>`).join("")}
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
    </div>`,(g=document.getElementById("ts-add"))==null||g.addEventListener("click",()=>Te(null,(t==null?void 0:t.length)||0)),(s=document.getElementById("ts-reset"))==null||s.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:x}=await w.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(x?"Erreur : "+x.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(o=document.getElementById("ts-cancel"))==null||o.addEventListener("click",Xe),(r=document.getElementById("ts-save"))==null||r.addEventListener("click",()=>tn(e)),(u=document.getElementById("ts-preview-btn"))==null||u.addEventListener("click",en);const n=document.getElementById("ts-editor"),i=()=>{const x=document.getElementById("ts-content");x&&n&&(x.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(x=>{x.addEventListener("mousedown",v=>{v.preventDefault(),p();const k=x.dataset.cmd;k.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,k.split(":")[1]):document.execCommand(k,!1,null),i()})}),(E=document.getElementById("ts-insert-color"))==null||E.addEventListener("mousedown",x=>{x.preventDefault(),p();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(m=document.getElementById("ts-clear-format"))==null||m.addEventListener("mousedown",x=>{x.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el"),b=document.getElementById("ts-img-picker-grid"),a=()=>{var v;const x=(v=d==null?void 0:d.value)==null?void 0:v.trim();if(x){const k="/";l.src=`${k}icons/${x}`,c.style.display="block"}else c.style.display="none"};d==null||d.addEventListener("input",a),(_=document.getElementById("ts-img-clear"))==null||_.addEventListener("click",()=>{d&&(d.value=""),c.style.display="none",b.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',b.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!k.length){b.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";b.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+k.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",b.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),a(),b.style.display="none"})})}catch(x){b.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+x.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",x=>{const v=document.getElementById("ts-color-hex");v&&(v.value=x.target.value)}),(f=document.getElementById("ts-color-hex"))==null||f.addEventListener("input",x=>{const v=x.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const k=document.getElementById("ts-color");k&&(k.value=v)}}),e.querySelectorAll("[data-edit]").forEach(x=>{const v=(t||[]).find(k=>k.id===x.dataset.edit);v&&x.addEventListener("click",()=>Te(v))}),e.querySelectorAll("[data-delete]").forEach(x=>{x.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await w.from("tutorial_steps").delete().eq("id",x.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(x=>{x.addEventListener("click",async()=>{const v=(t||[]).find(k=>k.id===x.dataset.toggle);v&&(await w.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(x=>{x.addEventListener("click",async()=>{const v=t||[],k=v.findIndex(B=>B.id===x.dataset.up);k<=0||(await Promise.all([w.from("tutorial_steps").update({step_order:v[k-1].step_order}).eq("id",v[k].id),w.from("tutorial_steps").update({step_order:v[k].step_order}).eq("id",v[k-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(x=>{x.addEventListener("click",async()=>{const v=t||[],k=v.findIndex(B=>B.id===x.dataset.down);k<0||k>=v.length-1||(await Promise.all([w.from("tutorial_steps").update({step_order:v[k+1].step_order}).eq("id",v[k].id),w.from("tutorial_steps").update({step_order:v[k].step_order}).eq("id",v[k+1].id)]),Y(e))})})}function Qt(e){return`
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
  </div>`}function Te(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const c=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el");if(p&&c&&l){const b="/";l.src=`${b}icons/${p}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Xe(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function en(){var a,g;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(g=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:g.trim(),l=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",b=document.getElementById("ts-preview-area");b.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${l}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,b.querySelectorAll("ul,ol").forEach(s=>{s.style.paddingLeft="20px",s.style.margin="6px 0"}),b.querySelectorAll("li").forEach(s=>{s.style.marginBottom="4px"}),b.querySelectorAll("p").forEach(s=>{s.style.marginBottom="8px"})}async function tn(e){var s,o;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",l=parseInt(document.getElementById("ts-order").value)||0,b=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:d,color:c,step_order:l,is_active:b,image_url:((o=(s=document.getElementById("ts-image"))==null?void 0:s.value)==null?void 0:o.trim())||null};let g;if(t?{error:g}=await w.from("tutorial_steps").update(a).eq("id",t):{error:g}=await w.from("tutorial_steps").insert(a),g){alert("Erreur : "+g.message);return}Xe(),Y(e)}const nn="/",Qe="#E87722",on=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function an(e){await xe(e)}async function xe(e){var i,p,d,c;const[{data:t},{data:n}]=await Promise.all([w.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),w.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(l=>rn(l)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${on.map(([l,b])=>`<option value="${l}">${b} (${l})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>je(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>sn(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(l=>{var b,a;(b=document.getElementById(l))==null||b.addEventListener("input",se),(a=document.getElementById(l))==null||a.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(l=>{const b=(t||[]).find(a=>a.id===l.dataset.edit);b&&l.addEventListener("click",()=>je(b))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await w.from("stadium_definitions").delete().eq("id",l.dataset.delete),xe(e))})})}function rn(e){var n,i;const t=(n=e.club)!=null&&n.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${Qe};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function je(e,t){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var a,g,s,o,r,u,h;const e=((a=document.getElementById("st-name"))==null?void 0:a.value)||"NOM DU STADE",t=(s=(g=document.getElementById("st-image"))==null?void 0:g.value)==null?void 0:s.trim(),n=(r=(o=document.getElementById("st-country"))==null?void 0:o.value)==null?void 0:r.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,d=i&&p>0?i.options[p].text:"",c=((h=(u=i==null?void 0:i.options[p])==null?void 0:u.getAttribute)==null?void 0:h.call(u,"data-logo"))||"";let l;t?l=`<img src="${nn}icons/${t}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:c?l=`<img src="${c}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:n?l=`<img src="${`https://flagsapi.com/${$country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:l='<div style="font-size:36px;text-align:center">🏟️</div>';const b=d||n||"—";document.getElementById("st-preview-card").innerHTML=ln(e,l,b,!0)}function ln(e,t,n,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${Qe},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${t}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function sn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const c={name:n,club_id:i,country_code:p,image_url:d},{error:l}=t?await w.from("stadium_definitions").update(c).eq("id",t):await w.from("stadium_definitions").insert(c);if(l){alert("Erreur : "+l.message);return}document.getElementById("st-form").style.display="none",xe(e)}const G=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],U=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function dn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,c=o=>e.querySelector(o);function l(o,r=130){if(!o)return"";const u=G.find($=>$.value===o.gc_type)||G[0],h=U.find($=>$.value===o.color)||U[0],E=Math.round(r*.55),m=Math.round(r*.15),_=Math.round(r*.3);return`<div style="width:${r}px;height:${Math.round(r*1.4)}px;border-radius:10px;border:3px solid ${h.hex};background:${u.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${h.hex}55;flex-shrink:0">
      <div style="height:${m}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(r/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${o.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o.image_url?`<img src="/icons/${o.image_url}" style="max-height:${E}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(r*.3)}px">${u.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${_}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(r/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(o.effect||"").slice(0,60)}${(o.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function b(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(o=>{const r=G.find(h=>h.value===o.gc_type)||G[0],u=U.find(h=>h.value===o.color)||U[0];return`
        <div class="gc-row" data-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${u.hex};background:${r.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${o.image_url?`<img src="/icons/${o.image_url}" style="width:28px;height:28px;object-fit:contain">`:r.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
            <div style="font-size:11px;color:#888">${r.label} · ${o.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${o.id}" data-active="${o.is_active}"
              style="background:${o.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${o.is_active?"#27ae60":"#e74c3c"};color:${o.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${o.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${o.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function a(){const o=n?(t||[]).find(u=>u.id===n):null;if(!o)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const r=G.find(u=>u.value===o.gc_type)||G[0];return U.find(u=>u.value===o.color)||U[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${r.bg};border-radius:12px">
        ${l(o,d()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${o.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${o.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${G.map(u=>`<option value="${u.value}" ${o.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${U.map(u=>`<option value="${u.value}" ${o.color===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${o.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${o.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${o.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(u=>`<option value="${u.value}" ${(o.effect_type||"BOOST_STAT")===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const u=o.effect_params||{},h=i.find(E=>E.value===(o.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${h.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${u.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${h.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${u.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${h.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(u.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${u.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${h.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(E=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${E}" ${!u.roles||u.roles.includes(E)?"checked":""}> ${E}
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
    </div>`}function g(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!n?b():""}
      ${!d()||n?a():""}
    </div>`,s()}function s(){var o,r,u,h,E;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",_=>{_.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=m.dataset.id,g())})}),(o=c("#btn-gc-back"))==null||o.addEventListener("click",()=>{n=null,g()}),(r=c("#btn-cancel-gc"))==null||r.addEventListener("click",()=>{n=null,g()}),(u=c("#btn-new-gc"))==null||u.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:_,error:$}=await w.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(_),n=_.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async _=>{_.stopPropagation();const $=m.dataset.active!=="true";await w.from("gc_definitions").update({is_active:$}).eq("id",m.dataset.id);const y=t.find(f=>f.id===m.dataset.id);y&&(y.is_active=$),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async _=>{if(_.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await w.from("gc_definitions").delete().eq("id",m.dataset.id);const $=t.findIndex(y=>y.id===m.dataset.id);$>-1&&t.splice($,1),n===m.dataset.id&&(n=null),g()})}),(h=c("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var _;const m=c("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(y)?y.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!f.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const x=((_=c("#gc-image-url"))==null?void 0:_.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===x?"#7a28b8":"#ddd"};background:${v.name===x?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const k=c("#gc-image-url");k&&(k.value=v.dataset.name),m.style.display="none"})})}catch($){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(E=c("#btn-save-gc"))==null||E.addEventListener("click",async()=>{var v,k,B,I,L,z,C,T,P,q,O,F,R,H;const m=t.find(M=>M.id===n);if(!m)return;const _=i.find(M=>{var A;return M.value===(((A=c("#gc-effect-type"))==null?void 0:A.value)||"BOOST_STAT")})||i[0],$=_.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,y={..._.hasValue?{value:Number((v=c("#gc-p-value"))==null?void 0:v.value)||2}:{},..._.hasCount?{count:Number((k=c("#gc-p-count"))==null?void 0:k.value)||1}:{},..._.hasTarget?{target:((B=c("#gc-p-target"))==null?void 0:B.value)||"home"}:{},..._.hasRoles?{roles:$!=null&&$.length?$:null}:{}},f={name:((L=(I=c("#gc-name"))==null?void 0:I.value)==null?void 0:L.trim())||m.name,effect:((C=(z=c("#gc-effect"))==null?void 0:z.value)==null?void 0:C.trim())||null,image_url:((P=(T=c("#gc-image-url"))==null?void 0:T.value)==null?void 0:P.trim())||null,gc_type:((q=c("#gc-type"))==null?void 0:q.value)||"game_changer",color:((O=c("#gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((F=c("#gc-sort"))==null?void 0:F.value)||0,is_active:((R=c("#gc-active"))==null?void 0:R.checked)??m.is_active,effect_type:((H=c("#gc-effect-type"))==null?void 0:H.value)||"BOOST_STAT",effect_params:y},{error:x}=await w.from("gc_definitions").update(f).eq("id",n);if(x){alert(x.message);return}Object.assign(m,f),alert("✅ Carte enregistrée !"),g()})}g()}async function cn(e,{toast:t,openModal:n,closeModal:i}){await J(e,{toast:t,openModal:n,closeModal:i})}async function J(e,t){var y;const{toast:n,openModal:i,closeModal:p}=t,[{data:d,error:c},{data:l}]=await Promise.all([w.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),w.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const b=d||[],a=b.find(f=>f.is_active),g=(l||[]).filter(f=>(f.placement_matches||0)>=1),s=g.filter(f=>(f.placement_matches||0)>=10),o=["bronze","silver","gold","platinum","diamond","master"],r={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},u={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},E={};o.forEach(f=>{E[f]=0}),s.forEach(f=>{const x=f.rank_tier||"bronze";E[x]!==void 0&&E[x]++});const m=s.length?Math.round(s.reduce((f,x)=>f+(x.mmr||1e3),0)/s.length):0;function _(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(f){const x=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<x?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${a?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${a.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${g.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${s.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(a.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${s.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${o.map(f=>{const x=E[f],v=s.length>0?Math.round(x/s.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[f]} ${r[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${u[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${x} (${v}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${b.length})</div>
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
              ${b.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':b.map(f=>{const x=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),v=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${_(f.start_at)}</td>
                      <td style="font-size:12px">${_(f.end_at)}</td>
                      <td style="font-size:12px">${x} jours</td>
                      <td>${$(f)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${f.id}">✏️ Modifier</button>
                        ${f.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${f.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${f.id}">▶ Activer</button>`}
                        ${v?`<button class="btn btn-danger btn-sm" data-delete="${f.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(y=document.getElementById("create-season-btn"))==null||y.addEventListener("click",()=>{Me(null,{toast:n,openModal:i,closeModal:p,reload:()=>J(e,t)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const x=b.find(v=>v.id==f.dataset.edit);f.addEventListener("click",()=>{Me(x,{toast:n,openModal:i,closeModal:p,reload:()=>J(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const x=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await w.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){n(v.message,"error");return}const{error:k}=await w.from("ranked_seasons").update({is_active:!0}).eq("id",x);if(k){n(k.message,"error");return}await w.from("users").update({current_season_id:x}).gt("placement_matches",0),n("Saison activée ✅","success"),J(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:x}=await w.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(x){n(x.message,"error");return}n("Saison désactivée","success"),J(e,t)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:x}=await w.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(x){n(x.message,"error");return}n("Saison supprimée","success"),J(e,t)})})}function Me(e,{toast:t,openModal:n,closeModal:i,reload:p}){const d=!!e,c=new Date().toISOString().slice(0,16),l=new Date(Date.now()+90*864e5).toISOString().slice(0,16),b=e?new Date(e.start_at).toISOString().slice(0,16):c,a=e?new Date(e.end_at).toISOString().slice(0,16):l,g=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${g}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${b}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function s(){var E,m;const o=(E=document.getElementById("season-start"))==null?void 0:E.value,r=(m=document.getElementById("season-end"))==null?void 0:m.value,u=document.getElementById("season-duration");if(!o||!r||!u)return;const h=Math.round((new Date(r)-new Date(o))/864e5);u.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",u.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var o,r,u;(o=document.getElementById("season-start"))==null||o.addEventListener("input",s),(r=document.getElementById("season-end"))==null||r.addEventListener("input",s),s(),(u=document.getElementById("season-save-btn"))==null||u.addEventListener("click",async()=>{var x,v,k;const h=(x=document.getElementById("season-name"))==null?void 0:x.value.trim(),E=(v=document.getElementById("season-start"))==null?void 0:v.value,m=(k=document.getElementById("season-end"))==null?void 0:k.value,_=document.getElementById("season-error");if(!h){_.textContent="Le nom est requis.";return}if(!E){_.textContent="La date de début est requise.";return}if(!m){_.textContent="La date de fin est requise.";return}if(new Date(m)<=new Date(E)){_.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const y={name:h,start_at:new Date(E).toISOString(),end_at:new Date(m).toISOString()};let f;if(d?{error:f}=await w.from("ranked_seasons").update(y).eq("id",e.id):{error:f}=await w.from("ranked_seasons").insert({...y,is_active:!1}),f){_.textContent=f.message,$.disabled=!1,$.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}mt(qe);function pn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function un(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function fe(){document.getElementById("modal-overlay").classList.add("hidden")}const Re={dashboard:{title:"Dashboard",fn:ft},players:{title:"Joueurs & Cartes",fn:xt},clubs:{title:"Clubs",fn:At},"card-builder":{title:"Card Builder",fn:jt},users:{title:"Managers",fn:Ye},market:{title:"Marché des transferts",fn:We},"import-export":{title:"Import / Export CSV",fn:Pt},formations:{title:"Formations & Liens",fn:Ot},"boosters-config":{title:"Boosters",fn:Ut},"sell-price":{title:"Prix vente directe",fn:Vt},journal:{title:"Journal",fn:Yt},tutorial:{title:"Tutoriel",fn:Xt},stadiums:{title:"Stades",fn:an},"gc-cards":{title:"Game Changers",fn:dn},"ranked-seasons":{title:"Saisons Ranked",fn:cn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Re[e]||Re.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:pn,openModal:un,closeModal:fe,navigate:pe})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function mn(){var t;const{data:{session:e}}=await w.auth.getSession();e&&await De(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:c}=await w.auth.signInWithPassword({email:n,password:i});if(c){p.textContent=c.message;return}await De(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",fe),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&fe()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function De(e){const{data:t,error:n}=await w.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await w.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}mn();
