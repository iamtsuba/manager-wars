import{s as y,g as fe,F as H,a as ee,b as ve}from"./formation-links-CDBKB_z4.js";async function xe(e){const[{count:n},{count:t},{count:i},{count:p},{count:l}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${M("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${M("🏟️","Clubs",t??"–","#D4A017")}
      ${M("👥","Managers",i??"–","#7a28b8")}
      ${M("📦","Cartes possédées",p??"–","#2a8f52")}
      ${M("⚽","Matchs joués",l??"–","#bb2020")}
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
  `,window.adminNav=o=>{var r;(r=document.querySelector(`[data-page="${o}"]`))==null||r.click()}}function M(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const te={ATT:"#1A6B3C",MIL:"#D4A017",DEF:"#bb2020",GK:"#111111"},me={normal:"#cccccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ye={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",MA:"MAROC",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE",MA:"MAROC"};function ne(e,n,t=52){const i=t===52,p=i?"26,3 31.5,18 48,18 35,29 39.5,46 26,36 12.5,46 17,29 4,18 20.5,18":"16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11",l=i?26:16,o=i?32:20,r=i?16:9,s=i?50:31;return`<svg width="${t}" height="${s}" viewBox="0 0 ${t} ${s}" style="display:block">
    <polygon points="${p}" fill="${e}" stroke="#0005" stroke-width="${i?2:1.5}"/>
    <text x="${l}" y="${o}" text-anchor="middle" font-size="${r}" font-weight="900"
      fill="white" font-family="Arial Black,Arial">${n}</text>
  </svg>`}function he(e,n={}){const{size:t="md",showNotes:i=!1,portraitUrl:p=null,clubLogoUrl:l=null}=n,o=e.rarity||"normal",r=me[o],s=e.job||"ATT",u=e.job2,d=e.current_note??(s==="ATT"?e.note_a:s==="MIL"?e.note_m:s==="DEF"?e.note_d:e.note_g),a=u?u==="ATT"?e.note_a:u==="MIL"?e.note_m:u==="DEF"?e.note_d:e.note_g:null,c=te[s],v=u?te[u]:null,x=e.country_code||"",g=ye[x]||x,$=t==="sm"?120:160,m=p?`<img src="${p}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block">`:'<div style="width:100%;height:100%;background:#c5d8ec;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>',_=l?`<img src="${l}" alt="" class="mw-club-logo">`:`<div class="mw-club-badge">${e.club_encoded_name||"CLUB"}</div>`,f=o==="legende"?'<div style="background:#f5c518;color:#7a5800;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">LÉGENDE</div>':o==="pepite"?'<div style="background:#D4A017;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PÉPITE</div>':o==="papyte"?'<div style="background:#909090;color:#fff;border-radius:3px;padding:1px 5px;font-size:6px;font-weight:800;font-family:Arial">PAPYTE</div>':_;return`<div class="mw-card" style="background:${r};width:${$}px;${t==="sm"?"transform:scale(0.75);transform-origin:top left;":""}">
    <div class="mw-inner" style="${o!=="normal"?`border:3px solid ${r};border-radius:8px`:""}">
      <div class="mw-name">
        <div class="mw-firstname">${e.firstname||""}</div>
        <div class="mw-lastname" style="font-size:${$===120?"13px":"16px"}">${(e.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div class="mw-stars">
        <div class="mw-band" style="background:${c}"></div>
        ${ne(c,d,52)}
        ${u&&v?ne(v,a,32):""}
      </div>
      <div class="mw-portrait" style="height:${$===120?"88px":"116px"}">
        ${m}
      </div>
      <div class="mw-footer">
        <div class="mw-flag">
          <img src="https://flagsapi.com/${x}/flat/64.png" alt="${g}">
        </div>
        <div class="mw-country">${g}</div>
        ${o==="normal"?_:f}
      </div>
      ${i?`<div style="background:#e8e0cc;padding:4px 8px;display:grid;grid-template-columns:1fr 1fr;gap:2px;font-size:9px">
        <div style="color:#555">GK <b style="color:#111">${e.note_g}</b></div>
        <div style="color:#555">DEF <b style="color:#111">${e.note_d}</b></div>
        <div style="color:#555">MIL <b style="color:#111">${e.note_m}</b></div>
        <div style="color:#555">ATT <b style="color:#111">${e.note_a}</b></div>
      </div>`:""}
    </div>
  </div>`}function R(e){const n={A:"E",E:"I",I:"O",O:"U",U:"A",a:"e",e:"i",i:"o",o:"u",u:"a"};return(e||"").replace(/[AEIOUaeiou]/g,t=>n[t]||t)}const ie={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},$e={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function _e(e,n){await O(e,n)}async function O(e,n){const{toast:t,openModal:i,closeModal:p}=n,[{data:l,error:o},{data:r}]=await Promise.all([y.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const s={};(r||[]).forEach(a=>{s[a.id]=a.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(ie).map(([a,c])=>`<option value="${a}">${c}</option>`).join("")}
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
  `,u(l);function u(a){document.getElementById("count-label").textContent=`${a.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=a.map(c=>{var v;return`
      <tr>
        <td>
          <div style="font-weight:600">${c.firstname} ${c.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${c.firstname} ${c.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${c.country_code}/flat/32.png" alt="${c.country_code}" style="height:16px;vertical-align:middle"> ${c.country_code}
        </td>
        <td style="font-size:12px">${((v=c.clubs)==null?void 0:v.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${c.job==="ATT"?"#1A6B3C":c.job==="MIL"?"#D4A017":c.job==="DEF"?"#bb2020":"#111"}">
            ${c.job}
          </span>
          ${c.job2?`<span style="font-size:11px;color:#aaa"> / ${c.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${c.note_g} / ${c.note_d} / ${c.note_m} / ${c.note_a}
        </td>
        <td>
          <span style="background:${$e[c.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${ie[c.rarity]||c.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${c.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${c.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const v=l.find(x=>x.id===c.dataset.edit);oe(v,r||[],{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})})}),document.querySelectorAll("[data-del]").forEach(c=>{c.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:v}=await y.from("players").delete().eq("id",c.dataset.del);v?t(v.message,"error"):(t("Joueur supprimé","success"),O(e,n))})})}function d(){const a=document.getElementById("search-players").value.toLowerCase(),c=document.getElementById("filter-rarity").value,v=document.getElementById("filter-job").value;u(l.filter(x=>(!a||`${x.firstname} ${x.surname_encoded} ${x.surname_real}`.toLowerCase().includes(a))&&(!c||x.rarity===c)&&(!v||x.job===v)))}document.getElementById("search-players").addEventListener("input",d),document.getElementById("filter-rarity").addEventListener("change",d),document.getElementById("filter-job").addEventListener("change",d),document.getElementById("add-player-btn").addEventListener("click",()=>{oe(null,r||[],{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})})}function oe(e,n,{toast:t,openModal:i,closeModal:p,reload:l}){const o=!!e,r='<option value="">— Club —</option>'+n.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join("");i(o?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
      <div><label>Club</label><select id="pm-club">${r}</select></div>
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
     <button class="btn btn-primary" id="pm-save">${o?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",p),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=R(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const s={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!s.firstname||!s.surname_real||!s.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:u}=o?await y.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(s);if(u){t(u.message,"error");return}t(o?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),l()})}let D=[];async function we(e,{toast:n,openModal:t,closeModal:i}){await q(e,{toast:n,openModal:t,closeModal:i})}async function q(e,n){const{data:t,error:i}=await y.from("clubs").select("*").order("encoded_name");if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}D=t||[],Ee(e,n)}function Ee(e,{toast:n,openModal:t,closeModal:i}){e.innerHTML=`
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
  `,p(D),document.getElementById("search-clubs").addEventListener("input",l=>{const o=l.target.value.toLowerCase();p(D.filter(r=>r.encoded_name.toLowerCase().includes(o)||r.real_name.toLowerCase().includes(o)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{ae(null,{toast:n,openModal:t,closeModal:i,reload:()=>q(e,{toast:n,openModal:t,closeModal:i})})});function p(l){document.getElementById("clubs-tbody").innerHTML=l.map(o=>`
      <tr>
        <td>
          ${o.logo_url?`<img src="${o.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${o.encoded_name.slice(0,3)}</div>`}
        </td>
        <td><b>${o.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${o.real_name}</td>
        <td><img src="https://flagsapi.com/${o.country_code}/flat/32.png" alt="${o.country_code}" style="height:18px;vertical-align:middle"> ${o.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const r=D.find(s=>s.id===o.dataset.edit);ae(r,{toast:n,openModal:t,closeModal:i,reload:()=>q(e,{toast:n,openModal:t,closeModal:i})})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:r}=await y.from("clubs").delete().eq("id",o.dataset.del);r?n(r.message,"error"):(n("Club supprimé","success"),q(e,{toast:n,openModal:t,closeModal:i}))})})}}function ae(e,{toast:n,openModal:t,closeModal:i,reload:p}){const l=!!e;t(l?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:12px">
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
     <button class="btn btn-primary" id="m-save">${l?"Enregistrer":"Créer"}</button>`),document.getElementById("m-cancel").addEventListener("click",i),document.getElementById("auto-encode").addEventListener("click",()=>{const o=document.getElementById("m-real").value,r=o.split(" ")[0]||o;document.getElementById("m-encoded").value=r.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const o=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const r=o.split(" ")[0]||o;document.getElementById("m-encoded").value=r.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const o={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null};if(!o.real_name||!o.encoded_name||!o.country_code){n("Remplissez tous les champs obligatoires","error");return}const{error:r}=l?await y.from("clubs").update(o).eq("id",e.id):await y.from("clubs").insert(o);if(r){n(r.message,"error");return}n(l?"Club modifié":"Club créé","success"),i(),p()})}const ke=["blanc","metisse","typ","noir"],Ie=["blond","marron","noir","chauve"],Le=["rase","court","milong","long"],Ae=["normal","pepite","papyte","legende"],re=["GK","DEF","MIL","ATT"],ze=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];async function je(e,{toast:n}){const{data:t}=await y.from("clubs").select("id,encoded_name,logo_url").order("encoded_name");e.innerHTML=Te(t||[]),Ce(e,t||[],n),S()}function se(){var i;const e=((i=document.getElementById("cb-surname-real"))==null?void 0:i.value)||"",n=R(e),t=document.getElementById("cb-surname-enc");t&&(t.value=n)}function S(){var d,a,c,v;const e=x=>{var g;return((g=document.getElementById(x))==null?void 0:g.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||R(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((a=(d=document.getElementById("cb-club"))==null?void 0:d.selectedOptions[0])==null?void 0:a.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity"),skin:e("cb-skin"),hair:e("cb-hair"),hair_length:e("cb-hair-length")},t=fe(n.skin,n.hair,n.hair_length);e("cb-club");const i=document.getElementById("cb-club"),p=((v=(c=i==null?void 0:i.selectedOptions[0])==null?void 0:c.dataset)==null?void 0:v.logo)||null,l=he(n,{portraitUrl:t,clubLogoUrl:p,showNotes:!0}),o=document.getElementById("card-preview");o&&(o.innerHTML=l);const r=e("cb-surname-real"),s=n.surname_encoded,u=document.getElementById("encode-summary");u&&r&&(u.textContent=`${e("cb-firstname")} ${r} → ${e("cb-firstname")} ${s}`)}function Ce(e,n,t){var i,p,l,o;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",S),r.addEventListener("change",S)}),(i=document.getElementById("cb-surname-real"))==null||i.addEventListener("input",()=>{se(),S()}),(p=document.getElementById("btn-encode"))==null||p.addEventListener("click",()=>{se(),S()}),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",async()=>{await Be(n,t)}),(o=document.getElementById("btn-reset"))==null||o.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),S()})}async function Be(e,n){const t=s=>{var u;return((u=document.getElementById(s))==null?void 0:u.value)||""},i=t("cb-surname-real").trim(),p=t("cb-surname-enc").trim()||R(i);if(!t("cb-firstname")||!i||!t("cb-country")||!t("cb-job")){n("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}const l=t("cb-club")||null,o={firstname:t("cb-firstname").trim(),surname_real:i,surname_encoded:p,country_code:t("cb-country"),club_id:l||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,skin:t("cb-skin")||"blanc",hair:t("cb-hair")||"noir",hair_length:t("cb-hair-length")||"court",sell_price:parseInt(t("cb-price"))||0},{error:r}=await y.from("players").insert(o);if(r){n("Erreur: "+r.message,"error");return}n(`✅ Joueur "${o.firstname} ${o.surname_encoded}" enregistré !`,"success")}function Te(e){const n=ze.map(([u,d])=>`<option value="${u}">${d} (${u})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(u=>`<option value="${u.id}" data-logo="${u.logo_url||""}">${u.encoded_name}</option>`).join(""),i=re.map(u=>`<option value="${u}">${u}</option>`).join(""),p='<option value="">Aucun</option>'+re.map(u=>`<option value="${u}">${u}</option>`).join(""),l=Ae.map(u=>`<option value="${u}">${u.charAt(0).toUpperCase()+u.slice(1)}</option>`).join(""),o=ke.map(u=>`<option value="${u}">${u.charAt(0).toUpperCase()+u.slice(1)}</option>`).join(""),r=Ie.map(u=>`<option value="${u}">${u.charAt(0).toUpperCase()+u.slice(1)}</option>`).join(""),s=Le.map(u=>`<option value="${u}">${u.charAt(0).toUpperCase()+u.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${p}</select></div>
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
          ${["normal","pepite","papyte","legende"].map(u=>`
            <div style="background:${me[u]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${u.toUpperCase()}
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
          <div><label>Peau</label><select id="cb-skin">${o}</select></div>
          <div><label>Cheveux</label><select id="cb-hair">${r}</select></div>
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
  `}async function ge(e,{toast:n}){const{data:t,error:i}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}e.innerHTML=`
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
  `;const p=t||[];l(p),document.getElementById("search-users").addEventListener("input",o=>{const r=o.target.value.toLowerCase();l(p.filter(s=>{var u;return s.pseudo.toLowerCase().includes(r)||((u=s.club_name)==null?void 0:u.toLowerCase().includes(r))}))});function l(o){document.getElementById("users-tbody").innerHTML=o.map(r=>`
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
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${s?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:d}=await y.from("users").update({is_admin:s}).eq("id",r.dataset.toggleAdmin);d?n(d.message,"error"):(n("Rôle mis à jour ✅","success"),ge(e,{toast:n}))})})}}async function be(e,{toast:n}){const{data:t,error:i}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=t||[],l=p.filter(r=>r.status==="active").length,o=p.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${l}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${o}</div>
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
            ${p.map(r=>{var a,c,v,x;const s=(a=r.card)==null?void 0:a.player,u=s?`${s.firstname} ${s.surname_encoded}`:((c=r.card)==null?void 0:c.card_type)||"—",d={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${u}</b>${s?`<div style="font-size:10px;color:#999">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((v=r.seller)==null?void 0:v.pseudo)||"—"}</td>
                <td style="font-size:12px">${((x=r.buyer)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${d[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await y.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),be(e,{toast:n}))})})}async function Se(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{P("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{P("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;t.forEach(l=>{p+=[l.real_name,l.encoded_name,l.country_code,l.logo_url||""].map(de).join(",")+`
`}),P("clubs_export.csv",p),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(l=>{var o;p+=[l.firstname,l.surname_real,l.surname_encoded,l.country_code,((o=l.clubs)==null?void 0:o.encoded_name)||"",l.job,l.job2||"",l.note_g,l.note_d,l.note_m,l.note_a,l.rarity,l.note_min??"",l.note_max??"",l.skin,l.hair,l.hair_length,l.sell_price].map(de).join(",")+`
`}),P("players_export.csv",p),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),o=le(l);if(o.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,s=0;const u=[];for(const d of o){if(!d.real_name||!d.encoded_name||!d.country_code){s++,u.push(`Ligne ignorée (champs manquants): ${d.real_name||"?"}`);continue}const a={real_name:d.real_name,encoded_name:d.encoded_name.toUpperCase(),country_code:d.country_code.toUpperCase().slice(0,2),logo_url:d.logo_url||null},{error:c}=await y.from("clubs").upsert(a,{onConflict:"encoded_name"});c?(s++,u.push(`${d.encoded_name}: ${c.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${u.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} clubs importés`,"success")}catch(l){p.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const l=await i.text(),o=le(l);if(o.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await y.from("clubs").select("id,encoded_name"),s={};(r||[]).forEach(m=>{s[m.encoded_name.toUpperCase()]=m.id});let u=0,d=0;const a=[],c=["GK","DEF","MIL","ATT"],v=["normal","pepite","papyte","legende"],x=["blanc","metisse","typ","noir"],g=["blond","marron","noir","chauve"],$=["rase","court","milong","long"];for(const m of o){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){d++,a.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!c.includes(m.job)){d++,a.push(`${m.firstname}: job invalide "${m.job}"`);continue}const _=m.club_encoded_name&&s[m.club_encoded_name.toUpperCase()]||null,f={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||R(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:_,job:m.job,job2:c.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:v.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:x.includes(m.skin)?m.skin:"blanc",hair:g.includes(m.hair)?m.hair:"noir",hair_length:$.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:b}=await y.from("players").insert(f);b?(d++,a.push(`${m.firstname} ${m.surname_real}: ${b.message}`)):u++}p.innerHTML=`<div style="color:var(--green)">✅ ${u} joueurs importés</div>
        ${d>0?`<div style="color:#c0392b">❌ ${d} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${a.slice(0,10).join("<br>")}</div>`:""}`,n(`${u} joueurs importés`,"success")}catch(l){p.innerHTML=`<span style="color:#c0392b">Erreur : ${l.message}</span>`}t.target.value=""})}function de(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function P(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function le(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(o=>o.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",p=ce(t,i).map(o=>o.trim().replace(/^\uFEFF/,"").toLowerCase()),l=[];for(let o=1;o<n.length;o++){if(!n[o].trim())continue;const r=ce(n[o],i),s={};p.forEach((u,d)=>{s[u]=(r[d]||"").trim()}),!Object.values(s).every(u=>!u)&&l.push(s)}return l}function ce(e,n=","){const t=[];let i="",p=!1;for(let l=0;l<e.length;l++){const o=e[l];p?o==='"'?e[l+1]==='"'?(i+='"',l++):p=!1:i+=o:o==='"'?p=!0:o===n?(t.push(i),i=""):i+=o}return t.push(i),t}const Me={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Re(e,{toast:n}){const t=Object.keys(H);let i=t[0];const{data:p}=await y.from("formation_links_overrides").select("formation, links"),l={};(p||[]).forEach(d=>{l[d.formation]=d.links});let o=new Set;function r(d,a){return[d,a].sort().join("-")}function s(d){const a=l[d]||H[d]||[];o=new Set(a.map(([c,v])=>r(c,v)))}s(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${o.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function u(){const d=ve[i]||{},a=ee(i),c=320,v=400,x=22;function g(b){const h=d[b];return h?{x:h.x*c,y:h.y*v}:null}let $=`<svg width="${c}" height="${v}" viewBox="0 0 ${c} ${v}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;a.forEach(([b,h],k)=>{const w=g(b),I=g(h);if(!w||!I)return;const E=r(b,h),L=o.has(E),z=L?"#3b82f6":"#999",B=L?.95:.35,N=L?4:3;$+=`<line x1="${w.x}" y1="${w.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${E}" style="cursor:pointer"/>`,$+=`<line x1="${w.x}" y1="${w.y}" x2="${I.x}" y2="${I.y}"
        stroke="${z}" stroke-width="${N}" stroke-dasharray="${L?"none":"4,3"}"
        opacity="${B}" pointer-events="none" data-line-key="${E}"/>`});for(const b of Object.keys(d)){const h=g(b);if(!h)continue;const k=b.replace(/\d+/,""),w=Me[k]||"#555";$+=`<circle cx="${h.x}" cy="${h.y}" r="${x}" fill="${w}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,$+=`<text x="${h.x}" y="${h.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${b}</text>`}$+="</svg>",document.getElementById("field-wrap").innerHTML=$;const m=document.getElementById("links-list");m.innerHTML=a.map(([b,h])=>{const k=r(b,h),w=o.has(k);return`
        <button class="link-toggle" data-key="${k}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${w?"#3b82f6":"#ddd"};
          background:${w?"#eaf2ff":"#fafafa"};
          color:${w?"#1d4ed8":"#888"}">
          <span>${b} ↔ ${h}</span>
          <span>${w?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const _=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');_&&(_.textContent=`Liens (${o.size}/${a.length} actifs)`);function f(b){o.has(b)?o.delete(b):o.add(b),u()}e.querySelectorAll(".link-hit").forEach(b=>{b.addEventListener("click",()=>f(b.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(b=>{b.addEventListener("click",()=>f(b.dataset.key))})}u(),document.getElementById("formation-select").addEventListener("change",d=>{i=d.target.value,s(i),u()}),document.getElementById("reset-btn").addEventListener("click",()=>{const d=H[i]||[];o=new Set(d.map(([a,c])=>r(a,c))),u(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const a=ee(i).filter(([v,x])=>o.has(r(v,x))),{error:c}=await y.from("formation_links_overrides").upsert({formation:i,links:a,updated_at:new Date().toISOString()});if(c){n(c.message,"error");return}l[i]=a,n(`Liens enregistrés pour ${i} (${a.length} actifs)`,"success")})}const Ne=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],Pe=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pépite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"légende",label:"Légende"}],Oe=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function De(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("booster_configs").select("*").order("sort_order");let t=null,i=[],p=null;const l=()=>window.innerWidth<700;async function o(){if(!t){i=[];return}if(t!==p){const{data:a}=await y.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=a||[],p=t}}function r(){return`
    <div id="booster-list" style="background:#fff;${l()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(a=>`
      <div class="booster-row" data-id="${a.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===t?"#f0f7f0":"#fff"}">
        ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
          <div style="font-size:11px;color:#888">
            ${a.price_type==="credits"?(a.price_credits||0)+" cr.":a.price_type==="pub"?"Pub":"Gratuit"}
            · ${a.card_count||5} cartes · ${a.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${a.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const a=t?(n||[]).find(x=>x.id===t):null;if(!a)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const c=i.reduce((x,g)=>x+Number(g.percentage||0),0),v=Math.abs(c-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${l()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${a.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${a.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${a.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Oe.map(x=>`<option value="${x.value}" ${a.price_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${a.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${a.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${a.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${a.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${v?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${c.toFixed(1)}% ${v?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((x,g)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${g}">
            <select class="rate-type" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ne.map($=>`<option value="${$.value}" ${x.card_type===$.value?"selected":""}>${$.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${g}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Pe.map($=>`<option value="${$.value}" ${(x.rarity||"")===$.value?"selected":""}>${$.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${g}" type="number" min="1" max="10" value="${x.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${g}" type="number" min="1" max="10" value="${x.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${g}" type="number" min="0.1" max="100" step="0.1" value="${x.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${g}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function u(a=!1){a||await o();const c=!t&&l(),v=t&&l();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!l()||c||!t?r():""}
      ${!l()||v?s():""}
    </div>`,d()}function d(){var c,v,x,g,$,m,_;const a=f=>e.querySelector(f);e.querySelectorAll(".booster-row").forEach(f=>{f.addEventListener("click",b=>{b.target.closest(".btn-delete")||(t=f.dataset.id,p=null,u())})}),(c=a("#btn-back"))==null||c.addEventListener("click",()=>{t=null,u()}),(v=a("#btn-new"))==null||v.addEventListener("click",async()=>{const f=prompt("Nom du nouveau booster :");if(!(f!=null&&f.trim()))return;const{data:b,error:h}=await y.from("booster_configs").insert({name:f.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(h){alert(h.message);return}n.push(b),t=b.id,p=null,u()}),e.querySelectorAll(".btn-delete").forEach(f=>{f.addEventListener("click",async b=>{if(b.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",f.dataset.id);const h=n.findIndex(k=>k.id===f.dataset.id);h>-1&&n.splice(h,1),t===f.dataset.id&&(t=null,p=null),u()})}),(x=a("#btn-cancel"))==null||x.addEventListener("click",()=>{t=null,u()}),(g=a("#f-price-type"))==null||g.addEventListener("change",f=>{const b=a("#credits-field");b&&(b.style.opacity=f.target.value!=="credits"?"0.4":"1")}),($=a("#btn-pick-icon"))==null||$.addEventListener("click",async()=>{var b;const f=a("#icon-picker-grid");if(f){if(f.style.display!=="none"){f.style.display="none";return}f.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',f.style.display="block";try{const k=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),w=Array.isArray(k)?k.filter(E=>E.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(E.name)):[];if(!w.length){f.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const I=((b=a("#f-image-url"))==null?void 0:b.value)||"";f.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${w.map(E=>`
          <div class="icon-pick-item" data-name="${E.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${E.name===I?"#1A6B3C":"#ddd"};background:${E.name===I?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${E.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,f.querySelectorAll(".icon-pick-item").forEach(E=>{E.addEventListener("click",()=>{const L=a("#f-image-url");L&&(L.value=E.dataset.name),f.style.display="none"})})}catch(h){f.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${h.message}</div>`}}}),(m=a("#btn-add-rate"))==null||m.addEventListener("click",()=>{i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:1,note_max:10,percentage:10,sort_order:i.length}),u(!0)}),e.querySelectorAll(".btn-del-rate").forEach(f=>{f.addEventListener("click",()=>{i.splice(Number(f.dataset.idx),1),u(!0)})}),(_=a("#btn-save"))==null||_.addEventListener("click",async()=>{var I,E,L,z,B,N,V,K,J;const f=(n||[]).find(A=>A.id===t);if(!f)return;const b=[];e.querySelectorAll("[data-rate-idx]").forEach(A=>{var Y,W,Q,X,Z;const F=Number(A.dataset.rateIdx);b.push({booster_id:t,card_type:((Y=A.querySelector(".rate-type"))==null?void 0:Y.value)||"player",rarity:((W=A.querySelector(".rate-rarity"))==null?void 0:W.value)||null,note_min:Number((Q=A.querySelector(".rate-note-min"))==null?void 0:Q.value)||null,note_max:Number((X=A.querySelector(".rate-note-max"))==null?void 0:X.value)||null,percentage:Number((Z=A.querySelector(".rate-pct"))==null?void 0:Z.value)||0,sort_order:F});const T=b[b.length-1];T.rarity||(T.rarity=null),T.note_min||(T.note_min=null),T.note_max||(T.note_max=null)});const h=b.reduce((A,F)=>A+F.percentage,0);if(b.length&&Math.abs(h-100)>.5){alert(`La somme doit faire 100% (actuellement ${h.toFixed(1)}%)`);return}const k={name:((E=(I=a("#f-name"))==null?void 0:I.value)==null?void 0:E.trim())||f.name,image_url:((z=(L=a("#f-image-url"))==null?void 0:L.value)==null?void 0:z.trim())||null,price_type:(B=a("#f-price-type"))==null?void 0:B.value,price_credits:Number((N=a("#f-price-credits"))==null?void 0:N.value)||0,card_count:Number((V=a("#f-card-count"))==null?void 0:V.value)||5,is_active:((K=a("#f-active"))==null?void 0:K.checked)??f.is_active,sort_order:Number((J=a("#f-sort"))==null?void 0:J.value)||0},{error:w}=await y.from("booster_configs").update(k).eq("id",t);if(w){alert(w.message);return}if(Object.assign(f,k),await y.from("booster_drop_rates").delete().eq("booster_id",t),b.length){const{error:A}=await y.from("booster_drop_rates").insert(b);if(A){alert(A.message);return}}i=b,p=t,alert("✅ Booster enregistré !"),u(!0)})}u()}const j=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],C=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function qe(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=()=>window.innerWidth<700,p=d=>e.querySelector(d);function l(d,a=130){if(!d)return"";const c=j.find(m=>m.value===d.gc_type)||j[0],v=C.find(m=>m.value===d.color)||C[0],x=Math.round(a*.55),g=Math.round(a*.15),$=Math.round(a*.3);return`<div style="width:${a}px;height:${Math.round(a*1.4)}px;border-radius:10px;border:3px solid ${v.hex};background:${c.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${v.hex}55;flex-shrink:0">
      <div style="height:${g}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(a/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${d.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d.image_url?`<img src="/manager-wars/icons/${d.image_url}" style="max-height:${x}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(a*.3)}px">${c.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${$}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(a/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(d.effect||"").slice(0,60)}${(d.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function o(){return`
    <div id="gc-list" style="background:#fff;${i()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(d=>{const a=j.find(v=>v.value===d.gc_type)||j[0],c=C.find(v=>v.value===d.color)||C[0];return`
        <div class="gc-row" data-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${c.hex};background:${a.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${d.image_url?`<img src="/manager-wars/icons/${d.image_url}" style="width:28px;height:28px;object-fit:contain">`:a.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
            <div style="font-size:11px;color:#888">${a.label} · ${d.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${d.id}" data-active="${d.is_active}"
              style="background:${d.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${d.is_active?"#27ae60":"#e74c3c"};color:${d.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${d.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${d.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function r(){const d=t?(n||[]).find(c=>c.id===t):null;if(!d)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const a=j.find(c=>c.value===d.gc_type)||j[0];return C.find(c=>c.value===d.color)||C[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${i()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${a.bg};border-radius:12px">
        ${l(d,i()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${d.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${d.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${j.map(c=>`<option value="${c.value}" ${d.gc_type===c.value?"selected":""}>${c.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${C.map(c=>`<option value="${c.value}" ${d.color===c.value?"selected":""}>${c.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${d.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${d.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${d.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>
      </div>

      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save-gc" style="flex:1;background:#7a28b8;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel-gc" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}function s(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!i()||!t?o():""}
      ${!i()||t?r():""}
    </div>`,u()}function u(){var d,a,c,v,x;e.querySelectorAll(".gc-row").forEach(g=>{g.addEventListener("click",$=>{$.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=g.dataset.id,s())})}),(d=p("#btn-gc-back"))==null||d.addEventListener("click",()=>{t=null,s()}),(a=p("#btn-cancel-gc"))==null||a.addEventListener("click",()=>{t=null,s()}),(c=p("#btn-new-gc"))==null||c.addEventListener("click",async()=>{const g=prompt("Nom de la carte Game Changer :");if(!(g!=null&&g.trim()))return;const{data:$,error:m}=await y.from("gc_definitions").insert({name:g.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(m){alert(m.message);return}n.push($),t=$.id,s()}),e.querySelectorAll(".btn-toggle-gc").forEach(g=>{g.addEventListener("click",async $=>{$.stopPropagation();const m=g.dataset.active!=="true";await y.from("gc_definitions").update({is_active:m}).eq("id",g.dataset.id);const _=n.find(f=>f.id===g.dataset.id);_&&(_.is_active=m),s()})}),e.querySelectorAll(".btn-delete-gc").forEach(g=>{g.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",g.dataset.id);const m=n.findIndex(_=>_.id===g.dataset.id);m>-1&&n.splice(m,1),t===g.dataset.id&&(t=null),s()})}),(v=p("#btn-pick-gc-icon"))==null||v.addEventListener("click",async()=>{var $;const g=p("#gc-icon-picker");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const _=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(_)?_.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!f.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const b=(($=p("#gc-image-url"))==null?void 0:$.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(h=>`
          <div class="gc-icon-item" data-name="${h.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===b?"#7a28b8":"#ddd"};background:${h.name===b?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const k=p("#gc-image-url");k&&(k.value=h.dataset.name),g.style.display="none"})})}catch(m){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${m.message}</div>`}}}),(x=p("#btn-save-gc"))==null||x.addEventListener("click",async()=>{var _,f,b,h,k,w,I,E,L,z;const g=n.find(B=>B.id===t);if(!g)return;const $={name:((f=(_=p("#gc-name"))==null?void 0:_.value)==null?void 0:f.trim())||g.name,effect:((h=(b=p("#gc-effect"))==null?void 0:b.value)==null?void 0:h.trim())||null,image_url:((w=(k=p("#gc-image-url"))==null?void 0:k.value)==null?void 0:w.trim())||null,gc_type:((I=p("#gc-type"))==null?void 0:I.value)||"game_changer",color:((E=p("#gc-color"))==null?void 0:E.value)||"purple",sort_order:Number((L=p("#gc-sort"))==null?void 0:L.value)||0,is_active:((z=p("#gc-active"))==null?void 0:z.checked)??g.is_active},{error:m}=await y.from("gc_definitions").update($).eq("id",t);if(m){alert(m.message);return}Object.assign(g,$),alert("✅ Carte enregistrée !"),s()})}s()}function Fe(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function He(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function U(){document.getElementById("modal-overlay").classList.add("hidden")}const pe={dashboard:{title:"Dashboard",fn:xe},players:{title:"Joueurs & Cartes",fn:_e},clubs:{title:"Clubs",fn:we},"card-builder":{title:"Card Builder",fn:je},users:{title:"Managers",fn:ge},market:{title:"Marché des transferts",fn:be},"import-export":{title:"Import / Export CSV",fn:Se},formations:{title:"Formations & Liens",fn:Re},"boosters-config":{title:"Boosters",fn:De},"gc-cards":{title:"Game Changers",fn:qe}};async function G(e){document.querySelectorAll(".admin-sidebar nav a").forEach(i=>{i.classList.toggle("active",i.dataset.page===e)});const n=pe[e]||pe.dashboard;document.getElementById("page-title").textContent=n.title;const t=document.getElementById("page-content");t.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(t,{toast:Fe,openModal:He,closeModal:U,navigate:G})}catch(i){t.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${i.message}</div>`,console.error(i)}}async function Ue(){const{data:{session:e}}=await y.auth.getSession();e&&await ue(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),t=document.getElementById("auth-password").value,i=document.getElementById("auth-error");if(i.textContent="",!n||!t){i.textContent="Remplissez tous les champs.";return}const{data:p,error:l}=await y.auth.signInWithPassword({email:n,password:t});if(l){i.textContent=l.message;return}await ue(p.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",U),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&U()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),G(n.dataset.page)})})}async function ue(e){const{data:n,error:t}=await y.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,G("dashboard")}Ue();
