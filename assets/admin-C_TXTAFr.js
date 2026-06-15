import{s as v,g as ue,F as P,a as J,b as me}from"./formation-links-CDBKB_z4.js";async function be(e){const[{count:n},{count:t},{count:i},{count:c},{count:l}]=await Promise.all([v.from("players").select("*",{count:"exact",head:!0}),v.from("clubs").select("*",{count:"exact",head:!0}),v.from("users").select("*",{count:"exact",head:!0}),v.from("cards").select("*",{count:"exact",head:!0}),v.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${S("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${S("🏟️","Clubs",t??"–","#D4A017")}
      ${S("👥","Managers",i??"–","#7a28b8")}
      ${S("📦","Cartes possédées",c??"–","#2a8f52")}
      ${S("⚽","Matchs joués",l??"–","#bb2020")}
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
  `,window.adminNav=a=>{var o;(o=document.querySelector(`[data-page="${a}"]`))==null||o.click()}}function S(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const Y={ATT:"#1A6B3C",MIL:"#D4A017",DEF:"#bb2020",GK:"#111111"},se={normal:"#cccccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ge={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",MA:"MAROC",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE",MA:"MAROC"};function W(e,n,t=52){const i=t===52,c=i?"26,3 31.5,18 48,18 35,29 39.5,46 26,36 12.5,46 17,29 4,18 20.5,18":"16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11",l=i?26:16,a=i?32:20,o=i?16:9,s=i?50:31;return`<svg width="${t}" height="${s}" viewBox="0 0 ${t} ${s}" style="display:block">
    <polygon points="${c}" fill="${e}" stroke="#0005" stroke-width="${i?2:1.5}"/>
    <text x="${l}" y="${a}" text-anchor="middle" font-size="${o}" font-weight="900"
      fill="white" font-family="Arial Black,Arial">${n}</text>
  </svg>`}function ve(e,n={}){const{size:t="md",showNotes:i=!1,portraitUrl:c=null,clubLogoUrl:l=null}=n,a=e.rarity||"normal",o=se[a],s=e.job||"ATT",r=e.job2,d=e.current_note??(s==="ATT"?e.note_a:s==="MIL"?e.note_m:s==="DEF"?e.note_d:e.note_g),b=r?r==="ATT"?e.note_a:r==="MIL"?e.note_m:r==="DEF"?e.note_d:e.note_g:null,p=Y[s],u=r?Y[r]:null,g=e.country_code||"",y=ge[g]||g,x=t==="sm"?120:160,m=c?`<img src="${c}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block">`:'<div style="width:100%;height:100%;background:#c5d8ec;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>',w=l?`<img src="${l}" alt="" class="mw-club-logo">`:`<div class="mw-club-badge">${e.club_encoded_name||"CLUB"}</div>`,h=a==="legende"?'<div style="background:#f5c518;color:#7a5800;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">LÉGENDE</div>':a==="pepite"?'<div style="background:#D4A017;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PÉPITE</div>':a==="papyte"?'<div style="background:#909090;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PAPYTE</div>':w;return`<div class="mw-card" style="background:${o};width:${x}px;${t==="sm"?"transform:scale(0.75);transform-origin:top left;":""}">
    <div class="mw-inner" style="${a!=="normal"?`border:3px solid ${o};border-radius:8px`:""}">
      <div class="mw-name">
        <div class="mw-firstname">${e.firstname||""}</div>
        <div class="mw-lastname" style="font-size:${x===120?"13px":"16px"}">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div class="mw-stars">
        <div class="mw-band" style="background:${p}"></div>
        ${W(p,d,52)}
        ${r&&u?W(u,b,32):""}
      </div>
      <div class="mw-portrait" style="height:${x===120?"88px":"116px"}">
        ${m}
      </div>
      <div class="mw-footer">
        <div class="mw-flag">
          <img src="https://flagsapi.com/${g}/flat/64.png" alt="${y}">
        </div>
        <div class="mw-country">${y}</div>
        ${a==="normal"?w:h}
      </div>
      ${i?`<div style="background:#e8e0cc;padding:4px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;font-size:9px">
        <div style="color:#555">GK <b style="color:#111">${e.note_g}</b></div>
        <div style="color:#555">DEF <b style="color:#111">${e.note_d}</b></div>
        <div style="color:#555">MIL <b style="color:#111">${e.note_m}</b></div>
        <div style="color:#555">ATT <b style="color:#111">${e.note_a}</b></div>
      </div>`:""}
    </div>
  </div>`}function C(e){const n={A:"E",E:"I",I:"O",O:"U",U:"A",a:"e",e:"i",i:"o",o:"u",u:"a"};return(e||"").replace(/[AEIOUaeiou]/g,t=>n[t]||t)}const Q={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},fe={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function ye(e,n){await z(e,n)}async function z(e,n){const{toast:t,openModal:i,closeModal:c}=n,[{data:l,error:a},{data:o}]=await Promise.all([v.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),v.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const s={};(o||[]).forEach(b=>{s[b.id]=b.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(Q).map(([b,p])=>`<option value="${b}">${p}</option>`).join("")}
        </select>
        <select id="filter-job" style="width:120px">
          <option value="">Tous postes</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <span style="font-size:13px;color:var(--gray-600);align-self:center" id="count-label">${l.length} joueur(s)</span>
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
  `,r(l);function r(b){document.getElementById("count-label").textContent=`${b.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=b.map(p=>{var u;return`
      <tr>
        <td>
          <div style="font-weight:600">${p.firstname} ${p.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${p.firstname} ${p.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${p.country_code}/flat/32.png" alt="${p.country_code}" style="height:16px;vertical-align:middle"> ${p.country_code}
        </td>
        <td style="font-size:12px">${((u=p.clubs)==null?void 0:u.encoded_name)||"—"}</td>
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
          <span style="background:${fe[p.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${Q[p.rarity]||p.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${p.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${p.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(p=>{p.addEventListener("click",()=>{const u=l.find(g=>g.id===p.dataset.edit);X(u,o||[],{toast:t,openModal:i,closeModal:c,reload:()=>z(e,n)})})}),document.querySelectorAll("[data-del]").forEach(p=>{p.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:u}=await v.from("players").delete().eq("id",p.dataset.del);u?t(u.message,"error"):(t("Joueur supprimé","success"),z(e,n))})})}function d(){const b=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-rarity").value,u=document.getElementById("filter-job").value;r(l.filter(g=>(!b||`${g.firstname} ${g.surname_encoded} ${g.surname_real}`.toLowerCase().includes(b))&&(!p||g.rarity===p)&&(!u||g.job===u)))}document.getElementById("search-players").addEventListener("input",d),document.getElementById("filter-rarity").addEventListener("change",d),document.getElementById("filter-job").addEventListener("change",d),document.getElementById("add-player-btn").addEventListener("click",()=>{X(null,o||[],{toast:t,openModal:i,closeModal:c,reload:()=>z(e,n)})})}function X(e,n,{toast:t,openModal:i,closeModal:c,reload:l}){const a=!!e,o='<option value="">— Club —</option>'+n.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join("");i(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
      <div><label>Club</label><select id="pm-club">${o}</select></div>
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
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",c),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=C(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const s={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!s.firstname||!s.surname_real||!s.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:r}=a?await v.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await v.from("players").insert(s);if(r){t(r.message,"error");return}t(a?"Joueur modifié ✅":"Joueur créé ✅","success"),c(),l()})}let R=[];async function xe(e,{toast:n,openModal:t,closeModal:i}){await M(e,{toast:n,openModal:t,closeModal:i})}async function M(e,n){const{data:t,error:i}=await v.from("clubs").select("*").order("encoded_name");if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}R=t||[],he(e,n)}function he(e,{toast:n,openModal:t,closeModal:i}){e.innerHTML=`
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
  `,c(R),document.getElementById("search-clubs").addEventListener("input",l=>{const a=l.target.value.toLowerCase();c(R.filter(o=>o.encoded_name.toLowerCase().includes(a)||o.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{Z(null,{toast:n,openModal:t,closeModal:i,reload:()=>M(e,{toast:n,openModal:t,closeModal:i})})});function c(l){document.getElementById("clubs-tbody").innerHTML=l.map(a=>`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const o=R.find(s=>s.id===a.dataset.edit);Z(o,{toast:n,openModal:t,closeModal:i,reload:()=>M(e,{toast:n,openModal:t,closeModal:i})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:o}=await v.from("clubs").delete().eq("id",a.dataset.del);o?n(o.message,"error"):(n("Club supprimé","success"),M(e,{toast:n,openModal:t,closeModal:i}))})})}}function Z(e,{toast:n,openModal:t,closeModal:i,reload:c}){const l=!!e;t(l?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:12px">
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
     <button class="btn btn-primary" id="m-save">${l?"Enregistrer":"Créer"}</button>`),document.getElementById("m-cancel").addEventListener("click",i),document.getElementById("auto-encode").addEventListener("click",()=>{const a=document.getElementById("m-real").value,o=a.split(" ")[0]||a;document.getElementById("m-encoded").value=o.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const a=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const o=a.split(" ")[0]||a;document.getElementById("m-encoded").value=o.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const a={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null};if(!a.real_name||!a.encoded_name||!a.country_code){n("Remplissez tous les champs obligatoires","error");return}const{error:o}=l?await v.from("clubs").update(a).eq("id",e.id):await v.from("clubs").insert(a);if(o){n(o.message,"error");return}n(l?"Club modifié":"Club créé","success"),i(),c()})}const _e=["blanc","metisse","typ","noir"],$e=["blond","marron","noir","chauve"],Ee=["rase","court","milong","long"],we=["normal","pepite","papyte","legende"],ee=["GK","DEF","MIL","ATT"],Ie=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];async function Le(e,{toast:n}){const{data:t}=await v.from("clubs").select("id,encoded_name,logo_url").order("encoded_name");e.innerHTML=Be(t||[]),Ae(e,t||[],n),j()}function te(){var i;const e=((i=document.getElementById("cb-surname-real"))==null?void 0:i.value)||"",n=C(e),t=document.getElementById("cb-surname-enc");t&&(t.value=n)}function j(){var d,b,p,u;const e=g=>{var y;return((y=document.getElementById(g))==null?void 0:y.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||C(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((b=(d=document.getElementById("cb-club"))==null?void 0:d.selectedOptions[0])==null?void 0:b.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity"),skin:e("cb-skin"),hair:e("cb-hair"),hair_length:e("cb-hair-length")},t=ue(n.skin,n.hair,n.hair_length);e("cb-club");const i=document.getElementById("cb-club"),c=((u=(p=i==null?void 0:i.selectedOptions[0])==null?void 0:p.dataset)==null?void 0:u.logo)||null,l=ve(n,{portraitUrl:t,clubLogoUrl:c,showNotes:!0}),a=document.getElementById("card-preview");a&&(a.innerHTML=l);const o=e("cb-surname-real"),s=n.surname_encoded,r=document.getElementById("encode-summary");r&&o&&(r.textContent=`${e("cb-firstname")} ${o} → ${e("cb-firstname")} ${s}`)}function Ae(e,n,t){var i,c,l,a;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",j),o.addEventListener("change",j)}),(i=document.getElementById("cb-surname-real"))==null||i.addEventListener("input",()=>{te(),j()}),(c=document.getElementById("btn-encode"))==null||c.addEventListener("click",()=>{te(),j()}),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",async()=>{await ke(n,t)}),(a=document.getElementById("btn-reset"))==null||a.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),j()})}async function ke(e,n){const t=s=>{var r;return((r=document.getElementById(s))==null?void 0:r.value)||""},i=t("cb-surname-real").trim(),c=t("cb-surname-enc").trim()||C(i);if(!t("cb-firstname")||!i||!t("cb-country")||!t("cb-job")){n("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}const l=t("cb-club")||null,a={firstname:t("cb-firstname").trim(),surname_real:i,surname_encoded:c,country_code:t("cb-country"),club_id:l||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,skin:t("cb-skin")||"blanc",hair:t("cb-hair")||"noir",hair_length:t("cb-hair-length")||"court",sell_price:parseInt(t("cb-price"))||0},{error:o}=await v.from("players").insert(a);if(o){n("Erreur: "+o.message,"error");return}n(`✅ Joueur "${a.firstname} ${a.surname_encoded}" enregistré !`,"success")}function Be(e){const n=Ie.map(([r,d])=>`<option value="${r}">${d} (${r})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join(""),i=ee.map(r=>`<option value="${r}">${r}</option>`).join(""),c='<option value="">Aucun</option>'+ee.map(r=>`<option value="${r}">${r}</option>`).join(""),l=we.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),a=_e.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),o=$e.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),s=Ee.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${i}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${l}</select></div>
          <div><label>Note min (Pépite/Papyte)</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max (Pépite seulement)</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(r=>`
            <div style="background:${se[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${r.toUpperCase()}
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
          <div><label>Peau</label><select id="cb-skin">${a}</select></div>
          <div><label>Cheveux</label><select id="cb-hair">${o}</select></div>
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
  `}async function le(e,{toast:n}){const{data:t,error:i}=await v.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}e.innerHTML=`
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
  `;const c=t||[];l(c),document.getElementById("search-users").addEventListener("input",a=>{const o=a.target.value.toLowerCase();l(c.filter(s=>{var r;return s.pseudo.toLowerCase().includes(o)||((r=s.club_name)==null?void 0:r.toLowerCase().includes(o))}))});function l(a){document.getElementById("users-tbody").innerHTML=a.map(o=>`
      <tr>
        <td><b>${o.pseudo}</b></td>
        <td style="font-size:12px">${o.club_name||"—"}</td>
        <td style="font-size:12px">${(o.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${o.level}</b></td>
        <td style="font-size:12px">${o.wins}/${o.draws}/${o.losses}</td>
        <td style="font-size:12px">🥇${o.trophies_top1} 🥈${o.trophies_top2} 🥉${o.trophies_top3}</td>
        <td>
          ${o.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${o.id}" data-is-admin="${o.is_admin}">
            ${o.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(o=>{o.addEventListener("click",async()=>{const s=o.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${s?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:d}=await v.from("users").update({is_admin:s}).eq("id",o.dataset.toggleAdmin);d?n(d.message,"error"):(n("Rôle mis à jour ✅","success"),le(e,{toast:n}))})})}}async function de(e,{toast:n}){const{data:t,error:i}=await v.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=t||[],l=c.filter(o=>o.status==="active").length,a=c.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${l}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${a}</div>
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
            ${c.map(o=>{var b,p,u,g;const s=(b=o.card)==null?void 0:b.player,r=s?`${s.firstname} ${s.surname_encoded}`:((p=o.card)==null?void 0:p.card_type)||"—",d={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${r}</b>${s?`<div style="font-size:10px;color:#999">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((u=o.seller)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=o.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${d[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${o.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(o.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${o.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${o.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await v.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),de(e,{toast:n}))})})}async function je(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{T("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{T("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await v.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;t.forEach(l=>{c+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(ne).join(",")+`
`}),T("clubs_export.csv",c),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await v.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(l=>{var a;c+=[l.firstname,l.surname_real,l.surname_encoded,l.country_code,((a=l.clubs)==null?void 0:a.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(ne).join(",")+`
`}),T("players_export.csv",c),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),a=oe(l);if(a.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let o=0,s=0;const r=[];for(const d of a){if(!d.real_name||!d.encoded_name||!d.country_code){s++,r.push(`Ligne ignorée (champs manquants): ${d.real_name||"?"}`);continue}const b={real_name:d.real_name,encoded_name:d.encoded_name.toUpperCase(),country_code:d.country_code.toUpperCase().slice(0,2),logo_url:d.logo_url||null},{error:p}=await v.from("clubs").upsert(b,{onConflict:"encoded_name"});p?(s++,r.push(`${d.encoded_name}: ${p.message}`)):o++}c.innerHTML=`<div style="color:var(--green)">✅ ${o} clubs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,n(`${o} clubs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),a=oe(l);if(a.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:o}=await v.from("clubs").select("id,encoded_name"),s={};(o||[]).forEach(m=>{s[m.encoded_name.toUpperCase()]=m.id});let r=0,d=0;const b=[],p=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],x=["rase","court","milong","long"];for(const m of a){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){d++,b.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!p.includes(m.job)){d++,b.push(`${m.firstname}: job invalide "${m.job}"`);continue}const w=m.club_encoded_name&&s[m.club_encoded_name.toUpperCase()]||null,h={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||C(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:w,job:m.job,job2:p.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:u.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:g.includes(m.skin)?m.skin:"blanc",hair:y.includes(m.hair)?m.hair:"noir",hair_length:x.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:f}=await v.from("players").insert(h);f?(d++,b.push(`${m.firstname} ${m.surname_real}: ${f.message}`)):r++}c.innerHTML=`<div style="color:var(--green)">✅ ${r} joueurs importés</div>
        ${d>0?`<div style="color:#c0392b">❌ ${d} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${b.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} joueurs importés`,"success")}catch(l){c.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}t.target.value=""})}function ne(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function T(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),c=document.createElement("a");c.href=i,c.download=e,c.click(),URL.revokeObjectURL(i)}function oe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(a=>a.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",c=ie(t,i).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let a=1;a<n.length;a++){if(!n[a].trim())continue;const o=ie(n[a],i),s={};c.forEach((r,d)=>{s[r]=(o[d]||"").trim()}),!Object.values(s).every(r=>!r)&&l.push(s)}return l}function ie(e,n=","){const t=[];let i="",c=!1;for(let l=0;l<e.length;l++){const a=e[l];c?a==='"'?e[l+1]==='"'?(i+='"',l++):c=!1:i+=a:a==='"'?c=!0:a===n?(t.push(i),i=""):i+=a}return t.push(i),t}const Se={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Ce(e,{toast:n}){const t=Object.keys(P);let i=t[0];const{data:c}=await v.from("formation_links_overrides").select("formation, links"),l={};(c||[]).forEach(d=>{l[d.formation]=d.links});let a=new Set;function o(d,b){return[d,b].sort().join("-")}function s(d){const b=l[d]||P[d]||[];a=new Set(b.map(([p,u])=>o(p,u)))}s(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(d=>`<option value="${d}" ${d===i?"selected":""}>${d}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${a.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function r(){const d=me[i]||{},b=J(i),p=320,u=400,g=22;function y(f){const _=d[f];return _?{x:_.x*p,y:_.y*u}:null}let x=`<svg width="${p}" height="${u}" viewBox="0 0 ${p} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;b.forEach(([f,_],I)=>{const $=y(f),L=y(_);if(!$||!L)return;const k=o(f,_),A=a.has(k),E=A?"#3b82f6":"#999",B=A?.95:.35,N=A?4:3;x+=`<line x1="${$.x}" y1="${$.y}" x2="${L.x}" y2="${L.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${k}" style="cursor:pointer"/>`,x+=`<line x1="${$.x}" y1="${$.y}" x2="${L.x}" y2="${L.y}"
        stroke="${E}" stroke-width="${N}" stroke-dasharray="${A?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${k}"/>`});for(const f of Object.keys(d)){const _=y(f);if(!_)continue;const I=f.replace(/\d+/,""),$=Se[I]||"#555";x+=`<circle cx="${_.x}" cy="${_.y}" r="${g}" fill="${$}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,x+=`<text x="${_.x}" y="${_.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${f}</text>`}x+="</svg>",document.getElementById("field-wrap").innerHTML=x;const m=document.getElementById("links-list");m.innerHTML=b.map(([f,_])=>{const I=o(f,_),$=a.has(I);return`
        <button class="link-toggle" data-key="${I}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${$?"#3b82f6":"#ddd"};
          background:${$?"#eaf2ff":"#fafafa"};
          color:${$?"#1d4ed8":"#888"}">
          <span>${f} ↔ ${_}</span>
          <span>${$?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${a.size}/${b.length} actifs)`);function h(f){a.has(f)?a.delete(f):a.add(f),r()}e.querySelectorAll(".link-hit").forEach(f=>{f.addEventListener("click",()=>h(f.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(f=>{f.addEventListener("click",()=>h(f.dataset.key))})}r(),document.getElementById("formation-select").addEventListener("change",d=>{i=d.target.value,s(i),r()}),document.getElementById("reset-btn").addEventListener("click",()=>{const d=P[i]||[];a=new Set(d.map(([b,p])=>o(b,p))),r(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const b=J(i).filter(([u,g])=>a.has(o(u,g))),{error:p}=await v.from("formation_links_overrides").upsert({formation:i,links:b,updated_at:new Date().toISOString()});if(p){n(p.message,"error");return}l[i]=b,n(`Liens enregistrés pour ${i} (${b.length} actifs)`,"success")})}const Te=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"game_helper",label:"Game Helper"}],ze=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pépite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"légende",label:"Légende"}],Re=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Me(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await v.from("booster_configs").select("*").order("sort_order");let t=null,i=[];async function c(o){const{data:s}=await v.from("booster_drop_rates").select("*").eq("booster_id",o).order("sort_order");return s||[]}async function l(){const o=t?(n||[]).find(r=>r.id===t):null;o&&(i=await c(o.id));const s=i.reduce((r,d)=>r+Number(d.percentage||0),0);e.innerHTML=`
    <div style="display:grid;grid-template-columns:300px 1fr;gap:0;height:calc(100vh - 60px)">

      <!-- LISTE -->
      <div style="border-right:1px solid #e0e0e0;overflow-y:auto;background:#fff">
        <div style="padding:12px 16px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center">
          <b style="font-size:14px">Boosters (${(n||[]).length})</b>
          <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:700">+ Nouveau</button>
        </div>
        ${(n||[]).map(r=>`
        <div class="booster-row" data-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===t?"#f0f7f0":"#fff"}">
          ${r.image_url?`<img src="${v.storage.from("assets").getPublicUrl("boosters/"+r.image_url).data.publicUrl}" style="width:36px;height:36px;object-fit:contain;border-radius:6px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px">📦</div>'}
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.name}</div>
            <div style="font-size:11px;color:#888">${r.price_type==="credits"?r.price_credits+" cr.":r.price_type==="pub"?"Pub":"Gratuit"} · ${r.card_count} cartes · ${r.is_active?"✅":"⛔"}</div>
          </div>
          <button class="btn-delete" data-id="${r.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:16px;padding:2px 4px">🗑️</button>
        </div>`).join("")}
      </div>

      <!-- ÉDITEUR -->
      <div style="overflow-y:auto;background:#f8f8f8;padding:0">
        ${o?`

        <div style="padding:20px;max-width:800px">
          <h3 style="margin:0 0 16px">${o.name}</h3>

          <!-- Infos de base -->
          <div style="background:#fff;border-radius:10px;padding:16px;margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div style="grid-column:1/-1">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">NOM</label>
              <input id="f-name" value="${o.name}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div style="grid-column:1/-1">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">IMAGE</label>
              <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
                <input id="f-image-url" value="${o.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px">
                <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:8px 12px;cursor:pointer;font-size:12px;white-space:nowrap">🖼️ Choisir</button>
              </div>
              ${o.image_url?`<div style="margin-top:8px;display:flex;align-items:center;gap:8px">
                <img src="/manager-wars/icons/${o.image_url}" style="height:48px;object-fit:contain;border-radius:6px;background:#f0f0f0;padding:4px">
                <span style="font-size:11px;color:#888">${o.image_url}</span>
              </div>`:""}
              <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">NOMBRE DE CARTES</label>
              <input id="f-card-count" type="number" min="1" max="10" value="${o.card_count}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">TYPE DE PRIX</label>
              <select id="f-price-type" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
                ${Re.map(r=>`<option value="${r.value}" ${o.price_type===r.value?"selected":""}>${r.label}</option>`).join("")}
              </select>
            </div>

            <div id="credits-field" style="${o.price_type!=="credits"?"opacity:0.4;pointer-events:none":""}">
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">PRIX EN CRÉDITS</label>
              <input id="f-price-credits" type="number" min="0" value="${o.price_credits||0}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">ACTIF</label><br>
              <input type="checkbox" id="f-active" ${o.is_active?"checked":""} style="margin-top:8px;width:18px;height:18px;cursor:pointer">
            </div>

            <div>
              <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px">ORDRE D'AFFICHAGE</label>
              <input id="f-sort" type="number" value="${o.sort_order||0}" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-top:4px;box-sizing:border-box">
            </div>
          </div>

          <!-- Taux de drop -->
          <div style="background:#fff;border-radius:10px;padding:16px;margin-bottom:16px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div>
                <b style="font-size:14px">Taux de drop</b>
                <span style="margin-left:10px;font-size:12px;color:${Math.abs(s-100)<.1?"#27ae60":"#e74c3c"};font-weight:700">
                  Total : ${s.toFixed(1)}% ${Math.abs(s-100)<.1?"✅":"⚠️ doit faire 100%"}
                </span>
              </div>
              <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:700">+ Ligne</button>
            </div>

            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <thead>
                  <tr style="background:#f5f5f5">
                    <th style="padding:8px 10px;text-align:left;font-weight:700;color:#555;border-bottom:2px solid #eee">Type</th>
                    <th style="padding:8px 10px;text-align:left;font-weight:700;color:#555;border-bottom:2px solid #eee">Rareté</th>
                    <th style="padding:8px 6px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">Note min</th>
                    <th style="padding:8px 6px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">Note max</th>
                    <th style="padding:8px 10px;text-align:center;font-weight:700;color:#555;border-bottom:2px solid #eee">%</th>
                    <th style="padding:8px;border-bottom:2px solid #eee"></th>
                  </tr>
                </thead>
                <tbody>
                  ${i.map((r,d)=>`
                  <tr style="border-bottom:1px solid #f0f0f0" data-rate-idx="${d}">
                    <td style="padding:6px 10px">
                      <select class="rate-type" data-idx="${d}" style="padding:5px;border:1px solid #ddd;border-radius:4px;font-size:12px;min-width:110px">
                        ${Te.map(b=>`<option value="${b.value}" ${r.card_type===b.value?"selected":""}>${b.label}</option>`).join("")}
                      </select>
                    </td>
                    <td style="padding:6px 10px">
                      <select class="rate-rarity" data-idx="${d}" style="padding:5px;border:1px solid #ddd;border-radius:4px;font-size:12px;min-width:90px">
                        ${ze.map(b=>`<option value="${b.value}" ${(r.rarity||"")===b.value?"selected":""}>${b.label}</option>`).join("")}
                      </select>
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-note-min" data-idx="${d}" type="number" min="1" max="10" value="${r.note_min||""}" placeholder="–" style="width:52px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-note-max" data-idx="${d}" type="number" min="1" max="10" value="${r.note_max||""}" placeholder="–" style="width:52px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <input class="rate-pct" data-idx="${d}" type="number" min="0.01" max="100" step="0.1" value="${r.percentage}" style="width:65px;padding:5px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px">
                    </td>
                    <td style="padding:6px;text-align:center">
                      <button class="btn-del-rate" data-idx="${d}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:16px;line-height:1">×</button>
                    </td>
                  </tr>`).join("")}
                </tbody>
              </table>
              ${i.length===0?'<div style="text-align:center;padding:20px;color:#aaa;font-size:13px">Aucun taux configuré. Cliquez + Ligne pour ajouter.</div>':""}
            </div>
          </div>

          <!-- Actions -->
          <div style="display:flex;gap:10px">
            <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:12px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
            <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:12px 20px;font-size:14px;cursor:pointer">Annuler</button>
          </div>
        </div>
        `:`
        <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#aaa;font-size:15px">
          ← Sélectionner un booster ou créer un nouveau
        </div>`}
      </div>
    </div>`,a()}function a(){var o,s,r,d,b,p;e.querySelectorAll(".booster-row").forEach(u=>{u.addEventListener("click",g=>{g.target.closest(".btn-delete")||(t=u.dataset.id,l())})}),(o=e.querySelector("#btn-new"))==null||o.addEventListener("click",async()=>{const u=prompt("Nom du nouveau booster :");if(!(u!=null&&u.trim()))return;const{data:g,error:y}=await v.from("booster_configs").insert({name:u.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(y){alert(y.message);return}n.push(g),t=g.id,l()}),e.querySelectorAll(".btn-delete").forEach(u=>{u.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce booster ?"))return;const y=u.dataset.id;await v.from("booster_configs").delete().eq("id",y);const x=n.findIndex(m=>m.id===y);x>-1&&n.splice(x,1),t===y&&(t=null),l()})}),(s=e.querySelector("#btn-cancel"))==null||s.addEventListener("click",()=>{t=null,l()}),(r=e.querySelector("#f-price-type"))==null||r.addEventListener("change",u=>{const g=e.querySelector("#credits-field");g&&(g.style.cssText=u.target.value!=="credits"?"opacity:0.4;pointer-events:none":"")}),(d=e.querySelector("#btn-pick-icon"))==null||d.addEventListener("click",async()=>{var g;const u=e.querySelector("#icon-picker-grid");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="text-align:center;padding:10px;color:#888;font-size:12px">⏳ Chargement des icônes...</div>',u.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),m=Array.isArray(x)?x.filter(h=>h.name.startsWith("booster")&&/\.(png|jpg|jpeg|webp|svg)$/i.test(h.name)):[];if(!m.length){u.innerHTML='<div style="text-align:center;padding:10px;color:#e74c3c;font-size:12px">Aucune icône booster trouvée dans public/icons/</div>';return}const w=(g=e.querySelector("#f-image-url"))==null?void 0:g.value;u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:8px">
          ${m.map(h=>`
            <div class="icon-pick-item" data-name="${h.name}"
              style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===w?"#1A6B3C":"#ddd"};background:${h.name===w?"#f0f7f0":"#fff"}">
              <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
              <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(".png","")}</div>
            </div>`).join("")}
        </div>`,u.querySelectorAll(".icon-pick-item").forEach(h=>{h.addEventListener("click",()=>{const f=e.querySelector("#f-image-url");f&&(f.value=h.dataset.name),u.style.display="none"})})}catch(y){u.innerHTML=`<div style="text-align:center;padding:10px;color:#e74c3c;font-size:12px">Erreur : ${y.message}<br><small>Vérifiez votre connexion ou les permissions GitHub API</small></div>`}}}),(b=e.querySelector("#btn-add-rate"))==null||b.addEventListener("click",()=>{i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:1,note_max:10,percentage:10,sort_order:i.length}),l()}),e.querySelectorAll(".btn-del-rate").forEach(u=>{u.addEventListener("click",()=>{i.splice(Number(u.dataset.idx),1),l()})}),(p=e.querySelector("#btn-save"))==null||p.addEventListener("click",async()=>{var w,h,f,_,I,$,L,k,A;const u=(n||[]).find(E=>E.id===t);if(!u)return;const g=[];e.querySelectorAll("tr[data-rate-idx]").forEach(E=>{var U,H,G,V,K;const B=Number(E.dataset.rateIdx);i[B];const N=((U=E.querySelector(".rate-type"))==null?void 0:U.value)||"player",ce=((H=E.querySelector(".rate-rarity"))==null?void 0:H.value)||"",F=(G=E.querySelector(".rate-note-min"))==null?void 0:G.value,O=(V=E.querySelector(".rate-note-max"))==null?void 0:V.value,pe=(K=E.querySelector(".rate-pct"))==null?void 0:K.value;g.push({booster_id:t,card_type:N,rarity:ce||null,note_min:F?Number(F):null,note_max:O?Number(O):null,percentage:Number(pe)||0,sort_order:B})});const y=g.reduce((E,B)=>E+B.percentage,0);if(Math.abs(y-100)>.5){alert(`La somme des pourcentages doit faire 100%. Actuellement : ${y.toFixed(1)}%`);return}const x={name:((h=(w=e.querySelector("#f-name"))==null?void 0:w.value)==null?void 0:h.trim())||u.name,image_url:((_=(f=e.querySelector("#f-image-url"))==null?void 0:f.value)==null?void 0:_.trim())||null,price_type:(I=e.querySelector("#f-price-type"))==null?void 0:I.value,price_credits:Number(($=e.querySelector("#f-price-credits"))==null?void 0:$.value)||0,card_count:Number((L=e.querySelector("#f-card-count"))==null?void 0:L.value)||5,is_active:(k=e.querySelector("#f-active"))==null?void 0:k.checked,sort_order:Number((A=e.querySelector("#f-sort"))==null?void 0:A.value)||0},{error:m}=await v.from("booster_configs").update(x).eq("id",t);if(m){alert(m.message);return}if(Object.assign(u,x),await v.from("booster_drop_rates").delete().eq("booster_id",t),g.length){const{error:E}=await v.from("booster_drop_rates").insert(g);if(E){alert(E.message);return}}i=g,alert("✅ Booster enregistré !"),l()})}l()}function Ne(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Pe(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function q(){document.getElementById("modal-overlay").classList.add("hidden")}const ae={dashboard:{title:"Dashboard",fn:be},players:{title:"Joueurs & Cartes",fn:ye},clubs:{title:"Clubs",fn:xe},"card-builder":{title:"Card Builder",fn:Le},users:{title:"Managers",fn:le},market:{title:"Marché des transferts",fn:de},"import-export":{title:"Import / Export CSV",fn:je},formations:{title:"Formations & Liens",fn:Ce},"boosters-config":{title:"Boosters",fn:Me}};async function D(e){document.querySelectorAll(".admin-sidebar nav a").forEach(i=>{i.classList.toggle("active",i.dataset.page===e)});const n=ae[e]||ae.dashboard;document.getElementById("page-title").textContent=n.title;const t=document.getElementById("page-content");t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(t,{toast:Ne,openModal:Pe,closeModal:q,navigate:D})}catch(i){t.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${i.message}</div>`,console.error(i)}}async function qe(){const{data:{session:e}}=await v.auth.getSession();e&&await re(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),t=document.getElementById("auth-password").value,i=document.getElementById("auth-error");if(i.textContent="",!n||!t){i.textContent="Remplissez tous les champs.";return}const{data:c,error:l}=await v.auth.signInWithPassword({email:n,password:t});if(l){i.textContent=l.message;return}await re(c.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",q),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&q()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),D(n.dataset.page)})})}async function re(e){const{data:n,error:t}=await v.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await v.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,D("dashboard")}qe();
