import{s as y,e as W,g as Te,K as Ge,D as C,S as Ue,a as S,H as Ve,R as Ke,b as Me,r as Je,c as Ye,E as We,d as Ze,N as Xe,M as Qe,B as et,f as tt,F as re,h as xe,i as nt,j as it}from"./formation-links-5A-YoKwp.js";async function ot(e){const[{count:n},{count:t},{count:i},{count:u},{count:d}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${X("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${X("🏟️","Clubs",t??"–","#D4A017")}
      ${X("👥","Managers",i??"–","#7a28b8")}
      ${X("📦","Cartes possédées",u??"–","#2a8f52")}
      ${X("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=c=>{var o;(o=document.querySelector(`[data-page="${c}"]`))==null||o.click()}}function X(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const ve={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},at={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function rt(e,n){await ee(e,n)}async function ee(e,n){const{toast:t,openModal:i,closeModal:u}=n,[{data:d,error:c},{data:o}]=await Promise.all([y.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const a={};(o||[]).forEach(r=>{a[r.id]=r.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(ve).map(([r,l])=>`<option value="${r}">${l}</option>`).join("")}
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
  `,s(d);function s(r){document.getElementById("count-label").textContent=`${r.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=r.map(l=>{var h;return`
      <tr>
        <td>
          <div style="font-weight:600">${l.firstname} ${l.surname_encoded}</div>
          <div style="font-size:11px;color:var(--gray-600)">${l.firstname} ${l.surname_real}</div>
        </td>
        <td>
          <img src="https://flagsapi.com/${l.country_code}/flat/32.png" alt="${l.country_code}" style="height:16px;vertical-align:middle"> ${l.country_code}
        </td>
        <td style="font-size:12px">${((h=l.clubs)==null?void 0:h.encoded_name)||"—"}</td>
        <td>
          <span style="font-weight:700;color:${l.job==="ATT"?"#1A6B3C":l.job==="MIL"?"#D4A017":l.job==="DEF"?"#bb2020":"#111"}">
            ${l.job}
          </span>
          ${l.job2?`<span style="font-size:11px;color:#aaa"> / ${l.job2}</span>`:""}
        </td>
        <td style="font-size:12px;font-family:monospace">
          ${l.note_g} / ${l.note_d} / ${l.note_m} / ${l.note_a}
        </td>
        <td>
          <span style="background:${at[l.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${ve[l.rarity]||l.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${l.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${l.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(l=>{l.addEventListener("click",()=>{const h=d.find(x=>x.id===l.dataset.edit);ye(h,o||[],{toast:t,openModal:i,closeModal:u,reload:()=>ee(e,n)})})}),document.querySelectorAll("[data-del]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:h}=await y.from("players").delete().eq("id",l.dataset.del);h?t(h.message,"error"):(t("Joueur supprimé","success"),ee(e,n))})})}function b(){const r=document.getElementById("search-players").value.toLowerCase(),l=document.getElementById("filter-rarity").value,h=document.getElementById("filter-job").value;s(d.filter(x=>(!r||`${x.firstname} ${x.surname_encoded} ${x.surname_real}`.toLowerCase().includes(r))&&(!l||x.rarity===l)&&(!h||x.job===h)))}document.getElementById("search-players").addEventListener("input",b),document.getElementById("filter-rarity").addEventListener("change",b),document.getElementById("filter-job").addEventListener("change",b),document.getElementById("add-player-btn").addEventListener("click",()=>{ye(null,o||[],{toast:t,openModal:i,closeModal:u,reload:()=>ee(e,n)})})}function ye(e,n,{toast:t,openModal:i,closeModal:u,reload:d}){const c=!!e,o='<option value="">— Club —</option>'+n.map(a=>`<option value="${a.id}" ${(e==null?void 0:e.club_id)===a.id?"selected":""}>${a.encoded_name}</option>`).join("");i(c?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(a=>`<option value="${a}" ${(e==null?void 0:e.country_code)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${o}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(a=>`<option value="${a}" ${(e==null?void 0:e.job)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(a=>`<option value="${a}" ${(e==null?void 0:e.job2)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(a=>`<option value="${a}" ${(e==null?void 0:e.rarity)===a?"selected":""}>${a}</option>`).join("")}
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
          ${["blanc","metisse","typ","noir"].map(a=>`<option value="${a}" ${(e==null?void 0:e.skin)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(a=>`<option value="${a}" ${(e==null?void 0:e.hair)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(a=>`<option value="${a}" ${(e==null?void 0:e.hair_length)===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${c?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",u),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=W(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const a={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!a.firstname||!a.surname_real||!a.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:s}=c?await y.from("players").update({...a,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(a);if(s){t(s.message,"error");return}t(c?"Joueur modifié ✅":"Joueur créé ✅","success"),u(),d()})}const lt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},dt={JP:"raide",KR:"raide",CN:"raide",VN:"raide",TH:"raide",ID:"raide",PH:"raide",MY:"raide",SG:"raide",NG:"afro",SN:"afro",CI:"afro",CM:"afro",GH:"afro",ML:"afro",GN:"afro",BF:"afro",TG:"afro",BJ:"afro",GA:"afro",CG:"afro",CD:"afro",AO:"afro",MZ:"afro",KE:"afro",ET:"afro"},st=["court","mi-long","pompadour","fade","raide","afro","boucle","ondule"],ct=["rase","court","moyen"],je=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Re(e){return lt[e]||"blanc"}function pt(e){const n=dt[e];if(n)return n;const t=Re(e);return t==="noir"?"afro":t==="typ"?"raide":st[Math.floor(Math.random()*4)]}function K(e,n){return Math.floor(Math.random()*(n-e+1))+e}function te(e){return e[Math.floor(Math.random()*e.length)]}function ut(e){const n=je.filter(t=>t!==e);return te(n)}function mt(e,n){const t=[{job:"GK",count:2},{job:"DEF",count:8},{job:"MIL",count:6},{job:"ATT",count:4}],i=[],u=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo"],d=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez"];let c=0;return t.forEach(({job:o,count:a})=>{for(let s=0;s<a;s++){c++;const r=c<=10?n:ut(n),l=Re(r),h=pt(r),x=te(ct),E=K(1,20),p=Math.random()>.4?Math.max(1,E-K(1,4)):null,w=te(u),$=te(d);i.push({job:o,job2:p?o==="ATT"?"MIL":o==="MIL"?"DEF":o==="DEF"?"MIL":null:null,firstname:w,surname_real:$,surname_encoded:W($.toUpperCase()),country_code:r,club_id:e,note_g:o==="GK"?E:p&&o==="DEF"?p:K(1,10),note_d:o==="DEF"?E:p&&o==="MIL"?p:K(1,10),note_m:o==="MIL"?E:p&&(o==="DEF"||o==="ATT")?p:K(1,10),note_a:o==="ATT"?E:p&&o==="MIL"?p:K(1,10),skin:l,hair:h,hair_length:x,rarity:"normal"})}}),i}let ne=[];async function gt(e,{toast:n,openModal:t,closeModal:i}){await de(e,{toast:n,openModal:t,closeModal:i})}async function de(e,n){const{data:t,error:i}=await y.from("clubs").select("*").order("real_name");if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ne=t||[],ft(e,n)}function Ne(e){return{style:e.kit_style||C.style,color1:e.kit_color1||C.color1,color2:e.kit_color2||C.color2,shorts:e.kit_shorts||C.shorts,socks:e.kit_socks||C.socks}}function ft(e,n){const{toast:t,openModal:i,closeModal:u}=n;e.innerHTML=`
    <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1;min-width:160px">
      <button class="btn btn-primary" id="add-club-btn">+ Nouveau club</button>
    </div>
    <div id="clubs-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px"></div>
  `,d(ne),document.getElementById("search-clubs").addEventListener("input",c=>{const o=c.target.value.toLowerCase();d(ne.filter(a=>a.real_name.toLowerCase().includes(o)||a.encoded_name.toLowerCase().includes(o)))}),document.getElementById("add-club-btn").addEventListener("click",()=>{he(null,n)});function d(c){const o=document.getElementById("clubs-grid");if(!c.length){o.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}o.innerHTML=c.map(a=>{const s=Ne(a),b=Te(s).replace("<svg ",'<svg style="width:48px;height:56px" ');return`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;position:relative">
          <!-- Logo -->
          <div style="flex-shrink:0">
            ${a.logo_url?`<img src="${a.logo_url}" style="width:44px;height:44px;object-fit:contain;border-radius:8px">`:`<div style="width:44px;height:44px;background:linear-gradient(135deg,${s.color1},${s.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:900">${a.encoded_name.slice(0,3)}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.real_name}</div>
            <div style="font-size:11px;color:var(--gray-600);font-family:monospace">${a.encoded_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${a.country_code}/flat/24.png" style="height:14px"> 
              <span style="font-size:11px;color:var(--gray-600)">${a.country_code}</span>
            </div>
          </div>
          <!-- Kit -->
          <div style="flex-shrink:0">${b}</div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${a.id}" title="Modifier">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${a.id}" title="Supprimer">🗑️</button>
          </div>
        </div>`}).join(""),o.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const s=ne.find(b=>b.id===a.dataset.edit);he(s,n)})}),o.querySelectorAll("[data-del]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:s}=await y.from("clubs").delete().eq("id",a.dataset.del);s?t(s.message,"error"):(t("Club supprimé","success"),de(e,n))})})}}function he(e,n){var h,x,E,k;const{toast:t,openModal:i,closeModal:u}=n,d=!!e,c=e?Ne(e):{...C},o=Object.entries(Ge).map(([p,w])=>`<option value="${p}" ${c.style===p?"selected":""}>${w.label}</option>`).join(""),a=je.map(p=>`<option value="${p}" ${((e==null?void 0:e.country_code)||"FR")===p?"selected":""}>${p}</option>`).join("");i(d?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:16px">

      <!-- Identité -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="form-group">
          <label>Nom du club *</label>
          <input id="m-real" value="${(e==null?void 0:e.real_name)||""}" placeholder="Paris Saint-Germain">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div class="form-group">
            <label>Nom encodé *</label>
            <div style="display:flex;gap:6px">
              <input id="m-encoded" value="${(e==null?void 0:e.encoded_name)||""}" placeholder="PARIS FC" style="flex:1;text-transform:uppercase;font-family:monospace">
              <button class="btn btn-ghost btn-sm" id="auto-encode" title="Auto">↻</button>
            </div>
          </div>
          <div class="form-group">
            <label>Pays *</label>
            <select id="m-country" style="width:100%">${a}</select>
          </div>
        </div>
        <div class="form-group">
          <label>Logo (URL)</label>
          <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
        </div>
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:14px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
          <!-- Contrôles couleurs -->
          <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style de maillot</label>
              <select id="m-kit-style">${o}</select>
            </div>
            ${[["Couleur principale","m-kit-color1",c.color1],["Couleur secondaire","m-kit-color2",c.color2],["Short","m-kit-shorts",c.shorts],["Chaussettes","m-kit-socks",c.socks]].map(([p,w,$])=>`
              <div class="form-group">
                <label>${p}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${w}" value="${$}" style="width:36px;height:30px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${w}-txt" value="${$}" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <!-- Aperçu kit -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:80px">
            <div id="kit-preview-wrap" style="background:#f5f5f5;border-radius:10px;padding:12px;border:1px solid var(--gray-200)"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Actions spéciales -->
      ${d?"":`
      <div style="border-top:1px solid var(--gray-200);padding-top:14px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:4px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer">
          <input type="checkbox" id="m-gen-stadium" checked>
          Créer automatiquement la carte Stade du club
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer">
          <input type="checkbox" id="m-gen-squad">
          Générer 20 joueurs aléatoires (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:22px">50% nationalité du club · notes 1–20 · physique adapté au pays</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%">${d?"💾 Enregistrer":"✅ Créer le club"}</button>
    </div>`);function s(p,w){const $=document.getElementById(p),g=document.getElementById(w);!$||!g||($.addEventListener("input",()=>{g.value=$.value,r()}),g.addEventListener("input",()=>{/^#[0-9a-fA-F]{6}$/.test(g.value)&&($.value=g.value,r())}))}s("m-kit-color1","m-kit-color1-txt"),s("m-kit-color2","m-kit-color2-txt"),s("m-kit-shorts","m-kit-shorts-txt"),s("m-kit-socks","m-kit-socks-txt"),(h=document.getElementById("m-kit-style"))==null||h.addEventListener("change",r);function b(){var p,w,$,g,m;return{style:((p=document.getElementById("m-kit-style"))==null?void 0:p.value)||"uni",color1:((w=document.getElementById("m-kit-color1"))==null?void 0:w.value)||"#1A6B3C",color2:(($=document.getElementById("m-kit-color2"))==null?void 0:$.value)||"#ffffff",shorts:((g=document.getElementById("m-kit-shorts"))==null?void 0:g.value)||"#111111",socks:((m=document.getElementById("m-kit-socks"))==null?void 0:m.value)||"#ffffff"}}function r(){const p=document.getElementById("kit-preview-wrap");p&&(p.innerHTML=Te(b()))}r();function l(){var m;const w=(((m=document.getElementById("m-real"))==null?void 0:m.value)||"").trim().split(/\s+/),$=w.length===1?w[0].toUpperCase().slice(0,6):w.filter(f=>f.length>2).map(f=>f[0].toUpperCase()).join("")||w[0].toUpperCase().slice(0,4),g=document.getElementById("m-encoded");g&&!g.value&&(g.value=$)}(x=document.getElementById("auto-encode"))==null||x.addEventListener("click",()=>{document.getElementById("m-encoded").value="",l()}),(E=document.getElementById("m-real"))==null||E.addEventListener("input",l),(k=document.getElementById("m-save"))==null||k.addEventListener("click",async()=>{var M,N,D,P,q,O;const p=document.getElementById("m-error"),w=(M=document.getElementById("m-real"))==null?void 0:M.value.trim(),$=(N=document.getElementById("m-encoded"))==null?void 0:N.value.trim().toUpperCase(),g=(D=document.getElementById("m-country"))==null?void 0:D.value.trim().toUpperCase(),m=((P=document.getElementById("m-logo"))==null?void 0:P.value.trim())||null,f=b(),v=((q=document.getElementById("m-gen-stadium"))==null?void 0:q.checked)??!1,_=((O=document.getElementById("m-gen-squad"))==null?void 0:O.checked)??!1;if(!w||!$||!g){p.textContent="Nom, nom encodé et pays sont requis.";return}const L=document.getElementById("m-save");L.disabled=!0,L.textContent="Enregistrement…";const I={real_name:w,encoded_name:$,country_code:g,logo_url:m,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_shorts:f.shorts,kit_socks:f.socks};let z=e==null?void 0:e.id;if(d){const{error:j}=await y.from("clubs").update(I).eq("id",z);if(j){p.textContent=j.message,L.disabled=!1,L.textContent="💾 Enregistrer";return}}else{const{data:j,error:F}=await y.from("clubs").insert(I).select().single();if(F){p.textContent=F.message,L.disabled=!1,L.textContent="✅ Créer le club";return}if(z=j.id,v){L.textContent="Création du stade…";const{data:A,error:B}=await y.from("stadium_definitions").insert({name:`Stade de ${w}`,club_id:z,country_code:g}).select().single();!B&&A&&await y.from("cards").insert({card_type:"stadium",stadium_id:A.id})}if(_){L.textContent="Génération des joueurs…";const A=mt(z,g);for(const B of A){const{data:Z,error:R}=await y.from("players").insert(B).select().single();if(R){console.warn("[GenSquad] Player error:",R.message);continue}await y.from("cards").insert({card_type:"player",player_id:Z.id})}}}t(d?"Club modifié ✅":"Club créé ✅","success"),u();const T=document.getElementById("page-content");T&&de(T,n)})}const bt=["normal","pepite","papyte","legende"],Ee=["GK","DEF","MIL","ATT"],xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let V={...S},ie=[];async function vt(e,{toast:n}){const{data:t}=await y.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ie=t||[],V={...S},e.innerHTML=wt(ie),ht(e,ie,n),H()}function we(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=W(e))}function yt(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=ie.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||C.style,color1:n.kit_color1||C.color1,color2:n.kit_color2||C.color2,shorts:n.kit_shorts||C.shorts,socks:n.kit_socks||C.socks}:{...C}}function H(){var l,h,x,E;const e=k=>{var p;return((p=document.getElementById(k))==null?void 0:p.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||W(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((h=(l=document.getElementById("cb-club"))==null?void 0:l.selectedOptions[0])==null?void 0:h.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=yt(),i=document.getElementById("cb-club"),u=((E=(x=i==null?void 0:i.selectedOptions[0])==null?void 0:x.dataset)==null?void 0:E.logo)||null,d=Me(V,t,120),c=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,o=Je(n,{portraitUrl:c,clubLogoUrl:u,showNotes:!0}),a=document.getElementById("card-preview");a&&(a.innerHTML=o);const s=document.getElementById("avatar-preview-wrap");s&&(s.innerHTML=d);const b=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&b&&(r.textContent=`${e("cb-firstname")} ${b} → ${e("cb-firstname")} ${n.surname_encoded}`)}function De(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};V={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function ht(e,n,t){var u,d,c,o,a;e.querySelectorAll("input,select").forEach(s=>{s.addEventListener("input",H),s.addEventListener("change",H)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(s=>{var b;(b=document.getElementById(s))==null||b.addEventListener("change",()=>{De(),H()})}),(u=document.getElementById("cb-surname-real"))==null||u.addEventListener("input",()=>{we(),H()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{we(),H()}),(c=document.getElementById("cb-club"))==null||c.addEventListener("change",H),(o=document.getElementById("btn-save-player"))==null||o.addEventListener("click",()=>Et(t)),(a=document.getElementById("btn-reset"))==null||a.addEventListener("click",()=>{e.querySelectorAll("input").forEach(s=>s.value=""),e.querySelectorAll("select").forEach(s=>s.selectedIndex=0),V={...S},i.forEach(s=>{const b=s.replace("av-",""),r=document.getElementById(s);r&&(r.value=S[b]||"")}),H()})}async function Et(e){const n=c=>{var o;return((o=document.getElementById(c))==null?void 0:o.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||W(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}De();const u={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:V,skin:V.skin||"blanc",hair:V.hairColor||"marron",hair_length:"court"},{error:d}=await y.from("players").insert(u);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${u.firstname} ${u.surname_encoded}" enregistré !`,"success")}function wt(e){const n=xt.map(([s,b])=>`<option value="${s}">${b} (${s})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(s=>`<option value="${s.id}" data-logo="${s.logo_url||""}">${s.encoded_name}</option>`).join(""),i=Ee.map(s=>`<option value="${s}">${s}</option>`).join(""),u='<option value="">Aucun</option>'+Ee.map(s=>`<option value="${s}">${s}</option>`).join(""),d=bt.map(s=>`<option value="${s}">${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),c=(s,b,r)=>Object.entries(b).map(([l,h])=>`<option value="${l}" ${l===(r||"")?"selected":""}>${h.label}</option>`).join(""),o=Object.keys(Ue).map(s=>`<option value="${s}" ${s===S.skin?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join(""),a=Object.keys(Ve).map(s=>`<option value="${s}" ${s===S.hairColor?"selected":""}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join("");return`
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
          <div><label>Poste principal *</label><select id="cb-job">${i}</select></div>
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
          <div><label>Rareté</label><select id="cb-rarity">${d}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(s=>`
            <div style="background:${Ke[s]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${o}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${c("av-hair",Ye,S.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${a}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${c("av-eyebrows",We,S.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${c("av-eyes",Ze,S.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${c("av-nose",Xe,S.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${c("av-mouth",Qe,S.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${c("av-beard",et,S.beard)}</select>
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
  `}async function Pe(e,{toast:n}){const{data:t,error:i}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=t||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${u.length} manager(s)</span>
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
  `,d(u),document.getElementById("search-users").addEventListener("input",c=>{const o=c.target.value.toLowerCase();d(u.filter(a=>{var s;return a.pseudo.toLowerCase().includes(o)||((s=a.club_name)==null?void 0:s.toLowerCase().includes(o))}))});function d(c){document.getElementById("users-tbody").innerHTML=c.map(o=>{const a=o.mmr??1e3,s=o.mmr_deviation??350,b=o.placement_matches??0,r=tt(a),l=o.ranked_wins??0,h=o.ranked_losses??0,x=o.ranked_draws??0,E=l+h+x,k=E>0?Math.round(l/E*100):null,p=b<10,w=s<80?"#1A6B3C":s<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${o.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(o.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${o.level}</div>
          </td>
          <td style="font-size:12px">${o.wins}V / ${o.draws}N / ${o.losses}D</td>
          <td style="font-size:12px">🥇${o.trophies_top1} 🥈${o.trophies_top2} 🥉${o.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${r.emoji}</span>
              <span style="font-weight:700;color:${r.color}">${r.label}</span>
            </div>
            ${p?`<div style="font-size:10px;color:#e67e22">${b}/10 placement${b<10?` (${10-b} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${l}V ${x}N ${h}D${k!==null?` · ${k}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${a}</div>
            <div style="font-size:10px;color:${w}">RD ±${Math.round(s)}</div>
          </td>
          <td>
            ${o.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${o.id}" data-is-admin="${o.is_admin}">
              ${o.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(o=>{o.addEventListener("click",async()=>{const a=o.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${a?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:s}=await y.from("users").update({is_admin:a}).eq("id",o.dataset.toggleAdmin);s?n(s.message,"error"):(n("Rôle mis à jour ✅","success"),Pe(e,{toast:n}))})})}}async function qe(e,{toast:n}){const{data:t,error:i}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const u=t||[],d=u.filter(o=>o.status==="active").length,c=u.filter(o=>o.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${c}</div>
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
            ${u.map(o=>{var r,l,h,x;const a=(r=o.card)==null?void 0:r.player,s=a?`${a.firstname} ${a.surname_encoded}`:((l=o.card)==null?void 0:l.card_type)||"—",b={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${s}</b>${a?`<div style="font-size:10px;color:#999">${a.rarity} · ${a.job}</div>`:""}</td>
                <td style="font-size:12px">${((h=o.seller)==null?void 0:h.pseudo)||"—"}</td>
                <td style="font-size:12px">${((x=o.buyer)==null?void 0:x.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(o.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${b[o.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:a}=await y.from("market_listings").update({status:"cancelled"}).eq("id",o.dataset.cancel);a?n(a.message,"error"):(n("Annonce annulée","success"),qe(e,{toast:n}))})})}async function _t(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{Q("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{Q("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let u=`real_name,encoded_name,country_code,logo_url
`;t.forEach(d=>{u+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(_e).join(",")+`
`}),Q("clubs_export.csv",u),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let u=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(d=>{var c;u+=[d.firstname,d.surname_real,d.surname_encoded,d.country_code,((c=d.clubs)==null?void 0:c.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(_e).join(",")+`
`}),Q("players_export.csv",u),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const u=document.getElementById("clubs-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=$e(d);if(c.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let o=0,a=0;const s=[];for(const b of c){if(!b.real_name||!b.encoded_name||!b.country_code){a++,s.push(`Ligne ignorée (champs manquants): ${b.real_name||"?"}`);continue}const r={real_name:b.real_name,encoded_name:b.encoded_name.toUpperCase(),country_code:b.country_code.toUpperCase().slice(0,2),logo_url:b.logo_url||null},{error:l}=await y.from("clubs").upsert(r,{onConflict:"encoded_name"});l?(a++,s.push(`${b.encoded_name}: ${l.message}`)):o++}u.innerHTML=`<div style="color:var(--green)">✅ ${o} clubs importés</div>
        ${a>0?`<div style="color:#c0392b">❌ ${a} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${s.slice(0,10).join("<br>")}</div>`:""}`,n(`${o} clubs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const u=document.getElementById("players-import-result");u.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),c=$e(d);if(c.length===0){u.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:o}=await y.from("clubs").select("id,encoded_name"),a={};(o||[]).forEach(p=>{a[p.encoded_name.toUpperCase()]=p.id});let s=0,b=0;const r=[],l=["GK","DEF","MIL","ATT"],h=["normal","pepite","papyte","legende"],x=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],k=["rase","court","milong","long"];for(const p of c){if(!p.firstname||!p.surname_real||!p.country_code||!p.job){b++,r.push(`Ligne ignorée (champs requis manquants): ${p.firstname||"?"}`);continue}if(!l.includes(p.job)){b++,r.push(`${p.firstname}: job invalide "${p.job}"`);continue}const w=p.club_encoded_name&&a[p.club_encoded_name.toUpperCase()]||null,$={firstname:p.firstname,surname_real:p.surname_real,surname_encoded:p.surname_encoded||W(p.surname_real),country_code:p.country_code.toUpperCase().slice(0,2),club_id:w,job:p.job,job2:l.includes(p.job2)?p.job2:null,note_g:parseInt(p.note_g)||0,note_d:parseInt(p.note_d)||0,note_m:parseInt(p.note_m)||0,note_a:parseInt(p.note_a)||0,rarity:h.includes(p.rarity)?p.rarity:"normal",note_min:p.note_min!==""&&p.note_min!=null?parseInt(p.note_min):null,note_max:p.note_max!==""&&p.note_max!=null?parseInt(p.note_max):null,skin:x.includes(p.skin)?p.skin:"blanc",hair:E.includes(p.hair)?p.hair:"noir",hair_length:k.includes(p.hair_length)?p.hair_length:"court",sell_price:parseInt(p.sell_price)||0},{error:g}=await y.from("players").insert($);g?(b++,r.push(`${p.firstname} ${p.surname_real}: ${g.message}`)):s++}u.innerHTML=`<div style="color:var(--green)">✅ ${s} joueurs importés</div>
        ${b>0?`<div style="color:#c0392b">❌ ${b} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,n(`${s} joueurs importés`,"success")}catch(d){u.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""})}function _e(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function Q(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),u=document.createElement("a");u.href=i,u.download=e,u.click(),URL.revokeObjectURL(i)}function $e(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(c=>c.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",u=ke(t,i).map(c=>c.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let c=1;c<n.length;c++){if(!n[c].trim())continue;const o=ke(n[c],i),a={};u.forEach((s,b)=>{a[s]=(o[b]||"").trim()}),!Object.values(a).every(s=>!s)&&d.push(a)}return d}function ke(e,n=","){const t=[];let i="",u=!1;for(let d=0;d<e.length;d++){const c=e[d];u?c==='"'?e[d+1]==='"'?(i+='"',d++):u=!1:i+=c:c==='"'?u=!0:c===n?(t.push(i),i=""):i+=c}return t.push(i),t}const $t={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function kt(e,{toast:n}){const t=Object.keys(re);let i=t[0];const{data:u}=await y.from("formation_links_overrides").select("formation, links"),d={};(u||[]).forEach(b=>{d[b.formation]=b.links});let c=new Set;function o(b,r){return[b,r].sort().join("-")}function a(b){const r=d[b]||re[b]||[];c=new Set(r.map(([l,h])=>o(l,h)))}a(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(b=>`<option value="${b}" ${b===i?"selected":""}>${b}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${c.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function s(){const b=nt[i]||{},r=xe(i),l=320,h=400,x=22;function E(g){const m=b[g];return m?{x:m.x*l,y:m.y*h}:null}let k=`<svg width="${l}" height="${h}" viewBox="0 0 ${l} ${h}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([g,m],f)=>{const v=E(g),_=E(m);if(!v||!_)return;const L=o(g,m),I=c.has(L),z=I?"#3b82f6":"#999",T=I?.95:.35,M=I?4:3;k+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,k+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="${z}" stroke-width="${M}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${T}" pointer-events="none" data-line-key="${L}"/>`});for(const g of Object.keys(b)){const m=E(g);if(!m)continue;const f=g.replace(/\d+/,""),v=$t[f]||"#555";k+=`<circle cx="${m.x}" cy="${m.y}" r="${x}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,k+=`<text x="${m.x}" y="${m.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${g}</text>`}k+="</svg>",document.getElementById("field-wrap").innerHTML=k;const p=document.getElementById("links-list");p.innerHTML=r.map(([g,m])=>{const f=o(g,m),v=c.has(f);return`
        <button class="link-toggle" data-key="${f}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${g} ↔ ${m}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const w=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');w&&(w.textContent=`Liens (${c.size}/${r.length} actifs)`);function $(g){c.has(g)?c.delete(g):c.add(g),s()}e.querySelectorAll(".link-hit").forEach(g=>{g.addEventListener("click",()=>$(g.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(g=>{g.addEventListener("click",()=>$(g.dataset.key))})}s(),document.getElementById("formation-select").addEventListener("change",b=>{i=b.target.value,a(i),s()}),document.getElementById("reset-btn").addEventListener("click",()=>{const b=re[i]||[];c=new Set(b.map(([r,l])=>o(r,l))),s(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=xe(i).filter(([h,x])=>c.has(o(h,x))),{error:l}=await y.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(l){n(l.message,"error");return}d[i]=r,n(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const It=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Lt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Bt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function zt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("booster_configs").select("*").order("sort_order");let t=null,i=[],u=null;const d=()=>window.innerWidth<700;async function c(){if(!t){i=[];return}if(t!==u){const{data:r}=await y.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=r||[],u=t}}function o(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(r=>`
      <div class="booster-row" data-id="${r.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${r.id===t?"#f0f7f0":"#fff"}">
        ${r.image_url?`<img src="/icons/${r.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.name}</div>
          <div style="font-size:11px;color:#888">
            ${r.price_type==="credits"?(r.price_credits||0)+" cr.":r.price_type==="pub"?"Pub":"Gratuit"}
            · ${r.card_count||5} cartes · ${r.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${r.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function a(){const r=t?(n||[]).find(x=>x.id===t):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const l=i.reduce((x,E)=>x+Number(E.percentage||0),0),h=Math.abs(l-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${r.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${r.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${r.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${r.image_url?`<img src="/icons/${r.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Bt.map(x=>`<option value="${x.value}" ${r.price_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${r.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${r.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${r.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${r.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${r.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${r.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${r.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${r.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${h?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${l.toFixed(1)}% ${h?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((x,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${It.map(k=>`<option value="${k.value}" ${x.card_type===k.value?"selected":""}>${k.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Lt.map(k=>`<option value="${k.value}" ${(x.rarity||"")===k.value?"selected":""}>${k.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="1" max="10" value="${x.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="1" max="10" value="${x.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${x.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function s(r=!1){r||await c();const l=!t&&d(),h=t&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||l||!t?o():""}
      ${!d()||h?a():""}
    </div>`,b()}function b(){var h,x,E,k,p,w,$;const r=g=>e.querySelector(g);e.querySelectorAll(".booster-row").forEach(g=>{g.addEventListener("click",m=>{m.target.closest(".btn-delete")||(t=g.dataset.id,u=null,s())})}),(h=r("#btn-back"))==null||h.addEventListener("click",()=>{t=null,s()}),(x=r("#btn-new"))==null||x.addEventListener("click",async()=>{const g=prompt("Nom du nouveau booster :");if(!(g!=null&&g.trim()))return;const{data:m,error:f}=await y.from("booster_configs").insert({name:g.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(f){alert(f.message);return}n.push(m),t=m.id,u=null,s()}),e.querySelectorAll(".btn-delete").forEach(g=>{g.addEventListener("click",async m=>{if(m.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",g.dataset.id);const f=n.findIndex(v=>v.id===g.dataset.id);f>-1&&n.splice(f,1),t===g.dataset.id&&(t=null,u=null),s()})}),(E=r("#btn-cancel"))==null||E.addEventListener("click",()=>{t=null,s()}),(k=r("#f-price-type"))==null||k.addEventListener("change",g=>{const m=r("#credits-field");m&&(m.style.opacity=g.target.value!=="credits"?"0.4":"1")}),(p=r("#btn-pick-icon"))==null||p.addEventListener("click",async()=>{var m;const g=r("#icon-picker-grid");if(g){if(g.style.display!=="none"){g.style.display="none";return}g.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',g.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){g.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((m=r("#f-image-url"))==null?void 0:m.value)||"";g.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,g.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const z=r("#f-image-url");z&&(z.value=I.dataset.name),g.style.display="none"})})}catch(f){g.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${f.message}</div>`}}});function l(){e.querySelectorAll("[data-rate-idx]").forEach(g=>{var f,v,_,L,I;const m=Number(g.dataset.rateIdx);m>=0&&m<i.length&&(i[m].card_type=((f=g.querySelector(".rate-type"))==null?void 0:f.value)||"player",i[m].rarity=((v=g.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[m].note_min=Number((_=g.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[m].note_max=Number((L=g.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[m].percentage=Number((I=g.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(w=r("#btn-add-rate"))==null||w.addEventListener("click",()=>{l(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),s(!0)}),e.querySelectorAll(".btn-del-rate").forEach(g=>{g.addEventListener("click",()=>{l(),i.splice(Number(g.dataset.idx),1),s(!0)})}),($=r("#btn-save"))==null||$.addEventListener("click",async()=>{var L,I,z,T,M,N,D,P,q,O,j,F,A;const g=(n||[]).find(B=>B.id===t);if(!g)return;const m=[];e.querySelectorAll("[data-rate-idx]").forEach(B=>{var ue,me,ge,fe,be;const Z=Number(B.dataset.rateIdx);m.push({booster_id:t,card_type:((ue=B.querySelector(".rate-type"))==null?void 0:ue.value)||"player",rarity:((me=B.querySelector(".rate-rarity"))==null?void 0:me.value)||null,note_min:Number((ge=B.querySelector(".rate-note-min"))==null?void 0:ge.value)||null,note_max:Number((fe=B.querySelector(".rate-note-max"))==null?void 0:fe.value)||null,percentage:Number((be=B.querySelector(".rate-pct"))==null?void 0:be.value)||0,sort_order:Z});const R=m[m.length-1];R.rarity||(R.rarity=null),R.note_min||(R.note_min=null),R.note_max||(R.note_max=null)});const f=m.reduce((B,Z)=>B+Z.percentage,0);if(m.length&&Math.abs(f-100)>.5){alert(`La somme doit faire 100% (actuellement ${f.toFixed(1)}%)`);return}const v={name:((I=(L=r("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||g.name,image_url:((T=(z=r("#f-image-url"))==null?void 0:z.value)==null?void 0:T.trim())||null,price_type:(M=r("#f-price-type"))==null?void 0:M.value,price_credits:Number((N=r("#f-price-credits"))==null?void 0:N.value)||0,card_count:Number((D=r("#f-card-count"))==null?void 0:D.value)||5,is_active:((P=r("#f-active"))==null?void 0:P.checked)??g.is_active,allow_duplicates:((q=r("#f-allow-dup"))==null?void 0:q.checked)??!0,sort_order:Number((O=r("#f-sort"))==null?void 0:O.value)||0,max_per_user:(j=r("#f-max-per-user"))!=null&&j.value?Number(r("#f-max-per-user").value):null,available_from:((F=r("#f-available-from"))==null?void 0:F.value)||null,available_until:((A=r("#f-available-until"))==null?void 0:A.value)||null},{error:_}=await y.from("booster_configs").update(v).eq("id",t);if(_){alert(_.message);return}if(Object.assign(g,v),await y.from("booster_drop_rates").delete().eq("booster_id",t),m.length){const{error:B}=await y.from("booster_drop_rates").insert(m);if(B){alert(B.message);return}}i=m,u=t,alert("✅ Booster enregistré !"),s(!0)})}s()}const Oe=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function At(e){await se(e)}async function se(e){const{data:n,error:t}=await y.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(n||[]).map(i=>St(i)).join("")}
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
              ${Oe.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Ie(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ct(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const u=(n||[]).find(d=>d.id===i.dataset.edit);u&&i.addEventListener("click",()=>Ie(u))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await y.from("sell_price_configs").delete().eq("id",i.dataset.delete),await se(e))})})}function St(e){const n=Oe.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Ie(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Ct(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,u=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(u>d){alert("Note min doit être ≤ note max");return}const c={rarity:t,price:i,note_min:u,note_max:d,updated_at:new Date().toISOString()};let o;if(n?{error:o}=await y.from("sell_price_configs").update(c).eq("id",n):{error:o}=await y.from("sell_price_configs").insert(c),o){alert("Erreur : "+o.message);return}document.getElementById("config-form").style.display="none",await se(e)}async function Tt(e){await ce(e)}async function ce(e){const{data:n}=await y.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>Mt(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Le(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>jt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const i=(n||[]).find(u=>u.id===t.dataset.edit);i&&t.addEventListener("click",()=>Le(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await y.from("patch_notes").delete().eq("id",t.dataset.delete),await ce(e))})})}function Mt(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Le(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,n.scrollIntoView({behavior:"smooth"})}async function jt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),u=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,c=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const o=c?new Date(c).toISOString():new Date().toISOString(),a={title:t,description:i,image_url:u,is_published:d,published_at:o};let s;if(n?{error:s}=await y.from("patch_notes").update(a).eq("id",n):{error:s}=await y.from("patch_notes").insert(a),s){alert("Erreur : "+s.message);return}document.getElementById("article-form").style.display="none",await ce(e)}async function Rt(e){await Y(e)}async function Y(e){var b,r,l,h,x,E,k,p,w,$,g,m;const{data:n}=await y.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
        ${(n||[]).length===0?`
          <div style="text-align:center;padding:40px;color:#aaa;background:#fff;border-radius:12px">
            Aucune étape. Clique sur "+ Ajouter" pour commencer.
          </div>`:(n||[]).map(f=>Nt(f)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([f,v,_])=>`<button type="button" data-cmd="${v}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${f}</button>`).join("")}
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
    </div>`,(b=document.getElementById("ts-add"))==null||b.addEventListener("click",()=>Be(null,(n==null?void 0:n.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:f}=await y.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(f?"Erreur : "+f.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(l=document.getElementById("ts-cancel"))==null||l.addEventListener("click",Fe),(h=document.getElementById("ts-save"))==null||h.addEventListener("click",()=>Pt(e)),(x=document.getElementById("ts-preview-btn"))==null||x.addEventListener("click",Dt);const t=document.getElementById("ts-editor"),i=()=>{const f=document.getElementById("ts-content");f&&t&&(f.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const u=()=>{document.activeElement!==t&&(t==null||t.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(f=>{f.addEventListener("mousedown",v=>{v.preventDefault(),u();const _=f.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(k=document.getElementById("ts-insert-color"))==null||k.addEventListener("mousedown",f=>{f.preventDefault(),u();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(p=document.getElementById("ts-clear-format"))==null||p.addEventListener("mousedown",f=>{f.preventDefault(),u(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),c=document.getElementById("ts-img-preview"),o=document.getElementById("ts-img-preview-el"),a=document.getElementById("ts-img-picker-grid"),s=()=>{var v;const f=(v=d==null?void 0:d.value)==null?void 0:v.trim();if(f){const _="/";o.src=`${_}icons/${f}`,c.style.display="block"}else c.style.display="none"};d==null||d.addEventListener("input",s),(w=document.getElementById("ts-img-clear"))==null||w.addEventListener("click",()=>{d&&(d.value=""),c.style.display="none",a.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(a.style.display!=="none"){a.style.display="none";return}a.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',a.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){a.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";a.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",a.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),s(),a.style.display="none"})})}catch(f){a.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+f.message+"</div>"}}),(g=document.getElementById("ts-color"))==null||g.addEventListener("input",f=>{const v=document.getElementById("ts-color-hex");v&&(v.value=f.target.value)}),(m=document.getElementById("ts-color-hex"))==null||m.addEventListener("input",f=>{const v=f.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const _=document.getElementById("ts-color");_&&(_.value=v)}}),e.querySelectorAll("[data-edit]").forEach(f=>{const v=(n||[]).find(_=>_.id===f.dataset.edit);v&&f.addEventListener("click",()=>Be(v))}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await y.from("tutorial_steps").delete().eq("id",f.dataset.delete),Y(e))})}),e.querySelectorAll("[data-toggle]").forEach(f=>{f.addEventListener("click",async()=>{const v=(n||[]).find(_=>_.id===f.dataset.toggle);v&&(await y.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),Y(e))})}),e.querySelectorAll("[data-up]").forEach(f=>{f.addEventListener("click",async()=>{const v=n||[],_=v.findIndex(L=>L.id===f.dataset.up);_<=0||(await Promise.all([y.from("tutorial_steps").update({step_order:v[_-1].step_order}).eq("id",v[_].id),y.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_-1].id)]),Y(e))})}),e.querySelectorAll("[data-down]").forEach(f=>{f.addEventListener("click",async()=>{const v=n||[],_=v.findIndex(L=>L.id===f.dataset.down);_<0||_>=v.length-1||(await Promise.all([y.from("tutorial_steps").update({step_order:v[_+1].step_order}).eq("id",v[_].id),y.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_+1].id)]),Y(e))})})}function Nt(e){return`
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
  </div>`}function Be(e,n=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const u=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=u);const c=document.getElementById("ts-img-preview"),o=document.getElementById("ts-img-preview-el");if(u&&c&&o){const a="/";o.src=`${a}icons/${u}`,c.style.display="block"}else c&&(c.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Fe(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Dt(){var s,b;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",u=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(b=(s=document.getElementById("ts-image"))==null?void 0:s.value)==null?void 0:b.trim(),o=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",a=document.getElementById("ts-preview-area");a.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${u}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${n}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${o}
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${u};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,a.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),a.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function Pt(e){var r,l;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),u=document.getElementById("ts-editor"),d=(u?u.innerHTML:document.getElementById("ts-content").value).trim(),c=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",o=parseInt(document.getElementById("ts-order").value)||0,a=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const s={emoji:t,title:i,content:d,color:c,step_order:o,is_active:a,image_url:((l=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:l.trim())||null};let b;if(n?{error:b}=await y.from("tutorial_steps").update(s).eq("id",n):{error:b}=await y.from("tutorial_steps").insert(s),b){alert("Erreur : "+b.message);return}Fe(),Y(e)}const qt="/",He="#E87722",Ot=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Ft(e){await pe(e)}async function pe(e){var i,u,d,c;const[{data:n},{data:t}]=await Promise.all([y.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),y.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(n||[]).map(o=>Ht(o)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(t||[]).map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${Ot.map(([o,a])=>`<option value="${o}">${a} (${o})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>ze(null)),(u=document.getElementById("st-cancel"))==null||u.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>Ut(e)),(c=document.getElementById("st-preview-btn"))==null||c.addEventListener("click",()=>oe()),["st-name","st-club","st-country","st-image"].forEach(o=>{var a,s;(a=document.getElementById(o))==null||a.addEventListener("input",oe),(s=document.getElementById(o))==null||s.addEventListener("change",oe)}),e.querySelectorAll("[data-edit]").forEach(o=>{const a=(n||[]).find(s=>s.id===o.dataset.edit);a&&o.addEventListener("click",()=>ze(a))}),e.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await y.from("stadium_definitions").delete().eq("id",o.dataset.delete),pe(e))})})}function Ht(e){var t,i;const n=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${He};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${n}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function ze(e,n){var i,u;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",oe((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(u=e==null?void 0:e.club)==null?void 0:u.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function oe(){var s,b,r,l,h,x,E;const e=((s=document.getElementById("st-name"))==null?void 0:s.value)||"NOM DU STADE",n=(r=(b=document.getElementById("st-image"))==null?void 0:b.value)==null?void 0:r.trim(),t=(h=(l=document.getElementById("st-country"))==null?void 0:l.value)==null?void 0:h.trim(),i=document.getElementById("st-club"),u=(i==null?void 0:i.selectedIndex)||0,d=i&&u>0?i.options[u].text:"",c=((E=(x=i==null?void 0:i.options[u])==null?void 0:x.getAttribute)==null?void 0:E.call(x,"data-logo"))||"";let o;n?o=`<img src="${qt}icons/${n}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:c?o=`<img src="${c}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?o=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:o='<div style="font-size:36px;text-align:center">🏟️</div>';const a=d||t||"—";document.getElementById("st-preview-card").innerHTML=Gt(e,o,a,!0)}function Gt(e,n,t,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${He},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${n}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function Ut(e){const n=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,u=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const c={name:t,club_id:i,country_code:u,image_url:d},{error:o}=n?await y.from("stadium_definitions").update(c).eq("id",n):await y.from("stadium_definitions").insert(c);if(o){alert("Erreur : "+o.message);return}document.getElementById("st-form").style.display="none",pe(e)}const G=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],U=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function Vt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],u=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,c=l=>e.querySelector(l);function o(l,h=130){if(!l)return"";const x=G.find($=>$.value===l.gc_type)||G[0],E=U.find($=>$.value===l.color)||U[0],k=Math.round(h*.55),p=Math.round(h*.15),w=Math.round(h*.3);return`<div style="width:${h}px;height:${Math.round(h*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${x.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${p}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(h/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${l.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${l.image_url?`<img src="/icons/${l.image_url}" style="max-height:${k}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(h*.3)}px">${x.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${w}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(h/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(l.effect||"").slice(0,60)}${(l.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function a(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(l=>{const h=G.find(E=>E.value===l.gc_type)||G[0],x=U.find(E=>E.value===l.color)||U[0];return`
        <div class="gc-row" data-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${x.hex};background:${h.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${l.image_url?`<img src="/icons/${l.image_url}" style="width:28px;height:28px;object-fit:contain">`:h.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</div>
            <div style="font-size:11px;color:#888">${h.label} · ${l.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${l.id}" data-active="${l.is_active}"
              style="background:${l.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${l.is_active?"#27ae60":"#e74c3c"};color:${l.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${l.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${l.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function s(){const l=t?(n||[]).find(x=>x.id===t):null;if(!l)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const h=G.find(x=>x.value===l.gc_type)||G[0];return U.find(x=>x.value===l.color)||U[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${h.bg};border-radius:12px">
        ${o(l,d()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${l.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${l.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${G.map(x=>`<option value="${x.value}" ${l.gc_type===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${U.map(x=>`<option value="${x.value}" ${l.color===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${l.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${l.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${l.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(x=>`<option value="${x.value}" ${(l.effect_type||"BOOST_STAT")===x.value?"selected":""}>${x.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const x=l.effect_params||{},E=i.find(k=>k.value===(l.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${E.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${x.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${x.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(x.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${x.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${E.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${u.map(k=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${k}" ${!x.roles||x.roles.includes(k)?"checked":""}> ${k}
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
      ${!d()||!t?a():""}
      ${!d()||t?s():""}
    </div>`,r()}function r(){var l,h,x,E,k;e.querySelectorAll(".gc-row").forEach(p=>{p.addEventListener("click",w=>{w.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=p.dataset.id,b())})}),(l=c("#btn-gc-back"))==null||l.addEventListener("click",()=>{t=null,b()}),(h=c("#btn-cancel-gc"))==null||h.addEventListener("click",()=>{t=null,b()}),(x=c("#btn-new-gc"))==null||x.addEventListener("click",async()=>{const p=prompt("Nom de la carte Game Changer :");if(!(p!=null&&p.trim()))return;const{data:w,error:$}=await y.from("gc_definitions").insert({name:p.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}n.push(w),t=w.id,b()}),e.querySelectorAll(".btn-toggle-gc").forEach(p=>{p.addEventListener("click",async w=>{w.stopPropagation();const $=p.dataset.active!=="true";await y.from("gc_definitions").update({is_active:$}).eq("id",p.dataset.id);const g=n.find(m=>m.id===p.dataset.id);g&&(g.is_active=$),b()})}),e.querySelectorAll(".btn-delete-gc").forEach(p=>{p.addEventListener("click",async w=>{if(w.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",p.dataset.id);const $=n.findIndex(g=>g.id===p.dataset.id);$>-1&&n.splice($,1),t===p.dataset.id&&(t=null),b()})}),(E=c("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var w;const p=c("#gc-icon-picker");if(p){if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',p.style.display="block";try{const g=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),m=Array.isArray(g)?g.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!m.length){p.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const f=((w=c("#gc-image-url"))==null?void 0:w.value)||"";p.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${m.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===f?"#7a28b8":"#ddd"};background:${v.name===f?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,p.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const _=c("#gc-image-url");_&&(_.value=v.dataset.name),p.style.display="none"})})}catch($){p.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(k=c("#btn-save-gc"))==null||k.addEventListener("click",async()=>{var v,_,L,I,z,T,M,N,D,P,q,O,j,F;const p=n.find(A=>A.id===t);if(!p)return;const w=i.find(A=>{var B;return A.value===(((B=c("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT")})||i[0],$=w.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(A=>A.value):null,g={...w.hasValue?{value:Number((v=c("#gc-p-value"))==null?void 0:v.value)||2}:{},...w.hasCount?{count:Number((_=c("#gc-p-count"))==null?void 0:_.value)||1}:{},...w.hasTarget?{target:((L=c("#gc-p-target"))==null?void 0:L.value)||"home"}:{},...w.hasRoles?{roles:$!=null&&$.length?$:null}:{}},m={name:((z=(I=c("#gc-name"))==null?void 0:I.value)==null?void 0:z.trim())||p.name,effect:((M=(T=c("#gc-effect"))==null?void 0:T.value)==null?void 0:M.trim())||null,image_url:((D=(N=c("#gc-image-url"))==null?void 0:N.value)==null?void 0:D.trim())||null,gc_type:((P=c("#gc-type"))==null?void 0:P.value)||"game_changer",color:((q=c("#gc-color"))==null?void 0:q.value)||"purple",sort_order:Number((O=c("#gc-sort"))==null?void 0:O.value)||0,is_active:((j=c("#gc-active"))==null?void 0:j.checked)??p.is_active,effect_type:((F=c("#gc-effect-type"))==null?void 0:F.value)||"BOOST_STAT",effect_params:g},{error:f}=await y.from("gc_definitions").update(m).eq("id",t);if(f){alert(f.message);return}Object.assign(p,m),alert("✅ Carte enregistrée !"),b()})}b()}async function Kt(e,{toast:n,openModal:t,closeModal:i}){await J(e,{toast:n,openModal:t,closeModal:i})}async function J(e,n){var g;const{toast:t,openModal:i,closeModal:u}=n,[{data:d,error:c},{data:o}]=await Promise.all([y.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),y.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}const a=d||[],s=a.find(m=>m.is_active),b=(o||[]).filter(m=>(m.placement_matches||0)>=1),r=b.filter(m=>(m.placement_matches||0)>=10),l=["bronze","silver","gold","platinum","diamond","master"],h={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},x={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},k={};l.forEach(m=>{k[m]=0}),r.forEach(m=>{const f=m.rank_tier||"bronze";k[f]!==void 0&&k[f]++});const p=r.length?Math.round(r.reduce((m,f)=>m+(f.mmr||1e3),0)/r.length):0;function w(m){return m?new Date(m).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(m){const f=new Date;return m.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(m.end_at)<f?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${s?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${s.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${b.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${p}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(s.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${l.map(m=>{const f=k[m],v=r.length>0?Math.round(f/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[m]} ${h[m]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${x[m]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${f} (${v}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${a.length})</div>
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
              ${a.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':a.map(m=>{const f=Math.round((new Date(m.end_at)-new Date(m.start_at))/864e5),v=new Date(m.end_at)<new Date&&!m.is_active;return`
                    <tr>
                      <td><b>${m.name}</b></td>
                      <td style="font-size:12px">${w(m.start_at)}</td>
                      <td style="font-size:12px">${w(m.end_at)}</td>
                      <td style="font-size:12px">${f} jours</td>
                      <td>${$(m)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${m.id}">✏️ Modifier</button>
                        ${m.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${m.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${m.id}">▶ Activer</button>`}
                        ${v?`<button class="btn btn-danger btn-sm" data-delete="${m.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(g=document.getElementById("create-season-btn"))==null||g.addEventListener("click",()=>{Ae(null,{toast:t,openModal:i,closeModal:u,reload:()=>J(e,n)})}),e.querySelectorAll("[data-edit]").forEach(m=>{const f=a.find(v=>v.id==m.dataset.edit);m.addEventListener("click",()=>{Ae(f,{toast:t,openModal:i,closeModal:u,reload:()=>J(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(m=>{m.addEventListener("click",async()=>{const f=parseInt(m.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await y.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){t(v.message,"error");return}const{error:_}=await y.from("ranked_seasons").update({is_active:!0}).eq("id",f);if(_){t(_.message,"error");return}await y.from("users").update({current_season_id:f}).gt("placement_matches",0),t("Saison activée ✅","success"),J(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:f}=await y.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(m.dataset.deactivate));if(f){t(f.message,"error");return}t("Saison désactivée","success"),J(e,n)})}),e.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:f}=await y.from("ranked_seasons").delete().eq("id",parseInt(m.dataset.delete));if(f){t(f.message,"error");return}t("Saison supprimée","success"),J(e,n)})})}function Ae(e,{toast:n,openModal:t,closeModal:i,reload:u}){const d=!!e,c=new Date().toISOString().slice(0,16),o=new Date(Date.now()+90*864e5).toISOString().slice(0,16),a=e?new Date(e.start_at).toISOString().slice(0,16):c,s=e?new Date(e.end_at).toISOString().slice(0,16):o,b=(e==null?void 0:e.name)||"";t(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${b}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${a}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${s}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var k,p;const l=(k=document.getElementById("season-start"))==null?void 0:k.value,h=(p=document.getElementById("season-end"))==null?void 0:p.value,x=document.getElementById("season-duration");if(!l||!h||!x)return;const E=Math.round((new Date(h)-new Date(l))/864e5);x.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",x.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var l,h,x;(l=document.getElementById("season-start"))==null||l.addEventListener("input",r),(h=document.getElementById("season-end"))==null||h.addEventListener("input",r),r(),(x=document.getElementById("season-save-btn"))==null||x.addEventListener("click",async()=>{var f,v,_;const E=(f=document.getElementById("season-name"))==null?void 0:f.value.trim(),k=(v=document.getElementById("season-start"))==null?void 0:v.value,p=(_=document.getElementById("season-end"))==null?void 0:_.value,w=document.getElementById("season-error");if(!E){w.textContent="Le nom est requis.";return}if(!k){w.textContent="La date de début est requise.";return}if(!p){w.textContent="La date de fin est requise.";return}if(new Date(p)<=new Date(k)){w.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const g={name:E,start_at:new Date(k).toISOString(),end_at:new Date(p).toISOString()};let m;if(d?{error:m}=await y.from("ranked_seasons").update(g).eq("id",e.id):{error:m}=await y.from("ranked_seasons").insert({...g,is_active:!1}),m){w.textContent=m.message,$.disabled=!1,$.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}n(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),u()})},50)}it(Me);function Jt(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Yt(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function le(){document.getElementById("modal-overlay").classList.add("hidden")}const Se={dashboard:{title:"Dashboard",fn:ot},players:{title:"Joueurs & Cartes",fn:rt},clubs:{title:"Clubs",fn:gt},"card-builder":{title:"Card Builder",fn:vt},users:{title:"Managers",fn:Pe},market:{title:"Marché des transferts",fn:qe},"import-export":{title:"Import / Export CSV",fn:_t},formations:{title:"Formations & Liens",fn:kt},"boosters-config":{title:"Boosters",fn:zt},"sell-price":{title:"Prix vente directe",fn:At},journal:{title:"Journal",fn:Tt},tutorial:{title:"Tutoriel",fn:Rt},stadiums:{title:"Stades",fn:Ft},"gc-cards":{title:"Game Changers",fn:Vt},"ranked-seasons":{title:"Saisons Ranked",fn:Kt}};async function ae(e){document.querySelectorAll(".admin-sidebar nav a").forEach(u=>{u.classList.toggle("active",u.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=Se[e]||Se.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:Jt,openModal:Yt,closeModal:le,navigate:ae})}catch(u){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${u.message}</div>`,console.error(u)}}async function Wt(){var n;const{data:{session:e}}=await y.auth.getSession();e&&await Ce(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,u=document.getElementById("auth-error");if(u.textContent="",!t||!i){u.textContent="Remplissez tous les champs.";return}const{data:d,error:c}=await y.auth.signInWithPassword({email:t,password:i});if(c){u.textContent=c.message;return}await Ce(d.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",le),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&le()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),ae(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{ae(t.target.value)})}async function Ce(e){const{data:n,error:t}=await y.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,ae("dashboard")}Wt();
