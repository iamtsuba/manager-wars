import{s as y,e as Y,g as ke,K as Ie,D as A,S as Me,a as z,H as Re,R as Ne,b as Be,r as Pe,c as qe,E as Oe,d as Fe,N as De,M as He,B as Ue,F as ie,f as ce,h as Ge,i as Ve}from"./formation-links-DJC25wD7.js";async function Ke(e){const[{count:i},{count:t},{count:n},{count:c},{count:r}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${K("🃏","Joueurs (cartes)",i??"–","#1A6B3C")}
      ${K("🏟️","Clubs",t??"–","#D4A017")}
      ${K("👥","Managers",n??"–","#7a28b8")}
      ${K("📦","Cartes possédées",c??"–","#2a8f52")}
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
  `,window.adminNav=o=>{var l;(l=document.querySelector(`[data-page="${o}"]`))==null||l.click()}}function K(e,i,t,n){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${n}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${i}</div>
  </div>`}const pe={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Ye={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Je(e,i){await W(e,i)}async function W(e,i){const{toast:t,openModal:n,closeModal:c}=i,[{data:r,error:o},{data:l}]=await Promise.all([y.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const d={};(l||[]).forEach(p=>{d[p.id]=p.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(pe).map(([p,a])=>`<option value="${p}">${a}</option>`).join("")}
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
  `,s(r);function s(p){document.getElementById("count-label").textContent=`${p.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=p.map(a=>{var x;return`
      <tr>
        <td>
          <div style="font-weight:600">${a.firstname} ${a.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${a.firstname} ${a.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:16px;vertical-align:middle"> ${a.country_code}
        </td>
        <td style="font-size:12px">${((x=a.clubs)==null?void 0:x.encoded_name)||"—"}</td>
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
          <span style="background:${Ye[a.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${pe[a.rarity]||a.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const x=r.find(g=>g.id===a.dataset.edit);ue(x,l||[],{toast:t,openModal:n,closeModal:c,reload:()=>W(e,i)})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:x}=await y.from("players").delete().eq("id",a.dataset.del);x?t(x.message,"error"):(t("Joueur supprimé","success"),W(e,i))})})}function m(){const p=document.getElementById("search-players").value.toLowerCase(),a=document.getElementById("filter-rarity").value,x=document.getElementById("filter-job").value;s(r.filter(g=>(!p||`${g.firstname} ${g.surname_encoded} ${g.surname_real}`.toLowerCase().includes(p))&&(!a||g.rarity===a)&&(!x||g.job===x)))}document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("add-player-btn").addEventListener("click",()=>{ue(null,l||[],{toast:t,openModal:n,closeModal:c,reload:()=>W(e,i)})})}function ue(e,i,{toast:t,openModal:n,closeModal:c,reload:r}){const o=!!e,l='<option value="">— Club —</option>'+i.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join("");n(o?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(d=>`<option value="${d}" ${(e==null?void 0:e.country_code)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${l}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(d=>`<option value="${d}" ${(e==null?void 0:e.job2)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(d=>`<option value="${d}" ${(e==null?void 0:e.rarity)===d?"selected":""}>${d}</option>`).join("")}
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
          ${["blanc","metisse","typ","noir"].map(d=>`<option value="${d}" ${(e==null?void 0:e.skin)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(d=>`<option value="${d}" ${(e==null?void 0:e.hair)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(d=>`<option value="${d}" ${(e==null?void 0:e.hair_length)===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${o?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",c),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=Y(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const d={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!d.firstname||!d.surname_real||!d.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:s}=o?await y.from("players").update({...d,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(d);if(s){t(s.message,"error");return}t(o?"Joueur modifié ✅":"Joueur créé ✅","success"),c(),r()})}let X=[];async function We(e,{toast:i,openModal:t,closeModal:n}){await Q(e,{toast:i,openModal:t,closeModal:n})}async function Q(e,i){const{data:t,error:n}=await y.from("clubs").select("*").order("encoded_name");if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}X=t||[],Xe(e,i)}function Xe(e,{toast:i,openModal:t,closeModal:n}){e.innerHTML=`
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
  `,c(X),document.getElementById("search-clubs").addEventListener("input",r=>{const o=r.target.value.toLowerCase();c(X.filter(l=>l.encoded_name.toLowerCase().includes(o)||l.real_name.toLowerCase().includes(o)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{me(null,{toast:i,openModal:t,closeModal:n,reload:()=>Q(e,{toast:i,openModal:t,closeModal:n})})});function c(r){document.getElementById("clubs-tbody").innerHTML=r.map(o=>{var s;const l=Le(o),d=ke(l).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${o.logo_url?`<img src="${o.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${o.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((s=Ie[o.kit_style||"uni"])==null?void 0:s.label)||"Uni"}">${d}</td>
        <td><b>${o.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${o.real_name}</td>
        <td><img src="https://flagsapi.com/${o.country_code}/flat/32.png" alt="${o.country_code}" style="height:18px;vertical-align:middle"> ${o.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const l=X.find(d=>d.id===o.dataset.edit);me(l,{toast:i,openModal:t,closeModal:n,reload:()=>Q(e,{toast:i,openModal:t,closeModal:n})})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:l}=await y.from("clubs").delete().eq("id",o.dataset.del);l?i(l.message,"error"):(i("Club supprimé","success"),Q(e,{toast:i,openModal:t,closeModal:n}))})})}}function Le(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function me(e,{toast:i,openModal:t,closeModal:n,reload:c}){var p;const r=!!e,o=e?Le(e):{...A},l=Object.entries(Ie).map(([a,x])=>`<option value="${a}" ${o.style===a?"selected":""}>${x.label}</option>`).join("");t(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style">${l}</select>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div>
                <label>Couleur 1 (principale)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color1" value="${o.color1}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color1-txt" value="${o.color1}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Couleur 2 (secondaire)</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-color2" value="${o.color2}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-color2-txt" value="${o.color2}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Short</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-shorts" value="${o.shorts}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-shorts-txt" value="${o.shorts}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>
              <div>
                <label>Chaussettes</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="m-kit-socks" value="${o.socks}" style="width:40px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:4px;cursor:pointer">
                  <input id="m-kit-socks-txt" value="${o.socks}" style="flex:1;font-family:monospace;font-size:12px">
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
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`);function d(a,x){const g=document.getElementById(a),w=document.getElementById(x);!g||!w||(g.addEventListener("input",()=>{w.value=g.value,m()}),w.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(w.value)&&(g.value=w.value,m())}))}d("m-kit-color1","m-kit-color1-txt"),d("m-kit-color2","m-kit-color2-txt"),d("m-kit-shorts","m-kit-shorts-txt"),d("m-kit-socks","m-kit-socks-txt"),(p=document.getElementById("m-kit-style"))==null||p.addEventListener("change",m);function s(){var a,x,g,w,_;return{style:((a=document.getElementById("m-kit-style"))==null?void 0:a.value)||"uni",color1:((x=document.getElementById("m-kit-color1"))==null?void 0:x.value)||"#1A6B3C",color2:((g=document.getElementById("m-kit-color2"))==null?void 0:g.value)||"#ffffff",shorts:((w=document.getElementById("m-kit-shorts"))==null?void 0:w.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function m(){const a=document.getElementById("kit-preview-wrap");a&&(a.innerHTML=ke(s()))}m(),document.getElementById("m-cancel").addEventListener("click",n),document.getElementById("auto-encode").addEventListener("click",()=>{const a=document.getElementById("m-real").value,x=a.split(" ")[0]||a;document.getElementById("m-encoded").value=x.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const a=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const x=a.split(" ")[0]||a;document.getElementById("m-encoded").value=x.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const a=s(),x={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:a.style,kit_color1:a.color1,kit_color2:a.color2,kit_shorts:a.shorts,kit_socks:a.socks};if(!x.real_name||!x.encoded_name||!x.country_code){i("Remplissez tous les champs obligatoires","error");return}const{error:g}=r?await y.from("clubs").update(x).eq("id",e.id):await y.from("clubs").insert(x);if(g){i(g.message,"error");return}i(r?"Club modifié ✅":"Club créé ✅","success"),n(),c()})}const Qe=["normal","pepite","papyte","legende"],ge=["GK","DEF","MIL","ATT"],Ze=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let q={...z},Z=[];async function et(e,{toast:i}){const{data:t}=await y.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");Z=t||[],q={...z},e.innerHTML=ot(Z),it(e,Z,i),j()}function be(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",i=document.getElementById("cb-surname-enc");i&&(i.value=Y(e))}function tt(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,i=Z.find(n=>String(n.id)===String(e));return i?{style:i.kit_style||A.style,color1:i.kit_color1||A.color1,color2:i.kit_color2||A.color2,shorts:i.kit_shorts||A.shorts,socks:i.kit_socks||A.socks}:{...A}}function j(){var a,x,g,w;const e=_=>{var u;return((u=document.getElementById(_))==null?void 0:u.value)||""},i={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||Y(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((x=(a=document.getElementById("cb-club"))==null?void 0:a.selectedOptions[0])==null?void 0:x.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=tt(),n=document.getElementById("cb-club"),c=((w=(g=n==null?void 0:n.selectedOptions[0])==null?void 0:g.dataset)==null?void 0:w.logo)||null,r=Be(q,t,120),o=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,l=Pe(i,{portraitUrl:o,clubLogoUrl:c,showNotes:!0}),d=document.getElementById("card-preview");d&&(d.innerHTML=l);const s=document.getElementById("avatar-preview-wrap");s&&(s.innerHTML=r);const m=e("cb-surname-real"),p=document.getElementById("encode-summary");p&&m&&(p.textContent=`${e("cb-firstname")} ${m} → ${e("cb-firstname")} ${i.surname_encoded}`)}function ze(){const e=i=>{var t;return((t=document.getElementById(i))==null?void 0:t.value)||""};q={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function it(e,i,t){var c,r,o,l,d;e.querySelectorAll("input,select").forEach(s=>{s.addEventListener("input",j),s.addEventListener("change",j)});const n=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];n.forEach(s=>{var m;(m=document.getElementById(s))==null||m.addEventListener("change",()=>{ze(),j()})}),(c=document.getElementById("cb-surname-real"))==null||c.addEventListener("input",()=>{be(),j()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{be(),j()}),(o=document.getElementById("cb-club"))==null||o.addEventListener("change",j),(l=document.getElementById("btn-save-player"))==null||l.addEventListener("click",()=>nt(t)),(d=document.getElementById("btn-reset"))==null||d.addEventListener("click",()=>{e.querySelectorAll("input").forEach(s=>s.value=""),e.querySelectorAll("select").forEach(s=>s.selectedIndex=0),q={...z},n.forEach(s=>{const m=s.replace("av-",""),p=document.getElementById(s);p&&(p.value=z[m]||"")}),j()})}async function nt(e){const i=o=>{var l;return((l=document.getElementById(o))==null?void 0:l.value)||""},t=i("cb-surname-real").trim(),n=i("cb-surname-enc").trim()||Y(t);if(!i("cb-firstname")||!t||!i("cb-country")||!i("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}ze();const c={firstname:i("cb-firstname").trim(),surname_real:t,surname_encoded:n,country_code:i("cb-country"),club_id:i("cb-club")||null,job:i("cb-job"),job2:i("cb-job2")||null,note_g:parseInt(i("cb-note-g"))||0,note_d:parseInt(i("cb-note-d"))||0,note_m:parseInt(i("cb-note-m"))||0,note_a:parseInt(i("cb-note-a"))||0,rarity:i("cb-rarity")||"normal",note_min:parseInt(i("cb-note-min"))||null,note_max:parseInt(i("cb-note-max"))||null,sell_price:parseInt(i("cb-price"))||0,avatar_config:q,skin:q.skin||"blanc",hair:q.hairColor||"marron",hair_length:"court"},{error:r}=await y.from("players").insert(c);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${c.firstname} ${c.surname_encoded}" enregistré !`,"success")}function ot(e){const i=Ze.map(([s,m])=>`<option value="${s}">${m} (${s})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(s=>`<option value="${s.id}" data-logo="${s.logo_url||""}">${s.encoded_name}</option>`).join(""),n=ge.map(s=>`<option value="${s}">${s}</option>`).join(""),c='<option value="">Aucun</option>'+ge.map(s=>`<option value="${s}">${s}</option>`).join(""),r=Qe.map(s=>`<option value="${s}">${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),o=(s,m,p)=>Object.entries(m).map(([a,x])=>`<option value="${a}" ${a===(p||"")?"selected":""}>${x.label}</option>`).join(""),l=Object.keys(Me).map(s=>`<option value="${s}" ${s===z.skin?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),d=Object.keys(Re).map(s=>`<option value="${s}" ${s===z.hairColor?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join("");return`
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
          <div><label>Poste secondaire</label><select id="cb-job2">${c}</select></div>
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
          ${["normal","pepite","papyte","legende"].map(s=>`
            <div style="background:${Ne[s]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${s.toUpperCase()}
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
              <select id="av-skin">${l}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${o("av-hair",qe,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${d}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${o("av-eyebrows",Oe,z.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${o("av-eyes",Fe,z.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${o("av-nose",De,z.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${o("av-mouth",He,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${o("av-beard",Ue,z.beard)}</select>
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
  `}async function Ae(e,{toast:i}){const{data:t,error:n}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}e.innerHTML=`
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
  `;const c=t||[];r(c),document.getElementById("search-users").addEventListener("input",o=>{const l=o.target.value.toLowerCase();r(c.filter(d=>{var s;return d.pseudo.toLowerCase().includes(l)||((s=d.club_name)==null?void 0:s.toLowerCase().includes(l))}))});function r(o){document.getElementById("users-tbody").innerHTML=o.map(l=>`
      <tr>
        <td><b>${l.pseudo}</b></td>
        <td style="font-size:12px">${l.club_name||"—"}</td>
        <td style="font-size:12px">${(l.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${l.level}</b></td>
        <td style="font-size:12px">${l.wins}/${l.draws}/${l.losses}</td>
        <td style="font-size:12px">🥇${l.trophies_top1} 🥈${l.trophies_top2} 🥉${l.trophies_top3}</td>
        <td>
          ${l.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${l.id}" data-is-admin="${l.is_admin}">
            ${l.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${d?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:m}=await y.from("users").update({is_admin:d}).eq("id",l.dataset.toggleAdmin);m?i(m.message,"error"):(i("Rôle mis à jour ✅","success"),Ae(e,{toast:i}))})})}}async function Te(e,{toast:i}){const{data:t,error:n}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(n){e.innerHTML=`<p style="color:red">${n.message}</p>`;return}const c=t||[],r=c.filter(l=>l.status==="active").length,o=c.filter(l=>l.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${r}</div>
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
            ${c.map(l=>{var p,a,x,g;const d=(p=l.card)==null?void 0:p.player,s=d?`${d.firstname} ${d.surname_encoded}`:((a=l.card)==null?void 0:a.card_type)||"—",m={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${s}</b>${d?`<div style="font-size:10px;color:#999">${d.rarity} · ${d.job}</div>`:""}</td>
                <td style="font-size:12px">${((x=l.seller)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=l.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(l.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${m[l.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${l.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(l.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${l.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${l.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:d}=await y.from("market_listings").update({status:"cancelled"}).eq("id",l.dataset.cancel);d?i(d.message,"error"):(i("Annonce annulée","success"),Te(e,{toast:i}))})})}async function at(e,{toast:i}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:n}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;t.forEach(r=>{c+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(fe).join(",")+`
`}),J("clubs_export.csv",c),i(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:n}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(n){i(n.message,"error");return}if(!t||t.length===0){i("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(r=>{var o;c+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((o=r.clubs)==null?void 0:o.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(fe).join(",")+`
`}),J("players_export.csv",c),i(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await n.text(),o=xe(r);if(o.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let l=0,d=0;const s=[];for(const m of o){if(!m.real_name||!m.encoded_name||!m.country_code){d++,s.push(`Ligne ignorée (champs manquants): ${m.real_name||"?"}`);continue}const p={real_name:m.real_name,encoded_name:m.encoded_name.toUpperCase(),country_code:m.country_code.toUpperCase().slice(0,2),logo_url:m.logo_url||null},{error:a}=await y.from("clubs").upsert(p,{onConflict:"encoded_name"});a?(d++,s.push(`${m.encoded_name}: ${a.message}`)):l++}c.innerHTML=`<div style="color:var(--green)">✅ ${l} clubs importés</div>
        ${d>0?`<div style="color:#c0392b">❌ ${d} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${s.slice(0,10).join("<br>")}</div>`:""}`,i(`${l} clubs importés`,"success")}catch(r){c.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await n.text(),o=xe(r);if(o.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:l}=await y.from("clubs").select("id,encoded_name"),d={};(l||[]).forEach(u=>{d[u.encoded_name.toUpperCase()]=u.id});let s=0,m=0;const p=[],a=["GK","DEF","MIL","ATT"],x=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],w=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const u of o){if(!u.firstname||!u.surname_real||!u.country_code||!u.job){m++,p.push(`Ligne ignorée (champs requis manquants): ${u.firstname||"?"}`);continue}if(!a.includes(u.job)){m++,p.push(`${u.firstname}: job invalide "${u.job}"`);continue}const I=u.club_encoded_name&&d[u.club_encoded_name.toUpperCase()]||null,k={firstname:u.firstname,surname_real:u.surname_real,surname_encoded:u.surname_encoded||Y(u.surname_real),country_code:u.country_code.toUpperCase().slice(0,2),club_id:I,job:u.job,job2:a.includes(u.job2)?u.job2:null,note_g:parseInt(u.note_g)||0,note_d:parseInt(u.note_d)||0,note_m:parseInt(u.note_m)||0,note_a:parseInt(u.note_a)||0,rarity:x.includes(u.rarity)?u.rarity:"normal",note_min:u.note_min!==""&&u.note_min!=null?parseInt(u.note_min):null,note_max:u.note_max!==""&&u.note_max!=null?parseInt(u.note_max):null,skin:g.includes(u.skin)?u.skin:"blanc",hair:w.includes(u.hair)?u.hair:"noir",hair_length:_.includes(u.hair_length)?u.hair_length:"court",sell_price:parseInt(u.sell_price)||0},{error:b}=await y.from("players").insert(k);b?(m++,p.push(`${u.firstname} ${u.surname_real}: ${b.message}`)):s++}c.innerHTML=`<div style="color:var(--green)">✅ ${s} joueurs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${p.slice(0,10).join("<br>")}</div>`:""}`,i(`${s} joueurs importés`,"success")}catch(r){c.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""})}function fe(e){const i=String(e??"");return i.includes(",")||i.includes('"')||i.includes(`
`)?'"'+i.replace(/"/g,'""')+'"':i}function J(e,i){const t=new Blob(["\uFEFF"+i],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),c=document.createElement("a");c.href=n,c.download=e,c.click(),URL.revokeObjectURL(n)}function xe(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const i=e.split(`
`).filter(o=>o.trim());if(i.length<2)return[];const t=i[0],n=t.split(";").length>t.split(",").length?";":",",c=ve(t,n).map(o=>o.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let o=1;o<i.length;o++){if(!i[o].trim())continue;const l=ve(i[o],n),d={};c.forEach((s,m)=>{d[s]=(l[m]||"").trim()}),!Object.values(d).every(s=>!s)&&r.push(d)}return r}function ve(e,i=","){const t=[];let n="",c=!1;for(let r=0;r<e.length;r++){const o=e[r];c?o==='"'?e[r+1]==='"'?(n+='"',r++):c=!1:n+=o:o==='"'?c=!0:o===i?(t.push(n),n=""):n+=o}return t.push(n),t}const rt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function lt(e,{toast:i}){const t=Object.keys(ie);let n=t[0];const{data:c}=await y.from("formation_links_overrides").select("formation, links"),r={};(c||[]).forEach(m=>{r[m.formation]=m.links});let o=new Set;function l(m,p){return[m,p].sort().join("-")}function d(m){const p=r[m]||ie[m]||[];o=new Set(p.map(([a,x])=>l(a,x)))}d(n),e.innerHTML=`
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${o.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function s(){const m=Ge[n]||{},p=ce(n),a=320,x=400,g=22;function w(b){const h=m[b];return h?{x:h.x*a,y:h.y*x}:null}let _=`<svg width="${a}" height="${x}" viewBox="0 0 ${a} ${x}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;p.forEach(([b,h],v)=>{const f=w(b),E=w(h);if(!f||!E)return;const B=l(b,h),$=o.has(B),T=$?"#3b82f6":"#999",M=$?.95:.35,R=$?4:3;_+=`<line x1="${f.x}" y1="${f.y}" x2="${E.x}" y2="${E.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,_+=`<line x1="${f.x}" y1="${f.y}" x2="${E.x}" y2="${E.y}"
        stroke="${T}" stroke-width="${R}" stroke-dasharray="${$?"none":"4,3"}"
        opacity="${M}" pointer-events="none" data-line-key="${B}"/>`});for(const b of Object.keys(m)){const h=w(b);if(!h)continue;const v=b.replace(/\d+/,""),f=rt[v]||"#555";_+=`<circle cx="${h.x}" cy="${h.y}" r="${g}" fill="${f}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${h.x}" y="${h.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${b}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const u=document.getElementById("links-list");u.innerHTML=p.map(([b,h])=>{const v=l(b,h),f=o.has(v);return`
        <button class="link-toggle" data-key="${v}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${f?"#3b82f6":"#ddd"};
          background:${f?"#eaf2ff":"#fafafa"};
          color:${f?"#1d4ed8":"#888"}">
          <span>${b} ↔ ${h}</span>
          <span>${f?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const I=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');I&&(I.textContent=`Liens (${o.size}/${p.length} actifs)`);function k(b){o.has(b)?o.delete(b):o.add(b),s()}e.querySelectorAll(".link-hit").forEach(b=>{b.addEventListener("click",()=>k(b.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(b=>{b.addEventListener("click",()=>k(b.dataset.key))})}s(),document.getElementById("formation-select").addEventListener("change",m=>{n=m.target.value,d(n),s()}),document.getElementById("reset-btn").addEventListener("click",()=>{const m=ie[n]||[];o=new Set(m.map(([p,a])=>l(p,a))),s(),i("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const p=ce(n).filter(([x,g])=>o.has(l(x,g))),{error:a}=await y.from("formation_links_overrides").upsert({formation:n,links:p,updated_at:new Date().toISOString()});if(a){i(a.message,"error");return}r[n]=p,i(`Liens enregistrés pour ${n} (${p.length} actifs)`,"success")})}const dt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],st=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],ct=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function pt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await y.from("booster_configs").select("*").order("sort_order");let t=null,n=[],c=null;const r=()=>window.innerWidth<700;async function o(){if(!t){n=[];return}if(t!==c){const{data:p}=await y.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");n=p||[],c=t}}function l(){return`
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
    </div>`}function d(){const p=t?(i||[]).find(g=>g.id===t):null;if(!p)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const a=n.reduce((g,w)=>g+Number(w.percentage||0),0),x=Math.abs(a-100)<.1;return`
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
              ${ct.map(g=>`<option value="${g.value}" ${p.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${x?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${a.toFixed(1)}% ${x?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${n.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':n.map((g,w)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${w}">
            <select class="rate-type" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${dt.map(_=>`<option value="${_.value}" ${g.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${st.map(_=>`<option value="${_.value}" ${(g.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${w}" type="number" min="1" max="10" value="${g.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${w}" type="number" min="1" max="10" value="${g.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${w}" type="number" min="0.1" max="100" step="0.1" value="${g.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${w}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function s(p=!1){p||await o();const a=!t&&r(),x=t&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||a||!t?l():""}
      ${!r()||x?d():""}
    </div>`,m()}function m(){var x,g,w,_,u,I,k;const p=b=>e.querySelector(b);e.querySelectorAll(".booster-row").forEach(b=>{b.addEventListener("click",h=>{h.target.closest(".btn-delete")||(t=b.dataset.id,c=null,s())})}),(x=p("#btn-back"))==null||x.addEventListener("click",()=>{t=null,s()}),(g=p("#btn-new"))==null||g.addEventListener("click",async()=>{const b=prompt("Nom du nouveau booster :");if(!(b!=null&&b.trim()))return;const{data:h,error:v}=await y.from("booster_configs").insert({name:b.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(v){alert(v.message);return}i.push(h),t=h.id,c=null,s()}),e.querySelectorAll(".btn-delete").forEach(b=>{b.addEventListener("click",async h=>{if(h.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",b.dataset.id);const v=i.findIndex(f=>f.id===b.dataset.id);v>-1&&i.splice(v,1),t===b.dataset.id&&(t=null,c=null),s()})}),(w=p("#btn-cancel"))==null||w.addEventListener("click",()=>{t=null,s()}),(_=p("#f-price-type"))==null||_.addEventListener("change",b=>{const h=p("#credits-field");h&&(h.style.opacity=b.target.value!=="credits"?"0.4":"1")}),(u=p("#btn-pick-icon"))==null||u.addEventListener("click",async()=>{var h;const b=p("#icon-picker-grid");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const f=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(f)?f.filter($=>$.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test($.name)):[];if(!E.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((h=p("#f-image-url"))==null?void 0:h.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${E.map($=>`
          <div class="icon-pick-item" data-name="${$.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${$.name===B?"#1A6B3C":"#ddd"};background:${$.name===B?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${$.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".icon-pick-item").forEach($=>{$.addEventListener("click",()=>{const T=p("#f-image-url");T&&(T.value=$.dataset.name),b.style.display="none"})})}catch(v){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${v.message}</div>`}}});function a(){e.querySelectorAll("[data-rate-idx]").forEach(b=>{var v,f,E,B,$;const h=Number(b.dataset.rateIdx);h>=0&&h<n.length&&(n[h].card_type=((v=b.querySelector(".rate-type"))==null?void 0:v.value)||"player",n[h].rarity=((f=b.querySelector(".rate-rarity"))==null?void 0:f.value)||null,n[h].note_min=Number((E=b.querySelector(".rate-note-min"))==null?void 0:E.value)||null,n[h].note_max=Number((B=b.querySelector(".rate-note-max"))==null?void 0:B.value)||null,n[h].percentage=Number(($=b.querySelector(".rate-pct"))==null?void 0:$.value)||0)})}(I=p("#btn-add-rate"))==null||I.addEventListener("click",()=>{a(),n.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:n.length}),s(!0)}),e.querySelectorAll(".btn-del-rate").forEach(b=>{b.addEventListener("click",()=>{a(),n.splice(Number(b.dataset.idx),1),s(!0)})}),(k=p("#btn-save"))==null||k.addEventListener("click",async()=>{var B,$,T,M,R,D,H,U,G;const b=(i||[]).find(L=>L.id===t);if(!b)return;const h=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var C,V,le,de,se;const O=Number(L.dataset.rateIdx);h.push({booster_id:t,card_type:((C=L.querySelector(".rate-type"))==null?void 0:C.value)||"player",rarity:((V=L.querySelector(".rate-rarity"))==null?void 0:V.value)||null,note_min:Number((le=L.querySelector(".rate-note-min"))==null?void 0:le.value)||null,note_max:Number((de=L.querySelector(".rate-note-max"))==null?void 0:de.value)||null,percentage:Number((se=L.querySelector(".rate-pct"))==null?void 0:se.value)||0,sort_order:O});const S=h[h.length-1];S.rarity||(S.rarity=null),S.note_min||(S.note_min=null),S.note_max||(S.note_max=null)});const v=h.reduce((L,O)=>L+O.percentage,0);if(h.length&&Math.abs(v-100)>.5){alert(`La somme doit faire 100% (actuellement ${v.toFixed(1)}%)`);return}const f={name:(($=(B=p("#f-name"))==null?void 0:B.value)==null?void 0:$.trim())||b.name,image_url:((M=(T=p("#f-image-url"))==null?void 0:T.value)==null?void 0:M.trim())||null,price_type:(R=p("#f-price-type"))==null?void 0:R.value,price_credits:Number((D=p("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((H=p("#f-card-count"))==null?void 0:H.value)||5,is_active:((U=p("#f-active"))==null?void 0:U.checked)??b.is_active,sort_order:Number((G=p("#f-sort"))==null?void 0:G.value)||0},{error:E}=await y.from("booster_configs").update(f).eq("id",t);if(E){alert(E.message);return}if(Object.assign(b,f),await y.from("booster_drop_rates").delete().eq("booster_id",t),h.length){const{error:L}=await y.from("booster_drop_rates").insert(h);if(L){alert(L.message);return}}n=h,c=t,alert("✅ Booster enregistré !"),s(!0)})}s()}const Se=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function ut(e){await oe(e)}async function oe(e){const{data:i,error:t}=await y.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(i||[]).map(n=>mt(n)).join("")}
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
              ${Se.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>ye(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>gt(e)),e.querySelectorAll("[data-edit]").forEach(n=>{const c=(i||[]).find(r=>r.id===n.dataset.edit);c&&n.addEventListener("click",()=>ye(c))}),e.querySelectorAll("[data-delete]").forEach(n=>{n.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await y.from("sell_price_configs").delete().eq("id",n.dataset.delete),await oe(e))})})}function mt(e){const i=Se.find(t=>t.value===e.rarity);return`
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
    </tr>`}function ye(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function gt(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,n=parseInt(document.getElementById("form-price").value)||0,c=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(c>r){alert("Note min doit être ≤ note max");return}const o={rarity:t,price:n,note_min:c,note_max:r,updated_at:new Date().toISOString()};let l;if(i?{error:l}=await y.from("sell_price_configs").update(o).eq("id",i):{error:l}=await y.from("sell_price_configs").insert(o),l){alert("Erreur : "+l.message);return}document.getElementById("config-form").style.display="none",await oe(e)}async function bt(e){await ae(e)}async function ae(e){const{data:i}=await y.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(i||[]).map(t=>ft(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>he(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>xt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const n=(i||[]).find(c=>c.id===t.dataset.edit);n&&t.addEventListener("click",()=>he(n))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await y.from("patch_notes").delete().eq("id",t.dataset.delete),await ae(e))})})}function ft(e){const i=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function he(e){const i=document.getElementById("article-form");i.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),n=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=n,i.scrollIntoView({behavior:"smooth"})}async function xt(e){const i=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),n=document.getElementById("form-art-desc").value.trim(),c=document.getElementById("form-art-img").value.trim()||null,r=document.getElementById("form-art-pub").checked,o=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!n){alert("La description est obligatoire.");return}const l=o?new Date(o).toISOString():new Date().toISOString(),d={title:t,description:n,image_url:c,is_published:r,published_at:l};let s;if(i?{error:s}=await y.from("patch_notes").update(d).eq("id",i):{error:s}=await y.from("patch_notes").insert(d),s){alert("Erreur : "+s.message);return}document.getElementById("article-form").style.display="none",await ae(e)}async function vt(e){await F(e)}async function F(e){var m,p,a,x,g,w,_,u,I,k,b,h;const{data:i}=await y.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(i||[]).map(v=>yt(v)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([v,f,E])=>`<button type="button" data-cmd="${f}" title="${E}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${v}</button>`).join("")}
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
    </div>`,(m=document.getElementById("ts-add"))==null||m.addEventListener("click",()=>Ee(null,(i==null?void 0:i.length)||0)),(p=document.getElementById("ts-reset"))==null||p.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:v}=await y.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(v?"Erreur : "+v.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(a=document.getElementById("ts-cancel"))==null||a.addEventListener("click",Ce),(x=document.getElementById("ts-save"))==null||x.addEventListener("click",()=>Et(e)),(g=document.getElementById("ts-preview-btn"))==null||g.addEventListener("click",ht);const t=document.getElementById("ts-editor"),n=()=>{const v=document.getElementById("ts-content");v&&t&&(v.value=t.innerHTML)};t==null||t.addEventListener("input",n),t==null||t.addEventListener("blur",n);const c=()=>{document.activeElement!==t&&(t==null||t.focus())};(w=document.getElementById("ts-toolbar"))==null||w.querySelectorAll("[data-cmd]").forEach(v=>{v.addEventListener("mousedown",f=>{f.preventDefault(),c();const E=v.dataset.cmd;E.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,E.split(":")[1]):document.execCommand(E,!1,null),n()})}),(_=document.getElementById("ts-insert-color"))==null||_.addEventListener("mousedown",v=>{v.preventDefault(),c();const f=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");f&&(document.execCommand("foreColor",!1,f),n())}),(u=document.getElementById("ts-clear-format"))==null||u.addEventListener("mousedown",v=>{v.preventDefault(),c(),document.execCommand("removeFormat",!1,null),n()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const r=document.getElementById("ts-image"),o=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el"),d=document.getElementById("ts-img-picker-grid"),s=()=>{var f;const v=(f=r==null?void 0:r.value)==null?void 0:f.trim();if(v){const E=typeof import.meta<"u"?"/manager-wars/":"/";l.src=`${E}icons/${v}`,o.style.display="block"}else o.style.display="none"};r==null||r.addEventListener("input",s),(I=document.getElementById("ts-img-clear"))==null||I.addEventListener("click",()=>{r&&(r.value=""),o.style.display="none",d.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(d.style.display!=="none"){d.style.display="none";return}d.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',d.style.display="block";try{const f=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),E=Array.isArray(f)?f.filter($=>$.name.startsWith("tuto_")):[];if(!E.length){d.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const B=typeof import.meta<"u"?"/manager-wars/":"/";d.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+E.map($=>`
          <div data-pick="${$.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${B}icons/${$.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",d.querySelectorAll("[data-pick]").forEach($=>{$.addEventListener("click",()=>{r&&(r.value=$.dataset.pick),s(),d.style.display="none"})})}catch(v){d.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+v.message+"</div>"}}),(b=document.getElementById("ts-color"))==null||b.addEventListener("input",v=>{const f=document.getElementById("ts-color-hex");f&&(f.value=v.target.value)}),(h=document.getElementById("ts-color-hex"))==null||h.addEventListener("input",v=>{const f=v.target.value;if(/^#[0-9a-fA-F]{6}$/.test(f)){const E=document.getElementById("ts-color");E&&(E.value=f)}}),e.querySelectorAll("[data-edit]").forEach(v=>{const f=(i||[]).find(E=>E.id===v.dataset.edit);f&&v.addEventListener("click",()=>Ee(f))}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await y.from("tutorial_steps").delete().eq("id",v.dataset.delete),F(e))})}),e.querySelectorAll("[data-toggle]").forEach(v=>{v.addEventListener("click",async()=>{const f=(i||[]).find(E=>E.id===v.dataset.toggle);f&&(await y.from("tutorial_steps").update({is_active:!f.is_active}).eq("id",f.id),F(e))})}),e.querySelectorAll("[data-up]").forEach(v=>{v.addEventListener("click",async()=>{const f=i||[],E=f.findIndex(B=>B.id===v.dataset.up);E<=0||(await Promise.all([y.from("tutorial_steps").update({step_order:f[E-1].step_order}).eq("id",f[E].id),y.from("tutorial_steps").update({step_order:f[E].step_order}).eq("id",f[E-1].id)]),F(e))})}),e.querySelectorAll("[data-down]").forEach(v=>{v.addEventListener("click",async()=>{const f=i||[],E=f.findIndex(B=>B.id===v.dataset.down);E<0||E>=f.length-1||(await Promise.all([y.from("tutorial_steps").update({step_order:f[E+1].step_order}).eq("id",f[E].id),y.from("tutorial_steps").update({step_order:f[E].step_order}).eq("id",f[E+1].id)]),F(e))})})}function yt(e){return`
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
  </div>`}function Ee(e,i=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??i,document.getElementById("ts-active").checked=e?e.is_active:!0;const n=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=n,document.getElementById("ts-color-hex").value=n;const c=(e==null?void 0:e.image_url)||"",r=document.getElementById("ts-image");r&&(r.value=c);const o=document.getElementById("ts-img-preview"),l=document.getElementById("ts-img-preview-el");if(c&&o&&l){const d=typeof import.meta<"u"?"/manager-wars/":"/";l.src=`${d}icons/${c}`,o.style.display="block"}else o&&(o.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ce(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function ht(){var s,m;const e=document.getElementById("ts-emoji").value||"⚽",i=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),n=t?t.innerHTML:document.getElementById("ts-content").value||"",c=document.getElementById("ts-color-hex").value||"#1A6B3C",r=(m=(s=document.getElementById("ts-image"))==null?void 0:s.value)==null?void 0:m.trim(),l=r?`<div style="padding:0 20px 12px;text-align:center"><img src="${typeof import.meta<"u"?"/manager-wars/":"/"}icons/${r}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",d=document.getElementById("ts-preview-area");d.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${c}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${i}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${l}
        <div style="padding:${r?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${n}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${c};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,d.querySelectorAll("ul,ol").forEach(p=>{p.style.paddingLeft="20px",p.style.margin="6px 0"}),d.querySelectorAll("li").forEach(p=>{p.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(p=>{p.style.marginBottom="8px"})}async function Et(e){var p,a;const i=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",n=document.getElementById("ts-title").value.trim(),c=document.getElementById("ts-editor"),r=(c?c.innerHTML:document.getElementById("ts-content").value).trim(),o=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",l=parseInt(document.getElementById("ts-order").value)||0,d=document.getElementById("ts-active").checked;if(!n||!r){alert("Titre et contenu sont obligatoires.");return}const s={emoji:t,title:n,content:r,color:o,step_order:l,is_active:d,image_url:((a=(p=document.getElementById("ts-image"))==null?void 0:p.value)==null?void 0:a.trim())||null};let m;if(i?{error:m}=await y.from("tutorial_steps").update(s).eq("id",i):{error:m}=await y.from("tutorial_steps").insert(s),m){alert("Erreur : "+m.message);return}Ce(),F(e)}const wt="/manager-wars/",je="#E87722";async function _t(e){await re(e)}async function re(e){var n,c,r,o;const[{data:i},{data:t}]=await Promise.all([y.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),y.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(i||[]).map(l=>$t(l)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(t||[]).map(l=>`<option value="${l.id}">${l.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">CODE PAYS (si pas de club)</label>
              <input id="st-country" placeholder="Ex: FR, ES, BR…" maxlength="3" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:14px;text-transform:uppercase">
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
    </div>`,(n=document.getElementById("st-add-btn"))==null||n.addEventListener("click",()=>we(null)),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(r=document.getElementById("st-save"))==null||r.addEventListener("click",()=>It(e)),(o=document.getElementById("st-preview-btn"))==null||o.addEventListener("click",()=>ee()),["st-name","st-club","st-country","st-image"].forEach(l=>{var d,s;(d=document.getElementById(l))==null||d.addEventListener("input",ee),(s=document.getElementById(l))==null||s.addEventListener("change",ee)}),e.querySelectorAll("[data-edit]").forEach(l=>{const d=(i||[]).find(s=>s.id===l.dataset.edit);d&&l.addEventListener("click",()=>we(d))}),e.querySelectorAll("[data-delete]").forEach(l=>{l.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await y.from("stadium_definitions").delete().eq("id",l.dataset.delete),re(e))})})}function $t(e){var t,n;const i=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${je};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${i}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((n=e.club)==null?void 0:n.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function we(e,i){var t,n;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"",document.getElementById("st-country").value=(e==null?void 0:e.country_code)||"",document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",ee((t=e==null?void 0:e.club)==null?void 0:t.logo_url,(n=e==null?void 0:e.club)==null?void 0:n.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function ee(){var l,d,s,m,p,a;const e=((l=document.getElementById("st-name"))==null?void 0:l.value)||"NOM DU STADE",i=(s=(d=document.getElementById("st-image"))==null?void 0:d.value)==null?void 0:s.trim(),t=(p=(m=document.getElementById("st-country"))==null?void 0:m.value)==null?void 0:p.trim(),n=document.getElementById("st-club"),c=((a=n==null?void 0:n.options[n.selectedIndex])==null?void 0:a.text)||"",r=i?`<img src="${wt}icons/${i}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:'<div style="font-size:36px;text-align:center">🏟️</div>',o=c!=="-- Aucun club (bonus pays) --"?c:t||"—";document.getElementById("st-preview-card").innerHTML=kt(e,r,o,!0)}function kt(e,i,t,n=!1){return`<div style="width:140px;background:linear-gradient(160deg,${je},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${i}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function It(e){const i=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),n=document.getElementById("st-club").value||null,c=document.getElementById("st-country").value.trim().toUpperCase()||null,r=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const o={name:t,club_id:n,country_code:c,image_url:r},{error:l}=i?await y.from("stadium_definitions").update(o).eq("id",i):await y.from("stadium_definitions").insert(o);if(l){alert("Erreur : "+l.message);return}document.getElementById("st-form").style.display="none",re(e)}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function Bt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:i}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const n=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],c=["GK","DEF","MIL","ATT"],r=()=>window.innerWidth<700,o=a=>e.querySelector(a);function l(a,x=130){if(!a)return"";const g=N.find(k=>k.value===a.gc_type)||N[0],w=P.find(k=>k.value===a.color)||P[0],_=Math.round(x*.55),u=Math.round(x*.15),I=Math.round(x*.3);return`<div style="width:${x}px;height:${Math.round(x*1.4)}px;border-radius:10px;border:3px solid ${w.hex};background:${g.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${w.hex}55;flex-shrink:0">
      <div style="height:${u}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(x/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${a.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(x*.3)}px">${g.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${I}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(x/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(a.effect||"").slice(0,60)}${(a.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function d(){return`
    <div id="gc-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(i||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(i||[]).map(a=>{const x=N.find(w=>w.value===a.gc_type)||N[0],g=P.find(w=>w.value===a.color)||P[0];return`
        <div class="gc-row" data-id="${a.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${a.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${g.hex};background:${x.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${a.image_url?`<img src="/manager-wars/icons/${a.image_url}" style="width:28px;height:28px;object-fit:contain">`:x.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.name}</div>
            <div style="font-size:11px;color:#888">${x.label} · ${a.is_active?"✅ Actif":"⛔ Inactif"}</div>
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
      ${(i||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const a=t?(i||[]).find(g=>g.id===t):null;if(!a)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const x=N.find(g=>g.value===a.gc_type)||N[0];return P.find(g=>g.value===a.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${x.bg};border-radius:12px">
        ${l(a,r()?120:150)}
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
              ${N.map(g=>`<option value="${g.value}" ${a.gc_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(g=>`<option value="${g.value}" ${a.color===g.value?"selected":""}>${g.label}</option>`).join("")}
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
              ${n.map(g=>`<option value="${g.value}" ${(a.effect_type||"BOOST_STAT")===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const g=a.effect_params||{},w=n.find(_=>_.value===(a.effect_type||"BOOST_STAT"))||n[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${w.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${g.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${g.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(g.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${g.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${w.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${c.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
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
    </div>`}function m(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||!t?d():""}
      ${!r()||t?s():""}
    </div>`,p()}function p(){var a,x,g,w,_;e.querySelectorAll(".gc-row").forEach(u=>{u.addEventListener("click",I=>{I.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=u.dataset.id,m())})}),(a=o("#btn-gc-back"))==null||a.addEventListener("click",()=>{t=null,m()}),(x=o("#btn-cancel-gc"))==null||x.addEventListener("click",()=>{t=null,m()}),(g=o("#btn-new-gc"))==null||g.addEventListener("click",async()=>{const u=prompt("Nom de la carte Game Changer :");if(!(u!=null&&u.trim()))return;const{data:I,error:k}=await y.from("gc_definitions").insert({name:u.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}i.push(I),t=I.id,m()}),e.querySelectorAll(".btn-toggle-gc").forEach(u=>{u.addEventListener("click",async I=>{I.stopPropagation();const k=u.dataset.active!=="true";await y.from("gc_definitions").update({is_active:k}).eq("id",u.dataset.id);const b=i.find(h=>h.id===u.dataset.id);b&&(b.is_active=k),m()})}),e.querySelectorAll(".btn-delete-gc").forEach(u=>{u.addEventListener("click",async I=>{if(I.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",u.dataset.id);const k=i.findIndex(b=>b.id===u.dataset.id);k>-1&&i.splice(k,1),t===u.dataset.id&&(t=null),m()})}),(w=o("#btn-pick-gc-icon"))==null||w.addEventListener("click",async()=>{var I;const u=o("#gc-icon-picker");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',u.style.display="block";try{const b=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),h=Array.isArray(b)?b.filter(f=>f.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(f.name)):[];if(!h.length){u.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((I=o("#gc-image-url"))==null?void 0:I.value)||"";u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${h.map(f=>`
          <div class="gc-icon-item" data-name="${f.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${f.name===v?"#7a28b8":"#ddd"};background:${f.name===v?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${f.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,u.querySelectorAll(".gc-icon-item").forEach(f=>{f.addEventListener("click",()=>{const E=o("#gc-image-url");E&&(E.value=f.dataset.name),u.style.display="none"})})}catch(k){u.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(_=o("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var f,E,B,$,T,M,R,D,H,U,G,L,O,S;const u=i.find(C=>C.id===t);if(!u)return;const I=n.find(C=>{var V;return C.value===(((V=o("#gc-effect-type"))==null?void 0:V.value)||"BOOST_STAT")})||n[0],k=I.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(C=>C.value):null,b={...I.hasValue?{value:Number((f=o("#gc-p-value"))==null?void 0:f.value)||2}:{},...I.hasCount?{count:Number((E=o("#gc-p-count"))==null?void 0:E.value)||1}:{},...I.hasTarget?{target:((B=o("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...I.hasRoles?{roles:k!=null&&k.length?k:null}:{}},h={name:((T=($=o("#gc-name"))==null?void 0:$.value)==null?void 0:T.trim())||u.name,effect:((R=(M=o("#gc-effect"))==null?void 0:M.value)==null?void 0:R.trim())||null,image_url:((H=(D=o("#gc-image-url"))==null?void 0:D.value)==null?void 0:H.trim())||null,gc_type:((U=o("#gc-type"))==null?void 0:U.value)||"game_changer",color:((G=o("#gc-color"))==null?void 0:G.value)||"purple",sort_order:Number((L=o("#gc-sort"))==null?void 0:L.value)||0,is_active:((O=o("#gc-active"))==null?void 0:O.checked)??u.is_active,effect_type:((S=o("#gc-effect-type"))==null?void 0:S.value)||"BOOST_STAT",effect_params:b},{error:v}=await y.from("gc_definitions").update(h).eq("id",t);if(v){alert(v.message);return}Object.assign(u,h),alert("✅ Carte enregistrée !"),m()})}m()}Ve(Be);function Lt(e,i="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${i}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function zt(e,i,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=i,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ne(){document.getElementById("modal-overlay").classList.add("hidden")}const _e={dashboard:{title:"Dashboard",fn:Ke},players:{title:"Joueurs & Cartes",fn:Je},clubs:{title:"Clubs",fn:We},"card-builder":{title:"Card Builder",fn:et},users:{title:"Managers",fn:Ae},market:{title:"Marché des transferts",fn:Te},"import-export":{title:"Import / Export CSV",fn:at},formations:{title:"Formations & Liens",fn:lt},"boosters-config":{title:"Boosters",fn:pt},"sell-price":{title:"Prix vente directe",fn:ut},journal:{title:"Journal",fn:bt},tutorial:{title:"Tutoriel",fn:vt},stadiums:{title:"Stades",fn:_t},"gc-cards":{title:"Game Changers",fn:Bt}};async function te(e){document.querySelectorAll(".admin-sidebar nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===e)});const i=document.getElementById("mobile-page-select");i&&(i.value=e);const t=_e[e]||_e.dashboard;document.getElementById("page-title").textContent=t.title;const n=document.getElementById("page-content");n.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(n,{toast:Lt,openModal:zt,closeModal:ne,navigate:te})}catch(c){n.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${c.message}</div>`,console.error(c)}}async function At(){var i;const{data:{session:e}}=await y.auth.getSession();e&&await $e(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),n=document.getElementById("auth-password").value,c=document.getElementById("auth-error");if(c.textContent="",!t||!n){c.textContent="Remplissez tous les champs.";return}const{data:r,error:o}=await y.auth.signInWithPassword({email:t,password:n});if(o){c.textContent=o.message;return}await $e(r.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ne),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ne()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),te(t.dataset.page)})}),(i=document.getElementById("mobile-page-select"))==null||i.addEventListener("change",t=>{te(t.target.value)})}async function $e(e){const{data:i,error:t}=await y.from("users").select("*").eq("id",e.id).single(),n=document.getElementById("auth-error");if(t||!i){n.textContent="Profil introuvable.";return}if(!i.is_admin){n.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${i.pseudo}`,te("dashboard")}At();
