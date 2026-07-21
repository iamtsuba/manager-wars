import{s as w,r as Pe,g as Ne,K as Ee,D as M,S as et,a as T,H as tt,R as nt,e as ue,b as Fe,c as it,d as ot,E as at,f as rt,N as lt,M as st,B as dt,h as ct,F as me,i as we,j as pt,k as ut,l as mt,m as gt}from"./special-cards-Cm3c_QdR.js";async function ft(e){const[{count:t},{count:n},{count:i},{count:p},{count:d}]=await Promise.all([w.from("players").select("*",{count:"exact",head:!0}),w.from("clubs").select("*",{count:"exact",head:!0}),w.from("users").select("*",{count:"exact",head:!0}),w.from("cards").select("*",{count:"exact",head:!0}),w.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
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
  `,window.adminNav=c=>{var l;(l=document.querySelector(`[data-page="${c}"]`))==null||l.click()}}function ee(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const Ge="/",He={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},bt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let te=null;async function yt(){if(te)return te;try{te=await(await fetch(Ge+"faces-manifest.json")).json()}catch{te={}}return te}async function vt(e,t){await de(e,t)}async function de(e,t,n=null){var a,g,s,r,o;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((g=document.getElementById("filter-job"))==null?void 0:g.value)||"",rarity:((s=document.getElementById("filter-rarity"))==null?void 0:s.value)||"",club:((r=document.getElementById("filter-club"))==null?void 0:r.value)||"",country:((o=document.getElementById("filter-country"))==null?void 0:o.value)||""});const[{data:p,error:d},{data:c}]=await Promise.all([w.from("players").select("*, clubs(id,encoded_name,logo_url)"),w.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const l={GK:0,DEF:1,MIL:2,ATT:3},b=(p||[]).sort((f,h)=>{const E=(l[f.job]??4)-(l[h.job]??4);return E!==0?E:(f.surname_real||"").localeCompare(h.surname_real||"")});xt(e,b,c||[],t,n)}function xt(e,t,n,i,p=null){var g,s;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(He).map(([r,o])=>`<option value="${r}">${o}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${n.map(r=>`<option value="${r.id}">${r.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(t.map(r=>r.country_code).filter(Boolean))].sort().map(r=>`<option value="${r}">${r}</option>`).join("")}
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
    </div>`,p){const r=p,o=f=>document.getElementById(f);r.search&&o("search-players")&&(o("search-players").value=r.search),r.job&&o("filter-job")&&(o("filter-job").value=r.job),r.rarity&&o("filter-rarity")&&(o("filter-rarity").value=r.rarity),r.club&&o("filter-club")&&(o("filter-club").value=r.club),r.country&&o("filter-country")&&(o("filter-country").value=r.country)}if(p){const r=p,o=f=>document.getElementById(f);r.search&&o("search-players")&&(o("search-players").value=r.search),r.job&&o("filter-job")&&(o("filter-job").value=r.job),r.rarity&&o("filter-rarity")&&(o("filter-rarity").value=r.rarity),r.club&&o("filter-club")&&(o("filter-club").value=r.club),r.country&&o("filter-country")&&(o("filter-country").value=r.country)}function c(){const r=document.getElementById("search-players").value.toLowerCase(),o=document.getElementById("filter-job").value,f=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return t.filter(m=>(!r||`${m.firstname} ${m.surname_real}`.toLowerCase().includes(r))&&(!o||m.job===o)&&(!f||m.rarity===f)&&(!h||m.club_id===h)&&(!E||m.country_code===E))}const l=new Set;function b(){const r=document.getElementById("bulk-bar"),o=document.getElementById("bulk-count");r&&(r.style.display=l.size>0?"flex":"none",o&&(o.textContent=`${l.size} joueur(s) sélectionné(s)`))}function a(){const r=c();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const o=document.getElementById("players-list");if(!r.length){o.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}o.innerHTML=r.map(f=>{const h={...f,clubs:f.clubs,face:f.face||null},E=Pe(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${f.id}">
        ${E}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${f.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),o.querySelectorAll("[data-edit]").forEach(f=>{f.addEventListener("click",()=>{const h=t.find(E=>E.id===f.dataset.edit);h&&_e(h,n,e,i)})}),o.querySelectorAll(".btn-del-player").forEach(f=>{f.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:E}=await w.from("players").delete().eq("id",f.dataset.del);E?d(E.message,"error"):(d("Joueur supprimé ✅","success"),de(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(g=document.getElementById("bulk-cancel-btn"))==null||g.addEventListener("click",()=>{l.clear(),b(),a()}),(s=document.getElementById("bulk-delete-btn"))==null||s.addEventListener("click",async()=>{var h,E,m,k,_;if(!l.size||!confirm(`Supprimer ${l.size} joueur(s) ?`))return;const r=[...l],{error:o}=await w.from("players").delete().in("id",r);if(o){d(o.message,"error");return}d(`${r.length} joueur(s) supprimé(s) ✅`,"success"),l.clear();const f={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((E=document.getElementById("filter-job"))==null?void 0:E.value)||"",rarity:((m=document.getElementById("filter-rarity"))==null?void 0:m.value)||"",club:((k=document.getElementById("filter-club"))==null?void 0:k.value)||"",country:((_=document.getElementById("filter-country"))==null?void 0:_.value)||""};de(e,i,f)}),document.getElementById("add-player-btn").addEventListener("click",()=>_e(null,n,e,i))}async function _e(e,t,n,i){const{toast:p,openModal:d,closeModal:c}=i,l=!!e,b=await yt(),{data:a}=await w.from("players").select("face").not("face","is",null),g=new Set((a||[]).map(o=>o.face?o.face.replace("public/faces/",""):null).filter(Boolean));e!=null&&e.face&&g.delete(e.face);const s='<option value="">— Club —</option>'+t.map(o=>`<option value="${o.id}" ${(e==null?void 0:e.club_id)===o.id?"selected":""}>${o.encoded_name}</option>`).join(""),r=Object.keys(b).map(o=>{var f;return`<option value="${o}" ${(e==null?void 0:e.ethnie)===o||!(e!=null&&e.ethnie)&&((f=e==null?void 0:e.face)!=null&&f.startsWith(o))?"selected":""}>${o}</option>`}).join("");d(l?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["GK","DEF","MIL","ATT"].map(o=>`<option value="${o}" ${(e==null?void 0:e.job)===o?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Poste 2</label>
            <select id="pm-job2">
              <option value="">Aucun</option>
              ${["GK","DEF","MIL","ATT"].map(o=>`<option value="${o}" ${(e==null?void 0:e.job2)===o?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Rareté</label>
            <select id="pm-rarity">
              ${["normal","pepite","papyte","legende"].map(o=>`<option value="${o}" ${(e==null?void 0:e.rarity)===o?"selected":""}>${He[o]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(o=>`<option value="${o}" ${((e==null?void 0:e.country_code)||"FR")===o?"selected":""}>${o}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([o,f,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${bt[o]};font-weight:700">${o}</label>
                <input id="${f}" type="number" min="0" max="20" value="${(e==null?void 0:e[h])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${l?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var k,_,v;let o=e!=null&&e.face?e.face.replace("public/faces/",""):null;function f(){var C,K,D,W,Y,Z,X,Q,ve,xe,he;const u=document.getElementById("card-preview");if(!u)return;const y=((C=document.getElementById("pm-fn"))==null?void 0:C.value)||"",x=(((K=document.getElementById("pm-real"))==null?void 0:K.value)||"").toUpperCase(),$=((D=document.getElementById("pm-job"))==null?void 0:D.value)||"ATT",B=((W=document.getElementById("pm-job2"))==null?void 0:W.value)||null,I=((Y=document.getElementById("pm-rarity"))==null?void 0:Y.value)||"normal",S=((Z=document.getElementById("pm-country"))==null?void 0:Z.value)||"FR",L=((X=document.getElementById("pm-club"))==null?void 0:X.value)||null,z=document.getElementById("pm-club"),A=z==null?void 0:z.options[z.selectedIndex];(A==null?void 0:A.text)!=="— Club —"&&(A==null||A.text);const P=parseInt((Q=document.getElementById("pm-g"))==null?void 0:Q.value)||0,F=parseInt((ve=document.getElementById("pm-d"))==null?void 0:ve.value)||0,G=parseInt((xe=document.getElementById("pm-m"))==null?void 0:xe.value)||0,H=parseInt((he=document.getElementById("pm-a"))==null?void 0:he.value)||0,R=t.find(Qe=>Qe.id===L),q={firstname:y||"Prénom",surname_real:x||"NOM",job:$,job2:B||null,rarity:I,country_code:S,club_id:L,note_g:P,note_d:F,note_m:G,note_a:H,face:o?"faces/"+o:null,clubs:R?{encoded_name:R.encoded_name,logo_url:R.logo_url}:null};u.innerHTML=Pe(q,{width:160});const j=document.getElementById("pm-minmax");j&&(j.style.display=["pepite","papyte"].includes(I)?"grid":"none")}function h(u){const y=document.getElementById("faces-grid"),x=document.getElementById("pm-face");if(!y||!x)return;const B=(b[u]||[]).filter(I=>{const S=u+"/"+I;return S===o||!g.has(S)});x.innerHTML='<option value="">— Choisir un visage —</option>'+B.map(I=>{const S=u+"/"+I;return`<option value="${S}" ${o===S?"selected":""}>${I}</option>`}).join(""),y.innerHTML=B.map(I=>{const S=u+"/"+I;return`<div data-face="${S}" style="cursor:pointer;border:2px solid ${o===S?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${Ge}faces/${S}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),y.querySelectorAll("[data-face]").forEach(I=>{I.addEventListener("click",()=>{o=I.dataset.face;const S=document.getElementById("pm-face");S&&(S.value=o),y.querySelectorAll("[data-face]").forEach(L=>{L.style.border=`2px solid ${L.dataset.face===o?"#4fc3f7":"transparent"}`}),f()})})}const E=(e==null?void 0:e.ethnie)||(e!=null&&e.face?e.face.replace("public/faces/","").split("/")[0]:"");E&&b[E]&&(document.getElementById("pm-folder").value=E,h(E)),(k=document.getElementById("pm-folder"))==null||k.addEventListener("change",u=>{h(u.target.value)}),(_=document.getElementById("pm-face"))==null||_.addEventListener("change",u=>{o=u.target.value||null,f()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(u=>{var y,x;(y=document.getElementById(u))==null||y.addEventListener("input",f),(x=document.getElementById(u))==null||x.addEventListener("change",f)}),(v=document.getElementById("pm-save"))==null||v.addEventListener("click",()=>Et(e,l,o,n,i)),f()},50)}function ht(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e?"public/faces/"+e:null,ethnie:t("pm-folder")||null,is_active:!0}}async function Et(e,t,n,i,p){var o,f,h,E,m;const{toast:d,closeModal:c}=p,l=document.getElementById("pm-error"),b=document.getElementById("pm-save"),a=ht(n);if(!a.firstname){l.textContent="Le prénom est requis.";return}if(!a.surname_real){l.textContent="Le nom est requis.";return}b.disabled=!0,b.textContent="Enregistrement…";const g=a,{error:s}=t?await w.from("players").update({...g,updated_at:new Date().toISOString()}).eq("id",e.id):await w.from("players").insert(g);if(s){l.textContent=s.message,b.disabled=!1,b.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),c();const r={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((f=document.getElementById("filter-job"))==null?void 0:f.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((E=document.getElementById("filter-club"))==null?void 0:E.value)||"",country:((m=document.getElementById("filter-country"))==null?void 0:m.value)||""};de(i,p,r)}const wt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},_t=["rase","court","milong","long"];function kt(e){const t=Oe(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function $t(e){return Math.random()<.05?"chauve":kt(e)}const qe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Oe(e){return wt[e]||"blanc"}function It(e){return $t(e)}function Bt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ae(e){return e[Math.floor(Math.random()*e.length)]}function St(e){const t=qe.filter(n=>n!==e);return ae(t)}function ke(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}function Lt(e,t,n=new Set){const i=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],p=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Souza","Rodrigues","Almeida","Carvalho","Gomes","Ribeiro","Araujo","Barbosa","Nascimento","Cardoso","Correia","Teixeira","Machado","Vieira","Monteiro","Cunha","Barros","Freitas","Melo","Pinto","Moura","Cavalcanti","Batista","Nunes","Lima","Rocha","Azevedo","Marques","Castro","Reis","Fonseca","Andrade","Braga","Peixoto","Coelho","Amaral","Guimaraes","Pires","Salgado","Xavier","Assuncao","Brito","Vasconcelos","Tavares","Duarte","Bastos","Neves","Figueiredo","Sales","Farias","Siqueira","Camargo","Prado","Miranda","Ramos","Correa","Gaspar","Leite","Pacheco","Sequeira","Marcelino","Antunes","Esteves","Rodriguez","Godinho","Faria","Sardinha","Cordeiro","Aguiar","Salvador","Sarmento","Nogueira","Pimentel","Simoes","Loureiro","Abreu","Sepulveda","Quaresma","Portela","Valente","Franco","Pina","Camilo","Falcao","Serra","Trindade","Belo","Cabral","Vidal","Sanches","Furtado","Guerreiro","Delgado","Coutinho","Vale","Marreiros","Bento","Salavessa","Domingues","Diallo","Traore","Coulibaly","Bah","Konate","Toure","Camara","Barry","Diop","Ndiaye","Sow","Cisse","Fofana","Keita","Sylla","Kane","Diarra","Sanogo","Balde","Diakite","Kouyate","Sissoko","Doumbia","Sarr","Mbaye","Fall","Toumbou","Coumbassa","Faye","Gueye","Thiam","Sarré","Kaba","Dabo","Sacko","Kourouma","Konde","Sangare","Sanou","Toubali","Bangoura","Kante","Samake","Nikiema","Ouedraogo","Zongo","Sawadogo","Compaore","Kabore","Tapsoba","Kagambega","Yameogo","Some","Kienou","Dembele","Bamba","Mendy","Djalo","Konte","Diabate","Doumbouya","Fadiga","Tounkara","Cheikh","Dieng","Diagne","Mbengue","Sagna","Sy","Ba","Wade","Niang","Diedhiou","Sonko","Dieye","Diatta","Mane","Coly","Badiane","Ndour","Faty","Seck","Kone","Berthe","Sidibe","Yattara","Cissoko","Bagayoko","Diakhate","Thioune","Bocoum","Guisse","Muller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Wolf","Schroder","Neumann","Schwarz","Zimmermann","Braun","Kruger","Hofmann","Klein","Wagner","Becker","Hoffmann","Koch","Bergmann","Lange","Schulze","Krause","Meyer","Werner","Krämer","Schulz","Lehmann","Kaiser","Herrmann","Konig","Walter","Mayer","Huber","Kaufmann","Vogel","Friedrich","Keller","Gunther","Frank","Berger","Winkler","Roth","Beck","Lorenz","Baumann","Franke","Albrecht","Winter","Peters","Vogt","Jager","Simon","Ludwig","Bohm","Horn","Winkelmann","Fuchs","Sommer","Graf","Ebert","Stein","Wilhelm","Seidel","Heinrich","Brandt","Haas","Schuster","Kramer","Sauer","Busch","Voigt","Thomas","Peter","Arnold","Hartmann","Dietrich","Zimmer","Herzog","Pohl","Sturm","Hartung","Vogler","Reichert","Kessler","Bock","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Sato","Yamamoto","Watanabe","Ito","Yamada","Choi","Jung","Kang","Zhang","Huang","Yamaguchi","Saito","Matsumoto","Inoue","Kimura","Hayashi","Shimizu","Yamazaki","Mori","Abe","Ikeda","Hashimoto","Yamashita","Ishikawa","Nakajima","Ono","Maeda","Fujita","Goto","Okada","Hasegawa","Murakami","Kondo","Ishii","Sakamoto","Endo","Aoki","Fujii","Nishimura","Fukuda","Ota","Han","Yoon","Cho","Song","Shin","Yoo","Jang","Lim","Oh","Seo","Kwon","Hwang","Ahn","Yang","Zhao","Zhou","Wu","Xu","Sun","Zhu","Ma","Guo","He","Lin","Takahashi","Kobayashi","Kato","Yoshida","Sasaki","Yamaoka","Miura","Okamoto","Matsuda","Nakagawa","Ogawa","Uchida","Kubo","Miyazaki","Shimada","Yoshikawa","Yokoyama","Miyamoto","Sakai","Chiba","Kudo","Baek","Nam","Bae","Ha","Ko","Moon","Yu","Woo","Gu","Cha","Chu","Peng","Lu","Xie","Tang","Feng","Deng","Cao","Cai","Jiang","Yuan","Pan","Du","Dai","Fan","Kikuchi","Anzai","Uehara","Oda","Kawai","Noda","Xiao","Jin","Qian","Yan","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Taylor","Anderson","Jackson","White","Harris","Clark","Lewis","Walker","Hall","Allen","Young","King","Wright","Scott","Green","Baker","Adams","Nelson","Carter","Mitchell","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Morris","Murphy","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gray","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Sullivan","Russell","Hayes","Kelly","Simpson","Patterson","Ellis","Fisher","Hunter","Grant","Mason","Barnes","Ryan","Palmer","Hamilton","George","Freeman","Wells","Webb","Gordon","Burns","Marshall","Owens","Ford","Snyder","Fox","Warren","Payne","Rice","Weaver","Butler","Simmons","Boyd","Craig","Stone","Franklin","Vasquez","Stephens","Wallace","Woods","Elliott","Chapman","Dunn","Perkins","Hudson","Spencer","Gardner","Stevens","Tucker","Porter","Hicks","Crawford","Dubois","Martin","Bernard","Petit","Dupont","Moreau","Laurent","Robert","Michel","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Rousseau","Fontaine","Chevalier","Blanc","Guerin","Boyer","Garnier","Chevallier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson","Marchand","Duval","Denis","Dumont","Marie","Lemaire","Noel","Dufour","Meunier","Brun","Blanchard","Giraud","Joly","Riviere","Lucas","Brunet","Gaillard","Barbier","Arnaud","Martel","Rolland","Renaud","Roger","Roche","Fabre","Aubert","Poulain","Guyot","Lefebvre","Leclerc","Michaud","Colin","Charpentier","Renard","Legros","Caron","Picard","Roy","Guillot","Regnier","Marechal","Perrot","Antoine","Poirier","Voisin","Prevost","Adam","Lecomte","Marty","Charles","Rousset","Chauvin","Jacquet","Lambert","Bouvier","Beaumont","Roulet","Chartier","Deschamps","Lecoq","Perret","Charrier","Sauvage","Rivet","Dumas","Bourgeois","Blondel","Payet","Isambert","Auger","Lemoine","Millet","Guillon","Aubry","Humbert","Constant","Gilbert","Renou","Barre","Vallet","Cardon","Fernandez","Gonzalez","Hernandez","Sanchez","Ramirez","Torres","Flores","Rivera","Gomez","Morales","Ortiz","Gutierrez","Chavez","Ruiz","Alvarez","Mendoza","Vazquez","Romero","Herrera","Medina","Aguilar","Vargas","Guzman","Munoz","Salazar","Soto","Contreras","Rojas","Nunez","Vega","Guerrero","Rios","Acosta","Fuentes","Cabrera","Espinoza","Mendez","Molina","Cortez","Suarez","Pena","Cervantes","Estrada","Ochoa","Bravo","Padilla","Carrillo","Escobar","Marin","Ibarra","Salinas","Mora","Trejo","Cardenas","Aguirre","Villanueva","Villalobos","Solis","Robles","Beltran","Camacho","Zamora","Valdez","Meza","Avila","Lara","Segura","Cano","Prieto","Cabello","Pardo","Serrano","Nieto","Crespo","Gil","Iglesias","Santana","Gallego","Zapata","Paredes","Nava","Barrera","Montes","Peralta","Cortes","Galvan","Rosales","Maldonado","Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Ricci","Marino","Greco","Bruno","Gallo","Conti","Deluca","Mancini","Giordano","Rizzo","Lombardi","Moretti","Barone","Fontana","Santoro","Mariani","Rinaldi","Caruso","Ferrara","Galli","Martini","Leone","Longo","Gentile","Martinelli","Vitale","Lombardo","Coppola","Deangelis","Marchetti","Parisi","Villa","Conte","Ferro","Fabbri","Bianco","Marini","Grasso","Valentini","Messina","Sala","Farina","Rizzi","Monti","Cattaneo","Morelli","Amato","Fiore","Colombo","Testa","Riva","Barbieri","Fiorentino","Sarti","Piras","Neri","Palumbo","Sanna","Grieco","Sartori","Basile","Bernardi","Marchi","Ferretti","Milani","Guerra","Silvestri","Cocco","Ferraro","Damico","Vitali","Basso","Guerrini","Carbone","Ruggiero","Piazza","Rossetti","Cristofaro","Palma","Franchini","Bruni","Villani","Marconi","Sforza","Sarno","Damato","Angeli","Bosco","Ferri","Grimaldi","Costantini","Marchese","Iannotti","Palermo","Vitiello","Damiani","Orlando","De Jong","Van Dijk","Bakker","Jansen","Visser","Smit","Meijer","Bos","Andersen","Hansen","Nielsen","Pedersen","Larsen","Johansson","Karlsson","Vermeulen","Van Den Berg","Van Der Meer","Dekker","Brouwer","Mulder","De Groot","Hoekstra","Van Leeuwen","Vos","Peeters","De Boer","Kok","Andersson","Eriksson","Persson","Lindqvist","Gustafsson","Olsen","Berg","Jorgensen","Sorensen","Rasmussen","Christiansen","Poulsen","Madsen","Kristensen","Van Der Berg","Klaassen","Van Der Linden","Postma","Vink","Terpstra","Schouten","Van Zanten","Hendriks","Van Der Laan","Wolters","Blom","Van Vliet","Van Der Velde","Hermansen","Bergstrom","Lindberg","Holm","Nystrom","Blomqvist","Sandberg","Wikstrom","Forsberg","Dahl","Falk","Ostergaard","Mortensen","Simonsen","Thomsen","Iversen","Kristiansen","Vermeer","Willems","Aarts","Sondergaard","Frandsen","Bang","Lindholm","Berglund","Wikman","Backstrom","Benali","Amrani","Bouazza","Cherif","Haddad","Meziane","Belkacem","Rahmani","Boumediene","Yacoub","Saidi","Zidane","Belhadj","Tazi","Idrissi","Alaoui","Bennani","Chraibi","Fassi","Kadiri","Lahlou","Naciri","Sbai","Skalli","Tahiri","Zniber","Boukhris","Chakroun","Gharbi","Jendoubi","Karoui","Mansouri","Sassi","Toumi","Zaidi","Ayari","Bouazizi","Chaabane","Dhaouadi","Ghannouchi","Hammami","Jemai","Khedher","Mabrouk","Nasri","Ouali","Rekik","Sahli","Zaoui","Amrouche","Boudiaf","Cherki","Guessab","Hamdi","Jaber","Karim","Lakhal","Mahjoub","Nabil","Rezki","Sahnoun","Talbi","Zerrouki","Achour","Bakri","Chaouch","Djaballah","Ferhat","Gacem","Hachani","Islah","Jemili","Khaldi","Larbi","Mokrani","Nadir","Ouahes","Riahi","Salhi","Taleb","Wahabi","Zeroual","Aissa","Belaid","Chami","Djelloul","Fekih","Guerfi","Bouzid","Chettouh","Djebbari","Ferjani","Guenaoui","Hallaoui","Khemiri","Mejri","Ouarda","Selmi"],d=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],c=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],l=new Set(c.sort(()=>Math.random()-.5).slice(0,4)),b=[...c].sort(()=>Math.random()-.5),a=new Set(b.slice(0,2)),g=new Set(b.slice(2,4)),s=10,r=d.map((h,E)=>E<s);for(let h=r.length-1;h>0;h--){const E=Math.floor(Math.random()*(h+1));[r[h],r[E]]=[r[E],r[h]]}const o=new Set;function f(){const h=p.filter(_=>!o.has(_)&&!n.has(_)),E=h.length?h:p.filter(_=>!o.has(_)),m=E.length?E:p,k=ae(m);return o.add(k),k}return d.map((h,E)=>{const m=r[E]?t:St(t),k=Oe(m),_=It(m),v=ae(_t),u=Bt(1,20),y=l.has(E),x=y?Math.max(0,u-2):0;let $=0,B=0,I=0,S=0,L=null;h==="GK"?$=u:h==="DEF"?(B=u,y&&(I=x,L="MIL")):h==="ATT"?(S=u,y&&(I=x,L="MIL")):(I=u,y&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(B=x,L="DEF"):(S=x,L="ATT")));const z=a.has(E)?"pepite":g.has(E)?"papyte":"normal",A=f();return{job:h,job2:L,firstname:ae(i),surname_real:A,country_code:m,club_id:e,note_g:$,note_d:B,note_m:I,note_a:S,skin:k,hair:_,hair_length:v,rarity:z,sell_price:0,ethnie:ke(m),_ethnie:ke(m)}})}async function Ue(e,t,n){const{data:i}=await w.from("players").select("surname_real").not("surname_real","is",null),p=new Set((i||[]).map(f=>f.surname_real).filter(Boolean)),d=Lt(e,t,p);let c={};try{c=await(await fetch("/faces-manifest.json")).json()}catch{console.warn("Manifest faces non chargé")}const{data:l}=await w.from("players").select("face").not("face","is",null),b=new Set((l||[]).map(f=>f.face).filter(Boolean)),a=new Set;for(const f of d){const h=f._ethnie||"Europeans",k=[...c[h]||[]].sort(()=>Math.random()-.5).find(_=>{const v="public/faces/"+h+"/"+_;return!b.has(v)&&!a.has(v)});if(k){const _="public/faces/"+h+"/"+k;f.face=_,a.add(_)}delete f._ethnie}const{data:g,error:s}=await w.from("players").insert(d).select("id");if(s){console.error("[GenSquad] Erreur batch insert:",s.message,s.details),n("Erreur: "+s.message,"error");return}const r=(g||[]).map(f=>({card_type:"player",player_id:f.id}));if(r.length){const{error:f}=await w.from("cards").insert(r);f&&console.warn("[GenSquad] Erreur cartes:",f.message)}const o=(g==null?void 0:g.length)||0;console.log("[GenSquad] Créés:",o,"/",d.length),o>0?n(`${o} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Ke(e){return{style:e.kit_style||M.style,color1:e.kit_color1||M.color1,color2:e.kit_color2||M.color2,color3:e.kit_color3||M.color3,shorts:e.kit_shorts||M.shorts,socks:e.kit_socks||M.socks}}let re=[];async function Ct(e,t){await ce(e,t)}async function ce(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([w.from("clubs").select("*").order("real_name"),w.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}re=n||[];const d={};(p||[]).forEach(c=>{d[c.club_id]=(d[c.club_id]||0)+1}),zt(e,t,d)}function zt(e,t,n={}){const{toast:i,openModal:p,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,c(re),document.getElementById("search-clubs").addEventListener("input",l=>{const b=l.target.value.toLowerCase();c(re.filter(a=>a.real_name.toLowerCase().includes(b)||a.encoded_name.toLowerCase().includes(b)))}),document.getElementById("add-club-btn").addEventListener("click",()=>$e(null,e,t));function c(l){const b=document.getElementById("clubs-list");if(!l.length){b.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}b.innerHTML=l.map(a=>{const g=Ke(a),s=Ne(g,a.id).replace("<svg ",'<svg style="width:40px;height:48px" '),r=a.logo_url?`<img src="${a.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${g.color1},${g.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`,o=n[a.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
          ${r}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;color:#1a1a1a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name} · ${a.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${o===0?"#e67e22":"var(--gray-600)"}">
              ${o===0?"⚠️ Aucun joueur":`👥 ${o} joueur${o>1?"s":""}`}
            </div>
          </div>
          ${s}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${o===0?`<button class="btn btn-primary btn-sm" data-gen="${a.id}" data-cc="${a.country_code}" data-name="${a.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
          </div>
        </div>`}).join(""),b.querySelectorAll("[data-gen]").forEach(a=>{a.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${a.dataset.name} ?`)&&(a.disabled=!0,a.textContent="⏳",await Ue(a.dataset.gen,a.dataset.cc,i),ce(e,t))})}),b.querySelectorAll("[data-edit]").forEach(a=>{const g=re.find(s=>s.id===a.dataset.edit);a.addEventListener("click",()=>$e(g,e,t))}),b.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:g}=await w.from("clubs").delete().eq("id",a.dataset.del);g?i(g.message,"error"):(i("Club supprimé","success"),ce(e,t))})})}}function $e(e,t,n){const{toast:i,openModal:p,closeModal:d}=n,c=!!e,l=e?Ke(e):{...M},b=Object.entries(Ee).map(([g,s])=>`<option value="${g}" ${l.style===g?"selected":""}>${s.label}</option>`).join(""),a=qe.map(g=>`<option value="${g}" ${((e==null?void 0:e.country_code)||"FR")===g?"selected":""}>${g}</option>`).join("");p(c?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${[["Couleur 1","m-kit-color1",l.color1,!1],["Couleur 2","m-kit-color2",l.color2,!1],["Couleur 3","m-kit-color3",l.color3,!0],["Short","m-kit-shorts",l.shorts,!1],["Chaussettes","m-kit-socks",l.socks,!1]].map(([g,s,r,o])=>`
              <div class="form-group" id="wrap-${s}" ${o?'style="display:none"':""}>
                <label>${g}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${s}" value="${r||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${s}-txt" value="${r||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var f,h,E;ne();function g(){var v,u;const m=((v=document.getElementById("m-kit-style"))==null?void 0:v.value)||"uni",k=((u=Ee[m])==null?void 0:u.colors)===3,_=document.getElementById("wrap-m-kit-color3");_&&(_.style.display=k?"":"none")}g(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(m=>{const k=document.getElementById(m),_=document.getElementById(m+"-txt");!k||!_||(k.addEventListener("input",()=>{_.value=k.value,ne()}),_.addEventListener("input",()=>{const v=_.value.trim();/^#[0-9a-fA-F]{6}$/.test(v)&&(k.value=v,ne())}),_.addEventListener("change",()=>{let v=_.value.trim();v.startsWith("#")||(v="#"+v),/^#[0-9a-fA-F]{6}$/.test(v)&&(k.value=v,_.value=v,ne())}))}),(f=document.getElementById("m-kit-style"))==null||f.addEventListener("change",()=>{g(),ne()});const s=document.getElementById("m-real"),r=document.getElementById("m-encoded");function o(){if(!s||!r||r.value)return;const m=s.value.trim().split(/\s+/),k=m.length===1?m[0].toUpperCase().slice(0,6):m.filter(_=>_.length>2).map(_=>_[0].toUpperCase()).join("")||m[0].toUpperCase().slice(0,4);r.value=k}s==null||s.addEventListener("input",o),(h=document.getElementById("auto-encode-btn"))==null||h.addEventListener("click",()=>{r&&(r.value=""),o()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>At(e,c,t,n))},50)}function Ve(){var e,t,n,i,p,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function ne(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ne(Ve(),"modal"))}async function At(e,t,n,i){var m,k,_,v,u,y;const{toast:p,closeModal:d}=i,c=document.getElementById("m-error"),l=document.getElementById("m-save"),b=(m=document.getElementById("m-real"))==null?void 0:m.value.trim(),a=(k=document.getElementById("m-encoded"))==null?void 0:k.value.trim().toUpperCase(),g=(_=document.getElementById("m-country"))==null?void 0:_.value.trim().toUpperCase(),s=((v=document.getElementById("m-logo"))==null?void 0:v.value.trim())||null,r=((u=document.getElementById("m-gen-stadium"))==null?void 0:u.checked)??!1,o=((y=document.getElementById("m-gen-squad"))==null?void 0:y.checked)??!1,f=Ve();if(!b){c.textContent="Le nom du club est requis.";return}if(!a){c.textContent="Le nom encodé est requis.";return}if(!g){c.textContent="Le pays est requis.";return}l.disabled=!0,l.textContent="Enregistrement…";const h={real_name:b,encoded_name:a,country_code:g,logo_url:s,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_color3:f.color3,kit_shorts:f.shorts,kit_socks:f.socks};let E=e==null?void 0:e.id;if(t){const{error:x}=await w.from("clubs").update(h).eq("id",E);if(x){c.textContent=x.message,l.disabled=!1,l.textContent="💾 Enregistrer";return}}else{const{data:x,error:$}=await w.from("clubs").insert(h).select().single();if($){c.textContent=$.message,l.disabled=!1,l.textContent="✅ Créer le club";return}if(E=x.id,r){l.textContent="🏟️ Création du stade…";const{data:B,error:I}=await w.from("stadium_definitions").insert({name:`Stade de ${b}`,club_id:E,country_code:g}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):B&&await w.from("cards").insert({card_type:"stadium",stadium_id:B.id})}o&&(l.textContent="⚽ Génération des joueurs…",await Ue(E,g,p))}p(t?"Club modifié ✅":"Club créé ✅","success"),d(),ce(n,i)}const Mt=["normal","pepite","papyte","legende"],Ie=["GK","DEF","MIL","ATT"],Tt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let U={...T},le=[];async function jt(e,{toast:t}){const{data:n}=await w.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");le=n||[],U={...T},e.innerHTML=Nt(le),Dt(e,le,t),N()}function Be(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ue(e))}function Rt(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=le.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||M.style,color1:t.kit_color1||M.color1,color2:t.kit_color2||M.color2,shorts:t.kit_shorts||M.shorts,socks:t.kit_socks||M.socks}:{...M}}function N(){var r,o,f,h;const e=E=>{var m;return((m=document.getElementById(E))==null?void 0:m.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ue(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((o=(r=document.getElementById("cb-club"))==null?void 0:r.selectedOptions[0])==null?void 0:o.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Rt(),i=document.getElementById("cb-club"),p=((h=(f=i==null?void 0:i.selectedOptions[0])==null?void 0:f.dataset)==null?void 0:h.logo)||null,d=Fe(U,n,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,l=it(t,{portraitUrl:c,clubLogoUrl:p,showNotes:!0}),b=document.getElementById("card-preview");b&&(b.innerHTML=l);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=d);const g=e("cb-surname-real"),s=document.getElementById("encode-summary");s&&g&&(s.textContent=`${e("cb-firstname")} ${g} → ${e("cb-firstname")} ${t.surname_real}`)}function Je(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};U={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Dt(e,t,n){var p,d,c,l,b;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",N),a.addEventListener("change",N)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var g;(g=document.getElementById(a))==null||g.addEventListener("change",()=>{Je(),N()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Be(),N()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Be(),N()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",N),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",()=>Pt(n)),(b=document.getElementById("btn-reset"))==null||b.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),U={...T},i.forEach(a=>{const g=a.replace("av-",""),s=document.getElementById(a);s&&(s.value=T[g]||"")}),N()})}async function Pt(e){const t=c=>{var l;return((l=document.getElementById(c))==null?void 0:l.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ue(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Je();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:U,skin:U.skin||"blanc",hair:U.hairColor||"marron",hair_length:"court"},{error:d}=await w.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function Nt(e){const t=Tt.map(([a,g])=>`<option value="${a}">${g} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Ie.map(a=>`<option value="${a}">${a}</option>`).join(""),p='<option value="">Aucun</option>'+Ie.map(a=>`<option value="${a}">${a}</option>`).join(""),d=Mt.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),c=(a,g,s)=>Object.entries(g).map(([r,o])=>`<option value="${r}" ${r===(s||"")?"selected":""}>${o.label}</option>`).join(""),l=Object.keys(et).map(a=>`<option value="${a}" ${a===T.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),b=Object.keys(tt).map(a=>`<option value="${a}" ${a===T.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
            <div style="background:${nt[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-hair">${c("av-hair",ot,T.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${b}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",at,T.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",rt,T.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",lt,T.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",st,T.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",dt,T.beard)}</select>
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
  `}async function We(e,{toast:t}){const{data:n,error:i}=await w.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[];e.innerHTML=`
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
  `,d(p),document.getElementById("search-users").addEventListener("input",c=>{const l=c.target.value.toLowerCase();d(p.filter(b=>{var a;return b.pseudo.toLowerCase().includes(l)||((a=b.club_name)==null?void 0:a.toLowerCase().includes(l))}))});function d(c){document.getElementById("users-tbody").innerHTML=c.map(l=>{const b=l.mmr??1e3,a=l.mmr_deviation??350,g=l.placement_matches??0,s=ct(b),r=l.ranked_wins??0,o=l.ranked_losses??0,f=l.ranked_draws??0,h=r+o+f,E=h>0?Math.round(r/h*100):null,m=g<10,k=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
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
            ${m?`<div style="font-size:10px;color:#e67e22">${g}/10 placement${g<10?` (${10-g} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${r}V ${f}N ${o}D${E!==null?` · ${E}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${b}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${l.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${l.id}" data-is-admin="${l.is_admin}">
              ${l.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(l=>{l.addEventListener("click",async()=>{const b=l.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${b?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await w.from("users").update({is_admin:b}).eq("id",l.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),We(e,{toast:t}))})})}}async function Ye(e,{toast:t}){const{data:n,error:i}=await w.from("market_listings").select(`
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
            ${p.map(l=>{var s,r,o,f;const b=(s=l.card)==null?void 0:s.player,a=b?`${b.firstname} ${b.surname_real}`:((r=l.card)==null?void 0:r.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${a}</b>${b?`<div style="font-size:10px;color:#999">${b.rarity} · ${b.job}</div>`:""}</td>
                <td style="font-size:12px">${((o=l.seller)==null?void 0:o.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=l.buyer)==null?void 0:f.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:b}=await w.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);b?t(b.message,"error"):(t("Annonce annulée","success"),Ye(e,{toast:t}))})})}async function Ft(e,{toast:t}){e.innerHTML=`
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
`;n.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(Se).join(",")+`
`}),oe("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await w.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var c;p+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((c=d.clubs)==null?void 0:c.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(Se).join(",")+`
`}),oe("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Le(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let l=0,b=0;const a=[];for(const g of c){if(!g.real_name||!g.encoded_name||!g.country_code){b++,a.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const s={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:r}=await w.from("clubs").upsert(s,{onConflict:"encoded_name"});r?(b++,a.push(`${g.encoded_name}: ${r.message}`)):l++}p.innerHTML=`<div style="color:var(--green)">✅ ${l} clubs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${l} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Le(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:l}=await w.from("clubs").select("id,encoded_name"),b={};(l||[]).forEach(m=>{b[m.encoded_name.toUpperCase()]=m.id});let a=0,g=0;const s=[],r=["GK","DEF","MIL","ATT"],o=["normal","pepite","papyte","legende"],f=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],E=["rase","court","milong","long"];for(const m of c){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){g++,s.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!r.includes(m.job)){g++,s.push(`${m.firstname}: job invalide "${m.job}"`);continue}const k=m.club_encoded_name&&b[m.club_encoded_name.toUpperCase()]||null,_={firstname:m.firstname,surname_real:m.surname_real,surname_real:m.surname_real||ue(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:k,job:m.job,job2:r.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:o.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:f.includes(m.skin)?m.skin:"blanc",hair:h.includes(m.hair)?m.hair:"noir",hair_length:E.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:v}=await w.from("players").insert(_);v?(g++,s.push(`${m.firstname} ${m.surname_real}: ${v.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${s.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function Se(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function oe(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Le(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(c=>c.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=Ce(n,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let c=1;c<t.length;c++){if(!t[c].trim())continue;const l=Ce(t[c],i),b={};p.forEach((a,g)=>{b[a]=(l[g]||"").trim()}),!Object.values(b).every(a=>!a)&&d.push(b)}return d}function Ce(e,t=","){const n=[];let i="",p=!1;for(let d=0;d<e.length;d++){const c=e[d];p?c==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=c:c==='"'?p=!0:c===t?(n.push(i),i=""):i+=c}return n.push(i),n}const Gt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ht(e,{toast:t}){const n=Object.keys(me);let i=n[0];const{data:p}=await w.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(g=>{d[g.formation]=g.links});let c=new Set;function l(g,s){return[g,s].sort().join("-")}function b(g){const s=d[g]||me[g]||[];c=new Set(s.map(([r,o])=>l(r,o)))}b(i),e.innerHTML=`
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
  `;function a(){const g=pt[i]||{},s=we(i),r=320,o=400,f=22;function h(v){const u=g[v];return u?{x:u.x*r,y:u.y*o}:null}let E=`<svg width="${r}" height="${o}" viewBox="0 0 ${r} ${o}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;s.forEach(([v,u],y)=>{const x=h(v),$=h(u);if(!x||!$)return;const B=l(v,u),I=c.has(B),S=I?"#3b82f6":"#999",L=I?.95:.35,z=I?4:3;E+=`<line x1="${x.x}" y1="${x.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,E+=`<line x1="${x.x}" y1="${x.y}" x2="${$.x}" y2="${$.y}"
        stroke="${S}" stroke-width="${z}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${L}" pointer-events="none" data-line-key="${B}"/>`});for(const v of Object.keys(g)){const u=h(v);if(!u)continue;const y=v.replace(/\d+/,""),x=Gt[y]||"#555";E+=`<circle cx="${u.x}" cy="${u.y}" r="${f}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,E+=`<text x="${u.x}" y="${u.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${v}</text>`}E+="</svg>",document.getElementById("field-wrap").innerHTML=E;const m=document.getElementById("links-list");m.innerHTML=s.map(([v,u])=>{const y=l(v,u),x=c.has(y);return`
        <button class="link-toggle" data-key="${y}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${v} ↔ ${u}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${c.size}/${s.length} actifs)`);function _(v){c.has(v)?c.delete(v):c.add(v),a()}e.querySelectorAll(".link-hit").forEach(v=>{v.addEventListener("click",()=>_(v.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(v=>{v.addEventListener("click",()=>_(v.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",g=>{i=g.target.value,b(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=me[i]||[];c=new Set(g.map(([s,r])=>l(s,r))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const s=we(i).filter(([o,f])=>c.has(l(o,f))),{error:r}=await w.from("formation_links_overrides").upsert({formation:i,links:s,updated_at:new Date().toISOString()});if(r){t(r.message,"error");return}d[i]=s,t(`Liens enregistrés pour ${i} (${s.length} actifs)`,"success")})}const qt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Ot=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Ut=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Kt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const d=()=>window.innerWidth<700;async function c(){if(!n){i=[];return}if(n!==p){const{data:s}=await w.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=s||[],p=n}}function l(){return`
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
    </div>`}function b(){const s=n?(t||[]).find(f=>f.id===n):null;if(!s)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const r=i.reduce((f,h)=>f+Number(h.percentage||0),0),o=Math.abs(r-100)<.1;return`
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
              ${Ut.map(f=>`<option value="${f.value}" ${s.price_type===f.value?"selected":""}>${f.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${o?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${r.toFixed(1)}% ${o?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((f,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${qt.map(E=>`<option value="${E.value}" ${f.card_type===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ot.map(E=>`<option value="${E.value}" ${(f.rarity||"")===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="0" max="20" value="${f.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="0" max="20" value="${f.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${h}" type="number" min="0.1" max="100" step="0.1" value="${f.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${h}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(s=!1){s||await c();const r=!n&&d(),o=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||r||!n?l():""}
      ${!d()||o?b():""}
    </div>`,g()}function g(){var o,f,h,E,m,k,_;const s=v=>e.querySelector(v);e.querySelectorAll(".booster-row").forEach(v=>{v.addEventListener("click",u=>{u.target.closest(".btn-delete")||(n=v.dataset.id,p=null,a())})}),(o=s("#btn-back"))==null||o.addEventListener("click",()=>{n=null,a()}),(f=s("#btn-new"))==null||f.addEventListener("click",async()=>{const v=prompt("Nom du nouveau booster :");if(!(v!=null&&v.trim()))return;const{data:u,error:y}=await w.from("booster_configs").insert({name:v.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(y){alert(y.message);return}t.push(u),n=u.id,p=null,a()}),e.querySelectorAll(".btn-delete").forEach(v=>{v.addEventListener("click",async u=>{if(u.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await w.from("booster_configs").delete().eq("id",v.dataset.id);const y=t.findIndex(x=>x.id===v.dataset.id);y>-1&&t.splice(y,1),n===v.dataset.id&&(n=null,p=null),a()})}),(h=s("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,a()}),(E=s("#f-price-type"))==null||E.addEventListener("change",v=>{const u=s("#credits-field");u&&(u.style.opacity=v.target.value!=="credits"?"0.4":"1")}),(m=s("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var u;const v=s("#icon-picker-grid");if(v){if(v.style.display!=="none"){v.style.display="none";return}v.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',v.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(x)?x.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!$.length){v.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((u=s("#f-image-url"))==null?void 0:u.value)||"";v.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,v.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const S=s("#f-image-url");S&&(S.value=I.dataset.name),v.style.display="none"})})}catch(y){v.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${y.message}</div>`}}});function r(){e.querySelectorAll("[data-rate-idx]").forEach(v=>{var y,x,$,B,I;const u=Number(v.dataset.rateIdx);u>=0&&u<i.length&&(i[u].card_type=((y=v.querySelector(".rate-type"))==null?void 0:y.value)||"player",i[u].rarity=((x=v.querySelector(".rate-rarity"))==null?void 0:x.value)||null,i[u].note_min=Number(($=v.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[u].note_max=Number((B=v.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[u].percentage=Number((I=v.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(k=s("#btn-add-rate"))==null||k.addEventListener("click",()=>{r(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(v=>{v.addEventListener("click",()=>{r(),i.splice(Number(v.dataset.idx),1),a(!0)})}),(_=s("#btn-save"))==null||_.addEventListener("click",async()=>{var B,I,S,L,z,A,P,F,G,H,R,q,j;const v=(t||[]).find(C=>C.id===n);if(!v)return;const u=[];e.querySelectorAll("[data-rate-idx]").forEach(C=>{var W,Y,Z,X,Q;const K=Number(C.dataset.rateIdx);u.push({booster_id:n,card_type:((W=C.querySelector(".rate-type"))==null?void 0:W.value)||"player",rarity:((Y=C.querySelector(".rate-rarity"))==null?void 0:Y.value)||null,note_min:Number((Z=C.querySelector(".rate-note-min"))==null?void 0:Z.value)||null,note_max:Number((X=C.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Q=C.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:K});const D=u[u.length-1];D.rarity||(D.rarity=null),D.note_min||(D.note_min=null),D.note_max||(D.note_max=null)});const y=u.reduce((C,K)=>C+K.percentage,0);if(u.length&&Math.abs(y-100)>.5){alert(`La somme doit faire 100% (actuellement ${y.toFixed(1)}%)`);return}const x={name:((I=(B=s("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||v.name,image_url:((L=(S=s("#f-image-url"))==null?void 0:S.value)==null?void 0:L.trim())||null,price_type:(z=s("#f-price-type"))==null?void 0:z.value,price_credits:Number((A=s("#f-price-credits"))==null?void 0:A.value)||0,card_count:Number((P=s("#f-card-count"))==null?void 0:P.value)||5,is_active:((F=s("#f-active"))==null?void 0:F.checked)??v.is_active,allow_duplicates:((G=s("#f-allow-dup"))==null?void 0:G.checked)??!0,sort_order:Number((H=s("#f-sort"))==null?void 0:H.value)||0,max_per_user:(R=s("#f-max-per-user"))!=null&&R.value?Number(s("#f-max-per-user").value):null,available_from:((q=s("#f-available-from"))==null?void 0:q.value)||null,available_until:((j=s("#f-available-until"))==null?void 0:j.value)||null},{error:$}=await w.from("booster_configs").update(x).eq("id",n);if($){alert($.message);return}if(Object.assign(v,x),await w.from("booster_drop_rates").delete().eq("booster_id",n),u.length){const{error:C}=await w.from("booster_drop_rates").insert(u);if(C){alert(C.message);return}}i=u,p=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const Ze=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Vt(e){await fe(e)}async function fe(e){const{data:t,error:n}=await w.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Jt(i)).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Wt(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>ze(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await w.from("sell_price_configs").delete().eq("id",i.dataset.delete),await fe(e))})})}function Jt(e){const t=Ze.find(n=>n.value===e.rarity);return`
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
    </tr>`}function ze(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Wt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const c={rarity:n,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let l;if(t?{error:l}=await w.from("sell_price_configs").update(c).eq("id",t):{error:l}=await w.from("sell_price_configs").insert(c),l){alert("Erreur : "+l.message);return}document.getElementById("config-form").style.display="none",await fe(e)}async function Yt(e){await be(e)}async function be(e){const{data:t}=await w.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>Zt(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Ae(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Xt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.edit);i&&n.addEventListener("click",()=>Ae(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await w.from("patch_notes").delete().eq("id",n.dataset.delete),await be(e))})})}function Zt(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Ae(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function Xt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const l=c?new Date(c).toISOString():new Date().toISOString(),b={title:n,description:i,image_url:p,is_published:d,published_at:l};let a;if(t?{error:a}=await w.from("patch_notes").update(b).eq("id",t):{error:a}=await w.from("patch_notes").insert(b),a){alert("Erreur : "+a.message);return}document.getElementById("article-form").style.display="none",await be(e)}async function Qt(e){await J(e)}async function J(e){var g,s,r,o,f,h,E,m,k,_,v,u;const{data:t}=await w.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(y=>en(y)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([y,x,$])=>`<button type="button" data-cmd="${x}" title="${$}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${y}</button>`).join("")}
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
    </div>`,(g=document.getElementById("ts-add"))==null||g.addEventListener("click",()=>Me(null,(t==null?void 0:t.length)||0)),(s=document.getElementById("ts-reset"))==null||s.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:y}=await w.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(y?"Erreur : "+y.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(r=document.getElementById("ts-cancel"))==null||r.addEventListener("click",Xe),(o=document.getElementById("ts-save"))==null||o.addEventListener("click",()=>nn(e)),(f=document.getElementById("ts-preview-btn"))==null||f.addEventListener("click",tn);const n=document.getElementById("ts-editor"),i=()=>{const y=document.getElementById("ts-content");y&&n&&(y.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(y=>{y.addEventListener("mousedown",x=>{x.preventDefault(),p();const $=y.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(E=document.getElementById("ts-insert-color"))==null||E.addEventListener("mousedown",y=>{y.preventDefault(),p();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),i())}),(m=document.getElementById("ts-clear-format"))==null||m.addEventListener("mousedown",y=>{y.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el"),b=document.getElementById("ts-img-picker-grid"),a=()=>{var x;const y=(x=d==null?void 0:d.value)==null?void 0:x.trim();if(y){const $="/";l.src=`${$}icons/${y}`,c.style.display="block"}else c.style.display="none"};d==null||d.addEventListener("input",a),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{d&&(d.value=""),c.style.display="none",b.style.display="none"}),(_=document.getElementById("ts-img-pick"))==null||_.addEventListener("click",async()=>{if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',b.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(x)?x.filter(I=>I.name.startsWith("tuto_")):[];if(!$.length){b.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";b.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",b.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),a(),b.style.display="none"})})}catch(y){b.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+y.message+"</div>"}}),(v=document.getElementById("ts-color"))==null||v.addEventListener("input",y=>{const x=document.getElementById("ts-color-hex");x&&(x.value=y.target.value)}),(u=document.getElementById("ts-color-hex"))==null||u.addEventListener("input",y=>{const x=y.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const $=document.getElementById("ts-color");$&&($.value=x)}}),e.querySelectorAll("[data-edit]").forEach(y=>{const x=(t||[]).find($=>$.id===y.dataset.edit);x&&y.addEventListener("click",()=>Me(x))}),e.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await w.from("tutorial_steps").delete().eq("id",y.dataset.delete),J(e))})}),e.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",async()=>{const x=(t||[]).find($=>$.id===y.dataset.toggle);x&&(await w.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),J(e))})}),e.querySelectorAll("[data-up]").forEach(y=>{y.addEventListener("click",async()=>{const x=t||[],$=x.findIndex(B=>B.id===y.dataset.up);$<=0||(await Promise.all([w.from("tutorial_steps").update({step_order:x[$-1].step_order}).eq("id",x[$].id),w.from("tutorial_steps").update({step_order:x[$].step_order}).eq("id",x[$-1].id)]),J(e))})}),e.querySelectorAll("[data-down]").forEach(y=>{y.addEventListener("click",async()=>{const x=t||[],$=x.findIndex(B=>B.id===y.dataset.down);$<0||$>=x.length-1||(await Promise.all([w.from("tutorial_steps").update({step_order:x[$+1].step_order}).eq("id",x[$].id),w.from("tutorial_steps").update({step_order:x[$].step_order}).eq("id",x[$+1].id)]),J(e))})})}function en(e){return`
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
  </div>`}function Me(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const c=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el");if(p&&c&&l){const b="/";l.src=`${b}icons/${p}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Xe(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function tn(){var a,g;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(g=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:g.trim(),l=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",b=document.getElementById("ts-preview-area");b.innerHTML=`
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
    </div>`,b.querySelectorAll("ul,ol").forEach(s=>{s.style.paddingLeft="20px",s.style.margin="6px 0"}),b.querySelectorAll("li").forEach(s=>{s.style.marginBottom="4px"}),b.querySelectorAll("p").forEach(s=>{s.style.marginBottom="8px"})}async function nn(e){var s,r;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",l=parseInt(document.getElementById("ts-order").value)||0,b=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:d,color:c,step_order:l,is_active:b,image_url:((r=(s=document.getElementById("ts-image"))==null?void 0:s.value)==null?void 0:r.trim())||null};let g;if(t?{error:g}=await w.from("tutorial_steps").update(a).eq("id",t):{error:g}=await w.from("tutorial_steps").insert(a),g){alert("Erreur : "+g.message);return}Xe(),J(e)}const on="/",an=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function rn(e){await ye(e)}async function ye(e){var i,p,d,c;const[{data:t},{data:n}]=await Promise.all([w.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),w.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900;color:#1a1a1a">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(l=>ln(l)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${an.map(([l,b])=>`<option value="${l}">${b} (${l})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Te(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>sn(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>se()),["st-name","st-club","st-country","st-image"].forEach(l=>{var b,a;(b=document.getElementById(l))==null||b.addEventListener("input",se),(a=document.getElementById(l))==null||a.addEventListener("change",se)}),e.querySelectorAll("[data-edit]").forEach(l=>{const b=(t||[]).find(a=>a.id===l.dataset.edit);b&&l.addEventListener("click",()=>Te(b))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await w.from("stadium_definitions").delete().eq("id",l.dataset.delete),ye(e))})})}function ln(e){var n,i;let t;return(n=e.club)!=null&&n.logo_url?t=`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:e.country_code?t=`<img src="https://flagsapi.com/${e.country_code.slice(0,2).toUpperCase()}/flat/32.png" style="width:32px;height:24px;object-fit:contain;border-radius:3px" onerror="this.style.display='none'">`:t='<span style="font-size:20px">🌍</span>',`
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
    </div>`}function Te(e,t){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",se((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function se(){var a,g,s,r,o,f,h;const e=((a=document.getElementById("st-name"))==null?void 0:a.value)||"NOM DU STADE",t=(s=(g=document.getElementById("st-image"))==null?void 0:g.value)==null?void 0:s.trim(),n=(o=(r=document.getElementById("st-country"))==null?void 0:r.value)==null?void 0:o.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,d=i&&p>0?i.options[p].text:"",c=((h=(f=i==null?void 0:i.options[p])==null?void 0:f.getAttribute)==null?void 0:h.call(f,"data-logo"))||"";let l=null;t?l=`${on}icons/${t}`:c?l=c:n&&(l=`https://flagsapi.com/${n.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`);const b=d||n||"—";document.getElementById("st-preview-card").innerHTML=ut(e,l,`${b}<br>+10 ⭐`,{width:140})}async function sn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const c={name:n,club_id:i,country_code:p,image_url:d},{error:l}=t?await w.from("stadium_definitions").update(c).eq("id",t):await w.from("stadium_definitions").insert(c);if(l){alert("Erreur : "+l.message);return}document.getElementById("st-form").style.display="none",ye(e)}const O=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],ie=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function dn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await w.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,c=r=>e.querySelector(r);function l(r,o=130){if(!r)return"";const f=O.find(E=>E.value===r.gc_type)||O[0],h=r.image_url?`/icons/${r.image_url}`:null;return mt(r.name||"?",h,f.label.split(" ")[0],r.effect||"",{width:o})}function b(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(r=>{const o=O.find(h=>h.value===r.gc_type)||O[0],f=ie.find(h=>h.value===r.color)||ie[0];return`
        <div class="gc-row" data-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${f.hex};background:${o.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${r.image_url?`<img src="/icons/${r.image_url}" style="width:28px;height:28px;object-fit:contain">`:o.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.name}</div>
            <div style="font-size:11px;color:#888">${o.label} · ${r.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${r.id}" data-active="${r.is_active}"
              style="background:${r.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${r.is_active?"#27ae60":"#e74c3c"};color:${r.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${r.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${r.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function a(){const r=n?(t||[]).find(o=>o.id===n):null;return r?(O.find(o=>o.value===r.gc_type)||O[0],ie.find(o=>o.value===r.color)||ie[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:#1a1a2e;border-radius:12px">
        ${l(r,d()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${r.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${r.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${O.map(o=>`<option value="${o.value}" ${r.gc_type===o.value?"selected":""}>${o.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${ie.map(o=>`<option value="${o.value}" ${r.color===o.value?"selected":""}>${o.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${r.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${r.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${r.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(o=>`<option value="${o.value}" ${(r.effect_type||"BOOST_STAT")===o.value?"selected":""}>${o.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const o=r.effect_params||{},f=i.find(h=>h.value===(r.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${f.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${o.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${f.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${o.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${f.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(o.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${o.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${f.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(h=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${h}" ${!o.roles||o.roles.includes(h)?"checked":""}> ${h}
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
      ${!d()||n?a():""}
    </div>`,s()}function s(){var r,o,f,h,E;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",k=>{k.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=m.dataset.id,g())})}),(r=c("#btn-gc-back"))==null||r.addEventListener("click",()=>{n=null,g()}),(o=c("#btn-cancel-gc"))==null||o.addEventListener("click",()=>{n=null,g()}),(f=c("#btn-new-gc"))==null||f.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:k,error:_}=await w.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(_){alert(_.message);return}t.push(k),n=k.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async k=>{k.stopPropagation();const _=m.dataset.active!=="true";await w.from("gc_definitions").update({is_active:_}).eq("id",m.dataset.id);const v=t.find(u=>u.id===m.dataset.id);v&&(v.is_active=_),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async k=>{if(k.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await w.from("gc_definitions").delete().eq("id",m.dataset.id);const _=t.findIndex(v=>v.id===m.dataset.id);_>-1&&t.splice(_,1),n===m.dataset.id&&(n=null),g()})}),(h=c("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var k;const m=c("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),u=Array.isArray(v)?v.filter(x=>x.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(x.name)):[];if(!u.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const y=((k=c("#gc-image-url"))==null?void 0:k.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${u.map(x=>`
          <div class="gc-icon-item" data-name="${x.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${x.name===y?"#7a28b8":"#ddd"};background:${x.name===y?"#f5f0ff":"#fff"}">
            <img src="/icons/${x.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(x=>{x.addEventListener("click",()=>{const $=c("#gc-image-url");$&&($.value=x.dataset.name),m.style.display="none"})})}catch(_){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${_.message}</div>`}}}),(E=c("#btn-save-gc"))==null||E.addEventListener("click",async()=>{var x,$,B,I,S,L,z,A,P,F,G,H,R,q;const m=t.find(j=>j.id===n);if(!m)return;const k=i.find(j=>{var C;return j.value===(((C=c("#gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT")})||i[0],_=k.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,v={...k.hasValue?{value:Number((x=c("#gc-p-value"))==null?void 0:x.value)||2}:{},...k.hasCount?{count:Number(($=c("#gc-p-count"))==null?void 0:$.value)||1}:{},...k.hasTarget?{target:((B=c("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...k.hasRoles?{roles:_!=null&&_.length?_:null}:{}},u={name:((S=(I=c("#gc-name"))==null?void 0:I.value)==null?void 0:S.trim())||m.name,effect:((z=(L=c("#gc-effect"))==null?void 0:L.value)==null?void 0:z.trim())||null,image_url:((P=(A=c("#gc-image-url"))==null?void 0:A.value)==null?void 0:P.trim())||null,gc_type:((F=c("#gc-type"))==null?void 0:F.value)||"game_changer",color:((G=c("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((H=c("#gc-sort"))==null?void 0:H.value)||0,is_active:((R=c("#gc-active"))==null?void 0:R.checked)??m.is_active,effect_type:((q=c("#gc-effect-type"))==null?void 0:q.value)||"BOOST_STAT",effect_params:v},{error:y}=await w.from("gc_definitions").update(u).eq("id",n);if(y){alert(y.message);return}Object.assign(m,u),alert("✅ Carte enregistrée !"),g()})}g()}async function cn(e,{toast:t,openModal:n,closeModal:i}){await V(e,{toast:t,openModal:n,closeModal:i})}async function V(e,t){var v;const{toast:n,openModal:i,closeModal:p}=t,[{data:d,error:c},{data:l}]=await Promise.all([w.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),w.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const b=d||[],a=b.find(u=>u.is_active),g=(l||[]).filter(u=>(u.placement_matches||0)>=1),s=g.filter(u=>(u.placement_matches||0)>=10),r=["bronze","silver","gold","platinum","diamond","master"],o={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},f={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},E={};r.forEach(u=>{E[u]=0}),s.forEach(u=>{const y=u.rank_tier||"bronze";E[y]!==void 0&&E[y]++});const m=s.length?Math.round(s.reduce((u,y)=>u+(y.mmr||1e3),0)/s.length):0;function k(u){return u?new Date(u).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function _(u){const y=new Date;return u.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(u.end_at)<y?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
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
          ${r.map(u=>{const y=E[u],x=s.length>0?Math.round(y/s.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[u]} ${o[u]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${f[u]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${y} (${x}%)</span>
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
              ${b.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':b.map(u=>{const y=Math.round((new Date(u.end_at)-new Date(u.start_at))/864e5),x=new Date(u.end_at)<new Date&&!u.is_active;return`
                    <tr>
                      <td><b>${u.name}</b></td>
                      <td style="font-size:12px">${k(u.start_at)}</td>
                      <td style="font-size:12px">${k(u.end_at)}</td>
                      <td style="font-size:12px">${y} jours</td>
                      <td>${_(u)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${u.id}">✏️ Modifier</button>
                        ${u.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${u.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${u.id}">▶ Activer</button>`}
                        ${x?`<button class="btn btn-danger btn-sm" data-delete="${u.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(v=document.getElementById("create-season-btn"))==null||v.addEventListener("click",()=>{je(null,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})}),e.querySelectorAll("[data-edit]").forEach(u=>{const y=b.find(x=>x.id==u.dataset.edit);u.addEventListener("click",()=>{je(y,{toast:n,openModal:i,closeModal:p,reload:()=>V(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(u=>{u.addEventListener("click",async()=>{const y=parseInt(u.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await w.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){n(x.message,"error");return}const{error:$}=await w.from("ranked_seasons").update({is_active:!0}).eq("id",y);if($){n($.message,"error");return}await w.from("users").update({current_season_id:y}).gt("placement_matches",0),n("Saison activée ✅","success"),V(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:y}=await w.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(u.dataset.deactivate));if(y){n(y.message,"error");return}n("Saison désactivée","success"),V(e,t)})}),e.querySelectorAll("[data-delete]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:y}=await w.from("ranked_seasons").delete().eq("id",parseInt(u.dataset.delete));if(y){n(y.message,"error");return}n("Saison supprimée","success"),V(e,t)})})}function je(e,{toast:t,openModal:n,closeModal:i,reload:p}){const d=!!e,c=new Date().toISOString().slice(0,16),l=new Date(Date.now()+90*864e5).toISOString().slice(0,16),b=e?new Date(e.start_at).toISOString().slice(0,16):c,a=e?new Date(e.end_at).toISOString().slice(0,16):l,g=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
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
    </div>`);function s(){var E,m;const r=(E=document.getElementById("season-start"))==null?void 0:E.value,o=(m=document.getElementById("season-end"))==null?void 0:m.value,f=document.getElementById("season-duration");if(!r||!o||!f)return;const h=Math.round((new Date(o)-new Date(r))/864e5);f.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",f.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var r,o,f;(r=document.getElementById("season-start"))==null||r.addEventListener("input",s),(o=document.getElementById("season-end"))==null||o.addEventListener("input",s),s(),(f=document.getElementById("season-save-btn"))==null||f.addEventListener("click",async()=>{var y,x,$;const h=(y=document.getElementById("season-name"))==null?void 0:y.value.trim(),E=(x=document.getElementById("season-start"))==null?void 0:x.value,m=($=document.getElementById("season-end"))==null?void 0:$.value,k=document.getElementById("season-error");if(!h){k.textContent="Le nom est requis.";return}if(!E){k.textContent="La date de début est requise.";return}if(!m){k.textContent="La date de fin est requise.";return}if(new Date(m)<=new Date(E)){k.textContent="La date de fin doit être après le début.";return}const _=document.getElementById("season-save-btn");_.disabled=!0,_.textContent="Enregistrement…";const v={name:h,start_at:new Date(E).toISOString(),end_at:new Date(m).toISOString()};let u;if(d?{error:u}=await w.from("ranked_seasons").update(v).eq("id",e.id):{error:u}=await w.from("ranked_seasons").insert({...v,is_active:!1}),u){k.textContent=u.message,_.disabled=!1,_.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}gt(Fe);function pn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function un(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ge(){document.getElementById("modal-overlay").classList.add("hidden")}const Re={dashboard:{title:"Dashboard",fn:ft},players:{title:"Joueurs & Cartes",fn:vt},clubs:{title:"Clubs",fn:Ct},"card-builder":{title:"Card Builder",fn:jt},users:{title:"Managers",fn:We},market:{title:"Marché des transferts",fn:Ye},"import-export":{title:"Import / Export CSV",fn:Ft},formations:{title:"Formations & Liens",fn:Ht},"boosters-config":{title:"Boosters",fn:Kt},"sell-price":{title:"Prix vente directe",fn:Vt},journal:{title:"Journal",fn:Yt},tutorial:{title:"Tutoriel",fn:Qt},stadiums:{title:"Stades",fn:rn},"gc-cards":{title:"Game Changers",fn:dn},"ranked-seasons":{title:"Saisons Ranked",fn:cn}};async function pe(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Re[e]||Re.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:pn,openModal:un,closeModal:ge,navigate:pe})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function mn(){var t;const{data:{session:e}}=await w.auth.getSession();e&&await De(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:c}=await w.auth.signInWithPassword({email:n,password:i});if(c){p.textContent=c.message;return}await De(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ge),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ge()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),pe(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{pe(n.target.value)})}async function De(e){const{data:t,error:n}=await w.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await w.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,pe("dashboard")}mn();
