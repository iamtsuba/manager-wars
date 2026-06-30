import{s as x,e as K,g as he,K as _e,D as A,S as Be,a as z,H as ze,R as Ae,b as $e,r as Se,c as Te,E as Ce,d as je,N as Re,M as Me,B as Ne,F as ee,f as le,h as Pe,i as Oe}from"./formation-links-DJC25wD7.js";async function qe(e){const[{count:n},{count:t},{count:o},{count:p},{count:r}]=await Promise.all([x.from("players").select("*",{count:"exact",head:!0}),x.from("clubs").select("*",{count:"exact",head:!0}),x.from("users").select("*",{count:"exact",head:!0}),x.from("cards").select("*",{count:"exact",head:!0}),x.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${V("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${V("🏟️","Clubs",t??"–","#D4A017")}
      ${V("👥","Managers",o??"–","#7a28b8")}
      ${V("📦","Cartes possédées",p??"–","#2a8f52")}
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
  `,window.adminNav=a=>{var d;(d=document.querySelector(`[data-page="${a}"]`))==null||d.click()}}function V(e,n,t,o){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${o}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const de={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},De={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Fe(e,n){await J(e,n)}async function J(e,n){const{toast:t,openModal:o,closeModal:p}=n,[{data:r,error:a},{data:d}]=await Promise.all([x.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),x.from("clubs").select("id,encoded_name").order("encoded_name")]);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const s={};(d||[]).forEach(c=>{s[c.id]=c.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(de).map(([c,i])=>`<option value="${c}">${i}</option>`).join("")}
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
  `,l(r);function l(c){document.getElementById("count-label").textContent=`${c.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=c.map(i=>{var f;return`
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
          <span style="background:${De[i.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${de[i.rarity]||i.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${i.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${i.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(i=>{i.addEventListener("click",()=>{const f=r.find(m=>m.id===i.dataset.edit);se(f,d||[],{toast:t,openModal:o,closeModal:p,reload:()=>J(e,n)})})}),document.querySelectorAll("[data-del]").forEach(i=>{i.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:f}=await x.from("players").delete().eq("id",i.dataset.del);f?t(f.message,"error"):(t("Joueur supprimé","success"),J(e,n))})})}function b(){const c=document.getElementById("search-players").value.toLowerCase(),i=document.getElementById("filter-rarity").value,f=document.getElementById("filter-job").value;l(r.filter(m=>(!c||`${m.firstname} ${m.surname_encoded} ${m.surname_real}`.toLowerCase().includes(c))&&(!i||m.rarity===i)&&(!f||m.job===f)))}document.getElementById("search-players").addEventListener("input",b),document.getElementById("filter-rarity").addEventListener("change",b),document.getElementById("filter-job").addEventListener("change",b),document.getElementById("add-player-btn").addEventListener("click",()=>{se(null,d||[],{toast:t,openModal:o,closeModal:p,reload:()=>J(e,n)})})}function se(e,n,{toast:t,openModal:o,closeModal:p,reload:r}){const a=!!e,d='<option value="">— Club —</option>'+n.map(s=>`<option value="${s.id}" ${(e==null?void 0:e.club_id)===s.id?"selected":""}>${s.encoded_name}</option>`).join("");o(a?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
      <div><label>Club</label><select id="pm-club">${d}</select></div>
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
     <button class="btn btn-primary" id="pm-save">${a?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",p),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=K(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const s={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!s.firstname||!s.surname_real||!s.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:l}=a?await x.from("players").update({...s,updated_at:new Date().toISOString()}).eq("id",e.id):await x.from("players").insert(s);if(l){t(l.message,"error");return}t(a?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),r()})}let W=[];async function He(e,{toast:n,openModal:t,closeModal:o}){await X(e,{toast:n,openModal:t,closeModal:o})}async function X(e,n){const{data:t,error:o}=await x.from("clubs").select("*").order("encoded_name");if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}W=t||[],Ue(e,n)}function Ue(e,{toast:n,openModal:t,closeModal:o}){e.innerHTML=`
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
  `,p(W),document.getElementById("search-clubs").addEventListener("input",r=>{const a=r.target.value.toLowerCase();p(W.filter(d=>d.encoded_name.toLowerCase().includes(a)||d.real_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{ce(null,{toast:n,openModal:t,closeModal:o,reload:()=>X(e,{toast:n,openModal:t,closeModal:o})})});function p(r){document.getElementById("clubs-tbody").innerHTML=r.map(a=>{var l;const d=we(a),s=he(d).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${a.logo_url?`<img src="${a.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${a.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((l=_e[a.kit_style||"uni"])==null?void 0:l.label)||"Uni"}">${s}</td>
        <td><b>${a.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${a.real_name}</td>
        <td><img src="https://flagsapi.com/${a.country_code}/flat/32.png" alt="${a.country_code}" style="height:18px;vertical-align:middle"> ${a.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${a.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${a.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const d=W.find(s=>s.id===a.dataset.edit);ce(d,{toast:n,openModal:t,closeModal:o,reload:()=>X(e,{toast:n,openModal:t,closeModal:o})})})}),document.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:d}=await x.from("clubs").delete().eq("id",a.dataset.del);d?n(d.message,"error"):(n("Club supprimé","success"),X(e,{toast:n,openModal:t,closeModal:o}))})})}}function we(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}function ce(e,{toast:n,openModal:t,closeModal:o,reload:p}){var c;const r=!!e,a=e?we(e):{...A},d=Object.entries(_e).map(([i,f])=>`<option value="${i}" ${a.style===i?"selected":""}>${f.label}</option>`).join("");t(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style">${d}</select>
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
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`);function s(i,f){const m=document.getElementById(i),y=document.getElementById(f);!m||!y||(m.addEventListener("input",()=>{y.value=m.value,b()}),y.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(y.value)&&(m.value=y.value,b())}))}s("m-kit-color1","m-kit-color1-txt"),s("m-kit-color2","m-kit-color2-txt"),s("m-kit-shorts","m-kit-shorts-txt"),s("m-kit-socks","m-kit-socks-txt"),(c=document.getElementById("m-kit-style"))==null||c.addEventListener("change",b);function l(){var i,f,m,y,_;return{style:((i=document.getElementById("m-kit-style"))==null?void 0:i.value)||"uni",color1:((f=document.getElementById("m-kit-color1"))==null?void 0:f.value)||"#1A6B3C",color2:((m=document.getElementById("m-kit-color2"))==null?void 0:m.value)||"#ffffff",shorts:((y=document.getElementById("m-kit-shorts"))==null?void 0:y.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function b(){const i=document.getElementById("kit-preview-wrap");i&&(i.innerHTML=he(l()))}b(),document.getElementById("m-cancel").addEventListener("click",o),document.getElementById("auto-encode").addEventListener("click",()=>{const i=document.getElementById("m-real").value,f=i.split(" ")[0]||i;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const i=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const f=i.split(" ")[0]||i;document.getElementById("m-encoded").value=f.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const i=l(),f={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:i.style,kit_color1:i.color1,kit_color2:i.color2,kit_shorts:i.shorts,kit_socks:i.socks};if(!f.real_name||!f.encoded_name||!f.country_code){n("Remplissez tous les champs obligatoires","error");return}const{error:m}=r?await x.from("clubs").update(f).eq("id",e.id):await x.from("clubs").insert(f);if(m){n(m.message,"error");return}n(r?"Club modifié ✅":"Club créé ✅","success"),o(),p()})}const Ge=["normal","pepite","papyte","legende"],pe=["GK","DEF","MIL","ATT"],Ve=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let O={...z},Q=[];async function Ke(e,{toast:n}){const{data:t}=await x.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");Q=t||[],O={...z},e.innerHTML=Xe(Q),Je(e,Q,n),j()}function ue(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=K(e))}function Ye(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=Q.find(o=>String(o.id)===String(e));return n?{style:n.kit_style||A.style,color1:n.kit_color1||A.color1,color2:n.kit_color2||A.color2,shorts:n.kit_shorts||A.shorts,socks:n.kit_socks||A.socks}:{...A}}function j(){var i,f,m,y;const e=_=>{var u;return((u=document.getElementById(_))==null?void 0:u.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||K(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((f=(i=document.getElementById("cb-club"))==null?void 0:i.selectedOptions[0])==null?void 0:f.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=Ye(),o=document.getElementById("cb-club"),p=((y=(m=o==null?void 0:o.selectedOptions[0])==null?void 0:m.dataset)==null?void 0:y.logo)||null,r=$e(O,t,120),a=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,d=Se(n,{portraitUrl:a,clubLogoUrl:p,showNotes:!0}),s=document.getElementById("card-preview");s&&(s.innerHTML=d);const l=document.getElementById("avatar-preview-wrap");l&&(l.innerHTML=r);const b=e("cb-surname-real"),c=document.getElementById("encode-summary");c&&b&&(c.textContent=`${e("cb-firstname")} ${b} → ${e("cb-firstname")} ${n.surname_encoded}`)}function Ee(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};O={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Je(e,n,t){var p,r,a,d,s;e.querySelectorAll("input,select").forEach(l=>{l.addEventListener("input",j),l.addEventListener("change",j)});const o=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];o.forEach(l=>{var b;(b=document.getElementById(l))==null||b.addEventListener("change",()=>{Ee(),j()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{ue(),j()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{ue(),j()}),(a=document.getElementById("cb-club"))==null||a.addEventListener("change",j),(d=document.getElementById("btn-save-player"))==null||d.addEventListener("click",()=>We(t)),(s=document.getElementById("btn-reset"))==null||s.addEventListener("click",()=>{e.querySelectorAll("input").forEach(l=>l.value=""),e.querySelectorAll("select").forEach(l=>l.selectedIndex=0),O={...z},o.forEach(l=>{const b=l.replace("av-",""),c=document.getElementById(l);c&&(c.value=z[b]||"")}),j()})}async function We(e){const n=a=>{var d;return((d=document.getElementById(a))==null?void 0:d.value)||""},t=n("cb-surname-real").trim(),o=n("cb-surname-enc").trim()||K(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ee();const p={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:o,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:O,skin:O.skin||"blanc",hair:O.hairColor||"marron",hair_length:"court"},{error:r}=await x.from("players").insert(p);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_encoded}" enregistré !`,"success")}function Xe(e){const n=Ve.map(([l,b])=>`<option value="${l}">${b} (${l})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(l=>`<option value="${l.id}" data-logo="${l.logo_url||""}">${l.encoded_name}</option>`).join(""),o=pe.map(l=>`<option value="${l}">${l}</option>`).join(""),p='<option value="">Aucun</option>'+pe.map(l=>`<option value="${l}">${l}</option>`).join(""),r=Ge.map(l=>`<option value="${l}">${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),a=(l,b,c)=>Object.entries(b).map(([i,f])=>`<option value="${i}" ${i===(c||"")?"selected":""}>${f.label}</option>`).join(""),d=Object.keys(Be).map(l=>`<option value="${l}" ${l===z.skin?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),s=Object.keys(ze).map(l=>`<option value="${l}" ${l===z.hairColor?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join("");return`
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
          <div><label>Pays *</label><select id="cb-country">${n}</select></div>
          <div><label>Club</label><select id="cb-club">${t}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${o}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${r}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(l=>`
            <div style="background:${Ae[l]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${l.toUpperCase()}
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
              <select id="av-skin">${d}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${a("av-hair",Te,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${s}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${a("av-eyebrows",Ce,z.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${a("av-eyes",je,z.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${a("av-nose",Re,z.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${a("av-mouth",Me,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${a("av-beard",Ne,z.beard)}</select>
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
  `}async function ke(e,{toast:n}){const{data:t,error:o}=await x.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}e.innerHTML=`
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
  `;const p=t||[];r(p),document.getElementById("search-users").addEventListener("input",a=>{const d=a.target.value.toLowerCase();r(p.filter(s=>{var l;return s.pseudo.toLowerCase().includes(d)||((l=s.club_name)==null?void 0:l.toLowerCase().includes(d))}))});function r(a){document.getElementById("users-tbody").innerHTML=a.map(d=>`
      <tr>
        <td><b>${d.pseudo}</b></td>
        <td style="font-size:12px">${d.club_name||"—"}</td>
        <td style="font-size:12px">${(d.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${d.level}</b></td>
        <td style="font-size:12px">${d.wins}/${d.draws}/${d.losses}</td>
        <td style="font-size:12px">🥇${d.trophies_top1} 🥈${d.trophies_top2} 🥉${d.trophies_top3}</td>
        <td>
          ${d.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${d.id}" data-is-admin="${d.is_admin}">
            ${d.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${s?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:b}=await x.from("users").update({is_admin:s}).eq("id",d.dataset.toggleAdmin);b?n(b.message,"error"):(n("Rôle mis à jour ✅","success"),ke(e,{toast:n}))})})}}async function Ie(e,{toast:n}){const{data:t,error:o}=await x.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const p=t||[],r=p.filter(d=>d.status==="active").length,a=p.filter(d=>d.status==="sold").length;e.innerHTML=`
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
            ${p.map(d=>{var c,i,f,m;const s=(c=d.card)==null?void 0:c.player,l=s?`${s.firstname} ${s.surname_encoded}`:((i=d.card)==null?void 0:i.card_type)||"—",b={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${l}</b>${s?`<div style="font-size:10px;color:#999">${s.rarity} · ${s.job}</div>`:""}</td>
                <td style="font-size:12px">${((f=d.seller)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:12px">${((m=d.buyer)==null?void 0:m.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(d.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${b[d.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${d.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(d.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${d.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${d.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(d=>{d.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:s}=await x.from("market_listings").update({status:"cancelled"}).eq("id",d.dataset.cancel);s?n(s.message,"error"):(n("Annonce annulée","success"),Ie(e,{toast:n}))})})}async function Qe(e,{toast:n}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:o}=await x.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;t.forEach(r=>{p+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(me).join(",")+`
`}),Y("clubs_export.csv",p),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:o}=await x.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(o){n(o.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(r=>{var a;p+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((a=r.clubs)==null?void 0:a.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(me).join(",")+`
`}),Y("players_export.csv",p),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),a=ge(r);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let d=0,s=0;const l=[];for(const b of a){if(!b.real_name||!b.encoded_name||!b.country_code){s++,l.push(`Ligne ignorée (champs manquants): ${b.real_name||"?"}`);continue}const c={real_name:b.real_name,encoded_name:b.encoded_name.toUpperCase(),country_code:b.country_code.toUpperCase().slice(0,2),logo_url:b.logo_url||null},{error:i}=await x.from("clubs").upsert(c,{onConflict:"encoded_name"});i?(s++,l.push(`${b.encoded_name}: ${i.message}`)):d++}p.innerHTML=`<div style="color:var(--green)">✅ ${d} clubs importés</div>
        ${s>0?`<div style="color:#c0392b">❌ ${s} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,n(`${d} clubs importés`,"success")}catch(r){p.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const o=t.target.files[0];if(!o)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await o.text(),a=ge(r);if(a.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:d}=await x.from("clubs").select("id,encoded_name"),s={};(d||[]).forEach(u=>{s[u.encoded_name.toUpperCase()]=u.id});let l=0,b=0;const c=[],i=["GK","DEF","MIL","ATT"],f=["normal","pepite","papyte","legende"],m=["blanc","metisse","typ","noir"],y=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const u of a){if(!u.firstname||!u.surname_real||!u.country_code||!u.job){b++,c.push(`Ligne ignorée (champs requis manquants): ${u.firstname||"?"}`);continue}if(!i.includes(u.job)){b++,c.push(`${u.firstname}: job invalide "${u.job}"`);continue}const w=u.club_encoded_name&&s[u.club_encoded_name.toUpperCase()]||null,$={firstname:u.firstname,surname_real:u.surname_real,surname_encoded:u.surname_encoded||K(u.surname_real),country_code:u.country_code.toUpperCase().slice(0,2),club_id:w,job:u.job,job2:i.includes(u.job2)?u.job2:null,note_g:parseInt(u.note_g)||0,note_d:parseInt(u.note_d)||0,note_m:parseInt(u.note_m)||0,note_a:parseInt(u.note_a)||0,rarity:f.includes(u.rarity)?u.rarity:"normal",note_min:u.note_min!==""&&u.note_min!=null?parseInt(u.note_min):null,note_max:u.note_max!==""&&u.note_max!=null?parseInt(u.note_max):null,skin:m.includes(u.skin)?u.skin:"blanc",hair:y.includes(u.hair)?u.hair:"noir",hair_length:_.includes(u.hair_length)?u.hair_length:"court",sell_price:parseInt(u.sell_price)||0},{error:g}=await x.from("players").insert($);g?(b++,c.push(`${u.firstname} ${u.surname_real}: ${g.message}`)):l++}p.innerHTML=`<div style="color:var(--green)">✅ ${l} joueurs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,n(`${l} joueurs importés`,"success")}catch(r){p.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}t.target.value=""})}function me(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function Y(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(t),p=document.createElement("a");p.href=o,p.download=e,p.click(),URL.revokeObjectURL(o)}function ge(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(a=>a.trim());if(n.length<2)return[];const t=n[0],o=t.split(";").length>t.split(",").length?";":",",p=be(t,o).map(a=>a.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let a=1;a<n.length;a++){if(!n[a].trim())continue;const d=be(n[a],o),s={};p.forEach((l,b)=>{s[l]=(d[b]||"").trim()}),!Object.values(s).every(l=>!l)&&r.push(s)}return r}function be(e,n=","){const t=[];let o="",p=!1;for(let r=0;r<e.length;r++){const a=e[r];p?a==='"'?e[r+1]==='"'?(o+='"',r++):p=!1:o+=a:a==='"'?p=!0:a===n?(t.push(o),o=""):o+=a}return t.push(o),t}const Ze={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function et(e,{toast:n}){const t=Object.keys(ee);let o=t[0];const{data:p}=await x.from("formation_links_overrides").select("formation, links"),r={};(p||[]).forEach(b=>{r[b.formation]=b.links});let a=new Set;function d(b,c){return[b,c].sort().join("-")}function s(b){const c=r[b]||ee[b]||[];a=new Set(c.map(([i,f])=>d(i,f)))}s(o),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(b=>`<option value="${b}" ${b===o?"selected":""}>${b}</option>`).join("")}
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
  `;function l(){const b=Pe[o]||{},c=le(o),i=320,f=400,m=22;function y(g){const v=b[g];return v?{x:v.x*i,y:v.y*f}:null}let _=`<svg width="${i}" height="${f}" viewBox="0 0 ${i} ${f}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;c.forEach(([g,v],E)=>{const h=y(g),I=y(v);if(!h||!I)return;const B=d(g,v),k=a.has(B),S=k?"#3b82f6":"#999",R=k?.95:.35,M=k?4:3;_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${B}" style="cursor:pointer"/>`,_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="${S}" stroke-width="${M}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${R}" pointer-events="none" data-line-key="${B}"/>`});for(const g of Object.keys(b)){const v=y(g);if(!v)continue;const E=g.replace(/\d+/,""),h=Ze[E]||"#555";_+=`<circle cx="${v.x}" cy="${v.y}" r="${m}" fill="${h}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${g}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const u=document.getElementById("links-list");u.innerHTML=c.map(([g,v])=>{const E=d(g,v),h=a.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${h?"#3b82f6":"#ddd"};
          background:${h?"#eaf2ff":"#fafafa"};
          color:${h?"#1d4ed8":"#888"}">
          <span>${g} ↔ ${v}</span>
          <span>${h?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${a.size}/${c.length} actifs)`);function $(g){a.has(g)?a.delete(g):a.add(g),l()}e.querySelectorAll(".link-hit").forEach(g=>{g.addEventListener("click",()=>$(g.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(g=>{g.addEventListener("click",()=>$(g.dataset.key))})}l(),document.getElementById("formation-select").addEventListener("change",b=>{o=b.target.value,s(o),l()}),document.getElementById("reset-btn").addEventListener("click",()=>{const b=ee[o]||[];a=new Set(b.map(([c,i])=>d(c,i))),l(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const c=le(o).filter(([f,m])=>a.has(d(f,m))),{error:i}=await x.from("formation_links_overrides").upsert({formation:o,links:c,updated_at:new Date().toISOString()});if(i){n(i.message,"error");return}r[o]=c,n(`Liens enregistrés pour ${o} (${c.length} actifs)`,"success")})}const tt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],nt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],it=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function ot(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await x.from("booster_configs").select("*").order("sort_order");let t=null,o=[],p=null;const r=()=>window.innerWidth<700;async function a(){if(!t){o=[];return}if(t!==p){const{data:c}=await x.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");o=c||[],p=t}}function d(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(c=>`
      <div class="booster-row" data-id="${c.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${c.id===t?"#f0f7f0":"#fff"}">
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
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const c=t?(n||[]).find(m=>m.id===t):null;if(!c)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const i=o.reduce((m,y)=>m+Number(y.percentage||0),0),f=Math.abs(i-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${it.map(m=>`<option value="${m.value}" ${c.price_type===m.value?"selected":""}>${m.label}</option>`).join("")}
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
              Total : ${i.toFixed(1)}% ${f?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${o.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':o.map((m,y)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${y}">
            <select class="rate-type" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${tt.map(_=>`<option value="${_.value}" ${m.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${y}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${nt.map(_=>`<option value="${_.value}" ${(m.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
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
    </div>`}async function l(c=!1){c||await a();const i=!t&&r(),f=t&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||i||!t?d():""}
      ${!r()||f?s():""}
    </div>`,b()}function b(){var f,m,y,_,u,w,$;const c=g=>e.querySelector(g);e.querySelectorAll(".booster-row").forEach(g=>{g.addEventListener("click",v=>{v.target.closest(".btn-delete")||(t=g.dataset.id,p=null,l())})}),(f=c("#btn-back"))==null||f.addEventListener("click",()=>{t=null,l()}),(m=c("#btn-new"))==null||m.addEventListener("click",async()=>{const g=prompt("Nom du nouveau booster :");if(!(g!=null&&g.trim()))return;const{data:v,error:E}=await x.from("booster_configs").insert({name:g.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}n.push(v),t=v.id,p=null,l()}),e.querySelectorAll(".btn-delete").forEach(g=>{g.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await x.from("booster_configs").delete().eq("id",g.dataset.id);const E=n.findIndex(h=>h.id===g.dataset.id);E>-1&&n.splice(E,1),t===g.dataset.id&&(t=null,p=null),l()})}),(y=c("#btn-cancel"))==null||y.addEventListener("click",()=>{t=null,l()}),(_=c("#f-price-type"))==null||_.addEventListener("change",g=>{const v=c("#credits-field");v&&(v.style.opacity=g.target.value!=="credits"?"0.4":"1")}),(u=c("#btn-pick-icon"))==null||u.addEventListener("click",async()=>{var v;const g=c("#icon-picker-grid");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const h=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(h)?h.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!I.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const B=((v=c("#f-image-url"))==null?void 0:v.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${I.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===B?"#1A6B3C":"#ddd"};background:${k.name===B?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const S=c("#f-image-url");S&&(S.value=k.dataset.name),g.style.display="none"})})}catch(E){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function i(){e.querySelectorAll("[data-rate-idx]").forEach(g=>{var E,h,I,B,k;const v=Number(g.dataset.rateIdx);v>=0&&v<o.length&&(o[v].card_type=((E=g.querySelector(".rate-type"))==null?void 0:E.value)||"player",o[v].rarity=((h=g.querySelector(".rate-rarity"))==null?void 0:h.value)||null,o[v].note_min=Number((I=g.querySelector(".rate-note-min"))==null?void 0:I.value)||null,o[v].note_max=Number((B=g.querySelector(".rate-note-max"))==null?void 0:B.value)||null,o[v].percentage=Number((k=g.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=c("#btn-add-rate"))==null||w.addEventListener("click",()=>{i(),o.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:o.length}),l(!0)}),e.querySelectorAll(".btn-del-rate").forEach(g=>{g.addEventListener("click",()=>{i(),o.splice(Number(g.dataset.idx),1),l(!0)})}),($=c("#btn-save"))==null||$.addEventListener("click",async()=>{var B,k,S,R,M,D,F,H,U;const g=(n||[]).find(L=>L.id===t);if(!g)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var C,G,oe,ae,re;const q=Number(L.dataset.rateIdx);v.push({booster_id:t,card_type:((C=L.querySelector(".rate-type"))==null?void 0:C.value)||"player",rarity:((G=L.querySelector(".rate-rarity"))==null?void 0:G.value)||null,note_min:Number((oe=L.querySelector(".rate-note-min"))==null?void 0:oe.value)||null,note_max:Number((ae=L.querySelector(".rate-note-max"))==null?void 0:ae.value)||null,percentage:Number((re=L.querySelector(".rate-pct"))==null?void 0:re.value)||0,sort_order:q});const T=v[v.length-1];T.rarity||(T.rarity=null),T.note_min||(T.note_min=null),T.note_max||(T.note_max=null)});const E=v.reduce((L,q)=>L+q.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const h={name:((k=(B=c("#f-name"))==null?void 0:B.value)==null?void 0:k.trim())||g.name,image_url:((R=(S=c("#f-image-url"))==null?void 0:S.value)==null?void 0:R.trim())||null,price_type:(M=c("#f-price-type"))==null?void 0:M.value,price_credits:Number((D=c("#f-price-credits"))==null?void 0:D.value)||0,card_count:Number((F=c("#f-card-count"))==null?void 0:F.value)||5,is_active:((H=c("#f-active"))==null?void 0:H.checked)??g.is_active,sort_order:Number((U=c("#f-sort"))==null?void 0:U.value)||0},{error:I}=await x.from("booster_configs").update(h).eq("id",t);if(I){alert(I.message);return}if(Object.assign(g,h),await x.from("booster_drop_rates").delete().eq("booster_id",t),v.length){const{error:L}=await x.from("booster_drop_rates").insert(v);if(L){alert(L.message);return}}o=v,p=t,alert("✅ Booster enregistré !"),l(!0)})}l()}const Le=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function at(e){await ne(e)}async function ne(e){const{data:n,error:t}=await x.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(n||[]).map(o=>rt(o)).join("")}
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
              ${Le.map(o=>`<option value="${o.value}">${o.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>fe(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>lt(e)),e.querySelectorAll("[data-edit]").forEach(o=>{const p=(n||[]).find(r=>r.id===o.dataset.edit);p&&o.addEventListener("click",()=>fe(p))}),e.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await x.from("sell_price_configs").delete().eq("id",o.dataset.delete),await ne(e))})})}function rt(e){const n=Le.find(t=>t.value===e.rarity);return`
    <tr style="border-top:1px solid #f0f0f0">
      <td style="padding:10px 14px">
        <span style="font-weight:700;color:${(n==null?void 0:n.color)||"#888"}">${(n==null?void 0:n.label)||e.rarity}</span>
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
    </tr>`}function fe(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function lt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,o=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,r=parseInt(document.getElementById("form-note-max").value)||10;if(p>r){alert("Note min doit être ≤ note max");return}const a={rarity:t,price:o,note_min:p,note_max:r,updated_at:new Date().toISOString()};let d;if(n?{error:d}=await x.from("sell_price_configs").update(a).eq("id",n):{error:d}=await x.from("sell_price_configs").insert(a),d){alert("Erreur : "+d.message);return}document.getElementById("config-form").style.display="none",await ne(e)}async function dt(e){await ie(e)}async function ie(e){const{data:n}=await x.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>st(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>ve(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>ct(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const o=(n||[]).find(p=>p.id===t.dataset.edit);o&&t.addEventListener("click",()=>ve(o))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await x.from("patch_notes").delete().eq("id",t.dataset.delete),await ie(e))})})}function st(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
    <div style="background:#fff;border-radius:10px;padding:14px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:12px;align-items:flex-start">
      ${e.image_url?`<img src="${e.image_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;flex-shrink:0">`:""}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-size:14px;font-weight:900">${e.title}</span>
          ${e.is_published?"":'<span style="font-size:10px;background:#f0f0f0;color:#888;padding:1px 6px;border-radius:6px;font-weight:700">BROUILLON</span>'}
        </div>
        <div style="font-size:11px;color:#999;margin-bottom:4px">${n}</div>
        <div style="font-size:12px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.description}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
        <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
      </div>
    </div>`}function ve(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),o=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=o,n.scrollIntoView({behavior:"smooth"})}async function ct(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),o=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,r=document.getElementById("form-art-pub").checked,a=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!o){alert("La description est obligatoire.");return}const d=a?new Date(a).toISOString():new Date().toISOString(),s={title:t,description:o,image_url:p,is_published:r,published_at:d};let l;if(n?{error:l}=await x.from("patch_notes").update(s).eq("id",n):{error:l}=await x.from("patch_notes").insert(s),l){alert("Erreur : "+l.message);return}document.getElementById("article-form").style.display="none",await ie(e)}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function pt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await x.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const o=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],r=()=>window.innerWidth<700,a=i=>e.querySelector(i);function d(i,f=130){if(!i)return"";const m=N.find($=>$.value===i.gc_type)||N[0],y=P.find($=>$.value===i.color)||P[0],_=Math.round(f*.55),u=Math.round(f*.15),w=Math.round(f*.3);return`<div style="width:${f}px;height:${Math.round(f*1.4)}px;border-radius:10px;border:3px solid ${y.hex};background:${m.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${y.hex}55;flex-shrink:0">
      <div style="height:${u}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(f/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${i.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${i.image_url?`<img src="/manager-wars/icons/${i.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(f*.3)}px">${m.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(f/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(i.effect||"").slice(0,60)}${(i.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function s(){return`
    <div id="gc-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(i=>{const f=N.find(y=>y.value===i.gc_type)||N[0],m=P.find(y=>y.value===i.color)||P[0];return`
        <div class="gc-row" data-id="${i.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${i.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${m.hex};background:${f.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
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
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function l(){const i=t?(n||[]).find(m=>m.id===t):null;if(!i)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const f=N.find(m=>m.value===i.gc_type)||N[0];return P.find(m=>m.value===i.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${f.bg};border-radius:12px">
        ${d(i,r()?120:150)}
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
              ${N.map(m=>`<option value="${m.value}" ${i.gc_type===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(m=>`<option value="${m.value}" ${i.color===m.value?"selected":""}>${m.label}</option>`).join("")}
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
              ${o.map(m=>`<option value="${m.value}" ${(i.effect_type||"BOOST_STAT")===m.value?"selected":""}>${m.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const m=i.effect_params||{},y=o.find(_=>_.value===(i.effect_type||"BOOST_STAT"))||o[0];return`
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
      ${!r()||!t?s():""}
      ${!r()||t?l():""}
    </div>`,c()}function c(){var i,f,m,y,_;e.querySelectorAll(".gc-row").forEach(u=>{u.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=u.dataset.id,b())})}),(i=a("#btn-gc-back"))==null||i.addEventListener("click",()=>{t=null,b()}),(f=a("#btn-cancel-gc"))==null||f.addEventListener("click",()=>{t=null,b()}),(m=a("#btn-new-gc"))==null||m.addEventListener("click",async()=>{const u=prompt("Nom de la carte Game Changer :");if(!(u!=null&&u.trim()))return;const{data:w,error:$}=await x.from("gc_definitions").insert({name:u.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}n.push(w),t=w.id,b()}),e.querySelectorAll(".btn-toggle-gc").forEach(u=>{u.addEventListener("click",async w=>{w.stopPropagation();const $=u.dataset.active!=="true";await x.from("gc_definitions").update({is_active:$}).eq("id",u.dataset.id);const g=n.find(v=>v.id===u.dataset.id);g&&(g.is_active=$),b()})}),e.querySelectorAll(".btn-delete-gc").forEach(u=>{u.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await x.from("gc_definitions").delete().eq("id",u.dataset.id);const $=n.findIndex(g=>g.id===u.dataset.id);$>-1&&n.splice($,1),t===u.dataset.id&&(t=null),b()})}),(y=a("#btn-pick-gc-icon"))==null||y.addEventListener("click",async()=>{var w;const u=a("#gc-icon-picker");if(u){if(u.style.display!=="none"){u.style.display="none";return}u.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',u.style.display="block";try{const g=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(g)?g.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!v.length){u.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((w=a("#gc-image-url"))==null?void 0:w.value)||"";u.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${v.map(h=>`
          <div class="gc-icon-item" data-name="${h.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===E?"#7a28b8":"#ddd"};background:${h.name===E?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,u.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const I=a("#gc-image-url");I&&(I.value=h.dataset.name),u.style.display="none"})})}catch($){u.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(_=a("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var h,I,B,k,S,R,M,D,F,H,U,L,q,T;const u=n.find(C=>C.id===t);if(!u)return;const w=o.find(C=>{var G;return C.value===(((G=a("#gc-effect-type"))==null?void 0:G.value)||"BOOST_STAT")})||o[0],$=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(C=>C.value):null,g={...w.hasValue?{value:Number((h=a("#gc-p-value"))==null?void 0:h.value)||2}:{},...w.hasCount?{count:Number((I=a("#gc-p-count"))==null?void 0:I.value)||1}:{},...w.hasTarget?{target:((B=a("#gc-p-target"))==null?void 0:B.value)||"home"}:{},...w.hasRoles?{roles:$!=null&&$.length?$:null}:{}},v={name:((S=(k=a("#gc-name"))==null?void 0:k.value)==null?void 0:S.trim())||u.name,effect:((M=(R=a("#gc-effect"))==null?void 0:R.value)==null?void 0:M.trim())||null,image_url:((F=(D=a("#gc-image-url"))==null?void 0:D.value)==null?void 0:F.trim())||null,gc_type:((H=a("#gc-type"))==null?void 0:H.value)||"game_changer",color:((U=a("#gc-color"))==null?void 0:U.value)||"purple",sort_order:Number((L=a("#gc-sort"))==null?void 0:L.value)||0,is_active:((q=a("#gc-active"))==null?void 0:q.checked)??u.is_active,effect_type:((T=a("#gc-effect-type"))==null?void 0:T.value)||"BOOST_STAT",effect_params:g},{error:E}=await x.from("gc_definitions").update(v).eq("id",t);if(E){alert(E.message);return}Object.assign(u,v),alert("✅ Carte enregistrée !"),b()})}b()}Oe($e);function ut(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function mt(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function te(){document.getElementById("modal-overlay").classList.add("hidden")}const xe={dashboard:{title:"Dashboard",fn:qe},players:{title:"Joueurs & Cartes",fn:Fe},clubs:{title:"Clubs",fn:He},"card-builder":{title:"Card Builder",fn:Ke},users:{title:"Managers",fn:ke},market:{title:"Marché des transferts",fn:Ie},"import-export":{title:"Import / Export CSV",fn:Qe},formations:{title:"Formations & Liens",fn:et},"boosters-config":{title:"Boosters",fn:ot},"sell-price":{title:"Prix vente directe",fn:at},journal:{title:"Journal",fn:dt},"gc-cards":{title:"Game Changers",fn:pt}};async function Z(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=xe[e]||xe.dashboard;document.getElementById("page-title").textContent=t.title;const o=document.getElementById("page-content");o.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(o,{toast:ut,openModal:mt,closeModal:te,navigate:Z})}catch(p){o.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function gt(){var n;const{data:{session:e}}=await x.auth.getSession();e&&await ye(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),o=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!t||!o){p.textContent="Remplissez tous les champs.";return}const{data:r,error:a}=await x.auth.signInWithPassword({email:t,password:o});if(a){p.textContent=a.message;return}await ye(r.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await x.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",te),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&te()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),Z(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{Z(t.target.value)})}async function ye(e){const{data:n,error:t}=await x.from("users").select("*").eq("id",e.id).single(),o=document.getElementById("auth-error");if(t||!n){o.textContent="Profil introuvable.";return}if(!n.is_admin){o.textContent="Accès refusé. Vous n'êtes pas administrateur.",await x.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,Z("dashboard")}gt();
