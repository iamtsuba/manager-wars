import{s as _,r as Ge,g as Fe,K as Ie,D,S as rt,a as O,H as at,R as lt,e as xe,b as He,c as st,d as dt,E as ct,f as pt,N as ut,M as mt,B as gt,h as ft,F as ve,i as ke,j as ie,k as bt,l as xt}from"./match-shared-3YVU6Yuq.js";async function vt(e){const[{count:t},{count:n},{count:i},{count:p},{count:d}]=await Promise.all([_.from("players").select("*",{count:"exact",head:!0}),_.from("clubs").select("*",{count:"exact",head:!0}),_.from("users").select("*",{count:"exact",head:!0}),_.from("cards").select("*",{count:"exact",head:!0}),_.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${ae("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${ae("🏟️","Clubs",n??"–","#D4A017")}
      ${ae("👥","Managers",i??"–","#7a28b8")}
      ${ae("📦","Cartes possédées",p??"–","#2a8f52")}
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
  `,window.adminNav=c=>{var r;(r=document.querySelector(`[data-page="${c}"]`))==null||r.click()}}function ae(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const Ue="/",Ve={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},yt={GK:"#aaaaaa",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};let le=null;async function ht(){if(le)return le;try{le=await(await fetch(Ue+"faces-manifest.json")).json()}catch{le={}}return le}async function Et(e,t){await ge(e,t)}async function ge(e,t,n=null){var a,u,l,o,s;const{toast:i}=t;n||(n={search:((a=document.getElementById("search-players"))==null?void 0:a.value)||"",job:((u=document.getElementById("filter-job"))==null?void 0:u.value)||"",rarity:((l=document.getElementById("filter-rarity"))==null?void 0:l.value)||"",club:((o=document.getElementById("filter-club"))==null?void 0:o.value)||"",country:((s=document.getElementById("filter-country"))==null?void 0:s.value)||""});const[{data:p,error:d},{data:c}]=await Promise.all([_.from("players").select("*, clubs(id,encoded_name,logo_url)"),_.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const r={GK:0,DEF:1,MIL:2,ATT:3},m=(p||[]).sort((g,E)=>{const h=(r[g.job]??4)-(r[E.job]??4);return h!==0?h:(g.surname_real||"").localeCompare(E.surname_real||"")});_t(e,m,c||[],t,n)}function _t(e,t,n,i,p=null){var u,l;const{toast:d}=i;if(e.innerHTML=`
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
          ${Object.entries(Ve).map(([o,s])=>`<option value="${o}">${s}</option>`).join("")}
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
    </div>`,p){const o=p,s=g=>document.getElementById(g);o.search&&s("search-players")&&(s("search-players").value=o.search),o.job&&s("filter-job")&&(s("filter-job").value=o.job),o.rarity&&s("filter-rarity")&&(s("filter-rarity").value=o.rarity),o.club&&s("filter-club")&&(s("filter-club").value=o.club),o.country&&s("filter-country")&&(s("filter-country").value=o.country)}if(p){const o=p,s=g=>document.getElementById(g);o.search&&s("search-players")&&(s("search-players").value=o.search),o.job&&s("filter-job")&&(s("filter-job").value=o.job),o.rarity&&s("filter-rarity")&&(s("filter-rarity").value=o.rarity),o.club&&s("filter-club")&&(s("filter-club").value=o.club),o.country&&s("filter-country")&&(s("filter-country").value=o.country)}function c(){const o=document.getElementById("search-players").value.toLowerCase(),s=document.getElementById("filter-job").value,g=document.getElementById("filter-rarity").value,E=document.getElementById("filter-club").value,h=document.getElementById("filter-country").value;return t.filter(f=>(!o||`${f.firstname} ${f.surname_real}`.toLowerCase().includes(o))&&(!s||f.job===s)&&(!g||f.rarity===g)&&(!E||f.club_id===E)&&(!h||f.country_code===h))}const r=new Set;function m(){const o=document.getElementById("bulk-bar"),s=document.getElementById("bulk-count");o&&(o.style.display=r.size>0?"flex":"none",s&&(s.textContent=`${r.size} joueur(s) sélectionné(s)`))}function a(){const o=c();document.getElementById("count-label").textContent=`${o.length} joueur(s)`;const s=document.getElementById("players-list");if(!o.length){s.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}s.innerHTML=o.map(g=>{const E={...g,clubs:g.clubs,face:g.face||null},h=Ge(E,{width:120});return`<div style="position:relative;cursor:pointer" data-edit="${g.id}">
        ${h}
        <div style="position:absolute;top:4px;left:4px;z-index:10;display:flex;gap:3px">
          <button class="btn-del-player" data-del="${g.id}"
            style="width:20px;height:20px;border-radius:50%;background:#c0392b;border:none;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0"
            onclick="event.stopPropagation()">✕</button>
        </div>
      </div>`}).join(""),s.querySelectorAll("[data-edit]").forEach(g=>{g.addEventListener("click",()=>{const E=t.find(h=>h.id===g.dataset.edit);E&&Ae(E,n,e,i)})}),s.querySelectorAll(".btn-del-player").forEach(g=>{g.addEventListener("click",async E=>{if(E.stopPropagation(),!confirm("Supprimer ce joueur ?"))return;const{error:h}=await _.from("players").delete().eq("id",g.dataset.del);h?d(h.message,"error"):(d("Joueur supprimé ✅","success"),ge(e,i))})})}a(),document.getElementById("search-players").addEventListener("input",a),document.getElementById("filter-job").addEventListener("change",a),document.getElementById("filter-rarity").addEventListener("change",a),document.getElementById("filter-club").addEventListener("change",a),document.getElementById("filter-country").addEventListener("change",a),(u=document.getElementById("bulk-cancel-btn"))==null||u.addEventListener("click",()=>{r.clear(),m(),a()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{var E,h,f,w,I;if(!r.size||!confirm(`Supprimer ${r.size} joueur(s) ?`))return;const o=[...r],{error:s}=await _.from("players").delete().in("id",o);if(s){d(s.message,"error");return}d(`${o.length} joueur(s) supprimé(s) ✅`,"success"),r.clear();const g={search:((E=document.getElementById("search-players"))==null?void 0:E.value)||"",job:((h=document.getElementById("filter-job"))==null?void 0:h.value)||"",rarity:((f=document.getElementById("filter-rarity"))==null?void 0:f.value)||"",club:((w=document.getElementById("filter-club"))==null?void 0:w.value)||"",country:((I=document.getElementById("filter-country"))==null?void 0:I.value)||""};ge(e,i,g)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ae(null,n,e,i))}async function Ae(e,t,n,i){const{toast:p,openModal:d,closeModal:c}=i,r=!!e,m=await ht(),{data:a}=await _.from("players").select("face").not("face","is",null),u=new Set((a||[]).map(s=>s.face?s.face.replace("public/faces/",""):null).filter(Boolean));e!=null&&e.face&&u.delete(e.face);const l='<option value="">— Club —</option>'+t.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join(""),o=Object.keys(m).map(s=>{var g;return`<option value="${s}" ${(e==null?void 0:e.ethnie)===s||!(e!=null&&e.ethnie)&&((g=e==null?void 0:e.face)!=null&&g.startsWith(s))?"selected":""}>${s}</option>`}).join("");d(r?`✏️ ${e.firstname} ${e.surname_real}`:"➕ Nouveau joueur",`<div style="display:flex;gap:20px;align-items:flex-start">

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
              ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${Ve[s]}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Pays</label>
            <select id="pm-country">
              ${["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"].map(s=>`<option value="${s}" ${((e==null?void 0:e.country_code)||"FR")===s?"selected":""}>${s}</option>`).join("")}
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
            ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([s,g,E])=>`
              <div class="form-group" style="text-align:center">
                <label style="color:${yt[s]};font-weight:700">${s}</label>
                <input id="${g}" type="number" min="0" max="20" value="${(e==null?void 0:e[E])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
          ${r?"💾 Enregistrer":"✅ Créer le joueur"}
        </button>
        </div>
      </div>
    </div>`),setTimeout(()=>{var w,I,x;let s=e!=null&&e.face?e.face.replace("public/faces/",""):null;function g(){var C,H,P,R,U,V,J,Z,re,we,$e;const b=document.getElementById("card-preview");if(!b)return;const v=((C=document.getElementById("pm-fn"))==null?void 0:C.value)||"",y=(((H=document.getElementById("pm-real"))==null?void 0:H.value)||"").toUpperCase(),$=((P=document.getElementById("pm-job"))==null?void 0:P.value)||"ATT",A=((R=document.getElementById("pm-job2"))==null?void 0:R.value)||null,k=((U=document.getElementById("pm-rarity"))==null?void 0:U.value)||"normal",B=((V=document.getElementById("pm-country"))==null?void 0:V.value)||"FR",S=((J=document.getElementById("pm-club"))==null?void 0:J.value)||null,z=document.getElementById("pm-club"),T=z==null?void 0:z.options[z.selectedIndex];(T==null?void 0:T.text)!=="— Club —"&&(T==null||T.text);const N=parseInt((Z=document.getElementById("pm-g"))==null?void 0:Z.value)||0,G=parseInt((re=document.getElementById("pm-d"))==null?void 0:re.value)||0,F=parseInt((we=document.getElementById("pm-m"))==null?void 0:we.value)||0,L=parseInt(($e=document.getElementById("pm-a"))==null?void 0:$e.value)||0,M=t.find(ot=>ot.id===S),q={firstname:v||"Prénom",surname_real:y||"NOM",job:$,job2:A||null,rarity:k,country_code:B,club_id:S,note_g:N,note_d:G,note_m:F,note_a:L,face:s?"faces/"+s:null,clubs:M?{encoded_name:M.encoded_name,logo_url:M.logo_url}:null};b.innerHTML=Ge(q,{width:160});const j=document.getElementById("pm-minmax");j&&(j.style.display=["pepite","papyte"].includes(k)?"grid":"none")}function E(b){const v=document.getElementById("faces-grid"),y=document.getElementById("pm-face");if(!v||!y)return;const A=(m[b]||[]).filter(k=>{const B=b+"/"+k;return B===s||!u.has(B)});y.innerHTML='<option value="">— Choisir un visage —</option>'+A.map(k=>{const B=b+"/"+k;return`<option value="${B}" ${s===B?"selected":""}>${k}</option>`}).join(""),v.innerHTML=A.map(k=>{const B=b+"/"+k;return`<div data-face="${B}" style="cursor:pointer;border:2px solid ${s===B?"#4fc3f7":"transparent"};border-radius:6px;overflow:hidden;width:52px;height:52px;flex-shrink:0;background:#222">
          <img src="${Ue}faces/${B}" style="width:52px;height:52px;object-fit:cover" onerror="this.parentElement.style.display='none'">
        </div>`}).join(""),v.querySelectorAll("[data-face]").forEach(k=>{k.addEventListener("click",()=>{s=k.dataset.face;const B=document.getElementById("pm-face");B&&(B.value=s),v.querySelectorAll("[data-face]").forEach(S=>{S.style.border=`2px solid ${S.dataset.face===s?"#4fc3f7":"transparent"}`}),g()})})}const h=(e==null?void 0:e.ethnie)||(e!=null&&e.face?e.face.replace("public/faces/","").split("/")[0]:"");h&&m[h]&&(document.getElementById("pm-folder").value=h,E(h)),(w=document.getElementById("pm-folder"))==null||w.addEventListener("change",b=>{E(b.target.value)}),(I=document.getElementById("pm-face"))==null||I.addEventListener("change",b=>{s=b.target.value||null,g()}),["pm-fn","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-club"].forEach(b=>{var v,y;(v=document.getElementById(b))==null||v.addEventListener("input",g),(y=document.getElementById(b))==null||y.addEventListener("change",g)}),(x=document.getElementById("pm-save"))==null||x.addEventListener("click",()=>$t(e,r,s,n,i)),g()},50)}function wt(e){const t=n=>{var i;return(i=document.getElementById(n))==null?void 0:i.value};return{firstname:(t("pm-fn")||"").trim(),surname_real:(t("pm-real")||"").trim()||"JOUEUR",country_code:t("pm-country")||"FR",club_id:t("pm-club")||null,job:t("pm-job")||"ATT",job2:t("pm-job2")||null,rarity:t("pm-rarity")||"normal",note_g:parseInt(t("pm-g"))||0,note_d:parseInt(t("pm-d"))||0,note_m:parseInt(t("pm-m"))||0,note_a:parseInt(t("pm-a"))||0,note_min:parseInt(t("pm-nmin"))||null,note_max:parseInt(t("pm-nmax"))||null,sell_price:parseInt(t("pm-price"))||0,face:e?"public/faces/"+e:null,ethnie:t("pm-folder")||null,is_active:!0}}async function $t(e,t,n,i,p){var s,g,E,h,f;const{toast:d,closeModal:c}=p,r=document.getElementById("pm-error"),m=document.getElementById("pm-save"),a=wt(n);if(!a.firstname){r.textContent="Le prénom est requis.";return}if(!a.surname_real){r.textContent="Le nom est requis.";return}m.disabled=!0,m.textContent="Enregistrement…";const u=a,{error:l}=t?await _.from("players").update({...u,updated_at:new Date().toISOString()}).eq("id",e.id):await _.from("players").insert(u);if(l){r.textContent=l.message,m.disabled=!1,m.textContent=t?"💾 Enregistrer":"✅ Créer le joueur";return}d(t?"Joueur modifié ✅":"Joueur créé ✅","success"),c();const o={search:((s=document.getElementById("search-players"))==null?void 0:s.value)||"",job:((g=document.getElementById("filter-job"))==null?void 0:g.value)||"",rarity:((E=document.getElementById("filter-rarity"))==null?void 0:E.value)||"",club:((h=document.getElementById("filter-club"))==null?void 0:h.value)||"",country:((f=document.getElementById("filter-country"))==null?void 0:f.value)||""};ge(i,p,o)}const It={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},kt=["rase","court","milong","long"];function At(e){const t=We(e);if(t==="noir")return"noir";if(t==="typ")return Math.random()<.9?"noir":"marron";if(t==="metisse")return Math.random()<.6?"noir":"marron";const n=Math.random();return n<.35?"blond":n<.75?"marron":"noir"}function Bt(e){return Math.random()<.05?"chauve":At(e)}const Ke=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function We(e){return It[e]||"blanc"}function Lt(e){return Bt(e)}function Ct(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ce(e){return e[Math.floor(Math.random()*e.length)]}function St(e){const t=Ke.filter(n=>n!==e);return ce(t)}function Be(e){const t=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","GR","RO","BG","UA","RU"],n=["MA","DZ","TN","EG","LY"],i=["NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","TZ","UG","ET"],p=["JP","KR","CN","VN","TH","ID","PH","IN","PK","BD","SA","AE","IR"];return t.includes(e)||["AR","UY","CL","PE","EC","CO","MX","BR"].includes(e)?"Europeans":n.includes(e)?"North Africans":i.includes(e)?"Africans":p.includes(e)?"Asians":"Europeans"}function zt(e,t){const n=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],p=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],d=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],c=new Set(d.sort(()=>Math.random()-.5).slice(0,4)),r=[...d].sort(()=>Math.random()-.5),m=new Set(r.slice(0,2)),a=new Set(r.slice(2,4)),u=10,l=p.map((o,s)=>s<u);for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return p.map((o,s)=>{const g=l[s]?t:St(t),E=We(g),h=Lt(g),f=ce(kt),w=Ct(1,20),I=c.has(s),x=I?Math.max(0,w-2):0;let b=0,v=0,y=0,$=0,A=null;o==="GK"?b=w:o==="DEF"?(v=w,I&&(y=x,A="MIL")):o==="ATT"?($=w,I&&(y=x,A="MIL")):(y=w,I&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(v=x,A="DEF"):($=x,A="ATT")));const k=m.has(s)?"pepite":a.has(s)?"papyte":"normal",B=ce(i),S=B.toUpperCase();return{job:o,job2:A,firstname:ce(n),surname_real:B,surname_real:S,country_code:g,club_id:e,note_g:b,note_d:v,note_m:y,note_a:$,skin:E,hair:h,hair_length:f,rarity:k,sell_price:0,ethnie:Be(g),_ethnie:Be(g)}})}async function Ye(e,t,n){const i=zt(e,t);let p={};try{p=await(await fetch(BASE+"faces-manifest.json")).json()}catch{console.warn("Manifest faces non chargé")}const{data:d}=await _.from("players").select("face").not("face","is",null),c=new Set((d||[]).map(o=>o.face).filter(Boolean)),r=new Set;for(const o of i){const s=o._ethnie||"Europeans",h=[...p[s]||[]].sort(()=>Math.random()-.5).find(f=>{const w="public/faces/"+s+"/"+f;return!c.has(w)&&!r.has(w)});if(h){const f="public/faces/"+s+"/"+h;o.face=f,r.add(f)}delete o._ethnie}const{data:m,error:a}=await _.from("players").insert(i).select("id");if(a){console.error("[GenSquad] Erreur batch insert:",a.message,a.details),n("Erreur: "+a.message,"error");return}const u=(m||[]).map(o=>({card_type:"player",player_id:o.id}));if(u.length){const{error:o}=await _.from("cards").insert(u);o&&console.warn("[GenSquad] Erreur cartes:",o.message)}const l=(m==null?void 0:m.length)||0;console.log("[GenSquad] Créés:",l,"/",i.length),l>0?n(`${l} joueurs générés ✅`,"success"):n("Erreur génération joueurs","error")}function Je(e){return{style:e.kit_style||D.style,color1:e.kit_color1||D.color1,color2:e.kit_color2||D.color2,color3:e.kit_color3||D.color3,shorts:e.kit_shorts||D.shorts,socks:e.kit_socks||D.socks}}let pe=[];async function Tt(e,t){await fe(e,t)}async function fe(e,t){const[{data:n,error:i},{data:p}]=await Promise.all([_.from("clubs").select("*").order("real_name"),_.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}pe=n||[];const d={};(p||[]).forEach(c=>{d[c.club_id]=(d[c.club_id]||0)+1}),Mt(e,t,d)}function Mt(e,t,n={}){const{toast:i,openModal:p,closeModal:d}=t;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,c(pe),document.getElementById("search-clubs").addEventListener("input",r=>{const m=r.target.value.toLowerCase();c(pe.filter(a=>a.real_name.toLowerCase().includes(m)||a.encoded_name.toLowerCase().includes(m)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Le(null,e,t));function c(r){const m=document.getElementById("clubs-list");if(!r.length){m.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}m.innerHTML=r.map(a=>{const u=Je(a),l=Fe(u,a.id).replace("<svg ",'<svg style="width:40px;height:48px" '),o=a.logo_url?`<img src="${a.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${u.color1},${u.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`,s=n[a.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${o}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name} · ${a.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${s===0?"#e67e22":"var(--gray-600)"}">
              ${s===0?"⚠️ Aucun joueur":`👥 ${s} joueur${s>1?"s":""}`}
            </div>
          </div>
          ${l}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${s===0?`<button class="btn btn-primary btn-sm" data-gen="${a.id}" data-cc="${a.country_code}" data-name="${a.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
          </div>
        </div>`}).join(""),m.querySelectorAll("[data-gen]").forEach(a=>{a.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${a.dataset.name} ?`)&&(a.disabled=!0,a.textContent="⏳",await Ye(a.dataset.gen,a.dataset.cc,i),fe(e,t))})}),m.querySelectorAll("[data-edit]").forEach(a=>{const u=pe.find(l=>l.id===a.dataset.edit);a.addEventListener("click",()=>Le(u,e,t))}),m.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:u}=await _.from("clubs").delete().eq("id",a.dataset.del);u?i(u.message,"error"):(i("Club supprimé","success"),fe(e,t))})})}}function Le(e,t,n){const{toast:i,openModal:p,closeModal:d}=n,c=!!e,r=e?Je(e):{...D},m=Object.entries(Ie).map(([u,l])=>`<option value="${u}" ${r.style===u?"selected":""}>${l.label}</option>`).join(""),a=Ke.map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("");p(c?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${[["Couleur 1","m-kit-color1",r.color1,!1],["Couleur 2","m-kit-color2",r.color2,!1],["Couleur 3","m-kit-color3",r.color3,!0],["Short","m-kit-shorts",r.shorts,!1],["Chaussettes","m-kit-socks",r.socks,!1]].map(([u,l,o,s])=>`
              <div class="form-group" id="wrap-${l}" ${s?'style="display:none"':""}>
                <label>${u}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${l}" value="${o||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${l}-txt" value="${o||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var g,E,h;se();function u(){var x,b;const f=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",w=((b=Ie[f])==null?void 0:b.colors)===3,I=document.getElementById("wrap-m-kit-color3");I&&(I.style.display=w?"":"none")}u(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(f=>{const w=document.getElementById(f),I=document.getElementById(f+"-txt");!w||!I||(w.addEventListener("input",()=>{I.value=w.value,se()}),I.addEventListener("input",()=>{const x=I.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&(w.value=x,se())}),I.addEventListener("change",()=>{let x=I.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&(w.value=x,I.value=x,se())}))}),(g=document.getElementById("m-kit-style"))==null||g.addEventListener("change",()=>{u(),se()});const l=document.getElementById("m-real"),o=document.getElementById("m-encoded");function s(){if(!l||!o||o.value)return;const f=l.value.trim().split(/\s+/),w=f.length===1?f[0].toUpperCase().slice(0,6):f.filter(I=>I.length>2).map(I=>I[0].toUpperCase()).join("")||f[0].toUpperCase().slice(0,4);o.value=w}l==null||l.addEventListener("input",s),(E=document.getElementById("auto-encode-btn"))==null||E.addEventListener("click",()=>{o&&(o.value=""),s()}),(h=document.getElementById("m-save"))==null||h.addEventListener("click",()=>jt(e,c,t,n))},50)}function Ze(){var e,t,n,i,p,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((t=document.getElementById("m-kit-color1"))==null?void 0:t.value)||"#1A6B3C",color2:((n=document.getElementById("m-kit-color2"))==null?void 0:n.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function se(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Fe(Ze(),"modal"))}async function jt(e,t,n,i){var f,w,I,x,b,v;const{toast:p,closeModal:d}=i,c=document.getElementById("m-error"),r=document.getElementById("m-save"),m=(f=document.getElementById("m-real"))==null?void 0:f.value.trim(),a=(w=document.getElementById("m-encoded"))==null?void 0:w.value.trim().toUpperCase(),u=(I=document.getElementById("m-country"))==null?void 0:I.value.trim().toUpperCase(),l=((x=document.getElementById("m-logo"))==null?void 0:x.value.trim())||null,o=((b=document.getElementById("m-gen-stadium"))==null?void 0:b.checked)??!1,s=((v=document.getElementById("m-gen-squad"))==null?void 0:v.checked)??!1,g=Ze();if(!m){c.textContent="Le nom du club est requis.";return}if(!a){c.textContent="Le nom encodé est requis.";return}if(!u){c.textContent="Le pays est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const E={real_name:m,encoded_name:a,country_code:u,logo_url:l,kit_style:g.style,kit_color1:g.color1,kit_color2:g.color2,kit_color3:g.color3,kit_shorts:g.shorts,kit_socks:g.socks};let h=e==null?void 0:e.id;if(t){const{error:y}=await _.from("clubs").update(E).eq("id",h);if(y){c.textContent=y.message,r.disabled=!1,r.textContent="💾 Enregistrer";return}}else{const{data:y,error:$}=await _.from("clubs").insert(E).select().single();if($){c.textContent=$.message,r.disabled=!1,r.textContent="✅ Créer le club";return}if(h=y.id,o){r.textContent="🏟️ Création du stade…";const{data:A,error:k}=await _.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:h,country_code:u}).select().single();k?console.warn("[Stadium] Erreur def stade:",k.message):A&&await _.from("cards").insert({card_type:"stadium",stadium_id:A.id})}s&&(r.textContent="⚽ Génération des joueurs…",await Ye(h,u,p))}p(t?"Club modifié ✅":"Club créé ✅","success"),d(),fe(n,i)}const Rt=["normal","pepite","papyte","legende"],Ce=["GK","DEF","MIL","ATT"],Dt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let ee={...O},ue=[];async function Pt(e,{toast:t}){const{data:n}=await _.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ue=n||[],ee={...O},e.innerHTML=Gt(ue),Nt(e,ue,t),W()}function Se(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=xe(e))}function Ot(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=ue.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||D.style,color1:t.kit_color1||D.color1,color2:t.kit_color2||D.color2,shorts:t.kit_shorts||D.shorts,socks:t.kit_socks||D.socks}:{...D}}function W(){var o,s,g,E;const e=h=>{var f;return((f=document.getElementById(h))==null?void 0:f.value)||""},t={firstname:e("cb-firstname"),surname_real:e("cb-surname-enc")||xe(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((s=(o=document.getElementById("cb-club"))==null?void 0:o.selectedOptions[0])==null?void 0:s.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Ot(),i=document.getElementById("cb-club"),p=((E=(g=i==null?void 0:i.selectedOptions[0])==null?void 0:g.dataset)==null?void 0:E.logo)||null,d=He(ee,n,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,r=st(t,{portraitUrl:c,clubLogoUrl:p,showNotes:!0}),m=document.getElementById("card-preview");m&&(m.innerHTML=r);const a=document.getElementById("avatar-preview-wrap");a&&(a.innerHTML=d);const u=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&u&&(l.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_real}`)}function Xe(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};ee={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Nt(e,t,n){var p,d,c,r,m;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",W),a.addEventListener("change",W)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(a=>{var u;(u=document.getElementById(a))==null||u.addEventListener("change",()=>{Xe(),W()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{Se(),W()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{Se(),W()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",W),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>qt(n)),(m=document.getElementById("btn-reset"))==null||m.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),ee={...O},i.forEach(a=>{const u=a.replace("av-",""),l=document.getElementById(a);l&&(l.value=O[u]||"")}),W()})}async function qt(e){const t=c=>{var r;return((r=document.getElementById(c))==null?void 0:r.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||xe(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Xe();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_real:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:ee,skin:ee.skin||"blanc",hair:ee.hairColor||"marron",hair_length:"court"},{error:d}=await _.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_real}" enregistré !`,"success")}function Gt(e){const t=Dt.map(([a,u])=>`<option value="${a}">${u} (${a})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join(""),i=Ce.map(a=>`<option value="${a}">${a}</option>`).join(""),p='<option value="">Aucun</option>'+Ce.map(a=>`<option value="${a}">${a}</option>`).join(""),d=Rt.map(a=>`<option value="${a}">${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),c=(a,u,l)=>Object.entries(u).map(([o,s])=>`<option value="${o}" ${o===(l||"")?"selected":""}>${s.label}</option>`).join(""),r=Object.keys(rt).map(a=>`<option value="${a}" ${a===O.skin?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join(""),m=Object.keys(at).map(a=>`<option value="${a}" ${a===O.hairColor?"selected":""}>${a.charAt(0).toUpperCase()+a.slice(1)}</option>`).join("");return`
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
            <div style="background:${lt[a]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${r}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${c("av-hair",dt,O.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${m}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",ct,O.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",pt,O.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",ut,O.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",mt,O.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",gt,O.beard)}</select>
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
  `}async function Qe(e,{toast:t}){const{data:n,error:i}=await _.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[];e.innerHTML=`
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
  `,d(p),document.getElementById("search-users").addEventListener("input",c=>{const r=c.target.value.toLowerCase();d(p.filter(m=>{var a;return m.pseudo.toLowerCase().includes(r)||((a=m.club_name)==null?void 0:a.toLowerCase().includes(r))}))});function d(c){document.getElementById("users-tbody").innerHTML=c.map(r=>{const m=r.mmr??1e3,a=r.mmr_deviation??350,u=r.placement_matches??0,l=ft(m),o=r.ranked_wins??0,s=r.ranked_losses??0,g=r.ranked_draws??0,E=o+s+g,h=E>0?Math.round(o/E*100):null,f=u<10,w=a<80?"#1A6B3C":a<150?"#e67e22":"#bb2020";return`
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
            ${f?`<div style="font-size:10px;color:#e67e22">${u}/10 placement${u<10?` (${10-u} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${g}N ${s}D${h!==null?` · ${h}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${m}</div>
            <div style="font-size:10px;color:${w}">RD ±${Math.round(a)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const m=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${m?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:a}=await _.from("users").update({is_admin:m}).eq("id",r.dataset.toggleAdmin);a?t(a.message,"error"):(t("Rôle mis à jour ✅","success"),Qe(e,{toast:t}))})})}}async function et(e,{toast:t}){const{data:n,error:i}=await _.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_real, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[],d=p.filter(r=>r.status==="active").length,c=p.filter(r=>r.status==="sold").length;e.innerHTML=`
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
            ${p.map(r=>{var l,o,s,g;const m=(l=r.card)==null?void 0:l.player,a=m?`${m.firstname} ${m.surname_real}`:((o=r.card)==null?void 0:o.card_type)||"—",u={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${a}</b>${m?`<div style="font-size:10px;color:#999">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((s=r.seller)==null?void 0:s.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=r.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${u[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await _.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);m?t(m.message,"error"):(t("Annonce annulée","success"),et(e,{toast:t}))})})}async function Ft(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(ze).join(",")+`
`}),de("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await _.from("players").select("firstname,surname_real,surname_real,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_real");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_real,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var c;p+=[d.firstname,d.surname_real,d.surname_real,d.country_code,((c=d.clubs)==null?void 0:c.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(ze).join(",")+`
`}),de("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Te(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,m=0;const a=[];for(const u of c){if(!u.real_name||!u.encoded_name||!u.country_code){m++,a.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const l={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:o}=await _.from("clubs").upsert(l,{onConflict:"encoded_name"});o?(m++,a.push(`${u.encoded_name}: ${o.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=Te(d);if(c.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await _.from("clubs").select("id,encoded_name"),m={};(r||[]).forEach(f=>{m[f.encoded_name.toUpperCase()]=f.id});let a=0,u=0;const l=[],o=["GK","DEF","MIL","ATT"],s=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],h=["rase","court","milong","long"];for(const f of c){if(!f.firstname||!f.surname_real||!f.country_code||!f.job){u++,l.push(`Ligne ignorée (champs requis manquants): ${f.firstname||"?"}`);continue}if(!o.includes(f.job)){u++,l.push(`${f.firstname}: job invalide "${f.job}"`);continue}const w=f.club_encoded_name&&m[f.club_encoded_name.toUpperCase()]||null,I={firstname:f.firstname,surname_real:f.surname_real,surname_real:f.surname_real||xe(f.surname_real),country_code:f.country_code.toUpperCase().slice(0,2),club_id:w,job:f.job,job2:o.includes(f.job2)?f.job2:null,note_g:parseInt(f.note_g)||0,note_d:parseInt(f.note_d)||0,note_m:parseInt(f.note_m)||0,note_a:parseInt(f.note_a)||0,rarity:s.includes(f.rarity)?f.rarity:"normal",note_min:f.note_min!==""&&f.note_min!=null?parseInt(f.note_min):null,note_max:f.note_max!==""&&f.note_max!=null?parseInt(f.note_max):null,skin:g.includes(f.skin)?f.skin:"blanc",hair:E.includes(f.hair)?f.hair:"noir",hair_length:h.includes(f.hair_length)?f.hair_length:"court",sell_price:parseInt(f.sell_price)||0},{error:x}=await _.from("players").insert(I);x?(u++,l.push(`${f.firstname} ${f.surname_real}: ${x.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${a} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function ze(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function de(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Te(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(c=>c.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=Me(n,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let c=1;c<t.length;c++){if(!t[c].trim())continue;const r=Me(t[c],i),m={};p.forEach((a,u)=>{m[a]=(r[u]||"").trim()}),!Object.values(m).every(a=>!a)&&d.push(m)}return d}function Me(e,t=","){const n=[];let i="",p=!1;for(let d=0;d<e.length;d++){const c=e[d];p?c==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=c:c==='"'?p=!0:c===t?(n.push(i),i=""):i+=c}return n.push(i),n}const Ht={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ut(e,{toast:t}){const n=Object.keys(ve);let i=n[0];const{data:p}=await _.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(u=>{d[u.formation]=u.links});let c=new Set;function r(u,l){return[u,l].sort().join("-")}function m(u){const l=d[u]||ve[u]||[];c=new Set(l.map(([o,s])=>r(o,s)))}m(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(u=>`<option value="${u}" ${u===i?"selected":""}>${u}</option>`).join("")}
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
  `;function a(){const u=ie[i]||{},l=ke(i),o=320,s=400,g=22;function E(x){const b=u[x];return b?{x:b.x*o,y:b.y*s}:null}let h=`<svg width="${o}" height="${s}" viewBox="0 0 ${o} ${s}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([x,b],v)=>{const y=E(x),$=E(b);if(!y||!$)return;const A=r(x,b),k=c.has(A),B=k?"#3b82f6":"#999",S=k?.95:.35,z=k?4:3;h+=`<line x1="${y.x}" y1="${y.y}" x2="${$.x}" y2="${$.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${A}" style="cursor:pointer"/>`,h+=`<line x1="${y.x}" y1="${y.y}" x2="${$.x}" y2="${$.y}"
        stroke="${B}" stroke-width="${z}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${A}"/>`});for(const x of Object.keys(u)){const b=E(x);if(!b)continue;const v=x.replace(/\d+/,""),y=Ht[v]||"#555";h+=`<circle cx="${b.x}" cy="${b.y}" r="${g}" fill="${y}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,h+=`<text x="${b.x}" y="${b.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}h+="</svg>",document.getElementById("field-wrap").innerHTML=h;const f=document.getElementById("links-list");f.innerHTML=l.map(([x,b])=>{const v=r(x,b),y=c.has(v);return`
        <button class="link-toggle" data-key="${v}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${y?"#3b82f6":"#ddd"};
          background:${y?"#eaf2ff":"#fafafa"};
          color:${y?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${b}</span>
          <span>${y?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${c.size}/${l.length} actifs)`);function I(x){c.has(x)?c.delete(x):c.add(x),a()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>I(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>I(x.dataset.key))})}a(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,m(i),a()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=ve[i]||[];c=new Set(u.map(([l,o])=>r(l,o))),a(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=ke(i).filter(([s,g])=>c.has(r(s,g))),{error:o}=await _.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(o){t(o.message,"error");return}d[i]=l,t(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const Vt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Kt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Wt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Yt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const d=()=>window.innerWidth<700;async function c(){if(!n){i=[];return}if(n!==p){const{data:l}=await _.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=l||[],p=n}}function r(){return`
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
    </div>`}function m(){const l=n?(t||[]).find(g=>g.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const o=i.reduce((g,E)=>g+Number(E.percentage||0),0),s=Math.abs(o-100)<.1;return`
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
              ${Wt.map(g=>`<option value="${g.value}" ${l.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${s?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${o.toFixed(1)}% ${s?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((g,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Vt.map(h=>`<option value="${h.value}" ${g.card_type===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Kt.map(h=>`<option value="${h.value}" ${(g.rarity||"")===h.value?"selected":""}>${h.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="0" max="20" value="${g.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="0" max="20" value="${g.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${g.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function a(l=!1){l||await c();const o=!n&&d(),s=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||o||!n?r():""}
      ${!d()||s?m():""}
    </div>`,u()}function u(){var s,g,E,h,f,w,I;const l=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",b=>{b.target.closest(".btn-delete")||(n=x.dataset.id,p=null,a())})}),(s=l("#btn-back"))==null||s.addEventListener("click",()=>{n=null,a()}),(g=l("#btn-new"))==null||g.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:b,error:v}=await _.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(v){alert(v.message);return}t.push(b),n=b.id,p=null,a()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async b=>{if(b.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await _.from("booster_configs").delete().eq("id",x.dataset.id);const v=t.findIndex(y=>y.id===x.dataset.id);v>-1&&t.splice(v,1),n===x.dataset.id&&(n=null,p=null),a()})}),(E=l("#btn-cancel"))==null||E.addEventListener("click",()=>{n=null,a()}),(h=l("#f-price-type"))==null||h.addEventListener("change",x=>{const b=l("#credits-field");b&&(b.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(f=l("#btn-pick-icon"))==null||f.addEventListener("click",async()=>{var b;const x=l("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(y)?y.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!$.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const A=((b=l("#f-image-url"))==null?void 0:b.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===A?"#1A6B3C":"#ddd"};background:${k.name===A?"#f0f7f0":"#fff"}">
            <img src="/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const B=l("#f-image-url");B&&(B.value=k.dataset.name),x.style.display="none"})})}catch(v){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${v.message}</div>`}}});function o(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var v,y,$,A,k;const b=Number(x.dataset.rateIdx);b>=0&&b<i.length&&(i[b].card_type=((v=x.querySelector(".rate-type"))==null?void 0:v.value)||"player",i[b].rarity=((y=x.querySelector(".rate-rarity"))==null?void 0:y.value)||null,i[b].note_min=Number(($=x.querySelector(".rate-note-min"))==null?void 0:$.value)||null,i[b].note_max=Number((A=x.querySelector(".rate-note-max"))==null?void 0:A.value)||null,i[b].percentage=Number((k=x.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=l("#btn-add-rate"))==null||w.addEventListener("click",()=>{o(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),a(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{o(),i.splice(Number(x.dataset.idx),1),a(!0)})}),(I=l("#btn-save"))==null||I.addEventListener("click",async()=>{var A,k,B,S,z,T,N,G,F,L,M,q,j;const x=(t||[]).find(C=>C.id===n);if(!x)return;const b=[];e.querySelectorAll("[data-rate-idx]").forEach(C=>{var R,U,V,J,Z;const H=Number(C.dataset.rateIdx);b.push({booster_id:n,card_type:((R=C.querySelector(".rate-type"))==null?void 0:R.value)||"player",rarity:((U=C.querySelector(".rate-rarity"))==null?void 0:U.value)||null,note_min:Number((V=C.querySelector(".rate-note-min"))==null?void 0:V.value)||null,note_max:Number((J=C.querySelector(".rate-note-max"))==null?void 0:J.value)||null,percentage:Number((Z=C.querySelector(".rate-pct"))==null?void 0:Z.value)||0,sort_order:H});const P=b[b.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const v=b.reduce((C,H)=>C+H.percentage,0);if(b.length&&Math.abs(v-100)>.5){alert(`La somme doit faire 100% (actuellement ${v.toFixed(1)}%)`);return}const y={name:((k=(A=l("#f-name"))==null?void 0:A.value)==null?void 0:k.trim())||x.name,image_url:((S=(B=l("#f-image-url"))==null?void 0:B.value)==null?void 0:S.trim())||null,price_type:(z=l("#f-price-type"))==null?void 0:z.value,price_credits:Number((T=l("#f-price-credits"))==null?void 0:T.value)||0,card_count:Number((N=l("#f-card-count"))==null?void 0:N.value)||5,is_active:((G=l("#f-active"))==null?void 0:G.checked)??x.is_active,allow_duplicates:((F=l("#f-allow-dup"))==null?void 0:F.checked)??!0,sort_order:Number((L=l("#f-sort"))==null?void 0:L.value)||0,max_per_user:(M=l("#f-max-per-user"))!=null&&M.value?Number(l("#f-max-per-user").value):null,available_from:((q=l("#f-available-from"))==null?void 0:q.value)||null,available_until:((j=l("#f-available-until"))==null?void 0:j.value)||null},{error:$}=await _.from("booster_configs").update(y).eq("id",n);if($){alert($.message);return}if(Object.assign(x,y),await _.from("booster_drop_rates").delete().eq("booster_id",n),b.length){const{error:C}=await _.from("booster_drop_rates").insert(b);if(C){alert(C.message);return}}i=b,p=n,alert("✅ Booster enregistré !"),a(!0)})}a()}const tt=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Jt(e){await he(e)}async function he(e){const{data:t,error:n}=await _.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>Zt(i)).join("")}
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
              ${tt.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>je(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Xt(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>je(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await _.from("sell_price_configs").delete().eq("id",i.dataset.delete),await he(e))})})}function Zt(e){const t=tt.find(n=>n.value===e.rarity);return`
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
    </tr>`}function je(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Xt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const c={rarity:n,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let r;if(t?{error:r}=await _.from("sell_price_configs").update(c).eq("id",t):{error:r}=await _.from("sell_price_configs").insert(c),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await he(e)}async function Qt(e){await Ee(e)}async function Ee(e){const{data:t}=await _.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>en(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Re(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>tn(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.edit);i&&n.addEventListener("click",()=>Re(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await _.from("patch_notes").delete().eq("id",n.dataset.delete),await Ee(e))})})}function en(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Re(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function tn(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const r=c?new Date(c).toISOString():new Date().toISOString(),m={title:n,description:i,image_url:p,is_published:d,published_at:r};let a;if(t?{error:a}=await _.from("patch_notes").update(m).eq("id",t):{error:a}=await _.from("patch_notes").insert(m),a){alert("Erreur : "+a.message);return}document.getElementById("article-form").style.display="none",await Ee(e)}async function nn(e){await oe(e)}async function oe(e){var u,l,o,s,g,E,h,f,w,I,x,b;const{data:t}=await _.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(t||[]).map(v=>on(v)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([v,y,$])=>`<button type="button" data-cmd="${y}" title="${$}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${v}</button>`).join("")}
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
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>De(null,(t==null?void 0:t.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:v}=await _.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(v?"Erreur : "+v.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(o=document.getElementById("ts-cancel"))==null||o.addEventListener("click",nt),(s=document.getElementById("ts-save"))==null||s.addEventListener("click",()=>an(e)),(g=document.getElementById("ts-preview-btn"))==null||g.addEventListener("click",rn);const n=document.getElementById("ts-editor"),i=()=>{const v=document.getElementById("ts-content");v&&n&&(v.value=n.innerHTML)};n==null||n.addEventListener("input",i),n==null||n.addEventListener("blur",i);const p=()=>{document.activeElement!==n&&(n==null||n.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(v=>{v.addEventListener("mousedown",y=>{y.preventDefault(),p();const $=v.dataset.cmd;$.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,$.split(":")[1]):document.execCommand($,!1,null),i()})}),(h=document.getElementById("ts-insert-color"))==null||h.addEventListener("mousedown",v=>{v.preventDefault(),p();const y=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");y&&(document.execCommand("foreColor",!1,y),i())}),(f=document.getElementById("ts-clear-format"))==null||f.addEventListener("mousedown",v=>{v.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),n==null||n.addEventListener("focus",()=>{n&&(n.style.borderColor="#1A6B3C")}),n==null||n.addEventListener("blur",()=>{n&&(n.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),m=document.getElementById("ts-img-picker-grid"),a=()=>{var y;const v=(y=d==null?void 0:d.value)==null?void 0:y.trim();if(v){const $="/";r.src=`${$}icons/${v}`,c.style.display="block"}else c.style.display="none"};d==null||d.addEventListener("input",a),(w=document.getElementById("ts-img-clear"))==null||w.addEventListener("click",()=>{d&&(d.value=""),c.style.display="none",m.style.display="none"}),(I=document.getElementById("ts-img-pick"))==null||I.addEventListener("click",async()=>{if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',m.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(y)?y.filter(k=>k.name.startsWith("tuto_")):[];if(!$.length){m.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const A="/";m.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+$.map(k=>`
          <div data-pick="${k.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${A}icons/${k.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",m.querySelectorAll("[data-pick]").forEach(k=>{k.addEventListener("click",()=>{d&&(d.value=k.dataset.pick),a(),m.style.display="none"})})}catch(v){m.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+v.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",v=>{const y=document.getElementById("ts-color-hex");y&&(y.value=v.target.value)}),(b=document.getElementById("ts-color-hex"))==null||b.addEventListener("input",v=>{const y=v.target.value;if(/^#[0-9a-fA-F]{6}$/.test(y)){const $=document.getElementById("ts-color");$&&($.value=y)}}),e.querySelectorAll("[data-edit]").forEach(v=>{const y=(t||[]).find($=>$.id===v.dataset.edit);y&&v.addEventListener("click",()=>De(y))}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await _.from("tutorial_steps").delete().eq("id",v.dataset.delete),oe(e))})}),e.querySelectorAll("[data-toggle]").forEach(v=>{v.addEventListener("click",async()=>{const y=(t||[]).find($=>$.id===v.dataset.toggle);y&&(await _.from("tutorial_steps").update({is_active:!y.is_active}).eq("id",y.id),oe(e))})}),e.querySelectorAll("[data-up]").forEach(v=>{v.addEventListener("click",async()=>{const y=t||[],$=y.findIndex(A=>A.id===v.dataset.up);$<=0||(await Promise.all([_.from("tutorial_steps").update({step_order:y[$-1].step_order}).eq("id",y[$].id),_.from("tutorial_steps").update({step_order:y[$].step_order}).eq("id",y[$-1].id)]),oe(e))})}),e.querySelectorAll("[data-down]").forEach(v=>{v.addEventListener("click",async()=>{const y=t||[],$=y.findIndex(A=>A.id===v.dataset.down);$<0||$>=y.length-1||(await Promise.all([_.from("tutorial_steps").update({step_order:y[$+1].step_order}).eq("id",y[$].id),_.from("tutorial_steps").update({step_order:y[$].step_order}).eq("id",y[$+1].id)]),oe(e))})})}function on(e){return`
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
  </div>`}function De(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const n=document.getElementById("ts-editor");n&&(n.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const c=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(p&&c&&r){const m="/";r.src=`${m}icons/${p}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function nt(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function rn(){var a,u;const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-editor"),i=n?n.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(u=(a=document.getElementById("ts-image"))==null?void 0:a.value)==null?void 0:u.trim(),r=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",m=document.getElementById("ts-preview-area");m.innerHTML=`
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
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,m.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),m.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),m.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function an(e){var l,o;const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,m=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const a={emoji:n,title:i,content:d,color:c,step_order:r,is_active:m,image_url:((o=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:o.trim())||null};let u;if(t?{error:u}=await _.from("tutorial_steps").update(a).eq("id",t):{error:u}=await _.from("tutorial_steps").insert(a),u){alert("Erreur : "+u.message);return}nt(),oe(e)}const ln="/",it="#E87722",sn=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function dn(e){await _e(e)}async function _e(e){var i,p,d,c;const[{data:t},{data:n}]=await Promise.all([_.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),_.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(t||[]).map(r=>cn(r)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${sn.map(([r,m])=>`<option value="${r}">${m} (${r})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Pe(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>un(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>me()),["st-name","st-club","st-country","st-image"].forEach(r=>{var m,a;(m=document.getElementById(r))==null||m.addEventListener("input",me),(a=document.getElementById(r))==null||a.addEventListener("change",me)}),e.querySelectorAll("[data-edit]").forEach(r=>{const m=(t||[]).find(a=>a.id===r.dataset.edit);m&&r.addEventListener("click",()=>Pe(m))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await _.from("stadium_definitions").delete().eq("id",r.dataset.delete),_e(e))})})}function cn(e){var n,i;const t=(n=e.club)!=null&&n.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${it};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${t}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Pe(e,t){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const n=document.getElementById("st-country");n&&(n.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",me((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function me(){var a,u,l,o,s,g,E;const e=((a=document.getElementById("st-name"))==null?void 0:a.value)||"NOM DU STADE",t=(l=(u=document.getElementById("st-image"))==null?void 0:u.value)==null?void 0:l.trim(),n=(s=(o=document.getElementById("st-country"))==null?void 0:o.value)==null?void 0:s.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,d=i&&p>0?i.options[p].text:"",c=((E=(g=i==null?void 0:i.options[p])==null?void 0:g.getAttribute)==null?void 0:E.call(g,"data-logo"))||"";let r;t?r=`<img src="${ln}icons/${t}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:c?r=`<img src="${c}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:n?r=`<img src="${`https://flagsapi.com/${$country.toLowerCase().slice(0,2).toUpperCase()}/flat/64.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:r='<div style="font-size:36px;text-align:center">🏟️</div>';const m=d||n||"—";document.getElementById("st-preview-card").innerHTML=pn(e,r,m,!0)}function pn(e,t,n,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${it},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${t}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function un(e){const t=document.getElementById("st-id").value,n=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!n){alert("Le nom est obligatoire");return}const c={name:n,club_id:i,country_code:p,image_url:d},{error:r}=t?await _.from("stadium_definitions").update(c).eq("id",t):await _.from("stadium_definitions").insert(c);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",_e(e)}const X=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],Q=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function mn(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await _.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,c=o=>e.querySelector(o);function r(o,s=130){if(!o)return"";const g=X.find(I=>I.value===o.gc_type)||X[0],E=Q.find(I=>I.value===o.color)||Q[0],h=Math.round(s*.55),f=Math.round(s*.15),w=Math.round(s*.3);return`<div style="width:${s}px;height:${Math.round(s*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${g.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${f}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(s/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${o.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o.image_url?`<img src="/icons/${o.image_url}" style="max-height:${h}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(s*.3)}px">${g.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(s/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(o.effect||"").slice(0,60)}${(o.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function m(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(o=>{const s=X.find(E=>E.value===o.gc_type)||X[0],g=Q.find(E=>E.value===o.color)||Q[0];return`
        <div class="gc-row" data-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${g.hex};background:${s.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${o.image_url?`<img src="/icons/${o.image_url}" style="width:28px;height:28px;object-fit:contain">`:s.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
            <div style="font-size:11px;color:#888">${s.label} · ${o.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
    </div>`}function a(){const o=n?(t||[]).find(g=>g.id===n):null;if(!o)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const s=X.find(g=>g.value===o.gc_type)||X[0];return Q.find(g=>g.value===o.color)||Q[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${s.bg};border-radius:12px">
        ${r(o,d()?120:150)}
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
              ${X.map(g=>`<option value="${g.value}" ${o.gc_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Q.map(g=>`<option value="${g.value}" ${o.color===g.value?"selected":""}>${g.label}</option>`).join("")}
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
              ${i.map(g=>`<option value="${g.value}" ${(o.effect_type||"BOOST_STAT")===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const g=o.effect_params||{},E=i.find(h=>h.value===(o.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${E.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${g.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${g.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(g.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${g.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${E.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(h=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${h}" ${!g.roles||g.roles.includes(h)?"checked":""}> ${h}
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
    </div>`}function u(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!n?m():""}
      ${!d()||n?a():""}
    </div>`,l()}function l(){var o,s,g,E,h;e.querySelectorAll(".gc-row").forEach(f=>{f.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=f.dataset.id,u())})}),(o=c("#btn-gc-back"))==null||o.addEventListener("click",()=>{n=null,u()}),(s=c("#btn-cancel-gc"))==null||s.addEventListener("click",()=>{n=null,u()}),(g=c("#btn-new-gc"))==null||g.addEventListener("click",async()=>{const f=prompt("Nom de la carte Game Changer :");if(!(f!=null&&f.trim()))return;const{data:w,error:I}=await _.from("gc_definitions").insert({name:f.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(I){alert(I.message);return}t.push(w),n=w.id,u()}),e.querySelectorAll(".btn-toggle-gc").forEach(f=>{f.addEventListener("click",async w=>{w.stopPropagation();const I=f.dataset.active!=="true";await _.from("gc_definitions").update({is_active:I}).eq("id",f.dataset.id);const x=t.find(b=>b.id===f.dataset.id);x&&(x.is_active=I),u()})}),e.querySelectorAll(".btn-delete-gc").forEach(f=>{f.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await _.from("gc_definitions").delete().eq("id",f.dataset.id);const I=t.findIndex(x=>x.id===f.dataset.id);I>-1&&t.splice(I,1),n===f.dataset.id&&(n=null),u()})}),(E=c("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var w;const f=c("#gc-icon-picker");if(f){if(f.style.display!=="none"){f.style.display="none";return}f.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',f.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),b=Array.isArray(x)?x.filter(y=>y.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(y.name)):[];if(!b.length){f.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((w=c("#gc-image-url"))==null?void 0:w.value)||"";f.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${b.map(y=>`
          <div class="gc-icon-item" data-name="${y.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${y.name===v?"#7a28b8":"#ddd"};background:${y.name===v?"#f5f0ff":"#fff"}">
            <img src="/icons/${y.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,f.querySelectorAll(".gc-icon-item").forEach(y=>{y.addEventListener("click",()=>{const $=c("#gc-image-url");$&&($.value=y.dataset.name),f.style.display="none"})})}catch(I){f.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${I.message}</div>`}}}),(h=c("#btn-save-gc"))==null||h.addEventListener("click",async()=>{var y,$,A,k,B,S,z,T,N,G,F,L,M,q;const f=t.find(j=>j.id===n);if(!f)return;const w=i.find(j=>{var C;return j.value===(((C=c("#gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT")})||i[0],I=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,x={...w.hasValue?{value:Number((y=c("#gc-p-value"))==null?void 0:y.value)||2}:{},...w.hasCount?{count:Number(($=c("#gc-p-count"))==null?void 0:$.value)||1}:{},...w.hasTarget?{target:((A=c("#gc-p-target"))==null?void 0:A.value)||"home"}:{},...w.hasRoles?{roles:I!=null&&I.length?I:null}:{}},b={name:((B=(k=c("#gc-name"))==null?void 0:k.value)==null?void 0:B.trim())||f.name,effect:((z=(S=c("#gc-effect"))==null?void 0:S.value)==null?void 0:z.trim())||null,image_url:((N=(T=c("#gc-image-url"))==null?void 0:T.value)==null?void 0:N.trim())||null,gc_type:((G=c("#gc-type"))==null?void 0:G.value)||"game_changer",color:((F=c("#gc-color"))==null?void 0:F.value)||"purple",sort_order:Number((L=c("#gc-sort"))==null?void 0:L.value)||0,is_active:((M=c("#gc-active"))==null?void 0:M.checked)??f.is_active,effect_type:((q=c("#gc-effect-type"))==null?void 0:q.value)||"BOOST_STAT",effect_params:x},{error:v}=await _.from("gc_definitions").update(b).eq("id",n);if(v){alert(v.message);return}Object.assign(f,b),alert("✅ Carte enregistrée !"),u()})}u()}async function gn(e,{toast:t,openModal:n,closeModal:i}){await ne(e,{toast:t,openModal:n,closeModal:i})}async function ne(e,t){var x;const{toast:n,openModal:i,closeModal:p}=t,[{data:d,error:c},{data:r}]=await Promise.all([_.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),_.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const m=d||[],a=m.find(b=>b.is_active),u=(r||[]).filter(b=>(b.placement_matches||0)>=1),l=u.filter(b=>(b.placement_matches||0)>=10),o=["bronze","silver","gold","platinum","diamond","master"],s={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},g={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},h={};o.forEach(b=>{h[b]=0}),l.forEach(b=>{const v=b.rank_tier||"bronze";h[v]!==void 0&&h[v]++});const f=l.length?Math.round(l.reduce((b,v)=>b+(v.mmr||1e3),0)/l.length):0;function w(b){return b?new Date(b).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function I(b){const v=new Date;return b.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(b.end_at)<v?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${a?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${a.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${u.length}</div>
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
          ${o.map(b=>{const v=h[b],y=l.length>0?Math.round(v/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[b]} ${s[b]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${y}%;background:${g[b]};border-radius:4px;transition:width 0.5s"></div>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(b=>{const v=Math.round((new Date(b.end_at)-new Date(b.start_at))/864e5),y=new Date(b.end_at)<new Date&&!b.is_active;return`
                    <tr>
                      <td><b>${b.name}</b></td>
                      <td style="font-size:12px">${w(b.start_at)}</td>
                      <td style="font-size:12px">${w(b.end_at)}</td>
                      <td style="font-size:12px">${v} jours</td>
                      <td>${I(b)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${b.id}">✏️ Modifier</button>
                        ${b.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${b.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${b.id}">▶ Activer</button>`}
                        ${y?`<button class="btn btn-danger btn-sm" data-delete="${b.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{Oe(null,{toast:n,openModal:i,closeModal:p,reload:()=>ne(e,t)})}),e.querySelectorAll("[data-edit]").forEach(b=>{const v=m.find(y=>y.id==b.dataset.edit);b.addEventListener("click",()=>{Oe(v,{toast:n,openModal:i,closeModal:p,reload:()=>ne(e,t)})})}),e.querySelectorAll("[data-activate]").forEach(b=>{b.addEventListener("click",async()=>{const v=parseInt(b.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:y}=await _.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(y){n(y.message,"error");return}const{error:$}=await _.from("ranked_seasons").update({is_active:!0}).eq("id",v);if($){n($.message,"error");return}await _.from("users").update({current_season_id:v}).gt("placement_matches",0),n("Saison activée ✅","success"),ne(e,t)})}),e.querySelectorAll("[data-deactivate]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:v}=await _.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(b.dataset.deactivate));if(v){n(v.message,"error");return}n("Saison désactivée","success"),ne(e,t)})}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:v}=await _.from("ranked_seasons").delete().eq("id",parseInt(b.dataset.delete));if(v){n(v.message,"error");return}n("Saison supprimée","success"),ne(e,t)})})}function Oe(e,{toast:t,openModal:n,closeModal:i,reload:p}){const d=!!e,c=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),m=e?new Date(e.start_at).toISOString().slice(0,16):c,a=e?new Date(e.end_at).toISOString().slice(0,16):r,u=(e==null?void 0:e.name)||"";n(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${u}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
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
    </div>`);function l(){var h,f;const o=(h=document.getElementById("season-start"))==null?void 0:h.value,s=(f=document.getElementById("season-end"))==null?void 0:f.value,g=document.getElementById("season-duration");if(!o||!s||!g)return;const E=Math.round((new Date(s)-new Date(o))/864e5);g.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",g.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var o,s,g;(o=document.getElementById("season-start"))==null||o.addEventListener("input",l),(s=document.getElementById("season-end"))==null||s.addEventListener("input",l),l(),(g=document.getElementById("season-save-btn"))==null||g.addEventListener("click",async()=>{var v,y,$;const E=(v=document.getElementById("season-name"))==null?void 0:v.value.trim(),h=(y=document.getElementById("season-start"))==null?void 0:y.value,f=($=document.getElementById("season-end"))==null?void 0:$.value,w=document.getElementById("season-error");if(!E){w.textContent="Le nom est requis.";return}if(!h){w.textContent="La date de début est requise.";return}if(!f){w.textContent="La date de fin est requise.";return}if(new Date(f)<=new Date(h)){w.textContent="La date de fin doit être après le début.";return}const I=document.getElementById("season-save-btn");I.disabled=!0,I.textContent="Enregistrement…";const x={name:E,start_at:new Date(h).toISOString(),end_at:new Date(f).toISOString()};let b;if(d?{error:b}=await _.from("ranked_seasons").update(x).eq("id",e.id):{error:b}=await _.from("ranked_seasons").insert({...x,is_active:!1}),b){w.textContent=b.message,I.disabled=!1,I.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}t(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}const K={CW_RATIO:.18,PAD_RATIO:.7,PAD_MIN:80,MARGIN_PC:30,MARGIN_MOB:10,PRESRV_PC:"xMidYMid meet",PRESRV_MOB:"none",MOB_PAD_RATIO:.55};async function fn(e){const{data:t}=await _.from("deck_cards").select(`id, position, card_id, is_starter,
      card:cards(id, card_type, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, club_id, job, job2,
          note_g, note_d, note_m, note_a, skin, hair, hair_length, face, rarity,
          clubs(encoded_name, logo_url)))`).eq("is_starter",!0).limit(11),n=(t||[]).filter(c=>{var r;return(r=c.card)==null?void 0:r.player}),i="4-3-3",p={GK:[],DEF:[],MIL:[],ATT:[]};n.length>=11?n.forEach(c=>{var a,u,l;const r=((a=c.position)==null?void 0:a.replace(/[0-9]/g,""))||"MIL";p[r]||(p[r]=[]);const m=c.card.player;p[r].push({cardId:c.card_id,name:m.surname_real||m.firstname,firstname:m.firstname,note_g:(m.note_g||0)+(c.card.evolution_bonus||0),note_d:(m.note_d||0)+(c.card.evolution_bonus||0),note_m:(m.note_m||0)+(c.card.evolution_bonus||0),note_a:(m.note_a||0)+(c.card.evolution_bonus||0),_evolution_bonus:0,job:m.job,job2:m.job2,_line:r,_col:0,country_code:m.country_code,club_id:m.club_id,rarity:m.rarity,clubName:(u=m.clubs)==null?void 0:u.encoded_name,clubLogo:(l=m.clubs)==null?void 0:l.logo_url,face:m.face,used:!1,boost:0,stadiumBonus:!1})}):["GK","DEF","DEF","DEF","DEF","MIL","MIL","MIL","ATT","ATT","ATT"].forEach((r,m)=>{p[r]||(p[r]=[]),p[r].push({cardId:`fake-${m}`,name:r,firstname:"",note_g:10,note_d:10,note_m:10,note_a:10,_evolution_bonus:0,job:r,_line:r,_col:m,country_code:"FR",rarity:"normal",used:!1,boost:0,stadiumBonus:!1})});const d={formation:i,viewport:"mobile",CW_RATIO:K.CW_RATIO,PAD_RATIO:K.PAD_RATIO,PAD_MIN:K.PAD_MIN,MARGIN_PC:K.MARGIN_PC,MARGIN_MOB:K.MARGIN_MOB,MOB_PAD_RATIO:K.MOB_PAD_RATIO,posOverrides:{},team:p};e.innerHTML=`
  <div style="display:flex;flex-direction:column;height:100%;background:#0a1a0f;color:#fff;font-family:monospace;overflow:hidden">

    <!-- Toolbar -->
    <div style="flex-shrink:0;background:#0d2a12;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 12px;display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <span style="font-weight:900;color:#D4A017;font-size:14px">🎨 SVG Editor</span>

      <!-- Viewport switch -->
      <div style="display:flex;background:rgba(0,0,0,0.3);border-radius:8px;overflow:hidden">
        <button id="vp-mobile" style="padding:5px 12px;border:none;background:#1A6B3C;color:#fff;font-size:12px;cursor:pointer;font-weight:700">📱 Mobile</button>
        <button id="vp-pc"     style="padding:5px 12px;border:none;background:transparent;color:rgba(255,255,255,0.5);font-size:12px;cursor:pointer">🖥️ PC</button>
      </div>

      <!-- Formation -->
      <select id="ed-formation" style="padding:4px 8px;border-radius:6px;background:#1a3a1a;border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:12px">
        ${Object.keys(ie).map(c=>`<option value="${c}" ${c===i?"selected":""}>${c}</option>`).join("")}
      </select>

      <button id="gen-code" style="padding:5px 14px;border:none;border-radius:6px;background:#D4A017;color:#111;font-size:12px;font-weight:900;cursor:pointer">⚙️ Générer le code</button>
      <button id="reset-vals" style="padding:5px 10px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:rgba(255,255,255,0.6);font-size:11px;cursor:pointer">↺ Reset</button>
    </div>

    <!-- Main : preview + controls -->
    <div style="flex:1;min-height:0;display:flex;gap:0;overflow:hidden">

      <!-- Preview SVG -->
      <div id="preview-wrap" style="flex:1;min-width:0;display:flex;align-items:center;justify-content:center;background:#0a3d1e;overflow:hidden;position:relative">
        <div id="preview-inner" style="position:relative;border:2px solid rgba(255,255,255,0.15);border-radius:8px;overflow:visible">
          <div id="svg-mount" style="overflow:visible"></div>
          <!-- Overlays drag cliquables -->
          <div id="drag-layer" style="position:absolute;inset:0;pointer-events:none"></div>
        </div>
        <div id="viewport-label" style="position:absolute;top:8px;left:50%;transform:translateX(-50%);font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1px">MOBILE — 375px</div>
      </div>

      <!-- Contrôles -->
      <div style="width:260px;flex-shrink:0;background:#0d2a12;border-left:1px solid rgba(255,255,255,0.08);overflow-y:auto;padding:12px">

        <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px">Paramètres</div>

        <!-- CW Ratio -->
        ${te("CW_RATIO","Taille cartes (CW = W × ratio)",.08,.3,.01,d.CW_RATIO)}
        <!-- PAD Ratio -->
        ${te("PAD_RATIO","PAD normal (CW × ratio)",.2,1.5,.05,d.PAD_RATIO)}
        <!-- PAD Min -->
        ${te("PAD_MIN","PAD minimum (px)",20,120,5,d.PAD_MIN)}
        <!-- Mobile PAD Ratio -->
        ${te("MOB_PAD_RATIO","PAD mobile (CW × ratio)",.1,1,.05,d.MOB_PAD_RATIO)}
        <!-- Margin PC -->
        ${te("MARGIN_PC","Margin-top PC (px)",0,80,2,d.MARGIN_PC)}
        <!-- Margin Mobile -->
        ${te("MARGIN_MOB","Margin-top Mobile (px)",0,80,2,d.MARGIN_MOB)}

        <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.1);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Positions joueurs</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-bottom:8px">Glisse les cartes dans le SVG pour les repositionner</div>
          <button id="reset-pos" style="width:100%;padding:6px;border:1px solid rgba(255,100,100,0.4);border-radius:6px;background:transparent;color:rgba(255,150,150,0.8);font-size:11px;cursor:pointer">↺ Réinitialiser les positions</button>
        </div>

        <!-- Valeurs courantes -->
        <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,0.1);padding-top:12px">
          <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">Valeurs calculées</div>
          <div id="calc-vals" style="font-size:10px;color:#4fc3f7;line-height:1.8"></div>
        </div>

      </div>
    </div>

    <!-- Code généré -->
    <div id="code-panel" style="display:none;flex-shrink:0;max-height:220px;background:#000;border-top:2px solid #D4A017;padding:12px;overflow-y:auto">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:12px;color:#D4A017;font-weight:700">Code à copier dans match-shared.js</span>
        <button id="copy-code" style="padding:3px 10px;border:1px solid #D4A017;border-radius:4px;background:transparent;color:#D4A017;font-size:11px;cursor:pointer">📋 Copier</button>
        <button id="close-code" style="margin-left:auto;padding:3px 8px;border:none;background:rgba(255,255,255,0.1);color:#fff;border-radius:4px;cursor:pointer">✕</button>
      </div>
      <pre id="code-content" style="font-size:11px;color:#a8ff78;margin:0;white-space:pre-wrap"></pre>
    </div>

  </div>`,Y(e,d),bn(e,d)}function te(e,t,n,i,p,d){return`
  <div style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;margin-bottom:3px">
      <span style="font-size:10px;color:rgba(255,255,255,0.6)">${t}</span>
      <span id="val-${e}" style="font-size:10px;color:#D4A017;font-weight:700">${d}</span>
    </div>
    <input type="range" id="sl-${e}" min="${n}" max="${i}" step="${p}" value="${d}"
      style="width:100%;accent-color:#D4A017">
  </div>`}function Y(e,t){var $;const n=t.viewport==="mobile",i=n?375:860,p=e.querySelector("#preview-inner"),d=e.querySelector("#svg-mount"),c=e.querySelector("#drag-layer"),r=e.querySelector("#viewport-label");if(!p||!d)return;p.style.width=i+"px";const m=i-40,a=Math.round(m*1.1),u=Math.max(52,Math.round(m*t.CW_RATIO)),l=Math.round(n?u*t.MOB_PAD_RATIO:Math.max(u*t.PAD_RATIO,t.PAD_MIN)),o=n?t.MARGIN_MOB:t.MARGIN_PC,s=e.querySelector("#calc-vals");s&&(s.innerHTML=`W terrain: ${m}px<br>H terrain: ${a}px<br>CW (carte): ${u}px<br>CH (carte): ${Math.round(u*657/507)}px<br>PAD: ${l}px<br>margin-top: ${o}px`),r.textContent=n?`MOBILE — ${i}px`:`PC — ${i}px`;const g=t.formation,E=t.posOverrides[g]||{},h=ie[g]||{},f={...h};Object.entries(E).forEach(([A,{x:k,y:B}])=>{f[A]={...f[A],x:k,y:B}});const w=ie[g];ie[g]=f;const I=bt(t.team,g,null,[],m,a,[]);ie[g]=w,d.innerHTML=`<div style="margin-top:${o}px;overflow:visible">${I}</div>`;const x=d.querySelector("svg");x&&(x.style.width="100%",x.style.height="auto",x.setAttribute("preserveAspectRatio",n?"none":"xMidYMid meet")),p.style.height=a+o+20+"px",c.innerHTML="",c.style.pointerEvents="auto";const b=($=x==null?void 0:x.getAttribute("viewBox"))==null?void 0:$.split(" ").map(Number),v=b?b[2]:m+l*2,y=b?b[3]:a+l*2;Object.entries(f).forEach(([A,k])=>{var P;const B=A.replace(/[0-9]/g,"");if(!((P=t.team[B])!=null&&P.length))return;const S=p.clientWidth||i,z=p.clientHeight||a+o+20,T=S/v,N=(z-o)/y,G=(k.x*m+l)*T,F=(k.y*a+l)*N+o,L=document.createElement("div");L.dataset.pos=A,L.title=A,L.style.cssText=`
      position:absolute;
      left:${G-10}px;top:${F-10}px;
      width:20px;height:20px;
      border-radius:50%;
      border:2px solid #D4A017;
      background:rgba(212,160,23,0.3);
      cursor:grab;
      z-index:10;
      display:flex;align-items:center;justify-content:center;
      font-size:7px;color:#D4A017;font-weight:700;
      user-select:none`,L.textContent=A.slice(0,3),c.appendChild(L);let M=!1,q,j,C,H;L.addEventListener("mousedown",R=>{M=!0,q=R.clientX,j=R.clientY,C=parseFloat(L.style.left),H=parseFloat(L.style.top),L.style.cursor="grabbing",R.preventDefault()}),document.addEventListener("mousemove",R=>{if(!M||L.dataset.pos!==A)return;const U=R.clientX-q,V=R.clientY-j;L.style.left=C+U+"px",L.style.top=H+V+"px"}),document.addEventListener("mouseup",R=>{var re;if(!M||L.dataset.pos!==A)return;M=!1,L.style.cursor="grab";const U=parseFloat(L.style.left)+10,V=parseFloat(L.style.top)+10-o,J=Math.max(0,Math.min(1,(U/T-l)/m)),Z=Math.max(0,Math.min(1,(V/N-l)/a));t.posOverrides[g]||(t.posOverrides[g]={}),t.posOverrides[g][A]={x:+J.toFixed(3),y:+Z.toFixed(3),...(re=h[A])!=null&&re.link?{link:h[A].link}:{}},Y(e,t)})})}function bn(e,t){var n,i,p,d,c,r,m,a;["CW_RATIO","PAD_RATIO","PAD_MIN","MOB_PAD_RATIO","MARGIN_PC","MARGIN_MOB"].forEach(u=>{const l=e.querySelector(`#sl-${u}`),o=e.querySelector(`#val-${u}`);l==null||l.addEventListener("input",()=>{t[u]=parseFloat(l.value),o.textContent=l.value,Y(e,t)})}),(n=e.querySelector("#vp-mobile"))==null||n.addEventListener("click",()=>{t.viewport="mobile",e.querySelector("#vp-mobile").style.background="#1A6B3C",e.querySelector("#vp-mobile").style.color="#fff",e.querySelector("#vp-pc").style.background="transparent",e.querySelector("#vp-pc").style.color="rgba(255,255,255,0.5)",Y(e,t)}),(i=e.querySelector("#vp-pc"))==null||i.addEventListener("click",()=>{t.viewport="pc",e.querySelector("#vp-pc").style.background="#1A6B3C",e.querySelector("#vp-pc").style.color="#fff",e.querySelector("#vp-mobile").style.background="transparent",e.querySelector("#vp-mobile").style.color="rgba(255,255,255,0.5)",Y(e,t)}),(p=e.querySelector("#ed-formation"))==null||p.addEventListener("change",u=>{t.formation=u.target.value,Y(e,t)}),(d=e.querySelector("#reset-pos"))==null||d.addEventListener("click",()=>{delete t.posOverrides[t.formation],Y(e,t)}),(c=e.querySelector("#reset-vals"))==null||c.addEventListener("click",()=>{Object.assign(t,{...K}),t.posOverrides={},["CW_RATIO","PAD_RATIO","PAD_MIN","MOB_PAD_RATIO","MARGIN_PC","MARGIN_MOB"].forEach(u=>{const l=e.querySelector(`#sl-${u}`),o=e.querySelector(`#val-${u}`);l&&(l.value=K[u]),o&&(o.textContent=K[u])}),Y(e,t)}),(r=e.querySelector("#gen-code"))==null||r.addEventListener("click",()=>{const u=xn(t);e.querySelector("#code-content").textContent=u,e.querySelector("#code-panel").style.display="block"}),(m=e.querySelector("#close-code"))==null||m.addEventListener("click",()=>{e.querySelector("#code-panel").style.display="none"}),(a=e.querySelector("#copy-code"))==null||a.addEventListener("click",()=>{const u=e.querySelector("#code-content").textContent;navigator.clipboard.writeText(u).then(()=>{const l=e.querySelector("#copy-code");l.textContent="✅ Copié !",setTimeout(()=>l.textContent="📋 Copier",2e3)})})}function xn(e){const t=Object.entries(e.posOverrides),n=t.length?t.map(([i,p])=>`  // ${i}
`+Object.entries(p).map(([d,{x:c,y:r}])=>`  FORMATION_POSITIONS['${i}']['${d}'] = { ...FORMATION_POSITIONS['${i}']['${d}'], x:${c}, y:${r} }`).join(`
`)).join(`
`):"  // Aucun override de position";return`// ── Paramètres SVG (générés par SVG Editor) ──────────────
// À coller dans buildTeamSVG() dans match-shared.js

// Taille des cartes
const CW = Math.max(52, Math.round(W * ${e.CW_RATIO}))

// PAD
const isPC_ctx = typeof window !== 'undefined' && window.innerWidth >= 900
const PAD = padOverride !== null ? padOverride
  : isPC_ctx
    ? Math.round(Math.max(CW * ${e.PAD_RATIO}, ${e.PAD_MIN}))
    : Math.round(CW * ${e.MOB_PAD_RATIO})

// Dans fixDeckSVG / fixDeckField :
const marginTop = isPC ? ${e.MARGIN_PC} : ${e.MARGIN_MOB}

// Overrides de positions (à coller dans formation-links.js ou au début de buildTeamSVG)
${n}
`}xt(He);function vn(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function yn(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ye(){document.getElementById("modal-overlay").classList.add("hidden")}const Ne={dashboard:{title:"Dashboard",fn:vt},players:{title:"Joueurs & Cartes",fn:Et},clubs:{title:"Clubs",fn:Tt},"card-builder":{title:"Card Builder",fn:Pt},users:{title:"Managers",fn:Qe},market:{title:"Marché des transferts",fn:et},"import-export":{title:"Import / Export CSV",fn:Ft},formations:{title:"Formations & Liens",fn:Ut},"boosters-config":{title:"Boosters",fn:Yt},"sell-price":{title:"Prix vente directe",fn:Jt},journal:{title:"Journal",fn:Qt},tutorial:{title:"Tutoriel",fn:nn},stadiums:{title:"Stades",fn:dn},"gc-cards":{title:"Game Changers",fn:mn},"ranked-seasons":{title:"Saisons Ranked",fn:gn},"svg-editor":{title:"🎨 SVG Editor",fn}};async function be(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=Ne[e]||Ne.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:vn,openModal:yn,closeModal:ye,navigate:be})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function hn(){var t;const{data:{session:e}}=await _.auth.getSession();e&&await qe(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:c}=await _.auth.signInWithPassword({email:n,password:i});if(c){p.textContent=c.message;return}await qe(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await _.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ye),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ye()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),be(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{be(n.target.value)})}async function qe(e){const{data:t,error:n}=await _.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await _.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,be("dashboard")}hn();
