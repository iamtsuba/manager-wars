import{s as v,e as Y,g as we,K as Ee,D as A,S as Te,a as z,H as Se,R as je,b as $e,r as Ce,c as Me,E as Re,d as Ne,N as Pe,M as qe,B as Oe,F as te,f as de,h as De,i as Fe}from"./formation-links-DJC25wD7.js";async function He(e){const[{count:i},{count:t},{count:n},{count:u},{count:r}]=await Promise.all([v.from("players").select("*",{count:"exact",head:!0}),v.from("clubs").select("*",{count:"exact",head:!0}),v.from("users").select("*",{count:"exact",head:!0}),v.from("cards").select("*",{count:"exact",head:!0}),v.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${K("🃏","Joueurs (cartes)",i??"–","#1A6B3C")}
      ${K("🏟️","Clubs",t??"–","#D4A017")}
      ${K("👥","Managers",n??"–","#7a28b8")}
      ${K("📦","Cartes possédées",u??"–","#2a8f52")}
      ${K("⚽","Matchs joués",r??"–","#bb2020")}
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
  `,window.adminNav=a=>{var s;(s=document.querySelector(`[data-page="${a}"]`))==null||s.click()}}function K(e,i,t,n){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${n}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${i}</div>
  </div>`}const se={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Ue={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ge(e,i){await W(e,i)}async function W(e,i){const{toast:t,openModal:n,closeModal:u}=i,[{data:r,error:a},{data:s}]=await Promise.all([v.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),v.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const c={};(s||[]).forEach(p=>{c[p.id]=p.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(se).map(([p,o])=>`<option value="${p}">${o}</option>`).join("")}
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
  `,d(r);function d(p){document.getElementById("count-label").textContent=`${p.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=p.map(o=>{var f;return`
      <tr>
        <td>
          <div style="font-weight:600">${o.firstname} ${o.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${o.firstname} ${o.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${o.country_code}/flat/32.png" alt="${o.country_code}" style="height:16px;vertical-align:middle"> ${o.country_code}
        </td>
        <td style="font-size:12px">${((f=o.clubs)==null?void 0:f.encoded_name)||"—"}</td>
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
          <span style="background:${Ue[o.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${se[o.rarity]||o.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const f=r.find(b=>b.id===o.dataset.edit);ce(f,s||[],{toast:t,openModal:n,closeModal:u,reload:()=>W(e,i)})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:f}=await v.from("players").delete().eq("id",o.dataset.del);f?t(f.message,"error"):(t("Joueur supprimé","success"),W(e,i))})})}function m(){const p=document.getElementById("search-players").value.toLowerCase(),o=document.getElementById("filter-rarity").value,f=document.getElementById("filter-job").value;d(r.filter(b=>(!p||`${b.firstname} ${b.surname_encoded} ${b.surname_real}`.toLowerCase().includes(p))&&(!o||b.rarity===o)&&(!f||b.job===f)))}document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("add-player-btn").addEventListener("click",()=>{ce(null,s||[],{toast:t,openModal:n,closeModal:u,reload:()=>W(e,i)})})}function ce(e,i,{toast:t,openModal:n,closeModal:u,reload:r}){const a=!!e,s='<option value="">— Club —</option>'+i.map(c=>`<option value="${c.id}" ${(e==null?void 0:e.club_id)===c.id?"selected":""}>${c.encoded_name}</option>`).join("");n(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",u),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=Y(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const c={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!c.firstname||!c.surname_real||!c.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:d}=a?await v.from("players").update({...c,updated_at:new Date().toISOString()}).eq("id",e.id):await v.from("players").insert(c);if(d){t(d.message,"error");return}t(a?"Joueur modifié ✅":"Joueur créé ✅","success"),u(),r()})}let X=[];async function Ve(e,{toast:i,openModal:t,closeModal:n}){await Q(e,{toast:i,openModal:t,closeModal:n})}async function Q(e,i){const{data:t,error:n}=await v.from("clubs").select("*").order("encoded_name");if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}X=t||[],Ke(e,i)}function Ke(e,{toast:i,openModal:t,closeModal:n}){e.innerHTML=`
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
  `,u(X),document.getElementById("search-clubs").addEventListener("input",r=>{const a=r.target.value.toLowerCase();u(X.filter(s=>s.encoded_name.toLowerCase().includes(a)||s.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{pe(null,{toast:i,openModal:t,closeModal:n,reload:()=>Q(e,{toast:i,openModal:t,closeModal:n})})});function u(r){document.getElementById("clubs-tbody").innerHTML=r.map(a=>{var d;const s=ke(a),c=we(s).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((d=Ee[a.kit_style||"uni"])==null?void 0:d.label)||"Uni"}">${c}</td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const s=X.find(c=>c.id===a.dataset.edit);pe(s,{toast:i,openModal:t,closeModal:n,reload:()=>Q(e,{toast:i,openModal:t,closeModal:n})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await v.from("clubs").delete().eq("id",a.dataset.del);s?i(s.message,"error"):(i("Club supprimé","success"),Q(e,{toast:i,openModal:t,closeModal:n}))})})}}function ke(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function pe(e,{toast:i,openModal:t,closeModal:n,reload:u}){var p;const r=!!e,a=e?ke(e):{...A},s=Object.entries(Ee).map(([o,f])=>`<option value="${o}" ${a.style===o?"selected":""}>${f.label}</option>`).join("");t(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`);function c(o,f){const b=document.getElementById(o),_=document.getElementById(f);!b||!_||(b.addEventListener("input",()=>{_.value=b.value,m()}),_.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(_.value)&&(b.value=_.value,m())}))}c("m-kit-color1","m-kit-color1-txt"),c("m-kit-color2","m-kit-color2-txt"),c("m-kit-shorts","m-kit-shorts-txt"),c("m-kit-socks","m-kit-socks-txt"),(p=document.getElementById("m-kit-style"))==null||p.addEventListener("change",m);function d(){var o,f,b,_,x;return{style:((o=document.getElementById("m-kit-style"))==null?void 0:o.value)||"uni",color1:((f=document.getElementById("m-kit-color1"))==null?void 0:f.value)||"#1A6B3C",color2:((b=document.getElementById("m-kit-color2"))==null?void 0:b.value)||"#ffffff",shorts:((_=document.getElementById("m-kit-shorts"))==null?void 0:_.value)||"#111111",socks:((x=document.getElementById("m-kit-socks"))==null?void 0:x.value)||"#ffffff"}}function m(){const o=document.getElementById("kit-preview-wrap");o&&(o.innerHTML=we(d()))}m(),document.getElementById("m-cancel").addEventListener("click",n),document.getElementById("auto-encode").addEventListener("click",()=>{const o=document.getElementById("m-real").value,f=o.split(" ")[0]||o;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const o=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const f=o.split(" ")[0]||o;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const o=d(),f={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_shorts:o.shorts,kit_socks:o.socks};if(!f.real_name||!f.encoded_name||!f.country_code){i("Remplissez tous les champs obligatoires","error");return}const{error:b}=r?await v.from("clubs").update(f).eq("id",e.id):await v.from("clubs").insert(f);if(b){i(b.message,"error");return}i(r?"Club modifié ✅":"Club créé ✅","success"),n(),u()})}const Ye=["normal","pepite","papyte","legende"],ue=["GK","DEF","MIL","ATT"],Je=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let q={...z},Z=[];async function We(e,{toast:i}){const{data:t}=await v.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");Z=t||[],q={...z},e.innerHTML=et(Z),Qe(e,Z,i),C()}function me(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",i=document.getElementById("cb-surname-enc");i&&(i.value=Y(e))}function Xe(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,i=Z.find(n=>String(n.id)===String(e));return i?{style:i.kit_style||A.style,color1:i.kit_color1||A.color1,color2:i.kit_color2||A.color2,shorts:i.kit_shorts||A.shorts,socks:i.kit_socks||A.socks}:{...A}}function C(){var o,f,b,_;const e=x=>{var l;return((l=document.getElementById(x))==null?void 0:l.value)||""},i={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||Y(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(o=document.getElementById("cb-club"))==null?void 0:o.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=Xe(),n=document.getElementById("cb-club"),u=((_=(b=n==null?void 0:n.selectedOptions[0])==null?void 0:b.dataset)==null?void 0:_.logo)||null,r=$e(q,t,120),a=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,s=Ce(i,{portraitUrl:a,clubLogoUrl:u,showNotes:!0}),c=document.getElementById("card-preview");c&&(c.innerHTML=s);const d=document.getElementById("avatar-preview-wrap");d&&(d.innerHTML=r);const m=e("cb-surname-real"),p=document.getElementById("encode-summary");p&&m&&(p.textContent=`${e("cb-firstname")} ${m} → ${e("cb-firstname")} ${i.surname_encoded}`)}function Ie(){const e=i=>{var t;return((t=document.getElementById(i))==null?void 0:t.value)||""};q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Qe(e,i,t){var u,r,a,s,c;e.querySelectorAll("input,select").forEach(d=>{d.addEventListener("input",C),d.addEventListener("change",C)});const n=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];n.forEach(d=>{var m;(m=document.getElementById(d))==null||m.addEventListener("change",()=>{Ie(),C()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{me(),C()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{me(),C()}),(a=document.getElementById("cb-club"))==null||a.addEventListener("change",C),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",()=>Ze(t)),(c=document.getElementById("btn-reset"))==null||c.addEventListener("click",()=>{e.querySelectorAll("input").forEach(d=>d.value=""),e.querySelectorAll("select").forEach(d=>d.selectedIndex=0),q={...z},n.forEach(d=>{const m=d.replace("av-",""),p=document.getElementById(d);p&&(p.value=z[m]||"")}),C()})}async function Ze(e){const i=a=>{var s;return((s=document.getElementById(a))==null?void 0:s.value)||""},t=i("cb-surname-real").trim(),n=i("cb-surname-enc").trim()||Y(t);if(!i("cb-firstname")||!t||!i("cb-country")||!i("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ie();const u={firstname:i("cb-firstname").trim(),surname_real:t,surname_encoded:n,country_code:i("cb-country"),club_id:i("cb-club")||null,job:i("cb-job"),job2:i("cb-job2")||null,note_g:parseInt(i("cb-note-g"))||0,note_d:parseInt(i("cb-note-d"))||0,note_m:parseInt(i("cb-note-m"))||0,note_a:parseInt(i("cb-note-a"))||0,rarity:i("cb-rarity")||"normal",note_min:parseInt(i("cb-note-min"))||null,note_max:parseInt(i("cb-note-max"))||null,sell_price:parseInt(i("cb-price"))||0,avatar_config:q,skin:q.skin||"blanc",hair:q.hairColor||"marron",hair_length:"court"},{error:r}=await v.from("players").insert(u);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_encoded}" enregistré !`,"success")}function et(e){const i=Je.map(([d,m])=>`<option value="${d}">${m} (${d})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(d=>`<option value="${d.id}" data-logo="${d.logo_url||""}">${d.encoded_name}</option>`).join(""),n=ue.map(d=>`<option value="${d}">${d}</option>`).join(""),u='<option value="">Aucun</option>'+ue.map(d=>`<option value="${d}">${d}</option>`).join(""),r=Ye.map(d=>`<option value="${d}">${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),a=(d,m,p)=>Object.entries(m).map(([o,f])=>`<option value="${o}" ${o===(p||"")?"selected":""}>${f.label}</option>`).join(""),s=Object.keys(Te).map(d=>`<option value="${d}" ${d===z.skin?"selected":""}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join(""),c=Object.keys(Se).map(d=>`<option value="${d}" ${d===z.hairColor?"selected":""}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(d=>`
            <div style="background:${je[d]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-hair">${a("av-hair",Me,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${c}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${a("av-eyebrows",Re,z.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${a("av-eyes",Ne,z.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${a("av-nose",Pe,z.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${a("av-mouth",qe,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${a("av-beard",Oe,z.beard)}</select>
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
  `}async function Le(e,{toast:i}){const{data:t,error:n}=await v.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}e.innerHTML=`
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
  `;const u=t||[];r(u),document.getElementById("search-users").addEventListener("input",a=>{const s=a.target.value.toLowerCase();r(u.filter(c=>{var d;return c.pseudo.toLowerCase().includes(s)||((d=c.club_name)==null?void 0:d.toLowerCase().includes(s))}))});function r(a){document.getElementById("users-tbody").innerHTML=a.map(s=>`
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
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${c?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:m}=await v.from("users").update({is_admin:c}).eq("id",s.dataset.toggleAdmin);m?i(m.message,"error"):(i("Rôle mis à jour ✅","success"),Le(e,{toast:i}))})})}}async function Be(e,{toast:i}){const{data:t,error:n}=await v.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}const u=t||[],r=u.filter(s=>s.status==="active").length,a=u.filter(s=>s.status==="sold").length;e.innerHTML=`
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
            ${u.map(s=>{var p,o,f,b;const c=(p=s.card)==null?void 0:p.player,d=c?`${c.firstname} ${c.surname_encoded}`:((o=s.card)==null?void 0:o.card_type)||"—",m={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${d}</b>${c?`<div style="font-size:10px;color:#999">${c.rarity} · ${c.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=s.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((b=s.buyer)==null?void 0:b.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(s.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${m[s.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:c}=await v.from("market_listings").update({status:"cancelled"}).eq("id",s.dataset.cancel);c?i(c.message,"error"):(i("Annonce annulée","success"),Be(e,{toast:i}))})})}async function tt(e,{toast:i}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{J("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{J("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:n}=await v.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;t.forEach(r=>{u+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(ge).join(",")+`
`}),J("clubs_export.csv",u),i(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:n}=await v.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(r=>{var a;u+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((a=r.clubs)==null?void 0:a.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(ge).join(",")+`
`}),J("players_export.csv",u),i(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await n.text(),a=be(r);if(a.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let s=0,c=0;const d=[];for(const m of a){if(!m.real_name||!m.encoded_name||!m.country_code){c++,d.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const p={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:o}=await v.from("clubs").upsert(p,{onConflict:"encoded_name"});o?(c++,d.push(`${m.encoded_name}: ${o.message}`)):s++}u.innerHTML=`<div style="color:var(--green)">✅ ${s} clubs importés</div>
        ${c>0?`<div style="color:#c0392b">❌ ${c} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${d.slice(0,10).join("<br>")}</div>`:""}`,i(`${s} clubs importés`,"success")}catch(r){u.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await n.text(),a=be(r);if(a.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:s}=await v.from("clubs").select("id,encoded_name"),c={};(s||[]).forEach(l=>{c[l.encoded_name.toUpperCase()]=l.id});let d=0,m=0;const p=[],o=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],b=["blanc","metisse","typ","noir"],_=["blond","marron","noir","chauve"],x=["rase","court","milong","long"];for(const l of a){if(!l.firstname||!l.surname_real||!l.country_code||!l.job){m++,p.push(`Ligne ignorée (champs requis manquants): ${l.firstname||"?"}`);continue}if(!o.includes(l.job)){m++,p.push(`${l.firstname}: job invalide "${l.job}"`);continue}const h=l.club_encoded_name&&c[l.club_encoded_name.toUpperCase()]||null,E={firstname:l.firstname,surname_real:l.surname_real,surname_encoded:l.surname_encoded||Y(l.surname_real),country_code:l.country_code.toUpperCase().slice(0,2),club_id:h,job:l.job,job2:o.includes(l.job2)?l.job2:null,note_g:parseInt(l.note_g)||0,note_d:parseInt(l.note_d)||0,note_m:parseInt(l.note_m)||0,note_a:parseInt(l.note_a)||0,rarity:f.includes(l.rarity)?l.rarity:"normal",note_min:l.note_min!==""&&l.note_min!=null?parseInt(l.note_min):null,note_max:l.note_max!==""&&l.note_max!=null?parseInt(l.note_max):null,skin:b.includes(l.skin)?l.skin:"blanc",hair:_.includes(l.hair)?l.hair:"noir",hair_length:x.includes(l.hair_length)?l.hair_length:"court",sell_price:parseInt(l.sell_price)||0},{error:g}=await v.from("players").insert(E);g?(m++,p.push(`${l.firstname} ${l.surname_real}: ${g.message}`)):d++}u.innerHTML=`<div style="color:var(--green)">✅ ${d} joueurs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${p.slice(0,10).join("<br>")}</div>`:""}`,i(`${d} joueurs importés`,"success")}catch(r){u.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""})}function ge(e){const i=String(e??"");return i.includes(",")||i.includes('"')||i.includes(`
`)?'"'+i.replace(/"/g,'""')+'"':i}function J(e,i){const t=new Blob(["\uFEFF"+i],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),u=document.createElement("a");u.href=n,u.download=e,u.click(),URL.revokeObjectURL(n)}function be(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const i=e.split(`
`).filter(a=>a.trim());if(i.length<2)return[];const t=i[0],n=t.split(";").length>t.split(",").length?";":",",u=fe(t,n).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let a=1;a<i.length;a++){if(!i[a].trim())continue;const s=fe(i[a],n),c={};u.forEach((d,m)=>{c[d]=(s[m]||"").trim()}),!Object.values(c).every(d=>!d)&&r.push(c)}return r}function fe(e,i=","){const t=[];let n="",u=!1;for(let r=0;r<e.length;r++){const a=e[r];u?a==='"'?e[r+1]==='"'?(n+='"',r++):u=!1:n+=a:a==='"'?u=!0:a===i?(t.push(n),n=""):n+=a}return t.push(n),t}const it={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function nt(e,{toast:i}){const t=Object.keys(te);let n=t[0];const{data:u}=await v.from("formation_links_overrides").select("formation, links"),r={};(u||[]).forEach(m=>{r[m.formation]=m.links});let a=new Set;function s(m,p){return[m,p].sort().join("-")}function c(m){const p=r[m]||te[m]||[];a=new Set(p.map(([o,f])=>s(o,f)))}c(n),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(m=>`<option value="${m}" ${m===n?"selected":""}>${m}</option>`).join("")}
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
  `;function d(){const m=De[n]||{},p=de(n),o=320,f=400,b=22;function _(g){const y=m[g];return y?{x:y.x*o,y:y.y*f}:null}let x=`<svg width="${o}" height="${f}" viewBox="0 0 ${o} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;p.forEach(([g,y],$)=>{const w=_(g),I=_(y);if(!w||!I)return;const B=s(g,y),k=a.has(B),T=k?"#3b82f6":"#999",M=k?.95:.35,R=k?4:3;x+=`<line x1="${w.x}" y1="${w.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,x+=`<line x1="${w.x}" y1="${w.y}" x2="${I.x}" y2="${I.y}"
        stroke="${T}" stroke-width="${R}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${M}" pointer-events="none" data-line-key="${B}"/>`});for(const g of Object.keys(m)){const y=_(g);if(!y)continue;const $=g.replace(/\d+/,""),w=it[$]||"#555";x+=`<circle cx="${y.x}" cy="${y.y}" r="${b}" fill="${w}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,x+=`<text x="${y.x}" y="${y.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${g}</text>`}x+="</svg>",document.getElementById("field-wrap").innerHTML=x;const l=document.getElementById("links-list");l.innerHTML=p.map(([g,y])=>{const $=s(g,y),w=a.has($);return`
        <button class="link-toggle" data-key="${$}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${w?"#3b82f6":"#ddd"};
          background:${w?"#eaf2ff":"#fafafa"};
          color:${w?"#1d4ed8":"#888"}">
          <span>${g} ↔ ${y}</span>
          <span>${w?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const h=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');h&&(h.textContent=`Liens (${a.size}/${p.length} actifs)`);function E(g){a.has(g)?a.delete(g):a.add(g),d()}e.querySelectorAll(".link-hit").forEach(g=>{g.addEventListener("click",()=>E(g.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(g=>{g.addEventListener("click",()=>E(g.dataset.key))})}d(),document.getElementById("formation-select").addEventListener("change",m=>{n=m.target.value,c(n),d()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=te[n]||[];a=new Set(m.map(([p,o])=>s(p,o))),d(),i("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const p=de(n).filter(([f,b])=>a.has(s(f,b))),{error:o}=await v.from("formation_links_overrides").upsert({formation:n,links:p,updated_at:new Date().toISOString()});if(o){i(o.message,"error");return}r[n]=p,i(`Liens enregistrés pour ${n} (${p.length} actifs)`,"success")})}const ot=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],at=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],rt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function lt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await v.from("booster_configs").select("*").order("sort_order");let t=null,n=[],u=null;const r=()=>window.innerWidth<700;async function a(){if(!t){n=[];return}if(t!==u){const{data:p}=await v.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");n=p||[],u=t}}function s(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(i||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(i||[]).map(p=>`
      <div class="booster-row" data-id="${p.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${p.id===t?"#f0f7f0":"#fff"}">
        ${p.image_url?`<img src="/manager-wars/icons/${p.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</div>
          <div style="font-size:11px;color:#888">
            ${p.price_type==="credits"?(p.price_credits||0)+" cr.":p.price_type==="pub"?"Pub":"Gratuit"}
            · ${p.card_count||5} cartes · ${p.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${p.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(i||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function c(){const p=t?(i||[]).find(b=>b.id===t):null;if(!p)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const o=n.reduce((b,_)=>b+Number(_.percentage||0),0),f=Math.abs(o-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${p.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${p.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${p.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${p.image_url?`<img src="/manager-wars/icons/${p.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${rt.map(b=>`<option value="${b.value}" ${p.price_type===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${p.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${p.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${p.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${p.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
      </div>

      <!-- Taux de drop -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
          <div>
            <span style="font-weight:700;font-size:14px">Taux de drop</span>
            <span style="margin-left:10px;font-size:12px;color:${f?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${o.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${n.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':n.map((b,_)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${_}">
            <select class="rate-type" data-idx="${_}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${ot.map(x=>`<option value="${x.value}" ${b.card_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${_}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${at.map(x=>`<option value="${x.value}" ${(b.rarity||"")===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${_}" type="number" min="1" max="10" value="${b.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${_}" type="number" min="1" max="10" value="${b.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${_}" type="number" min="0.1" max="100" step="0.1" value="${b.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${_}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function d(p=!1){p||await a();const o=!t&&r(),f=t&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||o||!t?s():""}
      ${!r()||f?c():""}
    </div>`,m()}function m(){var f,b,_,x,l,h,E;const p=g=>e.querySelector(g);e.querySelectorAll(".booster-row").forEach(g=>{g.addEventListener("click",y=>{y.target.closest(".btn-delete")||(t=g.dataset.id,u=null,d())})}),(f=p("#btn-back"))==null||f.addEventListener("click",()=>{t=null,d()}),(b=p("#btn-new"))==null||b.addEventListener("click",async()=>{const g=prompt("Nom du nouveau booster :");if(!(g!=null&&g.trim()))return;const{data:y,error:$}=await v.from("booster_configs").insert({name:g.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if($){alert($.message);return}i.push(y),t=y.id,u=null,d()}),e.querySelectorAll(".btn-delete").forEach(g=>{g.addEventListener("click",async y=>{if(y.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await v.from("booster_configs").delete().eq("id",g.dataset.id);const $=i.findIndex(w=>w.id===g.dataset.id);$>-1&&i.splice($,1),t===g.dataset.id&&(t=null,u=null),d()})}),(_=p("#btn-cancel"))==null||_.addEventListener("click",()=>{t=null,d()}),(x=p("#f-price-type"))==null||x.addEventListener("change",g=>{const y=p("#credits-field");y&&(y.style.opacity=g.target.value!=="credits"?"0.4":"1")}),(l=p("#btn-pick-icon"))==null||l.addEventListener("click",async()=>{var y;const g=p("#icon-picker-grid");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const w=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(w)?w.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!I.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((y=p("#f-image-url"))==null?void 0:y.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${I.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===B?"#1A6B3C":"#ddd"};background:${k.name===B?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const T=p("#f-image-url");T&&(T.value=k.dataset.name),g.style.display="none"})})}catch($){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}});function o(){e.querySelectorAll("[data-rate-idx]").forEach(g=>{var $,w,I,B,k;const y=Number(g.dataset.rateIdx);y>=0&&y<n.length&&(n[y].card_type=(($=g.querySelector(".rate-type"))==null?void 0:$.value)||"player",n[y].rarity=((w=g.querySelector(".rate-rarity"))==null?void 0:w.value)||null,n[y].note_min=Number((I=g.querySelector(".rate-note-min"))==null?void 0:I.value)||null,n[y].note_max=Number((B=g.querySelector(".rate-note-max"))==null?void 0:B.value)||null,n[y].percentage=Number((k=g.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(h=p("#btn-add-rate"))==null||h.addEventListener("click",()=>{o(),n.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:n.length}),d(!0)}),e.querySelectorAll(".btn-del-rate").forEach(g=>{g.addEventListener("click",()=>{o(),n.splice(Number(g.dataset.idx),1),d(!0)})}),(E=p("#btn-save"))==null||E.addEventListener("click",async()=>{var B,k,T,M,R,F,H,U,G;const g=(i||[]).find(L=>L.id===t);if(!g)return;const y=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var j,V,ae,re,le;const O=Number(L.dataset.rateIdx);y.push({booster_id:t,card_type:((j=L.querySelector(".rate-type"))==null?void 0:j.value)||"player",rarity:((V=L.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((ae=L.querySelector(".rate-note-min"))==null?void 0:ae.value)||null,note_max:Number((re=L.querySelector(".rate-note-max"))==null?void 0:re.value)||null,percentage:Number((le=L.querySelector(".rate-pct"))==null?void 0:le.value)||0,sort_order:O});const S=y[y.length-1];S.rarity||(S.rarity=null),S.note_min||(S.note_min=null),S.note_max||(S.note_max=null)});const $=y.reduce((L,O)=>L+O.percentage,0);if(y.length&&Math.abs($-100)>.5){alert(`La somme doit faire 100% (actuellement ${$.toFixed(1)}%)`);return}const w={name:((k=(B=p("#f-name"))==null?void 0:B.value)==null?void 0:k.trim())||g.name,image_url:((M=(T=p("#f-image-url"))==null?void 0:T.value)==null?void 0:M.trim())||null,price_type:(R=p("#f-price-type"))==null?void 0:R.value,price_credits:Number((F=p("#f-price-credits"))==null?void 0:F.value)||0,card_count:Number((H=p("#f-card-count"))==null?void 0:H.value)||5,is_active:((U=p("#f-active"))==null?void 0:U.checked)??g.is_active,sort_order:Number((G=p("#f-sort"))==null?void 0:G.value)||0},{error:I}=await v.from("booster_configs").update(w).eq("id",t);if(I){alert(I.message);return}if(Object.assign(g,w),await v.from("booster_drop_rates").delete().eq("booster_id",t),y.length){const{error:L}=await v.from("booster_drop_rates").insert(y);if(L){alert(L.message);return}}n=y,u=t,alert("✅ Booster enregistré !"),d(!0)})}d()}const ze=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function dt(e){await ne(e)}async function ne(e){const{data:i,error:t}=await v.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(i||[]).map(n=>st(n)).join("")}
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
              ${ze.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>xe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>ct(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const u=(i||[]).find(r=>r.id===n.dataset.edit);u&&n.addEventListener("click",()=>xe(u))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await v.from("sell_price_configs").delete().eq("id",n.dataset.delete),await ne(e))})})}function st(e){const i=ze.find(t=>t.value===e.rarity);return`
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
    </tr>`}function xe(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function ct(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,n=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(u>r){alert("Note min doit être ≤ note max");return}const a={rarity:t,price:n,note_min:u,note_max:r,updated_at:new Date().toISOString()};let s;if(i?{error:s}=await v.from("sell_price_configs").update(a).eq("id",i):{error:s}=await v.from("sell_price_configs").insert(a),s){alert("Erreur : "+s.message);return}document.getElementById("config-form").style.display="none",await ne(e)}async function pt(e){await oe(e)}async function oe(e){const{data:i}=await v.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(i||[]).map(t=>ut(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>ve(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>mt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const n=(i||[]).find(u=>u.id===t.dataset.edit);n&&t.addEventListener("click",()=>ve(n))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await v.from("patch_notes").delete().eq("id",t.dataset.delete),await oe(e))})})}function ut(e){const i=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function ve(e){const i=document.getElementById("article-form");i.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),n=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=n,i.scrollIntoView({behavior:"smooth"})}async function mt(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),n=document.getElementById("form-art-desc").value.trim(),u=document.getElementById("form-art-img").value.trim()||null,r=document.getElementById("form-art-pub").checked,a=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!n){alert("La description est obligatoire.");return}const s=a?new Date(a).toISOString():new Date().toISOString(),c={title:t,description:n,image_url:u,is_published:r,published_at:s};let d;if(i?{error:d}=await v.from("patch_notes").update(c).eq("id",i):{error:d}=await v.from("patch_notes").insert(c),d){alert("Erreur : "+d.message);return}document.getElementById("article-form").style.display="none",await oe(e)}async function gt(e){await D(e)}async function D(e){var s,c,d,m,p,o,f,b,_;const{data:i}=await v.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(i||[]).map(x=>bt(x)).join("")}
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
          <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">CONTENU HTML *</label>
          <textarea id="ts-content" rows="7" placeholder="&lt;p&gt;Texte de l'étape…&lt;/p&gt;"
            style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;font-family:monospace;resize:vertical"></textarea>
          <div style="font-size:11px;color:#aaa;margin-top:4px">HTML supporté : &lt;p&gt; &lt;ul&gt; &lt;ol&gt; &lt;li&gt; &lt;strong&gt; &lt;em&gt; &lt;span&gt;</div>
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
    </div>`,(s=document.getElementById("ts-add"))==null||s.addEventListener("click",()=>ye(null,(i==null?void 0:i.length)||0)),(c=document.getElementById("ts-reset"))==null||c.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:x}=await v.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(x?"Erreur : "+x.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(d=document.getElementById("ts-cancel"))==null||d.addEventListener("click",Ae),(m=document.getElementById("ts-save"))==null||m.addEventListener("click",()=>xt(e)),(p=document.getElementById("ts-preview-btn"))==null||p.addEventListener("click",ft);const t=document.getElementById("ts-image"),n=document.getElementById("ts-img-preview"),u=document.getElementById("ts-img-preview-el"),r=document.getElementById("ts-img-picker-grid"),a=()=>{var l;const x=(l=t==null?void 0:t.value)==null?void 0:l.trim();if(x){const h=typeof import.meta<"u"?"/manager-wars/":"/";u.src=`${h}icons/${x}`,n.style.display="block"}else n.style.display="none"};t==null||t.addEventListener("input",a),(o=document.getElementById("ts-img-clear"))==null||o.addEventListener("click",()=>{t&&(t.value=""),n.style.display="none",r.style.display="none"}),(f=document.getElementById("ts-img-pick"))==null||f.addEventListener("click",async()=>{if(r.style.display!=="none"){r.style.display="none";return}r.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',r.style.display="block";try{const l=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),h=Array.isArray(l)?l.filter(g=>g.name.startsWith("tuto_")):[];if(!h.length){r.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const E=typeof import.meta<"u"?"/manager-wars/":"/";r.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+h.map(g=>`
          <div data-pick="${g.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${E}icons/${g.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",r.querySelectorAll("[data-pick]").forEach(g=>{g.addEventListener("click",()=>{t&&(t.value=g.dataset.pick),a(),r.style.display="none"})})}catch(x){r.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+x.message+"</div>"}}),(b=document.getElementById("ts-color"))==null||b.addEventListener("input",x=>{const l=document.getElementById("ts-color-hex");l&&(l.value=x.target.value)}),(_=document.getElementById("ts-color-hex"))==null||_.addEventListener("input",x=>{const l=x.target.value;if(/^#[0-9a-fA-F]{6}$/.test(l)){const h=document.getElementById("ts-color");h&&(h.value=l)}}),e.querySelectorAll("[data-edit]").forEach(x=>{const l=(i||[]).find(h=>h.id===x.dataset.edit);l&&x.addEventListener("click",()=>ye(l))}),e.querySelectorAll("[data-delete]").forEach(x=>{x.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await v.from("tutorial_steps").delete().eq("id",x.dataset.delete),D(e))})}),e.querySelectorAll("[data-toggle]").forEach(x=>{x.addEventListener("click",async()=>{const l=(i||[]).find(h=>h.id===x.dataset.toggle);l&&(await v.from("tutorial_steps").update({is_active:!l.is_active}).eq("id",l.id),D(e))})}),e.querySelectorAll("[data-up]").forEach(x=>{x.addEventListener("click",async()=>{const l=i||[],h=l.findIndex(E=>E.id===x.dataset.up);h<=0||(await Promise.all([v.from("tutorial_steps").update({step_order:l[h-1].step_order}).eq("id",l[h].id),v.from("tutorial_steps").update({step_order:l[h].step_order}).eq("id",l[h-1].id)]),D(e))})}),e.querySelectorAll("[data-down]").forEach(x=>{x.addEventListener("click",async()=>{const l=i||[],h=l.findIndex(E=>E.id===x.dataset.down);h<0||h>=l.length-1||(await Promise.all([v.from("tutorial_steps").update({step_order:l[h+1].step_order}).eq("id",l[h].id),v.from("tutorial_steps").update({step_order:l[h].step_order}).eq("id",l[h+1].id)]),D(e))})})}function bt(e){return`
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
  </div>`}function ye(e,i=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"",document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??i,document.getElementById("ts-active").checked=e?e.is_active:!0;const t=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=t,document.getElementById("ts-color-hex").value=t;const n=(e==null?void 0:e.image_url)||"",u=document.getElementById("ts-image");u&&(u.value=n);const r=document.getElementById("ts-img-preview"),a=document.getElementById("ts-img-preview-el");if(n&&r&&a){const s=typeof import.meta<"u"?"/manager-wars/":"/";a.src=`${s}icons/${n}`,r.style.display="block"}else r&&(r.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ae(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function ft(){var c,d;const e=document.getElementById("ts-emoji").value||"⚽",i=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-content").value||"",n=document.getElementById("ts-color-hex").value||"#1A6B3C",u=(d=(c=document.getElementById("ts-image"))==null?void 0:c.value)==null?void 0:d.trim(),a=u?`<div style="padding:0 20px 12px;text-align:center"><img src="${typeof import.meta<"u"?"/manager-wars/":"/"}icons/${u}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",s=document.getElementById("ts-preview-area");s.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${n}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${i}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${a}
        <div style="padding:${u?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${t}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${n};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,s.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.margin="6px 0"}),s.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),s.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"})}async function xt(e){var m,p;const i=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",n=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-content").value.trim(),r=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",a=parseInt(document.getElementById("ts-order").value)||0,s=document.getElementById("ts-active").checked;if(!n||!u){alert("Titre et contenu sont obligatoires.");return}const c={emoji:t,title:n,content:u,color:r,step_order:a,is_active:s,image_url:((p=(m=document.getElementById("ts-image"))==null?void 0:m.value)==null?void 0:p.trim())||null};let d;if(i?{error:d}=await v.from("tutorial_steps").update(c).eq("id",i):{error:d}=await v.from("tutorial_steps").insert(c),d){alert("Erreur : "+d.message);return}Ae(),D(e)}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function vt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await v.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const n=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],u=["GK","DEF","MIL","ATT"],r=()=>window.innerWidth<700,a=o=>e.querySelector(o);function s(o,f=130){if(!o)return"";const b=N.find(E=>E.value===o.gc_type)||N[0],_=P.find(E=>E.value===o.color)||P[0],x=Math.round(f*.55),l=Math.round(f*.15),h=Math.round(f*.3);return`<div style="width:${f}px;height:${Math.round(f*1.4)}px;border-radius:10px;border:3px solid ${_.hex};background:${b.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${_.hex}55;flex-shrink:0">
      <div style="height:${l}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(f/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${o.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o.image_url?`<img src="/manager-wars/icons/${o.image_url}" style="max-height:${x}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(f*.3)}px">${b.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${h}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(f/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(o.effect||"").slice(0,60)}${(o.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function c(){return`
    <div id="gc-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(i||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(i||[]).map(o=>{const f=N.find(_=>_.value===o.gc_type)||N[0],b=P.find(_=>_.value===o.color)||P[0];return`
        <div class="gc-row" data-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${b.hex};background:${f.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${o.image_url?`<img src="/manager-wars/icons/${o.image_url}" style="width:28px;height:28px;object-fit:contain">`:f.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
            <div style="font-size:11px;color:#888">${f.label} · ${o.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
    </div>`}function d(){const o=t?(i||[]).find(b=>b.id===t):null;if(!o)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const f=N.find(b=>b.value===o.gc_type)||N[0];return P.find(b=>b.value===o.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${f.bg};border-radius:12px">
        ${s(o,r()?120:150)}
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
              ${N.map(b=>`<option value="${b.value}" ${o.gc_type===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(b=>`<option value="${b.value}" ${o.color===b.value?"selected":""}>${b.label}</option>`).join("")}
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
              ${n.map(b=>`<option value="${b.value}" ${(o.effect_type||"BOOST_STAT")===b.value?"selected":""}>${b.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const b=o.effect_params||{},_=n.find(x=>x.value===(o.effect_type||"BOOST_STAT"))||n[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${_.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${b.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${_.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${b.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${_.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(b.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${b.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${_.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${u.map(x=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${x}" ${!b.roles||b.roles.includes(x)?"checked":""}> ${x}
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
    </div>`}function m(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||!t?c():""}
      ${!r()||t?d():""}
    </div>`,p()}function p(){var o,f,b,_,x;e.querySelectorAll(".gc-row").forEach(l=>{l.addEventListener("click",h=>{h.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=l.dataset.id,m())})}),(o=a("#btn-gc-back"))==null||o.addEventListener("click",()=>{t=null,m()}),(f=a("#btn-cancel-gc"))==null||f.addEventListener("click",()=>{t=null,m()}),(b=a("#btn-new-gc"))==null||b.addEventListener("click",async()=>{const l=prompt("Nom de la carte Game Changer :");if(!(l!=null&&l.trim()))return;const{data:h,error:E}=await v.from("gc_definitions").insert({name:l.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(E){alert(E.message);return}i.push(h),t=h.id,m()}),e.querySelectorAll(".btn-toggle-gc").forEach(l=>{l.addEventListener("click",async h=>{h.stopPropagation();const E=l.dataset.active!=="true";await v.from("gc_definitions").update({is_active:E}).eq("id",l.dataset.id);const g=i.find(y=>y.id===l.dataset.id);g&&(g.is_active=E),m()})}),e.querySelectorAll(".btn-delete-gc").forEach(l=>{l.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await v.from("gc_definitions").delete().eq("id",l.dataset.id);const E=i.findIndex(g=>g.id===l.dataset.id);E>-1&&i.splice(E,1),t===l.dataset.id&&(t=null),m()})}),(_=a("#btn-pick-gc-icon"))==null||_.addEventListener("click",async()=>{var h;const l=a("#gc-icon-picker");if(l){if(l.style.display!=="none"){l.style.display="none";return}l.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',l.style.display="block";try{const g=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),y=Array.isArray(g)?g.filter(w=>w.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(w.name)):[];if(!y.length){l.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const $=((h=a("#gc-image-url"))==null?void 0:h.value)||"";l.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${y.map(w=>`
          <div class="gc-icon-item" data-name="${w.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${w.name===$?"#7a28b8":"#ddd"};background:${w.name===$?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${w.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,l.querySelectorAll(".gc-icon-item").forEach(w=>{w.addEventListener("click",()=>{const I=a("#gc-image-url");I&&(I.value=w.dataset.name),l.style.display="none"})})}catch(E){l.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}}),(x=a("#btn-save-gc"))==null||x.addEventListener("click",async()=>{var w,I,B,k,T,M,R,F,H,U,G,L,O,S;const l=i.find(j=>j.id===t);if(!l)return;const h=n.find(j=>{var V;return j.value===(((V=a("#gc-effect-type"))==null?void 0:V.value)||"BOOST_STAT")})||n[0],E=h.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(j=>j.value):null,g={...h.hasValue?{value:Number((w=a("#gc-p-value"))==null?void 0:w.value)||2}:{},...h.hasCount?{count:Number((I=a("#gc-p-count"))==null?void 0:I.value)||1}:{},...h.hasTarget?{target:((B=a("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...h.hasRoles?{roles:E!=null&&E.length?E:null}:{}},y={name:((T=(k=a("#gc-name"))==null?void 0:k.value)==null?void 0:T.trim())||l.name,effect:((R=(M=a("#gc-effect"))==null?void 0:M.value)==null?void 0:R.trim())||null,image_url:((H=(F=a("#gc-image-url"))==null?void 0:F.value)==null?void 0:H.trim())||null,gc_type:((U=a("#gc-type"))==null?void 0:U.value)||"game_changer",color:((G=a("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((L=a("#gc-sort"))==null?void 0:L.value)||0,is_active:((O=a("#gc-active"))==null?void 0:O.checked)??l.is_active,effect_type:((S=a("#gc-effect-type"))==null?void 0:S.value)||"BOOST_STAT",effect_params:g},{error:$}=await v.from("gc_definitions").update(y).eq("id",t);if($){alert($.message);return}Object.assign(l,y),alert("✅ Carte enregistrée !"),m()})}m()}Fe($e);function yt(e,i="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${i}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function ht(e,i,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=i,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ie(){document.getElementById("modal-overlay").classList.add("hidden")}const he={dashboard:{title:"Dashboard",fn:He},players:{title:"Joueurs & Cartes",fn:Ge},clubs:{title:"Clubs",fn:Ve},"card-builder":{title:"Card Builder",fn:We},users:{title:"Managers",fn:Le},market:{title:"Marché des transferts",fn:Be},"import-export":{title:"Import / Export CSV",fn:tt},formations:{title:"Formations & Liens",fn:nt},"boosters-config":{title:"Boosters",fn:lt},"sell-price":{title:"Prix vente directe",fn:dt},journal:{title:"Journal",fn:pt},tutorial:{title:"Tutoriel",fn:gt},"gc-cards":{title:"Game Changers",fn:vt}};async function ee(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const i=document.getElementById("mobile-page-select");i&&(i.value=e);const t=he[e]||he.dashboard;document.getElementById("page-title").textContent=t.title;const n=document.getElementById("page-content");n.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(n,{toast:yt,openModal:ht,closeModal:ie,navigate:ee})}catch(u){n.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function _t(){var i;const{data:{session:e}}=await v.auth.getSession();e&&await _e(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),n=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!t||!n){u.textContent="Remplissez tous les champs.";return}const{data:r,error:a}=await v.auth.signInWithPassword({email:t,password:n});if(a){u.textContent=a.message;return}await _e(r.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ie),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ie()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),ee(t.dataset.page)})}),(i=document.getElementById("mobile-page-select"))==null||i.addEventListener("change",t=>{ee(t.target.value)})}async function _e(e){const{data:i,error:t}=await v.from("users").select("*").eq("id",e.id).single(),n=document.getElementById("auth-error");if(t||!i){n.textContent="Profil introuvable.";return}if(!i.is_admin){n.textContent="Accès refusé. Vous n'êtes pas administrateur.",await v.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${i.pseudo}`,ee("dashboard")}_t();
