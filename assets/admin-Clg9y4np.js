import{s as h,e as q,r as je,g as Re,K as ye,D as A,S as Ze,a as C,H as Xe,R as Qe,b as Ne,c as et,E as tt,d as nt,N as it,M as ot,B as at,f as rt,F as se,h as he,i as lt,j as st}from"./formation-links-BL5mTGg0.js";async function dt(e){const[{count:n},{count:t},{count:i},{count:p},{count:d}]=await Promise.all([h.from("players").select("*",{count:"exact",head:!0}),h.from("clubs").select("*",{count:"exact",head:!0}),h.from("users").select("*",{count:"exact",head:!0}),h.from("cards").select("*",{count:"exact",head:!0}),h.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${W("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${W("🏟️","Clubs",t??"–","#D4A017")}
      ${W("👥","Managers",i??"–","#7a28b8")}
      ${W("📦","Cartes possédées",p??"–","#2a8f52")}
      ${W("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=s=>{var a;(a=document.querySelector(`[data-page="${s}"]`))==null||a.click()}}function W(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const de={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},ct={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},De={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},pt=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];async function ut(e,n){await oe(e,n)}async function oe(e,n){const{toast:t}=n,[{data:i,error:p},{data:d}]=await Promise.all([h.from("players").select("*, clubs(id,encoded_name,logo_url,kit_color1,kit_color2)").order("surname_encoded"),h.from("clubs").select("id,encoded_name").order("encoded_name")]);if(p){e.innerHTML=`<p style="color:red">${p.message}</p>`;return}mt(e,i||[],d||[],n)}function mt(e,n,t,i){var r,l;const{toast:p}=i;e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px">
      <!-- Filtres -->
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="search-players" placeholder="🔍 Nom, prénom…" style="flex:1;min-width:140px">
        <select id="filter-job" style="width:100px">
          <option value="">Tout</option>
          <option value="GK">GK</option><option value="DEF">DEF</option>
          <option value="MIL">MIL</option><option value="ATT">ATT</option>
        </select>
        <select id="filter-rarity" style="width:110px">
          <option value="">Toutes</option>
          ${Object.entries(de).map(([o,c])=>`<option value="${o}">${c}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <select id="filter-club" style="flex:1;min-width:140px">
          <option value="">Tous les clubs</option>
          ${t.map(o=>`<option value="${o.id}">${o.encoded_name}</option>`).join("")}
        </select>
        <select id="filter-country" style="flex:1;min-width:120px">
          <option value="">Tous les pays</option>
          ${[...new Set(n.map(o=>o.country_code).filter(Boolean))].sort().map(o=>`<option value="${o}">${o}</option>`).join("")}
        </select>
      </div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${n.length} joueur(s)</div>
      <div id="bulk-bar" style="display:none;align-items:center;gap:8px;padding:8px 10px;background:rgba(187,32,32,0.08);border:1px solid #bb2020;border-radius:10px">
        <span id="bulk-count" style="font-size:13px;font-weight:700;color:#bb2020;flex:1"></span>
        <button class="btn btn-danger btn-sm" id="bulk-delete-btn">🗑️ Supprimer la sélection</button>
        <button class="btn btn-ghost btn-sm" id="bulk-cancel-btn">Annuler</button>
      </div>
      <!-- Liste -->
      <div id="players-list" style="display:flex;flex-direction:column;gap:6px"></div>
    </div>`;function d(){const o=document.getElementById("search-players").value.toLowerCase(),c=document.getElementById("filter-job").value,u=document.getElementById("filter-rarity").value,g=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return n.filter(w=>(!o||`${w.firstname} ${w.surname_encoded} ${w.surname_real||""}`.toLowerCase().includes(o))&&(!c||w.job===c)&&(!u||w.rarity===u)&&(!g||w.club_id===g)&&(!E||w.country_code===E))}const s=new Set;function a(){const o=document.getElementById("bulk-bar"),c=document.getElementById("bulk-count");o&&(s.size>0?(o.style.display="flex",c.textContent=`${s.size} joueur(s) sélectionné(s)`):o.style.display="none")}function m(){const o=d();document.getElementById("count-label").textContent=`${o.length} joueur(s)`;const c=document.getElementById("players-list");if(!o.length){c.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}c.innerHTML=o.map(u=>{const g=ct[u.rarity]||"#aaa",E=De[u.job]||"#aaa",w=s.has(u.id);return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;${w?"border:2px solid #bb2020;background:rgba(187,32,32,0.05)":""}">
          <!-- Checkbox -->
          <input type="checkbox" data-check="${u.id}" ${w?"checked":""} style="width:18px;height:18px;flex-shrink:0;cursor:pointer;accent-color:#bb2020">
          <!-- Note + poste -->
          <div style="flex-shrink:0;width:40px;height:40px;border-radius:10px;border:2px solid ${g};
            background:${E}22;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px">
            <div style="font-size:16px;font-weight:900;color:${E};line-height:1">${gt(u)}</div>
            <div style="font-size:9px;font-weight:700;color:${E}">${u.job}</div>
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
              ${u.firstname} <span style="font-family:monospace">${u.surname_encoded}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${u.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600)">${u.country_code}</span>
              ${u.clubs?`<span style="font-size:11px;color:var(--gray-600)">· ${u.clubs.encoded_name}</span>`:""}
              ${u.job2?`<span style="font-size:10px;color:#aaa;background:rgba(0,0,0,0.08);border-radius:4px;padding:1px 4px">${u.job2}</span>`:""}
            </div>
            <div style="font-size:10px;color:${g};font-weight:700;margin-top:2px">${de[u.rarity]||u.rarity}</div>
          </div>
          <!-- Notes secondaires -->
          <div style="flex-shrink:0;font-size:10px;color:var(--gray-600);text-align:right;line-height:1.6;font-family:monospace">
            <div>GK <b>${u.note_g}</b></div>
            <div>DEF <b>${u.note_d}</b></div>
            <div>MIL <b>${u.note_m}</b></div>
            <div>ATT <b>${u.note_a}</b></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${u.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${u.id}">🗑️</button>
          </div>
        </div>`}).join(""),c.querySelectorAll("[data-check]").forEach(u=>{u.addEventListener("change",()=>{u.checked?s.add(u.dataset.check):s.delete(u.dataset.check),a();const g=u.closest(".card-panel");g&&(g.style.border=u.checked?"2px solid #bb2020":"",g.style.background=u.checked?"rgba(187,32,32,0.05)":"")})}),c.querySelectorAll("[data-edit]").forEach(u=>{const g=n.find(E=>E.id===u.dataset.edit);u.addEventListener("click",()=>Ee(g,t,e,i))}),c.querySelectorAll("[data-del]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ?"))return;const{error:g}=await h.from("players").delete().eq("id",u.dataset.del);g?p(g.message,"error"):(p("Joueur supprimé ✅","success"),oe(e,i))})})}m(),document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("filter-club").addEventListener("change",m),document.getElementById("filter-country").addEventListener("change",m),(r=document.getElementById("bulk-cancel-btn"))==null||r.addEventListener("click",()=>{s.clear(),a(),m()}),(l=document.getElementById("bulk-delete-btn"))==null||l.addEventListener("click",async()=>{if(!s.size||!confirm(`Supprimer ${s.size} joueur(s) ? Cette action est irréversible.`))return;const o=[...s],{error:c}=await h.from("players").delete().in("id",o);if(c){p(c.message,"error");return}p(`${o.length} joueur(s) supprimé(s) ✅`,"success"),s.clear(),oe(e,i)}),document.getElementById("add-player-btn").addEventListener("click",()=>Ee(null,t,e,i))}function gt(e){return e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a}function Ee(e,n,t,i){const{toast:p,openModal:d,closeModal:s}=i,a=!!e,m='<option value="">— Club —</option>'+n.map(l=>`<option value="${l.id}" ${(e==null?void 0:e.club_id)===l.id?"selected":""}>${l.encoded_name}</option>`).join(""),r=pt.map(l=>`<option value="${l}" ${((e==null?void 0:e.country_code)||"FR")===l?"selected":""}>${l}</option>`).join("");d(a?`✏️ ${e.firstname} ${e.surname_encoded}`:"➕ Nouveau joueur",`<div style="display:flex;flex-direction:column;gap:12px">

      <!-- Aperçu carte sticky -->
      <div style="position:sticky;top:0;z-index:10;background:var(--bg,#fff);padding:12px 0 8px;margin:-4px 0 0;border-bottom:1px solid var(--gray-200);display:flex;justify-content:center">
        <div id="card-preview"></div>
      </div>

      <!-- Identité -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Prénom *</label>
          <input id="pm-fn" value="${(e==null?void 0:e.firstname)||""}" placeholder="Lucas">
        </div>
        <div class="form-group">
          <label>Nom réel *</label>
          <div style="display:flex;gap:4px">
            <input id="pm-real" value="${(e==null?void 0:e.surname_real)||""}" placeholder="Silva" style="flex:1">
            <button class="btn btn-ghost btn-sm" id="pm-encode-btn" title="Encoder ↻">↻</button>
          </div>
        </div>
        <div class="form-group">
          <label>Nom encodé *</label>
          <input id="pm-enc" value="${(e==null?void 0:e.surname_encoded)||""}" style="font-family:monospace;text-transform:uppercase">
        </div>
        <div class="form-group">
          <label>Pays</label>
          <select id="pm-country">${r}</select>
        </div>
      </div>

      <!-- Poste + club + rareté -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Poste 1 *</label>
          <select id="pm-job">
            ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job)===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label>Poste 2</label>
          <select id="pm-job2">
            <option value="">Aucun</option>
            ${["GK","DEF","MIL","ATT"].map(l=>`<option value="${l}" ${(e==null?void 0:e.job2)===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label>Rareté</label>
          <select id="pm-rarity">
            ${["normal","pepite","papyte","legende"].map(l=>`<option value="${l}" ${(e==null?void 0:e.rarity)===l?"selected":""}>${de[l]}</option>`).join("")}
          </select>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Club</label>
          <select id="pm-club">${m}</select>
        </div>
        <div class="form-group">
          <label>Prix vente (cr.)</label>
          <input id="pm-price" type="number" min="0" value="${(e==null?void 0:e.sell_price)||0}">
        </div>
      </div>

      <!-- Notes -->
      <div style="border-top:1px solid var(--gray-200);padding-top:10px">
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">📊 Notes (1–20)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
          ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([l,o,c])=>`
            <div class="form-group" style="text-align:center">
              <label style="color:${De[l]};font-weight:700">${l}</label>
              <input id="${o}" type="number" min="0" max="20" value="${(e==null?void 0:e[c])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
            </div>`).join("")}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div class="form-group">
            <label>Note min</label>
            <input id="pm-nmin" type="number" min="0" max="20" value="${(e==null?void 0:e.note_min)||""}">
          </div>
          <div class="form-group">
            <label>Note max</label>
            <input id="pm-nmax" type="number" min="0" max="20" value="${(e==null?void 0:e.note_max)||""}">
          </div>
        </div>
      </div>

      <!-- Physique -->
      <div style="border-top:1px solid var(--gray-200);padding-top:10px">
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">🧑 Physique</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
          <div class="form-group">
            <label>Peau</label>
            <select id="pm-skin">
              ${["blanc","metisse","typ","noir"].map(l=>`<option value="${l}" ${(e==null?void 0:e.skin)===l?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Cheveux</label>
            <select id="pm-hair">
              ${["blond","marron","noir","chauve"].map(l=>`<option value="${l}" ${(e==null?void 0:e.hair)===l?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Longueur</label>
            <select id="pm-hlen">
              ${["rase","court","milong","long"].map(l=>`<option value="${l}" ${(e==null?void 0:e.hair_length)===l?"selected":""}>${l}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
        ${a?"💾 Enregistrer":"✅ Créer le joueur"}
      </button>
    </div>`),setTimeout(()=>{var o,c,u;Z();const l=["pm-fn","pm-enc","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-skin","pm-hair","pm-hlen","pm-club"];l.forEach(g=>{var E;return(E=document.getElementById(g))==null?void 0:E.addEventListener("input",Z)}),l.forEach(g=>{var E;return(E=document.getElementById(g))==null?void 0:E.addEventListener("change",Z)}),(o=document.getElementById("pm-encode-btn"))==null||o.addEventListener("click",()=>{var E;const g=((E=document.getElementById("pm-real"))==null?void 0:E.value)||"";document.getElementById("pm-enc").value=q(g.toUpperCase()),Z()}),(c=document.getElementById("pm-real"))==null||c.addEventListener("input",()=>{const g=document.getElementById("pm-enc");g!=null&&g.value||(g.value=q(document.getElementById("pm-real").value.toUpperCase()),Z())}),(u=document.getElementById("pm-save"))==null||u.addEventListener("click",()=>ft(e,a,t,i))},50)}function qe(){const e=i=>{var p;return(p=document.getElementById(i))==null?void 0:p.value},n=document.getElementById("pm-club"),t=n==null?void 0:n.options[n.selectedIndex];return{firstname:(e("pm-fn")||"").trim(),surname_real:(e("pm-real")||"").trim(),surname_encoded:(e("pm-enc")||"").trim().toUpperCase(),country_code:e("pm-country")||"FR",club_id:e("pm-club")||null,club_encoded_name:(t==null?void 0:t.text)!=="— Club —"?t==null?void 0:t.text:null,job:e("pm-job")||"ATT",job2:e("pm-job2")||null,rarity:e("pm-rarity")||"normal",note_g:parseInt(e("pm-g"))??0,note_d:parseInt(e("pm-d"))??0,note_m:parseInt(e("pm-m"))??0,note_a:parseInt(e("pm-a"))??0,note_min:parseInt(e("pm-nmin"))||null,note_max:parseInt(e("pm-nmax"))||null,skin:e("pm-skin")||"blanc",hair:e("pm-hair")||"marron",hair_length:e("pm-hlen")||"court",sell_price:parseInt(e("pm-price"))||0}}function Z(){const e=document.getElementById("card-preview");if(!e)return;const n=qe(),t={...n,rarity:n.rarity,job:n.job,job2:n.job2||null,firstname:n.firstname||"Prénom",surname_encoded:n.surname_encoded||"NOM"};e.innerHTML=je(t,{size:"md",showNotes:!1})}async function ft(e,n,t,i){const{toast:p,closeModal:d}=i,s=document.getElementById("pm-error"),a=document.getElementById("pm-save"),m=qe();if(!m.firstname){s.textContent="Le prénom est requis.";return}if(!m.surname_real){s.textContent="Le nom réel est requis.";return}if(!m.surname_encoded){s.textContent="Le nom encodé est requis.";return}a.disabled=!0,a.textContent="Enregistrement…";const{club_encoded_name:r,...l}=m,{error:o}=n?await h.from("players").update({...l,updated_at:new Date().toISOString()}).eq("id",e.id):await h.from("players").insert(l);if(o){s.textContent=o.message,a.disabled=!1,a.textContent=n?"💾 Enregistrer":"✅ Créer le joueur";return}p(n?"Joueur modifié ✅":"Joueur créé ✅","success"),d(),oe(t,i)}const bt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},xt=["rase","court","milong","long"];function vt(e){const n=Oe(e);if(n==="noir")return"noir";if(n==="typ")return Math.random()<.9?"noir":"marron";if(n==="metisse")return Math.random()<.6?"noir":"marron";const t=Math.random();return t<.35?"blond":t<.75?"marron":"noir"}function yt(e){return Math.random()<.05?"chauve":vt(e)}const Pe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Oe(e){return bt[e]||"blanc"}function ht(e){return yt(e)}function Et(e,n){return Math.floor(Math.random()*(n-e+1))+e}function ee(e){return e[Math.floor(Math.random()*e.length)]}function wt(e){const n=Pe.filter(t=>t!==e);return ee(n)}function _t(e,n){const t=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],p=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],d=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],s=new Set(d.sort(()=>Math.random()-.5).slice(0,4)),a=[...d].sort(()=>Math.random()-.5),m=new Set(a.slice(0,2)),r=new Set(a.slice(2,4)),l=10,o=p.map((c,u)=>u<l);for(let c=o.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[o[c],o[u]]=[o[u],o[c]]}return p.map((c,u)=>{const g=o[u]?n:wt(n),E=Oe(g),w=ht(g),b=ee(xt),k=Et(1,20),$=s.has(u),x=$?Math.max(0,k-2):0;let f=0,v=0,y=0,_=0,L=null;c==="GK"?f=k:c==="DEF"?(v=k,$&&(y=x,L="MIL")):c==="ATT"?(_=k,$&&(y=x,L="MIL")):(y=k,$&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(v=x,L="DEF"):(_=x,L="ATT")));const I=m.has(u)?"pepite":r.has(u)?"papyte":"normal",z=ee(i),S=q(z.toUpperCase());return{job:c,job2:L,firstname:ee(t),surname_real:z,surname_encoded:S,country_code:g,club_id:e,note_g:f,note_d:v,note_m:y,note_a:_,skin:E,hair:w,hair_length:b,rarity:I,sell_price:0}})}async function Fe(e,n,t){const i=_t(e,n),{data:p,error:d}=await h.from("players").insert(i).select("id");if(d){console.error("[GenSquad] Erreur batch insert:",d.message,d.details),t("Erreur: "+d.message,"error");return}const s=(p||[]).map(m=>({card_type:"player",player_id:m.id}));if(s.length){const{error:m}=await h.from("cards").insert(s);m&&console.warn("[GenSquad] Erreur cartes:",m.message)}const a=(p==null?void 0:p.length)||0;console.log("[GenSquad] Créés:",a,"/",i.length),a>0?t(`${a} joueurs générés ✅`,"success"):t("Erreur génération joueurs","error")}function He(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,color3:e.kit_color3||A.color3,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}let te=[];async function $t(e,n){await ae(e,n)}async function ae(e,n){const[{data:t,error:i},{data:p}]=await Promise.all([h.from("clubs").select("*").order("real_name"),h.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}te=t||[];const d={};(p||[]).forEach(s=>{d[s.club_id]=(d[s.club_id]||0)+1}),kt(e,n,d)}function kt(e,n,t={}){const{toast:i,openModal:p,closeModal:d}=n;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,s(te),document.getElementById("search-clubs").addEventListener("input",a=>{const m=a.target.value.toLowerCase();s(te.filter(r=>r.real_name.toLowerCase().includes(m)||r.encoded_name.toLowerCase().includes(m)))}),document.getElementById("add-club-btn").addEventListener("click",()=>we(null,e,n));function s(a){const m=document.getElementById("clubs-list");if(!a.length){m.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}m.innerHTML=a.map(r=>{const l=He(r),o=Re(l,r.id).replace("<svg ",'<svg style="width:40px;height:48px" '),c=r.logo_url?`<img src="${r.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${l.color1},${l.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${r.encoded_name.slice(0,3)}</div>`,u=t[r.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${c}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${r.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${r.encoded_name} · ${r.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${u===0?"#e67e22":"var(--gray-600)"}">
              ${u===0?"⚠️ Aucun joueur":`👥 ${u} joueur${u>1?"s":""}`}
            </div>
          </div>
          ${o}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${u===0?`<button class="btn btn-primary btn-sm" data-gen="${r.id}" data-cc="${r.country_code}" data-name="${r.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${r.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${r.id}">🗑️</button>
          </div>
        </div>`}).join(""),m.querySelectorAll("[data-gen]").forEach(r=>{r.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${r.dataset.name} ?`)&&(r.disabled=!0,r.textContent="⏳",await Fe(r.dataset.gen,r.dataset.cc,i),ae(e,n))})}),m.querySelectorAll("[data-edit]").forEach(r=>{const l=te.find(o=>o.id===r.dataset.edit);r.addEventListener("click",()=>we(l,e,n))}),m.querySelectorAll("[data-del]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:l}=await h.from("clubs").delete().eq("id",r.dataset.del);l?i(l.message,"error"):(i("Club supprimé","success"),ae(e,n))})})}}function we(e,n,t){const{toast:i,openModal:p,closeModal:d}=t,s=!!e,a=e?He(e):{...A},m=Object.entries(ye).map(([l,o])=>`<option value="${l}" ${a.style===l?"selected":""}>${o.label}</option>`).join(""),r=Pe.map(l=>`<option value="${l}" ${((e==null?void 0:e.country_code)||"FR")===l?"selected":""}>${l}</option>`).join("");p(s?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${r}
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
              <select id="m-kit-style" style="width:100%">${m}</select>
            </div>
            ${[["Couleur 1","m-kit-color1",a.color1,!1],["Couleur 2","m-kit-color2",a.color2,!1],["Couleur 3","m-kit-color3",a.color3,!0],["Short","m-kit-shorts",a.shorts,!1],["Chaussettes","m-kit-socks",a.socks,!1]].map(([l,o,c,u])=>`
              <div class="form-group" id="wrap-${o}" ${u?'style="display:none"':""}>
                <label>${l}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${o}" value="${c||"#000000"}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${o}-txt" value="${c||"#000000"}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
      ${s?"":`
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
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 0–20 · physique adapté au pays · 2 pépites + 2 papytes</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${s?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var g,E,w;X();function l(){var x,f;const b=((x=document.getElementById("m-kit-style"))==null?void 0:x.value)||"uni",k=((f=ye[b])==null?void 0:f.colors)===3,$=document.getElementById("wrap-m-kit-color3");$&&($.style.display=k?"":"none")}l(),["m-kit-color1","m-kit-color2","m-kit-color3","m-kit-shorts","m-kit-socks"].forEach(b=>{const k=document.getElementById(b),$=document.getElementById(b+"-txt");!k||!$||(k.addEventListener("input",()=>{$.value=k.value,X()}),$.addEventListener("input",()=>{const x=$.value.trim();/^#[0-9a-fA-F]{6}$/.test(x)&&(k.value=x,X())}),$.addEventListener("change",()=>{let x=$.value.trim();x.startsWith("#")||(x="#"+x),/^#[0-9a-fA-F]{6}$/.test(x)&&(k.value=x,$.value=x,X())}))}),(g=document.getElementById("m-kit-style"))==null||g.addEventListener("change",()=>{l(),X()});const o=document.getElementById("m-real"),c=document.getElementById("m-encoded");function u(){if(!o||!c||c.value)return;const b=o.value.trim().split(/\s+/),k=b.length===1?b[0].toUpperCase().slice(0,6):b.filter($=>$.length>2).map($=>$[0].toUpperCase()).join("")||b[0].toUpperCase().slice(0,4);c.value=k}o==null||o.addEventListener("input",u),(E=document.getElementById("auto-encode-btn"))==null||E.addEventListener("click",()=>{c&&(c.value=""),u()}),(w=document.getElementById("m-save"))==null||w.addEventListener("click",()=>It(e,s,n,t))},50)}function Ge(){var e,n,t,i,p,d;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",color3:((i=document.getElementById("m-kit-color3"))==null?void 0:i.value)||"#000000",shorts:((p=document.getElementById("m-kit-shorts"))==null?void 0:p.value)||"#111111",socks:((d=document.getElementById("m-kit-socks"))==null?void 0:d.value)||"#ffffff"}}function X(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Re(Ge(),"modal"))}async function It(e,n,t,i){var b,k,$,x,f,v;const{toast:p,closeModal:d}=i,s=document.getElementById("m-error"),a=document.getElementById("m-save"),m=(b=document.getElementById("m-real"))==null?void 0:b.value.trim(),r=(k=document.getElementById("m-encoded"))==null?void 0:k.value.trim().toUpperCase(),l=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),o=((x=document.getElementById("m-logo"))==null?void 0:x.value.trim())||null,c=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,u=((v=document.getElementById("m-gen-squad"))==null?void 0:v.checked)??!1,g=Ge();if(!m){s.textContent="Le nom du club est requis.";return}if(!r){s.textContent="Le nom encodé est requis.";return}if(!l){s.textContent="Le pays est requis.";return}a.disabled=!0,a.textContent="Enregistrement…";const E={real_name:m,encoded_name:r,country_code:l,logo_url:o,kit_style:g.style,kit_color1:g.color1,kit_color2:g.color2,kit_color3:g.color3,kit_shorts:g.shorts,kit_socks:g.socks};let w=e==null?void 0:e.id;if(n){const{error:y}=await h.from("clubs").update(E).eq("id",w);if(y){s.textContent=y.message,a.disabled=!1,a.textContent="💾 Enregistrer";return}}else{const{data:y,error:_}=await h.from("clubs").insert(E).select().single();if(_){s.textContent=_.message,a.disabled=!1,a.textContent="✅ Créer le club";return}if(w=y.id,c){a.textContent="🏟️ Création du stade…";const{data:L,error:I}=await h.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:w,country_code:l}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):L&&await h.from("cards").insert({card_type:"stadium",stadium_id:L.id})}u&&(a.textContent="⚽ Génération des joueurs…",await Fe(w,l,p))}p(n?"Club modifié ✅":"Club créé ✅","success"),d(),ae(t,i)}const Lt=["normal","pepite","papyte","legende"],_e=["GK","DEF","MIL","ATT"],Bt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let D={...C},ne=[];async function zt(e,{toast:n}){const{data:t}=await h.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ne=t||[],D={...C},e.innerHTML=Tt(ne),Ct(e,ne,n),j()}function $e(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=q(e))}function At(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=ne.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||A.style,color1:n.kit_color1||A.color1,color2:n.kit_color2||A.color2,shorts:n.kit_shorts||A.shorts,socks:n.kit_socks||A.socks}:{...A}}function j(){var c,u,g,E;const e=w=>{var b;return((b=document.getElementById(w))==null?void 0:b.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||q(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((u=(c=document.getElementById("cb-club"))==null?void 0:c.selectedOptions[0])==null?void 0:u.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=At(),i=document.getElementById("cb-club"),p=((E=(g=i==null?void 0:i.selectedOptions[0])==null?void 0:g.dataset)==null?void 0:E.logo)||null,d=Ne(D,t,120),s=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,a=je(n,{portraitUrl:s,clubLogoUrl:p,showNotes:!0}),m=document.getElementById("card-preview");m&&(m.innerHTML=a);const r=document.getElementById("avatar-preview-wrap");r&&(r.innerHTML=d);const l=e("cb-surname-real"),o=document.getElementById("encode-summary");o&&l&&(o.textContent=`${e("cb-firstname")} ${l} → ${e("cb-firstname")} ${n.surname_encoded}`)}function Ue(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};D={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ct(e,n,t){var p,d,s,a,m;e.querySelectorAll("input,select").forEach(r=>{r.addEventListener("input",j),r.addEventListener("change",j)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(r=>{var l;(l=document.getElementById(r))==null||l.addEventListener("change",()=>{Ue(),j()})}),(p=document.getElementById("cb-surname-real"))==null||p.addEventListener("input",()=>{$e(),j()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{$e(),j()}),(s=document.getElementById("cb-club"))==null||s.addEventListener("change",j),(a=document.getElementById("btn-save-player"))==null||a.addEventListener("click",()=>St(t)),(m=document.getElementById("btn-reset"))==null||m.addEventListener("click",()=>{e.querySelectorAll("input").forEach(r=>r.value=""),e.querySelectorAll("select").forEach(r=>r.selectedIndex=0),D={...C},i.forEach(r=>{const l=r.replace("av-",""),o=document.getElementById(r);o&&(o.value=C[l]||"")}),j()})}async function St(e){const n=s=>{var a;return((a=document.getElementById(s))==null?void 0:a.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||q(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ue();const p={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:D,skin:D.skin||"blanc",hair:D.hairColor||"marron",hair_length:"court"},{error:d}=await h.from("players").insert(p);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${p.firstname} ${p.surname_encoded}" enregistré !`,"success")}function Tt(e){const n=Bt.map(([r,l])=>`<option value="${r}">${l} (${r})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(r=>`<option value="${r.id}" data-logo="${r.logo_url||""}">${r.encoded_name}</option>`).join(""),i=_e.map(r=>`<option value="${r}">${r}</option>`).join(""),p='<option value="">Aucun</option>'+_e.map(r=>`<option value="${r}">${r}</option>`).join(""),d=Lt.map(r=>`<option value="${r}">${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),s=(r,l,o)=>Object.entries(l).map(([c,u])=>`<option value="${c}" ${c===(o||"")?"selected":""}>${u.label}</option>`).join(""),a=Object.keys(Ze).map(r=>`<option value="${r}" ${r===C.skin?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join(""),m=Object.keys(Xe).map(r=>`<option value="${r}" ${r===C.hairColor?"selected":""}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${d}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(r=>`
            <div style="background:${Qe[r]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${a}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${s("av-hair",et,C.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${m}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${s("av-eyebrows",tt,C.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${s("av-eyes",nt,C.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${s("av-nose",it,C.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${s("av-mouth",ot,C.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${s("av-beard",at,C.beard)}</select>
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
  `}async function Ve(e,{toast:n}){const{data:t,error:i}=await h.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=t||[];e.innerHTML=`
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
  `,d(p),document.getElementById("search-users").addEventListener("input",s=>{const a=s.target.value.toLowerCase();d(p.filter(m=>{var r;return m.pseudo.toLowerCase().includes(a)||((r=m.club_name)==null?void 0:r.toLowerCase().includes(a))}))});function d(s){document.getElementById("users-tbody").innerHTML=s.map(a=>{const m=a.mmr??1e3,r=a.mmr_deviation??350,l=a.placement_matches??0,o=rt(m),c=a.ranked_wins??0,u=a.ranked_losses??0,g=a.ranked_draws??0,E=c+u+g,w=E>0?Math.round(c/E*100):null,b=l<10,k=r<80?"#1A6B3C":r<150?"#e67e22":"#bb2020";return`
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
              <span style="font-size:16px">${o.emoji}</span>
              <span style="font-weight:700;color:${o.color}">${o.label}</span>
            </div>
            ${b?`<div style="font-size:10px;color:#e67e22">${l}/10 placement${l<10?` (${10-l} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${c}V ${g}N ${u}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${m}</div>
            <div style="font-size:10px;color:${k}">RD ±${Math.round(r)}</div>
          </td>
          <td>
            ${a.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${a.id}" data-is-admin="${a.is_admin}">
              ${a.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(a=>{a.addEventListener("click",async()=>{const m=a.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${m?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:r}=await h.from("users").update({is_admin:m}).eq("id",a.dataset.toggleAdmin);r?n(r.message,"error"):(n("Rôle mis à jour ✅","success"),Ve(e,{toast:n}))})})}}async function Ke(e,{toast:n}){const{data:t,error:i}=await h.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const p=t||[],d=p.filter(a=>a.status==="active").length,s=p.filter(a=>a.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${d}</div>
        <div style="font-size:11px;color:#666">Annonces actives</div>
      </div>
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#D4A017">${s}</div>
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
            ${p.map(a=>{var o,c,u,g;const m=(o=a.card)==null?void 0:o.player,r=m?`${m.firstname} ${m.surname_encoded}`:((c=a.card)==null?void 0:c.card_type)||"—",l={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${r}</b>${m?`<div style="font-size:10px;color:#999">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((u=a.seller)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=a.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(a.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${l[a.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await h.from("market_listings").update({status:"cancelled"}).eq("id",a.dataset.cancel);m?n(m.message,"error"):(n("Annonce annulée","success"),Ke(e,{toast:n}))})})}async function Mt(e,{toast:n}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await h.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let p=`real_name,encoded_name,country_code,logo_url
`;t.forEach(d=>{p+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(ke).join(",")+`
`}),Q("clubs_export.csv",p),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await h.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let p=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(d=>{var s;p+=[d.firstname,d.surname_real,d.surname_encoded,d.country_code,((s=d.clubs)==null?void 0:s.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(ke).join(",")+`
`}),Q("players_export.csv",p),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("clubs-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),s=Ie(d);if(s.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let a=0,m=0;const r=[];for(const l of s){if(!l.real_name||!l.encoded_name||!l.country_code){m++,r.push(`Ligne ignorée (champs manquants): ${l.real_name||"?"}`);continue}const o={real_name:l.real_name,encoded_name:l.encoded_name.toUpperCase(),country_code:l.country_code.toUpperCase().slice(0,2),logo_url:l.logo_url||null},{error:c}=await h.from("clubs").upsert(o,{onConflict:"encoded_name"});c?(m++,r.push(`${l.encoded_name}: ${c.message}`)):a++}p.innerHTML=`<div style="color:var(--green)">✅ ${a} clubs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${r.slice(0,10).join("<br>")}</div>`:""}`,n(`${a} clubs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const p=document.getElementById("players-import-result");p.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),s=Ie(d);if(s.length===0){p.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:a}=await h.from("clubs").select("id,encoded_name"),m={};(a||[]).forEach(b=>{m[b.encoded_name.toUpperCase()]=b.id});let r=0,l=0;const o=[],c=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const b of s){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){l++,o.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!c.includes(b.job)){l++,o.push(`${b.firstname}: job invalide "${b.job}"`);continue}const k=b.club_encoded_name&&m[b.club_encoded_name.toUpperCase()]||null,$={firstname:b.firstname,surname_real:b.surname_real,surname_encoded:b.surname_encoded||q(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:k,job:b.job,job2:c.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:u.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:g.includes(b.skin)?b.skin:"blanc",hair:E.includes(b.hair)?b.hair:"noir",hair_length:w.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:x}=await h.from("players").insert($);x?(l++,o.push(`${b.firstname} ${b.surname_real}: ${x.message}`)):r++}p.innerHTML=`<div style="color:var(--green)">✅ ${r} joueurs importés</div>
        ${l>0?`<div style="color:#c0392b">❌ ${l} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} joueurs importés`,"success")}catch(d){p.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""})}function ke(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function Q(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),p=document.createElement("a");p.href=i,p.download=e,p.click(),URL.revokeObjectURL(i)}function Ie(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(s=>s.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",p=Le(t,i).map(s=>s.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let s=1;s<n.length;s++){if(!n[s].trim())continue;const a=Le(n[s],i),m={};p.forEach((r,l)=>{m[r]=(a[l]||"").trim()}),!Object.values(m).every(r=>!r)&&d.push(m)}return d}function Le(e,n=","){const t=[];let i="",p=!1;for(let d=0;d<e.length;d++){const s=e[d];p?s==='"'?e[d+1]==='"'?(i+='"',d++):p=!1:i+=s:s==='"'?p=!0:s===n?(t.push(i),i=""):i+=s}return t.push(i),t}const jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Rt(e,{toast:n}){const t=Object.keys(se);let i=t[0];const{data:p}=await h.from("formation_links_overrides").select("formation, links"),d={};(p||[]).forEach(l=>{d[l.formation]=l.links});let s=new Set;function a(l,o){return[l,o].sort().join("-")}function m(l){const o=d[l]||se[l]||[];s=new Set(o.map(([c,u])=>a(c,u)))}m(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(l=>`<option value="${l}" ${l===i?"selected":""}>${l}</option>`).join("")}
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
        <div style="font-weight:700;font-size:13px;margin-bottom:8px">Liens (${s.size}/? actifs)</div>
        <div id="links-list" style="display:flex;flex-direction:column;gap:4px;max-height:520px;overflow-y:auto"></div>
      </div>
    </div>
  `;function r(){const l=lt[i]||{},o=he(i),c=320,u=400,g=22;function E(x){const f=l[x];return f?{x:f.x*c,y:f.y*u}:null}let w=`<svg width="${c}" height="${u}" viewBox="0 0 ${c} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;o.forEach(([x,f],v)=>{const y=E(x),_=E(f);if(!y||!_)return;const L=a(x,f),I=s.has(L),z=I?"#3b82f6":"#999",S=I?.95:.35,T=I?4:3;w+=`<line x1="${y.x}" y1="${y.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,w+=`<line x1="${y.x}" y1="${y.y}" x2="${_.x}" y2="${_.y}"
        stroke="${z}" stroke-width="${T}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${L}"/>`});for(const x of Object.keys(l)){const f=E(x);if(!f)continue;const v=x.replace(/\d+/,""),y=jt[v]||"#555";w+=`<circle cx="${f.x}" cy="${f.y}" r="${g}" fill="${y}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${f.x}" y="${f.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${x}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const b=document.getElementById("links-list");b.innerHTML=o.map(([x,f])=>{const v=a(x,f),y=s.has(v);return`
        <button class="link-toggle" data-key="${v}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${y?"#3b82f6":"#ddd"};
          background:${y?"#eaf2ff":"#fafafa"};
          color:${y?"#1d4ed8":"#888"}">
          <span>${x} ↔ ${f}</span>
          <span>${y?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const k=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');k&&(k.textContent=`Liens (${s.size}/${o.length} actifs)`);function $(x){s.has(x)?s.delete(x):s.add(x),r()}e.querySelectorAll(".link-hit").forEach(x=>{x.addEventListener("click",()=>$(x.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(x=>{x.addEventListener("click",()=>$(x.dataset.key))})}r(),document.getElementById("formation-select").addEventListener("change",l=>{i=l.target.value,m(i),r()}),document.getElementById("reset-btn").addEventListener("click",()=>{const l=se[i]||[];s=new Set(l.map(([o,c])=>a(o,c))),r(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const o=he(i).filter(([u,g])=>s.has(a(u,g))),{error:c}=await h.from("formation_links_overrides").upsert({formation:i,links:o,updated_at:new Date().toISOString()});if(c){n(c.message,"error");return}d[i]=o,n(`Liens enregistrés pour ${i} (${o.length} actifs)`,"success")})}const Nt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Dt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],qt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function Pt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await h.from("booster_configs").select("*").order("sort_order");let t=null,i=[],p=null;const d=()=>window.innerWidth<700;async function s(){if(!t){i=[];return}if(t!==p){const{data:o}=await h.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=o||[],p=t}}function a(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(o=>`
      <div class="booster-row" data-id="${o.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${o.id===t?"#f0f7f0":"#fff"}">
        ${o.image_url?`<img src="/icons/${o.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</div>
          <div style="font-size:11px;color:#888">
            ${o.price_type==="credits"?(o.price_credits||0)+" cr.":o.price_type==="pub"?"Pub":"Gratuit"}
            · ${o.card_count||5} cartes · ${o.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${o.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function m(){const o=t?(n||[]).find(g=>g.id===t):null;if(!o)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const c=i.reduce((g,E)=>g+Number(E.percentage||0),0),u=Math.abs(c-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <h3 style="margin:0 0 14px;font-size:16px">${o.name}</h3>

      <!-- Infos de base -->
      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="f-name" value="${o.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="f-image-url" value="${o.image_url||""}" placeholder="ex: booster-players.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          ${o.image_url?`<img src="/icons/${o.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${qt.map(g=>`<option value="${g.value}" ${o.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div id="credits-field">
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">CRÉDITS</label>
            <input id="f-price-credits" type="number" min="0" value="${o.price_credits||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NB CARTES</label>
            <input id="f-card-count" type="number" min="1" max="10" value="${o.card_count||5}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="f-sort" type="number" value="${o.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="f-active" ${o.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
          <label for="f-active" style="font-size:13px;cursor:pointer;font-weight:600">Booster actif (visible dans la boutique)</label>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${o.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${o.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${o.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${o.available_until||""}"
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
            <span style="margin-left:10px;font-size:12px;color:${u?"#27ae60":"#e74c3c"};font-weight:700">
              Total : ${c.toFixed(1)}% ${u?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((g,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Nt.map(w=>`<option value="${w.value}" ${g.card_type===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Dt.map(w=>`<option value="${w.value}" ${(g.rarity||"")===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="1" max="10" value="${g.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="1" max="10" value="${g.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${g.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function r(o=!1){o||await s();const c=!t&&d(),u=t&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||c||!t?a():""}
      ${!d()||u?m():""}
    </div>`,l()}function l(){var u,g,E,w,b,k,$;const o=x=>e.querySelector(x);e.querySelectorAll(".booster-row").forEach(x=>{x.addEventListener("click",f=>{f.target.closest(".btn-delete")||(t=x.dataset.id,p=null,r())})}),(u=o("#btn-back"))==null||u.addEventListener("click",()=>{t=null,r()}),(g=o("#btn-new"))==null||g.addEventListener("click",async()=>{const x=prompt("Nom du nouveau booster :");if(!(x!=null&&x.trim()))return;const{data:f,error:v}=await h.from("booster_configs").insert({name:x.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(v){alert(v.message);return}n.push(f),t=f.id,p=null,r()}),e.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await h.from("booster_configs").delete().eq("id",x.dataset.id);const v=n.findIndex(y=>y.id===x.dataset.id);v>-1&&n.splice(v,1),t===x.dataset.id&&(t=null,p=null),r()})}),(E=o("#btn-cancel"))==null||E.addEventListener("click",()=>{t=null,r()}),(w=o("#f-price-type"))==null||w.addEventListener("change",x=>{const f=o("#credits-field");f&&(f.style.opacity=x.target.value!=="credits"?"0.4":"1")}),(b=o("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var f;const x=o("#icon-picker-grid");if(x){if(x.style.display!=="none"){x.style.display="none";return}x.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',x.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(y)?y.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){x.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((f=o("#f-image-url"))==null?void 0:f.value)||"";x.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,x.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const z=o("#f-image-url");z&&(z.value=I.dataset.name),x.style.display="none"})})}catch(v){x.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${v.message}</div>`}}});function c(){e.querySelectorAll("[data-rate-idx]").forEach(x=>{var v,y,_,L,I;const f=Number(x.dataset.rateIdx);f>=0&&f<i.length&&(i[f].card_type=((v=x.querySelector(".rate-type"))==null?void 0:v.value)||"player",i[f].rarity=((y=x.querySelector(".rate-rarity"))==null?void 0:y.value)||null,i[f].note_min=Number((_=x.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[f].note_max=Number((L=x.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[f].percentage=Number((I=x.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(k=o("#btn-add-rate"))==null||k.addEventListener("click",()=>{c(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),r(!0)}),e.querySelectorAll(".btn-del-rate").forEach(x=>{x.addEventListener("click",()=>{c(),i.splice(Number(x.dataset.idx),1),r(!0)})}),($=o("#btn-save"))==null||$.addEventListener("click",async()=>{var L,I,z,S,T,H,G,U,V,K,J,Y,M;const x=(n||[]).find(B=>B.id===t);if(!x)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(B=>{var ge,fe,be,xe,ve;const le=Number(B.dataset.rateIdx);f.push({booster_id:t,card_type:((ge=B.querySelector(".rate-type"))==null?void 0:ge.value)||"player",rarity:((fe=B.querySelector(".rate-rarity"))==null?void 0:fe.value)||null,note_min:Number((be=B.querySelector(".rate-note-min"))==null?void 0:be.value)||null,note_max:Number((xe=B.querySelector(".rate-note-max"))==null?void 0:xe.value)||null,percentage:Number((ve=B.querySelector(".rate-pct"))==null?void 0:ve.value)||0,sort_order:le});const P=f[f.length-1];P.rarity||(P.rarity=null),P.note_min||(P.note_min=null),P.note_max||(P.note_max=null)});const v=f.reduce((B,le)=>B+le.percentage,0);if(f.length&&Math.abs(v-100)>.5){alert(`La somme doit faire 100% (actuellement ${v.toFixed(1)}%)`);return}const y={name:((I=(L=o("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||x.name,image_url:((S=(z=o("#f-image-url"))==null?void 0:z.value)==null?void 0:S.trim())||null,price_type:(T=o("#f-price-type"))==null?void 0:T.value,price_credits:Number((H=o("#f-price-credits"))==null?void 0:H.value)||0,card_count:Number((G=o("#f-card-count"))==null?void 0:G.value)||5,is_active:((U=o("#f-active"))==null?void 0:U.checked)??x.is_active,allow_duplicates:((V=o("#f-allow-dup"))==null?void 0:V.checked)??!0,sort_order:Number((K=o("#f-sort"))==null?void 0:K.value)||0,max_per_user:(J=o("#f-max-per-user"))!=null&&J.value?Number(o("#f-max-per-user").value):null,available_from:((Y=o("#f-available-from"))==null?void 0:Y.value)||null,available_until:((M=o("#f-available-until"))==null?void 0:M.value)||null},{error:_}=await h.from("booster_configs").update(y).eq("id",t);if(_){alert(_.message);return}if(Object.assign(x,y),await h.from("booster_drop_rates").delete().eq("booster_id",t),f.length){const{error:B}=await h.from("booster_drop_rates").insert(f);if(B){alert(B.message);return}}i=f,p=t,alert("✅ Booster enregistré !"),r(!0)})}r()}const Je=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ot(e){await pe(e)}async function pe(e){const{data:n,error:t}=await h.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
          ${(n||[]).map(i=>Ft(i)).join("")}
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
              ${Je.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Be(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ht(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const p=(n||[]).find(d=>d.id===i.dataset.edit);p&&i.addEventListener("click",()=>Be(p))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await h.from("sell_price_configs").delete().eq("id",i.dataset.delete),await pe(e))})})}function Ft(e){const n=Je.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Be(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Ht(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,p=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(p>d){alert("Note min doit être ≤ note max");return}const s={rarity:t,price:i,note_min:p,note_max:d,updated_at:new Date().toISOString()};let a;if(n?{error:a}=await h.from("sell_price_configs").update(s).eq("id",n):{error:a}=await h.from("sell_price_configs").insert(s),a){alert("Erreur : "+a.message);return}document.getElementById("config-form").style.display="none",await pe(e)}async function Gt(e){await ue(e)}async function ue(e){const{data:n}=await h.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
    <div style="padding:20px;max-width:760px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">📰 Journal des mises à jour</h2>
        <button id="add-article" class="btn btn-primary">+ Nouvel article</button>
      </div>

      <div id="articles-list" style="display:flex;flex-direction:column;gap:12px">
        ${(n||[]).map(t=>Ut(t)).join("")||`<div style="color:#aaa;padding:24px;text-align:center">Aucun article pour l'instant.</div>`}
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Vt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const i=(n||[]).find(p=>p.id===t.dataset.edit);i&&t.addEventListener("click",()=>ze(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await h.from("patch_notes").delete().eq("id",t.dataset.delete),await ue(e))})})}function Ut(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function ze(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,n.scrollIntoView({behavior:"smooth"})}async function Vt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),p=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,s=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const a=s?new Date(s).toISOString():new Date().toISOString(),m={title:t,description:i,image_url:p,is_published:d,published_at:a};let r;if(n?{error:r}=await h.from("patch_notes").update(m).eq("id",n):{error:r}=await h.from("patch_notes").insert(m),r){alert("Erreur : "+r.message);return}document.getElementById("article-form").style.display="none",await ue(e)}async function Kt(e){await F(e)}async function F(e){var l,o,c,u,g,E,w,b,k,$,x,f;const{data:n}=await h.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(n||[]).map(v=>Jt(v)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([v,y,_])=>`<button type="button" data-cmd="${y}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${v}</button>`).join("")}
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
    </div>`,(l=document.getElementById("ts-add"))==null||l.addEventListener("click",()=>Ae(null,(n==null?void 0:n.length)||0)),(o=document.getElementById("ts-reset"))==null||o.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:v}=await h.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(v?"Erreur : "+v.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(c=document.getElementById("ts-cancel"))==null||c.addEventListener("click",Ye),(u=document.getElementById("ts-save"))==null||u.addEventListener("click",()=>Wt(e)),(g=document.getElementById("ts-preview-btn"))==null||g.addEventListener("click",Yt);const t=document.getElementById("ts-editor"),i=()=>{const v=document.getElementById("ts-content");v&&t&&(v.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const p=()=>{document.activeElement!==t&&(t==null||t.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(v=>{v.addEventListener("mousedown",y=>{y.preventDefault(),p();const _=v.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",v=>{v.preventDefault(),p();const y=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");y&&(document.execCommand("foreColor",!1,y),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",v=>{v.preventDefault(),p(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),s=document.getElementById("ts-img-preview"),a=document.getElementById("ts-img-preview-el"),m=document.getElementById("ts-img-picker-grid"),r=()=>{var y;const v=(y=d==null?void 0:d.value)==null?void 0:y.trim();if(v){const _="/";a.src=`${_}icons/${v}`,s.style.display="block"}else s.style.display="none"};d==null||d.addEventListener("input",r),(k=document.getElementById("ts-img-clear"))==null||k.addEventListener("click",()=>{d&&(d.value=""),s.style.display="none",m.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',m.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(y)?y.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){m.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";m.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",m.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),r(),m.style.display="none"})})}catch(v){m.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+v.message+"</div>"}}),(x=document.getElementById("ts-color"))==null||x.addEventListener("input",v=>{const y=document.getElementById("ts-color-hex");y&&(y.value=v.target.value)}),(f=document.getElementById("ts-color-hex"))==null||f.addEventListener("input",v=>{const y=v.target.value;if(/^#[0-9a-fA-F]{6}$/.test(y)){const _=document.getElementById("ts-color");_&&(_.value=y)}}),e.querySelectorAll("[data-edit]").forEach(v=>{const y=(n||[]).find(_=>_.id===v.dataset.edit);y&&v.addEventListener("click",()=>Ae(y))}),e.querySelectorAll("[data-delete]").forEach(v=>{v.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await h.from("tutorial_steps").delete().eq("id",v.dataset.delete),F(e))})}),e.querySelectorAll("[data-toggle]").forEach(v=>{v.addEventListener("click",async()=>{const y=(n||[]).find(_=>_.id===v.dataset.toggle);y&&(await h.from("tutorial_steps").update({is_active:!y.is_active}).eq("id",y.id),F(e))})}),e.querySelectorAll("[data-up]").forEach(v=>{v.addEventListener("click",async()=>{const y=n||[],_=y.findIndex(L=>L.id===v.dataset.up);_<=0||(await Promise.all([h.from("tutorial_steps").update({step_order:y[_-1].step_order}).eq("id",y[_].id),h.from("tutorial_steps").update({step_order:y[_].step_order}).eq("id",y[_-1].id)]),F(e))})}),e.querySelectorAll("[data-down]").forEach(v=>{v.addEventListener("click",async()=>{const y=n||[],_=y.findIndex(L=>L.id===v.dataset.down);_<0||_>=y.length-1||(await Promise.all([h.from("tutorial_steps").update({step_order:y[_+1].step_order}).eq("id",y[_].id),h.from("tutorial_steps").update({step_order:y[_].step_order}).eq("id",y[_+1].id)]),F(e))})})}function Jt(e){return`
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
  </div>`}function Ae(e,n=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const p=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=p);const s=document.getElementById("ts-img-preview"),a=document.getElementById("ts-img-preview-el");if(p&&s&&a){const m="/";a.src=`${m}icons/${p}`,s.style.display="block"}else s&&(s.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ye(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Yt(){var r,l;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",p=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(l=(r=document.getElementById("ts-image"))==null?void 0:r.value)==null?void 0:l.trim(),a=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",m=document.getElementById("ts-preview-area");m.innerHTML=`
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
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${p};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,m.querySelectorAll("ul,ol").forEach(o=>{o.style.paddingLeft="20px",o.style.margin="6px 0"}),m.querySelectorAll("li").forEach(o=>{o.style.marginBottom="4px"}),m.querySelectorAll("p").forEach(o=>{o.style.marginBottom="8px"})}async function Wt(e){var o,c;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),p=document.getElementById("ts-editor"),d=(p?p.innerHTML:document.getElementById("ts-content").value).trim(),s=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",a=parseInt(document.getElementById("ts-order").value)||0,m=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const r={emoji:t,title:i,content:d,color:s,step_order:a,is_active:m,image_url:((c=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:c.trim())||null};let l;if(n?{error:l}=await h.from("tutorial_steps").update(r).eq("id",n):{error:l}=await h.from("tutorial_steps").insert(r),l){alert("Erreur : "+l.message);return}Ye(),F(e)}const Zt="/",We="#E87722",Xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Qt(e){await me(e)}async function me(e){var i,p,d,s;const[{data:n},{data:t}]=await Promise.all([h.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),h.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(n||[]).map(a=>en(a)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${Xt.map(([a,m])=>`<option value="${a}">${m} (${a})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Ce(null)),(p=document.getElementById("st-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>nn(e)),(s=document.getElementById("st-preview-btn"))==null||s.addEventListener("click",()=>ie()),["st-name","st-club","st-country","st-image"].forEach(a=>{var m,r;(m=document.getElementById(a))==null||m.addEventListener("input",ie),(r=document.getElementById(a))==null||r.addEventListener("change",ie)}),e.querySelectorAll("[data-edit]").forEach(a=>{const m=(n||[]).find(r=>r.id===a.dataset.edit);m&&a.addEventListener("click",()=>Ce(m))}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await h.from("stadium_definitions").delete().eq("id",a.dataset.delete),me(e))})})}function en(e){var t,i;const n=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${We};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${n}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Ce(e,n){var i,p;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",ie((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(p=e==null?void 0:e.club)==null?void 0:p.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function ie(){var r,l,o,c,u,g,E;const e=((r=document.getElementById("st-name"))==null?void 0:r.value)||"NOM DU STADE",n=(o=(l=document.getElementById("st-image"))==null?void 0:l.value)==null?void 0:o.trim(),t=(u=(c=document.getElementById("st-country"))==null?void 0:c.value)==null?void 0:u.trim(),i=document.getElementById("st-club"),p=(i==null?void 0:i.selectedIndex)||0,d=i&&p>0?i.options[p].text:"",s=((E=(g=i==null?void 0:i.options[p])==null?void 0:g.getAttribute)==null?void 0:E.call(g,"data-logo"))||"";let a;n?a=`<img src="${Zt}icons/${n}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:s?a=`<img src="${s}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?a=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:a='<div style="font-size:36px;text-align:center">🏟️</div>';const m=d||t||"—";document.getElementById("st-preview-card").innerHTML=tn(e,a,m,!0)}function tn(e,n,t,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${We},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${n}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function nn(e){const n=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,p=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const s={name:t,club_id:i,country_code:p,image_url:d},{error:a}=n?await h.from("stadium_definitions").update(s).eq("id",n):await h.from("stadium_definitions").insert(s);if(a){alert("Erreur : "+a.message);return}document.getElementById("st-form").style.display="none",me(e)}const R=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],N=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function on(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await h.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],p=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,s=c=>e.querySelector(c);function a(c,u=130){if(!c)return"";const g=R.find($=>$.value===c.gc_type)||R[0],E=N.find($=>$.value===c.color)||N[0],w=Math.round(u*.55),b=Math.round(u*.15),k=Math.round(u*.3);return`<div style="width:${u}px;height:${Math.round(u*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${g.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${b}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(u/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${c.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${c.image_url?`<img src="/icons/${c.image_url}" style="max-height:${w}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(u*.3)}px">${g.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${k}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(u/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(c.effect||"").slice(0,60)}${(c.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function m(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(c=>{const u=R.find(E=>E.value===c.gc_type)||R[0],g=N.find(E=>E.value===c.color)||N[0];return`
        <div class="gc-row" data-id="${c.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${c.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${g.hex};background:${u.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${c.image_url?`<img src="/icons/${c.image_url}" style="width:28px;height:28px;object-fit:contain">`:u.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
            <div style="font-size:11px;color:#888">${u.label} · ${c.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${c.id}" data-active="${c.is_active}"
              style="background:${c.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${c.is_active?"#27ae60":"#e74c3c"};color:${c.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${c.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${c.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function r(){const c=t?(n||[]).find(g=>g.id===t):null;if(!c)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const u=R.find(g=>g.value===c.gc_type)||R[0];return N.find(g=>g.value===c.color)||N[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${u.bg};border-radius:12px">
        ${a(c,d()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${c.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${c.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${R.map(g=>`<option value="${g.value}" ${c.gc_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(g=>`<option value="${g.value}" ${c.color===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${c.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${c.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${c.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(g=>`<option value="${g.value}" ${(c.effect_type||"BOOST_STAT")===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const g=c.effect_params||{},E=i.find(w=>w.value===(c.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${E.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${g.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${g.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(g.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${g.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${E.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${p.map(w=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${w}" ${!g.roles||g.roles.includes(w)?"checked":""}> ${w}
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
    </div>`}function l(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||!t?m():""}
      ${!d()||t?r():""}
    </div>`,o()}function o(){var c,u,g,E,w;e.querySelectorAll(".gc-row").forEach(b=>{b.addEventListener("click",k=>{k.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=b.dataset.id,l())})}),(c=s("#btn-gc-back"))==null||c.addEventListener("click",()=>{t=null,l()}),(u=s("#btn-cancel-gc"))==null||u.addEventListener("click",()=>{t=null,l()}),(g=s("#btn-new-gc"))==null||g.addEventListener("click",async()=>{const b=prompt("Nom de la carte Game Changer :");if(!(b!=null&&b.trim()))return;const{data:k,error:$}=await h.from("gc_definitions").insert({name:b.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}n.push(k),t=k.id,l()}),e.querySelectorAll(".btn-toggle-gc").forEach(b=>{b.addEventListener("click",async k=>{k.stopPropagation();const $=b.dataset.active!=="true";await h.from("gc_definitions").update({is_active:$}).eq("id",b.dataset.id);const x=n.find(f=>f.id===b.dataset.id);x&&(x.is_active=$),l()})}),e.querySelectorAll(".btn-delete-gc").forEach(b=>{b.addEventListener("click",async k=>{if(k.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await h.from("gc_definitions").delete().eq("id",b.dataset.id);const $=n.findIndex(x=>x.id===b.dataset.id);$>-1&&n.splice($,1),t===b.dataset.id&&(t=null),l()})}),(E=s("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var k;const b=s("#gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(x)?x.filter(y=>y.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(y.name)):[];if(!f.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const v=((k=s("#gc-image-url"))==null?void 0:k.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(y=>`
          <div class="gc-icon-item" data-name="${y.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${y.name===v?"#7a28b8":"#ddd"};background:${y.name===v?"#f5f0ff":"#fff"}">
            <img src="/icons/${y.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".gc-icon-item").forEach(y=>{y.addEventListener("click",()=>{const _=s("#gc-image-url");_&&(_.value=y.dataset.name),b.style.display="none"})})}catch($){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(w=s("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var y,_,L,I,z,S,T,H,G,U,V,K,J,Y;const b=n.find(M=>M.id===t);if(!b)return;const k=i.find(M=>{var B;return M.value===(((B=s("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT")})||i[0],$=k.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,x={...k.hasValue?{value:Number((y=s("#gc-p-value"))==null?void 0:y.value)||2}:{},...k.hasCount?{count:Number((_=s("#gc-p-count"))==null?void 0:_.value)||1}:{},...k.hasTarget?{target:((L=s("#gc-p-target"))==null?void 0:L.value)||"home"}:{},...k.hasRoles?{roles:$!=null&&$.length?$:null}:{}},f={name:((z=(I=s("#gc-name"))==null?void 0:I.value)==null?void 0:z.trim())||b.name,effect:((T=(S=s("#gc-effect"))==null?void 0:S.value)==null?void 0:T.trim())||null,image_url:((G=(H=s("#gc-image-url"))==null?void 0:H.value)==null?void 0:G.trim())||null,gc_type:((U=s("#gc-type"))==null?void 0:U.value)||"game_changer",color:((V=s("#gc-color"))==null?void 0:V.value)||"purple",sort_order:Number((K=s("#gc-sort"))==null?void 0:K.value)||0,is_active:((J=s("#gc-active"))==null?void 0:J.checked)??b.is_active,effect_type:((Y=s("#gc-effect-type"))==null?void 0:Y.value)||"BOOST_STAT",effect_params:x},{error:v}=await h.from("gc_definitions").update(f).eq("id",t);if(v){alert(v.message);return}Object.assign(b,f),alert("✅ Carte enregistrée !"),l()})}l()}async function an(e,{toast:n,openModal:t,closeModal:i}){await O(e,{toast:n,openModal:t,closeModal:i})}async function O(e,n){var x;const{toast:t,openModal:i,closeModal:p}=n,[{data:d,error:s},{data:a}]=await Promise.all([h.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),h.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const m=d||[],r=m.find(f=>f.is_active),l=(a||[]).filter(f=>(f.placement_matches||0)>=1),o=l.filter(f=>(f.placement_matches||0)>=10),c=["bronze","silver","gold","platinum","diamond","master"],u={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},g={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};c.forEach(f=>{w[f]=0}),o.forEach(f=>{const v=f.rank_tier||"bronze";w[v]!==void 0&&w[v]++});const b=o.length?Math.round(o.reduce((f,v)=>f+(v.mmr||1e3),0)/o.length):0;function k(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(f){const v=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<v?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${r?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${r.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${o.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${b}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(r.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${o.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${c.map(f=>{const v=w[f],y=o.length>0?Math.round(v/o.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[f]} ${u[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${y}%;background:${g[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${v} (${y}%)</span>
              </div>`}).join("")}
        </div>`:`<div style="font-size:12px;color:var(--gray-600)">Aucun joueur classé pour l'instant.</div>`}
      </div>`:`
      <div class="card-panel" style="background:rgba(230,120,34,0.08);border:1.5px solid #e67e22">
        <div style="font-weight:700;color:#e67e22">⚠️ Aucune saison active</div>
        <div style="font-size:13px;color:var(--gray-600);margin-top:4px">Le mode Ranked est désactivé jusqu'à l'activation d'une saison.</div>
      </div>`}

      <!-- Header + bouton créer -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${m.length})</div>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(f=>{const v=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),y=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${k(f.start_at)}</td>
                      <td style="font-size:12px">${k(f.end_at)}</td>
                      <td style="font-size:12px">${v} jours</td>
                      <td>${$(f)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${f.id}">✏️ Modifier</button>
                        ${f.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${f.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${f.id}">▶ Activer</button>`}
                        ${y?`<button class="btn btn-danger btn-sm" data-delete="${f.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(x=document.getElementById("create-season-btn"))==null||x.addEventListener("click",()=>{Se(null,{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const v=m.find(y=>y.id==f.dataset.edit);f.addEventListener("click",()=>{Se(v,{toast:t,openModal:i,closeModal:p,reload:()=>O(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const v=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:y}=await h.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(y){t(y.message,"error");return}const{error:_}=await h.from("ranked_seasons").update({is_active:!0}).eq("id",v);if(_){t(_.message,"error");return}await h.from("users").update({current_season_id:v}).gt("placement_matches",0),t("Saison activée ✅","success"),O(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:v}=await h.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(v){t(v.message,"error");return}t("Saison désactivée","success"),O(e,n)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:v}=await h.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(v){t(v.message,"error");return}t("Saison supprimée","success"),O(e,n)})})}function Se(e,{toast:n,openModal:t,closeModal:i,reload:p}){const d=!!e,s=new Date().toISOString().slice(0,16),a=new Date(Date.now()+90*864e5).toISOString().slice(0,16),m=e?new Date(e.start_at).toISOString().slice(0,16):s,r=e?new Date(e.end_at).toISOString().slice(0,16):a,l=(e==null?void 0:e.name)||"";t(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${l}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${m}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${r}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function o(){var w,b;const c=(w=document.getElementById("season-start"))==null?void 0:w.value,u=(b=document.getElementById("season-end"))==null?void 0:b.value,g=document.getElementById("season-duration");if(!c||!u||!g)return;const E=Math.round((new Date(u)-new Date(c))/864e5);g.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",g.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var c,u,g;(c=document.getElementById("season-start"))==null||c.addEventListener("input",o),(u=document.getElementById("season-end"))==null||u.addEventListener("input",o),o(),(g=document.getElementById("season-save-btn"))==null||g.addEventListener("click",async()=>{var v,y,_;const E=(v=document.getElementById("season-name"))==null?void 0:v.value.trim(),w=(y=document.getElementById("season-start"))==null?void 0:y.value,b=(_=document.getElementById("season-end"))==null?void 0:_.value,k=document.getElementById("season-error");if(!E){k.textContent="Le nom est requis.";return}if(!w){k.textContent="La date de début est requise.";return}if(!b){k.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(w)){k.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const x={name:E,start_at:new Date(w).toISOString(),end_at:new Date(b).toISOString()};let f;if(d?{error:f}=await h.from("ranked_seasons").update(x).eq("id",e.id):{error:f}=await h.from("ranked_seasons").insert({...x,is_active:!1}),f){k.textContent=f.message,$.disabled=!1,$.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}n(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),p()})},50)}st(Ne);function rn(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function ln(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ce(){document.getElementById("modal-overlay").classList.add("hidden")}const Te={dashboard:{title:"Dashboard",fn:dt},players:{title:"Joueurs & Cartes",fn:ut},clubs:{title:"Clubs",fn:$t},"card-builder":{title:"Card Builder",fn:zt},users:{title:"Managers",fn:Ve},market:{title:"Marché des transferts",fn:Ke},"import-export":{title:"Import / Export CSV",fn:Mt},formations:{title:"Formations & Liens",fn:Rt},"boosters-config":{title:"Boosters",fn:Pt},"sell-price":{title:"Prix vente directe",fn:Ot},journal:{title:"Journal",fn:Gt},tutorial:{title:"Tutoriel",fn:Kt},stadiums:{title:"Stades",fn:Qt},"gc-cards":{title:"Game Changers",fn:on},"ranked-seasons":{title:"Saisons Ranked",fn:an}};async function re(e){document.querySelectorAll(".admin-sidebar nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=Te[e]||Te.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:rn,openModal:ln,closeModal:ce,navigate:re})}catch(p){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${p.message}</div>`,console.error(p)}}async function sn(){var n;const{data:{session:e}}=await h.auth.getSession();e&&await Me(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,p=document.getElementById("auth-error");if(p.textContent="",!t||!i){p.textContent="Remplissez tous les champs.";return}const{data:d,error:s}=await h.auth.signInWithPassword({email:t,password:i});if(s){p.textContent=s.message;return}await Me(d.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ce),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ce()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),re(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{re(t.target.value)})}async function Me(e){const{data:n,error:t}=await h.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await h.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,re("dashboard")}sn();
