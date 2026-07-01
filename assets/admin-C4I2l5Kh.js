import{s as v,e as Y,g as Ee,K as we,D as A,S as Te,a as z,H as Se,R as Ce,b as $e,r as je,c as Re,E as Me,d as Ne,N as Pe,M as Oe,B as qe,F as te,f as de,h as De,i as Fe}from"./formation-links-DJC25wD7.js";async function He(e){const[{count:t},{count:n},{count:i},{count:p},{count:d}]=await Promise.all([v.from("players").select("*",{count:"exact",head:!0}),v.from("clubs").select("*",{count:"exact",head:!0}),v.from("users").select("*",{count:"exact",head:!0}),v.from("cards").select("*",{count:"exact",head:!0}),v.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${K("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${K("🏟️","Clubs",n??"–","#D4A017")}
      ${K("👥","Managers",i??"–","#7a28b8")}
      ${K("📦","Cartes possédées",p??"–","#2a8f52")}
      ${K("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=a=>{var s;(s=document.querySelector(`[data-page="${a}"]`))==null||s.click()}}function K(e,t,n,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${n}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const se={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Ue={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ge(e,t){await W(e,t)}async function W(e,t){const{toast:n,openModal:i,closeModal:p}=t,[{data:d,error:a},{data:s}]=await Promise.all([v.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),v.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const l={};(s||[]).forEach(c=>{l[c.id]=c.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(se).map(([c,o])=>`<option value="${c}">${o}</option>`).join("")}
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
  `,r(d);function r(c){document.getElementById("count-label").textContent=`${c.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=c.map(o=>{var f;return`
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
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const f=d.find(g=>g.id===o.dataset.edit);ce(f,s||[],{toast:n,openModal:i,closeModal:p,reload:()=>W(e,t)})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:f}=await v.from("players").delete().eq("id",o.dataset.del);f?n(f.message,"error"):(n("Joueur supprimé","success"),W(e,t))})})}function u(){const c=document.getElementById("search-players").value.toLowerCase(),o=document.getElementById("filter-rarity").value,f=document.getElementById("filter-job").value;r(d.filter(g=>(!c||`${g.firstname} ${g.surname_encoded} ${g.surname_real}`.toLowerCase().includes(c))&&(!o||g.rarity===o)&&(!f||g.job===f)))}document.getElementById("search-players").addEventListener("input",u),document.getElementById("filter-rarity").addEventListener("change",u),document.getElementById("filter-job").addEventListener("change",u),document.getElementById("add-player-btn").addEventListener("click",()=>{ce(null,s||[],{toast:n,openModal:i,closeModal:p,reload:()=>W(e,t)})})}function ce(e,t,{toast:n,openModal:i,closeModal:p,reload:d}){const a=!!e,s='<option value="">— Club —</option>'+t.map(l=>`<option value="${l.id}" ${(e==null?void 0:e.club_id)===l.id?"selected":""}>${l.encoded_name}</option>`).join("");i(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
      <div><label>Club</label><select id="pm-club">${s}</select></div>
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
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",p),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=Y(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const l={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!l.firstname||!l.surname_real||!l.surname_encoded){n("Remplissez les champs obligatoires","error");return}const{error:r}=a?await v.from("players").update({...l,updated_at:new Date().toISOString()}).eq("id",e.id):await v.from("players").insert(l);if(r){n(r.message,"error");return}n(a?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),d()})}let X=[];async function Ve(e,{toast:t,openModal:n,closeModal:i}){await Q(e,{toast:t,openModal:n,closeModal:i})}async function Q(e,t){const{data:n,error:i}=await v.from("clubs").select("*").order("encoded_name");if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}X=n||[],Ke(e,t)}function Ke(e,{toast:t,openModal:n,closeModal:i}){e.innerHTML=`
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
  `,p(X),document.getElementById("search-clubs").addEventListener("input",d=>{const a=d.target.value.toLowerCase();p(X.filter(s=>s.encoded_name.toLowerCase().includes(a)||s.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{pe(null,{toast:t,openModal:n,closeModal:i,reload:()=>Q(e,{toast:t,openModal:n,closeModal:i})})});function p(d){document.getElementById("clubs-tbody").innerHTML=d.map(a=>{var r;const s=ke(a),l=Ee(s).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((r=we[a.kit_style||"uni"])==null?void 0:r.label)||"Uni"}">${l}</td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const s=X.find(l=>l.id===a.dataset.edit);pe(s,{toast:t,openModal:n,closeModal:i,reload:()=>Q(e,{toast:t,openModal:n,closeModal:i})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await v.from("clubs").delete().eq("id",a.dataset.del);s?t(s.message,"error"):(t("Club supprimé","success"),Q(e,{toast:t,openModal:n,closeModal:i}))})})}}function ke(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function pe(e,{toast:t,openModal:n,closeModal:i,reload:p}){var c;const d=!!e,a=e?ke(e):{...A},s=Object.entries(we).map(([o,f])=>`<option value="${o}" ${a.style===o?"selected":""}>${f.label}</option>`).join("");n(d?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
     <button class="btn btn-primary" id="m-save">${d?"Enregistrer":"Créer"}</button>`);function l(o,f){const g=document.getElementById(o),y=document.getElementById(f);!g||!y||(g.addEventListener("input",()=>{y.value=g.value,u()}),y.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(y.value)&&(g.value=y.value,u())}))}l("m-kit-color1","m-kit-color1-txt"),l("m-kit-color2","m-kit-color2-txt"),l("m-kit-shorts","m-kit-shorts-txt"),l("m-kit-socks","m-kit-socks-txt"),(c=document.getElementById("m-kit-style"))==null||c.addEventListener("change",u);function r(){var o,f,g,y,_;return{style:((o=document.getElementById("m-kit-style"))==null?void 0:o.value)||"uni",color1:((f=document.getElementById("m-kit-color1"))==null?void 0:f.value)||"#1A6B3C",color2:((g=document.getElementById("m-kit-color2"))==null?void 0:g.value)||"#ffffff",shorts:((y=document.getElementById("m-kit-shorts"))==null?void 0:y.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function u(){const o=document.getElementById("kit-preview-wrap");o&&(o.innerHTML=Ee(r()))}u(),document.getElementById("m-cancel").addEventListener("click",i),document.getElementById("auto-encode").addEventListener("click",()=>{const o=document.getElementById("m-real").value,f=o.split(" ")[0]||o;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const o=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const f=o.split(" ")[0]||o;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const o=r(),f={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:o.style,kit_color1:o.color1,kit_color2:o.color2,kit_shorts:o.shorts,kit_socks:o.socks};if(!f.real_name||!f.encoded_name||!f.country_code){t("Remplissez tous les champs obligatoires","error");return}const{error:g}=d?await v.from("clubs").update(f).eq("id",e.id):await v.from("clubs").insert(f);if(g){t(g.message,"error");return}t(d?"Club modifié ✅":"Club créé ✅","success"),i(),p()})}const Ye=["normal","pepite","papyte","legende"],ue=["GK","DEF","MIL","ATT"],Je=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let O={...z},Z=[];async function We(e,{toast:t}){const{data:n}=await v.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");Z=n||[],O={...z},e.innerHTML=et(Z),Qe(e,Z,t),j()}function me(){var n;const e=((n=document.getElementById("cb-surname-real"))==null?void 0:n.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=Y(e))}function Xe(){var n;const e=(n=document.getElementById("cb-club"))==null?void 0:n.value,t=Z.find(i=>String(i.id)===String(e));return t?{style:t.kit_style||A.style,color1:t.kit_color1||A.color1,color2:t.kit_color2||A.color2,shorts:t.kit_shorts||A.shorts,socks:t.kit_socks||A.socks}:{...A}}function j(){var o,f,g,y;const e=_=>{var m;return((m=document.getElementById(_))==null?void 0:m.value)||""},t={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||Y(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(o=document.getElementById("cb-club"))==null?void 0:o.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},n=Xe(),i=document.getElementById("cb-club"),p=((y=(g=i==null?void 0:i.selectedOptions[0])==null?void 0:g.dataset)==null?void 0:y.logo)||null,d=$e(O,n,120),a=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,s=je(t,{portraitUrl:a,clubLogoUrl:p,showNotes:!0}),l=document.getElementById("card-preview");l&&(l.innerHTML=s);const r=document.getElementById("avatar-preview-wrap");r&&(r.innerHTML=d);const u=e("cb-surname-real"),c=document.getElementById("encode-summary");c&&u&&(c.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${t.surname_encoded}`)}function Ie(){const e=t=>{var n;return((n=document.getElementById(t))==null?void 0:n.value)||""};O={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Qe(e,t,n){var p,d,a,s,l;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",j),r.addEventListener("change",j)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(r=>{var u;(u=document.getElementById(r))==null||u.addEventListener("change",()=>{Ie(),j()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{me(),j()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{me(),j()}),(a=document.getElementById("cb-club"))==null||a.addEventListener("change",j),(s=document.getElementById("btn-save-player"))==null||s.addEventListener("click",()=>Ze(n)),(l=document.getElementById("btn-reset"))==null||l.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),O={...z},i.forEach(r=>{const u=r.replace("av-",""),c=document.getElementById(r);c&&(c.value=z[u]||"")}),j()})}async function Ze(e){const t=a=>{var s;return((s=document.getElementById(a))==null?void 0:s.value)||""},n=t("cb-surname-real").trim(),i=t("cb-surname-enc").trim()||Y(n);if(!t("cb-firstname")||!n||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ie();const p={firstname:t("cb-firstname").trim(),surname_real:n,surname_encoded:i,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:O,skin:O.skin||"blanc",hair:O.hairColor||"marron",hair_length:"court"},{error:d}=await v.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_encoded}" enregistré !`,"success")}function et(e){const t=Je.map(([r,u])=>`<option value="${r}">${u} (${r})</option>`).join(""),n='<option value="">— Sélectionner un club —</option>'+e.map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join(""),i=ue.map(r=>`<option value="${r}">${r}</option>`).join(""),p='<option value="">Aucun</option>'+ue.map(r=>`<option value="${r}">${r}</option>`).join(""),d=Ye.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),a=(r,u,c)=>Object.entries(u).map(([o,f])=>`<option value="${o}" ${o===(c||"")?"selected":""}>${f.label}</option>`).join(""),s=Object.keys(Te).map(r=>`<option value="${r}" ${r===z.skin?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),l=Object.keys(Se).map(r=>`<option value="${r}" ${r===z.hairColor?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join("");return`
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
          ${["normal","pepite","papyte","legende"].map(r=>`
            <div style="background:${Ce[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${r.toUpperCase()}
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
              <select id="av-hair">${a("av-hair",Re,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${l}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${a("av-eyebrows",Me,z.eyebrows)}</select>
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
              <select id="av-mouth">${a("av-mouth",Oe,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${a("av-beard",qe,z.beard)}</select>
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
  `}async function Le(e,{toast:t}){const{data:n,error:i}=await v.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}e.innerHTML=`
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
  `;const p=n||[];d(p),document.getElementById("search-users").addEventListener("input",a=>{const s=a.target.value.toLowerCase();d(p.filter(l=>{var r;return l.pseudo.toLowerCase().includes(s)||((r=l.club_name)==null?void 0:r.toLowerCase().includes(s))}))});function d(a){document.getElementById("users-tbody").innerHTML=a.map(s=>`
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
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(s=>{s.addEventListener("click",async()=>{const l=s.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${l?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:u}=await v.from("users").update({is_admin:l}).eq("id",s.dataset.toggleAdmin);u?t(u.message,"error"):(t("Rôle mis à jour ✅","success"),Le(e,{toast:t}))})})}}async function Be(e,{toast:t}){const{data:n,error:i}=await v.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=n||[],d=p.filter(s=>s.status==="active").length,a=p.filter(s=>s.status==="sold").length;e.innerHTML=`
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
            ${p.map(s=>{var c,o,f,g;const l=(c=s.card)==null?void 0:c.player,r=l?`${l.firstname} ${l.surname_encoded}`:((o=s.card)==null?void 0:o.card_type)||"—",u={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${r}</b>${l?`<div style="font-size:10px;color:#999">${l.rarity} · ${l.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=s.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=s.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(s.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${u[s.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:l}=await v.from("market_listings").update({status:"cancelled"}).eq("id",s.dataset.cancel);l?t(l.message,"error"):(t("Annonce annulée","success"),Be(e,{toast:t}))})})}async function tt(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:n,error:i}=await v.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;n.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(ge).join(",")+`
`}),J("clubs_export.csv",p),t(`${n.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:n,error:i}=await v.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){t(i.message,"error");return}if(!n||n.length===0){t("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;n.forEach(d=>{var a;p+=[d.firstname,d.surname_real,d.surname_encoded,d.country_code,((a=d.clubs)==null?void 0:a.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(ge).join(",")+`
`}),J("players_export.csv",p),t(`${n.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),a=be(d);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let s=0,l=0;const r=[];for(const u of a){if(!u.real_name||!u.encoded_name||!u.country_code){l++,r.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const c={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:o}=await v.from("clubs").upsert(c,{onConflict:"encoded_name"});o?(l++,r.push(`${u.encoded_name}: ${o.message}`)):s++}p.innerHTML=`<div style="color:var(--green)">✅ ${s} clubs importés</div>
        ${l>0?`<div style="color:#c0392b">❌ ${l} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,t(`${s} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""}),document.getElementById("import-players").addEventListener("change",async n=>{const i=n.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),a=be(d);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:s}=await v.from("clubs").select("id,encoded_name"),l={};(s||[]).forEach(m=>{l[m.encoded_name.toUpperCase()]=m.id});let r=0,u=0;const c=[],o=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const m of a){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){u++,c.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!o.includes(m.job)){u++,c.push(`${m.firstname}: job invalide "${m.job}"`);continue}const w=m.club_encoded_name&&l[m.club_encoded_name.toUpperCase()]||null,E={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||Y(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:w,job:m.job,job2:o.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:f.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:g.includes(m.skin)?m.skin:"blanc",hair:y.includes(m.hair)?m.hair:"noir",hair_length:_.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:b}=await v.from("players").insert(E);b?(u++,c.push(`${m.firstname} ${m.surname_real}: ${b.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,t(`${r} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}n.target.value=""})}function ge(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function J(e,t){const n=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function be(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(a=>a.trim());if(t.length<2)return[];const n=t[0],i=n.split(";").length>n.split(",").length?";":",",p=fe(n,i).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let a=1;a<t.length;a++){if(!t[a].trim())continue;const s=fe(t[a],i),l={};p.forEach((r,u)=>{l[r]=(s[u]||"").trim()}),!Object.values(l).every(r=>!r)&&d.push(l)}return d}function fe(e,t=","){const n=[];let i="",p=!1;for(let d=0;d<e.length;d++){const a=e[d];p?a==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=a:a==='"'?p=!0:a===t?(n.push(i),i=""):i+=a}return n.push(i),n}const nt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function it(e,{toast:t}){const n=Object.keys(te);let i=n[0];const{data:p}=await v.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(u=>{d[u.formation]=u.links});let a=new Set;function s(u,c){return[u,c].sort().join("-")}function l(u){const c=d[u]||te[u]||[];a=new Set(c.map(([o,f])=>s(o,f)))}l(i),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${a.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function r(){const u=De[i]||{},c=de(i),o=320,f=400,g=22;function y(b){const x=u[b];return x?{x:x.x*o,y:x.y*f}:null}let _=`<svg width="${o}" height="${f}" viewBox="0 0 ${o} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;c.forEach(([b,x],$)=>{const h=y(b),I=y(x);if(!h||!I)return;const B=s(b,x),k=a.has(B),T=k?"#3b82f6":"#999",R=k?.95:.35,M=k?4:3;_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="${T}" stroke-width="${M}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${R}" pointer-events="none" data-line-key="${B}"/>`});for(const b of Object.keys(u)){const x=y(b);if(!x)continue;const $=b.replace(/\d+/,""),h=nt[$]||"#555";_+=`<circle cx="${x.x}" cy="${x.y}" r="${g}" fill="${h}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${x.x}" y="${x.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${b}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const m=document.getElementById("links-list");m.innerHTML=c.map(([b,x])=>{const $=s(b,x),h=a.has($);return`
        <button class="link-toggle" data-key="${$}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${h?"#3b82f6":"#ddd"};
          background:${h?"#eaf2ff":"#fafafa"};
          color:${h?"#1d4ed8":"#888"}">
          <span>${b} ↔ ${x}</span>
          <span>${h?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${a.size}/${c.length} actifs)`);function E(b){a.has(b)?a.delete(b):a.add(b),r()}e.querySelectorAll(".link-hit").forEach(b=>{b.addEventListener("click",()=>E(b.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(b=>{b.addEventListener("click",()=>E(b.dataset.key))})}r(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,l(i),r()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=te[i]||[];a=new Set(u.map(([c,o])=>s(c,o))),r(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const c=de(i).filter(([f,g])=>a.has(s(f,g))),{error:o}=await v.from("formation_links_overrides").upsert({formation:i,links:c,updated_at:new Date().toISOString()});if(o){t(o.message,"error");return}d[i]=c,t(`Liens enregistrés pour ${i} (${c.length} actifs)`,"success")})}const ot=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],at=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],rt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function lt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await v.from("booster_configs").select("*").order("sort_order");let n=null,i=[],p=null;const d=()=>window.innerWidth<700;async function a(){if(!n){i=[];return}if(n!==p){const{data:c}=await v.from("booster_drop_rates").select("*").eq("booster_id",n).order("sort_order");i=c||[],p=n}}function s(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(c=>`
      <div class="booster-row" data-id="${c.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${c.id===n?"#f0f7f0":"#fff"}">
        ${c.image_url?`<img src="/manager-wars/icons/${c.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
          <div style="font-size:11px;color:#888">
            ${c.price_type==="credits"?(c.price_credits||0)+" cr.":c.price_type==="pub"?"Pub":"Gratuit"}
            · ${c.card_count||5} cartes · ${c.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${c.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function l(){const c=n?(t||[]).find(g=>g.id===n):null;if(!c)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const o=i.reduce((g,y)=>g+Number(y.percentage||0),0),f=Math.abs(o-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${c.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${c.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${c.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${c.image_url?`<img src="/manager-wars/icons/${c.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${rt.map(g=>`<option value="${g.value}" ${c.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${c.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${c.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${c.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${c.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
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

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((g,y)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${y}">
            <select class="rate-type" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${ot.map(_=>`<option value="${_.value}" ${g.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${at.map(_=>`<option value="${_.value}" ${(g.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${y}" type="number" min="1" max="10" value="${g.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${y}" type="number" min="1" max="10" value="${g.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${y}" type="number" min="0.1" max="100" step="0.1" value="${g.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${y}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function r(c=!1){c||await a();const o=!n&&d(),f=n&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||o||!n?s():""}
      ${!d()||f?l():""}
    </div>`,u()}function u(){var f,g,y,_,m,w,E;const c=b=>e.querySelector(b);e.querySelectorAll(".booster-row").forEach(b=>{b.addEventListener("click",x=>{x.target.closest(".btn-delete")||(n=b.dataset.id,p=null,r())})}),(f=c("#btn-back"))==null||f.addEventListener("click",()=>{n=null,r()}),(g=c("#btn-new"))==null||g.addEventListener("click",async()=>{const b=prompt("Nom du nouveau booster :");if(!(b!=null&&b.trim()))return;const{data:x,error:$}=await v.from("booster_configs").insert({name:b.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if($){alert($.message);return}t.push(x),n=x.id,p=null,r()}),e.querySelectorAll(".btn-delete").forEach(b=>{b.addEventListener("click",async x=>{if(x.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await v.from("booster_configs").delete().eq("id",b.dataset.id);const $=t.findIndex(h=>h.id===b.dataset.id);$>-1&&t.splice($,1),n===b.dataset.id&&(n=null,p=null),r()})}),(y=c("#btn-cancel"))==null||y.addEventListener("click",()=>{n=null,r()}),(_=c("#f-price-type"))==null||_.addEventListener("change",b=>{const x=c("#credits-field");x&&(x.style.opacity=b.target.value!=="credits"?"0.4":"1")}),(m=c("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var x;const b=c("#icon-picker-grid");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const h=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(h)?h.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!I.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((x=c("#f-image-url"))==null?void 0:x.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${I.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===B?"#1A6B3C":"#ddd"};background:${k.name===B?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const T=c("#f-image-url");T&&(T.value=k.dataset.name),b.style.display="none"})})}catch($){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}});function o(){e.querySelectorAll("[data-rate-idx]").forEach(b=>{var $,h,I,B,k;const x=Number(b.dataset.rateIdx);x>=0&&x<i.length&&(i[x].card_type=(($=b.querySelector(".rate-type"))==null?void 0:$.value)||"player",i[x].rarity=((h=b.querySelector(".rate-rarity"))==null?void 0:h.value)||null,i[x].note_min=Number((I=b.querySelector(".rate-note-min"))==null?void 0:I.value)||null,i[x].note_max=Number((B=b.querySelector(".rate-note-max"))==null?void 0:B.value)||null,i[x].percentage=Number((k=b.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=c("#btn-add-rate"))==null||w.addEventListener("click",()=>{o(),i.push({id:null,booster_id:n,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),r(!0)}),e.querySelectorAll(".btn-del-rate").forEach(b=>{b.addEventListener("click",()=>{o(),i.splice(Number(b.dataset.idx),1),r(!0)})}),(E=c("#btn-save"))==null||E.addEventListener("click",async()=>{var B,k,T,R,M,F,H,U,G;const b=(t||[]).find(L=>L.id===n);if(!b)return;const x=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var C,V,ae,re,le;const q=Number(L.dataset.rateIdx);x.push({booster_id:n,card_type:((C=L.querySelector(".rate-type"))==null?void 0:C.value)||"player",rarity:((V=L.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((ae=L.querySelector(".rate-note-min"))==null?void 0:ae.value)||null,note_max:Number((re=L.querySelector(".rate-note-max"))==null?void 0:re.value)||null,percentage:Number((le=L.querySelector(".rate-pct"))==null?void 0:le.value)||0,sort_order:q});const S=x[x.length-1];S.rarity||(S.rarity=null),S.note_min||(S.note_min=null),S.note_max||(S.note_max=null)});const $=x.reduce((L,q)=>L+q.percentage,0);if(x.length&&Math.abs($-100)>.5){alert(`La somme doit faire 100% (actuellement ${$.toFixed(1)}%)`);return}const h={name:((k=(B=c("#f-name"))==null?void 0:B.value)==null?void 0:k.trim())||b.name,image_url:((R=(T=c("#f-image-url"))==null?void 0:T.value)==null?void 0:R.trim())||null,price_type:(M=c("#f-price-type"))==null?void 0:M.value,price_credits:Number((F=c("#f-price-credits"))==null?void 0:F.value)||0,card_count:Number((H=c("#f-card-count"))==null?void 0:H.value)||5,is_active:((U=c("#f-active"))==null?void 0:U.checked)??b.is_active,sort_order:Number((G=c("#f-sort"))==null?void 0:G.value)||0},{error:I}=await v.from("booster_configs").update(h).eq("id",n);if(I){alert(I.message);return}if(Object.assign(b,h),await v.from("booster_drop_rates").delete().eq("booster_id",n),x.length){const{error:L}=await v.from("booster_drop_rates").insert(x);if(L){alert(L.message);return}}i=x,p=n,alert("✅ Booster enregistré !"),r(!0)})}r()}const ze=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function dt(e){await ie(e)}async function ie(e){const{data:t,error:n}=await v.from("sell_price_configs").select("*").order("rarity").order("note_min");if(n){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${n.message}</div>`;return}e.innerHTML=`
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
          ${(t||[]).map(i=>st(i)).join("")}
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
              ${ze.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ve(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>ct(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(t||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>ve(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await v.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ie(e))})})}function st(e){const t=ze.find(n=>n.value===e.rarity);return`
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
    </tr>`}function ve(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function ct(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const a={rarity:n,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let s;if(t?{error:s}=await v.from("sell_price_configs").update(a).eq("id",t):{error:s}=await v.from("sell_price_configs").insert(a),s){alert("Erreur : "+s.message);return}document.getElementById("config-form").style.display="none",await ie(e)}async function pt(e){await oe(e)}async function oe(e){const{data:t}=await v.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(t||[]).map(n=>ut(n)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>xe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>mt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const i=(t||[]).find(p=>p.id===n.dataset.edit);i&&n.addEventListener("click",()=>xe(i))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await v.from("patch_notes").delete().eq("id",n.dataset.delete),await oe(e))})})}function ut(e){const t=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function xe(e){const t=document.getElementById("article-form");t.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const n=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,t.scrollIntoView({behavior:"smooth"})}async function mt(e){const t=document.getElementById("form-id").value,n=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,a=document.getElementById("form-art-date").value;if(!n){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const s=a?new Date(a).toISOString():new Date().toISOString(),l={title:n,description:i,image_url:p,is_published:d,published_at:s};let r;if(t?{error:r}=await v.from("patch_notes").update(l).eq("id",t):{error:r}=await v.from("patch_notes").insert(l),r){alert("Erreur : "+r.message);return}document.getElementById("article-form").style.display="none",await oe(e)}async function gt(e){await D(e)}async function D(e){var n,i,p,d,a,s;const{data:t}=await v.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div>
          <h2 style="font-size:20px;font-weight:900">🎓 Tutoriel — Étapes</h2>
          <div style="font-size:12px;color:#888;margin-top:2px">Gérez les slides du tutoriel affiché aux nouveaux joueurs</div>
        </div>
        <button id="ts-add" class="btn btn-primary">+ Ajouter une étape</button>
      </div>

      <div id="ts-list" style="display:flex;flex-direction:column;gap:10px">
        ${(t||[]).length===0?`
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>`:(t||[]).map(l=>bt(l)).join("")}
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
    </div>`,(n=document.getElementById("ts-add"))==null||n.addEventListener("click",()=>ye(null,(t==null?void 0:t.length)||0)),(i=document.getElementById("ts-cancel"))==null||i.addEventListener("click",Ae),(p=document.getElementById("ts-save"))==null||p.addEventListener("click",()=>vt(e)),(d=document.getElementById("ts-preview-btn"))==null||d.addEventListener("click",ft),(a=document.getElementById("ts-color"))==null||a.addEventListener("input",l=>{const r=document.getElementById("ts-color-hex");r&&(r.value=l.target.value)}),(s=document.getElementById("ts-color-hex"))==null||s.addEventListener("input",l=>{const r=l.target.value;if(/^#[0-9a-fA-F]{6}$/.test(r)){const u=document.getElementById("ts-color");u&&(u.value=r)}}),e.querySelectorAll("[data-edit]").forEach(l=>{const r=(t||[]).find(u=>u.id===l.dataset.edit);r&&l.addEventListener("click",()=>ye(r))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await v.from("tutorial_steps").delete().eq("id",l.dataset.delete),D(e))})}),e.querySelectorAll("[data-toggle]").forEach(l=>{l.addEventListener("click",async()=>{const r=(t||[]).find(u=>u.id===l.dataset.toggle);r&&(await v.from("tutorial_steps").update({is_active:!r.is_active}).eq("id",r.id),D(e))})}),e.querySelectorAll("[data-up]").forEach(l=>{l.addEventListener("click",async()=>{const r=t||[],u=r.findIndex(c=>c.id===l.dataset.up);u<=0||(await Promise.all([v.from("tutorial_steps").update({step_order:r[u-1].step_order}).eq("id",r[u].id),v.from("tutorial_steps").update({step_order:r[u].step_order}).eq("id",r[u-1].id)]),D(e))})}),e.querySelectorAll("[data-down]").forEach(l=>{l.addEventListener("click",async()=>{const r=t||[],u=r.findIndex(c=>c.id===l.dataset.down);u<0||u>=r.length-1||(await Promise.all([v.from("tutorial_steps").update({step_order:r[u+1].step_order}).eq("id",r[u].id),v.from("tutorial_steps").update({step_order:r[u].step_order}).eq("id",r[u+1].id)]),D(e))})})}function bt(e){return`
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
  </div>`}function ye(e,t=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"",document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??t,document.getElementById("ts-active").checked=e?e.is_active:!0;const n=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=n,document.getElementById("ts-color-hex").value=n,document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ae(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function ft(){const e=document.getElementById("ts-emoji").value||"⚽",t=document.getElementById("ts-title").value||"Titre",n=document.getElementById("ts-content").value||"",i=document.getElementById("ts-color-hex").value||"#1A6B3C",p=document.getElementById("ts-preview-area");p.innerHTML=`
    <div style="border:2px solid ${i};border-radius:14px;overflow:hidden;margin-bottom:8px">
      <div style="background:${i};padding:12px 16px;display:flex;align-items:center;gap:10px">
        <span style="font-size:28px">${e}</span>
        <span style="font-size:15px;font-weight:900;color:#fff">${t}</span>
      </div>
      <div style="padding:14px 16px;font-size:13px;color:#333;line-height:1.7;background:#fafafa">${n}</div>
    </div>`}async function vt(e){const t=document.getElementById("ts-id").value,n=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-content").value.trim(),d=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",a=parseInt(document.getElementById("ts-order").value)||0,s=document.getElementById("ts-active").checked;if(!i||!p){alert("Titre et contenu sont obligatoires.");return}const l={emoji:n,title:i,content:p,color:d,step_order:a,is_active:s};let r;if(t?{error:r}=await v.from("tutorial_steps").update(l).eq("id",t):{error:r}=await v.from("tutorial_steps").insert(l),r){alert("Erreur : "+r.message);return}Ae(),D(e)}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function xt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await v.from("gc_definitions").select("*").order("sort_order").order("created_at");let n=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,a=o=>e.querySelector(o);function s(o,f=130){if(!o)return"";const g=N.find(E=>E.value===o.gc_type)||N[0],y=P.find(E=>E.value===o.color)||P[0],_=Math.round(f*.55),m=Math.round(f*.15),w=Math.round(f*.3);return`<div style="width:${f}px;height:${Math.round(f*1.4)}px;border-radius:10px;border:3px solid ${y.hex};background:${g.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${y.hex}55;flex-shrink:0">
      <div style="height:${m}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(f/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${o.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${o.image_url?`<img src="/manager-wars/icons/${o.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(f*.3)}px">${g.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(f/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(o.effect||"").slice(0,60)}${(o.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function l(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(o=>{const f=N.find(y=>y.value===o.gc_type)||N[0],g=P.find(y=>y.value===o.color)||P[0];return`
        <div class="gc-row" data-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===n?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${g.hex};background:${f.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
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
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function r(){const o=n?(t||[]).find(g=>g.id===n):null;if(!o)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const f=N.find(g=>g.value===o.gc_type)||N[0];return P.find(g=>g.value===o.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${f.bg};border-radius:12px">
        ${s(o,d()?120:150)}
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
              ${N.map(g=>`<option value="${g.value}" ${o.gc_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(g=>`<option value="${g.value}" ${o.color===g.value?"selected":""}>${g.label}</option>`).join("")}
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
          ${(()=>{const g=o.effect_params||{},y=i.find(_=>_.value===(o.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${y.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${g.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${g.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${y.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(g.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${g.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${y.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${_}" ${!g.roles||g.roles.includes(_)?"checked":""}> ${_}
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
      ${!d()||!n?l():""}
      ${!d()||n?r():""}
    </div>`,c()}function c(){var o,f,g,y,_;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(n=m.dataset.id,u())})}),(o=a("#btn-gc-back"))==null||o.addEventListener("click",()=>{n=null,u()}),(f=a("#btn-cancel-gc"))==null||f.addEventListener("click",()=>{n=null,u()}),(g=a("#btn-new-gc"))==null||g.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:w,error:E}=await v.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(E){alert(E.message);return}t.push(w),n=w.id,u()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async w=>{w.stopPropagation();const E=m.dataset.active!=="true";await v.from("gc_definitions").update({is_active:E}).eq("id",m.dataset.id);const b=t.find(x=>x.id===m.dataset.id);b&&(b.is_active=E),u()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await v.from("gc_definitions").delete().eq("id",m.dataset.id);const E=t.findIndex(b=>b.id===m.dataset.id);E>-1&&t.splice(E,1),n===m.dataset.id&&(n=null),u()})}),(y=a("#btn-pick-gc-icon"))==null||y.addEventListener("click",async()=>{var w;const m=a("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),x=Array.isArray(b)?b.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!x.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const $=((w=a("#gc-image-url"))==null?void 0:w.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${x.map(h=>`
          <div class="gc-icon-item" data-name="${h.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===$?"#7a28b8":"#ddd"};background:${h.name===$?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const I=a("#gc-image-url");I&&(I.value=h.dataset.name),m.style.display="none"})})}catch(E){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}}),(_=a("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var h,I,B,k,T,R,M,F,H,U,G,L,q,S;const m=t.find(C=>C.id===n);if(!m)return;const w=i.find(C=>{var V;return C.value===(((V=a("#gc-effect-type"))==null?void 0:V.value)||"BOOST_STAT")})||i[0],E=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(C=>C.value):null,b={...w.hasValue?{value:Number((h=a("#gc-p-value"))==null?void 0:h.value)||2}:{},...w.hasCount?{count:Number((I=a("#gc-p-count"))==null?void 0:I.value)||1}:{},...w.hasTarget?{target:((B=a("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...w.hasRoles?{roles:E!=null&&E.length?E:null}:{}},x={name:((T=(k=a("#gc-name"))==null?void 0:k.value)==null?void 0:T.trim())||m.name,effect:((M=(R=a("#gc-effect"))==null?void 0:R.value)==null?void 0:M.trim())||null,image_url:((H=(F=a("#gc-image-url"))==null?void 0:F.value)==null?void 0:H.trim())||null,gc_type:((U=a("#gc-type"))==null?void 0:U.value)||"game_changer",color:((G=a("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((L=a("#gc-sort"))==null?void 0:L.value)||0,is_active:((q=a("#gc-active"))==null?void 0:q.checked)??m.is_active,effect_type:((S=a("#gc-effect-type"))==null?void 0:S.value)||"BOOST_STAT",effect_params:b},{error:$}=await v.from("gc_definitions").update(x).eq("id",n);if($){alert($.message);return}Object.assign(m,x),alert("✅ Carte enregistrée !"),u()})}u()}Fe($e);function yt(e,t="info"){const n=document.getElementById("toast");n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},3e3)}function ht(e,t,n=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=n,document.getElementById("modal-overlay").classList.remove("hidden")}function ne(){document.getElementById("modal-overlay").classList.add("hidden")}const he={dashboard:{title:"Dashboard",fn:He},players:{title:"Joueurs & Cartes",fn:Ge},clubs:{title:"Clubs",fn:Ve},"card-builder":{title:"Card Builder",fn:We},users:{title:"Managers",fn:Le},market:{title:"Marché des transferts",fn:Be},"import-export":{title:"Import / Export CSV",fn:tt},formations:{title:"Formations & Liens",fn:it},"boosters-config":{title:"Boosters",fn:lt},"sell-price":{title:"Prix vente directe",fn:dt},journal:{title:"Journal",fn:pt},tutorial:{title:"Tutoriel",fn:gt},"gc-cards":{title:"Game Changers",fn:xt}};async function ee(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const t=document.getElementById("mobile-page-select");t&&(t.value=e);const n=he[e]||he.dashboard;document.getElementById("page-title").textContent=n.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await n.fn(i,{toast:yt,openModal:ht,closeModal:ne,navigate:ee})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function _t(){var t;const{data:{session:e}}=await v.auth.getSession();e&&await _e(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!n||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:a}=await v.auth.signInWithPassword({email:n,password:i});if(a){p.textContent=a.message;return}await _e(d.user)}),document.getElementById("auth-password").addEventListener("keydown",n=>{n.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ne),document.getElementById("modal-overlay").addEventListener("click",n=>{n.target===n.currentTarget&&ne()}),document.querySelectorAll(".admin-sidebar nav a").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),ee(n.dataset.page)})}),(t=document.getElementById("mobile-page-select"))==null||t.addEventListener("change",n=>{ee(n.target.value)})}async function _e(e){const{data:t,error:n}=await v.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(n||!t){i.textContent="Profil introuvable.";return}if(!t.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await v.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,ee("dashboard")}_t();
