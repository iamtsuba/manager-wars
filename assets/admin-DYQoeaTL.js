import{s as E,r as we,g as Ue,K as Be,D as M,S as lt,a as q,H as dt,R as ct,e as ye,b as Ve,c as pt,d as ut,E as mt,f as gt,N as ft,M as bt,B as xt,h as vt,F as ce,i as Se,j as X,l as yt,k as ht,m as wt}from"./formation-links-CPzKgyAO.js";async function Et(e){const[{count:t},{count:n},{count:i},{count:u},{count:d}]=await Promise.all([E.from("players").select("*",{count:"exact",head:!0}),E.from("clubs").select("*",{count:"exact",head:!0}),E.from("users").select("*",{count:"exact",head:!0}),E.from("cards").select("*",{count:"exact",head:!0}),E.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ae("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ae("🏟️","Clubs",n??"–","#D4A017")}
      ${ae("👥","Managers",i??"–","#7a28b8")}
      ${ae("📦","Cartes possédées",u??"–","#2a8f52")}
      ${ae("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=c=>{var s;(s=document.querySelector(`[data-page="${c}"]`))==null||s.click()}}function ae(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const Ke="/",Ye={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},_t={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let se=null;async function $t(){if(se)return se;try{se=await(await fetch(Ke+"faces-manifest.json")).json()}catch{se={}}return se}async function kt(e,t){await be(e,t)}async function be(e,t,n=null){var a,b,l,r,o;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((b=document.getElementById("filter-job"))==null?void 0:b.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((r=document.getElementById("filter-club"))==null?void 0:r.value)||"",country:((o=document.getElementById("filter-country"))==null?void 0:o.value)||""});const[{data:u,error:d},{data:c}]=await Promise.all([E.from("players").select("*, clubs(id,encoded_name,logo_url)"),E.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const s={GK:0,DEF:1,MIL:2,ATT:3},m=(u||[]).sort((p,h)=>{const w=(s[p.job]??4)-(s[h.job]??4);return w!==0?w:(p.surname_real||"").localeCompare(h.surname_real||"")});It(e,m,c||[],t,n)}function It(e,t,n,i,u=null){var b,l;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(Ye).map(([r,o])=>`<option value="${r}">${o}</option>`).join("")}
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
    </div>`,u){const r=u,o=p=>document.getElementById(p);r.search&&o("search-players")&&(o("search-players").value=r.search),r.job&&o("filter-job")&&(o("filter-job").value=r.job),r.rarity&&o("filter-rarity")&&(o("filter-rarity").value=r.rarity),r.club&&o("filter-club")&&(o("filter-club").value=r.club),r.country&&o("filter-country")&&(o("filter-country").value=r.country)}if(u){const r=u,o=p=>document.getElementById(p);r.search&&o("search-players")&&(o("search-players").value=r.search),r.job&&o("filter-job")&&(o("filter-job").value=r.job),r.rarity&&o("filter-rarity")&&(o("filter-rarity").value=r.rarity),r.club&&o("filter-club")&&(o("filter-club").value=r.club),r.country&&o("filter-country")&&(o("filter-country").value=r.country)}function c(){const r=document.getElementById("search-players").value.toLowerCase(),o=document.getElementById("filter-job").value,p=document.getElementById("filter-rarity").value,h=document.getElementById("filter-club").value,w=document.getElementById("filter-country").value;return t.filter(f=>(!r||`${f.firstname} ${f.surname_real}`.toLowerCase().includes(r))&&(!o||f.job===o)&&(!p||f.rarity===p)&&(!h||f.club_id===h)&&(!w||f.country_code===w))}const s=new Set;function m(){const r=document.getElementById("bulk-bar"),o=document.getElementById("bulk-count");r&&(r.style.display=s.size>0?"flex":"none",o&&(o.textContent=`${s.size} joueur(s) sélectionné(s)`))}function a(){const r=c();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const o=document.getElementById("players-list");if(!r.length){o.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}o.innerHTML=r.map(p=>{const h={...p,clubs:p.clubs,face:p.face||null},w=we(h,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${p.id}">
        ${w}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${p.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),o.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const h=t.find(w=>w.id===p.dataset.edit);h&&Ae(h,n,e,i)})}),o.querySelectorAll(".btn-del-player").forEach(p=>{p.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:w}=await E.from("players").delete().eq("id",p.dataset.del);w?d(w.message,"error"):(d("Joueur supprimé ✅","success"),be(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(b=document.getElementById("bulk-cancel-btn"))==null||b.addEventListener("click",()=>{s.clear(),m(),a()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var h,w,f,_,$;if(!s.size||!confirm(`Supprimer ${s.size} joueur(s) ?`))return;const r=[...s],{error:o}=await E.from("players").delete().in("id",r);if(o){d(o.message,"error");return}d(`${r.length} joueur(s) supprimé(s) ✅`,"success"),s.clear();const p={search:((h=document.getElementById("search-players"))==null?void 0:h.value)||"",job:((w=document.getElementById("filter-job"))==null?void 0:w.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((_=document.getElementById("filter-club"))==null?void 0:_.value)||"",country:(($=document.getElementById("filter-country"))==null?void 0:$.value)||""};be(e,i,p)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ae(null,n,e,i))}async function Ae(e,t,n,i){const{toast:u,openModal:d,closeModal:c}=i,s=!!e,m=await $t(),{data:a}=await E.from("players").select("face").not("face","is",null),b=new Set((a||[]).map(o=>o.face?o.face.replace("public/faces/",""):null).filter(Boolean));e!=null&&e.face&&b.delete(e.face);const l='<option value="">— Club —</option>'+t.map(o=>`<option value="${o.id}" ${(e==null?void 0:e.club_id)===o.id?"selected":""}>${o.encoded_name}</option>`).join(""),r=Object.keys(m).map(o=>{var p;return`<option value="${o}" ${(e==null?void 0:e.ethnie)===o||!(e!=null&&e.ethnie)&&((p=e==null?void 0:e.face)!=null&&p.startsWith(o))?"selected":""}>${o}</option>`}).join("");d(s?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(o=>`<option value="${o}" ${(e==null?void 0:e.rarity)===o?"selected":""}>${Ye[o]}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([o,p,h])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${_t[o]};font-weight:700">${o}</label>
                <input id="${p}" type="number" min="0" max="20" value="${(e==null?void 0:e[h])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${s?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var _,$,x;let o=e!=null&&e.face?e.face.replace("public/faces/",""):null;function p(){var S,U,P,K,ne,ie,oe,re,ke,Ie,Le;const g=document.getElementById("card-preview");if(!g)return;const v=((S=document.getElementById("pm-fn"))==null?void 0:S.value)||"",y=(((U=document.getElementById("pm-real"))==null?void 0:U.value)||"").toUpperCase(),k=((P=document.getElementById("pm-job"))==null?void 0:P.value)||"ATT",B=((K=document.getElementById("pm-job2"))==null?void 0:K.value)||null,I=((ne=document.getElementById("pm-rarity"))==null?void 0:ne.value)||"normal",L=((ie=document.getElementById("pm-country"))==null?void 0:ie.value)||"FR",A=((oe=document.getElementById("pm-club"))==null?void 0:oe.value)||null,C=document.getElementById("pm-club"),T=C==null?void 0:C.options[C.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const j=parseInt((re=document.getElementById("pm-g"))==null?void 0:re.value)||0,R=parseInt((ke=document.getElementById("pm-d"))==null?void 0:ke.value)||0,O=parseInt((Ie=document.getElementById("pm-m"))==null?void 0:Ie.value)||0,F=parseInt((Le=document.getElementById("pm-a"))==null?void 0:Le.value)||0,D=t.find(st=>st.id===A),H={firstname:v||"Prénom",surname_real:y||"NOM",job:k,job2:B||null,rarity:I,country_code:L,club_id:A,note_g:j,note_d:R,note_m:O,note_a:F,face:o?"faces/"+o:null,clubs:D?{encoded_name:D.encoded_name,logo_url:D.logo_url}:null};g.innerHTML=we(H,{width:160});const z=document.getElementById("pm-minmax");z&&(z.style.display=["pepite","papyte"].includes(I)?"grid":"none")}function h(g){const v=document.getElementById("faces-grid"),y=document.getElementById("pm-face");if(!v||!y)return;const B=(m[g]||[]).filter(I=>{const L=g+"/"+I;return L===o||!b.has(L)});y.innerHTML='<option value="">— Choisir un visage —</option>'+B.map(I=>{const L=g+"/"+I;return`<option value="${L}" ${o===L?"selected":""}>${I}</option>`}).join(""),v.innerHTML=B.map(I=>{const L=g+"/"+I;return`<div data-face="${L}" style="cursor:pointer;border:2px solid ${o===L?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${Ke}faces/${L}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(I=>{I.addEventListener("click",()=>{o=I.dataset.face;const L=document.getElementById("pm-face");L&&(L.value=o),v.querySelectorAll("[data-face]").forEach(A=>{A.style.border=`2px solid ${A.dataset.face===o?"#4fc3f7":"transparent"}`}),p()})})}const w=(e==null?void 0:e.ethnie)||(e!=null&&e.face?e.face.replace("public/faces/","").split("/")[0]:"");w&&m[w]&&(document.getElementById("pm-folder").value=w,h(w)),(_=document.getElementById("pm-folder"))==null||_.addEventListener("change",g=>{h(g.target.value)}),($=document.getElementById("pm-face"))==null||$.addEventListener("change",g=>{o=g.target.value||null,p()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(g=>{var v,y;(v=document.getElementById(g))==null||v.addEventListener("input",p),(y=document.getElementById(g))==null||y.addEventListener("change",p)}),(x=document.getElementById("pm-save"))==null||x.addEventListener("click",()=>Bt(e,s,o,n,i)),p()},50)}function Lt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e?"public/faces/"+e:null,ethnie:t("pm-folder")||null,is_active:!0}}async function Bt(e,t,n,i,u){var o,p,h,w,f;const{toast:d,closeModal:c}=u,s=document.getElementById("pm-error"),m=document.getElementById("pm-save"),a=Lt(n);if(!a.firstname){s.textContent="Le prénom est requis.";return}if(!a.surname_real){s.textContent="Le nom est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";const b=a,{error:l}=t?await E.from("players").update({...b,updated_at:new Date().toISOString()}).eq("id",e.id):await E.from("players").insert(b);if(l){s.textContent=l.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),c();const r={search:((o=document.getElementById("search-players"))==null?void 0:o.value)||"",job:((p=document.getElementById("filter-job"))==null?void 0:p.value)||"",rarity:((h=document.getElementById("filter-rarity"))==null?void 0:h.value)||"",club:((w=document.getElementById("filter-club"))==null?void 0:w.value)||"",country:((f=document.getElementById("filter-country"))==null?void 0:f.value)||""};be(i,u,r)}const St={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},At=["rase","court","milong","long"];function zt(e){const t=We(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Ct(e){return Math.random()<.05?"chauve":zt(e)}const Je=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function We(e){return St[e]||"blanc"}function Tt(e){return Ct(e)}function Mt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function pe(e){return e[Math.floor(Math.random()*e.length)]}function jt(e){const t=Je.filter(n=>n!==e);return pe(t)}function ze(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],u=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":u.includes(e)?"Asians":"Europeans"}function Rt(e,t){const n=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],u=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],d=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],c=new Set(d.sort(()=>Math.random()-.5).slice(0,4)),s=[...d].sort(()=>Math.random()-.5),m=new Set(s.slice(0,2)),a=new Set(s.slice(2,4)),b=10,l=u.map((r,o)=>o<b);for(let r=l.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[l[r],l[o]]=[l[o],l[r]]}return u.map((r,o)=>{const p=l[o]?t:jt(t),h=We(p),w=Tt(p),f=pe(At),_=Mt(1,20),$=c.has(o),x=$?Math.max(0,_-2):0;let g=0,v=0,y=0,k=0,B=null;r==="GK"?g=_:r==="DEF"?(v=_,$&&(y=x,B="MIL")):r==="ATT"?(k=_,$&&(y=x,B="MIL")):(y=_,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(v=x,B="DEF"):(k=x,B="ATT")));const I=m.has(o)?"pepite":a.has(o)?"papyte":"normal",L=pe(i),A=L.toUpperCase();return{job:r,job2:B,firstname:pe(n),surname_real:L,surname_real:A,country_code:p,club_id:e,note_g:g,note_d:v,note_m:y,note_a:k,skin:h,hair:w,hair_length:f,rarity:I,sell_price:0,ethnie:ze(p),_ethnie:ze(p)}})}async function Ze(e,t,n){const i=Rt(e,t);let u={};try{u=await(await fetch(BASE+"faces-manifest.json")).json()}catch{console.warn("Manifest faces non chargé")}const{data:d}=await E.from("players").select("face").not("face","is",null),c=new Set((d||[]).map(r=>r.face).filter(Boolean)),s=new Set;for(const r of i){const o=r._ethnie||"Europeans",w=[...u[o]||[]].sort(()=>Math.random()-.5).find(f=>{const _="public/faces/"+o+"/"+f;return!c.has(_)&&!s.has(_)});if(w){const f="public/faces/"+o+"/"+w;r.face=f,s.add(f)}delete r._ethnie}const{data:m,error:a}=await E.from("players").insert(i).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const b=(m||[]).map(r=>({card_type:"player",player_id:r.id}));if(b.length){const{error:r}=await E.from("cards").insert(b);r&&console.warn("[GenSquad] Erreur cartes:",r.message)}const l=(m==null?void 0:m.length)||0;console.log("[GenSquad] Créés:",l,"/",i.length),l>0?n(`${l} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Xe(e){return{style:e.kit_style||M.style,color1:e.kit_color1||M.color1,color2:e.kit_color2||M.color2,color3:e.kit_color3||M.color3,shorts:e.kit_shorts||M.shorts,socks:e.kit_socks||M.socks}}let ue=[];async function Dt(e,t){await xe(e,t)}async function xe(e,t){const[{data:n,error:i},{data:u}]=await Promise.all([E.from("clubs").select("*").order("real_name"),E.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ue=n||[];const d={};(u||[]).forEach(c=>{d[c.club_id]=(d[c.club_id]||0)+1}),Nt(e,t,d)}function Nt(e,t,n={}){const{toast:i,openModal:u,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,c(ue),document.getElementById("search-clubs").addEventListener("input",s=>{const m=s.target.value.toLowerCase();c(ue.filter(a=>a.real_name.toLowerCase().includes(m)||a.encoded_name.toLowerCase().includes(m)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ce(null,e,t));function c(s){const m=document.getElementById("clubs-list");if(!s.length){m.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}m.innerHTML=s.map(a=>{const b=Xe(a),l=Ue(b,a.id).replace("<svg ",'<svg style="width:40px;height:48px" '),r=a.logo_url?`<img src="${a.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${b.color1},${b.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`,o=n[a.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${r}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name} · ${a.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${o===0?"#e67e22":"var(--gray-600)"}">
              ${o===0?"⚠️ Aucun joueur":`👥 ${o} joueur${o>1?"s":""}`}
            </div>
          </div>
          ${l}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${o===0?`<button class="btn btn-primary btn-sm" data-gen="${a.id}" data-cc="${a.country_code}" data-name="${a.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
          </div>
        </div>`}).join(""),m.querySelectorAll("[data-gen]").forEach(a=>{a.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${a.dataset.name} ?`)&&(a.disabled=!0,a.textContent="⏳",await Ze(a.dataset.gen,a.dataset.cc,i),xe(e,t))})}),m.querySelectorAll("[data-edit]").forEach(a=>{const b=ue.find(l=>l.id===a.dataset.edit);a.addEventListener("click",()=>Ce(b,e,t))}),m.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:b}=await E.from("clubs").delete().eq("id",a.dataset.del);b?i(b.message,"error"):(i("Club supprimé","success"),xe(e,t))})})}}function Ce(e,t,n){const{toast:i,openModal:u,closeModal:d}=n,c=!!e,s=e?Xe(e):{...M},m=Object.entries(Be).map(([b,l])=>`<option value="${b}" ${s.style===b?"selected":""}>${l.label}</option>`).join(""),a=Je.map(b=>`<option value="${b}" ${((e==null?void 0:e.country_code)||"FR")===b?"selected":""}>${b}</option>`).join("");u(c?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style" style="width:100%">${m}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",s.color1,!1],["Couleur 2","m-kit-color2",s.color2,!1],["Couleur 3","m-kit-color3",s.color3,!0],["Short","m-kit-shorts",s.shorts,!1],["Chaussettes","m-kit-socks",s.socks,!1]].map(([b,l,r,o])=>`
              <div class="form-group" id="wrap-${l}" ${o?'style="display:none"':""}>
                <label>${b}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${l}" value="${r||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${l}-txt" value="${r||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var p,h,w;le();function b(){var x,g;const f=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",_=((g=Be[f])==null?void 0:g.colors)===3,$=document.getElementById("wrap-m-kit-color3");$&&($.style.display=_?"":"none")}b(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(f=>{const _=document.getElementById(f),$=document.getElementById(f+"-txt");!_||!$||(_.addEventListener("input",()=>{$.value=_.value,le()}),$.addEventListener("input",()=>{const x=$.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&(_.value=x,le())}),$.addEventListener("change",()=>{let x=$.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&(_.value=x,$.value=x,le())}))}),(p=document.getElementById("m-kit-style"))==null||p.addEventListener("change",()=>{b(),le()});const l=document.getElementById("m-real"),r=document.getElementById("m-encoded");function o(){if(!l||!r||r.value)return;const f=l.value.trim().split(/\s+/),_=f.length===1?f[0].toUpperCase().slice(0,6):f.filter($=>$.length>2).map($=>$[0].toUpperCase()).join("")||f[0].toUpperCase().slice(0,4);r.value=_}l==null||l.addEventListener("input",o),(h=document.getElementById("auto-encode-btn"))==null||h.addEventListener("click",()=>{r&&(r.value=""),o()}),(w=document.getElementById("m-save"))==null||w.addEventListener("click",()=>qt(e,c,t,n))},50)}function Qe(){var e,t,n,i,u,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((u=document.getElementById("m-kit-shorts"))==null?void 0:u.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function le(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Ue(Qe(),"modal"))}async function qt(e,t,n,i){var f,_,$,x,g,v;const{toast:u,closeModal:d}=i,c=document.getElementById("m-error"),s=document.getElementById("m-save"),m=(f=document.getElementById("m-real"))==null?void 0:f.value.trim(),a=(_=document.getElementById("m-encoded"))==null?void 0:_.value.trim().toUpperCase(),b=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),l=((x=document.getElementById("m-logo"))==null?void 0:x.value.trim())||null,r=((g=document.getElementById("m-gen-stadium"))==null?void 0:g.checked)??!1,o=((v=document.getElementById("m-gen-squad"))==null?void 0:v.checked)??!1,p=Qe();if(!m){c.textContent="Le nom du club est requis.";return}if(!a){c.textContent="Le nom encodé est requis.";return}if(!b){c.textContent="Le pays est requis.";return}s.disabled=!0,s.textContent="Enregistrement…";const h={real_name:m,encoded_name:a,country_code:b,logo_url:l,kit_style:p.style,kit_color1:p.color1,kit_color2:p.color2,kit_color3:p.color3,kit_shorts:p.shorts,kit_socks:p.socks};let w=e==null?void 0:e.id;if(t){const{error:y}=await E.from("clubs").update(h).eq("id",w);if(y){c.textContent=y.message,s.disabled=!1,s.textContent="💾 Enregistrer";return}}else{const{data:y,error:k}=await E.from("clubs").insert(h).select().single();if(k){c.textContent=k.message,s.disabled=!1,s.textContent="✅ Créer le club";return}if(w=y.id,r){s.textContent="🏟️ Création du stade…";const{data:B,error:I}=await E.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:w,country_code:b}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):B&&await E.from("cards").insert({card_type:"stadium",stadium_id:B.id})}o&&(s.textContent="⚽ Génération des joueurs…",await Ze(w,b,u))}u(t?"Club modifié ✅":"Club créé ✅","success"),d(),xe(n,i)}const Pt=["normal","pepite","papyte","legende"],Te=["GK","DEF","MIL","ATT"],Ot=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let Q={...q},me=[];async function Ft(e,{toast:t}){const{data:n}=await E.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");me=n||[],Q={...q},e.innerHTML=Vt(me),Gt(e,me,t),V()}function Me(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=ye(e))}function Ht(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=me.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||M.style,color1:t.kit_color1||M.color1,color2:t.kit_color2||M.color2,shorts:t.kit_shorts||M.shorts,socks:t.kit_socks||M.socks}:{...M}}function V(){var r,o,p,h;const e=w=>{var f;return((f=document.getElementById(w))==null?void 0:f.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||ye(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((o=(r=document.getElementById("cb-club"))==null?void 0:r.selectedOptions[0])==null?void 0:o.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Ht(),i=document.getElementById("cb-club"),u=((h=(p=i==null?void 0:i.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:h.logo)||null,d=Ve(Q,n,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,s=pt(t,{portraitUrl:c,clubLogoUrl:u,showNotes:!0}),m=document.getElementById("card-preview");m&&(m.innerHTML=s);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=d);const b=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&b&&(l.textContent=`${e("cb-firstname")} ${b} → ${e("cb-firstname")} ${t.surname_real}`)}function et(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};Q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Gt(e,t,n){var u,d,c,s,m;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",V),a.addEventListener("change",V)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var b;(b=document.getElementById(a))==null||b.addEventListener("change",()=>{et(),V()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{Me(),V()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Me(),V()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",V),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",()=>Ut(n)),(m=document.getElementById("btn-reset"))==null||m.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),Q={...q},i.forEach(a=>{const b=a.replace("av-",""),l=document.getElementById(a);l&&(l.value=q[b]||"")}),V()})}async function Ut(e){const t=c=>{var s;return((s=document.getElementById(c))==null?void 0:s.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||ye(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}et();const u={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:Q,skin:Q.skin||"blanc",hair:Q.hairColor||"marron",hair_length:"court"},{error:d}=await E.from("players").insert(u);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_real}" enregistré !`,"success")}function Vt(e){const t=Ot.map(([a,b])=>`<option value="${a}">${b} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Te.map(a=>`<option value="${a}">${a}</option>`).join(""),u='<option value="">Aucun</option>'+Te.map(a=>`<option value="${a}">${a}</option>`).join(""),d=Pt.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),c=(a,b,l)=>Object.entries(b).map(([r,o])=>`<option value="${r}" ${r===(l||"")?"selected":""}>${o.label}</option>`).join(""),s=Object.keys(lt).map(a=>`<option value="${a}" ${a===q.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),m=Object.keys(dt).map(a=>`<option value="${a}" ${a===q.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${u}</select></div>
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
            <div style="background:${ct[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${s}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${c("av-hair",ut,q.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${m}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",mt,q.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",gt,q.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",ft,q.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",bt,q.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",xt,q.beard)}</select>
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
  `}async function tt(e,{toast:t}){const{data:n,error:i}=await E.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=n||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${u.length} manager(s)</span>
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
  `,d(u),document.getElementById("search-users").addEventListener("input",c=>{const s=c.target.value.toLowerCase();d(u.filter(m=>{var a;return m.pseudo.toLowerCase().includes(s)||((a=m.club_name)==null?void 0:a.toLowerCase().includes(s))}))});function d(c){document.getElementById("users-tbody").innerHTML=c.map(s=>{const m=s.mmr??1e3,a=s.mmr_deviation??350,b=s.placement_matches??0,l=vt(m),r=s.ranked_wins??0,o=s.ranked_losses??0,p=s.ranked_draws??0,h=r+o+p,w=h>0?Math.round(r/h*100):null,f=b<10,_=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
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
            ${f?`<div style="font-size:10px;color:#e67e22">${b}/10 placement${b<10?` (${10-b} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${r}V ${p}N ${o}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${m}</div>
            <div style="font-size:10px;color:${_}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${s.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${s.id}" data-is-admin="${s.is_admin}">
              ${s.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(s=>{s.addEventListener("click",async()=>{const m=s.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${m?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await E.from("users").update({is_admin:m}).eq("id",s.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),tt(e,{toast:t}))})})}}async function nt(e,{toast:t}){const{data:n,error:i}=await E.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=n||[],d=u.filter(s=>s.status==="active").length,c=u.filter(s=>s.status==="sold").length;e.innerHTML=`
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
            ${u.map(s=>{var l,r,o,p;const m=(l=s.card)==null?void 0:l.player,a=m?`${m.firstname} ${m.surname_real}`:((r=s.card)==null?void 0:r.card_type)||"—",b={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${a}</b>${m?`<div style="font-size:10px;color:#999">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((o=s.seller)==null?void 0:o.pseudo)||"—"}</td>
                <td style="font-size:12px">${((p=s.buyer)==null?void 0:p.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(s.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${b[s.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await E.from("market_listings").update({status:"cancelled"}).eq("id",s.dataset.cancel);m?t(m.message,"error"):(t("Annonce annulée","success"),nt(e,{toast:t}))})})}async function Kt(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{de("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{de("players_template.csv",`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{u+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(je).join(",")+`
`}),de("clubs_export.csv",u),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await E.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var c;u+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((c=d.clubs)==null?void 0:c.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(je).join(",")+`
`}),de("players_export.csv",u),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Re(d);if(c.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let s=0,m=0;const a=[];for(const b of c){if(!b.real_name||!b.encoded_name||!b.country_code){m++,a.push(`Ligne ignorée (champs manquants): ${b.real_name||"?"}`);continue}const l={real_name:b.real_name,encoded_name:b.encoded_name.toUpperCase(),country_code:b.country_code.toUpperCase().slice(0,2),logo_url:b.logo_url||null},{error:r}=await E.from("clubs").upsert(l,{onConflict:"encoded_name"});r?(m++,a.push(`${b.encoded_name}: ${r.message}`)):s++}u.innerHTML=`<div style="color:var(--green)">✅ ${s} clubs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${s} clubs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Re(d);if(c.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:s}=await E.from("clubs").select("id,encoded_name"),m={};(s||[]).forEach(f=>{m[f.encoded_name.toUpperCase()]=f.id});let a=0,b=0;const l=[],r=["GK","DEF","MIL","ATT"],o=["normal","pepite","papyte","legende"],p=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const f of c){if(!f.firstname||!f.surname_real||!f.country_code||!f.job){b++,l.push(`Ligne ignorée (champs requis manquants): ${f.firstname||"?"}`);continue}if(!r.includes(f.job)){b++,l.push(`${f.firstname}: job invalide "${f.job}"`);continue}const _=f.club_encoded_name&&m[f.club_encoded_name.toUpperCase()]||null,$={firstname:f.firstname,surname_real:f.surname_real,surname_real:f.surname_real||ye(f.surname_real),country_code:f.country_code.toUpperCase().slice(0,2),club_id:_,job:f.job,job2:r.includes(f.job2)?f.job2:null,note_g:parseInt(f.note_g)||0,note_d:parseInt(f.note_d)||0,note_m:parseInt(f.note_m)||0,note_a:parseInt(f.note_a)||0,rarity:o.includes(f.rarity)?f.rarity:"normal",note_min:f.note_min!==""&&f.note_min!=null?parseInt(f.note_min):null,note_max:f.note_max!==""&&f.note_max!=null?parseInt(f.note_max):null,skin:p.includes(f.skin)?f.skin:"blanc",hair:h.includes(f.hair)?f.hair:"noir",hair_length:w.includes(f.hair_length)?f.hair_length:"court",sell_price:parseInt(f.sell_price)||0},{error:x}=await E.from("players").insert($);x?(b++,l.push(`${f.firstname} ${f.surname_real}: ${x.message}`)):a++}u.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function je(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function de(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),u=document.createElement("a");u.href=i,u.download=e,u.click(),URL.revokeObjectURL(i)}function Re(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(c=>c.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",u=De(n,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let c=1;c<t.length;c++){if(!t[c].trim())continue;const s=De(t[c],i),m={};u.forEach((a,b)=>{m[a]=(s[b]||"").trim()}),!Object.values(m).every(a=>!a)&&d.push(m)}return d}function De(e,t=","){const n=[];let i="",u=!1;for(let d=0;d<e.length;d++){const c=e[d];u?c==='"'?e[d+1]==='"'?(i+='"',d++):u=!1:i+=c:c==='"'?u=!0:c===t?(n.push(i),i=""):i+=c}return n.push(i),n}const Yt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Jt(e,{toast:t}){const n=Object.keys(ce);let i=n[0];const{data:u}=await E.from("formation_links_overrides").select("formation, links"),d={};(u||[]).forEach(b=>{d[b.formation]=b.links});let c=new Set;function s(b,l){return[b,l].sort().join("-")}function m(b){const l=d[b]||ce[b]||[];c=new Set(l.map(([r,o])=>s(r,o)))}m(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(b=>`<option value="${b}" ${b===i?"selected":""}>${b}</option>`).join("")}
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
  `;function a(){const b=X[i]||{},l=Se(i),r=320,o=400,p=22;function h(x){const g=b[x];return g?{x:g.x*r,y:g.y*o}:null}let w=`<svg width="${r}" height="${o}" viewBox="0 0 ${r} ${o}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([x,g],v)=>{const y=h(x),k=h(g);if(!y||!k)return;const B=s(x,g),I=c.has(B),L=I?"#3b82f6":"#999",A=I?.95:.35,C=I?4:3;w+=`<line x1="${y.x}" y1="${y.y}" x2="${k.x}" y2="${k.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,w+=`<line x1="${y.x}" y1="${y.y}" x2="${k.x}" y2="${k.y}"
        stroke="${L}" stroke-width="${C}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${A}" pointer-events="none" data-line-key="${B}"/>`});for(const x of Object.keys(b)){const g=h(x);if(!g)continue;const v=x.replace(/\d+/,""),y=Yt[v]||"#555";w+=`<circle cx="${g.x}" cy="${g.y}" r="${p}" fill="${y}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${g.x}" y="${g.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const f=document.getElementById("links-list");f.innerHTML=l.map(([x,g])=>{const v=s(x,g),y=c.has(v);return`
        <button class="link-toggle" data-key="${v}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${y?"#3b82f6":"#ddd"};
          background:${y?"#eaf2ff":"#fafafa"};
          color:${y?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${g}</span>
          <span>${y?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const _=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');_&&(_.textContent=`Liens (${c.size}/${l.length} actifs)`);function $(x){c.has(x)?c.delete(x):c.add(x),a()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>$(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>$(x.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",b=>{i=b.target.value,m(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const b=ce[i]||[];c=new Set(b.map(([l,r])=>s(l,r))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=Se(i).filter(([o,p])=>c.has(s(o,p))),{error:r}=await E.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(r){t(r.message,"error");return}d[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const Wt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Zt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Xt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Qt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("booster_configs").select("*").order("sort_order");let n=null,i=[],u=null;const d=()=>window.innerWidth<700;async function c(){if(!n){i=[];return}if(n!==u){const{data:l}=await E.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],u=n}}function s(){return`
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
    </div>`}function m(){const l=n?(t||[]).find(p=>p.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const r=i.reduce((p,h)=>p+Number(h.percentage||0),0),o=Math.abs(r-100)<.1;return`
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
              ${Xt.map(p=>`<option value="${p.value}" ${l.price_type===p.value?"selected":""}>${p.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${o?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${r.toFixed(1)}% ${o?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((p,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Wt.map(w=>`<option value="${w.value}" ${p.card_type===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Zt.map(w=>`<option value="${w.value}" ${(p.rarity||"")===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="0" max="20" value="${p.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="0" max="20" value="${p.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${h}" type="number" min="0.1" max="100" step="0.1" value="${p.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${h}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(l=!1){l||await c();const r=!n&&d(),o=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||r||!n?s():""}
      ${!d()||o?m():""}
    </div>`,b()}function b(){var o,p,h,w,f,_,$;const l=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",g=>{g.target.closest(".btn-delete")||(n=x.dataset.id,u=null,a())})}),(o=l("#btn-back"))==null||o.addEventListener("click",()=>{n=null,a()}),(p=l("#btn-new"))==null||p.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:g,error:v}=await E.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(v){alert(v.message);return}t.push(g),n=g.id,u=null,a()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await E.from("booster_configs").delete().eq("id",x.dataset.id);const v=t.findIndex(y=>y.id===x.dataset.id);v>-1&&t.splice(v,1),n===x.dataset.id&&(n=null,u=null),a()})}),(h=l("#btn-cancel"))==null||h.addEventListener("click",()=>{n=null,a()}),(w=l("#f-price-type"))==null||w.addEventListener("change",x=>{const g=l("#credits-field");g&&(g.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(f=l("#btn-pick-icon"))==null||f.addEventListener("click",async()=>{var g;const x=l("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(y)?y.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!k.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((g=l("#f-image-url"))==null?void 0:g.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${k.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const L=l("#f-image-url");L&&(L.value=I.dataset.name),x.style.display="none"})})}catch(v){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${v.message}</div>`}}});function r(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var v,y,k,B,I;const g=Number(x.dataset.rateIdx);g>=0&&g<i.length&&(i[g].card_type=((v=x.querySelector(".rate-type"))==null?void 0:v.value)||"player",i[g].rarity=((y=x.querySelector(".rate-rarity"))==null?void 0:y.value)||null,i[g].note_min=Number((k=x.querySelector(".rate-note-min"))==null?void 0:k.value)||null,i[g].note_max=Number((B=x.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[g].percentage=Number((I=x.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(_=l("#btn-add-rate"))==null||_.addEventListener("click",()=>{r(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{r(),i.splice(Number(x.dataset.idx),1),a(!0)})}),($=l("#btn-save"))==null||$.addEventListener("click",async()=>{var B,I,L,A,C,T,j,R,O,F,D,H,z;const x=(t||[]).find(S=>S.id===n);if(!x)return;const g=[];e.querySelectorAll("[data-rate-idx]").forEach(S=>{var K,ne,ie,oe,re;const U=Number(S.dataset.rateIdx);g.push({booster_id:n,card_type:((K=S.querySelector(".rate-type"))==null?void 0:K.value)||"player",rarity:((ne=S.querySelector(".rate-rarity"))==null?void 0:ne.value)||null,note_min:Number((ie=S.querySelector(".rate-note-min"))==null?void 0:ie.value)||null,note_max:Number((oe=S.querySelector(".rate-note-max"))==null?void 0:oe.value)||null,percentage:Number((re=S.querySelector(".rate-pct"))==null?void 0:re.value)||0,sort_order:U});const P=g[g.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const v=g.reduce((S,U)=>S+U.percentage,0);if(g.length&&Math.abs(v-100)>.5){alert(`La somme doit faire 100% (actuellement ${v.toFixed(1)}%)`);return}const y={name:((I=(B=l("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||x.name,image_url:((A=(L=l("#f-image-url"))==null?void 0:L.value)==null?void 0:A.trim())||null,price_type:(C=l("#f-price-type"))==null?void 0:C.value,price_credits:Number((T=l("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((j=l("#f-card-count"))==null?void 0:j.value)||5,is_active:((R=l("#f-active"))==null?void 0:R.checked)??x.is_active,allow_duplicates:((O=l("#f-allow-dup"))==null?void 0:O.checked)??!0,sort_order:Number((F=l("#f-sort"))==null?void 0:F.value)||0,max_per_user:(D=l("#f-max-per-user"))!=null&&D.value?Number(l("#f-max-per-user").value):null,available_from:((H=l("#f-available-from"))==null?void 0:H.value)||null,available_until:((z=l("#f-available-until"))==null?void 0:z.value)||null},{error:k}=await E.from("booster_configs").update(y).eq("id",n);if(k){alert(k.message);return}if(Object.assign(x,y),await E.from("booster_drop_rates").delete().eq("booster_id",n),g.length){const{error:S}=await E.from("booster_drop_rates").insert(g);if(S){alert(S.message);return}}i=g,u=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const it=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function en(e){await Ee(e)}async function Ee(e){const{data:t,error:n}=await E.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>tn(i)).join("")}
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
              ${it.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ne(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>nn(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const u=(t||[]).find(d=>d.id===i.dataset.edit);u&&i.addEventListener("click",()=>Ne(u))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await E.from("sell_price_configs").delete().eq("id",i.dataset.delete),await Ee(e))})})}function tn(e){const t=it.find(n=>n.value===e.rarity);return`
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
    </tr>`}function Ne(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function nn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(u>d){alert("Note min doit être ≤ note max");return}const c={rarity:n,price:i,note_min:u,note_max:d,updated_at:new Date().toISOString()};let s;if(t?{error:s}=await E.from("sell_price_configs").update(c).eq("id",t):{error:s}=await E.from("sell_price_configs").insert(c),s){alert("Erreur : "+s.message);return}document.getElementById("config-form").style.display="none",await Ee(e)}async function on(e){await _e(e)}async function _e(e){const{data:t}=await E.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>rn(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>qe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>an(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(u=>u.id===n.dataset.edit);i&&n.addEventListener("click",()=>qe(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await E.from("patch_notes").delete().eq("id",n.dataset.delete),await _e(e))})})}function rn(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function qe(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function an(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),u=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const s=c?new Date(c).toISOString():new Date().toISOString(),m={title:n,description:i,image_url:u,is_published:d,published_at:s};let a;if(t?{error:a}=await E.from("patch_notes").update(m).eq("id",t):{error:a}=await E.from("patch_notes").insert(m),a){alert("Erreur : "+a.message);return}document.getElementById("article-form").style.display="none",await _e(e)}async function sn(e){await te(e)}async function te(e){var b,l,r,o,p,h,w,f,_,$,x,g;const{data:t}=await E.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(v=>ln(v)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([v,y,k])=>`<button type="button" data-cmd="${y}" title="${k}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${v}</button>`).join("")}
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
    </div>`,(b=document.getElementById("ts-add"))==null||b.addEventListener("click",()=>Pe(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:v}=await E.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(v?"Erreur : "+v.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(r=document.getElementById("ts-cancel"))==null||r.addEventListener("click",ot),(o=document.getElementById("ts-save"))==null||o.addEventListener("click",()=>cn(e)),(p=document.getElementById("ts-preview-btn"))==null||p.addEventListener("click",dn);const n=document.getElementById("ts-editor"),i=()=>{const v=document.getElementById("ts-content");v&&n&&(v.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const u=()=>{document.activeElement!==n&&(n==null||n.focus())};(h=document.getElementById("ts-toolbar"))==null||h.querySelectorAll("[data-cmd]").forEach(v=>{v.addEventListener("mousedown",y=>{y.preventDefault(),u();const k=v.dataset.cmd;k.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,k.split(":")[1]):document.execCommand(k,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",v=>{v.preventDefault(),u();const y=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");y&&(document.execCommand("foreColor",!1,y),i())}),(f=document.getElementById("ts-clear-format"))==null||f.addEventListener("mousedown",v=>{v.preventDefault(),u(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),s=document.getElementById("ts-img-preview-el"),m=document.getElementById("ts-img-picker-grid"),a=()=>{var y;const v=(y=d==null?void 0:d.value)==null?void 0:y.trim();if(v){const k="/";s.src=`${k}icons/${v}`,c.style.display="block"}else c.style.display="none"};d==null||d.addEventListener("input",a),(_=document.getElementById("ts-img-clear"))==null||_.addEventListener("click",()=>{d&&(d.value=""),c.style.display="none",m.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',m.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(y)?y.filter(I=>I.name.startsWith("tuto_")):[];if(!k.length){m.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";m.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+k.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",m.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),a(),m.style.display="none"})})}catch(v){m.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+v.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",v=>{const y=document.getElementById("ts-color-hex");y&&(y.value=v.target.value)}),(g=document.getElementById("ts-color-hex"))==null||g.addEventListener("input",v=>{const y=v.target.value;if(/^#[0-9a-fA-F]{6}$/.test(y)){const k=document.getElementById("ts-color");k&&(k.value=y)}}),e.querySelectorAll("[data-edit]").forEach(v=>{const y=(t||[]).find(k=>k.id===v.dataset.edit);y&&v.addEventListener("click",()=>Pe(y))}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await E.from("tutorial_steps").delete().eq("id",v.dataset.delete),te(e))})}),e.querySelectorAll("[data-toggle]").forEach(v=>{v.addEventListener("click",async()=>{const y=(t||[]).find(k=>k.id===v.dataset.toggle);y&&(await E.from("tutorial_steps").update({is_active:!y.is_active}).eq("id",y.id),te(e))})}),e.querySelectorAll("[data-up]").forEach(v=>{v.addEventListener("click",async()=>{const y=t||[],k=y.findIndex(B=>B.id===v.dataset.up);k<=0||(await Promise.all([E.from("tutorial_steps").update({step_order:y[k-1].step_order}).eq("id",y[k].id),E.from("tutorial_steps").update({step_order:y[k].step_order}).eq("id",y[k-1].id)]),te(e))})}),e.querySelectorAll("[data-down]").forEach(v=>{v.addEventListener("click",async()=>{const y=t||[],k=y.findIndex(B=>B.id===v.dataset.down);k<0||k>=y.length-1||(await Promise.all([E.from("tutorial_steps").update({step_order:y[k+1].step_order}).eq("id",y[k].id),E.from("tutorial_steps").update({step_order:y[k].step_order}).eq("id",y[k+1].id)]),te(e))})})}function ln(e){return`
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
  </div>`}function Pe(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const u=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=u);const c=document.getElementById("ts-img-preview"),s=document.getElementById("ts-img-preview-el");if(u&&c&&s){const m="/";s.src=`${m}icons/${u}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function ot(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function dn(){var a,b;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",u=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(b=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:b.trim(),s=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",m=document.getElementById("ts-preview-area");m.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${u}"></div></div>
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
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${u};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,m.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),m.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),m.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function cn(e){var l,r;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-editor"),d=(u?u.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",s=parseInt(document.getElementById("ts-order").value)||0,m=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:d,color:c,step_order:s,is_active:m,image_url:((r=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:r.trim())||null};let b;if(t?{error:b}=await E.from("tutorial_steps").update(a).eq("id",t):{error:b}=await E.from("tutorial_steps").insert(a),b){alert("Erreur : "+b.message);return}ot(),te(e)}const pn="/",rt="#E87722",un=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function mn(e){await $e(e)}async function $e(e){var i,u,d,c;const[{data:t},{data:n}]=await Promise.all([E.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),E.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(s=>gn(s)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${un.map(([s,m])=>`<option value="${s}">${m} (${s})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Oe(null)),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>bn(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>ge()),["st-name","st-club","st-country","st-image"].forEach(s=>{var m,a;(m=document.getElementById(s))==null||m.addEventListener("input",ge),(a=document.getElementById(s))==null||a.addEventListener("change",ge)}),e.querySelectorAll("[data-edit]").forEach(s=>{const m=(t||[]).find(a=>a.id===s.dataset.edit);m&&s.addEventListener("click",()=>Oe(m))}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await E.from("stadium_definitions").delete().eq("id",s.dataset.delete),$e(e))})})}function gn(e){var n,i;const t=(n=e.club)!=null&&n.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${rt};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Oe(e,t){var i,u;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",ge((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(u=e==null?void 0:e.club)==null?void 0:u.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function ge(){var a,b,l,r,o,p,h;const e=((a=document.getElementById("st-name"))==null?void 0:a.value)||"NOM DU STADE",t=(l=(b=document.getElementById("st-image"))==null?void 0:b.value)==null?void 0:l.trim(),n=(o=(r=document.getElementById("st-country"))==null?void 0:r.value)==null?void 0:o.trim(),i=document.getElementById("st-club"),u=(i==null?void 0:i.selectedIndex)||0,d=i&&u>0?i.options[u].text:"",c=((h=(p=i==null?void 0:i.options[u])==null?void 0:p.getAttribute)==null?void 0:h.call(p,"data-logo"))||"";let s;t?s=`<img src="${pn}icons/${t}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:c?s=`<img src="${c}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:n?s=`<img src="${`https://flagsapi.com/${$country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:s='<div style="font-size:36px;text-align:center">🏟️</div>';const m=d||n||"—";document.getElementById("st-preview-card").innerHTML=fn(e,s,m,!0)}function fn(e,t,n,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${rt},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${t}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function bn(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,u=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const c={name:n,club_id:i,country_code:u,image_url:d},{error:s}=t?await E.from("stadium_definitions").update(c).eq("id",t):await E.from("stadium_definitions").insert(c);if(s){alert("Erreur : "+s.message);return}document.getElementById("st-form").style.display="none",$e(e)}const Y=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],J=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function xn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await E.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],u=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,c=r=>e.querySelector(r);function s(r,o=130){if(!r)return"";const p=Y.find($=>$.value===r.gc_type)||Y[0],h=J.find($=>$.value===r.color)||J[0],w=Math.round(o*.55),f=Math.round(o*.15),_=Math.round(o*.3);return`<div style="width:${o}px;height:${Math.round(o*1.4)}px;border-radius:10px;border:3px solid ${h.hex};background:${p.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${h.hex}55;flex-shrink:0">
      <div style="height:${f}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(o/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${r.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${r.image_url?`<img src="/icons/${r.image_url}" style="max-height:${w}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(o*.3)}px">${p.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${_}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(o/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(r.effect||"").slice(0,60)}${(r.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function m(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(r=>{const o=Y.find(h=>h.value===r.gc_type)||Y[0],p=J.find(h=>h.value===r.color)||J[0];return`
        <div class="gc-row" data-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${p.hex};background:${o.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
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
    </div>`}function a(){const r=n?(t||[]).find(p=>p.id===n):null;if(!r)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const o=Y.find(p=>p.value===r.gc_type)||Y[0];return J.find(p=>p.value===r.color)||J[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${o.bg};border-radius:12px">
        ${s(r,d()?120:150)}
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
              ${Y.map(p=>`<option value="${p.value}" ${r.gc_type===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${J.map(p=>`<option value="${p.value}" ${r.color===p.value?"selected":""}>${p.label}</option>`).join("")}
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
              ${i.map(p=>`<option value="${p.value}" ${(r.effect_type||"BOOST_STAT")===p.value?"selected":""}>${p.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const p=r.effect_params||{},h=i.find(w=>w.value===(r.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${h.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${p.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${h.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${p.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${h.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(p.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${p.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${h.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${u.map(w=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${w}" ${!p.roles||p.roles.includes(w)?"checked":""}> ${w}
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
    </div>`}function b(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!n?m():""}
      ${!d()||n?a():""}
    </div>`,l()}function l(){var r,o,p,h,w;e.querySelectorAll(".gc-row").forEach(f=>{f.addEventListener("click",_=>{_.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=f.dataset.id,b())})}),(r=c("#btn-gc-back"))==null||r.addEventListener("click",()=>{n=null,b()}),(o=c("#btn-cancel-gc"))==null||o.addEventListener("click",()=>{n=null,b()}),(p=c("#btn-new-gc"))==null||p.addEventListener("click",async()=>{const f=prompt("Nom de la carte Game Changer :");if(!(f!=null&&f.trim()))return;const{data:_,error:$}=await E.from("gc_definitions").insert({name:f.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(_),n=_.id,b()}),e.querySelectorAll(".btn-toggle-gc").forEach(f=>{f.addEventListener("click",async _=>{_.stopPropagation();const $=f.dataset.active!=="true";await E.from("gc_definitions").update({is_active:$}).eq("id",f.dataset.id);const x=t.find(g=>g.id===f.dataset.id);x&&(x.is_active=$),b()})}),e.querySelectorAll(".btn-delete-gc").forEach(f=>{f.addEventListener("click",async _=>{if(_.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await E.from("gc_definitions").delete().eq("id",f.dataset.id);const $=t.findIndex(x=>x.id===f.dataset.id);$>-1&&t.splice($,1),n===f.dataset.id&&(n=null),b()})}),(h=c("#btn-pick-gc-icon"))==null||h.addEventListener("click",async()=>{var _;const f=c("#gc-icon-picker");if(f){if(f.style.display!=="none"){f.style.display="none";return}f.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',f.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),g=Array.isArray(x)?x.filter(y=>y.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(y.name)):[];if(!g.length){f.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((_=c("#gc-image-url"))==null?void 0:_.value)||"";f.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${g.map(y=>`
          <div class="gc-icon-item" data-name="${y.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${y.name===v?"#7a28b8":"#ddd"};background:${y.name===v?"#f5f0ff":"#fff"}">
            <img src="/icons/${y.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,f.querySelectorAll(".gc-icon-item").forEach(y=>{y.addEventListener("click",()=>{const k=c("#gc-image-url");k&&(k.value=y.dataset.name),f.style.display="none"})})}catch($){f.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(w=c("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var y,k,B,I,L,A,C,T,j,R,O,F,D,H;const f=t.find(z=>z.id===n);if(!f)return;const _=i.find(z=>{var S;return z.value===(((S=c("#gc-effect-type"))==null?void 0:S.value)||"BOOST_STAT")})||i[0],$=_.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,x={..._.hasValue?{value:Number((y=c("#gc-p-value"))==null?void 0:y.value)||2}:{},..._.hasCount?{count:Number((k=c("#gc-p-count"))==null?void 0:k.value)||1}:{},..._.hasTarget?{target:((B=c("#gc-p-target"))==null?void 0:B.value)||"home"}:{},..._.hasRoles?{roles:$!=null&&$.length?$:null}:{}},g={name:((L=(I=c("#gc-name"))==null?void 0:I.value)==null?void 0:L.trim())||f.name,effect:((C=(A=c("#gc-effect"))==null?void 0:A.value)==null?void 0:C.trim())||null,image_url:((j=(T=c("#gc-image-url"))==null?void 0:T.value)==null?void 0:j.trim())||null,gc_type:((R=c("#gc-type"))==null?void 0:R.value)||"game_changer",color:((O=c("#gc-color"))==null?void 0:O.value)||"purple",sort_order:Number((F=c("#gc-sort"))==null?void 0:F.value)||0,is_active:((D=c("#gc-active"))==null?void 0:D.checked)??f.is_active,effect_type:((H=c("#gc-effect-type"))==null?void 0:H.value)||"BOOST_STAT",effect_params:x},{error:v}=await E.from("gc_definitions").update(g).eq("id",n);if(v){alert(v.message);return}Object.assign(f,g),alert("✅ Carte enregistrée !"),b()})}b()}async function vn(e,{toast:t,openModal:n,closeModal:i}){await ee(e,{toast:t,openModal:n,closeModal:i})}async function ee(e,t){var x;const{toast:n,openModal:i,closeModal:u}=t,[{data:d,error:c},{data:s}]=await Promise.all([E.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),E.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const m=d||[],a=m.find(g=>g.is_active),b=(s||[]).filter(g=>(g.placement_matches||0)>=1),l=b.filter(g=>(g.placement_matches||0)>=10),r=["bronze","silver","gold","platinum","diamond","master"],o={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},p={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},h={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};r.forEach(g=>{w[g]=0}),l.forEach(g=>{const v=g.rank_tier||"bronze";w[v]!==void 0&&w[v]++});const f=l.length?Math.round(l.reduce((g,v)=>g+(v.mmr||1e3),0)/l.length):0;function _(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(g){const v=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<v?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${a?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${a.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${b.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${f}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(a.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${l.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${r.map(g=>{const v=w[g],y=l.length>0?Math.round(v/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${h[g]} ${o[g]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${y}%;background:${p[g]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${v} (${y}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${m.length})</div>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(g=>{const v=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),y=new Date(g.end_at)<new Date&&!g.is_active;return`
                    <tr>
                      <td><b>${g.name}</b></td>
                      <td style="font-size:12px">${_(g.start_at)}</td>
                      <td style="font-size:12px">${_(g.end_at)}</td>
                      <td style="font-size:12px">${v} jours</td>
                      <td>${$(g)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${g.id}">✏️ Modifier</button>
                        ${g.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${g.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${g.id}">▶ Activer</button>`}
                        ${y?`<button class="btn btn-danger btn-sm" data-delete="${g.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{Fe(null,{toast:n,openModal:i,closeModal:u,reload:()=>ee(e,t)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const v=m.find(y=>y.id==g.dataset.edit);g.addEventListener("click",()=>{Fe(v,{toast:n,openModal:i,closeModal:u,reload:()=>ee(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const v=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:y}=await E.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(y){n(y.message,"error");return}const{error:k}=await E.from("ranked_seasons").update({is_active:!0}).eq("id",v);if(k){n(k.message,"error");return}await E.from("users").update({current_season_id:v}).gt("placement_matches",0),n("Saison activée ✅","success"),ee(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:v}=await E.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(v){n(v.message,"error");return}n("Saison désactivée","success"),ee(e,t)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:v}=await E.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(v){n(v.message,"error");return}n("Saison supprimée","success"),ee(e,t)})})}function Fe(e,{toast:t,openModal:n,closeModal:i,reload:u}){const d=!!e,c=new Date().toISOString().slice(0,16),s=new Date(Date.now()+90*864e5).toISOString().slice(0,16),m=e?new Date(e.start_at).toISOString().slice(0,16):c,a=e?new Date(e.end_at).toISOString().slice(0,16):s,b=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${b}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${m}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${a}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var w,f;const r=(w=document.getElementById("season-start"))==null?void 0:w.value,o=(f=document.getElementById("season-end"))==null?void 0:f.value,p=document.getElementById("season-duration");if(!r||!o||!p)return;const h=Math.round((new Date(o)-new Date(r))/864e5);p.textContent=h>0?`Durée : ${h} jour${h>1?"s":""}`:"⚠️ La fin doit être après le début",p.style.color=h>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var r,o,p;(r=document.getElementById("season-start"))==null||r.addEventListener("input",l),(o=document.getElementById("season-end"))==null||o.addEventListener("input",l),l(),(p=document.getElementById("season-save-btn"))==null||p.addEventListener("click",async()=>{var v,y,k;const h=(v=document.getElementById("season-name"))==null?void 0:v.value.trim(),w=(y=document.getElementById("season-start"))==null?void 0:y.value,f=(k=document.getElementById("season-end"))==null?void 0:k.value,_=document.getElementById("season-error");if(!h){_.textContent="Le nom est requis.";return}if(!w){_.textContent="La date de début est requise.";return}if(!f){_.textContent="La date de fin est requise.";return}if(new Date(f)<=new Date(w)){_.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const x={name:h,start_at:new Date(w).toISOString(),end_at:new Date(f).toISOString()};let g;if(d?{error:g}=await E.from("ranked_seasons").update(x).eq("id",e.id):{error:g}=await E.from("ranked_seasons").insert({...x,is_active:!1}),g){_.textContent=g.message,$.disabled=!1,$.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),u()})},50)}const fe={cw_ratio:.18,pad_ratio:.7,pad_min:80,mob_pad_ratio:.55,margin_pc:30,margin_mob:10,card_offset_pc:30,card_offset_mob:10,position_overrides:{},link_width_green:2.5,link_width_yellow:2,link_width_red:1.5,link_opacity:.85};let W=null,Z=null;async function yn(){return W||Z||(Z=E.from("svg_config").select("*").eq("id","main").single().then(({data:e})=>(W=e?{...fe,...e}:{...fe},Z=null,W)).catch(()=>(W={...fe},Z=null,W)),Z)}function hn(){W=null,Z=null}async function wn(e){const{error:t}=await E.from("svg_config").update({...e,updated_at:new Date().toISOString()}).eq("id","main");return t||hn(),!t}function En(){const e={GK:["GK"],DEF:["DEF","DEF","DEF","DEF"],MIL:["MIL","MIL","MIL"],ATT:["ATT","ATT","ATT"]},t={GK:["Neuer"],DEF:["Varane","Ramos","Hernandez","Meunier"],MIL:["Modric","Kante","Pedri"],ATT:["Messi","Ronaldo","Mbappe"]},n={GK:[],DEF:[],MIL:[],ATT:[]};return Object.entries(e).forEach(([i,u])=>{u.forEach((d,c)=>{n[i].push({cardId:`${i}${c}`,name:(t[i]||[])[c]||i,firstname:"",note_g:14,note_d:14,note_m:14,note_a:14,_evolution_bonus:0,job:i,_line:i,_col:c,country_code:"FR",rarity:c===0?"legende":c===1?"pepite":"normal",used:!1,boost:0,stadiumBonus:c===0,clubName:"Club",clubLogo:null,face:null})})}),n}const _n=[{id:"deck-select",label:"📋 Choix deck"},{id:"match",label:"⚽ Match en cours"},{id:"opponent",label:"🔴 Équipe adverse"},{id:"deck-builder",label:"🛠️ Deck builder"}];async function $n(e){const n={cfg:{...await yn()},viewport:"mobile",page:"deck-select",editMode:"cards",formation:"4-3-3",team:En()};e.innerHTML=`
  <div id="sve" style="display:flex;flex-direction:column;height:100%;background:#060d07;color:#fff;overflow:hidden;font-family:system-ui,sans-serif">

    <!-- ── Toolbar ── -->
    <div style="flex-shrink:0;background:#0d1f0e;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="font-weight:900;color:#D4A017;font-size:15px">🎨 SVG Editor</span>

      <!-- Pages -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden;flex-wrap:wrap">
        ${_n.map(i=>`
        <button class="pg-btn" data-pg="${i.id}" style="padding:5px 10px;border:none;background:${i.id===n.page?"#1A6B3C":"transparent"};color:${i.id===n.page?"#fff":"rgba(255,255,255,0.5)"};font-size:11px;cursor:pointer;white-space:nowrap">${i.label}</button>`).join("")}
      </div>

      <!-- Viewport -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden">
        <button id="vp-mob" style="padding:5px 12px;border:none;background:#1A6B3C;color:#fff;font-size:11px;cursor:pointer;font-weight:700">📱 Mobile</button>
        <button id="vp-pc"  style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:11px;cursor:pointer">🖥️ PC</button>
      </div>

      <!-- Mode édition -->
      <div style="display:flex;background:rgba(0,0,0,0.4);border-radius:8px;overflow:hidden">
        <button id="mode-cards" style="padding:5px 12px;border:none;background:#7a28b8;color:#fff;font-size:11px;cursor:pointer;font-weight:700">🃏 Cartes</button>
        <button id="mode-links" style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:11px;cursor:pointer">🔗 Liens</button>
      </div>

      <!-- Formation -->
      <select id="ed-form" style="padding:4px 8px;border-radius:6px;background:#1a3a1a;border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:11px">
        ${Object.keys(X).map(i=>`<option value="${i}" ${i===n.formation?"selected":""}>${i}</option>`).join("")}
      </select>

      <!-- Actions -->
      <div style="margin-left:auto;display:flex;gap:6px">
        <button id="reset-btn" style="padding:5px 10px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:rgba(255,255,255,0.6);font-size:11px;cursor:pointer">↺ Reset</button>
        <button id="save-btn" style="padding:5px 14px;border:none;border-radius:6px;background:#1A6B3C;color:#fff;font-size:11px;font-weight:900;cursor:pointer">💾 Sauvegarder</button>
      </div>
    </div>

    <!-- ── Main ── -->
    <div style="flex:1;min-height:0;display:flex;gap:0;overflow:hidden">

      <!-- Preview -->
      <div id="preview-area" style="flex:1;min-width:0;background:#0a1f0c;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:16px;position:relative">
        <div id="preview-frame" style="position:relative;border:1px solid rgba(255,255,255,0.15);border-radius:8px;overflow:visible;background:#0a3d1e">
          <div id="preview-label" style="position:absolute;top:-20px;left:0;font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1px">MOBILE — 375px</div>
          <div id="preview-content" style="overflow:visible"></div>
          <div id="card-drag-layer" style="position:absolute;inset:0;pointer-events:none;overflow:visible"></div>
        </div>
      </div>

      <!-- Panneau contrôles -->
      <div style="width:240px;flex-shrink:0;background:#0d1f0e;border-left:1px solid rgba(255,255,255,0.08);overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:0">

        <!-- Cartes -->
        <div id="panel-cards">
          <div style="font-size:10px;color:#D4A017;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">🃏 Cartes</div>
          ${N("cw_ratio","Taille (CW = W × ratio)",.08,.3,.01)}
          ${N("card_offset_pc","Offset PC (px)",0,60,1)}
          ${N("card_offset_mob","Offset Mobile (px)",0,60,1)}
          ${N("margin_pc","Margin-top PC (px)",0,80,1)}
          ${N("margin_mob","Margin-top Mobile (px)",0,80,1)}
        </div>

        <!-- Liens -->
        <div id="panel-links" style="display:none">
          <div style="font-size:10px;color:#D4A017;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">🔗 Liens</div>
          ${N("link_width_green","Épaisseur lien vert",.5,6,.5)}
          ${N("link_width_yellow","Épaisseur lien jaune",.5,6,.5)}
          ${N("link_width_red","Épaisseur lien rouge",.5,6,.5)}
          ${N("link_opacity","Opacité liens",.1,1,.05)}
          ${N("pad_ratio","PAD normal (CW × ratio)",.2,1.5,.05)}
          ${N("mob_pad_ratio","PAD mobile (CW × ratio)",.1,1,.05)}
          ${N("pad_min","PAD minimum (px)",20,150,5)}
        </div>

        <!-- Positions reset -->
        <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.08);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:8px">Positions joueurs</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.55);margin-bottom:6px">Glisse les ronds dorés pour repositionner les joueurs indépendamment des liens.</div>
          <button id="reset-pos-btn" style="width:100%;padding:6px;border:1px solid rgba(255,100,100,0.3);border-radius:6px;background:transparent;color:rgba(255,130,130,0.7);font-size:11px;cursor:pointer">↺ Reset positions (${n.formation})</button>
        </div>

        <!-- Valeurs calculées -->
        <div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.08);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);margin-bottom:6px">Valeurs calculées</div>
          <div id="calc-vals" style="font-size:10px;color:#4fc3f7;line-height:1.9"></div>
        </div>

        <!-- Status save -->
        <div id="save-status" style="margin-top:auto;padding-top:12px;font-size:11px;text-align:center;color:rgba(255,255,255,0.4)"></div>
      </div>
    </div>
  </div>`,at(e,n.cfg),G(e,n),Bn(e,n)}function N(e,t,n,i,u){return`<div style="margin-bottom:11px">
    <div style="display:flex;justify-content:space-between;margin-bottom:3px">
      <span style="font-size:10px;color:rgba(255,255,255,0.6)">${t}</span>
      <span id="vl-${e}" style="font-size:10px;color:#D4A017;font-weight:700">—</span>
    </div>
    <input type="range" id="sl-${e}" min="${n}" max="${i}" step="${u}" value="0"
      style="width:100%;accent-color:#D4A017;cursor:pointer">
  </div>`}function at(e,t){["cw_ratio","card_offset_pc","card_offset_mob","margin_pc","margin_mob","link_width_green","link_width_yellow","link_width_red","link_opacity","pad_ratio","mob_pad_ratio","pad_min"].forEach(i=>{const u=e.querySelector(`#sl-${i}`),d=e.querySelector(`#vl-${i}`);u&&t[i]!==void 0&&(u.value=t[i],d&&(d.textContent=t[i]))})}function G(e,t){var $;const n=t.viewport==="mobile",i=n?375:1100,u=e.querySelector("#preview-frame"),d=e.querySelector("#preview-content");e.querySelector("#card-drag-layer");const c=e.querySelector("#preview-label"),s=e.querySelector("#calc-vals");if(!u||!d)return;u.style.width=i+"px",c.textContent=n?`MOBILE — ${i}px`:`PC — ${i}px`;const m=t.cfg,a=i-40,b=Math.round(a*1.05),l=Math.max(52,Math.round(a*m.cw_ratio)),r=Math.round(n?l*m.mob_pad_ratio:Math.max(l*m.pad_ratio,m.pad_min)),o=n?m.margin_mob:m.margin_pc,p=n?m.card_offset_mob:m.card_offset_pc;s&&(s.innerHTML=`W: ${a}px · H: ${b}px<br>CW (carte): ${l}px<br>CH (carte): ${Math.round(l*657/507)}px<br>PAD: ${r}px<br>margin-top: ${o}px<br>card-offset: ${p}px`);const h=(($=m.position_overrides)==null?void 0:$[t.formation])||{},w=X[t.formation]||{},f={...w};Object.entries(h).forEach(([x,g])=>{f[x]={...w[x],...g}}),X[t.formation]=f;const _=kn(t.team,t.formation,a,b,l,r,m);X[t.formation]=w,d.innerHTML=In(t,_,o,i),u.style.minHeight=b+o+100+"px",Ln(e,t,a,b,l,r,o,f)}function kn(e,t,n,i,u,d,c){const s=Math.round(u*657/507),m=X[t]||{},a=ht(t)||ce[t]||[],b=-d,l=-d,r=n+d*2,o=i+d*2;let p="",h="";for(const[_,$]of a){const x=m[_],g=m[$];if(!x||!g)continue;const v=x.x*n,y=x.y*i,k=g.x*n,B=g.y*i,I=_.replace(/[0-9]/g,""),L=$.replace(/[0-9]/g,""),A=(e[I]||[])[0],C=(e[L]||[])[0],T=A&&C?yt(A,C):"#FFD700",j=T==="#00ff88"?c.link_width_green:T==="#FFD700"?c.link_width_yellow:c.link_width_red,R=c.link_opacity;p+=`<line x1="${v.toFixed(1)}" y1="${y.toFixed(1)}" x2="${k.toFixed(1)}" y2="${B.toFixed(1)}"
      stroke="${T}" stroke-width="${j}" opacity="${R}" stroke-linecap="round"/>`}const w={},f=["ATT","MIL","DEF","GK"];for(const _ of f)(e[_]||[]).forEach(($,x)=>{w[`${_}${x+1}`]=$});for(const[_,$]of Object.entries(w)){const x=m[_];if(!x||!$)continue;const g=_.replace(/[0-9]/g,""),v=Math.round(x.x*n-u/2),y=Math.round(x.y*i-s/2),k=we({...$,_evolution_bonus:0},{width:u,showStad:!!$.stadiumBonus,role:g,extraNote:0,_cardOffset:0});h+=`<foreignObject x="${v}" y="${y-26}" width="${u+8}" height="${s+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">${k}</div>
    </foreignObject>`}return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="${b} ${l} ${r} ${o}"
    width="100%" style="display:block;overflow:visible">
    <g id="links-group">${p}</g>
    <g id="cards-group">${h}</g>
  </svg>`}function In(e,t,n,i,u){e.viewport;const d=e.page,c=`<div style="margin-top:${n}px;overflow:visible">${t}</div>`;return d==="deck-select"?`
    <div style="background:#0a3d1e;color:#fff;width:${i}px">
      <div style="padding:8px 12px;background:rgba(0,0,0,0.4);text-align:center">
        <div style="font-size:10px;opacity:.5;letter-spacing:2px">MATCH VS IA — EASY</div>
        <div style="font-size:15px;font-weight:900">Choisis ton deck</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:16px">◀</div>
        <div style="flex:1;text-align:center">
          <div style="font-size:16px;font-weight:900">3-5-2 : TEAM OM</div>
          <div style="font-size:11px;opacity:.6">${e.formation} · 11/11</div>
        </div>
        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:16px">▶</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent)">
        <span>🏟️</span><span style="font-size:12px;font-weight:700">Stade de Marseille</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs OM</span>
      </div>
      <div style="overflow:visible">${c}</div>
      <div style="padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2);margin-top:8px">
        <div style="width:100%;padding:14px;border-radius:12px;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;text-align:center">✅ Valider ce deck</div>
        <div style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.5);font-size:13px;text-align:center">Annuler</div>
      </div>
    </div>`:d==="match"?`
    <div style="background:#0a3d1e;color:#fff;width:${i}px">
      <div style="padding:8px 12px;background:rgba(0,0,0,0.5);display:flex;align-items:center;gap:8px">
        <div style="width:30px;height:30px;border-radius:50%;background:#c0392b;display:flex;align-items:center;justify-content:center;font-size:12px">✕</div>
        <div style="flex:1;text-align:center;font-size:13px;font-weight:900">LEGENDARY TEAM <span style="color:#D4A017">2</span> — <span style="color:#D4A017">1</span> IA EASY</div>
        <div style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:14px">👁️</div>
      </div>
      <div style="overflow:visible">${c}</div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.08)">
        <div style="display:flex;gap:6px">
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">GC 1</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(122,40,184,0.3);font-size:11px;text-align:center">GC 2</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">+1</div>
          <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.06);font-size:11px;text-align:center">IN/OUT</div>
        </div>
      </div>
      <div style="margin:8px;padding:14px;border-radius:12px;background:#D4A017;color:#111;font-size:15px;font-weight:900;text-align:center">⚔️ ATTAQUEZ</div>
    </div>`:d==="opponent"?`
    <div style="background:#0a3d1e;color:#fff;width:${i}px;text-align:center;padding-top:12px">
      <div style="font-size:10px;opacity:.5;letter-spacing:2px">ÉQUIPE ADVERSE</div>
      <div style="font-size:20px;font-weight:900;color:#e03030;margin:4px 0 8px">IA (EASY)</div>
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);margin-bottom:4px;text-align:left">
        <span>🏟️</span><span style="font-size:12px;font-weight:700">DOGUES OLYMPIC Stadium</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 DOGUES OLYMPIC</span>
      </div>
      ${c}
      <div style="padding:16px;font-size:12px;opacity:0.5;font-style:italic">Chargement...</div>
    </div>`:d==="deck-builder"?`
    <div style="background:#0a3d1e;color:#fff;width:${i}px">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(0,0,0,0.4)">
        <div style="font-size:18px;cursor:pointer;opacity:0.7">←</div>
        <div style="flex:1"><div style="font-size:14px;font-weight:900">Mon Deck</div><div style="font-size:11px;opacity:0.6">11/11 · 3/5 rempl.</div></div>
        <div style="padding:6px 12px;border-radius:8px;background:#1A6B3C;font-size:12px;font-weight:700">💾 Sauvegarder</div>
      </div>
      <div style="overflow:visible">${c}</div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.35);border-top:1px solid rgba(255,255,255,0.08)">
        <div style="display:flex;gap:8px;align-items:center">
          <div style="flex:1">
            <div style="font-size:9px;opacity:0.5;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Remplaçants (3/5)</div>
            <div style="display:flex;gap:4px">
              ${[1,2,3].map(()=>'<div style="width:34px;height:44px;background:rgba(255,255,255,0.06);border-radius:5px;border:1px solid rgba(255,255,255,0.1)"></div>').join("")}
              <div style="width:34px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4)">+</div>
            </div>
          </div>
          <div style="text-align:center"><div style="font-size:9px;opacity:0.5;margin-bottom:4px">🏟️</div><div style="width:44px;height:56px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px">🏟️</div></div>
          <div style="text-align:center"><div style="font-size:9px;opacity:0.5;margin-bottom:4px">⚽</div><div style="width:50px;height:56px;border-radius:6px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900">${e.formation}</div></div>
        </div>
      </div>
    </div>`:`<div>${c}</div>`}function Ln(e,t,n,i,u,d,c,s){var g;const m=e.querySelector("#card-drag-layer"),a=e.querySelector("#preview-frame");if(!m||!a)return;if(t.editMode!=="cards"){m.innerHTML="",m.style.pointerEvents="none";return}m.innerHTML="",m.style.pointerEvents="auto";const b=a.clientWidth||(t.viewport==="mobile"?375:1100);a.clientHeight||i+c+200;const l=c,r=a.querySelector("svg"),o=(g=r==null?void 0:r.getAttribute("viewBox"))==null?void 0:g.split(" ").map(Number),p=o?o[2]:n+d*2,h=o?o[3]:i+d*2,w=(r==null?void 0:r.clientWidth)||b,f=(r==null?void 0:r.clientHeight)||i,_=w/p,$=f/h,x=t.formation;X[x],Object.entries(s).forEach(([v,y])=>{var H;const k=v.replace(/[0-9]/g,"");if(!((H=t.team[k])!=null&&H.length))return;const B=(y.x*n+d)*_,I=(y.y*i+d)*$+l,L=document.createElement("div");L.dataset.pos=v,L.style.cssText=`
      position:absolute;
      left:${B-12}px;top:${I-12}px;
      width:24px;height:24px;
      border-radius:50%;
      border:2.5px solid #D4A017;
      background:rgba(212,160,23,0.35);
      cursor:grab;z-index:20;
      display:flex;align-items:center;justify-content:center;
      font-size:7px;color:#D4A017;font-weight:900;
      user-select:none;touch-action:none;
      box-shadow:0 0 8px rgba(212,160,23,0.5)`,L.textContent=v.slice(0,4),m.appendChild(L);let A=!1,C,T,j,R;const O=z=>{z.preventDefault(),A=!0;const S=z.touches?z.touches[0]:z;C=S.clientX,T=S.clientY,j=parseFloat(L.style.left),R=parseFloat(L.style.top),L.style.cursor="grabbing",L.style.zIndex="30",L.style.background="rgba(212,160,23,0.7)"},F=z=>{if(!A)return;z.preventDefault();const S=z.touches?z.touches[0]:z;L.style.left=j+S.clientX-C+"px",L.style.top=R+S.clientY-T+"px"},D=z=>{if(!A)return;A=!1,L.style.cursor="grab",L.style.zIndex="20",L.style.background="rgba(212,160,23,0.35)";const S=parseFloat(L.style.left)+12,U=parseFloat(L.style.top)+12-l,P=Math.max(.01,Math.min(.99,(S/_-d)/n)),K=Math.max(.01,Math.min(.99,(U/$-d)/i));t.cfg.position_overrides||(t.cfg.position_overrides={}),t.cfg.position_overrides[x]||(t.cfg.position_overrides[x]={}),t.cfg.position_overrides[x][v]={x:+P.toFixed(4),y:+K.toFixed(4)},G(e,t)};L.addEventListener("mousedown",O),L.addEventListener("touchstart",O,{passive:!1}),document.addEventListener("mousemove",F),document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("mouseup",D),document.addEventListener("touchend",D)})}function Bn(e,t){var d,c,s,m,a,b,l,r;e.querySelectorAll(".pg-btn").forEach(o=>{o.addEventListener("click",()=>{t.page=o.dataset.pg,e.querySelectorAll(".pg-btn").forEach(p=>{p.style.background=p.dataset.pg===t.page?"#1A6B3C":"transparent",p.style.color=p.dataset.pg===t.page?"#fff":"rgba(255,255,255,0.5)"}),G(e,t)})});const n=o=>{t.viewport=o;const p=e.querySelector("#vp-mob"),h=e.querySelector("#vp-pc");p.style.background=o==="mobile"?"#1A6B3C":"transparent",p.style.color=o==="mobile"?"#fff":"rgba(255,255,255,0.5)",h.style.background=o==="pc"?"#1A6B3C":"transparent",h.style.color=o==="pc"?"#fff":"rgba(255,255,255,0.5)",G(e,t)};(d=e.querySelector("#vp-mob"))==null||d.addEventListener("click",()=>n("mobile")),(c=e.querySelector("#vp-pc"))==null||c.addEventListener("click",()=>n("pc"));const i=o=>{t.editMode=o;const p=e.querySelector("#mode-cards"),h=e.querySelector("#mode-links"),w=e.querySelector("#panel-cards"),f=e.querySelector("#panel-links");p.style.background=o==="cards"?"#7a28b8":"transparent",p.style.color=o==="cards"?"#fff":"rgba(255,255,255,0.5)",h.style.background=o==="links"?"#7a28b8":"transparent",h.style.color=o==="links"?"#fff":"rgba(255,255,255,0.5)",w.style.display=o==="cards"?"block":"none",f.style.display=o==="links"?"block":"none",G(e,t)};(s=e.querySelector("#mode-cards"))==null||s.addEventListener("click",()=>i("cards")),(m=e.querySelector("#mode-links"))==null||m.addEventListener("click",()=>i("links")),(a=e.querySelector("#ed-form"))==null||a.addEventListener("change",o=>{t.formation=o.target.value;const p=e.querySelector("#reset-pos-btn");p&&(p.textContent=`↺ Reset positions (${t.formation})`),G(e,t)}),["cw_ratio","card_offset_pc","card_offset_mob","margin_pc","margin_mob","link_width_green","link_width_yellow","link_width_red","link_opacity","pad_ratio","mob_pad_ratio","pad_min"].forEach(o=>{const p=e.querySelector(`#sl-${o}`),h=e.querySelector(`#vl-${o}`);p&&p.addEventListener("input",()=>{t.cfg[o]=parseFloat(p.value),h&&(h.textContent=p.value),G(e,t)})}),(b=e.querySelector("#reset-pos-btn"))==null||b.addEventListener("click",()=>{t.cfg.position_overrides&&delete t.cfg.position_overrides[t.formation],G(e,t)}),(l=e.querySelector("#reset-btn"))==null||l.addEventListener("click",()=>{Object.assign(t.cfg,{...fe,position_overrides:{}}),at(e,t.cfg),G(e,t)}),(r=e.querySelector("#save-btn"))==null||r.addEventListener("click",async()=>{const o=e.querySelector("#save-btn"),p=e.querySelector("#save-status");o.disabled=!0,o.textContent="⏳ Sauvegarde...";const h=await wn(t.cfg);o.disabled=!1,o.textContent="💾 Sauvegarder",h?(p.textContent="✅ Sauvegardé !",p.style.color="#22c55e"):(p.textContent="❌ Erreur Supabase",p.style.color="#e03030"),setTimeout(()=>{p.textContent=""},3e3)})}wt(Ve);function Sn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function An(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function he(){document.getElementById("modal-overlay").classList.add("hidden")}const He={dashboard:{title:"Dashboard",fn:Et},players:{title:"Joueurs & Cartes",fn:kt},clubs:{title:"Clubs",fn:Dt},"card-builder":{title:"Card Builder",fn:Ft},users:{title:"Managers",fn:tt},market:{title:"Marché des transferts",fn:nt},"import-export":{title:"Import / Export CSV",fn:Kt},formations:{title:"Formations & Liens",fn:Jt},"boosters-config":{title:"Boosters",fn:Qt},"sell-price":{title:"Prix vente directe",fn:en},journal:{title:"Journal",fn:on},tutorial:{title:"Tutoriel",fn:sn},stadiums:{title:"Stades",fn:mn},"gc-cards":{title:"Game Changers",fn:xn},"ranked-seasons":{title:"Saisons Ranked",fn:vn},"svg-editor":{title:"🎨 SVG Editor",fn:$n}};async function ve(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=He[e]||He.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:Sn,openModal:An,closeModal:he,navigate:ve})}catch(u){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function zn(){var t;const{data:{session:e}}=await E.auth.getSession();e&&await Ge(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!n||!i){u.textContent="Remplissez tous les champs.";return}const{data:d,error:c}=await E.auth.signInWithPassword({email:n,password:i});if(c){u.textContent=c.message;return}await Ge(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",he),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&he()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ve(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ve(n.target.value)})}async function Ge(e){const{data:t,error:n}=await E.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await E.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ve("dashboard")}zn();
