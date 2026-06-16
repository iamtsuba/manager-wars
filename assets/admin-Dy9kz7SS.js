import{s as x,g as fe,F as Y,a as ee,b as ve}from"./formation-links-CDBKB_z4.js";async function xe(e){const[{count:n},{count:t},{count:o},{count:u},{count:s}]=await Promise.all([x.from("players").select("*",{count:"exact",head:!0}),x.from("clubs").select("*",{count:"exact",head:!0}),x.from("users").select("*",{count:"exact",head:!0}),x.from("cards").select("*",{count:"exact",head:!0}),x.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${U("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${U("🏟️","Clubs",t??"–","#D4A017")}
      ${U("👥","Managers",o??"–","#7a28b8")}
      ${U("📦","Cartes possédées",u??"–","#2a8f52")}
      ${U("⚽","Matchs joués",s??"–","#bb2020")}
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
  `,window.adminNav=i=>{var r;(r=document.querySelector(`[data-page="${i}"]`))==null||r.click()}}function U(e,n,t,o){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${o}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const te={ATT:"#1A6B3C",MIL:"#D4A017",DEF:"#bb2020",GK:"#111111"},me={normal:"#cccccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ye={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",MA:"MAROC",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE",MA:"MAROC"};function ne(e,n,t=52){const o=t===52,u=o?"26,3 31.5,18 48,18 35,29 39.5,46 26,36 12.5,46 17,29 4,18 20.5,18":"16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11",s=o?26:16,i=o?32:20,r=o?16:9,l=o?50:31;return`<svg width="${t}" height="${l}" viewBox="0 0 ${t} ${l}" style="display:block">
    <polygon points="${u}" fill="${e}" stroke="#0005" stroke-width="${o?2:1.5}"/>
    <text x="${s}" y="${i}" text-anchor="middle" font-size="${r}" font-weight="900"
      fill="white" font-family="Arial Black,Arial">${n}</text>
  </svg>`}function he(e,n={}){const{size:t="md",showNotes:o=!1,portraitUrl:u=null,clubLogoUrl:s=null}=n,i=e.rarity||"normal",r=me[i],l=e.job||"ATT",c=e.job2,g=e.current_note??(l==="ATT"?e.note_a:l==="MIL"?e.note_m:l==="DEF"?e.note_d:e.note_g),d=c?c==="ATT"?e.note_a:c==="MIL"?e.note_m:c==="DEF"?e.note_d:e.note_g:null,a=te[l],v=c?te[c]:null,m=e.country_code||"",y=ye[m]||m,_=t==="sm"?120:160,p=u?`<img src="${u}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block">`:'<div style="width:100%;height:100%;background:#c5d8ec;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>',w=s?`<img src="${s}" alt="" class="mw-club-logo">`:`<div class="mw-club-badge">${e.club_encoded_name||"CLUB"}</div>`,b=i==="legende"?'<div style="background:#f5c518;color:#7a5800;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">LÉGENDE</div>':i==="pepite"?'<div style="background:#D4A017;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PÉPITE</div>':i==="papyte"?'<div style="background:#909090;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PAPYTE</div>':w;return`<div class="mw-card" style="background:${r};width:${_}px;${t==="sm"?"transform:scale(0.75);transform-origin:top left;":""}">
    <div class="mw-inner" style="${i!=="normal"?`border:3px solid ${r};border-radius:8px`:""}">
      <div class="mw-name">
        <div class="mw-firstname">${e.firstname||""}</div>
        <div class="mw-lastname" style="font-size:${_===120?"13px":"16px"}">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div class="mw-stars">
        <div class="mw-band" style="background:${a}"></div>
        ${ne(a,g,52)}
        ${c&&v?ne(v,d,32):""}
      </div>
      <div class="mw-portrait" style="height:${_===120?"88px":"116px"}">
        ${p}
      </div>
      <div class="mw-footer">
        <div class="mw-flag">
          <img src="https://flagsapi.com/${m}/flat/64.png" alt="${y}">
        </div>
        <div class="mw-country">${y}</div>
        ${i==="normal"?w:b}
      </div>
      ${o?`<div style="background:#e8e0cc;padding:4px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;font-size:9px">
        <div style="color:#555">GK <b style="color:#111">${e.note_g}</b></div>
        <div style="color:#555">DEF <b style="color:#111">${e.note_d}</b></div>
        <div style="color:#555">MIL <b style="color:#111">${e.note_m}</b></div>
        <div style="color:#555">ATT <b style="color:#111">${e.note_a}</b></div>
      </div>`:""}
    </div>
  </div>`}function G(e){const n={A:"E",E:"I",I:"O",O:"U",U:"A",a:"e",e:"i",i:"o",o:"u",u:"a"};return(e||"").replace(/[AEIOUaeiou]/g,t=>n[t]||t)}const ie={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},_e={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function $e(e,n){await V(e,n)}async function V(e,n){const{toast:t,openModal:o,closeModal:u}=n,[{data:s,error:i},{data:r}]=await Promise.all([x.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),x.from("clubs").select("id,encoded_name").order("encoded_name")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const l={};(r||[]).forEach(d=>{l[d.id]=d.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(ie).map(([d,a])=>`<option value="${d}">${a}</option>`).join("")}
        </select>
        <select id="filter-job" style="width:120px">
          <option value="">Tous postes</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <span style="font-size:13px;color:var(--gray-600);align-self:center" id="count-label">${s.length} joueur(s)</span>
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
  `,c(s);function c(d){document.getElementById("count-label").textContent=`${d.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=d.map(a=>{var v;return`
      <tr>
        <td>
          <div style="font-weight:600">${a.firstname} ${a.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${a.firstname} ${a.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:16px;vertical-align:middle"> ${a.country_code}
        </td>
        <td style="font-size:12px">${((v=a.clubs)==null?void 0:v.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${a.job==="ATT"?"#1A6B3C":a.job==="MIL"?"#D4A017":a.job==="DEF"?"#bb2020":"#111"}">
            ${a.job}
          </span>
          ${a.job2?`<span style="font-size:11px;color:#aaa"> / ${a.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${a.note_g} / ${a.note_d} / ${a.note_m} / ${a.note_a}
        </td>
        <td>
          <span style="background:${_e[a.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${ie[a.rarity]||a.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const v=s.find(m=>m.id===a.dataset.edit);oe(v,r||[],{toast:t,openModal:o,closeModal:u,reload:()=>V(e,n)})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:v}=await x.from("players").delete().eq("id",a.dataset.del);v?t(v.message,"error"):(t("Joueur supprimé","success"),V(e,n))})})}function g(){const d=document.getElementById("search-players").value.toLowerCase(),a=document.getElementById("filter-rarity").value,v=document.getElementById("filter-job").value;c(s.filter(m=>(!d||`${m.firstname} ${m.surname_encoded} ${m.surname_real}`.toLowerCase().includes(d))&&(!a||m.rarity===a)&&(!v||m.job===v)))}document.getElementById("search-players").addEventListener("input",g),document.getElementById("filter-rarity").addEventListener("change",g),document.getElementById("filter-job").addEventListener("change",g),document.getElementById("add-player-btn").addEventListener("click",()=>{oe(null,r||[],{toast:t,openModal:o,closeModal:u,reload:()=>V(e,n)})})}function oe(e,n,{toast:t,openModal:o,closeModal:u,reload:s}){const i=!!e,r='<option value="">— Club —</option>'+n.map(l=>`<option value="${l.id}" ${(e==null?void 0:e.club_id)===l.id?"selected":""}>${l.encoded_name}</option>`).join("");o(i?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(l=>`<option value="${l}" ${(e==null?void 0:e.country_code)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${r}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job2)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(l=>`<option value="${l}" ${(e==null?void 0:e.rarity)===l?"selected":""}>${l}</option>`).join("")}
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
          ${["blanc","metisse","typ","noir"].map(l=>`<option value="${l}" ${(e==null?void 0:e.skin)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(l=>`<option value="${l}" ${(e==null?void 0:e.hair)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(l=>`<option value="${l}" ${(e==null?void 0:e.hair_length)===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${i?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",u),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=G(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const l={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!l.firstname||!l.surname_real||!l.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:c}=i?await x.from("players").update({...l,updated_at:new Date().toISOString()}).eq("id",e.id):await x.from("players").insert(l);if(c){t(c.message,"error");return}t(i?"Joueur modifié ✅":"Joueur créé ✅","success"),u(),s()})}let K=[];async function we(e,{toast:n,openModal:t,closeModal:o}){await J(e,{toast:n,openModal:t,closeModal:o})}async function J(e,n){const{data:t,error:o}=await x.from("clubs").select("*").order("encoded_name");if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}K=t||[],Ee(e,n)}function Ee(e,{toast:n,openModal:t,closeModal:o}){e.innerHTML=`
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
  `,u(K),document.getElementById("search-clubs").addEventListener("input",s=>{const i=s.target.value.toLowerCase();u(K.filter(r=>r.encoded_name.toLowerCase().includes(i)||r.real_name.toLowerCase().includes(i)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{ae(null,{toast:n,openModal:t,closeModal:o,reload:()=>J(e,{toast:n,openModal:t,closeModal:o})})});function u(s){document.getElementById("clubs-tbody").innerHTML=s.map(i=>`
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
    `).join(""),document.querySelectorAll("[data-edit]").forEach(i=>{i.addEventListener("click",()=>{const r=K.find(l=>l.id===i.dataset.edit);ae(r,{toast:n,openModal:t,closeModal:o,reload:()=>J(e,{toast:n,openModal:t,closeModal:o})})})}),document.querySelectorAll("[data-del]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:r}=await x.from("clubs").delete().eq("id",i.dataset.del);r?n(r.message,"error"):(n("Club supprimé","success"),J(e,{toast:n,openModal:t,closeModal:o}))})})}}function ae(e,{toast:n,openModal:t,closeModal:o,reload:u}){const s=!!e;t(s?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:12px">
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
     <button class="btn btn-primary" id="m-save">${s?"Enregistrer":"Créer"}</button>`),document.getElementById("m-cancel").addEventListener("click",o),document.getElementById("auto-encode").addEventListener("click",()=>{const i=document.getElementById("m-real").value,r=i.split(" ")[0]||i;document.getElementById("m-encoded").value=r.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const i=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const r=i.split(" ")[0]||i;document.getElementById("m-encoded").value=r.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const i={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null};if(!i.real_name||!i.encoded_name||!i.country_code){n("Remplissez tous les champs obligatoires","error");return}const{error:r}=s?await x.from("clubs").update(i).eq("id",e.id):await x.from("clubs").insert(i);if(r){n(r.message,"error");return}n(s?"Club modifié":"Club créé","success"),o(),u()})}const ke=["blanc","metisse","typ","noir"],Ie=["blond","marron","noir","chauve"],Le=["rase","court","milong","long"],Ae=["normal","pepite","papyte","legende"],re=["GK","DEF","MIL","ATT"],Te=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];async function ze(e,{toast:n}){const{data:t}=await x.from("clubs").select("id,encoded_name,logo_url").order("encoded_name");e.innerHTML=Be(t||[]),Ce(e,t||[],n),N()}function se(){var o;const e=((o=document.getElementById("cb-surname-real"))==null?void 0:o.value)||"",n=G(e),t=document.getElementById("cb-surname-enc");t&&(t.value=n)}function N(){var g,d,a,v;const e=m=>{var y;return((y=document.getElementById(m))==null?void 0:y.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||G(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((d=(g=document.getElementById("cb-club"))==null?void 0:g.selectedOptions[0])==null?void 0:d.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity"),skin:e("cb-skin"),hair:e("cb-hair"),hair_length:e("cb-hair-length")},t=fe(n.skin,n.hair,n.hair_length);e("cb-club");const o=document.getElementById("cb-club"),u=((v=(a=o==null?void 0:o.selectedOptions[0])==null?void 0:a.dataset)==null?void 0:v.logo)||null,s=he(n,{portraitUrl:t,clubLogoUrl:u,showNotes:!0}),i=document.getElementById("card-preview");i&&(i.innerHTML=s);const r=e("cb-surname-real"),l=n.surname_encoded,c=document.getElementById("encode-summary");c&&r&&(c.textContent=`${e("cb-firstname")} ${r} → ${e("cb-firstname")} ${l}`)}function Ce(e,n,t){var o,u,s,i;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",N),r.addEventListener("change",N)}),(o=document.getElementById("cb-surname-real"))==null||o.addEventListener("input",()=>{se(),N()}),(u=document.getElementById("btn-encode"))==null||u.addEventListener("click",()=>{se(),N()}),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",async()=>{await je(n,t)}),(i=document.getElementById("btn-reset"))==null||i.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),N()})}async function je(e,n){const t=l=>{var c;return((c=document.getElementById(l))==null?void 0:c.value)||""},o=t("cb-surname-real").trim(),u=t("cb-surname-enc").trim()||G(o);if(!t("cb-firstname")||!o||!t("cb-country")||!t("cb-job")){n("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}const s=t("cb-club")||null,i={firstname:t("cb-firstname").trim(),surname_real:o,surname_encoded:u,country_code:t("cb-country"),club_id:s||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,skin:t("cb-skin")||"blanc",hair:t("cb-hair")||"noir",hair_length:t("cb-hair-length")||"court",sell_price:parseInt(t("cb-price"))||0},{error:r}=await x.from("players").insert(i);if(r){n("Erreur: "+r.message,"error");return}n(`✅ Joueur "${i.firstname} ${i.surname_encoded}" enregistré !`,"success")}function Be(e){const n=Te.map(([c,g])=>`<option value="${c}">${g} (${c})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(c=>`<option value="${c.id}" data-logo="${c.logo_url||""}">${c.encoded_name}</option>`).join(""),o=re.map(c=>`<option value="${c}">${c}</option>`).join(""),u='<option value="">Aucun</option>'+re.map(c=>`<option value="${c}">${c}</option>`).join(""),s=Ae.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),i=ke.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),r=Ie.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),l=Le.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${u}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${s}</select></div>
          <div><label>Note min (Pépite/Papyte)</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max (Pépite seulement)</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(c=>`
            <div style="background:${me[c]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${c.toUpperCase()}
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
          <div><label>Cheveux</label><select id="cb-hair">${r}</select></div>
          <div><label>Longueur</label><select id="cb-hair-length">${l}</select></div>
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
  `}async function ge(e,{toast:n}){const{data:t,error:o}=await x.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}e.innerHTML=`
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
  `;const u=t||[];s(u),document.getElementById("search-users").addEventListener("input",i=>{const r=i.target.value.toLowerCase();s(u.filter(l=>{var c;return l.pseudo.toLowerCase().includes(r)||((c=l.club_name)==null?void 0:c.toLowerCase().includes(r))}))});function s(i){document.getElementById("users-tbody").innerHTML=i.map(r=>`
      <tr>
        <td><b>${r.pseudo}</b></td>
        <td style="font-size:12px">${r.club_name||"—"}</td>
        <td style="font-size:12px">${(r.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${r.level}</b></td>
        <td style="font-size:12px">${r.wins}/${r.draws}/${r.losses}</td>
        <td style="font-size:12px">🥇${r.trophies_top1} 🥈${r.trophies_top2} 🥉${r.trophies_top3}</td>
        <td>
          ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
            ${r.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const l=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${l?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:g}=await x.from("users").update({is_admin:l}).eq("id",r.dataset.toggleAdmin);g?n(g.message,"error"):(n("Rôle mis à jour ✅","success"),ge(e,{toast:n}))})})}}async function be(e,{toast:n}){const{data:t,error:o}=await x.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const u=t||[],s=u.filter(r=>r.status==="active").length,i=u.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${s}</div>
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
            ${u.map(r=>{var d,a,v,m;const l=(d=r.card)==null?void 0:d.player,c=l?`${l.firstname} ${l.surname_encoded}`:((a=r.card)==null?void 0:a.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${c}</b>${l?`<div style="font-size:10px;color:#999">${l.rarity} · ${l.job}</div>`:""}</td>
                <td style="font-size:12px">${((v=r.seller)==null?void 0:v.pseudo)||"—"}</td>
                <td style="font-size:12px">${((m=r.buyer)==null?void 0:m.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:l}=await x.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);l?n(l.message,"error"):(n("Annonce annulée","success"),be(e,{toast:n}))})})}async function Se(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{H("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{H("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:o}=await x.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;t.forEach(s=>{u+=[s.real_name,s.encoded_name,s.country_code,s.logo_url||""].map(le).join(",")+`
`}),H("clubs_export.csv",u),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:o}=await x.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(s=>{var i;u+=[s.firstname,s.surname_real,s.surname_encoded,s.country_code,((i=s.clubs)==null?void 0:i.encoded_name)||"",s.job,s.job2||"",s.note_g,s.note_d,s.note_m,s.note_a,s.rarity,s.note_min??"",s.note_max??"",s.skin,s.hair,s.hair_length,s.sell_price].map(le).join(",")+`
`}),H("players_export.csv",u),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await o.text(),i=de(s);if(i.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,l=0;const c=[];for(const g of i){if(!g.real_name||!g.encoded_name||!g.country_code){l++,c.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const d={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:a}=await x.from("clubs").upsert(d,{onConflict:"encoded_name"});a?(l++,c.push(`${g.encoded_name}: ${a.message}`)):r++}u.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${l>0?`<div style="color:#c0392b">❌ ${l} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} clubs importés`,"success")}catch(s){u.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await o.text(),i=de(s);if(i.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await x.from("clubs").select("id,encoded_name"),l={};(r||[]).forEach(p=>{l[p.encoded_name.toUpperCase()]=p.id});let c=0,g=0;const d=[],a=["GK","DEF","MIL","ATT"],v=["normal","pepite","papyte","legende"],m=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const p of i){if(!p.firstname||!p.surname_real||!p.country_code||!p.job){g++,d.push(`Ligne ignorée (champs requis manquants): ${p.firstname||"?"}`);continue}if(!a.includes(p.job)){g++,d.push(`${p.firstname}: job invalide "${p.job}"`);continue}const w=p.club_encoded_name&&l[p.club_encoded_name.toUpperCase()]||null,b={firstname:p.firstname,surname_real:p.surname_real,surname_encoded:p.surname_encoded||G(p.surname_real),country_code:p.country_code.toUpperCase().slice(0,2),club_id:w,job:p.job,job2:a.includes(p.job2)?p.job2:null,note_g:parseInt(p.note_g)||0,note_d:parseInt(p.note_d)||0,note_m:parseInt(p.note_m)||0,note_a:parseInt(p.note_a)||0,rarity:v.includes(p.rarity)?p.rarity:"normal",note_min:p.note_min!==""&&p.note_min!=null?parseInt(p.note_min):null,note_max:p.note_max!==""&&p.note_max!=null?parseInt(p.note_max):null,skin:m.includes(p.skin)?p.skin:"blanc",hair:y.includes(p.hair)?p.hair:"noir",hair_length:_.includes(p.hair_length)?p.hair_length:"court",sell_price:parseInt(p.sell_price)||0},{error:f}=await x.from("players").insert(b);f?(g++,d.push(`${p.firstname} ${p.surname_real}: ${f.message}`)):c++}u.innerHTML=`<div style="color:var(--green)">✅ ${c} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,n(`${c} joueurs importés`,"success")}catch(s){u.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}t.target.value=""})}function le(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function H(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(t),u=document.createElement("a");u.href=o,u.download=e,u.click(),URL.revokeObjectURL(o)}function de(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(i=>i.trim());if(n.length<2)return[];const t=n[0],o=t.split(";").length>t.split(",").length?";":",",u=ce(t,o).map(i=>i.trim().replace(/^\uFEFF/,"").toLowerCase()),s=[];for(let i=1;i<n.length;i++){if(!n[i].trim())continue;const r=ce(n[i],o),l={};u.forEach((c,g)=>{l[c]=(r[g]||"").trim()}),!Object.values(l).every(c=>!c)&&s.push(l)}return s}function ce(e,n=","){const t=[];let o="",u=!1;for(let s=0;s<e.length;s++){const i=e[s];u?i==='"'?e[s+1]==='"'?(o+='"',s++):u=!1:o+=i:i==='"'?u=!0:i===n?(t.push(o),o=""):o+=i}return t.push(o),t}const Re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Me(e,{toast:n}){const t=Object.keys(Y);let o=t[0];const{data:u}=await x.from("formation_links_overrides").select("formation, links"),s={};(u||[]).forEach(g=>{s[g.formation]=g.links});let i=new Set;function r(g,d){return[g,d].sort().join("-")}function l(g){const d=s[g]||Y[g]||[];i=new Set(d.map(([a,v])=>r(a,v)))}l(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(g=>`<option value="${g}" ${g===o?"selected":""}>${g}</option>`).join("")}
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
  `;function c(){const g=ve[o]||{},d=ee(o),a=320,v=400,m=22;function y(f){const h=g[f];return h?{x:h.x*a,y:h.y*v}:null}let _=`<svg width="${a}" height="${v}" viewBox="0 0 ${a} ${v}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;d.forEach(([f,h],k)=>{const $=y(f),I=y(h);if(!$||!I)return;const E=r(f,h),A=i.has(E),C=A?"#3b82f6":"#999",j=A?.95:.35,B=A?4:3;_+=`<line x1="${$.x}" y1="${$.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${E}" style="cursor:pointer"/>`,_+=`<line x1="${$.x}" y1="${$.y}" x2="${I.x}" y2="${I.y}"
        stroke="${C}" stroke-width="${B}" stroke-dasharray="${A?"none":"4,3"}"
        opacity="${j}" pointer-events="none" data-line-key="${E}"/>`});for(const f of Object.keys(g)){const h=y(f);if(!h)continue;const k=f.replace(/\d+/,""),$=Re[k]||"#555";_+=`<circle cx="${h.x}" cy="${h.y}" r="${m}" fill="${$}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${h.x}" y="${h.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${f}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const p=document.getElementById("links-list");p.innerHTML=d.map(([f,h])=>{const k=r(f,h),$=i.has(k);return`
        <button class="link-toggle" data-key="${k}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${$?"#3b82f6":"#ddd"};
          background:${$?"#eaf2ff":"#fafafa"};
          color:${$?"#1d4ed8":"#888"}">
          <span>${f} ↔ ${h}</span>
          <span>${$?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${i.size}/${d.length} actifs)`);function b(f){i.has(f)?i.delete(f):i.add(f),c()}e.querySelectorAll(".link-hit").forEach(f=>{f.addEventListener("click",()=>b(f.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(f=>{f.addEventListener("click",()=>b(f.dataset.key))})}c(),document.getElementById("formation-select").addEventListener("change",g=>{o=g.target.value,l(o),c()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=Y[o]||[];i=new Set(g.map(([d,a])=>r(d,a))),c(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const d=ee(o).filter(([v,m])=>i.has(r(v,m))),{error:a}=await x.from("formation_links_overrides").upsert({formation:o,links:d,updated_at:new Date().toISOString()});if(a){n(a.message,"error");return}s[o]=d,n(`Liens enregistrés pour ${o} (${d.length} actifs)`,"success")})}const Ne=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],Pe=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pépite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"légende",label:"Légende"}],Oe=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function De(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await x.from("booster_configs").select("*").order("sort_order");let t=null,o=[],u=null;const s=()=>window.innerWidth<700;async function i(){if(!t){o=[];return}if(t!==u){const{data:d}=await x.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");o=d||[],u=t}}function r(){return`
    <div id="booster-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(d=>`
      <div class="booster-row" data-id="${d.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===t?"#f0f7f0":"#fff"}">
        ${d.image_url?`<img src="/manager-wars/icons/${d.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
          <div style="font-size:11px;color:#888">
            ${d.price_type==="credits"?(d.price_credits||0)+" cr.":d.price_type==="pub"?"Pub":"Gratuit"}
            · ${d.card_count||5} cartes · ${d.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${d.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function l(){const d=t?(n||[]).find(m=>m.id===t):null;if(!d)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=o.reduce((m,y)=>m+Number(y.percentage||0),0),v=Math.abs(a-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${d.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${d.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${d.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${d.image_url?`<img src="/manager-wars/icons/${d.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Oe.map(m=>`<option value="${m.value}" ${d.price_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${d.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${d.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${d.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${d.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${v?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${v?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((m,y)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${y}">
            <select class="rate-type" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ne.map(_=>`<option value="${_.value}" ${m.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Pe.map(_=>`<option value="${_.value}" ${(m.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${y}" type="number" min="1" max="10" value="${m.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${y}" type="number" min="1" max="10" value="${m.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${y}" type="number" min="0.1" max="100" step="0.1" value="${m.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${y}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function c(d=!1){d||await i();const a=!t&&s(),v=t&&s();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||a||!t?r():""}
      ${!s()||v?l():""}
    </div>`,g()}function g(){var a,v,m,y,_,p,w;const d=b=>e.querySelector(b);e.querySelectorAll(".booster-row").forEach(b=>{b.addEventListener("click",f=>{f.target.closest(".btn-delete")||(t=b.dataset.id,u=null,c())})}),(a=d("#btn-back"))==null||a.addEventListener("click",()=>{t=null,c()}),(v=d("#btn-new"))==null||v.addEventListener("click",async()=>{const b=prompt("Nom du nouveau booster :");if(!(b!=null&&b.trim()))return;const{data:f,error:h}=await x.from("booster_configs").insert({name:b.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(h){alert(h.message);return}n.push(f),t=f.id,u=null,c()}),e.querySelectorAll(".btn-delete").forEach(b=>{b.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await x.from("booster_configs").delete().eq("id",b.dataset.id);const h=n.findIndex(k=>k.id===b.dataset.id);h>-1&&n.splice(h,1),t===b.dataset.id&&(t=null,u=null),c()})}),(m=d("#btn-cancel"))==null||m.addEventListener("click",()=>{t=null,c()}),(y=d("#f-price-type"))==null||y.addEventListener("change",b=>{const f=d("#credits-field");f&&(f.style.opacity=b.target.value!=="credits"?"0.4":"1")}),(_=d("#btn-pick-icon"))==null||_.addEventListener("click",async()=>{var f;const b=d("#icon-picker-grid");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const k=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),$=Array.isArray(k)?k.filter(E=>E.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(E.name)):[];if(!$.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const I=((f=d("#f-image-url"))==null?void 0:f.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${$.map(E=>`
          <div class="icon-pick-item" data-name="${E.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${E.name===I?"#1A6B3C":"#ddd"};background:${E.name===I?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${E.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".icon-pick-item").forEach(E=>{E.addEventListener("click",()=>{const A=d("#f-image-url");A&&(A.value=E.dataset.name),b.style.display="none"})})}catch(h){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${h.message}</div>`}}}),(p=d("#btn-add-rate"))==null||p.addEventListener("click",()=>{o.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:1,note_max:10,percentage:10,sort_order:o.length}),c(!0)}),e.querySelectorAll(".btn-del-rate").forEach(b=>{b.addEventListener("click",()=>{o.splice(Number(b.dataset.idx),1),c(!0)})}),(w=d("#btn-save"))==null||w.addEventListener("click",async()=>{var I,E,A,C,j,B,P,O,D;const b=(n||[]).find(L=>L.id===t);if(!b)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var F,z,q,X,Z;const M=Number(L.dataset.rateIdx);f.push({booster_id:t,card_type:((F=L.querySelector(".rate-type"))==null?void 0:F.value)||"player",rarity:((z=L.querySelector(".rate-rarity"))==null?void 0:z.value)||null,note_min:Number((q=L.querySelector(".rate-note-min"))==null?void 0:q.value)||null,note_max:Number((X=L.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Z=L.querySelector(".rate-pct"))==null?void 0:Z.value)||0,sort_order:M});const T=f[f.length-1];T.rarity||(T.rarity=null),T.note_min||(T.note_min=null),T.note_max||(T.note_max=null)});const h=f.reduce((L,M)=>L+M.percentage,0);if(f.length&&Math.abs(h-100)>.5){alert(`La somme doit faire 100% (actuellement ${h.toFixed(1)}%)`);return}const k={name:((E=(I=d("#f-name"))==null?void 0:I.value)==null?void 0:E.trim())||b.name,image_url:((C=(A=d("#f-image-url"))==null?void 0:A.value)==null?void 0:C.trim())||null,price_type:(j=d("#f-price-type"))==null?void 0:j.value,price_credits:Number((B=d("#f-price-credits"))==null?void 0:B.value)||0,card_count:Number((P=d("#f-card-count"))==null?void 0:P.value)||5,is_active:((O=d("#f-active"))==null?void 0:O.checked)??b.is_active,sort_order:Number((D=d("#f-sort"))==null?void 0:D.value)||0},{error:$}=await x.from("booster_configs").update(k).eq("id",t);if($){alert($.message);return}if(Object.assign(b,k),await x.from("booster_drop_rates").delete().eq("booster_id",t),f.length){const{error:L}=await x.from("booster_drop_rates").insert(f);if(L){alert(L.message);return}}o=f,u=t,alert("✅ Booster enregistré !"),c(!0)})}c()}const S=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],R=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function Fe(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await x.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const o=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],u=["GK","DEF","MIL","ATT"],s=()=>window.innerWidth<700,i=a=>e.querySelector(a);function r(a,v=130){if(!a)return"";const m=S.find(b=>b.value===a.gc_type)||S[0],y=R.find(b=>b.value===a.color)||R[0],_=Math.round(v*.55),p=Math.round(v*.15),w=Math.round(v*.3);return`<div style="width:${v}px;height:${Math.round(v*1.4)}px;border-radius:10px;border:3px solid ${y.hex};background:${m.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${y.hex}55;flex-shrink:0">
      <div style="height:${p}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(v/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${a.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(v*.3)}px">${m.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(v/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(a.effect||"").slice(0,60)}${(a.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function l(){return`
    <div id="gc-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(a=>{const v=S.find(y=>y.value===a.gc_type)||S[0],m=R.find(y=>y.value===a.color)||R[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${m.hex};background:${v.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:v.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${v.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function c(){const a=t?(n||[]).find(m=>m.id===t):null;if(!a)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const v=S.find(m=>m.value===a.gc_type)||S[0];return R.find(m=>m.value===a.color)||R[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${v.bg};border-radius:12px">
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
              ${S.map(m=>`<option value="${m.value}" ${a.gc_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${R.map(m=>`<option value="${m.value}" ${a.color===m.value?"selected":""}>${m.label}</option>`).join("")}
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
              ${o.map(m=>`<option value="${m.value}" ${(a.effect_type||"BOOST_STAT")===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const m=a.effect_params||{},y=o.find(_=>_.value===(a.effect_type||"BOOST_STAT"))||o[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${y.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${m.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${m.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(m.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${m.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${y.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${u.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${_}" ${!m.roles||m.roles.includes(_)?"checked":""}> ${_}
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
      ${!s()||!t?l():""}
      ${!s()||t?c():""}
    </div>`,d()}function d(){var a,v,m,y,_;e.querySelectorAll(".gc-row").forEach(p=>{p.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=p.dataset.id,g())})}),(a=i("#btn-gc-back"))==null||a.addEventListener("click",()=>{t=null,g()}),(v=i("#btn-cancel-gc"))==null||v.addEventListener("click",()=>{t=null,g()}),(m=i("#btn-new-gc"))==null||m.addEventListener("click",async()=>{const p=prompt("Nom de la carte Game Changer :");if(!(p!=null&&p.trim()))return;const{data:w,error:b}=await x.from("gc_definitions").insert({name:p.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(b){alert(b.message);return}n.push(w),t=w.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(p=>{p.addEventListener("click",async w=>{w.stopPropagation();const b=p.dataset.active!=="true";await x.from("gc_definitions").update({is_active:b}).eq("id",p.dataset.id);const f=n.find(h=>h.id===p.dataset.id);f&&(f.is_active=b),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(p=>{p.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await x.from("gc_definitions").delete().eq("id",p.dataset.id);const b=n.findIndex(f=>f.id===p.dataset.id);b>-1&&n.splice(b,1),t===p.dataset.id&&(t=null),g()})}),(y=i("#btn-pick-gc-icon"))==null||y.addEventListener("click",async()=>{var w;const p=i("#gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const f=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),h=Array.isArray(f)?f.filter($=>$.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test($.name)):[];if(!h.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const k=((w=i("#gc-image-url"))==null?void 0:w.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${h.map($=>`
          <div class="gc-icon-item" data-name="${$.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${$.name===k?"#7a28b8":"#ddd"};background:${$.name===k?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${$.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,p.querySelectorAll(".gc-icon-item").forEach($=>{$.addEventListener("click",()=>{const I=i("#gc-image-url");I&&(I.value=$.dataset.name),p.style.display="none"})})}catch(b){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${b.message}</div>`}}}),(_=i("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var $,I,E,A,C,j,B,P,O,D,L,M,T,F;const p=n.find(z=>z.id===t);if(!p)return;const w=o.find(z=>{var q;return z.value===(((q=i("#gc-effect-type"))==null?void 0:q.value)||"BOOST_STAT")})||o[0],b=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(z=>z.value):null,f={...w.hasValue?{value:Number(($=i("#gc-p-value"))==null?void 0:$.value)||2}:{},...w.hasCount?{count:Number((I=i("#gc-p-count"))==null?void 0:I.value)||1}:{},...w.hasTarget?{target:((E=i("#gc-p-target"))==null?void 0:E.value)||"home"}:{},...w.hasRoles?{roles:b!=null&&b.length?b:null}:{}},h={name:((C=(A=i("#gc-name"))==null?void 0:A.value)==null?void 0:C.trim())||p.name,effect:((B=(j=i("#gc-effect"))==null?void 0:j.value)==null?void 0:B.trim())||null,image_url:((O=(P=i("#gc-image-url"))==null?void 0:P.value)==null?void 0:O.trim())||null,gc_type:((D=i("#gc-type"))==null?void 0:D.value)||"game_changer",color:((L=i("#gc-color"))==null?void 0:L.value)||"purple",sort_order:Number((M=i("#gc-sort"))==null?void 0:M.value)||0,is_active:((T=i("#gc-active"))==null?void 0:T.checked)??p.is_active,effect_type:((F=i("#gc-effect-type"))==null?void 0:F.value)||"BOOST_STAT",effect_params:f},{error:k}=await x.from("gc_definitions").update(h).eq("id",t);if(k){alert(k.message);return}Object.assign(p,h),alert("✅ Carte enregistrée !"),g()})}g()}function qe(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Ue(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function W(){document.getElementById("modal-overlay").classList.add("hidden")}const pe={dashboard:{title:"Dashboard",fn:xe},players:{title:"Joueurs & Cartes",fn:$e},clubs:{title:"Clubs",fn:we},"card-builder":{title:"Card Builder",fn:ze},users:{title:"Managers",fn:ge},market:{title:"Marché des transferts",fn:be},"import-export":{title:"Import / Export CSV",fn:Se},formations:{title:"Formations & Liens",fn:Me},"boosters-config":{title:"Boosters",fn:De},"gc-cards":{title:"Game Changers",fn:Fe}};async function Q(e){document.querySelectorAll(".admin-sidebar nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===e)});const n=pe[e]||pe.dashboard;document.getElementById("page-title").textContent=n.title;const t=document.getElementById("page-content");t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(t,{toast:qe,openModal:Ue,closeModal:W,navigate:Q})}catch(o){t.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${o.message}</div>`,console.error(o)}}async function Ge(){const{data:{session:e}}=await x.auth.getSession();e&&await ue(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),t=document.getElementById("auth-password").value,o=document.getElementById("auth-error");if(o.textContent="",!n||!t){o.textContent="Remplissez tous les champs.";return}const{data:u,error:s}=await x.auth.signInWithPassword({email:n,password:t});if(s){o.textContent=s.message;return}await ue(u.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await x.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",W),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&W()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),Q(n.dataset.page)})})}async function ue(e){const{data:n,error:t}=await x.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(t||!n){o.textContent="Profil introuvable.";return}if(!n.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await x.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,Q("dashboard")}Ge();
