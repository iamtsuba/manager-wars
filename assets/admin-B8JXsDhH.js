import{s as w,r as Ne,a as Fe,A as tt,l as nt,g as it,b as Ge,K as we,D as T,S as ot,c as R,H as at,R as rt,e as ue,d as He,f as lt,h as st,E as dt,i as ct,N as pt,M as ut,B as mt,j as gt,F as me,k as _e,m as ft,n as bt,o as yt,p as vt}from"./special-cards-DU4k6mnC.js";async function xt(e){const[{count:t},{count:n},{count:i},{count:p},{count:s}]=await Promise.all([w.from("players").select("*",{count:"exact",head:!0}),w.from("clubs").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}),w.from("cards").select("*",{count:"exact",head:!0}),w.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ee("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ee("🏟️","Clubs",n??"–","#D4A017")}
      ${ee("👥","Managers",i??"–","#7a28b8")}
      ${ee("📦","Cartes possédées",p??"–","#2a8f52")}
      ${ee("⚽","Matchs joués",s??"–","#bb2020")}
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
  `,window.adminNav=c=>{var r;(r=document.querySelector(`[data-page="${c}"]`))==null||r.click()}}function ee(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const qe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},ht={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let te=null;async function Et(){if(te)return te;te={};for(const e of tt)te[e]=await nt(e);return te}async function wt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const{data:p,error:s}=await w.from("players").select("id, country_code, face").like("face","public/faces/%");if(s){n(s.message,"error");return}if(!(p!=null&&p.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:c}=await w.from("players").select("face").not("face","is",null),r=new Set((c||[]).map(m=>m.face).filter(m=>m&&!m.startsWith("public/faces/")));let b=0,o=0;for(const m of p){const l=await Fe(m.country_code,r);if(!l){o++;continue}const{error:a}=await w.from("players").update({face:l}).eq("id",m.id);if(a){o++;continue}r.add(l),b++}n(`${b} photo(s) réattribuée(s)${o?`, ${o} échec(s)`:""} ✅`,o?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function _t(e,t){await de(e,t)}async function de(e,t,n=null){var o,m,l,a,d;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((m=document.getElementById("filter-job"))==null?void 0:m.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((a=document.getElementById("filter-club"))==null?void 0:a.value)||"",country:((d=document.getElementById("filter-country"))==null?void 0:d.value)||""});const[{data:p,error:s},{data:c}]=await Promise.all([w.from("players").select("*, clubs(id,encoded_name,logo_url)"),w.from("clubs").select("id,encoded_name").order("encoded_name")]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const r={GK:0,DEF:1,MIL:2,ATT:3},b=(p||[]).sort((u,h)=>{const E=(r[u.job]??4)-(r[h.job]??4);return E!==0?E:(u.surname_real||"").localeCompare(h.surname_real||"")});kt(e,b,c||[],t,n)}function kt(e,t,n,i,p=null){var m,l;const{toast:s}=i;if(e.innerHTML=`
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
          ${Object.entries(qe).map(([a,d])=>`<option value="${a}">${d}</option>`).join("")}
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
    </div>`,p){const a=p,d=u=>document.getElementById(u);a.search&&d("search-players")&&(d("search-players").value=a.search),a.job&&d("filter-job")&&(d("filter-job").value=a.job),a.rarity&&d("filter-rarity")&&(d("filter-rarity").value=a.rarity),a.club&&d("filter-club")&&(d("filter-club").value=a.club),a.country&&d("filter-country")&&(d("filter-country").value=a.country)}if(p){const a=p,d=u=>document.getElementById(u);a.search&&d("search-players")&&(d("search-players").value=a.search),a.job&&d("filter-job")&&(d("filter-job").value=a.job),a.rarity&&d("filter-rarity")&&(d("filter-rarity").value=a.rarity),a.club&&d("filter-club")&&(d("filter-club").value=a.club),a.country&&d("filter-country")&&(d("filter-country").value=a.country)}function c(){const a=document.getElementById("search-players").value.toLowerCase(),d=document.getElementById("filter-job").value,u=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return t.filter(g=>(!a||`${g.firstname} ${g.surname_real}`.toLowerCase().includes(a))&&(!d||g.job===d)&&(!u||g.rarity===u)&&(!h||g.club_id===h)&&(!E||g.country_code===E))}const r=new Set;function b(){const a=document.getElementById("bulk-bar"),d=document.getElementById("bulk-count");a&&(a.style.display=r.size>0?"flex":"none",d&&(d.textContent=`${r.size} joueur(s) sélectionné(s)`))}function o(){const a=c();document.getElementById("count-label").textContent=`${a.length} joueur(s)`;const d=document.getElementById("players-list");if(!a.length){d.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}d.innerHTML=a.map(u=>{const h={...u,clubs:u.clubs,face:u.face||null},E=Ne(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${u.id}">
        ${E}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${u.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),d.querySelectorAll("[data-edit]").forEach(u=>{u.addEventListener("click",()=>{const h=t.find(E=>E.id===u.dataset.edit);h&&ke(h,n,e,i)})}),d.querySelectorAll(".btn-del-player").forEach(u=>{u.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:E}=await w.from("players").delete().eq("id",u.dataset.del);E?s(E.message,"error"):(s("Joueur supprimé ✅","success"),de(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(m=document.getElementById("bulk-cancel-btn"))==null||m.addEventListener("click",()=>{r.clear(),b(),o()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var h,E,g,$,k;if(!r.size||!confirm(`Supprimer ${r.size} joueur(s) ?`))return;const a=[...r],{error:d}=await w.from("players").delete().in("id",a);if(d){s(d.message,"error");return}s(`${a.length} joueur(s) supprimé(s) ✅`,"success"),r.clear();const u={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((E=document.getElementById("filter-job"))==null?void 0:E.value)||"",rarity:((g=document.getElementById("filter-rarity"))==null?void 0:g.value)||"",club:(($=document.getElementById("filter-club"))==null?void 0:$.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};de(e,i,u)}),document.getElementById("add-player-btn").addEventListener("click",()=>ke(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>wt(e,i))}async function ke(e,t,n,i){const{toast:p,openModal:s,closeModal:c}=i,r=!!e,b=await Et(),{data:o}=await w.from("players").select("face").not("face","is",null),m=new Set((o||[]).map(u=>u.face).filter(Boolean));e!=null&&e.face&&m.delete(e.face);const l='<option value="">— Club —</option>'+t.map(u=>`<option value="${u.id}" ${(e==null?void 0:e.club_id)===u.id?"selected":""}>${u.encoded_name}</option>`).join(""),a=e!=null&&e.face?e.face.split("/")[0]:"",d=Object.keys(b).map(u=>`<option value="${u}" ${a===u?"selected":""}>${u}</option>`).join("");s(r?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(u=>`<option value="${u}" ${(e==null?void 0:e.job)===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(u=>`<option value="${u}" ${(e==null?void 0:e.job2)===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(u=>`<option value="${u}" ${(e==null?void 0:e.rarity)===u?"selected":""}>${qe[u]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Club + Prix -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Club</label>
            <select id="pm-club">${l}</select>
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([u,h,E])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${ht[u]};font-weight:700">${u}</label>
                <input id="${h}" type="number" min="0" max="20" value="${(e==null?void 0:e[E])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${d}
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
          ${r?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,x,f;let u=(e==null?void 0:e.face)||null;function h(){var K,P,W,Y,Z,X,Q,ve,xe,he,Ee;const y=document.getElementById("card-preview");if(!y)return;const v=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",_=(((P=document.getElementById("pm-real"))==null?void 0:P.value)||"").toUpperCase(),B=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",I=((Y=document.getElementById("pm-job2"))==null?void 0:Y.value)||null,L=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",S=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",A=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,z=document.getElementById("pm-club"),M=z==null?void 0:z.options[z.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((ve=document.getElementById("pm-g"))==null?void 0:ve.value)||0,G=parseInt((xe=document.getElementById("pm-d"))==null?void 0:xe.value)||0,H=parseInt((he=document.getElementById("pm-m"))==null?void 0:he.value)||0,q=parseInt((Ee=document.getElementById("pm-a"))==null?void 0:Ee.value)||0,D=t.find(et=>et.id===A),j={firstname:v||"Prénom",surname_real:_||"NOM",job:B,job2:I||null,rarity:L,country_code:S,club_id:A,note_g:F,note_d:G,note_m:H,note_a:q,face:u||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};y.innerHTML=Ne(j,{width:160});const C=document.getElementById("pm-minmax");C&&(C.style.display=["pepite","papyte"].includes(L)?"grid":"none")}function E(y){const v=document.getElementById("faces-grid"),_=document.getElementById("pm-face");if(!v||!_)return;const B=b[y]||[];if(console.log("[players] loadFacesGrid folder=",y,"files=",B.length,B.slice(0,5)),!B.length){_.innerHTML='<option value="">— Aucun visage disponible —</option>',v.innerHTML=`<p style="font-size:11px;color:#888;font-style:italic">Aucune image dans le dossier "${y}" du bucket Supabase.</p>`;return}const I=B.filter(L=>{const S=y+"/"+L;return S===u||!m.has(S)});_.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(L=>{const S=y+"/"+L;return`<option value="${S}" ${u===S?"selected":""}>${L}</option>`}).join(""),v.innerHTML=I.map(L=>{const S=y+"/"+L,A=u===S,z=it({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${A?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${z}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(L=>{L.addEventListener("click",()=>{u=L.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=u),v.querySelectorAll("[data-face]").forEach(A=>{A.style.border=`2px solid ${A.dataset.face===u?"#4fc3f7":"transparent"}`}),h()})})}const g=e!=null&&e.face?e.face.split("/")[0]:"";g&&b[g]&&(document.getElementById("pm-folder").value=g,E(g)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",y=>{E(y.target.value)}),(x=document.getElementById("pm-face"))==null||x.addEventListener("change",y=>{u=y.target.value||null,h()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(y=>{var v,_;(v=document.getElementById(y))==null||v.addEventListener("input",h),(_=document.getElementById(y))==null||_.addEventListener("change",h)}),(f=document.getElementById("pm-save"))==null||f.addEventListener("click",()=>It(e,r,u,n,i)),h()},50)}function $t(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function It(e,t,n,i,p){var d,u,h,E,g;const{toast:s,closeModal:c}=p,r=document.getElementById("pm-error"),b=document.getElementById("pm-save"),o=$t(n);if(!o.firstname){r.textContent="Le prénom est requis.";return}if(!o.surname_real){r.textContent="Le nom est requis.";return}b.disabled=!0,b.textContent="Enregistrement…";const m=o,{error:l}=t?await w.from("players").update({...m,updated_at:new Date().toISOString()}).eq("id",e.id):await w.from("players").insert(m);if(l){r.textContent=l.message,b.disabled=!1,b.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}s(t?"Joueur modifié ✅":"Joueur créé ✅","success"),c();const a={search:((d=document.getElementById("search-players"))==null?void 0:d.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((E=document.getElementById("filter-club"))==null?void 0:E.value)||"",country:((g=document.getElementById("filter-country"))==null?void 0:g.value)||""};de(i,p,a)}const Bt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},St=["rase","court","milong","long"];function Lt(e){const t=Ue(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Ct(e){return Math.random()<.05?"chauve":Lt(e)}const Oe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ue(e){return Bt[e]||"blanc"}function At(e){return Ct(e)}function zt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ae(e){return e[Math.floor(Math.random()*e.length)]}function Mt(e){const t=Oe.filter(n=>n!==e);return ae(t)}function $e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}function Tt(e,t,n=new Set){const i=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],p=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Souza","Rodrigues","Almeida","Carvalho","Gomes","Ribeiro","Araujo","Barbosa","Nascimento","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Barros","Freitas","Melo","Pinto","Moura","Cavalcanti","Batista","Nunes","Lima","Rocha","Azevedo","Marques","Castro","Reis","Fonseca","Andrade","Braga","Peixoto","Coelho","Amaral","Guimaraes","Pires","Salgado","Xavier","Assuncao","Brito","Vasconcelos","Tavares","Duarte","Bastos","Neves","Figueiredo","Sales","Farias","Siqueira","Camargo","Prado","Miranda","Ramos","Correa","Gaspar","Leite","Pacheco","Sequeira","Marcelino","Antunes","Esteves","Rodriguez","Godinho","Faria","Sardinha","Cordeiro","Aguiar","Salvador","Sarmento","Nogueira","Pimentel","Simoes","Loureiro","Abreu","Sepulveda","Quaresma","Portela","Valente","Franco","Pina","Camilo","Falcao","Serra","Trindade","Belo","Cabral","Vidal","Sanches","Furtado","Guerreiro","Delgado","Coutinho","Vale","Marreiros","Bento","Salavessa","Domingues","Diallo","Traore","Coulibaly","Bah","Konate","Toure","Camara","Barry","Diop","Ndiaye","Sow","Cisse","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Balde","Diakite","Kouyate","Sissoko","Doumbia","Sarr","Mbaye","Fall","Toumbou","Coumbassa","Faye","Gueye","Thiam","Sarré","Kaba","Dabo","Sacko","Kourouma","Konde","Sangare","Sanou","Toubali","Bangoura","Kante","Samake","Nikiema","Ouedraogo","Zongo","Sawadogo","Compaore","Kabore","Tapsoba","Kagambega","Yameogo","Some","Kienou","Dembele","Bamba","Mendy","Djalo","Konte","Diabate","Doumbouya","Fadiga","Tounkara","Cheikh","Dieng","Diagne","Mbengue","Sagna","Sy","Ba","Wade","Niang","Diedhiou","Sonko","Dieye","Diatta","Mane","Coly","Badiane","Ndour","Faty","Seck","Kone","Berthe","Sidibe","Yattara","Cissoko","Bagayoko","Diakhate","Thioune","Bocoum","Guisse","Muller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schroder","Neumann","Schwarz","Zimmermann","Braun","Kruger","Hofmann","Klein","Wagner","Becker","Hoffmann","Koch","Bergmann","Lange","Schulze","Krause","Meyer","Werner","Krämer","Schulz","Lehmann","Kaiser","Herrmann","Konig","Walter","Mayer","Huber","Kaufmann","Vogel","Friedrich","Keller","Gunther","Frank","Berger","Winkler","Roth","Beck","Lorenz","Baumann","Franke","Albrecht","Winter","Peters","Vogt","Jager","Simon","Ludwig","Bohm","Horn","Winkelmann","Fuchs","Sommer","Graf","Ebert","Stein","Wilhelm","Seidel","Heinrich","Brandt","Haas","Schuster","Kramer","Sauer","Busch","Voigt","Thomas","Peter","Arnold","Hartmann","Dietrich","Zimmer","Herzog","Pohl","Sturm","Hartung","Vogler","Reichert","Kessler","Bock","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Sato","Yamamoto","Watanabe","Ito","Yamada","Choi","Jung","Kang","Zhang","Huang","Yamaguchi","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Hashimoto","Yamashita","Ishikawa","Nakajima","Ono","Maeda","Fujita","Goto","Okada","Hasegawa","Murakami","Kondo","Ishii","Sakamoto","Endo","Aoki","Fujii","Nishimura","Fukuda","Ota","Han","Yoon","Cho","Song","Shin","Yoo","Jang","Lim","Oh","Seo","Kwon","Hwang","Ahn","Yang","Zhao","Zhou","Wu","Xu","Sun","Zhu","Ma","Guo","He","Lin","Takahashi","Kobayashi","Kato","Yoshida","Sasaki","Yamaoka","Miura","Okamoto","Matsuda","Nakagawa","Ogawa","Uchida","Kubo","Miyazaki","Shimada","Yoshikawa","Yokoyama","Miyamoto","Sakai","Chiba","Kudo","Baek","Nam","Bae","Ha","Ko","Moon","Yu","Woo","Gu","Cha","Chu","Peng","Lu","Xie","Tang","Feng","Deng","Cao","Cai","Jiang","Yuan","Pan","Du","Dai","Fan","Kikuchi","Anzai","Uehara","Oda","Kawai","Noda","Xiao","Jin","Qian","Yan","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King","Wright","Scott","Green","Baker","Adams","Nelson","Carter","Mitchell","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Morris","Murphy","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gray","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Sullivan","Russell","Hayes","Kelly","Simpson","Patterson","Ellis","Fisher","Hunter","Grant","Mason","Barnes","Ryan","Palmer","Hamilton","George","Freeman","Wells","Webb","Gordon","Burns","Marshall","Owens","Ford","Snyder","Fox","Warren","Payne","Rice","Weaver","Butler","Simmons","Boyd","Craig","Stone","Franklin","Vasquez","Stephens","Wallace","Woods","Elliott","Chapman","Dunn","Perkins","Hudson","Spencer","Gardner","Stevens","Tucker","Porter","Hicks","Crawford","Dubois","Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Guerin","Boyer","Garnier","Chevallier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson","Marchand","Duval","Denis","Dumont","Marie","Lemaire","Noel","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Riviere","Lucas","Brunet","Gaillard","Barbier","Arnaud","Martel","Rolland","Renaud","Roger","Roche","Fabre","Aubert","Poulain","Guyot","Lefebvre","Leclerc","Michaud","Colin","Charpentier","Renard","Legros","Caron","Picard","Roy","Guillot","Regnier","Marechal","Perrot","Antoine","Poirier","Voisin","Prevost","Adam","Lecomte","Marty","Charles","Rousset","Chauvin","Jacquet","Lambert","Bouvier","Beaumont","Roulet","Chartier","Deschamps","Lecoq","Perret","Charrier","Sauvage","Rivet","Dumas","Bourgeois","Blondel","Payet","Isambert","Auger","Lemoine","Millet","Guillon","Aubry","Humbert","Constant","Gilbert","Renou","Barre","Vallet","Cardon","Fernandez","Gonzalez","Hernandez","Sanchez","Ramirez","Torres","Flores","Rivera","Gomez","Morales","Ortiz","Gutierrez","Chavez","Ruiz","Alvarez","Mendoza","Vazquez","Romero","Herrera","Medina","Aguilar","Vargas","Guzman","Munoz","Salazar","Soto","Contreras","Rojas","Nunez","Vega","Guerrero","Rios","Acosta","Fuentes","Cabrera","Espinoza","Mendez","Molina","Cortez","Suarez","Pena","Cervantes","Estrada","Ochoa","Bravo","Padilla","Carrillo","Escobar","Marin","Ibarra","Salinas","Mora","Trejo","Cardenas","Aguirre","Villanueva","Villalobos","Solis","Robles","Beltran","Camacho","Zamora","Valdez","Meza","Avila","Lara","Segura","Cano","Prieto","Cabello","Pardo","Serrano","Nieto","Crespo","Gil","Iglesias","Santana","Gallego","Zapata","Paredes","Nava","Barrera","Montes","Peralta","Cortes","Galvan","Rosales","Maldonado","Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","Deluca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Barone","Fontana","Santoro","Mariani","Rinaldi","Caruso","Ferrara","Galli","Martini","Leone","Longo","Gentile","Martinelli","Vitale","Lombardo","Coppola","Deangelis","Marchetti","Parisi","Villa","Conte","Ferro","Fabbri","Bianco","Marini","Grasso","Valentini","Messina","Sala","Farina","Rizzi","Monti","Cattaneo","Morelli","Amato","Fiore","Colombo","Testa","Riva","Barbieri","Fiorentino","Sarti","Piras","Neri","Palumbo","Sanna","Grieco","Sartori","Basile","Bernardi","Marchi","Ferretti","Milani","Guerra","Silvestri","Cocco","Ferraro","Damico","Vitali","Basso","Guerrini","Carbone","Ruggiero","Piazza","Rossetti","Cristofaro","Palma","Franchini","Bruni","Villani","Marconi","Sforza","Sarno","Damato","Angeli","Bosco","Ferri","Grimaldi","Costantini","Marchese","Iannotti","Palermo","Vitiello","Damiani","Orlando","De Jong","Van Dijk","Bakker","Jansen","Visser","Smit","Meijer","Bos","Andersen","Hansen","Nielsen","Pedersen","Larsen","Johansson","Karlsson","Vermeulen","Van Den Berg","Van Der Meer","Dekker","Brouwer","Mulder","De Groot","Hoekstra","Van Leeuwen","Vos","Peeters","De Boer","Kok","Andersson","Eriksson","Persson","Lindqvist","Gustafsson","Olsen","Berg","Jorgensen","Sorensen","Rasmussen","Christiansen","Poulsen","Madsen","Kristensen","Van Der Berg","Klaassen","Van Der Linden","Postma","Vink","Terpstra","Schouten","Van Zanten","Hendriks","Van Der Laan","Wolters","Blom","Van Vliet","Van Der Velde","Hermansen","Bergstrom","Lindberg","Holm","Nystrom","Blomqvist","Sandberg","Wikstrom","Forsberg","Dahl","Falk","Ostergaard","Mortensen","Simonsen","Thomsen","Iversen","Kristiansen","Vermeer","Willems","Aarts","Sondergaard","Frandsen","Bang","Lindholm","Berglund","Wikman","Backstrom","Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Boumediene","Yacoub","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Chraibi","Fassi","Kadiri","Lahlou","Naciri","Sbai","Skalli","Tahiri","Zniber","Boukhris","Chakroun","Gharbi","Jendoubi","Karoui","Mansouri","Sassi","Toumi","Zaidi","Ayari","Bouazizi","Chaabane","Dhaouadi","Ghannouchi","Hammami","Jemai","Khedher","Mabrouk","Nasri","Ouali","Rekik","Sahli","Zaoui","Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Karim","Lakhal","Mahjoub","Nabil","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Hachani","Islah","Jemili","Khaldi","Larbi","Mokrani","Nadir","Ouahes","Riahi","Salhi","Taleb","Wahabi","Zeroual","Aissa","Belaid","Chami","Djelloul","Fekih","Guerfi","Bouzid","Chettouh","Djebbari","Ferjani","Guenaoui","Hallaoui","Khemiri","Mejri","Ouarda","Selmi"],s=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],c=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],r=new Set(c.sort(()=>Math.random()-.5).slice(0,4)),b=[...c].sort(()=>Math.random()-.5),o=new Set(b.slice(0,2)),m=new Set(b.slice(2,4)),l=10,a=s.map((h,E)=>E<l);for(let h=a.length-1;h>0;h--){const E=Math.floor(Math.random()*(h+1));[a[h],a[E]]=[a[E],a[h]]}const d=new Set;function u(){const h=p.filter(k=>!d.has(k)&&!n.has(k)),E=h.length?h:p.filter(k=>!d.has(k)),g=E.length?E:p,$=ae(g);return d.add($),$}return s.map((h,E)=>{const g=a[E]?t:Mt(t),$=Ue(g),k=At(g),x=ae(St),f=zt(1,20),y=r.has(E),v=y?Math.max(0,f-2):0;let _=0,B=0,I=0,L=0,S=null;h==="GK"?_=f:h==="DEF"?(B=f,y&&(I=v,S="MIL")):h==="ATT"?(L=f,y&&(I=v,S="MIL")):(I=f,y&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(B=v,S="DEF"):(L=v,S="ATT")));const A=o.has(E)?"pepite":m.has(E)?"papyte":"normal",z=u();return{job:h,job2:S,firstname:ae(i),surname_real:z,country_code:g,club_id:e,note_g:_,note_d:B,note_m:I,note_a:L,skin:$,hair:k,hair_length:x,rarity:A,sell_price:0,ethnie:$e(g),_ethnie:$e(g)}})}async function Ke(e,t,n){const{data:i}=await w.from("players").select("surname_real").not("surname_real","is",null),p=new Set((i||[]).map(d=>d.surname_real).filter(Boolean)),s=Tt(e,t,p),{data:c}=await w.from("players").select("face").not("face","is",null),r=new Set((c||[]).map(d=>d.face).filter(Boolean)),b=new Set;for(const d of s){const u=await Fe(d.country_code,new Set([...r,...b]));u&&(d.face=u,b.add(u)),delete d._ethnie}const{data:o,error:m}=await w.from("players").insert(s).select("id");if(m){console.error("[GenSquad] Erreur batch insert:",m.message,m.details),n("Erreur: "+m.message,"error");return}const l=(o||[]).map(d=>({card_type:"player",player_id:d.id}));if(l.length){const{error:d}=await w.from("cards").insert(l);d&&console.warn("[GenSquad] Erreur cartes:",d.message)}const a=(o==null?void 0:o.length)||0;console.log("[GenSquad] Créés:",a,"/",s.length),a>0?n(`${a} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Ve(e){return{style:e.kit_style||T.style,color1:e.kit_color1||T.color1,color2:e.kit_color2||T.color2,color3:e.kit_color3||T.color3,shorts:e.kit_shorts||T.shorts,socks:e.kit_socks||T.socks}}let re=[];async function Rt(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([w.from("clubs").select("*").order("real_name"),w.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const s={};(p||[]).forEach(c=>{s[c.club_id]=(s[c.club_id]||0)+1}),jt(e,t,s)}function jt(e,t,n={}){const{toast:i,openModal:p,closeModal:s}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,c(re),document.getElementById("search-clubs").addEventListener("input",r=>{const b=r.target.value.toLowerCase();c(re.filter(o=>o.real_name.toLowerCase().includes(b)||o.encoded_name.toLowerCase().includes(b)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ie(null,e,t));function c(r){const b=document.getElementById("clubs-list");if(!r.length){b.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}b.innerHTML=r.map(o=>{const m=Ve(o),l=Ge(m,o.id).replace("<svg ",'<svg style="width:40px;height:48px" '),a=o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${m.color1},${m.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`,d=n[o.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${a}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${d===0?"#e67e22":"var(--gray-600)"}">
              ${d===0?"⚠️ Aucun joueur":`👥 ${d} joueur${d>1?"s":""}`}
            </div>
          </div>
          ${l}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${d===0?`<button class="btn btn-primary btn-sm" data-gen="${o.id}" data-cc="${o.country_code}" data-name="${o.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),b.querySelectorAll("[data-gen]").forEach(o=>{o.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${o.dataset.name} ?`)&&(o.disabled=!0,o.textContent="⏳",await Ke(o.dataset.gen,o.dataset.cc,i),ce(e,t))})}),b.querySelectorAll("[data-edit]").forEach(o=>{const m=re.find(l=>l.id===o.dataset.edit);o.addEventListener("click",()=>Ie(m,e,t))}),b.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:m}=await w.from("clubs").delete().eq("id",o.dataset.del);m?i(m.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function Ie(e,t,n){const{toast:i,openModal:p,closeModal:s}=n,c=!!e,r=e?Ve(e):{...T},b=Object.entries(we).map(([m,l])=>`<option value="${m}" ${r.style===m?"selected":""}>${l.label}</option>`).join(""),o=Oe.map(m=>`<option value="${m}" ${((e==null?void 0:e.country_code)||"FR")===m?"selected":""}>${m}</option>`).join("");p(c?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style" style="width:100%">${b}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([m,l,a,d])=>`
              <div class="form-group" id="wrap-${l}" ${d?'style="display:none"':""}>
                <label>${m}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${l}" value="${a||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${l}-txt" value="${a||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var u,h,E;ne();function m(){var x,f;const g=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",$=((f=we[g])==null?void 0:f.colors)===3,k=document.getElementById("wrap-m-kit-color3");k&&(k.style.display=$?"":"none")}m(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(g=>{const $=document.getElementById(g),k=document.getElementById(g+"-txt");!$||!k||($.addEventListener("input",()=>{k.value=$.value,ne()}),k.addEventListener("input",()=>{const x=k.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&($.value=x,ne())}),k.addEventListener("change",()=>{let x=k.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&($.value=x,k.value=x,ne())}))}),(u=document.getElementById("m-kit-style"))==null||u.addEventListener("change",()=>{m(),ne()});const l=document.getElementById("m-real"),a=document.getElementById("m-encoded");function d(){if(!l||!a||a.value)return;const g=l.value.trim().split(/\s+/),$=g.length===1?g[0].toUpperCase().slice(0,6):g.filter(k=>k.length>2).map(k=>k[0].toUpperCase()).join("")||g[0].toUpperCase().slice(0,4);a.value=$}l==null||l.addEventListener("input",d),(h=document.getElementById("auto-encode-btn"))==null||h.addEventListener("click",()=>{a&&(a.value=""),d()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>Dt(e,c,t,n))},50)}function Je(){var e,t,n,i,p,s;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((s=document.getElementById("m-kit-socks"))==null?void 0:s.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ge(Je(),"modal"))}async function Dt(e,t,n,i){var g,$,k,x,f,y;const{toast:p,closeModal:s}=i,c=document.getElementById("m-error"),r=document.getElementById("m-save"),b=(g=document.getElementById("m-real"))==null?void 0:g.value.trim(),o=($=document.getElementById("m-encoded"))==null?void 0:$.value.trim().toUpperCase(),m=(k=document.getElementById("m-country"))==null?void 0:k.value.trim().toUpperCase(),l=((x=document.getElementById("m-logo"))==null?void 0:x.value.trim())||null,a=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,d=((y=document.getElementById("m-gen-squad"))==null?void 0:y.checked)??!1,u=Je();if(!b){c.textContent="Le nom du club est requis.";return}if(!o){c.textContent="Le nom encodé est requis.";return}if(!m){c.textContent="Le pays est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const h={real_name:b,encoded_name:o,country_code:m,logo_url:l,kit_style:u.style,kit_color1:u.color1,kit_color2:u.color2,kit_color3:u.color3,kit_shorts:u.shorts,kit_socks:u.socks};let E=e==null?void 0:e.id;if(t){const{error:v}=await w.from("clubs").update(h).eq("id",E);if(v){c.textContent=v.message,r.disabled=!1,r.textContent="💾 Enregistrer";return}}else{const{data:v,error:_}=await w.from("clubs").insert(h).select().single();if(_){c.textContent=_.message,r.disabled=!1,r.textContent="✅ Créer le club";return}if(E=v.id,a){r.textContent="🏟️ Création du stade…";const{data:B,error:I}=await w.from("stadium_definitions").insert({name:`Stade de ${b}`,club_id:E,country_code:m}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):B&&await w.from("cards").insert({card_type:"stadium",stadium_id:B.id})}d&&(r.textContent="⚽ Génération des joueurs…",await Ke(E,m,p))}p(t?"Club modifié ✅":"Club créé ✅","success"),s(),ce(n,i)}const Pt=["normal","pepite","papyte","legende"],Be=["GK","DEF","MIL","ATT"],Nt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let U={...R},le=[];async function Ft(e,{toast:t}){const{data:n}=await w.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],U={...R},e.innerHTML=Ot(le),Ht(e,le,t),N()}function Se(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function Gt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||T.style,color1:t.kit_color1||T.color1,color2:t.kit_color2||T.color2,shorts:t.kit_shorts||T.shorts,socks:t.kit_socks||T.socks}:{...T}}function N(){var a,d,u,h;const e=E=>{var g;return((g=document.getElementById(E))==null?void 0:g.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((d=(a=document.getElementById("cb-club"))==null?void 0:a.selectedOptions[0])==null?void 0:d.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Gt(),i=document.getElementById("cb-club"),p=((h=(u=i==null?void 0:i.selectedOptions[0])==null?void 0:u.dataset)==null?void 0:h.logo)||null,s=He(U,n,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,r=lt(t,{portraitUrl:c,clubLogoUrl:p,showNotes:!0}),b=document.getElementById("card-preview");b&&(b.innerHTML=r);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=s);const m=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&m&&(l.textContent=`${e("cb-firstname")} ${m} → ${e("cb-firstname")} ${t.surname_real}`)}function We(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};U={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ht(e,t,n){var p,s,c,r,b;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",N),o.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var m;(m=document.getElementById(o))==null||m.addEventListener("change",()=>{We(),N()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Se(),N()}),(s=document.getElementById("btn-encode"))==null||s.addEventListener("click",()=>{Se(),N()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",N),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>qt(n)),(b=document.getElementById("btn-reset"))==null||b.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),U={...R},i.forEach(o=>{const m=o.replace("av-",""),l=document.getElementById(o);l&&(l.value=R[m]||"")}),N()})}async function qt(e){const t=c=>{var r;return((r=document.getElementById(c))==null?void 0:r.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}We();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:U,skin:U.skin||"blanc",hair:U.hairColor||"marron",hair_length:"court"},{error:s}=await w.from("players").insert(p);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function Ot(e){const t=Nt.map(([o,m])=>`<option value="${o}">${m} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Be.map(o=>`<option value="${o}">${o}</option>`).join(""),p='<option value="">Aucun</option>'+Be.map(o=>`<option value="${o}">${o}</option>`).join(""),s=Pt.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),c=(o,m,l)=>Object.entries(m).map(([a,d])=>`<option value="${a}" ${a===(l||"")?"selected":""}>${d.label}</option>`).join(""),r=Object.keys(ot).map(o=>`<option value="${o}" ${o===R.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),b=Object.keys(at).map(o=>`<option value="${o}" ${o===R.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${s}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${rt[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${r}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${c("av-hair",st,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${b}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",dt,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",ct,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",pt,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",ut,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",mt,R.beard)}</select>
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
  `,s(p),document.getElementById("search-users").addEventListener("input",c=>{const r=c.target.value.toLowerCase();s(p.filter(b=>{var o;return b.pseudo.toLowerCase().includes(r)||((o=b.club_name)==null?void 0:o.toLowerCase().includes(r))}))});function s(c){document.getElementById("users-tbody").innerHTML=c.map(r=>{const b=r.mmr??1e3,o=r.mmr_deviation??350,m=r.placement_matches??0,l=gt(b),a=r.ranked_wins??0,d=r.ranked_losses??0,u=r.ranked_draws??0,h=a+d+u,E=h>0?Math.round(a/h*100):null,g=m<10,$=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${r.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(r.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${r.level}</div>
          </td>
          <td style="font-size:12px">${r.wins}V / ${r.draws}N / ${r.losses}D</td>
          <td style="font-size:12px">🥇${r.trophies_top1} 🥈${r.trophies_top2} 🥉${r.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${l.emoji}</span>
              <span style="font-weight:700;color:${l.color}">${l.label}</span>
            </div>
            ${g?`<div style="font-size:10px;color:#e67e22">${m}/10 placement${m<10?` (${10-m} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${u}N ${d}D${E!==null?` · ${E}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${b}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const b=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${b?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await w.from("users").update({is_admin:b}).eq("id",r.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),Ye(e,{toast:t}))})})}}async function Ze(e,{toast:t}){const{data:n,error:i}=await w.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[],s=p.filter(r=>r.status==="active").length,c=p.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${s}</div>
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
            ${p.map(r=>{var l,a,d,u;const b=(l=r.card)==null?void 0:l.player,o=b?`${b.firstname} ${b.surname_real}`:((a=r.card)==null?void 0:a.card_type)||"—",m={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${o}</b>${b?`<div style="font-size:10px;color:#999">${b.rarity} · ${b.job}</div>`:""}</td>
                <td style="font-size:12px">${((d=r.seller)==null?void 0:d.pseudo)||"—"}</td>
                <td style="font-size:12px">${((u=r.buyer)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${m[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${r.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(r.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${r.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${r.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:b}=await w.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);b?t(b.message,"error"):(t("Annonce annulée","success"),Ze(e,{toast:t}))})})}async function Ut(e,{toast:t}){e.innerHTML=`
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
`;n.forEach(s=>{p+=[s.real_name,s.encoded_name,s.country_code,s.logo_url||""].map(Le).join(",")+`
`}),oe("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(s=>{var c;p+=[s.firstname,s.surname_real,s.surname_real,s.country_code,((c=s.clubs)==null?void 0:c.encoded_name)||"",s.job,s.job2||"",s.note_g,s.note_d,s.note_m,s.note_a,s.rarity,s.note_min??"",s.note_max??"",s.skin,s.hair,s.hair_length,s.sell_price].map(Le).join(",")+`
`}),oe("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),c=Ce(s);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,b=0;const o=[];for(const m of c){if(!m.real_name||!m.encoded_name||!m.country_code){b++,o.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const l={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:a}=await w.from("clubs").upsert(l,{onConflict:"encoded_name"});a?(b++,o.push(`${m.encoded_name}: ${a.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} clubs importés`,"success")}catch(s){p.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),c=Ce(s);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await w.from("clubs").select("id,encoded_name"),b={};(r||[]).forEach(g=>{b[g.encoded_name.toUpperCase()]=g.id});let o=0,m=0;const l=[],a=["GK","DEF","MIL","ATT"],d=["normal","pepite","papyte","legende"],u=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],E=["rase","court","milong","long"];for(const g of c){if(!g.firstname||!g.surname_real||!g.country_code||!g.job){m++,l.push(`Ligne ignorée (champs requis manquants): ${g.firstname||"?"}`);continue}if(!a.includes(g.job)){m++,l.push(`${g.firstname}: job invalide "${g.job}"`);continue}const $=g.club_encoded_name&&b[g.club_encoded_name.toUpperCase()]||null,k={firstname:g.firstname,surname_real:g.surname_real,surname_real:g.surname_real||ue(g.surname_real),country_code:g.country_code.toUpperCase().slice(0,2),club_id:$,job:g.job,job2:a.includes(g.job2)?g.job2:null,note_g:parseInt(g.note_g)||0,note_d:parseInt(g.note_d)||0,note_m:parseInt(g.note_m)||0,note_a:parseInt(g.note_a)||0,rarity:d.includes(g.rarity)?g.rarity:"normal",note_min:g.note_min!==""&&g.note_min!=null?parseInt(g.note_min):null,note_max:g.note_max!==""&&g.note_max!=null?parseInt(g.note_max):null,skin:u.includes(g.skin)?g.skin:"blanc",hair:h.includes(g.hair)?g.hair:"noir",hair_length:E.includes(g.hair_length)?g.hair_length:"court",sell_price:parseInt(g.sell_price)||0},{error:x}=await w.from("players").insert(k);x?(m++,l.push(`${g.firstname} ${g.surname_real}: ${x.message}`)):o++}p.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(s){p.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}n.target.value=""})}function Le(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Ce(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(c=>c.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=Ae(n,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),s=[];for(let c=1;c<t.length;c++){if(!t[c].trim())continue;const r=Ae(t[c],i),b={};p.forEach((o,m)=>{b[o]=(r[m]||"").trim()}),!Object.values(b).every(o=>!o)&&s.push(b)}return s}function Ae(e,t=","){const n=[];let i="",p=!1;for(let s=0;s<e.length;s++){const c=e[s];p?c==='"'?e[s+1]==='"'?(i+='"',s++):p=!1:i+=c:c==='"'?p=!0:c===t?(n.push(i),i=""):i+=c}return n.push(i),n}const Kt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Vt(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:p}=await w.from("formation_links_overrides").select("formation, links"),s={};(p||[]).forEach(m=>{s[m.formation]=m.links});let c=new Set;function r(m,l){return[m,l].sort().join("-")}function b(m){const l=s[m]||me[m]||[];c=new Set(l.map(([a,d])=>r(a,d)))}b(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(m=>`<option value="${m}" ${m===i?"selected":""}>${m}</option>`).join("")}
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
  `;function o(){const m=ft[i]||{},l=_e(i),a=320,d=400,u=22;function h(x){const f=m[x];return f?{x:f.x*a,y:f.y*d}:null}let E=`<svg width="${a}" height="${d}" viewBox="0 0 ${a} ${d}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([x,f],y)=>{const v=h(x),_=h(f);if(!v||!_)return;const B=r(x,f),I=c.has(B),L=I?"#3b82f6":"#999",S=I?.95:.35,A=I?4:3;E+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,E+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="${L}" stroke-width="${A}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${B}"/>`});for(const x of Object.keys(m)){const f=h(x);if(!f)continue;const y=x.replace(/\d+/,""),v=Kt[y]||"#555";E+=`<circle cx="${f.x}" cy="${f.y}" r="${u}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,E+=`<text x="${f.x}" y="${f.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}E+="</svg>",document.getElementById("field-wrap").innerHTML=E;const g=document.getElementById("links-list");g.innerHTML=l.map(([x,f])=>{const y=r(x,f),v=c.has(y);return`
        <button class="link-toggle" data-key="${y}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${f}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${c.size}/${l.length} actifs)`);function k(x){c.has(x)?c.delete(x):c.add(x),o()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>k(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>k(x.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",m=>{i=m.target.value,b(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=me[i]||[];c=new Set(m.map(([l,a])=>r(l,a))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=_e(i).filter(([d,u])=>c.has(r(d,u))),{error:a}=await w.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(a){t(a.message,"error");return}s[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const Jt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Wt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Yt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Zt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const s=()=>window.innerWidth<700;async function c(){if(!n){i=[];return}if(n!==p){const{data:l}=await w.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],p=n}}function r(){return`
    <div id="booster-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===n?"#f0f7f0":"#fff"}">
        ${l.image_url?`<img src="/icons/${l.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</div>
          <div style="font-size:11px;color:#888">
            ${l.price_type==="credits"?(l.price_credits||0)+" cr.":l.price_type==="pub"?"Pub":"Gratuit"}
            · ${l.card_count||5} cartes · ${l.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${l.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function b(){const l=n?(t||[]).find(u=>u.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=i.reduce((u,h)=>u+Number(h.percentage||0),0),d=Math.abs(a-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${l.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${l.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${l.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${l.image_url?`<img src="/icons/${l.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Yt.map(u=>`<option value="${u.value}" ${l.price_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${l.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${l.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${l.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${l.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${l.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${l.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${l.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${l.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${d?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${d?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((u,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Jt.map(E=>`<option value="${E.value}" ${u.card_type===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Wt.map(E=>`<option value="${E.value}" ${(u.rarity||"")===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="0" max="20" value="${u.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="0" max="20" value="${u.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
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
    </div>`}async function o(l=!1){l||await c();const a=!n&&s(),d=n&&s();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||a||!n?r():""}
      ${!s()||d?b():""}
    </div>`,m()}function m(){var d,u,h,E,g,$,k;const l=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",f=>{f.target.closest(".btn-delete")||(n=x.dataset.id,p=null,o())})}),(d=l("#btn-back"))==null||d.addEventListener("click",()=>{n=null,o()}),(u=l("#btn-new"))==null||u.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:f,error:y}=await w.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(y){alert(y.message);return}t.push(f),n=f.id,p=null,o()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await w.from("booster_configs").delete().eq("id",x.dataset.id);const y=t.findIndex(v=>v.id===x.dataset.id);y>-1&&t.splice(y,1),n===x.dataset.id&&(n=null,p=null),o()})}),(h=l("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,o()}),(E=l("#f-price-type"))==null||E.addEventListener("change",x=>{const f=l("#credits-field");f&&(f.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(g=l("#btn-pick-icon"))==null||g.addEventListener("click",async()=>{var f;const x=l("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((f=l("#f-image-url"))==null?void 0:f.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const L=l("#f-image-url");L&&(L.value=I.dataset.name),x.style.display="none"})})}catch(y){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${y.message}</div>`}}});function a(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var y,v,_,B,I;const f=Number(x.dataset.rateIdx);f>=0&&f<i.length&&(i[f].card_type=((y=x.querySelector(".rate-type"))==null?void 0:y.value)||"player",i[f].rarity=((v=x.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[f].note_min=Number((_=x.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[f].note_max=Number((B=x.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[f].percentage=Number((I=x.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}($=l("#btn-add-rate"))==null||$.addEventListener("click",()=>{a(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{a(),i.splice(Number(x.dataset.idx),1),o(!0)})}),(k=l("#btn-save"))==null||k.addEventListener("click",async()=>{var B,I,L,S,A,z,M,F,G,H,q,D,j;const x=(t||[]).find(C=>C.id===n);if(!x)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(C=>{var W,Y,Z,X,Q;const K=Number(C.dataset.rateIdx);f.push({booster_id:n,card_type:((W=C.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Y=C.querySelector(".rate-rarity"))==null?void 0:Y.value)||null,note_min:Number((Z=C.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=C.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=C.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const P=f[f.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const y=f.reduce((C,K)=>C+K.percentage,0);if(f.length&&Math.abs(y-100)>.5){alert(`La somme doit faire 100% (actuellement ${y.toFixed(1)}%)`);return}const v={name:((I=(B=l("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||x.name,image_url:((S=(L=l("#f-image-url"))==null?void 0:L.value)==null?void 0:S.trim())||null,price_type:(A=l("#f-price-type"))==null?void 0:A.value,price_credits:Number((z=l("#f-price-credits"))==null?void 0:z.value)||0,card_count:Number((M=l("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=l("#f-active"))==null?void 0:F.checked)??x.is_active,allow_duplicates:((G=l("#f-allow-dup"))==null?void 0:G.checked)??!0,sort_order:Number((H=l("#f-sort"))==null?void 0:H.value)||0,max_per_user:(q=l("#f-max-per-user"))!=null&&q.value?Number(l("#f-max-per-user").value):null,available_from:((D=l("#f-available-from"))==null?void 0:D.value)||null,available_until:((j=l("#f-available-until"))==null?void 0:j.value)||null},{error:_}=await w.from("booster_configs").update(v).eq("id",n);if(_){alert(_.message);return}if(Object.assign(x,v),await w.from("booster_drop_rates").delete().eq("booster_id",n),f.length){const{error:C}=await w.from("booster_drop_rates").insert(f);if(C){alert(C.message);return}}i=f,p=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const Xe=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Xt(e){await fe(e)}async function fe(e){const{data:t,error:n}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Qt(i)).join("")}
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
              ${Xe.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>en(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(s=>s.id===i.dataset.edit);p&&i.addEventListener("click",()=>ze(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await w.from("sell_price_configs").delete().eq("id",i.dataset.delete),await fe(e))})})}function Qt(e){const t=Xe.find(n=>n.value===e.rarity);return`
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
    </tr>`}function ze(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function en(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,s=parseInt(document.getElementById("form-note-max").value)||10;if(p>s){alert("Note min doit être ≤ note max");return}const c={rarity:n,price:i,note_min:p,note_max:s,updated_at:new Date().toISOString()};let r;if(t?{error:r}=await w.from("sell_price_configs").update(c).eq("id",t):{error:r}=await w.from("sell_price_configs").insert(c),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await fe(e)}async function tn(e){await be(e)}async function be(e){const{data:t}=await w.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>nn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Me(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>on(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.edit);i&&n.addEventListener("click",()=>Me(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await w.from("patch_notes").delete().eq("id",n.dataset.delete),await be(e))})})}function nn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Me(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function on(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,s=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const r=c?new Date(c).toISOString():new Date().toISOString(),b={title:n,description:i,image_url:p,is_published:s,published_at:r};let o;if(t?{error:o}=await w.from("patch_notes").update(b).eq("id",t):{error:o}=await w.from("patch_notes").insert(b),o){alert("Erreur : "+o.message);return}document.getElementById("article-form").style.display="none",await be(e)}async function an(e){await J(e)}async function J(e){var m,l,a,d,u,h,E,g,$,k,x,f;const{data:t}=await w.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(y=>rn(y)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([y,v,_])=>`<button type="button" data-cmd="${v}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${y}</button>`).join("")}
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
    </div>`,(m=document.getElementById("ts-add"))==null||m.addEventListener("click",()=>Te(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:y}=await w.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(y?"Erreur : "+y.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(a=document.getElementById("ts-cancel"))==null||a.addEventListener("click",Qe),(d=document.getElementById("ts-save"))==null||d.addEventListener("click",()=>sn(e)),(u=document.getElementById("ts-preview-btn"))==null||u.addEventListener("click",ln);const n=document.getElementById("ts-editor"),i=()=>{const y=document.getElementById("ts-content");y&&n&&(y.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(y=>{y.addEventListener("mousedown",v=>{v.preventDefault(),p();const _=y.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(E=document.getElementById("ts-insert-color"))==null||E.addEventListener("mousedown",y=>{y.preventDefault(),p();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(g=document.getElementById("ts-clear-format"))==null||g.addEventListener("mousedown",y=>{y.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const s=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),b=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const y=(v=s==null?void 0:s.value)==null?void 0:v.trim();if(y){const _="/";r.src=`${_}icons/${y}`,c.style.display="block"}else c.style.display="none"};s==null||s.addEventListener("input",o),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{s&&(s.value=""),c.style.display="none",b.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',b.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){b.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";b.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",b.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{s&&(s.value=I.dataset.pick),o(),b.style.display="none"})})}catch(y){b.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+y.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",y=>{const v=document.getElementById("ts-color-hex");v&&(v.value=y.target.value)}),(f=document.getElementById("ts-color-hex"))==null||f.addEventListener("input",y=>{const v=y.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const _=document.getElementById("ts-color");_&&(_.value=v)}}),e.querySelectorAll("[data-edit]").forEach(y=>{const v=(t||[]).find(_=>_.id===y.dataset.edit);v&&y.addEventListener("click",()=>Te(v))}),e.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await w.from("tutorial_steps").delete().eq("id",y.dataset.delete),J(e))})}),e.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",async()=>{const v=(t||[]).find(_=>_.id===y.dataset.toggle);v&&(await w.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),J(e))})}),e.querySelectorAll("[data-up]").forEach(y=>{y.addEventListener("click",async()=>{const v=t||[],_=v.findIndex(B=>B.id===y.dataset.up);_<=0||(await Promise.all([w.from("tutorial_steps").update({step_order:v[_-1].step_order}).eq("id",v[_].id),w.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_-1].id)]),J(e))})}),e.querySelectorAll("[data-down]").forEach(y=>{y.addEventListener("click",async()=>{const v=t||[],_=v.findIndex(B=>B.id===y.dataset.down);_<0||_>=v.length-1||(await Promise.all([w.from("tutorial_steps").update({step_order:v[_+1].step_order}).eq("id",v[_].id),w.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_+1].id)]),J(e))})})}function rn(e){return`
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
  </div>`}function Te(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",s=document.getElementById("ts-image");s&&(s.value=p);const c=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(p&&c&&r){const b="/";r.src=`${b}icons/${p}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Qe(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function ln(){var o,m;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",s=(m=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:m.trim(),r=s?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${s}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",b=document.getElementById("ts-preview-area");b.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${r}
        <div style="padding:${s?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,b.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),b.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),b.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function sn(e){var l,a;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),s=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,b=document.getElementById("ts-active").checked;if(!i||!s){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:s,color:c,step_order:r,is_active:b,image_url:((a=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:a.trim())||null};let m;if(t?{error:m}=await w.from("tutorial_steps").update(o).eq("id",t):{error:m}=await w.from("tutorial_steps").insert(o),m){alert("Erreur : "+m.message);return}Qe(),J(e)}const dn="/",cn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function pn(e){await ye(e)}async function ye(e){var i,p,s,c;const[{data:t},{data:n}]=await Promise.all([w.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),w.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:#1a1a1a">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(r=>un(r)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(n||[]).map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${cn.map(([r,b])=>`<option value="${r}">${b} (${r})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Re(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(s=document.getElementById("st-save"))==null||s.addEventListener("click",()=>mn(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(r=>{var b,o;(b=document.getElementById(r))==null||b.addEventListener("input",se),(o=document.getElementById(r))==null||o.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(r=>{const b=(t||[]).find(o=>o.id===r.dataset.edit);b&&r.addEventListener("click",()=>Re(b))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await w.from("stadium_definitions").delete().eq("id",r.dataset.delete),ye(e))})})}function un(e){var n,i;let t;return(n=e.club)!=null&&n.logo_url?t=`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:e.country_code?t=`<img src="https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/32.png" style="width:32px;height:24px;object-fit:contain;border-radius:3px" onerror="this.style.display='none'">`:t='<span style="font-size:20px">🌍</span>',`
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
    </div>`}function Re(e,t){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var o,m,l,a,d,u,h;const e=((o=document.getElementById("st-name"))==null?void 0:o.value)||"NOM DU STADE",t=(l=(m=document.getElementById("st-image"))==null?void 0:m.value)==null?void 0:l.trim(),n=(d=(a=document.getElementById("st-country"))==null?void 0:a.value)==null?void 0:d.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,s=i&&p>0?i.options[p].text:"",c=((h=(u=i==null?void 0:i.options[p])==null?void 0:u.getAttribute)==null?void 0:h.call(u,"data-logo"))||"";let r=null;t?r=`${dn}icons/${t}`:c?r=c:n&&(r=`https://flagsapi.com/${n.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const b=s||n||"—";document.getElementById("st-preview-card").innerHTML=bt(e,r,`${b}<br>+10 ⭐`,{width:140})}async function mn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,s=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const c={name:n,club_id:i,country_code:p,image_url:s},{error:r}=t?await w.from("stadium_definitions").update(c).eq("id",t):await w.from("stadium_definitions").insert(c);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",ye(e)}const O=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ie=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function gn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],s=()=>window.innerWidth<700,c=a=>e.querySelector(a);function r(a,d=130){if(!a)return"";const u=O.find(E=>E.value===a.gc_type)||O[0],h=a.image_url?`/icons/${a.image_url}`:null;return yt(a.name||"?",h,u.label.split(" ")[0],a.effect||"",{width:d})}function b(){return`
    <div id="gc-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(a=>{const d=O.find(h=>h.value===a.gc_type)||O[0],u=ie.find(h=>h.value===a.color)||ie[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${u.hex};background:${d.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:d.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${d.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
    </div>`}function o(){const a=n?(t||[]).find(d=>d.id===n):null;return a?(O.find(d=>d.value===a.gc_type)||O[0],ie.find(d=>d.value===a.color)||ie[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${r(a,s()?120:150)}
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
              ${O.map(d=>`<option value="${d.value}" ${a.gc_type===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ie.map(d=>`<option value="${d.value}" ${a.color===d.value?"selected":""}>${d.label}</option>`).join("")}
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
              ${i.map(d=>`<option value="${d.value}" ${(a.effect_type||"BOOST_STAT")===d.value?"selected":""}>${d.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const d=a.effect_params||{},u=i.find(h=>h.value===(a.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${u.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${d.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${u.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${d.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${u.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(d.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${d.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${u.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(h=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${h}" ${!d.roles||d.roles.includes(h)?"checked":""}> ${h}
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
    </div>`}function m(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||!n?b():""}
      ${!s()||n?o():""}
    </div>`,l()}function l(){var a,d,u,h,E;e.querySelectorAll(".gc-row").forEach(g=>{g.addEventListener("click",$=>{$.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=g.dataset.id,m())})}),(a=c("#btn-gc-back"))==null||a.addEventListener("click",()=>{n=null,m()}),(d=c("#btn-cancel-gc"))==null||d.addEventListener("click",()=>{n=null,m()}),(u=c("#btn-new-gc"))==null||u.addEventListener("click",async()=>{const g=prompt("Nom de la carte Game Changer :");if(!(g!=null&&g.trim()))return;const{data:$,error:k}=await w.from("gc_definitions").insert({name:g.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}t.push($),n=$.id,m()}),e.querySelectorAll(".btn-toggle-gc").forEach(g=>{g.addEventListener("click",async $=>{$.stopPropagation();const k=g.dataset.active!=="true";await w.from("gc_definitions").update({is_active:k}).eq("id",g.dataset.id);const x=t.find(f=>f.id===g.dataset.id);x&&(x.is_active=k),m()})}),e.querySelectorAll(".btn-delete-gc").forEach(g=>{g.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await w.from("gc_definitions").delete().eq("id",g.dataset.id);const k=t.findIndex(x=>x.id===g.dataset.id);k>-1&&t.splice(k,1),n===g.dataset.id&&(n=null),m()})}),(h=c("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var $;const g=c("#gc-icon-picker");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(x)?x.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!f.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const y=(($=c("#gc-image-url"))==null?void 0:$.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===y?"#7a28b8":"#ddd"};background:${v.name===y?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const _=c("#gc-image-url");_&&(_.value=v.dataset.name),g.style.display="none"})})}catch(k){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(E=c("#btn-save-gc"))==null||E.addEventListener("click",async()=>{var v,_,B,I,L,S,A,z,M,F,G,H,q,D;const g=t.find(j=>j.id===n);if(!g)return;const $=i.find(j=>{var C;return j.value===(((C=c("#gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT")})||i[0],k=$.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,x={...$.hasValue?{value:Number((v=c("#gc-p-value"))==null?void 0:v.value)||2}:{},...$.hasCount?{count:Number((_=c("#gc-p-count"))==null?void 0:_.value)||1}:{},...$.hasTarget?{target:((B=c("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...$.hasRoles?{roles:k!=null&&k.length?k:null}:{}},f={name:((L=(I=c("#gc-name"))==null?void 0:I.value)==null?void 0:L.trim())||g.name,effect:((A=(S=c("#gc-effect"))==null?void 0:S.value)==null?void 0:A.trim())||null,image_url:((M=(z=c("#gc-image-url"))==null?void 0:z.value)==null?void 0:M.trim())||null,gc_type:((F=c("#gc-type"))==null?void 0:F.value)||"game_changer",color:((G=c("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((H=c("#gc-sort"))==null?void 0:H.value)||0,is_active:((q=c("#gc-active"))==null?void 0:q.checked)??g.is_active,effect_type:((D=c("#gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT",effect_params:x},{error:y}=await w.from("gc_definitions").update(f).eq("id",n);if(y){alert(y.message);return}Object.assign(g,f),alert("✅ Carte enregistrée !"),m()})}m()}async function fn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var x;const{toast:n,openModal:i,closeModal:p}=t,[{data:s,error:c},{data:r}]=await Promise.all([w.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),w.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const b=s||[],o=b.find(f=>f.is_active),m=(r||[]).filter(f=>(f.placement_matches||0)>=1),l=m.filter(f=>(f.placement_matches||0)>=10),a=["bronze","silver","gold","platinum","diamond","master"],d={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},u={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},E={};a.forEach(f=>{E[f]=0}),l.forEach(f=>{const y=f.rank_tier||"bronze";E[y]!==void 0&&E[y]++});const g=l.length?Math.round(l.reduce((f,y)=>f+(y.mmr||1e3),0)/l.length):0;function $(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(f){const y=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<y?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
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
        ${l.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${a.map(f=>{const y=E[f],v=l.length>0?Math.round(y/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[f]} ${d[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${u[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${y} (${v}%)</span>
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
              ${b.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':b.map(f=>{const y=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),v=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${$(f.start_at)}</td>
                      <td style="font-size:12px">${$(f.end_at)}</td>
                      <td style="font-size:12px">${y} jours</td>
                      <td>${k(f)}</td>
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
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{je(null,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const y=b.find(v=>v.id==f.dataset.edit);f.addEventListener("click",()=>{je(y,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const y=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await w.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){n(v.message,"error");return}const{error:_}=await w.from("ranked_seasons").update({is_active:!0}).eq("id",y);if(_){n(_.message,"error");return}await w.from("users").update({current_season_id:y}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:y}=await w.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(y){n(y.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:y}=await w.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(y){n(y.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function je(e,{toast:t,openModal:n,closeModal:i,reload:p}){const s=!!e,c=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),b=e?new Date(e.start_at).toISOString().slice(0,16):c,o=e?new Date(e.end_at).toISOString().slice(0,16):r,m=(e==null?void 0:e.name)||"";n(s?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${m}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${b}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${s?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var E,g;const a=(E=document.getElementById("season-start"))==null?void 0:E.value,d=(g=document.getElementById("season-end"))==null?void 0:g.value,u=document.getElementById("season-duration");if(!a||!d||!u)return;const h=Math.round((new Date(d)-new Date(a))/864e5);u.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",u.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var a,d,u;(a=document.getElementById("season-start"))==null||a.addEventListener("input",l),(d=document.getElementById("season-end"))==null||d.addEventListener("input",l),l(),(u=document.getElementById("season-save-btn"))==null||u.addEventListener("click",async()=>{var y,v,_;const h=(y=document.getElementById("season-name"))==null?void 0:y.value.trim(),E=(v=document.getElementById("season-start"))==null?void 0:v.value,g=(_=document.getElementById("season-end"))==null?void 0:_.value,$=document.getElementById("season-error");if(!h){$.textContent="Le nom est requis.";return}if(!E){$.textContent="La date de début est requise.";return}if(!g){$.textContent="La date de fin est requise.";return}if(new Date(g)<=new Date(E)){$.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const x={name:h,start_at:new Date(E).toISOString(),end_at:new Date(g).toISOString()};let f;if(s?{error:f}=await w.from("ranked_seasons").update(x).eq("id",e.id):{error:f}=await w.from("ranked_seasons").insert({...x,is_active:!1}),f){$.textContent=f.message,k.disabled=!1,k.textContent=s?"💾 Enregistrer":"✅ Créer la saison";return}t(s?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}vt(He);function bn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function yn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ge(){document.getElementById("modal-overlay").classList.add("hidden")}const De={dashboard:{title:"Dashboard",fn:xt},players:{title:"Joueurs & Cartes",fn:_t},clubs:{title:"Clubs",fn:Rt},"card-builder":{title:"Card Builder",fn:Ft},users:{title:"Managers",fn:Ye},market:{title:"Marché des transferts",fn:Ze},"import-export":{title:"Import / Export CSV",fn:Ut},formations:{title:"Formations & Liens",fn:Vt},"boosters-config":{title:"Boosters",fn:Zt},"sell-price":{title:"Prix vente directe",fn:Xt},journal:{title:"Journal",fn:tn},tutorial:{title:"Tutoriel",fn:an},stadiums:{title:"Stades",fn:pn},"gc-cards":{title:"Game Changers",fn:gn},"ranked-seasons":{title:"Saisons Ranked",fn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=De[e]||De.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:bn,openModal:yn,closeModal:ge,navigate:pe})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function vn(){var t;const{data:{session:e}}=await w.auth.getSession();e&&await Pe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:s,error:c}=await w.auth.signInWithPassword({email:n,password:i});if(c){p.textContent=c.message;return}await Pe(s.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ge),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ge()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function Pe(e){const{data:t,error:n}=await w.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await w.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}vn();
