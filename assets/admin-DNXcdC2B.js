import{s as y,e as K,g as fe,K as ve,D as C,S as we,a as A,H as Ee,R as ke,b as xe,r as Ie,c as Le,E as ze,d as Ae,N as Ce,M as Se,B as Be,F as Z,f as ae,h as Te,i as je}from"./formation-links-CEzN0rcz.js";async function Re(e){const[{count:t},{count:i},{count:a},{count:f},{count:r}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${V("🃏","Joueurs (cartes)",t??"–","#1A6B3C")}
      ${V("🏟️","Clubs",i??"–","#D4A017")}
      ${V("👥","Managers",a??"–","#7a28b8")}
      ${V("📦","Cartes possédées",f??"–","#2a8f52")}
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
  `,window.adminNav=o=>{var c;(c=document.querySelector(`[data-page="${o}"]`))==null||c.click()}}function V(e,t,i,a){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${a}">${i}</div>
    <div style="font-size:11px;color:var(--gray-600)">${t}</div>
  </div>`}const re={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},Me={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function Ne(e,t){await J(e,t)}async function J(e,t){const{toast:i,openModal:a,closeModal:f}=t,[{data:r,error:o},{data:c}]=await Promise.all([y.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(o){e.innerHTML=`<p style="color:red">${o.message}</p>`;return}const d={};(c||[]).forEach(l=>{d[l.id]=l.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(re).map(([l,n])=>`<option value="${l}">${n}</option>`).join("")}
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
  `,s(r);function s(l){document.getElementById("count-label").textContent=`${l.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=l.map(n=>{var b;return`
      <tr>
        <td>
          <div style="font-weight:600">${n.firstname} ${n.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${n.firstname} ${n.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${n.country_code}/flat/32.png" alt="${n.country_code}" style="height:16px;vertical-align:middle"> ${n.country_code}
        </td>
        <td style="font-size:12px">${((b=n.clubs)==null?void 0:b.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${n.job==="ATT"?"#1A6B3C":n.job==="MIL"?"#D4A017":n.job==="DEF"?"#bb2020":"#111"}">
            ${n.job}
          </span>
          ${n.job2?`<span style="font-size:11px;color:#aaa"> / ${n.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${n.note_g} / ${n.note_d} / ${n.note_m} / ${n.note_a}
        </td>
        <td>
          <span style="background:${Me[n.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${re[n.rarity]||n.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${n.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${n.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(n=>{n.addEventListener("click",()=>{const b=r.find(u=>u.id===n.dataset.edit);le(b,c||[],{toast:i,openModal:a,closeModal:f,reload:()=>J(e,t)})})}),document.querySelectorAll("[data-del]").forEach(n=>{n.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:b}=await y.from("players").delete().eq("id",n.dataset.del);b?i(b.message,"error"):(i("Joueur supprimé","success"),J(e,t))})})}function g(){const l=document.getElementById("search-players").value.toLowerCase(),n=document.getElementById("filter-rarity").value,b=document.getElementById("filter-job").value;s(r.filter(u=>(!l||`${u.firstname} ${u.surname_encoded} ${u.surname_real}`.toLowerCase().includes(l))&&(!n||u.rarity===n)&&(!b||u.job===b)))}document.getElementById("search-players").addEventListener("input",g),document.getElementById("filter-rarity").addEventListener("change",g),document.getElementById("filter-job").addEventListener("change",g),document.getElementById("add-player-btn").addEventListener("click",()=>{le(null,c||[],{toast:i,openModal:a,closeModal:f,reload:()=>J(e,t)})})}function le(e,t,{toast:i,openModal:a,closeModal:f,reload:r}){const o=!!e,c='<option value="">— Club —</option>'+t.map(d=>`<option value="${d.id}" ${(e==null?void 0:e.club_id)===d.id?"selected":""}>${d.encoded_name}</option>`).join("");a(o?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
      <div><label>Club</label><select id="pm-club">${c}</select></div>
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
     <button class="btn btn-primary" id="pm-save">${o?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",f),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=K(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const d={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!d.firstname||!d.surname_real||!d.surname_encoded){i("Remplissez les champs obligatoires","error");return}const{error:s}=o?await y.from("players").update({...d,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(d);if(s){i(s.message,"error");return}i(o?"Joueur modifié ✅":"Joueur créé ✅","success"),f(),r()})}let W=[];async function Pe(e,{toast:t,openModal:i,closeModal:a}){await Q(e,{toast:t,openModal:i,closeModal:a})}async function Q(e,t){const{data:i,error:a}=await y.from("clubs").select("*").order("encoded_name");if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}W=i||[],Oe(e,t)}function Oe(e,{toast:t,openModal:i,closeModal:a}){e.innerHTML=`
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
  `,f(W),document.getElementById("search-clubs").addEventListener("input",r=>{const o=r.target.value.toLowerCase();f(W.filter(c=>c.encoded_name.toLowerCase().includes(o)||c.real_name.toLowerCase().includes(o)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{se(null,{toast:t,openModal:i,closeModal:a,reload:()=>Q(e,{toast:t,openModal:i,closeModal:a})})});function f(r){document.getElementById("clubs-tbody").innerHTML=r.map(o=>{var s;const c=ye(o),d=fe(c).replace("<svg ",'<svg style="width:36px;height:42px" ');return`
      <tr>
        <td>
          ${o.logo_url?`<img src="${o.logo_url}" style="width:32px;height:32px;object-fit:contain;border-radius:4px">`:`<div style="width:32px;height:32px;background:#1a3a7a;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700">${o.encoded_name.slice(0,3)}</div>`}
        </td>
        <td title="${((s=ve[o.kit_style||"uni"])==null?void 0:s.label)||"Uni"}">${d}</td>
        <td><b>${o.encoded_name}</b></td>
        <td style="color:var(--gray-600);font-size:13px">${o.real_name}</td>
        <td><img src="https://flagsapi.com/${o.country_code}/flat/32.png" alt="${o.country_code}" style="height:18px;vertical-align:middle"> ${o.country_code}</td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
        </td>
      </tr>`}).join(""),document.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const c=W.find(d=>d.id===o.dataset.edit);se(c,{toast:t,openModal:i,closeModal:a,reload:()=>Q(e,{toast:t,openModal:i,closeModal:a})})})}),document.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:c}=await y.from("clubs").delete().eq("id",o.dataset.del);c?t(c.message,"error"):(t("Club supprimé","success"),Q(e,{toast:t,openModal:i,closeModal:a}))})})}}function ye(e){return{style:e.kit_style||C.style,color1:e.kit_color1||C.color1,color2:e.kit_color2||C.color2,shorts:e.kit_shorts||C.shorts,socks:e.kit_socks||C.socks}}function se(e,{toast:t,openModal:i,closeModal:a,reload:f}){var l;const r=!!e,o=e?ye(e):{...C},c=Object.entries(ve).map(([n,b])=>`<option value="${n}" ${o.style===n?"selected":""}>${b.label}</option>`).join("");i(r?"Modifier le club":"Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
              <select id="m-kit-style">${c}</select>
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
     <button class="btn btn-primary" id="m-save">${r?"Enregistrer":"Créer"}</button>`);function d(n,b){const u=document.getElementById(n),x=document.getElementById(b);!u||!x||(u.addEventListener("input",()=>{x.value=u.value,g()}),x.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(x.value)&&(u.value=x.value,g())}))}d("m-kit-color1","m-kit-color1-txt"),d("m-kit-color2","m-kit-color2-txt"),d("m-kit-shorts","m-kit-shorts-txt"),d("m-kit-socks","m-kit-socks-txt"),(l=document.getElementById("m-kit-style"))==null||l.addEventListener("change",g);function s(){var n,b,u,x,_;return{style:((n=document.getElementById("m-kit-style"))==null?void 0:n.value)||"uni",color1:((b=document.getElementById("m-kit-color1"))==null?void 0:b.value)||"#1A6B3C",color2:((u=document.getElementById("m-kit-color2"))==null?void 0:u.value)||"#ffffff",shorts:((x=document.getElementById("m-kit-shorts"))==null?void 0:x.value)||"#111111",socks:((_=document.getElementById("m-kit-socks"))==null?void 0:_.value)||"#ffffff"}}function g(){const n=document.getElementById("kit-preview-wrap");n&&(n.innerHTML=fe(s()))}g(),document.getElementById("m-cancel").addEventListener("click",a),document.getElementById("auto-encode").addEventListener("click",()=>{const n=document.getElementById("m-real").value,b=n.split(" ")[0]||n;document.getElementById("m-encoded").value=b.toUpperCase()+" FC"}),document.getElementById("m-real").addEventListener("input",()=>{const n=document.getElementById("m-real").value;if(!document.getElementById("m-encoded").value){const b=n.split(" ")[0]||n;document.getElementById("m-encoded").value=b.toUpperCase()+" FC"}}),document.getElementById("m-save").addEventListener("click",async()=>{const n=s(),b={real_name:document.getElementById("m-real").value.trim(),encoded_name:document.getElementById("m-encoded").value.trim().toUpperCase(),country_code:document.getElementById("m-country").value.trim().toUpperCase(),logo_url:document.getElementById("m-logo").value.trim()||null,kit_style:n.style,kit_color1:n.color1,kit_color2:n.color2,kit_shorts:n.shorts,kit_socks:n.socks};if(!b.real_name||!b.encoded_name||!b.country_code){t("Remplissez tous les champs obligatoires","error");return}const{error:u}=r?await y.from("clubs").update(b).eq("id",e.id):await y.from("clubs").insert(b);if(u){t(u.message,"error");return}t(r?"Club modifié ✅":"Club créé ✅","success"),a(),f()})}const qe=["normal","pepite","papyte","legende"],de=["GK","DEF","MIL","ATT"],Fe=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let O={...A},X=[];async function De(e,{toast:t}){const{data:i}=await y.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");X=i||[],O={...A},e.innerHTML=Ve(X),Ue(e,X,t),j()}function ce(){var i;const e=((i=document.getElementById("cb-surname-real"))==null?void 0:i.value)||"",t=document.getElementById("cb-surname-enc");t&&(t.value=K(e))}function He(){var i;const e=(i=document.getElementById("cb-club"))==null?void 0:i.value,t=X.find(a=>String(a.id)===String(e));return t?{style:t.kit_style||C.style,color1:t.kit_color1||C.color1,color2:t.kit_color2||C.color2,shorts:t.kit_shorts||C.shorts,socks:t.kit_socks||C.socks}:{...C}}function j(){var n,b,u,x;const e=_=>{var p;return((p=document.getElementById(_))==null?void 0:p.value)||""},t={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||K(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((b=(n=document.getElementById("cb-club"))==null?void 0:n.selectedOptions[0])==null?void 0:b.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},i=He(),a=document.getElementById("cb-club"),f=((x=(u=a==null?void 0:a.selectedOptions[0])==null?void 0:u.dataset)==null?void 0:x.logo)||null,r=xe(O,i,120),o=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,c=Ie(t,{portraitUrl:o,clubLogoUrl:f,showNotes:!0}),d=document.getElementById("card-preview");d&&(d.innerHTML=c);const s=document.getElementById("avatar-preview-wrap");s&&(s.innerHTML=r);const g=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&g&&(l.textContent=`${e("cb-firstname")} ${g} → ${e("cb-firstname")} ${t.surname_encoded}`)}function he(){const e=t=>{var i;return((i=document.getElementById(t))==null?void 0:i.value)||""};O={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ue(e,t,i){var f,r,o,c,d;e.querySelectorAll("input,select").forEach(s=>{s.addEventListener("input",j),s.addEventListener("change",j)});const a=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];a.forEach(s=>{var g;(g=document.getElementById(s))==null||g.addEventListener("change",()=>{he(),j()})}),(f=document.getElementById("cb-surname-real"))==null||f.addEventListener("input",()=>{ce(),j()}),(r=document.getElementById("btn-encode"))==null||r.addEventListener("click",()=>{ce(),j()}),(o=document.getElementById("cb-club"))==null||o.addEventListener("change",j),(c=document.getElementById("btn-save-player"))==null||c.addEventListener("click",()=>Ge(i)),(d=document.getElementById("btn-reset"))==null||d.addEventListener("click",()=>{e.querySelectorAll("input").forEach(s=>s.value=""),e.querySelectorAll("select").forEach(s=>s.selectedIndex=0),O={...A},a.forEach(s=>{const g=s.replace("av-",""),l=document.getElementById(s);l&&(l.value=A[g]||"")}),j()})}async function Ge(e){const t=o=>{var c;return((c=document.getElementById(o))==null?void 0:c.value)||""},i=t("cb-surname-real").trim(),a=t("cb-surname-enc").trim()||K(i);if(!t("cb-firstname")||!i||!t("cb-country")||!t("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}he();const f={firstname:t("cb-firstname").trim(),surname_real:i,surname_encoded:a,country_code:t("cb-country"),club_id:t("cb-club")||null,job:t("cb-job"),job2:t("cb-job2")||null,note_g:parseInt(t("cb-note-g"))||0,note_d:parseInt(t("cb-note-d"))||0,note_m:parseInt(t("cb-note-m"))||0,note_a:parseInt(t("cb-note-a"))||0,rarity:t("cb-rarity")||"normal",note_min:parseInt(t("cb-note-min"))||null,note_max:parseInt(t("cb-note-max"))||null,sell_price:parseInt(t("cb-price"))||0,avatar_config:O,skin:O.skin||"blanc",hair:O.hairColor||"marron",hair_length:"court"},{error:r}=await y.from("players").insert(f);if(r){e("Erreur: "+r.message,"error");return}e(`✅ Joueur "${f.firstname} ${f.surname_encoded}" enregistré !`,"success")}function Ve(e){const t=Fe.map(([s,g])=>`<option value="${s}">${g} (${s})</option>`).join(""),i='<option value="">— Sélectionner un club —</option>'+e.map(s=>`<option value="${s.id}" data-logo="${s.logo_url||""}">${s.encoded_name}</option>`).join(""),a=de.map(s=>`<option value="${s}">${s}</option>`).join(""),f='<option value="">Aucun</option>'+de.map(s=>`<option value="${s}">${s}</option>`).join(""),r=qe.map(s=>`<option value="${s}">${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),o=(s,g,l)=>Object.entries(g).map(([n,b])=>`<option value="${n}" ${n===(l||"")?"selected":""}>${b.label}</option>`).join(""),c=Object.keys(we).map(s=>`<option value="${s}" ${s===A.skin?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),d=Object.keys(Ee).map(s=>`<option value="${s}" ${s===A.hairColor?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join("");return`
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
          <div><label>Club</label><select id="cb-club">${i}</select></div>
        </div>
      </div>

      <!-- Poste & Notes -->
      <div class="card-panel">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:12px">⭐ Poste & Notes</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div><label>Poste principal *</label><select id="cb-job">${a}</select></div>
          <div><label>Poste secondaire</label><select id="cb-job2">${f}</select></div>
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
            <div style="background:${ke[s]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${c}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${o("av-hair",Le,A.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${d}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${o("av-eyebrows",ze,A.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${o("av-eyes",Ae,A.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${o("av-nose",Ce,A.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${o("av-mouth",Se,A.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${o("av-beard",Be,A.beard)}</select>
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
  `}async function _e(e,{toast:t}){const{data:i,error:a}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at").order("created_at",{ascending:!1});if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${(i||[]).length} manager(s)</span>
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
  `;const f=i||[];r(f),document.getElementById("search-users").addEventListener("input",o=>{const c=o.target.value.toLowerCase();r(f.filter(d=>{var s;return d.pseudo.toLowerCase().includes(c)||((s=d.club_name)==null?void 0:s.toLowerCase().includes(c))}))});function r(o){document.getElementById("users-tbody").innerHTML=o.map(c=>`
      <tr>
        <td><b>${c.pseudo}</b></td>
        <td style="font-size:12px">${c.club_name||"—"}</td>
        <td style="font-size:12px">${(c.credits||0).toLocaleString("fr")} cr.</td>
        <td><b>${c.level}</b></td>
        <td style="font-size:12px">${c.wins}/${c.draws}/${c.losses}</td>
        <td style="font-size:12px">🥇${c.trophies_top1} 🥈${c.trophies_top2} 🥉${c.trophies_top3}</td>
        <td>
          ${c.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-toggle-admin="${c.id}" data-is-admin="${c.is_admin}">
            ${c.is_admin?"🔒 Retirer admin":"🔓 Rendre admin"}
          </button>
        </td>
      </tr>
    `).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(c=>{c.addEventListener("click",async()=>{const d=c.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${d?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:g}=await y.from("users").update({is_admin:d}).eq("id",c.dataset.toggleAdmin);g?t(g.message,"error"):(t("Rôle mis à jour ✅","success"),_e(e,{toast:t}))})})}}async function $e(e,{toast:t}){const{data:i,error:a}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(a){e.innerHTML=`<p style="color:red">${a.message}</p>`;return}const f=i||[],r=f.filter(c=>c.status==="active").length,o=f.filter(c=>c.status==="sold").length;e.innerHTML=`
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
            ${f.map(c=>{var l,n,b,u;const d=(l=c.card)==null?void 0:l.player,s=d?`${d.firstname} ${d.surname_encoded}`:((n=c.card)==null?void 0:n.card_type)||"—",g={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${s}</b>${d?`<div style="font-size:10px;color:#999">${d.rarity} · ${d.job}</div>`:""}</td>
                <td style="font-size:12px">${((b=c.seller)==null?void 0:b.pseudo)||"—"}</td>
                <td style="font-size:12px">${((u=c.buyer)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(c.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${g[c.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${c.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(c.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${c.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${c.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(c=>{c.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:d}=await y.from("market_listings").update({status:"cancelled"}).eq("id",c.dataset.cancel);d?t(d.message,"error"):(t("Annonce annulée","success"),$e(e,{toast:t}))})})}async function Ke(e,{toast:t}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:i,error:a}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(a){t(a.message,"error");return}if(!i||i.length===0){t("Aucun club à exporter","info");return}let f=`real_name,encoded_name,country_code,logo_url
`;i.forEach(r=>{f+=[r.real_name,r.encoded_name,r.country_code,r.logo_url||""].map(pe).join(",")+`
`}),Y("clubs_export.csv",f),t(`${i.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:i,error:a}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(a){t(a.message,"error");return}if(!i||i.length===0){t("Aucun joueur à exporter","info");return}let f=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;i.forEach(r=>{var o;f+=[r.firstname,r.surname_real,r.surname_encoded,r.country_code,((o=r.clubs)==null?void 0:o.encoded_name)||"",r.job,r.job2||"",r.note_g,r.note_d,r.note_m,r.note_a,r.rarity,r.note_min??"",r.note_max??"",r.skin,r.hair,r.hair_length,r.sell_price].map(pe).join(",")+`
`}),Y("players_export.csv",f),t(`${i.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async i=>{const a=i.target.files[0];if(!a)return;const f=document.getElementById("clubs-import-result");f.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await a.text(),o=ue(r);if(o.length===0){f.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let c=0,d=0;const s=[];for(const g of o){if(!g.real_name||!g.encoded_name||!g.country_code){d++,s.push(`Ligne ignorée (champs manquants): ${g.real_name||"?"}`);continue}const l={real_name:g.real_name,encoded_name:g.encoded_name.toUpperCase(),country_code:g.country_code.toUpperCase().slice(0,2),logo_url:g.logo_url||null},{error:n}=await y.from("clubs").upsert(l,{onConflict:"encoded_name"});n?(d++,s.push(`${g.encoded_name}: ${n.message}`)):c++}f.innerHTML=`<div style="color:var(--green)">✅ ${c} clubs importés</div>
        ${d>0?`<div style="color:#c0392b">❌ ${d} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${s.slice(0,10).join("<br>")}</div>`:""}`,t(`${c} clubs importés`,"success")}catch(r){f.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}i.target.value=""}),document.getElementById("import-players").addEventListener("change",async i=>{const a=i.target.files[0];if(!a)return;const f=document.getElementById("players-import-result");f.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const r=await a.text(),o=ue(r);if(o.length===0){f.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:c}=await y.from("clubs").select("id,encoded_name"),d={};(c||[]).forEach(p=>{d[p.encoded_name.toUpperCase()]=p.id});let s=0,g=0;const l=[],n=["GK","DEF","MIL","ATT"],b=["normal","pepite","papyte","legende"],u=["blanc","metisse","typ","noir"],x=["blond","marron","noir","chauve"],_=["rase","court","milong","long"];for(const p of o){if(!p.firstname||!p.surname_real||!p.country_code||!p.job){g++,l.push(`Ligne ignorée (champs requis manquants): ${p.firstname||"?"}`);continue}if(!n.includes(p.job)){g++,l.push(`${p.firstname}: job invalide "${p.job}"`);continue}const w=p.club_encoded_name&&d[p.club_encoded_name.toUpperCase()]||null,$={firstname:p.firstname,surname_real:p.surname_real,surname_encoded:p.surname_encoded||K(p.surname_real),country_code:p.country_code.toUpperCase().slice(0,2),club_id:w,job:p.job,job2:n.includes(p.job2)?p.job2:null,note_g:parseInt(p.note_g)||0,note_d:parseInt(p.note_d)||0,note_m:parseInt(p.note_m)||0,note_a:parseInt(p.note_a)||0,rarity:b.includes(p.rarity)?p.rarity:"normal",note_min:p.note_min!==""&&p.note_min!=null?parseInt(p.note_min):null,note_max:p.note_max!==""&&p.note_max!=null?parseInt(p.note_max):null,skin:u.includes(p.skin)?p.skin:"blanc",hair:x.includes(p.hair)?p.hair:"noir",hair_length:_.includes(p.hair_length)?p.hair_length:"court",sell_price:parseInt(p.sell_price)||0},{error:m}=await y.from("players").insert($);m?(g++,l.push(`${p.firstname} ${p.surname_real}: ${m.message}`)):s++}f.innerHTML=`<div style="color:var(--green)">✅ ${s} joueurs importés</div>
        ${g>0?`<div style="color:#c0392b">❌ ${g} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,t(`${s} joueurs importés`,"success")}catch(r){f.innerHTML=`<span style="color:#c0392b">Erreur : ${r.message}</span>`}i.target.value=""})}function pe(e){const t=String(e??"");return t.includes(",")||t.includes('"')||t.includes(`
`)?'"'+t.replace(/"/g,'""')+'"':t}function Y(e,t){const i=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i),f=document.createElement("a");f.href=a,f.download=e,f.click(),URL.revokeObjectURL(a)}function ue(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=e.split(`
`).filter(o=>o.trim());if(t.length<2)return[];const i=t[0],a=i.split(";").length>i.split(",").length?";":",",f=me(i,a).map(o=>o.trim().replace(/^\uFEFF/,"").toLowerCase()),r=[];for(let o=1;o<t.length;o++){if(!t[o].trim())continue;const c=me(t[o],a),d={};f.forEach((s,g)=>{d[s]=(c[g]||"").trim()}),!Object.values(d).every(s=>!s)&&r.push(d)}return r}function me(e,t=","){const i=[];let a="",f=!1;for(let r=0;r<e.length;r++){const o=e[r];f?o==='"'?e[r+1]==='"'?(a+='"',r++):f=!1:a+=o:o==='"'?f=!0:o===t?(i.push(a),a=""):a+=o}return i.push(a),i}const Ye={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Je(e,{toast:t}){const i=Object.keys(Z);let a=i[0];const{data:f}=await y.from("formation_links_overrides").select("formation, links"),r={};(f||[]).forEach(g=>{r[g.formation]=g.links});let o=new Set;function c(g,l){return[g,l].sort().join("-")}function d(g){const l=r[g]||Z[g]||[];o=new Set(l.map(([n,b])=>c(n,b)))}d(a),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${i.map(g=>`<option value="${g}" ${g===a?"selected":""}>${g}</option>`).join("")}
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
  `;function s(){const g=Te[a]||{},l=ae(a),n=320,b=400,u=22;function x(m){const v=g[m];return v?{x:v.x*n,y:v.y*b}:null}let _=`<svg width="${n}" height="${b}" viewBox="0 0 ${n} ${b}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([m,v],E)=>{const h=x(m),I=x(v);if(!h||!I)return;const z=c(m,v),k=o.has(z),S=k?"#3b82f6":"#999",R=k?.95:.35,M=k?4:3;_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${z}" style="cursor:pointer"/>`,_+=`<line x1="${h.x}" y1="${h.y}" x2="${I.x}" y2="${I.y}"
        stroke="${S}" stroke-width="${M}" stroke-dasharray="${k?"none":"4,3"}"
        opacity="${R}" pointer-events="none" data-line-key="${z}"/>`});for(const m of Object.keys(g)){const v=x(m);if(!v)continue;const E=m.replace(/\d+/,""),h=Ye[E]||"#555";_+=`<circle cx="${v.x}" cy="${v.y}" r="${u}" fill="${h}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,_+=`<text x="${v.x}" y="${v.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${m}</text>`}_+="</svg>",document.getElementById("field-wrap").innerHTML=_;const p=document.getElementById("links-list");p.innerHTML=l.map(([m,v])=>{const E=c(m,v),h=o.has(E);return`
        <button class="link-toggle" data-key="${E}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${h?"#3b82f6":"#ddd"};
          background:${h?"#eaf2ff":"#fafafa"};
          color:${h?"#1d4ed8":"#888"}">
          <span>${m} ↔ ${v}</span>
          <span>${h?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${o.size}/${l.length} actifs)`);function $(m){o.has(m)?o.delete(m):o.add(m),s()}e.querySelectorAll(".link-hit").forEach(m=>{m.addEventListener("click",()=>$(m.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(m=>{m.addEventListener("click",()=>$(m.dataset.key))})}s(),document.getElementById("formation-select").addEventListener("change",g=>{a=g.target.value,d(a),s()}),document.getElementById("reset-btn").addEventListener("click",()=>{const g=Z[a]||[];o=new Set(g.map(([l,n])=>c(l,n))),s(),t("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=ae(a).filter(([b,u])=>o.has(c(b,u))),{error:n}=await y.from("formation_links_overrides").upsert({formation:a,links:l,updated_at:new Date().toISOString()});if(n){t(n.message,"error");return}r[a]=l,t(`Liens enregistrés pour ${a} (${l.length} actifs)`,"success")})}const We=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"}],Qe=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Xe=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Ze(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await y.from("booster_configs").select("*").order("sort_order");let i=null,a=[],f=null;const r=()=>window.innerWidth<700;async function o(){if(!i){a=[];return}if(i!==f){const{data:l}=await y.from("booster_drop_rates").select("*").eq("booster_id",i).order("sort_order");a=l||[],f=i}}function c(){return`
    <div id="booster-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(t||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===i?"#f0f7f0":"#fff"}">
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
    </div>`}function d(){const l=i?(t||[]).find(u=>u.id===i):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const n=a.reduce((u,x)=>u+Number(x.percentage||0),0),b=Math.abs(n-100)<.1;return`
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
              ${Xe.map(u=>`<option value="${u.value}" ${l.price_type===u.value?"selected":""}>${u.label}</option>`).join("")}
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
            <span style="margin-left:10px;font-size:12px;color:${b?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${n.toFixed(1)}% ${b?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${a.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':a.map((u,x)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${x}">
            <select class="rate-type" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${We.map(_=>`<option value="${_.value}" ${u.card_type===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${x}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Qe.map(_=>`<option value="${_.value}" ${(u.rarity||"")===_.value?"selected":""}>${_.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${x}" type="number" min="1" max="10" value="${u.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${x}" type="number" min="1" max="10" value="${u.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${x}" type="number" min="0.1" max="100" step="0.1" value="${u.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${x}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function s(l=!1){l||await o();const n=!i&&r(),b=i&&r();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||n||!i?c():""}
      ${!r()||b?d():""}
    </div>`,g()}function g(){var b,u,x,_,p,w,$;const l=m=>e.querySelector(m);e.querySelectorAll(".booster-row").forEach(m=>{m.addEventListener("click",v=>{v.target.closest(".btn-delete")||(i=m.dataset.id,f=null,s())})}),(b=l("#btn-back"))==null||b.addEventListener("click",()=>{i=null,s()}),(u=l("#btn-new"))==null||u.addEventListener("click",async()=>{const m=prompt("Nom du nouveau booster :");if(!(m!=null&&m.trim()))return;const{data:v,error:E}=await y.from("booster_configs").insert({name:m.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(E){alert(E.message);return}t.push(v),i=v.id,f=null,s()}),e.querySelectorAll(".btn-delete").forEach(m=>{m.addEventListener("click",async v=>{if(v.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",m.dataset.id);const E=t.findIndex(h=>h.id===m.dataset.id);E>-1&&t.splice(E,1),i===m.dataset.id&&(i=null,f=null),s()})}),(x=l("#btn-cancel"))==null||x.addEventListener("click",()=>{i=null,s()}),(_=l("#f-price-type"))==null||_.addEventListener("change",m=>{const v=l("#credits-field");v&&(v.style.opacity=m.target.value!=="credits"?"0.4":"1")}),(p=l("#btn-pick-icon"))==null||p.addEventListener("click",async()=>{var v;const m=l("#icon-picker-grid");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const h=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),I=Array.isArray(h)?h.filter(k=>k.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(k.name)):[];if(!I.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const z=((v=l("#f-image-url"))==null?void 0:v.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${I.map(k=>`
          <div class="icon-pick-item" data-name="${k.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${k.name===z?"#1A6B3C":"#ddd"};background:${k.name===z?"#f0f7f0":"#fff"}">
            <img src="/manager-wars/icons/${k.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${k.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".icon-pick-item").forEach(k=>{k.addEventListener("click",()=>{const S=l("#f-image-url");S&&(S.value=k.dataset.name),m.style.display="none"})})}catch(E){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${E.message}</div>`}}});function n(){e.querySelectorAll("[data-rate-idx]").forEach(m=>{var E,h,I,z,k;const v=Number(m.dataset.rateIdx);v>=0&&v<a.length&&(a[v].card_type=((E=m.querySelector(".rate-type"))==null?void 0:E.value)||"player",a[v].rarity=((h=m.querySelector(".rate-rarity"))==null?void 0:h.value)||null,a[v].note_min=Number((I=m.querySelector(".rate-note-min"))==null?void 0:I.value)||null,a[v].note_max=Number((z=m.querySelector(".rate-note-max"))==null?void 0:z.value)||null,a[v].percentage=Number((k=m.querySelector(".rate-pct"))==null?void 0:k.value)||0)})}(w=l("#btn-add-rate"))==null||w.addEventListener("click",()=>{n(),a.push({id:null,booster_id:i,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:a.length}),s(!0)}),e.querySelectorAll(".btn-del-rate").forEach(m=>{m.addEventListener("click",()=>{n(),a.splice(Number(m.dataset.idx),1),s(!0)})}),($=l("#btn-save"))==null||$.addEventListener("click",async()=>{var z,k,S,R,M,F,D,H,U;const m=(t||[]).find(L=>L.id===i);if(!m)return;const v=[];e.querySelectorAll("[data-rate-idx]").forEach(L=>{var T,G,ne,ie,oe;const q=Number(L.dataset.rateIdx);v.push({booster_id:i,card_type:((T=L.querySelector(".rate-type"))==null?void 0:T.value)||"player",rarity:((G=L.querySelector(".rate-rarity"))==null?void 0:G.value)||null,note_min:Number((ne=L.querySelector(".rate-note-min"))==null?void 0:ne.value)||null,note_max:Number((ie=L.querySelector(".rate-note-max"))==null?void 0:ie.value)||null,percentage:Number((oe=L.querySelector(".rate-pct"))==null?void 0:oe.value)||0,sort_order:q});const B=v[v.length-1];B.rarity||(B.rarity=null),B.note_min||(B.note_min=null),B.note_max||(B.note_max=null)});const E=v.reduce((L,q)=>L+q.percentage,0);if(v.length&&Math.abs(E-100)>.5){alert(`La somme doit faire 100% (actuellement ${E.toFixed(1)}%)`);return}const h={name:((k=(z=l("#f-name"))==null?void 0:z.value)==null?void 0:k.trim())||m.name,image_url:((R=(S=l("#f-image-url"))==null?void 0:S.value)==null?void 0:R.trim())||null,price_type:(M=l("#f-price-type"))==null?void 0:M.value,price_credits:Number((F=l("#f-price-credits"))==null?void 0:F.value)||0,card_count:Number((D=l("#f-card-count"))==null?void 0:D.value)||5,is_active:((H=l("#f-active"))==null?void 0:H.checked)??m.is_active,sort_order:Number((U=l("#f-sort"))==null?void 0:U.value)||0},{error:I}=await y.from("booster_configs").update(h).eq("id",i);if(I){alert(I.message);return}if(Object.assign(m,h),await y.from("booster_drop_rates").delete().eq("booster_id",i),v.length){const{error:L}=await y.from("booster_drop_rates").insert(v);if(L){alert(L.message);return}}a=v,f=i,alert("✅ Booster enregistré !"),s(!0)})}s()}const N=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],P=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function et(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:t}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let i=null;const a=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],f=["GK","DEF","MIL","ATT"],r=()=>window.innerWidth<700,o=n=>e.querySelector(n);function c(n,b=130){if(!n)return"";const u=N.find($=>$.value===n.gc_type)||N[0],x=P.find($=>$.value===n.color)||P[0],_=Math.round(b*.55),p=Math.round(b*.15),w=Math.round(b*.3);return`<div style="width:${b}px;height:${Math.round(b*1.4)}px;border-radius:10px;border:3px solid ${x.hex};background:${u.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${x.hex}55;flex-shrink:0">
      <div style="height:${p}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(b/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${n.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${n.image_url?`<img src="/manager-wars/icons/${n.image_url}" style="max-height:${_}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(b*.3)}px">${u.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(b/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(n.effect||"").slice(0,60)}${(n.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function d(){return`
    <div id="gc-list" style="background:#fff;${r()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(t||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(t||[]).map(n=>{const b=N.find(x=>x.value===n.gc_type)||N[0],u=P.find(x=>x.value===n.color)||P[0];return`
        <div class="gc-row" data-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${n.id===i?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${u.hex};background:${b.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${n.image_url?`<img src="/manager-wars/icons/${n.image_url}" style="width:28px;height:28px;object-fit:contain">`:b.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${n.name}</div>
            <div style="font-size:11px;color:#888">${b.label} · ${n.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${n.id}" data-active="${n.is_active}"
              style="background:${n.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${n.is_active?"#27ae60":"#e74c3c"};color:${n.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${n.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${n.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(t||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const n=i?(t||[]).find(u=>u.id===i):null;if(!n)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const b=N.find(u=>u.value===n.gc_type)||N[0];return P.find(u=>u.value===n.color)||P[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${r()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${b.bg};border-radius:12px">
        ${c(n,r()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${n.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${n.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(u=>`<option value="${u.value}" ${n.gc_type===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${P.map(u=>`<option value="${u.value}" ${n.color===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${n.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${n.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${n.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${a.map(u=>`<option value="${u.value}" ${(n.effect_type||"BOOST_STAT")===u.value?"selected":""}>${u.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const u=n.effect_params||{},x=a.find(_=>_.value===(n.effect_type||"BOOST_STAT"))||a[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${x.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${u.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${x.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${u.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${x.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(u.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${u.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${x.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${f.map(_=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
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
    </div>`}function g(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!r()||!i?d():""}
      ${!r()||i?s():""}
    </div>`,l()}function l(){var n,b,u,x,_;e.querySelectorAll(".gc-row").forEach(p=>{p.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(i=p.dataset.id,g())})}),(n=o("#btn-gc-back"))==null||n.addEventListener("click",()=>{i=null,g()}),(b=o("#btn-cancel-gc"))==null||b.addEventListener("click",()=>{i=null,g()}),(u=o("#btn-new-gc"))==null||u.addEventListener("click",async()=>{const p=prompt("Nom de la carte Game Changer :");if(!(p!=null&&p.trim()))return;const{data:w,error:$}=await y.from("gc_definitions").insert({name:p.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}t.push(w),i=w.id,g()}),e.querySelectorAll(".btn-toggle-gc").forEach(p=>{p.addEventListener("click",async w=>{w.stopPropagation();const $=p.dataset.active!=="true";await y.from("gc_definitions").update({is_active:$}).eq("id",p.dataset.id);const m=t.find(v=>v.id===p.dataset.id);m&&(m.is_active=$),g()})}),e.querySelectorAll(".btn-delete-gc").forEach(p=>{p.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",p.dataset.id);const $=t.findIndex(m=>m.id===p.dataset.id);$>-1&&t.splice($,1),i===p.dataset.id&&(i=null),g()})}),(x=o("#btn-pick-gc-icon"))==null||x.addEventListener("click",async()=>{var w;const p=o("#gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const m=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),v=Array.isArray(m)?m.filter(h=>h.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(h.name)):[];if(!v.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const E=((w=o("#gc-image-url"))==null?void 0:w.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${v.map(h=>`
          <div class="gc-icon-item" data-name="${h.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${h.name===E?"#7a28b8":"#ddd"};background:${h.name===E?"#f5f0ff":"#fff"}">
            <img src="/manager-wars/icons/${h.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,p.querySelectorAll(".gc-icon-item").forEach(h=>{h.addEventListener("click",()=>{const I=o("#gc-image-url");I&&(I.value=h.dataset.name),p.style.display="none"})})}catch($){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(_=o("#btn-save-gc"))==null||_.addEventListener("click",async()=>{var h,I,z,k,S,R,M,F,D,H,U,L,q,B;const p=t.find(T=>T.id===i);if(!p)return;const w=a.find(T=>{var G;return T.value===(((G=o("#gc-effect-type"))==null?void 0:G.value)||"BOOST_STAT")})||a[0],$=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(T=>T.value):null,m={...w.hasValue?{value:Number((h=o("#gc-p-value"))==null?void 0:h.value)||2}:{},...w.hasCount?{count:Number((I=o("#gc-p-count"))==null?void 0:I.value)||1}:{},...w.hasTarget?{target:((z=o("#gc-p-target"))==null?void 0:z.value)||"home"}:{},...w.hasRoles?{roles:$!=null&&$.length?$:null}:{}},v={name:((S=(k=o("#gc-name"))==null?void 0:k.value)==null?void 0:S.trim())||p.name,effect:((M=(R=o("#gc-effect"))==null?void 0:R.value)==null?void 0:M.trim())||null,image_url:((D=(F=o("#gc-image-url"))==null?void 0:F.value)==null?void 0:D.trim())||null,gc_type:((H=o("#gc-type"))==null?void 0:H.value)||"game_changer",color:((U=o("#gc-color"))==null?void 0:U.value)||"purple",sort_order:Number((L=o("#gc-sort"))==null?void 0:L.value)||0,is_active:((q=o("#gc-active"))==null?void 0:q.checked)??p.is_active,effect_type:((B=o("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT",effect_params:m},{error:E}=await y.from("gc_definitions").update(v).eq("id",i);if(E){alert(E.message);return}Object.assign(p,v),alert("✅ Carte enregistrée !"),g()})}g()}je(xe);function tt(e,t="info"){const i=document.getElementById("toast");i.textContent=e,i.className=`show ${t}`,clearTimeout(i._t),i._t=setTimeout(()=>{i.className=""},3e3)}function nt(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ee(){document.getElementById("modal-overlay").classList.add("hidden")}const ge={dashboard:{title:"Dashboard",fn:Re},players:{title:"Joueurs & Cartes",fn:Ne},clubs:{title:"Clubs",fn:Pe},"card-builder":{title:"Card Builder",fn:De},users:{title:"Managers",fn:_e},market:{title:"Marché des transferts",fn:$e},"import-export":{title:"Import / Export CSV",fn:Ke},formations:{title:"Formations & Liens",fn:Je},"boosters-config":{title:"Boosters",fn:Ze},"gc-cards":{title:"Game Changers",fn:et}};async function te(e){document.querySelectorAll(".admin-sidebar nav a").forEach(a=>{a.classList.toggle("active",a.dataset.page===e)});const t=ge[e]||ge.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:tt,openModal:nt,closeModal:ee,navigate:te})}catch(a){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${a.message}</div>`,console.error(a)}}async function it(){const{data:{session:e}}=await y.auth.getSession();e&&await be(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,a=document.getElementById("auth-error");if(a.textContent="",!t||!i){a.textContent="Remplissez tous les champs.";return}const{data:f,error:r}=await y.auth.signInWithPassword({email:t,password:i});if(r){a.textContent=r.message;return}await be(f.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ee),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ee()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),te(t.dataset.page)})})}async function be(e){const{data:t,error:i}=await y.from("users").select("*").eq("id",e.id).single(),a=document.getElementById("auth-error");if(i||!t){a.textContent="Profil introuvable.";return}if(!t.is_admin){a.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${t.pseudo}`,te("dashboard")}it();
