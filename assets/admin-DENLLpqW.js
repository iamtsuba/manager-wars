import{s as w,r as Ne,A as Fe,a as Ge,l as nt,g as it,b as Oe,K as we,D as T,S as ot,c as R,H as at,R as rt,e as pe,d as He,f as st,h as lt,E as dt,i as ct,N as ut,M as pt,B as mt,j as gt,F as me,k as _e,m as ft,n as bt,o as yt,p as vt}from"./special-cards-DU4k6mnC.js";async function xt(e){const[{count:t},{count:n},{count:i},{count:p},{count:d}]=await Promise.all([w.from("players").select("*",{count:"exact",head:!0}),w.from("clubs").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}),w.from("cards").select("*",{count:"exact",head:!0}),w.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ee("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ee("🏟️","Clubs",n??"–","#D4A017")}
      ${ee("👥","Managers",i??"–","#7a28b8")}
      ${ee("📦","Cartes possédées",p??"–","#2a8f52")}
      ${ee("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=u=>{var s;(s=document.querySelector(`[data-page="${u}"]`))==null||s.click()}}function ee(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const qe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},ht={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let te=null;async function Et(){if(te)return te;te={};for(const e of Fe)te[e]=await nt(e);return te}async function wt(e,t){const{toast:n}=t;if(!confirm(`Réattribuer une nouvelle photo à tous les joueurs ayant encore l'ancien format de chemin (public/faces/...) ?

Cette action est irréversible.`))return;const i=document.getElementById("fix-old-faces-btn");i&&(i.disabled=!0,i.textContent="⏳ En cours...");try{const p={};for(const r of Fe){const{data:c,error:x}=await w.storage.from("faces").list(r,{limit:1e3});p[r]=x?`ERREUR: ${x.message}`:`${(c||[]).length} fichier(s)`}if(console.log("[Diagnostic bucket faces]",p),!Object.values(p).some(r=>/^\d+ fichier/.test(r)&&!r.startsWith("0 "))){alert(`Aucun fichier trouvé dans le bucket pour aucun continent.

Détail par dossier :
`+Object.entries(p).map(([r,c])=>`${r} : ${c}`).join(`
`)+`

Vérifie dans Supabase que les noms de dossiers correspondent exactement (accents, majuscules, espaces).`);return}const{data:u,error:s}=await w.from("players").select("id, country_code, face").like("face","public/faces/%");if(s){n(s.message,"error");return}if(!(u!=null&&u.length)){n("Aucun joueur avec l'ancien format — rien à faire ✅","success");return}const{data:b}=await w.from("players").select("face").not("face","is",null),o=new Set((b||[]).map(r=>r.face).filter(r=>r&&!r.startsWith("public/faces/")));let g=0,l=0;const a=[];for(const r of u){const c=await Ge(r.country_code,o);if(!c){l++,a.push(`joueur ${r.id} (pays ${r.country_code}) : aucun fichier disponible pour son continent`);continue}const{error:x}=await w.from("players").update({face:c}).eq("id",r.id);if(x){l++,a.push(`joueur ${r.id} : ${x.message}`);continue}o.add(c),g++}l&&console.warn("[Réattribution photos] échecs détaillés:",a),n(`${g} photo(s) réattribuée(s)${l?`, ${l} échec(s) — voir console`:""} ✅`,l&&!g?"error":"success")}finally{i&&(i.disabled=!1,i.textContent="🖼️ Réattribuer anciennes photos")}}async function _t(e,t){await de(e,t)}async function de(e,t,n=null){var o,g,l,a,r;const{toast:i}=t;n||(n={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((g=document.getElementById("filter-job"))==null?void 0:g.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((a=document.getElementById("filter-club"))==null?void 0:a.value)||"",country:((r=document.getElementById("filter-country"))==null?void 0:r.value)||""});const[{data:p,error:d},{data:u}]=await Promise.all([w.from("players").select("*, clubs(id,encoded_name,logo_url)"),w.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const s={GK:0,DEF:1,MIL:2,ATT:3},b=(p||[]).sort((c,x)=>{const E=(s[c.job]??4)-(s[x.job]??4);return E!==0?E:(c.surname_real||"").localeCompare(x.surname_real||"")});kt(e,b,u||[],t,n)}function kt(e,t,n,i,p=null){var g,l;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(qe).map(([a,r])=>`<option value="${a}">${r}</option>`).join("")}
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
    </div>`,p){const a=p,r=c=>document.getElementById(c);a.search&&r("search-players")&&(r("search-players").value=a.search),a.job&&r("filter-job")&&(r("filter-job").value=a.job),a.rarity&&r("filter-rarity")&&(r("filter-rarity").value=a.rarity),a.club&&r("filter-club")&&(r("filter-club").value=a.club),a.country&&r("filter-country")&&(r("filter-country").value=a.country)}if(p){const a=p,r=c=>document.getElementById(c);a.search&&r("search-players")&&(r("search-players").value=a.search),a.job&&r("filter-job")&&(r("filter-job").value=a.job),a.rarity&&r("filter-rarity")&&(r("filter-rarity").value=a.rarity),a.club&&r("filter-club")&&(r("filter-club").value=a.club),a.country&&r("filter-country")&&(r("filter-country").value=a.country)}function u(){const a=document.getElementById("search-players").value.toLowerCase(),r=document.getElementById("filter-job").value,c=document.getElementById("filter-rarity").value,x=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return t.filter(m=>(!a||`${m.firstname} ${m.surname_real}`.toLowerCase().includes(a))&&(!r||m.job===r)&&(!c||m.rarity===c)&&(!x||m.club_id===x)&&(!E||m.country_code===E))}const s=new Set;function b(){const a=document.getElementById("bulk-bar"),r=document.getElementById("bulk-count");a&&(a.style.display=s.size>0?"flex":"none",r&&(r.textContent=`${s.size} joueur(s) sélectionné(s)`))}function o(){const a=u();document.getElementById("count-label").textContent=`${a.length} joueur(s)`;const r=document.getElementById("players-list");if(!a.length){r.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}r.innerHTML=a.map(c=>{const x={...c,clubs:c.clubs,face:c.face||null},E=Ne(x,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${c.id}">
        ${E}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${c.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),r.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const x=t.find(E=>E.id===c.dataset.edit);x&&ke(x,n,e,i)})}),r.querySelectorAll(".btn-del-player").forEach(c=>{c.addEventListener("click",async x=>{if(x.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:E}=await w.from("players").delete().eq("id",c.dataset.del);E?d(E.message,"error"):(d("Joueur supprimé ✅","success"),de(e,i))})})}o(),document.getElementById("search-players").addEventListener("input",o),document.getElementById("filter-job").addEventListener("change",o),document.getElementById("filter-rarity").addEventListener("change",o),document.getElementById("filter-club").addEventListener("change",o),document.getElementById("filter-country").addEventListener("change",o),(g=document.getElementById("bulk-cancel-btn"))==null||g.addEventListener("click",()=>{s.clear(),b(),o()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var x,E,m,$,k;if(!s.size||!confirm(`Supprimer ${s.size} joueur(s) ?`))return;const a=[...s],{error:r}=await w.from("players").delete().in("id",a);if(r){d(r.message,"error");return}d(`${a.length} joueur(s) supprimé(s) ✅`,"success"),s.clear();const c={search:((x=document.getElementById("search-players"))==null?void 0:x.value)||"",job:((E=document.getElementById("filter-job"))==null?void 0:E.value)||"",rarity:((m=document.getElementById("filter-rarity"))==null?void 0:m.value)||"",club:(($=document.getElementById("filter-club"))==null?void 0:$.value)||"",country:((k=document.getElementById("filter-country"))==null?void 0:k.value)||""};de(e,i,c)}),document.getElementById("add-player-btn").addEventListener("click",()=>ke(null,n,e,i)),document.getElementById("fix-old-faces-btn").addEventListener("click",()=>wt(e,i))}async function ke(e,t,n,i){const{toast:p,openModal:d,closeModal:u}=i,s=!!e,b=await Et(),{data:o}=await w.from("players").select("face").not("face","is",null),g=new Set((o||[]).map(c=>c.face).filter(Boolean));e!=null&&e.face&&g.delete(e.face);const l='<option value="">— Club —</option>'+t.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join(""),a=e!=null&&e.face?e.face.split("/")[0]:"",r=Object.keys(b).map(c=>`<option value="${c}" ${a===c?"selected":""}>${c}</option>`).join("");d(s?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job)===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job2)===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(c=>`<option value="${c}" ${(e==null?void 0:e.rarity)===c?"selected":""}>${qe[c]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(c=>`<option value="${c}" ${((e==null?void 0:e.country_code)||"FR")===c?"selected":""}>${c}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([c,x,E])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${ht[c]};font-weight:700">${c}</label>
                <input id="${x}" type="number" min="0" max="20" value="${(e==null?void 0:e[E])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
                ${r}
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
          ${s?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,h,f;let c=(e==null?void 0:e.face)||null;function x(){var K,P,W,Y,Z,X,Q,ve,xe,he,Ee;const y=document.getElementById("card-preview");if(!y)return;const v=((K=document.getElementById("pm-fn"))==null?void 0:K.value)||"",_=(((P=document.getElementById("pm-real"))==null?void 0:P.value)||"").toUpperCase(),B=((W=document.getElementById("pm-job"))==null?void 0:W.value)||"ATT",I=((Y=document.getElementById("pm-job2"))==null?void 0:Y.value)||null,C=((Z=document.getElementById("pm-rarity"))==null?void 0:Z.value)||"normal",S=((X=document.getElementById("pm-country"))==null?void 0:X.value)||"FR",A=((Q=document.getElementById("pm-club"))==null?void 0:Q.value)||null,z=document.getElementById("pm-club"),M=z==null?void 0:z.options[z.selectedIndex];(M==null?void 0:M.text)!=="— Club —"&&(M==null||M.text);const F=parseInt((ve=document.getElementById("pm-g"))==null?void 0:ve.value)||0,G=parseInt((xe=document.getElementById("pm-d"))==null?void 0:xe.value)||0,O=parseInt((he=document.getElementById("pm-m"))==null?void 0:he.value)||0,H=parseInt((Ee=document.getElementById("pm-a"))==null?void 0:Ee.value)||0,D=t.find(tt=>tt.id===A),j={firstname:v||"Prénom",surname_real:_||"NOM",job:B,job2:I||null,rarity:C,country_code:S,club_id:A,note_g:F,note_d:G,note_m:O,note_a:H,face:c||null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};y.innerHTML=Ne(j,{width:160});const L=document.getElementById("pm-minmax");L&&(L.style.display=["pepite","papyte"].includes(C)?"grid":"none")}function E(y){const v=document.getElementById("faces-grid"),_=document.getElementById("pm-face");if(!v||!_)return;const I=(b[y]||[]).filter(C=>{const S=y+"/"+C;return S===c||!g.has(S)});_.innerHTML='<option value="">— Choisir un visage —</option>'+I.map(C=>{const S=y+"/"+C;return`<option value="${S}" ${c===S?"selected":""}>${C}</option>`}).join(""),v.innerHTML=I.map(C=>{const S=y+"/"+C,A=c===S,z=it({face:S});return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${A?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${z}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(C=>{C.addEventListener("click",()=>{c=C.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=c),v.querySelectorAll("[data-face]").forEach(A=>{A.style.border=`2px solid ${A.dataset.face===c?"#4fc3f7":"transparent"}`}),x()})})}const m=e!=null&&e.face?e.face.split("/")[0]:"";m&&b[m]&&(document.getElementById("pm-folder").value=m,E(m)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",y=>{E(y.target.value)}),(h=document.getElementById("pm-face"))==null||h.addEventListener("change",y=>{c=y.target.value||null,x()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(y=>{var v,_;(v=document.getElementById(y))==null||v.addEventListener("input",x),(_=document.getElementById(y))==null||_.addEventListener("change",x)}),(f=document.getElementById("pm-save"))==null||f.addEventListener("click",()=>It(e,s,c,n,i)),x()},50)}function $t(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e||null,ethnie:t("pm-folder")||null,is_active:!0}}async function It(e,t,n,i,p){var r,c,x,E,m;const{toast:d,closeModal:u}=p,s=document.getElementById("pm-error"),b=document.getElementById("pm-save"),o=$t(n);if(!o.firstname){s.textContent="Le prénom est requis.";return}if(!o.surname_real){s.textContent="Le nom est requis.";return}b.disabled=!0,b.textContent="Enregistrement…";const g=o,{error:l}=t?await w.from("players").update({...g,updated_at:new Date().toISOString()}).eq("id",e.id):await w.from("players").insert(g);if(l){s.textContent=l.message,b.disabled=!1,b.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),u();const a={search:((r=document.getElementById("search-players"))==null?void 0:r.value)||"",job:((c=document.getElementById("filter-job"))==null?void 0:c.value)||"",rarity:((x=document.getElementById("filter-rarity"))==null?void 0:x.value)||"",club:((E=document.getElementById("filter-club"))==null?void 0:E.value)||"",country:((m=document.getElementById("filter-country"))==null?void 0:m.value)||""};de(i,p,a)}const Bt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},St=["rase","court","milong","long"];function Ct(e){const t=Ke(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Lt(e){return Math.random()<.05?"chauve":Ct(e)}const Ue=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ke(e){return Bt[e]||"blanc"}function At(e){return Lt(e)}function zt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ae(e){return e[Math.floor(Math.random()*e.length)]}function Mt(e){const t=Ue.filter(n=>n!==e);return ae(t)}function $e(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}function Tt(e,t,n=new Set){const i=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],p=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Souza","Rodrigues","Almeida","Carvalho","Gomes","Ribeiro","Araujo","Barbosa","Nascimento","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Barros","Freitas","Melo","Pinto","Moura","Cavalcanti","Batista","Nunes","Lima","Rocha","Azevedo","Marques","Castro","Reis","Fonseca","Andrade","Braga","Peixoto","Coelho","Amaral","Guimaraes","Pires","Salgado","Xavier","Assuncao","Brito","Vasconcelos","Tavares","Duarte","Bastos","Neves","Figueiredo","Sales","Farias","Siqueira","Camargo","Prado","Miranda","Ramos","Correa","Gaspar","Leite","Pacheco","Sequeira","Marcelino","Antunes","Esteves","Rodriguez","Godinho","Faria","Sardinha","Cordeiro","Aguiar","Salvador","Sarmento","Nogueira","Pimentel","Simoes","Loureiro","Abreu","Sepulveda","Quaresma","Portela","Valente","Franco","Pina","Camilo","Falcao","Serra","Trindade","Belo","Cabral","Vidal","Sanches","Furtado","Guerreiro","Delgado","Coutinho","Vale","Marreiros","Bento","Salavessa","Domingues","Diallo","Traore","Coulibaly","Bah","Konate","Toure","Camara","Barry","Diop","Ndiaye","Sow","Cisse","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Balde","Diakite","Kouyate","Sissoko","Doumbia","Sarr","Mbaye","Fall","Toumbou","Coumbassa","Faye","Gueye","Thiam","Sarré","Kaba","Dabo","Sacko","Kourouma","Konde","Sangare","Sanou","Toubali","Bangoura","Kante","Samake","Nikiema","Ouedraogo","Zongo","Sawadogo","Compaore","Kabore","Tapsoba","Kagambega","Yameogo","Some","Kienou","Dembele","Bamba","Mendy","Djalo","Konte","Diabate","Doumbouya","Fadiga","Tounkara","Cheikh","Dieng","Diagne","Mbengue","Sagna","Sy","Ba","Wade","Niang","Diedhiou","Sonko","Dieye","Diatta","Mane","Coly","Badiane","Ndour","Faty","Seck","Kone","Berthe","Sidibe","Yattara","Cissoko","Bagayoko","Diakhate","Thioune","Bocoum","Guisse","Muller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schroder","Neumann","Schwarz","Zimmermann","Braun","Kruger","Hofmann","Klein","Wagner","Becker","Hoffmann","Koch","Bergmann","Lange","Schulze","Krause","Meyer","Werner","Krämer","Schulz","Lehmann","Kaiser","Herrmann","Konig","Walter","Mayer","Huber","Kaufmann","Vogel","Friedrich","Keller","Gunther","Frank","Berger","Winkler","Roth","Beck","Lorenz","Baumann","Franke","Albrecht","Winter","Peters","Vogt","Jager","Simon","Ludwig","Bohm","Horn","Winkelmann","Fuchs","Sommer","Graf","Ebert","Stein","Wilhelm","Seidel","Heinrich","Brandt","Haas","Schuster","Kramer","Sauer","Busch","Voigt","Thomas","Peter","Arnold","Hartmann","Dietrich","Zimmer","Herzog","Pohl","Sturm","Hartung","Vogler","Reichert","Kessler","Bock","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Sato","Yamamoto","Watanabe","Ito","Yamada","Choi","Jung","Kang","Zhang","Huang","Yamaguchi","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Hashimoto","Yamashita","Ishikawa","Nakajima","Ono","Maeda","Fujita","Goto","Okada","Hasegawa","Murakami","Kondo","Ishii","Sakamoto","Endo","Aoki","Fujii","Nishimura","Fukuda","Ota","Han","Yoon","Cho","Song","Shin","Yoo","Jang","Lim","Oh","Seo","Kwon","Hwang","Ahn","Yang","Zhao","Zhou","Wu","Xu","Sun","Zhu","Ma","Guo","He","Lin","Takahashi","Kobayashi","Kato","Yoshida","Sasaki","Yamaoka","Miura","Okamoto","Matsuda","Nakagawa","Ogawa","Uchida","Kubo","Miyazaki","Shimada","Yoshikawa","Yokoyama","Miyamoto","Sakai","Chiba","Kudo","Baek","Nam","Bae","Ha","Ko","Moon","Yu","Woo","Gu","Cha","Chu","Peng","Lu","Xie","Tang","Feng","Deng","Cao","Cai","Jiang","Yuan","Pan","Du","Dai","Fan","Kikuchi","Anzai","Uehara","Oda","Kawai","Noda","Xiao","Jin","Qian","Yan","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King","Wright","Scott","Green","Baker","Adams","Nelson","Carter","Mitchell","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Morris","Murphy","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gray","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Sullivan","Russell","Hayes","Kelly","Simpson","Patterson","Ellis","Fisher","Hunter","Grant","Mason","Barnes","Ryan","Palmer","Hamilton","George","Freeman","Wells","Webb","Gordon","Burns","Marshall","Owens","Ford","Snyder","Fox","Warren","Payne","Rice","Weaver","Butler","Simmons","Boyd","Craig","Stone","Franklin","Vasquez","Stephens","Wallace","Woods","Elliott","Chapman","Dunn","Perkins","Hudson","Spencer","Gardner","Stevens","Tucker","Porter","Hicks","Crawford","Dubois","Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Guerin","Boyer","Garnier","Chevallier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson","Marchand","Duval","Denis","Dumont","Marie","Lemaire","Noel","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Riviere","Lucas","Brunet","Gaillard","Barbier","Arnaud","Martel","Rolland","Renaud","Roger","Roche","Fabre","Aubert","Poulain","Guyot","Lefebvre","Leclerc","Michaud","Colin","Charpentier","Renard","Legros","Caron","Picard","Roy","Guillot","Regnier","Marechal","Perrot","Antoine","Poirier","Voisin","Prevost","Adam","Lecomte","Marty","Charles","Rousset","Chauvin","Jacquet","Lambert","Bouvier","Beaumont","Roulet","Chartier","Deschamps","Lecoq","Perret","Charrier","Sauvage","Rivet","Dumas","Bourgeois","Blondel","Payet","Isambert","Auger","Lemoine","Millet","Guillon","Aubry","Humbert","Constant","Gilbert","Renou","Barre","Vallet","Cardon","Fernandez","Gonzalez","Hernandez","Sanchez","Ramirez","Torres","Flores","Rivera","Gomez","Morales","Ortiz","Gutierrez","Chavez","Ruiz","Alvarez","Mendoza","Vazquez","Romero","Herrera","Medina","Aguilar","Vargas","Guzman","Munoz","Salazar","Soto","Contreras","Rojas","Nunez","Vega","Guerrero","Rios","Acosta","Fuentes","Cabrera","Espinoza","Mendez","Molina","Cortez","Suarez","Pena","Cervantes","Estrada","Ochoa","Bravo","Padilla","Carrillo","Escobar","Marin","Ibarra","Salinas","Mora","Trejo","Cardenas","Aguirre","Villanueva","Villalobos","Solis","Robles","Beltran","Camacho","Zamora","Valdez","Meza","Avila","Lara","Segura","Cano","Prieto","Cabello","Pardo","Serrano","Nieto","Crespo","Gil","Iglesias","Santana","Gallego","Zapata","Paredes","Nava","Barrera","Montes","Peralta","Cortes","Galvan","Rosales","Maldonado","Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","Deluca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Barone","Fontana","Santoro","Mariani","Rinaldi","Caruso","Ferrara","Galli","Martini","Leone","Longo","Gentile","Martinelli","Vitale","Lombardo","Coppola","Deangelis","Marchetti","Parisi","Villa","Conte","Ferro","Fabbri","Bianco","Marini","Grasso","Valentini","Messina","Sala","Farina","Rizzi","Monti","Cattaneo","Morelli","Amato","Fiore","Colombo","Testa","Riva","Barbieri","Fiorentino","Sarti","Piras","Neri","Palumbo","Sanna","Grieco","Sartori","Basile","Bernardi","Marchi","Ferretti","Milani","Guerra","Silvestri","Cocco","Ferraro","Damico","Vitali","Basso","Guerrini","Carbone","Ruggiero","Piazza","Rossetti","Cristofaro","Palma","Franchini","Bruni","Villani","Marconi","Sforza","Sarno","Damato","Angeli","Bosco","Ferri","Grimaldi","Costantini","Marchese","Iannotti","Palermo","Vitiello","Damiani","Orlando","De Jong","Van Dijk","Bakker","Jansen","Visser","Smit","Meijer","Bos","Andersen","Hansen","Nielsen","Pedersen","Larsen","Johansson","Karlsson","Vermeulen","Van Den Berg","Van Der Meer","Dekker","Brouwer","Mulder","De Groot","Hoekstra","Van Leeuwen","Vos","Peeters","De Boer","Kok","Andersson","Eriksson","Persson","Lindqvist","Gustafsson","Olsen","Berg","Jorgensen","Sorensen","Rasmussen","Christiansen","Poulsen","Madsen","Kristensen","Van Der Berg","Klaassen","Van Der Linden","Postma","Vink","Terpstra","Schouten","Van Zanten","Hendriks","Van Der Laan","Wolters","Blom","Van Vliet","Van Der Velde","Hermansen","Bergstrom","Lindberg","Holm","Nystrom","Blomqvist","Sandberg","Wikstrom","Forsberg","Dahl","Falk","Ostergaard","Mortensen","Simonsen","Thomsen","Iversen","Kristiansen","Vermeer","Willems","Aarts","Sondergaard","Frandsen","Bang","Lindholm","Berglund","Wikman","Backstrom","Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Boumediene","Yacoub","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Chraibi","Fassi","Kadiri","Lahlou","Naciri","Sbai","Skalli","Tahiri","Zniber","Boukhris","Chakroun","Gharbi","Jendoubi","Karoui","Mansouri","Sassi","Toumi","Zaidi","Ayari","Bouazizi","Chaabane","Dhaouadi","Ghannouchi","Hammami","Jemai","Khedher","Mabrouk","Nasri","Ouali","Rekik","Sahli","Zaoui","Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Karim","Lakhal","Mahjoub","Nabil","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Hachani","Islah","Jemili","Khaldi","Larbi","Mokrani","Nadir","Ouahes","Riahi","Salhi","Taleb","Wahabi","Zeroual","Aissa","Belaid","Chami","Djelloul","Fekih","Guerfi","Bouzid","Chettouh","Djebbari","Ferjani","Guenaoui","Hallaoui","Khemiri","Mejri","Ouarda","Selmi"],d=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],u=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],s=new Set(u.sort(()=>Math.random()-.5).slice(0,4)),b=[...u].sort(()=>Math.random()-.5),o=new Set(b.slice(0,2)),g=new Set(b.slice(2,4)),l=10,a=d.map((x,E)=>E<l);for(let x=a.length-1;x>0;x--){const E=Math.floor(Math.random()*(x+1));[a[x],a[E]]=[a[E],a[x]]}const r=new Set;function c(){const x=p.filter(k=>!r.has(k)&&!n.has(k)),E=x.length?x:p.filter(k=>!r.has(k)),m=E.length?E:p,$=ae(m);return r.add($),$}return d.map((x,E)=>{const m=a[E]?t:Mt(t),$=Ke(m),k=At(m),h=ae(St),f=zt(1,20),y=s.has(E),v=y?Math.max(0,f-2):0;let _=0,B=0,I=0,C=0,S=null;x==="GK"?_=f:x==="DEF"?(B=f,y&&(I=v,S="MIL")):x==="ATT"?(C=f,y&&(I=v,S="MIL")):(I=f,y&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(B=v,S="DEF"):(C=v,S="ATT")));const A=o.has(E)?"pepite":g.has(E)?"papyte":"normal",z=c();return{job:x,job2:S,firstname:ae(i),surname_real:z,country_code:m,club_id:e,note_g:_,note_d:B,note_m:I,note_a:C,skin:$,hair:k,hair_length:h,rarity:A,sell_price:0,ethnie:$e(m),_ethnie:$e(m)}})}async function Ve(e,t,n){const{data:i}=await w.from("players").select("surname_real").not("surname_real","is",null),p=new Set((i||[]).map(r=>r.surname_real).filter(Boolean)),d=Tt(e,t,p),{data:u}=await w.from("players").select("face").not("face","is",null),s=new Set((u||[]).map(r=>r.face).filter(Boolean)),b=new Set;for(const r of d){const c=await Ge(r.country_code,new Set([...s,...b]));c&&(r.face=c,b.add(c)),delete r._ethnie}const{data:o,error:g}=await w.from("players").insert(d).select("id");if(g){console.error("[GenSquad] Erreur batch insert:",g.message,g.details),n("Erreur: "+g.message,"error");return}const l=(o||[]).map(r=>({card_type:"player",player_id:r.id}));if(l.length){const{error:r}=await w.from("cards").insert(l);r&&console.warn("[GenSquad] Erreur cartes:",r.message)}const a=(o==null?void 0:o.length)||0;console.log("[GenSquad] Créés:",a,"/",d.length),a>0?n(`${a} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Je(e){return{style:e.kit_style||T.style,color1:e.kit_color1||T.color1,color2:e.kit_color2||T.color2,color3:e.kit_color3||T.color3,shorts:e.kit_shorts||T.shorts,socks:e.kit_socks||T.socks}}let re=[];async function Rt(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([w.from("clubs").select("*").order("real_name"),w.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const d={};(p||[]).forEach(u=>{d[u.club_id]=(d[u.club_id]||0)+1}),jt(e,t,d)}function jt(e,t,n={}){const{toast:i,openModal:p,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,u(re),document.getElementById("search-clubs").addEventListener("input",s=>{const b=s.target.value.toLowerCase();u(re.filter(o=>o.real_name.toLowerCase().includes(b)||o.encoded_name.toLowerCase().includes(b)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ie(null,e,t));function u(s){const b=document.getElementById("clubs-list");if(!s.length){b.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}b.innerHTML=s.map(o=>{const g=Je(o),l=Oe(g,o.id).replace("<svg ",'<svg style="width:40px;height:48px" '),a=o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${g.color1},${g.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`,r=n[o.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${a}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${r===0?"#e67e22":"var(--gray-600)"}">
              ${r===0?"⚠️ Aucun joueur":`👥 ${r} joueur${r>1?"s":""}`}
            </div>
          </div>
          ${l}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${r===0?`<button class="btn btn-primary btn-sm" data-gen="${o.id}" data-cc="${o.country_code}" data-name="${o.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),b.querySelectorAll("[data-gen]").forEach(o=>{o.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${o.dataset.name} ?`)&&(o.disabled=!0,o.textContent="⏳",await Ve(o.dataset.gen,o.dataset.cc,i),ce(e,t))})}),b.querySelectorAll("[data-edit]").forEach(o=>{const g=re.find(l=>l.id===o.dataset.edit);o.addEventListener("click",()=>Ie(g,e,t))}),b.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:g}=await w.from("clubs").delete().eq("id",o.dataset.del);g?i(g.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function Ie(e,t,n){const{toast:i,openModal:p,closeModal:d}=n,u=!!e,s=e?Je(e):{...T},b=Object.entries(we).map(([g,l])=>`<option value="${g}" ${s.style===g?"selected":""}>${l.label}</option>`).join(""),o=Ue.map(g=>`<option value="${g}" ${((e==null?void 0:e.country_code)||"FR")===g?"selected":""}>${g}</option>`).join("");p(u?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${[["Couleur 1","m-kit-color1",s.color1,!1],["Couleur 2","m-kit-color2",s.color2,!1],["Couleur 3","m-kit-color3",s.color3,!0],["Short","m-kit-shorts",s.shorts,!1],["Chaussettes","m-kit-socks",s.socks,!1]].map(([g,l,a,r])=>`
              <div class="form-group" id="wrap-${l}" ${r?'style="display:none"':""}>
                <label>${g}</label>
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
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 0–20 · physique adapté au pays · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${u?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var c,x,E;ne();function g(){var h,f;const m=((h=document.getElementById("m-kit-style"))==null?void 0:h.value)||"uni",$=((f=we[m])==null?void 0:f.colors)===3,k=document.getElementById("wrap-m-kit-color3");k&&(k.style.display=$?"":"none")}g(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(m=>{const $=document.getElementById(m),k=document.getElementById(m+"-txt");!$||!k||($.addEventListener("input",()=>{k.value=$.value,ne()}),k.addEventListener("input",()=>{const h=k.value.trim();/^#[0-9a-fA-F]{6}$/.test(h)&&($.value=h,ne())}),k.addEventListener("change",()=>{let h=k.value.trim();h.startsWith("#")||(h="#"+h),/^#[0-9a-fA-F]{6}$/.test(h)&&($.value=h,k.value=h,ne())}))}),(c=document.getElementById("m-kit-style"))==null||c.addEventListener("change",()=>{g(),ne()});const l=document.getElementById("m-real"),a=document.getElementById("m-encoded");function r(){if(!l||!a||a.value)return;const m=l.value.trim().split(/\s+/),$=m.length===1?m[0].toUpperCase().slice(0,6):m.filter(k=>k.length>2).map(k=>k[0].toUpperCase()).join("")||m[0].toUpperCase().slice(0,4);a.value=$}l==null||l.addEventListener("input",r),(x=document.getElementById("auto-encode-btn"))==null||x.addEventListener("click",()=>{a&&(a.value=""),r()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>Dt(e,u,t,n))},50)}function We(){var e,t,n,i,p,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Oe(We(),"modal"))}async function Dt(e,t,n,i){var m,$,k,h,f,y;const{toast:p,closeModal:d}=i,u=document.getElementById("m-error"),s=document.getElementById("m-save"),b=(m=document.getElementById("m-real"))==null?void 0:m.value.trim(),o=($=document.getElementById("m-encoded"))==null?void 0:$.value.trim().toUpperCase(),g=(k=document.getElementById("m-country"))==null?void 0:k.value.trim().toUpperCase(),l=((h=document.getElementById("m-logo"))==null?void 0:h.value.trim())||null,a=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,r=((y=document.getElementById("m-gen-squad"))==null?void 0:y.checked)??!1,c=We();if(!b){u.textContent="Le nom du club est requis.";return}if(!o){u.textContent="Le nom encodé est requis.";return}if(!g){u.textContent="Le pays est requis.";return}s.disabled=!0,s.textContent="Enregistrement…";const x={real_name:b,encoded_name:o,country_code:g,logo_url:l,kit_style:c.style,kit_color1:c.color1,kit_color2:c.color2,kit_color3:c.color3,kit_shorts:c.shorts,kit_socks:c.socks};let E=e==null?void 0:e.id;if(t){const{error:v}=await w.from("clubs").update(x).eq("id",E);if(v){u.textContent=v.message,s.disabled=!1,s.textContent="💾 Enregistrer";return}}else{const{data:v,error:_}=await w.from("clubs").insert(x).select().single();if(_){u.textContent=_.message,s.disabled=!1,s.textContent="✅ Créer le club";return}if(E=v.id,a){s.textContent="🏟️ Création du stade…";const{data:B,error:I}=await w.from("stadium_definitions").insert({name:`Stade de ${b}`,club_id:E,country_code:g}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):B&&await w.from("cards").insert({card_type:"stadium",stadium_id:B.id})}r&&(s.textContent="⚽ Génération des joueurs…",await Ve(E,g,p))}p(t?"Club modifié ✅":"Club créé ✅","success"),d(),ce(n,i)}const Pt=["normal","pepite","papyte","legende"],Be=["GK","DEF","MIL","ATT"],Nt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let U={...R},se=[];async function Ft(e,{toast:t}){const{data:n}=await w.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");se=n||[],U={...R},e.innerHTML=qt(se),Ot(e,se,t),N()}function Se(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=pe(e))}function Gt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=se.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||T.style,color1:t.kit_color1||T.color1,color2:t.kit_color2||T.color2,shorts:t.kit_shorts||T.shorts,socks:t.kit_socks||T.socks}:{...T}}function N(){var a,r,c,x;const e=E=>{var m;return((m=document.getElementById(E))==null?void 0:m.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||pe(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((r=(a=document.getElementById("cb-club"))==null?void 0:a.selectedOptions[0])==null?void 0:r.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Gt(),i=document.getElementById("cb-club"),p=((x=(c=i==null?void 0:i.selectedOptions[0])==null?void 0:c.dataset)==null?void 0:x.logo)||null,d=He(U,n,120),u=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,s=st(t,{portraitUrl:u,clubLogoUrl:p,showNotes:!0}),b=document.getElementById("card-preview");b&&(b.innerHTML=s);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=d);const g=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&g&&(l.textContent=`${e("cb-firstname")} ${g} → ${e("cb-firstname")} ${t.surname_real}`)}function Ye(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};U={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ot(e,t,n){var p,d,u,s,b;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",N),o.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var g;(g=document.getElementById(o))==null||g.addEventListener("change",()=>{Ye(),N()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Se(),N()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Se(),N()}),(u=document.getElementById("cb-club"))==null||u.addEventListener("change",N),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",()=>Ht(n)),(b=document.getElementById("btn-reset"))==null||b.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),U={...R},i.forEach(o=>{const g=o.replace("av-",""),l=document.getElementById(o);l&&(l.value=R[g]||"")}),N()})}async function Ht(e){const t=u=>{var s;return((s=document.getElementById(u))==null?void 0:s.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||pe(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ye();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:U,skin:U.skin||"blanc",hair:U.hairColor||"marron",hair_length:"court"},{error:d}=await w.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function qt(e){const t=Nt.map(([o,g])=>`<option value="${o}">${g} (${o})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=Be.map(o=>`<option value="${o}">${o}</option>`).join(""),p='<option value="">Aucun</option>'+Be.map(o=>`<option value="${o}">${o}</option>`).join(""),d=Pt.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),u=(o,g,l)=>Object.entries(g).map(([a,r])=>`<option value="${a}" ${a===(l||"")?"selected":""}>${r.label}</option>`).join(""),s=Object.keys(ot).map(o=>`<option value="${o}" ${o===R.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),b=Object.keys(at).map(o=>`<option value="${o}" ${o===R.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
              <select id="av-skin">${s}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${u("av-hair",lt,R.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${b}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${u("av-eyebrows",dt,R.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${u("av-eyes",ct,R.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${u("av-nose",ut,R.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${u("av-mouth",pt,R.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${u("av-beard",mt,R.beard)}</select>
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
  `}async function Ze(e,{toast:t}){const{data:n,error:i}=await w.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[];e.innerHTML=`
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
  `,d(p),document.getElementById("search-users").addEventListener("input",u=>{const s=u.target.value.toLowerCase();d(p.filter(b=>{var o;return b.pseudo.toLowerCase().includes(s)||((o=b.club_name)==null?void 0:o.toLowerCase().includes(s))}))});function d(u){document.getElementById("users-tbody").innerHTML=u.map(s=>{const b=s.mmr??1e3,o=s.mmr_deviation??350,g=s.placement_matches??0,l=gt(b),a=s.ranked_wins??0,r=s.ranked_losses??0,c=s.ranked_draws??0,x=a+r+c,E=x>0?Math.round(a/x*100):null,m=g<10,$=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${s.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${s.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(s.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${s.level}</div>
          </td>
          <td style="font-size:12px">${s.wins}V / ${s.draws}N / ${s.losses}D</td>
          <td style="font-size:12px">🥇${s.trophies_top1} 🥈${s.trophies_top2} 🥉${s.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${l.emoji}</span>
              <span style="font-weight:700;color:${l.color}">${l.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${g}/10 placement${g<10?` (${10-g} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${a}V ${c}N ${r}D${E!==null?` · ${E}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${b}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${s.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${s.id}" data-is-admin="${s.is_admin}">
              ${s.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(s=>{s.addEventListener("click",async()=>{const b=s.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${b?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await w.from("users").update({is_admin:b}).eq("id",s.dataset.toggleAdmin);o?t(o.message,"error"):(t("Rôle mis à jour ✅","success"),Ze(e,{toast:t}))})})}}async function Xe(e,{toast:t}){const{data:n,error:i}=await w.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[],d=p.filter(s=>s.status==="active").length,u=p.filter(s=>s.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
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
            ${p.map(s=>{var l,a,r,c;const b=(l=s.card)==null?void 0:l.player,o=b?`${b.firstname} ${b.surname_real}`:((a=s.card)==null?void 0:a.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${o}</b>${b?`<div style="font-size:10px;color:#999">${b.rarity} · ${b.job}</div>`:""}</td>
                <td style="font-size:12px">${((r=s.seller)==null?void 0:r.pseudo)||"—"}</td>
                <td style="font-size:12px">${((c=s.buyer)==null?void 0:c.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(s.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[s.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${s.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(s.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${s.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${s.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:b}=await w.from("market_listings").update({status:"cancelled"}).eq("id",s.dataset.cancel);b?t(b.message,"error"):(t("Annonce annulée","success"),Xe(e,{toast:t}))})})}async function Ut(e,{toast:t}){e.innerHTML=`
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
`;n.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(Ce).join(",")+`
`}),oe("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var u;p+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((u=d.clubs)==null?void 0:u.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(Ce).join(",")+`
`}),oe("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),u=Le(d);if(u.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let s=0,b=0;const o=[];for(const g of u){if(!g.real_name||!g.encoded_name||!g.country_code){b++,o.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const l={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:a}=await w.from("clubs").upsert(l,{onConflict:"encoded_name"});a?(b++,o.push(`${g.encoded_name}: ${a.message}`)):s++}p.innerHTML=`<div style="color:var(--green)">✅ ${s} clubs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,t(`${s} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),u=Le(d);if(u.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:s}=await w.from("clubs").select("id,encoded_name"),b={};(s||[]).forEach(m=>{b[m.encoded_name.toUpperCase()]=m.id});let o=0,g=0;const l=[],a=["GK","DEF","MIL","ATT"],r=["normal","pepite","papyte","legende"],c=["blanc","metisse","typ","noir"],x=["blond","marron","noir","chauve"],E=["rase","court","milong","long"];for(const m of u){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){g++,l.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!a.includes(m.job)){g++,l.push(`${m.firstname}: job invalide "${m.job}"`);continue}const $=m.club_encoded_name&&b[m.club_encoded_name.toUpperCase()]||null,k={firstname:m.firstname,surname_real:m.surname_real,surname_real:m.surname_real||pe(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:$,job:m.job,job2:a.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:r.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:c.includes(m.skin)?m.skin:"blanc",hair:x.includes(m.hair)?m.hair:"noir",hair_length:E.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:h}=await w.from("players").insert(k);h?(g++,l.push(`${m.firstname} ${m.surname_real}: ${h.message}`)):o++}p.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${o} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function Ce(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Le(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(u=>u.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=Ae(n,i).map(u=>u.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let u=1;u<t.length;u++){if(!t[u].trim())continue;const s=Ae(t[u],i),b={};p.forEach((o,g)=>{b[o]=(s[g]||"").trim()}),!Object.values(b).every(o=>!o)&&d.push(b)}return d}function Ae(e,t=","){const n=[];let i="",p=!1;for(let d=0;d<e.length;d++){const u=e[d];p?u==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=u:u==='"'?p=!0:u===t?(n.push(i),i=""):i+=u}return n.push(i),n}const Kt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Vt(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:p}=await w.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(g=>{d[g.formation]=g.links});let u=new Set;function s(g,l){return[g,l].sort().join("-")}function b(g){const l=d[g]||me[g]||[];u=new Set(l.map(([a,r])=>s(a,r)))}b(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${u.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function o(){const g=ft[i]||{},l=_e(i),a=320,r=400,c=22;function x(h){const f=g[h];return f?{x:f.x*a,y:f.y*r}:null}let E=`<svg width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([h,f],y)=>{const v=x(h),_=x(f);if(!v||!_)return;const B=s(h,f),I=u.has(B),C=I?"#3b82f6":"#999",S=I?.95:.35,A=I?4:3;E+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,E+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="${C}" stroke-width="${A}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${B}"/>`});for(const h of Object.keys(g)){const f=x(h);if(!f)continue;const y=h.replace(/\d+/,""),v=Kt[y]||"#555";E+=`<circle cx="${f.x}" cy="${f.y}" r="${c}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,E+=`<text x="${f.x}" y="${f.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${h}</text>`}E+="</svg>",document.getElementById("field-wrap").innerHTML=E;const m=document.getElementById("links-list");m.innerHTML=l.map(([h,f])=>{const y=s(h,f),v=u.has(y);return`
        <button class="link-toggle" data-key="${y}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${h} ↔ ${f}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${u.size}/${l.length} actifs)`);function k(h){u.has(h)?u.delete(h):u.add(h),o()}e.querySelectorAll(".link-hit").forEach(h=>{h.addEventListener("click",()=>k(h.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(h=>{h.addEventListener("click",()=>k(h.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",g=>{i=g.target.value,b(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=me[i]||[];u=new Set(g.map(([l,a])=>s(l,a))),o(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=_e(i).filter(([r,c])=>u.has(s(r,c))),{error:a}=await w.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(a){t(a.message,"error");return}d[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const Jt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Wt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Yt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Zt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const d=()=>window.innerWidth<700;async function u(){if(!n){i=[];return}if(n!==p){const{data:l}=await w.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],p=n}}function s(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function b(){const l=n?(t||[]).find(c=>c.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=i.reduce((c,x)=>c+Number(x.percentage||0),0),r=Math.abs(a-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${Yt.map(c=>`<option value="${c.value}" ${l.price_type===c.value?"selected":""}>${c.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${r?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${r?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((c,x)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${x}">
            <select class="rate-type" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Jt.map(E=>`<option value="${E.value}" ${c.card_type===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Wt.map(E=>`<option value="${E.value}" ${(c.rarity||"")===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${x}" type="number" min="0" max="20" value="${c.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${x}" type="number" min="0" max="20" value="${c.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${x}" type="number" min="0.1" max="100" step="0.1" value="${c.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${x}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(l=!1){l||await u();const a=!n&&d(),r=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||a||!n?s():""}
      ${!d()||r?b():""}
    </div>`,g()}function g(){var r,c,x,E,m,$,k;const l=h=>e.querySelector(h);e.querySelectorAll(".booster-row").forEach(h=>{h.addEventListener("click",f=>{f.target.closest(".btn-delete")||(n=h.dataset.id,p=null,o())})}),(r=l("#btn-back"))==null||r.addEventListener("click",()=>{n=null,o()}),(c=l("#btn-new"))==null||c.addEventListener("click",async()=>{const h=prompt("Nom du nouveau booster :");if(!(h!=null&&h.trim()))return;const{data:f,error:y}=await w.from("booster_configs").insert({name:h.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(y){alert(y.message);return}t.push(f),n=f.id,p=null,o()}),e.querySelectorAll(".btn-delete").forEach(h=>{h.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await w.from("booster_configs").delete().eq("id",h.dataset.id);const y=t.findIndex(v=>v.id===h.dataset.id);y>-1&&t.splice(y,1),n===h.dataset.id&&(n=null,p=null),o()})}),(x=l("#btn-cancel"))==null||x.addEventListener("click",()=>{n=null,o()}),(E=l("#f-price-type"))==null||E.addEventListener("change",h=>{const f=l("#credits-field");f&&(f.style.opacity=h.target.value!=="credits"?"0.4":"1")}),(m=l("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var f;const h=l("#icon-picker-grid");if(h){if(h.style.display!=="none"){h.style.display="none";return}h.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',h.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){h.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((f=l("#f-image-url"))==null?void 0:f.value)||"";h.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,h.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const C=l("#f-image-url");C&&(C.value=I.dataset.name),h.style.display="none"})})}catch(y){h.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${y.message}</div>`}}});function a(){e.querySelectorAll("[data-rate-idx]").forEach(h=>{var y,v,_,B,I;const f=Number(h.dataset.rateIdx);f>=0&&f<i.length&&(i[f].card_type=((y=h.querySelector(".rate-type"))==null?void 0:y.value)||"player",i[f].rarity=((v=h.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[f].note_min=Number((_=h.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[f].note_max=Number((B=h.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[f].percentage=Number((I=h.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}($=l("#btn-add-rate"))==null||$.addEventListener("click",()=>{a(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(h=>{h.addEventListener("click",()=>{a(),i.splice(Number(h.dataset.idx),1),o(!0)})}),(k=l("#btn-save"))==null||k.addEventListener("click",async()=>{var B,I,C,S,A,z,M,F,G,O,H,D,j;const h=(t||[]).find(L=>L.id===n);if(!h)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var W,Y,Z,X,Q;const K=Number(L.dataset.rateIdx);f.push({booster_id:n,card_type:((W=L.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Y=L.querySelector(".rate-rarity"))==null?void 0:Y.value)||null,note_min:Number((Z=L.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=L.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=L.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const P=f[f.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const y=f.reduce((L,K)=>L+K.percentage,0);if(f.length&&Math.abs(y-100)>.5){alert(`La somme doit faire 100% (actuellement ${y.toFixed(1)}%)`);return}const v={name:((I=(B=l("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||h.name,image_url:((S=(C=l("#f-image-url"))==null?void 0:C.value)==null?void 0:S.trim())||null,price_type:(A=l("#f-price-type"))==null?void 0:A.value,price_credits:Number((z=l("#f-price-credits"))==null?void 0:z.value)||0,card_count:Number((M=l("#f-card-count"))==null?void 0:M.value)||5,is_active:((F=l("#f-active"))==null?void 0:F.checked)??h.is_active,allow_duplicates:((G=l("#f-allow-dup"))==null?void 0:G.checked)??!0,sort_order:Number((O=l("#f-sort"))==null?void 0:O.value)||0,max_per_user:(H=l("#f-max-per-user"))!=null&&H.value?Number(l("#f-max-per-user").value):null,available_from:((D=l("#f-available-from"))==null?void 0:D.value)||null,available_until:((j=l("#f-available-until"))==null?void 0:j.value)||null},{error:_}=await w.from("booster_configs").update(v).eq("id",n);if(_){alert(_.message);return}if(Object.assign(h,v),await w.from("booster_drop_rates").delete().eq("booster_id",n),f.length){const{error:L}=await w.from("booster_drop_rates").insert(f);if(L){alert(L.message);return}}i=f,p=n,alert("✅ Booster enregistré !"),o(!0)})}o()}const Qe=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Xt(e){await fe(e)}async function fe(e){const{data:t,error:n}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>en(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>ze(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await w.from("sell_price_configs").delete().eq("id",i.dataset.delete),await fe(e))})})}function Qt(e){const t=Qe.find(n=>n.value===e.rarity);return`
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
    </tr>`}function ze(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function en(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const u={rarity:n,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let s;if(t?{error:s}=await w.from("sell_price_configs").update(u).eq("id",t):{error:s}=await w.from("sell_price_configs").insert(u),s){alert("Erreur : "+s.message);return}document.getElementById("config-form").style.display="none",await fe(e)}async function tn(e){await be(e)}async function be(e){const{data:t}=await w.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`}function Me(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function on(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,u=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const s=u?new Date(u).toISOString():new Date().toISOString(),b={title:n,description:i,image_url:p,is_published:d,published_at:s};let o;if(t?{error:o}=await w.from("patch_notes").update(b).eq("id",t):{error:o}=await w.from("patch_notes").insert(b),o){alert("Erreur : "+o.message);return}document.getElementById("article-form").style.display="none",await be(e)}async function an(e){await J(e)}async function J(e){var g,l,a,r,c,x,E,m,$,k,h,f;const{data:t}=await w.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
    </div>`,(g=document.getElementById("ts-add"))==null||g.addEventListener("click",()=>Te(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:y}=await w.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(y?"Erreur : "+y.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(a=document.getElementById("ts-cancel"))==null||a.addEventListener("click",et),(r=document.getElementById("ts-save"))==null||r.addEventListener("click",()=>ln(e)),(c=document.getElementById("ts-preview-btn"))==null||c.addEventListener("click",sn);const n=document.getElementById("ts-editor"),i=()=>{const y=document.getElementById("ts-content");y&&n&&(y.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(x=document.getElementById("ts-toolbar"))==null||x.querySelectorAll("[data-cmd]").forEach(y=>{y.addEventListener("mousedown",v=>{v.preventDefault(),p();const _=y.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(E=document.getElementById("ts-insert-color"))==null||E.addEventListener("mousedown",y=>{y.preventDefault(),p();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(m=document.getElementById("ts-clear-format"))==null||m.addEventListener("mousedown",y=>{y.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),u=document.getElementById("ts-img-preview"),s=document.getElementById("ts-img-preview-el"),b=document.getElementById("ts-img-picker-grid"),o=()=>{var v;const y=(v=d==null?void 0:d.value)==null?void 0:v.trim();if(y){const _="/";s.src=`${_}icons/${y}`,u.style.display="block"}else u.style.display="none"};d==null||d.addEventListener("input",o),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{d&&(d.value=""),u.style.display="none",b.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',b.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){b.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";b.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",b.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),o(),b.style.display="none"})})}catch(y){b.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+y.message+"</div>"}}),(h=document.getElementById("ts-color"))==null||h.addEventListener("input",y=>{const v=document.getElementById("ts-color-hex");v&&(v.value=y.target.value)}),(f=document.getElementById("ts-color-hex"))==null||f.addEventListener("input",y=>{const v=y.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const _=document.getElementById("ts-color");_&&(_.value=v)}}),e.querySelectorAll("[data-edit]").forEach(y=>{const v=(t||[]).find(_=>_.id===y.dataset.edit);v&&y.addEventListener("click",()=>Te(v))}),e.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await w.from("tutorial_steps").delete().eq("id",y.dataset.delete),J(e))})}),e.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",async()=>{const v=(t||[]).find(_=>_.id===y.dataset.toggle);v&&(await w.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),J(e))})}),e.querySelectorAll("[data-up]").forEach(y=>{y.addEventListener("click",async()=>{const v=t||[],_=v.findIndex(B=>B.id===y.dataset.up);_<=0||(await Promise.all([w.from("tutorial_steps").update({step_order:v[_-1].step_order}).eq("id",v[_].id),w.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_-1].id)]),J(e))})}),e.querySelectorAll("[data-down]").forEach(y=>{y.addEventListener("click",async()=>{const v=t||[],_=v.findIndex(B=>B.id===y.dataset.down);_<0||_>=v.length-1||(await Promise.all([w.from("tutorial_steps").update({step_order:v[_+1].step_order}).eq("id",v[_].id),w.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_+1].id)]),J(e))})})}function rn(e){return`
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
  </div>`}function Te(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const u=document.getElementById("ts-img-preview"),s=document.getElementById("ts-img-preview-el");if(p&&u&&s){const b="/";s.src=`${b}icons/${p}`,u.style.display="block"}else u&&(u.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function et(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function sn(){var o,g;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(g=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:g.trim(),s=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",b=document.getElementById("ts-preview-area");b.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${t}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${s}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,b.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),b.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),b.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function ln(e){var l,a;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),u=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",s=parseInt(document.getElementById("ts-order").value)||0,b=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const o={emoji:n,title:i,content:d,color:u,step_order:s,is_active:b,image_url:((a=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:a.trim())||null};let g;if(t?{error:g}=await w.from("tutorial_steps").update(o).eq("id",t):{error:g}=await w.from("tutorial_steps").insert(o),g){alert("Erreur : "+g.message);return}et(),J(e)}const dn="/",cn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function un(e){await ye(e)}async function ye(e){var i,p,d,u;const[{data:t},{data:n}]=await Promise.all([w.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),w.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:#1a1a1a">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(s=>pn(s)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(n||[]).map(s=>`<option value="${s.id}" data-logo="${s.logo_url||""}">${s.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${cn.map(([s,b])=>`<option value="${s}">${b} (${s})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Re(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>mn(e)),(u=document.getElementById("st-preview-btn"))==null||u.addEventListener("click",()=>le()),["st-name","st-club","st-country","st-image"].forEach(s=>{var b,o;(b=document.getElementById(s))==null||b.addEventListener("input",le),(o=document.getElementById(s))==null||o.addEventListener("change",le)}),e.querySelectorAll("[data-edit]").forEach(s=>{const b=(t||[]).find(o=>o.id===s.dataset.edit);b&&s.addEventListener("click",()=>Re(b))}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await w.from("stadium_definitions").delete().eq("id",s.dataset.delete),ye(e))})})}function pn(e){var n,i;let t;return(n=e.club)!=null&&n.logo_url?t=`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:e.country_code?t=`<img src="https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/32.png" style="width:32px;height:24px;object-fit:contain;border-radius:3px" onerror="this.style.display='none'">`:t='<span style="font-size:20px">🌍</span>',`
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
    </div>`}function Re(e,t){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",le((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function le(){var o,g,l,a,r,c,x;const e=((o=document.getElementById("st-name"))==null?void 0:o.value)||"NOM DU STADE",t=(l=(g=document.getElementById("st-image"))==null?void 0:g.value)==null?void 0:l.trim(),n=(r=(a=document.getElementById("st-country"))==null?void 0:a.value)==null?void 0:r.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,d=i&&p>0?i.options[p].text:"",u=((x=(c=i==null?void 0:i.options[p])==null?void 0:c.getAttribute)==null?void 0:x.call(c,"data-logo"))||"";let s=null;t?s=`${dn}icons/${t}`:u?s=u:n&&(s=`https://flagsapi.com/${n.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const b=d||n||"—";document.getElementById("st-preview-card").innerHTML=bt(e,s,`${b}<br>+10 ⭐`,{width:140})}async function mn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const u={name:n,club_id:i,country_code:p,image_url:d},{error:s}=t?await w.from("stadium_definitions").update(u).eq("id",t):await w.from("stadium_definitions").insert(u);if(s){alert("Erreur : "+s.message);return}document.getElementById("st-form").style.display="none",ye(e)}const q=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ie=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function gn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,u=a=>e.querySelector(a);function s(a,r=130){if(!a)return"";const c=q.find(E=>E.value===a.gc_type)||q[0],x=a.image_url?`/icons/${a.image_url}`:null;return yt(a.name||"?",x,c.label.split(" ")[0],a.effect||"",{width:r})}function b(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(a=>{const r=q.find(x=>x.value===a.gc_type)||q[0],c=ie.find(x=>x.value===a.color)||ie[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${c.hex};background:${r.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:r.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${r.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
    </div>`}function o(){const a=n?(t||[]).find(r=>r.id===n):null;return a?(q.find(r=>r.value===a.gc_type)||q[0],ie.find(r=>r.value===a.color)||ie[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${s(a,d()?120:150)}
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
              ${q.map(r=>`<option value="${r.value}" ${a.gc_type===r.value?"selected":""}>${r.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ie.map(r=>`<option value="${r.value}" ${a.color===r.value?"selected":""}>${r.label}</option>`).join("")}
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
              ${i.map(r=>`<option value="${r.value}" ${(a.effect_type||"BOOST_STAT")===r.value?"selected":""}>${r.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const r=a.effect_params||{},c=i.find(x=>x.value===(a.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${c.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${r.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${c.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${r.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${c.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(r.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${r.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${c.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(x=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${x}" ${!r.roles||r.roles.includes(x)?"checked":""}> ${x}
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
    </div>`}function g(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!n?b():""}
      ${!d()||n?o():""}
    </div>`,l()}function l(){var a,r,c,x,E;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",$=>{$.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=m.dataset.id,g())})}),(a=u("#btn-gc-back"))==null||a.addEventListener("click",()=>{n=null,g()}),(r=u("#btn-cancel-gc"))==null||r.addEventListener("click",()=>{n=null,g()}),(c=u("#btn-new-gc"))==null||c.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:$,error:k}=await w.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}t.push($),n=$.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async $=>{$.stopPropagation();const k=m.dataset.active!=="true";await w.from("gc_definitions").update({is_active:k}).eq("id",m.dataset.id);const h=t.find(f=>f.id===m.dataset.id);h&&(h.is_active=k),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await w.from("gc_definitions").delete().eq("id",m.dataset.id);const k=t.findIndex(h=>h.id===m.dataset.id);k>-1&&t.splice(k,1),n===m.dataset.id&&(n=null),g()})}),(x=u("#btn-pick-gc-icon"))==null||x.addEventListener("click",async()=>{var $;const m=u("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const h=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(h)?h.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!f.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const y=(($=u("#gc-image-url"))==null?void 0:$.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===y?"#7a28b8":"#ddd"};background:${v.name===y?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const _=u("#gc-image-url");_&&(_.value=v.dataset.name),m.style.display="none"})})}catch(k){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(E=u("#btn-save-gc"))==null||E.addEventListener("click",async()=>{var v,_,B,I,C,S,A,z,M,F,G,O,H,D;const m=t.find(j=>j.id===n);if(!m)return;const $=i.find(j=>{var L;return j.value===(((L=u("#gc-effect-type"))==null?void 0:L.value)||"BOOST_STAT")})||i[0],k=$.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,h={...$.hasValue?{value:Number((v=u("#gc-p-value"))==null?void 0:v.value)||2}:{},...$.hasCount?{count:Number((_=u("#gc-p-count"))==null?void 0:_.value)||1}:{},...$.hasTarget?{target:((B=u("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...$.hasRoles?{roles:k!=null&&k.length?k:null}:{}},f={name:((C=(I=u("#gc-name"))==null?void 0:I.value)==null?void 0:C.trim())||m.name,effect:((A=(S=u("#gc-effect"))==null?void 0:S.value)==null?void 0:A.trim())||null,image_url:((M=(z=u("#gc-image-url"))==null?void 0:z.value)==null?void 0:M.trim())||null,gc_type:((F=u("#gc-type"))==null?void 0:F.value)||"game_changer",color:((G=u("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((O=u("#gc-sort"))==null?void 0:O.value)||0,is_active:((H=u("#gc-active"))==null?void 0:H.checked)??m.is_active,effect_type:((D=u("#gc-effect-type"))==null?void 0:D.value)||"BOOST_STAT",effect_params:h},{error:y}=await w.from("gc_definitions").update(f).eq("id",n);if(y){alert(y.message);return}Object.assign(m,f),alert("✅ Carte enregistrée !"),g()})}g()}async function fn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var h;const{toast:n,openModal:i,closeModal:p}=t,[{data:d,error:u},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),w.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(u){e.innerHTML=`<p style="color:red">${u.message}</p>`;return}const b=d||[],o=b.find(f=>f.is_active),g=(s||[]).filter(f=>(f.placement_matches||0)>=1),l=g.filter(f=>(f.placement_matches||0)>=10),a=["bronze","silver","gold","platinum","diamond","master"],r={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},c={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},x={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},E={};a.forEach(f=>{E[f]=0}),l.forEach(f=>{const y=f.rank_tier||"bronze";E[y]!==void 0&&E[y]++});const m=l.length?Math.round(l.reduce((f,y)=>f+(y.mmr||1e3),0)/l.length):0;function $(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(f){const y=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<y?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${g.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m}</div>
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
                <span style="width:80px">${x[f]} ${r[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${c[f]};border-radius:4px;transition:width 0.5s"></div>
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
    </div>`,(h=document.getElementById("create-season-btn"))==null||h.addEventListener("click",()=>{je(null,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const y=b.find(v=>v.id==f.dataset.edit);f.addEventListener("click",()=>{je(y,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const y=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await w.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){n(v.message,"error");return}const{error:_}=await w.from("ranked_seasons").update({is_active:!0}).eq("id",y);if(_){n(_.message,"error");return}await w.from("users").update({current_season_id:y}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:y}=await w.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(y){n(y.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:y}=await w.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(y){n(y.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function je(e,{toast:t,openModal:n,closeModal:i,reload:p}){const d=!!e,u=new Date().toISOString().slice(0,16),s=new Date(Date.now()+90*864e5).toISOString().slice(0,16),b=e?new Date(e.start_at).toISOString().slice(0,16):u,o=e?new Date(e.end_at).toISOString().slice(0,16):s,g=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var E,m;const a=(E=document.getElementById("season-start"))==null?void 0:E.value,r=(m=document.getElementById("season-end"))==null?void 0:m.value,c=document.getElementById("season-duration");if(!a||!r||!c)return;const x=Math.round((new Date(r)-new Date(a))/864e5);c.textContent=x>0?`Durée : ${x} jour${x>1?"s":""}`:"⚠️ La fin doit être après le début",c.style.color=x>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var a,r,c;(a=document.getElementById("season-start"))==null||a.addEventListener("input",l),(r=document.getElementById("season-end"))==null||r.addEventListener("input",l),l(),(c=document.getElementById("season-save-btn"))==null||c.addEventListener("click",async()=>{var y,v,_;const x=(y=document.getElementById("season-name"))==null?void 0:y.value.trim(),E=(v=document.getElementById("season-start"))==null?void 0:v.value,m=(_=document.getElementById("season-end"))==null?void 0:_.value,$=document.getElementById("season-error");if(!x){$.textContent="Le nom est requis.";return}if(!E){$.textContent="La date de début est requise.";return}if(!m){$.textContent="La date de fin est requise.";return}if(new Date(m)<=new Date(E)){$.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const h={name:x,start_at:new Date(E).toISOString(),end_at:new Date(m).toISOString()};let f;if(d?{error:f}=await w.from("ranked_seasons").update(h).eq("id",e.id):{error:f}=await w.from("ranked_seasons").insert({...h,is_active:!1}),f){$.textContent=f.message,k.disabled=!1,k.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}vt(He);function bn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function yn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ge(){document.getElementById("modal-overlay").classList.add("hidden")}const De={dashboard:{title:"Dashboard",fn:xt},players:{title:"Joueurs & Cartes",fn:_t},clubs:{title:"Clubs",fn:Rt},"card-builder":{title:"Card Builder",fn:Ft},users:{title:"Managers",fn:Ze},market:{title:"Marché des transferts",fn:Xe},"import-export":{title:"Import / Export CSV",fn:Ut},formations:{title:"Formations & Liens",fn:Vt},"boosters-config":{title:"Boosters",fn:Zt},"sell-price":{title:"Prix vente directe",fn:Xt},journal:{title:"Journal",fn:tn},tutorial:{title:"Tutoriel",fn:an},stadiums:{title:"Stades",fn:un},"gc-cards":{title:"Game Changers",fn:gn},"ranked-seasons":{title:"Saisons Ranked",fn}};async function ue(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=De[e]||De.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:bn,openModal:yn,closeModal:ge,navigate:ue})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function vn(){var t;const{data:{session:e}}=await w.auth.getSession();e&&await Pe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:u}=await w.auth.signInWithPassword({email:n,password:i});if(u){p.textContent=u.message;return}await Pe(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ge),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ge()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ue(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ue(n.target.value)})}async function Pe(e){const{data:t,error:n}=await w.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await w.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ue("dashboard")}vn();
