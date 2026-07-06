import{s as y,e as P,r as je,g as Re,K as Ze,D as A,S as Xe,a as z,H as Qe,R as et,b as Ne,c as tt,E as nt,d as it,N as ot,M as at,B as rt,f as lt,F as se,h as he,i as st,j as dt}from"./formation-links-DwOY6Nx_.js";async function ct(e){const[{count:n},{count:t},{count:i},{count:c},{count:d}]=await Promise.all([y.from("players").select("*",{count:"exact",head:!0}),y.from("clubs").select("*",{count:"exact",head:!0}),y.from("users").select("*",{count:"exact",head:!0}),y.from("cards").select("*",{count:"exact",head:!0}),y.from("matches").select("*",{count:"exact",head:!0})]);e.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px">
      ${Z("🃏","Joueurs (cartes)",n??"–","#1A6B3C")}
      ${Z("🏟️","Clubs",t??"–","#D4A017")}
      ${Z("👥","Managers",i??"–","#7a28b8")}
      ${Z("📦","Cartes possédées",c??"–","#2a8f52")}
      ${Z("⚽","Matchs joués",d??"–","#bb2020")}
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
  `,window.adminNav=s=>{var r;(r=document.querySelector(`[data-page="${s}"]`))==null||r.click()}}function Z(e,n,t,i){return`<div class="card-panel" style="text-align:center">
    <div style="font-size:28px;margin-bottom:4px">${e}</div>
    <div style="font-size:28px;font-weight:700;color:${i}">${t}</div>
    <div style="font-size:11px;color:var(--gray-600)">${n}</div>
  </div>`}const de={normal:"Normal",pepite:"Pépite",papyte:"Papyte",legende:"Légende"},pt={normal:"#aaa",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},De={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ut=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];async function mt(e,n){await pe(e,n)}async function pe(e,n){const{toast:t}=n,[{data:i,error:c},{data:d}]=await Promise.all([y.from("players").select("*, clubs(id,encoded_name,logo_url,kit_color1,kit_color2)").order("surname_encoded"),y.from("clubs").select("id,encoded_name").order("encoded_name")]);if(c){e.innerHTML=`<p style="color:red">${c.message}</p>`;return}gt(e,i||[],d||[],n)}function gt(e,n,t,i){const{toast:c}=i;e.innerHTML=`
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
          ${Object.entries(de).map(([r,p])=>`<option value="${r}">${p}</option>`).join("")}
        </select>
        <button class="btn btn-primary" id="add-player-btn" style="white-space:nowrap">+ Joueur</button>
      </div>
      <div id="count-label" style="font-size:12px;color:var(--gray-600)">${n.length} joueur(s)</div>
      <!-- Liste -->
      <div id="players-list" style="display:flex;flex-direction:column;gap:6px"></div>
    </div>`;function d(){const r=document.getElementById("search-players").value.toLowerCase(),p=document.getElementById("filter-job").value,o=document.getElementById("filter-rarity").value;return n.filter(a=>(!r||`${a.firstname} ${a.surname_encoded} ${a.surname_real||""}`.toLowerCase().includes(r))&&(!p||a.job===p)&&(!o||a.rarity===o))}function s(){const r=d();document.getElementById("count-label").textContent=`${r.length} joueur(s)`;const p=document.getElementById("players-list");if(!r.length){p.innerHTML='<div style="color:var(--gray-600);padding:20px;text-align:center">Aucun joueur.</div>';return}p.innerHTML=r.map(o=>{const a=pt[o.rarity]||"#aaa",l=De[o.job]||"#aaa";return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          <!-- Note + poste -->
          <div style="flex-shrink:0;width:40px;height:40px;border-radius:10px;border:2px solid ${a};
            background:${l}22;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px">
            <div style="font-size:16px;font-weight:900;color:${l};line-height:1">${ft(o)}</div>
            <div style="font-size:9px;font-weight:700;color:${l}">${o.job}</div>
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
              ${o.firstname} <span style="font-family:monospace">${o.surname_encoded}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600)">${o.country_code}</span>
              ${o.clubs?`<span style="font-size:11px;color:var(--gray-600)">· ${o.clubs.encoded_name}</span>`:""}
              ${o.job2?`<span style="font-size:10px;color:#aaa;background:rgba(0,0,0,0.08);border-radius:4px;padding:1px 4px">${o.job2}</span>`:""}
            </div>
            <div style="font-size:10px;color:${a};font-weight:700;margin-top:2px">${de[o.rarity]||o.rarity}</div>
          </div>
          <!-- Notes secondaires -->
          <div style="flex-shrink:0;font-size:10px;color:var(--gray-600);text-align:right;line-height:1.6;font-family:monospace">
            <div>GK <b>${o.note_g}</b></div>
            <div>DEF <b>${o.note_d}</b></div>
            <div>MIL <b>${o.note_m}</b></div>
            <div>ATT <b>${o.note_a}</b></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),p.querySelectorAll("[data-edit]").forEach(o=>{const a=n.find(l=>l.id===o.dataset.edit);o.addEventListener("click",()=>Ee(a,t,e,i))}),p.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce joueur ?"))return;const{error:a}=await y.from("players").delete().eq("id",o.dataset.del);a?c(a.message,"error"):(c("Joueur supprimé ✅","success"),pe(e,i))})})}s(),document.getElementById("search-players").addEventListener("input",s),document.getElementById("filter-job").addEventListener("change",s),document.getElementById("filter-rarity").addEventListener("change",s),document.getElementById("add-player-btn").addEventListener("click",()=>Ee(null,t,e,i))}function ft(e){return e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a}function Ee(e,n,t,i){const{toast:c,openModal:d,closeModal:s}=i,r=!!e,p='<option value="">— Club —</option>'+n.map(a=>`<option value="${a.id}" ${(e==null?void 0:e.club_id)===a.id?"selected":""}>${a.encoded_name}</option>`).join(""),o=ut.map(a=>`<option value="${a}" ${((e==null?void 0:e.country_code)||"FR")===a?"selected":""}>${a}</option>`).join("");d(r?`✏️ ${e.firstname} ${e.surname_encoded}`:"➕ Nouveau joueur",`<div style="display:flex;flex-direction:column;gap:12px">

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
          <select id="pm-country">${o}</select>
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
          <select id="pm-club">${p}</select>
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
          ${[["GK","pm-g","note_g"],["DEF","pm-d","note_d"],["MIL","pm-m","note_m"],["ATT","pm-a","note_a"]].map(([a,l,u])=>`
            <div class="form-group" style="text-align:center">
              <label style="color:${De[a]};font-weight:700">${a}</label>
              <input id="${l}" type="number" min="0" max="20" value="${(e==null?void 0:e[u])??0}" style="text-align:center;font-size:18px;font-weight:900;padding:6px 4px">
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
    </div>`),setTimeout(()=>{var l,u,h;X();const a=["pm-fn","pm-enc","pm-real","pm-country","pm-job","pm-job2","pm-rarity","pm-g","pm-d","pm-m","pm-a","pm-skin","pm-hair","pm-hlen","pm-club"];a.forEach(f=>{var E;return(E=document.getElementById(f))==null?void 0:E.addEventListener("input",X)}),a.forEach(f=>{var E;return(E=document.getElementById(f))==null?void 0:E.addEventListener("change",X)}),(l=document.getElementById("pm-encode-btn"))==null||l.addEventListener("click",()=>{var E;const f=((E=document.getElementById("pm-real"))==null?void 0:E.value)||"";document.getElementById("pm-enc").value=P(f.toUpperCase()),X()}),(u=document.getElementById("pm-real"))==null||u.addEventListener("input",()=>{const f=document.getElementById("pm-enc");f!=null&&f.value||(f.value=P(document.getElementById("pm-real").value.toUpperCase()),X())}),(h=document.getElementById("pm-save"))==null||h.addEventListener("click",()=>bt(e,r,t,i))},50)}function Pe(){const e=i=>{var c;return(c=document.getElementById(i))==null?void 0:c.value},n=document.getElementById("pm-club"),t=n==null?void 0:n.options[n.selectedIndex];return{firstname:(e("pm-fn")||"").trim(),surname_real:(e("pm-real")||"").trim(),surname_encoded:(e("pm-enc")||"").trim().toUpperCase(),country_code:e("pm-country")||"FR",club_id:e("pm-club")||null,club_encoded_name:(t==null?void 0:t.text)!=="— Club —"?t==null?void 0:t.text:null,job:e("pm-job")||"ATT",job2:e("pm-job2")||null,rarity:e("pm-rarity")||"normal",note_g:parseInt(e("pm-g"))??0,note_d:parseInt(e("pm-d"))??0,note_m:parseInt(e("pm-m"))??0,note_a:parseInt(e("pm-a"))??0,note_min:parseInt(e("pm-nmin"))||null,note_max:parseInt(e("pm-nmax"))||null,skin:e("pm-skin")||"blanc",hair:e("pm-hair")||"marron",hair_length:e("pm-hlen")||"court",sell_price:parseInt(e("pm-price"))||0}}function X(){const e=document.getElementById("card-preview");if(!e)return;const n=Pe(),t={...n,rarity:n.rarity,job:n.job,job2:n.job2||null,firstname:n.firstname||"Prénom",surname_encoded:n.surname_encoded||"NOM"};e.innerHTML=je(t,{size:"md",showNotes:!1})}async function bt(e,n,t,i){const{toast:c,closeModal:d}=i,s=document.getElementById("pm-error"),r=document.getElementById("pm-save"),p=Pe();if(!p.firstname){s.textContent="Le prénom est requis.";return}if(!p.surname_real){s.textContent="Le nom réel est requis.";return}if(!p.surname_encoded){s.textContent="Le nom encodé est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const{club_encoded_name:o,...a}=p,{error:l}=n?await y.from("players").update({...a,updated_at:new Date().toISOString()}).eq("id",e.id):await y.from("players").insert(a);if(l){s.textContent=l.message,r.disabled=!1,r.textContent=n?"💾 Enregistrer":"✅ Créer le joueur";return}c(n?"Joueur modifié ✅":"Joueur créé ✅","success"),d(),pe(t,i)}const xt={FR:"blanc",DE:"blanc",ES:"blanc",PT:"metisse",IT:"blanc",GB:"blanc",NL:"blanc",BE:"blanc",DK:"blanc",SE:"blanc",NO:"blanc",PL:"blanc",CH:"blanc",AT:"blanc",CZ:"blanc",HR:"blanc",RS:"blanc",AL:"blanc",TR:"metisse",AR:"blanc",BR:"metisse",UY:"blanc",CO:"metisse",MX:"metisse",CL:"metisse",PE:"metisse",EC:"metisse",VE:"metisse",MA:"metisse",DZ:"metisse",TN:"metisse",EG:"metisse",LY:"metisse",NG:"noir",SN:"noir",CI:"noir",CM:"noir",GH:"noir",ML:"noir",GN:"noir",BF:"noir",TG:"noir",BJ:"noir",GA:"noir",CG:"noir",CD:"noir",AO:"noir",MZ:"noir",ZA:"typ",KE:"noir",ET:"noir",JP:"typ",KR:"typ",CN:"typ",VN:"typ",TH:"typ",ID:"typ",PH:"typ",MY:"typ",SG:"typ",MM:"typ",US:"blanc",CA:"blanc",AU:"blanc",NZ:"blanc",RU:"blanc",UA:"blanc",GR:"metisse",RO:"blanc",BG:"blanc",SK:"blanc",SI:"blanc",HU:"blanc",IR:"metisse",IQ:"metisse",SA:"metisse",AE:"metisse",JO:"metisse",PS:"metisse",LB:"metisse",SY:"metisse",IL:"metisse",PK:"metisse",IN:"metisse",BD:"typ",LK:"metisse",NP:"typ",AF:"metisse"},vt=["rase","court","milong","long"];function yt(e){const n=Oe(e);if(n==="noir")return"noir";if(n==="typ")return Math.random()<.9?"noir":"marron";if(n==="metisse")return Math.random()<.6?"noir":"marron";const t=Math.random();return t<.35?"blond":t<.75?"marron":"noir"}function ht(e){return Math.random()<.05?"chauve":yt(e)}const qe=["FR","DE","ES","PT","IT","GB","NL","BE","DK","SE","NO","PL","CH","AT","CZ","HR","RS","AL","TR","AR","BR","UY","CO","MX","CL","PE","EC","MA","DZ","TN","EG","NG","SN","CI","CM","GH","ML","GN","CD","AO","ZA","KE","JP","KR","CN","VN","TH","ID","PH","US","CA","AU","RU","UA","GR","RO","BG","IR","SA","AE","IN","PK","BD"];function Oe(e){return xt[e]||"blanc"}function Et(e){return ht(e)}function O(e,n){return Math.floor(Math.random()*(n-e+1))+e}function ee(e){return e[Math.floor(Math.random()*e.length)]}function wt(e){const n=qe.filter(t=>t!==e);return ee(n)}function _t(e,n){const t=[{job:"GK",count:2},{job:"DEF",count:8},{job:"MIL",count:6},{job:"ATT",count:4}],i={ATT:"MIL",MIL:"DEF",DEF:"MIL",GK:null},c=["Lucas","Mateo","Rafael","Carlos","Luis","Diego","Andre","Paulo","Marco","Stefan","Ahmed","Omar","Yusuf","Mamadou","Ibrahima","Cheikh","Moussa","Kofi","Emeka","Tunde","Ryota","Kenji","Hiroshi","Jae","Sung","Wei","Ming","Van","Duc","Sorn","James","Ryan","Tyler","Kevin","Nathan","Liam","Noah","Ethan","Oliver","Hugo","Alexis","Théo","Antoine","Kylian","Rayan","Axel","Tom","Paul","Enzo","Léo","João","Gabriel","Felipe","Roberto","César","Miguel","Ivan","Luca","Federico","Sergio"],d=["Silva","Santos","Costa","Pereira","Oliveira","Mendes","Ferreira","Alves","Diallo","Traore","Coulibaly","Bah","Konaté","Touré","Camara","Barry","Diop","Müller","Schmidt","Schneider","Fischer","Weber","Richter","Bauer","Nakamura","Tanaka","Suzuki","Kim","Park","Lee","Chen","Wang","Liu","Johnson","Williams","Brown","Davis","Wilson","Moore","Martinez","Lopez","Dubois","Martin","Bernard","Thomas","Petit","Dupont","Moreau","Laurent","Garcia","Fernandez","Rodriguez","Gonzalez","Hernandez","López","Sánchez"],s=[];let r=0;return t.forEach(({job:p,count:o})=>{for(let a=0;a<o;a++){r++;const u=r<=10?n:wt(n),h=Oe(u),f=Et(u),E=ee(vt),w=O(1,20),m=p!=="GK"&&Math.random()>.4,_=m?Math.max(1,w-O(1,4)):null,$={note_g:O(1,8),note_d:O(1,8),note_m:O(1,8),note_a:O(1,8)};p==="GK"&&($.note_g=w),p==="DEF"&&($.note_d=w,_&&($.note_m=_)),p==="MIL"&&($.note_m=w,_&&($.note_d=_)),p==="ATT"&&($.note_a=w,_&&($.note_m=_)),s.push({job:p,job2:m?i[p]:null,firstname:ee(c),surname_real:ee(d),surname_encoded:P(ee(d).toUpperCase()),country_code:u,club_id:e,...$,skin:h,hair:f,hair_length:E,rarity:"normal"})}}),s}async function Fe(e,n,t){const i=_t(e,n);let c=0,d=null;for(const s of i){const{data:r,error:p}=await y.from("players").insert(s).select().single();if(p){console.error("[GenSquad]",p.message,p.details,`
Payload:`,JSON.stringify(s)),d=p.message;continue}c++,await y.from("cards").insert({card_type:"player",player_id:r.id})}console.log("[GenSquad] Créés:",c,"/",i.length),c>0?t(`${c} joueurs générés ✅`,"success"):t("Erreur: "+(d||"inconnue"),"error")}function He(e){return{style:e.kit_style||A.style,color1:e.kit_color1||A.color1,color2:e.kit_color2||A.color2,shorts:e.kit_shorts||A.shorts,socks:e.kit_socks||A.socks}}let ne=[];async function $t(e,n){await ae(e,n)}async function ae(e,n){const[{data:t,error:i},{data:c}]=await Promise.all([y.from("clubs").select("*").order("real_name"),y.from("players").select("club_id")]);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}ne=t||[];const d={};(c||[]).forEach(s=>{d[s.club_id]=(d[s.club_id]||0)+1}),kt(e,n,d)}function kt(e,n,t={}){const{toast:i,openModal:c,closeModal:d}=n;e.innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px">
      <input id="search-clubs" placeholder="🔍 Rechercher…" style="flex:1">
      <button class="btn btn-primary" id="add-club-btn" style="white-space:nowrap">+ Club</button>
    </div>
    <div id="clubs-list" style="display:flex;flex-direction:column;gap:8px"></div>`,s(ne),document.getElementById("search-clubs").addEventListener("input",r=>{const p=r.target.value.toLowerCase();s(ne.filter(o=>o.real_name.toLowerCase().includes(p)||o.encoded_name.toLowerCase().includes(p)))}),document.getElementById("add-club-btn").addEventListener("click",()=>we(null,e,n));function s(r){const p=document.getElementById("clubs-list");if(!r.length){p.innerHTML='<p style="color:var(--gray-600);padding:20px">Aucun club.</p>';return}p.innerHTML=r.map(o=>{const a=He(o),l=Re(a,o.id).replace("<svg ",'<svg style="width:40px;height:48px" '),u=o.logo_url?`<img src="${o.logo_url}" style="width:40px;height:40px;object-fit:contain;border-radius:8px">`:`<div style="width:40px;height:40px;background:linear-gradient(135deg,${a.color1},${a.color2});border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:900">${o.encoded_name.slice(0,3)}</div>`,h=t[o.id]||0;return`
        <div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          ${u}
          <div style="flex:1;min-width:0">
            <div style="font-weight:900;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.real_name}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
              <img src="https://flagsapi.com/${o.country_code}/flat/24.png" style="height:12px" onerror="this.style.display='none'">
              <span style="font-size:11px;color:var(--gray-600);font-family:monospace">${o.encoded_name} · ${o.country_code}</span>
            </div>
            <div style="font-size:11px;margin-top:2px;color:${h===0?"#e67e22":"var(--gray-600)"}">
              ${h===0?"⚠️ Aucun joueur":`👥 ${h} joueur${h>1?"s":""}`}
            </div>
          </div>
          ${l}
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            ${h===0?`<button class="btn btn-primary btn-sm" data-gen="${o.id}" data-cc="${o.country_code}" data-name="${o.real_name}" title="Générer joueurs">⚽</button>`:""}
            <button class="btn btn-ghost btn-sm" data-edit="${o.id}">✏️</button>
            <button class="btn btn-danger btn-sm" data-del="${o.id}">🗑️</button>
          </div>
        </div>`}).join(""),p.querySelectorAll("[data-gen]").forEach(o=>{o.addEventListener("click",async()=>{confirm(`Générer 20 joueurs pour ${o.dataset.name} ?`)&&(o.disabled=!0,o.textContent="⏳",await Fe(o.dataset.gen,o.dataset.cc,i),ae(e,n))})}),p.querySelectorAll("[data-edit]").forEach(o=>{const a=ne.find(l=>l.id===o.dataset.edit);o.addEventListener("click",()=>we(a,e,n))}),p.querySelectorAll("[data-del]").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Supprimer ce club ?"))return;const{error:a}=await y.from("clubs").delete().eq("id",o.dataset.del);a?i(a.message,"error"):(i("Club supprimé","success"),ae(e,n))})})}}function we(e,n,t){const{toast:i,openModal:c,closeModal:d}=t,s=!!e,r=e?He(e):{...A},p=Object.entries(Ze).map(([a,l])=>`<option value="${a}" ${r.style===a?"selected":""}>${l.label}</option>`).join(""),o=qe.map(a=>`<option value="${a}" ${((e==null?void 0:e.country_code)||"FR")===a?"selected":""}>${a}</option>`).join("");c(s?`✏️ ${e.real_name}`:"➕ Nouveau club",`<div style="display:flex;flex-direction:column;gap:14px">

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
            ${o}
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
              <select id="m-kit-style" style="width:100%">${p}</select>
            </div>
            ${[["Couleur principale","m-kit-color1",r.color1],["Couleur secondaire","m-kit-color2",r.color2],["Short","m-kit-shorts",r.shorts],["Chaussettes","m-kit-socks",r.socks]].map(([a,l,u])=>`
              <div class="form-group">
                <label>${a}</label>
                <div style="display:flex;gap:6px;align-items:center">
                  <input type="color" id="${l}" value="${u}" style="width:38px;height:32px;padding:2px;border:1px solid var(--gray-200);border-radius:6px;cursor:pointer;flex-shrink:0">
                  <input id="${l}-txt" value="${u}" maxlength="7" style="flex:1;font-family:monospace;font-size:12px">
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
    </div>`),setTimeout(()=>{var h,f,E;Q(),["m-kit-color1","m-kit-color2","m-kit-shorts","m-kit-socks"].forEach(w=>{const m=document.getElementById(w),_=document.getElementById(w+"-txt");!m||!_||(m.addEventListener("input",()=>{_.value=m.value,Q()}),_.addEventListener("input",()=>{const $=_.value.trim();/^#[0-9a-fA-F]{6}$/.test($)&&(m.value=$,Q())}),_.addEventListener("change",()=>{let $=_.value.trim();$.startsWith("#")||($="#"+$),/^#[0-9a-fA-F]{6}$/.test($)&&(m.value=$,_.value=$,Q())}))}),(h=document.getElementById("m-kit-style"))==null||h.addEventListener("change",Q);const a=document.getElementById("m-real"),l=document.getElementById("m-encoded");function u(){if(!a||!l||l.value)return;const w=a.value.trim().split(/\s+/),m=w.length===1?w[0].toUpperCase().slice(0,6):w.filter(_=>_.length>2).map(_=>_[0].toUpperCase()).join("")||w[0].toUpperCase().slice(0,4);l.value=m}a==null||a.addEventListener("input",u),(f=document.getElementById("auto-encode-btn"))==null||f.addEventListener("click",()=>{l&&(l.value=""),u()}),(E=document.getElementById("m-save"))==null||E.addEventListener("click",()=>It(e,s,n,t))},50)}function Ge(){var e,n,t,i,c;return{style:((e=document.getElementById("m-kit-style"))==null?void 0:e.value)||"uni",color1:((n=document.getElementById("m-kit-color1"))==null?void 0:n.value)||"#1A6B3C",color2:((t=document.getElementById("m-kit-color2"))==null?void 0:t.value)||"#ffffff",shorts:((i=document.getElementById("m-kit-shorts"))==null?void 0:i.value)||"#111111",socks:((c=document.getElementById("m-kit-socks"))==null?void 0:c.value)||"#ffffff"}}function Q(){const e=document.getElementById("kit-preview-wrap");e&&(e.innerHTML=Re(Ge(),"modal"))}async function It(e,n,t,i){var m,_,$,v,g,b;const{toast:c,closeModal:d}=i,s=document.getElementById("m-error"),r=document.getElementById("m-save"),p=(m=document.getElementById("m-real"))==null?void 0:m.value.trim(),o=(_=document.getElementById("m-encoded"))==null?void 0:_.value.trim().toUpperCase(),a=($=document.getElementById("m-country"))==null?void 0:$.value.trim().toUpperCase(),l=((v=document.getElementById("m-logo"))==null?void 0:v.value.trim())||null,u=((g=document.getElementById("m-gen-stadium"))==null?void 0:g.checked)??!1,h=((b=document.getElementById("m-gen-squad"))==null?void 0:b.checked)??!1,f=Ge();if(!p){s.textContent="Le nom du club est requis.";return}if(!o){s.textContent="Le nom encodé est requis.";return}if(!a){s.textContent="Le pays est requis.";return}r.disabled=!0,r.textContent="Enregistrement…";const E={real_name:p,encoded_name:o,country_code:a,logo_url:l,kit_style:f.style,kit_color1:f.color1,kit_color2:f.color2,kit_shorts:f.shorts,kit_socks:f.socks};let w=e==null?void 0:e.id;if(n){const{error:x}=await y.from("clubs").update(E).eq("id",w);if(x){s.textContent=x.message,r.disabled=!1,r.textContent="💾 Enregistrer";return}}else{const{data:x,error:k}=await y.from("clubs").insert(E).select().single();if(k){s.textContent=k.message,r.disabled=!1,r.textContent="✅ Créer le club";return}if(w=x.id,u){r.textContent="🏟️ Création du stade…";const{data:L,error:I}=await y.from("stadium_definitions").insert({name:`Stade de ${p}`,club_id:w,country_code:a}).select().single();I?console.warn("[Stadium] Erreur def stade:",I.message):L&&await y.from("cards").insert({card_type:"stadium",stadium_id:L.id})}h&&(r.textContent="⚽ Génération des joueurs…",await Fe(w,a,c))}c(n?"Club modifié ✅":"Club créé ✅","success"),d(),ae(t,i)}const Lt=["normal","pepite","papyte","legende"],_e=["GK","DEF","MIL","ATT"],Bt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"]];let D={...z},ie=[];async function zt(e,{toast:n}){const{data:t}=await y.from("clubs").select("id,encoded_name,logo_url,kit_style,kit_color1,kit_color2,kit_shorts,kit_socks").order("encoded_name");ie=t||[],D={...z},e.innerHTML=Tt(ie),Ct(e,ie,n),T()}function $e(){var t;const e=((t=document.getElementById("cb-surname-real"))==null?void 0:t.value)||"",n=document.getElementById("cb-surname-enc");n&&(n.value=P(e))}function At(){var t;const e=(t=document.getElementById("cb-club"))==null?void 0:t.value,n=ie.find(i=>String(i.id)===String(e));return n?{style:n.kit_style||A.style,color1:n.kit_color1||A.color1,color2:n.kit_color2||A.color2,shorts:n.kit_shorts||A.shorts,socks:n.kit_socks||A.socks}:{...A}}function T(){var u,h,f,E;const e=w=>{var m;return((m=document.getElementById(w))==null?void 0:m.value)||""},n={firstname:e("cb-firstname"),surname_encoded:e("cb-surname-enc")||P(e("cb-surname-real")),country_code:e("cb-country"),club_encoded_name:((h=(u=document.getElementById("cb-club"))==null?void 0:u.selectedOptions[0])==null?void 0:h.text)||"",job:e("cb-job"),job2:e("cb-job2")||null,note_g:parseInt(e("cb-note-g"))||0,note_d:parseInt(e("cb-note-d"))||0,note_m:parseInt(e("cb-note-m"))||0,note_a:parseInt(e("cb-note-a"))||0,rarity:e("cb-rarity")},t=At(),i=document.getElementById("cb-club"),c=((E=(f=i==null?void 0:i.selectedOptions[0])==null?void 0:f.dataset)==null?void 0:E.logo)||null,d=Ne(D,t,120),s=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`,r=je(n,{portraitUrl:s,clubLogoUrl:c,showNotes:!0}),p=document.getElementById("card-preview");p&&(p.innerHTML=r);const o=document.getElementById("avatar-preview-wrap");o&&(o.innerHTML=d);const a=e("cb-surname-real"),l=document.getElementById("encode-summary");l&&a&&(l.textContent=`${e("cb-firstname")} ${a} → ${e("cb-firstname")} ${n.surname_encoded}`)}function Ue(){const e=n=>{var t;return((t=document.getElementById(n))==null?void 0:t.value)||""};D={skin:e("av-skin"),hair:e("av-hair"),hairColor:e("av-hairColor"),eyes:e("av-eyes"),nose:e("av-nose"),mouth:e("av-mouth"),eyebrows:e("av-eyebrows"),beard:e("av-beard")}}function Ct(e,n,t){var c,d,s,r,p;e.querySelectorAll("input,select").forEach(o=>{o.addEventListener("input",T),o.addEventListener("change",T)});const i=["av-skin","av-hair","av-hairColor","av-eyes","av-nose","av-mouth","av-eyebrows","av-beard"];i.forEach(o=>{var a;(a=document.getElementById(o))==null||a.addEventListener("change",()=>{Ue(),T()})}),(c=document.getElementById("cb-surname-real"))==null||c.addEventListener("input",()=>{$e(),T()}),(d=document.getElementById("btn-encode"))==null||d.addEventListener("click",()=>{$e(),T()}),(s=document.getElementById("cb-club"))==null||s.addEventListener("change",T),(r=document.getElementById("btn-save-player"))==null||r.addEventListener("click",()=>St(t)),(p=document.getElementById("btn-reset"))==null||p.addEventListener("click",()=>{e.querySelectorAll("input").forEach(o=>o.value=""),e.querySelectorAll("select").forEach(o=>o.selectedIndex=0),D={...z},i.forEach(o=>{const a=o.replace("av-",""),l=document.getElementById(o);l&&(l.value=z[a]||"")}),T()})}async function St(e){const n=s=>{var r;return((r=document.getElementById(s))==null?void 0:r.value)||""},t=n("cb-surname-real").trim(),i=n("cb-surname-enc").trim()||P(t);if(!n("cb-firstname")||!t||!n("cb-country")||!n("cb-job")){e("Remplissez les champs obligatoires (prénom, nom, pays, poste)","error");return}Ue();const c={firstname:n("cb-firstname").trim(),surname_real:t,surname_encoded:i,country_code:n("cb-country"),club_id:n("cb-club")||null,job:n("cb-job"),job2:n("cb-job2")||null,note_g:parseInt(n("cb-note-g"))||0,note_d:parseInt(n("cb-note-d"))||0,note_m:parseInt(n("cb-note-m"))||0,note_a:parseInt(n("cb-note-a"))||0,rarity:n("cb-rarity")||"normal",note_min:parseInt(n("cb-note-min"))||null,note_max:parseInt(n("cb-note-max"))||null,sell_price:parseInt(n("cb-price"))||0,avatar_config:D,skin:D.skin||"blanc",hair:D.hairColor||"marron",hair_length:"court"},{error:d}=await y.from("players").insert(c);if(d){e("Erreur: "+d.message,"error");return}e(`✅ Joueur "${c.firstname} ${c.surname_encoded}" enregistré !`,"success")}function Tt(e){const n=Bt.map(([o,a])=>`<option value="${o}">${a} (${o})</option>`).join(""),t='<option value="">— Sélectionner un club —</option>'+e.map(o=>`<option value="${o.id}" data-logo="${o.logo_url||""}">${o.encoded_name}</option>`).join(""),i=_e.map(o=>`<option value="${o}">${o}</option>`).join(""),c='<option value="">Aucun</option>'+_e.map(o=>`<option value="${o}">${o}</option>`).join(""),d=Lt.map(o=>`<option value="${o}">${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),s=(o,a,l)=>Object.entries(a).map(([u,h])=>`<option value="${u}" ${u===(l||"")?"selected":""}>${h.label}</option>`).join(""),r=Object.keys(Xe).map(o=>`<option value="${o}" ${o===z.skin?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join(""),p=Object.keys(Qe).map(o=>`<option value="${o}" ${o===z.hairColor?"selected":""}>${o.charAt(0).toUpperCase()+o.slice(1)}</option>`).join("");return`
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
          <div><label>Rareté</label><select id="cb-rarity">${d}</select></div>
          <div><label>Note min</label><input id="cb-note-min" type="number" min="0" max="10" placeholder="—"></div>
          <div><label>Note max</label><input id="cb-note-max" type="number" min="0" max="10" placeholder="—"></div>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px">
          ${["normal","pepite","papyte","legende"].map(o=>`
            <div style="background:${et[o]};color:#fff;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:700">
              ${o.toUpperCase()}
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
              <select id="av-hair">${s("av-hair",tt,z.hair)}</select>
            </div>
            <div>
              <label>Couleur des cheveux</label>
              <select id="av-hairColor">${p}</select>
            </div>
            <div>
              <label>Sourcils</label>
              <select id="av-eyebrows">${s("av-eyebrows",nt,z.eyebrows)}</select>
            </div>
            <div>
              <label>Yeux</label>
              <select id="av-eyes">${s("av-eyes",it,z.eyes)}</select>
            </div>
            <div>
              <label>Nez</label>
              <select id="av-nose">${s("av-nose",ot,z.nose)}</select>
            </div>
            <div>
              <label>Bouche</label>
              <select id="av-mouth">${s("av-mouth",at,z.mouth)}</select>
            </div>
            <div>
              <label>Barbe</label>
              <select id="av-beard">${s("av-beard",rt,z.beard)}</select>
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
  `}async function Ve(e,{toast:n}){const{data:t,error:i}=await y.from("users").select("id,pseudo,club_name,credits,level,wins,draws,losses,trophies_top1,trophies_top2,trophies_top3,is_admin,created_at,mmr,mmr_deviation,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").order("created_at",{ascending:!1});if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=t||[];e.innerHTML=`
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
  `,d(c),document.getElementById("search-users").addEventListener("input",s=>{const r=s.target.value.toLowerCase();d(c.filter(p=>{var o;return p.pseudo.toLowerCase().includes(r)||((o=p.club_name)==null?void 0:o.toLowerCase().includes(r))}))});function d(s){document.getElementById("users-tbody").innerHTML=s.map(r=>{const p=r.mmr??1e3,o=r.mmr_deviation??350,a=r.placement_matches??0,l=lt(p),u=r.ranked_wins??0,h=r.ranked_losses??0,f=r.ranked_draws??0,E=u+h+f,w=E>0?Math.round(u/E*100):null,m=a<10,_=o<80?"#1A6B3C":o<150?"#e67e22":"#bb2020";return`
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
              <span style="font-size:16px">${l.emoji}</span>
              <span style="font-weight:700;color:${l.color}">${l.label}</span>
            </div>
            ${m?`<div style="font-size:10px;color:#e67e22">${a}/10 placement${a<10?` (${10-a} restants)`:""}</div>`:`<div style="font-size:10px;color:var(--gray-600)">${u}V ${f}N ${h}D${w!==null?` · ${w}% WR`:""}</div>`}
          </td>
          <td style="font-size:12px;font-family:monospace">
            <div style="font-weight:700;font-size:14px">${p}</div>
            <div style="font-size:10px;color:${_}">RD ±${Math.round(o)}</div>
          </td>
          <td>
            ${r.is_admin?'<span style="color:#1A6B3C;font-weight:700;font-size:12px">✅ Admin</span>':'<span style="color:#aaa;font-size:12px">Manager</span>'}
          </td>
          <td>
            <button class="btn btn-ghost btn-sm" data-toggle-admin="${r.id}" data-is-admin="${r.is_admin}">
              ${r.is_admin?"🔒 Retirer":"🔓 Admin"}
            </button>
          </td>
        </tr>`}).join(""),document.querySelectorAll("[data-toggle-admin]").forEach(r=>{r.addEventListener("click",async()=>{const p=r.dataset.isAdmin!=="true";if(!confirm(`Voulez-vous ${p?"rendre admin":"retirer le rôle admin"} de ce Manager ?`))return;const{error:o}=await y.from("users").update({is_admin:p}).eq("id",r.dataset.toggleAdmin);o?n(o.message,"error"):(n("Rôle mis à jour ✅","success"),Ve(e,{toast:n}))})})}}async function Ke(e,{toast:n}){const{data:t,error:i}=await y.from("market_listings").select(`
      id, price, status, listed_at, sold_at,
      seller:users!seller_id(pseudo),
      buyer:users!buyer_id(pseudo),
      card:cards(
        card_type,
        player:players(firstname, surname_encoded, rarity, job)
      )
    `).order("listed_at",{ascending:!1}).limit(100);if(i){e.innerHTML=`<p style="color:red">${i.message}</p>`;return}const c=t||[],d=c.filter(r=>r.status==="active").length,s=c.filter(r=>r.status==="sold").length;e.innerHTML=`
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
            ${c.map(r=>{var l,u,h,f;const p=(l=r.card)==null?void 0:l.player,o=p?`${p.firstname} ${p.surname_encoded}`:((u=r.card)==null?void 0:u.card_type)||"—",a={active:"#1A6B3C",sold:"#D4A017",cancelled:"#aaa"};return`<tr>
                <td><b>${o}</b>${p?`<div style="font-size:10px;color:#999">${p.rarity} · ${p.job}</div>`:""}</td>
                <td style="font-size:12px">${((h=r.seller)==null?void 0:h.pseudo)||"—"}</td>
                <td style="font-size:12px">${((f=r.buyer)==null?void 0:f.pseudo)||"—"}</td>
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
  `,document.querySelectorAll("[data-cancel]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm("Annuler cette annonce ?"))return;const{error:p}=await y.from("market_listings").update({status:"cancelled"}).eq("id",r.dataset.cancel);p?n(p.message,"error"):(n("Annonce annulée","success"),Ke(e,{toast:n}))})})}async function Mt(e,{toast:n}){e.innerHTML=`
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
  `,document.getElementById("export-clubs-template").addEventListener("click",()=>{te("clubs_template.csv",`real_name,encoded_name,country_code,logo_url
Paris Saint-Germain,PARIS FC,FR,
Real Madrid,MADRID FC,ES,
`)}),document.getElementById("export-players-template").addEventListener("click",()=>{te("players_template.csv",`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
Kylian,Mbappe,,FR,PARIS FC,ATT,,0,0,2,9,legende,,,blanc,noir,court,50000
Achraf,Hakimi,,MA,PARIS FC,DEF,MIL,0,7,5,3,pepite,5,9,metisse,noir,court,20000
`)}),document.getElementById("export-clubs").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("clubs").select("real_name,encoded_name,country_code,logo_url").order("encoded_name");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun club à exporter","info");return}let c=`real_name,encoded_name,country_code,logo_url
`;t.forEach(d=>{c+=[d.real_name,d.encoded_name,d.country_code,d.logo_url||""].map(ke).join(",")+`
`}),te("clubs_export.csv",c),n(`${t.length} clubs exportés`,"success")}),document.getElementById("export-players").addEventListener("click",async()=>{const{data:t,error:i}=await y.from("players").select("firstname,surname_real,surname_encoded,country_code,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name)").order("surname_encoded");if(i){n(i.message,"error");return}if(!t||t.length===0){n("Aucun joueur à exporter","info");return}let c=`firstname,surname_real,surname_encoded,country_code,club_encoded_name,job,job2,note_g,note_d,note_m,note_a,rarity,note_min,note_max,skin,hair,hair_length,sell_price
`;t.forEach(d=>{var s;c+=[d.firstname,d.surname_real,d.surname_encoded,d.country_code,((s=d.clubs)==null?void 0:s.encoded_name)||"",d.job,d.job2||"",d.note_g,d.note_d,d.note_m,d.note_a,d.rarity,d.note_min??"",d.note_max??"",d.skin,d.hair,d.hair_length,d.sell_price].map(ke).join(",")+`
`}),te("players_export.csv",c),n(`${t.length} joueurs exportés`,"success")}),document.getElementById("import-clubs").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("clubs-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),s=Ie(d);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}let r=0,p=0;const o=[];for(const a of s){if(!a.real_name||!a.encoded_name||!a.country_code){p++,o.push(`Ligne ignorée (champs manquants): ${a.real_name||"?"}`);continue}const l={real_name:a.real_name,encoded_name:a.encoded_name.toUpperCase(),country_code:a.country_code.toUpperCase().slice(0,2),logo_url:a.logo_url||null},{error:u}=await y.from("clubs").upsert(l,{onConflict:"encoded_name"});u?(p++,o.push(`${a.encoded_name}: ${u.message}`)):r++}c.innerHTML=`<div style="color:var(--green)">✅ ${r} clubs importés</div>
        ${p>0?`<div style="color:#c0392b">❌ ${p} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${o.slice(0,10).join("<br>")}</div>`:""}`,n(`${r} clubs importés`,"success")}catch(d){c.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""}),document.getElementById("import-players").addEventListener("change",async t=>{const i=t.target.files[0];if(!i)return;const c=document.getElementById("players-import-result");c.innerHTML='<span style="color:var(--gray-600)">Import en cours...</span>';try{const d=await i.text(),s=Ie(d);if(s.length===0){c.innerHTML='<span style="color:#c0392b">Fichier vide</span>';return}const{data:r}=await y.from("clubs").select("id,encoded_name"),p={};(r||[]).forEach(m=>{p[m.encoded_name.toUpperCase()]=m.id});let o=0,a=0;const l=[],u=["GK","DEF","MIL","ATT"],h=["normal","pepite","papyte","legende"],f=["blanc","metisse","typ","noir"],E=["blond","marron","noir","chauve"],w=["rase","court","milong","long"];for(const m of s){if(!m.firstname||!m.surname_real||!m.country_code||!m.job){a++,l.push(`Ligne ignorée (champs requis manquants): ${m.firstname||"?"}`);continue}if(!u.includes(m.job)){a++,l.push(`${m.firstname}: job invalide "${m.job}"`);continue}const _=m.club_encoded_name&&p[m.club_encoded_name.toUpperCase()]||null,$={firstname:m.firstname,surname_real:m.surname_real,surname_encoded:m.surname_encoded||P(m.surname_real),country_code:m.country_code.toUpperCase().slice(0,2),club_id:_,job:m.job,job2:u.includes(m.job2)?m.job2:null,note_g:parseInt(m.note_g)||0,note_d:parseInt(m.note_d)||0,note_m:parseInt(m.note_m)||0,note_a:parseInt(m.note_a)||0,rarity:h.includes(m.rarity)?m.rarity:"normal",note_min:m.note_min!==""&&m.note_min!=null?parseInt(m.note_min):null,note_max:m.note_max!==""&&m.note_max!=null?parseInt(m.note_max):null,skin:f.includes(m.skin)?m.skin:"blanc",hair:E.includes(m.hair)?m.hair:"noir",hair_length:w.includes(m.hair_length)?m.hair_length:"court",sell_price:parseInt(m.sell_price)||0},{error:v}=await y.from("players").insert($);v?(a++,l.push(`${m.firstname} ${m.surname_real}: ${v.message}`)):o++}c.innerHTML=`<div style="color:var(--green)">✅ ${o} joueurs importés</div>
        ${a>0?`<div style="color:#c0392b">❌ ${a} erreurs</div><div style="font-size:11px;color:var(--gray-600);max-height:100px;overflow-y:auto">${l.slice(0,10).join("<br>")}</div>`:""}`,n(`${o} joueurs importés`,"success")}catch(d){c.innerHTML=`<span style="color:#c0392b">Erreur : ${d.message}</span>`}t.target.value=""})}function ke(e){const n=String(e??"");return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function te(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(t),c=document.createElement("a");c.href=i,c.download=e,c.click(),URL.revokeObjectURL(i)}function Ie(e){e=e.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);const n=e.split(`
`).filter(s=>s.trim());if(n.length<2)return[];const t=n[0],i=t.split(";").length>t.split(",").length?";":",",c=Le(t,i).map(s=>s.trim().replace(/^\uFEFF/,"").toLowerCase()),d=[];for(let s=1;s<n.length;s++){if(!n[s].trim())continue;const r=Le(n[s],i),p={};c.forEach((o,a)=>{p[o]=(r[a]||"").trim()}),!Object.values(p).every(o=>!o)&&d.push(p)}return d}function Le(e,n=","){const t=[];let i="",c=!1;for(let d=0;d<e.length;d++){const s=e[d];c?s==='"'?e[d+1]==='"'?(i+='"',d++):c=!1:i+=s:s==='"'?c=!0:s===n?(t.push(i),i=""):i+=s}return t.push(i),t}const jt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};async function Rt(e,{toast:n}){const t=Object.keys(se);let i=t[0];const{data:c}=await y.from("formation_links_overrides").select("formation, links"),d={};(c||[]).forEach(a=>{d[a.formation]=a.links});let s=new Set;function r(a,l){return[a,l].sort().join("-")}function p(a){const l=d[a]||se[a]||[];s=new Set(l.map(([u,h])=>r(u,h)))}p(i),e.innerHTML=`
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
  `;function o(){const a=st[i]||{},l=he(i),u=320,h=400,f=22;function E(v){const g=a[v];return g?{x:g.x*u,y:g.y*h}:null}let w=`<svg width="${u}" height="${h}" viewBox="0 0 ${u} ${h}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;l.forEach(([v,g],b)=>{const x=E(v),k=E(g);if(!x||!k)return;const L=r(v,g),I=s.has(L),C=I?"#3b82f6":"#999",M=I?.95:.35,j=I?4:3;w+=`<line x1="${x.x}" y1="${x.y}" x2="${k.x}" y2="${k.y}"
        stroke="transparent" stroke-width="14" class="link-hit" data-key="${L}" style="cursor:pointer"/>`,w+=`<line x1="${x.x}" y1="${x.y}" x2="${k.x}" y2="${k.y}"
        stroke="${C}" stroke-width="${j}" stroke-dasharray="${I?"none":"4,3"}"
        opacity="${M}" pointer-events="none" data-line-key="${L}"/>`});for(const v of Object.keys(a)){const g=E(v);if(!g)continue;const b=v.replace(/\d+/,""),x=jt[b]||"#555";w+=`<circle cx="${g.x}" cy="${g.y}" r="${f}" fill="${x}" stroke="rgba(255,255,255,0.7)" stroke-width="2" pointer-events="none"/>`,w+=`<text x="${g.x}" y="${g.y+4}" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial Black,Arial" pointer-events="none">${v}</text>`}w+="</svg>",document.getElementById("field-wrap").innerHTML=w;const m=document.getElementById("links-list");m.innerHTML=l.map(([v,g])=>{const b=r(v,g),x=s.has(b);return`
        <button class="link-toggle" data-key="${b}" style="
          display:flex;justify-content:space-between;align-items:center;
          padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;
          border:1.5px solid ${x?"#3b82f6":"#ddd"};
          background:${x?"#eaf2ff":"#fafafa"};
          color:${x?"#1d4ed8":"#888"}">
          <span>${v} ↔ ${g}</span>
          <span>${x?"● Actif":"○ Inactif"}</span>
        </button>`}).join("");const _=e.querySelector('div[style*="font-weight:700;font-size:13px;margin-bottom:8px"]');_&&(_.textContent=`Liens (${s.size}/${l.length} actifs)`);function $(v){s.has(v)?s.delete(v):s.add(v),o()}e.querySelectorAll(".link-hit").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))}),e.querySelectorAll(".link-toggle").forEach(v=>{v.addEventListener("click",()=>$(v.dataset.key))})}o(),document.getElementById("formation-select").addEventListener("change",a=>{i=a.target.value,p(i),o()}),document.getElementById("reset-btn").addEventListener("click",()=>{const a=se[i]||[];s=new Set(a.map(([l,u])=>r(l,u))),o(),n("Liens réinitialisés aux valeurs par défaut (non sauvegardé)","info")}),document.getElementById("save-btn").addEventListener("click",async()=>{const l=he(i).filter(([h,f])=>s.has(r(h,f))),{error:u}=await y.from("formation_links_overrides").upsert({formation:i,links:l,updated_at:new Date().toISOString()});if(u){n(u.message,"error");return}d[i]=l,n(`Liens enregistrés pour ${i} (${l.length} actifs)`,"success")})}const Nt=[{value:"player",label:"Joueur"},{value:"formation",label:"Formation"},{value:"game_changer",label:"Game Changer"},{value:"ultra_game_changer",label:"Ultra Game Changer"},{value:"game_helper",label:"Game Helper"},{value:"stadium",label:"🏟️ Stade"}],Dt=[{value:"",label:"Toutes"},{value:"normal",label:"Normal"},{value:"pepite",label:"Pépite"},{value:"papyte",label:"Papyte"},{value:"legende",label:"Légende"}],Pt=[{value:"credits",label:"Crédits"},{value:"pub",label:"Publicité"},{value:"free",label:"Gratuit"}];async function qt(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("booster_configs").select("*").order("sort_order");let t=null,i=[],c=null;const d=()=>window.innerWidth<700;async function s(){if(!t){i=[];return}if(t!==c){const{data:l}=await y.from("booster_drop_rates").select("*").eq("booster_id",t).order("sort_order");i=l||[],c=t}}function r(){return`
    <div id="booster-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Boosters (${(n||[]).length})</b>
        <button id="btn-new" style="background:#1A6B3C;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(l=>`
      <div class="booster-row" data-id="${l.id}"
        style="display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${l.id===t?"#f0f7f0":"#fff"}">
        ${l.image_url?`<img src="/icons/${l.image_url}" style="width:36px;height:36px;object-fit:contain;border-radius:6px;background:#f5f5f5;padding:2px">`:'<div style="width:36px;height:36px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px">📦</div>'}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.name}</div>
          <div style="font-size:11px;color:#888">
            ${l.price_type==="credits"?(l.price_credits||0)+" cr.":l.price_type==="pub"?"Pub":"Gratuit"}
            · ${l.card_count||5} cartes · ${l.is_active?"✅":"⛔"}
          </div>
        </div>
        <button class="btn-delete" data-id="${l.id}" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0">🗑️</button>
      </div>`).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucun booster. Cliquez + Nouveau.</div>'}
    </div>`}function p(){const l=t?(n||[]).find(f=>f.id===t):null;if(!l)return`<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez un booster ou créez-en un nouveau
    </div>`;const u=i.reduce((f,E)=>f+Number(E.percentage||0),0),h=Math.abs(u-100)<.1;return`
    <div id="booster-editor" style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

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
          ${l.image_url?`<img src="/icons/${l.image_url}" style="height:44px;margin-top:8px;border-radius:6px;object-fit:contain;background:#f0f0f0;padding:4px">`:""}
          <div id="icon-picker-grid" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE DE PRIX</label>
            <select id="f-price-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${Pt.map(f=>`<option value="${f.value}" ${l.price_type===f.value?"selected":""}>${f.label}</option>`).join("")}
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
        <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
          <input type="checkbox" id="f-allow-dup" ${l.allow_duplicates!==!1?"checked":""} style="width:18px;height:18px;cursor:pointer">
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
              <input id="f-max-per-user" type="number" min="1" value="${l.max_per_user||""}" placeholder="ex: 1"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible à partir du</label>
              <input id="f-available-from" type="date" value="${l.available_from||""}"
                style="width:100%;padding:8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
            </div>
            <div>
              <label style="font-size:11px;color:#666;display:block;margin-bottom:4px">Disponible jusqu'au</label>
              <input id="f-available-until" type="date" value="${l.available_until||""}"
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
              Total : ${u.toFixed(1)}% ${h?"✅":"⚠️"}
            </span>
          </div>
          <button id="btn-add-rate" style="background:#9b59b6;color:#fff;border:none;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Ligne</button>
        </div>

        ${i.length===0?'<div style="text-align:center;padding:16px;color:#aaa;font-size:13px">Aucun taux. Cliquez + Ligne.</div>':i.map((f,E)=>`
          <div style="display:grid;grid-template-columns:2fr 1.5fr 50px 50px 60px 32px;gap:4px;align-items:center;margin-bottom:6px;padding:6px;background:#f9f9f9;border-radius:6px" data-rate-idx="${E}">
            <select class="rate-type" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Nt.map(w=>`<option value="${w.value}" ${f.card_type===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <select class="rate-rarity" data-idx="${E}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;font-size:12px;width:100%">
              ${Dt.map(w=>`<option value="${w.value}" ${(f.rarity||"")===w.value?"selected":""}>${w.label}</option>`).join("")}
            </select>
            <input class="rate-note-min" data-idx="${E}" type="number" min="1" max="10" value="${f.note_min||""}" placeholder="min" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-note-max" data-idx="${E}" type="number" min="1" max="10" value="${f.note_max||""}" placeholder="max" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <input class="rate-pct" data-idx="${E}" type="number" min="0.1" max="100" step="0.1" value="${f.percentage}" style="padding:6px 4px;border:1px solid #ddd;border-radius:4px;text-align:center;font-size:12px;width:100%">
            <button class="btn-del-rate" data-idx="${E}" style="background:#fee;border:1px solid #fcc;color:#e74c3c;border-radius:4px;cursor:pointer;font-size:16px;line-height:1;padding:4px;width:100%">×</button>
          </div>`).join("")}

        <div style="font-size:10px;color:#aaa;margin-top:6px">Type · Rareté · Note min · Note max · % · ×</div>
      </div>

      <!-- Actions -->
      <div style="display:flex;gap:10px;padding-bottom:20px">
        <button id="btn-save" style="flex:1;background:#1A6B3C;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;cursor:pointer">💾 Enregistrer</button>
        <button id="btn-cancel" style="background:#eee;color:#555;border:none;border-radius:10px;padding:13px 18px;font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`}async function o(l=!1){l||await s();const u=!t&&d(),h=t&&d();e.innerHTML=`
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">
      ${!d()||u||!t?r():""}
      ${!d()||h?p():""}
    </div>`,a()}function a(){var h,f,E,w,m,_,$;const l=v=>e.querySelector(v);e.querySelectorAll(".booster-row").forEach(v=>{v.addEventListener("click",g=>{g.target.closest(".btn-delete")||(t=v.dataset.id,c=null,o())})}),(h=l("#btn-back"))==null||h.addEventListener("click",()=>{t=null,o()}),(f=l("#btn-new"))==null||f.addEventListener("click",async()=>{const v=prompt("Nom du nouveau booster :");if(!(v!=null&&v.trim()))return;const{data:g,error:b}=await y.from("booster_configs").insert({name:v.trim(),price_type:"credits",price_credits:1e3,card_count:5}).select().single();if(b){alert(b.message);return}n.push(g),t=g.id,c=null,o()}),e.querySelectorAll(".btn-delete").forEach(v=>{v.addEventListener("click",async g=>{if(g.stopPropagation(),!confirm("Supprimer ce booster ?"))return;await y.from("booster_configs").delete().eq("id",v.dataset.id);const b=n.findIndex(x=>x.id===v.dataset.id);b>-1&&n.splice(b,1),t===v.dataset.id&&(t=null,c=null),o()})}),(E=l("#btn-cancel"))==null||E.addEventListener("click",()=>{t=null,o()}),(w=l("#f-price-type"))==null||w.addEventListener("change",v=>{const g=l("#credits-field");g&&(g.style.opacity=v.target.value!=="credits"?"0.4":"1")}),(m=l("#btn-pick-icon"))==null||m.addEventListener("click",async()=>{var g;const v=l("#icon-picker-grid");if(v){if(v.style.display!=="none"){v.style.display="none";return}v.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',v.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(x)?x.filter(I=>I.name.startsWith("booster")&&/\.(png|jpg|svg|webp)$/i.test(I.name)):[];if(!k.length){v.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucune icône "booster*" trouvée.</div>';return}const L=((g=l("#f-image-url"))==null?void 0:g.value)||"";v.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${k.map(I=>`
          <div class="icon-pick-item" data-name="${I.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${I.name===L?"#1A6B3C":"#ddd"};background:${I.name===L?"#f0f7f0":"#fff"}">
            <img src="/icons/${I.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace(/\.(png|jpg|svg|webp)$/i,"")}</div>
          </div>`).join("")}
        </div>`,v.querySelectorAll(".icon-pick-item").forEach(I=>{I.addEventListener("click",()=>{const C=l("#f-image-url");C&&(C.value=I.dataset.name),v.style.display="none"})})}catch(b){v.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${b.message}</div>`}}});function u(){e.querySelectorAll("[data-rate-idx]").forEach(v=>{var b,x,k,L,I;const g=Number(v.dataset.rateIdx);g>=0&&g<i.length&&(i[g].card_type=((b=v.querySelector(".rate-type"))==null?void 0:b.value)||"player",i[g].rarity=((x=v.querySelector(".rate-rarity"))==null?void 0:x.value)||null,i[g].note_min=Number((k=v.querySelector(".rate-note-min"))==null?void 0:k.value)||null,i[g].note_max=Number((L=v.querySelector(".rate-note-max"))==null?void 0:L.value)||null,i[g].percentage=Number((I=v.querySelector(".rate-pct"))==null?void 0:I.value)||0)})}(_=l("#btn-add-rate"))==null||_.addEventListener("click",()=>{u(),i.push({id:null,booster_id:t,card_type:"player",rarity:"normal",note_min:null,note_max:null,percentage:10,sort_order:i.length}),o(!0)}),e.querySelectorAll(".btn-del-rate").forEach(v=>{v.addEventListener("click",()=>{u(),i.splice(Number(v.dataset.idx),1),o(!0)})}),($=l("#btn-save"))==null||$.addEventListener("click",async()=>{var L,I,C,M,j,G,U,V,K,J,Y,W,S;const v=(n||[]).find(B=>B.id===t);if(!v)return;const g=[];e.querySelectorAll("[data-rate-idx]").forEach(B=>{var fe,be,xe,ve,ye;const le=Number(B.dataset.rateIdx);g.push({booster_id:t,card_type:((fe=B.querySelector(".rate-type"))==null?void 0:fe.value)||"player",rarity:((be=B.querySelector(".rate-rarity"))==null?void 0:be.value)||null,note_min:Number((xe=B.querySelector(".rate-note-min"))==null?void 0:xe.value)||null,note_max:Number((ve=B.querySelector(".rate-note-max"))==null?void 0:ve.value)||null,percentage:Number((ye=B.querySelector(".rate-pct"))==null?void 0:ye.value)||0,sort_order:le});const q=g[g.length-1];q.rarity||(q.rarity=null),q.note_min||(q.note_min=null),q.note_max||(q.note_max=null)});const b=g.reduce((B,le)=>B+le.percentage,0);if(g.length&&Math.abs(b-100)>.5){alert(`La somme doit faire 100% (actuellement ${b.toFixed(1)}%)`);return}const x={name:((I=(L=l("#f-name"))==null?void 0:L.value)==null?void 0:I.trim())||v.name,image_url:((M=(C=l("#f-image-url"))==null?void 0:C.value)==null?void 0:M.trim())||null,price_type:(j=l("#f-price-type"))==null?void 0:j.value,price_credits:Number((G=l("#f-price-credits"))==null?void 0:G.value)||0,card_count:Number((U=l("#f-card-count"))==null?void 0:U.value)||5,is_active:((V=l("#f-active"))==null?void 0:V.checked)??v.is_active,allow_duplicates:((K=l("#f-allow-dup"))==null?void 0:K.checked)??!0,sort_order:Number((J=l("#f-sort"))==null?void 0:J.value)||0,max_per_user:(Y=l("#f-max-per-user"))!=null&&Y.value?Number(l("#f-max-per-user").value):null,available_from:((W=l("#f-available-from"))==null?void 0:W.value)||null,available_until:((S=l("#f-available-until"))==null?void 0:S.value)||null},{error:k}=await y.from("booster_configs").update(x).eq("id",t);if(k){alert(k.message);return}if(Object.assign(v,x),await y.from("booster_drop_rates").delete().eq("booster_id",t),g.length){const{error:B}=await y.from("booster_drop_rates").insert(g);if(B){alert(B.message);return}}i=g,c=t,alert("✅ Booster enregistré !"),o(!0)})}o()}const Je=[{value:"normal",label:"Normal",color:"#888"},{value:"pepite",label:"Pépite",color:"#D4A017"},{value:"papyte",label:"Papyte",color:"#909090"},{value:"legende",label:"Légende",color:"#7a28b8"}];async function Ot(e){await ue(e)}async function ue(e){const{data:n,error:t}=await y.from("sell_price_configs").select("*").order("rarity").order("note_min");if(t){e.innerHTML=`<div style="padding:24px;color:red">Erreur : ${t.message}</div>`;return}e.innerHTML=`
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
    </div>`,document.getElementById("add-config").addEventListener("click",()=>Be(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("config-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Ht(e)),e.querySelectorAll("[data-edit]").forEach(i=>{const c=(n||[]).find(d=>d.id===i.dataset.edit);c&&i.addEventListener("click",()=>Be(c))}),e.querySelectorAll("[data-delete]").forEach(i=>{i.addEventListener("click",async()=>{confirm("Supprimer cette règle ?")&&(await y.from("sell_price_configs").delete().eq("id",i.dataset.delete),await ue(e))})})}function Ft(e){const n=Je.find(t=>t.value===e.rarity);return`
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
    </tr>`}function Be(e){document.getElementById("config-form").style.display="block",document.getElementById("form-title").textContent=e?"Modifier la règle":"Nouvelle règle",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-rarity").value=(e==null?void 0:e.rarity)||"normal",document.getElementById("form-price").value=(e==null?void 0:e.price)||1e3,document.getElementById("form-note-min").value=(e==null?void 0:e.note_min)??1,document.getElementById("form-note-max").value=(e==null?void 0:e.note_max)??10,document.getElementById("config-form").scrollIntoView({behavior:"smooth"})}async function Ht(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-rarity").value,i=parseInt(document.getElementById("form-price").value)||0,c=parseInt(document.getElementById("form-note-min").value)||1,d=parseInt(document.getElementById("form-note-max").value)||10;if(c>d){alert("Note min doit être ≤ note max");return}const s={rarity:t,price:i,note_min:c,note_max:d,updated_at:new Date().toISOString()};let r;if(n?{error:r}=await y.from("sell_price_configs").update(s).eq("id",n):{error:r}=await y.from("sell_price_configs").insert(s),r){alert("Erreur : "+r.message);return}document.getElementById("config-form").style.display="none",await ue(e)}async function Gt(e){await me(e)}async function me(e){const{data:n}=await y.from("patch_notes").select("*").order("published_at",{ascending:!1});e.innerHTML=`
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
    </div>`,document.getElementById("add-article").addEventListener("click",()=>ze(null)),document.getElementById("form-cancel").addEventListener("click",()=>{document.getElementById("article-form").style.display="none"}),document.getElementById("form-save").addEventListener("click",()=>Vt(e)),e.querySelectorAll("[data-edit]").forEach(t=>{const i=(n||[]).find(c=>c.id===t.dataset.edit);i&&t.addEventListener("click",()=>ze(i))}),e.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{confirm("Supprimer cet article ?")&&(await y.from("patch_notes").delete().eq("id",t.dataset.delete),await me(e))})})}function Ut(e){const n=new Date(e.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"});return`
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
    </div>`}function ze(e){const n=document.getElementById("article-form");n.style.display="block",document.getElementById("form-title").textContent=e?"Modifier l'article":"Nouvel article",document.getElementById("form-id").value=(e==null?void 0:e.id)||"",document.getElementById("form-art-title").value=(e==null?void 0:e.title)||"",document.getElementById("form-art-desc").value=(e==null?void 0:e.description)||"",document.getElementById("form-art-img").value=(e==null?void 0:e.image_url)||"",document.getElementById("form-art-pub").checked=e?e.is_published:!0;const t=new Date((e==null?void 0:e.published_at)||Date.now()),i=new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16);document.getElementById("form-art-date").value=i,n.scrollIntoView({behavior:"smooth"})}async function Vt(e){const n=document.getElementById("form-id").value,t=document.getElementById("form-art-title").value.trim(),i=document.getElementById("form-art-desc").value.trim(),c=document.getElementById("form-art-img").value.trim()||null,d=document.getElementById("form-art-pub").checked,s=document.getElementById("form-art-date").value;if(!t){alert("Le titre est obligatoire.");return}if(!i){alert("La description est obligatoire.");return}const r=s?new Date(s).toISOString():new Date().toISOString(),p={title:t,description:i,image_url:c,is_published:d,published_at:r};let o;if(n?{error:o}=await y.from("patch_notes").update(p).eq("id",n):{error:o}=await y.from("patch_notes").insert(p),o){alert("Erreur : "+o.message);return}document.getElementById("article-form").style.display="none",await me(e)}async function Kt(e){await H(e)}async function H(e){var a,l,u,h,f,E,w,m,_,$,v,g;const{data:n}=await y.from("tutorial_steps").select("*").order("step_order");e.innerHTML=`
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
          </div>`:(n||[]).map(b=>Jt(b)).join("")}
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
    </div>`,(a=document.getElementById("ts-add"))==null||a.addEventListener("click",()=>Ae(null,(n==null?void 0:n.length)||0)),(l=document.getElementById("ts-reset"))==null||l.addEventListener("click",async()=>{if(!confirm("Remettre tutorial_done = false pour TOUS les joueurs ? Ils reverront le tutoriel à leur prochaine connexion."))return;const{error:b}=await y.from("users").update({tutorial_done:!1}).neq("id","00000000-0000-0000-0000-000000000000");alert(b?"Erreur : "+b.message:"✅ Tutorial_done réinitialisé pour tous les joueurs.")}),(u=document.getElementById("ts-cancel"))==null||u.addEventListener("click",Ye),(h=document.getElementById("ts-save"))==null||h.addEventListener("click",()=>Wt(e)),(f=document.getElementById("ts-preview-btn"))==null||f.addEventListener("click",Yt);const t=document.getElementById("ts-editor"),i=()=>{const b=document.getElementById("ts-content");b&&t&&(b.value=t.innerHTML)};t==null||t.addEventListener("input",i),t==null||t.addEventListener("blur",i);const c=()=>{document.activeElement!==t&&(t==null||t.focus())};(E=document.getElementById("ts-toolbar"))==null||E.querySelectorAll("[data-cmd]").forEach(b=>{b.addEventListener("mousedown",x=>{x.preventDefault(),c();const k=b.dataset.cmd;k.startsWith("formatBlock:")?document.execCommand("formatBlock",!1,k.split(":")[1]):document.execCommand(k,!1,null),i()})}),(w=document.getElementById("ts-insert-color"))==null||w.addEventListener("mousedown",b=>{b.preventDefault(),c();const x=prompt("Couleur hex (ex: #D4A017 pour or, #1A6B3C pour vert, #cc2222 pour rouge) :");x&&(document.execCommand("foreColor",!1,x),i())}),(m=document.getElementById("ts-clear-format"))==null||m.addEventListener("mousedown",b=>{b.preventDefault(),c(),document.execCommand("removeFormat",!1,null),i()}),t==null||t.addEventListener("focus",()=>{t&&(t.style.borderColor="#1A6B3C")}),t==null||t.addEventListener("blur",()=>{t&&(t.style.borderColor="#ddd")});const d=document.getElementById("ts-image"),s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el"),p=document.getElementById("ts-img-picker-grid"),o=()=>{var x;const b=(x=d==null?void 0:d.value)==null?void 0:x.trim();if(b){const k="/";r.src=`${k}icons/${b}`,s.style.display="block"}else s.style.display="none"};d==null||d.addEventListener("input",o),(_=document.getElementById("ts-img-clear"))==null||_.addEventListener("click",()=>{d&&(d.value=""),s.style.display="none",p.style.display="none"}),($=document.getElementById("ts-img-pick"))==null||$.addEventListener("click",async()=>{if(p.style.display!=="none"){p.style.display="none";return}p.innerHTML='<div style="color:#aaa;font-size:12px">Chargement…</div>',p.style.display="block";try{const x=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),k=Array.isArray(x)?x.filter(I=>I.name.startsWith("tuto_")):[];if(!k.length){p.innerHTML='<div style="color:#aaa;font-size:12px">Aucun fichier tuto_* trouvé dans /icons/.<br>Uploade des images nommées tuto_xxx.png dans public/icons/</div>';return}const L="/";p.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:8px">'+k.map(I=>`
          <div data-pick="${I.name}" style="cursor:pointer;border:2px solid transparent;border-radius:8px;padding:4px;text-align:center;transition:border-color .15s" onmouseover="this.style.borderColor='#1A6B3C'" onmouseout="this.style.borderColor='transparent'">
            <img src="${L}icons/${I.name}" style="width:70px;height:56px;object-fit:contain;display:block;border-radius:4px">
            <div style="font-size:9px;color:#888;margin-top:3px;max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I.name.replace("tuto_","").replace(/\.[^.]+$/,"")}</div>
          </div>`).join("")+"</div>",p.querySelectorAll("[data-pick]").forEach(I=>{I.addEventListener("click",()=>{d&&(d.value=I.dataset.pick),o(),p.style.display="none"})})}catch(b){p.innerHTML='<div style="color:#cc2222;font-size:12px">Erreur chargement : '+b.message+"</div>"}}),(v=document.getElementById("ts-color"))==null||v.addEventListener("input",b=>{const x=document.getElementById("ts-color-hex");x&&(x.value=b.target.value)}),(g=document.getElementById("ts-color-hex"))==null||g.addEventListener("input",b=>{const x=b.target.value;if(/^#[0-9a-fA-F]{6}$/.test(x)){const k=document.getElementById("ts-color");k&&(k.value=x)}}),e.querySelectorAll("[data-edit]").forEach(b=>{const x=(n||[]).find(k=>k.id===b.dataset.edit);x&&b.addEventListener("click",()=>Ae(x))}),e.querySelectorAll("[data-delete]").forEach(b=>{b.addEventListener("click",async()=>{confirm("Supprimer cette étape ?")&&(await y.from("tutorial_steps").delete().eq("id",b.dataset.delete),H(e))})}),e.querySelectorAll("[data-toggle]").forEach(b=>{b.addEventListener("click",async()=>{const x=(n||[]).find(k=>k.id===b.dataset.toggle);x&&(await y.from("tutorial_steps").update({is_active:!x.is_active}).eq("id",x.id),H(e))})}),e.querySelectorAll("[data-up]").forEach(b=>{b.addEventListener("click",async()=>{const x=n||[],k=x.findIndex(L=>L.id===b.dataset.up);k<=0||(await Promise.all([y.from("tutorial_steps").update({step_order:x[k-1].step_order}).eq("id",x[k].id),y.from("tutorial_steps").update({step_order:x[k].step_order}).eq("id",x[k-1].id)]),H(e))})}),e.querySelectorAll("[data-down]").forEach(b=>{b.addEventListener("click",async()=>{const x=n||[],k=x.findIndex(L=>L.id===b.dataset.down);k<0||k>=x.length-1||(await Promise.all([y.from("tutorial_steps").update({step_order:x[k+1].step_order}).eq("id",x[k].id),y.from("tutorial_steps").update({step_order:x[k].step_order}).eq("id",x[k+1].id)]),H(e))})})}function Jt(e){return`
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
  </div>`}function Ae(e,n=0){document.getElementById("ts-form").style.display="block",document.getElementById("ts-form-title").textContent=e?"Modifier l'étape":"Nouvelle étape",document.getElementById("ts-id").value=(e==null?void 0:e.id)||"",document.getElementById("ts-emoji").value=(e==null?void 0:e.emoji)||"⚽",document.getElementById("ts-title").value=(e==null?void 0:e.title)||"",document.getElementById("ts-content").value=(e==null?void 0:e.content)||"";const t=document.getElementById("ts-editor");t&&(t.innerHTML=(e==null?void 0:e.content)||"<p>Texte de l'étape…</p>"),document.getElementById("ts-order").value=(e==null?void 0:e.step_order)??n,document.getElementById("ts-active").checked=e?e.is_active:!0;const i=(e==null?void 0:e.color)||"#1A6B3C";document.getElementById("ts-color").value=i,document.getElementById("ts-color-hex").value=i;const c=(e==null?void 0:e.image_url)||"",d=document.getElementById("ts-image");d&&(d.value=c);const s=document.getElementById("ts-img-preview"),r=document.getElementById("ts-img-preview-el");if(c&&s&&r){const p="/";r.src=`${p}icons/${c}`,s.style.display="block"}else s&&(s.style.display="none");document.getElementById("ts-img-picker-grid").style.display="none",document.getElementById("ts-preview-area").innerHTML="",document.getElementById("ts-form").scrollIntoView({behavior:"smooth"})}function Ye(){document.getElementById("ts-form").style.display="none",document.getElementById("ts-preview-area").innerHTML=""}function Yt(){var o,a;const e=document.getElementById("ts-emoji").value||"⚽",n=document.getElementById("ts-title").value||"Titre",t=document.getElementById("ts-editor"),i=t?t.innerHTML:document.getElementById("ts-content").value||"",c=document.getElementById("ts-color-hex").value||"#1A6B3C",d=(a=(o=document.getElementById("ts-image"))==null?void 0:o.value)==null?void 0:a.trim(),r=d?`<div style="padding:0 20px 12px;text-align:center"><img src="/icons/${d}" style="max-height:140px;max-width:100%;border-radius:10px;object-fit:contain"></div>`:"",p=document.getElementById("ts-preview-area");p.innerHTML=`
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
        <div style="padding:${d?"4":"14"}px 20px 18px;font-size:13px;color:#333;line-height:1.7">${i}</div>
        <div style="padding:14px 20px;border-top:1px solid #f0f0f0;display:flex;gap:10px">
          <button style="padding:10px 16px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:12px;font-weight:700;cursor:default;color:#555">‹ Précédent</button>
          <div style="flex:1"></div>
          <button style="padding:10px 18px;border-radius:10px;border:none;background:${c};color:#fff;font-size:13px;font-weight:900;cursor:default">Suivant ›</button>
        </div>
      </div>
    </div>`,p.querySelectorAll("ul,ol").forEach(l=>{l.style.paddingLeft="20px",l.style.margin="6px 0"}),p.querySelectorAll("li").forEach(l=>{l.style.marginBottom="4px"}),p.querySelectorAll("p").forEach(l=>{l.style.marginBottom="8px"})}async function Wt(e){var l,u;const n=document.getElementById("ts-id").value,t=document.getElementById("ts-emoji").value.trim()||"⚽",i=document.getElementById("ts-title").value.trim(),c=document.getElementById("ts-editor"),d=(c?c.innerHTML:document.getElementById("ts-content").value).trim(),s=document.getElementById("ts-color-hex").value.trim()||"#1A6B3C",r=parseInt(document.getElementById("ts-order").value)||0,p=document.getElementById("ts-active").checked;if(!i||!d){alert("Titre et contenu sont obligatoires.");return}const o={emoji:t,title:i,content:d,color:s,step_order:r,is_active:p,image_url:((u=(l=document.getElementById("ts-image"))==null?void 0:l.value)==null?void 0:u.trim())||null};let a;if(n?{error:a}=await y.from("tutorial_steps").update(o).eq("id",n):{error:a}=await y.from("tutorial_steps").insert(o),a){alert("Erreur : "+a.message);return}Ye(),H(e)}const Zt="/",We="#E87722",Xt=[["MA","Maroc"],["FR","France"],["AR","Argentine"],["PT","Portugal"],["BR","Brésil"],["ES","Espagne"],["DE","Allemagne"],["GB","Angleterre"],["IT","Italie"],["CM","Cameroun"],["SN","Sénégal"],["NG","Nigéria"],["DK","Danemark"],["NL","Pays-Bas"],["BE","Belgique"],["CI","Côte d'Ivoire"],["AL","Albanie"],["HR","Croatie"],["RS","Serbie"],["TR","Turquie"],["MW","Malawi"],["GH","Ghana"],["ZA","Afrique du Sud"],["EG","Égypte"],["US","États-Unis"],["MX","Mexique"],["CO","Colombie"],["UY","Uruguay"],["CL","Chili"],["JP","Japon"],["KR","Corée du Sud"],["CN","Chine"],["AU","Australie"],["SW","Suisse"],["SE","Suède"],["NO","Norvège"],["PL","Pologne"]];async function Qt(e){await ge(e)}async function ge(e){var i,c,d,s;const[{data:n},{data:t}]=await Promise.all([y.from("stadium_definitions").select("*, club:clubs(encoded_name, logo_url)").order("name"),y.from("clubs").select("id, encoded_name, logo_url").order("encoded_name")]);e.innerHTML=`
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
                ${Xt.map(([r,p])=>`<option value="${r}">${p} (${r})</option>`).join("")}
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
    </div>`,(i=document.getElementById("st-add-btn"))==null||i.addEventListener("click",()=>Ce(null)),(c=document.getElementById("st-cancel"))==null||c.addEventListener("click",()=>{document.getElementById("st-form").style.display="none"}),(d=document.getElementById("st-save"))==null||d.addEventListener("click",()=>nn(e)),(s=document.getElementById("st-preview-btn"))==null||s.addEventListener("click",()=>oe()),["st-name","st-club","st-country","st-image"].forEach(r=>{var p,o;(p=document.getElementById(r))==null||p.addEventListener("input",oe),(o=document.getElementById(r))==null||o.addEventListener("change",oe)}),e.querySelectorAll("[data-edit]").forEach(r=>{const p=(n||[]).find(o=>o.id===r.dataset.edit);p&&r.addEventListener("click",()=>Ce(p))}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{confirm("Supprimer ce stade ?")&&(await y.from("stadium_definitions").delete().eq("id",r.dataset.delete),ge(e))})})}function en(e){var t,i;const n=(t=e.club)!=null&&t.logo_url?`<img src="${e.club.logo_url}" style="width:32px;height:32px;object-fit:contain">`:'<span style="font-size:20px">🌍</span>';return`
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
    </div>`}function Ce(e,n){var i,c;document.getElementById("st-form").style.display="block",document.getElementById("st-form-title").textContent=e?"Modifier le stade":"Nouveau stade",document.getElementById("st-id").value=(e==null?void 0:e.id)||"",document.getElementById("st-name").value=(e==null?void 0:e.name)||"",document.getElementById("st-club").value=(e==null?void 0:e.club_id)||"";const t=document.getElementById("st-country");t&&(t.value=(e==null?void 0:e.country_code)||""),document.getElementById("st-image").value=(e==null?void 0:e.image_url)||"",document.getElementById("st-preview-card").innerHTML="",oe((i=e==null?void 0:e.club)==null?void 0:i.logo_url,(c=e==null?void 0:e.club)==null?void 0:c.encoded_name),document.getElementById("st-form").scrollIntoView({behavior:"smooth"})}function oe(){var o,a,l,u,h,f,E;const e=((o=document.getElementById("st-name"))==null?void 0:o.value)||"NOM DU STADE",n=(l=(a=document.getElementById("st-image"))==null?void 0:a.value)==null?void 0:l.trim(),t=(h=(u=document.getElementById("st-country"))==null?void 0:u.value)==null?void 0:h.trim(),i=document.getElementById("st-club"),c=(i==null?void 0:i.selectedIndex)||0,d=i&&c>0?i.options[c].text:"",s=((E=(f=i==null?void 0:i.options[c])==null?void 0:f.getAttribute)==null?void 0:E.call(f,"data-logo"))||"";let r;n?r=`<img src="${Zt}icons/${n}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto">`:s?r=`<img src="${s}" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 auto" onerror="this.style.display='none'">`:t?r=`<img src="${`https://flagcdn.com/w80/${t.toLowerCase()}.png`}" style="width:80px;height:60px;object-fit:contain;display:block;margin:0 auto;border-radius:4px">`:r='<div style="font-size:36px;text-align:center">🏟️</div>';const p=d||t||"—";document.getElementById("st-preview-card").innerHTML=tn(e,r,p,!0)}function tn(e,n,t,i=!1){return`<div style="width:140px;background:linear-gradient(160deg,${We},#c45a00);border-radius:12px;padding:6px;display:flex;flex-direction:column;gap:0;box-shadow:0 4px 12px rgba(232,119,34,0.4);font-family:Arial,sans-serif">
    <div style="text-align:center;font-size:8px;font-weight:900;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">🏟️ STADE</div>
    <div style="background:rgba(0,0,0,0.25);border-radius:6px;padding:4px 6px;text-align:center;margin-bottom:4px">
      <div style="font-size:9px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:80px;padding:4px 0">${n}</div>
    <div style="background:rgba(0,0,0,0.3);border-radius:6px;padding:4px 6px;text-align:center;margin-top:4px">
      <div style="font-size:8px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}</div>
      <div style="font-size:10px;font-weight:900;color:#FFD700;margin-top:1px">+10 ⭐</div>
    </div>
  </div>`}async function nn(e){const n=document.getElementById("st-id").value,t=document.getElementById("st-name").value.trim(),i=document.getElementById("st-club").value||null,c=document.getElementById("st-country").value.trim().toUpperCase()||null,d=document.getElementById("st-image").value.trim()||null;if(!t){alert("Le nom est obligatoire");return}const s={name:t,club_id:i,country_code:c,image_url:d},{error:r}=n?await y.from("stadium_definitions").update(s).eq("id",n):await y.from("stadium_definitions").insert(s);if(r){alert("Erreur : "+r.message);return}document.getElementById("st-form").style.display="none",ge(e)}const R=[{value:"game_changer",label:"⚡ Game Changer",border:"#7a28b8",bg:"linear-gradient(135deg,#4a0080,#7a28b8)"},{value:"ultra_game_changer",label:"💎 Ultra Game Changer",border:"#00bcd4",bg:"linear-gradient(135deg,#006080,#00bcd4)"}],N=[{value:"purple",label:"Violet",hex:"#7a28b8"},{value:"light_blue",label:"Bleu clair",hex:"#00bcd4"}];async function on(e){e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement...</div>';const{data:n}=await y.from("gc_definitions").select("*").order("sort_order").order("created_at");let t=null;const i=[{value:"BOOST_STAT",label:"⚡ Boost stats (+N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"DEBUFF_STAT",label:"💀 Debuff stats (-N)",hasValue:!0,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"GRAY_PLAYER",label:"❄️ Griser un joueur",hasValue:!1,hasTarget:!0,hasCount:!0,hasRoles:!0},{value:"REVIVE_PLAYER",label:"💫 Ressusciter un joueur",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"REMOVE_GOAL",label:"🚫 Retirer un but adverse",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_GOAL_DRAW",label:"⚽ +1 but si duel nul",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1},{value:"ADD_SUB",label:"🔄 Ajouter un remplacement",hasValue:!1,hasTarget:!1,hasCount:!0,hasRoles:!1},{value:"CUSTOM",label:"🛠️ Effet custom (hardcodé)",hasValue:!1,hasTarget:!1,hasCount:!1,hasRoles:!1}],c=["GK","DEF","MIL","ATT"],d=()=>window.innerWidth<700,s=u=>e.querySelector(u);function r(u,h=130){if(!u)return"";const f=R.find($=>$.value===u.gc_type)||R[0],E=N.find($=>$.value===u.color)||N[0],w=Math.round(h*.55),m=Math.round(h*.15),_=Math.round(h*.3);return`<div style="width:${h}px;height:${Math.round(h*1.4)}px;border-radius:10px;border:3px solid ${E.hex};background:${f.bg};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 16px ${E.hex}55;flex-shrink:0">
      <div style="height:${m}px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;padding:0 4px">
        <span style="font-size:${Math.max(8,Math.round(h/11))}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">${u.name||"?"}</span>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u.image_url?`<img src="/icons/${u.image_url}" style="max-height:${w}px;max-width:90%;object-fit:contain">`:`<div style="font-size:${Math.round(h*.3)}px">${f.label.split(" ")[0]}</div>`}
      </div>
      <div style="height:${_}px;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:4px 6px">
        <span style="font-size:${Math.max(7,Math.round(h/13))}px;color:rgba(255,255,255,0.85);text-align:center;line-height:1.3">${(u.effect||"").slice(0,60)}${(u.effect||"").length>60?"…":""}</span>
      </div>
    </div>`}function p(){return`
    <div id="gc-list" style="background:#fff;${d()?"":"border-right:1px solid #e0e0e0;width:280px;flex-shrink:0;"}overflow-y:auto;height:100%">
      <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:1">
        <b style="font-size:14px">Game Changers (${(n||[]).length})</b>
        <button id="btn-new-gc" style="background:#7a28b8;color:#fff;border:none;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:13px;font-weight:700">+ Nouveau</button>
      </div>
      ${(n||[]).map(u=>{const h=R.find(E=>E.value===u.gc_type)||R[0],f=N.find(E=>E.value===u.color)||N[0];return`
        <div class="gc-row" data-id="${u.id}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;background:${u.id===t?"#f5f0ff":"#fff"}">
          <div style="width:36px;height:50px;border-radius:5px;border:2px solid ${f.hex};background:${h.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px">
            ${u.image_url?`<img src="/icons/${u.image_url}" style="width:28px;height:28px;object-fit:contain">`:h.label.split(" ")[0]}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.name}</div>
            <div style="font-size:11px;color:#888">${h.label} · ${u.is_active?"✅ Actif":"⛔ Inactif"}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
            <button class="btn-toggle-gc" data-id="${u.id}" data-active="${u.is_active}"
              style="background:${u.is_active?"#e8f8ee":"#fff0f0"};border:1px solid ${u.is_active?"#27ae60":"#e74c3c"};color:${u.is_active?"#27ae60":"#e74c3c"};border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">${u.is_active?"Désactiver":"Activer"}</button>
            <button class="btn-delete-gc" data-id="${u.id}"
              style="background:#fff0f0;border:1px solid #fcc;color:#e74c3c;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px"
              onclick="event.stopPropagation()">🗑️ Suppr.</button>
          </div>
        </div>`}).join("")}
      ${(n||[]).length?"":'<div style="padding:20px;text-align:center;color:#aaa;font-size:13px">Aucune carte. Cliquez + Nouveau.</div>'}
    </div>`}function o(){const u=t?(n||[]).find(f=>f.id===t):null;if(!u)return`<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:14px;padding:40px;text-align:center">
      ← Sélectionnez une carte ou créez-en une nouvelle
    </div>`;const h=R.find(f=>f.value===u.gc_type)||R[0];return N.find(f=>f.value===u.color)||N[0],`
    <div style="flex:1;overflow-y:auto;background:#f8f8f8;padding:14px">
      ${d()?'<button id="btn-gc-back" style="margin-bottom:12px;background:#eee;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer">← Retour</button>':""}

      <!-- Preview -->
      <div style="display:flex;justify-content:center;margin-bottom:16px;padding:20px;background:${h.bg};border-radius:12px">
        ${r(u,d()?120:150)}
      </div>

      <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;flex-direction:column;gap:12px">

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">NOM</label>
          <input id="gc-name" value="${u.name}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:14px;box-sizing:border-box">
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">EFFET / DESCRIPTION</label>
          <textarea id="gc-effect" rows="3" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;resize:vertical">${u.effect||""}</textarea>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">TYPE</label>
            <select id="gc-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${R.map(f=>`<option value="${f.value}" ${u.gc_type===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">COULEUR</label>
            <select id="gc-color" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px">
              ${N.map(f=>`<option value="${f.value}" ${u.color===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div>
          <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">IMAGE (public/icons/gamechanger-*)</label>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="gc-image-url" value="${u.image_url||""}" placeholder="gamechanger-nom.png" style="flex:1;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;min-width:0">
            <button id="btn-pick-gc-icon" style="background:#3498db;color:#fff;border:none;border-radius:6px;padding:9px 12px;cursor:pointer;font-size:12px;white-space:nowrap;flex-shrink:0">🖼️ Choisir</button>
          </div>
          <div id="gc-icon-picker" style="display:none;margin-top:10px;padding:12px;background:#f5f5f5;border-radius:8px;border:1px solid #ddd"></div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;letter-spacing:1px;display:block;margin-bottom:4px">ORDRE</label>
            <input id="gc-sort" type="number" value="${u.sort_order||0}" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box">
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding-top:20px">
            <input type="checkbox" id="gc-active" ${u.is_active?"checked":""} style="width:18px;height:18px;cursor:pointer">
            <label for="gc-active" style="font-size:13px;cursor:pointer;font-weight:600">Actif</label>
          </div>
        </div>

        <!-- Effet paramétrique -->
        <div style="border-top:1px solid #eee;padding-top:12px;margin-top:4px">
          <label style="font-size:11px;color:#7a28b8;font-weight:700;letter-spacing:1px;display:block;margin-bottom:8px">EFFET EN JEU</label>
          <div>
            <label style="font-size:11px;color:#666;font-weight:700;display:block;margin-bottom:4px">TYPE D'EFFET</label>
            <select id="gc-effect-type" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:6px;font-size:13px;margin-bottom:10px">
              ${i.map(f=>`<option value="${f.value}" ${(u.effect_type||"BOOST_STAT")===f.value?"selected":""}>${f.label}</option>`).join("")}
            </select>
          </div>
          ${(()=>{const f=u.effect_params||{},E=i.find(w=>w.value===(u.effect_type||"BOOST_STAT"))||i[0];return`
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              ${E.hasValue?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">VALEUR (+N)</label>
                <input id="gc-p-value" type="number" min="1" max="5" value="${f.value||2}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasCount?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">NB JOUEURS</label>
                <input id="gc-p-count" type="number" min="1" max="11" value="${f.count||1}" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px;box-sizing:border-box">
              </div>`:""}
              ${E.hasTarget?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">CIBLE</label>
                <select id="gc-p-target" style="width:100%;padding:7px;border:1px solid #ddd;border-radius:4px;font-size:13px">
                  <option value="home" ${(f.target||"home")==="home"?"selected":""}>Mon équipe</option>
                  <option value="opponent" ${f.target==="opponent"?"selected":""}>Équipe adverse</option>
                </select>
              </div>`:""}
              ${E.hasRoles?`<div>
                <label style="font-size:10px;color:#666;font-weight:700;display:block;margin-bottom:3px">POSTES CIBLÉS</label>
                <div style="display:flex;gap:4px;flex-wrap:wrap">
                  ${c.map(w=>`<label style="display:flex;align-items:center;gap:2px;font-size:11px;cursor:pointer">
                    <input type="checkbox" class="gc-p-role" value="${w}" ${!f.roles||f.roles.includes(w)?"checked":""}> ${w}
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
      ${!d()||!t?p():""}
      ${!d()||t?o():""}
    </div>`,l()}function l(){var u,h,f,E,w;e.querySelectorAll(".gc-row").forEach(m=>{m.addEventListener("click",_=>{_.target.closest(".btn-toggle-gc,.btn-delete-gc")||(t=m.dataset.id,a())})}),(u=s("#btn-gc-back"))==null||u.addEventListener("click",()=>{t=null,a()}),(h=s("#btn-cancel-gc"))==null||h.addEventListener("click",()=>{t=null,a()}),(f=s("#btn-new-gc"))==null||f.addEventListener("click",async()=>{const m=prompt("Nom de la carte Game Changer :");if(!(m!=null&&m.trim()))return;const{data:_,error:$}=await y.from("gc_definitions").insert({name:m.trim(),gc_type:"game_changer",color:"purple"}).select().single();if($){alert($.message);return}n.push(_),t=_.id,a()}),e.querySelectorAll(".btn-toggle-gc").forEach(m=>{m.addEventListener("click",async _=>{_.stopPropagation();const $=m.dataset.active!=="true";await y.from("gc_definitions").update({is_active:$}).eq("id",m.dataset.id);const v=n.find(g=>g.id===m.dataset.id);v&&(v.is_active=$),a()})}),e.querySelectorAll(".btn-delete-gc").forEach(m=>{m.addEventListener("click",async _=>{if(_.stopPropagation(),!confirm("Supprimer cette carte Game Changer ?"))return;await y.from("gc_definitions").delete().eq("id",m.dataset.id);const $=n.findIndex(v=>v.id===m.dataset.id);$>-1&&n.splice($,1),t===m.dataset.id&&(t=null),a()})}),(E=s("#btn-pick-gc-icon"))==null||E.addEventListener("click",async()=>{var _;const m=s("#gc-icon-picker");if(m){if(m.style.display!=="none"){m.style.display="none";return}m.innerHTML='<div style="padding:10px;text-align:center;color:#888;font-size:12px">⏳ Chargement...</div>',m.style.display="block";try{const v=await(await fetch("https://api.github.com/repos/iamtsuba/manager-wars/contents/public/icons")).json(),g=Array.isArray(v)?v.filter(x=>x.name.startsWith("gamechanger-")&&/\.(png|jpg|svg|webp)$/i.test(x.name)):[];if(!g.length){m.innerHTML='<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Aucun fichier "gamechanger-*" trouvé dans public/icons/</div>';return}const b=((_=s("#gc-image-url"))==null?void 0:_.value)||"";m.innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:8px">
          ${g.map(x=>`
          <div class="gc-icon-item" data-name="${x.name}"
            style="cursor:pointer;text-align:center;padding:6px;border-radius:6px;border:2px solid ${x.name===b?"#7a28b8":"#ddd"};background:${x.name===b?"#f5f0ff":"#fff"}">
            <img src="/icons/${x.name}" style="height:44px;width:100%;object-fit:contain">
            <div style="font-size:8px;color:#666;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.name.replace(/\.(png|jpg|svg|webp)$/i,"").replace("gamechanger-","")}</div>
          </div>`).join("")}
        </div>`,m.querySelectorAll(".gc-icon-item").forEach(x=>{x.addEventListener("click",()=>{const k=s("#gc-image-url");k&&(k.value=x.dataset.name),m.style.display="none"})})}catch($){m.innerHTML=`<div style="padding:10px;text-align:center;color:#e74c3c;font-size:12px">Erreur API GitHub : ${$.message}</div>`}}}),(w=s("#btn-save-gc"))==null||w.addEventListener("click",async()=>{var x,k,L,I,C,M,j,G,U,V,K,J,Y,W;const m=n.find(S=>S.id===t);if(!m)return;const _=i.find(S=>{var B;return S.value===(((B=s("#gc-effect-type"))==null?void 0:B.value)||"BOOST_STAT")})||i[0],$=_.hasRoles?[...e.querySelectorAll(".gc-p-role:checked")].map(S=>S.value):null,v={..._.hasValue?{value:Number((x=s("#gc-p-value"))==null?void 0:x.value)||2}:{},..._.hasCount?{count:Number((k=s("#gc-p-count"))==null?void 0:k.value)||1}:{},..._.hasTarget?{target:((L=s("#gc-p-target"))==null?void 0:L.value)||"home"}:{},..._.hasRoles?{roles:$!=null&&$.length?$:null}:{}},g={name:((C=(I=s("#gc-name"))==null?void 0:I.value)==null?void 0:C.trim())||m.name,effect:((j=(M=s("#gc-effect"))==null?void 0:M.value)==null?void 0:j.trim())||null,image_url:((U=(G=s("#gc-image-url"))==null?void 0:G.value)==null?void 0:U.trim())||null,gc_type:((V=s("#gc-type"))==null?void 0:V.value)||"game_changer",color:((K=s("#gc-color"))==null?void 0:K.value)||"purple",sort_order:Number((J=s("#gc-sort"))==null?void 0:J.value)||0,is_active:((Y=s("#gc-active"))==null?void 0:Y.checked)??m.is_active,effect_type:((W=s("#gc-effect-type"))==null?void 0:W.value)||"BOOST_STAT",effect_params:v},{error:b}=await y.from("gc_definitions").update(g).eq("id",t);if(b){alert(b.message);return}Object.assign(m,g),alert("✅ Carte enregistrée !"),a()})}a()}async function an(e,{toast:n,openModal:t,closeModal:i}){await F(e,{toast:n,openModal:t,closeModal:i})}async function F(e,n){var v;const{toast:t,openModal:i,closeModal:c}=n,[{data:d,error:s},{data:r}]=await Promise.all([y.from("ranked_seasons").select("*").order("start_at",{ascending:!1}),y.from("users").select("mmr,rank_tier,placement_matches").gte("placement_matches",1)]);if(s){e.innerHTML=`<p style="color:red">${s.message}</p>`;return}const p=d||[],o=p.find(g=>g.is_active),a=(r||[]).filter(g=>(g.placement_matches||0)>=1),l=a.filter(g=>(g.placement_matches||0)>=10),u=["bronze","silver","gold","platinum","diamond","master"],h={bronze:"Bronze",silver:"Argent",gold:"Or",platinum:"Platine",diamond:"Diamant",master:"Maître"},f={bronze:"#cd7f32",silver:"#a0a0a0",gold:"#D4A017",platinum:"#00e5ff",diamond:"#5b9bd5",master:"#9b59b6"},E={bronze:"🥉",silver:"🥈",gold:"🥇",platinum:"💎",diamond:"🔷",master:"👑"},w={};u.forEach(g=>{w[g]=0}),l.forEach(g=>{const b=g.rank_tier||"bronze";w[b]!==void 0&&w[b]++});const m=l.length?Math.round(l.reduce((g,b)=>g+(b.mmr||1e3),0)/l.length):0;function _(g){return g?new Date(g).toLocaleDateString("fr",{day:"numeric",month:"short",year:"numeric"}):"—"}function $(g){const b=new Date;return g.is_active?'<span style="background:#1A6B3C;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700">● ACTIVE</span>':new Date(g.end_at)<b?'<span style="background:#555;color:#ccc;padding:2px 8px;border-radius:10px;font-size:11px">Terminée</span>':'<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px">À venir</span>'}e.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Stats live saison active -->
      ${o?`
      <div class="card-panel" style="background:linear-gradient(135deg,#0a3d1e,#1a6b3c20);border:1.5px solid #1A6B3C40">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">📊 Saison active : ${o.name}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:14px">
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${a.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Joueurs ranked</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${l.length}</div>
            <div style="font-size:11px;color:var(--gray-600)">Classés (10+ matchs)</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${m}</div>
            <div style="font-size:11px;color:var(--gray-600)">MMR moyen</div>
          </div>
          <div style="text-align:center;background:rgba(255,255,255,0.05);border-radius:10px;padding:10px">
            <div style="font-size:22px;font-weight:900">${Math.max(0,Math.ceil((new Date(o.end_at)-new Date)/864e5))}</div>
            <div style="font-size:11px;color:var(--gray-600)">Jours restants</div>
          </div>
        </div>
        <!-- Distribution tiers -->
        ${l.length>0?`
        <div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--gray-600)">Distribution des tiers</div>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${u.map(g=>{const b=w[g],x=l.length>0?Math.round(b/l.length*100):0;return`
              <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                <span style="width:80px">${E[g]} ${h[g]}</span>
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
        <div style="font-weight:700;font-size:14px">Toutes les saisons (${p.length})</div>
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
              ${p.length===0?'<tr><td colspan="6" style="text-align:center;color:var(--gray-600);padding:24px">Aucune saison créée.</td></tr>':p.map(g=>{const b=Math.round((new Date(g.end_at)-new Date(g.start_at))/864e5),x=new Date(g.end_at)<new Date&&!g.is_active;return`
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
    </div>`,(v=document.getElementById("create-season-btn"))==null||v.addEventListener("click",()=>{Se(null,{toast:t,openModal:i,closeModal:c,reload:()=>F(e,n)})}),e.querySelectorAll("[data-edit]").forEach(g=>{const b=p.find(x=>x.id==g.dataset.edit);g.addEventListener("click",()=>{Se(b,{toast:t,openModal:i,closeModal:c,reload:()=>F(e,n)})})}),e.querySelectorAll("[data-activate]").forEach(g=>{g.addEventListener("click",async()=>{const b=parseInt(g.dataset.activate);if(!confirm("Activer cette saison ? La saison actuellement active sera désactivée."))return;const{error:x}=await y.from("ranked_seasons").update({is_active:!1}).neq("id",0);if(x){t(x.message,"error");return}const{error:k}=await y.from("ranked_seasons").update({is_active:!0}).eq("id",b);if(k){t(k.message,"error");return}await y.from("users").update({current_season_id:b}).gt("placement_matches",0),t("Saison activée ✅","success"),F(e,n)})}),e.querySelectorAll("[data-deactivate]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Désactiver la saison active ? Le mode Ranked sera suspendu."))return;const{error:b}=await y.from("ranked_seasons").update({is_active:!1}).eq("id",parseInt(g.dataset.deactivate));if(b){t(b.message,"error");return}t("Saison désactivée","success"),F(e,n)})}),e.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",async()=>{if(!confirm("Supprimer cette saison archivée ?"))return;const{error:b}=await y.from("ranked_seasons").delete().eq("id",parseInt(g.dataset.delete));if(b){t(b.message,"error");return}t("Saison supprimée","success"),F(e,n)})})}function Se(e,{toast:n,openModal:t,closeModal:i,reload:c}){const d=!!e,s=new Date().toISOString().slice(0,16),r=new Date(Date.now()+90*864e5).toISOString().slice(0,16),p=e?new Date(e.start_at).toISOString().slice(0,16):s,o=e?new Date(e.end_at).toISOString().slice(0,16):r,a=(e==null?void 0:e.name)||"";t(d?"✏️ Modifier la saison":"➕ Nouvelle saison",`<div style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group">
        <label>Nom de la saison *</label>
        <input id="season-name" type="text" value="${a}" placeholder="ex: Saison 2 — Été 2026" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de début *</label>
        <input id="season-start" type="datetime-local" value="${p}" style="width:100%">
      </div>
      <div class="form-group">
        <label>Date de fin *</label>
        <input id="season-end" type="datetime-local" value="${o}" style="width:100%">
        <div id="season-duration" style="font-size:11px;color:var(--gray-600);margin-top:4px"></div>
      </div>
      <div id="season-error" style="color:#bb2020;font-size:13px"></div>
      <button class="btn btn-primary" id="season-save-btn">${d?"💾 Enregistrer":"✅ Créer la saison"}</button>
    </div>`);function l(){var w,m;const u=(w=document.getElementById("season-start"))==null?void 0:w.value,h=(m=document.getElementById("season-end"))==null?void 0:m.value,f=document.getElementById("season-duration");if(!u||!h||!f)return;const E=Math.round((new Date(h)-new Date(u))/864e5);f.textContent=E>0?`Durée : ${E} jour${E>1?"s":""}`:"⚠️ La fin doit être après le début",f.style.color=E>0?"var(--gray-600)":"#bb2020"}setTimeout(()=>{var u,h,f;(u=document.getElementById("season-start"))==null||u.addEventListener("input",l),(h=document.getElementById("season-end"))==null||h.addEventListener("input",l),l(),(f=document.getElementById("season-save-btn"))==null||f.addEventListener("click",async()=>{var b,x,k;const E=(b=document.getElementById("season-name"))==null?void 0:b.value.trim(),w=(x=document.getElementById("season-start"))==null?void 0:x.value,m=(k=document.getElementById("season-end"))==null?void 0:k.value,_=document.getElementById("season-error");if(!E){_.textContent="Le nom est requis.";return}if(!w){_.textContent="La date de début est requise.";return}if(!m){_.textContent="La date de fin est requise.";return}if(new Date(m)<=new Date(w)){_.textContent="La date de fin doit être après le début.";return}const $=document.getElementById("season-save-btn");$.disabled=!0,$.textContent="Enregistrement…";const v={name:E,start_at:new Date(w).toISOString(),end_at:new Date(m).toISOString()};let g;if(d?{error:g}=await y.from("ranked_seasons").update(v).eq("id",e.id):{error:g}=await y.from("ranked_seasons").insert({...v,is_active:!1}),g){_.textContent=g.message,$.disabled=!1,$.textContent=d?"💾 Enregistrer":"✅ Créer la saison";return}n(d?"Saison modifiée ✅":"Saison créée ✅","success"),i(),c()})},50)}dt(Ne);function rn(e,n="info"){const t=document.getElementById("toast");t.textContent=e,t.className=`show ${n}`,clearTimeout(t._t),t._t=setTimeout(()=>{t.className=""},3e3)}function ln(e,n,t=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=n,document.getElementById("modal-footer").innerHTML=t,document.getElementById("modal-overlay").classList.remove("hidden")}function ce(){document.getElementById("modal-overlay").classList.add("hidden")}const Te={dashboard:{title:"Dashboard",fn:ct},players:{title:"Joueurs & Cartes",fn:mt},clubs:{title:"Clubs",fn:$t},"card-builder":{title:"Card Builder",fn:zt},users:{title:"Managers",fn:Ve},market:{title:"Marché des transferts",fn:Ke},"import-export":{title:"Import / Export CSV",fn:Mt},formations:{title:"Formations & Liens",fn:Rt},"boosters-config":{title:"Boosters",fn:qt},"sell-price":{title:"Prix vente directe",fn:Ot},journal:{title:"Journal",fn:Gt},tutorial:{title:"Tutoriel",fn:Kt},stadiums:{title:"Stades",fn:Qt},"gc-cards":{title:"Game Changers",fn:on},"ranked-seasons":{title:"Saisons Ranked",fn:an}};async function re(e){document.querySelectorAll(".admin-sidebar nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===e)});const n=document.getElementById("mobile-page-select");n&&(n.value=e);const t=Te[e]||Te.dashboard;document.getElementById("page-title").textContent=t.title;const i=document.getElementById("page-content");i.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">Chargement…</div>';try{await t.fn(i,{toast:rn,openModal:ln,closeModal:ce,navigate:re})}catch(c){i.innerHTML=`<div style="padding:40px;color:#c0392b">Erreur: ${c.message}</div>`,console.error(c)}}async function sn(){var n;const{data:{session:e}}=await y.auth.getSession();e&&await Me(e.user),document.getElementById("auth-btn").addEventListener("click",async()=>{const t=document.getElementById("auth-email").value.trim(),i=document.getElementById("auth-password").value,c=document.getElementById("auth-error");if(c.textContent="",!t||!i){c.textContent="Remplissez tous les champs.";return}const{data:d,error:s}=await y.auth.signInWithPassword({email:t,password:i});if(s){c.textContent=s.message;return}await Me(d.user)}),document.getElementById("auth-password").addEventListener("keydown",t=>{t.key==="Enter"&&document.getElementById("auth-btn").click()}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),document.getElementById("auth-screen").style.display="flex",document.getElementById("admin-app").style.display="none"}),document.getElementById("modal-close").addEventListener("click",ce),document.getElementById("modal-overlay").addEventListener("click",t=>{t.target===t.currentTarget&&ce()}),document.querySelectorAll(".admin-sidebar nav a").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),re(t.dataset.page)})}),(n=document.getElementById("mobile-page-select"))==null||n.addEventListener("change",t=>{re(t.target.value)})}async function Me(e){const{data:n,error:t}=await y.from("users").select("*").eq("id",e.id).single(),i=document.getElementById("auth-error");if(t||!n){i.textContent="Profil introuvable.";return}if(!n.is_admin){i.textContent="Accès refusé. Vous n'êtes pas administrateur.",await y.auth.signOut();return}document.getElementById("auth-screen").style.display="none",document.getElementById("admin-app").style.display="flex",document.getElementById("admin-user").textContent=`Admin: ${n.pseudo}`,re("dashboard")}sn();
