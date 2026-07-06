import{s as h,e as P,r as Me,g as je,K as We,D as C,S as Ze,a as A,H as Xe,R as Qe,b as Re,c as et,E as tt,d as nt,N as it,M as ot,B as at,f as rt,F as se,h as ye,i as lt,j as st}from"./formation-links-DwOY6Nx_.js";async function dt(e){const[{count:n},{count:t},{count:i},{count:c},{count:p}]=await Promise.all([h.from("players").select("*",{count:"exact",head:!0}),h.from("clubs").select("*",{count:"exact",head:!0}),h.from("users").select("*",{count:"exact",head:!0}),h.from("cards").select("*",{count:"exact",head:!0}),h.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${W("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${W("🏟️","Clubs",t??"–","#D4A017")}
      ${W("👥","Managers",i??"–","#7a28b8")}
      ${W("📦","Cartes possédées",c??"–","#2a8f52")}
      ${W("⚽","Matchs joués",p??"–","#bb2020")}
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
  `,window.adminNav=s=>{var r;(r=document.querySelector(`[data-page="${s}"]`))==null||r.click()}}function W(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const de={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},ct={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ne={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},pt=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];async function ut(e,n){await oe(e,n)}async function oe(e,n){const{toast:t}=n,[{data:i,error:c},{data:p}]=await Promise.all([h.from("players").select("*, clubs(id,encoded_name,logo_url,kit_color1,kit_color2)").order("surname_encoded"),h.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}mt(e,i||[],p||[],n)}function mt(e,n,t,i){var l,a;const{toast:c}=i;e.innerHTML=`
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
          ${Object.entries(de).map(([o,d])=>`<option value="${o}">${d}</option>`).join("")}
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
    </div>`;function p(){const o=document.getElementById("search-players").value.toLowerCase(),d=document.getElementById("filter-job").value,u=document.getElementById("filter-rarity").value,g=document.getElementById("filter-club").value,E=document.getElementById("filter-country").value;return n.filter(w=>(!o||`${w.firstname} ${w.surname_encoded} ${w.surname_real||""}`.toLowerCase().includes(o))&&(!d||w.job===d)&&(!u||w.rarity===u)&&(!g||w.club_id===g)&&(!E||w.country_code===E))}const s=new Set;function r(){const o=document.getElementById("bulk-bar"),d=document.getElementById("bulk-count");o&&(s.size>0?(o.style.display="flex",d.textContent=`${s.size} joueur(s) sélectionné(s)`):o.style.display="none")}function m(){const o=p();document.getElementById("count-label").textContent=`${o.length} joueur(s)`;const d=document.getElementById("players-list");if(!o.length){d.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}d.innerHTML=o.map(u=>{const g=ct[u.rarity]||"#aaa",E=Ne[u.job]||"#aaa",w=s.has(u.id);return`
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
        </div>`}).join(""),d.querySelectorAll("[data-check]").forEach(u=>{u.addEventListener("change",()=>{u.checked?s.add(u.dataset.check):s.delete(u.dataset.check),r();const g=u.closest(".card-panel");g&&(g.style.border=u.checked?"2px solid #bb2020":"",g.style.background=u.checked?"rgba(187,32,32,0.05)":"")})}),d.querySelectorAll("[data-edit]").forEach(u=>{const g=n.find(E=>E.id===u.dataset.edit);u.addEventListener("click",()=>he(g,t,e,i))}),d.querySelectorAll("[data-del]").forEach(u=>{u.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ?"))return;const{error:g}=await h.from("players").delete().eq("id",u.dataset.del);g?c(g.message,"error"):(c("Joueur supprimé ✅","success"),oe(e,i))})})}m(),document.getElementById("search-players").addEventListener("input",m),document.getElementById("filter-job").addEventListener("change",m),document.getElementById("filter-rarity").addEventListener("change",m),document.getElementById("filter-club").addEventListener("change",m),document.getElementById("filter-country").addEventListener("change",m),(l=document.getElementById("bulk-cancel-btn"))==null||l.addEventListener("click",()=>{s.clear(),r(),m()}),(a=document.getElementById("bulk-delete-btn"))==null||a.addEventListener("click",async()=>{if(!s.size||!confirm(`Supprimer ${s.size} joueur(s) ? Cette action est irréversible.`))return;const o=[...s],{error:d}=await h.from("players").delete().in("id",o);if(d){c(d.message,"error");return}c(`${o.length} joueur(s) supprimé(s) ✅`,"success"),s.clear(),oe(e,i)}),document.getElementById("add-player-btn").addEventListener("click",()=>he(null,t,e,i))}function gt(e){return e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a}function he(e,n,t,i){const{toast:c,openModal:p,closeModal:s}=i,r=!!e,m='<option value="">— Club —</option>'+n.map(a=>`<option value="${a.id}" ${(e==null?void 0:e.club_id)===a.id?"selected":""}>${a.encoded_name}</option>`).join(""),l=pt.map(a=>`<option value="${a}" ${((e==null?void 0:e.country_code)||"FR")===a?"selected":""}>${a}</option>`).join("");p(r?`✏️ ${e.firstname} ${e.surname_encoded}`:"➕ Nouveau joueur",`<div style="display:flex;flex-direction:column;gap:12px">

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
          <select id="pm-country">${l}</select>
        </div>
      </div>

      <!-- Poste + club + rareté -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="form-group">
          <label>Poste 1 *</label>
          <select id="pm-job">
            ${["GK","DEF","MIL","ATT"].map(a=>`<option value="${a}" ${(e==null?void 0:e.job)===a?"selected":""}>${a}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label>Poste 2</label>
          <select id="pm-job2">
            <option value="">Aucun</option>
            ${["GK","DEF","MIL","ATT"].map(a=>`<option value="${a}" ${(e==null?void 0:e.job2)===a?"selected":""}>${a}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label>Rareté</label>
          <select id="pm-rarity">
            ${["normal","pepite","papyte","legende"].map(a=>`<option value="${a}" ${(e==null?void 0:e.rarity)===a?"selected":""}>${de[a]}</option>`).join("")}
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
          ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([a,o,d])=>`
            <div class="form-group" style="text-align:center">
              <label style="color:${Ne[a]};font-weight:700">${a}</label>
              <input id="${o}" type="number" min="0" max="20" value="${(e==null?void 0:e[d])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
              ${["blanc","metisse","typ","noir"].map(a=>`<option value="${a}" ${(e==null?void 0:e.skin)===a?"selected":""}>${a}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Cheveux</label>
            <select id="pm-hair">
              ${["blond","marron","noir","chauve"].map(a=>`<option value="${a}" ${(e==null?void 0:e.hair)===a?"selected":""}>${a}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Longueur</label>
            <select id="pm-hlen">
              ${["rase","court","milong","long"].map(a=>`<option value="${a}" ${(e==null?void 0:e.hair_length)===a?"selected":""}>${a}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      <div id="pm-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="pm-save" style="width:100%;padding:14px;font-size:15px">
        ${r?"💾 Enregistrer":"✅ Créer le joueur"}
      </button>
    </div>`),setTimeout(()=>{var o,d,u;Z();const a=["pm-fn","pm-enc","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-skin","pm-hair","pm-hlen","pm-club"];a.forEach(g=>{var E;return(E=document.getElementById(g))==null?void 0:E.addEventListener("input",Z)}),a.forEach(g=>{var E;return(E=document.getElementById(g))==null?void 0:E.addEventListener("change",Z)}),(o=document.getElementById("pm-encode-btn"))==null||o.addEventListener("click",()=>{var E;const g=((E=document.getElementById("pm-real"))==null?void 0:E.value)||"";document.getElementById("pm-enc").value=P(g.toUpperCase()),Z()}),(d=document.getElementById("pm-real"))==null||d.addEventListener("input",()=>{const g=document.getElementById("pm-enc");g!=null&&g.value||(g.value=P(document.getElementById("pm-real").value.toUpperCase()),Z())}),(u=document.getElementById("pm-save"))==null||u.addEventListener("click",()=>ft(e,r,t,i))},50)}function De(){const e=i=>{var c;return(c=document.getElementById(i))==null?void 0:c.value},n=document.getElementById("pm-club"),t=n==null?void 0:n.options[n.selectedIndex];return{firstname:(e("pm-fn")||"").trim(),surname_real:(e("pm-real")||"").trim(),surname_encoded:(e("pm-enc")||"").trim().toUpperCase(),country_code:e("pm-country")||"FR",club_id:e("pm-club")||null,club_encoded_name:(t==null?void 0:t.text)!=="— Club —"?t==null?void 0:t.text:null,job:e("pm-job")||"ATT",job2:e("pm-job2")||null,rarity:e("pm-rarity")||"normal",note_g:parseInt(e("pm-g"))??0,note_d:parseInt(e("pm-d"))??0,note_m:parseInt(e("pm-m"))??0,note_a:parseInt(e("pm-a"))??0,note_min:parseInt(e("pm-nmin"))||null,note_max:parseInt(e("pm-nmax"))||null,skin:e("pm-skin")||"blanc",hair:e("pm-hair")||"marron",hair_length:e("pm-hlen")||"court",sell_price:parseInt(e("pm-price"))||0}}function Z(){const e=document.getElementById("card-preview");if(!e)return;const n=De(),t={...n,rarity:n.rarity,job:n.job,job2:n.job2||null,firstname:n.firstname||"Prénom",surname_encoded:n.surname_encoded||"NOM"};e.innerHTML=Me(t,{size:"md",showNotes:!1})}async function ft(e,n,t,i){const{toast:c,closeModal:p}=i,s=document.getElementById("pm-error"),r=document.getElementById("pm-save"),m=De();if(!m.firstname){s.textContent="Le prénom est requis.";return}if(!m.surname_real){s.textContent="Le nom réel est requis.";return}if(!m.surname_encoded){s.textContent="Le nom encodé est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const{club_encoded_name:l,...a}=m,{error:o}=n?await h.from("players").update({...a,updated_at:new Date().toISOString()}).eq("id",e.id):await h.from("players").insert(a);if(o){s.textContent=o.message,r.disabled=!1,r.textContent=n?"💾 Enregistrer":"✅ Créer le joueur";return}c(n?"Joueur modifié ✅":"Joueur créé ✅","success"),p(),oe(t,i)}const bt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},xt=["rase","court","milong","long"];function vt(e){const n=qe(e);if(n==="noir")return"noir";if(n==="typ")return Math.random()<.9?"noir":"marron";if(n==="metisse")return Math.random()<.6?"noir":"marron";const t=Math.random();return t<.35?"blond":t<.75?"marron":"noir"}function yt(e){return Math.random()<.05?"chauve":vt(e)}const Pe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function qe(e){return bt[e]||"blanc"}function ht(e){return yt(e)}function Et(e,n){return Math.floor(Math.random()*(n-e+1))+e}function ee(e){return e[Math.floor(Math.random()*e.length)]}function wt(e){const n=Pe.filter(t=>t!==e);return ee(n)}function _t(e,n){const t=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],i=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],c=[...Array(2).fill("GK"),...Array(8).fill("DEF"),...Array(6).fill("MIL"),...Array(4).fill("ATT")],p=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],s=new Set(p.sort(()=>Math.random()-.5).slice(0,4)),r=[...p].sort(()=>Math.random()-.5),m=new Set(r.slice(0,2)),l=new Set(r.slice(2,4)),a=10,o=c.map((d,u)=>u<a);for(let d=o.length-1;d>0;d--){const u=Math.floor(Math.random()*(d+1));[o[d],o[u]]=[o[u],o[d]]}return c.map((d,u)=>{const g=o[u]?n:wt(n),E=qe(g),w=ht(g),b=ee(xt),$=Et(1,20),k=s.has(u),y=k?Math.max(0,$-2):0;let f=0,x=0,v=0,_=0,L=null;d==="GK"?f=$:d==="DEF"?(x=$,k&&(v=y,L="MIL")):d==="ATT"?(_=$,k&&(v=y,L="MIL")):(v=$,k&&((Math.random()<.5?"DEF":"ATT")==="DEF"?(x=y,L="DEF"):(_=y,L="ATT")));const I=m.has(u)?"pepite":l.has(u)?"papyte":"normal",z=ee(i),S=P(z.toUpperCase());return{job:d,job2:L,firstname:ee(t),surname_real:z,surname_encoded:S,country_code:g,club_id:e,note_g:f,note_d:x,note_m:v,note_a:_,skin:E,hair:w,hair_length:b,rarity:I,sell_price:0}})}async function Oe(e,n,t){const i=_t(e,n);let c=0,p=null;for(const s of i){const{data:r,error:m}=await h.from("players").insert(s).select().single();if(m){console.error("[GenSquad]",m.message,m.details,`
Payload:`,JSON.stringify(s)),p=m.message;continue}c++,await h.from("cards").insert({card_type:"player",player_id:r.id})}console.log("[GenSquad] Créés:",c,"/",i.length),c>0?t(`${c} joueurs générés ✅`,"success"):t("Erreur: "+(p||"inconnue"),"error")}function Fe(e){return{style:e.kit_style||C.style,color1:e.kit_color1||C.color1,color2:e.kit_color2||C.color2,shorts:e.kit_shorts||C.shorts,socks:e.kit_socks||C.socks}}let te=[];async function $t(e,n){await ae(e,n)}async function ae(e,n){const[{data:t,error:i},{data:c}]=await Promise.all([h.from("clubs").select("*").order("real_name"),h.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}te=t||[];const p={};(c||[]).forEach(s=>{p[s.club_id]=(p[s.club_id]||0)+1}),kt(e,n,p)}function kt(e,n,t={}){const{toast:i,openModal:c,closeModal:p}=n;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,s(te),document.getElementById("search-clubs").addEventListener("input",r=>{const m=r.target.value.toLowerCase();s(te.filter(l=>l.real_name.toLowerCase().includes(m)||l.encoded_name.toLowerCase().includes(m)))}),document.getElementById("add-club-btn").addEventListener("click",()=>Ee(null,e,n));function s(r){const m=document.getElementById("clubs-list");if(!r.length){m.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}m.innerHTML=r.map(l=>{const a=Fe(l),o=je(a,l.id).replace("<svg ",'<svg style="width:40px;height:48px" '),d=l.logo_url?`<img src="${l.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${a.color1},${a.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${l.encoded_name.slice(0,3)}</div>`,u=t[l.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${d}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${l.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${l.encoded_name} · ${l.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${u===0?"#e67e22":"var(--gray-600)"}">
              ${u===0?"⚠️ Aucun joueur":`👥 ${u} joueur${u>1?"s":""}`}
            </div>
          </div>
          ${o}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${u===0?`<button class="btn btn-primary btn-sm" data-gen="${l.id}" data-cc="${l.country_code}" data-name="${l.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${l.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${l.id}">🗑️</button>
          </div>
        </div>`}).join(""),m.querySelectorAll("[data-gen]").forEach(l=>{l.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${l.dataset.name} ?`)&&(l.disabled=!0,l.textContent="⏳",await Oe(l.dataset.gen,l.dataset.cc,i),ae(e,n))})}),m.querySelectorAll("[data-edit]").forEach(l=>{const a=te.find(o=>o.id===l.dataset.edit);l.addEventListener("click",()=>Ee(a,e,n))}),m.querySelectorAll("[data-del]").forEach(l=>{l.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:a}=await h.from("clubs").delete().eq("id",l.dataset.del);a?i(a.message,"error"):(i("Club supprimé","success"),ae(e,n))})})}}function Ee(e,n,t){const{toast:i,openModal:c,closeModal:p}=t,s=!!e,r=e?Fe(e):{...C},m=Object.entries(We).map(([a,o])=>`<option value="${a}" ${r.style===a?"selected":""}>${o.label}</option>`).join(""),l=Pe.map(a=>`<option value="${a}" ${((e==null?void 0:e.country_code)||"FR")===a?"selected":""}>${a}</option>`).join("");c(s?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${l}
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
            ${[["Couleur principale","m-kit-color1",r.color1],["Couleur secondaire","m-kit-color2",r.color2],["Short","m-kit-shorts",r.shorts],["Chaussettes","m-kit-socks",r.socks]].map(([a,o,d])=>`
              <div class="form-group">
                <label>${a}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${o}" value="${d}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${o}-txt" value="${d}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
        <div style="font-size:11px;color:var(--gray-600);padding-left:4px">50% nationalité du club · notes 1–20 · physique adapté au pays</div>
      </div>`}

      <div id="m-error" style="color:#bb2020;font-size:13px;min-height:16px"></div>
      <button class="btn btn-primary" id="m-save" style="width:100%;padding:14px;font-size:15px">
        ${s?"💾 Enregistrer":"✅ Créer le club"}
      </button>
    </div>`),setTimeout(()=>{var u,g,E;X(),["m-kit-color1","m-kit-color2","m-kit-shorts","m-kit-socks"].forEach(w=>{const b=document.getElementById(w),$=document.getElementById(w+"-txt");!b||!$||(b.addEventListener("input",()=>{$.value=b.value,X()}),$.addEventListener("input",()=>{const k=$.value.trim();/^#[0-9a-fA-F]{6}$/.test(k)&&(b.value=k,X())}),$.addEventListener("change",()=>{let k=$.value.trim();k.startsWith("#")||(k="#"+k),/^#[0-9a-fA-F]{6}$/.test(k)&&(b.value=k,$.value=k,X())}))}),(u=document.getElementById("m-kit-style"))==null||u.addEventListener("change",X);const a=document.getElementById("m-real"),o=document.getElementById("m-encoded");function d(){if(!a||!o||o.value)return;const w=a.value.trim().split(/\s+/),b=w.length===1?w[0].toUpperCase().slice(0,6):w.filter($=>$.length>2).map($=>$[0].toUpperCase()).join("")||w[0].toUpperCase().slice(0,4);o.value=b}a==null||a.addEventListener("input",d),(g=document.getElementById("auto-encode-btn"))==null||g.addEventListener("click",()=>{o&&(o.value=""),d()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>It(e,s,n,t))},50)}function He(){var e,n,t,i,c;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",shorts:((i=document.getElementById("m-kit-shorts"))==null?void 0:i.value)||"#111111",socks:((c=document.getElementById("m-kit-socks"))==null?void 0:c.value)||"#ffffff"}}function X(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=je(He(),"modal"))}async function It(e,n,t,i){var b,$,k,y,f,x;const{toast:c,closeModal:p}=i,s=document.getElementById("m-error"),r=document.getElementById("m-save"),m=(b=document.getElementById("m-real"))==null?void 0:b.value.trim(),l=($=document.getElementById("m-encoded"))==null?void 0:$.value.trim().toUpperCase(),a=(k=document.getElementById("m-country"))==null?void 0:k.value.trim().toUpperCase(),o=((y=document.getElementById("m-logo"))==null?void 0:y.value.trim())||null,d=((f=document.getElementById("m-gen-stadium"))==null?void 0:f.checked)??!1,u=((x=document.getElementById("m-gen-squad"))==null?void 0:x.checked)??!1,g=He();if(!m){s.textContent="Le nom du club est requis.";return}if(!l){s.textContent="Le nom encodé est requis.";return}if(!a){s.textContent="Le pays est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const E={real_name:m,encoded_name:l,country_code:a,logo_url:o,kit_style:g.style,kit_color1:g.color1,kit_color2:g.color2,kit_shorts:g.shorts,kit_socks:g.socks};let w=e==null?void 0:e.id;if(n){const{error:v}=await h.from("clubs").update(E).eq("id",w);if(v){s.textContent=v.message,r.disabled=!1,r.textContent="💾 Enregistrer";return}}else{const{data:v,error:_}=await h.from("clubs").insert(E).select().single();if(_){s.textContent=_.message,r.disabled=!1,r.textContent="✅ Créer le club";return}if(w=v.id,d){r.textContent="🏟️ Création du stade…";const{data:L,error:I}=await h.from("stadium_definitions").insert({name:`Stade de ${m}`,club_id:w,country_code:a}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):L&&await h.from("cards").insert({card_type:"stadium",stadium_id:L.id})}u&&(r.textContent="⚽ Génération des joueurs…",await Oe(w,a,c))}c(n?"Club modifié ✅":"Club créé ✅","success"),p(),ae(t,i)}const Lt=["normal","pepite","papyte","legende"],we=["GK","DEF","MIL","ATT"],Bt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let D={...A},ne=[];async function zt(e,{toast:n}){const{data:t}=await h.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ne=t||[],D={...A},e.innerHTML=Tt(ne),Ct(e,ne,n),j()}function _e(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=P(e))}function At(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=ne.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||C.style,color1:n.kit_color1||C.color1,color2:n.kit_color2||C.color2,shorts:n.kit_shorts||C.shorts,socks:n.kit_socks||C.socks}:{...C}}function j(){var d,u,g,E;const e=w=>{var b;return((b=document.getElementById(w))==null?void 0:b.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||P(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((u=(d=document.getElementById("cb-club"))==null?void 0:d.selectedOptions[0])==null?void 0:u.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=At(),i=document.getElementById("cb-club"),c=((E=(g=i==null?void 0:i.selectedOptions[0])==null?void 0:g.dataset)==null?void 0:E.logo)||null,p=Re(D,t,120),s=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(p)}`,r=Me(n,{portraitUrl:s,clubLogoUrl:c,showNotes:!0}),m=document.getElementById("card-preview");m&&(m.innerHTML=r);const l=document.getElementById("avatar-preview-wrap");l&&(l.innerHTML=p);const a=e("cb-surname-real"),o=document.getElementById("encode-summary");o&&a&&(o.textContent=`${e("cb-firstname")} ${a} → ${e("cb-firstname")} ${n.surname_encoded}`)}function Ge(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};D={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ct(e,n,t){var c,p,s,r,m;e.querySelectorAll("input,select").forEach(l=>{l.addEventListener("input",j),l.addEventListener("change",j)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(l=>{var a;(a=document.getElementById(l))==null||a.addEventListener("change",()=>{Ge(),j()})}),(c=document.getElementById("cb-surname-real"))==null||c.addEventListener("input",()=>{_e(),j()}),(p=document.getElementById("btn-encode"))==null||p.addEventListener("click",()=>{_e(),j()}),(s=document.getElementById("cb-club"))==null||s.addEventListener("change",j),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>St(t)),(m=document.getElementById("btn-reset"))==null||m.addEventListener("click",()=>{e.querySelectorAll("input").forEach(l=>l.value=""),e.querySelectorAll("select").forEach(l=>l.selectedIndex=0),D={...A},i.forEach(l=>{const a=l.replace("av-",""),o=document.getElementById(l);o&&(o.value=A[a]||"")}),j()})}async function St(e){const n=s=>{var r;return((r=document.getElementById(s))==null?void 0:r.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||P(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ge();const c={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:D,skin:D.skin||"blanc",hair:D.hairColor||"marron",hair_length:"court"},{error:p}=await h.from("players").insert(c);if(p){e("Erreur: "+p.message,"error");return}e(`✅ Joueur "${c.firstname} ${c.surname_encoded}" enregistré !`,"success")}function Tt(e){const n=Bt.map(([l,a])=>`<option value="${l}">${a} (${l})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(l=>`<option value="${l.id}" data-logo="${l.logo_url||""}">${l.encoded_name}</option>`).join(""),i=we.map(l=>`<option value="${l}">${l}</option>`).join(""),c='<option value="">Aucun</option>'+we.map(l=>`<option value="${l}">${l}</option>`).join(""),p=Lt.map(l=>`<option value="${l}">${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),s=(l,a,o)=>Object.entries(a).map(([d,u])=>`<option value="${d}" ${d===(o||"")?"selected":""}>${u.label}</option>`).join(""),r=Object.keys(Ze).map(l=>`<option value="${l}" ${l===A.skin?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join(""),m=Object.keys(Xe).map(l=>`<option value="${l}" ${l===A.hairColor?"selected":""}>${l.charAt(0).toUpperCase()+l.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${p}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(l=>`
            <div style="background:${Qe[l]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
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
              <select id="av-skin">${r}</select>
            </div>
            <div>
              <label>Style de cheveux</label>
              <select id="av-hair">${s("av-hair",et,A.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${m}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${s("av-eyebrows",tt,A.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${s("av-eyes",nt,A.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${s("av-nose",it,A.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${s("av-mouth",ot,A.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${s("av-beard",at,A.beard)}</select>
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
  `}async function Ue(e,{toast:n}){const{data:t,error:i}=await h.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=t||[];e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <input id="search-users" placeholder="🔍 Rechercher un manager…" style="width:260px">
      <span style="font-size:13px;color:var(--gray-600)">${c.length} manager(s)</span>
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
  `,p(c),document.getElementById("search-users").addEventListener("input",s=>{const r=s.target.value.toLowerCase();p(c.filter(m=>{var l;return m.pseudo.toLowerCase().includes(r)||((l=m.club_name)==null?void 0:l.toLowerCase().includes(r))}))});function p(s){document.getElementById("users-tbody").innerHTML=s.map(r=>{const m=r.mmr??1e3,l=r.mmr_deviation??350,a=r.placement_matches??0,o=rt(m),d=r.ranked_wins??0,u=r.ranked_losses??0,g=r.ranked_draws??0,E=d+u+g,w=E>0?Math.round(d/E*100):null,b=a<10,$=l<80?"#1A6B3C":l<150?"#e67e22":"#bb2020";return`
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
              <span style="font-size:16px">${o.emoji}</span>
              <span style="font-weight:700;color:${o.color}">${o.label}</span>
            </div>
            ${b?`<div style="font-size:10px;color:#e67e22">${a}/10 placement${a<10?` (${10-a} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${d}V ${g}N ${u}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${m}</div>
            <div style="font-size:10px;color:${$}">RD ±${Math.round(l)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const m=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${m?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:l}=await h.from("users").update({is_admin:m}).eq("id",r.dataset.toggleAdmin);l?n(l.message,"error"):(n("Rôle mis à jour ✅","success"),Ue(e,{toast:n}))})})}}async function Ve(e,{toast:n}){const{data:t,error:i}=await h.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=t||[],p=c.filter(r=>r.status==="active").length,s=c.filter(r=>r.status==="sold").length;e.innerHTML=`
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="card-panel" style="min-width:120px;text-align:center">
        <div style="font-size:22px;font-weight:700;color:#1A6B3C">${p}</div>
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
            ${c.map(r=>{var o,d,u,g;const m=(o=r.card)==null?void 0:o.player,l=m?`${m.firstname} ${m.surname_encoded}`:((d=r.card)==null?void 0:d.card_type)||"—",a={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${l}</b>${m?`<div style="font-size:10px;color:#999">${m.rarity} · ${m.job}</div>`:""}</td>
                <td style="font-size:12px">${((u=r.seller)==null?void 0:u.pseudo)||"—"}</td>
                <td style="font-size:12px">${((g=r.buyer)==null?void 0:g.pseudo)||"—"}</td>
                <td style="font-size:13px;font-weight:600">${(r.price||0).toLocaleString("fr")} cr.</td>
                <td>
                  <span style="background:${a[r.status]};color:#fff;padding:2px 6px;border-radius:3px;font-size:10px;font-weight:700">
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:m}=await h.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);m?n(m.message,"error"):(n("Annonce annulée","success"),Ve(e,{toast:n}))})})}async function Mt(e,{toast:n}){e.innerHTML=`
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
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await h.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;t.forEach(p=>{c+=[p.real_name,p.encoded_name,p.country_code,p.logo_url||""].map($e).join(",")+`
`}),Q("clubs_export.csv",c),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await h.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(p=>{var s;c+=[p.firstname,p.surname_real,p.surname_encoded,p.country_code,((s=p.clubs)==null?void 0:s.encoded_name)||"",p.job,p.job2||"",p.note_g,p.note_d,p.note_m,p.note_a,p.rarity,p.note_min??"",p.note_max??"",p.skin,p.hair,p.hair_length,p.sell_price].map($e).join(",")+`
`}),Q("players_export.csv",c),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const p=await i.text(),s=ke(p);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,m=0;const l=[];for(const a of s){if(!a.real_name||!a.encoded_name||!a.country_code){m++,l.push(`Ligne ignorée (champs manquants): ${a.real_name||"?"}`);continue}const o={real_name:a.real_name,encoded_name:a.encoded_name.toUpperCase(),country_code:a.country_code.toUpperCase().slice(0,2),logo_url:a.logo_url||null},{error:d}=await h.from("clubs").upsert(o,{onConflict:"encoded_name"});d?(m++,l.push(`${a.encoded_name}: ${d.message}`)):r++}c.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${m>0?`<div style="color:#c0392b">❌ ${m} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} clubs importés`,"success")}catch(p){c.innerHTML=`<span style="color:#c0392b">Erreur : ${p.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const p=await i.text(),s=ke(p);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await h.from("clubs").select("id,encoded_name"),m={};(r||[]).forEach(b=>{m[b.encoded_name.toUpperCase()]=b.id});let l=0,a=0;const o=[],d=["GK","DEF","MIL","ATT"],u=["normal","pepite","papyte","legende"],g=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const b of s){if(!b.firstname||!b.surname_real||!b.country_code||!b.job){a++,o.push(`Ligne ignorée (champs requis manquants): ${b.firstname||"?"}`);continue}if(!d.includes(b.job)){a++,o.push(`${b.firstname}: job invalide "${b.job}"`);continue}const $=b.club_encoded_name&&m[b.club_encoded_name.toUpperCase()]||null,k={firstname:b.firstname,surname_real:b.surname_real,surname_encoded:b.surname_encoded||P(b.surname_real),country_code:b.country_code.toUpperCase().slice(0,2),club_id:$,job:b.job,job2:d.includes(b.job2)?b.job2:null,note_g:parseInt(b.note_g)||0,note_d:parseInt(b.note_d)||0,note_m:parseInt(b.note_m)||0,note_a:parseInt(b.note_a)||0,rarity:u.includes(b.rarity)?b.rarity:"normal",note_min:b.note_min!==""&&b.note_min!=null?parseInt(b.note_min):null,note_max:b.note_max!==""&&b.note_max!=null?parseInt(b.note_max):null,skin:g.includes(b.skin)?b.skin:"blanc",hair:E.includes(b.hair)?b.hair:"noir",hair_length:w.includes(b.hair_length)?b.hair_length:"court",sell_price:parseInt(b.sell_price)||0},{error:y}=await h.from("players").insert(k);y?(a++,o.push(`${b.firstname} ${b.surname_real}: ${y.message}`)):l++}c.innerHTML=`<div style="color:var(--green)">✅ ${l} joueurs importés</div>
        ${a>0?`<div style="color:#c0392b">❌ ${a} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,n(`${l} joueurs importés`,"success")}catch(p){c.innerHTML=`<span style="color:#c0392b">Erreur : ${p.message}</span>`}t.target.value=""})}function $e(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function Q(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),c=document.createElement("a");c.href=i,c.download=e,c.click(),URL.revokeObjectURL(i)}function ke(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(s=>s.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",c=Ie(t,i).map(s=>s.trim().replace(/^\uFEFF/,"").toLowerCase()),p=[];for(let s=1;s<n.length;s++){if(!n[s].trim())continue;const r=Ie(n[s],i),m={};c.forEach((l,a)=>{m[l]=(r[a]||"").trim()}),!Object.values(m).every(l=>!l)&&p.push(m)}return p}function Ie(e,n=","){const t=[];let i="",c=!1;for(let p=0;p<e.length;p++){const s=e[p];c?s==='"'?e[p+1]==='"'?(i+='"',p++):c=!1:i+=s:s==='"'?c=!0:s===n?(t.push(i),i=""):i+=s}return t.push(i),t}const jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Rt(e,{toast:n}){const t=Object.keys(se);let i=t[0];const{data:c}=await h.from("formation_links_overrides").select("formation, links"),p={};(c||[]).forEach(a=>{p[a.formation]=a.links});let s=new Set;function r(a,o){return[a,o].sort().join("-")}function m(a){const o=p[a]||se[a]||[];s=new Set(o.map(([d,u])=>r(d,u)))}m(i),e.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <label style="font-weight:700;font-size:13px">Formation :</label>
        <select id="formation-select" style="padding:6px 10px;font-size:14px;border-radius:8px;border:1.5px solid #ccc">
          ${t.map(a=>`<option value="${a}" ${a===i?"selected":""}>${a}</option>`).join("")}
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
  `;function l(){const a=lt[i]||{},o=ye(i),d=320,u=400,g=22;function E(y){const f=a[y];return f?{x:f.x*d,y:f.y*u}:null}let w=`<svg width="${d}" height="${u}" viewBox="0 0 ${d} ${u}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;o.forEach(([y,f],x)=>{const v=E(y),_=E(f);if(!v||!_)return;const L=r(y,f),I=s.has(L),z=I?"#3b82f6":"#999",S=I?.95:.35,T=I?4:3;w+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,w+=`<line x1="${v.x}" y1="${v.y}" x2="${_.x}" y2="${_.y}"
        stroke="${z}" stroke-width="${T}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${S}" pointer-events="none" data-line-key="${L}"/>`});for(const y of Object.keys(a)){const f=E(y);if(!f)continue;const x=y.replace(/\d+/,""),v=jt[x]||"#555";w+=`<circle cx="${f.x}" cy="${f.y}" r="${g}" fill="${v}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${f.x}" y="${f.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${y}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const b=document.getElementById("links-list");b.innerHTML=o.map(([y,f])=>{const x=r(y,f),v=s.has(x);return`
        <button class="link-toggle" data-key="${x}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${v?"#3b82f6":"#ddd"};
          background:${v?"#eaf2ff":"#fafafa"};
          color:${v?"#1d4ed8":"#888"}">
          <span>${y} ↔ ${f}</span>
          <span>${v?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const $=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');$&&($.textContent=`Liens (${s.size}/${o.length} actifs)`);function k(y){s.has(y)?s.delete(y):s.add(y),l()}e.querySelectorAll(".link-hit").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(y=>{y.addEventListener("click",()=>k(y.dataset.key))})}l(),document.getElementById("formation-select").addEventListener("change",a=>{i=a.target.value,m(i),l()}),document.getElementById("reset-btn").addEventListener("click",()=>{const a=se[i]||[];s=new Set(a.map(([o,d])=>r(o,d))),l(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const o=ye(i).filter(([u,g])=>s.has(r(u,g))),{error:d}=await h.from("formation_links_overrides").upsert({formation:i,links:o,updated_at:new Date().toISOString()});if(d){n(d.message,"error");return}p[i]=o,n(`Liens enregistrés pour ${i} (${o.length} actifs)`,"success")})}const Nt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Dt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Pt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function qt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await h.from("booster_configs").select("*").order("sort_order");let t=null,i=[],c=null;const p=()=>window.innerWidth<700;async function s(){if(!t){i=[];return}if(t!==c){const{data:o}=await h.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=o||[],c=t}}function r(){return`
    <div id="booster-list" style="background:#fff;${p()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
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
    </div>`;const d=i.reduce((g,E)=>g+Number(E.percentage||0),0),u=Math.abs(d-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${p()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
              ${Pt.map(g=>`<option value="${g.value}" ${o.price_type===g.value?"selected":""}>${g.label}</option>`).join("")}
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
              Total : ${d.toFixed(1)}% ${u?"✅":"⚠️"}
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
    </div>`}async function l(o=!1){o||await s();const d=!t&&p(),u=t&&p();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!p()||d||!t?r():""}
      ${!p()||u?m():""}
    </div>`,a()}function a(){var u,g,E,w,b,$,k;const o=y=>e.querySelector(y);e.querySelectorAll(".booster-row").forEach(y=>{y.addEventListener("click",f=>{f.target.closest(".btn-delete")||(t=y.dataset.id,c=null,l())})}),(u=o("#btn-back"))==null||u.addEventListener("click",()=>{t=null,l()}),(g=o("#btn-new"))==null||g.addEventListener("click",async()=>{const y=prompt("Nom du nouveau booster :");if(!(y!=null&&y.trim()))return;const{data:f,error:x}=await h.from("booster_configs").insert({name:y.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(x){alert(x.message);return}n.push(f),t=f.id,c=null,l()}),e.querySelectorAll(".btn-delete").forEach(y=>{y.addEventListener("click",async f=>{if(f.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await h.from("booster_configs").delete().eq("id",y.dataset.id);const x=n.findIndex(v=>v.id===y.dataset.id);x>-1&&n.splice(x,1),t===y.dataset.id&&(t=null,c=null),l()})}),(E=o("#btn-cancel"))==null||E.addEventListener("click",()=>{t=null,l()}),(w=o("#f-price-type"))==null||w.addEventListener("change",y=>{const f=o("#credits-field");f&&(f.style.opacity=y.target.value!=="credits"?"0.4":"1")}),(b=o("#btn-pick-icon"))==null||b.addEventListener("click",async()=>{var f;const y=o("#icon-picker-grid");if(y){if(y.style.display!=="none"){y.style.display="none";return}y.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',y.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!_.length){y.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((f=o("#f-image-url"))==null?void 0:f.value)||"";y.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${_.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,y.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const z=o("#f-image-url");z&&(z.value=I.dataset.name),y.style.display="none"})})}catch(x){y.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${x.message}</div>`}}});function d(){e.querySelectorAll("[data-rate-idx]").forEach(y=>{var x,v,_,L,I;const f=Number(y.dataset.rateIdx);f>=0&&f<i.length&&(i[f].card_type=((x=y.querySelector(".rate-type"))==null?void 0:x.value)||"player",i[f].rarity=((v=y.querySelector(".rate-rarity"))==null?void 0:v.value)||null,i[f].note_min=Number((_=y.querySelector(".rate-note-min"))==null?void 0:_.value)||null,i[f].note_max=Number((L=y.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[f].percentage=Number((I=y.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}($=o("#btn-add-rate"))==null||$.addEventListener("click",()=>{d(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),l(!0)}),e.querySelectorAll(".btn-del-rate").forEach(y=>{y.addEventListener("click",()=>{d(),i.splice(Number(y.dataset.idx),1),l(!0)})}),(k=o("#btn-save"))==null||k.addEventListener("click",async()=>{var L,I,z,S,T,H,G,U,V,K,J,Y,M;const y=(n||[]).find(B=>B.id===t);if(!y)return;const f=[];e.querySelectorAll("[data-rate-idx]").forEach(B=>{var ge,fe,be,xe,ve;const le=Number(B.dataset.rateIdx);f.push({booster_id:t,card_type:((ge=B.querySelector(".rate-type"))==null?void 0:ge.value)||"player",rarity:((fe=B.querySelector(".rate-rarity"))==null?void 0:fe.value)||null,note_min:Number((be=B.querySelector(".rate-note-min"))==null?void 0:be.value)||null,note_max:Number((xe=B.querySelector(".rate-note-max"))==null?void 0:xe.value)||null,percentage:Number((ve=B.querySelector(".rate-pct"))==null?void 0:ve.value)||0,sort_order:le});const q=f[f.length-1];q.rarity||(q.rarity=null),q.note_min||(q.note_min=null),q.note_max||(q.note_max=null)});const x=f.reduce((B,le)=>B+le.percentage,0);if(f.length&&Math.abs(x-100)>.5){alert(`La somme doit faire 100% (actuellement ${x.toFixed(1)}%)`);return}const v={name:((I=(L=o("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||y.name,image_url:((S=(z=o("#f-image-url"))==null?void 0:z.value)==null?void 0:S.trim())||null,price_type:(T=o("#f-price-type"))==null?void 0:T.value,price_credits:Number((H=o("#f-price-credits"))==null?void 0:H.value)||0,card_count:Number((G=o("#f-card-count"))==null?void 0:G.value)||5,is_active:((U=o("#f-active"))==null?void 0:U.checked)??y.is_active,allow_duplicates:((V=o("#f-allow-dup"))==null?void 0:V.checked)??!0,sort_order:Number((K=o("#f-sort"))==null?void 0:K.value)||0,max_per_user:(J=o("#f-max-per-user"))!=null&&J.value?Number(o("#f-max-per-user").value):null,available_from:((Y=o("#f-available-from"))==null?void 0:Y.value)||null,available_until:((M=o("#f-available-until"))==null?void 0:M.value)||null},{error:_}=await h.from("booster_configs").update(v).eq("id",t);if(_){alert(_.message);return}if(Object.assign(y,v),await h.from("booster_drop_rates").delete().eq("booster_id",t),f.length){const{error:B}=await h.from("booster_drop_rates").insert(f);if(B){alert(B.message);return}}i=f,c=t,alert("✅ Booster enregistré !"),l(!0)})}l()}const Ke=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ot(e){await pe(e)}async function pe(e){const{data:n,error:t}=await h.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
              ${Ke.map(i=>`<option value="${i.value}">${i.label}</option>`).join("")}
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Le(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ht(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const c=(n||[]).find(p=>p.id===i.dataset.edit);c&&i.addEventListener("click",()=>Le(c))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await h.from("sell_price_configs").delete().eq("id",i.dataset.delete),await pe(e))})})}function Ft(e){const n=Ke.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Le(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Ht(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,c=parseInt(document.getElementById("form-note-min").value)||1,p=parseInt(document.getElementById("form-note-max").value)||10;if(c>p){alert("Note min doit être ≤ note max");return}const s={rarity:t,price:i,note_min:c,note_max:p,updated_at:new Date().toISOString()};let r;if(n?{error:r}=await h.from("sell_price_configs").update(s).eq("id",n):{error:r}=await h.from("sell_price_configs").insert(s),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await pe(e)}async function Gt(e){await ue(e)}async function ue(e){const{data:n}=await h.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>Be(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Vt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const i=(n||[]).find(c=>c.id===t.dataset.edit);i&&t.addEventListener("click",()=>Be(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await h.from("patch_notes").delete().eq("id",t.dataset.delete),await ue(e))})})}function Ut(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function Be(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,n.scrollIntoView({behavior:"smooth"})}async function Vt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),c=document.getElementById("form-art-img").value.trim()||null,p=document.getElementById("form-art-pub").checked,s=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const r=s?new Date(s).toISOString():new Date().toISOString(),m={title:t,description:i,image_url:c,is_published:p,published_at:r};let l;if(n?{error:l}=await h.from("patch_notes").update(m).eq("id",n):{error:l}=await h.from("patch_notes").insert(m),l){alert("Erreur : "+l.message);return}document.getElementById("article-form").style.display="none",await ue(e)}async function Kt(e){await F(e)}async function F(e){var a,o,d,u,g,E,w,b,$,k,y,f;const{data:n}=await h.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(n||[]).map(x=>Jt(x)).join("")}
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
            ${[["B","bold","<strong>Gras</strong>"],["I","italic","<em>Italique</em>"],["U","underline","Souligné"],["¶","insertParagraph","Paragraphe"],["•","insertUnorderedList","Liste à puces"],["1.","insertOrderedList","Liste numérotée"],["H2","formatBlock:h2","Titre H2"],["H3","formatBlock:h3","Titre H3"],["—","insertHorizontalRule","Séparateur"]].map(([x,v,_])=>`<button type="button" data-cmd="${v}" title="${_}" style="padding:4px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;font-size:12px;font-weight:700;cursor:pointer;line-height:1;min-width:28px">${x}</button>`).join("")}
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
    </div>`,(a=document.getElementById("ts-add"))==null||a.addEventListener("click",()=>ze(null,(n==null?void 0:n.length)||0)),(o=document.getElementById("ts-reset"))==null||o.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:x}=await h.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(x?"Erreur : "+x.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(d=document.getElementById("ts-cancel"))==null||d.addEventListener("click",Je),(u=document.getElementById("ts-save"))==null||u.addEventListener("click",()=>Wt(e)),(g=document.getElementById("ts-preview-btn"))==null||g.addEventListener("click",Yt);const t=document.getElementById("ts-editor"),i=()=>{const x=document.getElementById("ts-content");x&&t&&(x.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const c=()=>{document.activeElement!==t&&(t==null||t.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(x=>{x.addEventListener("mousedown",v=>{v.preventDefault(),c();const _=x.dataset.cmd;_.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,_.split(":")[1]):document.execCommand(_,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",x=>{x.preventDefault(),c();const v=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");v&&(document.execCommand("foreColor",!1,v),i())}),(b=document.getElementById("ts-clear-format"))==null||b.addEventListener("mousedown",x=>{x.preventDefault(),c(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const p=document.getElementById("ts-image"),s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),m=document.getElementById("ts-img-picker-grid"),l=()=>{var v;const x=(v=p==null?void 0:p.value)==null?void 0:v.trim();if(x){const _="/";r.src=`${_}icons/${x}`,s.style.display="block"}else s.style.display="none"};p==null||p.addEventListener("input",l),($=document.getElementById("ts-img-clear"))==null||$.addEventListener("click",()=>{p&&(p.value=""),s.style.display="none",m.style.display="none"}),(k=document.getElementById("ts-img-pick"))==null||k.addEventListener("click",async()=>{if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',m.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),_=Array.isArray(v)?v.filter(I=>I.name.startsWith("tuto_")):[];if(!_.length){m.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";m.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+_.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",m.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{p&&(p.value=I.dataset.pick),l(),m.style.display="none"})})}catch(x){m.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+x.message+"</div>"}}),(y=document.getElementById("ts-color"))==null||y.addEventListener("input",x=>{const v=document.getElementById("ts-color-hex");v&&(v.value=x.target.value)}),(f=document.getElementById("ts-color-hex"))==null||f.addEventListener("input",x=>{const v=x.target.value;if(/^#[0-9a-fA-F]{6}$/.test(v)){const _=document.getElementById("ts-color");_&&(_.value=v)}}),e.querySelectorAll("[data-edit]").forEach(x=>{const v=(n||[]).find(_=>_.id===x.dataset.edit);v&&x.addEventListener("click",()=>ze(v))}),e.querySelectorAll("[data-delete]").forEach(x=>{x.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await h.from("tutorial_steps").delete().eq("id",x.dataset.delete),F(e))})}),e.querySelectorAll("[data-toggle]").forEach(x=>{x.addEventListener("click",async()=>{const v=(n||[]).find(_=>_.id===x.dataset.toggle);v&&(await h.from("tutorial_steps").update({is_active:!v.is_active}).eq("id",v.id),F(e))})}),e.querySelectorAll("[data-up]").forEach(x=>{x.addEventListener("click",async()=>{const v=n||[],_=v.findIndex(L=>L.id===x.dataset.up);_<=0||(await Promise.all([h.from("tutorial_steps").update({step_order:v[_-1].step_order}).eq("id",v[_].id),h.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_-1].id)]),F(e))})}),e.querySelectorAll("[data-down]").forEach(x=>{x.addEventListener("click",async()=>{const v=n||[],_=v.findIndex(L=>L.id===x.dataset.down);_<0||_>=v.length-1||(await Promise.all([h.from("tutorial_steps").update({step_order:v[_+1].step_order}).eq("id",v[_].id),h.from("tutorial_steps").update({step_order:v[_].step_order}).eq("id",v[_+1].id)]),F(e))})})}function Jt(e){return`
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
  </div>`}function ze(e,n=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const c=(e==null?void 0:e.image_url)||"",p=document.getElementById("ts-image");p&&(p.value=c);const s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(c&&s&&r){const m="/";r.src=`${m}icons/${c}`,s.style.display="block"}else s&&(s.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Je(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Yt(){var l,a;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",c=document.getElementById("ts-color-hex").value||"#1A6B3C",p=(a=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:a.trim(),r=p?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${p}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",m=document.getElementById("ts-preview-area");m.innerHTML=`
    <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Aperçu en situation réelle</div>
    <div style="background:rgba(0,0,0,0.5);border-radius:14px;padding:12px;margin-bottom:8px">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:380px;margin:0 auto;box-shadow:0 16px 48px rgba(0,0,0,0.4)">
        <div style="height:4px;background:#eee"><div style="height:100%;width:60%;background:${c}"></div></div>
        <div style="padding:20px 20px 0;text-align:center">
          <div style="font-size:48px;margin-bottom:8px;line-height:1">${e}</div>
          <div style="font-size:17px;font-weight:900;color:#111;margin-bottom:4px">${n}</div>
          <div style="font-size:11px;color:#aaa">6 / 10</div>
        </div>
        ${r}
        <div style="padding:${p?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${c};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,m.querySelectorAll("ul,ol").forEach(o=>{o.style.paddingLeft="20px",o.style.margin="6px 0"}),m.querySelectorAll("li").forEach(o=>{o.style.marginBottom="4px"}),m.querySelectorAll("p").forEach(o=>{o.style.marginBottom="8px"})}async function Wt(e){var o,d;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),c=document.getElementById("ts-editor"),p=(c?c.innerHTML:document.getElementById("ts-content").value).trim(),s=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,m=document.getElementById("ts-active").checked;if(!i||!p){alert("Titre et contenu sont obligatoires.");return}const l={emoji:t,title:i,content:p,color:s,step_order:r,is_active:m,image_url:((d=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:d.trim())||null};let a;if(n?{error:a}=await h.from("tutorial_steps").update(l).eq("id",n):{error:a}=await h.from("tutorial_steps").insert(l),a){alert("Erreur : "+a.message);return}Je(),F(e)}const Zt="/",Ye="#E87722",Xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Qt(e){await me(e)}async function me(e){var i,c,p,s;const[{data:n},{data:t}]=await Promise.all([h.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),h.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
    <div style="padding:20px;max-width:820px;margin:0 auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 style="font-size:20px;font-weight:900">🏟️ Stades</h2>
        <button id="st-add-btn" class="btn btn-primary">+ Créer un stade</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px" id="st-list">
        ${(n||[]).map(r=>en(r)).join("")||'<div style="color:#aaa;padding:24px;text-align:center">Aucun stade créé.</div>'}
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
                ${Xt.map(([r,m])=>`<option value="${r}">${m} (${r})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Ae(null)),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(p=document.getElementById("st-save"))==null||p.addEventListener("click",()=>nn(e)),(s=document.getElementById("st-preview-btn"))==null||s.addEventListener("click",()=>ie()),["st-name","st-club","st-country","st-image"].forEach(r=>{var m,l;(m=document.getElementById(r))==null||m.addEventListener("input",ie),(l=document.getElementById(r))==null||l.addEventListener("change",ie)}),e.querySelectorAll("[data-edit]").forEach(r=>{const m=(n||[]).find(l=>l.id===r.dataset.edit);m&&r.addEventListener("click",()=>Ae(m))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await h.from("stadium_definitions").delete().eq("id",r.dataset.delete),me(e))})})}function en(e){var t,i;const n=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
    <div style="background:#fff;border-radius:10px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;align-items:center;gap:12px">
      <div style="width:40px;height:40px;border-radius:8px;background:${Ye};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${n}
      </div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900">${e.name}</div>
        <div style="font-size:11px;color:#aaa">${((i=e.club)==null?void 0:i.encoded_name)||e.country_code||"—"}</div>
      </div>
      <button data-edit="${e.id}" class="btn btn-ghost btn-sm">✏️</button>
      <button data-delete="${e.id}" class="btn btn-ghost btn-sm" style="color:#cc2222">🗑️</button>
    </div>`}function Ae(e,n){var i,c;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",ie((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(c=e==null?void 0:e.club)==null?void 0:c.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function ie(){var l,a,o,d,u,g,E;const e=((l=document.getElementById("st-name"))==null?void 0:l.value)||"NOM DU STADE",n=(o=(a=document.getElementById("st-image"))==null?void 0:a.value)==null?void 0:o.trim(),t=(u=(d=document.getElementById("st-country"))==null?void 0:d.value)==null?void 0:u.trim(),i=document.getElementById("st-club"),c=(i==null?void 0:i.selectedIndex)||0,p=i&&c>0?i.options[c].text:"",s=((E=(g=i==null?void 0:i.options[c])==null?void 0:g.getAttribute)==null?void 0:E.call(g,"data-logo"))||"";let r;n?r=`<img src="${Zt}icons/${n}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:s?r=`<img src="${s}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?r=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:r='<div style="font-size:36px;text-align:center">🏟️</div>';const m=p||t||"—";document.getElementById("st-preview-card").innerHTML=tn(e,r,m,!0)}function tn(e,n,t,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${Ye},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${n}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function nn(e){const n=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,c=document.getElementById("st-country").value.trim().toUpperCase()||null,p=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const s={name:t,club_id:i,country_code:c,image_url:p},{error:r}=n?await h.from("stadium_definitions").update(s).eq("id",n):await h.from("stadium_definitions").insert(s);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",me(e)}const R=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],N=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function on(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await h.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],c=["GK","DEF","MIL","ATT"],p=()=>window.innerWidth<700,s=d=>e.querySelector(d);function r(d,u=130){if(!d)return"";const g=R.find(k=>k.value===d.gc_type)||R[0],E=N.find(k=>k.value===d.color)||N[0],w=Math.round(u*.55),b=Math.round(u*.15),$=Math.round(u*.3);return`<div style="width:${u}px;height:${Math.round(u*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${g.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${b}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(u/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${d.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${d.image_url?`<img src="/icons/${d.image_url}" style="max-height:${w}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(u*.3)}px">${g.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${$}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(u/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(d.effect||"").slice(0,60)}${(d.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function m(){return`
    <div id="gc-list" style="background:#fff;${p()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(d=>{const u=R.find(E=>E.value===d.gc_type)||R[0],g=N.find(E=>E.value===d.color)||N[0];return`
        <div class="gc-row" data-id="${d.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${d.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${g.hex};background:${u.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${d.image_url?`<img src="/icons/${d.image_url}" style="width:28px;height:28px;object-fit:contain">`:u.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.name}</div>
            <div style="font-size:11px;color:#888">${u.label} · ${d.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${d.id}" data-active="${d.is_active}"
              style="background:${d.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${d.is_active?"#27ae60":"#e74c3c"};color:${d.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${d.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${d.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function l(){const d=t?(n||[]).find(g=>g.id===t):null;if(!d)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const u=R.find(g=>g.value===d.gc_type)||R[0];return N.find(g=>g.value===d.color)||N[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${p()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${u.bg};border-radius:12px">
        ${r(d,p()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${d.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${d.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${R.map(g=>`<option value="${g.value}" ${d.gc_type===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(g=>`<option value="${g.value}" ${d.color===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${d.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${d.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${d.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(g=>`<option value="${g.value}" ${(d.effect_type||"BOOST_STAT")===g.value?"selected":""}>${g.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const g=d.effect_params||{},E=i.find(w=>w.value===(d.effect_type||"BOOST_STAT"))||i[0];return`
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
                  ${c.map(w=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
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
    </div>`}function a(){e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!p()||!t?m():""}
      ${!p()||t?l():""}
    </div>`,o()}function o(){var d,u,g,E,w;e.querySelectorAll(".gc-row").forEach(b=>{b.addEventListener("click",$=>{$.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=b.dataset.id,a())})}),(d=s("#btn-gc-back"))==null||d.addEventListener("click",()=>{t=null,a()}),(u=s("#btn-cancel-gc"))==null||u.addEventListener("click",()=>{t=null,a()}),(g=s("#btn-new-gc"))==null||g.addEventListener("click",async()=>{const b=prompt("Nom de la carte Game Changer :");if(!(b!=null&&b.trim()))return;const{data:$,error:k}=await h.from("gc_definitions").insert({name:b.trim(),gc_type:"game_changer",color:"purple"}).select().single();if(k){alert(k.message);return}n.push($),t=$.id,a()}),e.querySelectorAll(".btn-toggle-gc").forEach(b=>{b.addEventListener("click",async $=>{$.stopPropagation();const k=b.dataset.active!=="true";await h.from("gc_definitions").update({is_active:k}).eq("id",b.dataset.id);const y=n.find(f=>f.id===b.dataset.id);y&&(y.is_active=k),a()})}),e.querySelectorAll(".btn-delete-gc").forEach(b=>{b.addEventListener("click",async $=>{if($.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await h.from("gc_definitions").delete().eq("id",b.dataset.id);const k=n.findIndex(y=>y.id===b.dataset.id);k>-1&&n.splice(k,1),t===b.dataset.id&&(t=null),a()})}),(E=s("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var $;const b=s("#gc-icon-picker");if(b){if(b.style.display!=="none"){b.style.display="none";return}b.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',b.style.display="block";try{const y=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),f=Array.isArray(y)?y.filter(v=>v.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(v.name)):[];if(!f.length){b.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const x=(($=s("#gc-image-url"))==null?void 0:$.value)||"";b.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${f.map(v=>`
          <div class="gc-icon-item" data-name="${v.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${v.name===x?"#7a28b8":"#ddd"};background:${v.name===x?"#f5f0ff":"#fff"}">
            <img src="/icons/${v.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,b.querySelectorAll(".gc-icon-item").forEach(v=>{v.addEventListener("click",()=>{const _=s("#gc-image-url");_&&(_.value=v.dataset.name),b.style.display="none"})})}catch(k){b.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${k.message}</div>`}}}),(w=s("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var v,_,L,I,z,S,T,H,G,U,V,K,J,Y;const b=n.find(M=>M.id===t);if(!b)return;const $=i.find(M=>{var B;return M.value===(((B=s("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT")})||i[0],k=$.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(M=>M.value):null,y={...$.hasValue?{value:Number((v=s("#gc-p-value"))==null?void 0:v.value)||2}:{},...$.hasCount?{count:Number((_=s("#gc-p-count"))==null?void 0:_.value)||1}:{},...$.hasTarget?{target:((L=s("#gc-p-target"))==null?void 0:L.value)||"home"}:{},...$.hasRoles?{roles:k!=null&&k.length?k:null}:{}},f={name:((z=(I=s("#gc-name"))==null?void 0:I.value)==null?void 0:z.trim())||b.name,effect:((T=(S=s("#gc-effect"))==null?void 0:S.value)==null?void 0:T.trim())||null,image_url:((G=(H=s("#gc-image-url"))==null?void 0:H.value)==null?void 0:G.trim())||null,gc_type:((U=s("#gc-type"))==null?void 0:U.value)||"game_changer",color:((V=s("#gc-color"))==null?void 0:V.value)||"purple",sort_order:Number((K=s("#gc-sort"))==null?void 0:K.value)||0,is_active:((J=s("#gc-active"))==null?void 0:J.checked)??b.is_active,effect_type:((Y=s("#gc-effect-type"))==null?void 0:Y.value)||"BOOST_STAT",effect_params:y},{error:x}=await h.from("gc_definitions").update(f).eq("id",t);if(x){alert(x.message);return}Object.assign(b,f),alert("✅ Carte enregistrée !"),a()})}a()}async function an(e,{toast:n,openModal:t,closeModal:i}){await O(e,{toast:n,openModal:t,closeModal:i})}async function O(e,n){var y;const{toast:t,openModal:i,closeModal:c}=n,[{data:p,error:s},{data:r}]=await Promise.all([h.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),h.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const m=p||[],l=m.find(f=>f.is_active),a=(r||[]).filter(f=>(f.placement_matches||0)>=1),o=a.filter(f=>(f.placement_matches||0)>=10),d=["bronze","silver","gold","platinum","diamond","master"],u={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},g={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};d.forEach(f=>{w[f]=0}),o.forEach(f=>{const x=f.rank_tier||"bronze";w[x]!==void 0&&w[x]++});const b=o.length?Math.round(o.reduce((f,x)=>f+(x.mmr||1e3),0)/o.length):0;function $(f){return f?new Date(f).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function k(f){const x=new Date;return f.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(f.end_at)<x?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${l?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${l.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${a.length}</div>
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
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(l.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${o.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${d.map(f=>{const x=w[f],v=o.length>0?Math.round(x/o.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[f]} ${u[f]}</span>
                <div style="flex:1;background:rgba(255,255,255,0.08);border-radius:4px;height:14px;overflow:hidden">
                  <div style="height:100%;width:${v}%;background:${g[f]};border-radius:4px;transition:width 0.5s"></div>
                </div>
                <span style="width:40px;text-align:right;color:var(--gray-600)">${x} (${v}%)</span>
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
              ${m.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':m.map(f=>{const x=Math.round((new Date(f.end_at)-new Date(f.start_at))/864e5),v=new Date(f.end_at)<new Date&&!f.is_active;return`
                    <tr>
                      <td><b>${f.name}</b></td>
                      <td style="font-size:12px">${$(f.start_at)}</td>
                      <td style="font-size:12px">${$(f.end_at)}</td>
                      <td style="font-size:12px">${x} jours</td>
                      <td>${k(f)}</td>
                      <td style="display:flex;gap:6px;flex-wrap:wrap">
                        <button class="btn btn-ghost btn-sm" data-edit="${f.id}">✏️ Modifier</button>
                        ${f.is_active?`<button class="btn btn-ghost btn-sm" data-deactivate="${f.id}" style="color:#e67e22">⏹ Désactiver</button>`:`<button class="btn btn-primary btn-sm" data-activate="${f.id}">▶ Activer</button>`}
                        ${v?`<button class="btn btn-danger btn-sm" data-delete="${f.id}">🗑</button>`:""}
                      </td>
                    </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`,(y=document.getElementById("create-season-btn"))==null||y.addEventListener("click",()=>{Ce(null,{toast:t,openModal:i,closeModal:c,reload:()=>O(e,n)})}),e.querySelectorAll("[data-edit]").forEach(f=>{const x=m.find(v=>v.id==f.dataset.edit);f.addEventListener("click",()=>{Ce(x,{toast:t,openModal:i,closeModal:c,reload:()=>O(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(f=>{f.addEventListener("click",async()=>{const x=parseInt(f.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:v}=await h.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(v){t(v.message,"error");return}const{error:_}=await h.from("ranked_seasons").update({is_active:!0}).eq("id",x);if(_){t(_.message,"error");return}await h.from("users").update({current_season_id:x}).gt("placement_matches",0),t("Saison activée ✅","success"),O(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:x}=await h.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(f.dataset.deactivate));if(x){t(x.message,"error");return}t("Saison désactivée","success"),O(e,n)})}),e.querySelectorAll("[data-delete]").forEach(f=>{f.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:x}=await h.from("ranked_seasons").delete().eq("id",parseInt(f.dataset.delete));if(x){t(x.message,"error");return}t("Saison supprimée","success"),O(e,n)})})}function Ce(e,{toast:n,openModal:t,closeModal:i,reload:c}){const p=!!e,s=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),m=e?new Date(e.start_at).toISOString().slice(0,16):s,l=e?new Date(e.end_at).toISOString().slice(0,16):r,a=(e==null?void 0:e.name)||"";t(p?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${a}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${m}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${l}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${p?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function o(){var w,b;const d=(w=document.getElementById("season-start"))==null?void 0:w.value,u=(b=document.getElementById("season-end"))==null?void 0:b.value,g=document.getElementById("season-duration");if(!d||!u||!g)return;const E=Math.round((new Date(u)-new Date(d))/864e5);g.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",g.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var d,u,g;(d=document.getElementById("season-start"))==null||d.addEventListener("input",o),(u=document.getElementById("season-end"))==null||u.addEventListener("input",o),o(),(g=document.getElementById("season-save-btn"))==null||g.addEventListener("click",async()=>{var x,v,_;const E=(x=document.getElementById("season-name"))==null?void 0:x.value.trim(),w=(v=document.getElementById("season-start"))==null?void 0:v.value,b=(_=document.getElementById("season-end"))==null?void 0:_.value,$=document.getElementById("season-error");if(!E){$.textContent="Le nom est requis.";return}if(!w){$.textContent="La date de début est requise.";return}if(!b){$.textContent="La date de fin est requise.";return}if(new Date(b)<=new Date(w)){$.textContent="La date de fin doit être après le début.";return}const k=document.getElementById("season-save-btn");k.disabled=!0,k.textContent="Enregistrement…";const y={name:E,start_at:new Date(w).toISOString(),end_at:new Date(b).toISOString()};let f;if(p?{error:f}=await h.from("ranked_seasons").update(y).eq("id",e.id):{error:f}=await h.from("ranked_seasons").insert({...y,is_active:!1}),f){$.textContent=f.message,k.disabled=!1,k.textContent=p?"💾 Enregistrer":"✅ Créer la saison";return}n(p?"Saison modifiée ✅":"Saison créée ✅","success"),i(),c()})},50)}st(Re);function rn(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function ln(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ce(){document.getElementById("modal-overlay").classList.add("hidden")}const Se={dashboard:{title:"Dashboard",fn:dt},players:{title:"Joueurs & Cartes",fn:ut},clubs:{title:"Clubs",fn:$t},"card-builder":{title:"Card Builder",fn:zt},users:{title:"Managers",fn:Ue},market:{title:"Marché des transferts",fn:Ve},"import-export":{title:"Import / Export CSV",fn:Mt},formations:{title:"Formations & Liens",fn:Rt},"boosters-config":{title:"Boosters",fn:qt},"sell-price":{title:"Prix vente directe",fn:Ot},journal:{title:"Journal",fn:Gt},tutorial:{title:"Tutoriel",fn:Kt},stadiums:{title:"Stades",fn:Qt},"gc-cards":{title:"Game Changers",fn:on},"ranked-seasons":{title:"Saisons Ranked",fn:an}};async function re(e){document.querySelectorAll(".admin-sidebar nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=Se[e]||Se.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:rn,openModal:ln,closeModal:ce,navigate:re})}catch(c){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${c.message}</div>`,console.error(c)}}async function sn(){var n;const{data:{session:e}}=await h.auth.getSession();e&&await Te(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,c=document.getElementById("auth-error");if(c.textContent="",!t||!i){c.textContent="Remplissez tous les champs.";return}const{data:p,error:s}=await h.auth.signInWithPassword({email:t,password:i});if(s){c.textContent=s.message;return}await Te(p.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ce),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ce()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),re(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{re(t.target.value)})}async function Te(e){const{data:n,error:t}=await h.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await h.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,re("dashboard")}sn();
