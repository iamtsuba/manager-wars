import{s as y,e as H,g as Me,K as Ve,D as C,S as Ke,a as S,H as Je,R as Ye,b as je,r as We,c as Ze,E as Xe,d as Qe,N as et,M as tt,B as nt,f as it,F as le,h as ve,i as ot,j as at}from"./formation-links-DwOY6Nx_.js";async function rt(e){const[{count:n},{count:t},{count:i},{count:p},{count:s}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${Z("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${Z("🏟️","Clubs",t??"–","#D4A017")}
      ${Z("👥","Managers",i??"–","#7a28b8")}
      ${Z("📦","Cartes possédées",p??"–","#2a8f52")}
      ${Z("⚽","Matchs joués",s??"–","#bb2020")}
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
  `,window.adminNav=d=>{var a;(a=document.querySelector(`[data-page="${d}"]`))==null||a.click()}}function Z(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const ye={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},lt={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"};async function dt(e,n){await te(e,n)}async function te(e,n){const{toast:t,openModal:i,closeModal:p}=n,[{data:s,error:d},{data:a}]=await Promise.all([y.from("players").select("*, clubs(encoded_name,logo_url)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const o={};(a||[]).forEach(r=>{o[r.id]=r.encoded_name}),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="width:220px">
        <select id="filter-rarity" style="width:130px">
          <option value="">Toutes raretés</option>
          ${Object.entries(ye).map(([r,l])=>`<option value="${r}">${l}</option>`).join("")}
        </select>
        <select id="filter-job" style="width:120px">
          <option value="">Tous postes</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
      </div>
      <div style="display:flex;gap:8px">
        <span style="font-size:13px;color:var(--gray-600);align-self:center" id="count-label">${s.length} joueur(s)</span>
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
  `,c(s);function c(r){document.getElementById("count-label").textContent=`${r.length} joueur(s)`,document.getElementById("players-tbody").innerHTML=r.map(l=>{var h;return`
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
          <span style="background:${lt[l.rarity]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
            ${ye[l.rarity]||l.rarity}
          </span>
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" data-edit="${l.id}">✏️</button>
          <button class="btn btn-danger btn-sm" data-del="${l.id}">🗑️</button>
        </td>
      </tr>
    `}).join(""),document.querySelectorAll("[data-edit]").forEach(l=>{l.addEventListener("click",()=>{const h=s.find(f=>f.id===l.dataset.edit);he(h,a||[],{toast:t,openModal:i,closeModal:p,reload:()=>te(e,n)})})}),document.querySelectorAll("[data-del]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ? Les cartes associées resteront en jeu."))return;const{error:h}=await y.from("players").delete().eq("id",l.dataset.del);h?t(h.message,"error"):(t("Joueur supprimé","success"),te(e,n))})})}function u(){const r=document.getElementById("search-players").value.toLowerCase(),l=document.getElementById("filter-rarity").value,h=document.getElementById("filter-job").value;c(s.filter(f=>(!r||`${f.firstname} ${f.surname_encoded} ${f.surname_real}`.toLowerCase().includes(r))&&(!l||f.rarity===l)&&(!h||f.job===h)))}document.getElementById("search-players").addEventListener("input",u),document.getElementById("filter-rarity").addEventListener("change",u),document.getElementById("filter-job").addEventListener("change",u),document.getElementById("add-player-btn").addEventListener("click",()=>{he(null,a||[],{toast:t,openModal:i,closeModal:p,reload:()=>te(e,n)})})}function he(e,n,{toast:t,openModal:i,closeModal:p,reload:s}){const d=!!e,a='<option value="">— Club —</option>'+n.map(o=>`<option value="${o.id}" ${(e==null?void 0:e.club_id)===o.id?"selected":""}>${o.encoded_name}</option>`).join("");i(d?`Modifier ${e.firstname} ${e.surname_encoded}`:"Nouveau joueur",`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
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
          ${["MA","FR","AR","PT","BR","ES","DE","GB","IT","CM","SN","NG","DK","NL","BE","CI","AL","HR","RS","TR"].map(o=>`<option value="${o}" ${(e==null?void 0:e.country_code)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Club</label><select id="pm-club">${a}</select></div>
      <div><label>Poste principal</label>
        <select id="pm-job">
          ${["GK","DEF","MIL","ATT"].map(o=>`<option value="${o}" ${(e==null?void 0:e.job)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Poste 2</label>
        <select id="pm-job2">
          <option value="">Aucun</option>
          ${["GK","DEF","MIL","ATT"].map(o=>`<option value="${o}" ${(e==null?void 0:e.job2)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Rareté</label>
        <select id="pm-rarity">
          ${["normal","pepite","papyte","legende"].map(o=>`<option value="${o}" ${(e==null?void 0:e.rarity)===o?"selected":""}>${o}</option>`).join("")}
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
          ${["blanc","metisse","typ","noir"].map(o=>`<option value="${o}" ${(e==null?void 0:e.skin)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Cheveux</label>
        <select id="pm-hair">
          ${["blond","marron","noir","chauve"].map(o=>`<option value="${o}" ${(e==null?void 0:e.hair)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Longueur</label>
        <select id="pm-hlen">
          ${["rase","court","milong","long"].map(o=>`<option value="${o}" ${(e==null?void 0:e.hair_length)===o?"selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div><label>Prix vente (crédits)</label><input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}"></div>
    </div>`,`<button class="btn btn-ghost" id="pm-cancel">Annuler</button>
     <button class="btn btn-primary" id="pm-save">${d?"Enregistrer":"Créer"}</button>`),document.getElementById("pm-cancel").addEventListener("click",p),document.getElementById("pm-encode-btn").addEventListener("click",()=>{document.getElementById("pm-enc").value=H(document.getElementById("pm-real").value)}),document.getElementById("pm-save").addEventListener("click",async()=>{const o={firstname:document.getElementById("pm-fn").value.trim(),surname_real:document.getElementById("pm-real").value.trim(),surname_encoded:document.getElementById("pm-enc").value.trim(),country_code:document.getElementById("pm-country").value,club_id:document.getElementById("pm-club").value||null,job:document.getElementById("pm-job").value,job2:document.getElementById("pm-job2").value||null,rarity:document.getElementById("pm-rarity").value,note_g:parseInt(document.getElementById("pm-g").value)||0,note_d:parseInt(document.getElementById("pm-d").value)||0,note_m:parseInt(document.getElementById("pm-m").value)||0,note_a:parseInt(document.getElementById("pm-a").value)||0,note_min:parseInt(document.getElementById("pm-nmin").value)||null,note_max:parseInt(document.getElementById("pm-nmax").value)||null,skin:document.getElementById("pm-skin").value,hair:document.getElementById("pm-hair").value,hair_length:document.getElementById("pm-hlen").value,sell_price:parseInt(document.getElementById("pm-price").value)||0};if(!o.firstname||!o.surname_real||!o.surname_encoded){t("Remplissez les champs obligatoires","error");return}const{error:c}=d?await y.from("players").update({...o,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(o);if(c){t(c.message,"error");return}t(d?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),s()})}const st={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},ct={JP:"raide",KR:"raide",CN:"raide",VN:"raide",TH:"raide",ID:"raide",PH:"raide",MY:"raide",SG:"raide",NG:"afro",SN:"afro",CI:"afro",CM:"afro",GH:"afro",ML:"afro",GN:"afro",BF:"afro",TG:"afro",BJ:"afro",GA:"afro",CG:"afro",CD:"afro",AO:"afro",MZ:"afro",KE:"afro",ET:"afro"},pt=["court","mi-long","pompadour","fade","raide","afro","boucle","ondule"],ut=["rase","court","moyen"],Re=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Ne(e){return st[e]||"blanc"}function mt(e){const n=ct[e];if(n)return n;const t=Ne(e);return t==="noir"?"afro":t==="typ"?"raide":pt[Math.floor(Math.random()*4)]}function q(e,n){return Math.floor(Math.random()*(n-e+1))+e}function Q(e){return e[Math.floor(Math.random()*e.length)]}function gt(e){const n=Re.filter(t=>t!==e);return Q(n)}function ft(e,n){const t=[{job:"GK",count:2},{job:"DEF",count:8},{job:"MIL",count:6},{job:"ATT",count:4}],i={ATT:"MIL",MIL:"DEF",DEF:"MIL",GK:null},p=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],s=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],d=[];let a=0;return t.forEach(({job:o,count:c})=>{for(let u=0;u<c;u++){a++;const l=a<=10?n:gt(n),h=Ne(l),f=mt(l),w=Q(ut),E=q(1,20),m=o!=="GK"&&Math.random()>.4,_=m?Math.max(1,E-q(1,4)):null,$={note_g:q(1,8),note_d:q(1,8),note_m:q(1,8),note_a:q(1,8)};o==="GK"&&($.note_g=E),o==="DEF"&&($.note_d=E,_&&($.note_m=_)),o==="MIL"&&($.note_m=E,_&&($.note_d=_)),o==="ATT"&&($.note_a=E,_&&($.note_m=_)),d.push({job:o,job2:m?i[o]:null,firstname:Q(p),surname_real:Q(s),surname_encoded:H(Q(s).toUpperCase()),country_code:l,club_id:e,...$,skin:h,hair:f,hair_length:w,rarity:"normal"})}}),d}function De(e){return{style:e.kit_style||C.style,color1:e.kit_color1||C.color1,color2:e.kit_color2||C.color2,shorts:e.kit_shorts||C.shorts,socks:e.kit_socks||C.socks}}let ne=[];async function bt(e,n){await se(e,n)}async function se(e,n){const{data:t,error:i}=await y.from("clubs").select("*").order("real_name");if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ne=t||[],xt(e,n)}function xt(e,n){const{toast:t,openModal:i,closeModal:p}=n;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,s(ne),document.getElementById("search-clubs").addEventListener("input",d=>{const a=d.target.value.toLowerCase();s(ne.filter(o=>o.real_name.toLowerCase().includes(a)||o.encoded_name.toLowerCase().includes(a)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ee(null,e,n));function s(d){const a=document.getElementById("clubs-list");if(!d.length){a.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}a.innerHTML=d.map(o=>{const c=De(o),u=Me(c,o.id).replace("<svg ",'<svg style="width:40px;height:48px" ');return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${c.color1},${c.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
          </div>
          ${u}
          <div style="display:flex;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),a.querySelectorAll("[data-edit]").forEach(o=>{const c=ne.find(u=>u.id===o.dataset.edit);o.addEventListener("click",()=>Ee(c,e,n))}),a.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:c}=await y.from("clubs").delete().eq("id",o.dataset.del);c?t(c.message,"error"):(t("Club supprimé","success"),se(e,n))})})}}function Ee(e,n,t){const{toast:i,openModal:p,closeModal:s}=t,d=!!e,a=e?De(e):{...C},o=Object.entries(Ve).map(([u,r])=>`<option value="${u}" ${a.style===u?"selected":""}>${r.label}</option>`).join(""),c=Re.map(u=>`<option value="${u}" ${((e==null?void 0:e.country_code)||"FR")===u?"selected":""}>${u}</option>`).join("");p(d?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

      <!-- Identité -->
      <div class="form-group">
        <label>Nom du club *</label>
        <input id="m-real" value="${(e==null?void 0:e.real_name)||""}" placeholder="Paris Saint-Germain">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="form-group">
          <label>Nom encodé *</label>
          <div style="display:flex;gap:6px">
            <input id="m-encoded" value="${(e==null?void 0:e.encoded_name)||""}" placeholder="PSG" style="flex:1;text-transform:uppercase;font-family:monospace">
            <button class="btn btn-ghost btn-sm" id="auto-encode-btn" title="Auto-générer">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Pays *</label>
          <select id="m-country" style="width:100%">
            <option value="">-- Choisir --</option>
            ${c}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Logo (URL)</label>
        <input id="m-logo" value="${(e==null?void 0:e.logo_url)||""}" placeholder="https://...">
      </div>

      <!-- Tenue -->
      <div style="border-top:1px solid var(--gray-200);padding-top:12px">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">👕 Tenue</div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <!-- Contrôles -->
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <div class="form-group">
              <label>Style</label>
              <select id="m-kit-style" style="width:100%">${o}</select>
            </div>
            ${[["Couleur principale","m-kit-color1",a.color1],["Couleur secondaire","m-kit-color2",a.color2],["Short","m-kit-shorts",a.shorts],["Chaussettes","m-kit-socks",a.socks]].map(([u,r,l])=>`
              <div class="form-group">
                <label>${u}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${r}" value="${l}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${r}-txt" value="${l}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
                </div>
              </div>`).join("")}
          </div>
          <!-- Aperçu -->
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div id="kit-preview-wrap" style="background:#f0f0f0;border-radius:12px;padding:14px;border:1.5px solid var(--gray-200);min-width:60px;text-align:center"></div>
            <div style="font-size:10px;color:var(--gray-600)">Aperçu</div>
          </div>
        </div>
      </div>

      <!-- Génération auto (création uniquement) -->
      ${d?"":`
      <div style="border-top:1px solid var(--gray-200);padding-top:12px;display:flex;flex-direction:column;gap:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:2px">⚡ Génération automatique</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-stadium" checked style="width:16px;height:16px">
          🏟️ Créer la carte Stade du club automatiquement
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px;background:rgba(26,107,60,0.06);border-radius:8px;border:1px solid rgba(26,107,60,0.2)">
          <input type="checkbox" id="m-gen-squad" style="width:16px;height:16px">
          ⚽ Générer 20 joueurs (2 GK · 8 DEF · 6 MIL · 4 ATT)
        </label>
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 1–20 · physique adapté au pays</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${d?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var h,f,w;X(),["m-kit-color1","m-kit-color2","m-kit-shorts","m-kit-socks"].forEach(E=>{const m=document.getElementById(E),_=document.getElementById(E+"-txt");!m||!_||(m.addEventListener("input",()=>{_.value=m.value,X()}),_.addEventListener("input",()=>{const $=_.value.trim();/^#[0-9a-fA-F]{6}$/.test($)&&(m.value=$,X())}),_.addEventListener("change",()=>{let $=_.value.trim();$.startsWith("#")||($="#"+$),/^#[0-9a-fA-F]{6}$/.test($)&&(m.value=$,_.value=$,X())}))}),(h=document.getElementById("m-kit-style"))==null||h.addEventListener("change",X);const u=document.getElementById("m-real"),r=document.getElementById("m-encoded");function l(){if(!u||!r||r.value)return;const E=u.value.trim().split(/\s+/),m=E.length===1?E[0].toUpperCase().slice(0,6):E.filter(_=>_.length>2).map(_=>_[0].toUpperCase()).join("")||E[0].toUpperCase().slice(0,4);r.value=m}u==null||u.addEventListener("input",l),(f=document.getElementById("auto-encode-btn"))==null||f.addEventListener("click",()=>{r&&(r.value=""),l()}),(w=document.getElementById("m-save"))==null||w.addEventListener("click",()=>vt(e,d,n,t))},50)}function Pe(){var e,n,t,i,p;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",shorts:((i=document.getElementById("m-kit-shorts"))==null?void 0:i.value)||"#111111",socks:((p=document.getElementById("m-kit-socks"))==null?void 0:p.value)||"#ffffff"}}function X(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Me(Pe(),"modal"))}async function vt(e,n,t,i){var m,_,$,v,g,b;const{toast:p,closeModal:s}=i,d=document.getElementById("m-error"),a=document.getElementById("m-save"),o=(m=document.getElementById("m-real"))==null?void 0:m.value.trim(),c=(_=document.getElementById("m-encoded"))==null?void 0:_.value.trim().toUpperCase(),u=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),r=((v=document.getElementById("m-logo"))==null?void 0:v.value.trim())||null,l=((g=document.getElementById("m-gen-stadium"))==null?void 0:g.checked)??!1,h=((b=document.getElementById("m-gen-squad"))==null?void 0:b.checked)??!1,f=Pe();if(!o){d.textContent="Le nom du club est requis.";return}if(!c){d.textContent="Le nom encodé est requis.";return}if(!u){d.textContent="Le pays est requis.";return}a.disabled=!0,a.textContent="Enregistrement…";const w={real_name:o,encoded_name:c,country_code:u,logo_url:r,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_shorts:f.shorts,kit_socks:f.socks};let E=e==null?void 0:e.id;if(n){const{error:x}=await y.from("clubs").update(w).eq("id",E);if(x){d.textContent=x.message,a.disabled=!1,a.textContent="💾 Enregistrer";return}}else{const{data:x,error:k}=await y.from("clubs").insert(w).select().single();if(k){d.textContent=k.message,a.disabled=!1,a.textContent="✅ Créer le club";return}if(E=x.id,l){a.textContent="🏟️ Création du stade…";const{data:L,error:I}=await y.from("stadium_definitions").insert({name:`Stade de ${o}`,club_id:E,country_code:u}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):L&&await y.from("cards").insert({card_type:"stadium",stadium_id:L.id})}if(h){a.textContent="⚽ Génération des joueurs…";const L=ft(E,u);let I=0;for(const z of L){const{data:T,error:A}=await y.from("players").insert(z).select().single();if(A){console.error("[GenSquad] Erreur joueur:",A.message,A.details,"payload:",JSON.stringify(z)),d.textContent="Erreur joueur: "+A.message;continue}I++,await y.from("cards").insert({card_type:"player",player_id:T.id})}console.log("[GenSquad] Créés:",I,"/",L.length)}}p(n?"Club modifié ✅":"Club créé ✅","success"),s(),se(t,i)}const yt=["normal","pepite","papyte","legende"],we=["GK","DEF","MIL","ATT"],ht=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let D={...S},ie=[];async function Et(e,{toast:n}){const{data:t}=await y.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ie=t||[],D={...S},e.innerHTML=kt(ie),_t(e,ie,n),j()}function _e(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=H(e))}function wt(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=ie.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||C.style,color1:n.kit_color1||C.color1,color2:n.kit_color2||C.color2,shorts:n.kit_shorts||C.shorts,socks:n.kit_socks||C.socks}:{...C}}function j(){var l,h,f,w;const e=E=>{var m;return((m=document.getElementById(E))==null?void 0:m.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||H(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((h=(l=document.getElementById("cb-club"))==null?void 0:l.selectedOptions[0])==null?void 0:h.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=wt(),i=document.getElementById("cb-club"),p=((w=(f=i==null?void 0:i.selectedOptions[0])==null?void 0:f.dataset)==null?void 0:w.logo)||null,s=je(D,t,120),d=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,a=We(n,{portraitUrl:d,clubLogoUrl:p,showNotes:!0}),o=document.getElementById("card-preview");o&&(o.innerHTML=a);const c=document.getElementById("avatar-preview-wrap");c&&(c.innerHTML=s);const u=e("cb-surname-real"),r=document.getElementById("encode-summary");r&&u&&(r.textContent=`${e("cb-firstname")} ${u} → ${e("cb-firstname")} ${n.surname_encoded}`)}function qe(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};D={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function _t(e,n,t){var p,s,d,a,o;e.querySelectorAll("input,select").forEach(c=>{c.addEventListener("input",j),c.addEventListener("change",j)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(c=>{var u;(u=document.getElementById(c))==null||u.addEventListener("change",()=>{qe(),j()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{_e(),j()}),(s=document.getElementById("btn-encode"))==null||s.addEventListener("click",()=>{_e(),j()}),(d=document.getElementById("cb-club"))==null||d.addEventListener("change",j),(a=document.getElementById("btn-save-player"))==null||a.addEventListener("click",()=>$t(t)),(o=document.getElementById("btn-reset"))==null||o.addEventListener("click",()=>{e.querySelectorAll("input").forEach(c=>c.value=""),e.querySelectorAll("select").forEach(c=>c.selectedIndex=0),D={...S},i.forEach(c=>{const u=c.replace("av-",""),r=document.getElementById(c);r&&(r.value=S[u]||"")}),j()})}async function $t(e){const n=d=>{var a;return((a=document.getElementById(d))==null?void 0:a.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||H(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}qe();const p={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:D,skin:D.skin||"blanc",hair:D.hairColor||"marron",hair_length:"court"},{error:s}=await y.from("players").insert(p);if(s){e("Erreur: "+s.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_encoded}" enregistré !`,"success")}function kt(e){const n=ht.map(([c,u])=>`<option value="${c}">${u} (${c})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(c=>`<option value="${c.id}" data-logo="${c.logo_url||""}">${c.encoded_name}</option>`).join(""),i=we.map(c=>`<option value="${c}">${c}</option>`).join(""),p='<option value="">Aucun</option>'+we.map(c=>`<option value="${c}">${c}</option>`).join(""),s=yt.map(c=>`<option value="${c}">${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),d=(c,u,r)=>Object.entries(u).map(([l,h])=>`<option value="${l}" ${l===(r||"")?"selected":""}>${h.label}</option>`).join(""),a=Object.keys(Ke).map(c=>`<option value="${c}" ${c===S.skin?"selected":""}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join(""),o=Object.keys(Je).map(c=>`<option value="${c}" ${c===S.hairColor?"selected":""}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${s}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(c=>`
            <div style="background:${Ye[c]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${a}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${d("av-hair",Ze,S.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${o}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${d("av-eyebrows",Xe,S.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${d("av-eyes",Qe,S.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${d("av-nose",et,S.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${d("av-mouth",tt,S.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${d("av-beard",nt,S.beard)}</select>
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
  `}async function Oe(e,{toast:n}){const{data:t,error:i}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=t||[];e.innerHTML=`
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
  `,s(p),document.getElementById("search-users").addEventListener("input",d=>{const a=d.target.value.toLowerCase();s(p.filter(o=>{var c;return o.pseudo.toLowerCase().includes(a)||((c=o.club_name)==null?void 0:c.toLowerCase().includes(a))}))});function s(d){document.getElementById("users-tbody").innerHTML=d.map(a=>{const o=a.mmr??1e3,c=a.mmr_deviation??350,u=a.placement_matches??0,r=it(o),l=a.ranked_wins??0,h=a.ranked_losses??0,f=a.ranked_draws??0,w=l+h+f,E=w>0?Math.round(l/w*100):null,m=u<10,_=c<80?"#1A6B3C":c<150?"#e67e22":"#bb2020";return`
        <tr>
          <td>
            <div style="font-weight:700">${a.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${a.club_name||"—"}</div>
          </td>
          <td style="font-size:12px">
            <div>${(a.credits||0).toLocaleString("fr")} cr.</div>
            <div style="color:var(--gray-600)">Niv. ${a.level}</div>
          </td>
          <td style="font-size:12px">${a.wins}V / ${a.draws}N / ${a.losses}D</td>
          <td style="font-size:12px">🥇${a.trophies_top1} 🥈${a.trophies_top2} 🥉${a.trophies_top3}</td>
          <td style="font-size:12px">
            <div style="display:flex;align-items:center;gap:5px">
              <span style="font-size:16px">${r.emoji}</span>
              <span style="font-weight:700;color:${r.color}">${r.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${u}/10 placement${u<10?` (${10-u} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${l}V ${f}N ${h}D${E!==null?` · ${E}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${o}</div>
            <div style="font-size:10px;color:${_}">RD ±${Math.round(c)}</div>
          </td>
          <td>
            ${a.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${a.id}" data-is-admin="${a.is_admin}">
              ${a.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${o?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:c}=await y.from("users").update({is_admin:o}).eq("id",a.dataset.toggleAdmin);c?n(c.message,"error"):(n("Rôle mis à jour ✅","success"),Oe(e,{toast:n}))})})}}async function Fe(e,{toast:n}){const{data:t,error:i}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=t||[],s=p.filter(a=>a.status==="active").length,d=p.filter(a=>a.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${s}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${d}</div>
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
            ${p.map(a=>{var r,l,h,f;const o=(r=a.card)==null?void 0:r.player,c=o?`${o.firstname} ${o.surname_encoded}`:((l=a.card)==null?void 0:l.card_type)||"—",u={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${c}</b>${o?`<div style="font-size:10px;color:#999">${o.rarity} · ${o.job}</div>`:""}</td>
                <td style="font-size:12px">${((h=a.seller)==null?void 0:h.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=a.buyer)==null?void 0:f.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(a.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${u[a.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
                    ${a.status.toUpperCase()}
                  </span>
                </td>
                <td style="font-size:11px;color:#aaa">${new Date(a.listed_at).toLocaleDateString("fr")}</td>
                <td>
                  ${a.status==="active"?`<button class="btn btn-danger btn-sm" data-cancel="${a.id}">Annuler</button>`:""}
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:o}=await y.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);o?n(o.message,"error"):(n("Annonce annulée","success"),Fe(e,{toast:n}))})})}async function It(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{ee("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{ee("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;t.forEach(s=>{p+=[s.real_name,s.encoded_name,s.country_code,s.logo_url||""].map($e).join(",")+`
`}),ee("clubs_export.csv",p),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(s=>{var d;p+=[s.firstname,s.surname_real,s.surname_encoded,s.country_code,((d=s.clubs)==null?void 0:d.encoded_name)||"",s.job,s.job2||"",s.note_g,s.note_d,s.note_m,s.note_a,s.rarity,s.note_min??"",s.note_max??"",s.skin,s.hair,s.hair_length,s.sell_price].map($e).join(",")+`
`}),ee("players_export.csv",p),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),d=ke(s);if(d.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let a=0,o=0;const c=[];for(const u of d){if(!u.real_name||!u.encoded_name||!u.country_code){o++,c.push(`Ligne ignorée (champs manquants): ${u.real_name||"?"}`);continue}const r={real_name:u.real_name,encoded_name:u.encoded_name.toUpperCase(),country_code:u.country_code.toUpperCase().slice(0,2),logo_url:u.logo_url||null},{error:l}=await y.from("clubs").upsert(r,{onConflict:"encoded_name"});l?(o++,c.push(`${u.encoded_name}: ${l.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} clubs importés</div>
        ${o>0?`<div style="color:#c0392b">❌ ${o} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${c.slice(0,10).join("<br>")}</div>`:""}`,n(`${a} clubs importés`,"success")}catch(s){p.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const s=await i.text(),d=ke(s);if(d.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:a}=await y.from("clubs").select("id,encoded_name"),o={};(a||[]).forEach(m=>{o[m.encoded_name.toUpperCase()]=m.id});let c=0,u=0;const r=[],l=["GK","DEF","MIL","ATT"],h=["normal","pepite","papyte","legende"],f=["blanc","metisse","typ","noir"],w=["blond","marron","noir","chauve"],E=["rase","court","milong","long"];for(const m of d){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){u++,r.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!l.includes(m.job)){u++,r.push(`${m.firstname}: job invalide "${m.job}"`);continue}const _=m.club_encoded_name&&o[m.club_encoded_name.toUpperCase()]||null,$={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||H(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:_,job:m.job,job2:l.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:h.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:f.includes(m.skin)?m.skin:"blanc",hair:w.includes(m.hair)?m.hair:"noir",hair_length:E.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:v}=await y.from("players").insert($);v?(u++,r.push(`${m.firstname} ${m.surname_real}: ${v.message}`)):c++}p.innerHTML=`<div style="color:var(--green)">✅ ${c} joueurs importés</div>
        ${u>0?`<div style="color:#c0392b">❌ ${u} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,n(`${c} joueurs importés`,"success")}catch(s){p.innerHTML=`<span style="color:#c0392b">Erreur : ${s.message}</span>`}t.target.value=""})}function $e(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function ee(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function ke(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(d=>d.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",p=Ie(t,i).map(d=>d.trim().replace(/^\uFEFF/,"").toLowerCase()),s=[];for(let d=1;d<n.length;d++){if(!n[d].trim())continue;const a=Ie(n[d],i),o={};p.forEach((c,u)=>{o[c]=(a[u]||"").trim()}),!Object.values(o).every(c=>!c)&&s.push(o)}return s}function Ie(e,n=","){const t=[];let i="",p=!1;for(let s=0;s<e.length;s++){const d=e[s];p?d==='"'?e[s+1]==='"'?(i+='"',s++):p=!1:i+=d:d==='"'?p=!0:d===n?(t.push(i),i=""):i+=d}return t.push(i),t}const Lt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Bt(e,{toast:n}){const t=Object.keys(le);let i=t[0];const{data:p}=await y.from("formation_links_overrides").select("formation, links"),s={};(p||[]).forEach(u=>{s[u.formation]=u.links});let d=new Set;function a(u,r){return[u,r].sort().join("-")}function o(u){const r=s[u]||le[u]||[];d=new Set(r.map(([l,h])=>a(l,h)))}o(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(u=>`<option value="${u}" ${u===i?"selected":""}>${u}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${d.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function c(){const u=ot[i]||{},r=ve(i),l=320,h=400,f=22;function w(v){const g=u[v];return g?{x:g.x*l,y:g.y*h}:null}let E=`<svg width="${l}" height="${h}" viewBox="0 0 ${l} ${h}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;r.forEach(([v,g],b)=>{const x=w(v),k=w(g);if(!x||!k)return;const L=a(v,g),I=d.has(L),z=I?"#3b82f6":"#999",T=I?.95:.35,A=I?4:3;E+=`<line x1="${x.x}" y1="${x.y}" x2="${k.x}" y2="${k.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,E+=`<line x1="${x.x}" y1="${x.y}" x2="${k.x}" y2="${k.y}"
        stroke="${z}" stroke-width="${A}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${T}" pointer-events="none" data-line-key="${L}"/>`});for(const v of Object.keys(u)){const g=w(v);if(!g)continue;const b=v.replace(/\d+/,""),x=Lt[b]||"#555";E+=`<circle cx="${g.x}" cy="${g.y}" r="${f}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,E+=`<text x="${g.x}" y="${g.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${v}</text>`}E+="</svg>",document.getElementById("field-wrap").innerHTML=E;const m=document.getElementById("links-list");m.innerHTML=r.map(([v,g])=>{const b=a(v,g),x=d.has(b);return`
        <button class="link-toggle" data-key="${b}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${v} ↔ ${g}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const _=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');_&&(_.textContent=`Liens (${d.size}/${r.length} actifs)`);function $(v){d.has(v)?d.delete(v):d.add(v),c()}e.querySelectorAll(".link-hit").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))})}c(),document.getElementById("formation-select").addEventListener("change",u=>{i=u.target.value,o(i),c()}),document.getElementById("reset-btn").addEventListener("click",()=>{const u=le[i]||[];d=new Set(u.map(([r,l])=>a(r,l))),c(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const r=ve(i).filter(([h,f])=>d.has(a(h,f))),{error:l}=await y.from("formation_links_overrides").upsert({formation:i,links:r,updated_at:new Date().toISOString()});if(l){n(l.message,"error");return}s[i]=r,n(`Liens enregistrés pour ${i} (${r.length} actifs)`,"success")})}const zt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],At=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],St=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Ct(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("booster_configs").select("*").order("sort_order");let t=null,i=[],p=null;const s=()=>window.innerWidth<700;async function d(){if(!t){i=[];return}if(t!==p){const{data:r}=await y.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=r||[],p=t}}function a(){return`
    <div id="booster-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`}function o(){const r=t?(n||[]).find(f=>f.id===t):null;if(!r)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const l=i.reduce((f,w)=>f+Number(w.percentage||0),0),h=Math.abs(l-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${St.map(f=>`<option value="${f.value}" ${r.price_type===f.value?"selected":""}>${f.label}</option>`).join("")}
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

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((f,w)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${w}">
            <select class="rate-type" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${zt.map(E=>`<option value="${E.value}" ${f.card_type===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${w}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${At.map(E=>`<option value="${E.value}" ${(f.rarity||"")===E.value?"selected":""}>${E.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${w}" type="number" min="1" max="10" value="${f.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${w}" type="number" min="1" max="10" value="${f.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${w}" type="number" min="0.1" max="100" step="0.1" value="${f.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${w}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function c(r=!1){r||await d();const l=!t&&s(),h=t&&s();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!s()||l||!t?a():""}
      ${!s()||h?o():""}
    </div>`,u()}function u(){var h,f,w,E,m,_,$;const r=v=>e.querySelector(v);e.querySelectorAll(".booster-row").forEach(v=>{v.addEventListener("click",g=>{g.target.closest(".btn-delete")||(t=v.dataset.id,p=null,c())})}),(h=r("#btn-back"))==null||h.addEventListener("click",()=>{t=null,c()}),(f=r("#btn-new"))==null||f.addEventListener("click",async()=>{const v=prompt("Nom du nouveau booster :");if(!(v!=null&&v.trim()))return;const{data:g,error:b}=await y.from("booster_configs").insert({name:v.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(b){alert(b.message);return}n.push(g),t=g.id,p=null,c()}),e.querySelectorAll(".btn-delete").forEach(v=>{v.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",v.dataset.id);const b=n.findIndex(x=>x.id===v.dataset.id);b>-1&&n.splice(b,1),t===v.dataset.id&&(t=null,p=null),c()})}),(w=r("#btn-cancel"))==null||w.addEventListener("click",()=>{t=null,c()}),(E=r("#f-price-type"))==null||E.addEventListener("change",v=>{const g=r("#credits-field");g&&(g.style.opacity=v.target.value!=="credits"?"0.4":"1")}),(m=r("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var g;const v=r("#icon-picker-grid");if(v){if(v.style.display!=="none"){v.style.display="none";return}v.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',v.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(x)?x.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!k.length){v.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((g=r("#f-image-url"))==null?void 0:g.value)||"";v.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${k.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,v.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const z=r("#f-image-url");z&&(z.value=I.dataset.name),v.style.display="none"})})}catch(b){v.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${b.message}</div>`}}});function l(){e.querySelectorAll("[data-rate-idx]").forEach(v=>{var b,x,k,L,I;const g=Number(v.dataset.rateIdx);g>=0&&g<i.length&&(i[g].card_type=((b=v.querySelector(".rate-type"))==null?void 0:b.value)||"player",i[g].rarity=((x=v.querySelector(".rate-rarity"))==null?void 0:x.value)||null,i[g].note_min=Number((k=v.querySelector(".rate-note-min"))==null?void 0:k.value)||null,i[g].note_max=Number((L=v.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[g].percentage=Number((I=v.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(_=r("#btn-add-rate"))==null||_.addEventListener("click",()=>{l(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),c(!0)}),e.querySelectorAll(".btn-del-rate").forEach(v=>{v.addEventListener("click",()=>{l(),i.splice(Number(v.dataset.idx),1),c(!0)})}),($=r("#btn-save"))==null||$.addEventListener("click",async()=>{var L,I,z,T,A,G,U,V,K,J,Y,W,M;const v=(n||[]).find(B=>B.id===t);if(!v)return;const g=[];e.querySelectorAll("[data-rate-idx]").forEach(B=>{var me,ge,fe,be,xe;const re=Number(B.dataset.rateIdx);g.push({booster_id:t,card_type:((me=B.querySelector(".rate-type"))==null?void 0:me.value)||"player",rarity:((ge=B.querySelector(".rate-rarity"))==null?void 0:ge.value)||null,note_min:Number((fe=B.querySelector(".rate-note-min"))==null?void 0:fe.value)||null,note_max:Number((be=B.querySelector(".rate-note-max"))==null?void 0:be.value)||null,percentage:Number((xe=B.querySelector(".rate-pct"))==null?void 0:xe.value)||0,sort_order:re});const P=g[g.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const b=g.reduce((B,re)=>B+re.percentage,0);if(g.length&&Math.abs(b-100)>.5){alert(`La somme doit faire 100% (actuellement ${b.toFixed(1)}%)`);return}const x={name:((I=(L=r("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||v.name,image_url:((T=(z=r("#f-image-url"))==null?void 0:z.value)==null?void 0:T.trim())||null,price_type:(A=r("#f-price-type"))==null?void 0:A.value,price_credits:Number((G=r("#f-price-credits"))==null?void 0:G.value)||0,card_count:Number((U=r("#f-card-count"))==null?void 0:U.value)||5,is_active:((V=r("#f-active"))==null?void 0:V.checked)??v.is_active,allow_duplicates:((K=r("#f-allow-dup"))==null?void 0:K.checked)??!0,sort_order:Number((J=r("#f-sort"))==null?void 0:J.value)||0,max_per_user:(Y=r("#f-max-per-user"))!=null&&Y.value?Number(r("#f-max-per-user").value):null,available_from:((W=r("#f-available-from"))==null?void 0:W.value)||null,available_until:((M=r("#f-available-until"))==null?void 0:M.value)||null},{error:k}=await y.from("booster_configs").update(x).eq("id",t);if(k){alert(k.message);return}if(Object.assign(v,x),await y.from("booster_drop_rates").delete().eq("booster_id",t),g.length){const{error:B}=await y.from("booster_drop_rates").insert(g);if(B){alert(B.message);return}}i=g,p=t,alert("✅ Booster enregistré !"),c(!0)})}c()}const He=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Tt(e){await ce(e)}async function ce(e){const{data:n,error:t}=await y.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(n||[]).map(i=>Mt(i)).join("")}
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
              ${He.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Le(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>jt(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(n||[]).find(s=>s.id===i.dataset.edit);p&&i.addEventListener("click",()=>Le(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await y.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ce(e))})})}function Mt(e){const n=He.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Le(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function jt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,s=parseInt(document.getElementById("form-note-max").value)||10;if(p>s){alert("Note min doit être ≤ note max");return}const d={rarity:t,price:i,note_min:p,note_max:s,updated_at:new Date().toISOString()};let a;if(n?{error:a}=await y.from("sell_price_configs").update(d).eq("id",n):{error:a}=await y.from("sell_price_configs").insert(d),a){alert("Erreur : "+a.message);return}document.getElementById("config-form").style.display="none",await ce(e)}async function Rt(e){await pe(e)}async function pe(e){const{data:n}=await y.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>Nt(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Be(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Dt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const i=(n||[]).find(p=>p.id===t.dataset.edit);i&&t.addEventListener("click",()=>Be(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await y.from("patch_notes").delete().eq("id",t.dataset.delete),await pe(e))})})}function Nt(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Be(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,n.scrollIntoView({behavior:"smooth"})}async function Dt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,s=document.getElementById("form-art-pub").checked,d=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const a=d?new Date(d).toISOString():new Date().toISOString(),o={title:t,description:i,image_url:p,is_published:s,published_at:a};let c;if(n?{error:c}=await y.from("patch_notes").update(o).eq("id",n):{error:c}=await y.from("patch_notes").insert(o),c){alert("Erreur : "+c.message);return}document.getElementById("article-form").style.display="none",await pe(e)}async function Pt(e){await F(e)}async function F(e){var u,r,l,h,f,w,E,m,_,$,v,g;const{data:n}=await y.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(n||[]).map(b=>qt(b)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([b,x,k])=>`<button type="button" data-cmd="${x}" title="${k}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${b}</button>`).join("")}
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
    </div>`,(u=document.getElementById("ts-add"))==null||u.addEventListener("click",()=>ze(null,(n==null?void 0:n.length)||0)),(r=document.getElementById("ts-reset"))==null||r.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:b}=await y.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(b?"Erreur : "+b.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(l=document.getElementById("ts-cancel"))==null||l.addEventListener("click",Ge),(h=document.getElementById("ts-save"))==null||h.addEventListener("click",()=>Ft(e)),(f=document.getElementById("ts-preview-btn"))==null||f.addEventListener("click",Ot);const t=document.getElementById("ts-editor"),i=()=>{const b=document.getElementById("ts-content");b&&t&&(b.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const p=()=>{document.activeElement!==t&&(t==null||t.focus())};(w=document.getElementById("ts-toolbar"))==null||w.querySelectorAll("[data-cmd]").forEach(b=>{b.addEventListener("mousedown",x=>{x.preventDefault(),p();const k=b.dataset.cmd;k.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,k.split(":")[1]):document.execCommand(k,!1,null),i()})}),(E=document.getElementById("ts-insert-color"))==null||E.addEventListener("mousedown",b=>{b.preventDefault(),p();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),i())}),(m=document.getElementById("ts-clear-format"))==null||m.addEventListener("mousedown",b=>{b.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const s=document.getElementById("ts-image"),d=document.getElementById("ts-img-preview"),a=document.getElementById("ts-img-preview-el"),o=document.getElementById("ts-img-picker-grid"),c=()=>{var x;const b=(x=s==null?void 0:s.value)==null?void 0:x.trim();if(b){const k="/";a.src=`${k}icons/${b}`,d.style.display="block"}else d.style.display="none"};s==null||s.addEventListener("input",c),(_=document.getElementById("ts-img-clear"))==null||_.addEventListener("click",()=>{s&&(s.value=""),d.style.display="none",o.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(o.style.display!=="none"){o.style.display="none";return}o.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',o.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(x)?x.filter(I=>I.name.startsWith("tuto_")):[];if(!k.length){o.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";o.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+k.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",o.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{s&&(s.value=I.dataset.pick),c(),o.style.display="none"})})}catch(b){o.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+b.message+"</div>"}}),(v=document.getElementById("ts-color"))==null||v.addEventListener("input",b=>{const x=document.getElementById("ts-color-hex");x&&(x.value=b.target.value)}),(g=document.getElementById("ts-color-hex"))==null||g.addEventListener("input",b=>{const x=b.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const k=document.getElementById("ts-color");k&&(k.value=x)}}),e.querySelectorAll("[data-edit]").forEach(b=>{const x=(n||[]).find(k=>k.id===b.dataset.edit);x&&b.addEventListener("click",()=>ze(x))}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await y.from("tutorial_steps").delete().eq("id",b.dataset.delete),F(e))})}),e.querySelectorAll("[data-toggle]").forEach(b=>{b.addEventListener("click",async()=>{const x=(n||[]).find(k=>k.id===b.dataset.toggle);x&&(await y.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),F(e))})}),e.querySelectorAll("[data-up]").forEach(b=>{b.addEventListener("click",async()=>{const x=n||[],k=x.findIndex(L=>L.id===b.dataset.up);k<=0||(await Promise.all([y.from("tutorial_steps").update({step_order:x[k-1].step_order}).eq("id",x[k].id),y.from("tutorial_steps").update({step_order:x[k].step_order}).eq("id",x[k-1].id)]),F(e))})}),e.querySelectorAll("[data-down]").forEach(b=>{b.addEventListener("click",async()=>{const x=n||[],k=x.findIndex(L=>L.id===b.dataset.down);k<0||k>=x.length-1||(await Promise.all([y.from("tutorial_steps").update({step_order:x[k+1].step_order}).eq("id",x[k].id),y.from("tutorial_steps").update({step_order:x[k].step_order}).eq("id",x[k+1].id)]),F(e))})})}function qt(e){return`
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
  </div>`}function ze(e,n=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",s=document.getElementById("ts-image");s&&(s.value=p);const d=document.getElementById("ts-img-preview"),a=document.getElementById("ts-img-preview-el");if(p&&d&&a){const o="/";a.src=`${o}icons/${p}`,d.style.display="block"}else d&&(d.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ge(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Ot(){var c,u;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",s=(u=(c=document.getElementById("ts-image"))==null?void 0:c.value)==null?void 0:u.trim(),a=s?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${s}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",o=document.getElementById("ts-preview-area");o.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${p}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${n}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${a}
        <div style="padding:${s?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,o.querySelectorAll("ul,ol").forEach(r=>{r.style.paddingLeft="20px",r.style.margin="6px 0"}),o.querySelectorAll("li").forEach(r=>{r.style.marginBottom="4px"}),o.querySelectorAll("p").forEach(r=>{r.style.marginBottom="8px"})}async function Ft(e){var r,l;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),s=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),d=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",a=parseInt(document.getElementById("ts-order").value)||0,o=document.getElementById("ts-active").checked;if(!i||!s){alert("Titre et contenu sont obligatoires.");return}const c={emoji:t,title:i,content:s,color:d,step_order:a,is_active:o,image_url:((l=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:l.trim())||null};let u;if(n?{error:u}=await y.from("tutorial_steps").update(c).eq("id",n):{error:u}=await y.from("tutorial_steps").insert(c),u){alert("Erreur : "+u.message);return}Ge(),F(e)}const Ht="/",Ue="#E87722",Gt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Ut(e){await ue(e)}async function ue(e){var i,p,s,d;const[{data:n},{data:t}]=await Promise.all([y.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),y.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(n||[]).map(a=>Vt(a)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${(t||[]).map(a=>`<option value="${a.id}" data-logo="${a.logo_url||""}">${a.encoded_name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:#555;display:block;margin-bottom:4px">PAYS (si pas de club)</label>
              <select id="st-country" style="width:100%;box-sizing:border-box;padding:9px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;background:#fff">
                <option value="">— Aucun pays —</option>
                ${Gt.map(([a,o])=>`<option value="${a}">${o} (${a})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Ae(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(s=document.getElementById("st-save"))==null||s.addEventListener("click",()=>Jt(e)),(d=document.getElementById("st-preview-btn"))==null||d.addEventListener("click",()=>oe()),["st-name","st-club","st-country","st-image"].forEach(a=>{var o,c;(o=document.getElementById(a))==null||o.addEventListener("input",oe),(c=document.getElementById(a))==null||c.addEventListener("change",oe)}),e.querySelectorAll("[data-edit]").forEach(a=>{const o=(n||[]).find(c=>c.id===a.dataset.edit);o&&a.addEventListener("click",()=>Ae(o))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await y.from("stadium_definitions").delete().eq("id",a.dataset.delete),ue(e))})})}function Vt(e){var t,i;const n=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${Ue};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${n}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Ae(e,n){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",oe((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function oe(){var c,u,r,l,h,f,w;const e=((c=document.getElementById("st-name"))==null?void 0:c.value)||"NOM DU STADE",n=(r=(u=document.getElementById("st-image"))==null?void 0:u.value)==null?void 0:r.trim(),t=(h=(l=document.getElementById("st-country"))==null?void 0:l.value)==null?void 0:h.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,s=i&&p>0?i.options[p].text:"",d=((w=(f=i==null?void 0:i.options[p])==null?void 0:f.getAttribute)==null?void 0:w.call(f,"data-logo"))||"";let a;n?a=`<img src="${Ht}icons/${n}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:d?a=`<img src="${d}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?a=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:a='<div style="font-size:36px;text-align:center">🏟️</div>';const o=s||t||"—";document.getElementById("st-preview-card").innerHTML=Kt(e,a,o,!0)}function Kt(e,n,t,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${Ue},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${n}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function Jt(e){const n=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,s=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const d={name:t,club_id:i,country_code:p,image_url:s},{error:a}=n?await y.from("stadium_definitions").update(d).eq("id",n):await y.from("stadium_definitions").insert(d);if(a){alert("Erreur : "+a.message);return}document.getElementById("st-form").style.display="none",ue(e)}const R=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],N=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function Yt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],s=()=>window.innerWidth<700,d=l=>e.querySelector(l);function a(l,h=130){if(!l)return"";const f=R.find($=>$.value===l.gc_type)||R[0],w=N.find($=>$.value===l.color)||N[0],E=Math.round(h*.55),m=Math.round(h*.15),_=Math.round(h*.3);return`<div style="width:${h}px;height:${Math.round(h*1.4)}px;border-radius:10px;border:3px solid ${w.hex};background:${f.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${w.hex}55;flex-shrink:0">
      <div style="height:${m}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(h/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${l.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${l.image_url?`<img src="/icons/${l.image_url}" style="max-height:${E}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(h*.3)}px">${f.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${_}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(h/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(l.effect||"").slice(0,60)}${(l.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function o(){return`
    <div id="gc-list" style="background:#fff;${s()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(l=>{const h=R.find(w=>w.value===l.gc_type)||R[0],f=N.find(w=>w.value===l.color)||N[0];return`
        <div class="gc-row" data-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${f.hex};background:${h.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
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
    </div>`}function c(){const l=t?(n||[]).find(f=>f.id===t):null;if(!l)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const h=R.find(f=>f.value===l.gc_type)||R[0];return N.find(f=>f.value===l.color)||N[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${s()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${h.bg};border-radius:12px">
        ${a(l,s()?120:150)}
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
              ${R.map(f=>`<option value="${f.value}" ${l.gc_type===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(f=>`<option value="${f.value}" ${l.color===f.value?"selected":""}>${f.label}</option>`).join("")}
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
              ${i.map(f=>`<option value="${f.value}" ${(l.effect_type||"BOOST_STAT")===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const f=l.effect_params||{},w=i.find(E=>E.value===(l.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${w.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${f.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${f.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${w.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(f.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${f.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${w.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(E=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${E}" ${!f.roles||f.roles.includes(E)?"checked":""}> ${E}
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
      ${!s()||!t?o():""}
      ${!s()||t?c():""}
    </div>`,r()}function r(){var l,h,f,w,E;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",_=>{_.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=m.dataset.id,u())})}),(l=d("#btn-gc-back"))==null||l.addEventListener("click",()=>{t=null,u()}),(h=d("#btn-cancel-gc"))==null||h.addEventListener("click",()=>{t=null,u()}),(f=d("#btn-new-gc"))==null||f.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:_,error:$}=await y.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}n.push(_),t=_.id,u()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async _=>{_.stopPropagation();const $=m.dataset.active!=="true";await y.from("gc_definitions").update({is_active:$}).eq("id",m.dataset.id);const v=n.find(g=>g.id===m.dataset.id);v&&(v.is_active=$),u()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async _=>{if(_.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",m.dataset.id);const $=n.findIndex(v=>v.id===m.dataset.id);$>-1&&n.splice($,1),t===m.dataset.id&&(t=null),u()})}),(w=d("#btn-pick-gc-icon"))==null||w.addEventListener("click",async()=>{var _;const m=d("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),g=Array.isArray(v)?v.filter(x=>x.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(x.name)):[];if(!g.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const b=((_=d("#gc-image-url"))==null?void 0:_.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${g.map(x=>`
          <div class="gc-icon-item" data-name="${x.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${x.name===b?"#7a28b8":"#ddd"};background:${x.name===b?"#f5f0ff":"#fff"}">
            <img src="/icons/${x.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(x=>{x.addEventListener("click",()=>{const k=d("#gc-image-url");k&&(k.value=x.dataset.name),m.style.display="none"})})}catch($){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(E=d("#btn-save-gc"))==null||E.addEventListener("click",async()=>{var x,k,L,I,z,T,A,G,U,V,K,J,Y,W;const m=n.find(M=>M.id===t);if(!m)return;const _=i.find(M=>{var B;return M.value===(((B=d("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT")})||i[0],$=_.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,v={..._.hasValue?{value:Number((x=d("#gc-p-value"))==null?void 0:x.value)||2}:{},..._.hasCount?{count:Number((k=d("#gc-p-count"))==null?void 0:k.value)||1}:{},..._.hasTarget?{target:((L=d("#gc-p-target"))==null?void 0:L.value)||"home"}:{},..._.hasRoles?{roles:$!=null&&$.length?$:null}:{}},g={name:((z=(I=d("#gc-name"))==null?void 0:I.value)==null?void 0:z.trim())||m.name,effect:((A=(T=d("#gc-effect"))==null?void 0:T.value)==null?void 0:A.trim())||null,image_url:((U=(G=d("#gc-image-url"))==null?void 0:G.value)==null?void 0:U.trim())||null,gc_type:((V=d("#gc-type"))==null?void 0:V.value)||"game_changer",color:((K=d("#gc-color"))==null?void 0:K.value)||"purple",sort_order:Number((J=d("#gc-sort"))==null?void 0:J.value)||0,is_active:((Y=d("#gc-active"))==null?void 0:Y.checked)??m.is_active,effect_type:((W=d("#gc-effect-type"))==null?void 0:W.value)||"BOOST_STAT",effect_params:v},{error:b}=await y.from("gc_definitions").update(g).eq("id",t);if(b){alert(b.message);return}Object.assign(m,g),alert("✅ Carte enregistrée !"),u()})}u()}async function Wt(e,{toast:n,openModal:t,closeModal:i}){await O(e,{toast:n,openModal:t,closeModal:i})}async function O(e,n){var v;const{toast:t,openModal:i,closeModal:p}=n,[{data:s,error:d},{data:a}]=await Promise.all([y.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),y.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(d){e.innerHTML=`<p style="color:red">${d.message}</p>`;return}const o=s||[],c=o.find(g=>g.is_active),u=(a||[]).filter(g=>(g.placement_matches||0)>=1),r=u.filter(g=>(g.placement_matches||0)>=10),l=["bronze","silver","gold","platinum","diamond","master"],h={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},f={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},w={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},E={};l.forEach(g=>{E[g]=0}),r.forEach(g=>{const b=g.rank_tier||"bronze";E[b]!==void 0&&E[b]++});const m=r.length?Math.round(r.reduce((g,b)=>g+(b.mmr||1e3),0)/r.length):0;function _(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(g){const b=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<b?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${c?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${c.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${u.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${r.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(c.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${r.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${l.map(g=>{const b=E[g],x=r.length>0?Math.round(b/r.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${w[g]} ${h[g]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${x}%;background:${f[g]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${b} (${x}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${o.length})</div>
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
              ${o.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':o.map(g=>{const b=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),x=new Date(g.end_at)<new Date&&!g.is_active;return`
                    <tr>
                      <td><b>${g.name}</b></td>
                      <td style="font-size:12px">${_(g.start_at)}</td>
                      <td style="font-size:12px">${_(g.end_at)}</td>
                      <td style="font-size:12px">${b} jours</td>
                      <td>${$(g)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${g.id}">✏️ Modifier</button>
                        ${g.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${g.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${g.id}">▶ Activer</button>`}
                        ${x?`<button class="btn btn-danger btn-sm" data-delete="${g.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(v=document.getElementById("create-season-btn"))==null||v.addEventListener("click",()=>{Se(null,{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const b=o.find(x=>x.id==g.dataset.edit);g.addEventListener("click",()=>{Se(b,{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const b=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await y.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){t(x.message,"error");return}const{error:k}=await y.from("ranked_seasons").update({is_active:!0}).eq("id",b);if(k){t(k.message,"error");return}await y.from("users").update({current_season_id:b}).gt("placement_matches",0),t("Saison activée ✅","success"),O(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:b}=await y.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(b){t(b.message,"error");return}t("Saison désactivée","success"),O(e,n)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:b}=await y.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(b){t(b.message,"error");return}t("Saison supprimée","success"),O(e,n)})})}function Se(e,{toast:n,openModal:t,closeModal:i,reload:p}){const s=!!e,d=new Date().toISOString().slice(0,16),a=new Date(Date.now()+90*864e5).toISOString().slice(0,16),o=e?new Date(e.start_at).toISOString().slice(0,16):d,c=e?new Date(e.end_at).toISOString().slice(0,16):a,u=(e==null?void 0:e.name)||"";t(s?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${u}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${o}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${c}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${s?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function r(){var E,m;const l=(E=document.getElementById("season-start"))==null?void 0:E.value,h=(m=document.getElementById("season-end"))==null?void 0:m.value,f=document.getElementById("season-duration");if(!l||!h||!f)return;const w=Math.round((new Date(h)-new Date(l))/864e5);f.textContent=w>0?`Durée : ${w} jour${w>1?"s":""}`:"⚠️ La fin doit être après le début",f.style.color=w>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var l,h,f;(l=document.getElementById("season-start"))==null||l.addEventListener("input",r),(h=document.getElementById("season-end"))==null||h.addEventListener("input",r),r(),(f=document.getElementById("season-save-btn"))==null||f.addEventListener("click",async()=>{var b,x,k;const w=(b=document.getElementById("season-name"))==null?void 0:b.value.trim(),E=(x=document.getElementById("season-start"))==null?void 0:x.value,m=(k=document.getElementById("season-end"))==null?void 0:k.value,_=document.getElementById("season-error");if(!w){_.textContent="Le nom est requis.";return}if(!E){_.textContent="La date de début est requise.";return}if(!m){_.textContent="La date de fin est requise.";return}if(new Date(m)<=new Date(E)){_.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const v={name:w,start_at:new Date(E).toISOString(),end_at:new Date(m).toISOString()};let g;if(s?{error:g}=await y.from("ranked_seasons").update(v).eq("id",e.id):{error:g}=await y.from("ranked_seasons").insert({...v,is_active:!1}),g){_.textContent=g.message,$.disabled=!1,$.textContent=s?"💾 Enregistrer":"✅ Créer la saison";return}n(s?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}at(je);function Zt(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function Xt(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function de(){document.getElementById("modal-overlay").classList.add("hidden")}const Ce={dashboard:{title:"Dashboard",fn:rt},players:{title:"Joueurs & Cartes",fn:dt},clubs:{title:"Clubs",fn:bt},"card-builder":{title:"Card Builder",fn:Et},users:{title:"Managers",fn:Oe},market:{title:"Marché des transferts",fn:Fe},"import-export":{title:"Import / Export CSV",fn:It},formations:{title:"Formations & Liens",fn:Bt},"boosters-config":{title:"Boosters",fn:Ct},"sell-price":{title:"Prix vente directe",fn:Tt},journal:{title:"Journal",fn:Rt},tutorial:{title:"Tutoriel",fn:Pt},stadiums:{title:"Stades",fn:Ut},"gc-cards":{title:"Game Changers",fn:Yt},"ranked-seasons":{title:"Saisons Ranked",fn:Wt}};async function ae(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=Ce[e]||Ce.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:Zt,openModal:Xt,closeModal:de,navigate:ae})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function Qt(){var n;const{data:{session:e}}=await y.auth.getSession();e&&await Te(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!t||!i){p.textContent="Remplissez tous les champs.";return}const{data:s,error:d}=await y.auth.signInWithPassword({email:t,password:i});if(d){p.textContent=d.message;return}await Te(s.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",de),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&de()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),ae(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{ae(t.target.value)})}async function Te(e){const{data:n,error:t}=await y.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,ae("dashboard")}Qt();
