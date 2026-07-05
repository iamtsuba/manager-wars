import{s as h,e as W,g as Se,K as Ce,D as A,S as Oe,a as z,H as Fe,R as He,b as Te,r as Ue,c as Ge,E as Ve,d as Ke,N as Je,M as Ye,B as We,f as Xe,F as ae,h as be,i as Qe,j as Ze}from"./formation-links-5A-YoKwp.js";async function et(e){const[{count:i},{count:t},{count:n},{count:p},{count:d}]=await Promise.all([h.from("players").select("*",{count:"exact",head:!0}),h.from("clubs").select("*",{count:"exact",head:!0}),h.from("users").select("*",{count:"exact",head:!0}),h.from("cards").select("*",{count:"exact",head:!0}),h.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${Y("🃏","Joueurs (cartes)",i??"–","#1A6B3C")}
      ${Y("🏟️","Clubs",t??"–","#D4A017")}
      ${Y("👥","Managers",n??"–","#7a28b8")}
      ${Y("📦","Cartes possédées",p??"–","#2a8f52")}
      ${Y("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=a=>{var r;(r=document.querySelector(`[data-page="${a}"]`))==null||r.click()}}function Y(e,i,t,n){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${n}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${i}</div>
  </div>`}const fe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},tt={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function it(e,i){await Q(e,i)}async function Q(e,i){const{toast:t,openModal:n,closeModal:p}=i,[{data:d,error:a},{data:r}]=await Promise.all([h.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),h.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const s={};(r||[]).forEach(l=>{s[l.id]=l.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(fe).map(([l,o])=>`<option value="${l}">${o}</option>`).join("")}
        </select>
        <select id="filter-job" style="width:120px">
          <option value="">Tous postes</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <span style="font-size:13px;color:var(--gray-600);align-self:center" id="count-label">${d.length} joueur(s)</span>
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
  `,c(d);function c(l){document.getElementById("count-label").textContent=`${l.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=l.map(o=>{var v;return`
      <tr>
        <td>
          <div style="font-weight:600">${o.firstname} ${o.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${o.firstname} ${o.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${o.country_code}/flat/32.png" alt="${o.country_code}" style="height:16px;vertical-align:middle"> ${o.country_code}
        </td>
        <td style="font-size:12px">${((v=o.clubs)==null?void 0:v.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${o.job==="ATT"?"#1A6B3C":o.job==="MIL"?"#D4A017":o.job==="DEF"?"#bb2020":"#111"}">
            ${o.job}
          </span>
          ${o.job2?`<span style="font-size:11px;color:#aaa"> / ${o.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${o.note_g} / ${o.note_d} / ${o.note_m} / ${o.note_a}
        </td>
        <td>
          <span style="background:${tt[o.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${fe[o.rarity]||o.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const v=d.find(m=>m.id===o.dataset.edit);xe(v,r||[],{toast:t,openModal:n,closeModal:p,reload:()=>Q(e,i)})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:v}=await h.from("players").delete().eq("id",o.dataset.del);v?t(v.message,"error"):(t("Joueur supprimé","success"),Q(e,i))})})}function b(){const l=document.getElementById("search-players").value.toLowerCase(),o=document.getElementById("filter-rarity").value,v=document.getElementById("filter-job").value;c(d.filter(m=>(!l||`${m.firstname} ${m.surname_encoded} ${m.surname_real}`.toLowerCase().includes(l))&&(!o||m.rarity===o)&&(!v||m.job===v)))}document.getElementById("search-players").addEventListener("input",b),document.getElementById("filter-rarity").addEventListener("change",b),document.getElementById("filter-job").addEventListener("change",b),document.getElementById("add-player-btn").addEventListener("click",()=>{xe(null,r||[],{toast:t,openModal:n,closeModal:p,reload:()=>Q(e,i)})})}function xe(e,i,{toast:t,openModal:n,closeModal:p,reload:d}){const a=!!e,r='<option value="">— Club —</option>'+i.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join("");n(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",p),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=W(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const s={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!s.firstname||!s.surname_real||!s.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:c}=a?await h.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await h.from("players").insert(s);if(c){t(c.message,"error");return}t(a?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),d()})}let Z=[];async function nt(e,{toast:i,openModal:t,closeModal:n}){await ee(e,{toast:i,openModal:t,closeModal:n})}async function ee(e,i){const{data:t,error:n}=await h.from("clubs").select("*").order("encoded_name");if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}Z=t||[],ot(e,i)}function ot(e,{toast:i,openModal:t,closeModal:n}){e.innerHTML=`
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
              <th>Tenue</th>
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
  `,p(Z),document.getElementById("search-clubs").addEventListener("input",d=>{const a=d.target.value.toLowerCase();p(Z.filter(r=>r.encoded_name.toLowerCase().includes(a)||r.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{ve(null,{toast:i,openModal:t,closeModal:n,reload:()=>ee(e,{toast:i,openModal:t,closeModal:n})})});function p(d){document.getElementById("clubs-tbody").innerHTML=d.map(a=>{var c;const r=je(a),s=Se(r).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((c=Ce[a.kit_style||"uni"])==null?void 0:c.label)||"Uni"}">${s}</td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const r=Z.find(s=>s.id===a.dataset.edit);ve(r,{toast:i,openModal:t,closeModal:n,reload:()=>ee(e,{toast:i,openModal:t,closeModal:n})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:r}=await h.from("clubs").delete().eq("id",a.dataset.del);r?i(r.message,"error"):(i("Club supprimé","success"),ee(e,{toast:i,openModal:t,closeModal:n}))})})}}function je(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function ve(e,{toast:i,openModal:t,closeModal:n,reload:p}){var l;const d=!!e,a=e?je(e):{...A},r=Object.entries(Ce).map(([o,v])=>`<option value="${o}" ${a.style===o?"selected":""}>${v.label}</option>`).join("");t(d?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Infos de base -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div>
          <label>Nom réel *</label>
          <input id="m-real" value="${(e==null?void 0:e.real_name)||""}" placeholder="Paris Saint-Germain">
        </div>
        <div>
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${(e==null?void 0:e.encoded_name)||""}" placeholder="PARIS FC" style="flex:1;text-transform:uppercase">
            <button class="btn btn-ghost btn-sm" id="auto-encode" title="Auto-encoder">↻</button>
          </div>
        </div>
        <div>
          <label>Code pays (ISO) *</label>
          <input id="m-country" value="${(e==null?void 0:e.country_code)||""}" maxlength="2" style="text-transform:uppercase;width:80px">
        </div>
        <div>
          <label>Logo (URL)</label>
          <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
        </div>
      </div>

      <!-- Séparateur tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:14px">
        <h4 style="font-size:13px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          👕 Tenue du club
          <span style="font-size:11px;color:var(--gray-600);font-weight:400">(apparaît sur les cartes joueurs)</span>
        </h4>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start">

          <!-- Contrôles -->
          <div style="display:flex;flex-direction:column;gap:10px">
            <div>
              <label>Style de maillot</label>
              <select id="m-kit-style">${r}</select>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div>
                <label>Couleur 1 (principale)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color1" value="${a.color1}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color1-txt" value="${a.color1}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Couleur 2 (secondaire)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color2" value="${a.color2}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color2-txt" value="${a.color2}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Short</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-shorts" value="${a.shorts}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-shorts-txt" value="${a.shorts}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Chaussettes</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-socks" value="${a.socks}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-socks-txt" value="${a.socks}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
            </div>
          </div>

          <!-- Preview tenue -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
            <div id="kit-preview-wrap" style="background:#f5f5f5;border-radius:8px;padding:16px;border:1px solid var(--gray-200)">
              <!-- injecté JS -->
            </div>
            <div style="font-size:11px;color:var(--gray-600);text-align:center">Aperçu tenue</div>
          </div>
        </div>
      </div>

    </div>`,`<button class="btn btn-ghost" id="m-cancel">Annuler</button>
     <button class="btn btn-primary" id="m-save">${d?"Enregistrer":"Créer"}</button>`);function s(o,v){const m=document.getElementById(o),w=document.getElementById(v);!m||!w||(m.addEventListener("input",()=>{w.value=m.value,b()}),w.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(w.value)&&(m.value=w.value,b())}))}s("m-kit-color1","m-kit-color1-txt"),s("m-kit-color2","m-kit-color2-txt"),s("m-kit-shorts","m-kit-shorts-txt"),s("m-kit-socks","m-kit-socks-txt"),(l=document.getElementById("m-kit-style"))==null||l.addEventListener("change",b);function c(){var o,v,m,w,_;return{style:((o=document.getElementById("m-kit-style"))==null?void 0:o.value)||"uni",color1:((v=document.getElementById("m-kit-color1"))==null?void 0:v.value)||"#1A6B3C",color2:((m=document.getElementById("m-kit-color2"))==null?void 0:m.value)||"#ffffff",shorts:((w=document.getElementById("m-kit-shorts"))==null?void 0:w.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function b(){const o=document.getElementById("kit-preview-wrap");o&&(o.innerHTML=Se(c()))}b(),document.getElementById("m-cancel").addEventListener("click",n),document.getElementById("auto-encode").addEventListener("click",()=>{const o=document.getElementById("m-real").value,v=o.split(" ")[0]||o;document.getElementById("m-encoded").value=v.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const o=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const v=o.split(" ")[0]||o;document.getElementById("m-encoded").value=v.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const o=c(),v={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_shorts:o.shorts,kit_socks:o.socks};if(!v.real_name||!v.encoded_name||!v.country_code){i("Remplissez tous les champs obligatoires","error");return}const{error:m}=d?await h.from("clubs").update(v).eq("id",e.id):await h.from("clubs").insert(v);if(m){i(m.message,"error");return}i(d?"Club modifié ✅":"Club créé ✅","success"),n(),p()})}const at=["normal","pepite","papyte","legende"],ye=["GK","DEF","MIL","ATT"],rt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let N={...z},te=[];async function dt(e,{toast:i}){const{data:t}=await h.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");te=t||[],N={...z},e.innerHTML=pt(te),st(e,te,i),T()}function he(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",i=document.getElementById("cb-surname-enc");i&&(i.value=W(e))}function lt(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,i=te.find(n=>String(n.id)===String(e));return i?{style:i.kit_style||A.style,color1:i.kit_color1||A.color1,color2:i.kit_color2||A.color2,shorts:i.kit_shorts||A.shorts,socks:i.kit_socks||A.socks}:{...A}}function T(){var o,v,m,w;const e=_=>{var g;return((g=document.getElementById(_))==null?void 0:g.value)||""},i={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||W(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((v=(o=document.getElementById("cb-club"))==null?void 0:o.selectedOptions[0])==null?void 0:v.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=lt(),n=document.getElementById("cb-club"),p=((w=(m=n==null?void 0:n.selectedOptions[0])==null?void 0:m.dataset)==null?void 0:w.logo)||null,d=Te(N,t,120),a=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,r=Ue(i,{portraitUrl:a,clubLogoUrl:p,showNotes:!0}),s=document.getElementById("card-preview");s&&(s.innerHTML=r);const c=document.getElementById("avatar-preview-wrap");c&&(c.innerHTML=d);const b=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&b&&(l.textContent=`${e("cb-firstname")} ${b} → ${e("cb-firstname")} ${i.surname_encoded}`)}function Me(){const e=i=>{var t;return((t=document.getElementById(i))==null?void 0:t.value)||""};N={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function st(e,i,t){var p,d,a,r,s;e.querySelectorAll("input,select").forEach(c=>{c.addEventListener("input",T),c.addEventListener("change",T)});const n=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];n.forEach(c=>{var b;(b=document.getElementById(c))==null||b.addEventListener("change",()=>{Me(),T()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{he(),T()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{he(),T()}),(a=document.getElementById("cb-club"))==null||a.addEventListener("change",T),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>ct(t)),(s=document.getElementById("btn-reset"))==null||s.addEventListener("click",()=>{e.querySelectorAll("input").forEach(c=>c.value=""),e.querySelectorAll("select").forEach(c=>c.selectedIndex=0),N={...z},n.forEach(c=>{const b=c.replace("av-",""),l=document.getElementById(c);l&&(l.value=z[b]||"")}),T()})}async function ct(e){const i=a=>{var r;return((r=document.getElementById(a))==null?void 0:r.value)||""},t=i("cb-surname-real").trim(),n=i("cb-surname-enc").trim()||W(t);if(!i("cb-firstname")||!t||!i("cb-country")||!i("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Me();const p={firstname:i("cb-firstname").trim(),surname_real:t,surname_encoded:n,country_code:i("cb-country"),club_id:i("cb-club")||null,job:i("cb-job"),job2:i("cb-job2")||null,note_g:parseInt(i("cb-note-g"))||0,note_d:parseInt(i("cb-note-d"))||0,note_m:parseInt(i("cb-note-m"))||0,note_a:parseInt(i("cb-note-a"))||0,rarity:i("cb-rarity")||"normal",note_min:parseInt(i("cb-note-min"))||null,note_max:parseInt(i("cb-note-max"))||null,sell_price:parseInt(i("cb-price"))||0,avatar_config:N,skin:N.skin||"blanc",hair:N.hairColor||"marron",hair_length:"court"},{error:d}=await h.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_encoded}" enregistré !`,"success")}function pt(e){const i=rt.map(([c,b])=>`<option value="${c}">${b} (${c})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(c=>`<option value="${c.id}" data-logo="${c.logo_url||""}">${c.encoded_name}</option>`).join(""),n=ye.map(c=>`<option value="${c}">${c}</option>`).join(""),p='<option value="">Aucun</option>'+ye.map(c=>`<option value="${c}">${c}</option>`).join(""),d=at.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),a=(c,b,l)=>Object.entries(b).map(([o,v])=>`<option value="${o}" ${o===(l||"")?"selected":""}>${v.label}</option>`).join(""),r=Object.keys(Oe).map(c=>`<option value="${c}" ${c===z.skin?"selected":""}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),s=Object.keys(Fe).map(c=>`<option value="${c}" ${c===z.hairColor?"selected":""}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join("");return`
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
          <div><label>Pays *</label><select id="cb-country">${i}</select></div>
          <div><label>Club</label><select id="cb-club">${t}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${n}</select></div>
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
          ${["normal","pepite","papyte","legende"].map(c=>`
            <div style="background:${He[c]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${c.toUpperCase()}
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
              <select id="av-hair">${a("av-hair",Ge,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${s}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${a("av-eyebrows",Ve,z.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${a("av-eyes",Ke,z.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${a("av-nose",Je,z.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${a("av-mouth",Ye,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${a("av-beard",We,z.beard)}</select>
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
  `}async function Re(e,{toast:i}){const{data:t,error:n}=await h.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}const p=t||[];e.innerHTML=`
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
  `,d(p),document.getElementById("search-users").addEventListener("input",a=>{const r=a.target.value.toLowerCase();d(p.filter(s=>{var c;return s.pseudo.toLowerCase().includes(r)||((c=s.club_name)==null?void 0:c.toLowerCase().includes(r))}))});function d(a){document.getElementById("users-tbody").innerHTML=a.map(r=>{const s=r.mmr??1e3,c=r.mmr_deviation??350,b=r.placement_matches??0,l=Xe(s),o=r.ranked_wins??0,v=r.ranked_losses??0,m=r.ranked_draws??0,w=o+v+m,_=w>0?Math.round(o/w*100):null,g=b<10,$=c<80?"#1A6B3C":c<150?"#e67e22":"#bb2020";return`
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
            ${g?`<div style="font-size:10px;color:#e67e22">${b}/10 placement${b<10?` (${10-b} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${o}V ${m}N ${v}D${_!==null?` · ${_}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${s}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(c)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${s?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:c}=await h.from("users").update({is_admin:s}).eq("id",r.dataset.toggleAdmin);c?i(c.message,"error"):(i("Rôle mis à jour ✅","success"),Re(e,{toast:i}))})})}}async function De(e,{toast:i}){const{data:t,error:n}=await h.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}const p=t||[],d=p.filter(r=>r.status==="active").length,a=p.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
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
            ${p.map(r=>{var l,o,v,m;const s=(l=r.card)==null?void 0:l.player,c=s?`${s.firstname} ${s.surname_encoded}`:((o=r.card)==null?void 0:o.card_type)||"—",b={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${c}</b>${s?`<div style="font-size:10px;color:#999">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((v=r.seller)==null?void 0:v.pseudo)||"—"}</td>
                <td style="font-size:12px">${((m=r.buyer)==null?void 0:m.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${b[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await h.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);s?i(s.message,"error"):(i("Annonce annulée","success"),De(e,{toast:i}))})})}async function ut(e,{toast:i}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{X("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{X("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:n}=await h.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;t.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(we).join(",")+`
`}),X("clubs_export.csv",p),i(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:n}=await h.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(d=>{var a;p+=[d.firstname,d.surname_real,d.surname_encoded,d.country_code,((a=d.clubs)==null?void 0:a.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(we).join(",")+`
`}),X("players_export.csv",p),i(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await n.text(),a=Ee(d);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,s=0;const c=[];for(const b of a){if(!b.real_name||!b.encoded_name||!b.country_code){s++,c.push(`Ligne ignorée (champs manquants): ${b.real_name||"?"}`);continue}const l={real_name:b.real_name,encoded_name:b.encoded_name.toUpperCase(),country_code:b.country_code.toUpperCase().slice(0,2),logo_url:b.logo_url||null},{error:o}=await h.from("clubs").upsert(l,{onConflict:"encoded_name"});o?(s++,c.push(`${b.encoded_name}: ${o.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,i(`${r} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await n.text(),a=Ee(d);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await h.from("clubs").select("id,encoded_name"),s={};(r||[]).forEach(g=>{s[g.encoded_name.toUpperCase()]=g.id});let c=0,b=0;const l=[],o=["GK","DEF","MIL","ATT"],v=["normal","pepite","papyte","legende"],m=["blanc","metisse","typ","noir"],w=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const g of a){if(!g.firstname||!g.surname_real||!g.country_code||!g.job){b++,l.push(`Ligne ignorée (champs requis manquants): ${g.firstname||"?"}`);continue}if(!o.includes(g.job)){b++,l.push(`${g.firstname}: job invalide "${g.job}"`);continue}const $=g.club_encoded_name&&s[g.club_encoded_name.toUpperCase()]||null,k={firstname:g.firstname,surname_real:g.surname_real,surname_encoded:g.surname_encoded||W(g.surname_real),country_code:g.country_code.toUpperCase().slice(0,2),club_id:$,job:g.job,job2:o.includes(g.job2)?g.job2:null,note_g:parseInt(g.note_g)||0,note_d:parseInt(g.note_d)||0,note_m:parseInt(g.note_m)||0,note_a:parseInt(g.note_a)||0,rarity:v.includes(g.rarity)?g.rarity:"normal",note_min:g.note_min!==""&&g.note_min!=null?parseInt(g.note_min):null,note_max:g.note_max!==""&&g.note_max!=null?parseInt(g.note_max):null,skin:m.includes(g.skin)?g.skin:"blanc",hair:w.includes(g.hair)?g.hair:"noir",hair_length:_.includes(g.hair_length)?g.hair_length:"court",sell_price:parseInt(g.sell_price)||0},{error:y}=await h.from("players").insert(k);y?(b++,l.push(`${g.firstname} ${g.surname_real}: ${y.message}`)):c++}p.innerHTML=`<div style="color:var(--green)">✅ ${c} joueurs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,i(`${c} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""})}function we(e){const i=String(e??"");return i.includes(",")||i.includes('"')||i.includes(`
`)?'"'+i.replace(/"/g,'""')+'"':i}function X(e,i){const t=new Blob(["\uFEFF"+i],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),p=document.createElement("a");p.href=n,p.download=e,p.click(),URL.revokeObjectURL(n)}function Ee(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const i=e.split(`
`).filter(a=>a.trim());if(i.length<2)return[];const t=i[0],n=t.split(";").length>t.split(",").length?";":",",p=_e(t,n).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let a=1;a<i.length;a++){if(!i[a].trim())continue;const r=_e(i[a],n),s={};p.forEach((c,b)=>{s[c]=(r[b]||"").trim()}),!Object.values(s).every(c=>!c)&&d.push(s)}return d}function _e(e,i=","){const t=[];let n="",p=!1;for(let d=0;d<e.length;d++){const a=e[d];p?a==='"'?e[d+1]==='"'?(n+='"',d++):p=!1:n+=a:a==='"'?p=!0:a===i?(t.push(n),n=""):n+=a}return t.push(n),t}const mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function gt(e,{toast:i}){const t=Object.keys(ae);let n=t[0];const{data:p}=await h.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(b=>{d[b.formation]=b.links});let a=new Set;function r(b,l){return[b,l].sort().join("-")}function s(b){const l=d[b]||ae[b]||[];a=new Set(l.map(([o,v])=>r(o,v)))}s(n),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(b=>`<option value="${b}" ${b===n?"selected":""}>${b}</option>`).join("")}
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
  `;function c(){const b=Qe[n]||{},l=be(n),o=320,v=400,m=22;function w(y){const u=b[y];return u?{x:u.x*o,y:u.y*v}:null}let _=`<svg width="${o}" height="${v}" viewBox="0 0 ${o} ${v}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([y,u],f)=>{const x=w(y),E=w(u);if(!x||!E)return;const B=r(y,u),I=a.has(B),S=I?"#3b82f6":"#999",j=I?.95:.35,M=I?4:3;_+=`<line x1="${x.x}" y1="${x.y}" x2="${E.x}" y2="${E.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,_+=`<line x1="${x.x}" y1="${x.y}" x2="${E.x}" y2="${E.y}"
        stroke="${S}" stroke-width="${M}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${j}" pointer-events="none" data-line-key="${B}"/>`});for(const y of Object.keys(b)){const u=w(y);if(!u)continue;const f=y.replace(/\d+/,""),x=mt[f]||"#555";_+=`<circle cx="${u.x}" cy="${u.y}" r="${m}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${u.x}" y="${u.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const g=document.getElementById("links-list");g.innerHTML=l.map(([y,u])=>{const f=r(y,u),x=a.has(f);return`
        <button class="link-toggle" data-key="${f}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${u}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${a.size}/${l.length} actifs)`);function k(y){a.has(y)?a.delete(y):a.add(y),c()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))})}c(),document.getElementById("formation-select").addEventListener("change",b=>{n=b.target.value,s(n),c()}),document.getElementById("reset-btn").addEventListener("click",()=>{const b=ae[n]||[];a=new Set(b.map(([l,o])=>r(l,o))),c(),i("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=be(n).filter(([v,m])=>a.has(r(v,m))),{error:o}=await h.from("formation_links_overrides").upsert({formation:n,links:l,updated_at:new Date().toISOString()});if(o){i(o.message,"error");return}d[n]=l,i(`Liens enregistrés pour ${n} (${l.length} actifs)`,"success")})}const bt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],ft=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],xt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function vt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await h.from("booster_configs").select("*").order("sort_order");let t=null,n=[],p=null;const d=()=>window.innerWidth<700;async function a(){if(!t){n=[];return}if(t!==p){const{data:l}=await h.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");n=l||[],p=t}}function r(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(i||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(i||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===t?"#f0f7f0":"#fff"}">
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
      ${(i||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const l=t?(i||[]).find(m=>m.id===t):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const o=n.reduce((m,w)=>m+Number(w.percentage||0),0),v=Math.abs(o-100)<.1;return`
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
              ${xt.map(m=>`<option value="${m.value}" ${l.price_type===m.value?"selected":""}>${m.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${v?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${o.toFixed(1)}% ${v?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${n.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':n.map((m,w)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${w}">
            <select class="rate-type" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${bt.map(_=>`<option value="${_.value}" ${m.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${ft.map(_=>`<option value="${_.value}" ${(m.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${w}" type="number" min="1" max="10" value="${m.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${w}" type="number" min="1" max="10" value="${m.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${w}" type="number" min="0.1" max="100" step="0.1" value="${m.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${w}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function c(l=!1){l||await a();const o=!t&&d(),v=t&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||o||!t?r():""}
      ${!d()||v?s():""}
    </div>`,b()}function b(){var v,m,w,_,g,$,k;const l=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",u=>{u.target.closest(".btn-delete")||(t=y.dataset.id,p=null,c())})}),(v=l("#btn-back"))==null||v.addEventListener("click",()=>{t=null,c()}),(m=l("#btn-new"))==null||m.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:u,error:f}=await h.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(f){alert(f.message);return}i.push(u),t=u.id,p=null,c()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async u=>{if(u.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await h.from("booster_configs").delete().eq("id",y.dataset.id);const f=i.findIndex(x=>x.id===y.dataset.id);f>-1&&i.splice(f,1),t===y.dataset.id&&(t=null,p=null),c()})}),(w=l("#btn-cancel"))==null||w.addEventListener("click",()=>{t=null,c()}),(_=l("#f-price-type"))==null||_.addEventListener("change",y=>{const u=l("#credits-field");u&&(u.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(g=l("#btn-pick-icon"))==null||g.addEventListener("click",async()=>{var u;const y=l("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(x)?x.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!E.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((u=l("#f-image-url"))==null?void 0:u.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${E.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===B?"#1A6B3C":"#ddd"};background:${I.name===B?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const S=l("#f-image-url");S&&(S.value=I.dataset.name),y.style.display="none"})})}catch(f){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${f.message}</div>`}}});function o(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var f,x,E,B,I;const u=Number(y.dataset.rateIdx);u>=0&&u<n.length&&(n[u].card_type=((f=y.querySelector(".rate-type"))==null?void 0:f.value)||"player",n[u].rarity=((x=y.querySelector(".rate-rarity"))==null?void 0:x.value)||null,n[u].note_min=Number((E=y.querySelector(".rate-note-min"))==null?void 0:E.value)||null,n[u].note_max=Number((B=y.querySelector(".rate-note-max"))==null?void 0:B.value)||null,n[u].percentage=Number((I=y.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}($=l("#btn-add-rate"))==null||$.addEventListener("click",()=>{o(),n.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:n.length}),c(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{o(),n.splice(Number(y.dataset.idx),1),c(!0)})}),(k=l("#btn-save"))==null||k.addEventListener("click",async()=>{var B,I,S,j,M,F,H,U,G,V,K,J,C;const y=(i||[]).find(L=>L.id===t);if(!y)return;const u=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var ce,pe,ue,me,ge;const oe=Number(L.dataset.rateIdx);u.push({booster_id:t,card_type:((ce=L.querySelector(".rate-type"))==null?void 0:ce.value)||"player",rarity:((pe=L.querySelector(".rate-rarity"))==null?void 0:pe.value)||null,note_min:Number((ue=L.querySelector(".rate-note-min"))==null?void 0:ue.value)||null,note_max:Number((me=L.querySelector(".rate-note-max"))==null?void 0:me.value)||null,percentage:Number((ge=L.querySelector(".rate-pct"))==null?void 0:ge.value)||0,sort_order:oe});const q=u[u.length-1];q.rarity||(q.rarity=null),q.note_min||(q.note_min=null),q.note_max||(q.note_max=null)});const f=u.reduce((L,oe)=>L+oe.percentage,0);if(u.length&&Math.abs(f-100)>.5){alert(`La somme doit faire 100% (actuellement ${f.toFixed(1)}%)`);return}const x={name:((I=(B=l("#f-name"))==null?void 0:B.value)==null?void 0:I.trim())||y.name,image_url:((j=(S=l("#f-image-url"))==null?void 0:S.value)==null?void 0:j.trim())||null,price_type:(M=l("#f-price-type"))==null?void 0:M.value,price_credits:Number((F=l("#f-price-credits"))==null?void 0:F.value)||0,card_count:Number((H=l("#f-card-count"))==null?void 0:H.value)||5,is_active:((U=l("#f-active"))==null?void 0:U.checked)??y.is_active,allow_duplicates:((G=l("#f-allow-dup"))==null?void 0:G.checked)??!0,sort_order:Number((V=l("#f-sort"))==null?void 0:V.value)||0,max_per_user:(K=l("#f-max-per-user"))!=null&&K.value?Number(l("#f-max-per-user").value):null,available_from:((J=l("#f-available-from"))==null?void 0:J.value)||null,available_until:((C=l("#f-available-until"))==null?void 0:C.value)||null},{error:E}=await h.from("booster_configs").update(x).eq("id",t);if(E){alert(E.message);return}if(Object.assign(y,x),await h.from("booster_drop_rates").delete().eq("booster_id",t),u.length){const{error:L}=await h.from("booster_drop_rates").insert(u);if(L){alert(L.message);return}}n=u,p=t,alert("✅ Booster enregistré !"),c(!0)})}c()}const Ne=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function yt(e){await de(e)}async function de(e){const{data:i,error:t}=await h.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(i||[]).map(n=>ht(n)).join("")}
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
              ${Ne.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>$e(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>wt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const p=(i||[]).find(d=>d.id===n.dataset.edit);p&&n.addEventListener("click",()=>$e(p))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await h.from("sell_price_configs").delete().eq("id",n.dataset.delete),await de(e))})})}function ht(e){const i=Ne.find(t=>t.value===e.rarity);return`
    <tr style="border-top:1px solid #f0f0f0">
      <td style="padding:10px 14px">
        <span style="font-weight:700;color:${(i==null?void 0:i.color)||"#888"}">${(i==null?void 0:i.label)||e.rarity}</span>
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
    </tr>`}function $e(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function wt(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,n=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const a={rarity:t,price:n,note_min:p,note_max:d,updated_at:new Date().toISOString()};let r;if(i?{error:r}=await h.from("sell_price_configs").update(a).eq("id",i):{error:r}=await h.from("sell_price_configs").insert(a),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await de(e)}async function Et(e){await le(e)}async function le(e){const{data:i}=await h.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(i||[]).map(t=>_t(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>ke(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>$t(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const n=(i||[]).find(p=>p.id===t.dataset.edit);n&&t.addEventListener("click",()=>ke(n))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await h.from("patch_notes").delete().eq("id",t.dataset.delete),await le(e))})})}function _t(e){const i=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${i}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`}function ke(e){const i=document.getElementById("article-form");i.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),n=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=n,i.scrollIntoView({behavior:"smooth"})}async function $t(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),n=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,a=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!n){alert("La description est obligatoire.");return}const r=a?new Date(a).toISOString():new Date().toISOString(),s={title:t,description:n,image_url:p,is_published:d,published_at:r};let c;if(i?{error:c}=await h.from("patch_notes").update(s).eq("id",i):{error:c}=await h.from("patch_notes").insert(s),c){alert("Erreur : "+c.message);return}document.getElementById("article-form").style.display="none",await le(e)}async function kt(e){await O(e)}async function O(e){var b,l,o,v,m,w,_,g,$,k,y,u;const{data:i}=await h.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
        ${(i||[]).length===0?`
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>`:(i||[]).map(f=>It(f)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([f,x,E])=>`<button type="button" data-cmd="${x}" title="${E}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${f}</button>`).join("")}
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
    </div>`,(b=document.getElementById("ts-add"))==null||b.addEventListener("click",()=>Ie(null,(i==null?void 0:i.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:f}=await h.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(f?"Erreur : "+f.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(o=document.getElementById("ts-cancel"))==null||o.addEventListener("click",qe),(v=document.getElementById("ts-save"))==null||v.addEventListener("click",()=>Lt(e)),(m=document.getElementById("ts-preview-btn"))==null||m.addEventListener("click",Bt);const t=document.getElementById("ts-editor"),n=()=>{const f=document.getElementById("ts-content");f&&t&&(f.value=t.innerHTML)};t==null||t.addEventListener("input",n),t==null||t.addEventListener("blur",n);const p=()=>{document.activeElement!==t&&(t==null||t.focus())};(w=document.getElementById("ts-toolbar"))==null||w.querySelectorAll("[data-cmd]").forEach(f=>{f.addEventListener("mousedown",x=>{x.preventDefault(),p();const E=f.dataset.cmd;E.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,E.split(":")[1]):document.execCommand(E,!1,null),n()})}),(_=document.getElementById("ts-insert-color"))==null||_.addEventListener("mousedown",f=>{f.preventDefault(),p();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),n())}),(g=document.getElementById("ts-clear-format"))==null||g.addEventListener("mousedown",f=>{f.preventDefault(),p(),document.execCommand("removeFormat",!1,null),n()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),a=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),s=document.getElementById("ts-img-picker-grid"),c=()=>{var x;const f=(x=d==null?void 0:d.value)==null?void 0:x.trim();if(f){const E="/";r.src=`${E}icons/${f}`,a.style.display="block"}else a.style.display="none"};d==null||d.addEventListener("input",c),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{d&&(d.value=""),a.style.display="none",s.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(s.style.display!=="none"){s.style.display="none";return}s.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',s.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(x)?x.filter(I=>I.name.startsWith("tuto_")):[];if(!E.length){s.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B="/";s.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+E.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",s.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),c(),s.style.display="none"})})}catch(f){s.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+f.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",f=>{const x=document.getElementById("ts-color-hex");x&&(x.value=f.target.value)}),(u=document.getElementById("ts-color-hex"))==null||u.addEventListener("input",f=>{const x=f.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const E=document.getElementById("ts-color");E&&(E.value=x)}}),e.querySelectorAll("[data-edit]").forEach(f=>{const x=(i||[]).find(E=>E.id===f.dataset.edit);x&&f.addEventListener("click",()=>Ie(x))}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await h.from("tutorial_steps").delete().eq("id",f.dataset.delete),O(e))})}),e.querySelectorAll("[data-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const x=(i||[]).find(E=>E.id===f.dataset.toggle);x&&(await h.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),O(e))})}),e.querySelectorAll("[data-up]").forEach(f=>{f.addEventListener("click",async()=>{const x=i||[],E=x.findIndex(B=>B.id===f.dataset.up);E<=0||(await Promise.all([h.from("tutorial_steps").update({step_order:x[E-1].step_order}).eq("id",x[E].id),h.from("tutorial_steps").update({step_order:x[E].step_order}).eq("id",x[E-1].id)]),O(e))})}),e.querySelectorAll("[data-down]").forEach(f=>{f.addEventListener("click",async()=>{const x=i||[],E=x.findIndex(B=>B.id===f.dataset.down);E<0||E>=x.length-1||(await Promise.all([h.from("tutorial_steps").update({step_order:x[E+1].step_order}).eq("id",x[E].id),h.from("tutorial_steps").update({step_order:x[E].step_order}).eq("id",x[E+1].id)]),O(e))})})}function It(e){return`
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
  </div>`}function Ie(e,i=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??i,document.getElementById("ts-active").checked=e?e.is_active:!0;const n=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=n,document.getElementById("ts-color-hex").value=n;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const a=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(p&&a&&r){const s="/";r.src=`${s}icons/${p}`,a.style.display="block"}else a&&(a.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function qe(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Bt(){var c,b;const e=document.getElementById("ts-emoji").value||"⚽",i=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),n=t?t.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(b=(c=document.getElementById("ts-image"))==null?void 0:c.value)==null?void 0:b.trim(),r=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",s=document.getElementById("ts-preview-area");s.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${i}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${r}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${n}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,s.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),s.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),s.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function Lt(e){var l,o;const i=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",n=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),a=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,s=document.getElementById("ts-active").checked;if(!n||!d){alert("Titre et contenu sont obligatoires.");return}const c={emoji:t,title:n,content:d,color:a,step_order:r,is_active:s,image_url:((o=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:o.trim())||null};let b;if(i?{error:b}=await h.from("tutorial_steps").update(c).eq("id",i):{error:b}=await h.from("tutorial_steps").insert(c),b){alert("Erreur : "+b.message);return}qe(),O(e)}const zt="/",Pe="#E87722",At=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function St(e){await se(e)}async function se(e){var n,p,d,a;const[{data:i},{data:t}]=await Promise.all([h.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),h.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(i||[]).map(r=>Ct(r)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(t||[]).map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${At.map(([r,s])=>`<option value="${r}">${s} (${r})</option>`).join("")}
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
    </div>`,(n=document.getElementById("st-add-btn"))==null||n.addEventListener("click",()=>Be(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>jt(e)),(a=document.getElementById("st-preview-btn"))==null||a.addEventListener("click",()=>ie()),["st-name","st-club","st-country","st-image"].forEach(r=>{var s,c;(s=document.getElementById(r))==null||s.addEventListener("input",ie),(c=document.getElementById(r))==null||c.addEventListener("change",ie)}),e.querySelectorAll("[data-edit]").forEach(r=>{const s=(i||[]).find(c=>c.id===r.dataset.edit);s&&r.addEventListener("click",()=>Be(s))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await h.from("stadium_definitions").delete().eq("id",r.dataset.delete),se(e))})})}function Ct(e){var t,n;const i=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${Pe};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${i}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((n=e.club)==null?void 0:n.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Be(e,i){var n,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",ie((n=e==null?void 0:e.club)==null?void 0:n.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function ie(){var c,b,l,o,v,m,w;const e=((c=document.getElementById("st-name"))==null?void 0:c.value)||"NOM DU STADE",i=(l=(b=document.getElementById("st-image"))==null?void 0:b.value)==null?void 0:l.trim(),t=(v=(o=document.getElementById("st-country"))==null?void 0:o.value)==null?void 0:v.trim(),n=document.getElementById("st-club"),p=(n==null?void 0:n.selectedIndex)||0,d=n&&p>0?n.options[p].text:"",a=((w=(m=n==null?void 0:n.options[p])==null?void 0:m.getAttribute)==null?void 0:w.call(m,"data-logo"))||"";let r;i?r=`<img src="${zt}icons/${i}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:a?r=`<img src="${a}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?r=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:r='<div style="font-size:36px;text-align:center">🏟️</div>';const s=d||t||"—";document.getElementById("st-preview-card").innerHTML=Tt(e,r,s,!0)}function Tt(e,i,t,n=!1){return`<div style="width:140px;background:linear-gradient(160deg,${Pe},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${i}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function jt(e){const i=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),n=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const a={name:t,club_id:n,country_code:p,image_url:d},{error:r}=i?await h.from("stadium_definitions").update(a).eq("id",i):await h.from("stadium_definitions").insert(a);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",se(e)}const R=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],D=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function Mt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await h.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const n=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,a=o=>e.querySelector(o);function r(o,v=130){if(!o)return"";const m=R.find(k=>k.value===o.gc_type)||R[0],w=D.find(k=>k.value===o.color)||D[0],_=Math.round(v*.55),g=Math.round(v*.15),$=Math.round(v*.3);return`<div style="width:${v}px;height:${Math.round(v*1.4)}px;border-radius:10px;border:3px solid ${w.hex};background:${m.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${w.hex}55;flex-shrink:0">
      <div style="height:${g}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(v/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${o.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o.image_url?`<img src="/icons/${o.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(v*.3)}px">${m.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${$}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(v/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(o.effect||"").slice(0,60)}${(o.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function s(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(i||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(i||[]).map(o=>{const v=R.find(w=>w.value===o.gc_type)||R[0],m=D.find(w=>w.value===o.color)||D[0];return`
        <div class="gc-row" data-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${m.hex};background:${v.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${o.image_url?`<img src="/icons/${o.image_url}" style="width:28px;height:28px;object-fit:contain">`:v.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
            <div style="font-size:11px;color:#888">${v.label} · ${o.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
      ${(i||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function c(){const o=t?(i||[]).find(m=>m.id===t):null;if(!o)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const v=R.find(m=>m.value===o.gc_type)||R[0];return D.find(m=>m.value===o.color)||D[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${v.bg};border-radius:12px">
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
              ${R.map(m=>`<option value="${m.value}" ${o.gc_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${D.map(m=>`<option value="${m.value}" ${o.color===m.value?"selected":""}>${m.label}</option>`).join("")}
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
              ${n.map(m=>`<option value="${m.value}" ${(o.effect_type||"BOOST_STAT")===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const m=o.effect_params||{},w=n.find(_=>_.value===(o.effect_type||"BOOST_STAT"))||n[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${w.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${m.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${m.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(m.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${m.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${w.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
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
    </div>`}function b(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!t?s():""}
      ${!d()||t?c():""}
    </div>`,l()}function l(){var o,v,m,w,_;e.querySelectorAll(".gc-row").forEach(g=>{g.addEventListener("click",$=>{$.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=g.dataset.id,b())})}),(o=a("#btn-gc-back"))==null||o.addEventListener("click",()=>{t=null,b()}),(v=a("#btn-cancel-gc"))==null||v.addEventListener("click",()=>{t=null,b()}),(m=a("#btn-new-gc"))==null||m.addEventListener("click",async()=>{const g=prompt("Nom de la carte Game Changer :");if(!(g!=null&&g.trim()))return;const{data:$,error:k}=await h.from("gc_definitions").insert({name:g.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}i.push($),t=$.id,b()}),e.querySelectorAll(".btn-toggle-gc").forEach(g=>{g.addEventListener("click",async $=>{$.stopPropagation();const k=g.dataset.active!=="true";await h.from("gc_definitions").update({is_active:k}).eq("id",g.dataset.id);const y=i.find(u=>u.id===g.dataset.id);y&&(y.is_active=k),b()})}),e.querySelectorAll(".btn-delete-gc").forEach(g=>{g.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await h.from("gc_definitions").delete().eq("id",g.dataset.id);const k=i.findIndex(y=>y.id===g.dataset.id);k>-1&&i.splice(k,1),t===g.dataset.id&&(t=null),b()})}),(w=a("#btn-pick-gc-icon"))==null||w.addEventListener("click",async()=>{var $;const g=a("#gc-icon-picker");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),u=Array.isArray(y)?y.filter(x=>x.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(x.name)):[];if(!u.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const f=(($=a("#gc-image-url"))==null?void 0:$.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${u.map(x=>`
          <div class="gc-icon-item" data-name="${x.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${x.name===f?"#7a28b8":"#ddd"};background:${x.name===f?"#f5f0ff":"#fff"}">
            <img src="/icons/${x.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".gc-icon-item").forEach(x=>{x.addEventListener("click",()=>{const E=a("#gc-image-url");E&&(E.value=x.dataset.name),g.style.display="none"})})}catch(k){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(_=a("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var x,E,B,I,S,j,M,F,H,U,G,V,K,J;const g=i.find(C=>C.id===t);if(!g)return;const $=n.find(C=>{var L;return C.value===(((L=a("#gc-effect-type"))==null?void 0:L.value)||"BOOST_STAT")})||n[0],k=$.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(C=>C.value):null,y={...$.hasValue?{value:Number((x=a("#gc-p-value"))==null?void 0:x.value)||2}:{},...$.hasCount?{count:Number((E=a("#gc-p-count"))==null?void 0:E.value)||1}:{},...$.hasTarget?{target:((B=a("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...$.hasRoles?{roles:k!=null&&k.length?k:null}:{}},u={name:((S=(I=a("#gc-name"))==null?void 0:I.value)==null?void 0:S.trim())||g.name,effect:((M=(j=a("#gc-effect"))==null?void 0:j.value)==null?void 0:M.trim())||null,image_url:((H=(F=a("#gc-image-url"))==null?void 0:F.value)==null?void 0:H.trim())||null,gc_type:((U=a("#gc-type"))==null?void 0:U.value)||"game_changer",color:((G=a("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((V=a("#gc-sort"))==null?void 0:V.value)||0,is_active:((K=a("#gc-active"))==null?void 0:K.checked)??g.is_active,effect_type:((J=a("#gc-effect-type"))==null?void 0:J.value)||"BOOST_STAT",effect_params:y},{error:f}=await h.from("gc_definitions").update(u).eq("id",t);if(f){alert(f.message);return}Object.assign(g,u),alert("✅ Carte enregistrée !"),b()})}b()}async function Rt(e,{toast:i,openModal:t,closeModal:n}){await P(e,{toast:i,openModal:t,closeModal:n})}async function P(e,i){var y;const{toast:t,openModal:n,closeModal:p}=i,[{data:d,error:a},{data:r}]=await Promise.all([h.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),h.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const s=d||[],c=s.find(u=>u.is_active),b=(r||[]).filter(u=>(u.placement_matches||0)>=1),l=b.filter(u=>(u.placement_matches||0)>=10),o=["bronze","silver","gold","platinum","diamond","master"],v={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},m={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},w={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},_={};o.forEach(u=>{_[u]=0}),l.forEach(u=>{const f=u.rank_tier||"bronze";_[f]!==void 0&&_[f]++});const g=l.length?Math.round(l.reduce((u,f)=>u+(f.mmr||1e3),0)/l.length):0;function $(u){return u?new Date(u).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(u){const f=new Date;return u.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(u.end_at)<f?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${c?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${c.name}</div>
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
            <div style="font-size:22px;font-weight:900">${g}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(c.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${l.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${o.map(u=>{const f=_[u],x=l.length>0?Math.round(f/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${w[u]} ${v[u]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${m[u]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${f} (${x}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${s.length})</div>
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
              ${s.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':s.map(u=>{const f=Math.round((new Date(u.end_at)-new Date(u.start_at))/864e5),x=new Date(u.end_at)<new Date&&!u.is_active;return`
                    <tr>
                      <td><b>${u.name}</b></td>
                      <td style="font-size:12px">${$(u.start_at)}</td>
                      <td style="font-size:12px">${$(u.end_at)}</td>
                      <td style="font-size:12px">${f} jours</td>
                      <td>${k(u)}</td>
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
    </div>`,(y=document.getElementById("create-season-btn"))==null||y.addEventListener("click",()=>{Le(null,{toast:t,openModal:n,closeModal:p,reload:()=>P(e,i)})}),e.querySelectorAll("[data-edit]").forEach(u=>{const f=s.find(x=>x.id==u.dataset.edit);u.addEventListener("click",()=>{Le(f,{toast:t,openModal:n,closeModal:p,reload:()=>P(e,i)})})}),e.querySelectorAll("[data-activate]").forEach(u=>{u.addEventListener("click",async()=>{const f=parseInt(u.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await h.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){t(x.message,"error");return}const{error:E}=await h.from("ranked_seasons").update({is_active:!0}).eq("id",f);if(E){t(E.message,"error");return}await h.from("users").update({current_season_id:f}).gt("placement_matches",0),t("Saison activée ✅","success"),P(e,i)})}),e.querySelectorAll("[data-deactivate]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:f}=await h.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(u.dataset.deactivate));if(f){t(f.message,"error");return}t("Saison désactivée","success"),P(e,i)})}),e.querySelectorAll("[data-delete]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:f}=await h.from("ranked_seasons").delete().eq("id",parseInt(u.dataset.delete));if(f){t(f.message,"error");return}t("Saison supprimée","success"),P(e,i)})})}function Le(e,{toast:i,openModal:t,closeModal:n,reload:p}){const d=!!e,a=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),s=e?new Date(e.start_at).toISOString().slice(0,16):a,c=e?new Date(e.end_at).toISOString().slice(0,16):r,b=(e==null?void 0:e.name)||"";t(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${b}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${s}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${c}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var _,g;const o=(_=document.getElementById("season-start"))==null?void 0:_.value,v=(g=document.getElementById("season-end"))==null?void 0:g.value,m=document.getElementById("season-duration");if(!o||!v||!m)return;const w=Math.round((new Date(v)-new Date(o))/864e5);m.textContent=w>0?`Durée : ${w} jour${w>1?"s":""}`:"⚠️ La fin doit être après le début",m.style.color=w>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var o,v,m;(o=document.getElementById("season-start"))==null||o.addEventListener("input",l),(v=document.getElementById("season-end"))==null||v.addEventListener("input",l),l(),(m=document.getElementById("season-save-btn"))==null||m.addEventListener("click",async()=>{var f,x,E;const w=(f=document.getElementById("season-name"))==null?void 0:f.value.trim(),_=(x=document.getElementById("season-start"))==null?void 0:x.value,g=(E=document.getElementById("season-end"))==null?void 0:E.value,$=document.getElementById("season-error");if(!w){$.textContent="Le nom est requis.";return}if(!_){$.textContent="La date de début est requise.";return}if(!g){$.textContent="La date de fin est requise.";return}if(new Date(g)<=new Date(_)){$.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const y={name:w,start_at:new Date(_).toISOString(),end_at:new Date(g).toISOString()};let u;if(d?{error:u}=await h.from("ranked_seasons").update(y).eq("id",e.id):{error:u}=await h.from("ranked_seasons").insert({...y,is_active:!1}),u){$.textContent=u.message,k.disabled=!1,k.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}i(d?"Saison modifiée ✅":"Saison créée ✅","success"),n(),p()})},50)}Ze(Te);function Dt(e,i="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${i}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Nt(e,i,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=i,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function re(){document.getElementById("modal-overlay").classList.add("hidden")}const ze={dashboard:{title:"Dashboard",fn:et},players:{title:"Joueurs & Cartes",fn:it},clubs:{title:"Clubs",fn:nt},"card-builder":{title:"Card Builder",fn:dt},users:{title:"Managers",fn:Re},market:{title:"Marché des transferts",fn:De},"import-export":{title:"Import / Export CSV",fn:ut},formations:{title:"Formations & Liens",fn:gt},"boosters-config":{title:"Boosters",fn:vt},"sell-price":{title:"Prix vente directe",fn:yt},journal:{title:"Journal",fn:Et},tutorial:{title:"Tutoriel",fn:kt},stadiums:{title:"Stades",fn:St},"gc-cards":{title:"Game Changers",fn:Mt},"ranked-seasons":{title:"Saisons Ranked",fn:Rt}};async function ne(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const i=document.getElementById("mobile-page-select");i&&(i.value=e);const t=ze[e]||ze.dashboard;document.getElementById("page-title").textContent=t.title;const n=document.getElementById("page-content");n.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(n,{toast:Dt,openModal:Nt,closeModal:re,navigate:ne})}catch(p){n.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function qt(){var i;const{data:{session:e}}=await h.auth.getSession();e&&await Ae(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),n=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!t||!n){p.textContent="Remplissez tous les champs.";return}const{data:d,error:a}=await h.auth.signInWithPassword({email:t,password:n});if(a){p.textContent=a.message;return}await Ae(d.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",re),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&re()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),ne(t.dataset.page)})}),(i=document.getElementById("mobile-page-select"))==null||i.addEventListener("change",t=>{ne(t.target.value)})}async function Ae(e){const{data:i,error:t}=await h.from("users").select("*").eq("id",e.id).single(),n=document.getElementById("auth-error");if(t||!i){n.textContent="Profil introuvable.";return}if(!i.is_admin){n.textContent="Accès refusé. Vous n'êtes pas administrateur.",await h.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${i.pseudo}`,ne("dashboard")}qt();
