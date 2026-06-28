import{s as x,e as K,g as xe,K as ye,D as A,S as Ie,a as B,H as Le,R as ze,b as he,r as Be,c as Ae,E as Se,d as Ce,N as Te,M as je,B as Re,F as Z,f as re,h as Me,i as Ne}from"./formation-links-CEzN0rcz.js";async function Pe(e){const[{count:t},{count:n},{count:o},{count:g},{count:r}]=await Promise.all([x.from("players").select("*",{count:"exact",head:!0}),x.from("clubs").select("*",{count:"exact",head:!0}),x.from("users").select("*",{count:"exact",head:!0}),x.from("cards").select("*",{count:"exact",head:!0}),x.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${V("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${V("🏟️","Clubs",n??"–","#D4A017")}
      ${V("👥","Managers",o??"–","#7a28b8")}
      ${V("📦","Cartes possédées",g??"–","#2a8f52")}
      ${V("⚽","Matchs joués",r??"–","#bb2020")}
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
  `,window.adminNav=a=>{var s;(s=document.querySelector(`[data-page="${a}"]`))==null||s.click()}}function V(e,t,n,o){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${o}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const le={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Oe={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function qe(e,t){await J(e,t)}async function J(e,t){const{toast:n,openModal:o,closeModal:g}=t,[{data:r,error:a},{data:s}]=await Promise.all([x.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),x.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const c={};(s||[]).forEach(l=>{c[l.id]=l.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(le).map(([l,i])=>`<option value="${l}">${i}</option>`).join("")}
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
  `,d(r);function d(l){document.getElementById("count-label").textContent=`${l.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=l.map(i=>{var f;return`
      <tr>
        <td>
          <div style="font-weight:600">${i.firstname} ${i.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${i.firstname} ${i.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${i.country_code}/flat/32.png" alt="${i.country_code}" style="height:16px;vertical-align:middle"> ${i.country_code}
        </td>
        <td style="font-size:12px">${((f=i.clubs)==null?void 0:f.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${i.job==="ATT"?"#1A6B3C":i.job==="MIL"?"#D4A017":i.job==="DEF"?"#bb2020":"#111"}">
            ${i.job}
          </span>
          ${i.job2?`<span style="font-size:11px;color:#aaa"> / ${i.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${i.note_g} / ${i.note_d} / ${i.note_m} / ${i.note_a}
        </td>
        <td>
          <span style="background:${Oe[i.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${le[i.rarity]||i.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${i.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${i.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(i=>{i.addEventListener("click",()=>{const f=r.find(u=>u.id===i.dataset.edit);se(f,s||[],{toast:n,openModal:o,closeModal:g,reload:()=>J(e,t)})})}),document.querySelectorAll("[data-del]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:f}=await x.from("players").delete().eq("id",i.dataset.del);f?n(f.message,"error"):(n("Joueur supprimé","success"),J(e,t))})})}function b(){const l=document.getElementById("search-players").value.toLowerCase(),i=document.getElementById("filter-rarity").value,f=document.getElementById("filter-job").value;d(r.filter(u=>(!l||`${u.firstname} ${u.surname_encoded} ${u.surname_real}`.toLowerCase().includes(l))&&(!i||u.rarity===i)&&(!f||u.job===f)))}document.getElementById("search-players").addEventListener("input",b),document.getElementById("filter-rarity").addEventListener("change",b),document.getElementById("filter-job").addEventListener("change",b),document.getElementById("add-player-btn").addEventListener("click",()=>{se(null,s||[],{toast:n,openModal:o,closeModal:g,reload:()=>J(e,t)})})}function se(e,t,{toast:n,openModal:o,closeModal:g,reload:r}){const a=!!e,s='<option value="">— Club —</option>'+t.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join("");o(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(c=>`<option value="${c}" ${(e==null?void 0:e.country_code)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${s}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(c=>`<option value="${c}" ${(e==null?void 0:e.job2)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(c=>`<option value="${c}" ${(e==null?void 0:e.rarity)===c?"selected":""}>${c}</option>`).join("")}
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
          ${["blanc","metisse","typ","noir"].map(c=>`<option value="${c}" ${(e==null?void 0:e.skin)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(c=>`<option value="${c}" ${(e==null?void 0:e.hair)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(c=>`<option value="${c}" ${(e==null?void 0:e.hair_length)===c?"selected":""}>${c}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",g),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=K(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const c={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!c.firstname||!c.surname_real||!c.surname_encoded){n("Remplissez les champs obligatoires","error");return}const{error:d}=a?await x.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await x.from("players").insert(c);if(d){n(d.message,"error");return}n(a?"Joueur modifié ✅":"Joueur créé ✅","success"),g(),r()})}let W=[];async function Fe(e,{toast:t,openModal:n,closeModal:o}){await X(e,{toast:t,openModal:n,closeModal:o})}async function X(e,t){const{data:n,error:o}=await x.from("clubs").select("*").order("encoded_name");if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}W=n||[],De(e,t)}function De(e,{toast:t,openModal:n,closeModal:o}){e.innerHTML=`
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
  `,g(W),document.getElementById("search-clubs").addEventListener("input",r=>{const a=r.target.value.toLowerCase();g(W.filter(s=>s.encoded_name.toLowerCase().includes(a)||s.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{de(null,{toast:t,openModal:n,closeModal:o,reload:()=>X(e,{toast:t,openModal:n,closeModal:o})})});function g(r){document.getElementById("clubs-tbody").innerHTML=r.map(a=>{var d;const s=_e(a),c=xe(s).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((d=ye[a.kit_style||"uni"])==null?void 0:d.label)||"Uni"}">${c}</td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const s=W.find(c=>c.id===a.dataset.edit);de(s,{toast:t,openModal:n,closeModal:o,reload:()=>X(e,{toast:t,openModal:n,closeModal:o})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await x.from("clubs").delete().eq("id",a.dataset.del);s?t(s.message,"error"):(t("Club supprimé","success"),X(e,{toast:t,openModal:n,closeModal:o}))})})}}function _e(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function de(e,{toast:t,openModal:n,closeModal:o,reload:g}){var l;const r=!!e,a=e?_e(e):{...A},s=Object.entries(ye).map(([i,f])=>`<option value="${i}" ${a.style===i?"selected":""}>${f.label}</option>`).join("");n(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style">${s}</select>
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
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`);function c(i,f){const u=document.getElementById(i),y=document.getElementById(f);!u||!y||(u.addEventListener("input",()=>{y.value=u.value,b()}),y.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(y.value)&&(u.value=y.value,b())}))}c("m-kit-color1","m-kit-color1-txt"),c("m-kit-color2","m-kit-color2-txt"),c("m-kit-shorts","m-kit-shorts-txt"),c("m-kit-socks","m-kit-socks-txt"),(l=document.getElementById("m-kit-style"))==null||l.addEventListener("change",b);function d(){var i,f,u,y,_;return{style:((i=document.getElementById("m-kit-style"))==null?void 0:i.value)||"uni",color1:((f=document.getElementById("m-kit-color1"))==null?void 0:f.value)||"#1A6B3C",color2:((u=document.getElementById("m-kit-color2"))==null?void 0:u.value)||"#ffffff",shorts:((y=document.getElementById("m-kit-shorts"))==null?void 0:y.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function b(){const i=document.getElementById("kit-preview-wrap");i&&(i.innerHTML=xe(d()))}b(),document.getElementById("m-cancel").addEventListener("click",o),document.getElementById("auto-encode").addEventListener("click",()=>{const i=document.getElementById("m-real").value,f=i.split(" ")[0]||i;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const i=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const f=i.split(" ")[0]||i;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const i=d(),f={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:i.style,kit_color1:i.color1,kit_color2:i.color2,kit_shorts:i.shorts,kit_socks:i.socks};if(!f.real_name||!f.encoded_name||!f.country_code){t("Remplissez tous les champs obligatoires","error");return}const{error:u}=r?await x.from("clubs").update(f).eq("id",e.id):await x.from("clubs").insert(f);if(u){t(u.message,"error");return}t(r?"Club modifié ✅":"Club créé ✅","success"),o(),g()})}const He=["normal","pepite","papyte","legende"],ce=["GK","DEF","MIL","ATT"],Ue=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let O={...B},Q=[];async function Ge(e,{toast:t}){const{data:n}=await x.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");Q=n||[],O={...B},e.innerHTML=Je(Q),Ke(e,Q,t),j()}function pe(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=K(e))}function Ve(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=Q.find(o=>String(o.id)===String(e));return t?{style:t.kit_style||A.style,color1:t.kit_color1||A.color1,color2:t.kit_color2||A.color2,shorts:t.kit_shorts||A.shorts,socks:t.kit_socks||A.socks}:{...A}}function j(){var i,f,u,y;const e=_=>{var p;return((p=document.getElementById(_))==null?void 0:p.value)||""},t={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||K(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(i=document.getElementById("cb-club"))==null?void 0:i.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Ve(),o=document.getElementById("cb-club"),g=((y=(u=o==null?void 0:o.selectedOptions[0])==null?void 0:u.dataset)==null?void 0:y.logo)||null,r=he(O,n,120),a=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,s=Be(t,{portraitUrl:a,clubLogoUrl:g,showNotes:!0}),c=document.getElementById("card-preview");c&&(c.innerHTML=s);const d=document.getElementById("avatar-preview-wrap");d&&(d.innerHTML=r);const b=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&b&&(l.textContent=`${e("cb-firstname")} ${b} → ${e("cb-firstname")} ${t.surname_encoded}`)}function $e(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};O={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ke(e,t,n){var g,r,a,s,c;e.querySelectorAll("input,select").forEach(d=>{d.addEventListener("input",j),d.addEventListener("change",j)});const o=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];o.forEach(d=>{var b;(b=document.getElementById(d))==null||b.addEventListener("change",()=>{$e(),j()})}),(g=document.getElementById("cb-surname-real"))==null||g.addEventListener("input",()=>{pe(),j()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{pe(),j()}),(a=document.getElementById("cb-club"))==null||a.addEventListener("change",j),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",()=>Ye(n)),(c=document.getElementById("btn-reset"))==null||c.addEventListener("click",()=>{e.querySelectorAll("input").forEach(d=>d.value=""),e.querySelectorAll("select").forEach(d=>d.selectedIndex=0),O={...B},o.forEach(d=>{const b=d.replace("av-",""),l=document.getElementById(d);l&&(l.value=B[b]||"")}),j()})}async function Ye(e){const t=a=>{var s;return((s=document.getElementById(a))==null?void 0:s.value)||""},n=t("cb-surname-real").trim(),o=t("cb-surname-enc").trim()||K(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}$e();const g={firstname:t("cb-firstname").trim(),surname_real:n,surname_encoded:o,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:O,skin:O.skin||"blanc",hair:O.hairColor||"marron",hair_length:"court"},{error:r}=await x.from("players").insert(g);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${g.firstname} ${g.surname_encoded}" enregistré !`,"success")}function Je(e){const t=Ue.map(([d,b])=>`<option value="${d}">${b} (${d})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(d=>`<option value="${d.id}" data-logo="${d.logo_url||""}">${d.encoded_name}</option>`).join(""),o=ce.map(d=>`<option value="${d}">${d}</option>`).join(""),g='<option value="">Aucun</option>'+ce.map(d=>`<option value="${d}">${d}</option>`).join(""),r=He.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),a=(d,b,l)=>Object.entries(b).map(([i,f])=>`<option value="${i}" ${i===(l||"")?"selected":""}>${f.label}</option>`).join(""),s=Object.keys(Ie).map(d=>`<option value="${d}" ${d===B.skin?"selected":""}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),c=Object.keys(Le).map(d=>`<option value="${d}" ${d===B.hairColor?"selected":""}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${o}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${g}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(d=>`
            <div style="background:${ze[d]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${d.toUpperCase()}
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
              <select id="av-hair">${a("av-hair",Ae,B.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${c}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${a("av-eyebrows",Se,B.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${a("av-eyes",Ce,B.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${a("av-nose",Te,B.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${a("av-mouth",je,B.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${a("av-beard",Re,B.beard)}</select>
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
  `}async function we(e,{toast:t}){const{data:n,error:o}=await x.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${(n||[]).length} manager(s)</span>
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
  `;const g=n||[];r(g),document.getElementById("search-users").addEventListener("input",a=>{const s=a.target.value.toLowerCase();r(g.filter(c=>{var d;return c.pseudo.toLowerCase().includes(s)||((d=c.club_name)==null?void 0:d.toLowerCase().includes(s))}))});function r(a){document.getElementById("users-tbody").innerHTML=a.map(s=>`
      <tr>
        <td><b>${s.pseudo}</b></td>
        <td style="font-size:12px">${s.club_name||"—"}</td>
        <td style="font-size:12px">${(s.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${s.level}</b></td>
        <td style="font-size:12px">${s.wins}/${s.draws}/${s.losses}</td>
        <td style="font-size:12px">🥇${s.trophies_top1} 🥈${s.trophies_top2} 🥉${s.trophies_top3}</td>
        <td>
          ${s.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${s.id}" data-is-admin="${s.is_admin}">
            ${s.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${c?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:b}=await x.from("users").update({is_admin:c}).eq("id",s.dataset.toggleAdmin);b?t(b.message,"error"):(t("Rôle mis à jour ✅","success"),we(e,{toast:t}))})})}}async function Ee(e,{toast:t}){const{data:n,error:o}=await x.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const g=n||[],r=g.filter(s=>s.status==="active").length,a=g.filter(s=>s.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${r}</div>
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
            ${g.map(s=>{var l,i,f,u;const c=(l=s.card)==null?void 0:l.player,d=c?`${c.firstname} ${c.surname_encoded}`:((i=s.card)==null?void 0:i.card_type)||"—",b={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${d}</b>${c?`<div style="font-size:10px;color:#999">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=s.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((u=s.buyer)==null?void 0:u.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await x.from("market_listings").update({status:"cancelled"}).eq("id",s.dataset.cancel);c?t(c.message,"error"):(t("Annonce annulée","success"),Ee(e,{toast:t}))})})}async function We(e,{toast:t}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{Y("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{Y("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:o}=await x.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let g=`real_name,encoded_name,country_code,logo_url
`;n.forEach(r=>{g+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(ue).join(",")+`
`}),Y("clubs_export.csv",g),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:o}=await x.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(o){t(o.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let g=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(r=>{var a;g+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((a=r.clubs)==null?void 0:a.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(ue).join(",")+`
`}),Y("players_export.csv",g),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const g=document.getElementById("clubs-import-result");g.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),a=me(r);if(a.length===0){g.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let s=0,c=0;const d=[];for(const b of a){if(!b.real_name||!b.encoded_name||!b.country_code){c++,d.push(`Ligne ignorée (champs manquants): ${b.real_name||"?"}`);continue}const l={real_name:b.real_name,encoded_name:b.encoded_name.toUpperCase(),country_code:b.country_code.toUpperCase().slice(0,2),logo_url:b.logo_url||null},{error:i}=await x.from("clubs").upsert(l,{onConflict:"encoded_name"});i?(c++,d.push(`${b.encoded_name}: ${i.message}`)):s++}g.innerHTML=`<div style="color:var(--green)">✅ ${s} clubs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,t(`${s} clubs importés`,"success")}catch(r){g.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const o=n.target.files[0];if(!o)return;const g=document.getElementById("players-import-result");g.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),a=me(r);if(a.length===0){g.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:s}=await x.from("clubs").select("id,encoded_name"),c={};(s||[]).forEach(p=>{c[p.encoded_name.toUpperCase()]=p.id});let d=0,b=0;const l=[],i=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],u=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const p of a){if(!p.firstname||!p.surname_real||!p.country_code||!p.job){b++,l.push(`Ligne ignorée (champs requis manquants): ${p.firstname||"?"}`);continue}if(!i.includes(p.job)){b++,l.push(`${p.firstname}: job invalide "${p.job}"`);continue}const w=p.club_encoded_name&&c[p.club_encoded_name.toUpperCase()]||null,$={firstname:p.firstname,surname_real:p.surname_real,surname_encoded:p.surname_encoded||K(p.surname_real),country_code:p.country_code.toUpperCase().slice(0,2),club_id:w,job:p.job,job2:i.includes(p.job2)?p.job2:null,note_g:parseInt(p.note_g)||0,note_d:parseInt(p.note_d)||0,note_m:parseInt(p.note_m)||0,note_a:parseInt(p.note_a)||0,rarity:f.includes(p.rarity)?p.rarity:"normal",note_min:p.note_min!==""&&p.note_min!=null?parseInt(p.note_min):null,note_max:p.note_max!==""&&p.note_max!=null?parseInt(p.note_max):null,skin:u.includes(p.skin)?p.skin:"blanc",hair:y.includes(p.hair)?p.hair:"noir",hair_length:_.includes(p.hair_length)?p.hair_length:"court",sell_price:parseInt(p.sell_price)||0},{error:m}=await x.from("players").insert($);m?(b++,l.push(`${p.firstname} ${p.surname_real}: ${m.message}`)):d++}g.innerHTML=`<div style="color:var(--green)">✅ ${d} joueurs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${d} joueurs importés`,"success")}catch(r){g.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}n.target.value=""})}function ue(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function Y(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(n),g=document.createElement("a");g.href=o,g.download=e,g.click(),URL.revokeObjectURL(o)}function me(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(a=>a.trim());if(t.length<2)return[];const n=t[0],o=n.split(";").length>n.split(",").length?";":",",g=ge(n,o).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let a=1;a<t.length;a++){if(!t[a].trim())continue;const s=ge(t[a],o),c={};g.forEach((d,b)=>{c[d]=(s[b]||"").trim()}),!Object.values(c).every(d=>!d)&&r.push(c)}return r}function ge(e,t=","){const n=[];let o="",g=!1;for(let r=0;r<e.length;r++){const a=e[r];g?a==='"'?e[r+1]==='"'?(o+='"',r++):g=!1:o+=a:a==='"'?g=!0:a===t?(n.push(o),o=""):o+=a}return n.push(o),n}const Xe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Qe(e,{toast:t}){const n=Object.keys(Z);let o=n[0];const{data:g}=await x.from("formation_links_overrides").select("formation, links"),r={};(g||[]).forEach(b=>{r[b.formation]=b.links});let a=new Set;function s(b,l){return[b,l].sort().join("-")}function c(b){const l=r[b]||Z[b]||[];a=new Set(l.map(([i,f])=>s(i,f)))}c(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${n.map(b=>`<option value="${b}" ${b===o?"selected":""}>${b}</option>`).join("")}
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
  `;function d(){const b=Me[o]||{},l=re(o),i=320,f=400,u=22;function y(m){const v=b[m];return v?{x:v.x*i,y:v.y*f}:null}let _=`<svg width="${i}" height="${f}" viewBox="0 0 ${i} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([m,v],E)=>{const h=y(m),I=y(v);if(!h||!I)return;const z=s(m,v),k=a.has(z),S=k?"#3b82f6":"#999",R=k?.95:.35,M=k?4:3;_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${z}" style="cursor:pointer"/>`,_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="${S}" stroke-width="${M}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${R}" pointer-events="none" data-line-key="${z}"/>`});for(const m of Object.keys(b)){const v=y(m);if(!v)continue;const E=m.replace(/\d+/,""),h=Xe[E]||"#555";_+=`<circle cx="${v.x}" cy="${v.y}" r="${u}" fill="${h}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${m}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const p=document.getElementById("links-list");p.innerHTML=l.map(([m,v])=>{const E=s(m,v),h=a.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${h?"#3b82f6":"#ddd"};
          background:${h?"#eaf2ff":"#fafafa"};
          color:${h?"#1d4ed8":"#888"}">
          <span>${m} ↔ ${v}</span>
          <span>${h?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${a.size}/${l.length} actifs)`);function $(m){a.has(m)?a.delete(m):a.add(m),d()}e.querySelectorAll(".link-hit").forEach(m=>{m.addEventListener("click",()=>$(m.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(m=>{m.addEventListener("click",()=>$(m.dataset.key))})}d(),document.getElementById("formation-select").addEventListener("change",b=>{o=b.target.value,c(o),d()}),document.getElementById("reset-btn").addEventListener("click",()=>{const b=Z[o]||[];a=new Set(b.map(([l,i])=>s(l,i))),d(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=re(o).filter(([f,u])=>a.has(s(f,u))),{error:i}=await x.from("formation_links_overrides").upsert({formation:o,links:l,updated_at:new Date().toISOString()});if(i){t(i.message,"error");return}r[o]=l,t(`Liens enregistrés pour ${o} (${l.length} actifs)`,"success")})}const Ze=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],et=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],tt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function nt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await x.from("booster_configs").select("*").order("sort_order");let n=null,o=[],g=null;const r=()=>window.innerWidth<700;async function a(){if(!n){o=[];return}if(n!==g){const{data:l}=await x.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");o=l||[],g=n}}function s(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===n?"#f0f7f0":"#fff"}">
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function c(){const l=n?(t||[]).find(u=>u.id===n):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const i=o.reduce((u,y)=>u+Number(y.percentage||0),0),f=Math.abs(i-100)<.1;return`
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
              ${tt.map(u=>`<option value="${u.value}" ${l.price_type===u.value?"selected":""}>${u.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${f?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${i.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((u,y)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${y}">
            <select class="rate-type" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Ze.map(_=>`<option value="${_.value}" ${u.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${et.map(_=>`<option value="${_.value}" ${(u.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${y}" type="number" min="1" max="10" value="${u.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${y}" type="number" min="1" max="10" value="${u.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${y}" type="number" min="0.1" max="100" step="0.1" value="${u.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${y}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function d(l=!1){l||await a();const i=!n&&r(),f=n&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||i||!n?s():""}
      ${!r()||f?c():""}
    </div>`,b()}function b(){var f,u,y,_,p,w,$;const l=m=>e.querySelector(m);e.querySelectorAll(".booster-row").forEach(m=>{m.addEventListener("click",v=>{v.target.closest(".btn-delete")||(n=m.dataset.id,g=null,d())})}),(f=l("#btn-back"))==null||f.addEventListener("click",()=>{n=null,d()}),(u=l("#btn-new"))==null||u.addEventListener("click",async()=>{const m=prompt("Nom du nouveau booster :");if(!(m!=null&&m.trim()))return;const{data:v,error:E}=await x.from("booster_configs").insert({name:m.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(v),n=v.id,g=null,d()}),e.querySelectorAll(".btn-delete").forEach(m=>{m.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await x.from("booster_configs").delete().eq("id",m.dataset.id);const E=t.findIndex(h=>h.id===m.dataset.id);E>-1&&t.splice(E,1),n===m.dataset.id&&(n=null,g=null),d()})}),(y=l("#btn-cancel"))==null||y.addEventListener("click",()=>{n=null,d()}),(_=l("#f-price-type"))==null||_.addEventListener("change",m=>{const v=l("#credits-field");v&&(v.style.opacity=m.target.value!=="credits"?"0.4":"1")}),(p=l("#btn-pick-icon"))==null||p.addEventListener("click",async()=>{var v;const m=l("#icon-picker-grid");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const h=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(h)?h.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!I.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const z=((v=l("#f-image-url"))==null?void 0:v.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${I.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===z?"#1A6B3C":"#ddd"};background:${k.name===z?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const S=l("#f-image-url");S&&(S.value=k.dataset.name),m.style.display="none"})})}catch(E){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function i(){e.querySelectorAll("[data-rate-idx]").forEach(m=>{var E,h,I,z,k;const v=Number(m.dataset.rateIdx);v>=0&&v<o.length&&(o[v].card_type=((E=m.querySelector(".rate-type"))==null?void 0:E.value)||"player",o[v].rarity=((h=m.querySelector(".rate-rarity"))==null?void 0:h.value)||null,o[v].note_min=Number((I=m.querySelector(".rate-note-min"))==null?void 0:I.value)||null,o[v].note_max=Number((z=m.querySelector(".rate-note-max"))==null?void 0:z.value)||null,o[v].percentage=Number((k=m.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=l("#btn-add-rate"))==null||w.addEventListener("click",()=>{i(),o.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:o.length}),d(!0)}),e.querySelectorAll(".btn-del-rate").forEach(m=>{m.addEventListener("click",()=>{i(),o.splice(Number(m.dataset.idx),1),d(!0)})}),($=l("#btn-save"))==null||$.addEventListener("click",async()=>{var z,k,S,R,M,F,D,H,U;const m=(t||[]).find(L=>L.id===n);if(!m)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var T,G,ie,oe,ae;const q=Number(L.dataset.rateIdx);v.push({booster_id:n,card_type:((T=L.querySelector(".rate-type"))==null?void 0:T.value)||"player",rarity:((G=L.querySelector(".rate-rarity"))==null?void 0:G.value)||null,note_min:Number((ie=L.querySelector(".rate-note-min"))==null?void 0:ie.value)||null,note_max:Number((oe=L.querySelector(".rate-note-max"))==null?void 0:oe.value)||null,percentage:Number((ae=L.querySelector(".rate-pct"))==null?void 0:ae.value)||0,sort_order:q});const C=v[v.length-1];C.rarity||(C.rarity=null),C.note_min||(C.note_min=null),C.note_max||(C.note_max=null)});const E=v.reduce((L,q)=>L+q.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const h={name:((k=(z=l("#f-name"))==null?void 0:z.value)==null?void 0:k.trim())||m.name,image_url:((R=(S=l("#f-image-url"))==null?void 0:S.value)==null?void 0:R.trim())||null,price_type:(M=l("#f-price-type"))==null?void 0:M.value,price_credits:Number((F=l("#f-price-credits"))==null?void 0:F.value)||0,card_count:Number((D=l("#f-card-count"))==null?void 0:D.value)||5,is_active:((H=l("#f-active"))==null?void 0:H.checked)??m.is_active,sort_order:Number((U=l("#f-sort"))==null?void 0:U.value)||0},{error:I}=await x.from("booster_configs").update(h).eq("id",n);if(I){alert(I.message);return}if(Object.assign(m,h),await x.from("booster_drop_rates").delete().eq("booster_id",n),v.length){const{error:L}=await x.from("booster_drop_rates").insert(v);if(L){alert(L.message);return}}o=v,g=n,alert("✅ Booster enregistré !"),d(!0)})}d()}const ke=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function it(e){await te(e)}async function te(e){const{data:t,error:n}=await x.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(o=>ot(o)).join("")}
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
              ${ke.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>be(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>at(e)),e.querySelectorAll("[data-edit]").forEach(o=>{const g=(t||[]).find(r=>r.id===o.dataset.edit);g&&o.addEventListener("click",()=>be(g))}),e.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await x.from("sell_price_configs").delete().eq("id",o.dataset.delete),await te(e))})})}function ot(e){const t=ke.find(n=>n.value===e.rarity);return`
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
    </tr>`}function be(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function at(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,o=parseInt(document.getElementById("form-price").value)||0,g=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(g>r){alert("Note min doit être ≤ note max");return}const a={rarity:n,price:o,note_min:g,note_max:r,updated_at:new Date().toISOString()};let s;if(t?{error:s}=await x.from("sell_price_configs").update(a).eq("id",t):{error:s}=await x.from("sell_price_configs").insert(a),s){alert("Erreur : "+s.message);return}document.getElementById("config-form").style.display="none",await te(e)}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function rt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await x.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const o=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],g=["GK","DEF","MIL","ATT"],r=()=>window.innerWidth<700,a=i=>e.querySelector(i);function s(i,f=130){if(!i)return"";const u=N.find($=>$.value===i.gc_type)||N[0],y=P.find($=>$.value===i.color)||P[0],_=Math.round(f*.55),p=Math.round(f*.15),w=Math.round(f*.3);return`<div style="width:${f}px;height:${Math.round(f*1.4)}px;border-radius:10px;border:3px solid ${y.hex};background:${u.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${y.hex}55;flex-shrink:0">
      <div style="height:${p}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(f/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${i.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${i.image_url?`<img src="/manager-wars/icons/${i.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(f*.3)}px">${u.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(f/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(i.effect||"").slice(0,60)}${(i.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function c(){return`
    <div id="gc-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(i=>{const f=N.find(y=>y.value===i.gc_type)||N[0],u=P.find(y=>y.value===i.color)||P[0];return`
        <div class="gc-row" data-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${i.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${u.hex};background:${f.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${i.image_url?`<img src="/manager-wars/icons/${i.image_url}" style="width:28px;height:28px;object-fit:contain">`:f.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.name}</div>
            <div style="font-size:11px;color:#888">${f.label} · ${i.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${i.id}" data-active="${i.is_active}"
              style="background:${i.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${i.is_active?"#27ae60":"#e74c3c"};color:${i.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${i.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${i.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function d(){const i=n?(t||[]).find(u=>u.id===n):null;if(!i)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const f=N.find(u=>u.value===i.gc_type)||N[0];return P.find(u=>u.value===i.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${f.bg};border-radius:12px">
        ${s(i,r()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${i.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${i.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(u=>`<option value="${u.value}" ${i.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(u=>`<option value="${u.value}" ${i.color===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${i.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${i.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${i.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${o.map(u=>`<option value="${u.value}" ${(i.effect_type||"BOOST_STAT")===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const u=i.effect_params||{},y=o.find(_=>_.value===(i.effect_type||"BOOST_STAT"))||o[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${y.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${u.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${u.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(u.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${u.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${y.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${g.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${_}" ${!u.roles||u.roles.includes(_)?"checked":""}> ${_}
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
      ${!r()||!n?c():""}
      ${!r()||n?d():""}
    </div>`,l()}function l(){var i,f,u,y,_;e.querySelectorAll(".gc-row").forEach(p=>{p.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=p.dataset.id,b())})}),(i=a("#btn-gc-back"))==null||i.addEventListener("click",()=>{n=null,b()}),(f=a("#btn-cancel-gc"))==null||f.addEventListener("click",()=>{n=null,b()}),(u=a("#btn-new-gc"))==null||u.addEventListener("click",async()=>{const p=prompt("Nom de la carte Game Changer :");if(!(p!=null&&p.trim()))return;const{data:w,error:$}=await x.from("gc_definitions").insert({name:p.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(w),n=w.id,b()}),e.querySelectorAll(".btn-toggle-gc").forEach(p=>{p.addEventListener("click",async w=>{w.stopPropagation();const $=p.dataset.active!=="true";await x.from("gc_definitions").update({is_active:$}).eq("id",p.dataset.id);const m=t.find(v=>v.id===p.dataset.id);m&&(m.is_active=$),b()})}),e.querySelectorAll(".btn-delete-gc").forEach(p=>{p.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await x.from("gc_definitions").delete().eq("id",p.dataset.id);const $=t.findIndex(m=>m.id===p.dataset.id);$>-1&&t.splice($,1),n===p.dataset.id&&(n=null),b()})}),(y=a("#btn-pick-gc-icon"))==null||y.addEventListener("click",async()=>{var w;const p=a("#gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const m=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(m)?m.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!v.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((w=a("#gc-image-url"))==null?void 0:w.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${v.map(h=>`
          <div class="gc-icon-item" data-name="${h.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===E?"#7a28b8":"#ddd"};background:${h.name===E?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,p.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const I=a("#gc-image-url");I&&(I.value=h.dataset.name),p.style.display="none"})})}catch($){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(_=a("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var h,I,z,k,S,R,M,F,D,H,U,L,q,C;const p=t.find(T=>T.id===n);if(!p)return;const w=o.find(T=>{var G;return T.value===(((G=a("#gc-effect-type"))==null?void 0:G.value)||"BOOST_STAT")})||o[0],$=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(T=>T.value):null,m={...w.hasValue?{value:Number((h=a("#gc-p-value"))==null?void 0:h.value)||2}:{},...w.hasCount?{count:Number((I=a("#gc-p-count"))==null?void 0:I.value)||1}:{},...w.hasTarget?{target:((z=a("#gc-p-target"))==null?void 0:z.value)||"home"}:{},...w.hasRoles?{roles:$!=null&&$.length?$:null}:{}},v={name:((S=(k=a("#gc-name"))==null?void 0:k.value)==null?void 0:S.trim())||p.name,effect:((M=(R=a("#gc-effect"))==null?void 0:R.value)==null?void 0:M.trim())||null,image_url:((D=(F=a("#gc-image-url"))==null?void 0:F.value)==null?void 0:D.trim())||null,gc_type:((H=a("#gc-type"))==null?void 0:H.value)||"game_changer",color:((U=a("#gc-color"))==null?void 0:U.value)||"purple",sort_order:Number((L=a("#gc-sort"))==null?void 0:L.value)||0,is_active:((q=a("#gc-active"))==null?void 0:q.checked)??p.is_active,effect_type:((C=a("#gc-effect-type"))==null?void 0:C.value)||"BOOST_STAT",effect_params:m},{error:E}=await x.from("gc_definitions").update(v).eq("id",n);if(E){alert(E.message);return}Object.assign(p,v),alert("✅ Carte enregistrée !"),b()})}b()}Ne(he);function lt(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function st(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ee(){document.getElementById("modal-overlay").classList.add("hidden")}const fe={dashboard:{title:"Dashboard",fn:Pe},players:{title:"Joueurs & Cartes",fn:qe},clubs:{title:"Clubs",fn:Fe},"card-builder":{title:"Card Builder",fn:Ge},users:{title:"Managers",fn:we},market:{title:"Marché des transferts",fn:Ee},"import-export":{title:"Import / Export CSV",fn:We},formations:{title:"Formations & Liens",fn:Qe},"boosters-config":{title:"Boosters",fn:nt},"sell-price":{title:"Prix vente directe",fn:it},"gc-cards":{title:"Game Changers",fn:rt}};async function ne(e){document.querySelectorAll(".admin-sidebar nav a").forEach(o=>{o.classList.toggle("active",o.dataset.page===e)});const t=fe[e]||fe.dashboard;document.getElementById("page-title").textContent=t.title;const n=document.getElementById("page-content");n.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(n,{toast:lt,openModal:st,closeModal:ee,navigate:ne})}catch(o){n.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${o.message}</div>`,console.error(o)}}async function dt(){const{data:{session:e}}=await x.auth.getSession();e&&await ve(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),n=document.getElementById("auth-password").value,o=document.getElementById("auth-error");if(o.textContent="",!t||!n){o.textContent="Remplissez tous les champs.";return}const{data:g,error:r}=await x.auth.signInWithPassword({email:t,password:n});if(r){o.textContent=r.message;return}await ve(g.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await x.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ee),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ee()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),ne(t.dataset.page)})})}async function ve(e){const{data:t,error:n}=await x.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(n||!t){o.textContent="Profil introuvable.";return}if(!t.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await x.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ne("dashboard")}dt();
