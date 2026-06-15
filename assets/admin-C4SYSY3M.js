import{s as v,g as be,F,a as X,b as ge}from"./formation-links-CDBKB_z4.js";async function fe(e){const[{count:n},{count:t},{count:o},{count:c},{count:r}]=await Promise.all([v.from("players").select("*",{count:"exact",head:!0}),v.from("clubs").select("*",{count:"exact",head:!0}),v.from("users").select("*",{count:"exact",head:!0}),v.from("cards").select("*",{count:"exact",head:!0}),v.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${C("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${C("🏟️","Clubs",t??"–","#D4A017")}
      ${C("👥","Managers",o??"–","#7a28b8")}
      ${C("📦","Cartes possédées",c??"–","#2a8f52")}
      ${C("⚽","Matchs joués",r??"–","#bb2020")}
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
  `,window.adminNav=i=>{var a;(a=document.querySelector(`[data-page="${i}"]`))==null||a.click()}}function C(e,n,t,o){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${o}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const Z={ATT:"#1A6B3C",MIL:"#D4A017",DEF:"#bb2020",GK:"#111111"},pe={normal:"#cccccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ve={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",MA:"MAROC",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE",MA:"MAROC"};function ee(e,n,t=52){const o=t===52,c=o?"26,3 31.5,18 48,18 35,29 39.5,46 26,36 12.5,46 17,29 4,18 20.5,18":"16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11",r=o?26:16,i=o?32:20,a=o?16:9,s=o?50:31;return`<svg width="${t}" height="${s}" viewBox="0 0 ${t} ${s}" style="display:block">
    <polygon points="${c}" fill="${e}" stroke="#0005" stroke-width="${o?2:1.5}"/>
    <text x="${r}" y="${i}" text-anchor="middle" font-size="${a}" font-weight="900"
      fill="white" font-family="Arial Black,Arial">${n}</text>
  </svg>`}function ye(e,n={}){const{size:t="md",showNotes:o=!1,portraitUrl:c=null,clubLogoUrl:r=null}=n,i=e.rarity||"normal",a=pe[i],s=e.job||"ATT",d=e.job2,u=e.current_note??(s==="ATT"?e.note_a:s==="MIL"?e.note_m:s==="DEF"?e.note_d:e.note_g),l=d?d==="ATT"?e.note_a:d==="MIL"?e.note_m:d==="DEF"?e.note_d:e.note_g:null,p=Z[s],y=d?Z[d]:null,f=e.country_code||"",h=ve[f]||f,_=t==="sm"?120:160,m=c?`<img src="${c}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block">`:'<div style="width:100%;height:100%;background:#c5d8ec;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>',k=r?`<img src="${r}" alt="" class="mw-club-logo">`:`<div class="mw-club-badge">${e.club_encoded_name||"CLUB"}</div>`,g=i==="legende"?'<div style="background:#f5c518;color:#7a5800;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">LÉGENDE</div>':i==="pepite"?'<div style="background:#D4A017;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PÉPITE</div>':i==="papyte"?'<div style="background:#909090;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PAPYTE</div>':k;return`<div class="mw-card" style="background:${a};width:${_}px;${t==="sm"?"transform:scale(0.75);transform-origin:top left;":""}">
    <div class="mw-inner" style="${i!=="normal"?`border:3px solid ${a};border-radius:8px`:""}">
      <div class="mw-name">
        <div class="mw-firstname">${e.firstname||""}</div>
        <div class="mw-lastname" style="font-size:${_===120?"13px":"16px"}">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div class="mw-stars">
        <div class="mw-band" style="background:${p}"></div>
        ${ee(p,u,52)}
        ${d&&y?ee(y,l,32):""}
      </div>
      <div class="mw-portrait" style="height:${_===120?"88px":"116px"}">
        ${m}
      </div>
      <div class="mw-footer">
        <div class="mw-flag">
          <img src="https://flagsapi.com/${f}/flat/64.png" alt="${h}">
        </div>
        <div class="mw-country">${h}</div>
        ${i==="normal"?k:g}
      </div>
      ${o?`<div style="background:#e8e0cc;padding:4px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;font-size:9px">
        <div style="color:#555">GK <b style="color:#111">${e.note_g}</b></div>
        <div style="color:#555">DEF <b style="color:#111">${e.note_d}</b></div>
        <div style="color:#555">MIL <b style="color:#111">${e.note_m}</b></div>
        <div style="color:#555">ATT <b style="color:#111">${e.note_a}</b></div>
      </div>`:""}
    </div>
  </div>`}function T(e){const n={A:"E",E:"I",I:"O",O:"U",U:"A",a:"e",e:"i",i:"o",o:"u",u:"a"};return(e||"").replace(/[AEIOUaeiou]/g,t=>n[t]||t)}const te={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},xe={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function he(e,n){await N(e,n)}async function N(e,n){const{toast:t,openModal:o,closeModal:c}=n,[{data:r,error:i},{data:a}]=await Promise.all([v.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),v.from("clubs").select("id,encoded_name").order("encoded_name")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const s={};(a||[]).forEach(l=>{s[l.id]=l.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(te).map(([l,p])=>`<option value="${l}">${p}</option>`).join("")}
        </select>
        <select id="filter-job" style="width:120px">
          <option value="">Tous postes</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <span style="font-size:13px;color:var(--gray-600);align-self:center" id="count-label">${r.length} joueur(s)</span>
        <button class="btn btn-primary" id="add-player-btn">+ Nouveau joueur</button>
      </div>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Joueur</th>
              <th>Pays</th>
              <th>Club</th>
              <th>Poste</th>
              <th>Notes G/D/M/A</th>
              <th>Rareté</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="players-tbody"></tbody>
        </table>
      </div>
    </div>
  `,d(r);function d(l){document.getElementById("count-label").textContent=`${l.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=l.map(p=>{var y;return`
      <tr>
        <td>
          <div style="font-weight:600">${p.firstname} ${p.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${p.firstname} ${p.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${p.country_code}/flat/32.png" alt="${p.country_code}" style="height:16px;vertical-align:middle"> ${p.country_code}
        </td>
        <td style="font-size:12px">${((y=p.clubs)==null?void 0:y.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${p.job==="ATT"?"#1A6B3C":p.job==="MIL"?"#D4A017":p.job==="DEF"?"#bb2020":"#111"}">
            ${p.job}
          </span>
          ${p.job2?`<span style="font-size:11px;color:#aaa"> / ${p.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${p.note_g} / ${p.note_d} / ${p.note_m} / ${p.note_a}
        </td>
        <td>
          <span style="background:${xe[p.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${te[p.rarity]||p.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${p.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${p.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const y=r.find(f=>f.id===p.dataset.edit);ne(y,a||[],{toast:t,openModal:o,closeModal:c,reload:()=>N(e,n)})})}),document.querySelectorAll("[data-del]").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:y}=await v.from("players").delete().eq("id",p.dataset.del);y?t(y.message,"error"):(t("Joueur supprimé","success"),N(e,n))})})}function u(){const l=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-rarity").value,y=document.getElementById("filter-job").value;d(r.filter(f=>(!l||`${f.firstname} ${f.surname_encoded} ${f.surname_real}`.toLowerCase().includes(l))&&(!p||f.rarity===p)&&(!y||f.job===y)))}document.getElementById("search-players").addEventListener("input",u),document.getElementById("filter-rarity").addEventListener("change",u),document.getElementById("filter-job").addEventListener("change",u),document.getElementById("add-player-btn").addEventListener("click",()=>{ne(null,a||[],{toast:t,openModal:o,closeModal:c,reload:()=>N(e,n)})})}function ne(e,n,{toast:t,openModal:o,closeModal:c,reload:r}){const i=!!e,a='<option value="">— Club —</option>'+n.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join("");o(i?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div><label>Prénom</label><input id="pm-fn" value="${(e==null?void 0:e.firstname)||""}"></div>
      <div>
        <label>Nom réel</label>
        <div style="display:flex;gap:4px">
          <input id="pm-real" value="${(e==null?void 0:e.surname_real)||""}" style="flex:1">
          <button class="btn btn-ghost btn-sm" id="pm-encode-btn" title="Encoder">↻</button>
        </div>
      </div>
      <div><label>Nom encodé</label><input id="pm-enc" value="${(e==null?void 0:e.surname_encoded)||""}"></div>
      <div><label>Pays (ISO)</label>
        <select id="pm-country">
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(s=>`<option value="${s}" ${(e==null?void 0:e.country_code)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${a}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(s=>`<option value="${s}" ${(e==null?void 0:e.job2)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(s=>`<option value="${s}" ${(e==null?void 0:e.rarity)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Note GK</label><input id="pm-g" type="number" min="0" max="10" value="${(e==null?void 0:e.note_g)||0}"></div>
      <div><label>Note DEF</label><input id="pm-d" type="number" min="0" max="10" value="${(e==null?void 0:e.note_d)||0}"></div>
      <div><label>Note MIL</label><input id="pm-m" type="number" min="0" max="10" value="${(e==null?void 0:e.note_m)||0}"></div>
      <div><label>Note ATT</label><input id="pm-a" type="number" min="0" max="10" value="${(e==null?void 0:e.note_a)||0}"></div>
      <div><label>Note min</label><input id="pm-nmin" type="number" min="0" max="10" value="${(e==null?void 0:e.note_min)||""}"></div>
      <div><label>Note max</label><input id="pm-nmax" type="number" min="0" max="10" value="${(e==null?void 0:e.note_max)||""}"></div>
      <div><label>Peau</label>
        <select id="pm-skin">
          ${["blanc","metisse","typ","noir"].map(s=>`<option value="${s}" ${(e==null?void 0:e.skin)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(s=>`<option value="${s}" ${(e==null?void 0:e.hair)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(s=>`<option value="${s}" ${(e==null?void 0:e.hair_length)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${i?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",c),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=T(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const s={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!s.firstname||!s.surname_real||!s.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:d}=i?await v.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await v.from("players").insert(s);if(d){t(d.message,"error");return}t(i?"Joueur modifié ✅":"Joueur créé ✅","success"),c(),r()})}let P=[];async function _e(e,{toast:n,openModal:t,closeModal:o}){await D(e,{toast:n,openModal:t,closeModal:o})}async function D(e,n){const{data:t,error:o}=await v.from("clubs").select("*").order("encoded_name");if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}P=t||[],$e(e,n)}function $e(e,{toast:n,openModal:t,closeModal:o}){e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <input id="search-clubs" placeholder="🔍 Rechercher un club…" style="width:280px">
      </div>
      <button class="btn btn-primary" id="add-club-btn">+ Nouveau club</button>
    </div>

    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nom encodé</th>
              <th>Nom réel</th>
              <th>Pays</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="clubs-tbody"></tbody>
        </table>
      </div>
    </div>
  `,c(P),document.getElementById("search-clubs").addEventListener("input",r=>{const i=r.target.value.toLowerCase();c(P.filter(a=>a.encoded_name.toLowerCase().includes(i)||a.real_name.toLowerCase().includes(i)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{oe(null,{toast:n,openModal:t,closeModal:o,reload:()=>D(e,{toast:n,openModal:t,closeModal:o})})});function c(r){document.getElementById("clubs-tbody").innerHTML=r.map(i=>`
      <tr>
        <td>
          ${i.logo_url?`<img src="${i.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${i.encoded_name.slice(0,3)}</div>`}
        </td>
        <td><b>${i.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${i.real_name}</td>
        <td><img src="https://flagsapi.com/${i.country_code}/flat/32.png" alt="${i.country_code}" style="height:18px;vertical-align:middle"> ${i.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${i.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${i.id}">🗑️</button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-edit]").forEach(i=>{i.addEventListener("click",()=>{const a=P.find(s=>s.id===i.dataset.edit);oe(a,{toast:n,openModal:t,closeModal:o,reload:()=>D(e,{toast:n,openModal:t,closeModal:o})})})}),document.querySelectorAll("[data-del]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:a}=await v.from("clubs").delete().eq("id",i.dataset.del);a?n(a.message,"error"):(n("Club supprimé","success"),D(e,{toast:n,openModal:t,closeModal:o}))})})}}function oe(e,{toast:n,openModal:t,closeModal:o,reload:c}){const r=!!e;t(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label>Nom réel (ex: Paris Saint-Germain)</label>
        <input id="m-real" value="${(e==null?void 0:e.real_name)||""}">
      </div>
      <div>
        <label>Nom encodé (ex: PARIS FC) — auto-calculé ou personnalisé</label>
        <input id="m-encoded" value="${(e==null?void 0:e.encoded_name)||""}" placeholder="Ville + FC">
        <button class="btn btn-ghost btn-sm" id="auto-encode" style="margin-top:4px">↻ Auto-encoder</button>
      </div>
      <div>
        <label>Code pays (ISO 2 lettres, ex: FR)</label>
        <input id="m-country" value="${(e==null?void 0:e.country_code)||""}" maxlength="2" style="text-transform:uppercase">
      </div>
      <div>
        <label>Logo (URL Supabase Storage ou upload)</label>
        <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
        <div style="font-size:11px;color:var(--gray-600);margin-top:2px">
          Uploader d'abord dans Supabase Storage > assets/clubs/ puis coller l'URL publique
        </div>
      </div>
      ${e!=null&&e.logo_url?`<div><img src="${e.logo_url}" style="max-height:60px"></div>`:""}
    </div>`,`<button class="btn btn-ghost" id="m-cancel">Annuler</button>
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`),document.getElementById("m-cancel").addEventListener("click",o),document.getElementById("auto-encode").addEventListener("click",()=>{const i=document.getElementById("m-real").value,a=i.split(" ")[0]||i;document.getElementById("m-encoded").value=a.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const i=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const a=i.split(" ")[0]||i;document.getElementById("m-encoded").value=a.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const i={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null};if(!i.real_name||!i.encoded_name||!i.country_code){n("Remplissez tous les champs obligatoires","error");return}const{error:a}=r?await v.from("clubs").update(i).eq("id",e.id):await v.from("clubs").insert(i);if(a){n(a.message,"error");return}n(r?"Club modifié":"Club créé","success"),o(),c()})}const Ee=["blanc","metisse","typ","noir"],we=["blond","marron","noir","chauve"],Ie=["rase","court","milong","long"],Le=["normal","pepite","papyte","legende"],ie=["GK","DEF","MIL","ATT"],ke=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];async function Ae(e,{toast:n}){const{data:t}=await v.from("clubs").select("id,encoded_name,logo_url").order("encoded_name");e.innerHTML=Ce(t||[]),Be(e,t||[],n),j()}function ae(){var o;const e=((o=document.getElementById("cb-surname-real"))==null?void 0:o.value)||"",n=T(e),t=document.getElementById("cb-surname-enc");t&&(t.value=n)}function j(){var u,l,p,y;const e=f=>{var h;return((h=document.getElementById(f))==null?void 0:h.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||T(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((l=(u=document.getElementById("cb-club"))==null?void 0:u.selectedOptions[0])==null?void 0:l.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity"),skin:e("cb-skin"),hair:e("cb-hair"),hair_length:e("cb-hair-length")},t=be(n.skin,n.hair,n.hair_length);e("cb-club");const o=document.getElementById("cb-club"),c=((y=(p=o==null?void 0:o.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:y.logo)||null,r=ye(n,{portraitUrl:t,clubLogoUrl:c,showNotes:!0}),i=document.getElementById("card-preview");i&&(i.innerHTML=r);const a=e("cb-surname-real"),s=n.surname_encoded,d=document.getElementById("encode-summary");d&&a&&(d.textContent=`${e("cb-firstname")} ${a} → ${e("cb-firstname")} ${s}`)}function Be(e,n,t){var o,c,r,i;e.querySelectorAll("input,select").forEach(a=>{a.addEventListener("input",j),a.addEventListener("change",j)}),(o=document.getElementById("cb-surname-real"))==null||o.addEventListener("input",()=>{ae(),j()}),(c=document.getElementById("btn-encode"))==null||c.addEventListener("click",()=>{ae(),j()}),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",async()=>{await je(n,t)}),(i=document.getElementById("btn-reset"))==null||i.addEventListener("click",()=>{e.querySelectorAll("input").forEach(a=>a.value=""),e.querySelectorAll("select").forEach(a=>a.selectedIndex=0),j()})}async function je(e,n){const t=s=>{var d;return((d=document.getElementById(s))==null?void 0:d.value)||""},o=t("cb-surname-real").trim(),c=t("cb-surname-enc").trim()||T(o);if(!t("cb-firstname")||!o||!t("cb-country")||!t("cb-job")){n("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}const r=t("cb-club")||null,i={firstname:t("cb-firstname").trim(),surname_real:o,surname_encoded:c,country_code:t("cb-country"),club_id:r||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,skin:t("cb-skin")||"blanc",hair:t("cb-hair")||"noir",hair_length:t("cb-hair-length")||"court",sell_price:parseInt(t("cb-price"))||0},{error:a}=await v.from("players").insert(i);if(a){n("Erreur: "+a.message,"error");return}n(`✅ Joueur "${i.firstname} ${i.surname_encoded}" enregistré !`,"success")}function Ce(e){const n=ke.map(([d,u])=>`<option value="${d}">${u} (${d})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(d=>`<option value="${d.id}" data-logo="${d.logo_url||""}">${d.encoded_name}</option>`).join(""),o=ie.map(d=>`<option value="${d}">${d}</option>`).join(""),c='<option value="">Aucun</option>'+ie.map(d=>`<option value="${d}">${d}</option>`).join(""),r=Le.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),i=Ee.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),a=we.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),s=Ie.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join("");return`
  <div style="display:grid;grid-template-columns:1fr 320px;gap:20px;align-items:start">

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
            <label>Nom encodé * <span style="font-weight:400;color:#999">(GDD §4.5 — voyelles +1)</span></label>
            <input id="cb-surname-enc" placeholder="Sehreuao">
          </div>
          <div id="encode-summary-wrap" style="display:flex;align-items:flex-end">
            <div id="encode-summary" style="font-size:11px;color:var(--gray-600);padding-bottom:8px;font-style:italic"></div>
          </div>
          <div><label>Pays *</label><select id="cb-country">${n}</select></div>
          <div><label>Club</label><select id="cb-club">${t}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${o}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${c}</select></div>
          <div><label>Note GK (0-10)</label><input id="cb-note-g" type="number" min="0" max="10" value="0"></div>
          <div><label>Note DEF (0-10)</label><input id="cb-note-d" type="number" min="0" max="10" value="0"></div>
          <div><label>Note MIL (0-10)</label><input id="cb-note-m" type="number" min="0" max="10" value="0"></div>
          <div><label>Note ATT (0-10)</label><input id="cb-note-a" type="number" min="0" max="10" value="0"></div>
        </div>
        <div style="font-size:11px;color:var(--gray-600);margin-top:8px">
          La note principale affichée est celle du poste principal. Ex: poste ATT → note_a est mise en avant.
        </div>
      </div>

      <!-- Rareté -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💎 Rareté (GDD §4.4)</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min (Pépite/Papyte)</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max (Pépite seulement)</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(d=>`
            <div style="background:${pe[d]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${d.toUpperCase()}
            </div>`).join("")}
        </div>
      </div>

      <!-- Portrait -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:4px">🎨 Portrait joueur</h3>
        <p style="font-size:12px;color:var(--gray-600);margin-bottom:12px">
          Sélectionne les paramètres → l'image est chargée depuis Supabase Storage<br>
          Convention: <code style="background:#f0f0f0;padding:1px 4px;border-radius:3px">{peau}-{cheveux}-{longueur}.jpg</code>
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div><label>Peau</label><select id="cb-skin">${i}</select></div>
          <div><label>Cheveux</label><select id="cb-hair">${a}</select></div>
          <div><label>Longueur</label><select id="cb-hair-length">${s}</select></div>
        </div>
        <div style="font-size:11px;color:var(--gray-600);margin-top:6px">
          📂 Uploader les images dans Supabase Storage > <code>assets/tetes/</code>
        </div>
      </div>

      <!-- Prix & Actions -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">💰 Prix & Enregistrement</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <div><label>Prix de vente directe (crédits)</label><input id="cb-price" type="number" min="0" value="30000"></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary" id="btn-save-player">💾 Enregistrer en BDD</button>
          <button class="btn btn-ghost" id="btn-reset">↺ Réinitialiser</button>
        </div>
      </div>
    </div>

    <!-- ── Preview droite ── -->
    <div style="position:sticky;top:16px">
      <div class="card-panel" style="text-align:center">
        <h3 style="font-size:13px;font-weight:600;margin-bottom:12px;color:var(--gray-600)">APERÇU EN TEMPS RÉEL</h3>
        <div id="card-preview" style="display:inline-block"></div>
        <div style="margin-top:12px;font-size:11px;color:var(--gray-600)">
          La carte se met à jour automatiquement<br>selon tes saisies.
        </div>
      </div>
    </div>
  </div>
  `}async function ue(e,{toast:n}){const{data:t,error:o}=await v.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${(t||[]).length} manager(s)</span>
    </div>
    <div class="card-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pseudo</th><th>Club</th><th>Crédits</th><th>Niv.</th>
              <th>V/N/D</th><th>TOP1/2/3</th><th>Admin</th><th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-tbody"></tbody>
        </table>
      </div>
    </div>
  `;const c=t||[];r(c),document.getElementById("search-users").addEventListener("input",i=>{const a=i.target.value.toLowerCase();r(c.filter(s=>{var d;return s.pseudo.toLowerCase().includes(a)||((d=s.club_name)==null?void 0:d.toLowerCase().includes(a))}))});function r(i){document.getElementById("users-tbody").innerHTML=i.map(a=>`
      <tr>
        <td><b>${a.pseudo}</b></td>
        <td style="font-size:12px">${a.club_name||"—"}</td>
        <td style="font-size:12px">${(a.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${a.level}</b></td>
        <td style="font-size:12px">${a.wins}/${a.draws}/${a.losses}</td>
        <td style="font-size:12px">🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</td>
        <td>
          ${a.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${a.id}" data-is-admin="${a.is_admin}">
            ${a.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${s?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:u}=await v.from("users").update({is_admin:s}).eq("id",a.dataset.toggleAdmin);u?n(u.message,"error"):(n("Rôle mis à jour ✅","success"),ue(e,{toast:n}))})})}}async function me(e,{toast:n}){const{data:t,error:o}=await v.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const c=t||[],r=c.filter(a=>a.status==="active").length,i=c.filter(a=>a.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${r}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${i}</div>
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
            ${c.map(a=>{var l,p,y,f;const s=(l=a.card)==null?void 0:l.player,d=s?`${s.firstname} ${s.surname_encoded}`:((p=a.card)==null?void 0:p.card_type)||"—",u={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${d}</b>${s?`<div style="font-size:10px;color:#999">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((y=a.seller)==null?void 0:y.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=a.buyer)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(a.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${u[a.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${a.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(a.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${a.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${a.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await v.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),me(e,{toast:n}))})})}async function Te(e,{toast:n}){e.innerHTML=`
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
      <p style="font-size:12px;color:var(--gray-600);margin-bottom:16px">Exporter/importer les joueurs en masse via CSV. L'encodage des noms est automatique si la colonne surname_encoded est vide.</p>
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
        <b>Joueurs :</b> firstname, surname_real, surname_encoded, country_code, club_encoded_name, job, job2, note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price<br><br>
        <b>Valeurs autorisées :</b><br>
        • job/job2 : GK, DEF, MIL, ATT<br>
        • rarity : normal, pepite, papyte, legende<br>
        • skin : blanc, metisse, typ, noir<br>
        • hair : blond, marron, noir, chauve<br>
        • hair_length : rase, court, milong, long<br><br>
        💡 Le séparateur est la virgule. Première ligne = en-têtes. Si surname_encoded est vide, il est calculé automatiquement.
      </div>
    </div>
  </div>
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{M("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{M("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:o}=await v.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;t.forEach(r=>{c+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(re).join(",")+`
`}),M("clubs_export.csv",c),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:o}=await v.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(r=>{var i;c+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((i=r.clubs)==null?void 0:i.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(re).join(",")+`
`}),M("players_export.csv",c),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),i=se(r);if(i.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let a=0,s=0;const d=[];for(const u of i){if(!u.real_name||!u.encoded_name||!u.country_code){s++,d.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const l={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:p}=await v.from("clubs").upsert(l,{onConflict:"encoded_name"});p?(s++,d.push(`${u.encoded_name}: ${p.message}`)):a++}c.innerHTML=`<div style="color:var(--green)">✅ ${a} clubs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,n(`${a} clubs importés`,"success")}catch(r){c.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),i=se(r);if(i.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:a}=await v.from("clubs").select("id,encoded_name"),s={};(a||[]).forEach(m=>{s[m.encoded_name.toUpperCase()]=m.id});let d=0,u=0;const l=[],p=["GK","DEF","MIL","ATT"],y=["normal","pepite","papyte","legende"],f=["blanc","metisse","typ","noir"],h=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const m of i){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){u++,l.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!p.includes(m.job)){u++,l.push(`${m.firstname}: job invalide "${m.job}"`);continue}const k=m.club_encoded_name&&s[m.club_encoded_name.toUpperCase()]||null,g={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||T(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:k,job:m.job,job2:p.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:y.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:f.includes(m.skin)?m.skin:"blanc",hair:h.includes(m.hair)?m.hair:"noir",hair_length:_.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:b}=await v.from("players").insert(g);b?(u++,l.push(`${m.firstname} ${m.surname_real}: ${b.message}`)):d++}c.innerHTML=`<div style="color:var(--green)">✅ ${d} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,n(`${d} joueurs importés`,"success")}catch(r){c.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""})}function re(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function M(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(t),c=document.createElement("a");c.href=o,c.download=e,c.click(),URL.revokeObjectURL(o)}function se(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(i=>i.trim());if(n.length<2)return[];const t=n[0],o=t.split(";").length>t.split(",").length?";":",",c=le(t,o).map(i=>i.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let i=1;i<n.length;i++){if(!n[i].trim())continue;const a=le(n[i],o),s={};c.forEach((d,u)=>{s[d]=(a[u]||"").trim()}),!Object.values(s).every(d=>!d)&&r.push(s)}return r}function le(e,n=","){const t=[];let o="",c=!1;for(let r=0;r<e.length;r++){const i=e[r];c?i==='"'?e[r+1]==='"'?(o+='"',r++):c=!1:o+=i:i==='"'?c=!0:i===n?(t.push(o),o=""):o+=i}return t.push(o),t}const ze={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Se(e,{toast:n}){const t=Object.keys(F);let o=t[0];const{data:c}=await v.from("formation_links_overrides").select("formation, links"),r={};(c||[]).forEach(u=>{r[u.formation]=u.links});let i=new Set;function a(u,l){return[u,l].sort().join("-")}function s(u){const l=r[u]||F[u]||[];i=new Set(l.map(([p,y])=>a(p,y)))}s(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(u=>`<option value="${u}" ${u===o?"selected":""}>${u}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${i.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function d(){const u=ge[o]||{},l=X(o),p=320,y=400,f=22;function h(b){const x=u[b];return x?{x:x.x*p,y:x.y*y}:null}let _=`<svg width="${p}" height="${y}" viewBox="0 0 ${p} ${y}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([b,x],w)=>{const $=h(b),L=h(x);if(!$||!L)return;const E=a(b,x),A=i.has(E),z=A?"#3b82f6":"#999",S=A?.95:.35,R=A?4:3;_+=`<line x1="${$.x}" y1="${$.y}" x2="${L.x}" y2="${L.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${E}" style="cursor:pointer"/>`,_+=`<line x1="${$.x}" y1="${$.y}" x2="${L.x}" y2="${L.y}"
        stroke="${z}" stroke-width="${R}" stroke-dasharray="${A?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${E}"/>`});for(const b of Object.keys(u)){const x=h(b);if(!x)continue;const w=b.replace(/\d+/,""),$=ze[w]||"#555";_+=`<circle cx="${x.x}" cy="${x.y}" r="${f}" fill="${$}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${x.x}" y="${x.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${b}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const m=document.getElementById("links-list");m.innerHTML=l.map(([b,x])=>{const w=a(b,x),$=i.has(w);return`
        <button class="link-toggle" data-key="${w}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${$?"#3b82f6":"#ddd"};
          background:${$?"#eaf2ff":"#fafafa"};
          color:${$?"#1d4ed8":"#888"}">
          <span>${b} ↔ ${x}</span>
          <span>${$?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${i.size}/${l.length} actifs)`);function g(b){i.has(b)?i.delete(b):i.add(b),d()}e.querySelectorAll(".link-hit").forEach(b=>{b.addEventListener("click",()=>g(b.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(b=>{b.addEventListener("click",()=>g(b.dataset.key))})}d(),document.getElementById("formation-select").addEventListener("change",u=>{o=u.target.value,s(o),d()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=F[o]||[];i=new Set(u.map(([l,p])=>a(l,p))),d(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=X(o).filter(([y,f])=>i.has(a(y,f))),{error:p}=await v.from("formation_links_overrides").upsert({formation:o,links:l,updated_at:new Date().toISOString()});if(p){n(p.message,"error");return}r[o]=l,n(`Liens enregistrés pour ${o} (${l.length} actifs)`,"success")})}const Re=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"game_helper",label:"Game Helper"}],Me=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pépite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"légende",label:"Légende"}],Ne=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Pe(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await v.from("booster_configs").select("*").order("sort_order");let t=null,o=[],c=null;const r=()=>window.innerWidth<700;async function i(){if(!t){o=[];return}if(t!==c){const{data:l}=await v.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");o=l||[],c=t}}function a(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===t?"#f0f7f0":"#fff"}">
        ${l.image_url?`<img src="/manager-wars/icons/${l.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</div>
          <div style="font-size:11px;color:#888">
            ${l.price_type==="credits"?(l.price_credits||0)+" cr.":l.price_type==="pub"?"Pub":"Gratuit"}
            · ${l.card_count||5} cartes · ${l.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${l.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const l=t?(n||[]).find(f=>f.id===t):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const p=o.reduce((f,h)=>f+Number(h.percentage||0),0),y=Math.abs(p-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
          ${l.image_url?`<img src="/manager-wars/icons/${l.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Ne.map(f=>`<option value="${f.value}" ${l.price_type===f.value?"selected":""}>${f.label}</option>`).join("")}
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
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${y?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${p.toFixed(1)}% ${y?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((f,h)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${h}">
            <select class="rate-type" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Re.map(_=>`<option value="${_.value}" ${f.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${h}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Me.map(_=>`<option value="${_.value}" ${(f.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${h}" type="number" min="1" max="10" value="${f.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${h}" type="number" min="1" max="10" value="${f.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
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
    </div>`}async function d(l=!1){l||await i();const p=!t&&r(),y=t&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||p||!t?a():""}
      ${!r()||y?s():""}
    </div>`,u()}function u(){var p,y,f,h,_,m,k;const l=g=>e.querySelector(g);e.querySelectorAll(".booster-row").forEach(g=>{g.addEventListener("click",b=>{b.target.closest(".btn-delete")||(t=g.dataset.id,c=null,d())})}),(p=l("#btn-back"))==null||p.addEventListener("click",()=>{t=null,d()}),(y=l("#btn-new"))==null||y.addEventListener("click",async()=>{const g=prompt("Nom du nouveau booster :");if(!(g!=null&&g.trim()))return;const{data:b,error:x}=await v.from("booster_configs").insert({name:g.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(x){alert(x.message);return}n.push(b),t=b.id,c=null,d()}),e.querySelectorAll(".btn-delete").forEach(g=>{g.addEventListener("click",async b=>{if(b.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await v.from("booster_configs").delete().eq("id",g.dataset.id);const x=n.findIndex(w=>w.id===g.dataset.id);x>-1&&n.splice(x,1),t===g.dataset.id&&(t=null,c=null),d()})}),(f=l("#btn-cancel"))==null||f.addEventListener("click",()=>{t=null,d()}),(h=l("#f-price-type"))==null||h.addEventListener("change",g=>{const b=l("#credits-field");b&&(b.style.opacity=g.target.value!=="credits"?"0.4":"1")}),(_=l("#btn-pick-icon"))==null||_.addEventListener("click",async()=>{var b;const g=l("#icon-picker-grid");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const w=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(w)?w.filter(E=>E.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(E.name)):[];if(!$.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((b=l("#f-image-url"))==null?void 0:b.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(E=>`
          <div class="icon-pick-item" data-name="${E.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${E.name===L?"#1A6B3C":"#ddd"};background:${E.name===L?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${E.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".icon-pick-item").forEach(E=>{E.addEventListener("click",()=>{const A=l("#f-image-url");A&&(A.value=E.dataset.name),g.style.display="none"})})}catch(x){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${x.message}</div>`}}}),(m=l("#btn-add-rate"))==null||m.addEventListener("click",()=>{o.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:1,note_max:10,percentage:10,sort_order:o.length}),d(!0)}),e.querySelectorAll(".btn-del-rate").forEach(g=>{g.addEventListener("click",()=>{o.splice(Number(g.dataset.idx),1),d(!0)})}),(k=l("#btn-save"))==null||k.addEventListener("click",async()=>{var L,E,A,z,S,R,H,G,V;const g=(n||[]).find(I=>I.id===t);if(!g)return;const b=[];e.querySelectorAll("[data-rate-idx]").forEach(I=>{var K,J,Y,W,Q;const O=Number(I.dataset.rateIdx);b.push({booster_id:t,card_type:((K=I.querySelector(".rate-type"))==null?void 0:K.value)||"player",rarity:((J=I.querySelector(".rate-rarity"))==null?void 0:J.value)||null,note_min:Number((Y=I.querySelector(".rate-note-min"))==null?void 0:Y.value)||null,note_max:Number((W=I.querySelector(".rate-note-max"))==null?void 0:W.value)||null,percentage:Number((Q=I.querySelector(".rate-pct"))==null?void 0:Q.value)||0,sort_order:O});const B=b[b.length-1];B.rarity||(B.rarity=null),B.note_min||(B.note_min=null),B.note_max||(B.note_max=null)});const x=b.reduce((I,O)=>I+O.percentage,0);if(b.length&&Math.abs(x-100)>.5){alert(`La somme doit faire 100% (actuellement ${x.toFixed(1)}%)`);return}const w={name:((E=(L=l("#f-name"))==null?void 0:L.value)==null?void 0:E.trim())||g.name,image_url:((z=(A=l("#f-image-url"))==null?void 0:A.value)==null?void 0:z.trim())||null,price_type:(S=l("#f-price-type"))==null?void 0:S.value,price_credits:Number((R=l("#f-price-credits"))==null?void 0:R.value)||0,card_count:Number((H=l("#f-card-count"))==null?void 0:H.value)||5,is_active:((G=l("#f-active"))==null?void 0:G.checked)??g.is_active,sort_order:Number((V=l("#f-sort"))==null?void 0:V.value)||0},{error:$}=await v.from("booster_configs").update(w).eq("id",t);if($){alert($.message);return}if(Object.assign(g,w),await v.from("booster_drop_rates").delete().eq("booster_id",t),b.length){const{error:I}=await v.from("booster_drop_rates").insert(b);if(I){alert(I.message);return}}o=b,c=t,alert("✅ Booster enregistré !"),d(!0)})}d()}function De(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Oe(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function q(){document.getElementById("modal-overlay").classList.add("hidden")}const de={dashboard:{title:"Dashboard",fn:fe},players:{title:"Joueurs & Cartes",fn:he},clubs:{title:"Clubs",fn:_e},"card-builder":{title:"Card Builder",fn:Ae},users:{title:"Managers",fn:ue},market:{title:"Marché des transferts",fn:me},"import-export":{title:"Import / Export CSV",fn:Te},formations:{title:"Formations & Liens",fn:Se},"boosters-config":{title:"Boosters",fn:Pe}};async function U(e){document.querySelectorAll(".admin-sidebar nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===e)});const n=de[e]||de.dashboard;document.getElementById("page-title").textContent=n.title;const t=document.getElementById("page-content");t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(t,{toast:De,openModal:Oe,closeModal:q,navigate:U})}catch(o){t.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${o.message}</div>`,console.error(o)}}async function Fe(){const{data:{session:e}}=await v.auth.getSession();e&&await ce(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),t=document.getElementById("auth-password").value,o=document.getElementById("auth-error");if(o.textContent="",!n||!t){o.textContent="Remplissez tous les champs.";return}const{data:c,error:r}=await v.auth.signInWithPassword({email:n,password:t});if(r){o.textContent=r.message;return}await ce(c.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",q),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&q()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),U(n.dataset.page)})})}async function ce(e){const{data:n,error:t}=await v.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(t||!n){o.textContent="Profil introuvable.";return}if(!n.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await v.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,U("dashboard")}Fe();
